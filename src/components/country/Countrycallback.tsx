"use client";

import { useState } from "react";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/lib/Constants";

type Status = "idle" | "loading" | "success" | "error";

export default function CountryCallback({ country }: { country: string }) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          destination: country,
          source: "country-page-callback",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-emerald-50 p-4 text-center">
        <FaCheckCircle className="mx-auto text-2xl text-emerald-500" />
        <p className="mt-2 text-sm font-semibold text-emerald-800">
          Thanks! A counsellor will call you back shortly.
        </p>
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
        >
          <FaWhatsapp /> Or message us now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="flex overflow-hidden rounded-xl border border-line bg-paper transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
        <span className="grid place-items-center border-r border-line bg-tint px-3 text-sm font-semibold text-slate">
          +91
        </span>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Mobile number"
          className="w-full bg-transparent px-3 py-3 text-ink outline-none placeholder:text-slate/70"
        />
      </div>
      {status === "error" && (
        <p className="text-xs font-medium text-red-600">
          Something went wrong — please try WhatsApp instead.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl bg-linear-to-r from-gold-300 to-gold-400 px-5 py-3 font-semibold text-ink shadow-lg shadow-gold-500/25 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Request a callback"}
      </button>
      <p className="text-center text-[11px] text-slate/70">
        Free &amp; no obligation. We&apos;ll never spam you.
      </p>
    </form>
  );
}
