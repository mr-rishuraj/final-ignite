import { Inter, Instrument_Serif, Crimson_Text } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const crimsonText = Crimson_Text({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
});

const BASE_URL = 'https://ignite.pieds-st.in';
const OG_IMAGE = `${BASE_URL}/opengraph-image`;

export const metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
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
    alternateLocale: ['en_AE', 'en_GB'],
    url: BASE_URL,
    siteName: 'IGNITE 2026',
    title: 'IGNITE 2026 — Global Innovation Summit, Dubai',
    description: 'Join 100+ founders, investors, and industry leaders at the IGNITE 2026 summit in Dubai — the flagship entrepreneurship platform by PIEDS × BITS Pilani.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'IGNITE 2026 — Global Innovation Summit, Dubai' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pieds_bitspilani',
    creator: '@pieds_bitspilani',
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
    icon: [
      { url: '/ignite-logo.png', type: 'image/png' },
    ],
    shortcut: '/ignite-logo.png',
    apple: [{ url: '/ignite-logo.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#fff8f3',
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'IGNITE 2026',
  url: BASE_URL,
  description: 'The flagship global innovation and entrepreneurship summit by PIEDS × BITS Pilani, Dubai 2026.',
  publisher: {
    '@type': 'Organization',
    name: 'PIEDS — BITS Pilani',
    url: 'https://pieds-bitspilani.org/',
    logo: `${BASE_URL}/ignite-logo.png`,
  },
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
  sameAs: [
    'https://pieds-bitspilani.org/',
    'https://www.linkedin.com/company/pilani-innovation-entrepreneurship-development-society-pieds-bits-pilani/',
    'https://www.instagram.com/pieds_bitspilani/',
    'https://www.bits-pilani.ac.in/',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${crimsonText.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd).replace(/</g, '\\u003c') }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
