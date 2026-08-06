import styles from './pieds.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'About PIEDS — Pilani Innovation & Entrepreneurship Development Society',
  description: 'PIEDS is the official entrepreneurship and innovation society of BITS Pilani, nurturing startups since 2004.',
};

const STATS = [
  { value: '300+', label: 'Startups Incubated' },
  { value: '₹50L',  label: 'Max Seed Funding' },
  { value: '2004',  label: 'Founded' },
  { value: '20+',  label: 'Years of Impact' },
];

const PILLARS = [
  {
    icon: '🚀',
    title: 'Incubation',
    desc: 'Dedicated incubation space, mentorship networks, and operational support to help early-stage startups move from idea to product.',
  },
  {
    icon: '💰',
    title: 'Funding Access',
    desc: 'Mookerji Innovation Fund (₹5–50L), Rajkumari Jain Seed Fund (up to ₹50L), and NIDHI Accelerator connect startups with capital.',
  },
  {
    icon: '🤝',
    title: 'Mentorship',
    desc: 'A curated network of BITSian founders, industry veterans, and investors who guide teams through product, growth, and fundraising.',
  },
  {
    icon: '🌐',
    title: 'Community',
    desc: 'Access to a global alumni network of 70,000+ BITSians across deep tech, fintech, healthtech, and consumer startups.',
  },
];

const EVENTS = [
  {
    year: '2024',
    name: 'IGNITE 2024',
    tag: 'Startup Sprint',
    tagColor: '#d94020',
    desc: 'A two-day startup launchpad held on November 16–17, 2024, featuring panel discussions on the future of Indian startups, fundraising workshops, IP sessions, and a competitive pitching round in front of VCs including Unicorn India Ventures and Windrose Capital.',
    highlights: ['₹10L+ in grants', 'Pitching competition', 'VC panel', '100+ founders'],
    image: 'https://framerusercontent.com/images/CDhYOBo0RCgwcpOfMlDqVGPRzHo.jpg',
  },
  {
    year: '2024',
    name: 'E-Summit 2024',
    tag: 'Annual Summit',
    tagColor: '#b06020',
    desc: 'PIEDS\'s flagship annual entrepreneurship summit bringing together student founders, investors, and operators for a day of talks, fireside chats, and networking. The 2024 edition saw record attendance with speakers from top-tier funds and unicorn startups.',
    highlights: ['500+ attendees', 'Fireside chats', 'Networking fair', 'Startup expo'],
    image: 'https://framerusercontent.com/images/M7Xh8DUZcRnsPSVjcv1lVqdCtU.jpg',
  },
  {
    year: '2024',
    name: 'Coalescence 2024',
    tag: 'KK Birla Goa Campus',
    tagColor: '#7a5020',
    desc: 'The 12th edition of Coalescence — "Pioneering Limitless Possibilities" — held September 13–15 at BITS Goa, organised by the Centre for Entrepreneurial Leadership. Three days connecting students with startup founders, investors, and operators.',
    highlights: ['3-day event', 'Investor meet', 'Workshop track', 'Hackathon'],
    image: 'https://framerusercontent.com/images/LZYY71GfAAmwFGFURcEc4dfpoY.jpg',
  },
  {
    year: '2024',
    name: 'Startup Mahakumbh',
    tag: 'National Stage',
    tagColor: '#5a3010',
    desc: 'PIEDS represented BITS Pilani at Startup Mahakumbh — Bharat Innovates at Bharat Mandapam, Pragati Maidan, New Delhi (March 18–20, 2024), showcasing incubated startups to a national audience of investors, policymakers, and industry leaders.',
    highlights: ['National stage', 'Policy engagement', 'Startup showcase', 'Media coverage'],
    image: 'https://framerusercontent.com/images/YgBvkDQV4AdpX2f13gFIh6I6NN0.jpg',
  },
  {
    year: '2023',
    name: 'Innovation Week',
    tag: 'Campus Festival',
    tagColor: '#403010',
    desc: 'A week-long celebration of innovation and entrepreneurship on campus — featuring ideathons, guest lectures from unicorn founders, workshops on AI and deep tech, and culminating in the annual startup showcase where teams pitch to a panel of mentors.',
    highlights: ['7-day festival', 'Ideathon', 'Guest lectures', 'Startup showcase'],
    image: 'https://framerusercontent.com/images/AGgTnqv7WNLDD9gJKbVesxEaN7o.jpg',
  },
];

export default function PiedsPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>BITS Pilani · Est. 2004</span>
          <h1 className={styles.heroTitle}>
            Pilani Innovation &<br />
            <span className={styles.heroAccent}>Entrepreneurship</span><br />
            Development Society
          </h1>
          <p className={styles.heroSub}>
            PIEDS is the official innovation and entrepreneurship body of BITS Pilani —
            nurturing the next generation of founders through incubation, mentorship,
            funding, and community since 2004.
          </p>
          <div className={styles.heroAbbre}>PIEDS</div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          {STATS.map(({ value, label }) => (
            <div key={label} className={styles.statCard}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <span className={styles.sectionLabel}>Who We Are</span>
              <h2 className={styles.sectionTitle}>
                The launchpad for<br />
                <em className={styles.italic}>BITSian founders.</em>
              </h2>
              <p className={styles.body}>
                PIEDS (Pilani Innovation &amp; Entrepreneurship Development Society) is an
                autonomous not-for-profit society registered in 2013 under the Rajasthan
                Societies Registration Act, 1958. It operates the Technology Business
                Incubator at BITS Pilani — one of India's premier startup incubators, set up
                in 2004 and formally inducted into PIEDS in 2012.
              </p>
              <p className={styles.body}>
                More than 300 startups have emerged from BITS Pilani since the incubator's
                founding, spanning deep tech, fintech, healthtech, edtech, and consumer
                internet — built by some of India's most celebrated entrepreneurs.
              </p>
              <a href="https://pieds-bitspilani.org/" target="_blank" rel="noopener noreferrer" className={styles.outLink}>
                Visit pieds-bitspilani.org →
              </a>
            </div>
            <div className={styles.aboutImgCol}>
              <img
                src="https://framerusercontent.com/images/CDhYOBo0RCgwcpOfMlDqVGPRzHo.jpg"
                alt="PIEDS BITS Pilani"
                className={styles.aboutImg}
              />
              <div className={styles.aboutImgBadge}>
                <img src="/ignite-logo.png" alt="" className={styles.badgeIcon} />
                <span>Organiser of IGNITE '26</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Four pillars ── */}
      <section className={styles.pillars}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>What We Do</span>
          <h2 className={styles.sectionTitle}>Four pillars of impact</h2>
          <div className={styles.pillarsGrid}>
            {PILLARS.map((p) => (
              <div key={p.title} className={styles.pillarCard}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Events ── */}
      <section className={styles.events}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Our Events</span>
          <h2 className={styles.sectionTitle}>Building the ecosystem,<br />one event at a time.</h2>

          <div className={styles.eventsList}>
            {EVENTS.map((ev, i) => (
              <div key={ev.name} className={`${styles.eventRow} ${i % 2 === 1 ? styles.eventRowReverse : ''}`}>
                <div className={styles.eventImg}>
                  <img src={ev.image} alt={ev.name} className={styles.eventPhoto} />
                  <span className={styles.eventYear}>{ev.year}</span>
                </div>
                <div className={styles.eventContent}>
                  <span className={styles.eventTag} style={{ background: ev.tagColor + '18', color: ev.tagColor, borderColor: ev.tagColor + '40' }}>
                    {ev.tag}
                  </span>
                  <h3 className={styles.eventName}>{ev.name}</h3>
                  <p className={styles.eventDesc}>{ev.desc}</p>
                  <div className={styles.eventHighlights}>
                    {ev.highlights.map((h) => (
                      <span key={h} className={styles.eventHighlight}>{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <img src="/ignite-logo.png" alt="" className={styles.ctaLogo} aria-hidden="true" />
          <h2 className={styles.ctaTitle}>Ready to build your startup?</h2>
          <p className={styles.ctaSub}>Apply for IGNITE 2026 — India's most intense startup sprint, brought to you by PIEDS × BITS Pilani.</p>
          <a href="/#get-involved" className={styles.ctaBtn}>Apply for IGNITE '26</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
