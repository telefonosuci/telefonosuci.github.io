// Motion entry point. Components declare behaviour with data-* attributes;
// each module below wires one attribute. Everything is skipped under
// prefers-reduced-motion, and pinned horizontal scroll only runs on wide screens.
import hero from './hero.js';
import reveal from './reveal.js';
import parallax from './parallax.js';
import marquee from './marquee.js';
import hscroll from './hscroll.js';
import zoom from './zoom.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.matchMedia().add(
  {
    motion: '(prefers-reduced-motion: no-preference)',
    wide: '(min-width: 900px) and (prefers-reduced-motion: no-preference)',
  },
  ({ conditions }) => {
    if (!conditions.motion) return;
    // Order matters: pinned sections first, so triggers below them account for the pin spacing.
    const cleanup = conditions.wide ? hscroll(gsap) : undefined;
    hero(gsap);
    reveal(gsap);
    parallax(gsap, conditions.wide);
    marquee(gsap);
    zoom(gsap);
    ScrollTrigger.sort();
    return cleanup;
  }
);

// Fonts change text metrics, which changes every trigger position.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
