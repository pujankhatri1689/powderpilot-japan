"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { REGIONS, RESORTS } from "@/data/resorts";

export default function Home() {
  const { t, localizeRegion } = useLanguage();

  return (
    <section className="relative flex flex-1 flex-col overflow-hidden bg-charcoal">
      {/* Subtle icy glow in the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-ice-deep/20 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-14 pb-20 text-center sm:px-6 sm:pt-20 sm:pb-24">
        <p className="mb-4 rounded-full border border-charcoal-light bg-charcoal-light/50 px-4 py-1 text-xs font-medium uppercase tracking-widest text-ice">
          {t.home.badge}
        </p>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-snow sm:text-6xl">
          {t.home.titleLine1}{" "}
          <span className="text-ice">{t.home.titleHighlight}</span>.
          <br className="hidden sm:block" /> {t.home.titleLine2}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-snow-muted sm:text-lg">
          {t.home.subtitle}
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/resorts"
            className="rounded-xl bg-ice-deep px-8 py-4 text-base font-semibold text-charcoal shadow-lg shadow-ice-deep/30 transition hover:bg-ice active:scale-95"
          >
            {t.home.browseBtn}
          </Link>
          <Link
            href="/conditions"
            className="rounded-xl border border-charcoal-light bg-charcoal-light/40 px-8 py-4 text-base font-semibold text-snow transition hover:border-ice hover:text-ice"
          >
            {t.home.radarBtn}
          </Link>
        </div>

        {/* Live Powder Radar Pulse Pill */}
        <div className="mt-8">
          <Link
            href="/conditions"
            className="group inline-flex items-center gap-2.5 rounded-full border border-ice/30 bg-charcoal-light/40 px-4 py-2 text-xs font-semibold text-snow transition hover:border-ice hover:bg-charcoal-light/70 sm:text-sm"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ice opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ice-deep"></span>
            </span>
            <span className="text-ice group-hover:text-snow transition">
              {t.home.liveRadarPulse}
            </span>
          </Link>
        </div>

        {/* 2-Column Prefecture Choices */}
        <div className="mt-16 w-full max-w-4xl text-left">
          <div className="mb-6 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold tracking-tight text-snow sm:text-2xl">
              {t.home.prefectureSectionTitle}
            </h2>
            <p className="mt-1 text-xs text-snow-muted sm:text-sm">
              {t.home.prefectureSectionSubtitle}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {REGIONS.map((region) => {
              const resortsInRegion = RESORTS.filter((r) => r.region === region);
              const previewNames = resortsInRegion
                .slice(0, 3)
                .map((r) => r.name.split(/[\s(（]/)[0])
                .join(", ");
              const hasMore = resortsInRegion.length > 3;

              return (
                <Link
                  key={region}
                  href={`/resorts?region=${region}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-charcoal-light bg-charcoal-light/35 p-4 transition hover:border-ice/60 hover:bg-charcoal-light/55 active:scale-[0.99]"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-snow group-hover:text-ice transition">
                        {localizeRegion(region)}
                      </span>
                      <span className="text-xs text-snow-muted">
                        ({localizeRegion(region, true)})
                      </span>
                    </div>
                    <p className="mt-1 truncate text-xs text-snow-muted">
                      {previewNames}{hasMore ? "..." : ""}
                    </p>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-charcoal px-3 py-1.5 text-xs font-bold text-ice group-hover:bg-ice-deep group-hover:text-charcoal transition">
                    {t.home.viewMountains(resortsInRegion.length)}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
