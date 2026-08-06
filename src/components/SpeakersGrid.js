import styles from './SpeakersGrid.module.css';
import siteContent from '@/data/siteContent';

const colors = ['#d94020', '#b06040', '#8a6050', '#c05030'];

export default function SpeakersGrid() {
  const { speakers } = siteContent;
  const items = [...speakers.list, ...speakers.list, ...speakers.list, ...speakers.list];

  return (
    <section id="speakers" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Past Speakers & Panelists</div>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet the Inspiring Voices of IGNITE.</h2>
          <div className={styles.descBlock}>
            <p className={styles.desc}>{speakers.description}</p>
          </div>
        </div>
      </div>

      <div className={styles.marqueeWrap}>
        <div className={styles.fadeLeft}  aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />
        <div className={styles.track}>
          {items.map((s, i) => (
            <div key={i} className={styles.card}>
              <div
                className={styles.imgWrapper}
                style={{ backgroundColor: colors[i % colors.length] }}
              >
                <img src={s.image} alt={s.name} className={styles.img} />
              </div>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.role}>{s.role}{s.company ? `, ${s.company}` : ''}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
