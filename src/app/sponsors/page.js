import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import siteContent from '@/data/siteContent';
import styles from './sponsors.module.css';

export default function SponsorsPage() {
  const { sponsors } = siteContent;
  const allLogos = [...sponsors.row1, ...sponsors.row2, ...sponsors.row3];

  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Our global network</span>
          <h1 className={styles.title}>
            Past sponsors <em className={styles.em}>&amp; partners</em>
          </h1>
          <p className={styles.desc}>
            The companies, investors, and organisations who have backed and partnered with IGNITE across editions.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {allLogos.map((src, i) => (
              <div
                key={i}
                className={styles.card}
                style={{ animationDelay: `${(i % 10) * 35}ms` }}
              >
                <div className={styles.logoWrap}>
                  <img src={src} alt="sponsor" className={styles.logo} loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.moreWrap}>
            <span className={styles.moreLine} />
            <p className={styles.moreText}>and many more…</p>
            <span className={styles.moreLine} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
