'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Headline.module.css';

// Text split into segments: strings and inline images
const SEGMENTS = [
  { type: 'text',  value: 'The flagship global platform where visionary founders, investors, and industry leaders come together to shape the future.' },
  // { type: 'image', src: 'https://framerusercontent.com/images/JbPxwvJBrFJUIUnPPorAlnIfpT4.png' },
  // { type: 'image', src: 'https://framerusercontent.com/images/8uIHbH2tUvdXW29Doa9An2Os9o.png' },
];

// Flatten into an array of renderable tokens (chars + images) with global indices
function buildTokens() {
  const tokens = [];
  for (const seg of SEGMENTS) {
    if (seg.type === 'image') {
      tokens.push({ type: 'image', src: seg.src });
    } else {
      for (const ch of seg.value) {
        tokens.push({ type: 'char', char: ch });
      }
    }
  }
  return tokens;
}

const TOKENS = buildTokens();
const CHAR_TOKENS = TOKENS.filter(t => t.type === 'char').length;

export default function Headline() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0–1 through the section

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Start highlighting when section top hits 80% down the viewport
      // Finish when section bottom is at 20% down the viewport
      const start = windowH * 0.75;
      const end   = windowH * 0.1;
      const raw   = (start - top) / (start - end + height * 0.5);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // How many chars should be lit at this progress
  const litCount = Math.floor(progress * CHAR_TOKENS);

  let charIndex = 0;

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.label}>About IGNITE</div>
        <h2 className={styles.text}>
          {TOKENS.map((token, i) => {
            if (token.type === 'image') {
              return (
                <img
                  key={`img-${i}`}
                  src={token.src}
                  className={styles.inlineImg}
                  alt=""
                />
              );
            }
            const idx = charIndex++;
            const lit = idx < litCount;
            // Space chars: don't colour, just render
            if (token.char === ' ') {
              return <span key={i}> </span>;
            }
            return (
              <span
                key={i}
                className={lit ? styles.charLit : styles.charDim}
              >
                {token.char}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
