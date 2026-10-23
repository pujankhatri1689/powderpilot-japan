"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

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
      </div>
    </section>
  );
}
