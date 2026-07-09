import { NextResponse } from "next/server";

/**
 * Newsletter subscribe endpoint (stub).
 *
 * This intentionally returns 501 until you connect a real email provider.
 * To wire this up to MailerLite:
 *
 *   1. Add MAILERLITE_API_KEY and MAILERLITE_GROUP_ID to your environment
 *      variables (locally in .env.local, and in Vercel project settings).
 *   2. Replace the body of this function with a fetch call to
 *      https://connect.mailerlite.com/api/subscribers, sending the email
 *      and group ID with your API key as a Bearer token.
 *   3. Return NextResponse.json({ ok: true }) on success.
 *
 * See README.md for a full walkthrough and a ConvertKit alternative.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.email || typeof body.email !== "string") {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  return NextResponse.json(
    {
      error:
        "Email provider is not connected yet. Add your MailerLite (or ConvertKit) API keys and update app/api/subscribe/route.ts.",
    },
    { status: 501 }
  );
}
