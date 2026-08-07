'use client';

import { useEffect, useRef, useState } from 'react';
import siteContent from '@/data/siteContent';
import styles from './Hero.module.css';

export default function Hero() {
  const { hero } = siteContent;

  const [scrollY, setScrollY]   = useState(0);
  const [winH, setWinH]         = useState(900);
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
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      cScroll = lerp(cScroll, tScroll, 0.07);
      setScrollY(cScroll);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onScroll = () => { tScroll = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      mq.removeEventListener('change', sync);
      reduce.removeEventListener('change', sync);
    };
  }, []);

  const p  = cinematic ? Math.min(1, Math.max(0, scrollY / winH)) : 0;
  // Cubic easing — very slow start, gradual acceleration
  const pe = p * p * p;

  // Content drifts upward gently on scroll, fades out at ~40% progress
  const contentTransform = cinematic ? `translateY(${-scrollY * 0.06}px)` : 'none';
  const contentOpacity   = Math.max(0, 1 - p * 2.5);

  // Watermark: very gentle scale (1× → 1.8× max), cubic eased
  const watermarkScale   = 1 + pe * 0.8;
  const watermarkOpacity = 0.055;

  return (
    <div className={styles.heroScrollZone}>
      <section className={styles.hero} id="hero">

        {/* Warm ivory background */}
        <div className={styles.bg} aria-hidden="true" />

        {/* Bottom vignette */}
        <div className={styles.overlayBottom} aria-hidden="true" />

        {/* Warm sunset glow — bottom of hero */}
        <div className={styles.bottomGlow} aria-hidden="true" />

        {/* Watermark — wrapper animates CSS float, img handles JS scale */}
        <div className={styles.watermarkWrap} aria-hidden="true">
          <img
            src="/ignite-logo.png"
            alt=""
            className={styles.watermark}
            style={{
              transform: `scale(${watermarkScale})`,
              opacity:   watermarkOpacity,
            }}
          />
        </div>

        {/* ── Main content ── */}
        <div
          className={styles.inner}
          style={{ transform: contentTransform, opacity: contentOpacity }}
        >
          {/* Heading */}
          <h1 className={styles.heading}>
            <span className={styles.headingMain}>
              Build Your <em className={styles.headingHighlight}>Startup</em>
            </span>
            <span className={styles.headingAccent}>Your Dream, Our Spark</span>
          </h1>

          {/* CTA */}
          <a href={hero.ctaPrimary.href} className={styles.cta}>
            Apply Now
          </a>
        </div>

        {/* Architectural curves — sand dune / silk silhouettes */}
        <div className={styles.curves} aria-hidden="true">
          <svg
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,72 C180,128 420,28 660,88 C900,148 1140,38 1440,96 L1440,180 L0,180 Z"
              fill="rgba(197,59,72,0.10)"
            />
            <path
              d="M0,110 C280,68 560,152 840,118 C1040,94 1280,148 1440,124 L1440,180 L0,180 Z"
              fill="rgba(197,59,72,0.07)"
            />
            <path
              d="M0,148 C320,116 680,168 1000,144 C1180,132 1340,158 1440,150 L1440,180 L0,180 Z"
              fill="rgba(197,59,72,0.04)"
            />
          </svg>
        </div>

        {/* Scroll cue */}
        <div
          className={styles.scrollCue}
          aria-hidden="true"
          style={{ opacity: Math.max(0, 1 - p * 6) }}
        >
          <div className={styles.scrollLine} />
        </div>

      </section>
    </div>
  );
}
