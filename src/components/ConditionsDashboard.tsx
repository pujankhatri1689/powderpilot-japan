"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { REGIONS, RESORTS, type Region, type Resort } from "@/data/resorts";

interface DailySnow {
  date: string;
  snowfallCm: number;
  tempMax: number;
  tempMin: number;
}

interface ResortWeather {
  slug: string;
  currentTempC: number;
  windSpeedKmh: number;
  snowDepthCm: number;
  freezingLevelM: number;
  sevenDaySnowCm: number;
  next24hSnowCm: number;
  daily: DailySnow[];
}

interface OpenMeteoResponse {
  current?: {
    temperature_2m?: number;
    wind_speed_10m?: number;
    snow_depth?: number;
    freezing_level_height?: number;
  };
  daily?: {
    time?: string[];
    snowfall_sum?: number[];
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
  };
}

function parseSingleForecast(
  resort: Resort,
  item: OpenMeteoResponse
): ResortWeather {
  const times = item?.daily?.time ?? [];
  const snowSums = item?.daily?.snowfall_sum ?? [];
  const maxTemps = item?.daily?.temperature_2m_max ?? [];
  const minTemps = item?.daily?.temperature_2m_min ?? [];

  const daily: DailySnow[] = times.slice(0, 7).map((date, idx) => ({
    date,
    snowfallCm: Math.round((snowSums[idx] ?? 0) * 10) / 10,
    tempMax: Math.round(maxTemps[idx] ?? 0),
    tempMin: Math.round(minTemps[idx] ?? 0),
  }));

  const sevenDaySnowCm =
    Math.round(daily.reduce((sum, d) => sum + d.snowfallCm, 0) * 10) / 10;

  return {
    slug: resort.slug,
    currentTempC: Math.round(item?.current?.temperature_2m ?? 0),
    windSpeedKmh: Math.round(item?.current?.wind_speed_10m ?? 0),
    snowDepthCm: Math.round((item?.current?.snow_depth ?? 0) * 100),
    freezingLevelM: Math.round(item?.current?.freezing_level_height ?? 1500),
    sevenDaySnowCm,
    next24hSnowCm: daily[0]?.snowfallCm ?? 0,
    daily,
  };
}

function buildStormSimulation(resort: Resort, index: number): ResortWeather {
  // Sea-of-Japan-facing prefectures catch the heaviest lake-effect snow.
  const heavyRegions: Resort["region"][] = ["Niigata", "Yamagata", "Aomori", "Akita", "Hokkaido"];
  const baseDump = heavyRegions.includes(resort.region)
    ? 18
    : resort.region === "Nagano"
    ? 15
    : 13;
  const pattern = [1.4, 2.1, 0.8, 1.9, 1.2, 0.5, 1.6];
  const today = new Date();

  const daily: DailySnow[] = pattern.map((mult, dayIdx) => {
    const d = new Date(today);
    d.setDate(today.getDate() + dayIdx);
    const dateStr = d.toISOString().split("T")[0] ?? "";
    const variance = ((index + dayIdx) % 3) * 3;
    const snowfallCm = Math.round(baseDump * mult + variance);
    return {
      date: dateStr,
      snowfallCm,
      tempMax: -2 - (index % 4),
      tempMin: -9 - (index % 5),
    };
  });

  const sevenDaySnowCm = daily.reduce((s, d) => s + d.snowfallCm, 0);

  return {
    slug: resort.slug,
    currentTempC: -6 - (index % 4),
    windSpeedKmh: 18 + (index % 5) * 4,
    snowDepthCm: 240 + index * 18,
    freezingLevelM: 450 + (index % 4) * 120,
    sevenDaySnowCm,
    next24hSnowCm: daily[0]?.snowfallCm ?? 25,
    daily,
  };
}

export default function ConditionsDashboard() {
  const { lang, t, localizeResort, localizeRegion } = useLanguage();
  const [liveData, setLiveData] = useState<Record<string, ResortWeather>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | "All">("All");
  const [stormPreviewMode, setStormPreviewMode] = useState(false);

  const localeCode =
    lang === "ja" ? "ja-JP" : lang === "zh" ? "zh-CN" : "en-US";

  useEffect(() => {
    let cancelled = false;

    async function fetchWeather() {
      try {
        setLoading(true);
        setError(null);

        const lats = RESORTS.map((r) => r.coordinates.lat).join(",");
        const lons = RESORTS.map((r) => r.coordinates.lon).join(",");
        const elevations = RESORTS.map((r) => r.elevation.top).join(",");

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&elevation=${elevations}&current=temperature_2m,wind_speed_10m,snow_depth,freezing_level_height&daily=snowfall_sum,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&forecast_days=7`;

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Weather API returned ${res.status}`);
        }

        const json: OpenMeteoResponse | OpenMeteoResponse[] = await res.json();
        if (cancelled) return;

        const list = Array.isArray(json) ? json : [json];
        const map: Record<string, ResortWeather> = {};

        RESORTS.forEach((resort, idx) => {
          const item = list[idx] ?? {};
          map[resort.slug] = parseSingleForecast(resort, item);
        });

        setLiveData(map);
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Could not load live forecast"
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchWeather();
    return () => {
      cancelled = true;
    };
  }, []);

  const weatherBySlug = useMemo(() => {
    if (stormPreviewMode) {
      const sim: Record<string, ResortWeather> = {};
      RESORTS.forEach((r, idx) => {
        sim[r.slug] = buildStormSimulation(r, idx);
      });
      return sim;
    }
    return liveData;
  }, [liveData, stormPreviewMode]);

  const rankedResorts = useMemo(() => {
    return RESORTS.filter(
      (r) => selectedRegion === "All" || r.region === selectedRegion
    )
      .map((resort) => ({
        resort: localizeResort(resort),
        weather: weatherBySlug[resort.slug],
      }))
      .sort((a, b) => {
        const snowA = a.weather?.sevenDaySnowCm ?? 0;
        const snowB = b.weather?.sevenDaySnowCm ?? 0;
        if (snowB !== snowA) return snowB - snowA;
        return (
          (a.weather?.currentTempC ?? 99) - (b.weather?.currentTempC ?? 99)
        );
      });
  }, [selectedRegion, weatherBySlug, localizeResort]);

  const totalLiveSnow = useMemo(() => {
    return Object.values(liveData).reduce(
      (sum, w) => sum + w.sevenDaySnowCm,
      0
    );
  }, [liveData]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Top breadcrumb */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-snow-muted transition hover:text-ice"
        >
          <span aria-hidden>←</span> {t.conditionsPage.backToHome}
        </Link>
        <span className="text-xs font-medium uppercase tracking-wider text-snow-muted">
          {stormPreviewMode
            ? t.conditionsPage.simLabel
            : t.conditionsPage.liveLabel}
        </span>
      </div>

      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ice">
            {t.conditionsPage.eyebrow}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-snow sm:text-4xl">
            {t.conditionsPage.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-snow-muted sm:text-base">
            {t.conditionsPage.subtitle}
          </p>
        </div>

        {/* Storm Simulation Toggle */}
        <button
          type="button"
          onClick={() => setStormPreviewMode((v) => !v)}
          className={`inline-flex items-center gap-2 self-start rounded-xl border px-4 py-2.5 text-xs font-semibold transition sm:text-sm ${
            stormPreviewMode
              ? "border-ice bg-ice-deep text-charcoal shadow-lg shadow-ice-deep/25"
              : "border-charcoal-light bg-charcoal-light/60 text-snow hover:border-ice"
          }`}
        >
          <span aria-hidden>🌨️</span>
          {stormPreviewMode
            ? t.conditionsPage.stormBtnOn
            : t.conditionsPage.stormBtnOff}
        </button>
      </div>

      {/* Pre-season Banner if live snowfall is currently 0cm */}
      {!loading && !stormPreviewMode && totalLiveSnow === 0 && (
        <div className="mb-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-ice/30 bg-ice-deep/10 p-4 sm:flex-row sm:items-center">
          <p className="text-xs text-snow sm:text-sm">
            <strong className="text-ice">
              {t.conditionsPage.preSeasonTitle}
            </strong>{" "}
            {t.conditionsPage.preSeasonBody}
          </p>
          <button
            type="button"
            onClick={() => setStormPreviewMode(true)}
            className="shrink-0 rounded-xl bg-ice-deep px-3.5 py-2 text-xs font-semibold text-charcoal transition hover:bg-ice"
          >
            {t.conditionsPage.simulateBtn}
          </button>
        </div>
      )}

      {/* Region Filter Pills */}
      <div className="mb-6 flex flex-wrap gap-2">
        {(["All", ...REGIONS] as const).map((region) => {
          const active = selectedRegion === region;
          return (
            <button
              key={region}
              type="button"
              onClick={() => setSelectedRegion(region)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                active
                  ? "bg-ice-deep text-charcoal shadow-md shadow-ice-deep/25"
                  : "border border-charcoal-light bg-charcoal-light/40 text-snow-muted hover:text-snow"
              }`}
            >
              {localizeRegion(region)}
            </button>
          );
        })}
      </div>

      {error && (
        <div className="mb-6 rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-200">
          {error}
        </div>
      )}

      {/* Leaderboard List */}
      <div className="space-y-4">
        {rankedResorts.map(({ resort, weather }, index) => {
          const maxDaily = Math.max(
            20,
            ...(weather?.daily.map((d) => d.snowfallCm) ?? [20])
          );

          return (
            <div
              key={resort.slug}
              className="rounded-2xl border border-charcoal-light bg-charcoal-light/35 p-5 transition hover:border-ice/50"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                {/* Left: Rank + Resort Info */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-charcoal text-base font-extrabold text-ice">
                    #{index + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        href={`/resorts/${resort.slug}`}
                        className="text-lg font-bold text-snow transition hover:text-ice sm:text-xl"
                      >
                        {resort.name}
                      </Link>
                      <span className="rounded-full bg-ice-deep/15 px-2.5 py-0.5 text-xs font-semibold text-ice">
                        {localizeRegion(resort.region)}
                      </span>
                      <span className="text-xs text-snow-muted">
                        {t.conditionsPage.peakLabel(resort.elevation.top)}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-snow-muted">
                      {resort.area} · {resort.fromTokyo.summary}
                    </p>
                  </div>
                </div>

                {/* Middle: Current Telemetry Pills */}
                {loading && !weather ? (
                  <div className="text-xs text-snow-muted">
                    {t.conditionsPage.fetching}
                  </div>
                ) : weather ? (
                  <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <div className="rounded-xl bg-charcoal px-3.5 py-2 text-center">
                      <dt className="text-[10px] uppercase text-snow-muted">
                        {t.conditionsPage.sevenDaySnow}
                      </dt>
                      <dd className="mt-0.5 text-base font-extrabold text-ice">
                        {weather.sevenDaySnowCm} cm
                      </dd>
                    </div>
                    <div className="rounded-xl bg-charcoal px-3.5 py-2 text-center">
                      <dt className="text-[10px] uppercase text-snow-muted">
                        {t.conditionsPage.next24h}
                      </dt>
                      <dd className="mt-0.5 text-base font-bold text-snow">
                        {weather.next24hSnowCm} cm
                      </dd>
                    </div>
                    <div className="rounded-xl bg-charcoal px-3.5 py-2 text-center">
                      <dt className="text-[10px] uppercase text-snow-muted">
                        {t.conditionsPage.peakTemp}
                      </dt>
                      <dd className="mt-0.5 text-base font-bold text-snow">
                        {weather.currentTempC}°C
                      </dd>
                    </div>
                    <div className="rounded-xl bg-charcoal px-3.5 py-2 text-center">
                      <dt className="text-[10px] uppercase text-snow-muted">
                        {t.conditionsPage.freezingLevel}
                      </dt>
                      <dd className="mt-0.5 text-base font-bold text-snow">
                        {weather.freezingLevelM}m
                      </dd>
                    </div>
                  </dl>
                ) : null}
              </div>

              {/* 7-Day Daily Snowfall Bar Chart */}
              {weather && (
                <div className="mt-4 border-t border-charcoal-light pt-4">
                  <div className="grid grid-cols-7 gap-2">
                    {weather.daily.map((day) => {
                      const heightPct = Math.min(
                        100,
                        Math.round((day.snowfallCm / maxDaily) * 100)
                      );
                      const dayLabel = new Date(
                        `${day.date}T00:00:00`
                      ).toLocaleDateString(localeCode, { weekday: "short" });

                      return (
                        <div
                          key={day.date}
                          className="flex flex-col items-center rounded-xl bg-charcoal/75 p-2 text-center"
                        >
                          <span className="text-[11px] font-medium text-snow-muted">
                            {dayLabel}
                          </span>

                          {/* Vertical Bar Container */}
                          <div className="my-2 flex h-14 w-full items-end justify-center rounded-md bg-charcoal-dark p-1">
                            <div
                              style={{
                                height: `${
                                  day.snowfallCm > 0
                                    ? Math.max(heightPct, 14)
                                    : 4
                                }%`,
                              }}
                              className={`w-full rounded-sm transition-all ${
                                day.snowfallCm >= 15
                                  ? "bg-ice"
                                  : day.snowfallCm > 0
                                  ? "bg-ice-deep/70"
                                  : "bg-charcoal-light"
                              }`}
                            />
                          </div>

                          <span
                            className={`text-xs font-bold ${
                              day.snowfallCm > 0
                                ? "text-ice"
                                : "text-snow-muted"
                            }`}
                          >
                            {day.snowfallCm}cm
                          </span>
                          <span className="mt-0.5 text-[10px] text-snow-muted">
                            {day.tempMin}°/{day.tempMax}°
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
