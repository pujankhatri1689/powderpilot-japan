import type { Metadata } from "next";
import { Suspense } from "react";
import ResortDirectory from "@/components/ResortDirectory";

export const metadata: Metadata = {
  title: "Resorts | PowderPilot Japan",
  description:
    "Compare snowboard resorts across Nagano, Niigata, and Gunma by vertical drop, tree runs, lift pass price, and train time from Tokyo.",
};

export default function ResortsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-snow-muted">Loading resorts...</div>}>
      <ResortDirectory />
    </Suspense>
  );
}
