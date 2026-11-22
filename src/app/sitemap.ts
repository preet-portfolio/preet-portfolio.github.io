import type { MetadataRoute } from "next";
import { PAGES, SITE } from "@/lib/seo";

export const dynamic = "force-static";

// No lastModified: search engines ignore it unless it is kept accurate, and nothing here
// would keep it accurate.
export default function sitemap(): MetadataRoute.Sitemap {
    return PAGES.map((path) => ({ url: SITE + path }));
}
