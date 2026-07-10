import Link from "next/link";
import type { ReactNode } from "react";
import { slugify, type ContentBlock } from "@/lib/blog";

/* Inline parser: **bold** and [text](/link). Keeps content plain-text
   in data while allowing light emphasis + links in the rendered page. */
function renderInline(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*([^*]+)\*\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;

  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1]) {
      nodes.push(
        <strong key={key++} className="font-semibold text-ink">
          {m[2]}
        </strong>,
      );
    } else {
      const href = m[5];
      const external = /^https?:\/\//.test(href);
      nodes.push(
        <Link
          key={key++}
          href={href}
          className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2 transition-colors hover:decoration-blue-600"
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {m[4]}
        </Link>,
      );
    }
    last = regex.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const calloutStyles = {
  info: "border-blue-200 bg-blue-50",
  tip: "border-emerald-200 bg-emerald-50",
  warning: "border-amber-200 bg-amber-50",
} as const;

const calloutIcon = { info: "i", tip: "★", warning: "!" } as const;

export default function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="max-w-none">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading": {
            const id = slugify(block.text);
            if (block.level === 2) {
              return (
                <h2
                  key={i}
                  id={id}
                  className="mt-12 scroll-mt-28 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <h3
                key={i}
                id={id}
                className="mt-8 scroll-mt-28 font-display text-xl font-semibold tracking-tight text-ink"
              >
                {block.text}
              </h3>
            );
          }

          case "paragraph":
            return (
              <p
                key={i}
                className="mt-5 text-[1.05rem] leading-relaxed text-slate"
              >
                {renderInline(block.text)}
              </p>
            );

          case "list": {
            const Tag = block.ordered ? "ol" : "ul";
            return (
              <Tag
                key={i}
                className={`mt-5 space-y-2.5 pl-5 text-[1.05rem] leading-relaxed text-slate ${
                  block.ordered ? "list-decimal" : "list-disc"
                } marker:text-blue-400`}
              >
                {block.items.map((item, j) => (
                  <li key={j} className="pl-1.5">
                    {renderInline(item)}
                  </li>
                ))}
              </Tag>
            );
          }

          case "quote":
            return (
              <figure key={i} className="mt-8">
                <blockquote className="rounded-r-2xl border-l-4 border-blue-400 bg-tint px-6 py-5 text-lg font-medium italic leading-relaxed text-ink">
                  {renderInline(block.text)}
                </blockquote>
                {block.cite && (
                  <figcaption className="mt-2 pl-6 text-sm text-slate">
                    — {block.cite}
                  </figcaption>
                )}
              </figure>
            );

          case "callout": {
            const variant = block.variant ?? "info";
            return (
              <aside
                key={i}
                className={`mt-8 flex gap-4 rounded-2xl border p-5 ${calloutStyles[variant]}`}
              >
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/70 text-sm font-bold text-ink"
                >
                  {calloutIcon[variant]}
                </span>
                <div>
                  {block.title && (
                    <p className="font-display font-semibold text-ink">
                      {block.title}
                    </p>
                  )}
                  <p className="mt-1 text-[0.975rem] leading-relaxed text-slate">
                    {renderInline(block.text)}
                  </p>
                </div>
              </aside>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
