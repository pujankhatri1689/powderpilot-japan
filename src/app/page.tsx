import Link from "next/link";
import { REGIONS, RESORTS } from "@/data/resorts";

export default function Home() {
  return (
    <section className="relative flex flex-1 flex-col overflow-hidden bg-charcoal">
      {/* Subtle icy glow in the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-ice-deep/20 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-14 pb-20 text-center sm:px-6 sm:pt-20 sm:pb-28">
        <p className="mb-4 rounded-full border border-charcoal-light bg-charcoal-light/50 px-4 py-1 text-xs font-medium uppercase tracking-widest text-ice">
          Japan Snowboard Encyclopedia &amp; Live Snow Guide
        </p>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-snow sm:text-6xl">
          Chase the deepest <span className="text-ice">Japow</span>.
          <br className="hidden sm:block" /> Know every mountain.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-snow-muted sm:text-lg">
          Instant access to HD trail maps, lift ticket &amp; rental prices,
          snowboarder terrain intel, live mountain webcams, weather forecasts,
          and village onsen guides across Nagano, Niigata &amp; Gunma.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/resorts"
            className="rounded-xl bg-ice-deep px-8 py-4 text-base font-semibold text-charcoal shadow-lg shadow-ice-deep/30 transition hover:bg-ice active:scale-95"
          >
            🏔️ Browse All 10 Resorts
          </Link>
          <Link
            href="/conditions"
            className="rounded-xl border border-charcoal-light bg-charcoal-light/40 px-8 py-4 text-base font-semibold text-snow transition hover:border-ice hover:text-ice"
          >
            ❄️ Live Snow &amp; Powder Radar
          </Link>
        </div>

        {/* Super-Surfable Instant Resort Jumper */}
        <div className="mt-14 w-full text-left">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-ice">
                ⚡ Quick-Surf Resort Directory
              </h2>
              <p className="text-xs text-snow-muted">
                Jump straight into any resort&apos;s Overview, Tickets, HD Trail Maps, Weather, or Onsen Guide
              </p>
            </div>
            <Link
              href="/resorts"
              className="text-xs font-semibold text-ice transition hover:underline"
            >
              Filter &amp; compare all resorts →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {REGIONS.map((region) => {
              const prefResorts = RESORTS.filter((r) => r.region === region);
              return (
                <div
                  key={region}
                  className="rounded-2xl border border-charcoal-light bg-charcoal-light/25 p-4"
                >
                  <div className="mb-3 flex items-center justify-between border-b border-charcoal-light/70 pb-2.5">
                    <span className="text-sm font-bold text-snow">
                      📍 {region} Prefecture
                    </span>
                    <span className="rounded-full bg-charcoal px-2.5 py-0.5 text-[11px] font-semibold text-ice">
                      {prefResorts.length} resorts
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {prefResorts.map((resort) => (
                      <li key={resort.slug}>
                        <Link
                          href={`/resorts/${resort.slug}`}
                          className="group flex items-center justify-between rounded-xl border border-charcoal-light/60 bg-charcoal/60 px-3 py-2.5 transition hover:border-ice/50 hover:bg-charcoal"
                        >
                          <div className="min-w-0 pr-2">
                            <p className="truncate text-sm font-semibold text-snow group-hover:text-ice">
                              {resort.name}
                            </p>
                            <p className="truncate text-[11px] text-snow-muted">
                              {resort.elevation.vertical}m vert · ¥
                              {resort.dayPassYen.toLocaleString()} ·{" "}
                              {resort.fromTokyo.durationMinutes}m from Tokyo
                            </p>
                          </div>
                          <span className="shrink-0 text-xs font-semibold text-snow-muted transition group-hover:translate-x-0.5 group-hover:text-ice">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
