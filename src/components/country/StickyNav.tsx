"use client";

import { useEffect, useRef, useState } from "react";

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "universities", label: "Universities" },
  { id: "costs", label: "Costs" },
  { id: "intakes", label: "Intakes" },
  { id: "visa", label: "Visa" },
  { id: "faq", label: "FAQ" },
];

// Height of the fixed navbar (top-17 ≈ 68px) + this sticky bar (~52px).
const OFFSET = 120;

export default function StickyNav() {
  const [active, setActive] = useState(NAV[0].id);
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll-spy: highlight the section currently under the sticky bars.
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!sections.length) return;

    const onScroll = () => {
      let current = sections[0].id;
      for (const sec of sections) {
        if (sec.getBoundingClientRect().top - OFFSET <= 1) current = sec.id;
        else break;
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const el = navRef.current?.querySelector<HTMLElement>(
      `[data-id="${active}"]`,
    );
    el?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  }, [active]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = window.scrollY + el.getBoundingClientRect().top - OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="sticky top-20 z-30 border-y border-line bg-paper/85 backdrop-blur">
      <div
        ref={navRef}
        className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 py-2.5 lg:px-8 scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {NAV.map((n) => {
          const isActive = active === n.id;
          return (
            <a
              key={n.id}
              data-id={n.id}
              href={`#${n.id}`}
              onClick={(e) => handleClick(e, n.id)}
              aria-current={isActive ? "true" : undefined}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-slate hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {n.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
