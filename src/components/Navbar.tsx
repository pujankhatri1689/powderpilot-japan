"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/context/FavoritesContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/resorts", label: "Resorts" },
  { href: "/conditions", label: "Live Snow & Radar" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favoritesCount } = useFavorites();
  const isHome = pathname === "/";

  // Compute a sensible parent back-link based on current URL
  const backLink = pathname.startsWith("/resorts/")
    ? { href: "/resorts", label: "All Resorts" }
    : { href: "/", label: "Back to Home" };

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-light bg-charcoal/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-snow transition hover:opacity-90"
          >
            <span aria-hidden className="text-ice">
              ❄
            </span>
            <span>
              Powder<span className="text-ice">Pilot</span>
            </span>
          </Link>

          {/* Quick mobile back button whenever not on the homepage */}
          {!isHome && (
            <Link
              href={backLink.href}
              className="inline-flex items-center gap-1 rounded-lg border border-charcoal-light bg-charcoal-light/60 px-2.5 py-1 text-xs font-medium text-ice transition hover:border-ice sm:hidden"
            >
              <span aria-hidden>←</span> {backLink.label}
            </Link>
          )}
        </div>

        <div className="flex items-center justify-between gap-2">
          <ul className="flex flex-wrap items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-lg px-3 py-1.5 transition-colors ${
                      isActive
                        ? "bg-ice-deep/20 text-ice font-semibold"
                        : "text-snow-muted hover:bg-charcoal-light hover:text-snow"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            {/* Quick favorites indicator */}
            <li>
              <Link
                href="/resorts?favorites=true"
                className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
                  favoritesCount > 0
                    ? "text-rose-400 bg-rose-500/10 hover:bg-rose-500/20"
                    : "text-snow-muted hover:bg-charcoal-light hover:text-snow"
                }`}
                title="View your saved / favorited resorts"
              >
                <span>❤️</span>
                <span>{favoritesCount}</span>
              </Link>
            </li>
          </ul>

          {/* Desktop contextual back pill when on inner pages */}
          {!isHome && (
            <Link
              href={backLink.href}
              className="hidden items-center gap-1.5 rounded-lg border border-charcoal-light bg-charcoal-light/50 px-3 py-1.5 text-xs font-medium text-snow-muted transition hover:border-ice hover:text-ice sm:inline-flex"
            >
              <span aria-hidden>←</span> {backLink.label}
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
