---
layout: post
title:  "A React hook for a countdown"
date:   2022-05-09 22:03:36 +0200
categories: Tutorials
lang: en
---

If you only need the numbers of a countdown and want to build the markup yourself, a custom hook is cleaner than a full component.

```javascript
import { useEffect, useState } from 'react';

export function useCountdown(targetDate) {
  const target = new Date(targetDate).getTime();
  const [left, setLeft] = useState(() => Math.max(0, target - Date.now()));

  useEffect(() => {
    const id = setInterval(() => {
      const next = Math.max(0, target - Date.now());
      setLeft(next);
      if (next === 0) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  return {
    days: Math.floor(left / 86400000),
    hours: Math.floor(left / 3600000) % 24,
    minutes: Math.floor(left / 60000) % 60,
    seconds: Math.floor(left / 1000) % 60,
    expired: left === 0,
  };
}
```

Usage:

```javascript
function SaleBanner() {
  const { days, hours, minutes, seconds, expired } = useCountdown('2026-12-31T23:59:59');

  if (expired) return <p>The sale is over.</p>;
  return <p>Ends in {days}d {hours}h {minutes}m {seconds}s</p>;
}
```

`Math.max(0, …)` prevents negative values once the date has passed, and the interval stops by itself at zero.
