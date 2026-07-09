import Link from "next/link";
import Container from "@/components/Container";
import CategoryIcon from "@/components/CategoryIcon";
import PostCard from "@/components/PostCard";
import NewsletterForm from "@/components/NewsletterForm";
import { categories } from "@/lib/categories";
import { categoryStyles } from "@/lib/categoryStyles";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="border-b border-ink/[0.06] bg-paper-dim">
        <Container className="grid gap-10 py-16 sm:py-20 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-sage-dark">
              No fads. No shame. Just what works.
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
              You&apos;ve tried the fad diets.{" "}
              <span className="squiggle-underline">This is what actually works.</span>
            </h1>
            <p className="mt-5 max-w-lg font-body text-lg leading-relaxed text-ink-soft">
              A hundred bookmarked meal plans won&apos;t fix a Tuesday night
              craving. Better Health For All is real routines, real numbers,
              and a plan that respects your time and your body.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/weight-loss"
                className="rounded-full bg-sage px-5 py-3 font-body text-sm font-semibold text-paper transition-colors hover:bg-sage-dark"
              >
                Start with weight loss
              </Link>
              <Link
                href="/recipes-meal-plans"
                className="rounded-full border border-ink/15 px-5 py-3 font-body text-sm font-semibold text-ink transition-colors hover:border-ink/30"
              >
                Browse recipes
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {categories.map((c) => {
              const styles = categoryStyles[c.color];
              return (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className={`group flex flex-col justify-between rounded-lg border ${styles.border} bg-paper p-4 shadow-card transition-transform hover:-translate-y-0.5`}
                >
                  <CategoryIcon icon={c.icon} className={`h-6 w-6 ${styles.iconText}`} />
                  <div className="mt-4">
                    <p className="font-display text-base font-semibold text-ink">{c.name}</p>
                    <p className="mt-0.5 text-xs text-ink-soft">{c.tagline}</p>
                  </div>
                </Link>
              );
            })}
            <div className="col-span-2 rounded-lg border border-dashed border-ink/15 p-4 text-center">
              <p className="text-xs text-ink-soft">
                Downloadable meal plans and guides are coming to the shop soon.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {featured && (
        <section className="py-14 sm:py-16">
          <Container>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink-soft">
              Start here
            </p>
            <div className="mt-5">
              <PostCard post={featured} featured />
            </div>
          </Container>
        </section>
      )}

      <section className="bg-paper-dim py-14 sm:py-16">
        <Container>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Recent posts
            </h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <NewsletterForm variant="hero" />
        </Container>
      </section>
    </>
  );
}
