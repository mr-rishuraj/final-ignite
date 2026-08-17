import ApplyForm from './ApplyForm';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Apply Now',
  description: 'Apply to IGNITE 2026 — the global startup summit in Dubai by PIEDS × BITS Pilani. Submit your startup for equity-free grants, investor access, and global exposure.',
  keywords: ['apply IGNITE 2026', 'startup application Dubai', 'equity-free grants startup India', 'PIEDS startup application', 'IGNITE 2026 startup submission', 'startup pitch Dubai 2026', 'BITS Pilani startup apply'],
  alternates: { canonical: 'https://ignite.pieds-st.in/apply' },
  openGraph: {
    title: 'Apply to IGNITE 2026 — Global Startup Summit, Dubai',
    description: 'Submit your startup to IGNITE 2026. Equity-free grants, investor access, and global exposure await.',
    url: 'https://ignite.pieds-st.in/apply',
    images: [{ url: 'https://ignite.pieds-st.in/apply/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://ignite.pieds-st.in/apply/opengraph-image'],
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ignite.pieds-st.in' },
    { '@type': 'ListItem', position: 2, name: 'Apply', item: 'https://ignite.pieds-st.in/apply' },
  ],
};

export default function ApplyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <ApplyForm />
      <Footer />
    </>
  );
}
