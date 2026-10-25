// [data-filter] buttons show only the [data-cats] items of that category ("all" shows everything).
export default function blogFilter() {
  const buttons = document.querySelectorAll('[data-filter]');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      buttons.forEach((b) => b.classList.toggle('chip--active', b === btn));
      document.querySelectorAll('[data-cats]').forEach((li) => {
        li.hidden = f !== 'all' && !li.dataset.cats.split('|').includes(f);
      });
    });
  });
}
