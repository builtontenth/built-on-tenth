# Built on Tenth — v2.0

Revenue intelligence website for HVAC, roofing, and plumbing companies.

## Stack
- **Framework:** Astro 4 (static output)
- **Hosting:** Vercel (free tier)
- **Fonts:** DM Serif Display + IBM Plex Mono + IBM Plex Sans (Google Fonts)
- **Images:** Unsplash CDN (replace with self-hosted for production)

## Pages
| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/pages/index.astro` | Homepage |
| `/services` | `src/pages/services.astro` | 3 service tiers |
| `/about` | `src/pages/about.astro` | Founder story, methodology |
| `/newsletter` | `src/pages/newsletter.astro` | Subscribe + recent issues |
| `/apply` | `src/pages/apply.astro` | Application form |
| `/tools` | `src/pages/tools/index.astro` | All 5 tools listed |
| `/insights` | `src/pages/insights/index.astro` | Articles hub |

## Design System
All CSS variables in `src/styles/global.css`:
- `--teal: #00C49A` — primary accent
- `--bg: #090C0B` — background
- `--ink: #E2DDD0` — primary text
- `--serif: 'DM Serif Display'` — headlines
- `--mono: 'IBM Plex Mono'` — numbers/labels
- `--sans: 'IBM Plex Sans'` — body

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`

## Deploy to Vercel

1. Push this repo to GitHub (replace the existing code at builtontenth/built-on-tenth)
2. Connect to Vercel — it auto-detects Astro
3. Deploy — build command is `astro build`, output is `dist/`

No environment variables needed for the static build.

## Images

All images currently use Unsplash URLs. For production reliability:
1. Download each image once
2. Save to `public/images/`
3. Replace Unsplash URLs with `/images/filename.jpg`

The `onerror` fallback on each `<img>` tag ensures graceful degradation if an image fails to load.

## Adding Articles

Create files in `src/pages/insights/` as `.astro` or `.md` files.
Use the Layout component with `active="insights"`.

## Forms

The apply and newsletter forms currently use client-side JS only.
To wire them to a real backend, connect to your Beehiiv API for newsletter
and any form handler (Formspree, Netlify Forms, or custom) for the apply form.
