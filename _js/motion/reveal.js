// [data-reveal]: fade up when entering the viewport.
// [data-reveal-stagger]: same, one child after the other.
const from = { y: 48, opacity: 0, duration: 0.9, ease: 'power3.out' };

export default function reveal(gsap) {
  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.from(el, { ...from, scrollTrigger: { trigger: el, start: 'top 85%' } });
  });

  gsap.utils.toArray('[data-reveal-stagger]').forEach((el) => {
    gsap.from(el.children, { ...from, stagger: 0.08, scrollTrigger: { trigger: el, start: 'top 85%' } });
  });
}
