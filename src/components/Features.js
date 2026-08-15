'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Features.module.css';
import siteContent from '@/data/siteContent';

const { about, previousEditions: pe } = siteContent;

function parseValue(str) {
  const m = str.match(/^([^\d]*)(\d+)(.*)$/);
  if (!m) return { prefix: '', num: 0, suffix: str };
  return { prefix: m[1], num: parseInt(m[2], 10), suffix: m[3] };
}

const PARSED   = pe.stats.map(({ value, label }) => ({ ...parseValue(value), label }));
const DURATION = 1600;
const easeOut  = (t) => 1 - Math.pow(1 - t, 4);

export default function Features() {
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
    <section id="about" className={styles.section}>
      <div className={styles.container}>

        {/* About header */}
        <div className={styles.header}>
          <div className={styles.label}>{about.label}</div>
          <div className={styles.headerTop}>
            <h2 className={styles.title}>{about.title} <em>{about.titleAccent}</em></h2>
            <p className={styles.desc}>{about.description}</p>
          </div>
        </div>

        {/* Stats with count-up */}
        <div className={styles.statsBlock} id="editions" ref={statsRef}>
          <dl className={styles.stats}>
            {PARSED.map(({ prefix, suffix, label }, i) => (
              <div key={label} className={styles.stat}>
                <dt className={styles.statValue}>{prefix}{counts[i]}{suffix}</dt>
                <dd className={styles.statLabel}>{label}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.statsDesc}>{pe.body}</p>
        </div>

      </div>
    </section>
  );
}
