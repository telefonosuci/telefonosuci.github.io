---
layout: post
title:  "Componente React per un conto alla rovescia"
date:   2022-05-09 21:03:36 +0200
categories: Tutorials
lang: it
reading_time: 3
---

Un componente React per il conto alla rovescia: giorni, ore, minuti e secondi aggiornati ogni secondo, con una callback quando il tempo scade.

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
    return () => clearInterval(id); // ferma il timer allo smontaggio
  }, [expireDate, onExpire]);

  if (isZero(timeLeft)) return <span className="countdown__expired">Tempo scaduto!</span>;

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

CSS minimo:

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

### Usarlo con Next.js

Server e browser renderizzano in momenti diversi, quindi i secondi non coincidono e React segnala un *hydration mismatch*. La soluzione più semplice è renderizzare il componente solo nel browser:

```javascript
import dynamic from 'next/dynamic';

const Countdown = dynamic(() => import('../components/Countdown'), { ssr: false });
```

Con l'App Router, `dynamic(..., { ssr: false })` va chiamato dentro un file marcato `'use client'`.
