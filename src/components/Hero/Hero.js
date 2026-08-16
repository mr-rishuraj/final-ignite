'use client';

import { useEffect, useRef, useState } from 'react';
import siteContent from '@/data/siteContent';
import styles from './Hero.module.css';

export default function Hero() {
  const { hero } = siteContent;

  const [scrollY, setScrollY]     = useState(0);
  const [winH, setWinH]           = useState(900);
  const [cinematic, setCinematic] = useState(false);
  const [entryP, setEntryP]       = useState(0);
  const rafRef      = useRef(null);
  const mountRef    = useRef(Date.now());
  const entryDone   = useRef(false);

  const ENTRY_MS = 2000;

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
      cScroll = lerp(cScroll, tScroll, 0.09);
      setScrollY(cScroll);

      if (!entryDone.current) {
        const raw   = Math.min(1, (Date.now() - mountRef.current) / ENTRY_MS);
        // easeInOutQuart: slow start → accelerates → soft settle
        const eased = raw < 0.5
          ? 8 * raw * raw * raw * raw
          : 1 - Math.pow(-2 * raw + 2, 4) / 2;
        setEntryP(eased);
        if (raw >= 1) entryDone.current = true;
      }

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
  const pe = p * p * p;

  // Content drifts upward gently on scroll, fades out at ~40% progress
  const contentTransform = cinematic ? `translateY(${-scrollY * 0.06}px)` : 'none';
  const contentOpacity   = Math.max(0, 1 - p * 2.5);

  // On mobile (cinematic=false) use higher opacity so zoom-in is visible
  const baseOpacity = cinematic ? 0.09 : 0.22;

  // Entrance: zooms in 0.3× → 1×, fades in 0 → baseOpacity over 2s
  const entryScale   = 0.3 + 0.7 * entryP;
  const entryOpacity = baseOpacity * entryP;

  // Scroll: zooms in 1× → ~5× (fills section) and fades out, quadratic ease
  const pw            = p * p;
  const scrollScale   = 1 + pw * 4;
  const scrollOpacity = Math.max(0, baseOpacity * (1 - pw * 1.1));

  const watermarkScale   = entryP < 1 ? entryScale   : scrollScale;
  const watermarkOpacity = entryP < 1 ? entryOpacity : scrollOpacity;

  return (
    <div className={styles.heroScrollZone}>
      <section className={styles.hero} id="hero">

        {/* Warm ivory background */}
        <div className={styles.bg} aria-hidden="true" />

        {/* Group photo — blended into bottom of hero */}
        <div className={styles.groupPhotoWrap} aria-hidden="true">
          <img
            src="/Ignite%20'26%20-%20Dubai/Group%201.png"
            alt=""
            className={styles.groupPhoto}
          />
        </div>

        {/* Bottom vignette */}
        <div className={styles.overlayBottom} aria-hidden="true" />


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
          <span className={styles.watermarkLabel}>IGNITE 2026</span>
        </div>

        {/* Mobile-only CTA — floats over the watermark logo */}
        <a href={hero.ctaPrimary.href} className={`${styles.cta} ${styles.ctaMobile}`}>
          Apply Now
        </a>

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

          {/* Desktop CTA */}
          <a href={hero.ctaPrimary.href} className={`${styles.cta} ${styles.ctaDesktop}`}>
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
