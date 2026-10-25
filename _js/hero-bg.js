// Hero background: a pit of yellow parcels seen from above. The pointer puts them in order.
// Canvas 2D, no dependencies.
import { reducedMotion, coarsePointer } from './lib/env.js';
import { fit, onResize, loopWhileVisible } from './lib/canvas.js';
import { drawParcels } from './lib/parcel.js';

const canvas = document.querySelector('[data-hero-bg]');
const ctx = canvas?.getContext('2d');

const CELL = 48;      // grid pitch in CSS px; lower = denser pit
const SIZE = 24;      // cube face in CSS px
const RADIUS = 150;   // pointer influence
const CHAOS = 22;     // how far a messy parcel sits from its slot
const BOUNCE = 0.8;    // how much speed a hit gives back; 0 = they just stop
const R = SIZE * 0.55; // collision radius, a disc around the square; 2R < CELL so the tidy grid never touches

const mouse = { x: -1e4, y: -1e4 };
let sweep = -1e4; // touch devices: rows above this line (canvas px) are ordered for good; scrolling pushes it down
let cubes = [], cols = 0, w = 0, h = 0, t = 0;

// Parcels lie scattered; the pointer tidies the ones it passes into a neat grid,
// and they slowly slide back into the mess once it leaves.
function resize() {
  ({ w, h } = fit(canvas));
  cubes = [];
  cols = Math.ceil((w + CELL / 2) / CELL);
  for (let y = CELL / 2; y < h + CELL; y += CELL) {
    for (let x = CELL / 2; x < w + CELL; x += CELL) {
      const c = { hx: x, hy: y, ox: (Math.random() - 0.5) * 2 * CHAOS, oy: (Math.random() - 0.5) * 2 * CHAOS,
                  oa: (Math.random() - 0.5) * 1.6, ph: Math.random() * 6.28, o: y < sweep ? 1 : 0, vx: 0, vy: 0 };
      c.x = x + c.ox; c.y = y + c.oy; c.a = c.oa;
      cubes.push(c);
    }
  }
}

function step() {
  t += 0.01;
  for (const c of cubes) {
    const dx = c.hx - mouse.x, dy = c.hy - mouse.y;
    if (c.hy < sweep || dx * dx + dy * dy < RADIUS * RADIUS) c.o += (1 - c.o) * 0.2;
    else c.o = Math.max(0, c.o - 0.004); // ponytail: ~4s back to chaos; raise to keep order longer
    const m = 1 - c.o, wob = Math.sin(t + c.ph) * 4 * m;
    const tx = c.hx + (c.ox + wob) * m, ty = c.hy + (c.oy - wob) * m;
    c.vx = (c.vx + (tx - c.x) * 0.08) * 0.78;
    c.vy = (c.vy + (ty - c.y) * 0.08) * 0.78;
    c.x += c.vx; c.y += c.vy;
    c.a += ((c.oa + Math.sin(t * 0.7 + c.ph) * 0.15) * m - c.a) * 0.12;
  }
  collide();
}

// Messy parcels bounce off each other instead of overlapping. A parcel strays at most
// CHAOS + wobble from its slot, so only slots up to two cells away can touch.
function collide() {
  const rr = 2 * R;
  for (let i = 0; i < cubes.length; i++) {
    const p = cubes[i], col = i % cols;
    for (let oy = 0; oy <= 2; oy++) {
      for (let ox = -2; ox <= 2; ox++) {
        if (oy === 0 && ox <= 0) continue; // each pair once
        if (col + ox < 0 || col + ox >= cols) continue;
        const o = cubes[i + oy * cols + ox];
        if (!o) continue;
        const dx = p.x - o.x, dy = p.y - o.y, d2 = dx * dx + dy * dy;
        if (d2 >= rr * rr || d2 < 1e-6) continue;
        const d = Math.sqrt(d2), nx = dx / d, ny = dy / d, push = (rr - d) * 0.5;
        p.x += nx * push; p.y += ny * push; o.x -= nx * push; o.y -= ny * push;
        // Equal-mass bounce along the contact normal.
        const vn = (p.vx - o.vx) * nx + (p.vy - o.vy) * ny;
        if (vn < 0) {
          const k = vn * (1 + BOUNCE) * 0.5;
          p.vx -= nx * k; p.vy -= ny * k; o.vx += nx * k; o.vy += ny * k;
        }
      }
    }
  }
}

const draw = () => drawParcels(ctx, cubes, { size: SIZE, depth: 6, tape: 4 });

function start() {
  if (coarsePointer) {
    // Scrolling half the hero's height sweeps the order line from its top edge to its bottom.
    const order = () => { sweep = Math.max(sweep, -canvas.getBoundingClientRect().top * 2 * (h + CELL) / h); };
    window.addEventListener('scroll', order, { passive: true });
  } else window.addEventListener('pointermove', (e) => {
    const b = canvas.getBoundingClientRect();
    mouse.x = e.clientX - b.left; mouse.y = e.clientY - b.top;
  }, { passive: true });
  onResize(canvas, () => { resize(); draw(); }); // rebuilding re-scatters the parcels, so only on real size changes

  resize(); for (let i = 0; i < 30; i++) step(); draw(); // settle the initial overlaps unseen
  if (reducedMotion) return; // static pit, no motion
  loopWhileVisible(canvas, () => { step(); draw(); });
}

if (ctx) start();
