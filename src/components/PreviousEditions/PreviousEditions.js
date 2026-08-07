import siteContent from '@/data/siteContent';
import styles from './PreviousEditions.module.css';

export default function PreviousEditions() {
  const { previousEditions: pe, sponsors } = siteContent;

  return (
    <section id="editions" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>{pe.label}</span>
          <h2 className={styles.title}>
            {pe.title} <em className={styles.em}>{pe.titleAccent}</em>
          </h2>
          <p className={styles.body}>{pe.body}</p>
        </div>

        {/* ── Cumulative figures ── */}
        <dl className={styles.stats}>
          {pe.stats.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <dt className={styles.statValue}>{value}</dt>
              <dd className={styles.statLabel}>{label}</dd>
            </div>
          ))}
        </dl>


      </div>
    </section>
  );
}
