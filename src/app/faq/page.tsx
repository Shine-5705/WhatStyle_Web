import { Metadata } from 'next';
import { createMetadata, faqSchema } from '@/lib/seo';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = createMetadata({
  title: 'FAQ',
  description: 'Frequently asked questions about our business automation platform.',
  keywords: ['faq', 'questions', 'help', 'support'],
  path: '/faq',
});

const faqs = [
  {
    question: 'How does the automation platform work?',
    answer: 'Our platform integrates with your existing tools and automates repetitive tasks using AI-powered workflows.',
  },
  {
    question: 'What integrations are available?',
    answer: 'We support over 100+ integrations including Slack, Google Workspace, Salesforce, and more.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial with full access to all features.',
  },
];

export default function FAQPage() {
  return (
    <>
      <StructuredData data={faqSchema(faqs)} />
      <main>
        <h1>Frequently Asked Questions</h1>
        <div>
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
