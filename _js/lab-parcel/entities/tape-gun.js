// The warehouse tape gun. Its origin is where the roll touches the lid; it faces the direction it lays tape (+x),
// and tips forward while the trigger is held.
import { block, COLORS, entity, roll } from '../assets/greybox.js';

const R = 0.11; // roll radius

export function createTapeGun() {
  const e = entity('tape-gun');
  const parts = [
    [roll(R, 0.1, COLORS.tape), 0, R, 0],
    [roll(R * 0.45, 0.11, COLORS.gunBody), 0, R, 0],
    [block(0.34, 0.04, 0.12, COLORS.gunBody), -0.1, R * 2 + 0.03, 0],
    [block(0.06, 0.26, 0.08, COLORS.gunGrip), -0.2, R * 2 + 0.14, 0],
    [block(0.02, 0.06, 0.12, COLORS.gunBody), 0.11, 0.03, 0], // blade
  ];
  for (const [mesh, x, y, z] of parts) {
    mesh.position.set(x, y, z);
    e.body.add(mesh);
  }
  e.view.visible = false;
  e.aim = (p) => e.view.position.copy(p);
  e.face = (angle) => { e.view.rotation.y = angle; };
  e.press = (on) => { e.body.rotation.z = on ? -0.2 : 0; };
  return e;
}
