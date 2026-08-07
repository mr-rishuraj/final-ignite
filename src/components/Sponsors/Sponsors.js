'use client';

import siteContent from '@/data/siteContent';
import styles from './Sponsors.module.css';

export default function Sponsors() {
  const { sponsors } = siteContent;
  const duplicatedLogos = [...sponsors.allLogos, ...sponsors.allLogos, ...sponsors.allLogos];

  return (
    <section className={styles.section}>
      <p className={styles.label}>{sponsors.label}</p>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {duplicatedLogos.map((logo, i) => (
            <div key={i} className={styles.logoCard}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logo}
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <p className={styles.logoName}>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
