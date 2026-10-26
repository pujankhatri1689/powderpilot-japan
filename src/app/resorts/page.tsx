import type { Metadata } from "next";
import { Suspense } from "react";
import ResortDirectory from "@/components/ResortDirectory";

export const metadata: Metadata = {
  title: "Resorts | PowderPilot Japan",
  description:
    "Compare 39 top snowboard resorts across Hokkaido, Nagano, Niigata, Iwate, Tohoku, Gunma, and Gifu by vertical drop, tree runs, lift pass price, and transit time.",
};

export default function ResortsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-snow-muted">Loading resorts...</div>}>
      <ResortDirectory />
    </Suspense>
  );
}
