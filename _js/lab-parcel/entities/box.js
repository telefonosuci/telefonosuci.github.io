// The parcel: bottom, four walls and four flaps. Each flap sits on a pivot at its hinge, so folding is one rotation.
// Short flaps hinge on the ±x walls; long flaps hinge on the ±z walls and meet on the seam, along x at z = 0.
import { Group } from 'three';
import { block, COLORS } from '../assets/greybox.js';
import { tag } from '../input.js';

export const SIZE = { w: 1.2, h: 0.7, d: 0.9, t: 0.02 };
const OPEN = 2; // flap angle when open (radians from closed): up and leaning outwards
const SHORT = SIZE.w * 0.3; // short flap length

export function createBox() {
  const { w, h, d, t } = SIZE;
  const view = new Group();
  const at = (mesh, x, y, z) => { mesh.position.set(x, y, z); return mesh; };

  view.add(at(block(w, t, d, COLORS.cardIn), 0, t / 2, 0));
  for (const s of [1, -1]) {
    view.add(at(block(w, h, t, COLORS.card), 0, h / 2, s * (d - t) / 2));
    view.add(at(block(t, h, d - 2 * t, COLORS.card), s * (w - t) / 2, h / 2, 0));
  }

  const flaps = [];
  for (const s of [1, -1]) {
    // Short flap: rotates about z. Long flap: rotates about x and rests one thickness higher, on top of the short ones.
    flaps.push(flap('short', 'z', -s * OPEN, [s * w / 2, h, 0], at(block(SHORT, t, d - 2 * t, COLORS.flap), -s * SHORT / 2, t / 2, 0)));
    flaps.push(flap('long', 'x', s * OPEN, [0, h, s * d / 2], at(block(w, t, d / 2, COLORS.flap), 0, t * 1.5, -s * d / 4)));
  }
  for (const f of flaps) view.add(f.view);

  return { view, flaps, top: h + 2 * t };
}

function flap(kind, axis, open, hinge, mesh) {
  const view = new Group();
  view.position.set(...hinge);
  view.add(mesh);
  const f = tag({
    kind, view, closed: false, moving: false,
    // p = 0 open, 1 closed.
    set: (p) => { view.rotation[axis] = open * (1 - p); },
    reset: () => { f.closed = f.moving = false; f.set(0); },
  });
  f.set(0);
  return f;
}
