'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Impact.module.css';

const TICKER = [
  { t: '950+ Founders',             c: 'var(--color-text)' },
  { t: '60+ Active Investors',      c: 'var(--color-text-muted)' },
  { t: '₹10L+ Equity-Free Grants',  c: 'var(--color-text)' },
  { t: '300+ Startups Incubated',   c: 'var(--color-text-muted)' },
  { t: 'Global Stage · Dubai 2026', c: 'var(--color-text)' },
];

// 3-image bento: tall portrait left | landscape top-right + portrait bottom-right
const FRAMES = [
  {
    src: '/gallery/investor-roundtable.jpg',
    tag: 'Investor Roundtable',
    caption: 'Curated 1-on-1 sessions between selected founders and active angel investors — deals that started over coffee.',
    layout: 'tall',
  },
  {
    src: '/gallery/ignite-2024-hyderabad.jpg',
    tag: 'IGNITE 2024 · Hyderabad',
    caption: 'Over 200 founders, investors & changemakers gathered for the flagship summit — 48 hours of pure innovation.',
    layout: 'wide',
  },
  {
    src: '/gallery/community-night.jpg',
    tag: 'Community Night',
    caption: 'Late-night ideation and networking — where the most unexpected co-founder pairs were born.',
    layout: 'square',
  },
];

export default function Impact() {
  const [openIdx, setOpenIdx] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (openIdx === null) return;
    const close = (e) => {
      if (!e.target.closest(`.${styles.frame}`)) setOpenIdx(null);
    };
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [openIdx]);

  return (
    <section id="impact" className={styles.section}>

      <div className={styles.header}>
        <span className={styles.eyebrow}>Legacy of IGNITE</span>
        <h2 className={styles.title}>
          Moments that&nbsp;<em className={styles.em}>Defined</em>&nbsp;Us
        </h2>
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.track}>
          {[...TICKER, ...TICKER, ...TICKER].map((item, k) => (
            <span key={k} className={styles.tickItem} style={{ color: item.c }}>
              {item.t}
            </span>
          ))}
        </div>
      </div>

      <div ref={sectionRef} className={`${styles.bento} ${visible ? styles.bentoVisible : ''}`}>
        {FRAMES.map(({ src, tag, caption, layout }, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              data-layout={layout}
              className={`${styles.frame} ${visible ? styles.frameIn : ''}`}
              style={{ '--delay': `${i * 120}ms` }}
            >
              <img
                src={src}
                alt={tag}
                className={styles.img}
                loading={i === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />

              <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
                <div className={styles.captionBox}>
                  <span className={styles.captionTag}>{tag}</span>
                  <p className={styles.captionText}>{caption}</p>
                </div>
              </div>

              <button
                className={`${styles.plusBtn} ${isOpen ? styles.plusBtnOpen : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIdx(isOpen ? null : i);
                }}
                aria-label={isOpen ? 'Close info' : 'Show info'}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
}
