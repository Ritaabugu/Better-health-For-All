"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/categories";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/[0.06] bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-wide items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ink"
        >
          Better Health <span className="text-sage-dark">For All</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="font-body text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-sage-dark"
            >
              {c.shortName}
            </Link>
          ))}
          <Link
            href="/about"
            className="font-body text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-sage-dark"
          >
            About
          </Link>
        </nav>

        <Link
          href="/#newsletter"
          className="hidden rounded-full bg-sage px-4 py-2 font-body text-sm font-semibold text-paper transition-colors hover:bg-sage-dark md:inline-block"
        >
          Get free meal plan
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-ink/10 p-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 5.5h14M3 10h14M3 14.5h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/[0.06] bg-paper px-5 pb-5 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${c.slug}`}
                  className="block rounded-lg px-2 py-2.5 font-body text-ink-soft hover:bg-sage-tint hover:text-sage-dark"
                  onClick={() => setOpen(false)}
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/about"
                className="block rounded-lg px-2 py-2.5 font-body text-ink-soft hover:bg-sage-tint hover:text-sage-dark"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block rounded-lg px-2 py-2.5 font-body text-ink-soft hover:bg-sage-tint hover:text-sage-dark"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
