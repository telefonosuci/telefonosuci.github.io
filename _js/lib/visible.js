// onEnter(els, cb): call cb(el) once, the first time each element appears on screen
// (page load, scroll, or un-hidden by JS). Returns a function that stops observing.
export function onEnter(els, cb, options) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      io.unobserve(target);
      cb(target);
    });
  }, options);
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}
