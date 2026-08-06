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

        {/* ── Edition-by-edition timeline ── */}
        <ol className={styles.timeline}>
          {pe.timeline.map((ed) => (
            <li
              key={ed.year + ed.name}
              className={`${styles.edition} ${ed.upcoming ? styles.editionUpcoming : ''}`}
            >
              <div className={styles.editionYear}>
                <span className={styles.yearMark} aria-hidden="true" />
                {ed.year}
              </div>
              <div className={styles.editionBody}>
                <h3 className={styles.editionName}>
                  {ed.name}
                  {ed.upcoming && <span className={styles.upcomingTag}>Upcoming</span>}
                </h3>
                <p className={styles.editionPlace}>{ed.place}</p>
                <p className={styles.editionSummary}>{ed.summary}</p>
                <div className={styles.metrics}>
                  {ed.metrics.map((m) => (
                    <span key={m} className={styles.metric}>{m}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* ── Partner logos ── */}
        <div className={styles.partners}>
          <p className={styles.partnersLabel}>Partners &amp; supporters across editions</p>
          <div className={styles.partnerGrid}>
            {sponsors.logos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className={styles.partnerLogo}
                loading="lazy"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
