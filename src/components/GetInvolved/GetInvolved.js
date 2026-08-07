import siteContent from '@/data/siteContent';
import styles from './GetInvolved.module.css';

export default function GetInvolved() {
  const { getInvolved: gi } = siteContent;

  return (
    <section id="partnership" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{gi.label}</span>
          <h2 className={styles.title}>
            {gi.title} <em className={styles.em}>{gi.titleAccent}</em>
          </h2>
          <p className={styles.body}>{gi.body}</p>
        </div>

        <ol className={styles.steps}>
          {gi.steps.map(({ step, title, desc }) => (
            <li key={step} className={styles.step}>
              <span className={styles.stepNum}>{step}</span>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </li>
          ))}
        </ol>

        <div className={styles.actions}>
          <a href={gi.ctaEmail.href} className={styles.ctaPrimary}>
            {gi.ctaEmail.label}
          </a>
        </div>

        <p className={styles.note}>{gi.note}</p>
      </div>
    </section>
  );
}
