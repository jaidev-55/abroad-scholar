import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { formatDate, getReadingTime, type BlogPost } from "@/lib/blog";
import BlogCover from "./BlogCover";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <BlogCover
          post={post}
          className="aspect-video w-full"
          sizes="(min-width: 1024px) 380px, 100vw"
        />

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-2 text-xs font-medium text-slate">
            <span className="rounded-full bg-blue-50 px-2.5 py-1 font-semibold text-blue-700">
              {post.category}
            </span>
            <span aria-hidden>·</span>
            <span>{getReadingTime(post)} min read</span>
          </div>

          <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-blue-700">
            {post.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate">
            {post.description}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
            <time dateTime={post.publishedAt} className="text-xs text-slate">
              {formatDate(post.publishedAt)}
            </time>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
              Read
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
