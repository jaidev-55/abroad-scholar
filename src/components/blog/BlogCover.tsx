import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import type { BlogPost } from "@/lib/blog";

/**
 * Cover art for a post. Uses post.cover when present; otherwise a
 * branded navy→gold gradient with the category — so the blog looks
 * finished with zero image assets. Add `/images/blog/…` covers later.
 */
export default function BlogCover({
  post,
  className = "",
  sizes = "(min-width: 1024px) 720px, 100vw",
  priority = false,
}: {
  post: BlogPost;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (post.cover) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={post.cover}
          alt={post.title}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-linear-to-br from-navy to-navy-deep ${className}`}
    >
      {/* soft light accent */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-400/20 blur-3xl" />
      <div className="absolute inset-0 grid place-items-center p-6 text-center">
        <div>
          <FaGraduationCap className="mx-auto text-2xl text-gold-400" />
          <p className="mt-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-cloud/80">
            {post.category}
          </p>
        </div>
      </div>
    </div>
  );
}
