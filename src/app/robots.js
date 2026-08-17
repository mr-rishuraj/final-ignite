export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
    ],
    sitemap: 'https://ignite.pieds-st.in/sitemap.xml',
  };
}
