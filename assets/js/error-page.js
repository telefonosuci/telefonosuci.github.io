// Error pages: lost parcels fly in and line up into the status code. Click or tap to scatter them again.
// Canvas 2D, same parcels as the home hero (hero-gl.js), no dependencies.
const canvas = document.querySelector('[data-error-code]');
const CODE = canvas?.dataset.errorCode;
const ctx = canvas?.getContext('2d');

const CELL = 15;  // grid pitch in CSS px
const SIZE = 11;  // cube face in CSS px
const DEPTH = 4;
const FACES = ['#fdc14a', '#fca311', '#d98a08', 'rgba(120, 70, 0, .35)']; // top, side, bottom, tape

const dpr = Math.min(window.devicePixelRatio || 1, 2);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let parcels = [], w = 0, h = 0, raf = 0;

// Rasterize the code at grid resolution: every lit pixel becomes a parcel slot.
function layout() {
  w = canvas.clientWidth; h = canvas.clientHeight;
  canvas.width = w * dpr; canvas.height = h * dpr;
  const cols = Math.floor(w / CELL), rows = Math.floor(h / CELL);
  const g = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  g.canvas.width = cols; g.canvas.height = rows;
  let size = rows;
  g.font = `700 ${size}px "Space Grotesk", sans-serif`;
  size *= Math.min(1, cols * 0.92 / g.measureText(CODE).width);
  g.font = `700 ${size}px "Space Grotesk", sans-serif`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(CODE, cols / 2, rows / 2 + size * 0.06);
  const px = g.getImageData(0, 0, cols, rows).data;
  const ox = (w - cols * CELL) / 2 + CELL / 2, oy = (h - rows * CELL) / 2 + CELL / 2;

  const old = parcels;
  parcels = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (px[(y * cols + x) * 4 + 3] < 128) continue;
      const p = old[parcels.length] || { x: Math.random() * w, y: Math.random() * h, vx: 0, vy: 0, a: Math.random() * 6.28, va: 0 };
      p.tx = ox + x * CELL; p.ty = oy + y * CELL;
      if (reduced) Object.assign(p, { x: p.tx, y: p.ty, a: 0 });
      parcels.push(p);
    }
  }
}

function step() {
  let energy = 0;
  for (const p of parcels) {
    p.vx = (p.vx + (p.tx - p.x) * 0.015) * 0.9;
    p.vy = (p.vy + (p.ty - p.y) * 0.015) * 0.9;
    p.va = (p.va - p.a * 0.02) * 0.9;
    p.x += p.vx; p.y += p.vy; p.a += p.va;
    energy += Math.abs(p.vx) + Math.abs(p.vy) + Math.abs(p.tx - p.x) + Math.abs(p.ty - p.y);
  }
  return energy / parcels.length > 0.02;
}

function draw() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const s = SIZE / 2;
  for (const p of parcels) {
    const cos = Math.cos(p.a) * dpr, sin = Math.sin(p.a) * dpr;
    ctx.setTransform(cos, sin, -sin, cos, p.x * dpr, (p.y + DEPTH) * dpr);
    ctx.fillStyle = FACES[2]; ctx.fillRect(-s, -s, SIZE, SIZE);
    ctx.setTransform(cos, sin, -sin, cos, p.x * dpr, (p.y + DEPTH * 0.5) * dpr);
    ctx.fillStyle = FACES[1]; ctx.fillRect(-s, -s, SIZE, SIZE);
    ctx.setTransform(cos, sin, -sin, cos, p.x * dpr, p.y * dpr);
    ctx.fillStyle = FACES[0]; ctx.fillRect(-s, -s, SIZE, SIZE);
    ctx.fillStyle = FACES[3]; ctx.fillRect(-1, -s, 2, SIZE); // packing tape
  }
}

// Runs only while parcels are moving, then stops until the next click.
function frame() {
  const moving = step();
  draw();
  raf = moving ? requestAnimationFrame(frame) : 0;
}
const kick = () => { if (!raf) raf = requestAnimationFrame(frame); };

function scatter(e) {
  const b = canvas.getBoundingClientRect();
  const cx = e.clientX - b.left, cy = e.clientY - b.top;
  for (const p of parcels) {
    const dx = p.x - cx, dy = p.y - cy, d = Math.hypot(dx, dy) + 1;
    const f = 1400 / (d + 60);
    p.vx += dx / d * f * (0.6 + Math.random() * 0.8);
    p.vy += dy / d * f * (0.6 + Math.random() * 0.8) - Math.random() * 4;
    p.va += (Math.random() - 0.5) * 0.6;
  }
  kick();
}

async function start() {
  await document.fonts.ready; // the digits are measured with the site font
  layout();
  draw();
  window.addEventListener('resize', () => { layout(); reduced ? draw() : kick(); });
  if (reduced) return; // static code, no motion
  canvas.addEventListener('pointerdown', scatter);
  kick();
}

if (ctx) start();
