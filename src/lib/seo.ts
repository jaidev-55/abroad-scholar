import type { BlogPost } from "./blog";
import { getReadingTime } from "./blog";

/* ============================================================
   SEO / AEO / GEO helpers
   ------------------------------------------------------------
   SITE_URL powers canonical links, Open Graph images and every
   JSON-LD @id. Set it to your production domain once.
   ============================================================ */

export const SITE_URL = "https://www.abroadscholars.in"; // ← set your real domain

export function absoluteUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

export const ORG = {
  name: "Abroad Scholars",
  url: SITE_URL,
  logo: absoluteUrl("/images/abroad-scholars-logo.png"),
};

/** Absolute image URL for a post (falls back to the org logo). */
export function postImage(post: BlogPost): string {
  return post.cover ? absoluteUrl(post.cover) : ORG.logo;
}

/** Article schema — the core signal for search + answer engines. */
export function blogPostingJsonLd(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.description,
    image: [postImage(post)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      description: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: ORG.name,
      url: ORG.url,
      logo: { "@type": "ImageObject", url: ORG.logo },
    },
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    timeRequired: `PT${getReadingTime(post)}M`,
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

/** FAQPage schema — this is what earns "People also ask" style answers (AEO). */
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Blog listing schema for /blog. */
export function blogListingJsonLd(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/blog"),
    name: `${ORG.name} — Study Abroad Blog`,
    url: absoluteUrl("/blog"),
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: ORG.name,
      logo: { "@type": "ImageObject", url: ORG.logo },
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": absoluteUrl(`/blog/${p.slug}`),
      headline: p.title,
      description: p.description,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt ?? p.publishedAt,
      author: { "@type": "Person", name: p.author.name },
      url: absoluteUrl(`/blog/${p.slug}`),
    })),
  };
}
