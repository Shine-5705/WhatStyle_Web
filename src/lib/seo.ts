import { Metadata } from 'next';
import { SEOProps } from '@/types/seo';
import { SEO } from '@/config/seo';

export const createMetadata = ({
  title,
  description,
  keywords = [],
  image = SEO.DEFAULT_IMAGE,
  path,
  type = 'website',
  noIndex = false,
}: SEOProps): Metadata => {
  const fullTitle = `${title} | ${SEO.SITE_NAME}`;
  const fullUrl = path ? `${SEO.SITE_URL}${path}` : SEO.SITE_URL;
  const fullImage = `${SEO.SITE_URL}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    alternates: { canonical: fullUrl },
    metadataBase: new URL(SEO.SITE_URL),

    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: type === 'product' ? 'website' : type,
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: SEO.SITE_NAME,
      locale: 'en_US',
      images: [{
        url: fullImage,
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      site: SEO.TWITTER,
      creator: SEO.TWITTER,
      title: fullTitle,
      description,
      images: [fullImage],
    },
    facebook: {
      appId: SEO.FACEBOOK_APP_ID,
    },
    authors: [{ name: SEO.SITE_NAME }],
    creator: SEO.SITE_NAME,
    publisher: SEO.SITE_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SEO.SITE_NAME,
  url: SEO.SITE_URL,
  logo: `${SEO.SITE_URL}/logo.png`,
  description: SEO.DEFAULT_DESC,
  sameAs: [
    'https://linkedin.com/company/yoursaas',
    'https://facebook.com/yoursaas',
    'https://x.com/shine_gupta17',
  ],
});

export const softwareApplicationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SEO.SITE_NAME,
  description: SEO.DEFAULT_DESC,
  url: SEO.SITE_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '29',
    priceValidUntil: '2025-12-31',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '150',
  },
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SEO.SITE_URL}${item.url}`,
  })),
});

export const productSchema = (name: string, price: string, currency = 'USD') => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description: SEO.DEFAULT_DESC,
  offers: {
    '@type': 'Offer',
    price,
    priceCurrency: currency,
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2025-12-31',
  },
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
