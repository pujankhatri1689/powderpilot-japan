"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useFavorites } from "@/context/FavoritesContext";
import { useLanguage } from "@/context/LanguageContext";

function BottomNavItems({ favoritesParam }: { favoritesParam: boolean }) {
  const pathname = usePathname();
  const { favoritesCount } = useFavorites();
  const { t } = useLanguage();

  const items = [
    {
      key: "home",
      href: "/",
      icon: "🏠",
      label: t.nav.bottomNav.home,
      isActive: pathname === "/",
    },
    {
      key: "resorts",
      href: "/resorts",
      icon: "🏔️",
      label: t.nav.bottomNav.resorts,
      isActive:
        (pathname === "/resorts" && !favoritesParam) ||
        pathname.startsWith("/resorts/"),
    },
    {
      key: "radar",
      href: "/conditions",
      icon: "❄️",
      label: t.nav.bottomNav.radar,
      isActive:
        pathname === "/conditions" || pathname.startsWith("/conditions/"),
    },
    {
      key: "saved",
      href: "/resorts?favorites=true",
      icon: favoritesCount > 0 ? "❤️" : "🤍",
      label: t.nav.bottomNav.saved,
      badge: favoritesCount > 0 ? favoritesCount : undefined,
      isActive: pathname === "/resorts" && favoritesParam,
    },
  ];

  return (
    <nav
      aria-label={t.nav.bottomNav.ariaLabel}
      className="safe-bottom-nav fixed inset-x-0 bottom-0 z-50 border-t border-charcoal-light bg-charcoal/95 backdrop-blur-md sm:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-4 px-1 py-1">
        {items.map((item) => (
          <li key={item.key} className="flex">
            <Link
              href={item.href}
              aria-current={item.isActive ? "page" : undefined}
              className={`relative flex min-h-12 w-full flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 text-[11px] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice ${
                item.isActive
                  ? "bg-ice-deep/15 font-bold text-ice"
                  : "text-snow-muted hover:text-snow"
              }`}
            >
              <span aria-hidden className="relative text-base leading-none">
                {item.icon}
                {item.badge !== undefined && (
                  <span className=" -right-3 -top-1 absolute rounded-full bg-rose-500 px-1 text-[9px] font-extrabold leading-tight text-snow">
                    {item.badge}
                  </span>
                )}
              </span>
              <span className="truncate max-w-full">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function BottomNavWithParams() {
  const searchParams = useSearchParams();
  const favoritesParam = searchParams.get("favorites") === "true";
  return <BottomNavItems favoritesParam={favoritesParam} />;
}

export default function MobileBottomNav() {
  return (
    <Suspense fallback={<BottomNavItems favoritesParam={false} />}>
      <BottomNavWithParams />
    </Suspense>
  );
}
