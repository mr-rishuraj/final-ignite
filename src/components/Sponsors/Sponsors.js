import siteContent from '@/data/siteContent';
import styles from './Sponsors.module.css';

export default function Sponsors() {
  const { sponsors } = siteContent;
  const duplicatedLogos = [...sponsors.logos, ...sponsors.logos, ...sponsors.logos, ...sponsors.logos];

  return (
    <section className={styles.section}>
      <p className={styles.label}>{sponsors.label}</p>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {duplicatedLogos.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} className={styles.logo} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
