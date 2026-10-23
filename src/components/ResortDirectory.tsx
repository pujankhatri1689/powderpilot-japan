"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { REGIONS, RESORTS, type Region } from "@/data/resorts";

type SortKey = "vertical" | "travel" | "price" | "topElevation";

export default function ResortDirectory() {
  const [selectedRegion, setSelectedRegion] = useState<Region | "All">("All");
  const [treeRunsOnly, setTreeRunsOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("vertical");

  const filteredResorts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return RESORTS.filter((resort) => {
      if (selectedRegion !== "All" && resort.region !== selectedRegion) {
        return false;
      }
      if (treeRunsOnly && !resort.terrain.treeRunsAllowed) {
        return false;
      }
      if (!query) return true;

      return (
        resort.name.toLowerCase().includes(query) ||
        resort.area.toLowerCase().includes(query) ||
        resort.region.toLowerCase().includes(query) ||
        resort.vibeTags.some((t) => t.toLowerCase().includes(query))
      );
    }).sort((a, b) => {
      switch (sortBy) {
        case "vertical":
          return b.elevation.vertical - a.elevation.vertical;
        case "topElevation":
          return b.elevation.top - a.elevation.top;
        case "travel":
          return a.fromTokyo.durationMinutes - b.fromTokyo.durationMinutes;
        case "price":
          return a.dayPassYen - b.dayPassYen;
      }
    });
  }, [selectedRegion, treeRunsOnly, searchQuery, sortBy]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Top breadcrumb / Back to Home */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-snow-muted transition hover:text-ice"
        >
          <span aria-hidden>←</span> Back to Home
        </Link>
        <span className="text-xs font-medium uppercase tracking-wider text-snow-muted">
          {filteredResorts.length} of {RESORTS.length} resorts
        </span>
      </div>

      {/* Page Header */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-ice">
          Nagano · Niigata · Gunma
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-snow sm:text-4xl">
          Japan Resort Directory
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-snow-muted sm:text-base">
          Filter by prefecture, tree-riding access, travel time from Tokyo, or
          vertical drop to pick your next powder mission.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-charcoal-light bg-charcoal-light/40 p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Region Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {(["All", ...REGIONS] as const).map((region) => {
              const active = selectedRegion === region;
              const count =
                region === "All"
                  ? RESORTS.length
                  : RESORTS.filter((r) => r.region === region).length;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
                    active
                      ? "bg-ice-deep text-charcoal shadow-md shadow-ice-deep/25"
                      : "bg-charcoal text-snow-muted hover:text-snow"
                  }`}
                >
                  {region}{" "}
                  <span
                    className={`ml-1 text-xs ${
                      active ? "text-charcoal/80" : "text-snow-muted"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tree Runs Toggle */}
          <button
            type="button"
            onClick={() => setTreeRunsOnly((v) => !v)}
            className={`inline-flex items-center justify-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
              treeRunsOnly
                ? "border-ice bg-ice/15 text-ice"
                : "border-charcoal-light bg-charcoal text-snow-muted hover:text-snow"
            }`}
          >
            <span aria-hidden>🌲</span> Tree Runs Allowed
          </button>
        </div>

        {/* Search + Sort Row */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resort, area (e.g. Hakuba, Yuzawa), or vibe..."
              className="w-full rounded-xl border border-charcoal-light bg-charcoal px-4 py-2.5 text-sm text-snow placeholder-snow-muted focus:border-ice focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="sort-resorts"
              className="whitespace-nowrap text-xs font-medium text-snow-muted"
            >
              Sort by:
            </label>
            <select
              id="sort-resorts"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="w-full rounded-xl border border-charcoal-light bg-charcoal px-3 py-2.5 text-sm text-snow focus:border-ice focus:outline-none sm:w-auto"
            >
              <option value="vertical">Biggest Vertical (m)</option>
              <option value="topElevation">Highest Peak (m)</option>
              <option value="travel">Fastest from Tokyo</option>
              <option value="price">Cheapest Day Pass (¥)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Resort Grid */}
      {filteredResorts.length === 0 ? (
        <div className="rounded-2xl border border-charcoal-light bg-charcoal-light/20 p-12 text-center">
          <p className="text-base font-semibold text-snow">
            No resorts match your filters.
          </p>
          <p className="mt-1 text-sm text-snow-muted">
            Try clearing your search or switching regions.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedRegion("All");
              setTreeRunsOnly(false);
              setSearchQuery("");
            }}
            className="mt-4 rounded-xl bg-ice-deep px-4 py-2 text-xs font-semibold text-charcoal transition hover:bg-ice"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResorts.map((resort) => {
            const hours = Math.floor(resort.fromTokyo.durationMinutes / 60);
            const mins = resort.fromTokyo.durationMinutes % 60;
            const durationLabel =
              hours > 0 ? `${hours}h ${mins > 0 ? `${mins}m` : ""}` : `${mins}m`;

            return (
              <article
                key={resort.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-charcoal-light bg-charcoal-light/35 transition hover:border-ice/60 hover:bg-charcoal-light/55"
              >
                <div>
                  {/* Resort Photo Header */}
                  <Link
                    href={`/resorts/${resort.slug}`}
                    className="relative block h-44 w-full overflow-hidden bg-charcoal-dark"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={resort.heroImage}
                      alt={`${resort.name} snow mountain view`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />

                    {/* Top Overlay Badges */}
                    <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
                      <span className="rounded-full bg-charcoal/85 px-3 py-1 text-xs font-semibold text-ice backdrop-blur-sm">
                        {resort.region} · {resort.area}
                      </span>
                      {resort.terrain.treeRunsAllowed && (
                        <span
                          title="Official tree riding zones"
                          className="rounded-full bg-charcoal/85 px-2.5 py-1 text-xs font-medium text-snow backdrop-blur-sm"
                        >
                          🌲 Trees OK
                        </span>
                      )}
                    </div>

                    {/* Peak Elevation Badge */}
                    <div className="absolute bottom-2.5 right-3 rounded-md bg-charcoal/85 px-2 py-0.5 text-[11px] font-semibold text-snow-muted backdrop-blur-sm">
                      Peak {resort.elevation.top}m
                    </div>
                  </Link>

                  <div className="p-5 pb-0">
                    {/* Resort Name */}
                    <div>
                      <Link
                        href={`/resorts/${resort.slug}`}
                        className="block text-xl font-bold text-snow transition group-hover:text-ice"
                      >
                        {resort.name}
                      </Link>
                      <p className="text-xs text-snow-muted">
                        {resort.japaneseName}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-snow-muted">
                      {resort.description}
                    </p>

                    {/* Vibe Tags */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {resort.vibeTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-charcoal px-2.5 py-1 text-xs font-medium text-snow"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-4">
                  <div className="border-t border-charcoal-light pt-4">
                    {/* Key Stats Grid */}
                    <dl className="grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-lg bg-charcoal/70 p-2">
                        <dt className="text-[11px] uppercase text-snow-muted">
                          Vertical
                        </dt>
                        <dd className="mt-0.5 text-sm font-bold text-snow">
                          {resort.elevation.vertical}m
                        </dd>
                      </div>
                      <div className="rounded-lg bg-charcoal/70 p-2">
                        <dt className="text-[11px] uppercase text-snow-muted">
                          From Tokyo
                        </dt>
                        <dd className="mt-0.5 text-sm font-bold text-snow">
                          ~{durationLabel}
                        </dd>
                      </div>
                      <div className="rounded-lg bg-charcoal/70 p-2">
                        <dt className="text-[11px] uppercase text-snow-muted">
                          Day Pass
                        </dt>
                        <dd className="mt-0.5 text-sm font-bold text-ice">
                          ¥{resort.dayPassYen.toLocaleString()}
                        </dd>
                      </div>
                    </dl>

                    {/* Terrain Breakdown Bar */}
                    <div className="mt-3">
                      <div className="flex justify-between text-[11px] text-snow-muted">
                        <span>Beg {resort.terrain.beginner}%</span>
                        <span>Int {resort.terrain.intermediate}%</span>
                        <span>Adv {resort.terrain.advanced}%</span>
                      </div>
                      <div className="mt-1 flex h-1.5 overflow-hidden rounded-full bg-charcoal">
                        <div
                          style={{ width: `${resort.terrain.beginner}%` }}
                          className="bg-emerald-400"
                        />
                        <div
                          style={{ width: `${resort.terrain.intermediate}%` }}
                          className="bg-ice-deep"
                        />
                        <div
                          style={{ width: `${resort.terrain.advanced}%` }}
                          className="bg-rose-500"
                        />
                      </div>
                    </div>

                    {/* Card Footer CTA */}
                    <div className="mt-4 flex gap-2">
                      <Link
                        href={`/resorts/${resort.slug}`}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-charcoal px-4 py-2.5 text-xs font-semibold text-snow transition group-hover:bg-ice-deep group-hover:text-charcoal"
                      >
                        Trail Map & Guide <span aria-hidden>→</span>
                      </Link>
                      <a
                        href={resort.trailMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open official trail map"
                        className="inline-flex items-center justify-center rounded-xl border border-charcoal-light bg-charcoal px-3 py-2.5 text-xs font-semibold text-ice transition hover:border-ice"
                      >
                        🗺️
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
