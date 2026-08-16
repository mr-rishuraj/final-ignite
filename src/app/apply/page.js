import ApplyForm from './ApplyForm';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Apply Now',
  description: 'Apply to IGNITE 2026 — the global startup summit in Dubai by PIEDS × BITS Pilani. Submit your startup for equity-free grants, investor access, and global exposure.',
  alternates: { canonical: 'https://final-ignite.vercel.app/apply' },
  openGraph: {
    title: 'Apply to IGNITE 2026 — Global Startup Summit, Dubai',
    description: 'Submit your startup to IGNITE 2026. Equity-free grants, investor access, and global exposure await.',
    url: 'https://final-ignite.vercel.app/apply',
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://final-ignite.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Apply', item: 'https://final-ignite.vercel.app/apply' },
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
