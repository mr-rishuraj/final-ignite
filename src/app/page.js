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
  alternates: { canonical: 'https://ignite.pieds-st.in' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'IGNITE 2026',
  description: 'The flagship global innovation and entrepreneurship summit by PIEDS × BITS Pilani, bringing together 100+ founders, investors, and industry leaders in Dubai.',
  url: 'https://ignite.pieds-st.in',
  startDate: '2026',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'BITS Pilani Dubai Campus, Dubai, UAE',
    address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
  },
  organizer: {
    '@type': 'Organization',
    name: 'PIEDS — BITS Pilani',
    url: 'https://pieds-bitspilani.org/',
  },
  image: 'https://ignite.pieds-st.in/bits-dubai.jpg',
  offers: {
    '@type': 'Offer',
    url: 'https://ignite.pieds-st.in/apply',
    availability: 'https://schema.org/InStock',
    price: '0',
    priceCurrency: 'INR',
    description: 'Equity-free grants available for selected founders.',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Founders, Investors, Entrepreneurs, Industry Leaders',
  },
  typicalAgeRange: '18-',
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
