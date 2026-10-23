"use client";

import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  const targetElevation =
    elevationMode === "top" ? resort.elevation.top : resort.elevation.base;

  const localeCode =
    lang === "ja" ? "ja-JP" : lang === "zh" ? "zh-CN" : "en-US";

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

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${resort.coordinates.lat}&longitude=${resort.coordinates.lon}&elevation=${targetElevation}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,snow_depth,freezing_level_height&daily=weather_code,temperature_2m_max,temperature_2m_min,snowfall_sum,precipitation_sum,wind_speed_10m_max&timezone=Asia%2FTokyo&forecast_days=7`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Weather fetch failed");
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

        setData({
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
        });
      } catch {
        // Keep previous or fallback
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [resort.coordinates.lat, resort.coordinates.lon, targetElevation]);

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
  const condition = describeWeatherCode(displayData?.weatherCode ?? 1);

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
        </div>

        {/* Summit vs Base Toggle + Storm Demo */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-xl border border-charcoal-light bg-charcoal-dark p-1">
            <button
              type="button"
              onClick={() => setElevationMode("top")}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                elevationMode === "top"
                  ? "bg-ice-deep text-charcoal"
                  : "text-snow-muted hover:text-snow"
              }`}
            >
              {t.weather.peakBtn(resort.elevation.top)}
            </button>
            <button
              type="button"
              onClick={() => setElevationMode("base")}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
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
            onClick={() => setStormDemo((v) => !v)}
            className={`rounded-xl border px-3 py-2 text-xs font-semibold transition ${
              stormDemo
                ? "border-ice bg-ice/20 text-ice"
                : "border-charcoal-light bg-charcoal-light/50 text-snow-muted hover:text-snow"
            }`}
          >
            {stormDemo ? t.weather.stormDemoOn : t.weather.stormDemoOff}
          </button>
        </div>
      </div>

      {loading && !displayData ? (
        <div className="rounded-xl bg-charcoal-light/30 p-8 text-center text-sm text-snow-muted">
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

          {/* 7-Day Daily Table / Cards */}
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

          {/* Historical Monthly Snowfall Averages */}
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

            <div className="mt-4 grid grid-cols-5 gap-2.5 text-center">
              {t.weather.months.map((label, idx) => {
                const cm = monthlyValues[idx] ?? 0;
                const pct = Math.min(100, Math.round((cm / 500) * 100));
                return (
                  <div
                    key={label}
                    className="flex flex-col items-center rounded-xl border border-charcoal-light bg-charcoal p-3"
                  >
                    <span className="text-xs font-bold text-snow">{label}</span>
                    <div className="my-2 flex h-20 w-6 items-end overflow-hidden rounded-full bg-charcoal-dark p-0.5">
                      <div
                        style={{ height: `${pct}%` }}
                        className="w-full rounded-full bg-gradient-to-t from-ice-deep to-ice"
                      />
                    </div>
                    <span className="text-xs font-extrabold text-ice">
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
        </>
      ) : null}

      {/* Live Webcams & Google Weather Action Bar */}
      <div className="flex flex-col gap-3 border-t border-charcoal-light pt-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs text-snow-muted">{t.weather.sourceNote}</span>
        <div className="flex flex-wrap gap-2.5">
          <a
            href={resort.webcamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-ice-deep px-4 py-2 text-xs font-bold text-charcoal transition hover:bg-ice"
          >
            <span>{t.weather.watchWebcams}</span>
            <span aria-hidden>↗</span>
          </a>
          <a
            href={googleWeatherSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-charcoal-light bg-charcoal-light/50 px-4 py-2 text-xs font-semibold text-ice transition hover:border-ice"
          >
            <span>{t.weather.checkGoogleWeather}</span>
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
