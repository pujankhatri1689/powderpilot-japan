"use client";

import "leaflet/dist/leaflet.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type * as LeafletNamespace from "leaflet";
import { useFavorites } from "@/context/FavoritesContext";
import { useLanguage } from "@/context/LanguageContext";
import { RESORTS, type Resort } from "@/data/resorts";

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDE2IDEwIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIGZpbGw9IiMxZTI5M2IiLz48L3N2Zz4=";

export interface SnowMapWeatherItem {
  slug: string;
  sevenDaySnowCm: number;
  next24hSnowCm: number;
  currentTempC: number;
  freezingLevelM?: number;
}

export type PinMetricMode = "elevation" | "snow" | "price";
type MapTileStyle = "dark" | "topo";
type SnowZoneKey = "all" | "hokkaido" | "tohoku" | "nagano" | "niigata" | "central";

interface JapanSnowBeltMapProps {
  resorts: Resort[];
  weatherBySlug?: Record<string, SnowMapWeatherItem>;
  defaultPinMetric?: PinMetricMode;
  initialSelectedSlug?: string;
}

const ZONE_CAMERA: Record<
  SnowZoneKey,
  { center: [number, number]; zoom: number }
> = {
  all: { center: [38.6, 138.8], zoom: 5 },
  hokkaido: { center: [43.15, 141.65], zoom: 7 },
  tohoku: { center: [39.15, 140.45], zoom: 7 },
  nagano: { center: [36.68, 138.18], zoom: 9 },
  niigata: { center: [36.96, 138.58], zoom: 9 },
  central: { center: [35.95, 137.45], zoom: 7 },
};

/**
 * Computes deterministic slight coordinate offsets for resorts that share the exact same valley
 * (within ~1.5km) so every pin on the map remains distinct and clickable at regional zoom levels.
 */
function buildDisplayCoordinates(
  resorts: Resort[]
): Record<string, { lat: number; lon: number }> {
  const result: Record<string, { lat: number; lon: number }> = {};
  const placed: { slug: string; lat: number; lon: number }[] = [];

  for (const r of resorts) {
    let { lat, lon } = r.coordinates;
    // Count how many already-placed resorts are very close (<0.018 degrees)
    const nearbyCount = placed.filter(
      (p) =>
        Math.abs(p.lat - lat) < 0.018 && Math.abs(p.lon - lon) < 0.018
    ).length;

    if (nearbyCount > 0) {
      const angle = nearbyCount * 2.15; // Golden-angle-like spiral in radians
      const radius = 0.0085 * Math.ceil(nearbyCount / 2);
      lat = Number((lat + Math.sin(angle) * radius).toFixed(5));
      lon = Number((lon + Math.cos(angle) * radius).toFixed(5));
    }

    placed.push({ slug: r.slug, lat, lon });
    result[r.slug] = { lat, lon };
  }

  return result;
}

export default function JapanSnowBeltMap({
  resorts,
  weatherBySlug,
  defaultPinMetric = "elevation",
  initialSelectedSlug,
}: JapanSnowBeltMapProps) {
  const { t, localizeResort, localizeRegion } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();

  const hasWeather = Boolean(
    weatherBySlug && Object.keys(weatherBySlug).length > 0
  );

  const [tileStyle, setTileStyle] = useState<MapTileStyle>("dark");
  const [pinMetric, setPinMetric] = useState<PinMetricMode>(
    hasWeather ? defaultPinMetric : "elevation"
  );
  const [activeZone, setActiveZone] = useState<SnowZoneKey>("all");
  const [selectedSlug, setSelectedSlug] = useState<string>(() => {
    if (
      initialSelectedSlug &&
      resorts.some((r) => r.slug === initialSelectedSlug)
    ) {
      return initialSelectedSlug;
    }
    return resorts[0]?.slug ?? RESORTS[0].slug;
  });

  // Sync pinMetric if weatherBySlug becomes available and defaultPinMetric is snow
  const [prevHasWeather, setPrevHasWeather] = useState(hasWeather);
  if (prevHasWeather !== hasWeather) {
    setPrevHasWeather(hasWeather);
    if (hasWeather && defaultPinMetric === "snow") {
      setPinMetric("snow");
    }
  }

  // Keep selectedSlug valid within filtered resorts list using state-adjustment-during-render
  const isSelectedInFiltered = resorts.some((r) => r.slug === selectedSlug);
  if (!isSelectedInFiltered && resorts.length > 0) {
    setSelectedSlug(resorts[0].slug);
  }

  const displayCoords = useMemo(
    () => buildDisplayCoordinates(RESORTS),
    []
  );

  const selectedRawResort = useMemo(() => {
    return (
      resorts.find((r) => r.slug === selectedSlug) ??
      RESORTS.find((r) => r.slug === selectedSlug) ??
      resorts[0] ??
      RESORTS[0]
    );
  }, [resorts, selectedSlug]);

  const selectedResort = useMemo(
    () => localizeResort(selectedRawResort),
    [selectedRawResort, localizeResort]
  );

  const selectedWeather = weatherBySlug?.[selectedResort.slug];

  // Nearby resorts in the same area or prefecture for 1-tap valley hopping
  const valleyNeighbors = useMemo(() => {
    const sameArea = resorts.filter(
      (r) =>
        r.slug !== selectedRawResort.slug && r.area === selectedRawResort.area
    );
    if (sameArea.length > 0) return sameArea.slice(0, 5);
    return resorts
      .filter(
        (r) =>
          r.slug !== selectedRawResort.slug &&
          r.region === selectedRawResort.region
      )
      .slice(0, 5);
  }, [resorts, selectedRawResort]);

  // Leaflet imperative refs
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<LeafletNamespace.Map | null>(null);
  const tileLayerRef = useRef<LeafletNamespace.TileLayer | null>(null);
  const markersLayerRef = useRef<LeafletNamespace.LayerGroup | null>(null);
  const leafletLibRef = useRef<typeof LeafletNamespace | null>(null);
  const [mapReady, setMapReady] = useState(false);

  // 1. Initialize Leaflet map once on client mount
  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      const L = await import("leaflet");
      if (!isMounted || !mapContainerRef.current) return;

      leafletLibRef.current = L;

      const map = L.map(mapContainerRef.current, {
        center: ZONE_CAMERA.all.center,
        zoom: ZONE_CAMERA.all.zoom,
        minZoom: 4,
        maxZoom: 15,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      const darkTiles = L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);

      mapInstanceRef.current = map;
      tileLayerRef.current = darkTiles;
      markersLayerRef.current = markersGroup;
      setMapReady(true);
    }

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        tileLayerRef.current = null;
        markersLayerRef.current = null;
      }
    };
  }, []);

  // 2. Update tile layer when user switches between Dark Radar & Topo Terrain
  useEffect(() => {
    const L = leafletLibRef.current;
    const map = mapInstanceRef.current;
    if (!mapReady || !L || !map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    const nextTileLayer =
      tileStyle === "topo"
        ? L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
            attribution:
              'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>, SRTM | Style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
            maxZoom: 17,
          })
        : L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
            {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
              subdomains: "abcd",
              maxZoom: 19,
            }
          );

    nextTileLayer.addTo(map);
    tileLayerRef.current = nextTileLayer;
  }, [tileStyle, mapReady]);

  // 3. Render custom pill markers whenever resorts, selectedSlug, pinMetric, or weather changes
  useEffect(() => {
    const L = leafletLibRef.current;
    const map = mapInstanceRef.current;
    const group = markersLayerRef.current;
    if (!mapReady || !L || !map || !group) return;

    group.clearLayers();

    resorts.forEach((rawResort) => {
      const resort = localizeResort(rawResort);
      const coords =
        displayCoords[rawResort.slug] ?? rawResort.coordinates;
      const isSelected = rawResort.slug === selectedSlug;
      const weather = weatherBySlug?.[rawResort.slug];
      const snowCm = weather?.sevenDaySnowCm ?? 0;

      // Determine pill label text based on selected metric
      let badgeText = `${rawResort.elevation.top}m`;
      if (pinMetric === "snow" && weather) {
        badgeText = `${snowCm}cm`;
      } else if (pinMetric === "price") {
        badgeText = `¥${Math.round(rawResort.dayPassYen / 100) / 10}k`;
      }

      // Color styling based on state
      const isHeavyDump = pinMetric === "snow" && snowCm >= 30;
      const bgClass = isSelected
        ? "background:#38bdf8;color:#0f172a;border:2px solid #ffffff;box-shadow:0 0 0 4px rgba(56,189,248,0.38),0 8px 20px rgba(0,0,0,0.6);transform:scale(1.14);z-index:999;"
        : isHeavyDump
        ? "background:#0284c7;color:#f8fafc;border:1.5px solid #7dd3fc;box-shadow:0 4px 14px rgba(2,132,199,0.5);"
        : rawResort.terrain.treeRunsAllowed
        ? "background:rgba(15,23,42,0.92);color:#e2e8f0;border:1.5px solid #34d399;box-shadow:0 4px 12px rgba(0,0,0,0.45);"
        : "background:rgba(15,23,42,0.92);color:#cbd5e1;border:1.5px solid #475569;box-shadow:0 4px 12px rgba(0,0,0,0.45);";

      const dotHtml = rawResort.terrain.treeRunsAllowed
        ? `<span style="display:inline-block;width:6px;height:6px;border-radius:9999px;background:${
            isSelected ? "#0f172a" : "#34d399"
          };margin-right:4px;"></span>`
        : `<span style="display:inline-block;width:6px;height:6px;border-radius:9999px;background:${
            isSelected ? "#0f172a" : "#38bdf8"
          };margin-right:4px;"></span>`;

      const html = `
        <div style="display:inline-flex;align-items:center;white-space:nowrap;border-radius:9999px;padding:3px 8px;font-size:11px;font-weight:800;letter-spacing:0.01em;transition:all 150ms ease;cursor:pointer;${bgClass}">
          ${dotHtml}<span>${badgeText}</span>
        </div>
      `;

      const icon = L.divIcon({
        className: "powderpilot-div-marker",
        html,
        iconSize: [64, 26],
        iconAnchor: [32, 13],
      });

      const marker = L.marker([coords.lat, coords.lon], {
        icon,
        zIndexOffset: isSelected ? 1000 : snowCm >= 30 ? 400 : 0,
      });

      marker.bindTooltip(
        `${resort.name} (${localizeRegion(rawResort.region)}) · ${badgeText}`,
        {
          direction: "top",
          offset: [0, -10],
          className: "powderpilot-pin-tooltip",
        }
      );

      marker.on("click", () => {
        setSelectedSlug(rawResort.slug);
        map.flyTo([coords.lat, coords.lon], Math.max(map.getZoom(), 9), {
          duration: 0.65,
        });
      });

      marker.addTo(group);
    });
  }, [
    resorts,
    selectedSlug,
    pinMetric,
    weatherBySlug,
    displayCoords,
    localizeResort,
    localizeRegion,
    mapReady,
  ]);

  // 4. Automatically fit map bounds when filtered resort set changes
  const filterSignature = useMemo(
    () => resorts.map((r) => r.slug).join(","),
    [resorts]
  );

  useEffect(() => {
    const L = leafletLibRef.current;
    const map = mapInstanceRef.current;
    if (!mapReady || !L || !map || resorts.length === 0) return;

    if (resorts.length === RESORTS.length) {
      map.flyTo(ZONE_CAMERA.all.center, ZONE_CAMERA.all.zoom, {
        duration: 0.7,
      });
      return;
    }

    if (resorts.length === 1) {
      const only = resorts[0];
      const c = displayCoords[only.slug] ?? only.coordinates;
      map.flyTo([c.lat, c.lon], 10, { duration: 0.7 });
      return;
    }

    const bounds = L.latLngBounds(
      resorts.map((r) => {
        const c = displayCoords[r.slug] ?? r.coordinates;
        return [c.lat, c.lon] as [number, number];
      })
    );
    map.flyToBounds(bounds, {
      padding: [42, 42],
      maxZoom: 10,
      duration: 0.75,
    });
  }, [filterSignature, mapReady, resorts, displayCoords]);

  function handleZoneJump(zone: SnowZoneKey) {
    setActiveZone(zone);
    const map = mapInstanceRef.current;
    if (!map) return;
    const target = ZONE_CAMERA[zone];
    map.flyTo(target.center, target.zoom, { duration: 0.75 });
  }

  function handleZoomToSelected() {
    const map = mapInstanceRef.current;
    if (!map || !selectedRawResort) return;
    const c =
      displayCoords[selectedRawResort.slug] ?? selectedRawResort.coordinates;
    map.flyTo([c.lat, c.lon], 11, { duration: 0.75 });
  }

  const hours = Math.floor(selectedResort.fromTokyo.durationMinutes / 60);
  const mins = selectedResort.fromTokyo.durationMinutes % 60;
  const durationLabel =
    hours > 0 ? `${hours}h ${mins > 0 ? `${mins}m` : ""}` : `${mins}m`;

  return (
    <section
      aria-label={t.snowMap.title}
      className="rounded-2xl border border-charcoal-light bg-charcoal-light/30 p-3 sm:p-5"
    >
      {/* Top Controls Bar: Quick Snow Belt Zones + Map Style & Pin Metric Switchers */}
      <div className="mb-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* Regional Quick-Jump Camera Pills */}
        <div
          role="group"
          aria-label="Snow belt camera zones"
          className="flex snap-x snap-mandatory items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar lg:pb-0"
        >
          {(
            [
              { key: "all", label: t.snowMap.zoneAll },
              { key: "hokkaido", label: t.snowMap.zoneHokkaido },
              { key: "tohoku", label: t.snowMap.zoneTohoku },
              { key: "nagano", label: t.snowMap.zoneNagano },
              { key: "niigata", label: t.snowMap.zoneNiigata },
              { key: "central", label: t.snowMap.zoneCentral },
            ] as const
          ).map((z) => {
            const active = activeZone === z.key;
            return (
              <button
                key={z.key}
                type="button"
                onClick={() => handleZoneJump(z.key)}
                className={`inline-flex min-h-9 shrink-0 snap-start items-center rounded-xl px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice ${
                  active
                    ? "bg-ice-deep text-charcoal font-bold shadow-sm shadow-ice-deep/30"
                    : "border border-charcoal-light bg-charcoal text-snow-muted hover:border-ice/50 hover:text-snow"
                }`}
              >
                {z.label}
              </button>
            );
          })}
        </div>

        {/* Right Controls: Pin Metric Mode + Tile Style */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Pin Metric Selector */}
          <div
            role="group"
            aria-label="Map pin metric"
            className="inline-flex rounded-xl border border-charcoal-light bg-charcoal p-1"
          >
            <button
              type="button"
              onClick={() => setPinMetric("elevation")}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                pinMetric === "elevation"
                  ? "bg-ice-deep text-charcoal font-bold"
                  : "text-snow-muted hover:text-snow"
              }`}
            >
              {t.snowMap.metricElevation}
            </button>
            {hasWeather && (
              <button
                type="button"
                onClick={() => setPinMetric("snow")}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                  pinMetric === "snow"
                    ? "bg-ice-deep text-charcoal font-bold"
                    : "text-snow-muted hover:text-snow"
                }`}
              >
                {t.snowMap.metricSnow}
              </button>
            )}
            <button
              type="button"
              onClick={() => setPinMetric("price")}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                pinMetric === "price"
                  ? "bg-ice-deep text-charcoal font-bold"
                  : "text-snow-muted hover:text-snow"
              }`}
            >
              {t.snowMap.metricPrice}
            </button>
          </div>

          {/* Map Tile Style Selector */}
          <div
            role="group"
            aria-label="Map tile style"
            className="inline-flex rounded-xl border border-charcoal-light bg-charcoal p-1"
          >
            <button
              type="button"
              onClick={() => setTileStyle("dark")}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                tileStyle === "dark"
                  ? "bg-charcoal-light text-ice font-bold"
                  : "text-snow-muted hover:text-snow"
              }`}
            >
              {t.snowMap.styleDark}
            </button>
            <button
              type="button"
              onClick={() => setTileStyle("topo")}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                tileStyle === "topo"
                  ? "bg-charcoal-light text-ice font-bold"
                  : "text-snow-muted hover:text-snow"
              }`}
            >
              {t.snowMap.styleTopo}
            </button>
          </div>
        </div>
      </div>

      {/* Main Split View: Interactive Map Canvas (Left) + Selected Mountain Intel Card (Right) */}
      <div className="grid gap-4 lg:grid-cols-12">
        {/* Map Canvas Column */}
        <div className="relative overflow-hidden rounded-2xl border border-charcoal-light bg-charcoal-dark lg:col-span-7 xl:col-span-8">
          <div
            ref={mapContainerRef}
            className="h-[430px] w-full sm:h-[540px] lg:h-[600px]"
          />

          {/* Floating Top-Right Overlay: Count & Reset View */}
          <div className="pointer-events-none absolute right-3 top-3 z-[400] flex flex-wrap items-center gap-2">
            <span className="rounded-xl border border-charcoal-light bg-charcoal/90 px-3 py-1.5 text-xs font-semibold text-ice backdrop-blur-md">
              {t.snowMap.pinsShowing(resorts.length)}
            </span>
            <button
              type="button"
              onClick={() => handleZoneJump("all")}
              className="pointer-events-auto rounded-xl border border-charcoal-light bg-charcoal/90 px-3 py-1.5 text-xs font-semibold text-snow transition hover:border-ice hover:text-ice backdrop-blur-md"
            >
              {t.snowMap.resetView}
            </button>
          </div>

          {/* Floating Bottom-Left Legend */}
          <div className="pointer-events-none absolute bottom-3 left-3 z-[400] flex flex-wrap items-center gap-2 rounded-xl border border-charcoal-light bg-charcoal/90 px-3 py-1.5 text-[11px] font-medium text-snow-muted backdrop-blur-md">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              {t.snowMap.legendTreeOk}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
              {t.snowMap.legendAlpine}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ice" />
              {t.snowMap.legendSelected}
            </span>
            {pinMetric === "snow" && (
              <span className="inline-flex items-center gap-1.5 text-ice">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-500 ring-2 ring-ice/40" />
                {t.snowMap.legendHeavySnow}
              </span>
            )}
          </div>
        </div>

        {/* Selected Mountain Intel Card Column */}
        <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-charcoal-light bg-charcoal lg:col-span-5 xl:col-span-4">
          <div>
            {/* Resort Hero Banner */}
            <div className="relative h-44 w-full overflow-hidden bg-charcoal-dark sm:h-48">
              <Image
                src={selectedResort.heroImage}
                alt={selectedResort.name}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent" />

              {/* Top Overlay: Region + Favorite + Zoom to Pin */}
              <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
                <span className="rounded-full bg-charcoal/85 px-3 py-1 text-xs font-semibold text-ice backdrop-blur-sm">
                  {localizeRegion(selectedRawResort.region)} ·{" "}
                  {selectedResort.area}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleZoomToSelected}
                    className="rounded-full bg-charcoal/85 px-2.5 py-1 text-xs font-semibold text-snow transition hover:bg-ice-deep hover:text-charcoal backdrop-blur-sm"
                  >
                    {t.snowMap.zoomToPin}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(selectedResort.slug, e)}
                    aria-label="Toggle favorite"
                    aria-pressed={isFavorite(selectedResort.slug)}
                    className={`flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition active:scale-90 ${
                      isFavorite(selectedResort.slug)
                        ? "bg-white text-rose-500 shadow-md"
                        : "bg-charcoal/85 text-snow/80 hover:text-rose-400"
                    }`}
                  >
                    <span className="text-sm">
                      {isFavorite(selectedResort.slug) ? "❤️" : "🤍"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Bottom Hero Overlay: Tree Run Policy & GPS */}
              <div className="absolute inset-x-3 bottom-2.5 flex items-center justify-between gap-2">
                <span
                  className={`rounded-md px-2.5 py-0.5 text-[11px] font-semibold backdrop-blur-sm ${
                    selectedResort.terrain.treeRunsAllowed
                      ? "bg-emerald-500/25 text-emerald-300 border border-emerald-400/40"
                      : "bg-charcoal/85 text-snow-muted"
                  }`}
                >
                  {selectedResort.terrain.treeRunsAllowed
                    ? t.snowMap.treesAllowed
                    : t.snowMap.pisteFocus}
                </span>
                <span className="rounded-md bg-charcoal/85 px-2 py-0.5 font-mono text-[10px] text-snow-muted backdrop-blur-sm">
                  {selectedRawResort.coordinates.lat.toFixed(2)}°N,{" "}
                  {selectedRawResort.coordinates.lon.toFixed(2)}°E
                </span>
              </div>
            </div>

            {/* Resort Title & Description */}
            <div className="p-4 sm:p-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <Link
                    href={`/resorts/${selectedResort.slug}`}
                    className="text-xl font-extrabold text-snow transition hover:text-ice"
                  >
                    {selectedResort.name}
                  </Link>
                  <p className="text-xs text-snow-muted">
                    {selectedResort.japaneseName}
                  </p>
                </div>
                <span className="shrink-0 rounded-lg bg-charcoal-light/80 px-2.5 py-1 text-xs font-bold text-ice">
                  {selectedResort.terrain.runs} runs ·{" "}
                  {selectedResort.terrain.lifts} lifts
                </span>
              </div>

              <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-snow-muted sm:text-sm">
                {selectedResort.description}
              </p>

              {/* Live / Simulated Weather Strip if weatherBySlug is available */}
              {selectedWeather && (
                <div className="mt-3.5 grid grid-cols-3 gap-2 rounded-xl border border-ice/30 bg-ice-deep/10 p-2.5 text-center">
                  <div>
                    <p className="text-[10px] uppercase text-snow-muted">
                      {t.snowMap.sevenDaySnowLabel}
                    </p>
                    <p className="mt-0.5 text-sm font-extrabold text-ice">
                      {selectedWeather.sevenDaySnowCm} cm
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-snow-muted">
                      {t.snowMap.next24hLabel}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-snow">
                      {selectedWeather.next24hSnowCm} cm
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-snow-muted">
                      {t.snowMap.peakTempLabel}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-snow">
                      {selectedWeather.currentTempC}°C
                    </p>
                  </div>
                </div>
              )}

              {/* 4-Stat Mountain Telemetry Grid */}
              <dl className="mt-3.5 grid grid-cols-2 gap-2 text-center sm:grid-cols-4 lg:grid-cols-2">
                <div className="rounded-xl bg-charcoal-light/45 p-2.5">
                  <dt className="text-[10px] uppercase text-snow-muted">
                    {t.snowMap.peakLabel}
                  </dt>
                  <dd className="mt-0.5 text-sm font-bold text-snow">
                    {selectedResort.elevation.top}m
                  </dd>
                </div>
                <div className="rounded-xl bg-charcoal-light/45 p-2.5">
                  <dt className="text-[10px] uppercase text-snow-muted">
                    {t.snowMap.verticalLabel}
                  </dt>
                  <dd className="mt-0.5 text-sm font-bold text-snow">
                    {selectedResort.elevation.vertical}m
                  </dd>
                </div>
                <div className="rounded-xl bg-charcoal-light/45 p-2.5">
                  <dt className="text-[10px] uppercase text-snow-muted">
                    {t.snowMap.fromTokyoLabel}
                  </dt>
                  <dd className="mt-0.5 text-sm font-bold text-snow">
                    ~{durationLabel}
                  </dd>
                </div>
                <div className="rounded-xl bg-charcoal-light/45 p-2.5">
                  <dt className="text-[10px] uppercase text-snow-muted">
                    {t.snowMap.dayPassLabel}
                  </dt>
                  <dd className="mt-0.5 text-sm font-bold text-ice">
                    ¥{selectedResort.dayPassYen.toLocaleString()}
                  </dd>
                </div>
              </dl>

              {/* Valley Neighbors Quick-Hop Chips */}
              {valleyNeighbors.length > 0 && (
                <div className="mt-4 border-t border-charcoal-light pt-3">
                  <p className="text-[11px] font-semibold text-snow-muted">
                    {t.snowMap.nearbyInArea(selectedResort.area)}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {valleyNeighbors.map((neighbor) => {
                      const locNeighbor = localizeResort(neighbor);
                      return (
                        <button
                          key={neighbor.slug}
                          type="button"
                          onClick={() => {
                            setSelectedSlug(neighbor.slug);
                            const map = mapInstanceRef.current;
                            const c =
                              displayCoords[neighbor.slug] ??
                              neighbor.coordinates;
                            if (map) {
                              map.flyTo([c.lat, c.lon], Math.max(map.getZoom(), 10), {
                                duration: 0.6,
                              });
                            }
                          }}
                          className="rounded-lg border border-charcoal-light bg-charcoal-light/40 px-2.5 py-1 text-xs font-medium text-snow transition hover:border-ice hover:text-ice"
                        >
                          {locNeighbor.name.split(/[\s(（]/)[0]}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card Footer Action Buttons */}
          <div className="border-t border-charcoal-light p-4 pt-3 sm:px-5">
            <div className="flex gap-2">
              <Link
                href={`/resorts/${selectedResort.slug}`}
                className="flex min-h-11 flex-1 items-center justify-center rounded-xl bg-ice-deep px-4 py-2.5 text-xs font-bold text-charcoal shadow-md shadow-ice-deep/20 transition hover:bg-ice"
              >
                {t.snowMap.openResortGuide}
              </Link>
              <Link
                href={`/resorts/${selectedResort.slug}?tab=weather`}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-charcoal-light bg-charcoal-light/50 px-3.5 py-2.5 text-xs font-semibold text-ice transition hover:border-ice"
              >
                {t.snowMap.openWeatherRadar}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
