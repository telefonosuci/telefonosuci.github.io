// [data-hscroll]: pins the section and translates [data-hscroll-track] sideways
// as the user scrolls down. Items animate in through containerAnimation and
// [data-hscroll-progress] fills up. Without this module the track is a native swipe row.
export default function hscroll(gsap) {
  const sections = gsap.utils.toArray('[data-hscroll]');
  sections.forEach((section) => {
    const track = section.querySelector('[data-hscroll-track]');
    const bar = section.querySelector('[data-hscroll-progress]');
    // The run ends when the last item's right edge lands on the content's right
    // boundary (the track's end padding = container gutter), so nothing stops
    // mid-screen on wide viewports. scrollWidth can't be used: with the pinned
    // track at overflow:visible browsers leave the end padding out of the
    // scrollable area, which cut the run short by one gutter. Both rects shift
    // with the track transform, so their difference is measurement-safe.
    const distance = () => {
      const last = track.lastElementChild;
      if (!last) return 0;
      const gutter = parseFloat(getComputedStyle(track).paddingRight) || 0;
      const edge = track.getBoundingClientRect().right - gutter;
      return Math.max(0, last.getBoundingClientRect().right - edge);
    };

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
