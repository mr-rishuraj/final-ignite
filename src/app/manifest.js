export default function manifest() {
  return {
    name: 'IGNITE 2026 — Global Innovation Summit, Dubai',
    short_name: 'IGNITE 2026',
    description: 'The flagship global innovation and entrepreneurship summit by PIEDS × BITS Pilani, Dubai 2026.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F5F2',
    theme_color: '#fff8f3',
    icons: [
      { src: '/ignite-logo.png', sizes: '192x192', type: 'image/png' },
      { src: '/ignite-logo.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
