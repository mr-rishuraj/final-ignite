import styles from './EventProgramme.module.css';

const online = [
  {
    num: '01',
    tags: ['Workshop', 'Mentorship'],
    title: 'Pitch Deck Workshop',
    desc: 'Hands-on session with founders, investors & consultants to build an investor-ready deck. Submit for mentor feedback before Demo Day.',
    bullets: ['Expert-led walkthroughs', 'Deck review & feedback', 'Pre-Demo Day refinement'],
  },
  {
    num: '02',
    tags: ['Gamified', 'Validation'],
    title: 'Virtual Investor Challenge',
    desc: 'Each participant gets 100k Ignite Coins to back shortlisted startups. Score points based on how many panelists invest in your picks on Demo Day.',
    bullets: ['100k Ignite Coins / participant', '2–3 min pitch video + one-pager', 'Points tallied on Demo Day'],
  },
];

const offline = [
  {
    num: '03',
    tags: ['Networking', 'Icebreaker'],
    title: 'Mixer Meet',
    desc: 'Human Bingo — mingle to find shared traits and experiences. First to complete the card wins, everyone leaves with real connections.',
    bullets: ['Structured, playful format', 'Cross-industry founders', 'Prizes for winners'],
  },
  {
    num: '04',
    tags: ['Panel', 'Live Q&A'],
    title: 'Panel Discussion',
    desc: 'Investors, industry leaders, and serial entrepreneurs on the themes shaping the next generation of global startups — open Q&A from the floor.',
    bullets: ['Curated panelists', 'Audience Q&A', 'Themes TBA'],
  },
  {
    num: '05',
    tags: ['AI', 'Hands-on Build'],
    title: 'AI Integration Sprint',
    desc: 'Work alongside AI experts to ship one meaningful AI-powered feature into your product or MVP in a single focused sprint.',
    bullets: ['1-on-1 with AI specialists', 'Ship a working feature', 'Demo at the close'],
  },
];

const EventCard = ({ event }) => (
  <div className={styles.card}>
    <div className={styles.cardTop}>
      <span className={styles.num}>{event.num}</span>
      <div className={styles.tags}>
        {event.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
    </div>
    <h3 className={styles.cardTitle}>{event.title}</h3>
    <p className={styles.cardDesc}>{event.desc}</p>
    <ul className={styles.bullets}>
      {event.bullets.map(b => (
        <li key={b} className={styles.bullet}>
          <span className={styles.dot} aria-hidden="true" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

export default function EventProgramme() {
  return (
    <section id="programme" className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Event Programme</span>
          <h2 className={styles.title}>
            IGNITE 2026 <em className={styles.em}>Events</em>
          </h2>
        </div>

        {/* Online phase */}
        <div className={styles.phase}>
          <div className={styles.phaseLabel}>
            <span className={styles.phaseDot} />
            Online — Pre-Event
          </div>
          <div className={styles.grid2}>
            {online.map(e => <EventCard key={e.num} event={e} />)}
          </div>
        </div>

        {/* Offline phase */}
        <div className={styles.phase}>
          <div className={styles.phaseLabel}>
            <span className={styles.phaseDot} style={{ background: '#C53B48' }} />
            Offline — Dubai
          </div>
          <div className={styles.grid3}>
            {offline.map(e => <EventCard key={e.num} event={e} />)}
          </div>
        </div>

        {/* Footer note */}
        <div className={styles.more}>
          <span className={styles.moreLine} aria-hidden="true" />
          <p className={styles.moreText}>
            And many more curated experiences — workshops, fireside chats, investor dinners, and city tours across Dubai await.
          </p>
          <span className={styles.moreLine} aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
