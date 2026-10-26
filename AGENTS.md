<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent Guidelines & Project Architecture: PowderPilot Japan

This repository contains **PowderPilot Japan** (`powderpilot-japan`), a high-performance, mobile-first Next.js 15 ski and snowboard guide designed to help riders find Japan's best powder snow.

---

## 1. Tech Stack & Environment
- **Framework**: Next.js 15 (App Router, Static Site Generation / SSG with 47+ pre-rendered routes)
- **Language**: TypeScript (`strict: true`)
- **Styling**: Tailwind CSS
- **Languages**: **Bilingual English (`en`) and Japanese (`ja`) ONLY**.
  * *Important: Chinese (`zh`) was intentionally purged. Do NOT re-add Chinese.*
- **Scale**: 39 curated ski resorts across 9 prefectures (Hokkaido, Aomori, Iwate, Yamagata, Fukushima, Niigata, Nagano, Gunma, Gifu), built to expand to 200–300+ resorts.

---

## 2. Directory Structure & File Map

```
powderpilot-japan/
├── AGENTS.md                   # Universal agent instructions (OpenCode, Codex, Antigravity)
├── OPENCODE.md                 # OpenCode project specification
├── public/                     # Static assets (images, icons)
└── src/
    ├── app/                    # Next.js App Router pages
    │   ├── layout.tsx          # Root layout with LanguageProvider
    │   ├── page.tsx            # Homepage with 2-column prefecture grid & live radar teaser
    │   ├── directory/          # Filterable & searchable resort directory with live count badges
    │   ├── radar/              # 24h/48h snowfall radar & mountain depth tracker
    │   ├── resorts/[slug]/     # Prerendered resort detail pages (generateStaticParams)
    │   ├── about/              # About page
    │   ├── safety/             # Mountain & avalanche safety guide
    │   ├── terms/              # Terms of Service
    │   └── privacy/            # Privacy Policy
    ├── components/             # Reusable UI components
    │   ├── Header.tsx          # Sticky navigation & language selector
    │   ├── Footer.tsx          # Global footer
    │   ├── LanguageToggle.tsx  # EN / JA switch
    │   ├── WeatherWidget.tsx   # Mountain weather & snow base display
    │   └── LiveSnowTicker.tsx  # Real-time snowfall report marquee
    ├── context/
    │   └── LanguageContext.tsx # React Context handling 'en' | 'ja' locales
    ├── data/
    │   └── resorts/            # MODULAR RESORT DATABASE (Scalable architecture)
    │       ├── index.ts        # Exports RESORTS array and O(1) RESORTS_BY_SLUG map
    │       ├── hokkaido.ts     # Hokkaido resorts (10 resorts)
    │       ├── nagano.ts       # Nagano & Hakuba Valley (10 resorts)
    │       ├── niigata.ts      # Niigata & Myoko (10 resorts)
    │       ├── tohoku.ts       # Aomori, Iwate, Yamagata, Fukushima (9 resorts)
    │       └── kanto_chubu.ts  # Gunma, Gifu (4 resorts)
    ├── i18n/
    │   └── translations.ts     # Centralized UI dictionary for English & Japanese
    └── types/
        └── resort.ts           # TypeScript interfaces (ResortData, SnowReport, etc.)
```

---

## 3. Core Rules & Constraints

1. **Strictly Bilingual (EN & JA only)**:
   - Provide clean translations for English (`en`) and Japanese (`ja`).
   - Do not add Chinese (`zh`) or other languages.

2. **No Onsen/Village Section**:
   - The onsen/village access tab was removed to keep the interface fast and fluff-free. Transit details (e.g. from Tokyo/Haneda/Narita) belong inside the `overview` section.

3. **How to Add or Edit Resorts**:
   - Never put individual resort objects directly into `index.ts`.
   - Add new resorts to their respective prefecture/regional file under `src/data/resorts/`.
   - Ensure the resort follows the `ResortData` interface in `src/types/resort.ts`.
   - Re-export the array in `src/data/resorts/index.ts`. The `RESORTS_BY_SLUG` map automatically indexes it for $O(1)$ lookups.

4. **Directory & Regional Search**:
   - `src/app/directory/page.tsx` supports regional search tokens:
     - "Tohoku" -> matches Aomori, Iwate, Yamagata, Fukushima.
     - "Shinetsu" -> matches Nagano and Niigata.
     - "Hakuba" -> matches Hakuba Valley resorts.
     - "Chubu" -> matches Gifu.

---

## 4. Commands & Verification

On this Windows environment, PowerShell execution policy may block `npm.ps1`. Execute commands via `cmd /c`:

- **Run Dev Server**:
  ```bash
  cmd /c "npm run dev"
  ```
- **Verify Production Build (Always run before completing tasks)**:
  ```bash
  cmd /c "npm run build"
  ```
- **Git Remote**:
  - Remote: `https://github.com/pujankhatri1689/powderpilot-japan.git`
  - Active branch: `main`
