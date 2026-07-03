import { SITE } from "@/lib/Constants";


export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    description:
      "Study abroad and IELTS consultancy in Chennai. End-to-end guidance for 2026 admissions to top global universities.",
    foundingDate: String(SITE.since),
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, 2nd Ave, W Block, Anna Nagar",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600040",
      addressCountry: "IN",
    },
    sameAs: [
      SITE.socials.instagram,
      SITE.socials.facebook,
      SITE.socials.linkedin,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
