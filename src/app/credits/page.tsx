import type { Metadata } from "next";
import CreditsContent from "./CreditsContent";

export const metadata: Metadata = {
  title: "Image & Map Credits | PowderPilot Japan",
  description:
    "Photo attribution and licensing for PowderPilot Japan's resort photography, plus the source of the hosted resort trail maps.",
};

export default function CreditsPage() {
  return <CreditsContent />;
}
