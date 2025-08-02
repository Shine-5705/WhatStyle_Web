import { MetadataRoute } from "next";
import { SEO } from "@/config/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: `${SEO.SITE_URL}/sitemap.xml`,
  };
}
