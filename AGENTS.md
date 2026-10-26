<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent Guidelines & Project Architecture: PowderPilot Japan

**PowderPilot Japan** (`powderpilot-japan`) is a premium, mobile-first Next.js ski & snowboard guide for Japan's powder resorts. This file is the shared context for every AI agent working here (OpenCode, Codex, Antigravity, DSH). `OPENCODE.md` is the OpenCode-specific quickstart.

> **Verified snapshot: 2026-10-26, `main` @ `cdaf8a9`.** Facts below were checked against the code (type-check and production build pass). If newer commits exist, re-verify counts/routes before trusting them.

---

## 1. Tech Stack & Environment

- **Framework**: Next.js **16.4.2** (App Router). Resort detail pages are prerendered with `generateStaticParams` (49 pages today). `next.config.ts` enables `cacheComponents: true`, `partialPrefetching: true`, and loads Tailwind v4 through `@tailwindcss/turbopack`.
- **UI**: React **19.3.0**, TypeScript **5.9.3** (`strict: true`), Tailwind CSS **4**. Design tokens live in `tailwind.config.ts` and are pulled in from `src/app/globals.css` via `@config`. Keep the existing dark, premium, mobile-first look.
- **Package manager**: npm (Node 24 on this Windows machine).
- **Languages**: **English (`en`) and Japanese (`ja`) ONLY.** Chinese (`zh`) was intentionally removed — do **not** re-add it.
- **Scale**: **49 resorts across 11 prefectures** — Hokkaido, Aomori, Iwate, Yamagata, Fukushima, Niigata, Nagano, Gunma, Gifu, Shizuoka, Shiga. Architecture is designed to scale to 200+ resorts.
- **Testing**: no test framework is configured. Verification = type-check + lint + build + manual browser check.

---

## 2. Directory Structure & File Map

```
powderpilot-japan/
├── AGENTS.md                  # shared agent context (this file; auto-loaded by OpenCode)
├── OPENCODE.md                # OpenCode-specific quickstart
├── README.md                  # STILL the generic create-next-app README — not project docs
├── next.config.ts             # cacheComponents, partialPrefetching, Turbopack CSS loader
├── tailwind.config.ts         # charcoal / snow / ice design tokens
├── public/trail-maps/         # local HD resort photos + official-style trail maps
└── src/
    ├── app/
    │   ├── layout.tsx         # root layout: fonts, LanguageProvider, FavoritesProvider, Navbar, Footer, MobileBottomNav
    │   ├── page.tsx           # homepage: hero + 2-column prefecture grid
    │   ├── resorts/page.tsx   # directory page (Suspense wrapper) → ResortDirectory
    │   ├── resorts/[slug]/page.tsx  # 49 prerendered resort pages (generateStaticParams + generateMetadata)
    │   ├── conditions/page.tsx      # 7-day powder radar / snowfall leaderboard
    │   ├── planner/page.tsx         # trip planner
    │   ├── sitemap.ts               # dynamic XML sitemap (43 URLs)
    │   ├── robots.ts                # robots.txt metadata route
    │   ├── not-found.tsx            # bilingual 404 page
    │   └── error.tsx                # bilingual client error boundary
    ├── components/
    │   ├── Navbar.tsx                # sticky nav (--header-h ResizeObserver), language switcher, favorites count
    │   ├── MobileBottomNav.tsx       # mobile-only (<sm) fixed bottom tab bar (Home, Resorts, Radar, Saved)
    │   ├── Footer.tsx                # bilingual footer with Open-Meteo disclaimer, quick links & privacy note
    │   ├── ResortDirectory.tsx       # filters, search, sort, favorites, region deep-link
    │   ├── ResortDetailTabs.tsx      # hero + 4-tab resort page
    │   ├── MountainMapDiagram.tsx    # swipeable map/photo gallery + fullscreen zoom
    │   ├── ResortWeatherWidget.tsx   # Open-Meteo peak/base forecast, 15m cache, JST timestamp & demo storm toggle
    │   ├── ConditionsDashboard.tsx   # leaderboard across all resorts
    │   ├── TripPlanner.tsx           # itinerary + ¥ budget + gear checklist (localStorage)
    │   ├── FavoriteButton.tsx        # heart toggle
    │   └── ComingSoon.tsx            # unused
    ├── context/
    │   ├── LanguageContext.tsx  # en|ja; localStorage key `powderpilot_lang`
    │   └── FavoritesContext.tsx # localStorage key `powderpilot_favorites_v1`
    ├── data/
    │   ├── types.ts             # Region, Resort, MapSlide, VillageSpot, ResortSummary
    │   ├── resorts.ts           # re-export hub: types + resorts/index
    │   └── resorts/             # modular database, one file per prefecture
    │       ├── index.ts         # RESORTS, REGIONS, REGION_ORDER, getResortBySlug, getResortsByRegion
    │       ├── hokkaido.ts (8)  aomori.ts (3)  iwate.ts (2)  yamagata.ts (3)
    │       ├── fukushima.ts (4) niigata.ts (9) nagano.ts (11) gunma.ts (5) gifu.ts (2) shizuoka.ts (1) shiga.ts (1)
    └── i18n/
        ├── translations.ts      # UI dictionary — every visible UI string for en + ja
        └── resortTranslations.ts # Japanese resort copy (descriptions, hours, pricing notes…)
```

**Import rule:** components consume `@/data/resorts` (the hub file). Do not import from individual prefecture files in components, and do not resurrect the old monolithic data file — `src/data/resorts.ts` is now a 10-line re-export shim.

---

## 3. Core Rules & Constraints

1. **Strictly bilingual (EN + JA only)**
   - Any visible UI text must exist in `en` and `ja` in `src/i18n/translations.ts`.
   - Any resort copy must exist in both the DATA file (English) and `src/i18n/resortTranslations.ts` (Japanese).
   - Never add Chinese or other locales.

2. **Never fabricate resort data**
   - Weather comes from **Open-Meteo numerical-model forecasts** (JMA MSM / GFS) at each resort's peak/base elevation. It is a *forecast*, not an official resort snow report — keep that distinction visible.
   - The "Jan storm" toggle is a clearly labelled **simulation**; never let simulated numbers look like live data.
   - Never invent lift status, opening hours, snowfall, or prices. Prices are **JPY only** — no USD conversions.
   - Keep `officialUrl` / `webcamUrl` / `trailMapUrl` pointing at real resort pages.

3. **Resort detail tabs — exactly 4**
   - `Overview` · `Tickets & Rentals` · `Trail Maps & Runs` · `Weather & Webcams`.
   - The old Onsen/Village tab was removed; transit info lives inside Overview.

4. **Adding or editing a resort**
   - Create/edit the prefecture file in `src/data/resorts/` (e.g. `nagano.ts`).
   - Conform to the `Resort` interface in `src/data/types.ts`.
   - Add the resort to the `RESORTS` array in `src/data/resorts/index.ts`; `getResortBySlug()` builds the lookup map automatically.
   - Add Japanese copy to `src/i18n/resortTranslations.ts`.
   - Put images in `public/trail-maps/` and reference them by local path.

5. **Directory behaviour** (`/resorts`, component `ResortDirectory.tsx`)
   - Region pills, tree-runs filter, favorites filter (`?favorites=true`), region deep-link (`?region=<Region>`), search across EN + JA names, and sorting (vertical, peak, travel time, price).
   - There is **no** `/directory`, `/radar`, `/about`, `/safety`, `/terms`, or `/privacy` route — older docs claiming those are wrong.

6. **Persistence**: language, favorites and trip planner use browser `localStorage` only. There is no backend, auth, or database.

7. **Shared workspace**: Codex, Antigravity, OpenCode and DSH all edit this same folder.
   - Run `git status --short --branch` before editing; never discard, reset, or reformat another agent's work.
   - Only one agent should edit at a time; keep edits scoped to the request.

8. **Deployment**: the live site is Vercel, auto-built from GitHub `main`. Local edits do NOT update it.
   - Commit/push **only when explicitly asked**, only your own files, then report the commit hash and confirm a clean tree.

---

## 4. Commands & Verification

PowerShell execution policy blocks `npm.ps1`, so use `cmd /c` or the `.cmd` shims. Run everything from the project root.

- **Dev server**
  ```bash
  cmd /c "npm run dev"
  ```
- **Type-check (required after every change)**
  ```bash
  npx.cmd tsc --noEmit
  ```
- **Production build (required after larger changes)**
  ```bash
  cmd /c "npm run build"
  ```
- **Lint**
  ```bash
  npx.cmd eslint src
  ```
  ⚠️ Baseline currently fails with **2 pre-existing** `react-hooks/set-state-in-effect` errors in `ResortDirectory.tsx` (~lines 36 and 42). They are unrelated to new work — don't "fix" them as part of an unrelated task.
- **Diff hygiene**
  ```bash
  git diff --check
  git diff --stat
  ```
- **Git**
  - Remote: `https://github.com/pujankhatri1689/powderpilot-japan.git`
  - Branch: `main`
  - `next dev` rewrites the Next.js block at the top of this file — keep that block intact.
