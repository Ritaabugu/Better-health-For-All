import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Container from "@/components/Container";
import CategoryBadge from "@/components/CategoryBadge";
import PostThumb from "@/components/PostThumb";
import Disclaimer from "@/components/Disclaimer";
import NewsletterForm from "@/components/NewsletterForm";
import PostCard from "@/components/PostCard";
import { mdxComponents } from "@/components/MDXComponents";
import { getAllSlugs, getPostBySlug, getPostsByCategory } from "@/lib/posts";
import { getCategory } from "@/lib/categories";

export function generateStaticParams() {
  return getAllSlugs();
}

export function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/${post.category}/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      url: `/${post.category}/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function PostPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post || post.category !== params.category) notFound();

  const category = getCategory(post.category);
  if (!category) notFound();

  const related = getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      "@type": "Organization",
      name: "Better Health For All",
    },
    publisher: {
      "@type": "Organization",
      name: "Better Health For All",
    },
    mainEntityOfPage: `https://betterhealthforall.vercel.app/${post.category}/${post.slug}`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container className="max-w-content py-10 sm:py-14">
        <CategoryBadge category={category} size="md" />
        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 font-body text-sm text-ink-soft">
          Published {formatDate(post.date)}
          {post.updated && post.updated !== post.date && (
            <> &middot; Updated {formatDate(post.updated)}</>
          )}
          {" "}&middot; {post.readingMinutes} min read
        </p>

        <div className="mt-8">
          <PostThumb category={category} size="lg" />
          <p className="mt-2 font-body text-xs text-ink-soft">{post.featuredImageAlt}</p>
        </div>

        <div className="prose prose-lg mt-10 max-w-none font-body">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        <Disclaimer />

        <div className="mt-12">
          <NewsletterForm variant="end-of-post" />
        </div>
      </Container>

      {related.length > 0 && (
        <section className="border-t border-ink/[0.06] bg-paper-dim py-14">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-ink">
              More on {category.name.toLowerCase()}
            </h2>
            <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
