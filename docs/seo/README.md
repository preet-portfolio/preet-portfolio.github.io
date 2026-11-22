# Search and AI-answer baseline

Goal: make this site the canonical, citable source for questions about Preet Panchal and his
apps, for Google, Bing and AI answer engines. This folder holds what the site looked like to a
crawler before the change, what it looks like after, and the fixed question set to re-run.

| File | What it is |
|---|---|
| `baseline-pages.json` | Every page in `./out` and on the live site on 2026-11-22, before the change (`npm run check:seo -- --live --json`) |
| `after-pages.json` | The same, from the export after the change |
| `baseline-apple-lookup.json` | Apple's lookup for developer 1874836869 on 2026-11-22: the source of the store facts |
| `questions.md` | The 22 target questions, their right answers and how to score a run |
| `answers-YYYY-MM-DD.md` | One file per run of the questions through the engines (none yet; see below) |

## Before and after, per page

Canonical, Open Graph, JSON-LD and App Store banner: export before → export after. Live: the
status with the trailing slash / without it, before the change.

| Page | Canonical | Open Graph | JSON-LD | Banner | Live |
|---|---|---|---|---|---|
| `/` | none → yes | none → yes | none → WebSite, Person | — | 200 / — |
| `/about/` | none → yes | none → yes | none → ProfilePage | — | 200 / 301 → 200 |
| `/agitate/` | none → yes | none → yes | none → MobileApplication, Person | — → yes | 200 / 301 → 200 |
| `/deflate/` | none → yes | none → yes | none → MobileApplication, Person | — → yes | 200 / 301 → 200 |
| `/deflate/privacy/` | none → yes | none → yes | none | — | 200 / 301 → 200 |
| `/deflate/support/` | none → yes | none → yes | none | — | 200 / 301 → 200 |
| `/geolens/` | none → yes | none → yes | none → MobileApplication, Person | — → yes | 200 / 301 → 200 |
| `/geolens/privacy/` | none → yes | none → yes | none | — | 200 / 301 → 200 |
| `/geolens/terms/` | none → yes | none → yes | none | — | 200 / 301 → 200 |
| `/docfort/` | none → yes | none → yes | none → MobileApplication, Person | — → yes | 200 / 301 → 200 |
| `/join/` | none → yes | none → yes | none | yes | 200 / 301 → 200 |
| `/auditwedge/` | none → yes | none → yes | none | — | 200 / 301 → 200 |
| `/hello-chain/` | none → yes | none → yes | none | — | 200 / 301 → 200 |
| `/wake/` | none → yes | none → yes | none | — | 200 / 301 → 200 |
| `/interactive-media-gallery/` | none → yes | none → yes | none | — | 200 / 301 → 200 |

Site-wide: `robots.txt` and `sitemap.xml` were 404 and are now built; unknown paths answer 404,
as before; the four live app pages open with a plain sentence saying what the app is, who makes
it, what it does and what it collects.

## Checks

- `npm run check:seo` — canonical, title, description, one h1, JSON-LD parses, sitemap matches
  the pages, robots.txt points to it. Add `-- --live` for status and redirect chains.
- `npm run check:seo-facts` — the store facts on the app pages against Apple's lookup.
- `npm run check:apps`, `npm run check:links` — as before.
- `npm run indexnow` — after a deploy, tells Bing and the other IndexNow engines about every
  page in the sitemap.

## Known limits

- **No rich result for the apps.** Google shows a software-app rich result only with a rating
  or reviews, and none of the apps has a rating yet. The structured data still names the apps
  and their maker; it won't make stars appear.
- **Agitate and DocFort have no developer website set in App Store Connect.** Apple lists one
  (`sellerUrl`) for GeoLens and Deflate, pointing to their pages here. Setting it for the other
  two ties the App Store listing back to this site from Apple's side.
- **One `robots.txt` for the whole domain.** The other GitHub Pages sites under this domain
  (agitate-support, docfort-support, football-analytics-sql) are covered by this repo's
  `robots.txt`, and aren't in this sitemap.
- `llms.txt` was left out: no major engine has said it reads one.

## Not verified yet

- The AI-answer baseline (`answers-YYYY-MM-DD.md`) hasn't been recorded. It has to be recorded
  before this change is merged, or it isn't a baseline.
- Schema.org validator and Rich Results Test: to run against the live URLs after deploy.
- Search Console and Bing Webmaster Tools: need verification codes from the sign-up.
- Indexing and citation: only measurable 4–8 weeks after deploy.
