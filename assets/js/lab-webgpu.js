// WebGPU field of small 3D objects (spheres or cubes): a compute pass integrates the physics,
// a render pass draws lit instances with a depth buffer. Object data lives only on the GPU.
// Interaction is press-only: a tap sends a shockwave, holding gathers the objects.
const canvas = document.querySelector('[data-lab-canvas]');
const fallback = document.querySelector('[data-lab-fallback]');
const N = 32768; // max objects, the "count" control draws a subset

const common = /* wgsl */ `
struct P { pos: vec2f, vel: vec2f };
struct U {
  mouse: vec2f, aspect: f32, time: f32, dt: f32, press: f32, shock: f32, flow: f32,
  flowSpeed: f32, force: f32, damping: f32, maxSpeed: f32, size: f32, p0: f32, p1: f32, p2: f32,
  colA: vec4f, colB: vec4f,
};
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
  let t = u.time * u.flowSpeed;
  var acc = u.flow * 0.3 * vec2f(sin(q.y * 1.7 + t * 0.4), cos(q.x * 1.3 - t * 0.3));
  let d = p.pos - u.mouse;
  let r2 = dot(d, d) + 0.01;
  acc += u.shock * u.force * d / r2 * 4.0;          // tap: push away
  acc -= u.press * u.force * d / (r2 + 0.05) * 1.5; // hold: gather
  p.vel = p.vel * u.damping + acc * u.dt;
  let s = length(p.vel);
  if (s > u.maxSpeed) { p.vel *= u.maxSpeed / s; }
  p.pos += p.vel * u.dt;
  let b = vec2f(u.aspect, 1.0);
  p.pos = (fract((p.pos + b) / (2.0 * b)) * 2.0 - 1.0) * b;
  ps[i] = p;
}`;

const drawCode = common + /* wgsl */ `
@group(0) @binding(0) var<storage, read> ps: array<P>;
@group(0) @binding(1) var<uniform> u: U;

struct VO {
  @builtin(position) pos: vec4f,
  @location(0) uv: vec2f,
  @location(1) col: vec3f,
  @location(2) n: vec3f,
  @location(3) @interpolate(flat) depth: f32,
  @location(4) @interpolate(flat) radius: f32,
};

fn hash(i: u32) -> f32 {
  var x = i * 747796405u + 2891336453u;
  x = ((x >> ((x >> 28u) + 4u)) ^ x) * 277803737u;
  return f32((x >> 22u) ^ x) / 4294967295.0;
}

// Per-instance data shared by both shapes. k fakes perspective: nearer objects are bigger and lighter.
struct Inst { pos: vec2f, vel: vec2f, k: f32, depth: f32, col: vec3f };
fn inst(ii: u32) -> Inst {
  let p = ps[ii];
  let z = hash(ii * 3u) * 2.0 - 1.0;
  var o: Inst;
  o.pos = p.pos;
  o.vel = p.vel;
  o.k = 1.0 + 0.4 * z;
  o.depth = 0.5 - 0.4 * z;
  o.col = mix(u.colA.rgb, u.colB.rgb, clamp(length(p.vel) * 0.6, 0.0, 1.0)) * (0.7 + 0.3 * o.k);
  return o;
}

fn shade(col: vec3f, n: vec3f) -> vec3f {
  let l = normalize(vec3f(-0.4, 0.6, 0.7));
  let h = normalize(l + vec3f(0.0, 0.0, 1.0));
  return col * (0.22 + 0.78 * max(dot(n, l), 0.0)) + pow(max(dot(n, h), 0.0), 40.0) * 0.6;
}

fn rot(a: vec3f, v: vec3f) -> vec3f {
  let cx = cos(a.x); let sx = sin(a.x);
  let cy = cos(a.y); let sy = sin(a.y);
  let cz = cos(a.z); let sz = sin(a.z);
  var r = vec3f(v.x, v.y * cx - v.z * sx, v.y * sx + v.z * cx);
  r = vec3f(r.x * cy + r.z * sy, r.y, -r.x * sy + r.z * cy);
  return vec3f(r.x * cz - r.y * sz, r.x * sz + r.y * cz, r.z);
}

fn corner(i: u32) -> vec2f {
  var q = array<vec2f, 6>(vec2f(-1, -1), vec2f(1, -1), vec2f(-1, 1), vec2f(-1, 1), vec2f(1, -1), vec2f(1, 1));
  return q[i];
}

// Spheres: camera-facing quads shaded as spheres in the fragment shader (impostors).
@vertex
fn vsSphere(@builtin(vertex_index) vi: u32, @builtin(instance_index) ii: u32) -> VO {
  let s = inst(ii);
  let c = corner(vi);
  let r = u.size * 0.001 * s.k;
  var o: VO;
  o.pos = vec4f((s.pos + c * r) / vec2f(u.aspect, 1.0), s.depth, 1.0);
  o.uv = c;
  o.col = s.col;
  o.depth = s.depth;
  o.radius = r;
  return o;
}

struct FO { @location(0) col: vec4f, @builtin(frag_depth) depth: f32 };

@fragment
fn fsSphere(i: VO) -> FO {
  let r2 = dot(i.uv, i.uv);
  if (r2 > 1.0) { discard; }
  let n = vec3f(i.uv, sqrt(1.0 - r2));
  var o: FO;
  o.col = vec4f(shade(i.col, n), 1.0);
  o.depth = i.depth - n.z * i.radius * 0.5;
  return o;
}

// Cubes: 36 vertices built from the face table, rotation follows position so they roll as they move.
@vertex
fn vsCube(@builtin(vertex_index) vi: u32, @builtin(instance_index) ii: u32) -> VO {
  let s = inst(ii);
  var faces = array<vec3f, 6>(vec3f(1, 0, 0), vec3f(-1, 0, 0), vec3f(0, 1, 0), vec3f(0, -1, 0), vec3f(0, 0, 1), vec3f(0, 0, -1));
  let n0 = faces[vi / 6u];
  let t = n0.yzx;
  let c = corner(vi % 6u);
  let a = vec3f(s.pos.y * 3.0, s.pos.x * 3.0, u.time * 0.2) + vec3f(hash(ii * 3u + 1u), hash(ii * 3u + 2u), 0.0) * 6.2832;
  let hs = u.size * 0.001 * s.k * 0.8;
  let v = rot(a, n0 + c.x * t + c.y * cross(n0, t)) * hs;
  var o: VO;
  o.pos = vec4f((s.pos + v.xy) / vec2f(u.aspect, 1.0), s.depth - v.z * 0.5, 1.0);
  o.col = s.col;
  o.n = rot(a, n0);
  return o;
}

@fragment
fn fsCube(i: VO) -> @location(0) vec4f {
  return vec4f(shade(i.col, normalize(i.n)), 1.0);
}`;

function fail() {
  fallback.hidden = false;
}

async function start() {
  const adapter = await navigator.gpu?.requestAdapter();
  const device = await adapter?.requestDevice();
  if (!device) return fail();
  device.lost.then(fail);
  device.addEventListener('uncapturederror', (e) => { console.error(e.error.message); fail(); });

  const ctx = canvas.getContext('webgpu');
  const format = navigator.gpu.getPreferredCanvasFormat();
  ctx.configure({ device, format, alphaMode: 'opaque' });

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let aspect = 1, depthTex;
  const resize = () => {
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    aspect = canvas.width / canvas.height;
    depthTex?.destroy();
    depthTex = device.createTexture({ size: [canvas.width, canvas.height], format: 'depth24plus', usage: GPUTextureUsage.RENDER_ATTACHMENT });
    kick();
  };

  const init = new Float32Array(N * 4);
  const particles = device.createBuffer({ size: init.byteLength, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST });
  const uniforms = new Float32Array(24);
  const ubo = device.createBuffer({ size: uniforms.byteLength, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });

  const sim = device.createComputePipeline({
    layout: 'auto',
    compute: { module: device.createShaderModule({ code: simCode }), entryPoint: 'main' },
  });
  const drawModule = device.createShaderModule({ code: drawCode });
  const pipeline = (vs, fs) => device.createRenderPipeline({
    layout: 'auto',
    vertex: { module: drawModule, entryPoint: vs },
    fragment: { module: drawModule, entryPoint: fs, targets: [{ format }] },
    depthStencil: { format: 'depth24plus', depthWriteEnabled: true, depthCompare: 'less' },
  });
  const bind = (p) => device.createBindGroup({
    layout: p.getBindGroupLayout(0),
    entries: [{ binding: 0, resource: { buffer: particles } }, { binding: 1, resource: { buffer: ubo } }],
  });
  const shapes = {
    sphere: { pipeline: pipeline('vsSphere', 'fsSphere'), verts: 6 },
    cube: { pipeline: pipeline('vsCube', 'fsCube'), verts: 36 },
  };
  for (const s of Object.values(shapes)) s.group = bind(s.pipeline);
  const simGroup = bind(sim);

  // Press-only pointer: shock is a one-off burst that decays, press ramps up while held.
  const pointer = { x: 0, y: 0, down: false, shock: 0, press: 0 };
  const toSpace = (e) => {
    const r = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width * 2 - 1) * aspect;
    pointer.y = -((e.clientY - r.top) / r.height * 2 - 1);
  };
  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    toSpace(e);
    pointer.down = true;
    pointer.shock = 1;
    pointer.press = 0;
    kick();
  });
  canvas.addEventListener('pointermove', (e) => { if (pointer.down) toSpace(e); });
  const release = () => { pointer.down = false; };
  canvas.addEventListener('pointerup', release);
  canvas.addEventListener('pointercancel', release);

  // Live settings from the controls panel; the form's default values are the defaults.
  const form = document.querySelector('[data-lab-controls]');
  const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const cfg = {};
  const read = () => {
    for (const el of form.elements) {
      if (!el.name) continue;
      cfg[el.name] = el.type === 'color' ? hex(el.value) : el.tagName === 'SELECT' ? el.value : +el.value;
      if (el.previousElementSibling?.tagName === 'OUTPUT') el.previousElementSibling.value = el.value;
    }
    idle = 0;
    kick();
  };
  form.addEventListener('input', read);
  form.addEventListener('reset', () => setTimeout(read)); // reset fires before values change

  // Respect reduced motion: only animate while the user is interacting.
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let running = false, visible = true, last = performance.now(), idle = 0;

  function frame(now) {
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    pointer.press = pointer.down ? Math.min(pointer.press + dt * 2.5, 1) : 0;
    uniforms.set([
      pointer.x, pointer.y, aspect, now / 1000, dt, pointer.press, pointer.shock, cfg.flow,
      cfg.flowSpeed, cfg.force, cfg.damping, cfg.maxSpeed, cfg.size, 0, 0, 0,
      ...cfg.colA, 1, ...cfg.colB, 1,
    ]);
    pointer.shock *= 0.8;
    device.queue.writeBuffer(ubo, 0, uniforms);

    const shape = shapes[cfg.shape] || shapes.sphere;
    const enc = device.createCommandEncoder();
    const cp = enc.beginComputePass();
    cp.setPipeline(sim);
    cp.setBindGroup(0, simGroup);
    cp.dispatchWorkgroups(Math.ceil(cfg.count / 64));
    cp.end();
    const rp = enc.beginRenderPass({
      colorAttachments: [{ view: ctx.getCurrentTexture().createView(), clearValue: { r: 0.02, g: 0.024, b: 0.05, a: 1 }, loadOp: 'clear', storeOp: 'store' }],
      depthStencilAttachment: { view: depthTex.createView(), depthClearValue: 1, depthLoadOp: 'clear', depthStoreOp: 'discard' },
    });
    rp.setPipeline(shape.pipeline);
    rp.setBindGroup(0, shape.group);
    rp.draw(shape.verts, cfg.count);
    rp.end();
    device.queue.submit([enc.finish()]);

    idle = pointer.down || pointer.shock > 0.01 ? 0 : idle + 1;
    running = visible && !document.hidden && (!reduced || idle < 60);
    if (running) requestAnimationFrame(frame);
  }

  function kick() {
    if (running || !visible || document.hidden || !depthTex) return;
    running = true;
    last = performance.now();
    requestAnimationFrame(frame);
  }

  resize();
  for (let i = 0; i < N; i++) {
    init[i * 4] = (Math.random() * 2 - 1) * aspect;
    init[i * 4 + 1] = Math.random() * 2 - 1;
  }
  device.queue.writeBuffer(particles, 0, init);
  window.addEventListener('resize', resize);
  read();
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }).observe(canvas);
  document.addEventListener('visibilitychange', kick);
}

start().catch((err) => { console.error(err); fail(); });
