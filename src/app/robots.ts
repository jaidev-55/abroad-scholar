import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// If you already have robots.ts, keep yours and just make sure the
// sitemap URL is listed. Add disallow rules here if needed.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
