"use client";

import Link from "next/link";
import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import MountainMapDiagram from "@/components/MountainMapDiagram";
import ResortWeatherWidget from "@/components/ResortWeatherWidget";
import { useLanguage } from "@/context/LanguageContext";
import { RESORTS, type Resort } from "@/data/resorts";

type DetailTab = "overview" | "tickets" | "maps" | "weather" | "onsen";

export default function ResortDetailTabs({
  resort: rawResort,
  prevResort: rawPrevResort,
  nextResort: rawNextResort,
}: {
  resort: Resort;
  prevResort?: Resort;
  nextResort?: Resort;
}) {
  const { t, localizeResort, localizeRegion } = useLanguage();
  const resort = localizeResort(rawResort);
  const prevResort = rawPrevResort ? localizeResort(rawPrevResort) : undefined;
  const nextResort = rawNextResort ? localizeResort(rawNextResort) : undefined;

  const [activeTab, setActiveTab] = useState<DetailTab>("overview");
  const [copiedLang, setCopiedLang] = useState<"en" | "jp" | null>(null);

  const hours = Math.floor(resort.fromTokyo.durationMinutes / 60);
  const mins = resort.fromTokyo.durationMinutes % 60;
  const durationLabel =
    hours > 0 ? `${hours}h ${mins > 0 ? `${mins}m` : ""}` : `${mins}m`;

  async function copyAddress(text: string, langKey: "en" | "jp") {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLang(langKey);
      setTimeout(() => setCopiedLang(null), 2000);
    } catch {
      // Fallback if clipboard API blocked
    }
  }

  const tabs: { id: DetailTab; label: string; badge?: string }[] = [
    {
      id: "overview",
      label: t.detail.tabs.overview,
      badge: t.detail.tabs.overviewBadge(resort.elevation.vertical),
    },
    {
      id: "tickets",
      label: t.detail.tabs.tickets,
      badge: `¥${resort.pricing.oneDayAdultYen.toLocaleString()}`,
    },
    {
      id: "maps",
      label: t.detail.tabs.maps,
      badge: t.detail.tabs.mapsBadge(resort.mapGallery.length),
    },
    {
      id: "weather",
      label: t.detail.tabs.weather,
      badge: t.detail.tabs.weatherBadge,
    },
    {
      id: "onsen",
      label: t.detail.tabs.onsen,
      badge: t.detail.tabs.onsenBadge(resort.onsenAndVillage.length),
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
      {/* Top Surf Bar: Back + Quick Jump to Any Resort */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <Link
            href="/resorts"
            className="inline-flex items-center gap-1.5 rounded-xl border border-charcoal-light bg-charcoal-light/50 px-3.5 py-2 text-xs font-semibold text-snow transition hover:border-ice hover:text-ice sm:text-sm"
          >
            <span aria-hidden>←</span> {t.detail.allResorts}
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-charcoal-light bg-charcoal px-3 py-2 text-xs font-medium text-snow-muted transition hover:border-ice hover:text-ice sm:text-sm"
          >
            {t.detail.home}
          </Link>
        </div>

        {prevResort && nextResort && (
          <div className="flex items-center gap-2">
            <Link
              href={`/resorts/${prevResort.slug}`}
              title={prevResort.name}
              className="rounded-xl border border-charcoal-light bg-charcoal px-3 py-2 text-xs font-semibold text-snow-muted transition hover:border-ice hover:text-ice"
            >
              ‹ {prevResort.name.split(/[\s(（]/)[0]}
            </Link>
            <Link
              href={`/resorts/${nextResort.slug}`}
              title={nextResort.name}
              className="rounded-xl border border-charcoal-light bg-charcoal px-3 py-2 text-xs font-semibold text-snow-muted transition hover:border-ice hover:text-ice"
            >
              {nextResort.name.split(/[\s(（]/)[0]} ›
            </Link>
          </div>
        )}
      </div>

      {/* Horizontal Quick-Surf Resort Switcher Strip */}
      <div className="mb-5 flex items-center gap-1.5 overflow-x-auto rounded-xl border border-charcoal-light bg-charcoal-light/25 p-2">
        <span className="px-2 text-[11px] font-bold uppercase tracking-wider text-snow-muted whitespace-nowrap">
          {t.detail.surfLabel}
        </span>
        {RESORTS.map((r) => {
          const locR = localizeResort(r);
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
              {locR.name.split(/\s*\(/)[0]}
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
              {localizeRegion(resort.region, true)} · {resort.area}
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {resort.terrain.treeRunsAllowed ? (
                <span className="rounded-full border border-ice/40 bg-charcoal/85 px-3 py-1 text-xs font-semibold text-ice backdrop-blur-sm">
                  {t.detail.treeRunsAllowed}
                </span>
              ) : (
                <span className="rounded-full border border-charcoal-light bg-charcoal/85 px-3 py-1 text-xs font-medium text-snow-muted backdrop-blur-sm">
                  {t.detail.onPisteFocus}
                </span>
              )}
            </div>
          </div>

          <div className="absolute inset-x-5 bottom-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-snow sm:text-4xl">
                {resort.name}
              </h1>
              <p className="mt-1 text-xs text-snow-muted sm:text-sm">
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
                <span>{t.detail.googleMapsBtn}</span>
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Focused Section Tabs (Overview is Default) */}
      <div className="mt-4">
        {/* Sticky / Surfable Section Tab Bar */}
        <div className="sticky top-[57px] z-30 -mx-2 rounded-2xl border border-charcoal-light bg-charcoal/95 p-2 shadow-xl backdrop-blur-md">
          <div className="flex flex-wrap gap-1.5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-xs font-bold transition sm:flex-initial sm:text-sm ${
                    isActive
                      ? "bg-ice-deep text-charcoal shadow-md shadow-ice-deep/25"
                      : "bg-charcoal-light/40 text-snow-muted hover:bg-charcoal-light hover:text-snow"
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span
                      className={`hidden rounded-md px-1.5 py-0.5 text-[10px] font-extrabold md:inline-block ${
                        isActive
                          ? "bg-charcoal/20 text-charcoal"
                          : "bg-charcoal text-ice"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= TAB 1: OVERVIEW (DEFAULT) ================= */}
        {activeTab === "overview" && (
          <div className="mt-5 space-y-6">
            {/* General Description & Vibe */}
            <div className="rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-ice">
                {t.detail.overview.eyebrow}
              </p>
              <h2 className="mt-1 text-xl font-bold text-snow">
                {t.detail.overview.aboutTitle(resort.name, resort.japaneseName)}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-snow">
                {resort.description}
              </p>

              <div className="mt-4 rounded-xl border border-ice/25 bg-ice-deep/10 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-ice">
                  {t.detail.overview.bestForLabel}
                </p>
                <p className="mt-1 text-sm font-medium text-snow">
                  {resort.bestFor}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {resort.vibeTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-charcoal-light bg-charcoal-light/40 px-3 py-1 text-xs font-semibold text-snow"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Key Mountain Specs Grid */}
              <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                  <dt className="text-xs uppercase text-snow-muted">
                    {t.detail.overview.verticalDrop}
                  </dt>
                  <dd className="mt-1 text-2xl font-extrabold text-snow">
                    {resort.elevation.vertical}m
                  </dd>
                  <p className="mt-0.5 text-xs text-snow-muted">
                    {resort.elevation.base}m → {resort.elevation.top}m
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                  <dt className="text-xs uppercase text-snow-muted">
                    {t.detail.overview.runsAndLifts}
                  </dt>
                  <dd className="mt-1 text-2xl font-extrabold text-snow">
                    {t.detail.overview.runsCount(resort.terrain.runs)}
                  </dd>
                  <p className="mt-0.5 text-xs text-snow-muted">
                    {t.detail.overview.liftsTotal(resort.terrain.lifts)}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                  <dt className="text-xs uppercase text-snow-muted">
                    {t.detail.overview.oneDayPass}
                  </dt>
                  <dd className="mt-1 text-2xl font-extrabold text-ice">
                    ¥{resort.pricing.oneDayAdultYen.toLocaleString()}
                  </dd>
                  <p className="mt-0.5 text-xs text-snow-muted">
                    {t.detail.overview.rentalSetSub(
                      resort.pricing.fullBoardRentalDayYen.toLocaleString()
                    )}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                  <dt className="text-xs uppercase text-snow-muted">
                    {t.detail.overview.fromTokyo}
                  </dt>
                  <dd className="mt-1 text-2xl font-extrabold text-snow">
                    ~{durationLabel}
                  </dd>
                  <p className="mt-0.5 truncate text-xs text-snow-muted">
                    {resort.fromTokyo.station}
                  </p>
                </div>
              </dl>

              {/* Terrain Breakdown Bar */}
              <div className="mt-5 rounded-xl border border-charcoal-light bg-charcoal-light/25 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                  <span className="text-emerald-300">
                    {t.detail.overview.beginnerPct(resort.terrain.beginner)}
                  </span>
                  <span className="text-ice">
                    {t.detail.overview.intermediatePct(
                      resort.terrain.intermediate
                    )}
                  </span>
                  <span className="text-rose-300">
                    {t.detail.overview.advancedPct(resort.terrain.advanced)}
                  </span>
                </div>
                <div className="mt-2 flex h-2.5 overflow-hidden rounded-full bg-charcoal-dark">
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
            </div>

            {/* Copy-Pasteable Bilingual Address & Google Maps Card */}
            <div className="rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ice">
                    {t.detail.overview.locationEyebrow}
                  </p>
                  <h3 className="mt-0.5 text-lg font-bold text-snow">
                    {t.detail.overview.locationTitle}
                  </h3>
                  <p className="text-xs text-snow-muted">
                    {t.detail.overview.locationSub}
                  </p>
                </div>

                <a
                  href={resort.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-ice-deep px-4 py-2.5 text-xs font-bold text-charcoal shadow-md shadow-ice-deep/20 transition hover:bg-ice sm:text-sm"
                >
                  <span>{t.detail.overview.openGoogleMaps}</span>
                  <span aria-hidden>↗</span>
                </a>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {/* English Address */}
                <div className="flex flex-col justify-between rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-snow-muted">
                      {t.detail.overview.englishAddressLabel}
                    </span>
                    <p className="mt-1.5 select-all font-mono text-sm text-snow">
                      {resort.address.english}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-charcoal-light pt-2.5">
                    <span className="text-xs text-snow-muted">
                      GPS: {resort.coordinates.lat.toFixed(4)}°N,{" "}
                      {resort.coordinates.lon.toFixed(4)}°E
                    </span>
                    <button
                      type="button"
                      onClick={() => copyAddress(resort.address.english, "en")}
                      className="rounded-lg border border-charcoal-light bg-charcoal px-3 py-1 text-xs font-semibold text-ice transition hover:border-ice"
                    >
                      {copiedLang === "en"
                        ? t.detail.overview.copiedEn
                        : t.detail.overview.copyEn}
                    </button>
                  </div>
                </div>

                {/* Japanese Address */}
                <div className="flex flex-col justify-between rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-snow-muted">
                      {t.detail.overview.japaneseAddressLabel}
                    </span>
                    <p className="mt-1.5 select-all font-mono text-sm text-snow">
                      {resort.address.postalCode} {resort.address.japanese}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-charcoal-light pt-2.5">
                    <span className="text-xs text-snow-muted">
                      {resort.japaneseName}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        copyAddress(
                          `${resort.address.postalCode} ${resort.address.japanese}`,
                          "jp"
                        )
                      }
                      className="rounded-lg border border-charcoal-light bg-charcoal px-3 py-1 text-xs font-semibold text-ice transition hover:border-ice"
                    >
                      {copiedLang === "jp"
                        ? t.detail.overview.copiedJp
                        : t.detail.overview.copyJp}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours & Schedule Card */}
            <div className="rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-ice">
                {t.detail.overview.hoursEyebrow}
              </p>
              <h3 className="mt-0.5 text-lg font-bold text-snow">
                {t.detail.overview.hoursTitle}
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                  <p className="text-xs font-bold uppercase text-ice">
                    {t.detail.overview.seasonWindow}
                  </p>
                  <p className="mt-1 text-sm font-bold text-snow">
                    {resort.operatingHours.seasonWindow}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                  <p className="text-xs font-bold uppercase text-ice">
                    {t.detail.overview.dayHours}
                  </p>
                  <p className="mt-1 text-sm font-bold text-snow">
                    {resort.operatingHours.dayHours}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                  <p className="text-xs font-bold uppercase text-ice">
                    {t.detail.overview.nightSkiing}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-snow">
                    {resort.operatingHours.nightSkiing}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                  <p className="text-xs font-bold uppercase text-ice">
                    {t.detail.overview.earlyBird}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-snow">
                    {resort.operatingHours.earlyBird}
                  </p>
                </div>
              </div>

              <p className="mt-3 rounded-xl border border-charcoal-light bg-charcoal-light/20 p-3.5 text-xs text-snow-muted">
                <strong className="text-snow">
                  {t.detail.overview.opsNote}
                </strong>{" "}
                {resort.operatingHours.notes}
              </p>
            </div>

            {/* Snowboarder-Specific Intel Card */}
            <div className="rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-ice">
                {t.detail.overview.intelEyebrow}
              </p>
              <h3 className="mt-0.5 text-lg font-bold text-snow">
                {t.detail.overview.intelTitle}
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                  <p className="text-xs font-bold uppercase text-ice">
                    {t.detail.overview.liftFleet}
                  </p>
                  <p className="mt-1 text-sm text-snow">
                    {resort.snowboarderIntel.liftFleet}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                  <p className="text-xs font-bold uppercase text-ice">
                    {t.detail.overview.terrainPark}
                  </p>
                  <p className="mt-1 text-sm text-snow">
                    {resort.snowboarderIntel.terrainPark}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                  <p className="text-xs font-bold uppercase text-ice">
                    {t.detail.overview.flatSpot}
                  </p>
                  <p className="mt-1 text-sm text-snow">
                    {resort.snowboarderIntel.flatSpotWarning}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                  <p className="text-xs font-bold uppercase text-ice">
                    {t.detail.overview.treeRules}
                  </p>
                  <p className="mt-1 text-sm text-snow">
                    {resort.snowboarderIntel.treeRunRules}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: TICKETS & RENTALS ================= */}
        {activeTab === "tickets" && (
          <div className="mt-5 space-y-5 rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ice">
                {t.detail.tickets.eyebrow}
              </p>
              <h2 className="mt-0.5 text-xl font-bold text-snow">
                {t.detail.tickets.title(resort.name)}
              </h2>
              <p className="mt-1 text-xs text-snow-muted">
                {resort.pricing.notes}
              </p>
            </div>

            {/* Lift Pass Rates Grid */}
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-snow-muted">
                {t.detail.tickets.breakdownHeading}
              </h3>
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-ice/40 bg-ice-deep/10 p-4">
                  <dt className="text-xs font-semibold uppercase text-ice">
                    {t.detail.tickets.oneDayAdult}
                  </dt>
                  <dd className="mt-1 text-2xl font-extrabold text-snow">
                    ¥{resort.pricing.oneDayAdultYen.toLocaleString()}
                  </dd>
                  <p className="mt-0.5 text-xs text-snow-muted">
                    ~${Math.round(resort.pricing.oneDayAdultYen / 150)} USD
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                  <dt className="text-xs uppercase text-snow-muted">
                    {t.detail.tickets.halfDay}
                  </dt>
                  <dd className="mt-1 text-2xl font-bold text-snow">
                    ¥{resort.pricing.halfDayYen.toLocaleString()}
                  </dd>
                  <p className="mt-0.5 text-xs text-snow-muted">
                    {t.detail.tickets.adultRate}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                  <dt className="text-xs uppercase text-snow-muted">
                    {t.detail.tickets.twoDay}
                  </dt>
                  <dd className="mt-1 text-2xl font-bold text-snow">
                    ¥{resort.pricing.twoDayYen.toLocaleString()}
                  </dd>
                  <p className="mt-0.5 text-xs text-snow-muted">
                    {t.detail.tickets.consecutiveDays}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                  <dt className="text-xs uppercase text-snow-muted">
                    {t.detail.tickets.nightPass}
                  </dt>
                  <dd className="mt-1 text-xl font-bold text-snow">
                    {resort.pricing.nightPassYen
                      ? `¥${resort.pricing.nightPassYen.toLocaleString()}`
                      : t.detail.tickets.notOperated}
                  </dd>
                  <p className="mt-0.5 text-xs text-snow-muted">
                    {t.detail.tickets.eveningFloodlit}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                  <dt className="text-xs uppercase text-snow-muted">
                    {t.detail.tickets.childPass}
                  </dt>
                  <dd className="mt-1 text-xl font-bold text-snow">
                    {resort.pricing.childOneDayYen === 0
                      ? t.detail.tickets.freeChild
                      : `¥${resort.pricing.childOneDayYen.toLocaleString()}`}
                  </dd>
                  <p className="mt-0.5 text-xs text-snow-muted">
                    {t.detail.tickets.oneDayChild}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                  <dt className="text-xs uppercase text-snow-muted">
                    {t.detail.tickets.seniorPass}
                  </dt>
                  <dd className="mt-1 text-xl font-bold text-snow">
                    ¥{resort.pricing.seniorOneDayYen.toLocaleString()}
                  </dd>
                  <p className="mt-0.5 text-xs text-snow-muted">
                    {t.detail.tickets.oneDayDiscounted}
                  </p>
                </div>
              </dl>
            </div>

            {/* Season Pass & Rentals Row */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-ice">
                  {t.detail.tickets.seasonPassHeading}
                </p>
                <h3 className="mt-1 text-base font-bold text-snow">
                  {resort.pricing.seasonPassName}
                </h3>
                <p className="mt-2 text-3xl font-extrabold text-ice">
                  ¥{resort.pricing.seasonPassYen.toLocaleString()}
                </p>
                <p className="mt-1 text-xs text-snow-muted">
                  {t.detail.tickets.breaksEven(
                    Math.ceil(
                      resort.pricing.seasonPassYen /
                        resort.pricing.oneDayAdultYen
                    ),
                    Math.round(resort.pricing.seasonPassYen / 150)
                  )}
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-ice">
                  {t.detail.tickets.rentalsHeading}
                </p>
                <div className="mt-3 space-y-2.5 text-sm">
                  <div className="flex items-center justify-between border-b border-charcoal-light pb-2">
                    <span className="text-snow">
                      {t.detail.tickets.boardSet}
                    </span>
                    <span className="font-bold text-ice">
                      ¥{resort.pricing.fullBoardRentalDayYen.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-charcoal-light pb-2">
                    <span className="text-snow">
                      {t.detail.tickets.wearSet}
                    </span>
                    <span className="font-bold text-snow">
                      ¥{resort.pricing.wearRentalDayYen.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-snow-muted">
                      {t.detail.tickets.fullPackage}
                    </span>
                    <span className="font-bold text-snow">
                      ~¥
                      {(
                        resort.pricing.fullBoardRentalDayYen +
                        resort.pricing.wearRentalDayYen -
                        1000
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: TRAIL MAPS & RUNS ================= */}
        {activeTab === "maps" && (
          <div className="mt-5">
            <MountainMapDiagram resort={rawResort} />
          </div>
        )}

        {/* ================= TAB 4: WEATHER & LIVE WEBCAMS ================= */}
        {activeTab === "weather" && (
          <div className="mt-5">
            <ResortWeatherWidget resort={rawResort} />
          </div>
        )}

        {/* ================= TAB 5: ONSEN, VILLAGE & ACCESS ================= */}
        {activeTab === "onsen" && (
          <div className="mt-5 space-y-6">
            {/* Curated Onsen & Village Guide with Google Maps Pins */}
            <div className="rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ice">
                    {t.detail.onsen.eyebrow}
                  </p>
                  <h2 className="mt-0.5 text-xl font-bold text-snow">
                    {t.detail.onsen.title(resort.name)}
                  </h2>
                  <p className="mt-0.5 text-xs text-snow-muted">
                    {t.detail.onsen.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {resort.onsenAndVillage.map((spot) => {
                  const badgeColor =
                    spot.category === "Onsen"
                      ? "border-rose-500/40 bg-rose-500/15 text-rose-300"
                      : spot.category === "Food & Apres"
                      ? "border-amber-400/40 bg-amber-400/15 text-amber-300"
                      : "border-ice/40 bg-ice/15 text-ice";

                  return (
                    <div
                      key={spot.japaneseName}
                      className="flex flex-col justify-between rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`rounded-md border px-2.5 py-0.5 text-[11px] font-bold ${badgeColor}`}
                          >
                            {spot.category === "Onsen"
                              ? t.detail.onsen.catOnsen
                              : spot.category === "Food & Apres"
                              ? t.detail.onsen.catFood
                              : t.detail.onsen.catLandmark}
                          </span>
                          <span className="text-xs font-semibold text-snow-muted">
                            {spot.info}
                          </span>
                        </div>

                        <h3 className="mt-2.5 text-base font-bold text-snow">
                          {spot.name}
                        </h3>
                        <p className="text-xs text-snow-muted">
                          {spot.japaneseName}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-snow">
                          {spot.description}
                        </p>
                      </div>

                      <div className="mt-4 border-t border-charcoal-light pt-3">
                        <a
                          href={spot.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-charcoal px-3.5 py-2 text-xs font-bold text-ice transition hover:bg-ice-deep hover:text-charcoal"
                        >
                          <span>{t.detail.onsen.navigateMaps}</span>
                          <span aria-hidden>↗</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tokyo Shinkansen & Bus Transit Guide */}
            <div className="rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ice">
                    {t.detail.onsen.transitEyebrow(durationLabel)}
                  </p>
                  <h3 className="mt-0.5 text-lg font-bold text-snow">
                    {t.detail.onsen.transitTitle}
                  </h3>
                </div>

                <a
                  href={resort.fromTokyo.stationGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-charcoal-light bg-charcoal-light/50 px-4 py-2 text-xs font-bold text-ice transition hover:border-ice"
                >
                  <span>
                    {t.detail.onsen.openStationMaps(resort.fromTokyo.station)}
                  </span>
                  <span aria-hidden>↗</span>
                </a>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4 sm:col-span-2">
                  <p className="text-xs font-bold uppercase text-snow-muted">
                    {t.detail.onsen.recommendedRoute}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-snow">
                    {resort.fromTokyo.summary}
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                  <p className="text-xs font-bold uppercase text-snow-muted">
                    {t.detail.onsen.nearestHub}
                  </p>
                  <p className="mt-1 text-sm font-bold text-ice">
                    {resort.fromTokyo.station}
                  </p>
                  <p className="mt-0.5 text-xs text-snow-muted">
                    {t.detail.onsen.minsFromTokyo(
                      resort.fromTokyo.durationMinutes
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Next/Prev Surf & Quick Links Bar */}
      {prevResort && nextResort && (
        <div className="mt-8 grid gap-3 border-t border-charcoal-light pt-6 sm:grid-cols-3">
          <Link
            href={`/resorts/${prevResort.slug}`}
            className="flex flex-col justify-between rounded-xl border border-charcoal-light bg-charcoal p-4 transition hover:border-ice"
          >
            <span className="text-[11px] font-semibold uppercase text-snow-muted">
              {t.detail.prevResort}
            </span>
            <span className="mt-1 text-sm font-bold text-snow">
              {prevResort.name} ({localizeRegion(prevResort.region)})
            </span>
          </Link>

          <Link
            href="/conditions"
            className="flex flex-col items-center justify-center rounded-xl bg-ice-deep p-4 text-center transition hover:bg-ice"
          >
            <span className="text-[11px] font-bold uppercase text-charcoal/80">
              {t.detail.snowRadarLabel}
            </span>
            <span className="mt-0.5 text-sm font-extrabold text-charcoal">
              {t.detail.snowRadarCta}
            </span>
          </Link>

          <Link
            href={`/resorts/${nextResort.slug}`}
            className="flex flex-col justify-between rounded-xl border border-charcoal-light bg-charcoal p-4 text-right transition hover:border-ice"
          >
            <span className="text-[11px] font-semibold uppercase text-snow-muted">
              {t.detail.nextResort}
            </span>
            <span className="mt-1 text-sm font-bold text-snow">
              {nextResort.name} ({localizeRegion(nextResort.region)})
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
