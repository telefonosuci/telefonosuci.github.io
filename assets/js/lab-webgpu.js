// WebGPU pit of yellow parcels (cubes or spheres), the 3D cousin of the hero animation.
// A compute pass integrates the physics, a render pass draws lit instances with a depth buffer.
// The pointer is a solid disc: it bumps the objects, and they bump each other and the walls.
// Object data lives only on the GPU, ping-ponged between two buffers so collisions read a stable frame.
const canvas = document.querySelector('[data-lab-canvas]');
const fallback = document.querySelector('[data-lab-fallback]');
const N = 200; // max objects, keep in sync with the "count" slider max in _includes/lab.html

const common = /* wgsl */ `
struct P { pos: vec2f, vel: vec2f };
struct U {
  mouse: vec2f, pvel: vec2f, aspect: f32, time: f32, dt: f32, count: f32,
  flow: f32, force: f32, damping: f32, maxSpeed: f32, size: f32, radius: f32, bounce: f32, p0: f32,
  colA: vec4f, colB: vec4f,
};

fn hash(i: u32) -> f32 {
  var x = i * 747796405u + 2891336453u;
  x = ((x >> ((x >> 28u) + 4u)) ^ x) * 277803737u;
  return f32((x >> 22u) ^ x) / 4294967295.0;
}

// Collision radius, slightly different per object like the hand-packed parcels in the hero.
fn rad(i: u32) -> f32 { return u.size * 0.001 * (1.0 + 0.25 * (hash(i * 3u) * 2.0 - 1.0)); }
`;

const simCode = common + /* wgsl */ `
@group(0) @binding(0) var<storage, read> src: array<P>;
@group(0) @binding(1) var<uniform> u: U;
@group(0) @binding(2) var<storage, read_write> dst: array<P>;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id: vec3u) {
  let i = id.x;
  let n = u32(u.count);
  if (i >= n) { return; }
  var p = src[i];
  let r = rad(i);
  var dp = vec2f(0.0);
  var dv = vec2f(0.0);

  // Equal-mass elastic-ish collisions: each object resolves its half of every overlap.
  for (var j = 0u; j < n; j++) {
    if (j == i) { continue; }
    let o = src[j];
    let d = p.pos - o.pos;
    let rr = r + rad(j);
    let d2 = dot(d, d);
    if (d2 >= rr * rr || d2 < 1e-12) { continue; }
    let dist = sqrt(d2);
    let nn = d / dist;
    dp += nn * (rr - dist) * 0.5;
    let vn = dot(p.vel - o.vel, nn);
    if (vn < 0.0) { dv -= nn * vn * (1.0 + u.bounce) * 0.5; }
  }

  // The pointer: an immovable disc that carries its own velocity into the hit.
  let d = p.pos - u.mouse;
  let rr = u.radius + r;
  let d2 = dot(d, d);
  if (d2 < rr * rr && d2 > 1e-12) {
    let dist = sqrt(d2);
    let nn = d / dist;
    dp += nn * (rr - dist);
    let vn = dot(p.vel + dv - u.pvel * u.force, nn);
    if (vn < 0.0) { dv -= nn * vn * (1.0 + u.bounce); }
    dv += nn * u.force * 0.3; // a still tap still nudges
  }

  let q = p.pos * 2.0;
  let t = u.time * 0.5;
  let acc = u.flow * 0.3 * vec2f(sin(q.y * 1.7 + t * 0.4), cos(q.x * 1.3 - t * 0.3));
  p.vel = (p.vel + dv) * u.damping + acc * u.dt;
  let s = length(p.vel);
  if (s > u.maxSpeed) { p.vel *= u.maxSpeed / s; }
  p.pos += dp + p.vel * u.dt;

  // Walls of the pit.
  let lo = vec2f(-u.aspect, -1.0) + r;
  let hi = vec2f(u.aspect, 1.0) - r;
  if (p.pos.x < lo.x) { p.vel.x = abs(p.vel.x) * u.bounce; }
  if (p.pos.x > hi.x) { p.vel.x = -abs(p.vel.x) * u.bounce; }
  if (p.pos.y < lo.y) { p.vel.y = abs(p.vel.y) * u.bounce; }
  if (p.pos.y > hi.y) { p.vel.y = -abs(p.vel.y) * u.bounce; }
  p.pos = clamp(p.pos, lo, hi);
  dst[i] = p;
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

// Per-instance data shared by both shapes. Faster objects shift from the slow to the fast color.
struct Inst { pos: vec2f, r: f32, depth: f32, col: vec3f };
fn inst(ii: u32) -> Inst {
  let p = ps[ii];
  var o: Inst;
  o.pos = p.pos;
  o.r = rad(ii);
  o.depth = 0.2 + 0.6 * hash(ii * 3u + 1u);
  o.col = mix(u.colA.rgb, u.colB.rgb, clamp(length(p.vel) * 0.6, 0.0, 1.0));
  return o;
}

fn shade(col: vec3f, n: vec3f) -> vec3f {
  let l = normalize(vec3f(-0.4, 0.6, 0.7));
  let h = normalize(l + vec3f(0.0, 0.0, 1.0));
  return col * (0.5 + 0.5 * max(dot(n, l), 0.0)) + pow(max(dot(n, h), 0.0), 40.0) * 0.35;
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
  var o: VO;
  o.pos = vec4f((s.pos + c * s.r) / vec2f(u.aspect, 1.0), s.depth, 1.0);
  o.uv = c;
  o.col = s.col;
  o.depth = s.depth;
  o.radius = s.r;
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
  let a = vec3f(s.pos.y * 3.0, s.pos.x * 3.0, 0.0) + vec3f(hash(ii * 3u + 1u), hash(ii * 3u + 2u), hash(ii * 7u)) * 6.2832;
  let v = rot(a, n0 + c.x * t + c.y * cross(n0, t)) * s.r * 0.75;
  var o: VO;
  o.pos = vec4f((s.pos + v.xy) / vec2f(u.aspect, 1.0), s.depth - v.z * 0.5, 1.0);
  o.uv = c;
  o.col = s.col;
  o.n = rot(a, n0);
  return o;
}

@fragment
fn fsCube(i: VO) -> @location(0) vec4f {
  var col = shade(i.col, normalize(i.n));
  if (abs(i.uv.x) < 0.17) { col = mix(col, vec3f(0.47, 0.27, 0.0), 0.35); } // packing tape, as in the hero
  return vec4f(col, 1.0);
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
  const bufs = [0, 1].map(() => device.createBuffer({ size: init.byteLength, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }));
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
  const bind = (p, ...bs) => device.createBindGroup({
    layout: p.getBindGroupLayout(0),
    entries: [{ binding: 0, resource: { buffer: bs[0] } }, { binding: 1, resource: { buffer: ubo } },
      ...(bs[1] ? [{ binding: 2, resource: { buffer: bs[1] } }] : [])],
  });
  const shapes = {
    sphere: { pipeline: pipeline('vsSphere', 'fsSphere'), verts: 6 },
    cube: { pipeline: pipeline('vsCube', 'fsCube'), verts: 36 },
  };
  // groups[k]: step from buffer k to buffer 1-k, then draw buffer 1-k.
  for (const s of Object.values(shapes)) s.groups = [bind(s.pipeline, bufs[1]), bind(s.pipeline, bufs[0])];
  const simGroups = [bind(sim, bufs[0], bufs[1]), bind(sim, bufs[1], bufs[0])];
  let cur = 0;

  // Pointer = hover with a mouse, the finger on touch. Off-canvas it parks far away.
  const FAR = 1e4;
  const pointer = { x: FAR, y: FAR, px: FAR, py: FAR, moved: false };
  const toSpace = (e) => {
    const r = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width * 2 - 1) * aspect;
    pointer.y = -((e.clientY - r.top) / r.height * 2 - 1);
    pointer.moved = true;
    kick();
  };
  const away = () => { pointer.x = pointer.y = pointer.px = pointer.py = FAR; };
  canvas.addEventListener('pointerdown', (e) => { toSpace(e); pointer.px = pointer.x; pointer.py = pointer.y; });
  canvas.addEventListener('pointermove', toSpace);
  canvas.addEventListener('pointerleave', away);
  canvas.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') away(); });
  canvas.addEventListener('pointercancel', away);

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
    // ponytail: pointer speed from the per-frame delta; a very fast swipe can tunnel through small objects
    const fresh = Math.abs(pointer.px) > FAR / 2;
    const pvx = fresh || !dt ? 0 : (pointer.x - pointer.px) / dt;
    const pvy = fresh || !dt ? 0 : (pointer.y - pointer.py) / dt;
    pointer.px = pointer.x; pointer.py = pointer.y;
    uniforms.set([
      pointer.x, pointer.y, pvx, pvy, aspect, now / 1000, dt, cfg.count,
      cfg.flow, cfg.force, cfg.damping, cfg.maxSpeed, cfg.size, cfg.radius, cfg.bounce, 0,
      ...cfg.colA, 1, ...cfg.colB, 1,
    ]);
    device.queue.writeBuffer(ubo, 0, uniforms);

    const shape = shapes[cfg.shape] || shapes.cube;
    const enc = device.createCommandEncoder();
    const cp = enc.beginComputePass();
    cp.setPipeline(sim);
    cp.setBindGroup(0, simGroups[cur]);
    cp.dispatchWorkgroups(Math.ceil(cfg.count / 64));
    cp.end();
    const rp = enc.beginRenderPass({
      colorAttachments: [{ view: ctx.getCurrentTexture().createView(), clearValue: { r: 1, g: 0.98, b: 0.94, a: 1 }, loadOp: 'clear', storeOp: 'store' }],
      depthStencilAttachment: { view: depthTex.createView(), depthClearValue: 1, depthLoadOp: 'clear', depthStoreOp: 'discard' },
    });
    rp.setPipeline(shape.pipeline);
    rp.setBindGroup(0, shape.groups[cur]);
    rp.draw(shape.verts, cfg.count);
    rp.end();
    device.queue.submit([enc.finish()]);
    cur = 1 - cur;

    idle = pointer.moved ? 0 : idle + 1;
    pointer.moved = false;
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
  // Both buffers start equal so objects added by the "count" slider appear at their own spot.
  for (const b of bufs) device.queue.writeBuffer(b, 0, init);
  window.addEventListener('resize', resize);
  // Fill ~25% of the pit at the default size, so a tall phone canvas isn't overpacked into endless jostling.
  const r = form.size.value * 0.001;
  const step = +form.count.step;
  form.count.defaultValue = Math.min(Math.max(Math.round(aspect / (Math.PI * r * r) / step) * step, +form.count.min), +form.count.max);
  read();
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }).observe(canvas);
  document.addEventListener('visibilitychange', kick);
}

start().catch((err) => { console.error(err); fail(); });
