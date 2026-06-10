import type { Metadata } from "next";
import Link from "next/link";
import { getContentList } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing by Hardik More on developer infrastructure, agentic AI, consumer products, and building in India. Posts on Substack with canonical here.",
  openGraph: {
    title: "Writing — Hardik More",
    description: "On developer infrastructure, agentic AI, consumer products, and building in India.",
    url: "https://hardikmore.com/writing",
    images: [{ url: "/images/tails.webp", alt: "A long-tail probability distribution curve — building in the tails" }],
  },
  alternates: { canonical: "https://hardikmore.com/writing" },
};

export default async function Writing() {
  const posts = await getContentList("writing");

  return (
    <main>
      <nav className="site-nav">
        <Link href="/" className="nav-home">← Home</Link>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/writing" aria-current="page">Writing</Link>
        <a href="mailto:hello@hardikmore.com">Contact</a>
      </nav>

      <section className="identity">
        <h1 className="identity-name">Writing</h1>
        <p className="identity-tag">Essays + notes</p>
      </section>

      <section className="section">
        <h2>Posts</h2>
        <ul>
          {posts.length > 0 ? (
            posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                <span className="meta"><time dateTime={post.date}>{post.date}</time></span>
              </li>
            ))
          ) : (
            <li>
              <a href="https://hardikmore.substack.com/p/dev-tech-in-india" target="_blank" rel="noopener">Dev tech in India</a>
              <span className="meta"><time dateTime="2023-08">Aug 2023</time></span>
            </li>
          )}
        </ul>
        <p className="sub-note">
          Subscribe via <a href="https://hardikmore.substack.com" target="_blank" rel="noopener">Substack</a> for email delivery.
          New posts appear here first.
        </p>
      </section>
    </main>
  );
}
