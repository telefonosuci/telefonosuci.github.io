// [data-draw]: stroke the SVG shapes inside as if drawn by a pen when the element appears.
// onEnter (IntersectionObserver) instead of ScrollTrigger: it fires on any kind of appearance
// (page load, scroll, a filter un-hiding the card), not on scroll positions.
// Each shape's real length is measured (pathLength="1" is not honoured by every browser
// for dasharray), then the dash offset runs from full length to 0.
import { onEnter } from "../lib/visible.js";

export default function draw(gsap) {
  const els = gsap.utils.toArray("[data-draw]");
  const tweens = new Map();

  els.forEach((el) => {
    const shapes = gsap.utils.toArray(
      el.querySelectorAll("path, rect, circle, line, polyline, polygon"),
    );
    const len = shapes.map((s) => s.getTotalLength());
    tweens.set(
      el,
      gsap.fromTo(
        shapes,
        { strokeDasharray: (i) => len[i], strokeDashoffset: (i) => len[i] },
        {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: "power1.inOut",
          stagger: 0.2,
          delay: 0.2,
          paused: true,
        },
      ),
    );
  });

  return onEnter(els, (el) => tweens.get(el).play());
}
