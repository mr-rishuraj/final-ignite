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

// 4-col grid: row1=[span2,1,1]  row2=[1,span2,1]  row3=[1,1,1,1]
const FRAMES = [
  { src: 'https://framerusercontent.com/images/CDhYOBo0RCgwcpOfMlDqVGPRzHo.jpg',
    span:2, rot:0,    tx:-35, i:0,
    tag:'IGNITE 2024 · Hyderabad',
    caption:'Over 200 founders, investors & changemakers gathered for the flagship global summit — 48 hours of pure innovation and connection.' },

  { src: 'https://framerusercontent.com/images/eKnFvqXo8NgeKDp3haIv43lSQw.jpg',
    span:1, rot:-1.4, tx:25,  i:1,
    tag:'Keynote Stage',
    caption:'Visionary speakers took the stage to share frameworks that have shaped global ventures from zero to unicorn.' },

  { src: 'https://framerusercontent.com/images/M7Xh8DUZcRnsPSVjcv1lVqdCtU.jpg',
    span:1, rot:0,    tx:30,  i:2,
    tag:'Investor Roundtable',
    caption:'Curated 1-on-1 sessions between selected founders and active angel investors — deals that started over coffee.' },

  { src: 'https://framerusercontent.com/images/LZYY71GfAAmwFGFURcEc4dfpoY.jpg',
    span:1, rot:1.1,  tx:-25, i:3,
    tag:'Community Night',
    caption:'Late-night ideation and networking — where the most unexpected co-founder pairs were born.' },

  { src: 'https://framerusercontent.com/images/GdwRHopL5PPZoFG3vtKrMi8Obs.jpg',
    span:2, rot:0,    tx:0,   i:4,
    tag:'IGNITE 2023 · Startup Pitch Finals',
    caption:'15 handpicked teams competed on the grand stage for ₹10L in equity-free grants in front of a jury of industry legends.' },

  { src: 'https://framerusercontent.com/images/iRgoQCvGS1zaGMqyv3Tk3caXGc0.jpg',
    span:1, rot:-0.9, tx:25,  i:5,
    tag:'Workshop Sessions',
    caption:'Hands-on workshops on go-to-market strategy, fundraising mechanics, and building for global scale.' },

  { src: 'https://framerusercontent.com/images/EKxofgzJqoUFa12aKNb6w3bdc.jpg',
    span:1, rot:0.6,  tx:-20, i:6,
    tag:'BITS Dubai Campus',
    caption:'The iconic BITS Pilani Dubai campus — home of IGNITE 2026 and gateway to the UAE entrepreneurial ecosystem.' },

  { src: 'https://framerusercontent.com/images/ImPch0d8DDnmh6cRRuwG2q07U.jpg',
    span:1, rot:0,    tx:0,   i:7,
    tag:'Panel Discussion',
    caption:'Policymakers and founders in candid conversation about building innovation-first ecosystems across borders.' },

  { src: 'https://framerusercontent.com/images/kdOSS6oX0QI2MNascXhG4GDp9Y.jpg',
    span:1, rot:-1.0, tx:0,   i:8,
    tag:'Mentor Circles',
    caption:'Intimate mentorship circles — industry veterans sharing hard-won lessons with the next generation of builders.' },

  { src: 'https://framerusercontent.com/images/JXKU3kvLy7cYOGXkzqr5DLHT64w.jpg',
    span:1, rot:0,    tx:20,  i:9,
    tag:'Awards Ceremony',
    caption:"Celebrating the boldest ideas and the teams fearless enough to build them — IGNITE's defining closing moment." },
];

export default function Impact() {
  const [openIdx, setOpenIdx] = useState(null);
  // IO fallback for browsers without CSS scroll-driven animation support
  const [ioVisible, setIoVisible] = useState(false);
  const colRef = useRef(null);

  useEffect(() => {
    if (typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()')) return;
    const el = colRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIoVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Close popup when clicking outside any frame
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

      <div ref={colRef} className={styles.collage}>
        {FRAMES.map(({ src, span, rot, tx, i, tag, caption }) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              data-i={i}
              data-span={span}
              className={`${styles.frame} ${ioVisible ? styles.ioIn : ''}`}
              /* Column span lives in CSS (keyed off data-span) so media queries
                 can collapse it — an inline style here would outrank them. */
              style={{
                '--rot':      `${rot}deg`,
                '--tx':       `${tx}px`,
                '--io-delay': `${i * 65}ms`,
              }}
            >
              <img src={src} alt={tag} className={styles.img} draggable={false} />

              {/* Caption overlay — visible when open */}
              <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
                <div className={styles.captionBox}>
                  <span className={styles.captionTag}>{tag}</span>
                  <p className={styles.captionText}>{caption}</p>
                </div>
              </div>

              {/* + / × button */}
              <button
                className={`${styles.plusBtn} ${isOpen ? styles.plusBtnOpen : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIdx(isOpen ? null : i);
                }}
                aria-label={isOpen ? 'Close info' : 'Show info'}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
}
