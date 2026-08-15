'use client';

import { useEffect, useRef, useState } from 'react';
import siteContent from '@/data/siteContent';
import styles from './Sponsors.module.css';

export default function Sponsors() {
  const { sponsors } = siteContent;
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const row1 = [...sponsors.row1, ...sponsors.row1, ...sponsors.row1];
  const row2 = [...sponsors.row2, ...sponsors.row2, ...sponsors.row2];
  const row3 = [...sponsors.row3, ...sponsors.row3, ...sponsors.row3];

  const LogoCard = ({ src }) => (
    <div className={styles.logoCard}>
      <div className={styles.logoWrapper}>
        <img src={src} alt="sponsor" className={styles.logo} loading="lazy" />
      </div>
    </div>
  );

  return (
    <section className={styles.section} id="sponsors" ref={sectionRef}>

      <p className={`${styles.label} ${visible ? styles.labelVisible : ''}`}>
        {sponsors.label}
      </p>

      {[row1, row2, row3].map((row, ri) => (
        <div
          key={ri}
          className={`${styles.marqueeContainer} ${visible ? styles.rowVisible : ''}`}
          style={{ '--row-delay': `${ri * 120 + 80}ms` }}
        >
          <div className={`${styles.marqueeTrack} ${ri === 1 ? styles.reverse : ''} ${ri === 2 ? styles.slow : ''}`}>
            {row.map((src, i) => <LogoCard key={`r${ri}-${i}`} src={src} />)}
          </div>
        </div>
      ))}

    </section>
  );
}
