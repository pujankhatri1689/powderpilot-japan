import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FavoriteButton from "@/components/FavoriteButton";
import ResortDetailTabs from "@/components/ResortDetailTabs";
import { RESORTS, getResortBySlug } from "@/data/resorts";

export function generateStaticParams() {
  return RESORTS.map((resort) => ({ slug: resort.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resort = getResortBySlug(slug);
  if (!resort) {
    return { title: "Resort Not Found | PowderPilot Japan" };
  }
  return {
    title: `${resort.name} (${resort.region}) | PowderPilot Japan`,
    description: resort.description,
  };
}

export default async function ResortDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = RESORTS.findIndex((r) => r.slug === slug);
  const resort = RESORTS[currentIndex];

  if (!resort) {
    notFound();
  }

  const prevResort =
    RESORTS[(currentIndex - 1 + RESORTS.length) % RESORTS.length]!;
  const nextResort = RESORTS[(currentIndex + 1) % RESORTS.length]!;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
      {/* Top Surf Bar: Back + Quick Jump to Any Resort */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <Link
            href="/resorts"
            className="inline-flex items-center gap-1.5 rounded-xl border border-charcoal-light bg-charcoal-light/50 px-3.5 py-2 text-xs font-semibold text-snow transition hover:border-ice hover:text-ice sm:text-sm"
          >
            <span aria-hidden>←</span> All Resorts
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-charcoal-light bg-charcoal px-3 py-2 text-xs font-medium text-snow-muted transition hover:border-ice hover:text-ice sm:text-sm"
          >
            Home
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/resorts/${prevResort.slug}`}
            title={`Previous: ${prevResort.name}`}
            className="rounded-xl border border-charcoal-light bg-charcoal px-3 py-2 text-xs font-semibold text-snow-muted transition hover:border-ice hover:text-ice"
          >
            ‹ {prevResort.name.split(" ")[0]}
          </Link>
          <Link
            href={`/resorts/${nextResort.slug}`}
            title={`Next: ${nextResort.name}`}
            className="rounded-xl border border-charcoal-light bg-charcoal px-3 py-2 text-xs font-semibold text-snow-muted transition hover:border-ice hover:text-ice"
          >
            {nextResort.name.split(" ")[0]} ›
          </Link>
        </div>
      </div>

      {/* Horizontal Quick-Surf Resort Switcher Strip */}
      <div className="mb-5 flex items-center gap-1.5 overflow-x-auto rounded-xl border border-charcoal-light bg-charcoal-light/25 p-2">
        <span className="px-2 text-[11px] font-bold uppercase tracking-wider text-snow-muted">
          Surf:
        </span>
        {RESORTS.map((r) => {
          const isCurrent = r.slug === resort.slug;
          return (
            <Link
              key={r.slug}
              href={`/resorts/${r.slug}`}
              className={`whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                isCurrent
                  ? "bg-ice-deep text-charcoal shadow-sm"
                  : "text-snow-muted hover:bg-charcoal hover:text-snow"
              }`}
            >
              {r.name}
            </Link>
          );
        })}
      </div>

      {/* Clean Hero Banner */}
      <div className="overflow-hidden rounded-2xl border border-charcoal-light bg-charcoal-light/40">
        <div className="relative h-56 w-full sm:h-72">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resort.heroImage}
            alt={`${resort.name} mountain view`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

          <div className="absolute inset-x-5 top-4 flex flex-wrap items-center justify-between gap-2">
            <span className="rounded-full bg-charcoal/85 px-3 py-1 text-xs font-bold text-ice backdrop-blur-sm">
              {resort.region} Prefecture · {resort.area}
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {resort.terrain.treeRunsAllowed ? (
                <span className="rounded-full border border-ice/40 bg-charcoal/85 px-3 py-1 text-xs font-semibold text-ice backdrop-blur-sm">
                  🌲 Tree Runs Allowed
                </span>
              ) : (
                <span className="rounded-full border border-charcoal-light bg-charcoal/85 px-3 py-1 text-xs font-medium text-snow-muted backdrop-blur-sm">
                  On-Piste / Alpine Focus
                </span>
              )}
            </div>
          </div>

          <div className="absolute inset-x-5 bottom-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-snow sm:text-4xl">
                {resort.name}
              </h1>
              <p className="mt-1 text-sm text-snow-muted">
                {resort.japaneseName} · {resort.address.postalCode}{" "}
                {resort.address.japanese}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <FavoriteButton slug={resort.slug} name={resort.name} />
              <a
                href={resort.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-charcoal-light bg-charcoal/90 px-3.5 py-2 text-xs font-bold text-ice backdrop-blur-sm transition hover:border-ice"
              >
                <span>📍 Google Maps</span>
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Focused Section Tabs (Overview is Default) */}
      <ResortDetailTabs resort={resort} />

      {/* Bottom Next/Prev Surf & Quick Links Bar */}
      <div className="mt-8 grid gap-3 border-t border-charcoal-light pt-6 sm:grid-cols-3">
        <Link
          href={`/resorts/${prevResort.slug}`}
          className="flex flex-col justify-between rounded-xl border border-charcoal-light bg-charcoal p-4 transition hover:border-ice"
        >
          <span className="text-[11px] font-semibold uppercase text-snow-muted">
            ← Previous Resort
          </span>
          <span className="mt-1 text-sm font-bold text-snow">
            {prevResort.name} ({prevResort.region})
          </span>
        </Link>

        <Link
          href="/conditions"
          className="flex flex-col items-center justify-center rounded-xl bg-ice-deep p-4 text-center transition hover:bg-ice"
        >
          <span className="text-[11px] font-bold uppercase text-charcoal/80">
            All-Japan Snow Radar
          </span>
          <span className="mt-0.5 text-sm font-extrabold text-charcoal">
            ❄️ Compare 7-Day Snow Leaderboard
          </span>
        </Link>

        <Link
          href={`/resorts/${nextResort.slug}`}
          className="flex flex-col justify-between rounded-xl border border-charcoal-light bg-charcoal p-4 text-right transition hover:border-ice"
        >
          <span className="text-[11px] font-semibold uppercase text-snow-muted">
            Next Resort →
          </span>
          <span className="mt-1 text-sm font-bold text-snow">
            {nextResort.name} ({nextResort.region})
          </span>
        </Link>
      </div>
    </div>
  );
}
