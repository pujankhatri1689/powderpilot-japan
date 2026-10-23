import type { Metadata } from "next";
import TripPlanner from "@/components/TripPlanner";

export const metadata: Metadata = {
  title: "Snowboard Trip & Budget Planner | PowderPilot Japan",
  description:
    "Plan your day-by-day Japan snowboard trip itinerary, calculate Shinkansen and lift pass budgets in Yen, and track your powder gear.",
};

export default function PlannerPage() {
  return <TripPlanner />;
}
