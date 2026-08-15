'use client';

import { useEffect, useRef, useState } from 'react';
import siteContent from '@/data/siteContent';
import styles from './PreviousEditions.module.css';

const { previousEditions: pe } = siteContent;

// Split "₹10L+" → { prefix: "₹", num: 10, suffix: "L+" }
function parseValue(str) {
  const m = str.match(/^([^\d]*)(\d+)(.*)$/);
  if (!m) return { prefix: '', num: 0, suffix: str };
  return { prefix: m[1], num: parseInt(m[2], 10), suffix: m[3] };
}

const PARSED   = pe.stats.map(({ value, label }) => ({ ...parseValue(value), label }));
const DURATION = 1600; // ms
const easeOut  = (t) => 1 - Math.pow(1 - t, 4); // easeOutQuart

export default function PreviousEditions() {
  const [counts, setCounts] = useState(PARSED.map(() => 0));
  const statsRef = useRef(null);
  const started  = useRef(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        obs.disconnect();

        const t0 = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - t0) / DURATION);
          const p = easeOut(t);
          setCounts(PARSED.map(({ num }) => Math.round(num * p)));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="editions" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>{pe.label}</span>
          <h2 className={styles.title}>
            {pe.title} <em className={styles.em}>{pe.titleAccent}</em>
          </h2>
          <p className={styles.body}>{pe.body}</p>
        </div>

        <dl className={styles.stats} ref={statsRef}>
          {PARSED.map(({ prefix, suffix, label }, i) => (
            <div key={label} className={styles.stat}>
              <dt className={styles.statValue}>
                {prefix}{counts[i]}{suffix}
              </dt>
              <dd className={styles.statLabel}>{label}</dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  );
}
