import siteContent from '@/data/siteContent';
import styles from './Ignite2026.module.css';

export default function Ignite2026() {
  const { ignite2026 } = siteContent;

  return (
    <section id="ignite-2026" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>{ignite2026.label}</span>
            <h2 className={styles.title}>
              {ignite2026.title}{' '}
              <em className={styles.em}>{ignite2026.titleAccent}</em>
            </h2>
            <p className={styles.body}>{ignite2026.body}</p>

            <dl className={styles.marks}>
              {ignite2026.marks.map(({ value, label }) => (
                <div key={label} className={styles.mark}>
                  <dt className={styles.markValue}>{value}</dt>
                  <dd className={styles.markLabel}>{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className={styles.figure}>
            <img
              src={ignite2026.image.src}
              alt={ignite2026.image.alt}
              className={styles.image}
              loading="lazy"
            />
            <figcaption className={styles.caption}>
              <span className={styles.captionDot} aria-hidden="true" />
              Dubai · 2026
            </figcaption>
          </figure>
        </div>

      </div>
    </section>
  );
}
