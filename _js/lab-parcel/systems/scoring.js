// Scoring rules as pure functions over strip endpoints ({ a, b } with x/z): no three.js here, easy to tune.
// The seam runs along x from -w/2 to w/2 at z = 0. World unit = 50 cm.
const ON_SEAM = 0.06; // max |z| of both ends for a strip to count as "on the seam"
const CM = 50;

export const onSeam = ({ a, b }) => Math.abs(a.z) < ON_SEAM && Math.abs(b.z) < ON_SEAM;

// The x-range of the seam a strip actually lies on: the part of the segment within ON_SEAM of z = 0.
// A strip along the seam gives its whole length, a crooked one only the stretch where it crosses.
function seamSpan({ a, b }) {
  const dz = b.z - a.z;
  if (Math.abs(dz) < 1e-9) return Math.abs(a.z) < ON_SEAM ? [Math.min(a.x, b.x), Math.max(a.x, b.x)] : null;
  const t1 = Math.max(0, Math.min((-ON_SEAM - a.z) / dz, (ON_SEAM - a.z) / dz));
  const t2 = Math.min(1, Math.max((-ON_SEAM - a.z) / dz, (ON_SEAM - a.z) / dz));
  if (t2 <= t1) return null;
  const x1 = a.x + (b.x - a.x) * t1, x2 = a.x + (b.x - a.x) * t2;
  return [Math.min(x1, x2), Math.max(x1, x2)];
}

// Share of the seam (0..1) lying under at least one strip, all strips summed (crooked ones included).
export function coverage(strips, w) {
  const spans = strips
    .map(seamSpan)
    .filter(Boolean)
    .map(([lo, hi]) => [Math.max(-w / 2, lo), Math.min(w / 2, hi)])
    .filter(([lo, hi]) => hi > lo)
    .sort((p, q) => p[0] - q[0]);
  let total = 0, end = -Infinity;
  for (const [lo, hi] of spans) {
    if (hi <= end) continue;
    total += hi - Math.max(lo, end);
    end = hi;
  }
  return total / w;
}

// Final result: stars (1..3) and the values already formatted for the HUD.
// One star off for each: gaps in the seam, wasted tape, too many cuts, too many mistakes.
export function rate({ strips, w, seconds, mistakes }) {
  const c = coverage(strips, w);
  const used = strips.reduce((sum, s) => sum + s.a.distanceTo(s.b), 0);
  const stars = Math.max(1, 3 - (c < 0.99) - (used > w * 1.4) - (strips.length > 2) - (mistakes > 2));
  return {
    stars,
    values: {
      rating: '★'.repeat(stars) + '☆'.repeat(3 - stars),
      coverage: `${Math.round(c * 100)}%`,
      tape: `${Math.round(used * CM)} cm`,
      mistakes: String(mistakes),
      time: `${Math.round(seconds)} s`,
    },
  };
}
