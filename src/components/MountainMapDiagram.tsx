"use client";

import { useState } from "react";
import type { Resort } from "@/data/resorts";

/**
 * Displays the actual official resort trail/course map image with a
 * full-screen lightbox zoom view + signature run callouts.
 */
export default function MountainMapDiagram({ resort }: { resort: Resort }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ice">
            Official Resort Trail & Course Map
          </p>
          <h2 className="mt-0.5 text-lg font-bold text-snow">
            {resort.name} Gelande Map & Signature Runs
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setZoomed(true)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-ice-deep px-3.5 py-2 text-xs font-semibold text-charcoal transition hover:bg-ice"
          >
            <span>🔍 Tap to Zoom Full Map</span>
          </button>
          <a
            href={resort.trailMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-charcoal-light bg-charcoal-light/50 px-3.5 py-2 text-xs font-semibold text-snow transition hover:border-ice hover:text-ice"
          >
            <span>Official Resort Page</span>
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>

      {/* Actual Official Trail Map Image */}
      <div className="mt-4 overflow-hidden rounded-xl border border-charcoal-light bg-charcoal-dark">
        <button
          type="button"
          onClick={() => setZoomed(true)}
          className="group relative block w-full cursor-zoom-in overflow-hidden"
          title="Click to enlarge trail map"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resort.trailMapImage}
            alt={`${resort.name} official ski trail and course map`}
            className="max-h-[620px] w-full object-contain bg-charcoal-dark transition duration-300 group-hover:scale-[1.01]"
          />
          <span className="absolute bottom-3 right-3 rounded-lg bg-charcoal/90 px-3 py-1.5 text-xs font-semibold text-ice shadow-lg backdrop-blur-sm">
            🔍 Click map to view full screen
          </span>
        </button>

        {/* Legend / Stats Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-charcoal-light bg-charcoal px-4 py-3 text-xs text-snow-muted">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Beginner ({resort.terrain.beginner}%)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ice-deep" />
              Intermediate ({resort.terrain.intermediate}%)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              Advanced / Powder ({resort.terrain.advanced}%)
            </span>
          </div>
          <span>
            Base {resort.elevation.base}m → Peak {resort.elevation.top}m (
            {resort.elevation.vertical}m vertical) · {resort.terrain.runs} runs
          </span>
        </div>
      </div>

      {/* Signature Runs Breakdown */}
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {resort.signatureRuns.map((run) => {
          const badgeStyle =
            run.level === "Advanced"
              ? "border-rose-500/40 bg-rose-500/15 text-rose-300"
              : run.level === "Intermediate"
              ? "border-ice/40 bg-ice/15 text-ice"
              : "border-emerald-400/40 bg-emerald-400/15 text-emerald-300";

          return (
            <div
              key={run.name}
              className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4"
            >
              <span
                className={`inline-block rounded-md border px-2 py-0.5 text-[11px] font-semibold ${badgeStyle}`}
              >
                {run.level}
              </span>
              <h3 className="mt-2 text-sm font-bold text-snow">{run.name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-snow-muted">
                {run.note}
              </p>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal when user clicks the map */}
      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${resort.name} full trail map`}
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal-dark/95 p-4 backdrop-blur-md"
        >
          <div className="mb-3 flex w-full max-w-6xl items-center justify-between">
            <p className="text-sm font-bold text-snow">
              {resort.name} — Official Trail & Course Map
            </p>
            <div className="flex items-center gap-2">
              <a
                href={resort.trailMapImage}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-xl border border-charcoal-light bg-charcoal px-3 py-1.5 text-xs font-semibold text-ice hover:border-ice"
              >
                Open Raw Image ↗
              </a>
              <button
                type="button"
                onClick={() => setZoomed(false)}
                className="rounded-xl bg-ice-deep px-3.5 py-1.5 text-xs font-bold text-charcoal hover:bg-ice"
              >
                ✕ Close
              </button>
            </div>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-6xl overflow-auto rounded-2xl border border-charcoal-light bg-charcoal-dark p-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={resort.trailMapImage}
              alt={`${resort.name} official trail map zoomed`}
              className="mx-auto h-auto max-w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
