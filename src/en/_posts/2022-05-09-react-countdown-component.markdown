---
layout: tutorial
title:  "Simple React countdown"
date:   2022-05-09 21:03:36 +0530
categories: Tutorials
lang: en
---
A simple React countdown.

The componen to be used on NextJS has to be loaded throught the dynamic import to avoid rewndered component to be different from the server compy during rendering.

Our component:

```javascript
  import React, { useEffect, useState } from 'react'

  const Countodown = ({ expire, setExpired, expireDate }) => {

    const calculateTimeLeft = () => {
      const difference = +new Date(expireDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        setExpired(true)
      }

      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, i) => {
      timerComponents.push(
        <div key={i} className='countdownbanner__cell'>
          <div>
            {timeLeft[interval]}
          </div>
          <div>
            {interval}{" "}
          </div>
          <style jsx>{`
          .countdownbanner__cell {
            background-color: #fff;
            border-radius: 8px;
            width: 80px;
            height: 80px;
            display: flex;
            flex-direction: column;
            margin: 6px;
            align-items: center;
            justify-content: center;
            font-size: 18px;
          }
          @media (max-width: 768px) {
            .countdownbanner__cell {
              font-size: 14px;
              width: 56px;
              height: 56px;
              margin: 3px;
            }
          }

        `}</style>
        </div>
      );
    });

    return (
      <div>
        <div className='countdownbanner'>

            <div className='countdownbanner-timer'>
              {timerComponents.length ? timerComponents : <span className='expired'>{`Time's up!`}</span>}
            </div>
        </div>

        <style jsx>{`

          .countdownbanner {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 12px;
          }

          @media (max-width: 768px) {
            .countdownbanner {
              padding: 0;
            }
          }

          .countdownbanner-logo {
            height: 40vmin;
            pointer-events: none;
          }

          @media (prefers-reduced-motion: no-preference) {
            .countdownbanner-logo {
              animation: countdownbanner-logo-spin infinite 20s linear;
            }
          }

          .countdownbanner-header {
            background-color: #282c34;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
          }

          .countdownbanner-link {
            color: #61dafb;
          }

          @keyframes countdownbanner-logo-spin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          .countdownbanner-timer {
            display: flex;
            margin: 0 auto;
          }

          .countdownbannercell {
            background-color: #fff;
            border-radius: 8px;
            width: 64px;
            height: 64px;
            display: flex;
            flex-direction: column;
            margin: 6px;
            align-items: center;
            justify-content: center;
            font-size: 42px;
          }

        `}</style>
      </div>
    )
  }

  export default Countodown
```
