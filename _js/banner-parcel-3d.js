// Banner scene "parcel-3d": the parcel-line story (arrive, open, fill, close, tape, label, ship) in real 3D.
// WebGL2, no dependencies. Every shape is the same unit cube, moved, turned and stretched per draw call.
import { fit } from './lib/canvas.js';
import { ease, prog } from './lib/math.js';
import { T, MOVE, OPEN, DROPS, FALL, CLOSE, TAPE, LABEL, play } from './lib/parcel-story.js';

const CARD = [0.99, 0.64, 0.07], TAPE_C = [0.8, 0.5, 0.06], WHITE = [1, 1, 1], INK = [0.3, 0.3, 0.3], PLANE = [0.94, 0.94, 0.94];
const ITEMS = [[0.06, 0.46, 0.43], [0.96, 0.94, 0.9], [0.25, 0.29, 0.35]]; // folded garments, one per drop

// Parcel size in world units, wall thickness, garment size.
const W = 1.2, H = 0.8, D = 0.9, t = 0.03;
const GW = W * 0.8, GH = 0.1, GD = D * 0.75;

// Column-major 4x4 matrices, just what this scene needs.
const mat = (...v) => new Float32Array(v);
const mul = (a, b) => {
  const o = new Float32Array(16);
  for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) {
    let s = 0;
    for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k];
    o[c * 4 + r] = s;
  }
  return o;
};
const tr = (x, y, z) => mat(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1);
const sc = (x, y, z) => mat(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
const rx = (a) => { const c = Math.cos(a), s = Math.sin(a); return mat(1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1); };
const rz = (a) => { const c = Math.cos(a), s = Math.sin(a); return mat(c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); };
const persp = (fovy, asp, n, f) => {
  const k = 1 / Math.tan(fovy / 2);
  return mat(k / asp, 0, 0, 0, 0, k, 0, 0, 0, 0, (f + n) / (n - f), -1, 0, 0, 2 * f * n / (n - f), 0);
};
const lookAt = (e, c) => {
  const sub = (a, b) => a.map((v, i) => v - b[i]), dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const norm = (a) => a.map((v) => v / Math.hypot(...a));
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const z = norm(sub(e, c)), x = norm(cross([0, 1, 0], z)), y = cross(z, x);
  return mat(x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0, -dot(x, e), -dot(y, e), -dot(z, e), 1);
};
const EYE = [1.8, 2.2, 5], TARGET = [0, 0.35, 0], FOV = 0.52;

const VS = `#version 300 es
in vec3 a_pos; in vec3 a_nor;
uniform mat4 u_vp, u_m;
out vec3 v_nor; out vec3 v_loc;
void main() { v_nor = mat3(u_m) * a_nor; v_loc = a_pos; gl_Position = u_vp * u_m * vec4(a_pos, 1.); }`;

// u_mode 0: lit solid. 1: the floor, fading out at the sides and far back. 2: soft shadow blob.
// Scale is applied before rotation everywhere, so mat3(u_m) keeps the box normals pointing right.
const FS = `#version 300 es
precision mediump float;
in vec3 v_nor; in vec3 v_loc;
uniform vec3 u_col; uniform int u_mode;
out vec4 o;
void main() {
  if (u_mode == 2) { if (v_loc.y < 0.) discard; float a = (1. - smoothstep(.15, .5, length(v_loc.xz))) * .22; o = vec4(0., 0., 0., a); return; }
  vec3 c = u_col * (.72 + .35 * max(dot(normalize(v_nor), normalize(vec3(-.4, 1., .6))), 0.));
  float a = 1.;
  if (u_mode == 1) a = (1. - smoothstep(.3, .5, abs(v_loc.x))) * (1. - smoothstep(0., .5, -v_loc.z));
  o = vec4(c * a, a); // premultiplied
}`;

for (const canvas of document.querySelectorAll('[data-banner-scene="parcel-3d"]')) scene(canvas);

function scene(canvas) {
  const gl = canvas.getContext('webgl2', { antialias: true });
  if (!gl) return; // ponytail: no fallback, the banner just shows its text; reuse parcel-line if old browsers matter

  const prog_ = gl.createProgram();
  for (const [type, src] of [[gl.VERTEX_SHADER, VS], [gl.FRAGMENT_SHADER, FS]]) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src); gl.compileShader(s); gl.attachShader(prog_, s);
  }
  gl.linkProgram(prog_); gl.useProgram(prog_);
  const u = (n) => gl.getUniformLocation(prog_, n);
  const uVP = u('u_vp'), uM = u('u_m'), uCol = u('u_col'), uMode = u('u_mode');

  // Unit cube, 4 vertices per face so each face keeps its own normal.
  const pos = [], nor = [], idx = [];
  for (const ax of [0, 1, 2]) for (const s of [1, -1]) {
    const a = (ax + 1) % 3, b = (ax + 2) % 3, base = pos.length / 3;
    for (const [i, j] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
      const p = [0, 0, 0], n = [0, 0, 0];
      p[ax] = s / 2; p[a] = i / 2; p[b] = j / 2; n[ax] = s;
      pos.push(...p); nor.push(...n);
    }
    idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
  for (const [name, data] of [['a_pos', pos], ['a_nor', nor]]) {
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog_, name);
    gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 3, gl.FLOAT, false, 0, 0);
  }
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(idx), gl.STATIC_DRAW);
  gl.enable(gl.DEPTH_TEST); gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  const box = (col, mode, ...ms) => {
    gl.uniform3fv(uCol, col); gl.uniform1i(uMode, mode);
    gl.uniformMatrix4fv(uM, false, ms.reduce(mul));
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
  };

  let w = 0, h = 0, halfW = 3, run = 5;
  function resize() {
    ({ w, h } = fit(canvas));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniformMatrix4fv(uVP, false, mul(persp(FOV, w / h, 0.1, 50), lookAt(EYE, TARGET)));
    halfW = Math.hypot(...EYE.map((v, i) => v - TARGET[i])) * Math.tan(FOV / 2) * w / h; // visible half width at the parcel
    run = halfW + W * 2; // offscreen → middle, with room for the perspective
  }

  function draw(time) {
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    const tau = time % T, m = ease(prog(tau, MOVE));
    const xs = [run * m, -run * (1 - m)]; // the packed one leaving, the empty one arriving
    box(PLANE, 1, tr(0, -0.05, 0), sc(halfW * 2.4, 0.1, 3));
    gl.depthMask(false); // shadows only blend on the floor
    for (const x of xs) box(INK, 2, tr(x, 0.002, 0.05), sc(W * 1.7, 0.001, D * 1.7));
    gl.depthMask(true);
    parcel(xs[0], T);
    parcel(xs[1], tau);
  }

  function parcel(x, tau) {
    const opened = ease(prog(tau, OPEN));
    const short = opened * (1 - ease(prog(tau, [CLOSE[0], CLOSE[1]]))) * 1.9; // flap angles in rad
    const long = opened * (1 - ease(prog(tau, [CLOSE[1], CLOSE[2]]))) * 2.1;
    const tape = ease(prog(tau, TAPE)), label = ease(prog(tau, LABEL));
    const P = tr(x, 0, 0);

    box(CARD, 0, P, tr(0, t / 2, 0), sc(W, t, D));                       // bottom
    box(CARD, 0, P, tr(0, H / 2, D / 2 - t / 2), sc(W, H, t));           // front
    box(CARD, 0, P, tr(0, H / 2, -D / 2 + t / 2), sc(W, H, t));          // back
    box(CARD, 0, P, tr(-W / 2 + t / 2, H / 2, 0), sc(t, H, D));          // left
    box(CARD, 0, P, tr(W / 2 - t / 2, H / 2, 0), sc(t, H, D));           // right

    // Flaps turn on their hinge: move to the hinge, rotate, then lay the flap out from it.
    box(CARD, 0, P, tr(0, H + t / 2, D / 2), rx(short), tr(0, 0, -D / 4), sc(W - 2 * t, t, D / 2));
    box(CARD, 0, P, tr(0, H + t / 2, -D / 2), rx(-short), tr(0, 0, D / 4), sc(W - 2 * t, t, D / 2));
    box(CARD, 0, P, tr(-W / 2, H + t * 1.5, 0), rz(long), tr(W / 4, 0, 0), sc(W / 2, t, D));
    box(CARD, 0, P, tr(W / 2, H + t * 1.5, 0), rz(-long), tr(-W / 4, 0, 0), sc(W / 2, t, D));

    // Garments fall with a slight tilt that settles flat, and stack up inside.
    DROPS.forEach((d, i) => {
      const p = prog(tau, [d, d + FALL]);
      if (p <= 0) return;
      const end = t + GH / 2 + i * GH, y = end + 1.6 * (1 - p * p); // gravity: starts slow
      const G = mul(tr(x, y, 0), rz((1 - p) * 0.3 * (i % 2 ? 1 : -1)));
      box(ITEMS[i], 0, G, sc(GW, GH, GD));
      for (const f of [-0.2, 0.2]) box(ITEMS[i].map((c) => c * 0.7), 0, G, tr(0, f * GH, GD / 2 + 0.003), sc(GW * 0.96, 0.008, 0.004)); // folds
    });

    if (tape) { // over the seam from the front edge backwards, then a bit down the front
      box(TAPE_C, 0, P, tr(0, H + t * 2 + 0.002, D / 2 - D * tape / 2), sc(0.16, 0.006, D * tape));
      box(TAPE_C, 0, P, tr(0, H + t * 2 - 0.12 * tape, D / 2 + 0.004), sc(0.16, 0.24 * tape, 0.006));
    }
    if (label) {
      const L = mul(P, tr(-W * 0.22, H * 0.38, D / 2 + 0.004));
      box(WHITE, 0, L, sc(0.36 * label, 0.24 * label, 0.006));
      for (let i = 0; i < 3; i++) box(INK, 0, L, tr(-0.04 * label, (0.06 - i * 0.05) * label, 0.004), sc((i ? 0.18 : 0.24) * label, 0.012 * label, 0.004));
    }
  }

  play(canvas, resize, draw);
}
