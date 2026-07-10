import Link from "next/link";
import FeaturedImage from "./FeaturedImage";
import CategoryBadge from "./CategoryBadge";
import { getCategory } from "@/lib/categories";
import type { Post } from "@/lib/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function PostCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  const category = getCategory(post.category);
  if (!category) return null;

  return (
    <article
      className={`group flex flex-col ${featured ? "gap-5 sm:flex-row sm:items-center" : "gap-4"}`}
    >
      <Link href={`/${post.category}/${post.slug}`} className={featured ? "sm:w-1/2" : ""}>
        <FeaturedImage
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          category={category}
          size={featured ? "lg" : "md"}
        />
      </Link>
      <div className={featured ? "sm:w-1/2" : ""}>
        <CategoryBadge category={category} />
        <h3
          className={`mt-3 font-display font-semibold leading-snug text-ink ${
            featured ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          <Link href={`/${post.category}/${post.slug}`} className="hover:text-sage-dark">
            {post.title}
          </Link>
        </h3>
        <p className={`mt-2 text-ink-soft ${featured ? "text-base" : "text-sm"} leading-relaxed`}>
          {post.description}
        </p>
        <p className="mt-3 font-body text-xs text-ink-soft">
          {formatDate(post.date)} &middot; {post.readingMinutes} min read
        </p>
      </div>
    </article>
  );
}
