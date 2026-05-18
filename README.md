# MGM Builders Redesign

Premium contractor website for **MGM Builders LLC** — Central Florida's state-certified building contractor. Built by SELLF LLC / Nate Latimer.

---

## Project Overview

A high-end single-page marketing website for Doug Oliver's MGM Builders LLC. The design language is inspired by architectural drafting — blueprint grid paper texture, Bebas Neue all-caps mechanical lettering, and a deep navy + warm amber palette extracted from the hero construction video.

**Client:** Doug Oliver — MGM Builders LLC  
**License:** CBC-1263736 (FL State Certified Building Contractor)  
**Phone:** (407) 542-4797  
**Address:** 121 S Orange Ave #1500, Orlando, FL 32801

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui (Radix UI) |
| Language | TypeScript |
| Package Manager | pnpm |
| Routing | Wouter |
| Icons | Lucide React |

This is a **static frontend-only** project. There is no backend server, database, or authentication. All content is hardcoded in the component.

---

## Project Structure

```
mgm-builders/
├── client/
│   ├── index.html              ← HTML entry point, Google Fonts imports
│   └── src/
│       ├── App.tsx             ← Root component, ThemeProvider, routing
│       ├── main.tsx            ← React entry point
│       ├── index.css           ← Global design system (tokens, grid paper, animations)
│       └── pages/
│           └── Home.tsx        ← MAIN FILE — entire homepage (all sections)
├── assets/
│   ├── mgm-builders-logo.png   ← Official MGM Builders logo (white version)
│   ├── mgm-hero-video.mp4      ← Hero background video (blueprint-to-built animation)
│   └── screenshots/            ← Design preview screenshots
├── shared/
│   └── const.ts                ← Shared constants (placeholder)
├── server/
│   └── index.ts                ← Placeholder (not used — static project)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## How to Run Locally

**Prerequisites:** Node.js 18+ and pnpm installed.

```bash
# 1. Clone the repo
git clone https://github.com/nvatomate007/mgm-builders-redesign.git
cd mgm-builders-redesign

# 2. Install dependencies
pnpm install

# 3. Set up environment variables (see below)
cp .env.example .env
# Edit .env with your values

# 4. Start the dev server
pnpm dev
# → Opens at http://localhost:3000
```

---

## How to Build

```bash
pnpm build
# Output: dist/public/
```

The build output is a static site in `dist/public/`. This folder can be deployed to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

---

## How to Deploy

### Option A — Netlify (Recommended for quick client preview)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy from dist/public
pnpm build
netlify deploy --dir=dist/public --prod
```

Or drag-and-drop the `dist/public` folder at [app.netlify.com](https://app.netlify.com).

### Option B — Vercel

```bash
npm install -g vercel
pnpm build
vercel --prod
# Set output directory to: dist/public
```

### Option C — GitHub Pages

```bash
# After building:
pnpm build
# Push dist/public contents to gh-pages branch
```

### Option D — Manus Built-in Hosting

If continuing inside Manus, use the Publish button in the Management UI after saving a checkpoint.

---

## Environment Variables

The dev server requires Manus storage credentials to proxy the logo and video assets. For deployment outside Manus, replace the `/manus-storage/` paths in `Home.tsx` with direct URLs or local asset paths.

| Variable | Purpose | Required |
|---|---|---|
| `BUILT_IN_FORGE_API_URL` | Manus storage proxy base URL | Dev only |
| `BUILT_IN_FORGE_API_KEY` | Manus storage proxy auth key | Dev only |

**For standalone deployment:** The logo and video files are included in `assets/`. Update `Home.tsx` lines 20–21:

```ts
// Replace these Manus-storage paths:
const LOGO_URL = '/manus-storage/mgm_builders-logo_1c67ec7e.png';
const VIDEO_URL = '/manus-storage/MGMFINALVIDEO_7b0116e2.mp4';

// With direct asset paths (after copying assets to client/public/):
const LOGO_URL = '/assets/mgm-builders-logo.png';
const VIDEO_URL = '/assets/mgm-hero-video.mp4';
```

Then copy the `assets/` folder into `client/public/assets/` before building.

---

## Where Key Content Lives

All homepage content — copy, contact info, services, testimonials, and layout — lives in a single file:

**`client/src/pages/Home.tsx`**

Key constants at the top of the file (lines 14–22):

```ts
const PHONE = '(407) 542-4797';
const LICENSE = 'CBC-1263736';
const ADDRESS = '121 S Orange Ave #1500, Orlando, FL 32801';
const HOURS = 'Mon–Fri 8am–8pm  |  Sat–Sun 10am–6pm';
const LOGO_URL = '/manus-storage/mgm_builders-logo_1c67ec7e.png';
const VIDEO_URL = '/manus-storage/MGMFINALVIDEO_7b0116e2.mp4';
const WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/placeholder/mgm-builders/';
```

---

## How to Update Copy

All text content is in `client/src/pages/Home.tsx`. Key data arrays:

- **`SERVICES`** (line ~30) — service cards (title, description, icon, subtypes)
- **`STATS`** (line ~70) — stats bar numbers and labels
- **`PROCESS_STEPS`** (line ~90) — 4-step process section
- **`TESTIMONIALS`** (line ~110) — client review quotes
- **`OWNERS`** (line ~130) — owner bios (Doug Oliver, Rene Dube)

---

## How to Swap Forms / Contact Links

The contact form posts to a Zapier webhook. To connect it to a real destination:

1. Create a Zapier Catch Hook (or use Formspree, Netlify Forms, etc.)
2. Update `WEBHOOK_URL` at the top of `Home.tsx`
3. The form submits: `name`, `phone`, `email`, `service`, `message`

---

## Design System

The full design system is in `client/src/index.css`:

- **Colors:** Blueprint navy `#0A1B3F`, amber `#E6A822`, off-white `#F4F2EE`
- **Fonts:** Bebas Neue (display/accent), Source Sans 3 (body), Courier Prime (mono labels)
- **Textures:** `.grid-paper` (light drafting grid), `.grid-paper-dark` (navy grid)
- **Animations:** IntersectionObserver-triggered `.animate-fade-up` with `.stagger-children`

---

## Design Consistency Notes for TrashMax / DougABomb

These design patterns from MGM Builders should be considered for the broader Doug Oliver brand family:

- The **amber + navy** palette is MGM-specific. TrashMax should use a distinct palette (suggest: industrial orange + charcoal, or safety yellow + dark slate).
- The **drafting grid paper** texture is an MGM signature. Do not reuse it verbatim for TrashMax — it would dilute the brand distinction.
- The **Bebas Neue** all-caps heading style works well across contractor brands and can be reused.
- The **sticky bottom CTA bar** (Call Now | Free Estimate) pattern is highly effective and should be reused for TrashMax.
- The **section structure** (hero → stats → services → about → process → reviews → contact → footer) is a proven layout for contractor sites and can be templated.
- The **IntersectionObserver scroll animation** pattern in `Home.tsx` is reusable — copy the `useEffect` block.

---

## Known Issues / Dependencies

1. **Manus storage proxy** — The logo and video use `/manus-storage/` paths that require Manus environment variables. For standalone deployment, swap to local asset paths (see Environment Variables section above).
2. **Contact form webhook** — Currently points to a placeholder Zapier URL. Must be updated before going live.
3. **No secrets committed** — No API keys, credentials, or private data are in this repo.

---

## Build / Deploy Summary

| Item | Value |
|---|---|
| Build command | `pnpm build` |
| Output directory | `dist/public` |
| Framework | Vite (static) |
| Node version | 18+ |
| Package manager | pnpm |
| Manus-specific deps | Storage proxy (dev only, replaceable) |
