import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FavoriteButton from "@/components/FavoriteButton";
import MountainMapDiagram from "@/components/MountainMapDiagram";
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
  const resort = getResortBySlug(slug);

  if (!resort) {
    notFound();
  }

  const hours = Math.floor(resort.fromTokyo.durationMinutes / 60);
  const mins = resort.fromTokyo.durationMinutes % 60;
  const durationLabel =
    hours > 0 ? `${hours}h ${mins > 0 ? `${mins}m` : ""}` : `${mins}m`;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Back navigation bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <Link
            href="/resorts"
            className="inline-flex items-center gap-2 rounded-xl border border-charcoal-light bg-charcoal-light/50 px-3.5 py-2 text-xs font-semibold text-snow transition hover:border-ice hover:text-ice sm:text-sm"
          >
            <span aria-hidden>←</span> Back to Resorts
          </Link>
          <Link
            href="/"
            className="text-xs font-medium text-snow-muted transition hover:text-ice sm:text-sm"
          >
            Home
          </Link>
        </div>

        <span className="rounded-full bg-ice-deep/15 px-3 py-1 text-xs font-semibold text-ice">
          {resort.region} · {resort.area}
        </span>
      </div>

      {/* Hero Card with Mountain Photo Banner */}
      <div className="overflow-hidden rounded-2xl border border-charcoal-light bg-charcoal-light/40">
        <div className="relative h-60 w-full sm:h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resort.heroImage}
            alt={`${resort.name} mountain panorama`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-transparent" />

          <div className="absolute inset-x-6 bottom-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-snow sm:text-4xl">
                {resort.name}
              </h1>
              <p className="mt-1 text-sm text-snow-muted">
                {resort.japaneseName} · GPS {resort.coordinates.lat.toFixed(3)}
                °N, {resort.coordinates.lon.toFixed(3)}°E
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <FavoriteButton slug={resort.slug} name={resort.name} />
              {resort.terrain.treeRunsAllowed ? (
                <span className="rounded-xl border border-ice/40 bg-charcoal/85 px-3 py-1.5 text-xs font-semibold text-ice backdrop-blur-sm">
                  🌲 Tree Runs Allowed
                </span>
              ) : (
                <span className="rounded-xl border border-charcoal-light bg-charcoal/85 px-3 py-1.5 text-xs font-medium text-snow-muted backdrop-blur-sm">
                  On-Piste / Alpine Focus
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-base leading-relaxed text-snow">
            {resort.description}
          </p>

          <div className="mt-4 rounded-xl bg-charcoal/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-ice">
              Best For
            </p>
            <p className="mt-1 text-sm text-snow">{resort.bestFor}</p>
          </div>

          {/* Vibe tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {resort.vibeTags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-charcoal px-3 py-1 text-xs font-medium text-snow-muted"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Key Metrics Grid */}
          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl bg-charcoal p-4">
              <dt className="text-xs uppercase text-snow-muted">
                Vertical Drop
              </dt>
              <dd className="mt-1 text-2xl font-extrabold text-snow">
                {resort.elevation.vertical}m
              </dd>
              <p className="mt-0.5 text-xs text-snow-muted">
                {resort.elevation.base}m → {resort.elevation.top}m
              </p>
            </div>

            <div className="rounded-xl bg-charcoal p-4">
              <dt className="text-xs uppercase text-snow-muted">
                Day Lift Pass
              </dt>
              <dd className="mt-1 text-2xl font-extrabold text-ice">
                ¥{resort.dayPassYen.toLocaleString()}
              </dd>
              <p className="mt-0.5 text-xs text-snow-muted">1-day adult rate</p>
            </div>

            <div className="rounded-xl bg-charcoal p-4">
              <dt className="text-xs uppercase text-snow-muted">
                Runs & Lifts
              </dt>
              <dd className="mt-1 text-2xl font-extrabold text-snow">
                {resort.terrain.runs} runs
              </dd>
              <p className="mt-0.5 text-xs text-snow-muted">
                {resort.terrain.lifts} lifts operating
              </p>
            </div>

            <div className="rounded-xl bg-charcoal p-4">
              <dt className="text-xs uppercase text-snow-muted">From Tokyo</dt>
              <dd className="mt-1 text-2xl font-extrabold text-snow">
                ~{durationLabel}
              </dd>
              <p className="mt-0.5 text-xs text-snow-muted">
                {resort.fromTokyo.station}
              </p>
            </div>
          </dl>

          {/* Mountain Map & Signature Runs Diagram */}
          <div className="mt-6">
            <MountainMapDiagram resort={resort} />
          </div>

          {/* Access & Transit Box */}
          <div className="mt-6 rounded-xl border border-charcoal-light bg-charcoal p-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-snow">
              🚅 How to Get There from Tokyo
            </h2>
            <p className="mt-2 text-sm text-snow">{resort.fromTokyo.summary}</p>
            <p className="mt-1 text-xs text-snow-muted">
              Nearest hub: {resort.fromTokyo.station} (approx.{" "}
              {resort.fromTokyo.durationMinutes} mins total transit)
            </p>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/conditions"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-ice-deep px-5 py-3 text-sm font-semibold text-charcoal transition hover:bg-ice"
            >
              Check Live Snow Forecast
            </Link>
            <Link
              href="/planner"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-charcoal-light bg-charcoal px-5 py-3 text-sm font-semibold text-snow transition hover:border-ice hover:text-ice"
            >
              Plan a Trip Here
            </Link>
            <a
              href={resort.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-charcoal-light px-5 py-3 text-sm font-semibold text-snow-muted transition hover:border-ice hover:text-snow"
            >
              Official Website ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
