// The cartoon glove that replaces the mouse cursor while filling and folding. Its origin is the tip of
// the index finger; it lives on the pointer's ray, a fixed distance from the camera, always turned to face it,
// so it reads like a classic 2D pointer but with volume, and stays the same size wherever it goes.
// Toon shading plus an inverted-hull outline give the cartoon look. Not shown for touch: the finger is the cursor.
import { BackSide, CapsuleGeometry, CylinderGeometry, Mesh, MeshBasicMaterial, MeshToonMaterial, SphereGeometry, Vector3 } from 'three';
import { COLORS, entity } from '../assets/greybox.js';

const DIST = 2.4; // from the camera: in front of everything on the table
const SCALE = 0.17; // the glove below is ~1.2 units tall
const OUTLINE = 1.1; // outline shell scale
const TILT = [-0.45, 0, -0.35]; // resting pose: finger leaning into the screen and to the right, like 👆
const PRESS = -0.9; // x tilt while the button is down: a tap with the fingertip

const glove = new MeshToonMaterial({ color: COLORS.glove });
const ink = new MeshBasicMaterial({ color: COLORS.ink, side: BackSide });

function part(geometry, [x, y, z], rz = 0, scale = [1, 1, 1]) {
  const mesh = new Mesh(geometry, glove);
  mesh.position.set(x, y, z);
  mesh.rotation.z = rz;
  mesh.scale.set(...scale);
  const shell = new Mesh(geometry, ink);
  shell.scale.setScalar(OUTLINE);
  mesh.add(shell);
  return mesh;
}

export function createHand() {
  const e = entity('hand');
  const knuckle = new SphereGeometry(0.1, 16, 12);
  e.body.add(
    part(new CapsuleGeometry(0.11, 0.28, 6, 16), [-0.12, -0.25, 0]), // index finger, tip at the origin
    part(new SphereGeometry(1, 24, 16), [0.05, -0.7, 0], 0, [0.34, 0.3, 0.2]), // palm
    part(knuckle, [0.02, -0.48, 0.13]), // the other three fingers, curled
    part(knuckle, [0.15, -0.51, 0.11]),
    part(knuckle, [0.27, -0.57, 0.07]),
    part(new CapsuleGeometry(0.09, 0.2, 6, 12), [-0.33, -0.66, 0.06], 0.7), // thumb
    part(new CylinderGeometry(0.3, 0.26, 0.16, 24), [0.06, -1.05, 0]), // cuff
  );
  e.body.rotation.set(...TILT);
  e.view.scale.setScalar(SCALE);
  e.view.visible = false;

  const p = new Vector3();
  e.aim = (ray, camera) => {
    e.view.position.copy(ray.ray.at(DIST, p));
    e.view.quaternion.copy(camera.quaternion);
  };
  e.show = (on) => { e.view.visible = on; };
  e.press = (on) => { e.body.rotation.x = on ? PRESS : TILT[0]; };
  return e;
}
