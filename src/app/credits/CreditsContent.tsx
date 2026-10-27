"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { PHOTO_CREDITS, TRAIL_MAP_CREDIT } from "@/data/imageCredits";

export default function CreditsContent() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-snow-muted transition hover:text-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
      >
        {t.credits.backHome}
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-ice">
        {t.credits.eyebrow}
      </p>
      <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-snow sm:text-3xl">
        {t.credits.title}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-snow-muted">
        {t.credits.intro}
      </p>

      <h2 className="mt-8 text-xs font-bold uppercase tracking-wider text-snow">
        {t.credits.photosHeading}
      </h2>
      <ul className="mt-3 divide-y divide-charcoal-light/60 rounded-2xl border border-charcoal-light bg-charcoal-light/20 px-4">
        {PHOTO_CREDITS.map((credit) => (
          <li key={credit.file} className="flex items-center gap-3 py-2.5">
            <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded-lg border border-charcoal-light bg-charcoal-dark">
              <Image
                src={`/trail-maps/${credit.file}`}
                alt=""
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-snow">
                {credit.author}
              </p>
              <p className="mt-0.5 truncate text-[11px] text-snow-muted">
                {credit.license}
                {" · "}
                <a
                  href={credit.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-charcoal-light underline-offset-2 transition hover:text-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
                >
                  {t.credits.sourceLabel}
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-2xl border border-charcoal-light bg-charcoal-light/20 p-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-snow">
          {t.credits.mapsHeading}
        </h2>
        <p className="mt-1.5 text-xs leading-relaxed text-snow-muted">
          {t.credits.mapsBody}
        </p>
        <a
          href={TRAIL_MAP_CREDIT.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-ice underline decoration-ice/30 underline-offset-2 transition hover:text-snow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
        >
          {t.credits.mapsSourceLabel}
        </a>
      </div>

      <p className="mt-6 text-[11px] leading-relaxed text-snow-muted/80">
        {t.credits.licenseNote}
      </p>
    </section>
  );
}
