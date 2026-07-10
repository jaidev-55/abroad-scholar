"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog";
import BlogCard from "./BlogCard";

const BlogList = ({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) => {
  const [active, setActive] = useState<string>("All");
  const tabs = ["All", ...categories];

  const visible = useMemo(
    () =>
      active === "All" ? posts : posts.filter((p) => p.category === active),
    [active, posts],
  );

  return (
    <div>
      {/* filter pills */}
      <div
        role="tablist"
        aria-label="Filter articles by category"
        className="flex flex-wrap gap-2"
      >
        {tabs.map((tab) => {
          const isActive = active === tab;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isActive
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-line bg-paper text-slate hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* grid */}
      {visible.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-2xl border border-line bg-paper p-8 text-center text-slate">
          No articles in this category yet — check back soon.
        </p>
      )}
    </div>
  );
};

export default BlogList;
