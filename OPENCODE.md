# OpenCode Guide: PowderPilot Japan

You are working in **`C:\Users\pujan\.gemini\antigravity\scratch\powderpilot-japan`** — a premium, mobile-first Next.js ski & snowboard guide for Japan's powder resorts.

**Read `AGENTS.md` (same folder) first — it is the single source of truth for architecture, data rules, commands and deployment.** This file only adds OpenCode-specific setup and workflow.

> Verified snapshot: 2026-10-26, `main` @ `cdaf8a9`. Type-check and production build pass. `README.md` is still the generic create-next-app boilerplate — ignore it.

---

## 1. Opening / re-opening this project

- **OpenCode Desktop**: `Open Project` → choose the exact folder `powderpilot-japan` (not its parent, not the DSH workspace). Start a **new session** afterwards so `AGENTS.md` + `OPENCODE.md` are loaded.
- **Bundled CLI** (installed with the desktop app):
  ```powershell
  & "$env:APPDATA\ai.opencode.desktop\cli\2.1.4-x64\opencode-cli.exe" "C:\Users\pujan\.gemini\antigravity\scratch\powderpilot-japan"
  ```
  Use `--auto` only for low-risk, fully-scoped work; otherwise review permission prompts.
- The project folder is a **git repo** (`main`, remote `pujankhatri1689/powderpilot-japan`). Never work from a copy — the live site deploys from this repo.

---

## 2. What this project is (current, verified)

- **Next.js 16.4.2** App Router, React 19.3.0, TypeScript 5.9.3 (`strict`), Tailwind CSS 4, npm.
- **39 resorts across 9 prefectures** (Hokkaido, Aomori, Iwate, Yamagata, Fukushima, Niigata, Nagano, Gunma, Gifu).
- **Bilingual EN + JA only** — Chinese was deliberately removed, do not re-add it.
- **Routes (only these exist)**: `/`, `/resorts`, `/resorts/[slug]` (39 prerendered), `/conditions`, `/planner`.
- **Resort page tabs (4)**: Overview · Tickets & Rentals · Trail Maps & Runs · Weather & Webcams. No Onsen/Village tab.
- **Data**: `src/data/resorts/` (one file per prefecture) re-exported through `src/data/resorts.ts`; types in `src/data/types.ts`.
- **State**: `LanguageContext` + `FavoritesContext` + trip planner, all `localStorage` — no backend.
- **Weather**: Open-Meteo / JMA MSM model **forecasts** (peak/base elevation), not official resort reports. The January "storm" toggle is a labelled simulation.

---

## 3. Workflow for every request

1. `git status --short --branch` — check for other agents' uncommitted work. **Never discard, reset, overwrite or reformat it.**
2. Read the files you are about to change (and their neighbours) before editing.
3. Make the **smallest correct edit**; stay inside the request. Keep the dark premium design and mobile layout.
4. If visible text changes, update **both** `en` and `ja` in `src/i18n/translations.ts` (and Japanese resort copy in `resortTranslations.ts` when applicable).
5. Never invent snow, weather, lift status, hours or prices. JPY only, forecast ≠ official report.
6. Verify from the project root:
   ```powershell
   npx.cmd tsc --noEmit
   git diff --check
   git diff --stat
   ```
   For larger changes also run `cmd /c "npm run build"`.
   `npx.cmd eslint src` currently has **2 pre-existing** `react-hooks/set-state-in-effect` errors in `ResortDirectory.tsx`; do not attribute them to your change.
7. Report to the user in plain language: files changed, checks passed, anything risky, and whether the work is **local only** or **pushed for Vercel**.

## 4. Commit / deploy rules

- Local edits do **not** update the Vercel site.
- **Only commit/push when the user explicitly asks.** Then: `git add` only your files, clear commit message, `git push origin main`, and confirm the commit hash + clean tree.
- Never commit `.env*`, credentials, tokens or other secrets. Never force-push.

---

## 5. Known gotchas

- `npm.ps1` is blocked by Windows execution policy → use `cmd /c "npm run dev"` / `npx.cmd`.
- `next dev` rewrites the Next.js rules block at the top of `AGENTS.md`; keep it.
- `tsc` must run **inside the project folder** — `npx` from a parent directory downloads the wrong `tsc` package.
- The trip planner seeds state from `localStorage` inside `useState` (potential hydration mismatch) — verify in a browser if you touch it.
- Old docs mention `/directory`, `/radar`, `/about`, `/safety`, `/terms`, `/privacy`, `Header.tsx`, `Footer.tsx`, `LanguageToggle.tsx`, `WeatherWidget.tsx`, `LiveSnowTicker.tsx`, `RESORTS_BY_SLUG` and `src/types/resort.ts`. **None of those exist** — the app uses `Navbar.tsx`, `ConditionsDashboard.tsx`, `resorts/`, `src/data/types.ts` and `getResortBySlug()`.
