import IntroWrapper from '@/components/Intro/IntroWrapper';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Sponsors from '@/components/Sponsors/Sponsors';
import Features from '@/components/Features';
import Ignite2026 from '@/components/Ignite2026/Ignite2026';
import SpeakersGrid from '@/components/SpeakersGrid';
import EventsCollage from '@/components/EventsCollage/EventsCollage';
import EventProgramme from '@/components/EventProgramme/EventProgramme';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'IGNITE 2026 — Global Innovation Summit, Dubai',
  description: 'IGNITE is the flagship global innovation and entrepreneurship summit by PIEDS × BITS Pilani. Join 100+ founders, investors, and industry leaders in Dubai 2026.',
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'IGNITE 2026',
  description: 'The flagship global innovation and entrepreneurship summit by PIEDS × BITS Pilani, bringing together founders, investors, and industry leaders.',
  url: 'https://final-ignite.vercel.app',
  startDate: '2026-01-01',
  endDate: '2026-12-31',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Dubai, UAE',
    address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
  },
  organizer: {
    '@type': 'Organization',
    name: 'PIEDS — BITS Pilani',
    url: 'https://pieds-bitspilani.org/',
  },
  image: 'https://final-ignite.vercel.app/gallery/keynote-stage.jpg',
  offers: {
    '@type': 'Offer',
    url: 'https://final-ignite.vercel.app/apply',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-01-01',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IntroWrapper />
      <Navbar />
      <Hero />
      <Features />
      <EventsCollage />
      <Ignite2026 />
      <EventProgramme />
      <Sponsors />
      <SpeakersGrid />
      <Footer />
    </>
  );
}
