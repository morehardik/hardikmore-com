import type { Metadata } from "next";
import Link from "next/link";
import { getNowPage } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Hardik More is focused on now: backing founders at Sorin Investments, rediscovering interfaces, and writing on agentic AI. Updated from Mumbai.",
  openGraph: {
    title: "Now / Hardik More",
    description: "What Hardik More is focused on now: backing founders at Sorin Investments, rediscovering interfaces, and writing on agentic AI.",
    url: "https://hardikmore.com/now",
    images: [{ url: "/images/tails.webp", alt: "A long-tail probability distribution curve - building in the tails" }],
  },
  alternates: { canonical: "https://hardikmore.com/now" },
};

export default async function Now() {
  const page = await getNowPage();

  const subtitle = [page?.updated, page?.location].filter(Boolean).join(" · ");

  return (
    <main>
      <nav className="site-nav">
        <Link href="/" className="nav-home">← Home</Link>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/writing">Writing</Link>
        <Link href="/now" aria-current="page">Now</Link>
      </nav>

      <section className="identity">
        <h1 className="identity-name">Now</h1>
        {subtitle && <p className="identity-tag">{subtitle}</p>}
      </section>

      {page ? (
        <div className="prose" dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
      ) : (
        <p className="sub-note">Content coming soon.</p>
      )}

      <p className="sub-note" style={{ marginTop: "48px" }}>
        Inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener">Derek Sivers&apos; /now movement</a>.
      </p>
    </main>
  );
}
