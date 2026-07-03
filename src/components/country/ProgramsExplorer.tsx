"use client";

import { useMemo, useState } from "react";
import { FaSearch, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { SITE } from "@/lib/Constants";

const FEATURED = [
  "Data Science",
  "Computer Science",
  "Business Analytics",
  "Artificial Intelligence",
  "Cybersecurity",
  "Finance",
  "Management",
  "Information Technology",
];

export default function ProgramsExplorer({
  programs,
  country,
}: {
  programs: string[];
  country: string;
}) {
  const [q, setQ] = useState("");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return programs;
    return programs.filter((p) => p.toLowerCase().includes(t));
  }, [q, programs]);

  const featured = useMemo(() => {
    const set = new Set(programs.map((p) => p.toLowerCase()));
    return FEATURED.filter((f) => set.has(f.toLowerCase()));
  }, [programs]);

  const searching = q.trim().length > 0;
  const collapsed = !expanded && !searching;

  const waBase = `https://wa.me/${SITE.whatsapp}`;
  const askHref = (p?: string) =>
    `${waBase}?text=${encodeURIComponent(
      p
        ? `Hi, I'd like guidance on a Master's in ${p} in ${country}.`
        : `Hi, I'd like help choosing a Master's program in ${country}.`,
    )}`;

  return (
    <div>
      {/* Search */}
      <div className="relative">
        <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate" />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Search ${programs.length} programs…`}
          className="w-full rounded-2xl border border-line bg-tint/40 py-3.5 pl-12 pr-4 text-ink outline-none transition placeholder:text-slate/70 focus:border-blue-500 focus:bg-paper focus:ring-2 focus:ring-blue-100"
        />
        {searching && (
          <button
            type="button"
            onClick={() => setQ("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 text-xs font-medium text-slate hover:text-blue-700"
          >
            Clear
          </button>
        )}
      </div>

      {/* Popular quick filters */}
      {!searching && featured.length > 0 && (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate">
            Popular right now
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {featured.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setQ(f)}
                className="rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-blue-700 transition hover:border-blue-400 hover:bg-blue-100"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Count */}
      <p className="mt-5 text-xs font-medium text-slate">
        {searching
          ? `${filtered.length} ${filtered.length === 1 ? "match" : "matches"} for “${q}”`
          : `${programs.length} specialisations available`}
      </p>

      {/* List */}
      <div className="relative mt-3">
        <div className={collapsed ? "max-h-104 overflow-hidden" : ""}>
          {filtered.length > 0 ? (
            <ul className="columns-1 gap-3 sm:columns-2 lg:columns-3 [&>li]:mb-3 [&>li]:break-inside-avoid">
              {filtered.map((p) => (
                <li key={p}>
                  <span className="flex items-center gap-2.5 rounded-xl border border-line bg-paper px-4 py-2.5 text-sm text-ink transition-all duration-200 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-card">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-2xl border border-dashed border-line bg-tint/40 p-8 text-center">
              <p className="text-sm text-slate">
                No programs match &ldquo;{q}&rdquo; — but we cover many more.
              </p>
              <a
                href={askHref(q)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-navy-deep"
              >
                <FaWhatsapp className="text-[#25D366]" /> Ask us about it
              </a>
            </div>
          )}
        </div>

        {collapsed && filtered.length > 0 && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-paper to-transparent" />
        )}
      </div>

      {/* Toggle */}
      {!searching && filtered.length > 0 && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-2.5 text-sm font-semibold text-ink shadow-card transition hover:border-blue-300 hover:bg-tint"
          >
            {expanded
              ? "Show fewer programs"
              : `Show all ${programs.length} programs`}
            <FaArrowRight
              className={`text-xs transition-transform ${expanded ? "-rotate-90" : "rotate-90"}`}
            />
          </button>
        </div>
      )}

      {/* Footer CTA */}
      <div className="mt-6 flex flex-col items-stretch gap-3 rounded-2xl bg-tint/50 p-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-sm text-slate">
          Not sure which program fits you? Our counsellors will help you choose.
        </p>
        <a
          href={askHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-navy-deep sm:w-auto"
        >
          <FaWhatsapp className="text-[#25D366]" /> Ask about your course
        </a>
      </div>
    </div>
  );
}
