// Motion entry point. Components declare behaviour with data-* attributes;
// each module below wires one attribute. Everything is skipped under
// prefers-reduced-motion; parallax switches to a simpler variant on narrow screens.
import hero from './motion/hero.js';
import reveal from './motion/reveal.js';
import parallax from './motion/parallax.js';
import marquee from './motion/marquee.js';
import hscroll from './motion/hscroll.js';
import zoom from './motion/zoom.js';
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
    const cleanup = hscroll(gsap);
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
