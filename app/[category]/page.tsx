import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CategoryIcon from "@/components/CategoryIcon";
import PostCard from "@/components/PostCard";
import NewsletterForm from "@/components/NewsletterForm";
import { categories, getCategory } from "@/lib/categories";
import { categoryStyles } from "@/lib/categoryStyles";
import { getPostsByCategory } from "@/lib/posts";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/${category.slug}` },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);
  const styles = categoryStyles[category.color];

  return (
    <>
      <section className={`${styles.badgeBg} border-b border-ink/[0.05]`}>
        <Container className="py-12 sm:py-16">
          <div className={`inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 ${styles.badgeText}`}>
            <CategoryIcon icon={category.icon} className="h-4 w-4" />
            <span className="font-body text-xs font-semibold uppercase tracking-wide">
              {category.tagline}
            </span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-ink-soft">
            {category.description}
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            {posts.length === 0 ? (
              <p className="font-body text-ink-soft">
                New posts for this category are on the way. Check back soon.
              </p>
            ) : (
              <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
          <aside className="space-y-6">
            <NewsletterForm />
            <div className="rounded-lg border border-ink/10 p-5">
              <p className="font-display text-sm font-semibold text-ink">
                Explore other topics
              </p>
              <ul className="mt-3 space-y-2">
                {categories
                  .filter((c) => c.slug !== category.slug)
                  .map((c) => (
                    <li key={c.slug}>
                      <a
                        href={`/${c.slug}`}
                        className="flex items-center gap-2 font-body text-sm text-ink-soft hover:text-sage-dark"
                      >
                        <CategoryIcon icon={c.icon} className="h-4 w-4" />
                        {c.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
