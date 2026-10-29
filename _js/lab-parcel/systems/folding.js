// Fold phase: tap a flap to close it. Short flaps first, like in a real warehouse:
// a long flap tapped too early lifts halfway and falls back open. Tapping anything but an open flap is a miss.
// ponytail: tap only; dragging a flap round its hinge is the nicer version.
import { pick } from '../input.js';

export function createFolding({ box, tweens, mistake, done }) {
  const open = () => box.flaps.filter((f) => !f.closed);
  return {
    hover: (ray) => (pick(ray, open()) ? 'pointer' : ''),
    down(ray) {
      const flap = pick(ray, open());
      if (!flap) return mistake('fold_miss');
      if (flap.moving) return;
      flap.moving = true;
      if (flap.kind === 'long' && box.flaps.some((f) => f.kind === 'short' && !f.closed)) {
        tweens.to(0.5, (p) => flap.set(Math.sin(Math.PI * p) * 0.45)).then(() => { flap.moving = false; });
        return mistake('flap_order');
      }
      flap.closed = true;
      tweens.to(0.4, flap.set).then(() => {
        flap.moving = false;
        if (box.flaps.every((f) => f.closed && !f.moving)) done();
      });
    },
  };
}
