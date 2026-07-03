import CostsSection from "@/components/country/CostsSection";
import CountryHero from "@/components/country/CountryHero";
import CountryJsonLd from "@/components/country/CountryJsonLd";
import CtaSection from "@/components/country/CtaSection";
import FaqSection from "@/components/country/FaqSection";
import IntakesSection from "@/components/country/IntakesSection";
import OverviewSection from "@/components/country/OverviewSection";
import ProgramsSection from "@/components/country/ProgramsSection";
import ScholarshipsSection from "@/components/country/ScholarshipsSection";
import StickyNav from "@/components/country/StickyNav";
import UniversitiesSection from "@/components/country/UniversitiesSection";
import VisaSection from "@/components/country/VisaSection";
import FloatingCTA from "@/components/home/Floatingcta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { SITE } from "@/lib/Constants";
import { COUNTRIES, getCountry } from "@/lib/Countries";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const data = getCountry(country);
  if (!data) return { title: "Destination not found | Abroad Scholars" };

  const title = `Study in ${data.name} — Universities, Costs, Visa & Intakes | Abroad Scholars`;
  return {
    title,
    description: data.blurb,
    keywords: [
      `study in ${data.name}`,
      `${data.name} universities`,
      `${data.name} student visa`,
      `cost of studying in ${data.name}`,
      `${data.name} intakes`,
      "study abroad consultant Chennai",
    ],
    alternates: { canonical: `/countries/${data.slug}` },
    openGraph: {
      title,
      description: data.blurb,
      type: "article",
      url: `${SITE.url}/countries/${data.slug}`,
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const data = getCountry(country);
  if (!data) notFound();

  const waHref = `https://wa.me/${SITE.whatsapp}`;

  return (
    <>
      <CountryJsonLd data={data} />
      <Navbar />
      <main className="bg-paper">
        <CountryHero data={data} waHref={waHref} />
        <StickyNav />
        <OverviewSection data={data} />
        <UniversitiesSection data={data} />
        <ProgramsSection data={data} />
        <CostsSection data={data} />
        <IntakesSection data={data} />
        <VisaSection data={data} />
        <ScholarshipsSection data={data} />
        <FaqSection data={data} />
        <CtaSection data={data} waHref={waHref} />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
