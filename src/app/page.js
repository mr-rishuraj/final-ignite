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

const eventLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'IGNITE 2026',
  description: 'The flagship global innovation and entrepreneurship summit by PIEDS × BITS Pilani, bringing together 100+ founders, investors, and industry leaders in Dubai.',
  url: 'https://ignite.pieds-st.in',
  startDate: '2026-10-29',
  endDate: '2026-10-31',
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
  image: [
    'https://ignite.pieds-st.in/bits-dubai.jpg',
    'https://ignite.pieds-st.in/background-image.png',
  ],
  offers: {
    '@type': 'Offer',
    url: 'https://ignite.pieds-st.in/apply',
    availability: 'https://schema.org/InStock',
    price: '0',
    priceCurrency: 'AED',
    description: 'Equity-free grants available for selected founders.',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Founders, Investors, Entrepreneurs, Industry Leaders',
  },
  typicalAgeRange: '18-',
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is IGNITE 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IGNITE 2026 is the flagship global innovation and entrepreneurship summit hosted in Dubai by PIEDS × BITS Pilani. It brings together 100+ pre-vetted founders, investors, and industry leaders for three days of networking, pitching, and collaboration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I apply to IGNITE 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can apply to IGNITE 2026 through the official application form at https://ignite.pieds-st.in/apply. Selected startups receive equity-free grants, investor access, and global exposure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is IGNITE 2026 being held?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IGNITE 2026 is held at the BITS Pilani Dubai Campus in Dubai, UAE.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can attend IGNITE 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IGNITE 2026 is open to startup founders, investors, venture capitalists, industry leaders, and aspiring entrepreneurs. Applications are evaluated and curated for quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is PIEDS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PIEDS (Pilani Innovation & Entrepreneurship Development Society) is a leading non-profit technology business incubator established in 2013 at BITS Pilani. It has powered 75+ startups and facilitated ₹5M+ in funding, and is the organiser behind IGNITE.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there equity-free grants at IGNITE 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. IGNITE 2026 offers equity-free grants of ₹10L+ to selected startups through PIEDS, with no equity or repayment required.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
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
