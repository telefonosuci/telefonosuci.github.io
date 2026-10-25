// Smoothstep on 0..1.
export const ease = (p) => p * p * (3 - 2 * p);
// Where t sits inside [a, b], clamped to 0..1.
export const prog = (t, [a, b]) => Math.min(1, Math.max(0, (t - a) / (b - a)));
