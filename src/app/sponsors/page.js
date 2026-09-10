import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import siteContent from '@/data/siteContent';
import styles from './sponsors.module.css';

export const metadata = {
  title: 'Partners & Sponsors',
  description: 'Explore the global network of sponsors and partners backing IGNITE 2026 in Dubai — including Razorpay, Notion, CNBC, YourStory, Peak XV Partners, and more.',
  keywords: ['IGNITE 2026 sponsors', 'startup summit partners Dubai', 'Razorpay', 'Notion', 'CNBC', 'YourStory', 'Peak XV Partners', 'PIEDS sponsors', 'IGNITE 2026 partners', 'innovation summit sponsors'],
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

const FEATURED_PARTNERS = [
  'Peak XV Partners',
  'Razorpay',
  'Notion',
  'CNBC',
  'YourStory',
  'Accel',
  'AWS',
  'Fluid Ventures',
  'Windrose Capital',
  'Antler',
];

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ignite.pieds-st.in' },
    { '@type': 'ListItem', position: 2, name: 'Partners & Sponsors', item: 'https://ignite.pieds-st.in/sponsors' },
  ],
};

const sponsorsLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'IGNITE 2026 Sponsors and Partners',
  itemListElement: FEATURED_PARTNERS.map((partner, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Organization',
      name: partner,
    },
  })),
};

function getLogoAlt(src, i) {
  if (src.toLowerCase().includes('peak_xv')) return 'Peak XV Partners logo — IGNITE sponsor';
  return `IGNITE 2026 partner and sponsor logo ${i + 1}`;
}

export default function SponsorsPage() {
  const { sponsors } = siteContent;
  const allLogos = [...sponsors.row1, ...sponsors.row2, ...sponsors.row3];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sponsorsLd).replace(/</g, '\\u003c') }}
      />

      <Navbar />

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Our Global Network</span>
          <h1 className={styles.title}>
            Partners <em className={styles.em}>&amp; Sponsors</em>
          </h1>
          <p className={styles.desc}>
            The leading venture capital funds, technology ecosystems, and enterprise partners who have backed and partnered with IGNITE across editions.
          </p>

          <div className={styles.featuredStrip}>
            <span className={styles.featuredLabel}>Featured Partners:</span>
            {FEATURED_PARTNERS.map((p) => (
              <span key={p} className={styles.featuredChip}>{p}</span>
            ))}
          </div>
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
                  <img src={src} alt={getLogoAlt(src, i)} className={styles.logo} loading="lazy" />
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

      {/* Partner CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Partner With IGNITE 2026</h2>
          <p className={styles.ctaDesc}>
            Connect your brand with 100+ vetted founders, global investors, and top university innovators at our flagship Dubai summit.
          </p>
          <div className={styles.ctaButtons}>
            <a href="mailto:ignite@pieds-bitspilani.org" className={styles.ctaBtn}>
              Contact Partnerships Team →
            </a>
            <Link href="/apply" className={styles.ctaBtnSecondary}>
              Apply to Attend
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
