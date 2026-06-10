import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content");

export interface ContentMeta {
  slug: string;
  title: string;
  date: string;
  tag?: string;
  description?: string;
}

export interface ContentPage extends ContentMeta {
  contentHtml: string;
}

export async function getContentList(type: "work" | "writing"): Promise<ContentMeta[]> {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const items = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(dir, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      tag: data.tag ?? "",
      description: data.description ?? "",
    };
  });

  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getContentPage(
  type: "work" | "writing",
  slug: string
): Promise<ContentPage | null> {
  const filePath = path.join(contentDir, type, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    tag: data.tag ?? "",
    description: data.description ?? "",
    contentHtml: processed.toString(),
  };
}
