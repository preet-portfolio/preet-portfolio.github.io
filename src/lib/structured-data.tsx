import facts from "@/data/app-facts.json";
import { items, type Item } from "@/data/work";
import { SITE } from "@/lib/seo";

// Schema.org JSON-LD that tells search engines and AI models who Preet Panchal is and which
// apps are his, so apps with common names (Deflate, GeoLens, Agitate) aren't taken for other
// products. Every field comes from work.json, app-facts.json or Apple's lookup; nothing here
// may claim more than the live app does.

const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;
const DEVELOPER_PAGE = "https://apps.apple.com/developer/preet-panchal/id1874836869";

export type AppId = keyof typeof facts.apps;

export const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Preet Panchal",
    url: `${SITE}/`,
    description: "Preet Panchal builds apps for iPhone, iPad and Mac, and projects for the web.",
    sameAs: ["https://github.com/preet-portfolio", DEVELOPER_PAGE],
};

export const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE}/`,
    name: "Preet Panchal",
    publisher: { "@id": PERSON_ID },
};

// Google's names for app categories; Apple's primary genre maps onto one of them.
const CATEGORY: Record<string, string> = {
    "Photo & Video": "MultimediaApplication",
    Productivity: "UtilitiesApplication",
    Utilities: "UtilitiesApplication",
};

const OS: Record<string, string> = { iPhone: "iOS", iPad: "iPadOS", Mac: "macOS" };

function app(id: AppId) {
    return items.find((i) => i.id === id) as Item & { appStoreId: string; platforms: string[]; page: string; icon: string };
}

export function operatingSystems(id: AppId) {
    const f = facts.apps[id];
    // Apple's lookup gives the minimum iOS and iPadOS version only, so macOS goes without one.
    return app(id).platforms.map((p) => (p === "Mac" ? OS[p] : `${OS[p]} ${f.minimumOs} or later`)).join(", ");
}

// What the app is, who makes it, what it does and what data it collects, in plain sentences.
// AI answer engines quote pages close to word for word, so this says only what the live
// version does. The page shows it and the structured data carries it as the description.
export function summary(id: AppId) {
    const f = facts.apps[id];
    const a = app(id);
    const platforms = a.platforms.length > 1 ? `${a.platforms.slice(0, -1).join(", ")} and ${a.platforms.at(-1)}` : a.platforms[0];
    const [year, month] = f.released.split("-").map(Number);
    const since = new Date(Date.UTC(year, month - 1)).toLocaleString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
    return `${a.name} is ${f.kind} for ${platforms} by Preet Panchal. It has been free to download on the App Store since ${since}. ${f.does} ${f.data}`;
}

export function mobileApplication(id: AppId) {
    const f = facts.apps[id];
    const a = app(id);
    const url = SITE + a.page;
    return {
        "@type": "MobileApplication",
        "@id": `${url}#app`,
        name: a.name,
        ...(f.storeName !== a.name ? { alternateName: f.storeName } : {}),
        url,
        description: summary(id),
        image: SITE + a.icon,
        applicationCategory: CATEGORY[f.category],
        operatingSystem: operatingSystems(id),
        datePublished: f.released,
        author: { "@id": PERSON_ID },
        publisher: { "@id": PERSON_ID },
        installUrl: `https://apps.apple.com/app/id${a.appStoreId}`,
        sameAs: [`https://apps.apple.com/app/id${a.appStoreId}`],
        offers: { "@type": "Offer", price: String(f.price), priceCurrency: "USD" },
    };
}

export function JsonLd({ nodes }: { nodes: object[] }) {
    const data = { "@context": "https://schema.org", "@graph": nodes };
    // Escape "<" so no string in the data can close the script element.
    const json = JSON.stringify(data).replace(/</g, "\\u003c");
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function AppSummary({ id }: { id: AppId }) {
    return (
        <>
            <p className="mb-6 max-w-reading text-muted">{summary(id)}</p>
            <JsonLd nodes={[mobileApplication(id), person]} />
        </>
    );
}
