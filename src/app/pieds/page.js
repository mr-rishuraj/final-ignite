import styles from './pieds.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'PIEDS — Pilani Innovation & Entrepreneurship Development Society',
  description: 'PIEDS is a leading non-profit technology business incubator established in 2013 at BITS Pilani.',
};

const STATS = [
  { value: '75+',     label: 'Startups' },
  { value: '$5M+',    label: 'Raised' },
  { value: '10,000+', label: 'Innovators Empowered' },
];

const PILLARS = ['Funding & Grants', 'World-Class Mentorship', 'Cutting-Edge Labs & Workspace'];

const SCHEMES = ['SISFS', 'NIDHI-EIR', 'NIDHI SEED SUPPORT', 'TIDE 2.0', 'NIDHI PRAYAS', 'GENESIS', 'Flame'];

export default function PiedsPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>Est. 2013 · BITS Pilani</span>
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
        <div className={styles.heroWordmark} aria-hidden="true">PIEDS</div>
      </section>

      {/* ── Stats ── */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {STATS.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Government Schemes ── */}
      <section className={styles.schemes}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Government Backed</span>
          <h2 className={styles.sectionTitle}>Top Government Schemes Under PIEDS</h2>
          <div className={styles.schemesGrid}>
            {SCHEMES.map((name) => (
              <div key={name} className={styles.schemeChip}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Team ── */}
      <section className={styles.team}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>People</span>
          <h2 className={styles.sectionTitle}>PIEDS Student Team</h2>
          <p className={styles.teamDesc}>
            A student-led body at BITS Pilani that fosters innovation through flagship events,
            startup support, mentorship, and real-world entrepreneurial exposure.
          </p>
          <a
            href="https://pieds-bitspilani.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.teamLink}
          >
            pieds-bitspilani.org →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
