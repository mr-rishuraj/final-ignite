import siteContent from '@/data/siteContent';
import styles from './Sponsors.module.css';

export default function Sponsors() {
  const { sponsors } = siteContent;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>{sponsors.label}</p>

        {/* Sponsors Section */}
        <div className={styles.section_block}>
          <h3 className={styles.section_title}>Sponsors</h3>
          <div className={styles.grid}>
            {sponsors.sponsorsList.map((sponsor, i) => (
              <div key={i} className={styles.logoCard}>
                <div
                  className={styles.colorLogo}
                  style={{ backgroundColor: sponsor.color }}
                >
                  <span className={styles.logoInitials}>{sponsor.initials}</span>
                </div>
                <p className={styles.logoName}>{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className={styles.section_block}>
          <h3 className={styles.section_title}>Partners</h3>
          <div className={styles.grid}>
            {sponsors.partnersList.map((partner, i) => (
              <div key={i} className={styles.logoCard}>
                <div
                  className={styles.colorLogo}
                  style={{ backgroundColor: partner.color }}
                >
                  <span className={styles.logoInitials}>{partner.initials}</span>
                </div>
                <p className={styles.logoName}>{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
