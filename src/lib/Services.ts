import type { IconType } from "react-icons";
import {
  FaUserCheck,
  FaUniversity,
  FaFileSignature,
  FaHeadphonesAlt,
  FaHandHoldingUsd,
  FaPassport,
  FaHouseUser,
  FaPlaneArrival,
} from "react-icons/fa";

export type ServiceDetail = {
  slug: string;
  icon: IconType;
  image?: string;
  heroImage?: string;
  ctaImage?: string;
  title: string;
  tagline: string;
  overview: string[];
  included: string[];
  steps: { title: string; desc: string }[];
};

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: "profile-assessment",
    icon: FaUserCheck,
    title: "Profile Assessment",
    image:
      "/images/services/profile-assessment-illustration.png",
    heroImage:
      "/images/services/university-shortlisting/abroad-scholar-profile-assessment-hero.png",
    ctaImage:
      "/images/services/university-shortlisting/study-abroad-counselling-session-cta.png",
    tagline: "Know exactly where you stand — and where you'll get in.",
    overview: [
      "Before you spend a rupee on applications, we take an honest look at your academics, test scores, work experience, budget and goals. The result is a clear picture of which courses and countries are realistic for you — and which are a stretch worth aiming for.",
      "No false promises, no one-size-fits-all advice — just a grounded assessment that shapes every decision that follows.",
    ],
    included: [
      "Academic transcript and backlog review",
      "Test-readiness check for IELTS, GRE and GMAT",
      "Budget and funding feasibility",
      "Country and course fit analysis",
      "A written profile summary and recommendation",
    ],
    steps: [
      {
        title: "Share your details",
        desc: "Academics, tests, budget and goals — in a quick form or call.",
      },
      {
        title: "We analyse the fit",
        desc: "Counsellors benchmark your profile against real admit data.",
      },
      {
        title: "Get your roadmap",
        desc: "A clear recommendation of target countries, courses and timelines.",
      },
    ],
  },
  {
    slug: "university-shortlisting",
    icon: FaUniversity,
    title: "University Shortlisting",
    image: "/images/services/university-shortlist-illustration.png",
    heroImage:
      "/images/services/university-shortlisting/university-shortlisting-hero.png",
    ctaImage:
      "/images/services/university-shortlisting/university-shortlisting-hero.png",
    tagline: "A focused list of ambitious, target and safe universities.",
    overview: [
      "Applying everywhere is expensive and exhausting. We build a tight, strategic shortlist — a healthy mix of ambitious, target and safe options matched to your profile, budget and career goals.",
      "Every choice is backed by data on admit chances, fees, scholarships, location and post-study work, so you apply with confidence rather than guesswork.",
    ],
    included: [
      "8–12 universities across ambitious, target and safe tiers",
      "Course-level fit, not just university ranking",
      "Fees, scholarships and living-cost comparison",
      "Intake and deadline planning",
      "Post-study work and PR outlook for each",
    ],
    steps: [
      {
        title: "Define your priorities",
        desc: "Budget, location, course focus and career goals.",
      },
      {
        title: "We research and match",
        desc: "We map your profile to programmes where you'll thrive and get in.",
      },
      {
        title: "Finalise together",
        desc: "You review, we refine — until the shortlist feels right.",
      },
    ],
  },
  {
    slug: "sop-applications",
    icon: FaFileSignature,
    title: "SOP & Applications",
    image: "/images/services/sop-illustration.png",
    heroImage: "/images/services/sop-applications/sop-drafting-hero.png",
    ctaImage: "/images/services/sop-applications/sop-drafting-cta.png",
    tagline: "Standout statements and error-free applications, on time.",
    overview: [
      "Your statement of purpose often tips an admit decision. We help you tell a compelling, authentic story — then handle the entire application so nothing is missed and no deadline is blown.",
      "From SOPs and recommendation letters to forms and portals, we keep every application complete, consistent and on schedule.",
    ],
    included: [
      "SOP drafting and editing for each university",
      "Letter of recommendation guidance",
      "Resume tailored for admissions",
      "Form filling and portal submission",
      "Deadline tracking across all applications",
    ],
    steps: [
      {
        title: "Brainstorm your story",
        desc: "We pull out the experiences and goals that make you stand out.",
      },
      {
        title: "Draft and refine",
        desc: "We write, you review, we polish — until it's sharp and true to you.",
      },
      {
        title: "Submit with confidence",
        desc: "We file complete applications and confirm every submission.",
      },
    ],
  },
  {
    slug: "test-prep",
    icon: FaHeadphonesAlt,
    title: "IELTS & Test Prep",
    image: "/images/services/ielts-assessment-illustration.png",
    heroImage: "/images/services/ielts-preprations/ielts-prepration-hero.png",
    ctaImage: "/images/services/ielts-preprations/ielts-prepration-cta.png",
    tagline: "Small-batch coaching for the scores that open doors.",
    overview: [
      "Strong test scores widen your university and scholarship options. Our trainers coach IELTS, PTE, TOEFL, GRE and GMAT in small batches, with strategy, practice and honest feedback that actually moves your band.",
      "Regular full-length mocks mean no surprises on test day — just the score you trained for.",
    ],
    included: [
      "IELTS, PTE, TOEFL, GRE and GMAT coaching",
      "Small batches with individual attention",
      "Section-wise strategy and practice",
      "Full-length mock tests with feedback",
      "Flexible weekday and weekend timings",
    ],
    steps: [
      {
        title: "Take a diagnostic",
        desc: "We benchmark your current level and target score.",
      },
      {
        title: "Train with strategy",
        desc: "Focused sessions on your weak areas, not generic drills.",
      },
      {
        title: "Mock, review, improve",
        desc: "Repeat full-length tests until you consistently hit your target.",
      },
    ],
  },
  {
    slug: "education-loans",
    icon: FaHandHoldingUsd,
    title: "Education Loans",
    image: "/images/services/education-loan-illustration.png",
    heroImage: "/images/services/education-loans/education-loans-hero.png",
    ctaImage: "/images/services/education-loans/education-loans-cta.png",
    tagline: "Fund your degree without the runaround.",
    overview: [
      "Financing shouldn't be the reason you give up on a great university. We guide you through collateral and non-collateral education loans with our banking and NBFC partners, and help you present the strongest possible case.",
      "From eligibility to documentation to disbursement, we make the loan process clear and far less stressful.",
    ],
    included: [
      "Collateral and non-collateral loan guidance",
      "Lender comparison across banks and NBFCs",
      "Document preparation and checklist",
      "Margin money and co-applicant support",
      "Coordination through to disbursement",
    ],
    steps: [
      {
        title: "Assess your options",
        desc: "We match your needs to the right lenders and loan type.",
      },
      {
        title: "Prepare your file",
        desc: "We help you assemble a clean, complete loan application.",
      },
      {
        title: "Track to disbursement",
        desc: "We stay involved until funds reach your university on time.",
      },
    ],
  },
  {
    slug: "visa-guidance",
    icon: FaPassport,
    title: "Visa Guidance",
    image: "/images/services/visa-guidance-illustration.png",
    heroImage: "/images/services/visa-guidance/visa-guidance-hero.png",
    ctaImage: "/images/services/visa-guidance/visa-guidance-cta.png",
    tagline: "Give your visa application its best possible shot.",
    overview: [
      "A rejected visa can undo months of work. We prepare you thoroughly — accurate documentation, solid financial proofing and realistic mock interviews tailored to your destination.",
      "You'll walk into your appointment knowing your file is complete and your answers are ready.",
    ],
    included: [
      "Country-specific document checklists",
      "Financial proofing and SOP/GTE support",
      "Application form review and submission help",
      "Mock visa interviews with feedback",
      "Up-to-date guidance on changing rules",
    ],
    steps: [
      {
        title: "Build your document set",
        desc: "We assemble and check everything your destination requires.",
      },
      {
        title: "Prove your funds",
        desc: "We structure finances exactly how the visa office expects.",
      },
      {
        title: "Practise the interview",
        desc: "Realistic mocks so you answer with calm and clarity.",
      },
    ],
  },
  {
    slug: "accommodation",
    icon: FaHouseUser,
    title: "Accommodation",
    image: "/images/services/accommodation-illustration.png",
    heroImage:
      "/images/services/accommodation-support/accommodation-support-hero.png",
    ctaImage:
      "/images/services/accommodation-support/accommodation-support-cta.png",
    tagline: "A safe place to stay, sorted before you fly.",
    overview: [
      "The last thing you want after a long flight is nowhere to live. We help you secure verified student housing — on-campus or off — that fits your budget and is close to your university.",
      "No scams and no last-minute scrambling — just a confirmed place to call home when you land.",
    ],
    included: [
      "On-campus and off-campus options",
      "Verified, student-friendly listings",
      "Budget and location matching",
      "Help understanding contracts and deposits",
      "Booking support before departure",
    ],
    steps: [
      {
        title: "Tell us your budget",
        desc: "Location, room type and price range that work for you.",
      },
      {
        title: "We shortlist verified options",
        desc: "Only trusted, student-appropriate housing — no scams.",
      },
      {
        title: "Book before you fly",
        desc: "Your accommodation is confirmed before you board.",
      },
    ],
  },
  {
    slug: "post-landing-support",
    icon: FaPlaneArrival,
    title: "Post-Landing Support",
    image: "/images/services/post-landing-illustration.png",
    heroImage:
      "/images/services/post-landing-support/post-landing-support-hero.png",
    ctaImage:
      "/images/services/post-landing-support/post-landing-support-hero.png",
    tagline: "We don't stop at the airport gate.",
    overview: [
      "Settling into a new country has a hundred small steps. We help with the essentials — airport pickup, a local SIM, opening a bank account and finding your feet in those crucial first weeks.",
      "Our support continues after you land, so you can focus on your studies, not the logistics.",
    ],
    included: [
      "Airport pickup coordination",
      "Local SIM and connectivity setup",
      "Bank account opening guidance",
      "Initial settling-in checklist",
      "A point of contact when you need help",
    ],
    steps: [
      {
        title: "Arrive to a plan",
        desc: "Pickup and first-week essentials lined up before you land.",
      },
      {
        title: "Set up the basics",
        desc: "SIM, bank account and local know-how, sorted fast.",
      },
      {
        title: "Settle in with support",
        desc: "We stay reachable while you find your footing.",
      },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES_DETAIL.find((s) => s.slug === slug);
}
