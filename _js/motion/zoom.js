// [data-zoom]: the block grows into place as it reaches the middle of the viewport.
export default function zoom(gsap) {
  gsap.utils.toArray('[data-zoom]').forEach((el) => {
    gsap.from(el.firstElementChild, {
      scale: 0.85,
      opacity: 0.3,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'center center', scrub: true },
    });
  });
}
