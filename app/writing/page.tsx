import type { Metadata } from "next";
import Link from "next/link";
import { getContentList } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and notes by Hardik More on developer infrastructure, agentic AI, consumer fintech, and building in India. On BNPL, developer ecosystems, and more.",
  openGraph: {
    title: "Writing - Hardik More",
    description: "On developer infrastructure, agentic AI, consumer products, and building in India.",
    url: "https://hardikmore.com/writing",
    images: [{ url: "/images/tails.webp", alt: "A long-tail probability distribution curve" }],
  },
  alternates: { canonical: "https://hardikmore.com/writing" },
};

export default async function Writing() {
  const posts = await getContentList("writing");
  const essays = posts.filter((p) => !p.tag || p.tag === "essay");
  const notes = posts.filter((p) => p.tag === "note");

  return (
    <main>
      <nav className="site-nav">
        <Link href="/" className="nav-home">← Home</Link>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/writing" aria-current="page">Writing</Link>
        <Link href="/now">Now</Link>
      </nav>

      <section className="identity">
        <h1 className="identity-name">Writing</h1>
        <p className="identity-tag">Essays + notes</p>
      </section>

      <section className="section">
        <h2>Essays</h2>
        <ul>
          {essays.length > 0 ? (
            essays.map((post) => (
              <li key={post.slug}>
                {post.externalUrl ? (
                  <a href={post.externalUrl} target="_blank" rel="noopener">{post.title}</a>
                ) : (
                  <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                )}
                <span className="meta">
                  <time dateTime={post.date}>{post.dateDisplay}</time>
                </span>
              </li>
            ))
          ) : (
            <>
              <li>
                <a href="https://hardikmore.substack.com/p/m1-coffee-philosophy-india" target="_blank" rel="noopener">Coffee last sunday..</a>
                <span className="meta"><time dateTime="2024-02-11">Feb 11, 2024</time></span>
              </li>
              <li>
                <a href="https://hardikmore.substack.com/p/dev-tools-ecosystem" target="_blank" rel="noopener">Dev tech in India</a>
                <span className="meta"><time dateTime="2023-08">Aug 2023</time></span>
              </li>
            </>
          )}
        </ul>
        <p className="sub-note">
          More via <a href="https://hardikmore.substack.com" target="_blank" rel="noopener">Substack</a>.
        </p>
      </section>

      {notes.length > 0 && (
        <section className="section">
          <h2>Notes</h2>
          <ul>
            {notes.map((note) => (
              <li key={note.slug}>
                <Link href={`/writing/${note.slug}`}>{note.title}</Link>
                <span className="meta">
                  <time dateTime={note.date}>{note.dateDisplay}</time>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
