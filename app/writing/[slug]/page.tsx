import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContentPage, getContentList } from "@/lib/markdown";
import PostFooter from "@/app/components/PostFooter";
import ReadingProgress from "@/app/components/ReadingProgress";

export async function generateStaticParams() {
  const items = await getContentList("writing");
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getContentPage("writing", slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: `${page.title} / Hardik More`,
      description: page.description,
      url: `https://hardikmore.com/writing/${slug}`,
      type: "article",
      images: [{ url: "/images/tails.webp" }],
    },
    alternates: { canonical: `https://hardikmore.com/writing/${slug}` },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getContentPage("writing", slug);
  if (!page) notFound();

  const imgWidth = page.imageWidth ?? "100%";

  return (
    <main>
      <nav className="site-nav">
        <Link href="/writing" className="nav-home">← Writing</Link>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/now">Now</Link>
        <a href="/#elsewhere">Contact</a>
      </nav>

      <section className="identity">
        <h1 className="identity-name">{page.title}</h1>
        <p className="identity-tag post-meta">
          <time dateTime={page.date}>{page.dateDisplayFull}</time>
          {page.tag ? ` · ${page.tag}` : ""}
        </p>
      </section>

      <ReadingProgress />

      <div
        className="prose"
        style={{ "--img-width": imgWidth } as React.CSSProperties}
        dangerouslySetInnerHTML={{ __html: page.contentHtml }}
      />

      <PostFooter />
    </main>
  );
}
