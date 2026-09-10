const BASE_URL = 'https://ignite.pieds-st.in';

export default function sitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  return [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        `${BASE_URL}/background-image.png`,
        `${BASE_URL}/bits-dubai.jpg`,
        `${BASE_URL}/ignite-logo.png`,
      ],
    },
    {
      url: `${BASE_URL}/apply`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
      images: [
        `${BASE_URL}/ignite-logo.png`,
      ],
    },
    {
      url: `${BASE_URL}/speakers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        `${BASE_URL}/speakers/abhishek-shah.png`,
        `${BASE_URL}/speakers/amit-singhal.jpg`,
        `${BASE_URL}/speakers/aneesh-pai.png`,
        `${BASE_URL}/speakers/ashish-kulkarni.jpg`,
        `${BASE_URL}/speakers/awais-ahmed.png`,
        `${BASE_URL}/speakers/bharath-shankar-subramanian.jpg`,
        `${BASE_URL}/speakers/bharti-g-mann.jpg`,
        `${BASE_URL}/speakers/bhuvan-gupta.png`,
        `${BASE_URL}/speakers/darika-jain.jpg`,
        `${BASE_URL}/speakers/deepak-kumar.jpg`,
        `${BASE_URL}/speakers/harshit-agarwal.jpg`,
        `${BASE_URL}/speakers/kanishka-tyagi.png`,
        `${BASE_URL}/speakers/pankaj-singh.jpg`,
        `${BASE_URL}/speakers/rahul-seth.png`,
        `${BASE_URL}/speakers/rakesh-verma.png`,
        `${BASE_URL}/speakers/rohit-goyal.png`,
        `${BASE_URL}/speakers/rohit-kamath.jpg`,
        `${BASE_URL}/speakers/saloni-shah.jpg`,
        `${BASE_URL}/speakers/samar-singla.jpg`,
        `${BASE_URL}/speakers/samit-jain.jpg`,
        `${BASE_URL}/speakers/sankar-bora.png`,
        `${BASE_URL}/speakers/shailendra-nath.png`,
        `${BASE_URL}/speakers/shawrya-mehrotra.jpg`,
        `${BASE_URL}/speakers/shivakumar-ganesan.png`,
        `${BASE_URL}/speakers/siddharth-srigeri.png`,
        `${BASE_URL}/speakers/sowmay-jain.jpg`,
        `${BASE_URL}/speakers/sumedh-battewar.png`,
        `${BASE_URL}/speakers/sumit-vijaypure.jpg`,
        `${BASE_URL}/speakers/sushil-sharma.png`,
        `${BASE_URL}/speakers/vinayak-aggarwal.png`,
      ],
    },
    {
      url: `${BASE_URL}/sponsors`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [
        `${BASE_URL}/past-logos/PEAK_XV_PARTNERS_Logo_POS_RGB.jpg`,
        `${BASE_URL}/ignite-logo.png`,
      ],
    },
    {
      url: `${BASE_URL}/pieds`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        `${BASE_URL}/pieds-image/student-team.jpeg`,
        `${BASE_URL}/pieds-image/Group 100.png`,
      ],
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/code-of-conduct`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
