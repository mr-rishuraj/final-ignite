const BASE_URL = 'https://ignite.pieds-st.in';

export default function sitemap() {
  return [
    { url: BASE_URL,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/apply`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/speakers`,      lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/sponsors`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pieds`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];
}
