# OpenCode Agent Guide: PowderPilot Japan

Welcome to **PowderPilot Japan** (`powderpilot-japan`), a high-performance, mobile-first Next.js 15 ski and snowboard guide designed to help international and local riders find Japan's deepest powder snow.

---

## 1. Project Overview & Tech Stack

- **Framework**: Next.js 15 (App Router, Static Site Generation / SSG)
- **Language**: TypeScript (`strict: true`)
- **Styling**: Tailwind CSS
- **Languages**: **Bilingual English (`en`) and Japanese (`ja`) ONLY**.
  * *Note: Chinese (`zh`) was deliberately purged to optimize bundle size, keep layouts clean, and streamline maintenance. Do not re-add Chinese.*
- **Current Scale**: 39 curated ski resorts across 9 prefectures, architected to scale to 200–300+ resorts.

---

## 2. Directory & Architecture Map

```
powderpilot-japan/
├── AGENTS.md                   # Universal agent instructions (OpenCode, Codex, Antigravity)
├── OPENCODE.md                 # OpenCode project specification
├── public/                     # Static assets (images, icons, flags)
└── src/
    ├── app/                    # Next.js App Router pages
    │   ├── layout.tsx          # Root layout with LanguageProvider and fonts
    │   ├── page.tsx            # Homepage with 2-column prefecture grid & live radar
    │   ├── directory/          # Filterable & searchable resort directory
    │   ├── radar/              # 24h/48h snowfall radar and mountain depth tracker
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

## 3. Critical Rules & Design Decisions

1. **Strictly Bilingual (EN & JA only)**:
   - All resort descriptions, tabs, and UI strings must only supply `en` and `ja`.
   - Never add Chinese (`zh`) or other languages.

2. **Resort Detail Page Sections**:
   - Tab layout: `Overview`, `Snow & Terrain`, `Lifts & Passes`, `Live Webcams & Weather`.
   - *Note: The old "Onsen & Village" tab was removed to keep the interface fast and fluff-free. Transit details (e.g. from Tokyo/Haneda/Narita) live inside the `overview` section.*

3. **How to Add or Edit Resorts**:
   - Never paste resort data directly into `index.ts`.
   - Add new resorts to the relevant prefecture/regional file in `src/data/resorts/` (or create a new regional file like `tohoku.ts`).
   - Every resort must adhere to the `ResortData` interface in `src/types/resort.ts`.
   - Re-export the array in `src/data/resorts/index.ts`. The `RESORTS_BY_SLUG` map automatically indexes it for $O(1)$ lookups.

4. **Search & Regional Filtering**:
   - The Directory (`src/app/directory/page.tsx`) supports regional search queries (e.g., searching "Tohoku" returns Aomori, Iwate, Yamagata, and Fukushima; "Hakuba" returns all Hakuba Valley mountains; "Shinetsu" returns Nagano/Niigata borders).

---

## 4. Execution & Build Verification

On this Windows machine, PowerShell script execution policy restricts `npm.ps1`. Always run npm/node commands through `cmd /c`:

- **Run Dev Server**:
  ```bash
  cmd /c "npm run dev"
  ```
- **Run Production Build (Must verify with 0 errors before finishing tasks)**:
  ```bash
  cmd /c "npm run build"
  ```
- **Git Remote**:
  - `origin`: `https://github.com/pujankhatri1689/powderpilot-japan.git`
  - Default branch: `main`
