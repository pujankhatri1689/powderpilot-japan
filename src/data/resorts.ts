export type Region = "Nagano" | "Niigata" | "Gunma";

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
];

export const REGIONS: Region[] = ["Nagano", "Niigata", "Gunma"];

export function getResortBySlug(slug: string): Resort | undefined {
  return RESORTS.find((r) => r.slug === slug);
}
