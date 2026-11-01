// Checks that the home page's apps group is exactly what Apple lists as live for the
// developer account: same apps, same platforms. Exits non-zero on any difference.
import { readFile } from "node:fs/promises";

const DEVELOPER_ID = "1874836869";
const { items } = JSON.parse(await readFile(new URL("../src/data/work.json", import.meta.url), "utf8"));

const res = await fetch(`https://itunes.apple.com/lookup?id=${DEVELOPER_ID}&entity=software&limit=200`);
if (!res.ok) throw new Error(`Apple lookup failed: HTTP ${res.status}`);
const live = (await res.json()).results.filter((r) => r.wrapperType === "software");

// Apple lists devices by model; reduce them to the platform names the site shows.
const platformsOf = (devices) =>
    ["iPhone", "iPad", "Mac"].filter((p) => devices.some((d) => d.startsWith(p === "Mac" ? "MacDesktop" : p)));

const problems = [];
const apps = items.filter((i) => i.group === "apps");
for (const r of live) {
    const app = apps.find((a) => a.appStoreId === String(r.trackId));
    if (!app) { problems.push(`Live on the App Store but not in the apps group: ${r.trackName} (${r.trackId})`); continue; }
    const want = platformsOf(r.supportedDevices).join(", ");
    if (app.platforms.join(", ") !== want) problems.push(`${app.name}: site says ${app.platforms.join(", ")}, Apple says ${want}`);
    console.log(`ok  ${app.name.padEnd(10)} ${r.trackId}  ${want}`);
}
for (const app of apps) {
    if (!live.some((r) => String(r.trackId) === app.appStoreId)) problems.push(`In the apps group but not live on the App Store: ${app.name}`);
}

if (problems.length) {
    console.error(problems.join("\n"));
    process.exit(1);
}
console.log(`Apps group matches Apple's live list (${live.length} apps).`);
