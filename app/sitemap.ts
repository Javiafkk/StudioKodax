import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

import { blogPosts } from "@/lib/blog";

function postLastModified(post: (typeof blogPosts)[number]): Date {
  return new Date(post.dateModified ?? post.datePublished);
}

export default function sitemap(): MetadataRoute.Sitemap {
  /** Sin lastModified inventado: solo fechas reales donde existen metadatos. */
  const blogIndexLastMod =
    blogPosts.length > 0
      ? new Date(
          Math.max(...blogPosts.map((p) => postLastModified(p).getTime())),
        )
      : undefined;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/servicios`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contacto`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      ...(blogIndexLastMod ? { lastModified: blogIndexLastMod } : {}),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: postLastModified(post),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...blogEntries];
}
