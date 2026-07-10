export type Author = {
  name: string;
  role: string;
  avatar?: string;
  bio: string;
};

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | {
      type: "callout";
      variant?: "info" | "tip" | "warning";
      title?: string;
      text: string;
    };

export type FAQ = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** Meta description + card excerpt. Answer-first, ~150–160 chars. */
  description: string;
  category: string;
  tags: string[];
  keywords: string[];
  author: Author;
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  cover?: string; // /images/blog/…  (optional; branded gradient fallback)
  featured?: boolean;
  takeaways: string[];
  content: ContentBlock[];
  faqs: FAQ[];
};

/* ---------------- Authors ---------------- */

const PRIYA: Author = {
  name: "Priya Menon",
  role: "Senior Study-Abroad Counsellor",
  bio: "Priya has guided 900+ students to universities across the UK, US, Canada and Australia. She specialises in course selection and scholarship strategy.",
};

const ARJUN: Author = {
  name: "Arjun Rao",
  role: "Test-Prep Lead",
  bio: "Arjun heads IELTS and TOEFL coaching at Abroad Scholars and has helped students lift band scores by an average of 1.5 in eight weeks.",
};

/* ---------------- Posts ---------------- */

export const posts: BlogPost[] = [
  {
    slug: "how-to-choose-a-study-abroad-destination",
    title: "How to Choose the Right Study Abroad Destination in 2026",
    description:
      "Pick a study-abroad country by matching four things to your goals: course quality, total cost, post-study work rights, and visa odds. Here's how.",
    category: "Guides",
    tags: ["destination", "planning", "UK", "USA", "Canada", "Australia"],
    keywords: [
      "how to choose a study abroad destination",
      "best country to study abroad 2026",
      "study abroad country comparison",
      "post study work visa",
    ],
    author: PRIYA,
    publishedAt: "2026-06-14",
    updatedAt: "2026-07-02",
    featured: true,
    takeaways: [
      "Start from your goal — career, migration, or a specific programme — not from a country's reputation.",
      "Compare the total cost (tuition + living + travel), not tuition alone.",
      "Post-study work rights often matter more than a small ranking difference.",
      "Match your profile to realistic visa-approval odds before you fall in love with one place.",
    ],
    content: [
      {
        type: "paragraph",
        text: "The right destination is the one that fits **your** goal, budget and profile — not the one with the most famous name. Two students with identical scores can be best served by two different countries. This guide walks through the four factors that actually decide it, in the order they matter.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. Start with your goal, not the country",
      },
      {
        type: "paragraph",
        text: "Before you compare anything, name your primary goal in one sentence. It usually falls into one of three buckets, and each points to different places:",
      },
      {
        type: "list",
        items: [
          "**Best possible programme** in your field — rankings and faculty matter most here.",
          "**Migration / long-term settlement** — post-study work length and PR pathways dominate.",
          "**Fastest route to earning** — total cost and job-market access outweigh prestige.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Write it down first",
        text: "If you can't state your goal in one line, you're not ready to shortlist countries. Everything below is scored against that line.",
      },
      {
        type: "heading",
        level: 2,
        text: "2. Compare total cost, not tuition",
      },
      {
        type: "paragraph",
        text: "Tuition is the sticker price; the real number is tuition plus living costs, health cover, travel and visa fees over the full course. A cheaper degree in a high-rent city can cost more than a pricier one in an affordable region. Always build a full two-year estimate before comparing.",
      },
      {
        type: "list",
        items: [
          "Tuition for the whole programme (not one year)",
          "Living costs for your specific city — rent varies hugely within a country",
          "Mandatory health insurance and the visa financial requirement",
          "One-off costs: flights, deposits, test and application fees",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "3. Weigh post-study work rights",
      },
      {
        type: "paragraph",
        text: "For most students this is the deciding factor, and it changes often — so verify current rules on official government sites before deciding. As a rule of thumb, look at how long you can stay and work after graduating, and whether that time is enough to recoup your investment and build experience.",
      },
      {
        type: "quote",
        text: "A one-place difference in a ranking rarely changes your career. Two extra years of work rights almost always does.",
        cite: "Priya Menon, Senior Counsellor",
      },
      {
        type: "heading",
        level: 2,
        text: "4. Be honest about visa odds",
      },
      {
        type: "paragraph",
        text: "The strongest application is one you can actually get a visa for. Match your academic record, finances and intent to the realistic approval pattern for your profile in each country. It's better to get an admit and a visa from your second-choice country than a rejection from your first.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Rules change",
        text: "Tuition, work-visa lengths and financial requirements are updated frequently. Treat any figure you read online — including this article — as a starting point and confirm the latest on official sources.",
      },
      {
        type: "paragraph",
        text: "Work through these four in order and a shortlist of two or three countries usually falls out naturally. If you'd like a second opinion on your specific profile, our [first counselling session is free](/contact).",
      },
    ],
    faqs: [
      {
        question: "Which country is best for studying abroad in 2026?",
        answer:
          "There is no single best country — it depends on your goal, budget and profile. Students focused on migration often prioritise post-study work rights, while those chasing a specific programme prioritise course quality and faculty. Compare total cost, work rights and visa odds for your own case.",
      },
      {
        question: "Is it cheaper to study in Europe or the UK?",
        answer:
          "It varies by country and city. Some European countries have low or no tuition for certain programmes but higher living costs, while the UK usually has higher tuition but shorter degrees. Always compare the full cost of the whole programme, including living expenses, rather than tuition alone.",
      },
      {
        question: "Do university rankings really matter?",
        answer:
          "They matter for some fields and employers, but a small ranking difference rarely changes your outcome. Fit, course content, cost and post-study opportunities usually have a bigger long-term impact than a few places on a ranking table.",
      },
    ],
  },

  {
    slug: "ielts-vs-toefl-which-test-to-take",
    title: "IELTS vs TOEFL: Which English Test Should You Take?",
    description:
      "Both IELTS and TOEFL are accepted almost everywhere. Choose based on test format, your speaking comfort, and what your target universities require.",
    category: "Test Prep",
    tags: ["IELTS", "TOEFL", "english test", "test prep"],
    keywords: [
      "ielts vs toefl",
      "which english test to take",
      "ielts or toefl for usa",
      "toefl vs ielts difficulty",
    ],
    author: ARJUN,
    publishedAt: "2026-05-28",
    updatedAt: "2026-06-20",
    takeaways: [
      "Both tests are accepted by the vast majority of universities worldwide.",
      "The biggest real difference is format — IELTS speaking is with a person; TOEFL is on a computer.",
      "Pick the format you'll perform best under, then confirm your universities accept it.",
      "Your score is only valid for two years, so time the test close to your applications.",
    ],
    content: [
      {
        type: "paragraph",
        text: "IELTS and TOEFL both measure academic English, and **most universities accept either one**. So the choice is rarely about acceptance — it's about which test format suits you, and what your specific universities ask for. Here's how to decide quickly.",
      },
      {
        type: "heading",
        level: 2,
        text: "The one difference that actually matters: format",
      },
      {
        type: "paragraph",
        text: "The tests cover the same four skills — listening, reading, writing and speaking — but deliver them differently. That format gap is what most students should choose on.",
      },
      {
        type: "list",
        items: [
          "**Speaking** — IELTS is a face-to-face conversation with a human examiner. TOEFL is spoken into a microphone and recorded. If talking to a person calms you, lean IELTS; if it makes you freeze, lean TOEFL.",
          "**Reading & listening** — TOEFL is fully academic and integrated; IELTS mixes academic passages with everyday materials. Some find TOEFL's tasks more predictable, others find IELTS more varied.",
          "**Handwriting vs typing** — IELTS offers paper or computer; TOEFL writing is typed. Fast typists often prefer TOEFL.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Take one of each — as a mock",
        text: "The fastest way to choose is to sit a free practice test of each under timed conditions. Your score gap and comfort level will usually make the decision obvious.",
      },
      {
        type: "heading",
        level: 2,
        text: "Check what your universities require",
      },
      {
        type: "paragraph",
        text: "Before booking, confirm two things on each university's official admissions page: which tests they accept, and the **minimum score** (including any per-section minimums). A great overall score can still fall short if one section is below the required band.",
      },
      {
        type: "heading",
        level: 2,
        text: "Scoring, at a glance",
      },
      {
        type: "list",
        items: [
          "IELTS is scored in bands from 0 to 9, reported in half-band steps.",
          "TOEFL iBT is scored out of 120, combining four sections scored out of 30.",
          "Universities publish their requirement in one system or both — match your target to the right scale.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Scores expire",
        text: "Both IELTS and TOEFL scores are typically valid for two years. Don't sit the test too early — time it so it's still valid through your application and enrolment.",
      },
      {
        type: "heading",
        level: 2,
        text: "A simple decision rule",
      },
      {
        type: "paragraph",
        text: "If you're comfortable speaking to a person and like variety, IELTS is a safe pick. If you prefer a fully computer-based, academic-only format and type quickly, choose TOEFL. When both fit, go with whichever your shortlisted universities most consistently accept. Need a diagnostic and a study plan? [Talk to our test-prep team](/contact).",
      },
    ],
    faqs: [
      {
        question: "Is IELTS or TOEFL easier?",
        answer:
          "Neither is universally easier — it depends on the individual. Students who are comfortable speaking with a person often find IELTS easier, while fast typists who prefer a computer-based, academic format often do better on TOEFL. Try a timed practice test of each to see where you score higher.",
      },
      {
        question: "Which test is better for studying in the USA?",
        answer:
          "US universities widely accept both IELTS and TOEFL. TOEFL originated in the US and is very familiar to admissions offices there, but IELTS is equally accepted at almost all institutions. Always confirm the specific requirement on your target university's admissions page.",
      },
      {
        question: "How long are IELTS and TOEFL scores valid?",
        answer:
          "Both are generally valid for two years from the test date. Plan your test so the score remains valid throughout your application cycle and up to enrolment.",
      },
    ],
  },

  {
    slug: "how-much-does-it-cost-to-study-abroad",
    title: "How Much Does It Really Cost to Study Abroad?",
    description:
      "Studying abroad costs tuition plus living, insurance, travel and fees. Build a full estimate, then close the gap with scholarships and part-time work.",
    category: "Costs & Funding",
    tags: ["cost", "budget", "scholarships", "funding"],
    keywords: [
      "cost of studying abroad",
      "study abroad budget",
      "how much money to study abroad",
      "scholarships for international students",
    ],
    author: PRIYA,
    publishedAt: "2026-05-10",
    updatedAt: "2026-06-18",
    takeaways: [
      "Your real cost is tuition + living + insurance + travel + fees — budget all five.",
      "Living costs are driven by your city more than your country.",
      "Scholarships, assistantships and part-time work can cut the net cost significantly.",
      "Plan the visa financial requirement early — it's often the biggest single hurdle.",
    ],
    content: [
      {
        type: "paragraph",
        text: '"How much does it cost?" has no single answer, because two students in the same country can spend very differently. But the **structure** of the cost is always the same. Budget these five buckets and you\'ll have a realistic number.',
      },
      {
        type: "heading",
        level: 2,
        text: "The five costs to budget",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Tuition** — for the entire programme, not one year. Postgraduate and specialised courses cost more.",
          "**Living costs** — rent, food, transport and utilities. This is driven by your city, not just the country.",
          "**Health insurance** — often mandatory for a student visa and easy to forget.",
          "**Travel** — flights, local set-up, and at least one trip home.",
          "**Fees** — application, test (IELTS/TOEFL), visa, and deposits.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "City beats country",
        text: "Rent in a capital city can be double that of a regional town in the same country. Choosing your city carefully is one of the biggest levers on total cost.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to bring the number down",
      },
      {
        type: "paragraph",
        text: "The sticker price is rarely what strong applicants actually pay. Three levers close the gap:",
      },
      {
        type: "list",
        items: [
          "**Scholarships & grants** — merit and need-based awards from universities and governments. Apply early and to several.",
          "**Assistantships & on-campus work** — teaching or research roles that can offset tuition or living costs, especially at postgraduate level.",
          "**Part-time work rights** — many student visas allow limited hours during term; treat this as a bonus, not your core budget.",
        ],
      },
      {
        type: "quote",
        text: "Students who apply to five or six scholarships almost always do better than those who apply to one 'perfect' one.",
        cite: "Priya Menon, Senior Counsellor",
      },
      {
        type: "heading",
        level: 2,
        text: "Don't forget the visa financial requirement",
      },
      {
        type: "paragraph",
        text: "Most student visas require you to show you can cover tuition and living costs for a set period. This proof-of-funds figure is often the biggest single hurdle, and the rules change — so check the official immigration site for your destination early and prepare documents well ahead of your application.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Figures change constantly",
        text: "Tuition, living costs and proof-of-funds amounts are updated regularly and vary by country, city and university. Use official and university sources for current numbers when you build your final budget.",
      },
      {
        type: "paragraph",
        text: "Want a personalised budget and a scholarship shortlist for your profile? Our [first counselling session is free](/contact).",
      },
    ],
    faqs: [
      {
        question: "How much money do I need to study abroad?",
        answer:
          "You need enough to cover five things: full tuition, living costs for your city, mandatory health insurance, travel, and application/visa fees. The exact figure varies widely by country, city and course, so build a complete estimate for your specific plan rather than relying on a single average.",
      },
      {
        question: "Can I study abroad for free?",
        answer:
          "Fully free is rare, but the net cost can be reduced substantially through scholarships, grants, assistantships and part-time work. Some countries also have low or no tuition for certain programmes, though living costs still apply.",
      },
      {
        question: "Can I work while studying abroad?",
        answer:
          "Many student visas allow limited part-time work during term time and more during breaks, but rules differ by country. Treat part-time earnings as a supplement to your budget, not your primary funding source, and confirm the current rules on the official immigration website.",
      },
    ],
  },
];

/* ---------------- Helpers ---------------- */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return posts.find((p) => p.featured) ?? getAllPosts()[0];
}

export function getAllCategories(): string[] {
  return Array.from(new Set(posts.map((p) => p.category)));
}

/** Same-category first, then filled with the most recent other posts. */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return getAllPosts().slice(0, limit);

  const sameCategory = getAllPosts().filter(
    (p) => p.slug !== slug && p.category === current.category,
  );
  const others = getAllPosts().filter(
    (p) => p.slug !== slug && p.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getReadingTime(post: BlogPost): number {
  const words = post.content.reduce((acc, b) => {
    if (b.type === "list") return acc + b.items.join(" ").split(/\s+/).length;
    if ("text" in b && b.text) return acc + b.text.split(/\s+/).length;
    return acc;
  }, 0);
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

/** Pull headings for a table of contents (matches ArticleBody ids). */
export function getHeadings(post: BlogPost) {
  return post.content
    .filter(
      (b): b is Extract<ContentBlock, { type: "heading" }> =>
        b.type === "heading",
    )
    .map((h) => ({ id: slugify(h.text), text: h.text, level: h.level }));
}
