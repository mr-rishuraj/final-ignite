import styles from './EventProgramme.module.css';

const steps = [
  {
    num: '01',
    phase: 'pre',
    tags: ['Open Call', 'Online'],
    title: 'Applications Open',
    desc: "Startups submit their applications — share your vision, traction, and the problem you're solving.",
    meta: '20 August',
  },
  {
    num: '02',
    phase: 'pre',
    tags: ['Deadline'],
    title: 'Applications Close',
    desc: 'Last chance to submit. The screening panel reviews every entry — make yours count.',
    meta: '10 September',
  },
  {
    num: '03',
    phase: 'pre',
    tags: ['Pitch Decks', 'Elevator Pitches'],
    title: 'Online Screening Round 1',
    desc: 'Pitch decks and elevator pitches reviewed and scored by our panel — the first cut to find the top talent.',
    meta: '11 – 15 September',
  },
  {
    num: '04',
    phase: 'pre',
    tags: ['Online Pitches', 'Expert Judges'],
    title: 'Online Screening Round 2',
    desc: 'Shortlisted teams pitch live to expert judges — the final filter to select the Top 20 Finalists.',
    meta: '20 September onwards',
  },
  {
    num: '05',
    phase: 'pre',
    milestone: true,
    tags: ['Milestone', 'Top 20'],
    title: 'Finalists Announced',
    desc: 'The Top 20 teams are personally selected and invited to Dubai — your place on the IGNITE stage is confirmed.',
    meta: '29 September',
  },
  {
    num: '06',
    phase: 'dubai',
    tags: ['Networking', 'Day 1'],
    title: 'Mixer Meet',
    desc: 'Human Bingo — mingle to find shared traits and experiences. First to complete the card wins, everyone leaves with real connections.',
    meta: 'Dubai · Day 1',
  },
  {
    num: '07',
    phase: 'dubai',
    tags: ['Panel', 'Day 2'],
    title: 'Panel Discussion',
    desc: 'Investors, industry leaders, and serial entrepreneurs on themes shaping the next generation of global startups.',
    meta: 'Dubai · Day 2',
  },
  {
    num: '08',
    phase: 'dubai',
    tags: ['AI', 'Day 3'],
    title: 'AI Integration Sprint',
    desc: 'Work alongside AI experts to ship one meaningful AI-powered feature into your product in a single focused sprint.',
    meta: 'Dubai · Day 3',
  },
  {
    num: '09',
    phase: 'dubai',
    tags: ['Pitching', 'Day 4'],
    title: 'Demo Day',
    desc: 'Top 20 finalists pitch live to a panel of investors and industry leaders — the culmination of the IGNITE journey.',
    meta: 'Dubai · Day 4',
  },
];

function Card({ step }) {
  const isDubai = step.phase === 'dubai';
  return (
    <div className={`${styles.card} ${isDubai ? styles.cardDubai : ''} ${step.milestone ? styles.cardMilestone : ''}`}>
      <span className={styles.cardNum}>{step.num}</span>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{step.title}</h3>
        <div className={styles.cardTags}>
          {step.tags.map(t => (
            <span key={t} className={`${styles.tag} ${isDubai ? styles.tagAccent : ''} ${step.milestone ? styles.tagMilestone : ''}`}>{t}</span>
          ))}
        </div>
        <p className={styles.cardDesc}>{step.desc}</p>
        <span className={styles.cardMeta}>{step.meta}</span>
      </div>
    </div>
  );
}

export default function EventProgramme() {
  const preRows  = [[steps[0], steps[1]], [steps[3], steps[2]]];
  const milestone = steps[4];
  const dubaiRows = [[steps[5], steps[6]], [steps[8], steps[7]]];

  return (
    <section id="programme" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Event Programme</span>
          <h2 className={styles.title}>
            What happens at <em className={styles.em}>IGNITE.</em>
          </h2>
          <p className={styles.subtitle}>
            From your first application to Demo Day in Dubai — the full journey.
          </p>
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} />
            <span>Pre-Event · Online</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotAccent}`} />
            <span>In-Person · Dubai</span>
          </div>
        </div>

        <div className={styles.snake}>

          {/* Pre-event rows (2 per row) */}
          {preRows.map((row, ri) => (
            <div key={ri}>
              <div className={styles.rowPair}>
                <Card step={row[0]} />
                <div className={styles.rowConn} />
                <Card step={row[1]} />
              </div>
              <div className={`${styles.conn} ${ri === 0 ? styles.connR : styles.connL}`} />
            </div>
          ))}

          {/* Milestone: Finalists Announced (full-width) */}
          <div className={styles.milestoneWrap}>
            <Card step={milestone} />
          </div>

          <div className={styles.connStraightL} />

          {/* Phase transition */}
          <div className={styles.phaseTransition}>
            <span className={styles.ptLine} />
            <span className={styles.ptLabel}>Dubai, UAE</span>
            <span className={styles.ptLine} />
          </div>

          <div className={styles.connStraightL} />

          {/* Dubai rows (2 per row) */}
          {dubaiRows.map((row, ri) => (
            <div key={ri}>
              <div className={styles.rowPair}>
                <Card step={row[0]} />
                <div className={styles.rowConn} />
                <Card step={row[1]} />
              </div>
              {ri < dubaiRows.length - 1 && (
                <div className={`${styles.conn} ${styles.connR}`} />
              )}
            </div>
          ))}

        </div>

        <p className={styles.footer}>
          And many more — fireside chats, investor dinners, startup showcases, and city tours across Dubai.
        </p>

      </div>
    </section>
  );
}
