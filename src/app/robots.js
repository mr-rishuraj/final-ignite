export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
    ],
    sitemap: 'https://final-ignite.vercel.app/sitemap.xml',
  };
}
