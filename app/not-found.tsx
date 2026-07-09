import Link from "next/link";
import Container from "@/components/Container";
import CategoryIcon from "@/components/CategoryIcon";
import { categories } from "@/lib/categories";

export default function NotFound() {
  return (
    <Container className="max-w-content py-20 text-center sm:py-28">
      <p className="font-display text-6xl font-semibold text-sage">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
        This page took a wrong turn.
      </h1>
      <p className="mt-3 font-body text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist, or it moved.
        Here&apos;s where you can go instead.
      </p>

      <div className="mx-auto mt-10 grid max-w-md grid-cols-2 gap-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="flex items-center gap-2 rounded-lg border border-ink/10 px-4 py-3 text-left font-body text-sm font-medium text-ink-soft hover:border-sage/40 hover:text-sage-dark"
          >
            <CategoryIcon icon={c.icon} className="h-4 w-4 shrink-0" />
            {c.name}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="mt-10 inline-block rounded-full bg-sage px-5 py-2.5 font-body text-sm font-semibold text-paper hover:bg-sage-dark"
      >
        Back to homepage
      </Link>
    </Container>
  );
}
