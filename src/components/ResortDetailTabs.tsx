"use client";

import { useState } from "react";
import type { Resort } from "@/data/resorts";
import MountainMapDiagram from "@/components/MountainMapDiagram";
import ResortWeatherWidget from "@/components/ResortWeatherWidget";

type DetailTab = "overview" | "tickets" | "maps" | "weather" | "onsen";

export default function ResortDetailTabs({ resort }: { resort: Resort }) {
  const [activeTab, setActiveTab] = useState<DetailTab>("overview");
  const [copiedLang, setCopiedLang] = useState<"en" | "jp" | null>(null);

  const hours = Math.floor(resort.fromTokyo.durationMinutes / 60);
  const mins = resort.fromTokyo.durationMinutes % 60;
  const durationLabel =
    hours > 0 ? `${hours}h ${mins > 0 ? `${mins}m` : ""}` : `${mins}m`;

  async function copyAddress(text: string, lang: "en" | "jp") {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLang(lang);
      setTimeout(() => setCopiedLang(null), 2000);
    } catch {
      // Fallback if clipboard API blocked
    }
  }

  const tabs: { id: DetailTab; label: string; badge?: string }[] = [
    {
      id: "overview",
      label: "🏔️ Overview",
      badge: `${resort.elevation.vertical}m Vert`,
    },
    {
      id: "tickets",
      label: "🎟️ Tickets & Rentals",
      badge: `¥${resort.pricing.oneDayAdultYen.toLocaleString()}`,
    },
    {
      id: "maps",
      label: "🗺️ Trail Maps & Runs",
      badge: `${resort.mapGallery.length} HD`,
    },
    {
      id: "weather",
      label: "❄️ Weather & Webcams",
      badge: "Live",
    },
    {
      id: "onsen",
      label: "♨️ Onsen, Village & Access",
      badge: `${resort.onsenAndVillage.length} Spots`,
    },
  ];

  return (
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
              Mountain Profile & General Overview
            </p>
            <h2 className="mt-1 text-xl font-bold text-snow">
              About {resort.name} ({resort.japaneseName})
            </h2>
            <p className="mt-3 text-base leading-relaxed text-snow">
              {resort.description}
            </p>

            <div className="mt-4 rounded-xl border border-ice/25 bg-ice-deep/10 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-ice">
                🎯 Best For
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
                  Vertical Drop
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
                  Runs & Lifts
                </dt>
                <dd className="mt-1 text-2xl font-extrabold text-snow">
                  {resort.terrain.runs} runs
                </dd>
                <p className="mt-0.5 text-xs text-snow-muted">
                  {resort.terrain.lifts} lifts total
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                <dt className="text-xs uppercase text-snow-muted">
                  1-Day Adult Pass
                </dt>
                <dd className="mt-1 text-2xl font-extrabold text-ice">
                  ¥{resort.pricing.oneDayAdultYen.toLocaleString()}
                </dd>
                <p className="mt-0.5 text-xs text-snow-muted">
                  Rental set: ¥{resort.pricing.fullBoardRentalDayYen.toLocaleString()}
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                <dt className="text-xs uppercase text-snow-muted">
                  From Tokyo
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
                  🟢 Beginner {resort.terrain.beginner}%
                </span>
                <span className="text-ice">
                  🔵 Intermediate {resort.terrain.intermediate}%
                </span>
                <span className="text-rose-300">
                  ⚫ Advanced / Steeps {resort.terrain.advanced}%
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
                  📍 Location & Navigation (English + 日本語)
                </p>
                <h3 className="mt-0.5 text-lg font-bold text-snow">
                  Resort Address & Google Maps Pin
                </h3>
                <p className="text-xs text-snow-muted">
                  Copy either address for car navigation, Uber/Taxi, or luggage forwarding (Yamato Takkyubin).
                </p>
              </div>

              <a
                href={resort.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-ice-deep px-4 py-2.5 text-xs font-bold text-charcoal shadow-md shadow-ice-deep/20 transition hover:bg-ice sm:text-sm"
              >
                <span>🗺️ Open in Google Maps</span>
                <span aria-hidden>↗</span>
              </a>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {/* English Address */}
              <div className="flex flex-col justify-between rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-snow-muted">
                    English Address
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
                    {copiedLang === "en" ? "✓ Copied!" : "📋 Copy English"}
                  </button>
                </div>
              </div>

              {/* Japanese Address */}
              <div className="flex flex-col justify-between rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-snow-muted">
                    日本語住所 (Japanese Address & Postal Code)
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
                    {copiedLang === "jp" ? "✓ コピー完了!" : "📋 Copy 日本語"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours & Schedule Card */}
          <div className="rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-ice">
              🕒 Business & Operating Hours
            </p>
            <h3 className="mt-0.5 text-lg font-bold text-snow">
              Season Dates & Lift Schedule
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                <p className="text-xs font-bold uppercase text-ice">
                  📅 Season Window
                </p>
                <p className="mt-1 text-sm font-bold text-snow">
                  {resort.operatingHours.seasonWindow}
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                <p className="text-xs font-bold uppercase text-ice">
                  🕗 Daytime Lift Hours
                </p>
                <p className="mt-1 text-sm font-bold text-snow">
                  {resort.operatingHours.dayHours}
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                <p className="text-xs font-bold uppercase text-ice">
                  🌙 Night Skiing (&ldquo;Naita&rdquo;)
                </p>
                <p className="mt-1 text-sm font-semibold text-snow">
                  {resort.operatingHours.nightSkiing}
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                <p className="text-xs font-bold uppercase text-ice">
                  🌅 First Track / Early Upload
                </p>
                <p className="mt-1 text-sm font-semibold text-snow">
                  {resort.operatingHours.earlyBird}
                </p>
              </div>
            </div>

            <p className="mt-3 rounded-xl border border-charcoal-light bg-charcoal-light/20 p-3.5 text-xs text-snow-muted">
              <strong className="text-snow">Operations Note:</strong>{" "}
              {resort.operatingHours.notes}
            </p>
          </div>

          {/* Snowboarder-Specific Intel Card */}
          <div className="rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-ice">
              🏂 Snowboarder-Specific Mountain Check
            </p>
            <h3 className="mt-0.5 text-lg font-bold text-snow">
              Lifts, Park, Cat-Tracks & Tree Rules
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                <p className="text-xs font-bold uppercase text-ice">
                  🚡 Lift Fleet Breakdown
                </p>
                <p className="mt-1 text-sm text-snow">
                  {resort.snowboarderIntel.liftFleet}
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                <p className="text-xs font-bold uppercase text-ice">
                  🛹 Terrain Park & Pipe
                </p>
                <p className="mt-1 text-sm text-snow">
                  {resort.snowboarderIntel.terrainPark}
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                <p className="text-xs font-bold uppercase text-ice">
                  ⚡ Flat Cat-Track Check
                </p>
                <p className="mt-1 text-sm text-snow">
                  {resort.snowboarderIntel.flatSpotWarning}
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                <p className="text-xs font-bold uppercase text-ice">
                  🌲 Tree-Riding & Off-Piste Policy
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
              Lift Passes · Season Passes · Rentals
            </p>
            <h2 className="mt-0.5 text-xl font-bold text-snow">
              {resort.name} Ticket & Rental Rates (¥ JPY)
            </h2>
            <p className="mt-1 text-xs text-snow-muted">
              {resort.pricing.notes}
            </p>
          </div>

          {/* Lift Pass Rates Grid */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-snow-muted">
              🎟️ Lift Ticket Breakdown
            </h3>
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-ice/40 bg-ice-deep/10 p-4">
                <dt className="text-xs font-semibold uppercase text-ice">
                  1-Day Adult Pass
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
                  Half-Day (4h / AM-PM)
                </dt>
                <dd className="mt-1 text-2xl font-bold text-snow">
                  ¥{resort.pricing.halfDayYen.toLocaleString()}
                </dd>
                <p className="mt-0.5 text-xs text-snow-muted">Adult rate</p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                <dt className="text-xs uppercase text-snow-muted">
                  2-Day Pass
                </dt>
                <dd className="mt-1 text-2xl font-bold text-snow">
                  ¥{resort.pricing.twoDayYen.toLocaleString()}
                </dd>
                <p className="mt-0.5 text-xs text-snow-muted">
                  Consecutive days
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                <dt className="text-xs uppercase text-snow-muted">
                  Night Skiing Pass
                </dt>
                <dd className="mt-1 text-xl font-bold text-snow">
                  {resort.pricing.nightPassYen
                    ? `¥${resort.pricing.nightPassYen.toLocaleString()}`
                    : "Not Operated"}
                </dd>
                <p className="mt-0.5 text-xs text-snow-muted">
                  Evening floodlit laps
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                <dt className="text-xs uppercase text-snow-muted">
                  Child (Elementary)
                </dt>
                <dd className="mt-1 text-xl font-bold text-snow">
                  {resort.pricing.childOneDayYen === 0
                    ? "FREE (¥0)"
                    : `¥${resort.pricing.childOneDayYen.toLocaleString()}`}
                </dd>
                <p className="mt-0.5 text-xs text-snow-muted">1-Day child</p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
                <dt className="text-xs uppercase text-snow-muted">
                  Senior / Master
                </dt>
                <dd className="mt-1 text-xl font-bold text-snow">
                  ¥{resort.pricing.seniorOneDayYen.toLocaleString()}
                </dd>
                <p className="mt-0.5 text-xs text-snow-muted">
                  1-Day discounted
                </p>
              </div>
            </dl>
          </div>

          {/* Season Pass & Rentals Row */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-ice">
                🏆 Season Pass Option
              </p>
              <h3 className="mt-1 text-base font-bold text-snow">
                {resort.pricing.seasonPassName}
              </h3>
              <p className="mt-2 text-3xl font-extrabold text-ice">
                ¥{resort.pricing.seasonPassYen.toLocaleString()}
              </p>
              <p className="mt-1 text-xs text-snow-muted">
                Breaks even in{" "}
                {Math.ceil(
                  resort.pricing.seasonPassYen / resort.pricing.oneDayAdultYen
                )}{" "}
                riding days (~$
                {Math.round(resort.pricing.seasonPassYen / 150)} USD)
              </p>
            </div>

            <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-ice">
                🏂 Snowboard & Wear Rentals (1-Day)
              </p>
              <div className="mt-3 space-y-2.5 text-sm">
                <div className="flex items-center justify-between border-b border-charcoal-light pb-2">
                  <span className="text-snow">
                    Snowboard + Boots + Bindings Set
                  </span>
                  <span className="font-bold text-ice">
                    ¥{resort.pricing.fullBoardRentalDayYen.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-charcoal-light pb-2">
                  <span className="text-snow">Jacket + Pants Outer Wear</span>
                  <span className="font-bold text-snow">
                    ¥{resort.pricing.wearRentalDayYen.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-snow-muted">
                    Full Package (Board Set + Wear)
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
          <MountainMapDiagram resort={resort} />
        </div>
      )}

      {/* ================= TAB 4: WEATHER & LIVE WEBCAMS ================= */}
      {activeTab === "weather" && (
        <div className="mt-5">
          <ResortWeatherWidget resort={resort} />
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
                  ♨️ Hot Springs, Apres-Ski & Base Village Guide
                </p>
                <h2 className="mt-0.5 text-xl font-bold text-snow">
                  Best Onsens & Spots Around {resort.name}
                </h2>
                <p className="mt-0.5 text-xs text-snow-muted">
                  Tap &ldquo;Open in Google Maps&rdquo; on any spot to get walking or shuttle directions on your phone.
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
                    key={spot.name}
                    className="flex flex-col justify-between rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`rounded-md border px-2.5 py-0.5 text-[11px] font-bold ${badgeColor}`}
                        >
                          {spot.category === "Onsen"
                            ? "♨️ Onsen Hot Spring"
                            : spot.category === "Food & Apres"
                            ? "🍜 Food & Apres-Ski"
                            : "🏮 Village Landmark"}
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
                        <span>📍 Navigate in Google Maps</span>
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
                  🚅 Getting Here from Tokyo (~{durationLabel})
                </p>
                <h3 className="mt-0.5 text-lg font-bold text-snow">
                  Shinkansen & Shuttle Bus Route
                </h3>
              </div>

              <a
                href={resort.fromTokyo.stationGoogleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-charcoal-light bg-charcoal-light/50 px-4 py-2 text-xs font-bold text-ice transition hover:border-ice"
              >
                <span>🚉 Open {resort.fromTokyo.station} in Google Maps</span>
                <span aria-hidden>↗</span>
              </a>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4 sm:col-span-2">
                <p className="text-xs font-bold uppercase text-snow-muted">
                  Recommended Route
                </p>
                <p className="mt-1 text-sm font-semibold text-snow">
                  {resort.fromTokyo.summary}
                </p>
              </div>

              <div className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4">
                <p className="text-xs font-bold uppercase text-snow-muted">
                  Nearest Rail / Bus Hub
                </p>
                <p className="mt-1 text-sm font-bold text-ice">
                  {resort.fromTokyo.station}
                </p>
                <p className="mt-0.5 text-xs text-snow-muted">
                  ~{resort.fromTokyo.durationMinutes} mins total from Tokyo
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
