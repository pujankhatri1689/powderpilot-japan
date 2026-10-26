"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ErrorBoundary({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLanguage();

  return (
    <section className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <div className="w-full rounded-2xl border border-charcoal-light bg-charcoal-light/35 p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose-400">
          {t.statusPages.errorEyebrow}
        </p>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-snow sm:text-4xl">
          {t.statusPages.errorTitle}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-snow-muted sm:text-base">
          {t.statusPages.errorBody}
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-ice-deep px-6 py-3 text-sm font-bold text-charcoal shadow-md shadow-ice-deep/25 transition hover:bg-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
          >
            {t.statusPages.tryAgainBtn}
          </button>
          <Link
            href="/resorts"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-charcoal-light bg-charcoal px-6 py-3 text-sm font-semibold text-snow transition hover:border-ice hover:text-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
          >
            {t.statusPages.browseResortsBtn}
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-charcoal-light bg-charcoal px-6 py-3 text-sm font-semibold text-snow-muted transition hover:border-ice hover:text-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
          >
            {t.statusPages.backHomeBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}
