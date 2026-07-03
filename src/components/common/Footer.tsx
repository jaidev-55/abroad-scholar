import { SITE, NAV, DESTINATIONS } from "@/lib/Constants";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-navy-deep text-cloud">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-gold-300 to-gold-400 text-ink">
                <FaGraduationCap className="text-xl" />
              </span>
              <span className="font-display text-lg font-extrabold">
                Abroad <span className="text-gold-gradient">Scholars</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              International education experts helping students reach top global
              universities. Trusted since {SITE.since}.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: FaInstagram, href: SITE.socials.instagram },
                { Icon: FaFacebookF, href: SITE.socials.facebook },
                { Icon: FaLinkedinIn, href: SITE.socials.linkedin },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-muted transition-colors hover:border-gold-400/50 hover:text-gold-400"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cloud">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-muted transition-colors hover:text-gold-400"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cloud">
              Destinations
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {DESTINATIONS.slice(0, 6).map((d) => (
                <li key={d.country}>
                  <a
                    href="#destinations"
                    className="text-muted transition-colors hover:text-gold-400"
                  >
                    {d.country}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (NAP) */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cloud">
              Visit us
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm text-muted">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-gold-400" />
                <span>{SITE.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold-400"
                >
                  <FaPhoneAlt className="shrink-0 text-gold-400" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold-400"
                >
                  <FaEnvelope className="shrink-0 text-gold-400" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-gold-400">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-gold-400">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
