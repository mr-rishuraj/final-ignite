import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import siteContent from '@/data/siteContent';
import styles from './speakers.module.css';

export const metadata = {
  title: 'Speakers',
  description: 'Meet the visionary founders, investors, and industry leaders speaking at IGNITE 2026 in Dubai — the flagship entrepreneurship summit by PIEDS × BITS Pilani.',
  alternates: { canonical: '/speakers' },
  openGraph: {
    title: 'Speakers — IGNITE 2026',
    description: 'Meet the visionary founders, investors, and industry leaders speaking at IGNITE 2026 in Dubai.',
    url: 'https://final-ignite.vercel.app/speakers',
    images: [{ url: '/gallery/panel-discussion.jpg', width: 1200, height: 630, alt: 'IGNITE 2026 Speakers' }],
  },
};

export default function SpeakersPage() {
  const { speakers } = siteContent;
  const all = [...speakers.row1, ...speakers.row2];

  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>{speakers.label}</span>
          <h1 className={styles.title}>
            {speakers.title} <em className={styles.em}>{speakers.titleAccent}</em>
          </h1>
          <p className={styles.desc}>{speakers.description}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {all.map((s, i) => (
              <div
                key={s.name}
                className={styles.card}
                style={{ animationDelay: `${(i % 8) * 45}ms` }}
              >
                <div className={styles.imgWrap}>
                  {s.image ? (
                    <img src={s.image} alt={s.name} className={styles.img} />
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

          <div className={styles.moreWrap}>
            <span className={styles.moreLine} />
            <p className={styles.moreText}>and many more…</p>
            <span className={styles.moreLine} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
