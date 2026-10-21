# hardikmore.com

Personal site of Hardik More — operator turned investor, on the investment team at Sorin Investments.

Live at [hardikmore.com](https://hardikmore.com).

---

## Why this exists

Four web presences (hardikmore.com, portfolio, blog, musings subdomains) had accumulated over the years — each built at a different time, none talking to each other. This repo consolidates everything into one minimal, text-first site.

The goal wasn't a portfolio. It was a signal: operator who turns new infrastructure into revenue, not just a PM with case studies.

## Design decisions

**No framework UI, no Tailwind.** Single global stylesheet (`app/globals.css`) with a handful of CSS custom properties. Typography does the work. The constraint forces clarity.

**Warm off-white, near-black, monospace meta.** Inspired by [nadh.in](https://nadh.in), [manassaloi.com](https://manassaloi.com), [noahzender.com](https://noahzender.com) — sites where restraint is the personality. No cards, no shadows, no gradients.

**Hero image.** A long-tail probability distribution curve — "building in the tails." Original concept, AI-generated. The tagline is the thesis: working on things that look small until they aren't.

**Markdown content pipeline.** Case studies and posts live as `.md` files in `/content`. No CMS, no database. Gray-matter parses frontmatter, remark renders to HTML. Adding a case study is creating a file.

**Max-width 680px.** Readable line length on every device. Centered on large screens, padded on mobile. Nothing touches the edges.

## Stack

- Next.js 14 App Router
- Custom CSS (no Tailwind)
- gray-matter + remark for markdown
- Vercel (deploy)
- Google Analytics G-8VDTTGDYQZ

## Structure

```
app/
  page.tsx              — home
  about/page.tsx        — about
  work/page.tsx         — work index
  work/[slug]/page.tsx  — case study
  writing/page.tsx      — writing index
  writing/[slug]/page.tsx — post
  globals.css           — entire design system
  sitemap.ts            — auto /sitemap.xml
  robots.ts             — auto /robots.txt

content/
  work/                 — case study markdown files
  writing/              — post markdown files

public/
  images/tails.webp     — hero image
```

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`. Use `--port 8000` if needed.

## Content

Adding a case study or post — create a `.md` file in `content/work/` or `content/writing/` with this frontmatter:

```yaml
---
title: Title here
date: 2024-06
tag: developer | consumer | agentic | b2b | investing | essay
description: One or two sentence summary.
---
```

The index pages and slug routes pick it up automatically on next build.
