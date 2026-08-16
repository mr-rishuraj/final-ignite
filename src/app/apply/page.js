import ApplyForm from './ApplyForm';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Apply Now',
  description: 'Apply to IGNITE 2026 — the global startup summit in Dubai by PIEDS × BITS Pilani. Submit your startup for equity-free grants, investor access, and global exposure.',
  alternates: { canonical: '/apply' },
  openGraph: {
    title: 'Apply to IGNITE 2026 — Global Startup Summit, Dubai',
    description: 'Submit your startup to IGNITE 2026. Equity-free grants, investor access, and global exposure await.',
    url: 'https://final-ignite.vercel.app/apply',
    images: [{ url: '/gallery/ignite-2024-hyderabad.jpg', width: 1200, height: 630, alt: 'Apply to IGNITE 2026' }],
  },
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <ApplyForm />
      <Footer />
    </>
  );
}
