'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse]     = useState({ x: 0, y: 0 });
  const [winH, setWinH]       = useState(900);
  // Below 769px the hero is a normal flow section (see Hero.module.css), so the
  // sticky scroll choreography is skipped entirely rather than animating nothing.
  const [cinematic, setCinematic] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const mq     = window.matchMedia('(min-width: 769px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync   = () => setCinematic(mq.matches && !reduce.matches);
    sync();
    mq.addEventListener('change', sync);
    reduce.addEventListener('change', sync);

    setWinH(window.innerHeight);
    const onResize = () => setWinH(window.innerHeight);
    window.addEventListener('resize', onResize);

    let tScroll = 0, cScroll = 0;
    let tMx = 0, tMy = 0, cMx = 0, cMy = 0;
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      cScroll = lerp(cScroll, tScroll, 0.07);
      cMx     = lerp(cMx, tMx, 0.05);
      cMy     = lerp(cMy, tMy, 0.05);
      setScrollY(cScroll);
      setMouse({ x: cMx, y: cMy });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onScroll = () => { tScroll = window.scrollY; };
    const onMouse  = (e) => {
      tMx = (e.clientX / window.innerWidth  - 0.5) * 24;
      tMy = (e.clientY / window.innerHeight - 0.5) * 16;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouse);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      mq.removeEventListener('change', sync);
      reduce.removeEventListener('change', sync);
    };
  }, []);

  // 0 → 1 as user scrolls through the sticky hero zone
  const p = cinematic ? Math.min(1, Math.max(0, scrollY / winH)) : 0;
  // ease-in curve so the growth accelerates as you scroll
  const pe = p * p;

  const bgTransform      = cinematic
    ? `translate(${mouse.x * 0.4}px, calc(${scrollY * 0.42}px + ${mouse.y * 0.3}px)) scale(1.14)`
    : 'none';
  const contentTransform = cinematic ? `translateY(${-scrollY * 0.1}px)` : 'none';
  // content fades out in the first 40% of scroll progress
  const contentOpacity   = Math.max(0, 1 - p * 2.5);

  // watermark grows from 1× to 22× with an eased curve
  const watermarkScale   = 1 + pe * 21;
  const watermarkOpacity = 0.07 + p * 0.13;
  const watermarkBlur    = Math.max(0, 1 - p * 3);

  return (
    <div className={styles.heroScrollZone}>
      <section className={styles.hero} id="hero">

        {/* Parallax BG */}
        <div className={styles.bg} style={{ transform: bgTransform }} aria-hidden="true" />

        {/* Overlays */}
        <div className={styles.overlayTop}    aria-hidden="true" />
        <div className={styles.overlayBottom} aria-hidden="true" />

        {/* ── Watermark logo — grows on scroll ── */}
        <img
          src="/ignite-logo.png"
          alt=""
          className={styles.watermark}
          aria-hidden="true"
          style={{
            transform: `translate(-50%, -50%) scale(${watermarkScale})`,
            opacity: watermarkOpacity,
            filter: `blur(${watermarkBlur}px) brightness(2)`,
          }}
        />

        {/* ── Desert silhouettes ── */}
        <img src="/tree-t.png"  alt="" className={styles.silhouetteTree}      aria-hidden="true" style={{ opacity: 0.6  * contentOpacity }} />
        <img src="/camel-t.png" alt="" className={styles.silhouetteCamel}     aria-hidden="true" style={{ opacity: 0.55 * contentOpacity }} />
        <img src="/camel-t.png" alt="" className={styles.silhouetteCamelFlip} aria-hidden="true" style={{ opacity: 0.48 * contentOpacity }} />

        {/* ── Left edge: vertical IGNITE + horizontal 2026 ── */}
        <div className={styles.leftTypo} style={{ transform: contentTransform, opacity: contentOpacity }}>
          <h1 className={styles.igniteVert}>IGNITE</h1>
          <span className={styles.yearHoriz}>2026</span>
        </div>

        {/* ── Centre content ── */}
        <div className={styles.inner} style={{ transform: contentTransform, opacity: contentOpacity }}>

          {/* Pills */}
          <div className={styles.pills}>
            <span className={styles.pill}>
              <span className={styles.liveDot} aria-hidden="true" />
              Global Summit
            </span>
            <span className={styles.pill}>📍 Dubai, UAE</span>
            <span className={styles.pill}>2026 · By PIEDS × BITS Pilani</span>
          </div>

          {/* Tagline */}
          <p className={styles.tagline}>
            Building Tomorrow,<br /><em className={styles.em}>Together.</em>
          </p>

          {/* Sub */}
          <p className={styles.sub}>
            IGNITE is the flagship global platform by PIEDS — connecting founders,
            investors, and industry leaders to shape the future of entrepreneurship.
          </p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <a href="#get-involved" className={styles.ctaPrimary}>
              Apply Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#about" className={styles.ctaSecondary}>See how it works</a>
          </div>

          {/* Social proof */}
          <div className={styles.proof}>
            <div className={styles.avatars}>
              {[
                'https://framerusercontent.com/images/19wGOlJQp54zgd3vWysk6Wqafk.png',
                'https://framerusercontent.com/images/FsNbsa9jCpD7375FjsQuEO8JBw.webp',
                'https://framerusercontent.com/images/Novsmjw6IIhKDVyD7ZI2i4sAsE.webp',
                'https://framerusercontent.com/images/IVA2zVsD7sWebTDntsDdlviCksQ.webp',
              ].map((src, i) => (
                <img key={i} src={src} alt="" className={styles.avatar} style={{ zIndex: 4 - i }} />
              ))}
            </div>
            <p className={styles.proofText}>
              Joined by <strong>950+ changemakers</strong> across previous editions
            </p>
          </div>

        </div>

        {/* Stats bar */}
        <div className={styles.statsBar} style={{ transform: contentTransform, opacity: contentOpacity }}>
          {[
            ['6',    'Days of building'],
            ['100',  'Selected innovators'],
            ['20+',  'MVPs launched'],
            ['₹10L+','Equity-free grants'],
          ].map(([v, l]) => (
            <div key={l} className={styles.stat}>
              <span className={styles.statVal}>{v}</span>
              <span className={styles.statLbl}>{l}</span>
            </div>
          ))}
        </div>

        {/* Scroll cue — hide as user starts scrolling */}
        <div className={styles.scrollCue} aria-hidden="true" style={{ opacity: Math.max(0, 1 - p * 5) }}>
          <div className={styles.scrollLine} />
        </div>

      </section>
    </div>
  );
}
