import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abroadscholars.in"),
  title: {
    default: "Abroad Scholars — Study Abroad & IELTS Experts in Chennai",
    template: "%s · Abroad Scholars",
  },
  description:
    "Apply for 2026 admissions to top global universities. End-to-end study abroad guidance — shortlisting, SOP, IELTS, loans, visa and landing support. Trusted by 8,000+ students since 2009.",
  keywords: [
    "study abroad consultants Chennai",
    "overseas education",
    "IELTS coaching Anna Nagar",
    "study in USA UK Canada",
    "student visa guidance",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://abroadscholars.in",
    siteName: "Abroad Scholars",
    title: "Study Abroad & IELTS Experts in Chennai — Abroad Scholars",
    description:
      "End-to-end study abroad guidance for 2026 intake. 8,000+ students placed across 11 countries.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
