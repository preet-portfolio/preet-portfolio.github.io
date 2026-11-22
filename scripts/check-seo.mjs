// Audits what crawlers get from every page in the static export (./out): title, description,
// canonical, Open Graph, JSON-LD types, the App Store banner tag and the h1. With --live it
// also fetches each page from the live site, without and with its trailing slash, and records
// the status and redirect chain. --json prints the rows; otherwise it prints a table and exits
// non-zero on any problem a crawler would trip over.
import { readdir, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";

const SITE = "https://preet-portfolio.github.io";
const OUT = new URL("../out/", import.meta.url).pathname;
const live = process.argv.includes("--live");
const asJson = process.argv.includes("--json");

async function htmlFiles(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const nested = await Promise.all(entries.map((e) => {
        const p = join(dir, e.name);
        if (e.isDirectory()) return e.name === "_next" ? [] : htmlFiles(p);
        return p.endsWith("index.html") ? [p] : [];
    }));
    return nested.flat();
}

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
const metaTags = (html) => [...html.matchAll(/<meta\s[^>]*>/g)].map((m) => m[0]);
const meta = (html, key) => {
    const tag = metaTags(html).find((t) => attr(t, "name") === key || attr(t, "property") === key);
    return tag ? attr(tag, "content") : undefined;
};
const decode = (s) => s?.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

function jsonLdTypes(html) {
    const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    const types = [];
    for (const [, body] of blocks) {
        try {
            const data = JSON.parse(body);
            const nodes = data["@graph"] ?? (Array.isArray(data) ? data : [data]);
            types.push(...nodes.map((n) => n["@type"]));
        } catch {
            types.push("INVALID JSON");
        }
    }
    return types;
}

async function chain(url) {
    const hops = [];
    for (let i = 0; i < 5; i++) {
        const res = await fetch(url, { redirect: "manual", headers: { "user-agent": "Mozilla/5.0 seo-check" } }).catch(() => null);
        if (!res) { hops.push("no response"); break; }
        hops.push(String(res.status));
        const next = res.headers.get("location");
        if (res.status < 300 || res.status >= 400 || !next) break;
        url = new URL(next, url).href;
    }
    return hops.join(" → ");
}

const rows = [];
for (const file of (await htmlFiles(OUT)).sort()) {
    const dir = dirname(file.slice(OUT.length));
    const path = dir === "." ? "/" : `/${dir}/`;
    if (path === "/404/" || path === "/_not-found/") continue;
    const html = await readFile(file, "utf8");
    const row = {
        path,
        title: decode(html.match(/<title>([^<]*)<\/title>/)?.[1]),
        description: decode(meta(html, "description")),
        canonical: [...html.matchAll(/<link\s[^>]*rel="canonical"[^>]*>/g)].map((m) => attr(m[0], "href")),
        ogTitle: decode(meta(html, "og:title")),
        ogImage: meta(html, "og:image"),
        jsonLd: jsonLdTypes(html),
        appBanner: meta(html, "apple-itunes-app"),
        robots: meta(html, "robots"),
        h1: (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/g) ?? []).map((h) => decode(h.replace(/<[^>]+>/g, "").trim())),
    };
    if (live) {
        row.liveSlash = await chain(SITE + path);
        if (path !== "/") row.liveNoSlash = await chain(SITE + path.slice(0, -1));
    }
    rows.push(row);
}

if (asJson) {
    console.log(JSON.stringify(rows, null, 2));
    process.exit(0);
}

const problems = [];
const titles = new Map();
const descriptions = new Map();
for (const r of rows) {
    if (!r.title) problems.push(`${r.path}: no <title>`);
    if (!r.description) problems.push(`${r.path}: no meta description`);
    if (r.canonical.length !== 1) problems.push(`${r.path}: ${r.canonical.length} canonical links`);
    else if (r.canonical[0] !== SITE + r.path) problems.push(`${r.path}: canonical is ${r.canonical[0]}`);
    if (r.h1.length !== 1) problems.push(`${r.path}: ${r.h1.length} h1 elements`);
    if (r.jsonLd.includes("INVALID JSON")) problems.push(`${r.path}: JSON-LD that doesn't parse`);
    if (r.robots?.includes("noindex")) problems.push(`${r.path}: noindex`);
    if (live && r.liveSlash !== "200") problems.push(`${r.path}: live answers ${r.liveSlash}`);
    titles.set(r.title, [...(titles.get(r.title) ?? []), r.path]);
    descriptions.set(r.description, [...(descriptions.get(r.description) ?? []), r.path]);
}
// The sitemap must list exactly the pages in the export, and robots.txt must point to it.
const sitemap = await readFile(join(OUT, "sitemap.xml"), "utf8").catch(() => "");
const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const r of rows) if (!listed.includes(SITE + r.path)) problems.push(`${r.path}: not in sitemap.xml`);
for (const url of listed) if (!rows.some((r) => SITE + r.path === url)) problems.push(`sitemap.xml lists ${url}, which isn't in the export`);
const robots = await readFile(join(OUT, "robots.txt"), "utf8").catch(() => "");
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) problems.push("robots.txt doesn't point to the sitemap");

for (const [t, paths] of titles) if (t && paths.length > 1) problems.push(`Same title on ${paths.join(", ")}`);
for (const [d, paths] of descriptions) if (d && paths.length > 1) problems.push(`Same description on ${paths.join(", ")}`);

for (const r of rows) {
    console.log(`${r.path}\n  title  ${r.title}\n  canon  ${r.canonical.join(", ") || "—"}\n  ld     ${r.jsonLd.join(", ") || "—"}${r.appBanner ? `\n  banner ${r.appBanner}` : ""}${live ? `\n  live   ${r.liveSlash}${r.liveNoSlash ? `  (no slash: ${r.liveNoSlash})` : ""}` : ""}`);
}
console.log(`\n${rows.length} pages checked.`);
if (problems.length) {
    console.error(problems.map((p) => `PROBLEM ${p}`).join("\n"));
    process.exit(1);
}
console.log("No problems.");
