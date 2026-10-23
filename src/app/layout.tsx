import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PowderPilot Japan | EN · 日本語 · 中文",
  description:
    "Japan Snowboard Encyclopedia & Live Snow Guide: HD trail maps, lift ticket & rental prices, weather forecasts, and onsen guides across Nagano, Niigata, and Gunma.",
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-charcoal font-sans text-snow">
        <LanguageProvider>
          <FavoritesProvider>
            <Navbar />
            <main className="flex flex-1 flex-col">{children}</main>
          </FavoritesProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
