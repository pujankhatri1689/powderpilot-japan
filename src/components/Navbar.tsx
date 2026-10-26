"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useFavorites } from "@/context/FavoritesContext";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGE_OPTIONS } from "@/i18n/translations";

export default function Navbar() {
  const pathname = usePathname();
  const { favoritesCount } = useFavorites();
  const { lang, setLang, t } = useLanguage();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const updateHeaderHeight = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      if (h > 0) {
        document.documentElement.style.setProperty("--header-h", `${h}px`);
      }
    };

    updateHeaderHeight();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(updateHeaderHeight);
      ro.observe(el);
    }

    window.addEventListener("resize", updateHeaderHeight);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [lang]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/resorts", label: t.nav.resorts },
    { href: "/conditions", label: t.nav.conditions },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-ice-deep focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-charcoal focus:shadow-lg focus:outline-none"
      >
        {t.a11y.skipToContent}
      </a>
      <header
        ref={headerRef}
        className="safe-top sticky top-0 z-50 border-b border-charcoal-light bg-charcoal/90 backdrop-blur-md"
      >
        <nav
          aria-label="Main navigation"
          className="safe-x mx-auto flex max-w-6xl items-center justify-between py-1.5 sm:px-6 sm:py-2"
        >
          {/* Left: Brand Logo (min 44x44 tap target) */}
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-1 text-base font-bold tracking-tight text-snow transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice sm:gap-2 sm:text-lg"
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
            <ul className="hidden items-center gap-1 text-sm font-medium sm:flex">
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
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-flex min-h-11 items-center rounded-xl px-3.5 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice ${
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

            {/* Quick saved-resorts shortcut (Mobile & Desktop, >=44x44 tap target) */}
            <Link
              href="/resorts?favorites=true"
              className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-xl border border-charcoal-light px-3 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice sm:border-transparent ${
                favoritesCount > 0
                  ? "bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                  : "bg-charcoal-dark text-snow-muted hover:bg-charcoal-light hover:text-snow"
              }`}
              title={t.nav.savedTooltip}
              aria-label={`${t.nav.savedTooltip} (${favoritesCount})`}
            >
              <span aria-hidden>❤️</span>
              <span className="text-xs font-bold">{favoritesCount}</span>
            </Link>

            {/* Compact Responsive Language Switcher (>=44x44 tap target per option) */}
            <div
              role="group"
              aria-label={t.nav.langLabel}
              className="inline-flex items-center rounded-xl border border-charcoal-light bg-charcoal-dark p-0.5 shadow-inner"
            >
              {LANGUAGE_OPTIONS.map((opt) => {
                const active = lang === opt.code;
                return (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => setLang(opt.code)}
                    title={opt.fullLabel}
                    aria-pressed={active}
                    className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg px-2.5 py-1.5 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice ${
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
    </>
  );
}
