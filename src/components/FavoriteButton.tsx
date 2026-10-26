"use client";

import { useFavorites } from "@/context/FavoritesContext";
import { useLanguage } from "@/context/LanguageContext";

export default function FavoriteButton({
  slug,
  name,
}: {
  slug: string;
  name?: string;
}) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { t } = useLanguage();
  const favorited = isFavorite(slug);

  return (
    <button
      type="button"
      onClick={(e) => toggleFavorite(slug, e)}
      aria-pressed={favorited}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold backdrop-blur-sm transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice ${
        favorited
          ? "border-rose-500 bg-rose-500/20 text-rose-300 shadow-md shadow-rose-500/20"
          : "border-charcoal-light bg-charcoal/85 text-snow hover:border-rose-400/50 hover:text-rose-300"
      }`}
      title={name ?? "Resort"}
    >
      <span aria-hidden>{favorited ? "❤️" : "🤍"}</span>
      <span>{favorited ? t.detail.saved : t.detail.save}</span>
    </button>
  );
}
