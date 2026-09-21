# preet-portfolio.github.io

Preet Panchal's iOS developer portfolio, live at <https://preet-portfolio.github.io>. It is also
where the apps' public pages live: each app has a showcase page, and the ones on the App Store
have a privacy policy, terms and support page that App Store Connect links to.

## Stack
Next.js 16 (App Router) with React 19, Tailwind CSS 4, framer-motion and lucide-react. It is
exported as a fully static site (`output: "export"`, `trailingSlash: true`, unoptimized images),
so there is no server and nothing to configure at runtime.

## Run and build
```sh
npm ci
npm run dev      # http://localhost:3000
npm run build    # static site into ./out; this is what CI runs
npm run lint
```

## Layout
| Path | What it is |
|---|---|
| `src/app/page.tsx` | The home page |
| `src/components/ProjectsSection.tsx` | The project cards on the home page, newest first |
| `src/app/<project>/page.tsx` | One showcase page per app (`geolens`, `deflate`, `docfort`, `auditwedge`) |
| `src/app/geolens/privacy`, `terms` | GeoLens's privacy policy and terms of use, linked from the App Store |
| `src/app/deflate/privacy`, `support` | Deflate's privacy policy and support page |
| `public/` | Icons and images served as-is |

To add a project: create `src/app/<name>/page.tsx`, add a card to `ProjectsSection.tsx`, and put
its icon in `public/`.

## Deploying
Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes
`./out` to GitHub Pages. Work on a branch and open a pull request; merging it deploys.

## Ground rules
- **This repo is public.** Never commit personal data, credentials, keys or promo codes.
- **A page never claims what the shipped app can't do.** Describe a feature or platform only
  once it is live on the App Store, not while it is in review.
- **The privacy policies are promises.** Change them only in step with what the app really does
  (GeoLens's policy also exists as `PRIVACY.md` in the app's repo).
- More detail for Claude Code is in [`CLAUDE.md`](CLAUDE.md).
