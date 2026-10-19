---
layout: post
title:  "Un hook React per il conto alla rovescia"
date:   2022-05-09 22:03:36 +0200
categories: Tutorials
lang: it
reading_time: 2
audience: dev
---

Se del conto alla rovescia ti servono solo i numeri e vuoi costruire il markup a modo tuo, un hook personalizzato è più pulito di un componente completo.

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

Uso:

```javascript
function SaleBanner() {
  const { days, hours, minutes, seconds, expired } = useCountdown('2026-12-31T23:59:59');

  if (expired) return <p>I saldi sono finiti.</p>;
  return <p>Termina tra {days}g {hours}h {minutes}m {seconds}s</p>;
}
```

`Math.max(0, …)` evita valori negativi quando la data è passata, e l'intervallo si ferma da solo quando arriva a zero.
