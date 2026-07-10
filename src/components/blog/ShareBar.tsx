"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaXTwitter,
  FaLink,
  FaCheck,
  FaShareNodes,
} from "react-icons/fa6";

export default function ShareBar({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  const enc = encodeURIComponent;
  const links = [
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${enc(`${title} ${url}`)}`,
      Icon: FaWhatsapp,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`,
      Icon: FaXTwitter,
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
      Icon: FaLinkedinIn,
    },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — ignore */
    }
  };

  const nativeShare = async () => {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* dismissed — ignore */
      }
    } else {
      copy();
    }
  };

  const btn =
    "grid h-11 w-11 place-items-center rounded-full border border-line text-slate transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 active:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-medium text-slate">Share</span>

      {/* native share on mobile, copy fallback on desktop */}
      <button
        type="button"
        onClick={nativeShare}
        aria-label="Share this article"
        className={`${btn} sm:hidden`}
      >
        <FaShareNodes />
      </button>

      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={btn}
        >
          <Icon />
        </a>
      ))}

      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Link copied" : "Copy link"}
        className={btn}
      >
        {copied ? <FaCheck className="text-emerald-600" /> : <FaLink />}
      </button>
    </div>
  );
}
