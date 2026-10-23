"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { REGIONS, RESORTS } from "@/data/resorts";

export default function Home() {
  const { t, localizeResort, localizeRegion } = useLanguage();

  return (
    <section className="relative flex flex-1 flex-col overflow-hidden bg-charcoal">
      {/* Subtle icy glow in the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-ice-deep/20 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-14 pb-20 text-center sm:px-6 sm:pt-20 sm:pb-28">
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

        {/* Super-Surfable Instant Resort Jumper */}
        <div className="mt-14 w-full text-left">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-ice">
                {t.home.quickSurfTitle}
              </h2>
              <p className="text-xs text-snow-muted">
                {t.home.quickSurfSubtitle}
              </p>
            </div>
            <Link
              href="/resorts"
              className="text-xs font-semibold text-ice transition hover:underline"
            >
              {t.home.filterCompareLink}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {REGIONS.map((region) => {
              const prefResorts = RESORTS.filter(
                (r) => r.region === region
              ).map((r) => localizeResort(r));

              return (
                <div
                  key={region}
                  className="rounded-2xl border border-charcoal-light bg-charcoal-light/25 p-4"
                >
                  <div className="mb-3 flex items-center justify-between border-b border-charcoal-light/70 pb-2.5">
                    <span className="text-sm font-bold text-snow">
                      📍 {localizeRegion(region, true)}
                    </span>
                    <span className="rounded-full bg-charcoal px-2.5 py-0.5 text-[11px] font-semibold text-ice">
                      {t.home.resortsCount(prefResorts.length)}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {prefResorts.map((resort) => (
                      <li key={resort.slug}>
                        <Link
                          href={`/resorts/${resort.slug}`}
                          className="group flex items-center justify-between rounded-xl border border-charcoal-light/60 bg-charcoal/60 px-3 py-2.5 transition hover:border-ice/50 hover:bg-charcoal"
                        >
                          <div className="min-w-0 pr-2">
                            <p className="truncate text-sm font-semibold text-snow group-hover:text-ice">
                              {resort.name}
                            </p>
                            <p className="truncate text-[11px] text-snow-muted">
                              {t.home.cardMeta(
                                resort.elevation.vertical,
                                resort.dayPassYen.toLocaleString(),
                                resort.fromTokyo.durationMinutes
                              )}
                            </p>
                          </div>
                          <span className="shrink-0 text-xs font-semibold text-snow-muted transition group-hover:translate-x-0.5 group-hover:text-ice">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
