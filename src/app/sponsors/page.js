'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import siteContent from '@/data/siteContent';
import styles from './sponsors.module.css';

const groups = [
  { label: 'Technology & Finance', key: 'row1' },
  { label: 'Cloud, SaaS & Analytics', key: 'row2' },
  { label: 'Media, VC & Accelerators', key: 'row3' },
];

const LogoCard = ({ logo }) => (
  <div className={styles.card}>
    <div className={styles.logoWrap}>
      {logo.src ? (
        <>
          <img
            src={logo.src}
            alt={logo.alt}
            className={styles.logo}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className={styles.fallback} style={{ backgroundColor: logo.color, display: 'none' }}>
            <span className={styles.initials}>{logo.initials}</span>
          </div>
        </>
      ) : (
        <div className={styles.fallback} style={{ backgroundColor: logo.color }}>
          <span className={styles.initials}>{logo.initials}</span>
        </div>
      )}
    </div>
    <p className={styles.name}>{logo.name}</p>
  </div>
);

export default function SponsorsPage() {
  const { sponsors } = siteContent;

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Our Global Network</span>
          <h1 className={styles.title}>
            Past Sponsors <em className={styles.em}>&amp; Partners</em>
          </h1>
          <p className={styles.desc}>
            The companies, investors, and organisations who have backed and partnered with IGNITE across editions.
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className={styles.section}>
        <div className={styles.container}>
          {groups.map(({ label, key }) => (
            <div key={key} className={styles.group}>
              <div className={styles.groupHeader}>
                <span className={styles.groupDot} />
                <h2 className={styles.groupLabel}>{label}</h2>
              </div>
              <div className={styles.grid}>
                {sponsors[key].map((logo) => (
                  <LogoCard key={logo.name} logo={logo} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
