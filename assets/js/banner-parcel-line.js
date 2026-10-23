// Banner scene "parcel-line": a parcel glides along a plain surface and stops to be opened, filled, closed,
// taped and labelled, then it glides off while the next empty one arrives.
// Canvas 2D, same parcels as the home hero (hero-gl.js), no dependencies.
const FACES = ['#fdc14a', '#fca311', '#d98a08', 'rgba(120, 70, 0, .35)']; // top, front, side, tape
const INSIDE = '#8a5a06';
const ITEMS = ['#0f766e', '#f4efe6', '#3f4a5a']; // folded garments that go in the parcel, one per drop

// One parcel's timeline in seconds. It starts with the glide that brings it to the middle
// (and ships the previous one off), then the parcel stands still for each step.
const T = 6.2;
const MOVE = [0, 1.4];
const OPEN = [1.6, 2.2];
const DROPS = [2.3, 2.9, 3.5], FALL = 0.55;
const CLOSE = [4.3, 4.9];
const TAPE = [5.0, 5.4];
const LABEL = [5.5, 5.8];

const dpr = Math.min(window.devicePixelRatio || 1, 2);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const ease = (p) => p * p * (3 - 2 * p);
const prog = (t, [a, b]) => Math.min(1, Math.max(0, (t - a) / (b - a)));

for (const canvas of document.querySelectorAll('[data-banner-scene="parcel-line"]')) scene(canvas);

function scene(canvas) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let w = 0, h = 0, raf = 0;

  function resize() {
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
  }

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
    const open = ease(prog(tau, OPEN)) * (1 - ease(prog(tau, CLOSE)));
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

  // With data-banner-scroll the scene time follows the page: crossing the viewport plays one parcel
  // from arrival to shipping. Otherwise it follows the clock and loops.
  const scroll = 'bannerScroll' in canvas.dataset;
  const scrolled = () => {
    const b = canvas.getBoundingClientRect();
    return prog(innerHeight - b.top, [0, innerHeight + b.height]) * (T + MOVE[1]);
  };
  let now = scroll ? scrolled() : 0;

  function frame(ms) {
    if (scroll) now += (scrolled() - now) * 0.15; // ponytail: eases toward the scroll position, so wheel steps don't jump
    else now = ms / 1000;
    draw(now);
    raf = requestAnimationFrame(frame);
  }

  window.addEventListener('resize', () => {
    if (canvas.clientWidth === w && canvas.clientHeight === h) return;
    resize(); if (reduced) draw(T - 0.1);
  });
  resize();
  if (reduced) return draw(T - 0.1); // static: a packed parcel in the middle

  new IntersectionObserver(([e]) => {
    cancelAnimationFrame(raf);
    if (e.isIntersecting) raf = requestAnimationFrame(frame);
  }).observe(canvas);
}
