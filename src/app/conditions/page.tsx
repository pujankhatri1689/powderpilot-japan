import type { Metadata } from "next";
import ConditionsDashboard from "@/components/ConditionsDashboard";

export const metadata: Metadata = {
  title: "Live Snow Conditions & Powder Radar | PowderPilot Japan",
  description:
    "7-day summit snowfall leaderboard, freezing levels, and temperatures across 39 ski resorts in Hokkaido, Tohoku, Nagano, Niigata, Gunma, and Gifu.",
};

export default function ConditionsPage() {
  return <ConditionsDashboard />;
}
