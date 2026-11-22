// Tells Bing, Yandex and the other IndexNow engines that pages changed, after a deploy.
// The key isn't a secret: IndexNow checks it by fetching public/<key>.txt from the site.
// Run with no arguments to submit every page in the sitemap.
const SITE = "https://preet-portfolio.github.io";
const KEY = "a6d0c544b81c648c0aa27697449b4044";

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: "preet-portfolio.github.io", key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
if (res.status >= 400) process.exit(1);
