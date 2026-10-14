// [data-marquee="1|-1"]: giant line of text sliding sideways with the scroll.
export default function marquee(gsap) {
  gsap.utils.toArray('[data-marquee]').forEach((el) => {
    const dir = Number(el.dataset.marquee) || 1;
    gsap.fromTo(el, { xPercent: dir > 0 ? 0 : -50 }, {
      xPercent: dir > 0 ? -50 : 0,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.5 },
    });
  });
}
