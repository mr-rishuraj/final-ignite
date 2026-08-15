'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import siteContent from '@/data/siteContent';
import styles from './sponsors.module.css';

export default function SponsorsPage() {
  const { sponsors } = siteContent;
  const allLogos = [...sponsors.row1, ...sponsors.row2, ...sponsors.row3];

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.cardVisible);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );
    cards.forEach(card => obs.observe(card));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Our Global Network</span>
          <h1 className={styles.title}>
            Past Sponsors <em className={styles.em}>&amp; Partners</em>
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
                style={{ '--delay': `${(i % 5) * 55}ms` }}
              >
                <div className={styles.logoWrap}>
                  <img src={src} alt="sponsor" className={styles.logo} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
