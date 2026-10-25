// Banner scene "parcel-line": a parcel glides along a plain surface and stops to be opened, filled, closed,
// taped and labelled, then it glides off while the next empty one arrives.
// Canvas 2D, same parcels as the home hero (hero-bg.js), no dependencies.
import { dpr } from './lib/env.js';
import { fit } from './lib/canvas.js';
import { ease, prog } from './lib/math.js';
import { FACES } from './lib/parcel.js'; // here: top, front, side, tape
import { T, MOVE, OPEN, DROPS, FALL, CLOSE, TAPE, LABEL, play } from './lib/parcel-story.js';

const INSIDE = '#8a5a06';
const ITEMS = ['#0f766e', '#f4efe6', '#3f4a5a']; // folded garments that go in the parcel, one per drop

for (const canvas of document.querySelectorAll('[data-banner-scene="parcel-line"]')) scene(canvas);

function scene(canvas) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let w = 0, h = 0;
  const resize = () => ({ w, h } = fit(canvas));

  function draw(t) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const S = Math.min(h * 0.42, w * 0.3); // parcel width
    const y = h * 0.74;                     // surface line
    const run = w / 2 + S * 1.5;            // offscreen → middle
    const tau = t % T, m = ease(prog(tau, MOVE));
    drawPlane(y, S);
    drawParcel(w / 2 - S / 2 + run * m, y, S, T);       // the packed one leaving
    drawParcel(w / 2 - S / 2 - run * (1 - m), y, S, tau); // the empty one arriving
  }

  // The surface the parcels glide on, in the same oblique view: a top that darkens towards the
  // viewer and a thin front edge, both fading out at the sides. Drawn first, so the fade only touches it.
  function drawPlane(y, S) {
    const back = y - S * 0.32, front = y + S * 0.08, edge = front + S * 0.05;
    let g = ctx.createLinearGradient(0, back, 0, front);
    g.addColorStop(0, 'rgba(0, 0, 0, .015)'); g.addColorStop(1, 'rgba(0, 0, 0, .09)');
    ctx.fillStyle = g; ctx.fillRect(0, back, w, front - back);
    g = ctx.createLinearGradient(0, front, 0, edge);
    g.addColorStop(0, 'rgba(0, 0, 0, .16)'); g.addColorStop(1, 'rgba(0, 0, 0, .05)');
    ctx.fillStyle = g; ctx.fillRect(0, front, w, edge - front);
    g = ctx.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, 'transparent'); g.addColorStop(0.2, '#000'); g.addColorStop(0.8, '#000'); g.addColorStop(1, 'transparent');
    ctx.globalCompositeOperation = 'destination-in';
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'source-over';
  }

  // Oblique view: front face, right side and top, depth vector (dx, dy) going up-right.
  function drawParcel(x, y, S, tau) {
    const H = S * 0.72, dx = S * 0.3, dy = -S * 0.22;
    let top = y - H;
    for (const d of DROPS) { // the parcel gives a little when something lands in it
      const p = (tau - d - FALL) / 0.25;
      if (p > 0 && p < 1) top += Math.sin(p * Math.PI) * S * 0.03;
    }
    const open = ease(prog(tau, OPEN)) * (1 - ease(prog(tau, [CLOSE[0], CLOSE[2]])));
    const tape = ease(prog(tau, TAPE)), label = ease(prog(tau, LABEL));

    quad(FACES[2], x + S, y, x + S, top, x + S + dx, top + dy, x + S + dx, y + dy); // right side
    quad(INSIDE, x, top, x + S, top, x + S + dx, top + dy, x + dx, top + dy);       // opening, hidden by closed flaps

    // Items fall in and disappear behind the front face, so the inside never has to be drawn.
    // Each one is a folded garment seen from the side, its layers showing at both ends.
    // It falls with a slight tilt that settles flat.
    const k = S * 0.72, kh = S * 0.2;
    DROPS.forEach((d, i) => {
      const p = prog(tau, [d, d + FALL]);
      if (p <= 0 || p >= 1) return;
      const cx = x + dx * 0.5 + S / 2;
      const cy = top - S * 1.1 + (S * 1.1 + kh * 1.5) * p * p; // gravity: starts slow
      ctx.save();
      ctx.translate(cx, cy); ctx.rotate((1 - p) * 0.25 * (i % 2 ? 1 : -1));
      ctx.fillStyle = ITEMS[i]; ctx.strokeStyle = 'rgba(0, 0, 0, .18)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(-k / 2, -kh / 2, k, kh, kh * 0.12);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = 'rgba(255, 255, 255, .25)'; ctx.fillRect(-k / 2 + 2, -kh / 2 + 1, k - 4, kh * 0.18); // light on the top fold
      ctx.fillStyle = 'rgba(0, 0, 0, .2)'; // layers, mirrored on both ends
      for (const f of [-0.18, 0.05, 0.27]) {
        ctx.fillRect(-k / 2 + 1, f * kh, k * 0.4, 1);
        ctx.fillRect(k * 0.1 - 1, f * kh, k * 0.4, 1);
      }
      ctx.restore();
    });

    ctx.fillStyle = FACES[1]; ctx.fillRect(x, top, S, y - top); // front
    ctx.fillStyle = FACES[3]; ctx.fillRect(x + S / 2 - S * 0.04, top, S * 0.08, (y - top) * 0.35 * tape);

    if (label) { // shipping label, scaled in from its own centre
      const lw = S * 0.32 * label, lh = H * 0.3 * label, lx = x + S * 0.3 - lw / 2, ly = y - H * 0.32 - lh / 2;
      ctx.fillStyle = '#ffffff'; ctx.fillRect(lx, ly, lw, lh);
      ctx.fillStyle = 'rgba(0, 0, 0, .55)';
      for (let i = 1; i <= 3; i++) ctx.fillRect(lx + lw * 0.15, ly + lh * i / 4.2, lw * (i === 1 ? 0.7 : 0.45), Math.max(1, lh * 0.08));
    }

    // Flaps hinge on the left and right top edges: angle 0 lies flat, 2 rad stands open in a V
    // (much further and the right flap turns edge-on to the depth vector, a thin sliver).
    const a = open * 2, L = S / 2, c = Math.cos(a) * L, s = Math.sin(a) * L;
    const flap = a > Math.PI / 2 ? FACES[2] : FACES[0]; // past vertical we see the underside
    quad(flap, x + S, top, x + S - c, top - s, x + S - c + dx, top - s + dy, x + S + dx, top + dy);
    quad(flap, x, top, x + c, top - s, x + c + dx, top - s + dy, x + dx, top + dy);

    if (tape) { // along the seam where the flaps meet, from the front edge backwards
      const tx = x + S / 2 - S * 0.04;
      quad(FACES[3], tx, top, tx + S * 0.08, top, tx + S * 0.08 + dx * tape, top + dy * tape, tx + dx * tape, top + dy * tape);
    }
  }

  function quad(color, ...p) {
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.moveTo(p[0], p[1]);
    for (let i = 2; i < p.length; i += 2) ctx.lineTo(p[i], p[i + 1]);
    ctx.closePath(); ctx.fill();
  }

  play(canvas, resize, draw);
}
