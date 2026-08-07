'use client';

import siteContent from '@/data/siteContent';
import styles from './Sponsors.module.css';

export default function Sponsors() {
  const { sponsors } = siteContent;
  const row1Duplicated = [...sponsors.row1, ...sponsors.row1, ...sponsors.row1];
  const row2Duplicated = [...sponsors.row2, ...sponsors.row2, ...sponsors.row2];

  const LogoItem = ({ logo }) => (
    <div key={logo.name} className={styles.logoCard}>
      <div className={styles.logoWrapper}>
        {logo.src ? (
          <img
            src={logo.src}
            alt={logo.alt}
            className={styles.logo}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : null}
        <div
          className={styles.coloredLogo}
          style={{ backgroundColor: logo.color }}
        >
          <span className={styles.logoInitials}>{logo.initials}</span>
        </div>
      </div>
      <p className={styles.logoName}>{logo.name}</p>
    </div>
  );

  return (
    <section className={styles.section}>
      <p className={styles.label}>{sponsors.label}</p>

      {/* Row 1 */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {row1Duplicated.map((logo, i) => (
            <LogoItem key={`row1-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className={styles.marqueeContainer}>
        <div className={`${styles.marqueeTrack} ${styles.reverse}`}>
          {row2Duplicated.map((logo, i) => (
            <LogoItem key={`row2-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
