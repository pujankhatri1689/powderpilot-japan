"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const subscribe = () => () => {};
const getSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => 2026;

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const quickLinks = [
    { href: "/", label: t.footer.homeLink },
    { href: "/resorts", label: t.footer.resortsLink },
    { href: "/conditions", label: t.footer.radarLink },
    { href: "/planner", label: t.footer.plannerLink },
  ];

  return (
    <footer className="border-t border-charcoal-light bg-charcoal-dark/80 pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] pt-10 text-xs text-snow-muted sm:pb-10">
      <div className="safe-x mx-auto max-w-6xl space-y-6 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Brand & Privacy */}
          <div className="space-y-2.5">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-1.5 text-base font-bold tracking-tight text-snow transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
            >
              <span aria-hidden className="text-ice">
                ❄
              </span>
              <span>
                Powder<span className="text-ice">Pilot</span>
              </span>
            </Link>
            <p className="leading-relaxed text-snow-muted">
              {t.footer.tagline}
            </p>
            <p className="text-[11px] leading-relaxed text-snow-muted/90">
              {t.footer.privacyNote}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-snow">
              {t.footer.quickLinksTitle}
            </h2>
            <ul className="mt-2 grid grid-cols-2 gap-1 sm:grid-cols-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-lg px-2 py-1.5 font-medium text-snow-muted transition hover:bg-charcoal-light/50 hover:text-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Accuracy Disclaimer */}
          <div className="rounded-2xl border border-charcoal-light bg-charcoal/70 p-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-ice">
              {t.footer.disclaimerTitle}
            </h2>
            <p className="mt-1.5 leading-relaxed text-snow-muted">
              {t.footer.disclaimerBody}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-1 border-t border-charcoal-light/60 pt-4 text-center text-[11px] text-snow-muted sm:flex-row sm:text-left">
          <span>{t.footer.copyright(currentYear)}</span>
          <Link
            href="/credits"
            className="rounded-lg px-2 py-1 font-medium transition hover:text-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
          >
            {t.footer.imageCredits}
          </Link>
        </div>
      </div>
    </footer>
  );
}
