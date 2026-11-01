// Checks every href and src in the static export (./out). Internal links must resolve to a
// file in ./out; external ones must answer with a 2xx or 3xx. Exits non-zero on any failure.
import { readdir, readFile, stat } from "node:fs/promises";
import { join, dirname } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname;
// Other GitHub Pages sites share this domain; this repo doesn't build them.
const OTHER_SITES = ["/agitate-support/", "/docfort-support/"];

async function htmlFiles(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const nested = await Promise.all(entries.map((e) => {
        const p = join(dir, e.name);
        if (e.isDirectory()) return e.name === "_next" ? [] : htmlFiles(p);
        return p.endsWith(".html") ? [p] : [];
    }));
    return nested.flat();
}

const exists = (p) => stat(p).then(() => true, () => false);

async function resolvesInternally(path) {
    const clean = decodeURIComponent(path.split(/[?#]/)[0]);
    if (clean === "" ) return true;
    const target = join(OUT, clean);
    return (await exists(join(target, "index.html"))) || (clean.endsWith("/") ? false : await exists(target));
}

const refs = new Map(); // url -> pages that use it
for (const file of await htmlFiles(OUT)) {
    const page = "/" + dirname(file.slice(OUT.length)).replace(/^\.$/, "");
    const html = await readFile(file, "utf8");
    for (const [, url] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
        if (url.startsWith("/_next/") || url.startsWith("mailto:") || url.startsWith("data:")) continue;
        const abs = url.startsWith("#") ? page + url : url;
        refs.set(abs, [...(refs.get(abs) ?? []), page]);
    }
}

const broken = [];
await Promise.all([...refs.keys()].map(async (url) => {
    if (url.startsWith("http")) {
        const site = url.match(/^https:\/\/preet-portfolio\.github\.io(\/.*)$/);
        if (site && !OTHER_SITES.some((p) => site[1].startsWith(p))) {
            if (!(await resolvesInternally(site[1]))) broken.push(url);
            return;
        }
        const res = await fetch(url, { redirect: "follow", headers: { "user-agent": "Mozilla/5.0 link-check" } }).catch(() => null);
        if (!res || res.status >= 400) broken.push(`${url} (${res?.status ?? "no response"})`);
        return;
    }
    if (!(await resolvesInternally(url))) broken.push(url);
}));

console.log(`Checked ${refs.size} distinct links across the export.`);
if (broken.length) {
    for (const b of broken) console.error(`BROKEN ${b}  ← ${refs.get(b.split(" ")[0])?.join(", ")}`);
    process.exit(1);
}
console.log("No broken links.");
