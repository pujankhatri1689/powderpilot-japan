export type Region =
  | "Nagano"
  | "Niigata"
  | "Gunma"
  | "Fukushima"
  | "Yamagata"
  | "Aomori"
  | "Iwate"
  | "Akita"
  | "Miyagi"
  | "Hokkaido";

export interface MapSlide {
  title: string;
  caption: string;
  imageUrl: string;
  badge?: string;
}

export interface VillageSpot {
  name: string;
  japaneseName: string;
  category: "Onsen" | "Food & Apres" | "Village Landmark";
  description: string;
  info: string;
  googleMapsUrl: string;
}

export interface Resort {
  slug: string;
  name: string;
  japaneseName: string;
  region: Region;
  area: string;
  description: string;
  /** Bilingual copy-pasteable address + direct Google Maps navigation link */
  address: {
    postalCode: string;
    english: string;
    japanese: string;
    googleMapsUrl: string;
  };
  /** Verified local HD scenic mountain / slope photo path */
  heroImage: string;
  /** Primary local path to the official HD resort trail / course map image */
  trailMapImage: string;
  /** Multi-image swipe gallery: official trail maps (including sub-areas) & real mountain views */
  mapGallery: MapSlide[];
  /** Direct link to official trail / course map */
  trailMapUrl: string;
  /** Direct link to official live mountain webcams */
  webcamUrl: string;
  /** Operating hours & season schedule */
  operatingHours: {
    seasonWindow: string;
    dayHours: string;
    nightSkiing: string;
    earlyBird: string;
    notes: string;
  };
  /** Comprehensive ticket, pass & rental pricing in JPY (¥) */
  pricing: {
    oneDayAdultYen: number;
    halfDayYen: number;
    twoDayYen: number;
    nightPassYen: number | null;
    childOneDayYen: number;
    seniorOneDayYen: number;
    seasonPassYen: number;
    seasonPassName: string;
    fullBoardRentalDayYen: number;
    wearRentalDayYen: number;
    notes: string;
  };
  /** Snowboarder-specific mountain notes */
  snowboarderIntel: {
    liftFleet: string;
    terrainPark: string;
    flatSpotWarning: string;
    treeRunRules: string;
  };
  /** Historical monthly snowfall averages in cm & peak base depth */
  monthlySnowfallCm: {
    dec: number;
    jan: number;
    feb: number;
    mar: number;
    apr: number;
    peakBaseCm: number;
  };
  /** Optional curated Onsen, food & village spots */
  onsenAndVillage?: VillageSpot[];
  /** Signature runs & powder zones to ride at this mountain */
  signatureRuns: {
    name: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    note: string;
  }[];
  /** Latitude & longitude of the upper/mid mountain for accurate snow forecasts */
  coordinates: {
    lat: number;
    lon: number;
  };
  elevation: {
    base: number; // meters
    top: number; // meters
    vertical: number; // meters
  };
  terrain: {
    beginner: number; // %
    intermediate: number; // %
    advanced: number; // %
    runs: number;
    lifts: number;
    treeRunsAllowed: boolean;
  };
  dayPassYen: number;
  fromTokyo: {
    durationMinutes: number;
    summary: string;
    station: string;
    stationGoogleMapsUrl: string;
  };
  vibeTags: string[];
  bestFor: string;
  officialUrl: string;
}

/** Lightweight resort summary for fast directory listing, searching, and filtering */
export type ResortSummary = Pick<
  Resort,
  | "slug"
  | "name"
  | "japaneseName"
  | "region"
  | "area"
  | "heroImage"
  | "trailMapImage"
  | "elevation"
  | "terrain"
  | "dayPassYen"
  | "fromTokyo"
  | "vibeTags"
  | "bestFor"
>;
