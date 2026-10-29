// Minimal tweens advanced by the game loop. Under reduced motion every tween jumps to its last frame:
// the game stays playable, it just stops animating on its own.
import { ease } from '../lib/math.js';
import { reducedMotion } from '../lib/env.js';

export function createTweens() {
  let list = [];
  return {
    // Calls step(p) with p going 0 → 1 through `curve` over `dur` seconds; resolves on the last frame.
    to(dur, step, curve = ease) {
      return new Promise((resolve) => {
        if (reducedMotion || dur <= 0) { step(1); resolve(); return; }
        list.push({ t: 0, dur, step, curve, resolve });
      });
    },
    update(dt) {
      list = list.filter((tw) => {
        tw.t = Math.min(tw.dur, tw.t + dt);
        tw.step(tw.curve(tw.t / tw.dur));
        if (tw.t < tw.dur) return true;
        tw.resolve();
        return false;
      });
    },
    clear() { list = []; },
  };
}
