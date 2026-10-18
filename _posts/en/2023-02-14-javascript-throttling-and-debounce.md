---
layout: post
title:  "JavaScript throttle and debounce"
date:   2023-02-14 09:03:36 +0100
categories: Frontend
lang: en
reading_time: 2
---

Some events fire dozens of times per second: `scroll`, `resize`, `mousemove`, `input`. Running heavy code on every single one slows the page down. **Debounce** and **throttle** limit how often a function runs.

### Debounce: wait until it stops

The function runs only after the events have stopped for `wait` milliseconds. Typical use: a search box that calls the API when the user stops typing.

```javascript
function debounce(fn, wait = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

input.addEventListener('input', debounce((e) => search(e.target.value), 400));
```

### Throttle: at most once every N ms

The function runs at most once every `wait` milliseconds, even if the event keeps firing. Typical use: updating something while scrolling.

```javascript
function throttle(fn, wait = 300) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn(...args);
    }
  };
}

window.addEventListener('scroll', throttle(updateProgressBar, 100));
```

### Which one?

- **Debounce** when only the final value matters (search, form validation, saving a draft).
- **Throttle** when you need regular updates while the event is happening (scroll, drag, resize).

For visual updates tied to scrolling, `requestAnimationFrame` is often an even better choice: it syncs with the browser's repaint.
