"use client";

import { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/lib/Constants";

const DESTINATIONS = [
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Germany",
  "Ireland",
  "New Zealand",
  "France",
  "Dubai",
  "Singapore",
  "Malta",
  "Not sure yet",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    message: "",
    company: "", // honeypot
  });
  const [status, setStatus] = useState<Status>("idle");

  function update(key: keyof typeof form) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.company) return; // bot
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact-page" }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-slate/70 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-line bg-paper p-8 text-center shadow-card">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-3xl text-emerald-500">
          <FaCheckCircle />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-ink">
          Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}! 🎉
        </h3>
        <p className="mt-2 max-w-xs text-sm text-slate">
          Your message is in. A counsellor will get back to you within 24 hours.
          Prefer to talk now?
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
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-line bg-paper p-6 shadow-card sm:p-8"
    >
      <h2 className="font-display text-xl font-bold text-ink">
        Send us a message
      </h2>
      <p className="mt-1 text-sm text-slate">
        Fill this in and we&apos;ll call you back. No spam, ever.
      </p>

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

      <div className="mt-5 space-y-4">
        <input
          type="text"
          required
          placeholder="Full name"
          value={form.name}
          onChange={update("name")}
          className={inputCls}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="tel"
            required
            placeholder="Phone / WhatsApp"
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
        </div>
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
            <option key={d} value={d} className="text-ink">
              {d}
            </option>
          ))}
        </select>
        <textarea
          rows={4}
          placeholder="Tell us what you're planning (optional)"
          value={form.message}
          onChange={update("message")}
          className={`${inputCls} resize-none`}
        />

        {status === "error" && (
          <p className="text-sm font-medium text-red-600">
            Something went wrong. Please try WhatsApp or call us instead.
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
              Send message
              <FaPaperPlane className="text-sm" />
            </>
          )}
        </button>
        <p className="text-center text-xs text-slate">
          By submitting you agree to be contacted about your enquiry.
        </p>
      </div>
    </form>
  );
}
