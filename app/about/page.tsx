import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hardik More is a product operator who turns new infrastructure into revenue lines. Background in developer APIs, agentic AI, and consumer products. Currently at Dhan.",
  openGraph: {
    title: "About - Hardik More",
    description: "Product operator who turns new infrastructure into revenue lines. Developer APIs, agentic AI, consumer products at scale. Currently at Dhan.",
    url: "https://hardikmore.com/about",
    images: [{ url: "/images/tails.webp", alt: "A long-tail probability distribution curve - building in the tails" }],
  },
  alternates: { canonical: "https://hardikmore.com/about" },
};

export default function About() {
  return (
    <main>
      <nav className="site-nav">
        <Link href="/" className="nav-home">← Home</Link>
        <Link href="/about" aria-current="page">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/writing">Writing</Link>
        <Link href="/now">Now</Link>
        <a href="/#elsewhere">Contact</a>
      </nav>

      <section className="identity">
        <h1 className="identity-name">About</h1>
        <p className="identity-tag">Hardik More</p>
      </section>

      <section className="intro">
        <p>
          I&apos;m a product operator. Currently Senior PM at{" "}
          <a href="https://dhan.co/" target="_blank" rel="noopener">Dhan</a>,
          where I build developer and consumer products - DhanHQ APIs (0→Rs 10Cr ARR),
          a charts and trading platform that grew to one-third of Dhan&apos;s revenue,
          ScanX (2.5M+ monthly visits), and agentic trading infrastructure including
          India&apos;s first live MCP server for a broker. I also source and co-build
          early-stage bets as strategic investments.
        </p>
        <p>
          I studied Economics at S.G.T.B. Khalsa College, University of Delhi. Commerce
          background led me to macro and finance. First interest was investment banking,
          that changed fast once I saw how technology was reshaping what finance could do.
        </p>

        <details className="read-more">
          <summary>More background</summary>
          <div className="read-more-content">
            <p>
              My first real bet was starting{" "}
              <a href="https://www.finzcapital.com/" target="_blank" rel="noopener">FinZ Capital</a>{" "}
              with a team of ten - equity and sectoral research for Indian markets. Built
              the website, social presence, and community alongside the research. Tried to
              productise the research module. Failed at that. Learned more from that
              failure than from most things that worked.
            </p>
            <p>
              Fintech pulled me in next. Interned at Pirimid Technologies, a fintech
              service provider, where I worked across almost every fintech stack:
              payments, wealth tech, credit, blockchain. Came out of that with a prototype
              for a personal finance management app, built with teammates. Did hundreds of
              user calls. Killed it: wrong product-market fit, regulatory headwinds.
              Right call.
            </p>
            <p>
              Spent 2022 interning across three different startups - FieldAssist, Sprinto,
              and one more - deliberately learning how product practice differs across
              industries and org sizes. Sprinto was my first encounter with SaaS and
              compliance infrastructure, which turned out to be a surprisingly useful frame
              for how I now think about developer ecosystems.
            </p>
            <p>
              Joined Dhan as one of the early PMs. The mandate was to build new business
              verticals from the ground up in an industry where being late usually means
              losing. That constraint is where I operate best. Being curious about both
              tech and finance is an edge when the two keep colliding in ways nobody has a
              playbook for yet - agentic AI in trading being the current version of that.
            </p>
          </div>
        </details>
      </section>

      <section className="section">
        <h2>How I think</h2>
        <ul>
          <li><span>Operators build. Managers coordinate. I prefer building.</span></li>
          <li><span>Tail bets compound. Most obvious things are already priced in.</span></li>
          <li><span>Developer infrastructure is always a decade ahead of consumer awareness.</span></li>
          <li><span>Revenue is a forcing function. It removes ambiguity about whether something works.</span></li>
        </ul>
      </section>

      <section className="section" id="experience">
        <h2>Experience</h2>
        <table className="exp-table">
          <tbody>
            <tr>
              <td className="exp-role">Senior PM</td>
              <td className="exp-company"><a href="https://dhan.co/" target="_blank" rel="noopener">Dhan</a></td>
              <td className="exp-year">2022 – present</td>
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

      <section className="section">
        <h2>Elsewhere</h2>
        <ul className="inline-list">
          <li><a href="https://twitter.com/hardik__more" target="_blank" rel="noopener">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/hardikmore/" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="https://github.com/morehardik" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="mailto:hello@hardikmore.com">hello@hardikmore.com</a></li>
        </ul>
      </section>
    </main>
  );
}
