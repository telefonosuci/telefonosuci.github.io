// The game's phases, in order. Each phase is handled by one system; when it calls done() the next one starts.
export const PHASES = ['fill', 'fold', 'tape', 'ship', 'score'];

export function createState(onChange) {
  let i = 0;
  return {
    get phase() { return PHASES[i]; },
    next() {
      if (i === PHASES.length - 1) return;
      onChange(PHASES[++i]);
    },
    reset() { onChange(PHASES[i = 0]); },
  };
}
