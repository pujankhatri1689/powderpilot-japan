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
        Coming soon
      </p>
    </section>
  );
}
