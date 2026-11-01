import data from "./work.json";

export type Group = "apps" | "projects";

export type Item = {
    id: string;
    group: Group;
    name: string;
    page: string;
    icon?: string;
    line: string;
    appStoreId?: string;
    platforms?: string[];
    since?: string;
    status?: string;
    kind?: string;
    links: { label: string; href: string }[];
};

export const items = data.items as Item[];
export const apps = items.filter((i) => i.group === "apps");
export const projects = items.filter((i) => i.group === "projects");

// App Store Connect campaign link. Both tokens are needed for the visit to show up in
// App Analytics; the provider token is the same for every app on the account.
const PROVIDER_TOKEN = "128521273";
const CAMPAIGN = "portfolio-home";

export function appStoreUrl(item: Item) {
    const query = PROVIDER_TOKEN ? `?pt=${PROVIDER_TOKEN}&ct=${CAMPAIGN}&mt=8` : "";
    return `https://apps.apple.com/app/id${item.appStoreId}${query}`;
}

// Where a showcase page's "Back to Portfolio" link lands: the group the item is in.
export function backHref(id: string) {
    const item = items.find((i) => i.id === id);
    return `/#${item?.group ?? "apps"}`;
}

export function sinceLabel(since: string) {
    const [year, month] = since.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1)).toLocaleString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" });
}
