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
  /** Curated Onsen, food & village spots with direct Google Maps links */
  onsenAndVillage: VillageSpot[];
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

export const RESORTS: Resort[] = [
  // ================= NAGANO =================
  {
    slug: "nozawa-onsen",
    name: "Nozawa Onsen",
    japaneseName: "野沢温泉スキー場",
    region: "Nagano",
    area: "Kita-Shinshu",
    description:
      "One of Japan's best all-around snowboard resorts, combining 1,085m of vertical drop, official Yamabiko tree-riding glades, a brand-new 10-person Nagasaka Gondola, and a historic Edo-period hot spring village with 13 free public Soto-yu bathhouses.",
    address: {
      postalCode: "〒389-2502",
      english: "7653 Toyosato, Nozawaonsen-mura, Shimotakai-gun, Nagano 389-2502, Japan",
      japanese: "長野県下高井郡野沢温泉村豊郷7653",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Nozawa+Onsen+Snow+Resort+Nagano+Japan",
    },
    heroImage: "/trail-maps/nozawa-onsen-photo.jpg",
    trailMapImage: "/trail-maps/nozawa-onsen.jpg",
    mapGallery: [
      {
        title: "Nozawa Onsen 2026 Full HD Ski Area Map (3000×2122)",
        caption:
          "Crystal-clear 3000px official trail map showing all 46 numbered courses, Yamabiko tree zones, and village shuttle stops.",
        imageUrl: "/trail-maps/nozawa-onsen.jpg",
        badge: "3000px Ultra-HD Map",
      },
      {
        title: "Nagasaka Express Gondola & Historic Village View",
        caption:
          "The modern 10-passenger Nagasaka Gondola whisks riders from the village base straight to the upper Yamabiko powder zone in 8 minutes.",
        imageUrl: "/trail-maps/nozawa-onsen-photo.jpg",
        badge: "Gondola & Village Photo",
      },
      {
        title: "Yamabiko Powder Tree Zone Action",
        caption:
          "Feather-light Kita-Shinshu powder in the upper Yamabiko birch glades (1,650m).",
        imageUrl: "/trail-maps/nozawa-onsen-powder.jpg",
        badge: "Powder Action",
      },
    ],
    trailMapUrl: "https://en.nozawaski.com/the-mountain/trail-map/",
    webcamUrl: "https://en.nozawaski.com/the-mountain/webcams/",
    operatingHours: {
      seasonWindow: "Late November – Early May (Golden Week)",
      dayHours: "08:30 – 16:30 (Nagasaka & Hikage Gondolas)",
      nightSkiing: "16:30 – 20:00 (Nagasaka Slope — Saturdays & peak holidays)",
      earlyBird: "08:10 early gondola load on peak mid-winter weekends",
      notes: "Free covered 'Yu-Road' moving walkway connects the hot spring village directly to the Hikage base lodge.",
    },
    pricing: {
      oneDayAdultYen: 7300,
      halfDayYen: 6000,
      twoDayYen: 13600,
      nightPassYen: 2500,
      childOneDayYen: 4400,
      seniorOneDayYen: 5900,
      seasonPassYen: 94000,
      seasonPassName: "Nozawa Onsen Full Season Pass",
      fullBoardRentalDayYen: 6000,
      wearRentalDayYen: 4500,
      notes: "Salomon Station at Nagasaka Gondola base offers high-performance wide powder snowboard demos.",
    },
    snowboarderIntel: {
      liftFleet: "2 High-Speed Gondolas (Nagasaka 10-pax & Hikage 8-pax), 4 Hooded Quads, 14 Pair Lifts",
      terrainPark: "Uenotaira Snow Park (kickers, boxes, rails & 110m halfpipe)",
      flatSpotWarning: "Low — Karasawa connectivity cat-track has a brief flat section; keep speed coming out of Uenotaira.",
      treeRunRules: "Allowed in designated upper Yamabiko Self-Responsibility Tree Zones (A–E); stay out of strictly roped avalanche closures.",
    },
    monthlySnowfallCm: {
      dec: 210,
      jan: 340,
      feb: 290,
      mar: 160,
      apr: 45,
      peakBaseCm: 360,
    },
    onsenAndVillage: [
      {
        name: "Oyu (The Grand Bathhouse)",
        japaneseName: "大湯 (外湯)",
        category: "Onsen",
        description:
          "The iconic wooden Edo-style bathhouse in the center of Nozawa village. 100% natural volcanic spring water — free entry (donation box).",
        info: "05:00 – 23:00 · Free (Donation)",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Oyu+Hot+Spring+Nozawa+Onsen",
      },
      {
        name: "Sparena Nozawa (Outdoor Rotenburo Complex)",
        japaneseName: "野沢温泉スパリーナ",
        category: "Onsen",
        description:
          "Large indoor/outdoor hot spring pool complex right at the base of Nagasaka slope with mountain views.",
        info: "10:00 – 20:30 · ¥900 Adult",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Nozawa+Onsen+Sparena",
      },
      {
        name: "Ogama Steaming Geothermal Vent & Osenbei Street",
        japaneseName: "麻釜 (おがま)",
        category: "Village Landmark",
        description:
          "90°C boiling volcanic spring where locals boil Nozawana greens and onsen eggs, surrounded by craft beer bars and gyoza spots.",
        info: "Open 24h · Village Center",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Ogama+Nozawa+Onsen",
      },
    ],
    signatureRuns: [
      {
        name: "Yamabiko A–E Tree Zone",
        level: "Advanced",
        note: "Top-of-the-gondola birch forest glades at 1,650m with feather-light snow.",
      },
      {
        name: "Skyline Course (4.5km)",
        level: "Intermediate",
        note: "Fast panoramic ridge run dropping nearly 1,000 vertical meters to town.",
      },
      {
        name: "Uenotaira Slope (2km)",
        level: "Beginner",
        note: "High-altitude mellow cruiser surrounded by snow-covered beech trees.",
      },
    ],
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
      summary: "Hokuriku Shinkansen to Iiyama Station (105m) + 25m Nozawa Onsen Liner Bus",
      station: "Iiyama Station (飯山駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Iiyama+Station+Nagano+Japan",
    },
    vibeTags: ["Historic Onsen Town", "Big Vertical", "Tree Zones"],
    bestFor: "Riders wanting deep powder by day and authentic onsen hopping by night",
    officialUrl: "https://en.nozawaski.com/",
  },
  {
    slug: "hakuba-happo-one",
    name: "Hakuba Happo-One",
    japaneseName: "白馬八方尾根スキー場",
    region: "Nagano",
    area: "Hakuba Valley",
    description:
      "The flagship resort of Hakuba Valley and host of the 1998 Winter Olympics. Famous for a massive 1,071m vertical drop, wide-open high-alpine faces above the treeline, and the liveliest dining and nightlife scene in the Japanese Alps.",
    address: {
      postalCode: "〒399-9301",
      english: "4258 Hokujo, Hakuba-mura, Kitaazumi-gun, Nagano 399-9301, Japan",
      japanese: "長野県北安曇郡白馬村北城4258",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hakuba+Happo-One+Snow+Resort+Nagano+Japan",
    },
    heroImage: "/trail-maps/hakuba-happo-one-panorama.jpg",
    trailMapImage: "/trail-maps/hakuba-happo-one.jpg",
    mapGallery: [
      {
        title: "Official Happo-One Full Trail & Course Map (1440×1098 HD)",
        caption:
          "Complete trail map covering Kurobishi, Usagidaira, Riesen Slalom, Skyline, Olympic Courses, and Sakka base.",
        imageUrl: "/trail-maps/hakuba-happo-one.jpg",
        badge: "Official HD Map",
      },
      {
        title: "Happo-One High-Alpine Face Panorama",
        caption:
          "Actual mountain photograph showing the 1,071m vertical drop from Happo-ike Sanso (1,831m) to Hakuba town.",
        imageUrl: "/trail-maps/hakuba-happo-one-panorama.jpg",
        badge: "Mountain Panorama",
      },
      {
        title: "Riesen Slalom Course View",
        caption:
          "Looking down the iconic 3km Riesen Slalom cruiser toward the Hakuba Valley floor.",
        imageUrl: "/trail-maps/hakuba-happo-one-riesen.jpg",
        badge: "Slope Photo",
      },
    ],
    trailMapUrl: "https://www.happo-one.jp/en/gelande/",
    webcamUrl: "https://www.happo-one.jp/en/gelande/livecamera/",
    operatingHours: {
      seasonWindow: "Early December – Early May",
      dayHours: "08:00 – 16:30 (Gondola Adam opens 08:00)",
      nightSkiing: "Not regularly operated (special events at Nakiyama only)",
      earlyBird: "07:30 'First Track' Gondola access on select peak-season dates",
      notes: "Upper alpine lifts (Grat Quad / Kurobishi) close earlier (~15:40) depending on wind.",
    },
    pricing: {
      oneDayAdultYen: 8000,
      halfDayYen: 6800,
      twoDayYen: 15600,
      nightPassYen: null,
      childOneDayYen: 4000,
      seniorOneDayYen: 7500,
      seasonPassYen: 113000,
      seasonPassName: "Happo-One Season Pass (Epic Pass Partner)",
      fullBoardRentalDayYen: 6500,
      wearRentalDayYen: 5000,
      notes: "Online Webket reload saves ¥300–¥500 off window rates. Epic Pass holders get 5 consecutive days across all 10 Hakuba Valley resorts.",
    },
    snowboarderIntel: {
      liftFleet: "1 Gondola (Adam), 5 High-Speed Quads, 4 Triple Lifts, 12 Pair Lifts",
      terrainPark: "HAPPO PARKS -NATURES- at Kitaone/Sakka (surf-inspired banks, hips, jumps & jibs)",
      flatSpotWarning: "Very Low — steep continuous fall-line all the way down Skyline, Riesen, and Olympic courses.",
      treeRunRules: "Strict on-piste policy inside resort ropes; sidecountry/backcountry access only through top Grat Quad gate with beacon/shovel/probe.",
    },
    monthlySnowfallCm: {
      dec: 195,
      jan: 310,
      feb: 265,
      mar: 170,
      apr: 50,
      peakBaseCm: 340,
    },
    onsenAndVillage: [
      {
        name: "Happo-no-Yu Onsen (High-pH Hydrogen Hot Spring)",
        japaneseName: "八方の湯",
        category: "Onsen",
        description:
          "Closest hot spring to the Gondola station with outdoor rotenburo looking straight up at the Northern Alps.",
        info: "10:00 – 21:00 · ¥850 Adult",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Happo-no-yu+Onsen+Hakuba",
      },
      {
        name: "Obinata-no-Yu Outdoor Rock Bath",
        japaneseName: "おびなたの湯",
        category: "Onsen",
        description:
          "Tucked into the forest along the river road; famous for huge snow-covered boulders around the outdoor bath.",
        info: "10:00 – 18:00 · ¥750 Adult",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Obinata+no+Yu+Hakuba",
      },
      {
        name: "Echoland Dining & Izakaya Strip",
        japaneseName: "エコーランド通り",
        category: "Food & Apres",
        description:
          "Hakuba's main restaurant, ramen, craft beer, and cocktail bar street — connected by evening shuttle buses.",
        info: "17:00 – Late · Main Apres Strip",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Echoland+Hakuba+Nagano",
      },
    ],
    signatureRuns: [
      {
        name: "Kurobishi & Urakuro Bowls",
        level: "Advanced",
        note: "High-alpine ungroomed faces above the treeline with deep wind-loaded powder.",
      },
      {
        name: "Riesen Slalom Course (3km)",
        level: "Intermediate",
        note: "Legendary wide, fast top-to-bottom leg-burner with Northern Alps views.",
      },
      {
        name: "Sakka Slope",
        level: "Beginner",
        note: "Gentle, extra-wide base area ideal for warming up and progression.",
      },
    ],
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
      summary: "Hokuriku Shinkansen to Nagano Station (90m) + 75m Alpico Express Bus to Happo Bus Terminal",
      station: "Happo Bus Terminal / Hakuba Station (白馬駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hakuba+Happo+Bus+Terminal+Nagano",
    },
    vibeTags: ["Big Vertical", "Alpine Bowls", "Lively Nightlife"],
    bestFor: "Freeriders chasing high-alpine steeps and lively town vibes",
    officialUrl: "https://www.happo-one.jp/en/",
  },
  {
    slug: "hakuba-cortina",
    name: "Hakuba Cortina",
    japaneseName: "白馬コルチナスキー場",
    region: "Nagano",
    area: "Northern Hakuba Valley",
    description:
      "A legendary powder magnet at the northern tip of Hakuba Valley. Storms off the Sea of Japan hit Cortina first, dumping deep snow into steep, natural bowl-shaped tree zones that funnel directly back to the lifts.",
    address: {
      postalCode: "〒399-9422",
      english: "12860-1 Chikuniotsu, Otari-mura, Kitaazumi-gun, Nagano 399-9422, Japan",
      japanese: "長野県北安曇郡小谷村千国乙12860-1",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hakuba+Cortina+Ski+Resort+Nagano+Japan",
    },
    heroImage: "/trail-maps/cortina-photo.jpg",
    trailMapImage: "/trail-maps/hakuba-cortina.jpg",
    mapGallery: [
      {
        title: "Map 1: Hakuba Cortina & Hakuba Norikura English HD Map (2480×1748)",
        caption:
          "High-definition English map showing Cortina's steep Hiedayama bowls & tree zones (right) and connected Hakuba Norikura (left).",
        imageUrl: "/trail-maps/hakuba-cortina.jpg",
        badge: "2480px English Dual Map",
      },
      {
        title: "Map 2: 2025–2026 Official Cortina & Hakunori Japanese Course Map",
        caption:
          "Detailed Japanese course & backcountry gate map showing all tree zones and connection lifts.",
        imageUrl: "/trail-maps/hakuba-norikura-map.jpg",
        badge: "2026 Japanese Map",
      },
      {
        title: "Northern Hakuba Valley & Cortina Tree Slopes Panorama",
        caption:
          "Actual winter view across the snow-blanketed glades and bowls of Northern Hakuba Valley.",
        imageUrl: "/trail-maps/cortina-photo.jpg",
        badge: "Valley Panorama",
      },
    ],
    trailMapUrl: "https://www.hgp.co.jp/cortina/ski/en/course/",
    webcamUrl: "https://www.hgp.co.jp/cortina/ski/en/",
    operatingHours: {
      seasonWindow: "Mid-December – Late March",
      dayHours: "08:30 – 16:30",
      nightSkiing: "17:00 – 20:00 (Ikenota Slope — check weekend/peak schedule)",
      earlyBird: "Line up at No. 2 Quad by 08:00 on storm mornings for first tracks!",
      notes: "Joint lift pass automatically includes neighboring Hakuba Norikura Onsen Ski Resort (32 courses combined).",
    },
    pricing: {
      oneDayAdultYen: 5800,
      halfDayYen: 4800,
      twoDayYen: 10800,
      nightPassYen: 2000,
      childOneDayYen: 3500,
      seniorOneDayYen: 5200,
      seasonPassYen: 75000,
      seasonPassName: "Cortina & Norikura Common Season Pass",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 4500,
      notes: "1-Day pass covers both Hakuba Cortina and Hakuba Norikura.",
    },
    snowboarderIntel: {
      liftFleet: "2 High-Speed Quads (Cortina No.2 & Hakunori Alps No.3), 10 Pair Lifts across both resorts",
      terrainPark: "Alps Snow Park & Mogul Course on the Hakuba Norikura side",
      flatSpotWarning: "Moderate at bottom — keep your speed on the Warabidaira/Itadaira return cat-tracks after exiting the trees.",
      treeRunRules: "Open in-bounds 'Self-Responsibility' Tree Riding across almost all forested ridges between groomed runs! Helmet strongly recommended.",
    },
    monthlySnowfallCm: {
      dec: 260,
      jan: 420,
      feb: 350,
      mar: 210,
      apr: 40,
      peakBaseCm: 420,
    },
    onsenAndVillage: [
      {
        name: "Cortina Bijin-no-Yu Onsen (Inside Hotel Green Plaza)",
        japaneseName: "白馬コルチナ 美人の湯",
        category: "Onsen",
        description:
          "Grand volcanic baking-soda hot spring complex on the 3rd floor of the iconic green-roofed hotel overlooking Ikenota slope.",
        info: "13:00 – 21:00 · ¥1,200 Day-Use",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hotel+Green+Plaza+Hakuba+Cortina",
      },
      {
        name: "Wakaguri Onsen (Hakuba Alps Hotel)",
        japaneseName: "若栗温泉 (白馬アルプスホテル)",
        category: "Onsen",
        description:
          "Natural brown mineral hot spring right at the base of the connected Hakuba Norikura slopes.",
        info: "11:00 – 20:00 · ¥1,000 Adult",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hakuba+Alps+Hotel+Norikura",
      },
    ],
    signatureRuns: [
      {
        name: "Hiedayama Course 2 & Giant Tree Zones",
        level: "Advanced",
        note: "Steep 35°–42° pitches funneling right back to the main bowl and lifts.",
      },
      {
        name: "Itadaira Course",
        level: "Intermediate",
        note: "Ridge-top run off Lift 4 that holds cold chalky snow all day.",
      },
      {
        name: "Ikenota Gelande",
        level: "Beginner",
        note: "Wide funnel right in front of the iconic green-roofed Hotel Green Plaza.",
      },
    ],
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
      summary: "Hokuriku Shinkansen to Nagano + Express Bus to Hakuba + Free Cortina Hotel Shuttle",
      station: "Minami-Otari Station (南小谷駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Minami-Otari+Station+Nagano+Japan",
    },
    vibeTags: ["Steep Trees", "Powder Magnet", "Iconic Hotel"],
    bestFor: "Storm-day tree riding in steep, natural bowls",
    officialUrl: "https://www.hgp.co.jp/cortina/ski/en/",
  },
  {
    slug: "shiga-kogen",
    name: "Shiga Kogen",
    japaneseName: "志賀高原マウンテンリゾート",
    region: "Nagano",
    area: "Yamanouchi",
    description:
      "Japan's largest interconnected ski area (18 resorts on 1 lift pass) and highest-elevation resort network (up to 2,307m). Because of the extreme altitude, snow stays feather-dry and chalky long after storms end.",
    address: {
      postalCode: "〒381-0401",
      english: "7148 Hirao, Yamanouchi-machi, Shimotakai-gun, Nagano 381-0401, Japan",
      japanese: "長野県下高井郡山ノ内町平穏7148",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Shiga+Kogen+Yama+no+Eki+Nagano+Japan",
    },
    heroImage: "/trail-maps/shiga-kogen-photo.jpg",
    trailMapImage: "/trail-maps/shiga-kogen.jpg",
    mapGallery: [
      {
        title: "Map 1: All 18 Resorts Full Shiga Kogen Elevation Map (1,400m–2,307m)",
        caption:
          "Bird's-eye panoramic map showing all 18 ski areas from Okushiga & Yakebitaiyama (left) across Central Area to Yokoteyama 2,307m (right).",
        imageUrl: "/trail-maps/shiga-kogen-all.jpg",
        badge: "Full 18-Resort Overview Map",
      },
      {
        title: "Map 2: Shiga Kogen Central Area Detailed Course & Lift Map",
        caption:
          "Detailed course map covering Ichinose, Takamagahara, Higashitateyama, Terakoya (2,125m), Giant, Sun Valley, and Maruike.",
        imageUrl: "/trail-maps/shiga-kogen.jpg",
        badge: "Central Area HD Map",
      },
      {
        title: "Map 3: Shiga Kogen Yakebitaiyama & Powder Courses Map",
        caption:
          "Detailed sector map of Yakebitaiyama's two gondolas, the 1998 Olympic Course, and the 'Yakebi Coast' & 'Yakebi Valley' powder tree zones.",
        imageUrl: "/trail-maps/shiga-kogen-yakebitai.jpg",
        badge: "Yakebitaiyama Sector Map",
      },
      {
        title: "Shiga Kogen High-Alpine Powder & Northern Alps View",
        caption:
          "High-elevation dry chalky powder at 2,000m+ in Joshin'etsukogen National Park.",
        imageUrl: "/trail-maps/shiga-kogen-photo.jpg",
        badge: "Alpine Powder Photo",
      },
    ],
    trailMapUrl: "https://shigakogen-ski.or.jp/english/",
    webcamUrl: "https://shigakogen-ski.or.jp/livecam/",
    operatingHours: {
      seasonWindow: "Late November – Late May (Yokoteyama open into May)",
      dayHours: "08:30 – 16:30",
      nightSkiing: "18:00 – 21:00 (Ichinose Family, Diamond, Takamagahara & Yakebitai)",
      earlyBird: "06:30 'First Track' Yakebitaiyama Gondola on select dates",
      notes: "All 18 ski areas are connected by slopes and free ski-in shuttle buses included with your lift pass.",
    },
    pricing: {
      oneDayAdultYen: 8000,
      halfDayYen: 6700,
      twoDayYen: 15300,
      nightPassYen: 2700,
      childOneDayYen: 4000,
      seniorOneDayYen: 7000,
      seasonPassYen: 98000,
      seasonPassName: "Shiga Kogen All-18-Areas Season Pass",
      fullBoardRentalDayYen: 5800,
      wearRentalDayYen: 4500,
      notes: "All-Area Pass covers all 48 lifts across Central, Yakebitaiyama, Okushiga, Kumanoyu, and Yokoteyama.",
    },
    snowboarderIntel: {
      liftFleet: "5 Gondolas (Yakebitai No.1 & No.2, Higashitateyama, Bunadaira, Resort Gondola), 12 High-Speed Quads, 31 Chairlifts",
      terrainPark: "Yakebi Snow Park & Okushiga Fun Park",
      flatSpotWarning: "Moderate between sectors — traversing between Giant, Hasuike, and Sun Valley has flat connecting bridges; riding between Yakebitai, Okushiga, and Ichinose is super smooth.",
      treeRunRules: "Designated ungroomed powder zones open at Yakebitaiyama ('Yakebi Valley' & 'Yakebi Coast'); general forest off-piste in the National Park is restricted.",
    },
    monthlySnowfallCm: {
      dec: 190,
      jan: 280,
      feb: 250,
      mar: 180,
      apr: 75,
      peakBaseCm: 310,
    },
    onsenAndVillage: [
      {
        name: "Jigokudani Wild Snow Monkey Park",
        japaneseName: "地獄谷野猿公苑",
        category: "Village Landmark",
        description:
          "World-famous valley at the base of Shiga Kogen where wild Japanese macaques soak in steaming volcanic hot springs.",
        info: "09:00 – 16:00 · ¥800 Entry",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Jigokudani+Monkey+Park+Nagano",
      },
      {
        name: "Shibu Onsen Historic 9-Bath Town (Kanakuya)",
        japaneseName: "渋温泉 (金具屋)",
        category: "Onsen",
        description:
          "Cobblestone hot spring town 20 mins down the mountain with 9 historic public baths and the wooden ryokan that inspired Spirited Away.",
        info: "Day & Overnight · Footbaths Free",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Shibu+Onsen+Yamanouchi+Nagano",
      },
      {
        name: "Kumanoyu Onsen (Milky Green Sulfur Hot Spring)",
        japaneseName: "熊の湯温泉",
        category: "Onsen",
        description:
          "Famous emerald-green sulfur hot spring right at the base of Kumanoyu Ski Area at 1,700m elevation.",
        info: "12:30 – 15:30 Day-Use · ¥1,200",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Kumanoyu+Hotel+Shiga+Kogen",
      },
    ],
    signatureRuns: [
      {
        name: "Olympic Course & Yakebi Valley (Yakebitaiyama)",
        level: "Advanced",
        note: "Steep sustained pitch and newly opened ungroomed powder glades.",
      },
      {
        name: "Okushiga Kogen Downhill",
        level: "Intermediate",
        note: "Quiet, cold-snow cruisers at the far northern end of the resort network.",
      },
      {
        name: "Yokoteyama Panorama (2,307m)",
        level: "Beginner",
        note: "Highest lift-served summit in Japan with famous mountaintop bakery views.",
      },
    ],
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
      summary: "Hokuriku Shinkansen to Nagano Station (90m) + 70m Nagaden Express Bus direct to Shiga Kogen",
      station: "Nagano Station (長野駅) / Yudanaka Station",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Nagano+Station+East+Exit+Bus+Terminal",
    },
    vibeTags: ["Highest Elevation", "Massive Area", "Dry Snow"],
    bestFor: "Cruising endless interconnected peaks with cold, dry snow",
    officialUrl: "https://shigakogen-ski.or.jp/english/",
  },

  // ================= NIIGATA =================
  {
    slug: "myoko-suginohara",
    name: "Myoko Suginohara",
    japaneseName: "妙高杉ノ原スキー場",
    region: "Niigata",
    area: "Myoko Kogen",
    description:
      "Situated on the flank of Mt. Myoko, Suginohara gets some of the heaviest snowfall on earth (13m+ annually) and boasts an 8.5 km top-to-bottom run with a massive 1,124m vertical drop overlooking frozen Lake Nojiri.",
    address: {
      postalCode: "〒949-2113",
      english: "Suginosawa, Myoko-shi, Niigata 949-2113, Japan",
      japanese: "新潟県妙高市杉野沢",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Myoko+Suginohara+Ski+Resort+Niigata+Japan",
    },
    heroImage: "/trail-maps/myoko-slope.jpg",
    trailMapImage: "/trail-maps/myoko-suginohara.jpg",
    mapGallery: [
      {
        title: "Myoko Suginohara Official HD Trail Map (1120×1575)",
        caption:
          "Shows the 3,074m Suginohara Gondola, Mitahara High-Speed Lifts, SUGI PARK, and the 8.5km top-to-bottom run from 1,855m.",
        imageUrl: "/trail-maps/myoko-suginohara.jpg",
        badge: "Official HD Map",
      },
      {
        title: "Looking Down the 8.5km Run Toward Lake Nojiri",
        caption:
          "Actual view from Suginohara's wide groomers looking out over Lake Nojiri and Northern Nagano.",
        imageUrl: "/trail-maps/myoko-slope.jpg",
        badge: "Lake Nojiri View",
      },
      {
        title: "Upper Mountain Cruiser Panorama",
        caption:
          "1,124m of continuous vertical drop from the top of the Mitahara No. 3 High-Speed Lift.",
        imageUrl: "/trail-maps/myoko-photo.jpg",
        badge: "Summit Slope Photo",
      },
    ],
    trailMapUrl: "https://www.princehotels.com/en/ski/myoko_kogen/",
    webcamUrl: "https://www.princehotels.co.jp/ski/myoko/winter/",
    operatingHours: {
      seasonWindow: "Late December – Late March",
      dayHours: "08:30 – 16:00 (Suginohara Gondola opens 08:30)",
      nightSkiing: "No night skiing (daytime operations only)",
      earlyBird: "08:00 First Track Gondola on select Sundays & holidays",
      notes: "Kids 12 & under ride free all season at Prince Snow Resorts.",
    },
    pricing: {
      oneDayAdultYen: 6500,
      halfDayYen: 5500,
      twoDayYen: 12000,
      nightPassYen: null,
      childOneDayYen: 0,
      seniorOneDayYen: 5800,
      seasonPassYen: 67000,
      seasonPassName: "Myoko Suginohara Season Pass",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 4500,
      notes: "Seibu Prince Club / Epic Pass partner perks available; children under 12 ride free.",
    },
    snowboarderIntel: {
      liftFleet: "1 Long Gondola (3,074m), 2 High-Speed Hooded Quads (Mitahara No.2 & No.3), 2 Romance Pair Lifts",
      terrainPark: "SUGI PARK (1km+ long park line with kickers, banks, boxes, and rails)",
      flatSpotWarning: "Very Low — virtually zero flat cat-tracks; fast, wide-open fall line from 1,855m all the way to the base.",
      treeRunRules: "Official powder zones and mellow cedar glades open between runs; respect 'Outside Managed Area' ropes on the far looker's left.",
    },
    monthlySnowfallCm: {
      dec: 270,
      jan: 430,
      feb: 360,
      mar: 190,
      apr: 30,
      peakBaseCm: 390,
    },
    onsenAndVillage: [
      {
        name: "Naena-no-Yu Onsen (Suginosawa Village Bathhouse)",
        japaneseName: "杉野沢温泉 苗名の湯",
        category: "Onsen",
        description:
          "Local village bathhouse right at the base of Suginohara — super cheap and relaxing after riding the 8.5km trail.",
        info: "10:00 – 20:00 · ¥500 Adult",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Suginosawa+Onsen+Naena+no+Yu+Myoko",
      },
      {
        name: "Akakura Onsen Main Dining & Bar Village",
        japaneseName: "赤倉温泉街",
        category: "Food & Apres",
        description:
          "Myoko's lively central hot spring town (15 mins by bus/taxi) packed with izakayas, ramen shops, and craft beer bars.",
        info: "Evening Dining & Nightlife Hub",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Akakura+Onsen+Myoko+Niigata",
      },
    ],
    signatureRuns: [
      {
        name: "Super Giant & Mitahara Tree Zone",
        level: "Advanced",
        note: "Upper-mountain powder stashes and steep fall-line bowls off the top Hooded Quad.",
      },
      {
        name: "Panorama & Downhill Run (8.5km)",
        level: "Intermediate",
        note: "One of Japan's longest continuous runs overlooking frozen Lake Nojiri.",
      },
      {
        name: "Suginohara Gondola Cruiser",
        level: "Beginner",
        note: "Long, wide-open lower groomers through tall cedar forests.",
      },
    ],
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
      summary: "Hokuriku Shinkansen to Nagano or Joetsumyoko + Local Train to Myoko-Kogen Station + 15m Bus",
      station: "Myoko-Kogen Station (妙高高原駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Myoko-Kogen+Station+Niigata+Japan",
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
      "A freerider's dream near the Sea of Japan coast. Roughly 70% of the mountain consists of 14 avalanche-controlled off-piste freeride bowls and glades buried in up to 15+ meters of coastal snow each winter.",
    address: {
      postalCode: "〒944-0062",
      english: "1966 Ryozenji, Myoko-shi, Niigata 944-0062, Japan",
      japanese: "新潟県妙高市両善寺1966",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Lotte+Arai+Resort+Myoko+Niigata+Japan",
    },
    heroImage: "/trail-maps/lotte-arai.webp",
    trailMapImage: "/trail-maps/lotte-arai.webp",
    mapGallery: [
      {
        title: "Lotte Arai Official Freeride Zones & Trail Map (1800×2592 Ultra-HD)",
        caption:
          "Purple shaded zones mark the 14 patrol-controlled off-piste freeride bowls (Big Bowl, Zendana Bowl, Funaishi, Happy Place, Mamushi, KG).",
        imageUrl: "/trail-maps/lotte-arai.webp",
        badge: "1800×2592 Freeride Map",
      },
    ],
    trailMapUrl: "https://www.lottehotel.com/arai-resort/en",
    webcamUrl: "https://www.lottehotel.com/arai-resort/en/ski/mountain-info.html",
    operatingHours: {
      seasonWindow: "Mid-December – Mid-May",
      dayHours: "08:30 – 16:00 (Arai Gondola)",
      nightSkiing: "18:00 – 21:00 (Sanroku lower slopes on Fri/Sat & holidays)",
      earlyBird: "08:00 First Class Ticket gets priority 30-min early gondola boarding!",
      notes: "Upper freeride gates open after ski patrol completes morning avalanche control.",
    },
    pricing: {
      oneDayAdultYen: 7500,
      halfDayYen: 6000,
      twoDayYen: 14200,
      nightPassYen: 2500,
      childOneDayYen: 5000,
      seniorOneDayYen: 7000,
      seasonPassYen: 95000,
      seasonPassName: "Lotte Arai Economy Season Pass",
      fullBoardRentalDayYen: 7000,
      wearRentalDayYen: 5500,
      notes: "Upgrade to a 'First Class' pass (+¥2,000) to board the gondola 30 minutes before general public on powder mornings.",
    },
    snowboarderIntel: {
      liftFleet: "1 High-Speed 2-Stage Gondola (Arai Gondola), 2 High-Speed Quads (Zendana & Kokenashi), 2 Pair Lifts",
      terrainPark: "Natural Freeride Bowls & hits (no traditional rail park needed)",
      flatSpotWarning: "Moderate on lower return — 'Village Road' cat-track from mid-station to base can get sticky in spring; keep your base waxed.",
      treeRunRules: "14 giant purple Freeride Zones are 100% legal once patrol opens the red gates! Enter only through designated gates and never duck orange 'Strictly Off-Limits' ropes.",
    },
    monthlySnowfallCm: {
      dec: 310,
      jan: 480,
      feb: 390,
      mar: 220,
      apr: 65,
      peakBaseCm: 480,
    },
    onsenAndVillage: [
      {
        name: "Hoshizora Onsen (Starry Sky Open-Air Bath)",
        japaneseName: "星空温泉 (ロッテアライリゾート内)",
        category: "Onsen",
        description:
          "Luxury weakly alkaline thermal spring right inside the Lotte Arai base complex with a snow-walled open-air bath.",
        info: "06:00 – 23:00 · ¥1,500 Day-Use",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Lotte+Arai+Resort+Onsen",
      },
      {
        name: "Joetsumyoko Station Dining & Omiyage Hub",
        japaneseName: "上越妙高駅 SAKURAプラザ",
        category: "Food & Apres",
        description:
          "Shinkansen hub 25 mins away with Niigata sake tasting bars, kaisen-don seafood bowls, and ekiben.",
        info: "Free Shuttle Connection",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Joetsumyoko+Station+Niigata",
      },
    ],
    signatureRuns: [
      {
        name: "Oonashi & Zendana Bowls",
        level: "Advanced",
        note: "Massive open alpine bowls that drop rope after avalanche patrol checks.",
      },
      {
        name: "Funaishi & Benzaku Glades",
        level: "Intermediate",
        note: "Playful mid-mountain powder fields and natural rollers.",
      },
      {
        name: "Village Way (5.2km)",
        level: "Beginner",
        note: "Winding top-to-base cat-track and groomer return run.",
      },
    ],
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
      summary: "Hokuriku Shinkansen to Joetsumyoko Station (110m) + Free 30m Resort Shuttle Bus",
      station: "Joetsumyoko Station (上越妙高駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Joetsumyoko+Station+Niigata+Japan",
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
      "Connected to Naeba via the 5.5km Dragondola, Kagura sits high above Yuzawa (up to 1,845m) so its snow stays cold and dry from late November through mid-May. A favorite for Tokyo riders chasing sidecountry and birch tree runs.",
    address: {
      postalCode: "〒949-6211",
      english: "742 Mitsumata, Yuzawa-machi, Minamiuonuma-gun, Niigata 949-6211, Japan",
      japanese: "新潟県南魚沼郡湯沢町三俣742",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Kagura+Ski+Resort+Mitsumata+Station+Yuzawa+Niigata",
    },
    heroImage: "/trail-maps/kagura-slope.jpg",
    trailMapImage: "/trail-maps/kagura.jpg",
    mapGallery: [
      {
        title: "Kagura · Mitsumata · Tashiro Full HD Trail Map (2064×1362)",
        caption:
          "Complete English map covering all 3 interconnected areas: Mitsumata (right), High-Altitude Kagura Main Bowl & Lift 5 BC Gate (top center), and Tashiro Lake (left).",
        imageUrl: "/trail-maps/kagura.jpg",
        badge: "3-Area Ultra-HD Map",
      },
      {
        title: "Kagura Upper Mountain & Tashiro Panorama",
        caption:
          "Snowboarders dropping into the high-elevation Kagura bowl overlooking Lake Tashiro and the Echigo peaks.",
        imageUrl: "/trail-maps/kagura-slope.jpg",
        badge: "Upper Bowl Photo",
      },
      {
        title: "Kagura Gondola Through Rime-Frosted Birch Trees",
        caption:
          "The Kagura Gondola connects the Mitsumata area up into the cold 1,845m main alpine zone.",
        imageUrl: "/trail-maps/kagura-photo.jpg",
        badge: "Gondola Photo",
      },
    ],
    trailMapUrl: "https://www.princehotels.com/en/ski/kagura/",
    webcamUrl: "https://www.princehotels.co.jp/ski/kagura/winter/coursemap/",
    operatingHours: {
      seasonWindow: "Late November – Mid-May (Longest season in Niigata)",
      dayHours: "08:00 – 16:30 (Weekends open 07:30 at Mitsumata Ropeway)",
      nightSkiing: "No night skiing at Kagura (available at neighboring Naeba)",
      earlyBird: "07:30 Saturday/Sunday Mitsumata Ropeway upload",
      notes: "Kagura Pair Lift No. 5 ('the BC gate lift') operates Jan 1 – mid-April.",
    },
    pricing: {
      oneDayAdultYen: 6800,
      halfDayYen: 5700,
      twoDayYen: 12800,
      nightPassYen: null,
      childOneDayYen: 0,
      seniorOneDayYen: 6200,
      seasonPassYen: 78000,
      seasonPassName: "Kagura & Naeba Joint Season Pass",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 4500,
      notes: "Upgrade to the Mt. Naeba Joint Ticket (+¥1,000) to ride the 5.5km Dragondola over to Naeba Ski Resort.",
    },
    snowboarderIntel: {
      liftFleet: "2 Large Ropeways (Mitsumata & Tashiro), 2 Gondolas (Kagura Gondola & 5.5km Dragondola), 5 High-Speed Quads, 11 Pair Lifts",
      terrainPark: "Kagura Park & Mitsumata Ups 'n' Downs (banked slalom & flow park)",
      flatSpotWarning: "Watch the Tashiro-to-Kagura traverse — keep speed on the connecting trail between Tashiro and Kagura Gondola base.",
      treeRunRules: "Mellow birch trees between upper Kagura runs are popular; exiting the top Backcountry Gate at Lift 5 requires beacon/shovel/probe and a climbing plan.",
    },
    monthlySnowfallCm: {
      dec: 280,
      jan: 410,
      feb: 350,
      mar: 220,
      apr: 70,
      peakBaseCm: 410,
    },
    onsenAndVillage: [
      {
        name: "Kaido-no-Yu Onsen (Mitsumata Base Hot Spring)",
        japaneseName: "街道の湯 (三俣)",
        category: "Onsen",
        description:
          "Traditional outdoor rock bath just a 3-minute walk from the Mitsumata Ropeway parking lot.",
        info: "10:00 – 20:30 · ¥600 Adult",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Kaido+no+Yu+Onsen+Mitsumata+Yuzawa",
      },
      {
        name: "Ponshukan Sake Museum & Bath (Inside Echigo-Yuzawa Station)",
        japaneseName: "ぽんしゅ館 越後湯沢驛店",
        category: "Food & Apres",
        description:
          "Legendary station hall where ¥500 gets you 5 tokens to taste from 100+ Niigata sakes, giant giant-onigiri rice balls, and a sake hot spring!",
        info: "09:00 – 19:30 · Inside Shinkansen Station",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Ponshukan+Echigo+Yuzawa+Station",
      },
    ],
    signatureRuns: [
      {
        name: "Lift 5 Romance ('Kagura BC Gate')",
        level: "Advanced",
        note: "Top-station forest glades and sidecountry access up to 1,845m.",
      },
      {
        name: "Kagura Main Slope",
        level: "Intermediate",
        note: "High-elevation bowl holding dry snow from November until late spring.",
      },
      {
        name: "Tashiro Lake Side Cruiser",
        level: "Beginner",
        note: "Scenic, gentle rolling terrain overlooking turquoise Lake Tashiro.",
      },
    ],
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
      summary: "Joetsu Shinkansen to Echigo-Yuzawa Station (75m) + 20m Express Bus to Mitsumata Ropeway",
      station: "Echigo-Yuzawa Station (越後湯沢駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Echigo-Yuzawa+Station+Niigata+Japan",
    },
    vibeTags: ["Long Season", "High Elevation", "Easy from Tokyo"],
    bestFor: "Quick weekend strike missions from Tokyo when Yuzawa gets nuked",
    officialUrl: "https://www.princehotels.com/en/ski/kagura/",
  },
  {
    slug: "gala-yuzawa",
    name: "GALA Yuzawa",
    japaneseName: "GALA湯沢スキー場",
    region: "Niigata",
    area: "Yuzawa",
    description:
      "The only ski and snowboard resort in the world with its own Shinkansen bullet train station right inside the base lodge. Step off the train from Tokyo, pick up your gear at the ticket counter, and board the gondola in minutes.",
    address: {
      postalCode: "〒949-6101",
      english: "1039-2 Kayadaira, Yuzawa-machi, Minamiuonuma-gun, Niigata 949-6101, Japan",
      japanese: "新潟県南魚沼郡湯沢町大字湯沢字茅平1039-2",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=GALA+Yuzawa+Snow+Resort+Niigata+Japan",
    },
    heroImage: "/trail-maps/gala-yuzawa-center.jpg",
    trailMapImage: "/trail-maps/gala-yuzawa.jpg",
    mapGallery: [
      {
        title: "GALA Yuzawa Full HD Trail Map (2280×1618)",
        caption:
          "Shows Southern Area (ungroomed Bronco powder runs), Central Area, Northern Area, and connections to Ishiuchi Maruyama & Yuzawa Kogen.",
        imageUrl: "/trail-maps/gala-yuzawa.jpg",
        badge: "Official 2280px HD Map",
      },
      {
        title: "GALA Central Area & Rest House 'Cheers' Aerial View",
        caption:
          "Aerial view of the Central Area slopes and the Northern Alps backdrop from the top of the Diligence Gondola.",
        imageUrl: "/trail-maps/gala-yuzawa-center.jpg",
        badge: "Aerial Slope Photo",
      },
    ],
    trailMapUrl: "https://gala.co.jp/winter/english/gelande/",
    webcamUrl: "https://gala.co.jp/winter/english/gelande/#livecam",
    operatingHours: {
      seasonWindow: "Mid-December – Early May",
      dayHours: "08:00 – 16:30",
      nightSkiing: "No night skiing at GALA (available next door at Ishiuchi Maruyama)",
      earlyBird: "First Shinkansen from Tokyo arrives right as the Gondola opens at 08:00",
      notes: "Connected to Yuzawa Kogen and Ishiuchi Maruyama via the 'YUZAWA SNOW LINK' 3-mountain ticket.",
    },
    pricing: {
      oneDayAdultYen: 6500,
      halfDayYen: 5200,
      twoDayYen: 11500,
      nightPassYen: null,
      childOneDayYen: 3250,
      seniorOneDayYen: 5800,
      seasonPassYen: 63000,
      seasonPassName: "GALA Yuzawa Season Pass",
      fullBoardRentalDayYen: 6000,
      wearRentalDayYen: 5000,
      notes: "JR Tokyo Wide Pass holders get discounted Shinkansen + Lift Pass bundles directly from Tokyo.",
    },
    snowboarderIntel: {
      liftFleet: "1 8-pax Gondola (Diligence), 1 Ropeway (Landau to Yuzawa Kogen), 3 High-Speed Quads, 6 Pair/Triple Lifts",
      terrainPark: "GALA Snow Park in the Northern Area (boxes, rails & medium kickers)",
      flatSpotWarning: "Low — the 2.5km Falcon Downhill back to the Shinkansen base has a narrow winding upper section, so control speed on busy afternoons.",
      treeRunRules: "Strict on-piste policy (no tree riding); ride the Southern Area uncompacted powder courses (Bronco A/B & 2.6 Million Dollar) after fresh snow.",
    },
    monthlySnowfallCm: {
      dec: 220,
      jan: 360,
      feb: 310,
      mar: 160,
      apr: 30,
      peakBaseCm: 330,
    },
    onsenAndVillage: [
      {
        name: "SPA Gala-no-Yu (Inside Cowabunga Shinkansen Base)",
        japaneseName: "SPAガーラの湯 (カワバンガ3F)",
        category: "Onsen",
        description:
          "Hot spring bath and indoor heated pool on the 3rd floor of the station building — soak right before boarding your bullet train back to Tokyo.",
        info: "12:00 – 19:00 · ¥1,300 Adult",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=GALA+Yuzawa+Station+Niigata",
      },
      {
        name: "Yuzawa Onsen West Exit Hot Spring & Izakaya Street",
        japaneseName: "越後湯沢温泉通り",
        category: "Food & Apres",
        description:
          "5 minutes by free shuttle bus to Echigo-Yuzawa's main town strip with Yuzawa Kogen, footbaths, and local Niigata soba restaurants.",
        info: "Free Shuttle to Echigo-Yuzawa",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Echigo+Yuzawa+Onsen+Street",
      },
    ],
    signatureRuns: [
      {
        name: "Bronco & Super Bronco (South Area)",
        level: "Advanced",
        note: "Ungroomed powder runs dropping toward neighboring Ishiuchi Maruyama.",
      },
      {
        name: "Entertainment & Gigi Runs",
        level: "Intermediate",
        note: "Central Area high-speed laps right off the Barouche Quad.",
      },
      {
        name: "Falcon Downhill (2.5km)",
        level: "Beginner",
        note: "Scenic ridge-top winding descent all the way back to the Shinkansen base.",
      },
    ],
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
      summary: "Direct Joetsu Shinkansen Tanigawa from Tokyo Station right into Gala-Yuzawa Station",
      station: "Gala-Yuzawa Station (ガーラ湯沢駅 — Inside Lodge)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=GALA+Yuzawa+Station+Niigata+Japan",
    },
    vibeTags: ["75m from Tokyo", "Shinkansen Inside", "Day Trip King"],
    bestFor: "Zero-hassle day trips straight from Tokyo Station",
    officialUrl: "https://gala.co.jp/winter/english/",
  },

  // ================= GUNMA =================
  {
    slug: "tanigawadake-tenjindaira",
    name: "Tanigawadake Tenjindaira (Mt.T)",
    japaneseName: "谷川岳ヨッホ by 星野リゾート (天神平)",
    region: "Gunma",
    area: "Minakami",
    description:
      "Known simply as 'Tenjin' to hardcore snowboarders. A 2.4km ropeway lifts you into dramatic sub-alpine bowls and ridges that trap massive amounts of snow funneling over the Mikuni Mountain Range.",
    address: {
      postalCode: "〒379-1728",
      english: "Yubiso, Minakami-machi, Tone-gun, Gunma 379-1728, Japan",
      japanese: "群馬県利根郡みなかみ町湯檜曽湯吹山国有林",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Tanigawadake+Ropeway+Minakami+Gunma+Japan",
    },
    heroImage: "/trail-maps/tanigawadake-tenjindaira.jpg",
    trailMapImage: "/trail-maps/tanigawadake-tenjindaira.jpg",
    mapGallery: [
      {
        title: "Map 1: Tenjindaira Upper Alpine Bowl & Lifts (2560×1825 Ultra-HD)",
        caption:
          "Detailed course map of Mt. Tenjin (1,502m), Mt. Takakura (1,449m), Tenjin Touge Pair Lift, and Tajirisawa courses.",
        imageUrl: "/trail-maps/tanigawadake-tenjindaira.jpg",
        badge: "2560px Upper Bowl Map",
      },
      {
        title: "Map 2: Full 3D Mt. Tanigawadake & 4km Tajirisawa Valley Run (2000×1413 HD)",
        caption:
          "Shows the full 3D topography from the 1,977m twin peaks down the 4km Tajirisawa valley run to Doaiguti Ropeway base.",
        imageUrl: "/trail-maps/tanigawadake-tenjindaira-2.jpg",
        badge: "2000px 3D Relief Map",
      },
      {
        title: "View Terrace Tenjin Mountain Lodge",
        caption:
          "Warm up inside View Terrace Tenjin at 1,319m with craft beer and mountain comfort food between powder laps.",
        imageUrl: "/trail-maps/tenjin-photo.jpg",
        badge: "Mountain Lodge",
      },
    ],
    trailMapUrl: "https://tanigawadake-joch.com/en/",
    webcamUrl: "https://tanigawadake-joch.com/en/",
    operatingHours: {
      seasonWindow: "Early December – Early May",
      dayHours: "08:30 – 16:30 (Weekends open 07:00 in spring)",
      nightSkiing: "No night skiing (High-alpine ropeway access)",
      earlyBird: "08:00 Ropeway upload on weekends & holidays",
      notes: "Backcountry gates require avalanche beacon, probe, shovel, helmet, and mountain registration card.",
    },
    pricing: {
      oneDayAdultYen: 6000,
      halfDayYen: 5000,
      twoDayYen: 11200,
      nightPassYen: null,
      childOneDayYen: 3500,
      seniorOneDayYen: 5500,
      seasonPassYen: 68000,
      seasonPassName: "Mt.T by Hoshino Resorts Season Pass",
      fullBoardRentalDayYen: 6500,
      wearRentalDayYen: 5000,
      notes: "Includes round-trip Tanigawadake Ropeway upload + all upper pair lifts.",
    },
    snowboarderIntel: {
      liftFleet: "1 Funitel Twin-Cable Ropeway (2,400m long, wind-resistant) + 3 Pair Chairlifts in the upper bowl",
      terrainPark: "Natural Wind-Lips, Gullies & Steep Alpine Banks (100% natural terrain)",
      flatSpotWarning: "Watch the bottom of the 4km Tajirisawa Course — the final creek runout back to the ropeway base flattens out.",
      treeRunRules: "In-bounds off-piste bowls are open; passing through the Designated Backcountry Gates requires mandatory avalanche gear (beacon, probe, shovel) and registration.",
    },
    monthlySnowfallCm: {
      dec: 290,
      jan: 450,
      feb: 380,
      mar: 240,
      apr: 80,
      peakBaseCm: 450,
    },
    onsenAndVillage: [
      {
        name: "Takaragawa Onsen Osenkaku (Giant Riverside Rotenburo)",
        japaneseName: "宝川温泉 汪泉閣",
        category: "Onsen",
        description:
          "One of Japan's most famous giant outdoor riverside hot springs nestled in a snowy canyon in Minakami.",
        info: "09:00 – 17:00 · ¥1,500 Day-Use",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Takaragawa+Onsen+Osenkaku+Minakami+Gunma",
      },
      {
        name: "Yubiso Onsen Footbath & Hot Spring Valley",
        japaneseName: "湯檜曽温泉",
        category: "Onsen",
        description:
          "Quiet hot spring village 5 minutes down the road from the Tanigawadake Ropeway base station.",
        info: "5 mins from Ropeway Base",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Yubiso+Onsen+Minakami+Gunma",
      },
      {
        name: "Doai Station ('Japan's Deepest Underground Mole Station')",
        japaneseName: "土合駅 (日本一のモグラ駅)",
        category: "Village Landmark",
        description:
          "Famous train station 70 meters underground with 462 concrete stairs leading up from the platform right near the ropeway.",
        info: "15m Walk from Ropeway Base",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Doai+Station+Minakami+Gunma",
      },
    ],
    signatureRuns: [
      {
        name: "Tenjin Pass Ridge & Side Bowls",
        level: "Advanced",
        note: "Steep natural halfpipes, wind-lips, and deep powder pockets.",
      },
      {
        name: "Tajirizawa Course (4km)",
        level: "Intermediate",
        note: "Valley descent running all the way down to the base of the ropeway.",
      },
      {
        name: "Tenjindaira Central Bowl",
        level: "Beginner",
        note: "High-alpine snowfield surrounded by dramatic Gunma peaks.",
      },
    ],
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
      summary: "Joetsu Shinkansen to Jomo-Kogen Station (65m) + 30m Bus to Tanigawadake Ropeway",
      station: "Jomo-Kogen Station (上毛高原駅) / Doai Station",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Jomo-Kogen+Station+Gunma+Japan",
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
      "A high-elevation Gunma gem (base at 1,290m, peak at 1,870m) famous for its 8-story drive-in Kawaba City base building, dry inland powder, top-tier freestyle parks, and official 'Off the Piste' tree-riding zones.",
    address: {
      postalCode: "〒378-0101",
      english: "Yachi, Kawaba-mura, Tone-gun, Gunma 378-0101, Japan",
      japanese: "群馬県利根郡川場村谷地2755-2",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Kawaba+Ski+Resort+Gunma+Japan",
    },
    heroImage: "/trail-maps/kawaba-photo.jpg",
    trailMapImage: "/trail-maps/kawaba.jpg",
    mapGallery: [
      {
        title: "Kawaba Official Numbered Course & Park Map",
        caption:
          "Shows all 10 numbered runs, Crystal Express summit (1,870m), Flux Park, Murasaki Natural Park, Classic Mini Pipe, and Mogul Course.",
        imageUrl: "/trail-maps/kawaba.jpg",
        badge: "Course & Park Map",
      },
      {
        title: "Kawaba Upper Ridge Corduroy & View (1,870m)",
        caption:
          "Actual morning view from the upper Crystal & Shiratori lifts overlooking the Gunma basin.",
        imageUrl: "/trail-maps/kawaba-photo.jpg",
        badge: "Slope Photo",
      },
    ],
    trailMapUrl: "https://www.kawaba.co.jp/snow/gelande/",
    webcamUrl: "https://www.kawaba.co.jp/snow/livecamera/",
    operatingHours: {
      seasonWindow: "Early December – Mid-April",
      dayHours: "08:30 – 16:00 (Weekends & holidays open 08:00)",
      nightSkiing: "No night skiing",
      earlyBird: "07:30 'First Track' Cat Skiing available by reservation!",
      notes: "'Off the Piste' (OTP) tree zones require a quick safety briefing and armband at the base.",
    },
    pricing: {
      oneDayAdultYen: 5900,
      halfDayYen: 5100,
      twoDayYen: 11000,
      nightPassYen: null,
      childOneDayYen: 3600,
      seniorOneDayYen: 5400,
      seasonPassYen: 62000,
      seasonPassName: "Kawaba Full Season Pass (or Powder5 Gunma Pass)",
      fullBoardRentalDayYen: 5800,
      wearRentalDayYen: 4500,
      notes: "Part of the 'POWDER5 GUNMA' common pass alongside Marunuma, Hodaigi, Oze Iwakura, and Tenjin.",
    },
    snowboarderIntel: {
      liftFleet: "3 High-Speed Quads (Crystal Express, Shiratori Express, Sakuragawa Express), 1 Triple, 1 Pair Lift",
      terrainPark: "FLUX PARK (main slopestyle kickers/jibs) + MURASAKI Natural Park + Classic Mini Pipe",
      flatSpotWarning: "Very Low — built by snowboarders for snowboarders; banked walls along Sakuragawa keep flow high all the way down.",
      treeRunRules: "4 Official 'OFF THE PISTE' (OTP) zones open once you sign the safety agreement and wear the official OTP armband.",
    },
    monthlySnowfallCm: {
      dec: 165,
      jan: 270,
      feb: 230,
      mar: 140,
      apr: 30,
      peakBaseCm: 290,
    },
    onsenAndVillage: [
      {
        name: "Kawarayu / Kawaba Onsen Kayabuki-no-Gensho",
        japaneseName: "川場温泉 かやぶきの源泉湯宿 悠湯里庵",
        category: "Onsen",
        description:
          "Historic thatched-roof hot spring complex in Kawaba village at the foot of the mountain road.",
        info: "10:30 – 19:00 · ¥1,200 Day-Use",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Kawaba+Onsen+Yutorian+Gunma",
      },
      {
        name: "Den-en Plaza Kawaba (No.1 Roadside Village in Japan)",
        japaneseName: "道の駅 川場田園プラザ",
        category: "Food & Apres",
        description:
          "Famous local village market at the base of Kawaba with craft brewery (Kawaba Beer), fresh cheese, ramen, and meat workshops.",
        info: "09:00 – 18:00 · Free Shuttle Stop",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Denen+Plaza+Kawaba+Gunma",
      },
    ],
    signatureRuns: [
      {
        name: "Off The Piste Zones (OTP 1–4)",
        level: "Advanced",
        note: "Designated tree-riding areas accessible with a short safety armband briefing.",
      },
      {
        name: "Crystal Course & Flux Park",
        level: "Intermediate",
        note: "2,000m-long ridge cruiser feeding into one of Gunma's best freestyle parks.",
      },
      {
        name: "Sakuragawa Course (3.3km)",
        level: "Beginner",
        note: "Cruisy top-to-bottom winding trail with great bank hits on the side.",
      },
    ],
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
      summary: "Joetsu Shinkansen to Jomo-Kogen Station (65m) + Free 50m Reservation Shuttle Bus",
      station: "Jomo-Kogen Station (上毛高原駅) / Numata Station",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Jomo-Kogen+Station+Gunma+Japan",
    },
    vibeTags: ["Freestyle Park", "High Base", "Off-Piste Zones"],
    bestFor: "Snowboarders who mix powder laps with freestyle park hits",
    officialUrl: "https://www.kawaba.co.jp/snow/",
  },
  {
    slug: "marunuma-kogen",
    name: "Marunuma Kogen",
    japaneseName: "丸沼高原スキー場",
    region: "Gunma",
    area: "Katashina",
    description:
      "Sitting at 2,000m on Mt. Nikko-Shirane, Marunuma offers a 4km gondola-served top-to-bottom run, super consistent cold inland snow, and the world-famous Frozen Wave Park designed by Gentemstick founder Taro Tamai.",
    address: {
      postalCode: "〒378-0414",
      english: "4658-58 Higashiogawa, Katashina-mura, Tone-gun, Gunma 378-0414, Japan",
      japanese: "群馬県利根郡片品村東小川4658-58",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Marunuma+Kogen+Ski+Resort+Gunma+Japan",
    },
    heroImage: "/trail-maps/marunuma-photo.png",
    trailMapImage: "/trail-maps/marunuma-kogen.jpg",
    mapGallery: [
      {
        title: "Marunuma Kogen Official HD Slope Map (2339×1654)",
        caption:
          "Detailed high-res map showing the 2,000m Ropeway Summit, Silver & Gold steep courses, Jib/Kicker Parks, and Taro Tamai's Frozen Wave Park.",
        imageUrl: "/trail-maps/marunuma-kogen.jpg",
        badge: "2339px Ultra-HD Map",
      },
      {
        title: "Marunuma Lift & Course Layout Schematic",
        caption:
          "Clean vertical schematic of the Nikko-Shirane Ropeway and numbered chairlifts.",
        imageUrl: "/trail-maps/marunuma-kogen.webp",
        badge: "Lift Schematic",
      },
      {
        title: "Carving the 4km Gondola Cruiser at Marunuma",
        caption:
          "Crisp high-altitude grooming and bluebird skies on Mt. Nikko-Shirane.",
        imageUrl: "/trail-maps/marunuma-photo.png",
        badge: "Slope Photo",
      },
    ],
    trailMapUrl: "https://www.marunuma.jp/winter/course-map/",
    webcamUrl: "https://www.marunuma.jp/winter/live-camera/",
    operatingHours: {
      seasonWindow: "Late November – Early May",
      dayHours: "08:15 – 16:30 (Nikko-Shirane Ropeway)",
      nightSkiing: "No night skiing (Center Station Zazen Onsen open until 17:30)",
      earlyBird: "07:45 Ropeway upload on select peak weekends",
      notes: "In-house 'Zazen Onsen' inside the Center Station is perfect right after your last lap.",
    },
    pricing: {
      oneDayAdultYen: 6000,
      halfDayYen: 5200,
      twoDayYen: 11200,
      nightPassYen: null,
      childOneDayYen: 3200,
      seniorOneDayYen: 5500,
      seasonPassYen: 63000,
      seasonPassName: "Marunuma Kogen Season Pass (or Powder5 Gunma)",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 4500,
      notes: "Includes unlimited laps on the 2,000m Nikko-Shirane Gondola Ropeway.",
    },
    snowboarderIntel: {
      liftFleet: "1 2,500m Gondola (Nikko-Shirane Ropeway to 2,000m) + 3 High-Speed Quads + 5 Pair Lifts",
      terrainPark: "Frozen Wave Park (3D snowsurf bowl/banks by Taro Tamai) + Kicker Park + Jib Park",
      flatSpotWarning: "Very Low — the 4km Ropeway run flows continuously with playful natural side-walls the entire way down.",
      treeRunRules: "Keep within course boundaries and designated side-stash zones; upper Silver & Gold courses left uncompacted on powder days.",
    },
    monthlySnowfallCm: {
      dec: 175,
      jan: 260,
      feb: 230,
      mar: 165,
      apr: 45,
      peakBaseCm: 300,
    },
    onsenAndVillage: [
      {
        name: "Zazen Onsen (Inside Center Station 2F)",
        japaneseName: "座禅温泉 (センターステーション2F)",
        category: "Onsen",
        description:
          "Natural thermal spring right inside the Marunuma base lodge — step out of your snowboard boots and straight into the bath.",
        info: "13:00 – 17:30 · ¥800 Adult",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Marunuma+Kogen+Center+Station+Gunma",
      },
      {
        name: "Oigami Onsen Hot Spring Valley (Gensen Yunosato)",
        japaneseName: "老神温泉",
        category: "Onsen",
        description:
          "Historic river gorge hot spring town along the route back toward Numata and Jomo-Kogen Station.",
        info: "25 mins toward Numata",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Oigami+Onsen+Numata+Gunma",
      },
    ],
    signatureRuns: [
      {
        name: "Silver Course",
        level: "Advanced",
        note: "Steep, ungroomed upper-mountain face right beneath the summit ropeway.",
      },
      {
        name: "4km Ropeway Top-to-Bottom Run",
        level: "Intermediate",
        note: "Endless surfy walls, natural hits, and Frozen Wave Park lines.",
      },
      {
        name: "Rose & Violet Slopes",
        level: "Beginner",
        note: "Wide, sun-lit lower slopes ideal for carving practice.",
      },
    ],
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
      summary: "Joetsu Shinkansen to Jomo-Kogen Station + Express Bus to Marunuma Kogen",
      station: "Jomo-Kogen Station (上毛高原駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Jomo-Kogen+Station+Gunma+Japan",
    },
    vibeTags: ["2,000m Peak", "4km Gondola Run", "Snowsurf Flow"],
    bestFor: "Snowsurfers and carvers loving long, flowing top-to-bottom gondola laps",
    officialUrl: "https://www.marunuma.jp/winter/",
  },
  {
    slug: "madarao-kogen",
    name: "Madarao Mountain Resort",
    japaneseName: "斑尾高原スキー場",
    region: "Nagano",
    area: "Iiyama / Madarao",
    description:
      "Nicknamed 'Madapow', Madarao is Japan's undisputed capital of official lift-served tree riding. Located in the heavy-snow belt above Iiyama Station, it features over 13 groomed and gladed official tree-run courses, natural halfpipes (SAWA), and a bowl-shaped layout where every run funnels safely back to the main base.",
    address: {
      postalCode: "〒389-2257",
      english: "11492-321 Madarao Kogen, Iiyama-shi, Nagano 389-2257, Japan",
      japanese: "長野県飯山市斑尾高原11492-321",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Madarao+Mountain+Resort+Iiyama+Nagano+Japan",
    },
    heroImage: "/trail-maps/madarao-kogen-photo.jpg",
    trailMapImage: "/trail-maps/madarao-kogen.jpg",
    mapGallery: [
      {
        title: "Madarao Mountain Resort Official Map & Tree Run Guide",
        caption:
          "Official trail map detailing all 32 courses including NINJA, SAWA I–III Natural Pipes, Powder Theater, Crystal Bowl, and Tangram connection.",
        imageUrl: "/trail-maps/madarao-kogen.jpg",
        badge: "Official Tree Run Map",
      },
      {
        title: "Madarao 3D Lift & Bowl Layout",
        caption:
          "Aerial overview of Madarao's natural bowl geometry and chairlift network.",
        imageUrl: "/trail-maps/madarao-kogen-aerial.jpg",
        badge: "3D Aerial Layout",
      },
      {
        title: "Overlooking the Madarao Bowl on a Bluebird Day",
        caption:
          "Snowboarders taking in the view across Madarao's central bowl and gladed ridges.",
        imageUrl: "/trail-maps/madarao-kogen-photo.jpg",
        badge: "Slope Photo",
      },
    ],
    trailMapUrl: "https://www.madarao.jp/ski/course",
    webcamUrl: "https://www.madarao.jp/ski",
    operatingHours: {
      seasonWindow: "Mid December – Late March",
      dayHours: "08:30 – 16:30",
      nightSkiing: "16:30 – 21:00 (Select Saturdays & peak holiday dates)",
      earlyBird: "Standard 08:30 Super Quad Lift start",
      notes: "Optional Mt.3 Pass or Tangram All-Mountain pass unlocks the neighboring Tangram Ski Circus bowls.",
    },
    pricing: {
      oneDayAdultYen: 6500,
      halfDayYen: 5500,
      twoDayYen: 12000,
      nightPassYen: 2500,
      childOneDayYen: 3500,
      seniorOneDayYen: 6000,
      seasonPassYen: 68000,
      seasonPassName: "Madarao Mountain Pass",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 4500,
      notes: "Upgrading to the Madarao + Tangram Common Pass (+¥500) opens 51 combined courses.",
    },
    snowboarderIntel: {
      liftFleet: "1 High-Speed Hooded Super Quad + 3 Quads + 6 Pair Lifts",
      terrainPark: "Free Ride Park + Natural Pipe (SAWA I/II/III) + NINJA 7m log rail feature",
      flatSpotWarning: "Low — the natural amphitheater bowl funnels riders back to the base without flat cat-tracks, though the Tangram traverse requires speed.",
      treeRunRules: "Gold Standard — 13+ official, named, patrolled gladed tree-run courses open to all riders without special registration.",
    },
    monthlySnowfallCm: {
      dec: 210,
      jan: 330,
      feb: 280,
      mar: 160,
      apr: 30,
      peakBaseCm: 340,
    },
    onsenAndVillage: [
      {
        name: "Madarao Kogen Hotel Onsen",
        japaneseName: "斑尾高原ホテル 温泉",
        category: "Onsen",
        description:
          "Alkaline simple thermal spring right at the base of the slopes, ideal for soothing sore legs after tree laps.",
        info: "06:00 – 10:00 / 12:00 – 23:00 · ¥1,000 Day Use",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Madarao+Kogen+Hotel+Onsen+Nagano",
      },
      {
        name: "Aki's Pub & Cafe / Heidi Restaurant",
        japaneseName: "レストラン ハイジ・Aki's Pub",
        category: "Food & Apres",
        description:
          "Classic slopeside burger, curry, and craft beer spots right at the bottom of the main quad lifts.",
        info: "Slopeside at Base Area",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Restaurant+Heidi+Madarao+Kogen",
      },
    ],
    signatureRuns: [
      {
        name: "Powder Wave 2 & Powder Theater",
        level: "Advanced",
        note: "Spacious, perfectly spaced birch glades holding deep 'Madapow' stashes.",
      },
      {
        name: "SAWA I / II / III Natural Pipe",
        level: "Advanced",
        note: "Natural gully terrain forming an organic snowsurf halfpipe through the trees.",
      },
      {
        name: "Crystal Bowl",
        level: "Advanced",
        note: "Steep, sustained north-facing tree bowl served by Lift No. 13.",
      },
      {
        name: "Paradise & Utopia",
        level: "Beginner",
        note: "Wide, forgiving groomers winding from the upper ridge to the base.",
      },
    ],
    coordinates: { lat: 36.8519, lon: 138.2858 },
    elevation: { base: 910, top: 1382, vertical: 472 },
    terrain: {
      beginner: 30,
      intermediate: 35,
      advanced: 35,
      runs: 32,
      lifts: 10,
      treeRunsAllowed: true,
    },
    dayPassYen: 6500,
    fromTokyo: {
      durationMinutes: 130,
      summary: "Hokuriku Shinkansen to Iiyama Station (100 mins) + 30-min direct community bus",
      station: "Iiyama Station (飯山駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Iiyama+Station+Nagano+Japan",
    },
    vibeTags: ["#1 Tree Runs", "Madapow", "Natural Halfpipes"],
    bestFor: "Snowboarders obsessed with accessible, patrolled tree runs and natural gullies",
    officialUrl: "https://www.madarao.jp/ski/",
  },
  {
    slug: "naeba",
    name: "Naeba Ski Resort",
    japaneseName: "苗場スキー場",
    region: "Niigata",
    area: "Yuzawa / Mt. Naeba",
    description:
      "One of Japan's most iconic flagship resorts, rising 889 vertical meters above the massive ski-in/ski-out Naeba Prince Hotel. Linked directly to Kagura via the 5.5km Dragondola (Japan's longest gondola), Naeba combines steep World Cup faces, Splash Bowl powder zones, and vibrant night skiing.",
    address: {
      postalCode: "〒949-6292",
      english: "202 Mikuni, Yuzawa-machi, Minamiuonuma-gun, Niigata 949-6292, Japan",
      japanese: "新潟県南魚沼郡湯沢町三国202",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Naeba+Ski+Resort+Yuzawa+Niigata+Japan",
    },
    heroImage: "/trail-maps/naeba-photo.jpg",
    trailMapImage: "/trail-maps/naeba.jpg",
    mapGallery: [
      {
        title: "Naeba Ski Resort 2025–2026 Official Course Map",
        caption:
          "Complete trail map showing Takenokoyama summit (1,789m), Prince 1st & 2nd Gondolas, Splash Bowl, and the 5,481m Dragondola link to Tashiro/Kagura.",
        imageUrl: "/trail-maps/naeba.jpg",
        badge: "2025–2026 Official Map",
      },
      {
        title: "Naeba 3D Lift & Gondola Network",
        caption:
          "Aerial view of the Naeba valley, three gondolas, and high-speed quad network.",
        imageUrl: "/trail-maps/naeba-aerial.jpg",
        badge: "3D Aerial Layout",
      },
      {
        title: "Frost-Covered Birch Trees on Upper Mt. Takenoko",
        caption:
          "Crisp winter morning at the top of the Prince Gondola.",
        imageUrl: "/trail-maps/naeba-photo.jpg",
        badge: "Slope Photo",
      },
    ],
    trailMapUrl: "https://www.princehotels.co.jp/ski/naeba/winter/coursemap/",
    webcamUrl: "https://www.princehotels.co.jp/ski/naeba/winter/",
    operatingHours: {
      seasonWindow: "Mid December – Early April",
      dayHours: "08:00 – 17:00",
      nightSkiing: "16:00 – 20:30 daily across the illuminated front face",
      earlyBird: "08:00 daily start on main base lifts",
      notes: "The Mt. Naeba Joint Pass unlocks the 5.5km Dragondola across to Tashiro & Kagura.",
    },
    pricing: {
      oneDayAdultYen: 7200,
      halfDayYen: 5700,
      twoDayYen: 13800,
      nightPassYen: 3000,
      childOneDayYen: 0,
      seniorOneDayYen: 6500,
      seasonPassYen: 85000,
      seasonPassName: "Mt. Naeba Season Pass",
      fullBoardRentalDayYen: 6000,
      wearRentalDayYen: 5000,
      notes: "Kids (elementary school and under) ride FREE at all Prince Snow Resorts! Mt. Naeba Joint Pass (Naeba + Kagura) is ¥9,000.",
    },
    snowboarderIntel: {
      liftFleet: "3 Gondolas (including 5,481m Dragondola + Prince No. 1 & No. 2 Gondolas) + 4 High-Speed Quads + 5 Pair Lifts",
      terrainPark: "Naeba Snow Park (kickers, jibs, and banks along the No. 4 High-Speed Lift)",
      flatSpotWarning: "Low on the main faces; moderate on the long beginner Dragondola Connector trail.",
      treeRunRules: "Designated ungroomed Powder Fields (Splash Bowl, Men's & Women's Riesen, Takenokoyama) open inside the resort boundary; strictly obey red 'No Patrol / Ski Area Boundary' signs.",
    },
    monthlySnowfallCm: {
      dec: 195,
      jan: 310,
      feb: 265,
      mar: 170,
      apr: 35,
      peakBaseCm: 310,
    },
    onsenAndVillage: [
      {
        name: "Hiuchi no Yu Onsen (Naeba Prince Hotel)",
        japaneseName: "火打の湯 (苗場プリンスホテル)",
        category: "Onsen",
        description:
          "Natural indoor and outdoor hot spring baths located directly at the base of the slopes.",
        info: "14:00 – 22:00 · ¥1,500 Day Use",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Naeba+Prince+Hotel+Onsen+Niigata",
      },
      {
        name: "Naeba Onsen Village Dining Street",
        japaneseName: "苗場温泉街 飲食店通り",
        category: "Food & Apres",
        description:
          "Lively strip of izakayas, ramen shops, okonomiyaki joints, and craft beer bars a 5-minute walk from the South Gate.",
        info: "5-min walk from Base",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Naeba+Ski+Resort+Restaurants",
      },
    ],
    signatureRuns: [
      {
        name: "Splash Bowl & Takenokoyama Face",
        level: "Advanced",
        note: "1,789m summit powder bowl and steep 32° ungroomed faces.",
      },
      {
        name: "Men's Riesen Slalom (男子リーゼン)",
        level: "Advanced",
        note: "Famous steep, wide FIS World Cup pitch plummeting down toward the hotel.",
      },
      {
        name: "筍平 (Takenokodaira) & Daishamen Cruiser",
        level: "Intermediate",
        note: "4,000m top-to-bottom combination from the upper romance lift to the base.",
      },
      {
        name: "No. 4 & No. 5 Front Night Slopes",
        level: "Beginner",
        note: "Ultra-wide, brightly lit base runs open until 20:30 every night.",
      },
    ],
    coordinates: { lat: 36.7911, lon: 138.7789 },
    elevation: { base: 900, top: 1789, vertical: 889 },
    terrain: {
      beginner: 42,
      intermediate: 25,
      advanced: 33,
      runs: 24,
      lifts: 12,
      treeRunsAllowed: true,
    },
    dayPassYen: 7200,
    fromTokyo: {
      durationMinutes: 125,
      summary: "Joetsu Shinkansen to Echigo-Yuzawa Station (75 mins) + 45-min Express Bus to Naeba",
      station: "Echigo-Yuzawa Station (越後湯沢駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Echigo-Yuzawa+Station+Niigata+Japan",
    },
    vibeTags: ["889m Vertical", "Dragondola Link", "Night Skiing"],
    bestFor: "All-mountain riders wanting big vertical, 3 gondolas, and direct Kagura access",
    officialUrl: "https://www.princehotels.co.jp/ski/naeba/winter/",
  },
  {
    slug: "minakami-houdaigi",
    name: "Gunma Minakami Hodaigi",
    japaneseName: "群馬みなかみほうだいぎスキー場",
    region: "Gunma",
    area: "Minakami",
    description:
      "Perched high in the northern Minakami snowbelt with a 1,400m summit and north-facing slopes, Minakami Hodaigi catches heavy Sea of Japan storms spilling over the Tanigawa range. Featuring steep 40° powder faces, official tree-run zones, and wide family cruisers, it is Gunma's most balanced high-snowfall resort.",
    address: {
      postalCode: "〒379-1721",
      english: "3839-1 Fujiwara, Minakami-machi, Tone-gun, Gunma 379-1721, Japan",
      japanese: "群馬県利根郡みなかみ町藤原3839-1",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Gunma+Minakami+Hodaigi+Ski+Resort+Japan",
    },
    heroImage: "/trail-maps/minakami-houdaigi-photo.jpg",
    trailMapImage: "/trail-maps/minakami-houdaigi-2.jpg",
    mapGallery: [
      {
        title: "Gunma Minakami Hodaigi Official Labeled Course Map",
        caption:
          "Complete trail map showing all 16 courses, 40° Eagle face, uncompacted powder zones, Tree Run areas (Crest & Sanders), and Gravity Pipe.",
        imageUrl: "/trail-maps/minakami-houdaigi-2.jpg",
        badge: "Labeled Course Map",
      },
      {
        title: "Hodaigi Mountain Panorama Illustration",
        caption:
          "Clean topographic artwork illustrating the north-facing bowl and ridge lines.",
        imageUrl: "/trail-maps/minakami-houdaigi.jpg",
        badge: "Mountain Panorama",
      },
      {
        title: "Snowboarder Laying Down a Deep Carve at Hodaigi",
        caption:
          "Crisp inland Gunma snow on Hodaigi's wide intermediate groomers.",
        imageUrl: "/trail-maps/minakami-houdaigi-photo.jpg",
        badge: "Slope Photo",
      },
    ],
    trailMapUrl: "https://hodaigi.jp/course/",
    webcamUrl: "https://hodaigi.jp/",
    operatingHours: {
      seasonWindow: "Mid December – Late March",
      dayHours: "08:30 – 16:30 (08:00 start on weekends & holidays)",
      nightSkiing: "No night skiing",
      earlyBird: "08:00 weekend & holiday lift opening",
      notes: "Part of the Minakami area shuttle network from Jomo-Kogen and Minakami stations.",
    },
    pricing: {
      oneDayAdultYen: 5900,
      halfDayYen: 4900,
      twoDayYen: 11000,
      nightPassYen: null,
      childOneDayYen: 3400,
      seniorOneDayYen: 5300,
      seasonPassYen: 55000,
      seasonPassName: "Hodaigi Season Pass (or Powder5 Gunma)",
      fullBoardRentalDayYen: 5200,
      wearRentalDayYen: 4200,
      notes: "Also eligible for the Powder5 Gunma time-ticket pass shared across 5 northern Gunma resorts.",
    },
    snowboarderIntel: {
      liftFleet: "2 High-Speed Quad Lifts (No. 8 & No. 9 Quads) + 4 Pair Lifts",
      terrainPark: "Main Park + Mini Park + Gravity Pipe + Continuous Wave track",
      flatSpotWarning: "Low — upper mountain has strong pitch; only the No. 2 West Connector (0°–5°) requires carrying speed.",
      treeRunRules: "Official designated Tree Run areas ('Crest' and 'Sanders') plus 5 uncompacted powder courses open during winter storms.",
    },
    monthlySnowfallCm: {
      dec: 185,
      jan: 295,
      feb: 255,
      mar: 165,
      apr: 30,
      peakBaseCm: 310,
    },
    onsenAndVillage: [
      {
        name: "Takaragawa Onsen Osenkaku",
        japaneseName: "宝川温泉 汪泉閣",
        category: "Onsen",
        description:
          "World-famous riverside giant rotenburo (open-air baths) nestled in the snowy Fujiwara gorge just 10 minutes below Hodaigi.",
        info: "09:00 – 16:30 · ¥1,500 Day Use",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Takaragawa+Onsen+Osenkaku+Minakami+Gunma",
      },
      {
        name: "Minakami Onsen Town",
        japaneseName: "水上温泉街",
        category: "Village Landmark",
        description:
          "ClassicTone River hot spring town with footbaths, craft beer (Octone Brewing), and cozy ryokans.",
        info: "25 mins by bus",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Minakami+Onsen+Gunma+Japan",
      },
    ],
    signatureRuns: [
      {
        name: "Eagle Course (イーグル · 40° Max)",
        level: "Advanced",
        note: "Steepest ungroomed powder wall on the mountain at 40° maximum pitch.",
      },
      {
        name: "Nandaira (成平 · 1,400m) & Crest Tree Run",
        level: "Advanced",
        note: "Long 1.4km powder ridge run flanking the Crest gladed tree zone.",
      },
      {
        name: "No. 10 & No. 5 West Cruisers",
        level: "Intermediate",
        note: "1,050m–1,060m high-altitude groomers served by the No. 9 Quad.",
      },
      {
        name: "Family Gelande & Tanpopo Course",
        level: "Beginner",
        note: "Over 1km of gentle 8°–11° wide slopes at the base.",
      },
    ],
    coordinates: { lat: 36.8358, lon: 139.0789 },
    elevation: { base: 830, top: 1400, vertical: 570 },
    terrain: {
      beginner: 30,
      intermediate: 40,
      advanced: 30,
      runs: 16,
      lifts: 6,
      treeRunsAllowed: true,
    },
    dayPassYen: 5900,
    fromTokyo: {
      durationMinutes: 120,
      summary: "Joetsu Shinkansen to Jomo-Kogen Station (66 mins) + 50-min bus to Hodaigi",
      station: "Jomo-Kogen Station (上毛高原駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Jomo-Kogen+Station+Gunma+Japan",
    },
    vibeTags: ["40° Steep Face", "Tree Run Zones", "Takaragawa Onsen"],
    bestFor: "Freeriders and families wanting uncrowded Minakami powder and riverside onsens",
    officialUrl: "https://hodaigi.jp/",
  },
  {
    slug: "nekoma-mountain",
    name: "Hoshino Resorts NEKOMA Mountain",
    japaneseName: "星野リゾート ネコマ マウンテン",
    region: "Fukushima",
    area: "Bandai / Urabandai",
    description:
      "One of Tohoku's largest and most dynamic snow resorts, created by uniting the sun-drenched South Area (formerly Alts Bandai overlooking Lake Inawashiro) with the ultra-cold, micro-fine powder North Area (formerly Nekoma) via the Nya-Alts connecting chairlift across Mt. Nekoma.",
    address: {
      postalCode: "〒969-3396",
      english: "6838-68 Kiyohira, Sarashina, Bandai-machi, Yama-gun, Fukushima 969-3396, Japan",
      japanese: "福島県耶麻郡磐梯町大字更科字清水平6838-68",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hoshino+Resorts+NEKOMA+Mountain+Fukushima+Japan",
    },
    heroImage: "/trail-maps/nekoma-mountain-photo.jpg",
    trailMapImage: "/trail-maps/nekoma-mountain.jpg",
    mapGallery: [
      {
        title: "NEKOMA Mountain Official Dual-Peak Trail Map",
        caption:
          "Official illustrated map showing the South Gate (Bandai side), North Gate (Urabandai side), Connecting Lift, Tree Run Zones, and Freestyle Parks.",
        imageUrl: "/trail-maps/nekoma-mountain.jpg",
        badge: "Official Dual-Area Map",
      },
      {
        title: "NEKOMA Mountain English Course & Tree Zone Guide",
        caption:
          "Detailed English brochure map with named runs (Deep, Excite, Devil, Frozen, White Valley, Black Valley) and Tree Run Zones A, B, and C.",
        imageUrl: "/trail-maps/nekoma-mountain-2.jpg",
        badge: "English Brochure Map",
      },
      {
        title: "Slashing Micro-Fine Powder on NEKOMA North Area",
        caption:
          "Cold inland Urabandai powder preserved on the north-facing Nekoma slopes.",
        imageUrl: "/trail-maps/nekoma-mountain-photo.jpg",
        badge: "Powder Action",
      },
    ],
    trailMapUrl: "https://www.nekoma.co.jp/en/",
    webcamUrl: "https://www.nekoma.co.jp/",
    operatingHours: {
      seasonWindow: "Late November – Early May (5+ month season on North Area)",
      dayHours: "08:30 – 16:00 (North Area opens 07:30 in spring)",
      nightSkiing: "17:00 – 21:00 on selected Saturdays & holidays (South Area Night Park & lower slopes)",
      earlyBird: "First Ride 08:15 (15 mins before general opening on select lifts)",
      notes: "Check the Nya-Alts Chair connecting lift closing time (14:30–14:50) so you return to your starting base gate on time!",
    },
    pricing: {
      oneDayAdultYen: 5700,
      halfDayYen: 4900,
      twoDayYen: 11000,
      nightPassYen: 2200,
      childOneDayYen: 2600,
      seniorOneDayYen: 5200,
      seasonPassYen: 61000,
      seasonPassName: "NEKOMA Mountain Season Pass",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 4500,
      notes: "Online advance purchase saves ¥400–¥800 off window ticket prices.",
    },
    snowboarderIntel: {
      liftFleet: "13 Lifts (4 High-Speed Quad Lifts including Alts Express, Black Valley Express & Friendly Cat Express + 9 Pair Lifts)",
      terrainPark: "Global Park (world-class slopestyle jumps), Step Up Park North & South, Flowing Banked Park & Night Park",
      flatSpotWarning: "Low on main bowls; brief Snowtop walking route (200m) at the summit transition between South and North peaks.",
      treeRunRules: "3 official designated 'At Your Own Risk' Tree Run Zones (A, B, and C) in the Frozen/Peak bowls plus the Devil hike-up powder zone.",
    },
    monthlySnowfallCm: {
      dec: 190,
      jan: 290,
      feb: 250,
      mar: 160,
      apr: 40,
      peakBaseCm: 310,
    },
    onsenAndVillage: [
      {
        name: "Bandaisan Onsen Hotel (Shuhokan)",
        japaneseName: "星野リゾート 磐梯山温泉ホテル (朱嶺の湯)",
        category: "Onsen",
        description:
          "Ski-in/ski-out Hoshino Resort hotel right at the South Gate featuring cypress baths fed by natural Mt. Bandai hot spring water.",
        info: "Slopeside at South Area Base",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hoshino+Resorts+Bandaisan+Onsen+Hotel+Fukushima",
      },
      {
        name: "The Rider's Burger Stand & Bandai Salt Ramen",
        japaneseName: "ザ・ライダーズ (山塩ラーメン・ハンバーガー)",
        category: "Food & Apres",
        description:
          "Famous Urabandai Aizu mountain-salt ramen and craft burgers mid-mountain on the South & North slopes.",
        info: "10:00 – 15:30 · Mid-mountain",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Nekoma+Mountain+Ski+Resort+Fukushima",
      },
    ],
    signatureRuns: [
      {
        name: "Deep 1 & Excite 1 (North Area)",
        level: "Advanced",
        note: "North-facing steeps holding ultra-light 'Micro-Fine Snow' well after storms.",
      },
      {
        name: "Frozen 1–4 & Tree Run Zones A/B/C",
        level: "Advanced",
        note: "Gladed beech forest powder zones tucked into the high saddle between North and South.",
      },
      {
        name: "Devil 1–3 & Step Up Park",
        level: "Intermediate",
        note: "Wide, consistent carving pitches and progressive freestyle park lanes.",
      },
      {
        name: "White Valley & Panorama Line",
        level: "Beginner",
        note: "Scenic cruisers with sweeping views over Lake Inawashiro.",
      },
    ],
    coordinates: { lat: 37.5992, lon: 140.0447 },
    elevation: { base: 755, top: 1338, vertical: 583 },
    terrain: {
      beginner: 30,
      intermediate: 40,
      advanced: 30,
      runs: 33,
      lifts: 13,
      treeRunsAllowed: true,
    },
    dayPassYen: 5700,
    fromTokyo: {
      durationMinutes: 145,
      summary: "Tohoku Shinkansen to Koriyama Station + Ban'etsu West Line to Bandaimachi Station + free resort shuttle",
      station: "Bandaimachi Station / Koriyama Station (磐梯町駅 / 郡山駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Bandaimachi+Station+Fukushima+Japan",
    },
    vibeTags: ["33 Courses", "North + South Peaks", "Pro Slopestyle Park"],
    bestFor: "Freestyle snowboarders and powder hunters wanting a massive two-faced mountain",
    officialUrl: "https://www.nekoma.co.jp/en/",
  },
  {
    slug: "grandeco",
    name: "EN RESORT Grandeco Snow Resort",
    japaneseName: "EN RESORT グランデコスノーリゾート",
    region: "Fukushima",
    area: "Urabandai / Kitashiobara",
    description:
      "With a base elevation starting over 1,010m and a 1,590m summit in the frigid Urabandai plateau, Grandeco boasts some of Honshu's driest, most featherlight 'Kami-Snow' (divine powder). Every single lift on the mountain is either a 2.4km gondola or a high-speed hooded quad—meaning warm, fast laps all day.",
    address: {
      postalCode: "〒969-2701",
      english: "荒砂沢山 (Arasunasawayama), Hibara, Kitashiobara-mura, Yama-gun, Fukushima 969-2701, Japan",
      japanese: "福島県耶麻郡北塩原村桧原荒砂沢山",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=EN+RESORT+Grandeco+Snow+Resort+Fukushima+Japan",
    },
    heroImage: "/trail-maps/grandeco-photo.jpg",
    trailMapImage: "/trail-maps/grandeco.jpg",
    mapGallery: [
      {
        title: "EN RESORT Grandeco Official Trail Map",
        caption:
          "Official course map showing the 1,590m Trail Peak, 2,392m Gondola, Snow Surf Park, and named runs (The Rock, Powder, Tree, Main Street, Fall Line).",
        imageUrl: "/trail-maps/grandeco.jpg",
        badge: "Official Trail Map",
      },
      {
        title: "Cruising Through Urabandai Birch Glades at Grandeco",
        caption:
          "1,000m+ base elevation keeps Grandeco's snow dry and chalky from late November to April.",
        imageUrl: "/trail-maps/grandeco-photo.jpg",
        badge: "Slope Photo",
      },
      {
        title: "Grandeco Gondola & High-Altitude Groomers",
        caption:
          "All lifts at Grandeco are enclosed or hooded high-speed quads.",
        imageUrl: "/trail-maps/grandeco-slope.jpg",
        badge: "Mountain View",
      },
    ],
    trailMapUrl: "https://resort.en-hotel.com/grandeco/snow/ja/course/",
    webcamUrl: "https://resort.en-hotel.com/grandeco/snow/ja/",
    operatingHours: {
      seasonWindow: "Late November – Mid April",
      dayHours: "08:30 – 16:00",
      nightSkiing: "No night skiing",
      earlyBird: "08:30 Gondola upload",
      notes: "100% hooded high-speed quad and gondola fleet keeps snowboarders sheltered on windy storm days.",
    },
    pricing: {
      oneDayAdultYen: 6500,
      halfDayYen: 5500,
      twoDayYen: 12000,
      nightPassYen: null,
      childOneDayYen: 4500,
      seniorOneDayYen: 6100,
      seasonPassYen: 65000,
      seasonPassName: "Grandeco Season Pass",
      fullBoardRentalDayYen: 5800,
      wearRentalDayYen: 4800,
      notes: "Weekday 1-Day Adult pass is discounted to ¥5,900.",
    },
    snowboarderIntel: {
      liftFleet: "1 6-Passenger Gondola (2,392m) + 3 High-Speed Hooded Quad Lifts (100% high-speed covered fleet!)",
      terrainPark: "Snow Surf Park (3D banked slalom & natural flow) + Free Ride Park",
      flatSpotWarning: "Very Low — the 4,500m top-to-bottom run maintains a steady, surfy gradient all the way to the Gondola base.",
      treeRunRules: "Designated 'Powder', 'The Rock', and 'Tree' courses offer patrolled gladed and uncompacted terrain off the top quad.",
    },
    monthlySnowfallCm: {
      dec: 210,
      jan: 310,
      feb: 270,
      mar: 175,
      apr: 45,
      peakBaseCm: 330,
    },
    onsenAndVillage: [
      {
        name: "EN RESORT Grandeco HotelBuna-rin Onsen",
        japaneseName: "EN RESORT Grandeco Hotel ぶなの湯",
        category: "Onsen",
        description:
          "Simple thermal indoor & outdoor rotenburo surrounded by beech forest right at the 1,040m base hotel.",
        info: "12:00 – 21:00 · ¥1,200 Day Use",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=EN+RESORT+Grandeco+Hotel+Fukushima",
      },
      {
        name: "Urabandai Goshikinuma & Lake Hibara",
        japaneseName: "裏磐梯・桧原湖エリア",
        category: "Village Landmark",
        description:
          "Highland lake plateau famous for snowshoeing, frozen lake views, and local Aizu sake.",
        info: "15 mins from base",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Lake+Hibara+Urabandai+Fukushima",
      },
    ],
    signatureRuns: [
      {
        name: "The Rock & Powder (1,590m Summit)",
        level: "Advanced",
        note: "High-alpine 26°–28° powder runs accessed from the top No. 3 Quad.",
      },
      {
        name: "Main Street (2,500m) + Snow Surf Park",
        level: "Intermediate",
        note: "Silky, wide groomer with banked walls served directly by the Gondola.",
      },
      {
        name: "Fall Line (33° Max)",
        level: "Advanced",
        note: "Punchy steep face dropping straight down to the base station.",
      },
      {
        name: "Forest Course (3,500m)",
        level: "Beginner",
        note: "Gentle, scenic forest cruiser winding through Urabandai beech trees.",
      },
    ],
    coordinates: { lat: 37.6947, lon: 140.1331 },
    elevation: { base: 1010, top: 1590, vertical: 580 },
    terrain: {
      beginner: 40,
      intermediate: 45,
      advanced: 15,
      runs: 13,
      lifts: 4,
      treeRunsAllowed: true,
    },
    dayPassYen: 6500,
    fromTokyo: {
      durationMinutes: 155,
      summary: "Tohoku Shinkansen to Koriyama Station + Ban'etsu West Line to Inawashiro Station + 40-min free shuttle bus",
      station: "Inawashiro Station (猪苗代駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Inawashiro+Station+Fukushima+Japan",
    },
    vibeTags: ["1,010m High Base", "100% Hooded Lifts", "Kami-Snow Powder"],
    bestFor: "Riders wanting luxury hooded lifts, ultra-dry high-elevation snow, and long cruisers",
    officialUrl: "https://resort.en-hotel.com/grandeco/snow/ja/",
  },
  {
    slug: "inawashiro",
    name: "Inawashiro Ski Resort",
    japaneseName: "猪苗代スキー場",
    region: "Fukushima",
    area: "Mt. Bandai / Lake Inawashiro",
    description:
      "Spread across the southern flank of volcanic Mt. Bandai with jaw-dropping panoramic views directly over Lake Inawashiro, this 18-course resort combines wide beginner/intermediate cruisers in the Chuo Area with steep mogul and powder faces in the Minero Area—plus Japan's most famous free weekday lift pass club.",
    address: {
      postalCode: "〒969-3102",
      english: "葉山 (Hayama) 7105, Inawashiro-machi, Yama-gun, Fukushima 969-3102, Japan",
      japanese: "福島県耶麻郡猪苗代町字葉山7105",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Inawashiro+Ski+Resort+Fukushima+Japan",
    },
    heroImage: "/trail-maps/inawashiro-photo.jpg",
    trailMapImage: "/trail-maps/inawashiro.jpg",
    mapGallery: [
      {
        title: "Inawashiro Ski Resort Official English Course Map",
        caption:
          "Official 18-course trail map covering Base Area, Sky Area, and Minero Area, including non-groomed deep powder zones and night skiing slopes.",
        imageUrl: "/trail-maps/inawashiro.jpg",
        badge: "Official English Map",
      },
      {
        title: "Inawashiro 3D Lift & Dual-Area Layout",
        caption:
          "Aerial view of the Base, Sky, and Minero sectors on the southern flank of Mt. Bandai.",
        imageUrl: "/trail-maps/inawashiro-aerial.jpg",
        badge: "3D Aerial Layout",
      },
      {
        title: "Wide-Open Groomed Slopes Overlooking Lake Inawashiro",
        caption:
          "Bluebird cruising on Inawashiro's sunny southern face.",
        imageUrl: "/trail-maps/inawashiro-photo.jpg",
        badge: "Slope Photo",
      },
    ],
    trailMapUrl: "https://www.inawashiro-ski.com/",
    webcamUrl: "https://www.inawashiro-ski.com/",
    operatingHours: {
      seasonWindow: "Late December – Late March",
      dayHours: "08:30 – 16:30",
      nightSkiing: "16:30 – 22:00 on Friday, Saturday & holiday eves ('Inawashiro Night')",
      earlyBird: "08:30 main quad lift opening",
      notes: "Free Inawashiro Ski Club (いなスキ！クラブ) membership makes weekday lift passes ¥0 (free) and weekend passes 50% off!",
    },
    pricing: {
      oneDayAdultYen: 5600,
      halfDayYen: 4800,
      twoDayYen: 10500,
      nightPassYen: 2800,
      childOneDayYen: 2800,
      seniorOneDayYen: 5100,
      seasonPassYen: 45000,
      seasonPassName: "Inawashiro Season Pass",
      fullBoardRentalDayYen: 5000,
      wearRentalDayYen: 4000,
      notes: "Register for the free 'Ina-Ski! Club' on your phone to get FREE weekday passes (¥0) and half-price weekend passes (¥2,800)!",
    },
    snowboarderIntel: {
      liftFleet: "3 High-Speed Quad Lifts (including Minero No. 1 Covered Quad) + 6 Pair Lifts",
      terrainPark: "Natural Wall Area & Banked features along Hayama Course",
      flatSpotWarning: "Low — wide, consistent fall-line slopes; use the L9 lift or Minero-to-Base connector when switching areas.",
      treeRunRules: "Designated 'Non-groomed Deep Powder' and 'Easy Powder' zones in the upper Sky Area (Ama no Niwa / Oumagaeshi) and Minero Area.",
    },
    monthlySnowfallCm: {
      dec: 135,
      jan: 225,
      feb: 195,
      mar: 115,
      apr: 15,
      peakBaseCm: 210,
    },
    onsenAndVillage: [
      {
        name: "Inawashiro Kanko Hotel Onsen",
        japaneseName: "猪苗代観光ホテル 温泉",
        category: "Onsen",
        description:
          "Relaxing hot spring bath directly at the West Slope base overlooking Lake Inawashiro.",
        info: "Slopeside at Base Area",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Inawashiro+Kanko+Hotel+Fukushima",
      },
      {
        name: "Taro Cafe & Lake Inawashiro Lakeside",
        japaneseName: "TARO CAFE (猪苗代湖畔)",
        category: "Food & Apres",
        description:
          "Beloved lakeside specialty coffee and dessert roastery on the shores of Lake Inawashiro.",
        info: "15 mins toward Lake Inawashiro",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Taro+Cafe+Inawashiro+Fukushima",
      },
    ],
    signatureRuns: [
      {
        name: "Akahani / All-Japan Ski Competition Course",
        level: "Advanced",
        note: "Steep, iconic upper-mountain face on Mt. Bandai with deep ungroomed snow.",
      },
      {
        name: "Ama no Niwa & Oumagaeshi (Sky Area)",
        level: "Intermediate",
        note: "High-altitude panoramic runs with adjacent non-groomed powder pockets.",
      },
      {
        name: "Minero East & Central Line (1,200m)",
        level: "Intermediate",
        note: "Fast, rolling carving runs served by the Minero Covered Quad.",
      },
      {
        name: "Central & Hayama Slopes",
        level: "Beginner",
        note: "Ultra-wide, sun-lit slopes facing Lake Inawashiro with night skiing until 22:00.",
      },
    ],
    coordinates: { lat: 37.5819, lon: 140.0975 },
    elevation: { base: 715, top: 1405, vertical: 690 },
    terrain: {
      beginner: 45,
      intermediate: 35,
      advanced: 20,
      runs: 18,
      lifts: 9,
      treeRunsAllowed: true,
    },
    dayPassYen: 5600,
    fromTokyo: {
      durationMinutes: 135,
      summary: "Tohoku Shinkansen to Koriyama Station + Ban'etsu West Line to Inawashiro Station + 15-min free shuttle bus",
      station: "Inawashiro Station (猪苗代駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Inawashiro+Station+Fukushima+Japan",
    },
    vibeTags: ["Lake Panorama", "Free Weekday Club", "690m Vertical"],
    bestFor: "Budget-savvy riders, carvers, and groups wanting Lake Inawashiro views and night skiing",
    officialUrl: "https://www.inawashiro-ski.com/",
  },
  {
    slug: "zao-onsen",
    name: "Zao Onsen Ski Resort",
    japaneseName: "蔵王温泉スキー場",
    region: "Yamagata",
    area: "Yamagata City / Mt. Zao",
    description:
      "One of Japan's most legendary and expansive mountain resorts. Famous worldwide for the surreal 'Juhyo' Snow Monsters (rime-ice covered fir trees) at the 1,661m Juhyo Kogen summit, Zao Onsen spans 305 hectares of interconnected terrain rising directly out of a 1,900-year-old sulfur hot spring village.",
    address: {
      postalCode: "〒990-2301",
      english: "Zao Onsen, Yamagata-shi, Yamagata 990-2301, Japan",
      japanese: "山形県山形市蔵王温泉",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Zao+Onsen+Ski+Resort+Yamagata+Japan",
    },
    heroImage: "/trail-maps/zao-onsen-photo.jpg",
    trailMapImage: "/trail-maps/zao-onsen.jpg",
    mapGallery: [
      {
        title: "Zao Onsen Official Full-Mountain Trail Map (26 Courses, 35 Lifts)",
        caption:
          "Official course map detailing Jizo Summit Station (1,661m), the 8km Juhyohara Course, Yokokura 38° Wall, Chuo Ropeway, and Sky Cable.",
        imageUrl: "/trail-maps/zao-onsen.jpg",
        badge: "Official Trail Map",
      },
      {
        title: "Zao Onsen Ultra-HD Illustrated Map (3.7MB)",
        caption:
          "High-resolution illustrated map of all 14 interconnected gelande sectors and village access points.",
        imageUrl: "/trail-maps/zao-onsen-2.png",
        badge: "Ultra-HD Map",
      },
      {
        title: "The Legendary 'Juhyo' Snow Monsters of Mt. Zao",
        caption:
          "Siberian winds and supercooled water droplets sculpt the Aomori Trelawney firs into giant snow monsters every January and February.",
        imageUrl: "/trail-maps/zao-onsen-photo.jpg",
        badge: "Juhyo Snow Monsters",
      },
    ],
    trailMapUrl: "https://zaomountainresort.com/ski/",
    webcamUrl: "https://www.zao-ski.or.jp/",
    operatingHours: {
      seasonWindow: "Early December – Early May",
      dayHours: "08:30 – 17:00",
      nightSkiing: "17:00 – 21:00 at Uwanodai Gelande (plus Juhyo Night Illumination Ropeway)",
      earlyBird: "08:15 Ropeway boarding on peak weekends",
      notes: "Take the two-stage Zao Ropeway (Sanroku Line + Sancho Line) to 1,661m to ride directly through the Juhyo Snow Monster field.",
    },
    pricing: {
      oneDayAdultYen: 7500,
      halfDayYen: 6300,
      twoDayYen: 14800,
      nightPassYen: 3000,
      childOneDayYen: 3800,
      seniorOneDayYen: 6700,
      seasonPassYen: 75000,
      seasonPassName: "Zao Onsen All-Mountain Season Pass",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 4500,
      notes: "1-Day pass covers all 32 chairlifts, 2 ropeways, and 1 gondola across the entire mountain.",
    },
    snowboarderIntel: {
      liftFleet: "3 Ropeways/Gondolas (Zao Ropeway Sanroku & Sancho Lines, Zao Chuo Ropeway, Zao Sky Cable) + 4 Quads + 25 Pair/Single Lifts",
      terrainPark: "nakamori / Uwanodai freeride features & natural side-hits across 14 sectors",
      flatSpotWarning: "Moderate — the upper section of the 8km Zangezaka / Juhyohara trail has gentle sections where you must carry speed, and traversing between distant base areas requires planning.",
      treeRunRules: "Strictly stay on marked courses; riding among the fragile Juhyo snow monsters off-piste is prohibited to protect the trees and avoid hidden tree wells.",
    },
    monthlySnowfallCm: {
      dec: 195,
      jan: 310,
      feb: 275,
      mar: 180,
      apr: 40,
      peakBaseCm: 330,
    },
    onsenAndVillage: [
      {
        name: "Zao Dai-Rotenburo & Three Public Baths (Kamiyu, Shimoyu, Kawarayu)",
        japaneseName: "蔵王温泉 大露天風呂・共同浴場 (上湯・下湯・川原湯)",
        category: "Onsen",
        description:
          "Historic 1,900-year-old milky-white acidic sulfur springs steaming right in the middle of the ski village.",
        info: "06:00 – 22:00 · ¥200 Public Baths",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Zao+Onsen+Public+Bath+Kamiyu+Yamagata",
      },
      {
        name: "Sankoro / Zao Onsen Jingisukan (Lamb BBQ)",
        japaneseName: "ジンギスカン・ろばた 蔵王温泉街",
        category: "Food & Apres",
        description:
          "Zao Onsen is the birthplace of helmet-shaped cast-iron Jingisukan (grilled lamb BBQ) paired with local Yamagata sake.",
        info: "Village Center · 3 mins from Ropeway",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Zao+Onsen+Jingisukan+Yamagata",
      },
    ],
    signatureRuns: [
      {
        name: "Zangezaka & Juhyohara Course (8,000m)",
        level: "Intermediate",
        note: "Iconic 8km descent starting at 1,661m right between the towering Juhyo Snow Monsters.",
      },
      {
        name: "Yokokura no Kabe (横倉の壁 · 38° Wall)",
        level: "Advanced",
        note: "Zao's most famous sheer 38° expert face—deep powder after storms, towering moguls on clear days.",
      },
      {
        name: "Kurohime Super Giant & Ohira Course",
        level: "Intermediate",
        note: "Long, wide high-speed carving runs on the quieter southern side of the resort.",
      },
      {
        name: "Uwanodai Gelande",
        level: "Beginner",
        note: "Expansive village-front slope with night skiing right above the ryokan district.",
      },
    ],
    coordinates: { lat: 38.1636, lon: 140.3997 },
    elevation: { base: 780, top: 1661, vertical: 881 },
    terrain: {
      beginner: 40,
      intermediate: 40,
      advanced: 20,
      runs: 26,
      lifts: 35,
      treeRunsAllowed: false,
    },
    dayPassYen: 7500,
    fromTokyo: {
      durationMinutes: 195,
      summary: "Yamagata Shinkansen Tsubasa to Yamagata Station (155 mins) + 40-min direct bus to Zao Onsen",
      station: "Yamagata Station (山形駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Yamagata+Station+Japan",
    },
    vibeTags: ["Juhyo Snow Monsters", "8km Summit Run", "1,900-Year Onsen"],
    bestFor: "Bucket-list explorers wanting Snow Monsters, 881m vertical, and an authentic sulfur onsen village",
    officialUrl: "https://www.zao-ski.or.jp/",
  },
  {
    slug: "tengendai-kogen",
    name: "Tengendai Kogen",
    japaneseName: "天元台高原スキー場",
    region: "Yamagata",
    area: "Yonezawa / Mt. Nishi-Azuma",
    description:
      "Tucked high on the northern flank of Mt. Nishi-Azuma (one of Japan's 100 Famous Mountains) above Shirabu Onsen, Tengendai Kogen reaches a staggering 1,820m summit. Known for 'Honshu's finest powder', its main ski base sits at 1,350m—accessible only by ropeway—with a 6,000m valley run dropping 900m back to Yumoto Station.",
    address: {
      postalCode: "〒992-1461",
      english: "Shirabu Onsen Tengendai, Yonezawa-shi, Yamagata 992-1461, Japan",
      japanese: "山形県米沢市白布温泉天元台",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Tengendai+Kogen+Ski+Resort+Yonezawa+Yamagata+Japan",
    },
    heroImage: "/trail-maps/tengendai-kogen-photo.jpg",
    trailMapImage: "/trail-maps/tengendai-kogen.jpg",
    mapGallery: [
      {
        title: "Tengendai Kogen Official 1,820m Summit & Powder Zone Map",
        caption:
          "Official trail map showing the Yumoto Ropeway (920m→1,350m), Shirakaba, Shakunage & Tsugamori slopes (to 1,820m), Powder Zones, and the 6,000m Yunodaira downhill.",
        imageUrl: "/trail-maps/tengendai-kogen.jpg",
        badge: "Official Trail Map",
      },
      {
        title: "Tengendai Kogen 3D Aerial Ropeway & Lift Layout",
        caption:
          "Aerial view showing the dramatic 900m vertical rise from Shirabu Onsen to the 1,820m alpine tree line.",
        imageUrl: "/trail-maps/tengendai-kogen-aerial.jpg",
        badge: "3D Aerial Layout",
      },
      {
        title: "Shirakaba Romance Lift & High-Alpine Pension Village (1,350m)",
        caption:
          "The main ski base sits at 1,350m above sea level, accessible exclusively via the Tengendai Ropeway.",
        imageUrl: "/trail-maps/tengendai-kogen-photo.jpg",
        badge: "1,350m Plateau",
      },
    ],
    trailMapUrl: "https://www.winter.tengendai.jp/",
    webcamUrl: "https://www.winter.tengendai.jp/",
    operatingHours: {
      seasonWindow: "Late November – Early May (nearly 6-month natural snow season)",
      dayHours: "08:20 – 16:00 (08:00 Ropeway start on weekends & holidays)",
      nightSkiing: "No night skiing",
      earlyBird: "08:00 weekend Ropeway upload from Yumoto Station",
      notes: "Because the main slope base starts at 1,350m on a north-facing peak, diamond-dust powder stays cold and dry well into spring.",
    },
    pricing: {
      oneDayAdultYen: 5500,
      halfDayYen: 4400,
      twoDayYen: 10000,
      nightPassYen: null,
      childOneDayYen: 3800,
      seniorOneDayYen: 5000,
      seasonPassYen: 55000,
      seasonPassName: "Tengendai Kogen Season Pass",
      fullBoardRentalDayYen: 4500,
      wearRentalDayYen: 3500,
      notes: "Includes unlimited rides on the Tengendai Ropeway and all 3 mountain pair lifts.",
    },
    snowboarderIntel: {
      liftFleet: "1 41-Passenger Ropeway (Yumoto 920m → Kogen 1,350m) + 3 Pair Lifts (Shirakaba, Shakunage, Tsugamori to 1,820m)",
      terrainPark: "Natural powder banks, tree pockets, and spring terrain features",
      flatSpotWarning: "Low on the main 3 upper lifts; moderate narrow sections on the 3km Yunodaira forest valley trail down to the ropeway base.",
      treeRunRules: "Official 'Tsugamori Powder Zone', 'Shakunage Powder Zone', and 'Shirakaba Powder Zone' open right alongside the main lifts!",
    },
    monthlySnowfallCm: {
      dec: 240,
      jan: 360,
      feb: 310,
      mar: 210,
      apr: 70,
      peakBaseCm: 420,
    },
    onsenAndVillage: [
      {
        name: "Shirabu Onsen (Higashiya / Nakaya / Nishiyama Ryokan)",
        japaneseName: "白布温泉 (東屋・中屋・西屋)",
        category: "Onsen",
        description:
          "700-year-old historic hot spring hamlet just 2 minutes below the Tengendai Ropeway base, famous for waterfall-fed wooden baths.",
        info: "2 mins from Ropeway Base · ¥700–¥1,000",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Shirabu+Onsen+Yonezawa+Yamagata",
      },
      {
        name: "Yonezawa Wagyu Beef Dining (Near Yonezawa Station)",
        japaneseName: "米沢牛 焼肉・すき焼き (米沢駅前)",
        category: "Food & Apres",
        description:
          "Celebrate a deep powder day with world-famous marbled Yonezawa Wagyu beef before catching the Shinkansen.",
        info: "Yonezawa City",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Yonezawa+Beef+Restaurant+Yamagata",
      },
    ],
    signatureRuns: [
      {
        name: "Tsugamori & Shakunage Powder Zones (1,820m)",
        level: "Advanced",
        note: "Ultra-dry 'Honshu's Finest Powder' stashes at 1,820m elevation where diamond dust sparkles in the air.",
      },
      {
        name: "6,000m Top-to-Bottom Valley Run (to Yumoto 920m)",
        level: "Intermediate",
        note: "Epic 6km, 900m vertical descent from the 1,820m top lift all the way to the bottom ropeway station.",
      },
      {
        name: "Shirakaba & Shakunage Main Runs",
        level: "Intermediate",
        note: "Crisp, wide packed-powder groomers with zero lift lines.",
      },
    ],
    coordinates: { lat: 37.7686, lon: 140.1428 },
    elevation: { base: 920, top: 1820, vertical: 900 },
    terrain: {
      beginner: 30,
      intermediate: 45,
      advanced: 25,
      runs: 7,
      lifts: 4,
      treeRunsAllowed: true,
    },
    dayPassYen: 5500,
    fromTokyo: {
      durationMinutes: 165,
      summary: "Yamagata Shinkansen Tsubasa to Yonezawa Station (120 mins) + 40-min bus to Tengendai Ropeway",
      station: "Yonezawa Station (米沢駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Yonezawa+Station+Yamagata+Japan",
    },
    vibeTags: ["1,820m Summit", "900m Vertical", "Honshu's Finest Powder"],
    bestFor: "Purist powder hounds seeking ultra-cold high-elevation snow and historic Shirabu Onsen",
    officialUrl: "https://www.winter.tengendai.jp/",
  },
  {
    slug: "jangle-jungle",
    name: "Kurobushi Kogen Snow Park Jangle Jungle",
    japaneseName: "黒伏高原スノーパーク ジャングル・ジャングル",
    region: "Yamagata",
    area: "Higashine / Mt. Kurobushi",
    description:
      "Set against the dramatic sheer rock face of Mt. Kurobushi in Higashine, Jangle Jungle is Yamagata's premier snowboarder and freestyle playground. Powered by high-speed hooded quad lifts, a top-tier J-Park & Jungle Cross course, tree run zones, free daily parking, and late-night riding, it draws Tohoku's most progressive riders.",
    address: {
      postalCode: "〒999-3723",
      english: "Numazawa,觀音寺 (Kannonji), Higashine-shi, Yamagata 999-3723, Japan",
      japanese: "山形県東根市大字観音寺水無山3170-164",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Kurobushi+Kogen+Snow+Park+Jangle+Jungle+Yamagata+Japan",
    },
    heroImage: "/trail-maps/jangle-jungle-photo.jpg",
    trailMapImage: "/trail-maps/jangle-jungle-2.jpg",
    mapGallery: [
      {
        title: "Jangle Jungle Official Course & Tree Run Map",
        caption:
          "Official trail map showing East Express (1,300m), West Express (1,000m), Tree Run zone, J-Park, Jungle Cross, and night-lit W-2/W-1 slopes.",
        imageUrl: "/trail-maps/jangle-jungle-2.jpg",
        badge: "Official Course Map",
      },
      {
        title: "Jangle Jungle 3D Aerial Lift Layout",
        caption:
          "Aerial view of the symmetrical East and West Express quad lifts below Mt. Kurobushi.",
        imageUrl: "/trail-maps/jangle-jungle-aerial.jpg",
        badge: "3D Aerial Layout",
      },
      {
        title: "Riding Below the Dramatic Rock Face of Mt. Kurobushi",
        caption:
          "Snowboarders cruising the wide central slopes with Mt. Kurobushi towering behind.",
        imageUrl: "/trail-maps/jangle-jungle-photo.jpg",
        badge: "Slope Photo",
      },
    ],
    trailMapUrl: "https://jxj.co.jp/",
    webcamUrl: "https://jxj.co.jp/",
    operatingHours: {
      seasonWindow: "Mid December – Early April",
      dayHours: "08:30 – 17:00",
      nightSkiing: "17:30 – 22:00 on Fridays, Saturdays & holiday eves",
      earlyBird: "08:30 Express Quad opening",
      notes: "Parking is 100% FREE every day of the season right outside Jangle Plaza.",
    },
    pricing: {
      oneDayAdultYen: 5400,
      halfDayYen: 4400,
      twoDayYen: 9800,
      nightPassYen: 2600,
      childOneDayYen: 3000,
      seniorOneDayYen: 4500,
      seasonPassYen: 46000,
      seasonPassName: "Jangle Jungle Common Season Pass",
      fullBoardRentalDayYen: 4500,
      wearRentalDayYen: 3800,
      notes: "Weekday 1-Day Adult pass is ¥4,500; early-bird online passes drop as low as ¥3,500.",
    },
    snowboarderIntel: {
      liftFleet: "2 High-Speed Hooded Quad Lifts (East Express 1,300m & West Express 1,000m) + 1 Pair Lift (Jungle Pair 410m)",
      terrainPark: "J-Park (multi-kicker & jib lanes) + Jungle Cross (banked boardercross course)",
      flatSpotWarning: "Very Low — every course feeds directly back to the central Jangle Plaza base.",
      treeRunRules: "Official central 'Tree Run' zone between E-1 and W-3 opens during mid-winter snowpack.",
    },
    monthlySnowfallCm: {
      dec: 170,
      jan: 280,
      feb: 245,
      mar: 155,
      apr: 25,
      peakBaseCm: 290,
    },
    onsenAndVillage: [
      {
        name: "Sakuranbo Higashine Onsen",
        japaneseName: "さくらんぼ東根温泉",
        category: "Onsen",
        description:
          "Warm amber sodium-chloride hot spring town 25 minutes from the slopes, famous for outdoor baths and Yamagata cherries.",
        info: "25 mins toward Higashine",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Higashine+Onsen+Yamagata",
      },
      {
        name: "Tendo Onsen & Yamagata Tori-Chuka Noodles",
        japaneseName: "天童温泉・鳥中華",
        category: "Food & Apres",
        description:
          "Stop in nearby Tendo for hot spring footbaths and steaming bowls of Yamagata's famous dashi-broth Tori-Chuka ramen.",
        info: "30 mins from resort",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Tendo+Onsen+Yamagata",
      },
    ],
    signatureRuns: [
      {
        name: "E-1 Active Burn & Central Tree Run",
        level: "Advanced",
        note: "Uncompacted natural terrain and gladed trees off the 1,030m East Express summit.",
      },
      {
        name: "E-2 Jungle Cross & Freerun Course",
        level: "Intermediate",
        note: "Long outer perimeter cruiser featuring banked turns and views of Mt. Kurobushi.",
      },
      {
        name: "W-1 & W-2 J-Park Line",
        level: "Intermediate",
        note: "High-speed lap track through J-Park and illuminated night riding until 22:00.",
      },
    ],
    coordinates: { lat: 38.4395, lon: 140.5404 },
    elevation: { base: 720, top: 1030, vertical: 310 },
    terrain: {
      beginner: 40,
      intermediate: 40,
      advanced: 20,
      runs: 7,
      lifts: 3,
      treeRunsAllowed: true,
    },
    dayPassYen: 5400,
    fromTokyo: {
      durationMinutes: 200,
      summary: "Yamagata Shinkansen Tsubasa to Sakuranbo-Higashine Station (165 mins) + 35-min taxi/shuttle",
      station: "Sakuranbo-Higashine Station (さくらんぼ東根駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Sakuranbo-Higashine+Station+Yamagata+Japan",
    },
    vibeTags: ["Snowboarder Hotspot", "Hooded Quads", "Night Skiing to 22:00"],
    bestFor: "Freestyle snowboarders and night-session riders wanting fast quad laps and parks",
    officialUrl: "https://jxj.co.jp/",
  },
  {
    slug: "aomori-spring",
    name: "Aomori Spring Ski Resort",
    japaneseName: "青森スプリング・スキーリゾート",
    region: "Aomori",
    area: "Ajigasawa / Mt. Iwaki",
    description:
      "Carved into the northern flank of 1,625m Mt. Iwaki overlooking the Sea of Japan and Tsugaru Peninsula, Aomori Spring combines deep Siberian sea-effect powder with Japan's most famous terrain parks and a 22-foot Olympic-spec superpipe. Starting in 2026, daily pass sales are capped at 1,200 guests per day to guarantee zero lift lines and untracked stashes.",
    address: {
      postalCode: "〒038-2793",
      english: "Ajigasawa Kogen, Ajigasawa-machi, Nishitsugaru-gun, Aomori 038-2793, Japan",
      japanese: "青森県西津軽郡鰺ヶ沢町鰺ヶ沢高原",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Aomori+Spring+Ski+Resort+Ajigasawa+Aomori+Japan",
    },
    heroImage: "/trail-maps/aomori-spring-photo.jpg",
    trailMapImage: "/trail-maps/aomori-spring.jpg",
    mapGallery: [
      {
        title: "Aomori Spring 2026 Official English Trail Map",
        caption:
          "Official 2026 trail map showing the 2,967m Gondola, Quad 1 & 2, Night Grooming Areas, and the 1,200-pass daily cap.",
        imageUrl: "/trail-maps/aomori-spring.jpg",
        badge: "2026 English Map",
      },
      {
        title: "Aomori Spring Bilingual Tree Zone Map (DG-1 to GG-4)",
        caption:
          "Detailed bilingual map highlighting the 7 designated 'At Your Own Risk' tree zones (DG-1/2/3 & GG-1/2/3/4).",
        imageUrl: "/trail-maps/aomori-spring-2.jpg",
        badge: "Tree Zone Map",
      },
      {
        title: "Mount Iwaki ('Tsugaru Fuji') Towering Above Aomori Spring",
        caption:
          "The 1,625m volcanic cone of Mt. Iwaki catches relentless Sea of Japan snowstorms.",
        imageUrl: "/trail-maps/aomori-spring-photo.jpg",
        badge: "Mt. Iwaki Peak",
      },
    ],
    trailMapUrl: "https://www.aomorispring.com/",
    webcamUrl: "https://www.aomorispring.com/",
    operatingHours: {
      seasonWindow: "Mid December – Early April",
      dayHours: "08:30 – 16:30",
      nightSkiing: "16:30 – 20:30 on Quad 1 (Sunshine, Paradise & Lower Wave courses)",
      earlyBird: "08:30 Gondola opening",
      notes: "Daily day-pass sales are capped at 1,200 tickets (Rockwood Hotel guests & season pass holders guaranteed entry)—book online in advance!",
    },
    pricing: {
      oneDayAdultYen: 6600,
      halfDayYen: 5200,
      twoDayYen: 12600,
      nightPassYen: 2800,
      childOneDayYen: 3900,
      seniorOneDayYen: 5500,
      seasonPassYen: 68000,
      seasonPassName: "Aomori Spring Season Pass",
      fullBoardRentalDayYen: 5800,
      wearRentalDayYen: 4800,
      notes: "Includes the 2,967m Gondola, high-speed quads, and full terrain park access.",
    },
    snowboarderIntel: {
      liftFleet: "1 6-Passenger Gondola (2,967m) + 2 High-Speed Quads (Quad 1 & Quad 2) + 1 Pair Lift (Diamond Lift)",
      terrainPark: "World-renowned Snow Park + Pipe Dream (22ft superpipe used by Olympic pros)",
      flatSpotWarning: "Very Low — long, continuous 3.4km Gondola runs with ocean views.",
      treeRunRules: "7 clearly mapped 'At Your Own Risk' tree zones (GG-1 to GG-4 off the Gondola & DG-1 to DG-3 off Diamond Lift) open through mature beech forests.",
    },
    monthlySnowfallCm: {
      dec: 220,
      jan: 340,
      feb: 295,
      mar: 185,
      apr: 35,
      peakBaseCm: 360,
    },
    onsenAndVillage: [
      {
        name: "Rockwood Hotel & Spa Ajigasawa Onsen",
        japaneseName: "ロックウッド・ホテル＆スパ 鰺ヶ沢温泉",
        category: "Onsen",
        description:
          "Ski-in/ski-out resort hotel featuring fossil-seawater outdoor rotenburo looking straight out toward the Sea of Japan.",
        info: "Slopeside Base · ¥1,200 Day Use",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Rockwood+Hotel+and+Spa+Aomori+Spring",
      },
      {
        name: "Mountain Cafe & Ramen House (Base Village)",
        japaneseName: "マウンテンカフェ＆ラーメンハウス",
        category: "Food & Apres",
        description:
          "Steaming Aomori miso-curry-milk ramen, wood-fired pizza, and local apple cider right at the gondola base.",
        info: "Gondola Base",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Aomori+Spring+Ski+Resort+Japan",
      },
    ],
    signatureRuns: [
      {
        name: "The Corkscrew & Piste Off + GG-1/GG-2 Trees",
        level: "Advanced",
        note: "Steep ungroomed gondola faces flanked by spaced beech tree powder zones.",
      },
      {
        name: "Sunshine & Upper/Lower Wave (Night Grooming Area)",
        level: "Intermediate",
        note: "Groomed late at night so overnight snowfall piles fresh powder directly onto corduroy.",
      },
      {
        name: "Panorama & Skyline Course (3,400m)",
        level: "Beginner",
        note: "Sweeping 3.4km top-to-bottom cruiser with views of the Sea of Japan.",
      },
    ],
    coordinates: { lat: 40.6952, lon: 140.2833 },
    elevation: { base: 376, top: 921, vertical: 545 },
    terrain: {
      beginner: 55,
      intermediate: 35,
      advanced: 10,
      runs: 22,
      lifts: 4,
      treeRunsAllowed: true,
    },
    dayPassYen: 6600,
    fromTokyo: {
      durationMinutes: 255,
      summary: "Tohoku Shinkansen Hayabusa to Shin-Aomori Station (195 mins) + 60-min resort shuttle/bus",
      station: "Shin-Aomori Station / Hirosaki Station (新青森駅 / 弘前駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Shin-Aomori+Station+Aomori+Japan",
    },
    vibeTags: ["1,200 Pass Cap", "Sea of Japan Views", "Beech Tree Glades"],
    bestFor: "Freeriders and park riders wanting uncrowded Gondola tree laps and world-class jumps",
    officialUrl: "https://www.aomorispring.com/",
  },
  {
    slug: "hakkoda",
    name: "Hakkoda Ropeway & Ski Area",
    japaneseName: "八甲田ロープウェー・八甲田国際スキー場",
    region: "Aomori",
    area: "Aomori City / Mt. Hakkoda",
    description:
      "A sacred pilgrimage site for deep-powder snowboarders worldwide. Centered around a 101-passenger ropeway climbing to the 1,324m Tamoyachidake summit, Hakkoda has almost no groomed runs—instead offering 5km–7km descents through surreal Juhyo snow monsters, bottomless northern Tohoku powder, and vast guided backcountry routes.",
    address: {
      postalCode: "〒030-0188",
      english: "1-12 Kansuizawa, Arakawa, Aomori-shi, Aomori 030-0188, Japan",
      japanese: "青森県青森市荒川寒水沢1-12",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hakkoda+Ropeway+Aomori+Japan",
    },
    heroImage: "/trail-maps/hakkoda-photo.jpg",
    trailMapImage: "/trail-maps/hakkoda.jpg",
    mapGallery: [
      {
        title: "Hakkoda Ropeway Official Course & Backcountry Route Map",
        caption:
          "Official route schematic showing the 1,324m Summit Park Station, Forest Course (5km), Direct Course (3.5km), and backcountry routes toward Sukayu & Jogakura Onsen.",
        imageUrl: "/trail-maps/hakkoda.jpg",
        badge: "Official Route Map",
      },
      {
        title: "Hakkoda Ground & Base Lift Map",
        caption:
          "Detailed map of the Kunimizaka base pair lifts, Slalom Course, and Ropeway terminal.",
        imageUrl: "/trail-maps/hakkoda-2.png",
        badge: "Base Area Map",
      },
      {
        title: "Drawing S-Turns Through Hakkoda's Juhyo Snow Monsters",
        caption:
          "Untracked powder fields between rime-crusted Aomori fir trees at the top of Hakkoda Ropeway.",
        imageUrl: "/trail-maps/hakkoda-photo.jpg",
        badge: "Hakkoda Powder",
      },
    ],
    trailMapUrl: "https://www.hakkoda-ropeway.jp/ski/",
    webcamUrl: "https://www.hakkoda-ropeway.jp/",
    operatingHours: {
      seasonWindow: "Early December – Mid May",
      dayHours: "09:00 – 15:40 (16:20 from March to May)",
      nightSkiing: "No night skiing",
      earlyBird: "09:00 first Ropeway cabin (departs every 15–20 mins)",
      notes: "High winds can pause the Ropeway during peak January blizzards, while the lower pair lifts keep spinning in the sheltered trees.",
    },
    pricing: {
      oneDayAdultYen: 5900,
      halfDayYen: 4500,
      twoDayYen: 11000,
      nightPassYen: null,
      childOneDayYen: 3800,
      seniorOneDayYen: 5900,
      seasonPassYen: 62000,
      seasonPassName: "Hakkoda Season Pass",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 4500,
      notes: "Single Ropeway ticket (¥1,400) or 5-ride Ropeway coupon (¥5,600) is also popular for backcountry touring laps.",
    },
    snowboarderIntel: {
      liftFleet: "1 101-Passenger Aerial Ropeway (2,459m length, 663m vertical in 10 mins) + 2 Base Pair Lifts",
      terrainPark: "100% natural terrain — pillows, wind-lips, snow monsters, and birch glades",
      flatSpotWarning: "High in deep powder on the lower run-outs of the 5km Forest Course — keep your board waxed and carry momentum through the lower flats!",
      treeRunRules: "Entire upper mountain is an open, uncompacted natural snowfield marked by bamboo poles; carry beacon, probe, and shovel (and hire a local guide if venturing onto the Central/Sukayu routes).",
    },
    monthlySnowfallCm: {
      dec: 260,
      jan: 410,
      feb: 360,
      mar: 240,
      apr: 80,
      peakBaseCm: 480,
    },
    onsenAndVillage: [
      {
        name: "Sukayu Onsen (Hiba Sennin Buro 1,000-Person Bath)",
        japaneseName: "酸ヶ湯温泉 (ヒバ千人風呂)",
        category: "Onsen",
        description:
          "Iconic 300-year-old all-cypress bathhouse just 5 minutes from Hakkoda Ropeway—and the finish line of the famous Sukayu backcountry route.",
        info: "07:00 – 17:30 · ¥1,000 Day Use",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Sukayu+Onsen+Aomori+Japan",
      },
      {
        name: "Jogakura Onsen Hotel",
        japaneseName: "ホテル城ヶ倉 (城ヶ倉温泉)",
        category: "Onsen",
        description:
          "Luxury beech-forest hot spring hotel at the base of the Jogakura backcountry route.",
        info: "11:30 – 16:00 · ¥1,000 Day Use",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hotel+Jogakura+Aomori+Japan",
      },
    ],
    signatureRuns: [
      {
        name: "Direct Course (ダイレクトコース · 3,500m)",
        level: "Advanced",
        note: "Steep, uncompacted 30° fall-line descent through snow monsters and deep glades straight under the ropeway.",
      },
      {
        name: "Forest Course (フォレストコース · 5,000m)",
        level: "Intermediate",
        note: "5km winding journey from the 1,324m summit through Juhyo fields and quiet birch forests.",
      },
      {
        name: "Central & Sukayu Backcountry Routes",
        level: "Advanced",
        note: "Legendary guided backcountry routes dropping all the way to Sukayu Onsen.",
      },
    ],
    coordinates: { lat: 40.679, lon: 140.8347 },
    elevation: { base: 661, top: 1324, vertical: 663 },
    terrain: {
      beginner: 15,
      intermediate: 35,
      advanced: 50,
      runs: 5,
      lifts: 3,
      treeRunsAllowed: true,
    },
    dayPassYen: 5900,
    fromTokyo: {
      durationMinutes: 245,
      summary: "Tohoku Shinkansen Hayabusa to Shin-Aomori Station (185 mins) + 60-min JR Bus Mizuumi-go to Hakkoda Ropeway",
      station: "Shin-Aomori Station / Aomori Station (新青森駅 / 青森駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Shin-Aomori+Station+Aomori+Japan",
    },
    vibeTags: ["480cm Base Depth", "Backcountry Mecca", "Sukayu Onsen"],
    bestFor: "Advanced powder riders and backcountry splitboarders chasing Japan's deepest snow",
    officialUrl: "https://www.hakkoda-ropeway.jp/",
  },
  {
    slug: "owani-onsen",
    name: "Owani Onsen Ski Resort",
    japaneseName: "大鰐温泉スキー場",
    region: "Aomori",
    area: "Owani / Tsugaru",
    description:
      "Opened in 1923 as one of Tohoku's oldest and most storied ski mountains, Owani Onsen Ski Resort offers 525m of vertical drop on Mt. Ajara with zero crowds, a ¥4,000 lift pass, a 4.2km Panorama Course, and an 800-year-old hot spring town and JR train station right at the base.",
    address: {
      postalCode: "〒038-0211",
      english: "Hikage-1-92 Owani, Owani-machi, Minamitsugaru-gun, Aomori 038-0211, Japan",
      japanese: "青森県南津軽郡大鰐町大字大鰐字日影1-92",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Owani+Onsen+Ski+Resort+Aomori+Japan",
    },
    heroImage: "/trail-maps/owani-onsen-photo.jpg",
    trailMapImage: "/trail-maps/owani-onsen.jpg",
    mapGallery: [
      {
        title: "Owani Onsen Ski Resort Official English Trail Map",
        caption:
          "Official English map showing the 4,200m Amaike Panorama Course, 2,100m International Course, Off-Piste Course, and Pair Lift network.",
        imageUrl: "/trail-maps/owani-onsen.jpg",
        badge: "Official English Map",
      },
      {
        title: "Owani Onsen 3D Aerial Mountain Layout",
        caption:
          "Aerial view of the 525m vertical drop from the Aomori Winery Hotel summit to the Amaike Ski Center.",
        imageUrl: "/trail-maps/owani-onsen-aerial.jpg",
        badge: "3D Aerial Layout",
      },
      {
        title: "Amaike Ski Center Base at Owani Onsen",
        caption:
          "Friendly local Tsugaru atmosphere with zero lift lines and authentic Aomori snow.",
        imageUrl: "/trail-maps/owani-onsen-photo.jpg",
        badge: "Base Lodge",
      },
    ],
    trailMapUrl: "https://www.owani-ski.com/",
    webcamUrl: "https://www.owani-ski.com/",
    operatingHours: {
      seasonWindow: "Late December – Late March",
      dayHours: "08:30 – 16:30",
      nightSkiing: "No night skiing",
      earlyBird: "08:30 Amaike Pair Lift opening",
      notes: "Great storm-day backup when high winds close the upper lifts at Hakkoda or Aomori Spring!",
    },
    pricing: {
      oneDayAdultYen: 4000,
      halfDayYen: 2900,
      twoDayYen: 7500,
      nightPassYen: null,
      childOneDayYen: 2100,
      seniorOneDayYen: 2900,
      seasonPassYen: 32000,
      seasonPassName: "Owani Onsen Season Pass",
      fullBoardRentalDayYen: 4000,
      wearRentalDayYen: 3500,
      notes: "At ¥4,000 for a full day (and ¥2,900 for seniors), Owani is one of the best-value 500m+ vertical mountains in Japan.",
    },
    snowboarderIntel: {
      liftFleet: "3 Pair Lifts (Amaike Pair, International Family Lift, Pair Lift No. 3 to summit)",
      terrainPark: "Natural side-hits, rollers, and old-school FIS competition fall-lines",
      flatSpotWarning: "Low — steep, continuous pitch down the main International and Maehira courses.",
      treeRunRules: "Official 'Off-piste Course' and uncompacted Kansawa/Takinosawa faces open off the top lift after snowfall.",
    },
    monthlySnowfallCm: {
      dec: 160,
      jan: 260,
      feb: 225,
      mar: 135,
      apr: 15,
      peakBaseCm: 250,
    },
    onsenAndVillage: [
      {
        name: "Wancome (鰐come) Owani Onsen Day Spa",
        japaneseName: "大鰐温泉 地域交流センター 鰐come",
        category: "Onsen",
        description:
          "Spacious cypress and stone outdoor hot spring complex right in front of JR Owani-Onsen Station.",
        info: "09:00 – 22:00 · ¥600 Adult",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Wancome+Owani+Onsen+Aomori",
      },
      {
        name: "Owani Onsen Moyashi Ramen (豆もやしラーメン)",
        japaneseName: "大鰐温泉もやしラーメン",
        category: "Food & Apres",
        description:
          "Local specialty ramen topped with crisp, geothermal-spring-grown Owani bean sprouts—a 400-year Tsugaru winter tradition.",
        info: "Outside Owani-Onsen Station",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Owani+Onsen+Station+Aomori",
      },
    ],
    signatureRuns: [
      {
        name: "Off-Piste Course & Kansawa Course",
        level: "Advanced",
        note: "Steep, ungroomed upper-mountain powder pitch dropping from the summit lift.",
      },
      {
        name: "Amaike International Course (2,100m)",
        level: "Intermediate",
        note: "Fast, sustained 2.1km competition cruiser from top to bottom.",
      },
      {
        name: "Amaike Panorama Course (4,200m)",
        level: "Beginner",
        note: "Scenic 4.2km forest run winding gently from the summit to the base.",
      },
    ],
    coordinates: { lat: 40.5076, lon: 140.5646 },
    elevation: { base: 190, top: 715, vertical: 525 },
    terrain: {
      beginner: 35,
      intermediate: 35,
      advanced: 30,
      runs: 9,
      lifts: 3,
      treeRunsAllowed: true,
    },
    dayPassYen: 4000,
    fromTokyo: {
      durationMinutes: 235,
      summary: "Tohoku Shinkansen Hayabusa to Shin-Aomori Station + JR Ou Main Line to Owani-Onsen Station + 5-min bus/taxi",
      station: "Owani-Onsen Station (大鰐温泉駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Owani-Onsen+Station+Aomori+Japan",
    },
    vibeTags: ["¥4,000 Day Pass", "525m Vertical", "800-Year Onsen Town"],
    bestFor: "Soul riders and storm-chasing travellers wanting authentic Tsugaru culture and zero crowds",
    officialUrl: "https://www.owani-ski.com/",
  },
];

/** Display order for prefectures. Only prefectures that actually have resorts are shown. */
const REGION_ORDER: Region[] = [
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

export const REGIONS: Region[] = REGION_ORDER.filter((region) =>
  RESORTS.some((resort) => resort.region === region)
);

export function getResortBySlug(slug: string): Resort | undefined {
  return RESORTS.find((r) => r.slug === slug);
}
