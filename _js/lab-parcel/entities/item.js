// Things to pack. Each one waits on the table in front of the parcel until it is picked.
// ponytail: plain boxes for now, sized so the pile fits under the flaps (heights sum to 0.62 < SIZE.h).
import { block, entity } from '../assets/greybox.js';
import { tag } from '../input.js';

export const CATALOG = [
  { model: 'tee', size: [0.9, 0.08, 0.6], color: '#0f766e', wait: [-0.5, 1.05, 0.15] },
  { model: 'sweater', size: [0.85, 0.14, 0.6], color: '#f5f0e6', wait: [0.5, 1.05, -0.1] },
  { model: 'shoebox', size: [0.7, 0.24, 0.4], color: '#3f4859', wait: [-0.45, 1.75, -0.2], heavy: true },
  { model: 'gift', size: [0.25, 0.16, 0.25], color: '#e23d28', wait: [0.45, 1.7, 0.4] },
]; // wait: [x, z, rotation y] on the table. heavy: must be packed first

export function createItem({ model, size, color, wait, heavy = false }) {
  const e = tag({ ...entity(model), size, heavy, packed: false });
  const mesh = block(...size, color);
  mesh.position.y = size[1] / 2;
  e.body.add(mesh);
  e.reset = () => {
    e.packed = false;
    e.view.position.set(wait[0], 0, wait[1]);
    e.view.rotation.set(0, wait[2], 0);
  };
  e.reset();
  return e;
}
