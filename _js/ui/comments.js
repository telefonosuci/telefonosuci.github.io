// [data-comments]: click-to-load Disqus. It sets tracking cookies, so nothing loads before [data-comments-load] is clicked.
// Config on the container: data-shortname, data-url, data-identifier, data-lang.
export default function comments() {
  const box = document.querySelector('[data-comments]');
  if (!box) return;
  const { shortname, url, identifier, lang } = box.dataset;
  box.querySelector('[data-comments-load]').addEventListener('click', () => {
    window.disqus_config = function () {
      this.page.url = url;
      this.page.identifier = identifier;
      this.language = lang;
    };
    box.innerHTML = '';
    const s = document.createElement('script');
    s.src = `https://${shortname}.disqus.com/embed.js`;
    s.setAttribute('data-timestamp', +new Date());
    document.body.appendChild(s);
  });
}
