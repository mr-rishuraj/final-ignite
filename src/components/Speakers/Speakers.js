'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import siteContent from '@/data/siteContent';
import styles from './Speakers.module.css';

export default function Speakers() {
  const { speakers } = siteContent;
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="speakers" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>

        <div className={`${styles.header} ${visible ? styles.headerVisible : ''}`}>
          <span className={styles.sectionLabel}>{speakers.label}</span>
          <h2 className={styles.sectionTitle}>
            {speakers.title}{' '}
            <span className={styles.titleAccent}>{speakers.titleAccent}</span>
          </h2>
          <p className={styles.description}>{speakers.description}</p>
        </div>

        <div className={styles.grid}>
          {speakers.list.map((speaker, i) => (
            <div
              key={i}
              className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
              style={{ '--delay': `${120 + i * 55}ms` }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.speakerName}>{speaker.name}</h3>
                <p className={styles.speakerRole}>{speaker.role}</p>
                <p className={styles.speakerCompany}>{speaker.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
