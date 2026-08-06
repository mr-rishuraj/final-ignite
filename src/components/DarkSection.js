'use client';

import { useEffect, useState } from 'react';
import styles from './DarkSection.module.css';

const items = [
  { n: '01', title: 'Access to Capital', desc: 'Direct access to active investors and venture capital panels looking for the next big disruption — connect with the funding your venture needs to scale.' },
  { n: '02', title: 'World-Class Mentorship', desc: 'Unrivaled guidance from industry leaders who have successfully scaled ventures globally — practical wisdom that goes far beyond the classroom.' },
  { n: '03', title: 'Global Network', desc: 'Join an elite cohort of fellow founders, alumni, and potential co-founders. Build relationships that last well beyond the summit.' },
  { n: '04', title: 'Institutional Backing', desc: 'Leverage the BITS Pilani brand and PIEDS infrastructure to gain credibility, market traction, and the trust that opens doors globally.' },
  { n: '05', title: 'Global Stage', desc: 'Showcase your venture at a truly international platform in Dubai — gain visibility across borders, industries, and entrepreneurial ecosystems.' },
];

const N = items.length;
// How many cards visible each side of center
const SIDE = 2;
const VISIBLE = SIDE * 2 + 1; // 5

// Per-position visual config. `x` is a multiple of --slot (defined in CSS per
// breakpoint) rather than a fixed pixel value, so the fan narrows on small screens.
const POSITIONS = {
  '-2': { scale: 0.70, opacity: 0.30, x: -1.93 },
  '-1': { scale: 0.85, opacity: 0.65, x: -1 },
   '0': { scale: 1.00, opacity: 1.00, x:  0 },
   '1': { scale: 0.85, opacity: 0.65, x:  1 },
   '2': { scale: 0.70, opacity: 0.30, x:  1.93 },
};

function cardStyle(offset) {
  const cfg = POSITIONS[String(offset)] ?? { scale: 0.5, opacity: 0, x: offset };
  return {
    transform: `translateX(calc(var(--slot) * ${cfg.x})) scale(${cfg.scale})`,
    opacity: cfg.opacity,
    zIndex: 10 - Math.abs(offset),
    transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.55s ease',
  };
}

export default function DarkSection() {
  // `center` is the index of the item currently in the middle
  // Decrementing center shifts all cards rightward (left-to-right flow)
  const [center, setCenter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCenter(c => (c + 1) % N);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // Build the visible window: offsets -SIDE … 0 … +SIDE
  const slots = Array.from({ length: VISIBLE }, (_, i) => {
    const offset  = i - SIDE;                          // -2 to +2
    const itemIdx = ((center + offset) % N + N) % N;  // wrap around
    return { offset, itemIdx, item: items[itemIdx] };
  });

  return (
    <section id="who" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Why Join IGNITE</div>
        <div className={styles.content}>
          <h2 className={styles.title}>Founders who join IGNITE gain more than a summit.</h2>
          <div className={styles.descBlock}>
            <p className={styles.desc}>They enter a permanent ecosystem of growth — connecting with global capital, world-class mentors, and a community of changemakers building the future.</p>
          </div>
        </div>
      </div>

      {/* Full-width carousel */}
      <div className={styles.carousel}>
        <div className={styles.fadeLeft}  aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />

        <div className={styles.stage}>
          {slots.map(({ offset, itemIdx, item }) => (
            <div
              key={itemIdx}
              className={`${styles.card} ${offset === 0 ? styles.cardCenter : ''}`}
              style={cardStyle(offset)}
            >
              <span className={styles.num}>{item.n}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className={styles.dots}>
          {items.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === center ? styles.dotActive : ''}`}
              onClick={() => setCenter(i)}
              aria-label={`Go to ${items[i].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
