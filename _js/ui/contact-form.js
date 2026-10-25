// [data-contact-form]: submit via fetch so the visitor stays on the page instead of Formspree's thank-you page.
// The result shows in [data-contact-dialog], whose data-sent / data-error hold the two messages.
export default function contactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  const dialog = document.querySelector('[data-contact-dialog]'), btn = form.querySelector('button');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    let ok = false;
    try {
      ok = (await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })).ok;
    } catch {}
    dialog.querySelector('p').textContent = ok ? dialog.dataset.sent : dialog.dataset.error;
    dialog.showModal();
    if (ok) form.reset();
    btn.disabled = false;
  });
}
