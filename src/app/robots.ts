import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export const dynamic = "force-static";

// This repo is the root of preet-portfolio.github.io, so this file also covers the other
// GitHub Pages sites under it (agitate-support, docfort-support, football-analytics-sql).
// Everything is open to every crawler, AI crawlers included: being read is the point.
export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${SITE}/sitemap.xml`,
    };
}
