import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { SEO } from "@/config/seo";
import { organizationSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO.SITE_URL),
  title: {
    default: SEO.DEFAULT_TITLE,
    template: `%s | ${SEO.SITE_NAME}`,
  },
  description: SEO.DEFAULT_DESC,

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SEO.SITE_URL,
    siteName: SEO.SITE_NAME,
    title: SEO.SITE_NAME,
    description: SEO.DEFAULT_DESC,
    images: [{
      url: SEO.DEFAULT_IMAGE,
      width: 1200,
      height: 630,
      alt: SEO.SITE_NAME,
    }],
  },

  twitter: {
    card: 'summary_large_image',
    site: SEO.TWITTER,
    creator: SEO.TWITTER,
  },

  facebook: {
    appId: SEO.FACEBOOK_APP_ID,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'verification-code',
    yandex: 'verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData data={organizationSchema()} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
