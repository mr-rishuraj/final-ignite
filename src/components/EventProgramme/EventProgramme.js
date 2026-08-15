import styles from './EventProgramme.module.css';

const online = [
  {
    num: '01',
    tags: ['Workshop', 'Mentorship'],
    title: 'Pitch Deck Workshop',
    desc: 'Hands-on session with founders, investors & consultants to build an investor-ready deck. Submit for mentor feedback before Demo Day.',
    meta: 'Remote · 2 weeks pre-event',
  },
  {
    num: '02',
    tags: ['Gamified', 'Validation'],
    title: 'Virtual Investor Challenge',
    desc: 'Each participant gets 100k Ignite Coins to back shortlisted startups. Score points based on how many panelists invest in your picks on Demo Day.',
    meta: 'Remote · 1 week pre-event',
  },
];

const offline = [
  {
    num: '03',
    tags: ['Networking', 'Icebreaker'],
    title: 'Mixer Meet',
    desc: 'Human Bingo — mingle to find shared traits and experiences. First to complete the card wins, everyone leaves with real connections.',
    meta: 'Dubai · Day 1',
  },
  {
    num: '04',
    tags: ['Panel', 'Live Q&A'],
    title: 'Panel Discussion',
    desc: 'Investors, industry leaders, and serial entrepreneurs on the themes shaping the next generation of global startups — open Q&A from the floor.',
    meta: 'Dubai · Day 2',
  },
  {
    num: '05',
    tags: ['AI', 'Hands-on Build'],
    title: 'AI Integration Sprint',
    desc: 'Work alongside AI experts to ship one meaningful AI-powered feature into your product or MVP in a single focused sprint.',
    meta: 'Dubai · Day 3',
  },
];

function EventRow({ event }) {
  return (
    <div className={styles.row}>
      <span className={styles.rowNum}>{event.num}</span>
      <div className={styles.rowBody}>
        <div className={styles.rowTop}>
          <h3 className={styles.rowTitle}>{event.title}</h3>
          <div className={styles.rowTags}>
            {event.tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>
        <p className={styles.rowDesc}>{event.desc}</p>
      </div>
      <span className={styles.rowMeta}>{event.meta}</span>
    </div>
  );
}

export default function EventProgramme() {
  return (
    <section id="programme" className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Event Programme</span>
          <h2 className={styles.title}>
            What happens at <em className={styles.em}>IGNITE.</em>
          </h2>
        </div>

        {/* Online phase */}
        <div className={styles.phase}>
          <div className={styles.phaseHeader}>
            <span className={styles.phaseTag}>Online</span>
            <span className={styles.phaseTitle}>Pre-Event</span>
            <span className={styles.phaseLine} aria-hidden="true" />
          </div>
          <div className={styles.rows}>
            {online.map((e) => <EventRow key={e.num} event={e} />)}
          </div>
        </div>

        {/* Offline phase */}
        <div className={styles.phase}>
          <div className={styles.phaseHeader}>
            <span className={`${styles.phaseTag} ${styles.phaseTagAccent}`}>In-Person</span>
            <span className={styles.phaseTitle}>Dubai, UAE</span>
            <span className={styles.phaseLine} aria-hidden="true" />
          </div>
          <div className={styles.rows}>
            {offline.map((e) => <EventRow key={e.num} event={e} />)}
          </div>
        </div>

        {/* Footer */}
        <p className={styles.footer}>
          And many more — fireside chats, investor dinners, startup showcases, and city tours across Dubai.
        </p>

      </div>
    </section>
  );
}
