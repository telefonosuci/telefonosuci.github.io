// [data-speed="0.1"]: moves against the scroll while its section crosses the
// viewport. Positive = slower than the page (further away), negative = faster.
export default function parallax(gsap) {
  gsap.utils.toArray('[data-speed]').forEach((el) => {
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
