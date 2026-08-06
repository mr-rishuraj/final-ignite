import styles from './Footer.module.css';

const NAV_COLS = [
  {
    heading: 'Event',
    links: [
      { label: 'About IGNITE',    href: '/#about' },
      { label: 'IGNITE 2026',     href: '/#ignite-2026' },
      { label: 'Speakers',        href: '/#speakers' },
      { label: 'Previous Editions', href: '/#editions' },
      { label: 'Agenda',          href: '/#agenda' },
      { label: 'Venue',           href: '/#venue' },
    ],
  },
  {
    heading: 'Participate',
    links: [
      { label: 'Apply Now',        href: '/#get-involved' },
      { label: 'Sponsor Us',       href: '#' },
      { label: 'Become a Mentor',  href: '#' },
      { label: 'Partner with Us',  href: '#' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Twitter / X',  href: '#' },
      { label: 'LinkedIn',     href: '#' },
      { label: 'Instagram',    href: '#' },
      { label: 'Contact Us',   href: '#' },
    ],
  },
];

const LEGAL = ['Privacy Policy', 'Terms of Service', 'Code of Conduct'];

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* ── Top strip ── */}
      <div className={styles.top}>
        <div className={styles.container}>

          {/* Brand col */}
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <img src="/ignite-logo.png" alt="IGNITE" className={styles.brandIcon} />
              <span className={styles.brandName}>IGNITE</span>
            </div>
            <p className={styles.brandDesc}>
              The flagship global innovation and entrepreneurship platform by PIEDS —
              building tomorrow, together, from Dubai&nbsp;2026.
            </p>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Applications open · Dubai 2026
            </div>
          </div>

          {/* Nav cols */}
          {NAV_COLS.map((col) => (
            <div key={col.heading} className={styles.col}>
              <p className={styles.colHeading}>{col.heading}</p>
              <ul className={styles.colLinks}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={styles.colLink}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── PIEDS strip ── */}
      <div className={styles.piedsStrip}>
        <div className={styles.container}>
          <div className={styles.piedsLeft}>
            <span className={styles.piedsLabel}>Organised by</span>
            <a href="/pieds" className={styles.piedsName}>
              PIEDS — Pilani Innovation &amp; Entrepreneurship Development Society
            </a>
            <p className={styles.piedsDesc}>
              The official innovation &amp; startup body of BITS Pilani, nurturing 300+ startups since 2004.
            </p>
          </div>
          <a href="/pieds" className={styles.piedsLink}>
            About PIEDS
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Big wordmark ── */}
      <div className={styles.wordmarkWrap} aria-hidden="true">
        <span className={styles.wordmark}>IGNITE</span>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <div className={styles.container}>
          <p className={styles.copy}>© 2026 IGNITE · A PIEDS × BITS Pilani Event. All rights reserved.</p>

          <div className={styles.legal}>
            {LEGAL.map((l) => (
              <a key={l} href="#" className={styles.legalLink}>{l}</a>
            ))}
          </div>

          <a href="#hero" className={styles.backToTop}>
            Back to top
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

    </footer>
  );
}
