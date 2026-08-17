import './globals.css';

const BASE_URL = 'https://ignite.pieds-st.in';
const OG_IMAGE = `${BASE_URL}/opengraph-image`;

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'IGNITE 2026 — Global Innovation Summit, Dubai',
    template: '%s | IGNITE 2026',
  },
  description: 'IGNITE is the flagship global innovation and entrepreneurship summit by PIEDS × BITS Pilani, Dubai 2026. Connect with 100+ founders, investors, and industry leaders.',
  keywords: [
    'IGNITE 2026', 'startup summit Dubai', 'BITS Pilani', 'PIEDS',
    'entrepreneurship conference', 'innovation summit', 'startup competition',
    'venture capital Dubai', 'student entrepreneurship', 'Dubai startup event 2026',
    'BITS Pilani Dubai', 'global innovation platform',
  ],
  authors: [{ name: 'PIEDS — BITS Pilani', url: 'https://pieds-bitspilani.org/' }],
  creator: 'PIEDS — BITS Pilani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'IGNITE 2026',
    title: 'IGNITE 2026 — Global Innovation Summit, Dubai',
    description: 'Join 100+ founders, investors, and industry leaders at the IGNITE 2026 summit in Dubai — the flagship entrepreneurship platform by PIEDS × BITS Pilani.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'IGNITE 2026 — Global Innovation Summit, Dubai' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGNITE 2026 — Global Innovation Summit, Dubai',
    description: 'Join 100+ founders, investors, and leaders at the IGNITE 2026 summit in Dubai by PIEDS × BITS Pilani.',
    images: [OG_IMAGE],
  },
  verification: {
    google: '2nKjzkjehs6nfY14hPV2xqmMXvJEYPc_QkjAdZKxpI0',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/ignite-logo.png',
    shortcut: '/ignite-logo.png',
    apple: '/ignite-logo.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#fff8f3',
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PIEDS — Pilani Innovation & Entrepreneurship Development Society',
  alternateName: 'PIEDS',
  url: 'https://pieds-bitspilani.org/',
  logo: `${BASE_URL}/ignite-logo.png`,
  foundingDate: '2013',
  description: 'A leading non-profit technology business incubator at BITS Pilani, organiser of IGNITE — the flagship global entrepreneurship summit.',
  parentOrganization: { '@type': 'CollegeOrUniversity', name: 'BITS Pilani' },
  sameAs: ['https://pieds-bitspilani.org/'],
  event: {
    '@type': 'Event',
    name: 'IGNITE 2026',
    url: BASE_URL,
    location: { '@type': 'Place', name: 'Dubai, UAE', address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' } },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
