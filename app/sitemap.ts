import { MetadataRoute } from "next";
import { getContentList } from "@/lib/markdown";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const works = await getContentList("work");
  const writings = await getContentList("writing");

  const workUrls = works.map((item) => ({
    url: `https://hardikmore.com/work/${item.slug}`,
    lastModified: new Date(item.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const writingUrls = writings.map((item) => ({
    url: `https://hardikmore.com/writing/${item.slug}`,
    lastModified: new Date(item.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: "https://hardikmore.com", changeFrequency: "monthly", priority: 1.0 },
    { url: "https://hardikmore.com/about", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://hardikmore.com/work", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://hardikmore.com/writing", changeFrequency: "weekly", priority: 0.9 },
    ...workUrls,
    ...writingUrls,
  ];
}
