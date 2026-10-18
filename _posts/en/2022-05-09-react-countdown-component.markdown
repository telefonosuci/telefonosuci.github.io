---
layout: post
title:  "A simple React countdown component"
date:   2022-05-09 21:03:36 +0200
categories: Tutorials
lang: en
reading_time: 3
---

A countdown component for React: days, hours, minutes and seconds, updated every second, with a callback when time is up.

```javascript
import { useEffect, useState } from 'react';

const getTimeLeft = (expireDate) => {
  const diff = Math.max(0, new Date(expireDate) - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
};

const isZero = (t) => Object.values(t).every((v) => v === 0);

export default function Countdown({ expireDate, onExpire }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(expireDate));

  useEffect(() => {
    const id = setInterval(() => {
      const next = getTimeLeft(expireDate);
      setTimeLeft(next);
      if (isZero(next)) {
        clearInterval(id);
        onExpire?.();
      }
    }, 1000);
    return () => clearInterval(id); // stop the timer on unmount
  }, [expireDate, onExpire]);

  if (isZero(timeLeft)) return <span className="countdown__expired">Time's up!</span>;

  return (
    <div className="countdown">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="countdown__cell">
          <strong>{value}</strong>
          <span>{unit}</span>
        </div>
      ))}
    </div>
  );
}
```

Minimal CSS:

```css
.countdown { display: flex; justify-content: center; gap: 6px; }
.countdown__cell {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  width: 80px; height: 80px; border-radius: 8px; background: #fff;
}
.countdown__cell strong { font-size: 1.5rem; }
@media (max-width: 768px) {
  .countdown__cell { width: 56px; height: 56px; font-size: 14px; }
}
```

### Using it with Next.js

The server and the browser render at different moments, so the seconds won't match and React reports a *hydration mismatch*. The simplest fix is to render the component only in the browser:

```javascript
import dynamic from 'next/dynamic';

const Countdown = dynamic(() => import('../components/Countdown'), { ssr: false });
```

With the App Router, `dynamic(..., { ssr: false })` must be called inside a file marked `'use client'`.
