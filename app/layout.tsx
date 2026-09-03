import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://better-health-for-all.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
      other: {
        "p:domain_verify": "5fba50b04053d5a2b3e1c7c29e3b5d27",
      },
    },
  title: {
    default: "Better Health For All",
    template: "%s | Better Health For All",
  },
  description:
    "Practical, evidence-based guidance on weight loss, weight gain, nutrition, and everyday healthy habits, without the shame or the noise.",
  openGraph: {
    type: "website",
    siteName: "Better Health For All",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8454377310678707"
    crossOrigin="anonymous"
  ></script>
        <script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-GTBP8JVXK8"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GTBP8JVXK8');
    `,
  }}
></script>
</head>
      <body className="flex min-h-screen flex-col bg-paper font-body text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-sage focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
