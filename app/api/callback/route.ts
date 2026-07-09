import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!code) {
    return new NextResponse("Missing authorization code from GitHub.", { status: 400 });
  }
  if (!clientId || !clientSecret) {
    return new NextResponse(
      "Missing OAUTH_CLIENT_ID or OAUTH_CLIENT_SECRET environment variables. Add them in Vercel project settings, see README.md.",
      { status: 500 }
    );
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (!tokenData.access_token) {
    return new NextResponse(
      `GitHub did not return an access token. Response: ${JSON.stringify(tokenData)}`,
      { status: 400 }
    );
  }

  const payload = JSON.stringify({ token: tokenData.access_token, provider: "github" });

  const html = `<!doctype html>
<html>
  <body>
    <script>
      (function () {
        function receiveMessage(e) {
          window.opener.postMessage(
            "authorization:github:success:" + ${JSON.stringify(payload)},
            e.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
    <p>Logged in. You can close this window if it doesn't close automatically.</p>
  </body>
</html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}
