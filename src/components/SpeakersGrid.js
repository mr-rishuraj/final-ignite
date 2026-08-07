import styles from './SpeakersGrid.module.css';
import siteContent from '@/data/siteContent';

export default function SpeakersGrid() {
  const { speakers } = siteContent;

  // Duplicate each row enough times for a seamless infinite loop
  const row1Items = [...speakers.row1, ...speakers.row1, ...speakers.row1];
  const row2Items = [...speakers.row2, ...speakers.row2, ...speakers.row2];

  const Card = ({ speaker }) => (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        {speaker.image
          ? <img src={speaker.image} alt={speaker.name} className={styles.img} />
          : <div className={styles.imgPlaceholder} aria-hidden="true">{speaker.name.charAt(0)}</div>
        }
      </div>
      <h3 className={styles.name}>{speaker.name}</h3>
      <p className={styles.role}>{speaker.role}{speaker.company ? `, ${speaker.company}` : ''}</p>
    </div>
  );

  return (
    <section id="speakers" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>{speakers.label}</div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {speakers.title} <em>{speakers.titleAccent}</em>
          </h2>
          <div className={styles.descBlock}>
            <p className={styles.desc}>{speakers.description}</p>
          </div>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className={styles.marqueeWrap}>
        <div className={styles.fadeLeft}  aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />
        <div className={styles.track}>
          {row1Items.map((s, i) => (
            <Card key={`r1-${i}`} speaker={s} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className={`${styles.marqueeWrap} ${styles.marqueeWrapReverse}`}>
        <div className={styles.fadeLeft}  aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />
        <div className={`${styles.track} ${styles.trackReverse}`}>
          {row2Items.map((s, i) => (
            <Card key={`r2-${i}`} speaker={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
