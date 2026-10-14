// [data-hero]: intro animation, then the content drifts up and fades while
// the shader background [data-hero-bg] moves slower (parallax depth).
export default function hero(gsap) {
  const el = document.querySelector('[data-hero]');
  if (!el) return;
  const content = el.querySelector('[data-hero-content]');
  const bg = el.querySelector('[data-hero-bg]');

  gsap.from(content.children, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.12 });

  const st = { trigger: el, start: 'top top', end: 'bottom top', scrub: true };
  gsap.to(content, { yPercent: -35, opacity: 0, ease: 'none', scrollTrigger: st });
  if (bg) gsap.to(bg, { yPercent: 25, scale: 1.1, ease: 'none', scrollTrigger: { ...st } });
}
