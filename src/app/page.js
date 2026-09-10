import IntroWrapper from '@/components/Intro/IntroWrapper';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Sponsors from '@/components/Sponsors/Sponsors';
import Features from '@/components/Features';
import Ignite2026 from '@/components/Ignite2026/Ignite2026';
import SpeakersGrid from '@/components/SpeakersGrid';
import EventsCollage from '@/components/EventsCollage/EventsCollage';
import EventProgramme from '@/components/EventProgramme/EventProgramme';
import FAQ from '@/components/FAQ/FAQ';
import Footer from '@/components/Footer/Footer';
import siteContent from '@/data/siteContent';
import { FAQ_ITEMS } from '@/data/faqData';

export const metadata = {
  title: 'IGNITE 2026 — Global Innovation Summit, Dubai',
  description: 'IGNITE is the flagship global innovation and entrepreneurship summit by PIEDS × BITS Pilani. Join 100+ founders, investors, and industry leaders in Dubai 2026.',
  alternates: { canonical: 'https://ignite.pieds-st.in' },
};

const allSpeakers = [...siteContent.speakers.row1, ...siteContent.speakers.row2];

const eventLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'IGNITE 2026 — Global Innovation Summit, Dubai',
  alternateName: 'IGNITE 2026',
  description: 'The flagship global innovation and entrepreneurship summit by PIEDS × BITS Pilani, bringing together 100+ founders, investors, and industry leaders in Dubai.',
  url: 'https://ignite.pieds-st.in',
  startDate: '2026-10-29T09:00:00+04:00',
  endDate: '2026-10-31T18:00:00+04:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'BITS Pilani Dubai Campus',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dubai International Academic City',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '345055',
      addressCountry: 'AE',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'PIEDS — BITS Pilani',
    url: 'https://pieds-bitspilani.org/',
    logo: 'https://ignite.pieds-st.in/ignite-logo.png',
  },
  image: [
    'https://ignite.pieds-st.in/bits-dubai.jpg',
    'https://ignite.pieds-st.in/background-image.png',
    'https://ignite.pieds-st.in/opengraph-image',
  ],
  offers: [
    {
      '@type': 'Offer',
      name: 'Founder Application (Equity-free grants)',
      url: 'https://ignite.pieds-st.in/apply',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'AED',
      validFrom: '2026-01-01T00:00:00+04:00',
      priceValidUntil: '2026-10-29T09:00:00+04:00',
      description: 'Equity-free grants of ₹10L+ available for selected founders.',
    },
    {
      '@type': 'Offer',
      name: 'Delegate Pass',
      url: 'https://ignite.pieds-st.in/apply',
      availability: 'https://schema.org/InStock',
      price: '299',
      priceCurrency: 'USD',
      validFrom: '2026-01-01T00:00:00+04:00',
      priceValidUntil: '2026-10-29T09:00:00+04:00',
      description: 'Full access to the IGNITE 2026 global summit.',
    },
    {
      '@type': 'Offer',
      name: 'Founder Pass',
      url: 'https://ignite.pieds-st.in/apply',
      availability: 'https://schema.org/InStock',
      price: '599',
      priceCurrency: 'USD',
      validFrom: '2026-01-01T00:00:00+04:00',
      priceValidUntil: '2026-10-29T09:00:00+04:00',
      description: 'Premium access with investor interactions and mentorship.',
    },
  ],
  performer: allSpeakers.map((s) => ({
    '@type': 'Person',
    name: s.name,
    jobTitle: s.role,
    worksFor: {
      '@type': 'Organization',
      name: s.company,
    },
  })),
  audience: {
    '@type': 'Audience',
    audienceType: 'Founders, Investors, Entrepreneurs, Industry Leaders',
  },
  typicalAgeRange: '18-',
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, '\\u003c') }}
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
      <FAQ />
      <Footer />
    </>
  );
}
