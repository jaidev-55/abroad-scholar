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
import type { IconType } from "react-icons";

/** Single source of truth for name / address / phone (NAP). Feeds the footer + LocalBusiness schema. */
export const SITE = {
  name: "Abroad Scholars",
  tagline: "International Education Experts",
  url: "https://abroadscholars.in",
  phone: "+919500117792",
  phoneDisplay: "+91 95001 17792",
  email: "info@abroadscholars.in",
  whatsapp: "919500117792",
  address:
    "2nd Floor, 2nd Ave, Opp. City Tower Hospital, W Block, Anna Nagar, Chennai 600040",
  since: 2009,
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "/destinations" },
  { label: "Services", href: "/services" },
  { label: "Test Prep", href: "/test-prep" },
  { label: "Success", href: "/success" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 8000, suffix: "+", label: "Students placed" },
  { value: 11, suffix: "", label: "Study destinations" },
  { value: 500, suffix: "+", label: "Partner universities" },
  { value: 95, suffix: "%", label: "Visa success rate" },
];

type Service = { icon: IconType; title: string; body: string };

export const SERVICES: Service[] = [
  {
    icon: FaUserCheck,
    title: "Profile Assessment",
    body: "We map your scores, budget and goals to the courses where you'll actually get in.",
  },
  {
    icon: FaUniversity,
    title: "University Shortlisting",
    body: "A focused list of ambitious, target and safe universities — no guesswork.",
  },
  {
    icon: FaFileSignature,
    title: "SOP & Applications",
    body: "Standout statements of purpose and error-free applications, filed on time.",
  },
  {
    icon: FaHeadphonesAlt,
    title: "IELTS & Test Prep",
    body: "Small-batch coaching for IELTS, PTE, TOEFL, GRE and GMAT with real mock tests.",
  },
  {
    icon: FaHandHoldingUsd,
    title: "Education Loans",
    body: "Collateral and non-collateral loan guidance with our banking partners.",
  },
  {
    icon: FaPassport,
    title: "Visa Guidance",
    body: "Document checklists, mock interviews and financial proofing for visa approval.",
  },
  {
    icon: FaHouseUser,
    title: "Accommodation",
    body: "Verified student housing sorted before you land — on or off campus.",
  },
  {
    icon: FaPlaneArrival,
    title: "Post-Landing Support",
    body: "Airport pickup, SIM, bank account and settling-in help once you arrive.",
  },
];

export const DESTINATIONS = [
  {
    country: "USA",
    flag: "🇺🇸",
    hook: "STEM OPT · 3-year stay back",
    slug: "usa",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    hook: "1–2 year master's · PSW visa",
    slug: "uk",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    hook: "PGWP · clear PR pathway",
    slug: "canada",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    hook: "Post-study work up to 4 years",
    slug: "australia",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    hook: "Low / no tuition · strong jobs",
    slug: "germany",
  },
  {
    country: "Ireland",
    flag: "🇮🇪",
    hook: "Tech & pharma hub · 2-yr stay",
    slug: "ireland",
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    hook: "Work rights · high quality of life",
    slug: "new-zealand",
  },
  {
    country: "France",
    flag: "🇫🇷",
    hook: "Affordable · global business schools",
    slug: "france",
  },
  {
    country: "Dubai (UAE)",
    flag: "🇦🇪",
    hook: "Tax-free · close to home",
    slug: "dubai",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    hook: "Asia's top-ranked universities",
    slug: "singapore",
  },
];

export const HERO_FLAGS = ["🇺🇸", "🇬🇧", "🇨🇦", "🇦🇺", "🇩🇪", "🇮🇪", "🇫🇷", "🇸🇬"];

export const WHY = [
  {
    title: "One-to-one counselling",
    body: "A dedicated mentor who knows your file by name — not a call-centre queue.",
  },
  {
    title: "End-to-end, one roof",
    body: "Shortlisting, applications, loans, visa and landing — handled in a single place.",
  },
  {
    title: "Honest, transparent advice",
    body: "We recommend what fits your profile and budget, never what pays us the most.",
  },
  {
    title: "Since 2009",
    body: "Fifteen years and 8,000+ students placed across eleven countries worldwide.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sandhya R.",
    detail: "MS Data Science · Northeastern University, USA",
    quote:
      "They shortlisted universities that matched my GRE perfectly and my visa was approved on the first attempt. The SOP help was the real difference.",
  },
  {
    name: "Arun K.",
    detail: "MSc Computer Science · Trinity College, Ireland",
    quote:
      "From IELTS coaching to my loan, everything was under one roof. My counsellor replied even on weekends. I never felt lost in the process.",
  },
  {
    name: "Priya M.",
    detail: "MBA · University of Toronto, Canada",
    quote:
      "I came in confused about which country to pick. They walked me through costs and PR options honestly and helped me choose Canada with confidence.",
  },
];
