"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import JapanSnowBeltMap from "@/components/JapanSnowBeltMap";
import { useFavorites } from "@/context/FavoritesContext";
import { useLanguage } from "@/context/LanguageContext";
import { REGIONS, RESORTS, type Region } from "@/data/resorts";
import { getLocalizedResort } from "@/i18n/resortTranslations";

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDE2IDEwIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIGZpbGw9IiMxZTI5M2IiLz48L3N2Zz4=";

type SortKey = "vertical" | "travel" | "price" | "topElevation";
type DirectoryViewMode = "grid" | "map";

export default function ResortDirectory() {
  const searchParams = useSearchParams();
  const { isFavorite, toggleFavorite, favoritesCount } = useFavorites();
  const { lang, t, localizeResort, localizeRegion } = useLanguage();

  const [selectedRegion, setSelectedRegion] = useState<Region | "All">(() => {
    const fromUrl = searchParams.get("region");
    return fromUrl && REGIONS.includes(fromUrl as Region)
      ? (fromUrl as Region)
      : "All";
  });
  const [treeRunsOnly, setTreeRunsOnly] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(
    () => searchParams.get("favorites") === "true",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("vertical");
  const [visibleLimit, setVisibleLimit] = useState(18);
  const [viewMode, setViewMode] = useState<DirectoryViewMode>(() =>
    searchParams.get("view") === "map" ? "map" : "grid"
  );

  // Sync selectedRegion, favorites & viewMode if URL query param changes during client navigation
  const [prevUrlView, setPrevUrlView] = useState(() => searchParams.get("view"));
  const currentUrlView = searchParams.get("view");
  if (prevUrlView !== currentUrlView) {
    setPrevUrlView(currentUrlView);
    if (currentUrlView === "map" || currentUrlView === "grid") {
      setViewMode(currentUrlView);
    }
  }
  const [prevUrlRegion, setPrevUrlRegion] = useState(() => searchParams.get("region"));
  const currentUrlRegion = searchParams.get("region");
  if (prevUrlRegion !== currentUrlRegion) {
    setPrevUrlRegion(currentUrlRegion);
    if (currentUrlRegion && REGIONS.includes(currentUrlRegion as Region)) {
      setSelectedRegion(currentUrlRegion as Region);
    }
  }

  const [prevUrlFavorites, setPrevUrlFavorites] = useState(() =>
    searchParams.get("favorites")
  );
  const currentUrlFavorites = searchParams.get("favorites");
  if (prevUrlFavorites !== currentUrlFavorites) {
    setPrevUrlFavorites(currentUrlFavorites);
    setShowFavoritesOnly(currentUrlFavorites === "true");
  }

  // Reset pagination limit when filters change without cascading effect renders
  const filterKey = `${selectedRegion}-${treeRunsOnly}-${showFavoritesOnly}-${searchQuery}-${sortBy}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (prevFilterKey !== filterKey) {
    setPrevFilterKey(filterKey);
    setVisibleLimit(18);
  }

  const filteredResorts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return RESORTS.filter((resort) => {
      if (showFavoritesOnly && !isFavorite(resort.slug)) {
        return false;
      }
      if (selectedRegion !== "All" && resort.region !== selectedRegion) {
        return false;
      }
      if (treeRunsOnly && !resort.terrain.treeRunsAllowed) {
        return false;
      }
      if (!query) return true;

      // Match search query against English and Japanese resort data + regional umbrellas
      const jaResort = getLocalizedResort(resort, "ja");
      const matchesTohoku =
        (query === "tohoku" || query === "東北") &&
        ["Aomori", "Iwate", "Yamagata", "Fukushima"].includes(resort.region);
      const matchesShinetsu =
        (query === "shinetsu" || query === "信越" || query === "chubu" || query === "中部") &&
        ["Nagano", "Niigata", "Gifu"].includes(resort.region);
      const matchesKanto =
        (query === "kanto" || query === "関東") &&
        ["Gunma"].includes(resort.region);

      return (
        matchesTohoku ||
        matchesShinetsu ||
        matchesKanto ||
        resort.name.toLowerCase().includes(query) ||
        resort.japaneseName.toLowerCase().includes(query) ||
        resort.area.toLowerCase().includes(query) ||
        resort.region.toLowerCase().includes(query) ||
        resort.vibeTags.some((tag) => tag.toLowerCase().includes(query)) ||
        jaResort.name.toLowerCase().includes(query) ||
        jaResort.area.toLowerCase().includes(query) ||
        jaResort.vibeTags.some((tag) => tag.toLowerCase().includes(query))
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
  }, [
    showFavoritesOnly,
    isFavorite,
    selectedRegion,
    treeRunsOnly,
    searchQuery,
    sortBy,
  ]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Page Header + Grid / Snow Map Toggle */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ice">
            {t.directory.regionsHeader}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-snow sm:text-4xl">
            {t.directory.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-snow-muted sm:text-base">
            {t.directory.subtitle}
          </p>
        </div>

        {/* View Mode Switcher: Grid vs Interactive Snow Belt Map */}
        <div
          role="group"
          aria-label="Directory view mode"
          className="inline-flex self-start rounded-xl border border-charcoal-light bg-charcoal-light/50 p-1 sm:self-auto"
        >
          <button
            type="button"
            aria-pressed={viewMode === "grid"}
            onClick={() => setViewMode("grid")}
            className={`min-h-10 rounded-lg px-4 py-2 text-xs font-bold transition sm:text-sm ${
              viewMode === "grid"
                ? "bg-ice-deep text-charcoal shadow-sm shadow-ice-deep/25"
                : "text-snow-muted hover:text-snow"
            }`}
          >
            {t.directory.viewGrid}
          </button>
          <button
            type="button"
            aria-pressed={viewMode === "map"}
            onClick={() => setViewMode("map")}
            className={`min-h-10 rounded-lg px-4 py-2 text-xs font-bold transition sm:text-sm ${
              viewMode === "map"
                ? "bg-ice-deep text-charcoal shadow-sm shadow-ice-deep/25"
                : "text-snow-muted hover:text-snow"
            }`}
          >
            {t.directory.viewMap}
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-charcoal-light bg-charcoal-light/40 p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Region Pills with live mountain count badges (thumb-scrollable on mobile) */}
          <div
            role="group"
            aria-label="Filter by prefecture"
            className="flex snap-x snap-mandatory scroll-px-2 items-center gap-2 overflow-x-auto pb-1 no-scrollbar sm:flex-wrap sm:pb-0"
          >
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
                  aria-pressed={active}
                  onClick={() => setSelectedRegion(region)}
                  className={`inline-flex min-h-11 shrink-0 snap-start items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice sm:text-sm ${
                    active
                      ? "bg-ice-deep text-charcoal shadow-md shadow-ice-deep/25 font-bold"
                      : "bg-charcoal text-snow-muted hover:text-snow"
                  }`}
                >
                  <span>{localizeRegion(region)}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                      active
                        ? "bg-charcoal/20 text-charcoal"
                        : "bg-charcoal-light/70 text-snow-muted"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right toggle actions (Favorites & Tree runs) */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              aria-pressed={showFavoritesOnly}
              onClick={() => setShowFavoritesOnly((v) => !v)}
              className={`inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice sm:text-sm ${
                showFavoritesOnly
                  ? "border-rose-500 bg-rose-500/20 text-rose-300"
                  : "border-charcoal-light bg-charcoal text-snow-muted hover:text-snow"
              }`}
            >
              <span aria-hidden>{showFavoritesOnly ? "❤️" : "🤍"}</span>
              <span>{t.directory.likedBtn(favoritesCount)}</span>
            </button>

            {/* Tree Runs Toggle */}
            <button
              type="button"
              aria-pressed={treeRunsOnly}
              onClick={() => setTreeRunsOnly((v) => !v)}
              className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice sm:text-sm ${
                treeRunsOnly
                  ? "border-ice bg-ice/15 text-ice"
                  : "border-charcoal-light bg-charcoal text-snow-muted hover:text-snow"
              }`}
            >
              <span aria-hidden>🌲</span> {t.directory.treeRunsBtn}
            </button>
          </div>
        </div>

        {/* Search + Sort Row */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.directory.searchPlaceholder}
              className="min-h-11 w-full rounded-xl border border-charcoal-light bg-charcoal px-4 py-2.5 text-base text-snow placeholder-snow-muted focus:border-ice focus:outline-none sm:text-sm"
            />
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="sort-resorts"
              className="whitespace-nowrap text-xs font-medium text-snow-muted"
            >
              {t.directory.sortByLabel}
            </label>
            <select
              id="sort-resorts"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="min-h-11 w-full rounded-xl border border-charcoal-light bg-charcoal px-3 py-2.5 text-sm text-snow focus:border-ice focus:outline-none sm:w-auto"
            >
              <option value="vertical">{t.directory.sortVertical}</option>
              <option value="topElevation">
                {t.directory.sortTopElevation}
              </option>
              <option value="travel">{t.directory.sortTravel}</option>
              <option value="price">{t.directory.sortPrice}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Resort Grid or Interactive Japan Snow Belt Map */}
      {filteredResorts.length === 0 ? (
        <div className="rounded-2xl border border-charcoal-light bg-charcoal-light/20 p-12 text-center">
          <p className="text-base font-semibold text-snow">
            {t.directory.noMatchTitle}
          </p>
          <p className="mt-1 text-sm text-snow-muted">
            {t.directory.noMatchSub}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedRegion("All");
              setTreeRunsOnly(false);
              setShowFavoritesOnly(false);
              setSearchQuery("");
            }}
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-ice-deep px-4 py-2 text-xs font-semibold text-charcoal transition hover:bg-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
          >
            {t.directory.resetFilters}
          </button>
        </div>
      ) : viewMode === "map" ? (
        <JapanSnowBeltMap
          resorts={filteredResorts}
          defaultPinMetric={sortBy === "price" ? "price" : "elevation"}
        />
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResorts.slice(0, visibleLimit).map((rawResort) => {
              const resort = localizeResort(rawResort);
            const hours = Math.floor(resort.fromTokyo.durationMinutes / 60);
            const mins = resort.fromTokyo.durationMinutes % 60;
            const durationLabel =
              hours > 0
                ? `${hours}h ${mins > 0 ? `${mins}m` : ""}`
                : `${mins}m`;

            return (
              <article
                key={resort.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-charcoal-light bg-charcoal-light/35 transition hover:border-ice/60 hover:bg-charcoal-light/55"
              >
                <div>
                  {/* Resort Photo Header */}
                  <Link
                    href={`/resorts/${resort.slug}`}
                    className="relative block h-44 w-full overflow-hidden bg-charcoal-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
                  >
                    <Image
                      src={resort.heroImage}
                      alt={`${resort.name} snow mountain view`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />

                    {/* Top Overlay Badges */}
                    <div className="absolute inset-x-3 top-2.5 flex items-center justify-between gap-2">
                      <span className="rounded-full bg-charcoal/85 px-3 py-1 text-xs font-semibold text-ice backdrop-blur-sm">
                        {localizeRegion(resort.region)} · {resort.area}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {resort.terrain.treeRunsAllowed && (
                          <span className="rounded-full bg-charcoal/85 px-2.5 py-1 text-xs font-medium text-snow backdrop-blur-sm">
                            {t.directory.treesOkBadge}
                          </span>
                        )}
                        {/* Quick Heart Button (>=44x44 tap target) */}
                        <button
                          type="button"
                          onClick={(e) => toggleFavorite(resort.slug, e)}
                          aria-label="Toggle favorite"
                          aria-pressed={isFavorite(resort.slug)}
                          className={`flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-sm transition active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice ${
                            isFavorite(resort.slug)
                              ? "bg-white text-rose-500 shadow-md shadow-charcoal/30"
                              : "bg-charcoal/85 text-snow/70 hover:bg-charcoal hover:text-rose-400"
                          }`}
                        >
                          <span className="text-sm">
                            {isFavorite(resort.slug) ? "❤️" : "🤍"}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Peak Elevation & Multi-Map Badge */}
                    <div className="absolute inset-x-3 bottom-2.5 flex items-center justify-between gap-2">
                      <span className="rounded-md bg-charcoal/85 px-2 py-0.5 text-[11px] font-semibold text-ice backdrop-blur-sm">
                        {t.directory.hdMapsBadge(resort.mapGallery.length)}
                      </span>
                      <span className="rounded-md bg-charcoal/85 px-2 py-0.5 text-[11px] font-semibold text-snow-muted backdrop-blur-sm">
                        {t.directory.peakBadge(resort.elevation.top)}
                      </span>
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
                          {t.directory.verticalStat}
                        </dt>
                        <dd className="mt-0.5 text-sm font-bold text-snow">
                          {resort.elevation.vertical}m
                        </dd>
                      </div>
                      <div className="rounded-lg bg-charcoal/70 p-2">
                        <dt className="text-[11px] uppercase text-snow-muted">
                          {t.directory.fromTokyoStat}
                        </dt>
                        <dd className="mt-0.5 text-sm font-bold text-snow">
                          ~{durationLabel}
                        </dd>
                      </div>
                      <div className="rounded-lg bg-charcoal/70 p-2">
                        <dt className="text-[11px] uppercase text-snow-muted">
                          {t.directory.dayPassStat}
                        </dt>
                        <dd className="mt-0.5 text-sm font-bold text-ice">
                          ¥{resort.dayPassYen.toLocaleString()}
                        </dd>
                      </div>
                    </dl>

                    {/* Hours & Rental Quick Strip */}
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-1 rounded-lg bg-charcoal/60 px-2.5 py-1.5 text-[11px] text-snow-muted">
                      <span>
                        🕒{" "}
                        <strong className="text-snow">
                          {resort.operatingHours.dayHours.split(/[(（]/)[0]}
                        </strong>
                      </span>
                      <span>
                        🏂 {t.directory.rentalLabel}{" "}
                        <strong className="text-snow">
                          ¥{resort.pricing.fullBoardRentalDayYen.toLocaleString()}
                        </strong>
                      </span>
                    </div>

                    {/* Terrain Breakdown Bar */}
                    <div className="mt-3">
                      <div className="flex justify-between text-[11px] text-snow-muted">
                        <span>
                          {t.directory.begShort} {resort.terrain.beginner}%
                        </span>
                        <span>
                          {t.directory.intShort} {resort.terrain.intermediate}%
                        </span>
                        <span>
                          {t.directory.advShort} {resort.terrain.advanced}%
                        </span>
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
                        className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-charcoal px-3 py-2.5 text-xs font-semibold text-snow transition group-hover:bg-ice-deep group-hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
                      >
                        {t.directory.cardCta} <span aria-hidden>→</span>
                      </Link>
                      <Link
                        href={`/resorts/${resort.slug}?tab=weather`}
                        title={t.directory.cardWeatherCta}
                        aria-label={`${resort.name} ${t.directory.cardWeatherCta}`}
                        className="inline-flex min-h-11 items-center justify-center gap-1 rounded-xl border border-charcoal-light bg-charcoal px-2.5 py-2.5 text-xs font-semibold text-ice transition hover:border-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
                      >
                        <span>❄️</span>
                        <span className="hidden sm:inline">Radar</span>
                      </Link>
                      <a
                        href={resort.trailMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={t.directory.openOfficialMap}
                        aria-label={t.directory.openOfficialMap}
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-charcoal-light bg-charcoal px-3 py-2.5 text-xs font-semibold text-ice transition hover:border-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
                      >
                        <span aria-hidden>🗺️</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Load More Pagination for scaling to 200–300 resorts */}
        {filteredResorts.length > visibleLimit && (
          <div className="mt-10 flex flex-col items-center justify-center gap-3">
            <p className="text-xs text-snow-muted">
              {lang === "ja"
                ? `${filteredResorts.length}件中 ${visibleLimit}件を表示中`
                : `Showing ${visibleLimit} of ${filteredResorts.length} resorts`}
            </p>
            <button
              type="button"
              onClick={() => setVisibleLimit((prev) => prev + 18)}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-charcoal-light bg-charcoal-dark px-6 py-3 text-sm font-semibold text-snow transition hover:border-ice hover:text-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
            >
              <span>{lang === "ja" ? "さらにスキー場を読み込む" : "Load More Resorts"}</span>
              <span className="rounded-full bg-charcoal-light px-2 py-0.5 text-xs text-ice">
                +{Math.min(18, filteredResorts.length - visibleLimit)}
              </span>
            </button>
          </div>
        )}
      </>
    )}
  </div>
);
}
