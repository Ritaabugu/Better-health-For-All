import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Better Health For All is written for people who are tired of fad diets and want a plan that actually fits their life.",
};

export default function AboutPage() {
  return (
    <Container className="max-w-content py-14 sm:py-20">
      <p className="font-body text-sm font-semibold uppercase tracking-widest text-sage-dark">
        About
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        We got tired of the noise too.
      </h1>

      <div className="prose prose-lg mt-8 max-w-none font-body">
        <p>
          Better Health For All started with one frustration: most health
          content is written to be shared, not used. It promises a
          transformation. It rarely tells you what to actually do on a
          Tuesday when you&apos;re tired, stressed, and standing in front of
          an open fridge.
        </p>
        <p>
          This site exists for the person who has already tried the fad
          diets. She has bookmarked more meal plans than she followed. She
          isn&apos;t looking for a miracle. She wants something that respects
          her time, her body, and her intelligence.
        </p>
        <h2>What you&apos;ll find here</h2>
        <p>
          Practical guides on weight loss, weight gain, nutrition, and the
          everyday habits that actually hold a healthy life together. Real
          numbers instead of vague ranges. Opinions instead of hedged,
          say-nothing advice. And an honest acknowledgment, every time, that
          change is hard before we get to the part about how to do it
          anyway.
        </p>
        <h2>What you won&apos;t find here</h2>
        <p>
          Miracle supplements. Extreme transformations sold as a lifestyle.
          Shame about your body or your past habits. If a tip isn&apos;t
          backed by a real number or a real result, we don&apos;t publish it
          as fact.
        </p>
        <h2>Credentials and disclaimer</h2>
        <p>
          The content on this site is written and researched for general
          educational purposes. It is not a substitute for individualized
          medical advice. Always check with a doctor or registered
          dietitian before making major changes to your diet, training, or
          medication, especially if you have an existing health condition.
          Read our full{" "}
          <a href="/disclaimer">medical disclaimer</a> for details.
        </p>
      </div>
    </Container>
  );
}
