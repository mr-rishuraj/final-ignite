import './globals.css';

const BASE_URL = 'https://final-ignite.vercel.app';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'IGNITE 2026 — Global Innovation Summit, Dubai',
    template: '%s | IGNITE 2026',
  },
  description: 'IGNITE is the flagship global innovation and entrepreneurship summit by PIEDS × BITS Pilani, Dubai 2026. Connect with 100+ founders, investors, and industry leaders.',
  keywords: ['IGNITE 2026', 'startup summit Dubai', 'BITS Pilani', 'PIEDS', 'entrepreneurship conference', 'innovation summit', 'startup competition', 'venture capital Dubai', 'student entrepreneurship'],
  authors: [{ name: 'PIEDS — BITS Pilani', url: 'https://pieds-bitspilani.org/' }],
  creator: 'PIEDS — BITS Pilani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'IGNITE 2026',
    title: 'IGNITE 2026 — Global Innovation Summit, Dubai',
    description: 'Join 100+ founders, investors, and industry leaders at the IGNITE 2026 summit in Dubai — the flagship entrepreneurship platform by PIEDS × BITS Pilani.',
    images: [{
      url: '/gallery/keynote-stage.jpg',
      width: 1200,
      height: 630,
      alt: 'IGNITE 2026 — Global Innovation Summit, Dubai',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGNITE 2026 — Global Innovation Summit, Dubai',
    description: 'Join 100+ founders, investors, and leaders at the IGNITE 2026 summit in Dubai by PIEDS × BITS Pilani.',
    images: ['/gallery/keynote-stage.jpg'],
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
    apple: '/ignite-logo.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#fff8f3',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
