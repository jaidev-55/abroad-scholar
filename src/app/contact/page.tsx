import FloatingCTA from "@/components/home/Floatingcta";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { SITE } from "@/lib/Constants";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaRegImage,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Book Free Counselling | Abroad Scholars",
  description:
    "Talk to Abroad Scholars about studying abroad. Call, WhatsApp or email us, or visit our Anna Nagar, Chennai office. Free first counselling for every student.",
  alternates: { canonical: "/contact" },
};

const mapSrc =
  "https://maps.google.com/maps?q=Abroad%20Scholar%20Anna%20Nagar%20Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed";

const HERO_IMAGE: string = "/images/study-abroad-consultation-contact-hero.png";

const ContactPage = () => {
  const waHref = `https://wa.me/${SITE.whatsapp}`;

  const methods = [
    {
      icon: FaPhoneAlt,
      label: "Call us",
      value: SITE.phoneDisplay,
      href: `tel:${SITE.phone}`,
      sub: "Mon–Sat, 10am–7pm",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "Chat with a counsellor",
      href: waHref,
      sub: "Usually replies within minutes",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      sub: "We reply within 24 hours",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden  pt-28 pb-12 ">
          <div className="relative mx-auto max-w-7xl px-5">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* left: copy */}
              <Reveal>
                <nav className="flex items-center gap-1.5 text-xs font-medium text-slate">
                  <Link
                    href="/"
                    className="transition-colors hover:text-blue-700"
                  >
                    Home
                  </Link>
                  <span className="text-muted">/</span>
                  <span className="text-ink">Contact</span>
                </nav>

                <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Get in touch
                </span>
                <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
                  Let&apos;s talk about your{" "}
                  <span className="text-accent">study abroad plans</span>
                </h1>
                <p className="mt-5 max-w-2xl text-slate">
                  Whether you know exactly where you want to go or you&apos;re
                  just starting to explore, we&apos;re here to help. Reach out
                  any way you like your first counselling session is always
                  free.
                </p>
              </Reveal>

              {/* right: hero image */}
              <Reveal delay={0.1}>
                <div className="relative">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-line shadow-card">
                    {HERO_IMAGE ? (
                      <Image
                        src={HERO_IMAGE}
                        alt="Abroad Scholars counsellor helping a student plan their study abroad journey"
                        fill
                        priority
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-tint text-slate">
                        <div className="text-center">
                          <FaRegImage className="mx-auto text-3xl text-blue-300" />
                          <p className="mt-3 text-sm font-medium">
                            Add your hero image
                          </p>
                          <p className="mt-1 text-xs text-muted">
                            Set HERO_IMAGE at the top of this file
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              {/* left: methods */}
              <Reveal>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Reach us directly
                </h2>
                <p className="mt-3 text-slate">
                  Prefer to talk? Call or message us and a real counsellor will
                  pick up no call queues, no bots.
                </p>

                <div className="mt-8 space-y-3">
                  {methods.map((m) => (
                    <a
                      key={m.label}
                      href={m.href}
                      target={m.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        m.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-xl text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <m.icon />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-slate">
                          {m.label}
                        </p>
                        <p className="font-display font-semibold text-ink group-hover:text-blue-700">
                          {m.value}
                        </p>
                        <p className="text-xs text-slate">{m.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* address + hours */}
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-line bg-tint p-5">
                    <div className="flex items-center gap-2 text-blue-700">
                      <FaMapMarkerAlt />
                      <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                        Visit us
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {SITE.address}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-line bg-tint p-5">
                    <div className="flex items-center gap-2 text-blue-700">
                      <FaRegClock />
                      <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                        Office hours
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      Monday – Saturday
                      <br />
                      10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>

                {/* socials */}
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-sm font-medium text-slate">
                    Follow us
                  </span>
                  {[
                    {
                      icon: FaInstagram,
                      href: SITE.socials.instagram,
                      label: "Instagram",
                    },
                    {
                      icon: FaFacebookF,
                      href: SITE.socials.facebook,
                      label: "Facebook",
                    },
                    {
                      icon: FaLinkedinIn,
                      href: SITE.socials.linkedin,
                      label: "LinkedIn",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-9 w-9 place-items-center rounded-full border border-line text-slate transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <s.icon className="text-sm" />
                    </a>
                  ))}
                </div>
              </Reveal>

              {/* right: form */}
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───── Map ───── */}
        <section className="px-5 pb-16 lg:px-8 lg:pb-24">
          <Reveal className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-3xl border border-line shadow-card">
              <iframe
                src={mapSrc}
                title="Abroad Scholars office location"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-80 w-full sm:h-105"
              />
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default ContactPage;
