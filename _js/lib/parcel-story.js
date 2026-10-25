// The banner story (arrive, open, fill, close, tape, label, ship), shared by banner-parcel-line (2D) and banner-parcel-3d (WebGL2).
import { reducedMotion } from './env.js';
import { onResize, loopWhileVisible } from './canvas.js';
import { prog } from './math.js';

// One parcel's timeline in seconds. It starts with the glide that brings it to the middle
// (and ships the previous one off), then the parcel stands still for each step.
export const T = 6.2;
export const MOVE = [0, 1.4];
export const OPEN = [1.6, 2.2];
export const DROPS = [2.3, 2.9, 3.5], FALL = 0.55;
export const CLOSE = [4.3, 4.6, 4.9]; // 3D: short flaps fold first, the long ones go on top. 2D uses the whole span.
export const TAPE = [5.0, 5.4];
export const LABEL = [5.5, 5.8];

// Drives draw(seconds). With data-banner-scroll the scene time follows the page: crossing the viewport
// plays one parcel from arrival to shipping. Otherwise it follows the clock and loops.
// Reduced motion: a static packed parcel in the middle.
export function play(canvas, resize, draw) {
  const still = () => draw(T - 0.1);
  onResize(canvas, () => { resize(); if (reducedMotion) still(); });
  resize();
  if (reducedMotion) return still();

  const scroll = 'bannerScroll' in canvas.dataset;
  const scrolled = () => {
    const b = canvas.getBoundingClientRect();
    return prog(innerHeight - b.top, [0, innerHeight + b.height]) * (T + MOVE[1]);
  };
  let now = scroll ? scrolled() : 0;
  loopWhileVisible(canvas, (ms) => {
    now = scroll ? now + (scrolled() - now) * 0.15 : ms / 1000; // ponytail: eases toward the scroll position, so wheel steps don't jump
    draw(now);
  });
}
