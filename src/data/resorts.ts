export type Region = "Nagano" | "Niigata" | "Gunma";

export interface Resort {
  slug: string;
  name: string;
  japaneseName: string;
  region: Region;
  area: string;
  description: string;
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
  };
  vibeTags: string[];
  bestFor: string;
  officialUrl: string;
}

export const RESORTS: Resort[] = [
  // ================= NAGANO =================
  {
    slug: "hakuba-happo-one",
    name: "Hakuba Happo-One",
    japaneseName: "白馬八方尾根",
    region: "Nagano",
    area: "Hakuba Valley",
    description:
      "The flagship resort of Hakuba Valley and host of the 1998 Winter Olympics. Famous for massive vertical drop, wide-open alpine bowls, and steep, high-elevation terrain.",
    coordinates: { lat: 36.7017, lon: 137.8322 },
    elevation: { base: 760, top: 1831, vertical: 1071 },
    terrain: {
      beginner: 30,
      intermediate: 50,
      advanced: 20,
      runs: 16,
      lifts: 22,
      treeRunsAllowed: false,
    },
    dayPassYen: 8000,
    fromTokyo: {
      durationMinutes: 165,
      summary: "Hokuriku Shinkansen to Nagano + Alpico Express Bus",
      station: "Hakuba Station / Happo Bus Terminal",
    },
    vibeTags: ["Big Vertical", "Alpine Bowls", "Lively Nightlife"],
    bestFor: "Freeriders chasing high-alpine steeps and lively town vibes",
    officialUrl: "https://www.happo-one.jp/en/",
  },
  {
    slug: "hakuba-cortina",
    name: "Hakuba Cortina",
    japaneseName: "白馬コルチナ",
    region: "Nagano",
    area: "Northern Hakuba Valley",
    description:
      "A legendary powder magnet at the northern tip of Hakuba Valley. Storms off the Sea of Japan hit Cortina first, dumping deep snow into steep, lift-accessed tree zones.",
    coordinates: { lat: 36.7747, lon: 137.8842 },
    elevation: { base: 872, top: 1402, vertical: 530 },
    terrain: {
      beginner: 40,
      intermediate: 30,
      advanced: 30,
      runs: 16,
      lifts: 6,
      treeRunsAllowed: true,
    },
    dayPassYen: 5800,
    fromTokyo: {
      durationMinutes: 195,
      summary: "Shinkansen to Nagano + Bus to Hakuba + Cortina Shuttle",
      station: "Minami-Otari Station",
    },
    vibeTags: ["Steep Trees", "Powder Magnet", "Iconic Hotel"],
    bestFor: "Storm-day tree riding in steep, natural bowls",
    officialUrl: "https://www.hgp.co.jp/cortina/ski/en/",
  },
  {
    slug: "nozawa-onsen",
    name: "Nozawa Onsen",
    japaneseName: "野沢温泉",
    region: "Nagano",
    area: "Kita-Shinshu",
    description:
      "One of Japan's best all-around resorts combining long snow-covered runs, official tree-riding zones, and a traditional Edo-period hot spring village with 13 free public Soto-yu bathhouses.",
    coordinates: { lat: 36.9203, lon: 138.4519 },
    elevation: { base: 565, top: 1650, vertical: 1085 },
    terrain: {
      beginner: 40,
      intermediate: 30,
      advanced: 30,
      runs: 36,
      lifts: 20,
      treeRunsAllowed: true,
    },
    dayPassYen: 7300,
    fromTokyo: {
      durationMinutes: 135,
      summary: "Hokuriku Shinkansen to Iiyama Station + 25m Nozawa Liner Bus",
      station: "Iiyama Station",
    },
    vibeTags: ["Historic Onsen Town", "Big Vertical", "Tree Zones"],
    bestFor: "Riders wanting deep powder by day and authentic onsen hopping by night",
    officialUrl: "https://en.nozawaski.com/",
  },
  {
    slug: "shiga-kogen",
    name: "Shiga Kogen",
    japaneseName: "志賀高原",
    region: "Nagano",
    area: "Yamanouchi",
    description:
      "Japan's largest interconnected ski area and highest-elevation resort system. Cold, dry snow stays chalky and light long after storms pass, right next to the famous Jigokudani Snow Monkeys.",
    coordinates: { lat: 36.7267, lon: 138.5131 },
    elevation: { base: 1340, top: 2307, vertical: 967 },
    terrain: {
      beginner: 45,
      intermediate: 35,
      advanced: 20,
      runs: 80,
      lifts: 48,
      treeRunsAllowed: false,
    },
    dayPassYen: 8000,
    fromTokyo: {
      durationMinutes: 160,
      summary: "Hokuriku Shinkansen to Nagano Station + Nagaden Express Bus",
      station: "Nagano Station",
    },
    vibeTags: ["Highest Elevation", "Massive Area", "Dry Snow"],
    bestFor: "Cruising endless interconnected peaks with cold, dry snow",
    officialUrl: "https://shigakogen-ski.or.jp/english/",
  },

  // ================= NIIGATA =================
  {
    slug: "myoko-suginohara",
    name: "Myoko Suginohara",
    japaneseName: "妙高杉ノ原",
    region: "Niigata",
    area: "Myoko Kogen",
    description:
      "Situated on the flank of Mt. Myoko, Suginohara gets some of the heaviest snowfall on earth (13m+ annually) and boasts an 8.5 km top-to-bottom run with a huge 1,124m vertical drop.",
    coordinates: { lat: 36.855, lon: 138.1494 },
    elevation: { base: 731, top: 1855, vertical: 1124 },
    terrain: {
      beginner: 50,
      intermediate: 30,
      advanced: 20,
      runs: 17,
      lifts: 5,
      treeRunsAllowed: true,
    },
    dayPassYen: 6500,
    fromTokyo: {
      durationMinutes: 150,
      summary: "Hokuriku Shinkansen to Joetsumyoko or Nagano + Local Train/Bus",
      station: "Myoko-Kogen Station",
    },
    vibeTags: ["8.5km Long Run", "Heavy Snowfall", "Big Vertical"],
    bestFor: "High-speed top-to-bottom cruisers and deep Myoko storm days",
    officialUrl: "https://www.princehotels.com/en/ski/myoko_kogen/",
  },
  {
    slug: "lotte-arai",
    name: "Lotte Arai Resort",
    japaneseName: "ロッテアライリゾート",
    region: "Niigata",
    area: "Myoko / Joetsu",
    description:
      "A freerider's paradise near the Sea of Japan coast. Most of the upper mountain consists of 14 designated avalanche-controlled off-piste freeride bowls and glades.",
    coordinates: { lat: 36.9942, lon: 138.1819 },
    elevation: { base: 329, top: 1280, vertical: 951 },
    terrain: {
      beginner: 25,
      intermediate: 40,
      advanced: 35,
      runs: 15,
      lifts: 5,
      treeRunsAllowed: true,
    },
    dayPassYen: 7500,
    fromTokyo: {
      durationMinutes: 125,
      summary: "Hokuriku Shinkansen to Joetsumyoko Station + Free Resort Shuttle",
      station: "Joetsumyoko Station",
    },
    vibeTags: ["Freeride Bowls", "Massive Snow", "Fast Shinkansen"],
    bestFor: "Advanced powder riders wanting lift-served backcountry-style bowls",
    officialUrl: "https://www.lottehotel.com/arai-resort/en",
  },
  {
    slug: "kagura",
    name: "Kagura Ski Resort",
    japaneseName: "かぐらスキー場",
    region: "Niigata",
    area: "Yuzawa",
    description:
      "Connected to Naeba via the Dragondola, Kagura sits high above Yuzawa so its snow stays cold and dry from late November through May. Beloved by Tokyo powder hounds for sidecountry and tree access.",
    coordinates: { lat: 36.8856, lon: 138.8531 },
    elevation: { base: 620, top: 1845, vertical: 1225 },
    terrain: {
      beginner: 35,
      intermediate: 40,
      advanced: 25,
      runs: 23,
      lifts: 20,
      treeRunsAllowed: true,
    },
    dayPassYen: 6800,
    fromTokyo: {
      durationMinutes: 95,
      summary: "Joetsu Shinkansen to Echigo-Yuzawa (75m) + 20m Local Bus",
      station: "Echigo-Yuzawa Station",
    },
    vibeTags: ["Long Season", "High Elevation", "Easy from Tokyo"],
    bestFor: "Quick weekend strike missions from Tokyo when Yuzawa gets nuked",
    officialUrl: "https://www.princehotels.com/en/ski/kagura/",
  },
  {
    slug: "gala-yuzawa",
    name: "GALA Yuzawa",
    japaneseName: "ガーラ湯沢",
    region: "Niigata",
    area: "Yuzawa",
    description:
      "The only ski resort in the world with its own Shinkansen bullet train station right inside the base lodge. Step off the train from Tokyo and clip into your board in minutes.",
    coordinates: { lat: 36.9508, lon: 138.7989 },
    elevation: { base: 358, top: 1181, vertical: 823 },
    terrain: {
      beginner: 35,
      intermediate: 45,
      advanced: 20,
      runs: 16,
      lifts: 11,
      treeRunsAllowed: false,
    },
    dayPassYen: 6500,
    fromTokyo: {
      durationMinutes: 75,
      summary: "Direct Joetsu Shinkansen to Gala-Yuzawa Station",
      station: "Gala-Yuzawa Station (in-building)",
    },
    vibeTags: ["75m from Tokyo", "Shinkansen Inside", "Day Trip King"],
    bestFor: "Zero-hassle day trips straight from Tokyo Station",
    officialUrl: "https://gala.co.jp/winter/english/",
  },

  // ================= GUNMA =================
  {
    slug: "tanigawadake-tenjindaira",
    name: "Tanigawadake Tenjindaira",
    japaneseName: "谷川岳ヨッホ (天神平)",
    region: "Gunma",
    area: "Minakami",
    description:
      "Known simply as 'Tenjin' to hardcore riders. A ropeway lifts you into dramatic sub-alpine bowls and ridges that trap ridiculous amounts of snow funneling over the Mikuni Mountain Range.",
    coordinates: { lat: 36.8264, lon: 138.9478 },
    elevation: { base: 746, top: 1502, vertical: 756 },
    terrain: {
      beginner: 30,
      intermediate: 30,
      advanced: 40,
      runs: 9,
      lifts: 5,
      treeRunsAllowed: true,
    },
    dayPassYen: 6000,
    fromTokyo: {
      durationMinutes: 100,
      summary: "Joetsu Shinkansen to Jomo-Kogen Station + 25m Bus",
      station: "Jomo-Kogen / Doai Station",
    },
    vibeTags: ["Hardcore Steep", "Deepest Snow", "Backcountry Gate"],
    bestFor: "Experienced riders hunting steep terrain and bottomless storm dumps",
    officialUrl: "https://tanigawadake-joch.com/en/",
  },
  {
    slug: "kawaba",
    name: "Kawaba Ski Resort",
    japaneseName: "川場スキー場",
    region: "Gunma",
    area: "Numata",
    description:
      "A high-elevation Gunma gem famous for its multi-story drive-in base complex, dry inland powder, top-tier terrain parks, and guided 'Off the Piste' tree-riding zones.",
    coordinates: { lat: 36.7622, lon: 139.1319 },
    elevation: { base: 1290, top: 1870, vertical: 580 },
    terrain: {
      beginner: 20,
      intermediate: 50,
      advanced: 30,
      runs: 10,
      lifts: 7,
      treeRunsAllowed: true,
    },
    dayPassYen: 5900,
    fromTokyo: {
      durationMinutes: 115,
      summary: "Joetsu Shinkansen to Jomo-Kogen Station + Free Reservation Shuttle",
      station: "Jomo-Kogen Station",
    },
    vibeTags: ["Freestyle Park", "High Base", "Off-Piste Zones"],
    bestFor: "Snowboarders who mix powder laps with freestyle park hits",
    officialUrl: "https://www.kawaba.co.jp/snow/",
  },
  {
    slug: "marunuma-kogen",
    name: "Marunuma Kogen",
    japaneseName: "丸沼高原",
    region: "Gunma",
    area: "Katashina",
    description:
      "Sitting at 2,000m on Mt. Nikko-Shirane, Marunuma offers a 4km gondola-served top-to-bottom run, super consistent cold snow, and famous banked slalom & surf-style snow parks.",
    coordinates: { lat: 36.8172, lon: 139.3275 },
    elevation: { base: 1400, top: 2000, vertical: 600 },
    terrain: {
      beginner: 30,
      intermediate: 45,
      advanced: 25,
      runs: 13,
      lifts: 9,
      treeRunsAllowed: true,
    },
    dayPassYen: 6000,
    fromTokyo: {
      durationMinutes: 145,
      summary: "Joetsu Shinkansen to Jomo-Kogen + Bus to Marunuma",
      station: "Jomo-Kogen Station",
    },
    vibeTags: ["2,000m Peak", "4km Gondola Run", "Snowsurf Flow"],
    bestFor: "Snowsurfers and carvers loving long, flowing top-to-bottom gondola laps",
    officialUrl: "https://www.marunuma.jp/winter/",
  },
];

export const REGIONS: Region[] = ["Nagano", "Niigata", "Gunma"];

export function getResortBySlug(slug: string): Resort | undefined {
  return RESORTS.find((r) => r.slug === slug);
}
