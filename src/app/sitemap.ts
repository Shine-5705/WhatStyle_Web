import { MetadataRoute } from "next";
import { SEO } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '', priority: 1, changeFrequency: 'weekly' as const },
    { url: '/pricing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/features', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
  ];
  return routes.map(route => ({
    url: `${SEO.SITE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
