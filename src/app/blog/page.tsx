import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FloatingCTA from "@/components/home/Floatingcta";
import { Reveal } from "@/components/home/Reveal";
import BlogList from "@/components/blog/BlogList";
import BlogCover from "@/components/blog/BlogCover";
import JsonLd from "@/components/blog/JsonLd";
import {
  getAllPosts,
  getFeaturedPost,
  getReadingTime,
  formatDate,
} from "@/lib/blog";
import {
  SITE_URL,
  absoluteUrl,
  ORG,
  blogListingJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";

const title = "Study Abroad Blog — Guides, Test Prep & Funding";
const description =
  "Practical, up-to-date guides on choosing a destination, IELTS & TOEFL prep, visas and funding — from the counsellors at Abroad Scholars.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/blog" },
  keywords: [
    "study abroad blog",
    "study abroad guides",
    "ielts toefl tips",
    "student visa guide",
    "scholarships international students",
  ],
  openGraph: {
    type: "website",
    url: absoluteUrl("/blog"),
    siteName: ORG.name,
    title,
    description,
    images: [{ url: ORG.logo }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ORG.logo],
  },
};

const BlogIndexPage = () => {
  const allPosts = getAllPosts();
  const featured = getFeaturedPost();
  const rest = allPosts.filter((p) => p.slug !== featured.slug);
  const categories = Array.from(new Set(rest.map((p) => p.category)));

  return (
    <>
      <Navbar />
      <JsonLd
        data={[
          blogListingJsonLd(allPosts),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
          ]),
        ]}
      />

      <main>
        <section className="relative overflow-hidden pt-24 pb-8 sm:pt-28">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal>
              <nav className="flex items-center gap-1.5 text-xs font-medium text-slate">
                <Link
                  href="/"
                  className="transition-colors hover:text-blue-700"
                >
                  Home
                </Link>
                <span className="text-muted">/</span>
                <span className="text-ink">Blog</span>
              </nav>

              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Insights
              </span>
              <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Study abroad,{" "}
                <span className="text-accent">explained clearly</span>
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-slate">
                No jargon, no fluff — just practical guidance on picking a
                country, acing your English test, funding your degree and
                landing the visa.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Featured ── */}
        <section className="pb-4">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal delay={0.05}>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-4xl border border-line bg-paper shadow-card transition-all duration-300 hover:border-blue-200 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:grid-cols-2 lg:min-h-96"
              >
                <BlogCover
                  post={featured}
                  priority
                  className="aspect-16/10 w-full lg:aspect-auto lg:h-full"
                  sizes="(min-width: 1024px) 640px, 100vw"
                />
                <div className="flex flex-col justify-center p-6 sm:p-10">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate">
                    <span className="rounded-full bg-gold-400/15 px-2.5 py-1 font-semibold text-ink">
                      ★ Featured
                    </span>
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 font-semibold text-blue-700">
                      {featured.category}
                    </span>
                    <span aria-hidden>·</span>
                    <span>{getReadingTime(featured)} min read</span>
                  </div>

                  <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-ink transition-colors group-hover:text-blue-700 sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-slate">{featured.description}</p>

                  <div className="mt-6 flex items-center gap-3 text-sm text-slate">
                    <span className="font-medium text-ink">
                      {featured.author.name}
                    </span>
                    <span aria-hidden>·</span>
                    <time dateTime={featured.publishedAt}>
                      {formatDate(featured.publishedAt)}
                    </time>
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700">
                    Read article
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── All articles ── */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal>
              <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-ink">
                Latest articles
              </h2>
              <BlogList posts={rest} categories={categories} />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
};

export default BlogIndexPage;
