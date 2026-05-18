# TrashMax Redesign — Handoff Notes from MGM Builders

**Prepared by:** SELLF LLC / Manny  
**Date:** May 17, 2026  
**Context:** MGM Builders redesign is secured and approved. TrashMax is next.

---

## What to Reuse from MGM Builders

The following patterns from MGM Builders are proven, reusable, and should be templated for TrashMax:

| Pattern | File | Notes |
|---|---|---|
| Sticky bottom CTA bar | `Home.tsx` (bottom of component) | "Call Now / Free Estimate" pattern converts well for service businesses |
| IntersectionObserver scroll animations | `Home.tsx` (useEffect block) | Copy the entire `useEffect` — it's clean and dependency-free |
| Section structure | `Home.tsx` | Hero → Stats → Services → About → Process → Reviews → Contact → Footer is a proven contractor layout |
| Bebas Neue all-caps headings | `index.html` (Google Fonts) + `index.css` | Works well for any trades/contractor brand |
| Contact form with webhook | `Home.tsx` (form section) | Reuse the form structure; just update `WEBHOOK_URL` |
| Constants block at top of file | `Home.tsx` (lines 14–22) | Keep all editable content (phone, address, copy) at the top |

---

## What Must Be Different for TrashMax

TrashMax serves a different market (waste management / dumpster rental) and must have a visually distinct identity from MGM Builders. Do not reuse these elements verbatim:

**Color Palette — Do Not Reuse Navy + Amber**  
MGM's blueprint navy + amber is an architect/contractor signature. TrashMax should use a palette that communicates industrial efficiency and reliability. Suggested direction: **safety orange + dark charcoal + off-white**, or **forest green + black + bright yellow**. Pull the palette from TrashMax's existing brand assets if available.

**Texture — Do Not Reuse Drafting Grid Paper**  
The drafting grid is MGM's signature. TrashMax should use a different texture — consider a subtle concrete/asphalt texture, a diagonal stripe industrial pattern, or a clean flat dark background.

**Hero Video / Image**  
TrashMax needs its own hero asset. A time-lapse of a dumpster delivery, a job site cleanup, or a before/after waste removal sequence would be ideal. Do not reuse the MGM construction animation.

**Typography Accent**  
Bebas Neue can be reused, but consider pairing it with a different body font (e.g., Barlow Condensed, Oswald, or Roboto Condensed) to create a distinct personality.

---

## Files to Reference

| File | Purpose |
|---|---|
| `client/src/pages/Home.tsx` | Full homepage template — copy structure, update content |
| `client/src/index.css` | Design system — copy animation classes, update colors/textures |
| `client/index.html` | Font imports — update Google Fonts link for new font stack |
| `assets/` | Asset backup pattern — replicate for TrashMax assets |
| `README.md` | README template — copy structure, update for TrashMax |

---

## What Not to Duplicate

- Do not copy the MGM logo, phone number, address, license number, or owner bios.
- Do not copy the service list (Roofing, Siding, Windows, Doors — these are MGM-specific).
- Do not copy the drafting grid CSS classes (`.grid-paper`, `.grid-paper-dark`) without redesigning them.
- Do not use the same hero video or any MGM visual assets.

---

## Recommended TrashMax Stack

Same as MGM Builders — no changes needed:

- React 19 + Vite + Tailwind CSS 4
- shadcn/ui for UI components
- pnpm as package manager
- GitHub repo: `nvatomate007/trashmax-redesign` (suggested)
- Deploy: GitHub Pages (same workflow as MGM)

---

## Pre-Start Checklist for TrashMax

Before writing a single line of TrashMax code, confirm:

- [ ] TrashMax logo file received from client
- [ ] TrashMax hero video or hero image received (or brief given for generation)
- [ ] TrashMax color palette confirmed (or extracted from existing brand)
- [ ] TrashMax service list confirmed (dumpster sizes, rental periods, service areas)
- [ ] TrashMax contact info confirmed (phone, address, service area)
- [ ] TrashMax existing website URL reviewed for copy reference
- [ ] Form destination confirmed (Zapier webhook, email, or CRM)

---

## Design Consistency Across the Doug Oliver Brand Family

Doug Oliver owns both MGM Builders and TrashMax. If these sites will ever be cross-linked or presented together, maintain these shared elements for brand family cohesion:

- Bebas Neue as the display font (can be shared)
- Sticky bottom CTA bar pattern (can be shared)
- Section structure and scroll animation behavior (can be shared)
- Professional photography/video quality standard (must be maintained)

The two sites should feel like they come from the same design studio but serve different audiences — a homeowner looking for a contractor vs. a contractor or property manager looking for waste removal.
