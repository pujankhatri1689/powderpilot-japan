import type { MetadataRoute } from "next";
import { RESORTS } from "@/data/resorts";
import { getSiteUrl } from "@/lib/siteUrl";

const siteUrl = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/resorts`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/conditions`,
      changeFrequency: "hourly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/planner`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/credits`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const resortRoutes: MetadataRoute.Sitemap = RESORTS.map((resort) => ({
    url: `${siteUrl}/resorts/${resort.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...resortRoutes];
}
