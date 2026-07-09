"use client";

import { useState, FormEvent } from "react";

const CONTACT_EMAIL = "hello@betterhealthforall.example";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "the site"}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="font-body text-sm font-semibold text-ink">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-4 py-2.5 font-body text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="font-body text-sm font-semibold text-ink">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-4 py-2.5 font-body text-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="font-body text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-4 py-2.5 font-body text-sm"
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-fit rounded-full bg-sage px-5 py-2.5 font-body text-sm font-semibold text-paper hover:bg-sage-dark"
      >
        Send message
      </button>
      <p className="font-body text-xs text-ink-soft">
        This opens your email app with the message pre-filled. Prefer email
        directly? Reach us at {CONTACT_EMAIL}.
      </p>
    </form>
  );
}
