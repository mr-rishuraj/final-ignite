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
    meta: 'Day 1',
  },
  {
    num: '07',
    phase: 'dubai',
    tags: ['Panel', 'Day 2'],
    title: 'Panel Discussion',
    desc: 'Investors, industry leaders, and serial entrepreneurs on themes shaping the next generation of global startups.',
    meta: 'Day 2',
  },
  {
    num: '08',
    phase: 'dubai',
    tags: ['AI', 'Day 3'],
    title: 'AI Integration Sprint',
    desc: 'Work alongside AI experts to ship one meaningful AI-powered feature into your product in a single focused sprint.',
    meta: 'Day 3',
  },
  {
    num: '09',
    phase: 'dubai',
    tags: ['Pitching', 'Day 4'],
    title: 'Demo Day',
    desc: 'Top 20 finalists pitch live to a panel of investors and industry leaders — the culmination of the IGNITE journey.',
    meta: 'Day 4',
  },
];

function Card({ step }) {
  const isDubai = step.phase === 'dubai';
  return (
    <div className={`${styles.card} ${isDubai ? styles.cardDubai : ''}`}>
      <div className={styles.cardHeader}>
        <span className={`${styles.badge} ${isDubai ? styles.badgeDubai : ''}`}>{step.num}</span>
        <span className={`${styles.cardDate} ${isDubai ? styles.cardDateDubai : ''}`}>{step.meta}</span>
      </div>
      <h3 className={styles.cardTitle}>{step.title}</h3>
      <p className={styles.cardDesc}>{step.desc}</p>
      <div className={styles.cardTags}>
        {step.tags.map(t => (
          <span key={t} className={`${styles.tag} ${isDubai ? styles.tagDubai : ''}`}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function MilestoneCard({ step }) {
  return (
    <div className={styles.cardMilestone}>
      <div className={styles.milestoneLeft}>
        <span className={styles.badge}>{step.num}</span>
        <h3 className={styles.milestoneTitle}>{step.title}</h3>
      </div>
      <div className={styles.milestoneRight}>
        <span className={styles.milestoneDate}>{step.meta}</span>
        <p className={styles.cardDesc}>{step.desc}</p>
        <div className={styles.cardTags}>
          {step.tags.map(t => (
            <span key={t} className={`${styles.tag} ${styles.tagMilestone}`}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ left, right }) {
  const isDubai = left.phase === 'dubai';
  return (
    <div className={styles.rowPair}>
      <Card step={left} />
      <div className={styles.rowCenter}>
        <span className={`${styles.dot} ${isDubai ? styles.dotDubai : ''}`} />
      </div>
      <Card step={right} />
    </div>
  );
}

export default function EventProgramme() {
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

        <div className={styles.timeline}>
          <Row left={steps[0]} right={steps[1]} />
          <div className={styles.gapLine} />
          <Row left={steps[2]} right={steps[3]} />
          <div className={styles.gapLine} />
          <MilestoneCard step={steps[4]} />
          <div className={styles.gapLine} />
          <div className={styles.phaseTransition}>
            <span className={styles.ptLine} />
            <span className={styles.ptLabel}>Dubai, UAE</span>
            <span className={styles.ptLine} />
          </div>
          <div className={styles.gapLine} />
          <Row left={steps[5]} right={steps[6]} />
          <div className={styles.gapLine} />
          <Row left={steps[7]} right={steps[8]} />
        </div>

        <p className={styles.footer}>
          And many more — fireside chats, investor dinners, startup showcases, and city tours across Dubai.
        </p>

      </div>
    </section>
  );
}
