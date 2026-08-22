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
  <a
    href="https://pinterest.com/betterhealthforall"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#E60023] hover:text-[#ad001a]"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2.01.04-2.88.19-.79 1.23-5.02 1.23-5.02s-.31-.63-.31-1.55c0-1.45.84-2.54 1.89-2.54.89 0 1.32.67 1.32 1.47 0 .89-.57 2.23-.86 3.47-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.28-1.95 3.28-4.77 0-2.49-1.79-4.23-4.35-4.23-2.96 0-4.7 2.22-4.7 4.52 0 .89.34 1.85.77 2.37.08.1.09.19.07.29-.08.32-.25 1.04-.29 1.18-.05.19-.15.23-.35.14-1.32-.62-2.14-2.55-2.14-4.1 0-3.34 2.42-6.4 7-6.4 3.68 0 6.53 2.62 6.53 6.13 0 3.66-2.31 6.6-5.51 6.6-1.08 0-2.09-.56-2.44-1.22l-.66 2.53c-.24.92-.89 2.08-1.32 2.78.99.31 2.04.47 3.13.47 5.52 0 10-4.48 10-10S17.52 2 12 2Z" />
    </svg>
    Follow us on Pinterest
  </a>
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
