// [data-consent] cookie banner: gtag.js (GA4) loads only after "Accept" (no request to Google before consent).
// Config on the dialog: data-ga-id, data-version, data-max-age-days. [data-consent-open] reopens it.
const KEY = 'consent-analytics';

export default function consent() {
  const dialog = document.querySelector('[data-consent]');
  if (!dialog) return;
  const { gaId, version } = dialog.dataset;
  const maxAge = Number(dialog.dataset.maxAgeDays) * 864e5;

  let loaded = false;
  const load = () => {
    if (loaded) return;
    loaded = true;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', gaId);
  };
  // Revoking: drop GA cookies (_ga, _ga_*) and reload so gtag is gone from the page.
  const revoke = () => {
    document.cookie.split('; ').map((c) => c.split('=')[0]).filter((n) => n.startsWith('_ga')).forEach((n) => {
      document.cookie = n + '=; Max-Age=0; path=/';
      document.cookie = n + '=; Max-Age=0; path=/; domain=' + location.hostname;
    });
    if (loaded) location.reload();
  };
  // Stored as { v, choice, at }; an outdated version or expired choice counts as no choice.
  let choice = null;
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (saved && String(saved.v) === version && Date.now() - saved.at < maxAge) choice = saved.choice;
  } catch {}

  dialog.addEventListener('click', (e) => {
    const v = e.target.value;
    if (!v) return;
    try { localStorage.setItem(KEY, JSON.stringify({ v: version, choice: v, at: Date.now() })); } catch {}
    dialog.close();
    v === 'granted' ? load() : revoke();
  });
  document.querySelectorAll('[data-consent-open]').forEach((b) => b.addEventListener('click', () => dialog.show()));

  if (choice === 'granted') load();
  else if (!choice) dialog.show();
}
