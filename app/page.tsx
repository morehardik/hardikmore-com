import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getContentList } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Hardik More - building in the tails.",
  description:
    "Hardik More is an operator turned investor at Sorin Investments, backing bold ideas early. Previously built developer APIs, trading platforms and agentic infrastructure at Dhan.",
  openGraph: {
    title: "Hardik More - building in the tails.",
    description:
      "Operator turned investor at Sorin Investments, backing bold ideas early. Previously built developer APIs, trading platforms and agentic infrastructure at Dhan.",
    url: "https://hardikmore.com",
    images: [{ url: "/images/tails.webp", alt: "A long-tail probability distribution curve - building in the tails" }],
  },
  alternates: { canonical: "https://hardikmore.com" },
};

export default async function Home() {
  const writings = await getContentList("writing");
  const works = await getContentList("work");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Hardik More",
            url: "https://hardikmore.com",
            jobTitle: "Associate",
            worksFor: {
              "@type": "Organization",
              name: "Sorin Investments",
              url: "https://www.sorininvestments.com",
            },
            sameAs: [
              "https://twitter.com/hardik__more",
              "https://www.linkedin.com/in/hardikmore/",
              "https://github.com/morehardik",
            ],
          }),
        }}
      />
    <main>
      <nav className="site-nav">
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/writing">Writing</Link>
        <Link href="/now">Now</Link>
      </nav>

      <section className="identity">
        <h1 className="identity-name">Hardik More</h1>
        <p className="identity-tag">Operator turned investor.</p>
      </section>

      <figure className="hero">
        <Image
          src="/images/tails.webp"
          alt="A long-tail probability distribution curve - building in the tails"
          width={1200}
          height={480}
          priority
        />
      </figure>

      <section className="intro">
        <p>
          I&apos;m on the investment team at{" "}
          <a href="https://www.sorininvestments.com/team/hardik-more" target="_blank" rel="noopener">Sorin Investments</a>,
          backing founders doing the hard, early work of turning bold ideas into
          businesses. I look for interfaces being rediscovered, and for where value
          pools in every chain - from the infrastructure underneath to the customer on top.
        </p>
        <p>
          Before this, four years at <a href="https://dhan.co/" target="_blank" rel="noopener">Dhan</a>,
          where I built from 0-to-1 across APIs (Rs 10Cr ARR), a charts and trading
          platform (one-third of Dhan&apos;s revenue), ScanX (2.5M+ monthly visits), and
          agentic trading infra (MCP server, live). I also sourced and co-built early-stage
          bets as strategic investments - the part of the job that pulled me here.
        </p>
        <p>
          If you&apos;re building something, or figuring out what comes next, I&apos;d love
          to exchange notes. Here&apos;s <Link href="/now">what I&apos;m doing now</Link>.
        </p>
      </section>

      <section className="section" id="work">
        <h2>Work</h2>
        <ul>
          {works.filter((i) => i.slug !== "simpl-product-teardown").length > 0 ? (
            works.filter((i) => i.slug !== "simpl-product-teardown").map((item) => (
              <li key={item.slug}>
                <Link href={`/work/${item.slug}`}>{item.title}</Link>
                <span className="meta">{item.tag}</span>
              </li>
            ))
          ) : (
            <>
              <li>
                <a href="https://portfolio.hardikmore.com/simpl-product-teardown" target="_blank" rel="noopener">Simpl - activation teardown</a>
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
            </>
          )}
        </ul>
      </section>

      <section className="section" id="writing">
        <h2>Essays</h2>
        <ul>
          {writings.filter((w) => !w.tag || w.tag === "essay").length > 0 ? (
            writings.filter((w) => !w.tag || w.tag === "essay").map((item) => (
              <li key={item.slug}>
                {item.externalUrl ? (
                  <a href={item.externalUrl} target="_blank" rel="noopener">{item.title}</a>
                ) : (
                  <Link href={`/writing/${item.slug}`}>{item.title}</Link>
                )}
                <span className="meta">{item.dateDisplay}</span>
              </li>
            ))
          ) : (
            <li>
              <a href="https://hardikmore.substack.com/p/dev-tools-ecosystem" target="_blank" rel="noopener">Dev tech in India</a>
              <span className="meta">Aug 2023</span>
            </li>
          )}
        </ul>
        <p className="sub-note">
          More via <a href="https://hardikmore.substack.com" target="_blank" rel="noopener">Substack</a>.
        </p>
      </section>

      {writings.filter((w) => w.tag === "note").length > 0 && (
        <section className="section" id="notes">
          <h2>Notes</h2>
          <ul>
            {writings.filter((w) => w.tag === "note").map((item) => (
              <li key={item.slug}>
                <Link href={`/writing/${item.slug}`}>{item.title}</Link>
                <span className="meta">{item.dateDisplay}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="section" id="experience">
        <h2>Experience</h2>
        <table className="exp-table">
          <tbody>
            <tr>
              <td className="exp-role">Associate</td>
              <td className="exp-company"><a href="https://www.sorininvestments.com/" target="_blank" rel="noopener">Sorin Investments</a></td>
              <td className="exp-year">2026 –</td>
            </tr>
            <tr>
              <td className="exp-role">Senior PM</td>
              <td className="exp-company"><a href="https://dhan.co/" target="_blank" rel="noopener">Dhan</a></td>
              <td className="exp-year">2022 – 2026</td>
            </tr>
            <tr>
              <td className="exp-role">Product Intern</td>
              <td className="exp-company"><a href="https://sprinto.com/" target="_blank" rel="noopener">Sprinto</a></td>
              <td className="exp-year">2022</td>
            </tr>
            <tr>
              <td className="exp-role">Product Intern</td>
              <td className="exp-company"><a href="https://www.fieldassist.com/" target="_blank" rel="noopener">FieldAssist</a></td>
              <td className="exp-year">2022</td>
            </tr>
            <tr>
              <td className="exp-role">Business Analyst</td>
              <td className="exp-company"><a href="https://pirimidtech.com/" target="_blank" rel="noopener">Pirimid Fintech</a></td>
              <td className="exp-year">2021</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
    </>
  );
}
