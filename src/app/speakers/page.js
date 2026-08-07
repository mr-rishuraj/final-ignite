import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import siteContent from '@/data/siteContent';
import styles from './speakers.module.css';

export const metadata = {
  title: 'Past Speakers — IGNITE',
  description: 'Founders, investors, and industry leaders who have shaped the entrepreneurial landscape at IGNITE.',
};

export default function SpeakersPage() {
  const { speakers } = siteContent;
  const all = [...speakers.row1, ...speakers.row2];

  return (
    <>
      <Navbar />

      {/* Page header */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>{speakers.label}</span>
          <h1 className={styles.title}>
            {speakers.title} <em className={styles.em}>{speakers.titleAccent}</em>
          </h1>
          <p className={styles.desc}>{speakers.description}</p>
        </div>
      </section>

      {/* Full speaker grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {all.map((s) => (
              <div key={s.name} className={styles.card}>
                <div className={styles.imgWrap}>
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.name}
                      className={styles.img}
                    />
                  ) : (
                    <div className={styles.initials}>
                      {s.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                    </div>
                  )}
                </div>
                <h2 className={styles.name}>{s.name}</h2>
                <p className={styles.role}>{s.role}</p>
                <p className={styles.company}>{s.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
