import styles from './Features.module.css';
import siteContent from '@/data/siteContent';

export default function Features() {
  const { about, previousEditions: pe } = siteContent;
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>

        {/* ── About header ── */}
        <div className={styles.header}>
          <div className={styles.label}>{about.label}</div>
          <div className={styles.headerTop}>
            <h2 className={styles.title}>{about.title} <em>{about.titleAccent}</em></h2>
            <p className={styles.desc}>{about.description}</p>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className={styles.statsBlock} id="editions">
          <dl className={styles.stats}>
            {pe.stats.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <dt className={styles.statValue}>{value}</dt>
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
