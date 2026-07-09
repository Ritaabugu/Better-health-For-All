import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const clientId = process.env.OAUTH_CLIENT_ID;

  if (!clientId) {
    return new NextResponse(
      "Missing OAUTH_CLIENT_ID environment variable. Add it in your Vercel project settings, see README.md.",
      { status: 500 }
    );
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
  const redirectUri = `${siteUrl}/api/callback`;

  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("scope", "repo,user");

  return NextResponse.redirect(authUrl.toString());
}
