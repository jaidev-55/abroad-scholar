"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { SITE, DESTINATIONS } from "@/lib/Constants";

type Status = "idle" | "loading" | "success" | "error";

const CTASection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    company: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function update(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.company) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "homepage-cta" }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-slate/70 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <section id="contact" className="relative bg-paper py-20 ">
      <div className="mx-auto max-w-7xl px-5 ">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-navy via-navy to-navy-deep p-7 shadow-soft sm:p-10">
            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Left: pitch + quick contact */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                  Free · No obligation
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-cloud sm:text-4xl">
                  Your 2026 intake starts with one{" "}
                  <span className="text-gold-gradient">conversation</span>
                </h2>
                <p className="mt-4 max-w-md text-muted">
                  Tell us a little about yourself and a counsellor will map out
                  a clear, honest plan — your courses, budget and visa, at no
                  cost.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {[
                    "A dedicated counsellor, not a call queue",
                    "Reply within 24 hours",
                    "Guidance from shortlist to landing",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2.5 text-sm text-cloud/90"
                    >
                      <FaCheckCircle className="shrink-0 text-gold-400" />
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <motion.a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg"
                  >
                    <FaWhatsapp className="text-lg" />
                    WhatsApp us
                  </motion.a>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-cloud transition-colors hover:border-gold-400/50 hover:text-gold-400"
                  >
                    <FaPhoneAlt className="text-xs" />
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Right: lead form / success state */}
              <div className="rounded-3xl bg-paper p-6 shadow-soft sm:p-8">
                {status === "success" ? (
                  <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-3xl text-emerald-500">
                      <FaCheckCircle />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-ink">
                      Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}!
                      🎉
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-slate">
                      Your request is in. A counsellor will call you within 24
                      hours. Prefer to talk now?
                    </p>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
                    >
                      <FaWhatsapp /> Message us on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">
                        Book your free counselling
                      </h3>
                      <p className="mt-1 text-sm text-slate">
                        Takes 30 seconds. No spam, ever.
                      </p>
                    </div>

                    {/* honeypot */}
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.company}
                      onChange={update("company")}
                      className="hidden"
                      aria-hidden
                    />

                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={form.name}
                      onChange={update("name")}
                      className={inputCls}
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp number"
                      value={form.phone}
                      onChange={update("phone")}
                      className={inputCls}
                    />
                    <input
                      type="email"
                      placeholder="Email (optional)"
                      value={form.email}
                      onChange={update("email")}
                      className={inputCls}
                    />
                    <select
                      required
                      value={form.destination}
                      onChange={update("destination")}
                      className={`${inputCls} ${form.destination ? "text-ink" : "text-slate/70"}`}
                    >
                      <option value="" disabled>
                        Preferred destination
                      </option>
                      {DESTINATIONS.map((d) => (
                        <option
                          key={d.country}
                          value={d.country}
                          className="text-ink"
                        >
                          {d.country}
                        </option>
                      ))}
                      <option value="Not sure yet" className="text-ink">
                        Not sure yet
                      </option>
                    </select>

                    {status === "error" && (
                      <p className="text-sm font-medium text-red-600">
                        Something went wrong. Please try WhatsApp or call us.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-gold-300 to-gold-400 px-6 py-3.5 font-semibold text-ink shadow-lg shadow-gold-500/25 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        "Sending…"
                      ) : (
                        <>
                          Get my free plan
                          <FaPaperPlane className="text-sm" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate">
                      By submitting you agree to be contacted about your
                      enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
