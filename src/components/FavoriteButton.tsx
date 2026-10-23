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
      className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-semibold backdrop-blur-sm transition active:scale-95 ${
        favorited
          ? "border-rose-500 bg-rose-500/20 text-rose-300 shadow-md shadow-rose-500/20"
          : "border-charcoal-light bg-charcoal/85 text-snow hover:border-rose-400/50 hover:text-rose-300"
      }`}
      title={name ?? "Resort"}
    >
      <span>{favorited ? "❤️" : "🤍"}</span>
      <span>{favorited ? t.detail.saved : t.detail.save}</span>
    </button>
  );
}
