import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import siteContent from '@/data/siteContent';
import styles from './sponsors.module.css';

export const metadata = {
  title: 'Partners & Sponsors',
  description: 'Explore the global network of sponsors and partners who have backed IGNITE — including Razorpay, Notion, CNBC, YourStory, and many more.',
  keywords: ['IGNITE 2026 sponsors', 'startup summit partners Dubai', 'Razorpay', 'Notion', 'CNBC', 'YourStory', 'PIEDS sponsors', 'IGNITE 2026 partners', 'innovation summit sponsors'],
  alternates: { canonical: 'https://ignite.pieds-st.in/sponsors' },
  openGraph: {
    title: 'Partners & Sponsors — IGNITE 2026',
    description: 'Explore the global network of sponsors and partners who have backed IGNITE across editions.',
    url: 'https://ignite.pieds-st.in/sponsors',
    images: [{ url: 'https://ignite.pieds-st.in/sponsors/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://ignite.pieds-st.in/sponsors/opengraph-image'],
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ignite.pieds-st.in' },
    { '@type': 'ListItem', position: 2, name: 'Partners & Sponsors', item: 'https://ignite.pieds-st.in/sponsors' },
  ],
};

export default function SponsorsPage() {
  const { sponsors } = siteContent;
  const allLogos = [...sponsors.row1, ...sponsors.row2, ...sponsors.row3];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Navbar />

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Our global network</span>
          <h1 className={styles.title}>
            Past sponsors <em className={styles.em}>&amp; partners</em>
          </h1>
          <p className={styles.desc}>
            The companies, investors, and organisations who have backed and partnered with IGNITE across editions.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {allLogos.map((src, i) => (
              <div
                key={i}
                className={styles.card}
                style={{ animationDelay: `${(i % 10) * 35}ms` }}
              >
                <div className={styles.logoWrap}>
                  <img src={src} alt={`IGNITE 2026 sponsor logo ${i + 1}`} className={styles.logo} loading="lazy" />
                </div>
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
