export type Exam = {
  slug: string;
  abbr: string;
  name: string;
  category: "English" | "Aptitude";
  tagline: string;
  overview: string[];
  whoFor: string;
  scoreInfo: string;
  format: { section: string; detail: string }[];
  coaching: string[];
  faqs: { q: string; a: string }[];
};

export const EXAMS: Exam[] = [
  {
    slug: "ielts",
    abbr: "IELTS",
    name: "International English Language Testing System",
    category: "English",
    tagline: "The most widely accepted English test for study and migration.",
    overview: [
      "IELTS measures your English across listening, reading, writing and speaking, and is accepted by virtually every university and immigration authority in the UK, Australia, Canada, New Zealand and beyond.",
      "You can take IELTS Academic on paper or computer, with a one-on-one speaking test in front of a real examiner — the format most students are coached for.",
    ],
    whoFor:
      "Students heading to the UK, Australia, Canada, New Zealand or Ireland, and anyone who needs proof of English for a visa.",
    scoreInfo:
      "Scored in half-bands from 0 to 9. Most universities ask for an overall 6.0–7.0 with no individual band below 6.0.",
    format: [
      {
        section: "Listening",
        detail: "30 minutes · 4 recordings · 40 questions",
      },
      { section: "Reading", detail: "60 minutes · 3 passages · 40 questions" },
      {
        section: "Writing",
        detail: "60 minutes · 2 tasks (essay + report/letter)",
      },
      {
        section: "Speaking",
        detail: "11–14 minutes · face-to-face with an examiner",
      },
    ],
    coaching: [
      "Band-by-band strategy for all four sections",
      "Writing feedback with model answers",
      "Speaking practice with mock examiners",
      "Full-length computer and paper mocks",
      "Small batches with personal attention",
    ],
    faqs: [
      {
        q: "What IELTS score do I need?",
        a: "Most universities want an overall 6.0–7.0, but it varies by course and country. We target the exact band your shortlist requires.",
      },
      {
        q: "Paper or computer-based IELTS?",
        a: "Both are accepted equally. Computer-based gives faster results; we help you pick and prepare for the format that suits you.",
      },
      {
        q: "How long is IELTS valid?",
        a: "IELTS results are valid for two years from the test date.",
      },
    ],
  },
  {
    slug: "pte",
    abbr: "PTE",
    name: "Pearson Test of English Academic",
    category: "English",
    tagline: "Fully computer-based English test with fast, AI-scored results.",
    overview: [
      "PTE Academic is a computer-based English test scored entirely by AI, which means fast, unbiased results — usually within 48 hours.",
      "It's accepted by thousands of universities and by the Australian and New Zealand governments for visas, and is popular for its quick turnaround and predictable question types.",
    ],
    whoFor:
      "Students who want fast results, are comfortable working on a computer, and are applying to Australia, New Zealand, the UK or Canada.",
    scoreInfo:
      "Scored 10–90 on the Global Scale of English. Universities typically ask for 50–65 overall.",
    format: [
      {
        section: "Speaking & Writing",
        detail: "54–67 minutes, combined section",
      },
      { section: "Reading", detail: "29–30 minutes" },
      { section: "Listening", detail: "30–43 minutes" },
    ],
    coaching: [
      "Strategies for every AI-scored question type",
      "Templates for speaking and writing tasks",
      "Time-management drills for each section",
      "Full-length scored mock tests",
      "Tips to maximise the automated scoring",
    ],
    faqs: [
      {
        q: "Why choose PTE over IELTS?",
        a: "PTE is fully computer-based, AI-scored and returns results fast — often in 48 hours. Many students also find the format suits them better.",
      },
      {
        q: "Is PTE accepted for visas?",
        a: "Yes — PTE Academic is accepted for student and migration visas in Australia, New Zealand and the UK, among others.",
      },
      {
        q: "How fast are PTE results?",
        a: "Usually within 48 hours, far quicker than most other English tests.",
      },
    ],
  },
  {
    slug: "toefl",
    abbr: "TOEFL",
    name: "Test of English as a Foreign Language",
    category: "English",
    tagline: "The English test favoured by US universities.",
    overview: [
      "TOEFL iBT is an internet-based English test widely preferred by universities in the United States and accepted across Canada and many other countries.",
      "It tests academic English through integrated tasks that mirror real classrooms — you read, listen, then speak or write about what you learned.",
    ],
    whoFor:
      "Students aiming for US universities, and anyone whose target schools prefer or require TOEFL.",
    scoreInfo:
      "Scored 0–120 (0–30 per section). US universities commonly ask for 80–100 overall.",
    format: [
      { section: "Reading", detail: "Academic passages with questions" },
      { section: "Listening", detail: "Lectures and conversations" },
      { section: "Speaking", detail: "Independent and integrated tasks" },
      { section: "Writing", detail: "Integrated and academic writing tasks" },
    ],
    coaching: [
      "Integrated-task strategy unique to TOEFL",
      "Note-taking techniques for listening",
      "Speaking templates and timed practice",
      "Essay structuring and detailed feedback",
      "Full-length iBT-style mock tests",
    ],
    faqs: [
      {
        q: "Do US universities prefer TOEFL?",
        a: "Many do, though most now also accept IELTS. We check each university on your list and prepare you for the one they prefer.",
      },
      {
        q: "What's a good TOEFL score?",
        a: "80–100 covers most universities, with competitive programmes wanting 100+. We target your specific requirement.",
      },
      {
        q: "How long is TOEFL valid?",
        a: "TOEFL scores are valid for two years.",
      },
    ],
  },
  {
    slug: "gre",
    abbr: "GRE",
    name: "Graduate Record Examination",
    category: "Aptitude",
    tagline: "The standard admissions test for master's and PhD programmes.",
    overview: [
      "The GRE is accepted by graduate schools worldwide for master's and doctoral programmes across most disciplines, especially in the US.",
      "It measures verbal reasoning, quantitative reasoning and analytical writing, and a strong score can lift both your admission and your funding chances.",
    ],
    whoFor:
      "Applicants to master's and PhD programmes — particularly in the US — and anyone seeking assistantships or scholarships.",
    scoreInfo:
      "Verbal and Quant are scored 130–170 each; Writing 0–6. Competitive programmes often want 320+.",
    format: [
      {
        section: "Verbal Reasoning",
        detail: "Reading comprehension and vocabulary in context",
      },
      {
        section: "Quantitative Reasoning",
        detail: "Arithmetic, algebra, geometry and data analysis",
      },
      { section: "Analytical Writing", detail: "One analytical essay task" },
    ],
    coaching: [
      "Vocabulary building and verbal strategy",
      "Quant concept revision and shortcuts",
      "Analytical writing structure and feedback",
      "Section-adaptive practice and mocks",
      "A study plan matched to your target score",
    ],
    faqs: [
      {
        q: "Is the GRE still required?",
        a: "Many programmes have made it optional, but a strong score still helps with admits and funding. We advise per university.",
      },
      {
        q: "What GRE score should I aim for?",
        a: "It depends on your target programmes — competitive ones often want 320+. We set a goal from your shortlist.",
      },
      {
        q: "How long is the GRE valid?",
        a: "GRE scores are valid for five years.",
      },
    ],
  },
  {
    slug: "gmat",
    abbr: "GMAT",
    name: "Graduate Management Admission Test",
    category: "Aptitude",
    tagline: "The test of choice for top business schools.",
    overview: [
      "The GMAT is built specifically for business school admissions and is preferred by many top MBA and management programmes worldwide.",
      "It assesses the analytical, quantitative, verbal and data-reasoning skills business schools care about, and a strong score strengthens competitive applications.",
    ],
    whoFor:
      "MBA and Master's-in-Management applicants, especially those targeting top-ranked business schools.",
    scoreInfo:
      "The GMAT Focus Edition is scored 205–805. Top programmes often look for the equivalent of 650+.",
    format: [
      {
        section: "Quantitative Reasoning",
        detail: "Problem solving with data",
      },
      { section: "Verbal Reasoning", detail: "Reading and critical reasoning" },
      { section: "Data Insights", detail: "Data interpretation and analysis" },
    ],
    coaching: [
      "Quant and data-reasoning mastery",
      "Critical reasoning and reading strategy",
      "Adaptive practice tuned to the GMAT",
      "Pacing and section-order strategy",
      "Full-length mock exams with analysis",
    ],
    faqs: [
      {
        q: "GMAT or GRE for an MBA?",
        a: "Most business schools accept both. The GMAT is purpose-built for management programmes; we help you choose based on your strengths and target schools.",
      },
      {
        q: "What's a competitive GMAT score?",
        a: "It varies by school, but top programmes often look for 650+ on the Focus Edition. We set your target from your shortlist.",
      },
      {
        q: "How long is the GMAT valid?",
        a: "GMAT scores are valid for five years.",
      },
    ],
  },
];

export function getExam(slug: string) {
  return EXAMS.find((e) => e.slug === slug);
}
