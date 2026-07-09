import Link from "next/link";

export default function AffiliateNote() {
  return (
    <p className="not-prose mb-6 rounded-md bg-paper-dim px-4 py-2.5 font-body text-xs italic text-ink-soft">
      Some links in this post may be affiliate links. We may earn a small
      commission at no extra cost to you.{" "}
      <Link href="/affiliate-disclosure" className="underline underline-offset-2">
        Learn more
      </Link>
      .
    </p>
  );
}
