import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Better Health For All team.",
};

export default function ContactPage() {
  return (
    <Container className="max-w-content py-14 sm:py-20">
      <p className="font-body text-sm font-semibold uppercase tracking-widest text-sage-dark">
        Contact
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        Say hello.
      </h1>
      <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-ink-soft">
        Question about a post, a correction, or a partnership idea? Send it
        over. We read everything, even if it takes us a few days to reply.
      </p>
      <ContactForm />
    </Container>
  );
}
