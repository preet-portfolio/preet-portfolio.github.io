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
  Update "Last updated" when you change one.
- **Operator name, not "verified identity".** GeoLens's name field can be typed, so copy says
  "name".

## Working here
- Static export: no server code, no API routes, no runtime environment variables.
- Branch, open a PR, merge. Merging to `main` deploys to GitHub Pages
  (`.github/workflows/deploy.yml`); watch the run and check the live page with `curl -L` (the
  site uses trailing slashes, so `/geolens/privacy` redirects to `/geolens/privacy/`).
- `npm run build` must pass before you open a PR.
- Keep the project cards in `src/components/ProjectsSection.tsx` in step with the showcase
  pages, newest work first.
- Force-pushing `main` is allowed by GitHub but rewrites what the public sees; the pull-request
  refs (`refs/pull/*`) keep the old commits reachable and only GitHub Support can clear them.

## Apps linked from here
| App | Status | App Store |
|---|---|---|
| GeoLens | Live (1.1); 1.2 in review as of 2026-09-21 | id 6779347733 |
| Deflate | See the page for its current state | — |
| DocFort, AuditWedge | See their pages | — |

When GeoLens 1.2 is live, add the front camera and promo codes to `src/app/geolens/page.tsx`
and mention that the custom logo is a Pro feature.

## Git
Imperative commit subjects with a body that says why. One change per commit.
