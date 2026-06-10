import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content");

export interface ContentMeta {
  slug: string;
  title: string;
  date: string;
  dateDisplay: string;
  dateDisplayFull: string;
  tag?: string;
  section?: string;
  description?: string;
  imageWidth?: string;
  externalUrl?: string;
}

export interface ContentPage extends ContentMeta {
  contentHtml: string;
}

function toIsoDate(raw: unknown): string {
  if (!raw) return "";
  if (raw instanceof Date) return raw.toISOString().slice(0, 10);
  return String(raw).slice(0, 10);
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const parts = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (parts.length >= 3 && parts[1]) {
    // list pages: "Feb 2024"; article pages receive full date separately
    return `${months[parts[1] - 1]} ${parts[0]}`;
  }
  if (parts.length >= 2 && parts[1]) {
    return `${months[parts[1] - 1]} ${parts[0]}`;
  }
  return iso;
}

function formatDateFull(iso: string): string {
  if (!iso) return "";
  const parts = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (parts.length >= 3 && parts[1] && parts[2]) {
    return `${months[parts[1] - 1]} ${parts[2]}, ${parts[0]}`;
  }
  if (parts.length >= 2 && parts[1]) {
    return `${months[parts[1] - 1]} ${parts[0]}`;
  }
  return iso;
}

export async function getContentList(type: "work" | "writing"): Promise<ContentMeta[]> {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const items = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(dir, filename), "utf8");
    const { data } = matter(raw);
    const dateRaw = toIsoDate(data.date);
    return {
      slug,
      title: String(data.title ?? slug),
      date: dateRaw,
      dateDisplay: formatDate(dateRaw),
      dateDisplayFull: formatDateFull(dateRaw),
      tag: String(data.tag ?? ""),
      section: String(data.section ?? data.tag ?? ""),
      description: String(data.description ?? ""),
      imageWidth: data.imageWidth ? String(data.imageWidth) : undefined,
      externalUrl: data.externalUrl ? String(data.externalUrl) : undefined,
    };
  });

  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getNowPage(): Promise<{ contentHtml: string; updated: string; location: string } | null> {
  const filePath = path.join(contentDir, "now.md");
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(content);

  return {
    contentHtml: processed.toString(),
    updated: String(data.updated ?? ""),
    location: String(data.location ?? ""),
  };
}

export async function getContentPage(
  type: "work" | "writing",
  slug: string
): Promise<ContentPage | null> {
  const filePath = path.join(contentDir, type, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(content);

  const dateRaw = toIsoDate(data.date);
  return {
    slug,
    title: String(data.title ?? slug),
    date: dateRaw,
    dateDisplay: formatDate(dateRaw),
    dateDisplayFull: formatDateFull(dateRaw),
    tag: String(data.tag ?? ""),
    section: String(data.section ?? data.tag ?? ""),
    description: String(data.description ?? ""),
    imageWidth: data.imageWidth ? String(data.imageWidth) : undefined,
    externalUrl: data.externalUrl ? String(data.externalUrl) : undefined,
    contentHtml: processed.toString(),
  };
}
