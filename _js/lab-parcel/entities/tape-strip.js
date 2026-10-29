// One strip of tape on the lid: a flat quad stretched from where the trigger was pressed (a) to the gun (b).
// ponytail: straight only; folding over the edges and down the sides comes with the "wrap" rule in scoring.
import { DoubleSide, Mesh, PlaneGeometry } from 'three';
import { COLORS, material } from '../assets/greybox.js';

export const TAPE_W = 0.1;
const LIFT = 0.002; // above the lid, so it never z-fights with the flaps

const geometry = new PlaneGeometry(1, TAPE_W).rotateX(-Math.PI / 2).translate(0.5, 0, 0); // starts at x = 0, grows towards +x
const tape = material(COLORS.tape, { transparent: true, opacity: 0.85, roughness: 0.35, side: DoubleSide });

export function createStrip(from) {
  const view = new Mesh(geometry, tape.clone()); // own material, so one strip can turn red and fade alone
  view.receiveShadow = true;
  const a = from.clone(), b = from.clone();
  view.position.set(a.x, a.y + LIFT, a.z);
  const s = {
    view, a, b,
    get length() { return a.distanceTo(b); },
    get angle() { return -Math.atan2(b.z - a.z, b.x - a.x); },
    stretch(to) {
      b.copy(to);
      view.scale.x = Math.max(s.length, 1e-3);
      view.rotation.y = s.angle;
    },
  };
  s.stretch(from);
  return s;
}
