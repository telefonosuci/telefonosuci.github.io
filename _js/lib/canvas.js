// Canvas plumbing shared by every scene.
import { dpr } from './env.js';

// Sizes the backing store to the CSS box × dpr and returns the CSS size.
export function fit(canvas) {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  canvas.width = w * dpr; canvas.height = h * dpr;
  return { w, h };
}

// Calls cb only when the canvas really changes size: mobile fires resize when the URL bar slides on scroll.
export function onResize(canvas, cb) {
  let w = canvas.clientWidth, h = canvas.clientHeight;
  window.addEventListener('resize', () => {
    if (canvas.clientWidth === w && canvas.clientHeight === h) return;
    w = canvas.clientWidth; h = canvas.clientHeight;
    cb();
  });
}

// Runs frame(ms) on every animation frame while el is on screen.
export function loopWhileVisible(el, frame) {
  let raf = 0;
  const tick = (ms) => { frame(ms); raf = requestAnimationFrame(tick); };
  new IntersectionObserver(([e]) => {
    cancelAnimationFrame(raf);
    if (e.isIntersecting) raf = requestAnimationFrame(tick);
  }).observe(el);
}
