import styles from './pieds.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'PIEDS — Pilani Innovation & Entrepreneurship Development Society',
  description: 'PIEDS is a leading non-profit technology business incubator established in 2013 at BITS Pilani, powering 75+ startups and ₹5M+ raised.',
  alternates: { canonical: '/pieds' },
  openGraph: {
    title: 'PIEDS — Pilani Innovation & Entrepreneurship Development Society',
    description: 'Powering 75+ startups and ₹5M+ raised. PIEDS is a student-led non-profit incubator at BITS Pilani, and the organiser behind IGNITE 2026.',
    url: 'https://final-ignite.vercel.app/pieds',
    images: [{ url: '/gallery/mentor-circles.jpg', width: 1200, height: 630, alt: 'PIEDS — BITS Pilani Innovation Incubator' }],
  },
};

const STATS = [
  { value: '75+',     label: 'Startups' },
  { value: '$5M+',    label: 'Raised' },
  { value: '10,000+', label: 'Innovators Empowered' },
];

const PILLARS = ['Funding & Grants', 'World-Class Mentorship', 'Cutting-Edge Labs & Workspace'];

const SCHEMES = ['SISFS', 'NIDHI-EIR', 'NIDHI SEED SUPPORT', 'TIDE 2.0', 'NIDHI PRAYAS', 'GENESIS', 'Flame'];

const INITIATIVES = [
  {
    name: 'Chai Pe Charcha',
    desc: 'A laid-back meet where founders, BITSians, and experts connect over chai — sparking ideas, conversations, and incubation opportunities.',
    img: '/past-events/event-networking-01.jpg',
  },
  {
    name: 'Solve For Pilani',
    desc: 'Student teams boost local businesses through strategy and digitization — APOGEE 2024 saw ₹4L+ in sales and 20%+ revenue growth for 5 Pilani shops in just 2 days.',
    img: '/past-events/event-outdoor.png',
  },
  {
    name: 'Enspire',
    desc: 'A high-impact panel where leaders from startups like Pixxel, OfBusiness, DealShare, and Myntra share bold insights — fueling powerful conversations for future innovators.',
    img: '/past-events/event-panel-sofa.png',
  },
  {
    name: 'Studentpreneur',
    desc: 'Sparks entrepreneurship in school students through hands-on workshops — reaching 1,000+ students in its BITS Pilani-backed pilot and turning classrooms into launchpads.',
    img: '/past-events/event-workshop.png',
  },
  {
    name: 'IGNITE 2024',
    desc: 'A two-day startup showdown at BITSoM, Mumbai where 15 top ventures pitched to 80+ angels and 100+ VCs — unlocking funding, partnerships, and real visibility.',
    img: '/past-events/event-pitch.png',
  },
];

export default function PiedsPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero (two-column: copy left, stats right) ── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>

          {/* Left — identity + pillars */}
          <div className={styles.heroLeft}>
            <div className={styles.heroLogoRow}>
              <img src="/pieds-image/Group 100.png" alt="PIEDS" className={styles.heroLogo} />
              <span className={styles.heroTag}>Est. 2013 · BITS Pilani</span>
            </div>
            <h1 className={styles.heroTitle}>PIEDS</h1>
            <p className={styles.heroDesc}>
              Pilani Innovation &amp; Entrepreneurship Development Society, established in 2013
              at BITS Pilani, is a leading non-profit technology business incubator.
            </p>
            <ul className={styles.pillars}>
              {PILLARS.map((p) => (
                <li key={p} className={styles.pillar}>
                  <span className={styles.pillarDot} aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — stats */}
          <div className={styles.heroRight}>
            {STATS.map(({ value, label }) => (
              <div key={label} className={styles.heroStat}>
                <span className={styles.heroStatValue}>{value}</span>
                <span className={styles.heroStatLabel}>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Government Schemes ── */}
      <section className={styles.schemes}>
        <div className={styles.container}>
          <div className={styles.schemesHeader}>
            <img src="/pieds-image/Group 100.png" alt="" className={styles.sectionLogo} aria-hidden="true" />
            <div>
              <span className={styles.eyebrow}>Government Backed</span>
              <h2 className={styles.sectionTitle}>Top Government Schemes Under PIEDS</h2>
            </div>
          </div>
          <div className={styles.schemesGrid}>
            {SCHEMES.map((name) => (
              <div key={name} className={styles.schemeChip}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Initiatives ── */}
      <section className={styles.initiatives}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>What We Do</span>
          <h2 className={styles.sectionTitle}>Our Initiatives</h2>
          <div className={styles.initiativesGrid}>
            {INITIATIVES.map((item) => (
              <div key={item.name} className={styles.initiativeCard}>
                <div className={styles.initiativeImgWrap}>
                  <img src={item.img} alt={item.name} className={styles.initiativeImg} />
                  <div className={styles.initiativeOverlay}>
                    <p className={styles.initiativeDesc}>{item.desc}</p>
                  </div>
                </div>
                <span className={styles.initiativeLabel}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Team ── */}
      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.teamGrid}>
            <div className={styles.teamImgWrap}>
              <img src="/pieds-image/student-team.jpeg" alt="PIEDS Student Team" className={styles.teamImg} />
            </div>
            <div className={styles.teamCopy}>
              <div className={styles.teamLogoRow}>
                <img src="/pieds-image/Group 100.png" alt="PIEDS" className={styles.teamLogo} />
              </div>
              <span className={styles.eyebrow}>People</span>
              <h2 className={styles.sectionTitle}>PIEDS Student Team</h2>
              <p className={styles.teamDesc}>
                A student-led body at BITS Pilani that fosters innovation through flagship events,
                startup support, mentorship, and real-world entrepreneurial exposure.
              </p>
              <a href="https://pieds-bitspilani.org/" target="_blank" rel="noopener noreferrer" className={styles.teamLink}>
                pieds-bitspilani.org →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
