'use client';

import siteContent from '@/data/siteContent';
import styles from './Sponsors.module.css';

export default function Sponsors() {
  const { sponsors } = siteContent;

  const row1 = [...sponsors.row1, ...sponsors.row1, ...sponsors.row1];
  const row2 = [...sponsors.row2, ...sponsors.row2, ...sponsors.row2];
  const row3 = [...sponsors.row3, ...sponsors.row3, ...sponsors.row3];

  const LogoCard = ({ src, i }) => (
    <div className={styles.logoCard}>
      <div className={styles.logoWrapper}>
        <img
          src={src}
          alt="sponsor"
          className={styles.logo}
          loading="lazy"
        />
      </div>
    </div>
  );

  return (
    <section className={styles.section} id="sponsors">
      <p className={styles.label}>{sponsors.label}</p>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {row1.map((src, i) => <LogoCard key={`r1-${i}`} src={src} />)}
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={`${styles.marqueeTrack} ${styles.reverse}`}>
          {row2.map((src, i) => <LogoCard key={`r2-${i}`} src={src} />)}
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={`${styles.marqueeTrack} ${styles.slow}`}>
          {row3.map((src, i) => <LogoCard key={`r3-${i}`} src={src} />)}
        </div>
      </div>
    </section>
  );
}
