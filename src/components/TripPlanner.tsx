"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { RESORTS } from "@/data/resorts";

interface TripDay {
  id: string;
  dayNumber: number;
  resortSlug: string;
  lodgingYen: number;
  transitYen: number;
  foodYen: number;
  notes: string;
}

interface GearItem {
  id: string;
  label: string;
  checked: boolean;
}

const STORAGE_KEY_DAYS = "powderpilot_trip_days_v1";
const STORAGE_KEY_GEAR = "powderpilot_trip_gear_v1";

const DEFAULT_DAYS: TripDay[] = [
  {
    id: "day-1",
    dayNumber: 1,
    resortSlug: "gala-yuzawa",
    lodgingYen: 12000,
    transitYen: 13000,
    foodYen: 4500,
    notes: "Morning Shinkansen from Tokyo Station, warm-up laps & onsen in Yuzawa.",
  },
  {
    id: "day-2",
    dayNumber: 2,
    resortSlug: "kagura",
    lodgingYen: 12000,
    transitYen: 1200,
    foodYen: 4500,
    notes: "First chair up to Kagura Top Lift 5 for deep tree runs.",
  },
  {
    id: "day-3",
    dayNumber: 3,
    resortSlug: "nozawa-onsen",
    lodgingYen: 14000,
    transitYen: 6500,
    foodYen: 5000,
    notes: "Yamabiko powder glades + evening Soto-yu hot spring walk.",
  },
];

const DEFAULT_GEAR: GearItem[] = [
  { id: "g1", label: "Powder Snowboard + Bindings", checked: true },
  { id: "g2", label: "Goggles (Low-Light Storm Lens)", checked: true },
  { id: "g3", label: "Gore-Tex Jacket & Bibs", checked: false },
  { id: "g4", label: "Avalanche Beacon, Probe & Shovel (Tree/Sidecountry)", checked: false },
  { id: "g5", label: "IC Card (Suica/Pasmo) + Shinkansen QR", checked: false },
  { id: "g6", label: "Quick-Dry Onsen Towel & Coin Pouch (¥100 coins)", checked: false },
];

function loadSaved<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed as T;
    }
  } catch {
    // Ignore storage parse issues
  }
  return fallback;
}

export default function TripPlanner() {
  const [days, setDays] = useState<TripDay[]>(() =>
    loadSaved(STORAGE_KEY_DAYS, DEFAULT_DAYS)
  );
  const [gear, setGear] = useState<GearItem[]>(() =>
    loadSaved(STORAGE_KEY_GEAR, DEFAULT_GEAR)
  );

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DAYS, JSON.stringify(days));
    } catch {
      // Ignore quota errors
    }
  }, [days]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_GEAR, JSON.stringify(gear));
    } catch {
      // Ignore quota errors
    }
  }, [gear]);

  function addDay() {
    setDays((prev) => {
      const nextNum = prev.length + 1;
      return [
        ...prev,
        {
          id: `day-${Date.now()}`,
          dayNumber: nextNum,
          resortSlug: "hakuba-cortina",
          lodgingYen: 12000,
          transitYen: 3000,
          foodYen: 4500,
          notes: "Storm chasing day — check Powder Radar the night before!",
        },
      ];
    });
  }

  function removeDay(id: string) {
    setDays((prev) =>
      prev
        .filter((d) => d.id !== id)
        .map((d, index) => ({ ...d, dayNumber: index + 1 }))
    );
  }

  function updateDay(id: string, patch: Partial<TripDay>) {
    setDays((prev) =>
      prev.map((d) => (d.id === id ? { ...d, ...patch } : d))
    );
  }

  function toggleGear(id: string) {
    setGear((prev) =>
      prev.map((g) => (g.id === id ? { ...g, checked: !g.checked } : g))
    );
  }

  function resetDemoTrip() {
    setDays(DEFAULT_DAYS);
    setGear(DEFAULT_GEAR);
  }

  const totals = useMemo(() => {
    let liftPasses = 0;
    let lodging = 0;
    let transit = 0;
    let food = 0;
    let totalVertical = 0;

    days.forEach((day) => {
      const resort = RESORTS.find((r) => r.slug === day.resortSlug);
      liftPasses += resort?.dayPassYen ?? 0;
      totalVertical += resort?.elevation.vertical ?? 0;
      lodging += Number(day.lodgingYen) || 0;
      transit += Number(day.transitYen) || 0;
      food += Number(day.foodYen) || 0;
    });

    const grandTotalYen = liftPasses + lodging + transit + food;
    return {
      liftPasses,
      lodging,
      transit,
      food,
      grandTotalYen,
      approxUsd: Math.round(grandTotalYen / 150),
      totalVertical,
    };
  }, [days]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Top breadcrumb */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-snow-muted transition hover:text-ice"
        >
          <span aria-hidden>←</span> Back to Home
        </Link>
        <span className="text-xs font-medium uppercase tracking-wider text-snow-muted">
          Auto-saved to your browser
        </span>
      </div>

      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ice">
            Itinerary & Yen Budget Builder
          </p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-snow sm:text-4xl">
            Japan Snowboard Trip Planner
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-snow-muted sm:text-base">
            Pick your mountain for each riding day, track Shinkansen & lift pass
            costs in ¥, and check off your powder gear before heading to the
            station.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={addDay}
            className="rounded-xl bg-ice-deep px-4 py-2.5 text-xs font-semibold text-charcoal shadow-lg shadow-ice-deep/25 transition hover:bg-ice sm:text-sm"
          >
            + Add Riding Day
          </button>
          <button
            type="button"
            onClick={resetDemoTrip}
            className="rounded-xl border border-charcoal-light bg-charcoal-light/50 px-3.5 py-2.5 text-xs font-semibold text-snow-muted transition hover:border-ice hover:text-snow sm:text-sm"
          >
            Reset Sample Trip
          </button>
        </div>
      </div>

      {/* Budget Summary Banner */}
      <dl className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-charcoal-light bg-charcoal-light/40 p-4">
          <dt className="text-xs uppercase text-snow-muted">
            Estimated Total ({days.length} Days)
          </dt>
          <dd className="mt-1 text-2xl font-extrabold text-ice">
            ¥{totals.grandTotalYen.toLocaleString()}
          </dd>
          <p className="mt-0.5 text-xs text-snow-muted">
            ~${totals.approxUsd.toLocaleString()} USD
          </p>
        </div>

        <div className="rounded-2xl border border-charcoal-light bg-charcoal-light/40 p-4">
          <dt className="text-xs uppercase text-snow-muted">Lift Passes</dt>
          <dd className="mt-1 text-2xl font-bold text-snow">
            ¥{totals.liftPasses.toLocaleString()}
          </dd>
          <p className="mt-0.5 text-xs text-snow-muted">
            Auto-calculated from resorts
          </p>
        </div>

        <div className="rounded-2xl border border-charcoal-light bg-charcoal-light/40 p-4">
          <dt className="text-xs uppercase text-snow-muted">
            Transit & Lodging
          </dt>
          <dd className="mt-1 text-2xl font-bold text-snow">
            ¥{(totals.transit + totals.lodging).toLocaleString()}
          </dd>
          <p className="mt-0.5 text-xs text-snow-muted">
            Shinkansen, buses & stays
          </p>
        </div>

        <div className="rounded-2xl border border-charcoal-light bg-charcoal-light/40 p-4">
          <dt className="text-xs uppercase text-snow-muted">Food & Ramen</dt>
          <dd className="mt-1 text-2xl font-bold text-snow">
            ¥{totals.food.toLocaleString()}
          </dd>
          <p className="mt-0.5 text-xs text-snow-muted">
            Mountain curry, izakaya & onsen
          </p>
        </div>
      </dl>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left 2 Columns: Day-by-Day Cards */}
        <div className="space-y-4 lg:col-span-2">
          {days.map((day) => {
            const resort =
              RESORTS.find((r) => r.slug === day.resortSlug) ?? RESORTS[0];
            const dayTotal =
              (resort?.dayPassYen ?? 0) +
              (Number(day.lodgingYen) || 0) +
              (Number(day.transitYen) || 0) +
              (Number(day.foodYen) || 0);

            return (
              <div
                key={day.id}
                className="rounded-2xl border border-charcoal-light bg-charcoal-light/35 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-charcoal-light pb-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl bg-ice-deep px-3 py-1 text-xs font-extrabold text-charcoal">
                      DAY {day.dayNumber}
                    </span>
                    {resort && (
                      <Link
                        href={`/resorts/${resort.slug}`}
                        className="text-sm font-semibold text-ice hover:underline"
                      >
                        View {resort.name} Map & Guide →
                      </Link>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-snow">
                      Day Total:{" "}
                      <span className="text-ice">
                        ¥{dayTotal.toLocaleString()}
                      </span>
                    </span>
                    {days.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeDay(day.id)}
                        className="rounded-lg border border-charcoal-light px-2.5 py-1 text-xs text-snow-muted transition hover:border-rose-500 hover:text-rose-300"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>

                {/* Resort Selector + Lift Pass */}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-snow-muted">
                      Target Resort
                    </label>
                    <select
                      value={day.resortSlug}
                      onChange={(e) =>
                        updateDay(day.id, { resortSlug: e.target.value })
                      }
                      className="mt-1 w-full rounded-xl border border-charcoal-light bg-charcoal px-3 py-2.5 text-sm font-semibold text-snow focus:border-ice focus:outline-none"
                    >
                      {RESORTS.map((r) => (
                        <option key={r.slug} value={r.slug}>
                          [{r.region}] {r.name} (¥
                          {r.dayPassYen.toLocaleString()})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="rounded-xl bg-charcoal p-3">
                    <p className="text-[11px] uppercase text-snow-muted">
                      Transit from Tokyo & Pass
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-snow">
                      {resort?.fromTokyo.summary}
                    </p>
                    <p className="mt-0.5 text-xs text-ice">
                      1-Day Pass: ¥{resort?.dayPassYen.toLocaleString()} ·
                      Vertical {resort?.elevation.vertical}m
                    </p>
                  </div>
                </div>

                {/* Cost Inputs */}
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-snow-muted">
                      Transit (¥)
                    </label>
                    <input
                      type="number"
                      step={500}
                      min={0}
                      value={day.transitYen}
                      onChange={(e) =>
                        updateDay(day.id, {
                          transitYen: Number(e.target.value),
                        })
                      }
                      className="mt-1 w-full rounded-xl border border-charcoal-light bg-charcoal px-3 py-2 text-sm text-snow focus:border-ice focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-snow-muted">
                      Lodging (¥)
                    </label>
                    <input
                      type="number"
                      step={1000}
                      min={0}
                      value={day.lodgingYen}
                      onChange={(e) =>
                        updateDay(day.id, {
                          lodgingYen: Number(e.target.value),
                        })
                      }
                      className="mt-1 w-full rounded-xl border border-charcoal-light bg-charcoal px-3 py-2 text-sm text-snow focus:border-ice focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-snow-muted">
                      Food & Onsen (¥)
                    </label>
                    <input
                      type="number"
                      step={500}
                      min={0}
                      value={day.foodYen}
                      onChange={(e) =>
                        updateDay(day.id, { foodYen: Number(e.target.value) })
                      }
                      className="mt-1 w-full rounded-xl border border-charcoal-light bg-charcoal px-3 py-2 text-sm text-snow focus:border-ice focus:outline-none"
                    />
                  </div>
                </div>

                {/* Day Notes */}
                <div className="mt-3">
                  <label className="block text-[11px] font-medium text-snow-muted">
                    Riding Plan & Notes
                  </label>
                  <input
                    type="text"
                    value={day.notes}
                    onChange={(e) =>
                      updateDay(day.id, { notes: e.target.value })
                    }
                    placeholder="First chair target, tree zones, dinner spot..."
                    className="mt-1 w-full rounded-xl border border-charcoal-light bg-charcoal px-3 py-2 text-sm text-snow placeholder-snow-muted focus:border-ice focus:outline-none"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Packing Checklist */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-charcoal-light bg-charcoal-light/35 p-5">
            <h2 className="text-base font-bold text-snow">
              🎒 Japow Packing Checklist
            </h2>
            <p className="mt-1 text-xs text-snow-muted">
              Tap to check off gear before your train.
            </p>

            <ul className="mt-4 space-y-2.5">
              {gear.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => toggleGear(item.id)}
                    className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left text-xs font-medium transition ${
                      item.checked
                        ? "border-ice/40 bg-ice/10 text-snow line-through opacity-80"
                        : "border-charcoal-light bg-charcoal text-snow hover:border-ice/50"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[11px] ${
                        item.checked
                          ? "border-ice bg-ice-deep text-charcoal font-bold"
                          : "border-snow-muted"
                      }`}
                    >
                      {item.checked ? "✓" : ""}
                    </span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
