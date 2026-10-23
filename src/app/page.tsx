import Link from "next/link";

const regions = ["Nagano", "Niigata", "Gunma"];

export default function Home() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-charcoal">
      {/* Subtle icy glow in the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-ice-deep/20 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-32">
        <p className="mb-4 rounded-full border border-charcoal-light bg-charcoal-light/50 px-4 py-1 text-xs font-medium uppercase tracking-widest text-ice">
          Japan Snowboard Trip Planner
        </p>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-snow sm:text-6xl">
          Chase the deepest <span className="text-ice">Japow</span>.
          <br className="hidden sm:block" /> Plan every run.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-snow-muted sm:text-lg">
          Resorts, live snow conditions, and trip itineraries for riding
          Japan&apos;s best powder, all in one place.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/resorts"
            className="rounded-xl bg-ice-deep px-8 py-4 text-base font-semibold text-charcoal shadow-lg shadow-ice-deep/30 transition hover:bg-ice active:scale-95"
          >
            Explore Resorts
          </Link>
          <Link
            href="/conditions"
            className="rounded-xl border border-charcoal-light px-8 py-4 text-base font-semibold text-snow transition hover:border-ice hover:text-ice"
          >
            Check Conditions
          </Link>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-2 text-sm text-snow-muted">
          {regions.map((region) => (
            <li
              key={region}
              className="rounded-full bg-charcoal-light px-3 py-1"
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
