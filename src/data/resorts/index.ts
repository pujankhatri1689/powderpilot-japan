import type { Region, Resort } from "@/data/types";
import { NAGANO_RESORTS } from "./nagano";
import { NIIGATA_RESORTS } from "./niigata";
import { GUNMA_RESORTS } from "./gunma";
import { FUKUSHIMA_RESORTS } from "./fukushima";
import { YAMAGATA_RESORTS } from "./yamagata";
import { AOMORI_RESORTS } from "./aomori";

export {
  NAGANO_RESORTS,
  NIIGATA_RESORTS,
  GUNMA_RESORTS,
  FUKUSHIMA_RESORTS,
  YAMAGATA_RESORTS,
  AOMORI_RESORTS,
};

/** All active ski resorts in Japan */
export const RESORTS: Resort[] = [
  ...NAGANO_RESORTS,
  ...NIIGATA_RESORTS,
  ...GUNMA_RESORTS,
  ...FUKUSHIMA_RESORTS,
  ...YAMAGATA_RESORTS,
  ...AOMORI_RESORTS,
];

/** Fast O(1) slug lookup map */
const RESORT_MAP = new Map<string, Resort>(
  RESORTS.map((resort) => [resort.slug, resort])
);

/** Display order for prefectures */
export const REGION_ORDER: Region[] = [
  "Nagano",
  "Niigata",
  "Gunma",
  "Fukushima",
  "Yamagata",
  "Miyagi",
  "Akita",
  "Iwate",
  "Aomori",
  "Hokkaido",
];

/** Active regions that contain at least 1 resort */
export const REGIONS: Region[] = REGION_ORDER.filter((region) =>
  RESORTS.some((resort) => resort.region === region)
);

/** Retrieve a single resort by slug in O(1) time */
export function getResortBySlug(slug: string): Resort | undefined {
  return RESORT_MAP.get(slug);
}

/** Retrieve all resorts in a specific region */
export function getResortsByRegion(region: Region): Resort[] {
  return RESORTS.filter((r) => r.region === region);
}
