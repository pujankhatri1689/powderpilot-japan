import Link from "next/link";

type ComingSoonProps = {
  title: string;
  description: string;
};

/** Temporary placeholder for pages we haven't built yet. */
export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <h1 className="text-3xl font-bold text-snow sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-snow-muted">{description}</p>
      <p className="mt-6 text-sm font-medium uppercase tracking-widest text-ice">
        Coming in the next step
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-charcoal-light bg-charcoal-light/60 px-5 py-2.5 text-sm font-semibold text-snow transition hover:border-ice hover:text-ice"
        >
          <span aria-hidden>←</span> Back to Home
        </Link>
        <Link
          href="/resorts"
          className="inline-flex items-center gap-2 rounded-xl bg-ice-deep px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:bg-ice"
        >
          Browse Resorts →
        </Link>
      </div>
    </section>
  );
}
