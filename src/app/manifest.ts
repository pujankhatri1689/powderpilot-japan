import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PowderPilot Japan — Japan Snowboard Encyclopedia & Powder Forecast",
    short_name: "PowderPilot",
    description:
      "Bilingual Japan snowboard guide to 49 ski resorts: HD trail maps, lift ticket & rental prices, and 7-day mountain weather forecasts.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    orientation: "any",
    categories: ["travel", "sports", "weather"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
