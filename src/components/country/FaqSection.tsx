import Faq from "@/components/country/faq";
import { Reveal } from "@/components/home/Reveal";

interface FaqItem {
  q: string;
  a: string;
}

interface CountryData {
  name: string;
  faqs: FaqItem[];
}

export default function FaqSection({ data }: { data: CountryData }) {
  return (
    <section id="faq" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Studying in {data.name}, answered
          </h2>
        </Reveal>
        <Reveal>
          <Faq items={data.faqs} />
        </Reveal>
      </div>
    </section>
  );
}
