import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { getAllPosts } from "@/lib/posts";

const siteUrl = "https://betterhealthforall.vercel.app";

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
    lastModified: new Date(post.updated ?? post.date),
  }));

  return [...staticPages, ...categoryPages, ...postPages];
}
