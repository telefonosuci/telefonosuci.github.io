// [data-hscroll]: pins the section and translates [data-hscroll-track] sideways
// as the user scrolls down. Items animate in through containerAnimation and
// [data-hscroll-progress] fills up. Without this module the track is a native swipe row.
export default function hscroll(gsap) {
  const sections = gsap.utils.toArray('[data-hscroll]');
  sections.forEach((section) => {
    const track = section.querySelector('[data-hscroll-track]');
    const bar = section.querySelector('[data-hscroll-progress]');
    const distance = () => Math.max(0, track.scrollWidth - track.clientWidth);

    section.classList.add('hscroll--pinned');

    const move = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => '+=' + distance(),
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => bar && gsap.set(bar, { scaleX: self.progress }),
      },
    });

    gsap.utils.toArray('[data-hscroll-item]', section).forEach((item) => {
      gsap.from(item.firstElementChild, {
        y: 80,
        rotate: 4,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          containerAnimation: move,
          start: 'left 95%',
          end: 'left 60%',
          scrub: true,
        },
      });
    });
  });

  // matchMedia reverts the tweens on breakpoint change; this drops the class with them.
  return () => sections.forEach((s) => s.classList.remove('hscroll--pinned'));
}
