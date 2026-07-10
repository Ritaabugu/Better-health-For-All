import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { CategorySlug } from "./categories";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
  title: string;
  slug: string;
  category: CategorySlug;
  description: string;
  focusKeyword: string;
  date: string;
  updated?: string;
  featuredImage?: string;
  featuredImageAlt: string;
  readingMinutes: number;
}

export interface Post extends PostFrontmatter {
  content: string;
}

function readPostFile(filename: string): Post {
  const filePath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    ...(data as PostFrontmatter),
    content,
  };
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map(readPostFile);
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostsByCategory(category: CategorySlug): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getAllSlugs(): { category: string; slug: string }[] {
  return getAllPosts().map((p) => ({ category: p.category, slug: p.slug }));
}
