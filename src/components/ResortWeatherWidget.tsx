"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Resort } from "@/data/resorts";

interface DailyForecast {
  date: string;
  snowfallCm: number;
  precipMm: number;
  tempMaxC: number;
  tempMinC: number;
  windMaxKmh: number;
  weatherCode: number;
}

interface LiveResortWeather {
  currentTempC: number;
  feelsLikeC: number;
  windSpeedKmh: number;
  humidityPct: number;
  freezingLevelM: number;
  snowDepthCm: number;
  weatherCode: number;
  daily: DailyForecast[];
}

interface CachedForecastEntry {
  weather: LiveResortWeather;
  fetchedAtMs: number;
  updatedJst: string;
}

const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes
const memoryWeatherCache = new Map<string, CachedForecastEntry>();

function formatJstTime(ms: number): string {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Tokyo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(ms));
  } catch {
    const d = new Date(ms + 9 * 3600 * 1000);
    return d.toISOString().slice(11, 16);
  }
}

function readCachedForecast(key: string): CachedForecastEntry | null {
  const now = Date.now();
  const fromMem = memoryWeatherCache.get(key);
  if (fromMem && now - fromMem.fetchedAtMs < CACHE_TTL_MS) {
    return fromMem;
  }
  if (typeof window !== "undefined") {
    try {
      const raw = window.sessionStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw) as CachedForecastEntry;
        if (
          parsed &&
          typeof parsed.fetchedAtMs === "number" &&
          now - parsed.fetchedAtMs < CACHE_TTL_MS
        ) {
          memoryWeatherCache.set(key, parsed);
          return parsed;
        }
      }
    } catch {
      // sessionStorage unavailable or malformed
    }
  }
  return null;
}

function writeCachedForecast(key: string, entry: CachedForecastEntry): void {
  memoryWeatherCache.set(key, entry);
  if (typeof window !== "undefined") {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(entry));
    } catch {
      // sessionStorage quota or private mode
    }
  }
}

export default function ResortWeatherWidget({
  resort: rawResort,
}: {
  resort: Resort;
}) {
  const { lang, t, localizeResort } = useLanguage();
  const resort = localizeResort(rawResort);

  const [elevationMode, setElevationMode] = useState<"top" | "base">("top");
  const [stormDemo, setStormDemo] = useState(false);
  const [data, setData] = useState<LiveResortWeather | null>(null);
  const [updatedJst, setUpdatedJst] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshToken, setRefreshToken] = useState(0);
  const forceBypassCacheRef = useRef(false);

  const targetElevation =
    elevationMode === "top" ? resort.elevation.top : resort.elevation.base;
  const cacheKey = `powderpilot_wx_v1_${rawResort.slug}_${targetElevation}`;

  const localeCode = lang === "ja" ? "ja-JP" : "en-US";

  function describeWeatherCode(code: number): { label: string; icon: string } {
    if (code === 0) return { label: t.weather.codes.clear, icon: "☀️" };
    if (code <= 3) return { label: t.weather.codes.partlyCloudy, icon: "⛅" };
    if (code === 45 || code === 48)
      return { label: t.weather.codes.fog, icon: "🌫️" };
    if (code >= 71 && code <= 77)
      return { label: t.weather.codes.snowing, icon: "❄️" };
    if (code === 85 || code === 86)
      return { label: t.weather.codes.heavySnow, icon: "🌨️" };
    if (code >= 51 && code <= 67)
      return { label: t.weather.codes.rainMixed, icon: "🌧️" };
    if (code >= 80 && code <= 82)
      return { label: t.weather.codes.rainShowers, icon: "🌦️" };
    return { label: t.weather.codes.clouds, icon: "☁️" };
  }

  function handleManualRefresh() {
    forceBypassCacheRef.current = true;
    setRefreshToken((n) => n + 1);
  }

  useEffect(() => {
    let cancelled = false;
    const bypassCache = forceBypassCacheRef.current;
    forceBypassCacheRef.current = false;

    async function load() {
      if (!bypassCache) {
        const cached = readCachedForecast(cacheKey);
        if (cached) {
          setData(cached.weather);
          setUpdatedJst(cached.updatedJst);
          setError(false);
          setLoading(false);
          return;
        }
      }

      try {
        setLoading(true);
        setError(false);
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${resort.coordinates.lat}&longitude=${resort.coordinates.lon}&elevation=${targetElevation}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,snow_depth,freezing_level_height&daily=weather_code,temperature_2m_max,temperature_2m_min,snowfall_sum,precipitation_sum,wind_speed_10m_max&timezone=Asia%2FTokyo&forecast_days=7`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (cancelled) return;

        const times: string[] = json?.daily?.time ?? [];
        const daily: DailyForecast[] = times.slice(0, 7).map((date, i) => ({
          date,
          snowfallCm:
            Math.round((json?.daily?.snowfall_sum?.[i] ?? 0) * 10) / 10,
          precipMm:
            Math.round((json?.daily?.precipitation_sum?.[i] ?? 0) * 10) / 10,
          tempMaxC: Math.round(json?.daily?.temperature_2m_max?.[i] ?? 0),
          tempMinC: Math.round(json?.daily?.temperature_2m_min?.[i] ?? 0),
          windMaxKmh: Math.round(json?.daily?.wind_speed_10m_max?.[i] ?? 0),
          weatherCode: json?.daily?.weather_code?.[i] ?? 1,
        }));

        const weather: LiveResortWeather = {
          currentTempC: Math.round(json?.current?.temperature_2m ?? 0),
          feelsLikeC: Math.round(json?.current?.apparent_temperature ?? 0),
          windSpeedKmh: Math.round(json?.current?.wind_speed_10m ?? 0),
          humidityPct: Math.round(json?.current?.relative_humidity_2m ?? 70),
          freezingLevelM: Math.round(
            json?.current?.freezing_level_height ?? 1600
          ),
          snowDepthCm: Math.round((json?.current?.snow_depth ?? 0) * 100),
          weatherCode: json?.current?.weather_code ?? 1,
          daily,
        };

        const nowMs = Date.now();
        const jstStr = formatJstTime(nowMs);
        writeCachedForecast(cacheKey, {
          weather,
          fetchedAtMs: nowMs,
          updatedJst: jstStr,
        });

        setData(weather);
        setUpdatedJst(jstStr);
        setError(false);
      } catch {
        if (!cancelled) {
          setError(true);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [
    cacheKey,
    resort.coordinates.lat,
    resort.coordinates.lon,
    targetElevation,
    refreshToken,
  ]);

  const displayData: LiveResortWeather | null = stormDemo
    ? {
        currentTempC: elevationMode === "top" ? -9 : -4,
        feelsLikeC: elevationMode === "top" ? -15 : -8,
        windSpeedKmh: 24,
        humidityPct: 88,
        freezingLevelM: 420,
        snowDepthCm: elevationMode === "top" ? 310 : 195,
        weatherCode: 86,
        daily: Array.from({ length: 7 }).map((_, i) => {
          const d = new Date();
          d.setDate(d.getDate() + i);
          const snow = [32, 45, 18, 28, 12, 5, 24][i] ?? 20;
          return {
            date: d.toISOString().split("T")[0] ?? "",
            snowfallCm:
              elevationMode === "top" ? snow : Math.round(snow * 0.7),
            precipMm: snow,
            tempMaxC: (elevationMode === "top" ? -5 : -1) - (i % 3),
            tempMinC: (elevationMode === "top" ? -12 : -6) - (i % 3),
            windMaxKmh: 22 + (i % 4) * 5,
            weatherCode: snow > 15 ? 86 : 73,
          };
        }),
      }
    : data;

  const sevenDaySnow =
    displayData?.daily.reduce((s, d) => s + d.snowfallCm, 0) ?? 0;
  const roundedSevenDay = Math.round(sevenDaySnow * 10) / 10;
  const condition = describeWeatherCode(displayData?.weatherCode ?? 1);

  const bestDay = displayData?.daily.reduce(
    (best, cur) => (cur.snowfallCm > (best?.snowfallCm ?? 0) ? cur : best),
    null as DailyForecast | null
  );

  const bestDayName =
    bestDay && bestDay.snowfallCm >= 1
      ? new Date(`${bestDay.date}T00:00:00`).toLocaleDateString(localeCode, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      : null;

  const maxDailySnow = Math.max(
    15,
    ...(displayData?.daily.map((d) => d.snowfallCm) ?? [15])
  );

  const freezingDiagnosis =
    (displayData?.freezingLevelM ?? 1600) <= resort.elevation.base
      ? t.weather.freezingAnalysisBase(resort.elevation.base)
      : (displayData?.freezingLevelM ?? 1600) <= resort.elevation.top
      ? t.weather.freezingAnalysisMid(resort.elevation.top, resort.elevation.base)
      : t.weather.freezingAnalysisWarm;

  const googleWeatherSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    `${rawResort.name} ${rawResort.region} Japan weather snow forecast`
  )}`;

  const monthlyValues = [
    resort.monthlySnowfallCm.dec,
    resort.monthlySnowfallCm.jan,
    resort.monthlySnowfallCm.feb,
    resort.monthlySnowfallCm.mar,
    resort.monthlySnowfallCm.apr,
  ];

  return (
    <div className="space-y-5 rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
      {/* Header + Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ice">
            {t.weather.eyebrow(resort.coordinates.lat, resort.coordinates.lon)}
          </p>
          <h2 className="mt-0.5 text-xl font-bold text-snow">
            {t.weather.title(resort.name)}
          </h2>
          {/* Freshness & Manual Refresh Row */}
          <div
            aria-live="polite"
            className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-snow-muted"
          >
            {stormDemo ? (
              <span className="rounded-md bg-ice/15 px-2 py-0.5 font-semibold text-ice">
                {t.weather.stormDemoOn}
              </span>
            ) : updatedJst ? (
              <span className="rounded-md bg-charcoal-light/60 px-2 py-0.5 font-medium text-snow-muted">
                🕒 {t.weather.updatedAt(updatedJst)}
              </span>
            ) : null}
          </div>
        </div>

        {/* Summit vs Base Toggle + Refresh + Storm Demo */}
        <div className="flex flex-wrap items-center gap-2">
          <div
            role="group"
            aria-label="Forecast elevation"
            className="inline-flex rounded-xl border border-charcoal-light bg-charcoal-dark p-1"
          >
            <button
              type="button"
              aria-pressed={elevationMode === "top"}
              onClick={() => setElevationMode("top")}
              className={`inline-flex min-h-11 items-center rounded-lg px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice ${
                elevationMode === "top"
                  ? "bg-ice-deep text-charcoal"
                  : "text-snow-muted hover:text-snow"
              }`}
            >
              {t.weather.peakBtn(resort.elevation.top)}
            </button>
            <button
              type="button"
              aria-pressed={elevationMode === "base"}
              onClick={() => setElevationMode("base")}
              className={`inline-flex min-h-11 items-center rounded-lg px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice ${
                elevationMode === "base"
                  ? "bg-ice-deep text-charcoal"
                  : "text-snow-muted hover:text-snow"
              }`}
            >
              {t.weather.baseBtn(resort.elevation.base)}
            </button>
          </div>

          <button
            type="button"
            onClick={handleManualRefresh}
            disabled={loading}
            className="inline-flex min-h-11 items-center rounded-xl border border-charcoal-light bg-charcoal-light/40 px-3.5 py-2 text-xs font-semibold text-snow transition hover:border-ice hover:text-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice disabled:opacity-50"
          >
            {loading ? t.weather.refreshing : t.weather.refreshBtn}
          </button>

          <button
            type="button"
            aria-pressed={stormDemo}
            onClick={() => setStormDemo((v) => !v)}
            className={`inline-flex min-h-11 items-center rounded-xl border px-3.5 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice ${
              stormDemo
                ? "border-ice bg-ice/20 text-ice"
                : "border-charcoal-light bg-charcoal-light/50 text-snow-muted hover:text-snow"
            }`}
          >
            {stormDemo ? t.weather.stormDemoOn : t.weather.stormDemoOff}
          </button>
        </div>
      </div>

      {/* Explicit Error State with Retry */}
      {error && !stormDemo && (
        <div
          role="alert"
          aria-live="polite"
          className="flex flex-col items-start justify-between gap-3 rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-sm font-bold text-rose-200">
              {t.weather.errorTitle}
            </p>
            <p className="mt-0.5 text-xs text-rose-200/85">
              {t.weather.errorBody}
            </p>
          </div>
          <button
            type="button"
            onClick={handleManualRefresh}
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl bg-rose-500 px-4 py-2 text-xs font-bold text-snow transition hover:bg-rose-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
          >
            {t.weather.retryBtn}
          </button>
        </div>
      )}

      {loading && !displayData ? (
        <div
          aria-live="polite"
          className="rounded-xl bg-charcoal-light/30 p-8 text-center text-sm text-snow-muted"
        >
          {t.weather.loading(resort.name)}
        </div>
      ) : displayData ? (
        <>
          {/* Current Weather Cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-3.5">
              <p className="text-[11px] uppercase text-snow-muted">
                {t.weather.conditionLabel}
              </p>
              <p className="mt-1 text-lg font-extrabold text-snow">
                {condition.icon} {condition.label}
              </p>
              <p className="mt-0.5 text-xs text-snow-muted">
                {t.weather.atElevation(targetElevation)}
              </p>
            </div>

            <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-3.5">
              <p className="text-[11px] uppercase text-snow-muted">
                {t.weather.tempLabel}
              </p>
              <p className="mt-1 text-2xl font-extrabold text-snow">
                {displayData.currentTempC}°C
              </p>
              <p className="mt-0.5 text-xs text-snow-muted">
                {t.weather.feelsLike(displayData.feelsLikeC)}
              </p>
            </div>

            <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-3.5">
              <p className="text-[11px] uppercase text-snow-muted">
                {t.weather.sevenDaySnowLabel}
              </p>
              <p className="mt-1 text-2xl font-extrabold text-ice">
                {Math.round(sevenDaySnow * 10) / 10} cm
              </p>
              <p className="mt-0.5 text-xs text-snow-muted">
                {t.weather.baseDepth(displayData.snowDepthCm)}
              </p>
            </div>

            <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-3.5">
              <p className="text-[11px] uppercase text-snow-muted">
                {t.weather.freezingLevelLabel}
              </p>
              <p className="mt-1 text-2xl font-extrabold text-snow">
                {displayData.freezingLevelM}m
              </p>
              <p className="mt-0.5 text-xs text-snow-muted">
                {displayData.freezingLevelM < resort.elevation.base
                  ? t.weather.allMountainSnow
                  : displayData.freezingLevelM < resort.elevation.top
                  ? t.weather.upperPeakSnow
                  : t.weather.warmPreSeason}
              </p>
            </div>

            <div className="col-span-2 rounded-xl border border-charcoal-light bg-charcoal-light/35 p-3.5 sm:col-span-1">
              <p className="text-[11px] uppercase text-snow-muted">
                {t.weather.windHumidityLabel}
              </p>
              <p className="mt-1 text-2xl font-extrabold text-snow">
                {displayData.windSpeedKmh} km/h
              </p>
              <p className="mt-0.5 text-xs text-snow-muted">
                {t.weather.humidity(displayData.humidityPct)}
              </p>
            </div>
          </div>

          {/* 7-Day Daily Weather Forecast (First) */}
          <div>
            <h3 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-snow-muted">
              {t.weather.dailyBreakdownHeading(elevationMode, targetElevation)}
            </h3>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-7">
              {displayData.daily.map((day) => {
                const dayName = new Date(
                  `${day.date}T00:00:00`
                ).toLocaleDateString(localeCode, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                });
                const dayCond = describeWeatherCode(day.weatherCode);

                return (
                  <div
                    key={day.date}
                    className="flex flex-col items-center justify-between rounded-xl border border-charcoal-light bg-charcoal-light/25 p-3 text-center"
                  >
                    <span className="text-xs font-semibold text-snow">
                      {dayName}
                    </span>
                    <span className="my-2 text-2xl" title={dayCond.label}>
                      {dayCond.icon}
                    </span>
                    <span
                      className={`rounded-md px-2 py-0.5 text-xs font-extrabold ${
                        day.snowfallCm > 0
                          ? "bg-ice-deep/20 text-ice"
                          : "bg-charcoal-dark text-snow-muted"
                      }`}
                    >
                      {day.snowfallCm} {t.weather.snowUnit}
                    </span>
                    <span className="mt-1.5 text-xs font-semibold text-snow">
                      {day.tempMinC}° / {day.tempMaxC}°C
                    </span>
                    <span className="mt-0.5 text-[10px] text-snow-muted">
                      💨 {day.windMaxKmh} km/h
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ❄️ 7-Day Powder Radar & Storm Tracker (After Weather) */}
          <div className="rounded-2xl border border-ice/40 bg-gradient-to-br from-charcoal via-charcoal-light/30 to-charcoal p-5 sm:p-6 shadow-lg shadow-ice/5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ice opacity-75"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ice-deep"></span>
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest text-ice">
                    {t.weather.radarTitle}
                  </p>
                </div>
                <h3 className="mt-1 text-lg font-extrabold text-snow sm:text-xl">
                  {rawResort.name} · {t.weather.radarSubtitle}
                </h3>
              </div>

              {/* Dynamic Storm Radar Badge */}
              <div className="shrink-0">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold ${
                    roundedSevenDay >= 30
                      ? "border border-rose-500/50 bg-rose-500/20 text-rose-300 animate-pulse"
                      : roundedSevenDay >= 10
                      ? "border border-ice bg-ice/20 text-ice"
                      : roundedSevenDay > 0
                      ? "border border-ice-deep/50 bg-ice-deep/15 text-ice"
                      : "border border-charcoal-light bg-charcoal-dark text-snow-muted"
                  }`}
                >
                  {roundedSevenDay >= 30
                    ? t.weather.radarDumpAlert(roundedSevenDay)
                    : roundedSevenDay >= 10
                    ? t.weather.radarCycleAlert(roundedSevenDay)
                    : roundedSevenDay > 0
                    ? t.weather.radarDustingAlert(roundedSevenDay)
                    : t.weather.radarBluebirdAlert}
                </span>
              </div>
            </div>

            {/* Radar Insights Row: Best Day & Freezing Analysis */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-charcoal-light bg-charcoal-dark/70 p-3.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-snow-muted">
                  🏆 {t.weather.bestPowderDayLabel}
                </p>
                {bestDayName && bestDay ? (
                  <p className="mt-1 text-sm font-extrabold text-ice">
                    {t.weather.bestDayForecast(
                      bestDayName,
                      bestDay.snowfallCm,
                      bestDay.tempMinC
                    )}
                  </p>
                ) : (
                  <p className="mt-1 text-xs text-snow-muted">
                    {t.weather.bestPowderDayNone}
                  </p>
                )}
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-dark/70 p-3.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-snow-muted">
                  🌡️ {t.weather.freezingAnalysisLabel}
                </p>
                <p className="mt-1 text-xs font-medium text-snow">
                  {freezingDiagnosis}
                </p>
              </div>
            </div>

            {/* Visual 7-Day Radar Snow Accumulation Chart */}
            <div className="mt-5 border-t border-charcoal-light/60 pt-4">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-snow-muted">
                ❄️ 7-Day Snow Accumulation Radar (Peak {targetElevation}m)
              </p>
              <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                {displayData.daily.map((day) => {
                  const dayLabel = new Date(
                    `${day.date}T00:00:00`
                  ).toLocaleDateString(localeCode, { weekday: "short" });
                  const heightPct = Math.min(
                    100,
                    Math.round((day.snowfallCm / maxDailySnow) * 100)
                  );
                  const isPowderDay = day.snowfallCm >= 15;

                  return (
                    <div
                      key={`radar-${day.date}`}
                      className="flex flex-col items-center rounded-xl bg-charcoal-dark/90 p-2 text-center"
                    >
                      <span className="text-[11px] font-semibold text-snow-muted">
                        {dayLabel}
                      </span>

                      {/* Bar container */}
                      <div className="my-2 flex h-16 w-full items-end justify-center rounded-md bg-charcoal p-1">
                        <div
                          style={{
                            height: `${
                              day.snowfallCm > 0
                                ? Math.max(heightPct, 15)
                                : 4
                            }%`,
                          }}
                          className={`w-full rounded-sm transition-all ${
                            isPowderDay
                              ? "bg-gradient-to-t from-ice to-white shadow-sm shadow-ice/50"
                              : day.snowfallCm > 0
                              ? "bg-ice-deep/80"
                              : "bg-charcoal-light/40"
                          }`}
                        />
                      </div>

                      <span
                        className={`text-xs font-bold ${
                          day.snowfallCm > 0 ? "text-ice" : "text-snow-muted"
                        }`}
                      >
                        {day.snowfallCm}cm
                      </span>
                      <span className="mt-0.5 text-[10px] text-snow-muted">
                        {day.tempMinC}°/{day.tempMaxC}°
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : null}

      {/* Historical Monthly Snowfall Averages (Always Available) */}
      <div className="rounded-xl border border-charcoal-light bg-charcoal-light/25 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ice">
              {t.weather.monthlyTitle}
            </h3>
            <p className="mt-0.5 text-xs text-snow-muted">
              {t.weather.monthlySub}
            </p>
          </div>
          <span className="rounded-lg bg-ice-deep/15 px-3 py-1 text-xs font-extrabold text-ice">
            {t.weather.peakBaseBadge(resort.monthlySnowfallCm.peakBaseCm)}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-5 gap-2 text-center sm:gap-2.5">
          {t.weather.months.map((label, idx) => {
            const cm = monthlyValues[idx] ?? 0;
            const pct = Math.min(100, Math.round((cm / 500) * 100));
            return (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl border border-charcoal-light bg-charcoal p-2 sm:p-3"
              >
                <span className="text-xs font-bold text-snow">{label}</span>
                <div className="my-2 flex h-20 w-5 items-end overflow-hidden rounded-full bg-charcoal-dark p-0.5 sm:w-6">
                  <div
                    style={{ height: `${pct}%` }}
                    className="w-full rounded-full bg-gradient-to-t from-ice-deep to-ice"
                  />
                </div>
                <span className="text-[11px] font-extrabold text-ice sm:text-xs">
                  {cm}cm
                </span>
                <span className="text-[10px] text-snow-muted">
                  ~{(cm / 100).toFixed(1)}m
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Mountain Webcams Card */}
      <div className="rounded-xl border border-charcoal-light bg-charcoal-light/20 p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                {t.weather.webcamHeading}
              </span>
            </div>
            <p className="text-sm font-bold text-snow">
              {rawResort.name} · {t.weather.webcamSub}
            </p>
            <p className="text-xs text-snow-muted">
              {t.weather.webcamDesc}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 pt-1 sm:pt-0">
            <a
              href={resort.webcamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-ice px-4 py-2 text-xs font-bold text-charcoal transition hover:bg-ice/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
            >
              <span>📹 {t.weather.watchWebcams}</span>
              <span aria-hidden>↗</span>
            </a>
            <a
              href={googleWeatherSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-charcoal-light bg-charcoal-light/50 px-3.5 py-2 text-xs font-semibold text-ice transition hover:border-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
            >
              <span>{t.weather.checkGoogleWeather}</span>
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Model Forecast Disclaimer */}
      <div className="text-center sm:text-left">
        <p className="text-xs text-snow-muted">{t.weather.sourceNote}</p>
      </div>
    </div>
  );
}
