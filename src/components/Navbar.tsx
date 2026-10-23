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
      <nav className="mx-auto flex max-w-6xl flex-col gap-2.5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        {/* Left: Brand Logo + Mobile Language Controls */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
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
          </div>

          {/* Mobile Top-Right Language Switcher */}
          <div
            role="group"
            aria-label={t.nav.langLabel}
            className="inline-flex items-center rounded-xl border border-charcoal-light bg-charcoal-dark p-0.5 sm:hidden"
          >
            {LANGUAGE_OPTIONS.map((opt) => {
              const active = lang === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => setLang(opt.code)}
                  title={opt.fullLabel}
                  className={`rounded-lg px-2 py-1 text-[11px] font-bold transition ${
                    active
                      ? "bg-ice-deep text-charcoal shadow-sm"
                      : "text-snow-muted hover:text-snow"
                  }`}
                >
                  {opt.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Navigation Links + Favorites + Desktop Top-Right Language Selector */}
        <div className="flex flex-wrap items-center justify-between gap-2 sm:justify-end">
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
                        ? "bg-ice-deep/20 font-semibold text-ice"
                        : "text-snow-muted hover:bg-charcoal-light hover:text-snow"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* Quick saved-resorts shortcut */}
            <li>
              <Link
                href="/resorts?favorites=true"
                className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
                  favoritesCount > 0
                    ? "bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                    : "text-snow-muted hover:bg-charcoal-light hover:text-snow"
                }`}
                title={t.nav.savedTooltip}
              >
                <span>{t.directory.likedBtn(favoritesCount)}</span>
              </Link>
            </li>
          </ul>

          {/* Desktop Top-Right Language Switcher (EN · 日本語 · 中文) */}
          <div
            role="group"
            aria-label={t.nav.langLabel}
            className="hidden items-center gap-0.5 rounded-xl border border-charcoal-light bg-charcoal-dark p-1 shadow-inner sm:inline-flex"
          >
            <span
              aria-hidden
              className="pl-2 pr-1 text-xs text-snow-muted select-none"
            >
              🌐
            </span>
            {LANGUAGE_OPTIONS.map((opt) => {
              const active = lang === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => setLang(opt.code)}
                  title={opt.fullLabel}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
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
