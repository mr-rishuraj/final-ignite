import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import siteContent from '@/data/siteContent';
import styles from './partnership.module.css';

export const metadata = {
  title: 'Become a Partner — IGNITE 2026',
  description: 'Partner with IGNITE 2026 and connect with 100+ founders, investors, and innovators at BITS Pilani Dubai.',
};

export default function PartnershipPage() {
  const { getInvolved: gi } = siteContent;

  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{gi.label}</span>
          <h1 className={styles.title}>
            {gi.title} <em className={styles.em}>{gi.titleAccent}</em>
          </h1>
          <p className={styles.body}>{gi.body}</p>
        </div>
        <div className={styles.heroWordmark} aria-hidden="true">PARTNER</div>
      </section>

      <section className={styles.tiers}>
        <div className={styles.container}>
          <ol className={styles.steps}>
            {gi.steps.map(({ step, title, desc }) => (
              <li key={step} className={styles.step}>
                <span className={styles.stepNum}>{step}</span>
                <h2 className={styles.stepTitle}>{title}</h2>
                <p className={styles.stepDesc}>{desc}</p>
              </li>
            ))}
          </ol>

          <div className={styles.contact}>
            <p className={styles.note}>{gi.note}</p>
            <a href={gi.ctaEmail.href} className={styles.emailBtn}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 4h12v8H2V4zm0 0l6 5 6-5" stroke="currentColor" strokeWidth="1.4"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {gi.ctaEmail.label}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
