// [data-marquee="1|-1"] [data-marquee-speed="px/s", default 80]: giant line of text
// sliding sideways in an endless loop at a fixed speed, independent of scroll.
// The text is printed twice, so moving by half its width loops seamlessly.
export default function marquee(gsap) {
  gsap.utils.toArray('[data-marquee]').forEach((el) => {
    const dir = Number(el.dataset.marquee) || 1;
    const speed = Number(el.dataset.marqueeSpeed) || 80;
    const duration = () => el.offsetWidth / 2 / speed;
    const tween = gsap.fromTo(el, { xPercent: dir > 0 ? 0 : -50 }, {
      xPercent: dir > 0 ? -50 : 0,
      duration: duration(),
      ease: 'none',
      repeat: -1,
    });
    // Web fonts change the line width, so recompute to keep the px/s speed exact.
    document.fonts?.ready.then(() => tween.duration(duration()));
  });
}
