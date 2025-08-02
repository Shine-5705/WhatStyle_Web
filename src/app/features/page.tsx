import { Metadata } from 'next';
import { createMetadata, breadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = createMetadata({
  title: 'Features',
  description: 'Powerful automation features for modern businesses. Workflow builder, analytics, integrations.',
  keywords: ['features', 'automation', 'workflow', 'analytics'],
  path: '/features',
});

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Features', url: '/features' },
];

export default function FeaturesPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema(breadcrumbs)} />
      <main>
        <h1>Powerful Features</h1>
        <p>Everything you need to automate your business.</p>
      </main>
    </>
  );
}
