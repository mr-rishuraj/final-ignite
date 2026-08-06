import siteContent from '@/data/siteContent';
import styles from './Institutions.module.css';

export default function Institutions() {
  const { institutions } = siteContent;

  return (
    <section id="institutions" className={styles.section}>
      <div className={styles.container}>
        {institutions.map((org, i) => (
          <article key={org.id} id={org.id} className={styles.org}>

            <div className={styles.head}>
              <span className={styles.eyebrow}>{org.label}</span>
              <h2 className={styles.title}>
                {org.title} <em className={styles.em}>{org.titleAccent}</em>
              </h2>
            </div>

            <div className={styles.grid}>
              <div className={styles.body}>
                {org.body.map((para, j) => <p key={j}>{para}</p>)}
                {org.link && (
                  <a href={org.link.href} className={styles.link}>
                    {org.link.label}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>

              <dl className={styles.facts}>
                {org.facts.map(({ value, label }) => (
                  <div key={label} className={styles.fact}>
                    <dt className={styles.factValue}>{value}</dt>
                    <dd className={styles.factLabel}>{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {i < institutions.length - 1 && <hr className={styles.sep} />}
          </article>
        ))}
      </div>
    </section>
  );
}
