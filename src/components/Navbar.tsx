"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/context/FavoritesContext";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGE_OPTIONS } from "@/i18n/translations";

export default function Navbar() {
  const pathname = usePathname();
  const { favoritesCount } = useFavorites();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/resorts", label: t.nav.resorts },
    { href: "/conditions", label: t.nav.conditions },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-light bg-charcoal/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2.5 sm:px-6 sm:py-3">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 text-base font-bold tracking-tight text-snow transition hover:opacity-90 sm:gap-2 sm:text-lg"
        >
          <span aria-hidden className="text-ice">
            ❄
          </span>
          <span>
            Powder<span className="text-ice">Pilot</span>
          </span>
        </Link>

        {/* Right: Navigation Links (Desktop) + Favorites & Language Selector */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Desktop-only Navigation Links */}
          <ul className="hidden sm:flex items-center gap-1 text-sm font-medium">
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
                        ? "bg-ice-deep/20 font-semibold text-ice"
                        : "text-snow-muted hover:bg-charcoal-light hover:text-snow"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Quick saved-resorts shortcut (Mobile & Desktop) */}
          <Link
            href="/resorts?favorites=true"
            className={`inline-flex items-center gap-1.5 rounded-xl border border-charcoal-light px-2.5 py-1.5 text-xs font-semibold transition sm:border-transparent ${
              favoritesCount > 0
                ? "bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                : "bg-charcoal-dark text-snow-muted hover:bg-charcoal-light hover:text-snow"
            }`}
            title={t.nav.savedTooltip}
          >
            <span>❤️</span>
            <span className="text-xs font-bold">{favoritesCount}</span>
          </Link>

          {/* Compact Responsive Language Switcher */}
          <div
            role="group"
            aria-label={t.nav.langLabel}
            className="inline-flex items-center rounded-xl border border-charcoal-light bg-charcoal-dark p-0.5 shadow-inner sm:p-1"
          >
            {LANGUAGE_OPTIONS.map((opt) => {
              const active = lang === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => setLang(opt.code)}
                  title={opt.fullLabel}
                  className={`rounded-lg px-2 py-1 text-[11px] font-bold transition sm:px-2.5 sm:text-xs ${
                    active
                      ? "bg-ice-deep text-charcoal shadow-sm shadow-ice-deep/30"
                      : "text-snow-muted hover:bg-charcoal-light hover:text-snow"
                  }`}
                >
                  {opt.shortLabel}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
