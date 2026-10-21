import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hardik More is an operator turned investor at Sorin Investments, backing bold ideas early. Four years building developer APIs, trading platforms and agentic infrastructure at Dhan.",
  openGraph: {
    title: "About - Hardik More",
    description: "Operator turned investor at Sorin Investments, backing bold ideas early. Four years building developer APIs, trading platforms and agentic infrastructure at Dhan.",
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
      </nav>

      <section className="identity">
        <h1 className="identity-name">About</h1>
        <p className="identity-tag">Hardik More</p>
      </section>

      <section className="intro">
        <p>
          I&apos;m an operator turned investor, on the investment team at{" "}
          <a href="https://www.sorininvestments.com/team/hardik-more" target="_blank" rel="noopener">Sorin Investments</a>,
          backing founders early. I like bold ideas that redefine a segment, and I try to
          bring a builder&apos;s empathy to the people doing the hard, early work of
          turning them into businesses.
        </p>
        <p>
          Before Sorin, I spent four years at{" "}
          <a href="https://dhan.co/" target="_blank" rel="noopener">Dhan</a>&nbsp;as one of its
          early PMs, building developer and consumer products - DhanHQ APIs (0→Rs 10Cr ARR),
          a charts and trading platform that grew to one-third of Dhan&apos;s revenue,
          ScanX (2.5M+ monthly visits), and agentic trading infrastructure including
          India&apos;s first live MCP server for a broker. I built Dhan&apos;s algo trading
          product too, defining the category while its regulation was still taking shape.
          And I sourced and co-built early-stage bets as strategic investments. That turned
          out to be my favourite part of the job. The <Link href="/now">/now page</Link>{" "}
          tracks what I&apos;m on today.
        </p>
        <p>
          I grew up in Guwahati, Assam, and studied Economics at S.G.T.B. Khalsa College, University of Delhi. Commerce
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
              playbook for yet - agentic AI in trading was the latest version of that.
            </p>
            <p>
              Working deeply in one industry made me curious about many others. Sorin is
              the second leg of that learning. Technology is changing what people can build,
              how customers find it and what they expect from it - interfaces are being
              rediscovered, and value is moving along every chain. I want to understand that
              through the founders and operators living it every day, and build my own
              conviction one area at a time.
            </p>
          </div>
        </details>
      </section>

      <section className="section">
        <h2>How I think</h2>
        <ul>
          <li><span>Building is the best preparation for backing builders. You know which problems are hard because you&apos;ve had them.</span></li>
          <li><span>Tail bets compound. Most obvious things are already priced in.</span></li>
          <li><span>Every chain has a link where value pools. Finding it early is most of the job.</span></li>
          <li><span>Developer infrastructure is always a decade ahead of consumer awareness.</span></li>
          <li><span>Revenue is a forcing function. It removes ambiguity about whether something works.</span></li>
          <li><span>Conviction is earned one area at a time. I&apos;d rather go deep than be broadly opinionated.</span></li>
        </ul>
      </section>

      <section className="section" id="experience">
        <h2>Experience</h2>
        <table className="exp-table">
          <tbody>
            <tr>
              <td className="exp-role">Investment Team</td>
              <td className="exp-company"><a href="https://www.sorininvestments.com/" target="_blank" rel="noopener">Sorin Investments</a></td>
              <td className="exp-year">2026 – present</td>
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
  );
}
