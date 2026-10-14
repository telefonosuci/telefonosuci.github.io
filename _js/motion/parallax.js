// [data-speed="0.1"]: on wide screens moves against the scroll while its section
// crosses the viewport (positive = slower than the page, negative = faster).
// On narrow screens the elements stack in one column, where different speeds would
// make them overlap, so they slide in sideways instead, alternating left/right.
export default function parallax(gsap, wide) {
  gsap.utils.toArray('[data-speed]').forEach((el, i) => {
    if (!wide) {
      gsap.from(el, {
        xPercent: i % 2 ? 12 : -12,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%' },
      });
      return;
    }

    const speed = parseFloat(el.dataset.speed) || 0;
    gsap.fromTo(el, { y: () => speed * window.innerHeight * 0.5 }, {
      y: () => -speed * window.innerHeight * 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  });
}
