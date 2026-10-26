"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useLanguage } from "@/context/LanguageContext";

function getOnlineSnapshot(): boolean {
  return typeof navigator !== "undefined" ? navigator.onLine : true;
}

function getOnlineServerSnapshot(): boolean {
  return true;
}

function subscribeToNetwork(callback: () => void): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export default function ServiceWorkerRegister() {
  const { t } = useLanguage();
  const isOnline = useSyncExternalStore(
    subscribeToNetwork,
    getOnlineSnapshot,
    getOnlineServerSnapshot
  );
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Register service worker for offline mountain chairlift support
    if ("serviceWorker" in navigator && typeof window !== "undefined") {
      const registerSW = () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            registration.onupdatefound = () => {
              const installingWorker = registration.installing;
              if (installingWorker) {
                installingWorker.onstatechange = () => {
                  if (
                    installingWorker.state === "installed" &&
                    navigator.serviceWorker.controller
                  ) {
                    console.log("[PowderPilot PWA] New version ready.");
                  }
                };
              }
            };
          })
          .catch((err) => {
            console.warn("[PowderPilot PWA] Service worker registration error:", err);
          });
      };

      if (document.readyState === "complete") {
        registerSW();
      } else {
        window.addEventListener("load", registerSW);
        return () => window.removeEventListener("load", registerSW);
      }
    }
  }, []);

  const isOffline = !isOnline;

  if (!isOffline || dismissed) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="sticky top-0 z-[60] flex items-center justify-between gap-3 border-b border-amber-500/40 bg-amber-500/95 px-4 py-2 text-xs font-semibold text-charcoal shadow-md backdrop-blur-md sm:px-6"
    >
      <div className="flex items-center gap-2">
        <span className="text-base leading-none" aria-hidden>
          📡
        </span>
        <span>{t.offline.bannerText}</span>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="shrink-0 rounded-lg bg-charcoal/20 px-2 py-1 text-[11px] font-bold text-charcoal transition hover:bg-charcoal/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
      >
        {t.offline.dismiss} ✕
      </button>
    </div>
  );
}

