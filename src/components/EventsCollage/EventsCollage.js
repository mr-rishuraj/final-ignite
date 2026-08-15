import styles from './EventsCollage.module.css';

const COL_A = [
  { src: '/past-events/event-group.png',         alt: 'IGNITE cohort group photo' },
  { src: '/past-events/event-panel-01.jpg',      alt: 'Fintech panel' },
  { src: '/past-events/event-audience.jpg',      alt: 'Keynote audience' },
  { src: '/past-events/event-outdoor.png',       alt: 'Outdoor campus' },
];

const COL_B = [
  { src: '/past-events/event-networking-01.jpg', alt: 'Mentor circle' },
  { src: '/past-events/event-award.png',         alt: 'Award ceremony' },
  { src: '/past-events/event-virtual.png',       alt: 'Virtual keynote' },
  { src: '/past-events/event-pitch.png',         alt: 'Pitch finals' },
];

const COL_C = [
  { src: '/past-events/event-panel-sofa.png',    alt: 'Founders on stage' },
  { src: '/past-events/event-outdoor-2.png',     alt: 'Campus networking' },
  { src: '/past-events/event-workshop.png',      alt: 'Startup workshop' },
  { src: '/past-events/event-panel-02.png',      alt: 'Investor panel' },
];

const ALL_MOBILE = [...COL_A, ...COL_B, ...COL_C];

function VertCol({ images, cls }) {
  const doubled = [...images, ...images];
  return (
    <div className={styles.vCol}>
      <div className={`${styles.vInner} ${styles[cls]}`}>
        {doubled.map(({ src, alt }, i) => (
          <div key={`${src}-${i}`} className={styles.card}>
            <img src={src} alt={alt} className={styles.img} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EventsCollage() {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Past Editions</span>
        <h2 className={styles.title}>
          Moments from <em className={styles.em}>IGNITE</em>
        </h2>
      </div>

      {/* Desktop: 3 vertical marquee columns */}
      <div className={styles.wall}>
        <VertCol images={COL_A} cls="up"   />
        <VertCol images={COL_B} cls="down" />
        <VertCol images={COL_C} cls="up2"  />
      </div>

      {/* Mobile: horizontal marquee */}
      <div className={styles.hMarquee}>
        <div className={styles.hStrip}>
          {[...ALL_MOBILE, ...ALL_MOBILE].map(({ src, alt }, i) => (
            <div key={`${src}-${i}`} className={styles.hCard}>
              <img src={src} alt={alt} className={styles.img} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
