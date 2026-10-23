import Link from "next/link";

const navLinks = [
  { href: "/resorts", label: "Resorts" },
  { href: "/conditions", label: "Conditions" },
  { href: "/planner", label: "Planner" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-light bg-charcoal/80 backdrop-blur-md">
      {/* Mobile: brand on top, links below. Desktop (sm+): one row. */}
      <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-snow"
        >
          <span aria-hidden className="text-ice">
            ❄
          </span>
          Powder<span className="text-ice">Pilot</span>
        </Link>

        <ul className="flex gap-1 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-snow-muted transition-colors hover:bg-charcoal-light hover:text-ice"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
