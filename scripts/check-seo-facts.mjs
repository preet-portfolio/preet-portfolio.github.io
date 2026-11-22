// Checks the facts the app pages state and put in their structured data (src/data/app-facts.json)
// against Apple's lookup for the developer account: store name, release date, minimum OS,
// primary category and price. Platforms are checked by check-apps.mjs. Exits non-zero on any
// difference, so a new release that changes one of these shows up here.
import { readFile } from "node:fs/promises";

const DEVELOPER_ID = "1874836869";
const read = async (p) => JSON.parse(await readFile(new URL(p, import.meta.url), "utf8"));
const { apps: facts } = await read("../src/data/app-facts.json");
const { items } = await read("../src/data/work.json");

const res = await fetch(`https://itunes.apple.com/lookup?id=${DEVELOPER_ID}&entity=software&limit=200`);
if (!res.ok) throw new Error(`Apple lookup failed: HTTP ${res.status}`);
const live = (await res.json()).results.filter((r) => r.wrapperType === "software");

const problems = [];
for (const item of items.filter((i) => i.group === "apps")) {
    const f = facts[item.id];
    const r = live.find((x) => String(x.trackId) === item.appStoreId);
    if (!f) { problems.push(`${item.name}: no entry in app-facts.json`); continue; }
    if (!r) { problems.push(`${item.name}: not in Apple's lookup`); continue; }
    const pairs = {
        storeName: [f.storeName, r.trackName],
        released: [f.released, r.releaseDate.slice(0, 10)],
        minimumOs: [f.minimumOs, r.minimumOsVersion],
        category: [f.category, r.primaryGenreName],
        price: [f.price, r.price],
        seller: ["Preet Panchal", r.sellerName],
    };
    const bad = Object.entries(pairs).filter(([, [ours, apple]]) => ours !== apple);
    for (const [k, [ours, apple]] of bad) problems.push(`${item.name} ${k}: site says ${JSON.stringify(ours)}, Apple says ${JSON.stringify(apple)}`);
    if (!bad.length) console.log(`ok  ${item.name}`);
}
for (const id of Object.keys(facts)) if (!items.some((i) => i.id === id && i.group === "apps")) problems.push(`app-facts.json has ${id}, which isn't in the apps group`);

if (problems.length) {
    console.error(problems.join("\n"));
    process.exit(1);
}
console.log("App facts match Apple's lookup.");
