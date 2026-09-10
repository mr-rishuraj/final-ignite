'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
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

  const LogoCard = ({ src, isDuplicate = false }) => {
    const isPeakXv = src.toLowerCase().includes('peak_xv');
    const alt = isDuplicate ? '' : isPeakXv ? 'Peak XV Partners — IGNITE Sponsor' : 'IGNITE partner and sponsor';
    return (
      <div className={styles.logoCard} aria-hidden={isDuplicate ? 'true' : undefined}>
        <div className={styles.logoWrapper}>
          <img src={src} alt={alt} className={styles.logo} loading="lazy" />
        </div>
      </div>
    );
  };

  const rows = [sponsors.row1, sponsors.row2, sponsors.row3];

  return (
    <section className={styles.section} id="sponsors" ref={sectionRef} aria-labelledby="sponsors-title">

      <div className={`${styles.header} ${visible ? styles.headerVisible : ''}`}>
        <p className={styles.label}>
          {sponsors.label}
        </p>
        <h2 id="sponsors-title" className={styles.title}>
          Backed by Industry Leaders <em className={styles.em}>&amp; Global Partners</em>
        </h2>
      </div>

      {rows.map((row, ri) => (
        <div
          key={ri}
          className={`${styles.marqueeContainer} ${visible ? styles.rowVisible : ''}`}
          style={{ '--row-delay': `${ri * 120 + 80}ms` }}
        >
          <div className={`${styles.marqueeTrack} ${ri === 1 ? styles.reverse : ''} ${ri === 2 ? styles.slow : ''}`}>
            {row.map((src, i) => (
              <LogoCard key={`r${ri}-orig-${i}`} src={src} isDuplicate={false} />
            ))}
            {[...row, ...row].map((src, i) => (
              <LogoCard key={`r${ri}-dup-${i}`} src={src} isDuplicate={true} />
            ))}
          </div>
        </div>
      ))}

      <div className={styles.btnWrap}>
        <Link href="/sponsors" className={styles.viewAllBtn}>
          Explore All Partners &amp; Sponsors →
        </Link>
      </div>

    </section>
  );
}
