import type { Metadata } from "next";
import ConditionsDashboard from "@/components/ConditionsDashboard";

export const metadata: Metadata = {
  title: "Live Snow Conditions & Powder Radar | PowderPilot Japan",
  description:
    "7-day summit snowfall leaderboard, freezing levels, and temperatures across Nagano, Niigata, and Gunma ski resorts.",
};

export default function ConditionsPage() {
  return <ConditionsDashboard />;
}
