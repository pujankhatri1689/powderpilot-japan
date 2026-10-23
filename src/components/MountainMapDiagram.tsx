import type { Resort } from "@/data/resorts";

/**
 * Interactive SVG mountain & run diagram generated from each resort's real
 * elevation (base/peak/vertical), lift count, and signature runs.
 */
export default function MountainMapDiagram({ resort }: { resort: Resort }) {
  const midElevation = Math.round(
    (resort.elevation.base + resort.elevation.top) / 2
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ice">
            Interactive Trail & Elevation Map
          </p>
          <h2 className="mt-0.5 text-lg font-bold text-snow">
            {resort.name} Mountain Profile & Signature Runs
          </h2>
        </div>

        <a
          href={resort.trailMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 self-start rounded-xl bg-ice-deep/15 px-3.5 py-2 text-xs font-semibold text-ice transition hover:bg-ice-deep hover:text-charcoal sm:self-auto"
        >
          <span>🗺️ Open Official Course Map</span>
          <span aria-hidden>↗</span>
        </a>
      </div>

      {/* SVG Mountain & Run Schematic */}
      <div className="mt-4 overflow-hidden rounded-xl border border-charcoal-light bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light/40 p-3 sm:p-4">
        <svg
          viewBox="0 0 800 340"
          className="h-auto w-full"
          role="img"
          aria-label={`Mountain trail diagram for ${resort.name}`}
        >
          <defs>
            <linearGradient id="mtnFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.28" />
              <stop offset="60%" stopColor="#1e293b" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Elevation Grid Lines */}
          <line
            x1="40"
            y1="52"
            x2="760"
            y2="52"
            stroke="#334155"
            strokeDasharray="4 4"
            strokeWidth="1"
          />
          <text x="45" y="44" fill="#38bdf8" fontSize="11" fontWeight="bold">
            PEAK {resort.elevation.top}m
          </text>

          <line
            x1="40"
            y1="175"
            x2="760"
            y2="175"
            stroke="#334155"
            strokeDasharray="4 4"
            strokeWidth="1"
          />
          <text x="45" y="167" fill="#94a3b8" fontSize="10">
            MID-MOUNTAIN {midElevation}m
          </text>

          <line
            x1="40"
            y1="295"
            x2="760"
            y2="295"
            stroke="#334155"
            strokeWidth="1"
          />
          <text x="45" y="315" fill="#94a3b8" fontSize="11" fontWeight="bold">
            BASE LODGE {resort.elevation.base}m (Vertical:{" "}
            {resort.elevation.vertical}m)
          </text>

          {/* Background Secondary Peak */}
          <polygon
            points="120,295 310,105 520,295"
            fill="#1e293b"
            opacity="0.55"
          />

          {/* Main Mountain Silhouette */}
          <polygon
            points="180,295 450,52 730,295"
            fill="url(#mtnFill)"
            stroke="#475569"
            strokeWidth="1.5"
          />

          {/* Snow Cap Highlight */}
          <polygon
            points="450,52 385,112 425,102 450,122 478,100 515,110"
            fill="#f8fafc"
            opacity="0.22"
          />

          {/* Tree Zone Icons if allowed */}
          {resort.terrain.treeRunsAllowed && (
            <g fill="#38bdf8" opacity="0.55">
              <polygon points="355,145 347,163 363,163" />
              <polygon points="372,155 364,173 380,173" />
              <polygon points="535,140 527,158 543,158" />
              <polygon points="552,152 544,170 560,170" />
            </g>
          )}

          {/* Gondola / Main Lift Line (dashed) */}
          <line
            x1="440"
            y1="295"
            x2="450"
            y2="58"
            stroke="#f8fafc"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            opacity="0.6"
          />

          {/* Advanced Run Line (Rose) */}
          <path
            d="M 450 56 Q 380 130, 350 200 T 300 295"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Intermediate Run Line (Ice Blue) */}
          <path
            d="M 450 56 Q 485 145, 455 215 T 465 295"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Beginner Run Line (Emerald) */}
          <path
            d="M 450 56 Q 555 130, 560 205 T 615 295"
            fill="none"
            stroke="#34d399"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Summit Beacon */}
          <circle cx="450" cy="52" r="6" fill="#38bdf8" />
          <circle
            cx="450"
            cy="52"
            r="12"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.5"
            opacity="0.6"
          />

          {/* Run Labels */}
          <g fontSize="11" fontWeight="bold" fill="#f8fafc">
            <rect
              x="220"
              y="182"
              width="120"
              height="22"
              rx="6"
              fill="#0f172a"
              stroke="#f43f5e"
              strokeWidth="1"
            />
            <text x="280" y="197" textAnchor="middle" fill="#fda4af">
              Steeps / Bowls ({resort.terrain.advanced}%)
            </text>

            <rect
              x="405"
              y="222"
              width="125"
              height="22"
              rx="6"
              fill="#0f172a"
              stroke="#0ea5e9"
              strokeWidth="1"
            />
            <text x="467" y="237" textAnchor="middle" fill="#38bdf8">
              Cruisers ({resort.terrain.intermediate}%)
            </text>

            <rect
              x="575"
              y="192"
              width="120"
              height="22"
              rx="6"
              fill="#0f172a"
              stroke="#34d399"
              strokeWidth="1"
            />
            <text x="635" y="207" textAnchor="middle" fill="#6ee7b7">
              Green Runs ({resort.terrain.beginner}%)
            </text>
          </g>
        </svg>

        {/* Legend */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-charcoal-light pt-3 text-xs text-snow-muted">
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
            {resort.terrain.runs} total runs · {resort.terrain.lifts} lifts
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
    </div>
  );
}
