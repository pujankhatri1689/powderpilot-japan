import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import Navbar from "@/components/Navbar";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

const defaultTitle =
  "PowderPilot Japan | EN · 日本語 — Japan Snowboard & Powder Forecast Guide";
const defaultDescription =
  "Bilingual (English / 日本語) snowboard guide to 49 resorts across 11 Japanese prefectures: HD trail maps, lift ticket & rental prices in ¥ JPY, snowboarder terrain intel, and Open-Meteo / JMA MSM mountain weather forecasts.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "PowderPilot Japan",
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    type: "website",
    images: [
      {
        url: "/trail-maps/niseko-united-photo.jpg",
        alt: "PowderPilot Japan — 49 Snowboard Resorts Across 11 Prefectures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/trail-maps/niseko-united-photo.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-charcoal font-sans text-snow">
        <LanguageProvider>
          <FavoritesProvider>
            <Navbar />
            <main
              id="main-content"
              tabIndex={-1}
              className="flex flex-1 flex-col focus:outline-none"
            >
              {children}
            </main>
            <Footer />
            <MobileBottomNav />
          </FavoritesProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
