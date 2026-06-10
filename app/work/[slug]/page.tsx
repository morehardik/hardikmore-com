import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContentPage, getContentList } from "@/lib/markdown";

export async function generateStaticParams() {
  const items = await getContentList("work");
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getContentPage("work", slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: `${page.title} / Hardik More`,
      description: page.description,
      url: `https://hardikmore.com/work/${slug}`,
      type: "article",
      images: [{ url: "/images/tails.webp" }],
    },
    alternates: { canonical: `https://hardikmore.com/work/${slug}` },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getContentPage("work", slug);
  if (!page) notFound();

  return (
    <main>
      <nav className="site-nav">
        <Link href="/work" className="nav-home">← Work</Link>
        <Link href="/about">About</Link>
        <Link href="/writing">Writing</Link>
        <Link href="/now">Now</Link>
        <a href="/#elsewhere">Contact</a>
      </nav>

      <section className="identity">
        <h1 className="identity-name">{page.title}</h1>
        <p className="identity-tag">{page.tag}</p>
      </section>

      <p className="post-meta">{page.date}</p>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: page.contentHtml }}
      />
    </main>
  );
}
