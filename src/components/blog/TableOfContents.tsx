"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string; level: 2 | 3 };

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState<string>(headings[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // trigger when a heading is near the top of the viewport
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-wider text-slate">
        On this page
      </p>
      <ul className="space-y-2 border-l border-line">
        {headings.map((h) => {
          const isActive = active === h.id;
          return (
            <li key={h.id} className={h.level === 3 ? "ml-3" : ""}>
              <a
                href={`#${h.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`-ml-px block border-l-2 py-0.5 pl-4 transition-colors ${
                  isActive
                    ? "border-blue-600 font-medium text-blue-700"
                    : "border-transparent text-slate hover:border-line hover:text-ink"
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
