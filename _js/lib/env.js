// Device and user preferences, read once at load.
export const dpr = Math.min(window.devicePixelRatio || 1, 2);
export const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
