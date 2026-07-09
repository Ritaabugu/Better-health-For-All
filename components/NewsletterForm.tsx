"use client";

import { useState, FormEvent } from "react";

interface NewsletterFormProps {
  variant?: "hero" | "sidebar" | "end-of-post";
  title?: string;
  description?: string;
}

/**
 * Static newsletter capture form.
 *
 * This posts to /api/subscribe, which is not implemented yet since the
 * project brief specifies MailerLite (or ConvertKit) as the email provider.
 * To go live:
 *   1. Create a MailerLite account and a group for this list.
 *   2. Add MAILERLITE_API_KEY and MAILERLITE_GROUP_ID to your Vercel
 *      environment variables.
 *   3. Add an app/api/subscribe/route.ts route handler that POSTs the
 *      email to the MailerLite API using those variables.
 * See README.md for the full walkthrough.
 */
export default function NewsletterForm({
  variant = "sidebar",
  title = "Get the free 7-day meal plan",
  description = "A simple, no-nonsense starter plan. No fad ingredients, no 6am juice cleanse.",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      // The API route is not wired up yet in this starter project.
      setStatus("error");
    }
  }

  const isHero = variant === "hero";

  return (
    <div
      id={isHero ? "newsletter" : undefined}
      className={
        isHero
          ? "rounded-xl bg-sage-dark px-6 py-8 sm:px-10 sm:py-10"
          : "rounded-lg border border-sage/25 bg-sage-tint px-5 py-6"
      }
    >
      <p
        className={
          isHero
            ? "font-display text-2xl font-semibold text-paper sm:text-3xl"
            : "font-display text-lg font-semibold text-ink"
        }
      >
        {title}
      </p>
      <p
        className={
          isHero
            ? "mt-2 max-w-md font-body text-sm text-paper/85"
            : "mt-1.5 font-body text-sm text-ink-soft"
        }
      >
        {description}
      </p>

      {status === "success" ? (
        <p
          className={`mt-4 font-body text-sm font-semibold ${
            isHero ? "text-paper" : "text-sage-dark"
          }`}
        >
          You&apos;re in. Check your inbox for the plan.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2.5 sm:flex-row">
          <label htmlFor={`email-${variant}`} className="sr-only">
            Email address
          </label>
          <input
            id={`email-${variant}`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={`w-full rounded-full border px-4 py-2.5 font-body text-sm focus:outline-none ${
              isHero
                ? "border-transparent bg-paper text-ink placeholder:text-ink-soft"
                : "border-sage/30 bg-paper text-ink placeholder:text-ink-soft"
            }`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 font-body text-sm font-semibold transition-colors disabled:opacity-70 ${
              isHero
                ? "bg-gold text-ink hover:bg-gold-dark hover:text-paper"
                : "bg-sage text-paper hover:bg-sage-dark"
            }`}
          >
            {status === "loading" ? "Sending..." : "Send me the plan"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className={`mt-3 font-body text-xs ${isHero ? "text-paper/80" : "text-ink-soft"}`}>
          Signup isn&apos;t connected yet. Add your MailerLite keys to enable this form (see README).
        </p>
      )}
    </div>
  );
}
