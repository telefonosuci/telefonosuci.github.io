// Fill phase: tap an item and it hops onto the pile inside the parcel. The heavy one goes first, at the bottom:
// tapping another item before it makes that item shake "no". Tapping anything but an item is a miss.
// ponytail: a centred stack, not real packing; drag & drop onto a grid (with rotation and "doesn't fit") comes next.
import { SIZE } from '../entities/box.js';
import { pick } from '../input.js';

const HOP = 0.6; // arc height of the jump into the parcel
const SHAKE = 0.12; // radians, the "no" wiggle

export function createPacking({ items, tweens, mistake, done }) {
  let pile = 0, landed = 0;
  const waiting = () => items.filter((i) => !i.packed);

  const refuse = (item) => {
    const turn = item.view.rotation.y;
    tweens.to(0.4, (p) => { item.view.rotation.y = turn + Math.sin(p * Math.PI * 4) * SHAKE * (1 - p); }, (p) => p);
  };

  return {
    enter() { pile = SIZE.t; landed = 0; },
    hover: (ray) => (pick(ray, waiting()) ? 'pointer' : ''),
    down(ray) {
      const item = pick(ray, waiting());
      if (!item) return mistake('fill_miss');
      if (!item.heavy && items.some((i) => i.heavy && !i.packed)) {
        refuse(item);
        return mistake('fill_order');
      }
      item.packed = true;
      const from = item.view.position.clone(), turn = item.view.rotation.y, y = pile;
      pile += item.size[1];
      tweens.to(0.6, (p) => {
        item.view.position.set(from.x * (1 - p), from.y + (y - from.y) * p + Math.sin(Math.PI * p) * HOP, from.z * (1 - p));
        item.view.rotation.y = turn * (1 - p);
      }).then(() => { if (++landed === items.length) done(); });
    },
  };
}
