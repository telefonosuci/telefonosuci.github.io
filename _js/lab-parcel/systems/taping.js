// Tape phase: press on the lid, drag the gun along the seam, release to cut.
// Each press lays one straight strip, as many as needed; the phase ends once all strips together cover the seam.
// Mistakes: pressing off the lid, or laying a strip off the seam (it turns red but stays, and still covers what it crosses).
// On touch the gun sits a bit further up the screen than the finger, so the finger doesn't hide it.
import { Color, Plane, Vector3 } from 'three';
import { COLORS } from '../assets/greybox.js';
import { SIZE } from '../entities/box.js';
import { createStrip } from '../entities/tape-strip.js';
import { coverage, onSeam } from './scoring.js';

const DONE = 0.95; // seam coverage that seals the parcel
const TOUCH_LIFT = 0.25; // world units towards the back of the lid
const REACH = 0.2; // how far past the lid edges the gun can still lay tape
const MIN_STRIP = 0.05; // shorter than this is a tap, not a strip: dropped without counting
const ROAM = [1.6, 1.2]; // |x|, |z| the gun can follow the pointer to, so it never leaves the frame
const RED = new Color(COLORS.error);

export function createTaping({ box, gun, cargo, strips, mistake, done }) {
  const plane = new Plane(new Vector3(0, 1, 0), -box.top);
  const p = new Vector3();
  let strip = null;

  // Pointer → point on the lid plane. The gun follows it everywhere (clamped to ROAM);
  // returns the point only when it is over the lid, where tape can be laid.
  const aim = (ray, e) => {
    if (!ray.ray.intersectPlane(plane, p)) return null;
    if (e.pointerType === 'touch') p.z -= TOUCH_LIFT;
    p.x = Math.max(-ROAM[0], Math.min(ROAM[0], p.x));
    p.z = Math.max(-ROAM[1], Math.min(ROAM[1], p.z));
    gun.aim(p);
    return Math.abs(p.x) < SIZE.w / 2 + REACH && Math.abs(p.z) < SIZE.d / 2 + REACH ? p : null;
  };

  return {
    // The gun shows up resting at the start of the seam, ready to go, and stays visible for the whole phase.
    enter() {
      gun.aim(p.set(-SIZE.w / 2, box.top, 0));
      gun.face(0);
      gun.view.visible = true;
    },
    leave() { gun.view.visible = false; gun.press(false); strip = null; },
    hover: () => 'none', // the gun is the cursor
    down(ray, e) {
      const q = aim(ray, e);
      if (!q) return mistake('tape_miss');
      strip = createStrip(q);
      strips.push(strip);
      cargo.add(strip.view);
      gun.press(true);
    },
    move(ray, e) {
      const q = aim(ray, e);
      if (!q || !strip) return;
      strip.stretch(q);
      if (strip.length > 0.02) gun.face(strip.angle);
    },
    up() {
      if (!strip) return;
      const s = strip;
      gun.press(false);
      strip = null;
      if (s.length < MIN_STRIP) {
        cargo.remove(s.view);
        strips.pop();
        return;
      }
      if (!onSeam(s)) {
        s.view.material.color.copy(RED); // stays on the lid: a mistake, but its tape is there
        mistake('tape_off_seam');
      }
      if (coverage(strips, SIZE.w) >= DONE) done();
    },
  };
}
