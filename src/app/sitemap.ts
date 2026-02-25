import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cyclop.one";
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/skills`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}
