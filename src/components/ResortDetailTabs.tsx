"use client";

import { useState } from "react";
import Link from "next/link";
import type { Resort } from "@/data/resorts";
import MountainMapDiagram from "@/components/MountainMapDiagram";
import ResortWeatherWidget from "@/components/ResortWeatherWidget";

type DetailTab = "maps" | "weather" | "tickets" | "hours";

export default function ResortDetailTabs({ resort }: { resort: Resort }) {
  const [activeTab, setActiveTab] = useState<DetailTab>("maps");

  const tabs: { id: DetailTab; label: string; badge?: string }[] = [
    {
      id: "maps",
      label: "🗺️ Trail Maps & Runs",
      badge: `${resort.mapGallery.length} HD`,
    },
    {
      id: "weather",
      label: "❄️ Live Weather & Forecast",
      badge: "7-Day",
    },
    {
      id: "tickets",
      label: "🎟️ Tickets, Rentals & Season Pass",
      badge: `¥${resort.pricing.oneDayAdultYen.toLocaleString()}`,
    },
    {
      id: "hours",
      label: "🕒 Hours & Access",
      badge: `~${resort.fromTokyo.durationMinutes}m`,
    },
  ];

  return (
    <div className="mt-6">
      {/* Interactive Tab Bar */}
      <div className="flex flex-wrap gap-2 border-b border-charcoal-light pb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition sm:text-sm ${
                isActive
                  ? "bg-ice-deep text-charcoal shadow-lg shadow-ice-deep/25"
                  : "border border-charcoal-light bg-charcoal text-snow-muted hover:border-ice/50 hover:text-snow"
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className={`rounded-md px-2 py-0.5 text-[11px] font-extrabold ${
                    isActive
                      ? "bg-charcoal/20 text-charcoal"
                      : "bg-charcoal-light text-ice"
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB 1: Trail Maps & Signature Runs */}
      {activeTab === "maps" && (
        <div className="mt-5">
          <MountainMapDiagram resort={resort} />
        </div>
      )}

      {/* TAB 2: Live Weather & Forecast */}
      {activeTab === "weather" && (
        <div className="mt-5">
          <ResortWeatherWidget resort={resort} />
        </div>
      )}

      {/* TAB 3: Lift Tickets, Season Passes & Gear Rentals */}
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
                <p className="mt-0.5 text-xs text-snow-muted">1-Day discounted</p>
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

      {/* TAB 4: Operating Hours & Transit Access */}
      {activeTab === "hours" && (
        <div className="mt-5 space-y-5 rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ice">
              Operating Schedule & Tokyo Shinkansen Access
            </p>
            <h2 className="mt-0.5 text-xl font-bold text-snow">
              {resort.name} Business Hours & Getting There
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
              <p className="text-xs font-bold uppercase text-ice">
                📅 Season Window
              </p>
              <p className="mt-1 text-base font-bold text-snow">
                {resort.operatingHours.seasonWindow}
              </p>
            </div>

            <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
              <p className="text-xs font-bold uppercase text-ice">
                🕗 Daytime Lift Hours
              </p>
              <p className="mt-1 text-base font-bold text-snow">
                {resort.operatingHours.dayHours}
              </p>
            </div>

            <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-4">
              <p className="text-xs font-bold uppercase text-ice">
                🌙 Night Skiing Hours
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

          <div className="rounded-xl border border-charcoal-light bg-charcoal-light/25 p-4 text-xs text-snow-muted">
            <strong className="text-snow">Operations Note:</strong>{" "}
            {resort.operatingHours.notes}
          </div>

          {/* Transit Box */}
          <div className="rounded-xl border border-charcoal-light bg-charcoal-light/35 p-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-snow">
              🚅 How to Get There from Tokyo (~
              {resort.fromTokyo.durationMinutes} mins)
            </h3>
            <p className="mt-2 text-sm text-snow">
              {resort.fromTokyo.summary}
            </p>
            <p className="mt-1 text-xs text-snow-muted">
              Nearest Station / Hub: {resort.fromTokyo.station}
            </p>
          </div>
        </div>
      )}

      {/* Bottom Action Bar */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/planner"
          className="inline-flex flex-1 items-center justify-center rounded-xl bg-ice-deep px-5 py-3 text-sm font-semibold text-charcoal transition hover:bg-ice"
        >
          + Plan a Trip to {resort.name}
        </Link>
        <Link
          href="/conditions"
          className="inline-flex flex-1 items-center justify-center rounded-xl border border-charcoal-light bg-charcoal px-5 py-3 text-sm font-semibold text-snow transition hover:border-ice hover:text-ice"
        >
          Compare All-Japan Snow Leaderboard
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
  );
}
