'use client';

import { useState } from 'react';
import siteContent from '@/data/siteContent';
import styles from './Agenda.module.css';

export default function Agenda() {
  const { agenda } = siteContent;
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="agenda" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>{agenda.label}</span>
          <h2 className={styles.sectionTitle}>
            {agenda.title}{' '}
            <span className={styles.titleAccent}>{agenda.titleAccent}</span>
          </h2>
          <p className={styles.description}>{agenda.description}</p>
        </div>

        <div className={styles.tabs}>
          {agenda.days.map((day, i) => (
            <button
              key={day.id}
              className={`${styles.tab} ${activeDay === i ? styles.tabActive : ''}`}
              onClick={() => setActiveDay(i)}
            >
              <span className={styles.tabLabel}>{day.label}</span>
              <span className={styles.tabDate}>{day.date}</span>
            </button>
          ))}
        </div>

        <div className={styles.sessionList}>
          {agenda.days[activeDay].sessions.map((session, i) => (
            <div key={i} className={styles.sessionCard}>
              <div className={styles.sessionTime}>{session.time}</div>
              <div className={styles.sessionContent}>
                <h3 className={styles.sessionTitle}>{session.title}</h3>
                <p className={styles.sessionDesc}>{session.description}</p>
                <div className={styles.tags}>
                  {session.tags.map((tag, j) => (
                    <span key={j} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.sessionMeta}>
                <span className={styles.sessionSpeaker}>{session.speaker}</span>
                <span className={styles.sessionDuration}>{session.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
