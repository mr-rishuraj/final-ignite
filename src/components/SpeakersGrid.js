import Image from 'next/image';
import Link from 'next/link';
import styles from './SpeakersGrid.module.css';
import siteContent from '@/data/siteContent';

export default function SpeakersGrid() {
  const { speakers } = siteContent;

  const Card = ({ speaker, isDuplicate = false }) => (
    <div className={styles.card} aria-hidden={isDuplicate ? 'true' : undefined}>
      <div className={styles.imgWrapper}>
        {speaker.image
          ? <Image src={speaker.image} alt={isDuplicate ? '' : `${speaker.name} - ${speaker.role} at ${speaker.company}`} width={160} height={160} className={styles.img} />
          : <div className={styles.imgPlaceholder} aria-hidden="true">{speaker.name.charAt(0)}</div>
        }
      </div>
      {isDuplicate ? (
        <span className={styles.name}>{speaker.name}</span>
      ) : (
        <h3 className={styles.name}>{speaker.name}</h3>
      )}
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
          {speakers.row1.map((s, i) => (
            <Card key={`r1-orig-${i}`} speaker={s} isDuplicate={false} />
          ))}
          {[...speakers.row1, ...speakers.row1].map((s, i) => (
            <Card key={`r1-dup-${i}`} speaker={s} isDuplicate={true} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className={`${styles.marqueeWrap} ${styles.marqueeWrapReverse}`}>
        <div className={styles.fadeLeft}  aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />
        <div className={`${styles.track} ${styles.trackReverse}`}>
          {speakers.row2.map((s, i) => (
            <Card key={`r2-orig-${i}`} speaker={s} isDuplicate={false} />
          ))}
          {[...speakers.row2, ...speakers.row2].map((s, i) => (
            <Card key={`r2-dup-${i}`} speaker={s} isDuplicate={true} />
          ))}
        </div>
      </div>

      <div className={styles.btnWrap}>
        <Link href="/speakers" className={styles.viewAllBtn}>
          View All Speakers &amp; Panelists →
        </Link>
      </div>
    </section>
  );
}
