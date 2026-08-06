import Image from 'next/image';
import siteContent from '@/data/siteContent';
import styles from './Venue.module.css';

export default function Venue() {
  const { venue } = siteContent;

  return (
    <section id="venue" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>{venue.label}</span>
          <h2 className={styles.sectionTitle}>
            {venue.title}{' '}
            <span className={styles.titleAccent}>{venue.titleAccent}</span>
          </h2>
          <p className={styles.description}>{venue.description}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.singleImage}>
            <Image
              src={venue.images[0].src}
              alt={venue.images[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className={styles.image}
            />
          </div>

          <div className={styles.info}>
            <h3 className={styles.venueName}>{venue.name}</h3>
            <p className={styles.venueAddress}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: 8, verticalAlign: 'middle' }}>
                <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" fill="#f97316" />
              </svg>
              {venue.address}
            </p>

            <ul className={styles.featureList}>
              {venue.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  <span className={styles.featureDot} />
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#" className={styles.mapLink}>
              View on Map
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 12l8-8M6 4h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
