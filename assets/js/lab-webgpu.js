// WebGPU particle field: a compute pass integrates 65k particles, a render pass draws them
// as additive instanced quads. Particle data lives only on the GPU.
const canvas = document.getElementById('lab-gpu');
const fallback = document.querySelector('.lab__fallback');
const N = 65536;

const common = /* wgsl */ `
struct P { pos: vec2f, vel: vec2f };
struct U { mouse: vec2f, aspect: f32, time: f32, dt: f32, push: f32, hover: f32, pad: f32 };
`;

const simCode = common + /* wgsl */ `
@group(0) @binding(0) var<storage, read_write> ps: array<P>;
@group(0) @binding(1) var<uniform> u: U;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id: vec3u) {
  let i = id.x;
  if (i >= arrayLength(&ps)) { return; }
  var p = ps[i];
  let q = p.pos * 2.0;
  var acc = vec2f(sin(q.y * 1.7 + u.time * 0.4), cos(q.x * 1.3 - u.time * 0.3));
  let d = u.mouse - p.pos;
  acc += u.hover * (1.0 - 2.0 * u.push) * d / (dot(d, d) + 0.02) * 0.6;
  p.vel = p.vel * 0.98 + acc * u.dt;
  let s = length(p.vel);
  if (s > 3.0) { p.vel *= 3.0 / s; }
  p.pos += p.vel * u.dt;
  let b = vec2f(u.aspect, 1.0);
  p.pos = (fract((p.pos + b) / (2.0 * b)) * 2.0 - 1.0) * b;
  ps[i] = p;
}`;

const drawCode = common + /* wgsl */ `
@group(0) @binding(0) var<storage, read> ps: array<P>;
@group(0) @binding(1) var<uniform> u: U;

struct VO { @builtin(position) pos: vec4f, @location(0) uv: vec2f, @location(1) col: vec3f };

@vertex
fn vs(@builtin(vertex_index) vi: u32, @builtin(instance_index) ii: u32) -> VO {
  var corners = array<vec2f, 6>(vec2f(-1, -1), vec2f(1, -1), vec2f(-1, 1), vec2f(-1, 1), vec2f(1, -1), vec2f(1, 1));
  let c = corners[vi];
  let p = ps[ii];
  var o: VO;
  o.pos = vec4f((p.pos + c * 0.006) / vec2f(u.aspect, 1.0), 0.0, 1.0);
  o.uv = c;
  o.col = mix(vec3f(0.30, 0.34, 0.95), vec3f(0.99, 0.64, 0.07), clamp(length(p.vel) * 0.5, 0.0, 1.0));
  return o;
}

@fragment
fn fs(i: VO) -> @location(0) vec4f {
  let a = max(0.0, 1.0 - dot(i.uv, i.uv)) * 0.45;
  return vec4f(i.col * a, a);
}`;

function fail() {
  fallback.hidden = false;
}

async function start() {
  const adapter = await navigator.gpu?.requestAdapter();
  const device = await adapter?.requestDevice();
  if (!device) return fail();
  device.lost.then(fail);
  device.addEventListener("uncapturederror", (e) => { console.error(e.error.message); fail(); });

  const ctx = canvas.getContext('webgpu');
  const format = navigator.gpu.getPreferredCanvasFormat();
  ctx.configure({ device, format, alphaMode: 'opaque' });

  const dpr = Math.min(devicePixelRatio || 1, 2);
  let aspect = 1;
  const resize = () => {
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    aspect = canvas.width / canvas.height;
  };
  resize();
  addEventListener('resize', resize);

  const init = new Float32Array(N * 4);
  for (let i = 0; i < N; i++) {
    init[i * 4] = (Math.random() * 2 - 1) * aspect;
    init[i * 4 + 1] = Math.random() * 2 - 1;
  }
  const particles = device.createBuffer({ size: init.byteLength, usage: GPUBufferUsage.STORAGE, mappedAtCreation: true });
  new Float32Array(particles.getMappedRange()).set(init);
  particles.unmap();

  const uniforms = new Float32Array(8);
  const ubo = device.createBuffer({ size: uniforms.byteLength, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });

  const sim = device.createComputePipeline({
    layout: 'auto',
    compute: { module: device.createShaderModule({ code: simCode }), entryPoint: 'main' },
  });
  const drawModule = device.createShaderModule({ code: drawCode });
  const add = { srcFactor: 'one', dstFactor: 'one', operation: 'add' };
  const draw = device.createRenderPipeline({
    layout: 'auto',
    vertex: { module: drawModule, entryPoint: 'vs' },
    fragment: { module: drawModule, entryPoint: 'fs', targets: [{ format, blend: { color: add, alpha: add } }] },
  });
  const bind = (pipeline) => device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [{ binding: 0, resource: { buffer: particles } }, { binding: 1, resource: { buffer: ubo } }],
  });
  const simGroup = bind(sim);
  const drawGroup = bind(draw);

  const pointer = { x: 0, y: 0, active: 0, push: 0 };
  const toSpace = (e) => {
    const r = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width * 2 - 1) * aspect;
    pointer.y = -((e.clientY - r.top) / r.height * 2 - 1);
    pointer.active = 1;
    kick();
  };
  canvas.addEventListener('pointermove', toSpace);
  canvas.addEventListener('pointerdown', (e) => { pointer.push = 1; toSpace(e); });
  addEventListener('pointerup', () => { pointer.push = 0; });
  canvas.addEventListener('pointerleave', () => { pointer.active = 0; pointer.push = 0; });

  // Respect reduced motion: only animate while the user is interacting.
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let running = false, visible = true, last = performance.now(), idle = 0;

  function frame(now) {
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    uniforms.set([pointer.x, pointer.y, aspect, now / 1000, dt, pointer.push, pointer.active, 0]);
    device.queue.writeBuffer(ubo, 0, uniforms);

    const enc = device.createCommandEncoder();
    const cp = enc.beginComputePass();
    cp.setPipeline(sim);
    cp.setBindGroup(0, simGroup);
    cp.dispatchWorkgroups(Math.ceil(N / 64));
    cp.end();
    const rp = enc.beginRenderPass({
      colorAttachments: [{ view: ctx.getCurrentTexture().createView(), clearValue: { r: 0.02, g: 0.024, b: 0.05, a: 1 }, loadOp: 'clear', storeOp: 'store' }],
    });
    rp.setPipeline(draw);
    rp.setBindGroup(0, drawGroup);
    rp.draw(6, N);
    rp.end();
    device.queue.submit([enc.finish()]);

    idle = pointer.active ? 0 : idle + 1;
    running = visible && !document.hidden && (!reduced || idle < 60);
    if (running) requestAnimationFrame(frame);
  }

  function kick() {
    if (running || !visible || document.hidden) return;
    running = true;
    last = performance.now();
    requestAnimationFrame(frame);
  }

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }).observe(canvas);
  document.addEventListener('visibilitychange', kick);
}

start().catch((err) => { console.error(err); fail(); });
