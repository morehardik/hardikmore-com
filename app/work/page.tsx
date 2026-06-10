import type { Metadata } from "next";
import Link from "next/link";
import { getContentList } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product work by Hardik More — developer APIs, agentic AI, consumer products. Case studies across DhanHQ, ScanX, MCP infrastructure, and early-stage investing.",
  openGraph: {
    title: "Work — Hardik More",
    description: "Developer APIs, agentic AI, consumer products. Case studies from Dhan and earlier.",
    url: "https://hardikmore.com/work",
    images: [{ url: "/images/tails.webp", alt: "A long-tail probability distribution curve — building in the tails" }],
  },
  alternates: { canonical: "https://hardikmore.com/work" },
};

export default async function Work() {
  const caseStudies = await getContentList("work");

  return (
    <main>
      <nav className="site-nav">
        <Link href="/" className="nav-home">← Home</Link>
        <Link href="/about">About</Link>
        <Link href="/work" aria-current="page">Work</Link>
        <Link href="/writing">Writing</Link>
        <a href="mailto:hello@hardikmore.com">Contact</a>
      </nav>

      <section className="identity">
        <h1 className="identity-name">Work</h1>
        <p className="identity-tag">Selected projects</p>
      </section>

      <section className="section">
        <h2>Dhan — 2022 to present</h2>
        <ul>
          {caseStudies.length > 0 ? (
            caseStudies.map((item) => (
              <li key={item.slug}>
                <Link href={`/work/${item.slug}`}>{item.title}</Link>
                <span className="meta">{item.tag}</span>
              </li>
            ))
          ) : (
            <>
              <li>
                <span>DhanHQ APIs — developer platform</span>
                <span className="meta">developer</span>
              </li>
              <li>
                <span>Charts + trading platform — one-third of Dhan&apos;s revenue</span>
                <span className="meta">consumer</span>
              </li>
              <li>
                <span>ScanX — equity research at scale</span>
                <span className="meta">consumer</span>
              </li>
              <li>
                <span>MCP server + agentic trading infra</span>
                <span className="meta">agentic</span>
              </li>
              <li>
                <span>Broking-as-a-Service — 100+ partnerships</span>
                <span className="meta">developer</span>
              </li>
              <li>
                <span>Strategic investments — sourced and co-built early-stage bets</span>
                <span className="meta">investing</span>
              </li>
            </>
          )}
        </ul>
        {caseStudies.length === 0 && (
          <p className="sub-note">Case studies in progress. Back shortly.</p>
        )}
      </section>

      <section className="section">
        <h2>Earlier</h2>
        <ul>
          <li>
            <a href="https://portfolio.hardikmore.com/simpl-product-teardown" target="_blank" rel="noopener">Simpl — activation teardown</a>
            <span className="meta">consumer</span>
          </li>
          <li>
            <a href="https://portfolio.hardikmore.com/wealth-tech-robo-advisory-app-concept" target="_blank" rel="noopener">WealthTech savings app</a>
            <span className="meta">consumer</span>
          </li>
          <li>
            <a href="https://portfolio.hardikmore.com/card-payment-flow--crypto-cards" target="_blank" rel="noopener">Card payments for crypto</a>
            <span className="meta">developer</span>
          </li>
          <li>
            <a href="https://portfolio.hardikmore.com/cpg-salesforce-dashboard-revamp" target="_blank" rel="noopener">FieldAssist dashboard revamp</a>
            <span className="meta">b2b</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
