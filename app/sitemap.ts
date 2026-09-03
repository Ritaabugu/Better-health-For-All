import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { getAllPosts } from "@/lib/posts";

const siteUrl = "https://better-health-for-all.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "about",
    "contact",
    "privacy-policy",
    "disclaimer",
    "affiliate-disclosure",
  ].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date(),
  }));

  const categoryPages = categories.map((c) => ({
    url: `${siteUrl}/${c.slug}`,
    lastModified: new Date(),
  }));

  const postPages = getAllPosts().map((post) => ({
    url: `${siteUrl}/${post.category}/${post.slug}`,
    lastModified: (() => { const d = new Date(post.updated || post.date); return isNaN(d.getTime()) ? new Date() : d; })(),
  }));

  return [...staticPages, ...categoryPages, ...postPages];
}
