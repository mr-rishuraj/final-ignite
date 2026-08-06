import styles from './TimelineGrid.module.css';

const ONLINE = [
  {
    num: '01',
    title: 'Pitch Deck Workshop',
    tags: ['Workshop', 'Mentorship'],
    desc: 'Hands-on session with founders, investors & consultants to build an investor-ready deck. Submit for mentor feedback before Demo Day.',
    details: ['Expert-led walkthroughs', 'Deck review & feedback', 'Pre-Demo Day refinement'],
  },
  {
    num: '02',
    title: 'Virtual Investor Challenge',
    tags: ['Gamified', 'Validation'],
    desc: 'Each participant gets 100k Ignite Coins to back shortlisted startups. Score points based on how many panelists invest in your picks on Demo Day.',
    details: ['100k Ignite Coins / participant', '2–3 min pitch video + one-pager', 'Points tallied on Demo Day'],
  },
];

const OFFLINE = [
  {
    num: '03',
    title: 'Mixer Meet',
    tags: ['Networking', 'Icebreaker'],
    desc: 'Human Bingo — mingle to find shared traits and experiences. First to complete the card wins, everyone leaves with real connections.',
    details: ['Structured, playful format', 'Cross-industry founders', 'Prizes for winners'],
  },
  {
    num: '04',
    title: 'Panel Discussion',
    tags: ['Panel', 'Live Q&A'],
    desc: 'Investors, industry leaders, and serial entrepreneurs on the themes shaping the next generation of global startups — open Q&A from the floor.',
    details: ['Curated panelists', 'Audience Q&A', 'Themes TBA'],
  },
  {
    num: '05',
    title: 'AI Integration Sprint',
    tags: ['AI', 'Hands-on Build'],
    desc: 'Work alongside AI experts to ship one meaningful AI-powered feature into your product or MVP in a single focused sprint.',
    details: ['1-on-1 with AI specialists', 'Ship a working feature', 'Demo at the close'],
  },
];

function Card({ num, title, tags, desc, details }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.num}>{num}</span>
        <div className={styles.tagRow}>
          {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
      <ul className={styles.detailList}>
        {details.map(d => (
          <li key={d} className={styles.detailItem}>
            <span className={styles.dot} />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TimelineGrid() {
  return (
    <section id="agenda" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Event Programme</span>
          <h2 className={styles.title}>IGNITE 2026 <em className={styles.em}>Events</em></h2>
        </div>

        {/* Online */}
        <div className={styles.phaseLabel}>
          <span className={styles.badge} data-mode="online">● Online — Pre-Event</span>
        </div>
        <div className={styles.grid2}>
          {ONLINE.map(e => <Card key={e.num} {...e} />)}
        </div>

        <div className={styles.phaseSep} />

        {/* Offline */}
        <div className={styles.phaseLabel}>
          <span className={styles.badge} data-mode="offline">● Offline — Dubai</span>
        </div>
        <div className={styles.grid3}>
          {OFFLINE.map(e => <Card key={e.num} {...e} />)}
        </div>

      </div>
    </section>
  );
}
