import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FloatingCTA from "@/components/home/Floatingcta";
import { Reveal } from "@/components/home/Reveal";
import { SITE } from "@/lib/Constants";

import ArticleBody from "@/components/blog/ArticleBody";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareBar from "@/components/blog/ShareBar";
import BlogCard from "@/components/blog/BlogCard";
import BlogCover from "@/components/blog/BlogCover";
import JsonLd from "@/components/blog/JsonLd";

import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  getHeadings,
  getReadingTime,
  formatDate,
} from "@/lib/blog";
import {
  SITE_URL,
  absoluteUrl,
  ORG,
  postImage,
  blogPostingJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };

  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    metadataBase: new URL(SITE_URL),
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      type: "article",
      url,
      siteName: ORG.name,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author.name],
      section: post.category,
      tags: post.tags,
      images: [{ url: postImage(post) }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [postImage(post)],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = getHeadings(post);
  const related = getRelatedPosts(slug);
  const url = absoluteUrl(`/blog/${post.slug}`);
  const readingTime = getReadingTime(post);
  const showUpdated = post.updatedAt && post.updatedAt !== post.publishedAt;
  const initials = post.author.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  const waHref = `https://wa.me/${SITE.whatsapp}`;

  return (
    <>
      <Navbar />
      <JsonLd
        data={[
          blogPostingJsonLd(post),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
          faqJsonLd(post.faqs),
        ]}
      />

      <main>
        <article className="pt-24 pb-16 sm:pt-28">
          {/* ── Header ── */}
          <header className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="max-w-3xl">
                <nav className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate">
                  <Link
                    href="/"
                    className="transition-colors hover:text-blue-700"
                  >
                    Home
                  </Link>
                  <span className="text-muted">/</span>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-blue-700"
                  >
                    Blog
                  </Link>
                  <span className="text-muted">/</span>
                  <span className="line-clamp-1 text-ink">{post.category}</span>
                </nav>

                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate">
                  <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">
                    {post.category}
                  </span>
                  <span aria-hidden>·</span>
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                  <span aria-hidden>·</span>
                  <span>{readingTime} min read</span>
                </div>

                <h1 className="mt-5 text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-5 text-pretty text-lg text-slate">
                  {post.description}
                </p>

                {/* author */}
                <div className="mt-7 flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-linear-to-br from-navy to-navy-deep font-display text-sm font-bold text-cloud">
                    {initials}
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-ink">{post.author.name}</p>
                    <p className="text-slate">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* cover */}
            <Reveal delay={0.05}>
              <BlogCover
                post={post}
                priority
                className="mt-8 aspect-16/9 w-full rounded-[1.75rem] border border-line shadow-card sm:mt-10"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </Reveal>
          </header>

          {/* ── Body + sidebar ── */}
          <div className="mx-auto mt-12 max-w-6xl px-5">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-14">
              {/* main column */}
              <div className="min-w-0">
                {/* key takeaways (AEO/GEO summary) */}
                <aside className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6">
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-blue-700">
                    Key takeaways
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {post.takeaways.map((t, i) => (
                      <li key={i} className="flex gap-3 text-slate">
                        <FaCheckCircle className="mt-1 shrink-0 text-blue-600" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </aside>

                {/* jump-to (mobile only) */}
                {headings.length > 0 && (
                  <details className="group mt-6 rounded-2xl border border-line bg-paper p-4 lg:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-display text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                      Jump to section
                      <FaChevronDown className="text-xs text-slate transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-3 space-y-2 text-sm">
                      {headings.map((h) => (
                        <li key={h.id} className={h.level === 3 ? "ml-3" : ""}>
                          <a
                            href={`#${h.id}`}
                            className="text-slate hover:text-blue-700"
                          >
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}

                {/* article */}
                <div className="mt-8">
                  <ArticleBody blocks={post.content} />
                </div>

                {showUpdated && (
                  <p className="mt-10 text-sm italic text-slate">
                    Last updated {formatDate(post.updatedAt as string)}.
                  </p>
                )}

                {/* FAQ (AEO) */}
                {post.faqs.length > 0 && (
                  <section
                    aria-labelledby="faq-heading"
                    className="mt-14 border-t border-line pt-10"
                  >
                    <h2
                      id="faq-heading"
                      className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
                    >
                      Frequently asked questions
                    </h2>
                    <div className="mt-6 space-y-3">
                      {post.faqs.map((faq, i) => (
                        <details
                          key={i}
                          className="group rounded-2xl border border-line bg-paper p-5 open:shadow-card"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
                            {faq.question}
                            <FaChevronDown className="shrink-0 text-sm text-slate transition-transform group-open:rotate-180" />
                          </summary>
                          <p className="mt-3 leading-relaxed text-slate">
                            {faq.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

                {/* author bio */}
                <section className="mt-14 flex flex-col gap-4 rounded-2xl border border-line bg-tint p-6 sm:flex-row sm:items-center">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-linear-to-br from-navy to-navy-deep font-display text-lg font-bold text-cloud">
                    {initials}
                  </span>
                  <div>
                    <p className="font-display font-bold text-ink">
                      {post.author.name}
                    </p>
                    <p className="text-sm font-medium text-blue-700">
                      {post.author.role}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {post.author.bio}
                    </p>
                  </div>
                </section>

                {/* share */}
                <div className="mt-10 border-t border-line pt-8">
                  <ShareBar url={url} title={post.title} />
                </div>
              </div>

              {/* sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-8">
                  <TableOfContents headings={headings} />

                  <div className="rounded-2xl border border-line bg-linear-to-br from-navy to-navy-deep p-6 text-cloud">
                    <p className="font-display text-base font-bold text-white">
                      Not sure where to start?
                    </p>
                    <p className="mt-2 text-sm text-cloud/80">
                      Get a free, no-obligation plan from a real counsellor.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-linear-to-br from-gold-300 to-gold-400 px-4 py-2.5 text-sm font-bold text-ink transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                    >
                      Book free counselling
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {/* ── Related ── */}
          {related.length > 0 && (
            <section className="mx-auto mt-20 max-w-7xl px-5">
              <Reveal>
                <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-ink">
                  Related reading
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((p) => (
                    <BlogCard key={p.slug} post={p} />
                  ))}
                </div>
              </Reveal>
            </section>
          )}

          {/* ── CTA ── */}
          <section className="mx-auto mt-20 max-w-7xl px-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-navy to-navy-deep px-6 py-12 text-center sm:px-12 sm:py-16">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/15 blur-3xl" />
                <div className="relative mx-auto max-w-2xl">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Ready to plan your study abroad journey?
                  </h2>
                  <p className="mt-3 text-cloud/80">
                    Talk to a counsellor about your goals — your first session
                    is free.
                  </p>
                  <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:w-auto"
                    >
                      <FaWhatsapp className="text-lg" />
                      WhatsApp us
                    </a>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto"
                    >
                      <FaPhoneAlt />
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </article>
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
