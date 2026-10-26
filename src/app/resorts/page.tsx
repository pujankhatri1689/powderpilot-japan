import type { Metadata } from "next";
import { Suspense } from "react";
import ResortDirectory from "@/components/ResortDirectory";

export const metadata: Metadata = {
  title: "Resorts | PowderPilot Japan",
  description:
    "Compare 49 top snowboard resorts across Hokkaido, Nagano, Niigata, Iwate, Tohoku, Gunma, Gifu, Shizuoka, and Shiga by vertical drop, tree runs, lift pass price, and transit time.",
};

export default function ResortsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 animate-pulse">
          <div className="h-6 w-48 rounded bg-charcoal-light/60 mb-2"></div>
          <div className="h-10 w-72 rounded bg-charcoal-light/60 mb-3"></div>
          <div className="h-5 w-96 rounded bg-charcoal-light/40 mb-8"></div>
          <div className="h-28 w-full rounded-2xl bg-charcoal-light/30"></div>
        </div>
      }
    >
      <ResortDirectory />
    </Suspense>
  );
}
