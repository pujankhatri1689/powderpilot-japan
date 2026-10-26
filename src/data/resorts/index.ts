import type { Region, Resort } from "@/data/types";
import { HOKKAIDO_RESORTS } from "./hokkaido";
import { AOMORI_RESORTS } from "./aomori";
import { IWATE_RESORTS } from "./iwate";
import { YAMAGATA_RESORTS } from "./yamagata";
import { FUKUSHIMA_RESORTS } from "./fukushima";
import { NIIGATA_RESORTS } from "./niigata";
import { NAGANO_RESORTS } from "./nagano";
import { GUNMA_RESORTS } from "./gunma";
import { GIFU_RESORTS } from "./gifu";

export {
  HOKKAIDO_RESORTS,
  AOMORI_RESORTS,
  IWATE_RESORTS,
  YAMAGATA_RESORTS,
  FUKUSHIMA_RESORTS,
  NIIGATA_RESORTS,
  NAGANO_RESORTS,
  GUNMA_RESORTS,
  GIFU_RESORTS,
};

/** All active ski resorts in Japan */
export const RESORTS: Resort[] = [
  ...HOKKAIDO_RESORTS,
  ...AOMORI_RESORTS,
  ...IWATE_RESORTS,
  ...YAMAGATA_RESORTS,
  ...FUKUSHIMA_RESORTS,
  ...NIIGATA_RESORTS,
  ...NAGANO_RESORTS,
  ...GUNMA_RESORTS,
  ...GIFU_RESORTS,
];

/** Fast O(1) slug lookup map */
const RESORT_MAP = new Map<string, Resort>(
  RESORTS.map((resort) => [resort.slug, resort])
);

/** Display order for prefectures (North to South) */
export const REGION_ORDER: Region[] = [
  "Hokkaido",
  "Aomori",
  "Iwate",
  "Yamagata",
  "Fukushima",
  "Niigata",
  "Nagano",
  "Gunma",
  "Gifu",
  "Akita",
  "Miyagi",
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
