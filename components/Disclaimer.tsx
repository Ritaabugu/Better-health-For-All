import Link from "next/link";

export default function Disclaimer() {
  return (
    <div className="not-prose mt-10 rounded-lg border border-clay/25 bg-clay-tint px-5 py-4">
      <p className="font-body text-sm leading-relaxed text-ink-soft">
        <strong className="text-ink">A quick note:</strong> this post is for
        general information, not medical advice. If you have a health
        condition, are pregnant, or take medication, talk to a doctor before
        changing your diet or training. See our{" "}
        <Link href="/disclaimer" className="font-semibold text-clay-dark underline underline-offset-2">
          full medical disclaimer
        </Link>
        .
      </p>
    </div>
  );
}
