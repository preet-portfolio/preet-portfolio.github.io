# preet-portfolio.github.io — Project memory

A public, static Next.js portfolio and the home of the apps' showcase, privacy and support
pages. See `README.md` for the stack, layout and commands.

## Non-negotiables
- **Public repo: no personal data, ever.** No addresses, coordinates, real photos of homes,
  credentials, keys or promo codes — in code, copy, images or commit messages. (A real home
  address once sat in this repo's history and needed a history rewrite plus a GitHub Support
  request. Mock-ups use a public landmark: Sabarmati Riverfront, Ahmedabad.)
- **Never claim what the shipped app can't do.** Show a feature or a platform only once it is
  live on the App Store. While a version is in review, the page keeps describing the live one.
- **Privacy policies must match the app.** Edit `src/app/geolens/privacy/page.tsx` in step with
  `PRIVACY.md` in the GeoLens repo, and `src/app/deflate/privacy/page.tsx` with Deflate's.
  Agitate's privacy policy and terms live only in the agitate-support site; link there.
  Update "Last updated" when you change one.
- **Operator name, not "verified identity".** GeoLens's name field can be typed, so copy says
  "name".

## Working here
- Static export: no server code, no API routes, no runtime environment variables.
- Branch, open a PR, merge. Merging to `main` deploys to GitHub Pages
  (`.github/workflows/deploy.yml`); watch the run and check the live page with `curl -L` (the
  site uses trailing slashes, so `/geolens/privacy` redirects to `/geolens/privacy/`).
- `npm run build` must pass before you open a PR.
- The home page's two groups come from `src/data/work.json`, newest work first. An item is in
  `"apps"` only while Apple's lookup for developer 1874836869 lists it; everything else is
  `"projects"`. `npm run check:apps` compares the file with Apple, and `npm run check:links`
  checks `./out` after a build.
- Force-pushing `main` is allowed by GitHub but rewrites what the public sees; the pull-request
  refs (`refs/pull/*`) keep the old commits reachable and only GitHub Support can clear them.

## Apps linked from here
| App | Status | App Store |
|---|---|---|
| Agitate | Live (1.1) as of 2026-11-01 | id 6823962224 |
| GeoLens | Live (1.5) as of 2026-11-01 | id 6779347733 |
| Deflate | Live (1.0) as of 2026-11-01; iPhone, iPad and Mac | id 6806356565 |
| DocFort | Live (1.5) as of 2026-11-01 | id 6759193013 |
| AuditWedge | Not on the App Store | — |

Apple's lookup (`npm run check:apps`) is the source for versions; update this table from it.

GeoLens 1.2 and later are live, but `src/app/geolens/page.tsx` doesn't yet mention the front
camera, promo codes or that the custom logo is a Pro feature. Check each against the shipped
app before adding it.

## Git
Imperative commit subjects with a body that says why. One change per commit.
