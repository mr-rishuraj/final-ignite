import styles from './EventsCollage.module.css';

// Photos that are stored upside-down and need a 180° flip
const ROTATE_180 = new Set(['p2', 'p7', 'p8']);

const photos = [
  { src: '/past-events/event-group.png',          alt: 'IGNITE cohort — group photo',  label: 'IGNITE 2024',   cls: 'p1'  },
  { src: '/past-events/event-panel-01.jpg',       alt: 'Fintech panel discussion',      label: 'Panel',         cls: 'p2'  },
  { src: '/past-events/event-networking-01.jpg',  alt: 'Mentor–student interaction',    label: 'Networking',    cls: 'p3'  },
  { src: '/past-events/event-award.png',          alt: 'Award ceremony — winning team', label: 'Awards',        cls: 'p4'  },
  { src: '/past-events/event-outdoor.png',        alt: 'Outdoor campus session',        label: 'Campus',        cls: 'p5'  },
  { src: '/past-events/event-panel-sofa.png',     alt: 'Founders panel on stage',       label: 'Founders',      cls: 'p6'  },
  { src: '/past-events/event-audience.jpg',       alt: 'Audience at keynote session',   label: 'Keynote',       cls: 'p7'  },
  { src: '/past-events/event-virtual.png',        alt: 'Virtual keynote broadcast',     label: 'Virtual',       cls: 'p8'  },
  { src: '/past-events/event-classroom.png',      alt: 'Classroom pitch session',       label: 'Pitch',         cls: 'p9'  },
  { src: '/past-events/event-workshop.png',       alt: 'Startup workshop session',      label: 'Workshop',      cls: 'p10' },
  { src: '/past-events/event-panel-02.png',       alt: 'Expert investor panel',         label: 'Investors',     cls: 'p11' },
  { src: '/past-events/event-outdoor-2.png',      alt: 'Campus networking',             label: 'Connect',       cls: 'p12' },
];

export default function EventsCollage() {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Past Editions</span>
        <h2 className={styles.title}>
          Moments from <em className={styles.em}>IGNITE</em>
        </h2>
      </div>

      <div className={styles.mosaic}>
        {photos.map(({ src, alt, label, cls }) => (
          <div key={src} className={`${styles.cell} ${styles[cls]}`}>
            <img
              src={src}
              alt={alt}
              className={`${styles.img} ${ROTATE_180.has(cls) ? styles.rotated : ''}`}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <span className={styles.cellLabel}>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
