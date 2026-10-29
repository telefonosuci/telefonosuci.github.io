// Bridge to the server-rendered HUD: marks current and finished steps, shows error hints, shows the end screen.
// All copy comes from the include (i18n); JS only toggles elements and writes numbers.
import { PHASES } from './state.js';

const HINT_MS = 2500;
const SHAKE_MS = 400; // matches the parcel-shake animation in _parcel-game.scss

export function createHud(root) {
  const stage = root.querySelector('[data-parcel-stage]');
  const steps = [...root.querySelectorAll('[data-parcel-step]')];
  const hints = [...root.querySelectorAll('[data-parcel-hint]')];
  const end = root.querySelector('[data-parcel-end]');
  const restarts = root.querySelectorAll('[data-parcel-restart]');
  let hintTimer = 0, shakeTimer = 0;
  for (const b of restarts) b.hidden = false;

  const hideHints = () => { for (const h of hints) h.hidden = true; };

  return {
    phase(name) {
      const now = PHASES.indexOf(name);
      for (const s of steps) {
        const i = PHASES.indexOf(s.dataset.parcelStep);
        s.classList.toggle('parcel-game__step--done', i < now);
        if (i === now) s.setAttribute('aria-current', 'step');
        else s.removeAttribute('aria-current');
      }
      hideHints();
      end.hidden = true;
    },
    // A wrong move: show its hint (one at a time) and shake the stage. The shake restarts on every call.
    error(id) {
      for (const h of hints) h.hidden = h.dataset.parcelHint !== id;
      clearTimeout(hintTimer);
      hintTimer = setTimeout(hideHints, HINT_MS);
      stage.classList.remove('parcel-game__stage--error');
      void stage.offsetWidth;
      stage.classList.add('parcel-game__stage--error');
      clearTimeout(shakeTimer);
      shakeTimer = setTimeout(() => stage.classList.remove('parcel-game__stage--error'), SHAKE_MS);
    },
    end({ stars, values }) {
      for (const [k, v] of Object.entries(values)) root.querySelector(`[data-parcel-value="${k}"]`).textContent = v;
      for (const v of end.querySelectorAll('[data-parcel-verdict]')) v.hidden = +v.dataset.parcelVerdict !== stars;
      hideHints();
      end.hidden = false;
      end.querySelector('[data-parcel-restart]').focus({ preventScroll: true });
    },
    onRestart(cb) { for (const b of restarts) b.addEventListener('click', cb); },
  };
}
