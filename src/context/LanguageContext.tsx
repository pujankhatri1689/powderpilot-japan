"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Region, Resort } from "@/data/resorts";
import { getLocalizedResort } from "@/i18n/resortTranslations";
import {
  translateRegion,
  UI_TEXT,
  type Language,
} from "@/i18n/translations";

const STORAGE_KEY = "powderpilot_lang";

interface LanguageContextValue {
  lang: Language;
  setLang: (next: Language) => void;
  t: (typeof UI_TEXT)[Language];
  localizeResort: (resort: Resort) => Resort;
  localizeRegion: (region: Region | "All", withSuffix?: boolean) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "en" on first render so SSR and client hydration match 100%
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "ja") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLangState(saved);
        document.documentElement.lang = saved;
      } else if (saved === "zh") {
        window.localStorage.setItem(STORAGE_KEY, "en");
        setLangState("en");
        document.documentElement.lang = "en";
      }
    } catch {
      // Ignore storage errors in private browsing
    }
  }, []);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    } catch {
      // Ignore storage errors
    }
  }, []);

  const localizeResort = useCallback(
    (resort: Resort) => getLocalizedResort(resort, lang),
    [lang]
  );

  const localizeRegion = useCallback(
    (region: Region | "All", withSuffix = false) =>
      translateRegion(region, lang, withSuffix),
    [lang]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: UI_TEXT[lang],
      localizeResort,
      localizeRegion,
    }),
    [lang, setLang, localizeResort, localizeRegion]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
