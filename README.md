# Better Health For All

A fast, SEO-friendly health and wellness blog built with Next.js (App Router),
TypeScript, and Tailwind CSS. Content lives as Markdown/MDX files in the repo,
no CMS or database required.

This project matches the brief in `Better_Health_For_All_Project_Brief.pdf`
and every post is written to follow `Better_Health_For_All_Writing_Guide.pdf`
(no em dashes, short varied sentences, real opinions, no AI-sounding filler).

## What's included

- Home, category, and single-post pages, all statically generated
- 6 starter posts across all 5 niches (Weight Loss, Weight Gain, Nutrition,
  Healthy Habits, Recipes & Meal Plans)
- About, Contact, Privacy Policy, Medical Disclaimer, Affiliate Disclosure,
  and a custom 404 page
- Newsletter signup form (UI complete, needs a MailerLite/ConvertKit API key
  to actually send emails, see below)
- Auto-generated `sitemap.xml` and `robots.txt`
- Open Graph, Twitter Card, and Schema.org `BlogPosting` structured data on
  every post
- A custom icon-based visual system instead of stock photography (see
  "About the visuals" below)
- Mobile-first, responsive, accessible (visible focus states, skip link,
  reduced-motion support)

## Getting started

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To build for production locally:

```bash
npm run build
npm run start
```

## Deploying

1. Push this repo to GitHub.
2. In Vercel, "Add New Project" and import the GitHub repo.
3. Framework preset should auto-detect as Next.js. No extra config needed
   for the first deploy.
4. Every push to `main` will auto-deploy.
5. Once you're ready for a custom domain, add it under Project Settings →
   Domains in Vercel.

## Adding a new blog post

1. Create a new `.mdx` file in `content/posts/`.
2. Copy the frontmatter block from an existing post and update it:

```md
---
title: "Your Post Title"
slug: "your-post-slug"
category: "weight-loss" # one of: weight-loss, weight-gain, nutrition, healthy-habits, recipes-meal-plans
description: "A 17-20 word meta description that includes your focus keyword."
focusKeyword: "your focus keyword"
date: "2026-07-15"
updated: "2026-07-15"
featuredImageAlt: "Short alt text describing what the post is about"
readingMinutes: 7
---
```

3. Write the body in Markdown/MDX below the frontmatter. The medical
   disclaimer and newsletter signup are appended to every post automatically,
   you don't need to add them yourself.
4. If a post mentions specific products, add `<AffiliateNote />` right
   after the intro to show the affiliate disclosure inline.
5. Commit and push. Vercel rebuilds automatically and the new post appears
   on the homepage, its category page, and the sitemap.

Before publishing, run through the Quality Checklist in the Writing Guide
PDF (no em dashes, no sentence over 25 words, etc). Nothing in this repo
enforces that automatically, it's a manual pass.

## About the visuals

There's no stock photography in this starter. Real food and lifestyle
photography needs real photo licensing or your own shoot, which is outside
what this handoff can generate. Instead, each niche has a distinct accent
color and a simple line icon (leaf, flame, plate, moon, bowl) that's used
consistently across the nav, cards, badges, and post headers.

To swap in real photography later:

1. Add images to `/public/images/`.
2. Replace `<PostThumb category={...} />` in `components/PostCard.tsx` and
   `app/[category]/[slug]/page.tsx` with a Next.js `<Image>` component
   pointing at your file.
3. Add a matching `featuredImage` field to each post's frontmatter and to
   the `PostFrontmatter` type in `lib/posts.ts`.

## Connecting the newsletter (MailerLite)

The signup form UI is complete but not wired to a live provider yet.

1. Create a MailerLite account and a group for this list.
2. In your MailerLite dashboard, generate an API key.
3. In Vercel, add two environment variables: `MAILERLITE_API_KEY` and
   `MAILERLITE_GROUP_ID`.
4. Update `app/api/subscribe/route.ts` to call the MailerLite API
   (`POST https://connect.mailerlite.com/api/subscribers`) using those
   variables, and return `NextResponse.json({ ok: true })` on success.
5. Locally, add the same two variables to a `.env.local` file (this file is
   gitignored) so you can test signups before deploying.

ConvertKit works the same way, just point step 4 at ConvertKit's API
instead.

## Project structure

```
app/                     Routes (App Router)
  [category]/            Category listing pages
  [category]/[slug]/     Single post pages
  about, contact, ...     Static pages
  sitemap.ts, robots.ts   SEO files
components/              Reusable UI (Header, Footer, PostCard, forms, icons)
content/posts/           All blog posts as .mdx files
lib/                     Post/category data helpers and Tailwind color maps
public/                  Static assets (favicon, future images)
```

## Known gaps (by design, per the brief)

- No CMS, no database, no user accounts, no e-commerce checkout: all out of
  scope for V1 per the project brief.
- Newsletter and contact form need real backend wiring (see above).
- No stock photography included, see "About the visuals."
- Ad slots and affiliate links are structurally supported
  (`AffiliateNote`, disclosure pages) but no live ad network or affiliate
  program has been connected yet.
