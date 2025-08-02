import { Metadata } from 'next';
import { createMetadata, softwareApplicationSchema } from '@/lib/seo';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = createMetadata({
  title: 'WhatStyle AI',
  description: 'Reply people on WhatsApp using WhatStyle Bot, it imitate you personality, tone and emotion to reply to the person.',
  keywords: ['ai', 'bot', 'ml', 'saas'],
  path: '/',
  image: '/homepage-og.png',
});

export default function Home() {
  return (
    <>
      <StructuredData data={softwareApplicationSchema()} />
      <main>
        <h1>WhatStyle AI Bot</h1>
        <p>AI Bot to reply contacts on your WhatsApp</p>
      </main>
    </>
  );
}
