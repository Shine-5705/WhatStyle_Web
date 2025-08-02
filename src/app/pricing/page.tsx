import { Metadata } from 'next';
import { createMetadata, productSchema, breadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = createMetadata({
  title: 'Pricing Plans',
  description: 'Flexible pricing plans for businesses of all sizes. Start free and scale as you grow.',
  keywords: ['pricing', 'plans', 'subscription'],
  path: '/pricing',
});

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Pricing', url: '/pricing' },
];

const pricingProducts = [
  productSchema('Starter Plan', '0'),
  productSchema('Professional Plan', '29'),
  productSchema('Enterprise Plan', '99'),
];

export default function PricingPage() {
  return (
    <>
      <StructuredData data={[breadcrumbSchema(breadcrumbs), ...pricingProducts]} />
      <main>
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the perfect plan for your business needs.</p>
      </main>
    </>
  )
}
