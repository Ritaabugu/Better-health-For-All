import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Better Health For All may earn a commission from links to products we mention, at no extra cost to you.",
};

export default function AffiliateDisclosurePage() {
  return (
    <Container className="max-w-content py-14 sm:py-20">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        Affiliate Disclosure
      </h1>
      <p className="mt-2 font-body text-sm text-ink-soft">Last updated: July 2026</p>

      <div className="prose prose-lg mt-8 max-w-none font-body">
        <p>
          Better Health For All is reader-supported. Some links on this
          site, including links to supplements, fitness gear, or meal kits,
          are affiliate links. If you click through and make a purchase, we
          may earn a small commission at no extra cost to you.
        </p>

        <h2>How we choose what to recommend</h2>
        <p>
          We only link to products we believe genuinely fit the advice in a
          given post. An affiliate relationship does not change our
          opinion of a product. If something doesn&apos;t work, we say so,
          commission or not.
        </p>

        <h2>Advertising</h2>
        <p>
          As the site grows, we may also display ads through networks like
          Google AdSense or Mediavine. These networks may use cookies to
          serve relevant ads. See our{" "}
          <a href="/privacy-policy">Privacy Policy</a> for more on cookies.
        </p>

        <h2>Questions</h2>
        <p>
          If you have questions about a specific recommendation, reach out
          through our <a href="/contact">Contact page</a>.
        </p>
      </div>
    </Container>
  );
}
