import siteContent from '@/data/siteContent';
import styles from './About.module.css';

export default function About() {
  const { about } = siteContent;

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>{about.label}</span>
          <h2 className={styles.sectionTitle}>
            {about.title}
            <br />
            <span className={styles.titleAccent}>{about.titleAccent}</span>
          </h2>
          <p className={styles.description}>{about.description}</p>
        </div>

        <div className={styles.grid}>
          {about.audiences.map((audience, i) => (
            <div key={i} className={styles.card}>
              <img
                src={audience.icon}
                alt={audience.title}
                className={styles.cardIcon}
                loading="lazy"
              />
              <h3 className={styles.cardTitle}>{audience.title}</h3>
              <p className={styles.cardDescription}>{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
