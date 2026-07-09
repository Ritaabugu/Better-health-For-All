import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Better Health For All collects and uses information.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="max-w-content py-14 sm:py-20">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 font-body text-sm text-ink-soft">Last updated: July 2026</p>

      <div className="prose prose-lg mt-8 max-w-none font-body">
        <p>
          This Privacy Policy explains what information Better Health For
          All (&quot;we,&quot; &quot;us&quot;) collects, how we use it, and
          the choices you have. This is a starter policy for launch. Have a
          lawyer review it before you go live with real user data.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Email address</strong>, if you subscribe to our
            newsletter through a signup form.
          </li>
          <li>
            <strong>Contact form details</strong> (name, email, message), if
            you use our contact form.
          </li>
          <li>
            <strong>Usage data</strong>, such as pages visited and general
            location, collected automatically through analytics tools like
            Vercel Analytics and Google Search Console.
          </li>
        </ul>

        <h2>How we use it</h2>
        <p>
          We use your email address to send the newsletter and any lead
          magnet you requested, like a free meal plan or checklist. We use
          analytics data in aggregate to understand which content is useful
          and improve the site. We do not sell your personal information.
        </p>

        <h2>Cookies and tracking</h2>
        <p>
          We may use cookies or similar technologies for analytics and, in
          the future, for advertising through partners like Google AdSense
          or Mediavine. You can disable cookies in your browser settings at
          any time.
        </p>

        <h2>Third-party services</h2>
        <p>
          We use third-party providers, including our email platform
          (MailerLite or ConvertKit) and hosting provider (Vercel), to
          operate this site. These providers have their own privacy
          policies governing how they handle your data.
        </p>

        <h2>Your choices</h2>
        <p>
          You can unsubscribe from our newsletter at any time using the link
          in any email we send. To request that we delete your contact
          information, email us using the details on our{" "}
          <a href="/contact">Contact page</a>.
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          This site is not directed at children under 13, and we do not
          knowingly collect information from them.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy as the site grows. We will update the
          date at the top of this page when we do.
        </p>
      </div>
    </Container>
  );
}
