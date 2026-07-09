import Link from "next/link";
import { categories } from "@/lib/categories";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/[0.07] bg-paper-dim">
      <div className="mx-auto grid max-w-wide gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            Better Health <span className="text-sage-dark">For All</span>
          </p>
          <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-ink-soft">
            Practical, evidence-based guidance for people who are tired of
            miracle promises and just want a plan that fits their actual
            life.
          </p>
        </div>

        <div>
          <p className="font-body text-sm font-semibold uppercase tracking-wide text-ink">
            Explore
          </p>
          <ul className="mt-3 space-y-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${c.slug}`}
                  className="font-body text-sm text-ink-soft hover:text-sage-dark"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-sm font-semibold uppercase tracking-wide text-ink">
            Site
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/about" className="font-body text-sm text-ink-soft hover:text-sage-dark">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-body text-sm text-ink-soft hover:text-sage-dark">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="font-body text-sm text-ink-soft hover:text-sage-dark">
                Medical Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/affiliate-disclosure" className="font-body text-sm text-ink-soft hover:text-sage-dark">
                Affiliate Disclosure
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="font-body text-sm text-ink-soft hover:text-sage-dark">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/[0.07] px-5 py-5 sm:px-8">
        <p className="font-body text-xs text-ink-soft">
          &copy; {year} Better Health For All. Content is for general
          information only and is not a substitute for professional medical
          advice.
        </p>
      </div>
    </footer>
  );
}
