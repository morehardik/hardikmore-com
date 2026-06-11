"use client";

import { useEffect, useRef, useState } from "react";

interface Section {
  id: string;
  label: string;
  top: number;
  bottom: number;
}

export default function ReadingProgress({ contentSelector = ".prose" }: { contentSelector?: string }) {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const buildSections = () => {
      const prose = document.querySelector(contentSelector);
      if (!prose) return;

      const headings = Array.from(prose.querySelectorAll("h2"));
      if (headings.length === 0) return;

      const built: Section[] = headings.map((h, i) => {
        const next = headings[i + 1];
        const top = h.getBoundingClientRect().top + window.scrollY - 80;
        const bottom = next
          ? next.getBoundingClientRect().top + window.scrollY - 80
          : document.body.scrollHeight;
        return { id: h.id || `section-${i}`, label: h.textContent ?? "", top, bottom };
      });

      setSections(built);
    };

    buildSections();
    window.addEventListener("resize", buildSections);
    return () => window.removeEventListener("resize", buildSections);
  }, [contentSelector]);

  useEffect(() => {
    if (sections.length === 0) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        let idx = 0;
        for (let i = 0; i < sections.length; i++) {
          if (y >= sections[i].top) idx = i;
        }
        setActiveIndex(idx);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sections]);

  if (sections.length < 2) return null;

  return (
    <div className="reading-progress" aria-hidden="true">
      {sections.map((s, i) => (
        <div
          key={s.id}
          className={`reading-progress-bar${i === activeIndex ? " active" : ""}`}
          title={s.label}
        />
      ))}
    </div>
  );
}
