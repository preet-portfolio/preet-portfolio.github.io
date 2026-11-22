import type { Metadata } from "next";

export const SITE = "https://preet-portfolio.github.io";
export const SITE_NAME = "Preet Panchal";

// Every page in this export, as served (with the trailing slash). The sitemap lists these and
// scripts/check-seo.mjs fails the check if ./out has a page that isn't here, or the reverse.
export const PAGES = [
    "/",
    "/about/",
    "/agitate/",
    "/deflate/",
    "/deflate/privacy/",
    "/deflate/support/",
    "/geolens/",
    "/geolens/privacy/",
    "/geolens/terms/",
    "/docfort/",
    "/join/",
    "/auditwedge/",
    "/hello-chain/",
    "/wake/",
    "/interactive-media-gallery/",
] as const;

export type PagePath = (typeof PAGES)[number];

// A page's metadata with the parts every page needs: one canonical URL (with the trailing slash
// GitHub Pages serves), and Open Graph and card tags so a shared link shows the same title and
// description. appStoreId adds Safari's App Store banner.
export function pageMeta(
    path: PagePath,
    { title, description, image, appStoreId, other }: { title: string; description: string; image?: string; appStoreId?: string; other?: Record<string, string> },
): Metadata {
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            title,
            description,
            url: path,
            siteName: SITE_NAME,
            type: "website",
            locale: "en",
            ...(image ? { images: [{ url: image }] } : {}),
        },
        twitter: { card: "summary", title, description, ...(image ? { images: [image] } : {}) },
        other: { ...(appStoreId ? { "apple-itunes-app": `app-id=${appStoreId}` } : {}), ...other },
    };
}
