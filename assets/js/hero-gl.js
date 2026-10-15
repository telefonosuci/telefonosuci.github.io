// Hero background: a pit of yellow parcels seen from above. The pointer puts them in order.
// Canvas 2D, no dependencies.
(function () {
  var canvas = document.getElementById('hero-gl');
  var ctx = canvas && canvas.getContext('2d');
  if (!ctx) return;

  var CELL = 34;      // grid pitch in CSS px
  var SIZE = 24;      // cube face in CSS px
  var RADIUS = 150;   // pointer influence
  var CHAOS = 22;     // how far a messy parcel sits from its slot
  var FACES = ['#fdc14a', '#fca311', '#d98a08', 'rgba(120,70,0,.35)']; // top, side, bottom, tape

  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cubes = [], w = 0, h = 0, t = 0;
  var mouse = { x: -1e4, y: -1e4 };
  var visible = true, raf = 0;

  // Parcels lie scattered; the pointer tidies the ones it passes into a neat grid,
  // and they slowly slide back into the mess once it leaves.
  function resize() {
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    cubes = [];
    for (var y = CELL / 2; y < h + CELL; y += CELL) {
      for (var x = CELL / 2; x < w + CELL; x += CELL) {
        var c = { hx: x, hy: y, ox: (Math.random() - 0.5) * 2 * CHAOS, oy: (Math.random() - 0.5) * 2 * CHAOS,
                  oa: (Math.random() - 0.5) * 1.6, ph: Math.random() * 6.28, o: 0, vx: 0, vy: 0 };
        c.x = x + c.ox; c.y = y + c.oy; c.a = c.oa;
        cubes.push(c);
      }
    }
  }

  function step() {
    t += 0.01;
    for (var i = 0; i < cubes.length; i++) {
      var c = cubes[i];
      var dx = c.hx - mouse.x, dy = c.hy - mouse.y;
      if (dx * dx + dy * dy < RADIUS * RADIUS) c.o += (1 - c.o) * 0.2;
      else c.o = Math.max(0, c.o - 0.004); // ponytail: ~4s back to chaos; raise to keep order longer
      var m = 1 - c.o, wob = Math.sin(t + c.ph) * 4 * m;
      var tx = c.hx + (c.ox + wob) * m, ty = c.hy + (c.oy - wob) * m;
      c.vx = (c.vx + (tx - c.x) * 0.08) * 0.78;
      c.vy = (c.vy + (ty - c.y) * 0.08) * 0.78;
      c.x += c.vx; c.y += c.vy;
      c.a += ((c.oa + Math.sin(t * 0.7 + c.ph) * 0.15) * m - c.a) * 0.12;
    }
  }

  function draw() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var s = SIZE / 2;
    for (var i = 0; i < cubes.length; i++) {
      var c = cubes[i], depth = 6;
      var cos = Math.cos(c.a) * dpr, sin = Math.sin(c.a) * dpr;
      // side: the same square pushed down, drawn darker under the top face
      ctx.setTransform(cos, sin, -sin, cos, c.x * dpr, (c.y + depth) * dpr);
      ctx.fillStyle = FACES[2]; ctx.fillRect(-s, -s, SIZE, SIZE);
      ctx.setTransform(cos, sin, -sin, cos, c.x * dpr, (c.y + depth * 0.5) * dpr);
      ctx.fillStyle = FACES[1]; ctx.fillRect(-s, -s, SIZE, SIZE);
      ctx.setTransform(cos, sin, -sin, cos, c.x * dpr, c.y * dpr);
      ctx.fillStyle = FACES[0]; ctx.fillRect(-s, -s, SIZE, SIZE);
      ctx.fillStyle = FACES[3]; ctx.fillRect(-2, -s, 4, SIZE); // packing tape
    }
  }

  function frame() {
    step(); draw();
    if (visible) raf = requestAnimationFrame(frame);
  }

  window.addEventListener('pointermove', function (e) {
    var b = canvas.getBoundingClientRect();
    mouse.x = e.clientX - b.left; mouse.y = e.clientY - b.top;
  }, { passive: true });
  window.addEventListener('resize', function () { resize(); draw(); });

  resize(); draw();
  if (reduced) return; // static pit, no motion

  new IntersectionObserver(function (entries) {
    visible = entries[0].isIntersecting;
    cancelAnimationFrame(raf);
    if (visible) raf = requestAnimationFrame(frame);
  }).observe(canvas);
})();
