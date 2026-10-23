export type Region = "Nagano" | "Niigata" | "Gunma";

export interface MapSlide {
  title: string;
  caption: string;
  imageUrl: string;
  badge?: string;
}

export interface Resort {
  slug: string;
  name: string;
  japaneseName: string;
  region: Region;
  area: string;
  description: string;
  /** High-definition scenic mountain / snow photo URL */
  heroImage: string;
  /** Primary local path to the official HD resort trail / course map image */
  trailMapImage: string;
  /** Multi-image swipe gallery: official trail maps (including sub-areas) & mountain views */
  mapGallery: MapSlide[];
  /** Direct link to official trail / course map */
  trailMapUrl: string;
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
    heroImage:
      "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=2000&q=90",
    trailMapImage: "/trail-maps/hakuba-happo-one.jpg",
    mapGallery: [
      {
        title: "Official Happo-One Full Trail & Course Map",
        caption:
          "Complete trail map covering Kurobishi, Usagidaira, Riesen Slalom, Skyline, and Sakka base.",
        imageUrl: "/trail-maps/hakuba-happo-one.jpg",
        badge: "Official HD Map",
      },
      {
        title: "Happo-One High-Alpine Face Panorama",
        caption:
          "Actual mountain photograph showing the 1,071m vertical drop from Happo-ike Sanso (1,831m) to town.",
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
      seasonPassName: "Happo-One Season Pass (or Epic Pass / Hakuba Valley All-Mountain Pass)",
      fullBoardRentalDayYen: 6500,
      wearRentalDayYen: 5000,
      notes: "Online Webket reload saves ¥300–¥500 off window rates. Epic Pass holders get 5 consecutive days across Hakuba Valley.",
    },
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
    heroImage:
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=2000&q=90",
    trailMapImage: "/trail-maps/hakuba-cortina.jpg",
    mapGallery: [
      {
        title: "Hakuba Cortina & Hakuba Norikura Combined HD Map (2480×1748)",
        caption:
          "High-definition interconnected map showing Cortina's steep Hiedayama bowls & tree zones (right) and Hakuba Norikura (left).",
        imageUrl: "/trail-maps/hakuba-cortina.jpg",
        badge: "Ultra-HD Dual Resort Map",
      },
      {
        title: "Deep Tree Riding Zones",
        caption:
          "Cortina's famous self-responsibility tree zones funnel right back to the main Hotel Green Plaza bowl.",
        imageUrl:
          "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=2000&q=90",
        badge: "Tree Riding",
      },
    ],
    trailMapUrl: "https://www.hgp.co.jp/cortina/ski/en/course/",
    operatingHours: {
      seasonWindow: "Mid-December – Late March",
      dayHours: "08:30 – 16:30",
      nightSkiing: "17:00 – 20:00 (Ikenota Slope — check weekend/peak schedule)",
      earlyBird: "No early bird; line up at Lift 2 by 08:00 on powder mornings!",
      notes: "Joint lift pass automatically includes neighboring Hakuba Norikura Onsen Ski Resort.",
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
      notes: "1-Day pass covers both Hakuba Cortina and Hakuba Norikura (16+16 courses combined).",
    },
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
    heroImage:
      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&w=2000&q=90",
    trailMapImage: "/trail-maps/nozawa-onsen.jpg",
    mapGallery: [
      {
        title: "Nozawa Onsen 2026 Full HD Ski Area Map (3000×2122)",
        caption:
          "Crystal-clear 3000px official trail map with all 46 numbered courses, Yamabiko tree zones, and village shuttle stops.",
        imageUrl: "/trail-maps/nozawa-onsen.jpg",
        badge: "3000px Ultra-HD Map",
      },
      {
        title: "Mountain Relief & Boundary Map",
        caption:
          "Clean topographic view highlighting the upper Yamabiko self-responsibility tree zone (yellow) at 1,650m.",
        imageUrl: "/trail-maps/nozawa-onsen.png",
        badge: "Topographic Relief",
      },
    ],
    trailMapUrl: "https://en.nozawaski.com/the-mountain/trail-map/",
    operatingHours: {
      seasonWindow: "Late November – Early May (Golden Week)",
      dayHours: "08:30 – 16:30 ( Nagasaka & Hikage Gondolas)",
      nightSkiing: "16:30 – 20:00 (Nagasaka Slope — Saturdays & peak holidays)",
      earlyBird: "08:10 early gondola load on peak mid-winter weekends",
      notes: "Free Yu-Road moving walkway connects the hot spring village directly to Hikage base.",
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
      notes: "Salomon Station at Nagasaka Gondola base offers high-performance powder board demos.",
    },
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
    heroImage:
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=2000&q=90",
    trailMapImage: "/trail-maps/shiga-kogen.jpg",
    mapGallery: [
      {
        title: "Map 1: Shiga Kogen Central Area (13 Interconnected Resorts)",
        caption:
          "Covers Ichinose, Takamagahara, Higashitateyama, Terakoya (2,125m), Giant, Sun Valley, and Maruike.",
        imageUrl: "/trail-maps/shiga-kogen.jpg",
        badge: "Central Area Map",
      },
      {
        title: "Map 2: Shiga Kogen Yakebitaiyama & Okushiga Sector",
        caption:
          "Detailed map of Yakebitaiyama's two gondolas, the 1998 Olympic Course, and the new 'Yakebi Coast' & 'Yakebi Valley' powder tree zones.",
        imageUrl: "/trail-maps/shiga-kogen-yakebitai.jpg",
        badge: "Yakebitaiyama Sector Map",
      },
    ],
    trailMapUrl: "https://shigakogen-ski.or.jp/english/",
    operatingHours: {
      seasonWindow: "Late November – Late May (Yokoteyama open into May)",
      dayHours: "08:30 – 16:30",
      nightSkiing: "18:00 – 21:00 (Ichinose Family, Diamond, Takamagahara & Yakebitai)",
      earlyBird: "06:30 'First Track' Yakebitaiyama Gondola on select dates",
      notes: "18 ski areas connected by slopes and free ski-in shuttle buses with your lift pass.",
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
      notes: "All-Area Pass covers all 48 lifts across Central, Yakebitaiyama, Okushiga, and Yokoteyama.",
    },
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
    heroImage:
      "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=2000&q=90",
    trailMapImage: "/trail-maps/myoko-suginohara.jpg",
    mapGallery: [
      {
        title: "Myoko Suginohara Official HD Trail Map (1120×1575)",
        caption:
          "Shows the 3,074m Suginohara Gondola, Mitahara High-Speed Lifts, and the 8.5km top-to-bottom run from 1,855m.",
        imageUrl: "/trail-maps/myoko-suginohara.jpg",
        badge: "Official HD Map",
      },
      {
        title: "Mt. Myoko Deep Powder Cruiser",
        caption:
          "Wide-open grooming and deep tree stashes overlooking frozen Lake Nojiri.",
        imageUrl:
          "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=2000&q=90",
        badge: "Mountain View",
      },
    ],
    trailMapUrl: "https://www.princehotels.com/en/ski/myoko_kogen/",
    operatingHours: {
      seasonWindow: "Late December – Late March",
      dayHours: "08:30 – 16:00 (Gondola opens 08:30)",
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
    heroImage:
      "https://images.unsplash.com/photo-1522056615691-da7b8106c665?auto=format&fit=crop&w=2000&q=90",
    trailMapImage: "/trail-maps/lotte-arai.webp",
    mapGallery: [
      {
        title: "Lotte Arai Official Freeride Zones & Trail Map (1800×2592)",
        caption:
          "Purple shaded zones mark the 14 patrol-controlled off-piste freeride bowls (Zendana Bowl, Big Bowl, Funaishi, Happy Place, Mamushi).",
        imageUrl: "/trail-maps/lotte-arai.webp",
        badge: "Ultra-HD Freeride Map",
      },
      {
        title: "Mt. Okenashi Alpine Bowl View",
        caption:
          "Deep Sea of Japan coastal storms bury Arai's upper alpine bowls in 15+ meters of snow each winter.",
        imageUrl:
          "https://images.unsplash.com/photo-1522056615691-da7b8106c665?auto=format&fit=crop&w=2000&q=90",
        badge: "Alpine Bowls",
      },
    ],
    trailMapUrl: "https://www.lottehotel.com/arai-resort/en",
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
    heroImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=90",
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
        title: "Kagura High-Alpine Ridge View",
        caption:
          "Sitting up at 1,845m, Kagura catches cold Siberian winds and stays open until mid-May.",
        imageUrl:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=90",
        badge: "Summit View",
      },
    ],
    trailMapUrl: "https://www.princehotels.com/en/ski/kagura/",
    operatingHours: {
      seasonWindow: "Late November – Mid-May (Longest season in Niigata)",
      dayHours: "08:00 – 16:30 (Weekends open 07:30 at Mitsumata Ropeway)",
      nightSkiing: "No night skiing at Kagura (available at neighboring Naeba)",
      earlyBird: "07:30 Saturday/Sunday Mitsumata Ropeway upload",
      notes: "Kagura Pair Lift No. 5 ('the BC gate lift') opens Jan 1 – mid-April.",
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
    heroImage:
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=2000&q=90",
    trailMapImage: "/trail-maps/gala-yuzawa.jpg",
    mapGallery: [
      {
        title: "GALA Yuzawa Full HD Trail Map (2280×1618)",
        caption:
          "Shows Southern Area (ungroomed Bronco powder runs), Central Area, Northern Area, and connection to Ishiuchi Maruyama.",
        imageUrl: "/trail-maps/gala-yuzawa.jpg",
        badge: "Official 2280px HD Map",
      },
      {
        title: "GALA Central Area Aerial View",
        caption:
          "Aerial view of Rest House 'Cheers' at the top of the Diligence Gondola and the main Central Area bowls.",
        imageUrl: "/trail-maps/gala-yuzawa-center.jpg",
        badge: "Aerial Slope Photo",
      },
    ],
    trailMapUrl: "https://gala.co.jp/winter/english/gelande/",
    operatingHours: {
      seasonWindow: "Mid-December – Early May",
      dayHours: "08:00 – 16:30",
      nightSkiing: "No night skiing (Spa Gala-no-Yu open until 19:00)",
      earlyBird: "First Shinkansen from Tokyo arrives right as the Gondola opens at 08:00",
      notes: "Connected to Yuzawa Kogen and Ishiuchi Maruyama via the 'YUZAWA SNOW LINK' তিন-mountain pass.",
    },
    pricing: {
      oneDayAdultYen: 6500,
      halfDayYen: 5200,
      twoDayYen: 11500,
      nightPassYen: null,
      childOneDayYen: 3250,
      seniorOneDayYen: 5800,
      seasonPassYen: 63000,
      seasonPassName: "GALA Yuzawa Season Locker & Pass",
      fullBoardRentalDayYen: 6000,
      wearRentalDayYen: 5000,
      notes: "JR Tokyo Wide Pass holders get special discounted Shinkansen + Lift bundles from Tokyo.",
    },
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
    heroImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90",
    trailMapImage: "/trail-maps/tanigawadake-tenjindaira.jpg",
    mapGallery: [
      {
        title: "Map 1: Tenjindaira Upper Alpine Bowl & Lifts (2560×1825 HD)",
        caption:
          "Detailed course map of Mt. Tenjin (1,502m), Mt. Takakura (1,449m), Tenjin Touge Pair Lift, and Tajirisawa courses.",
        imageUrl: "/trail-maps/tanigawadake-tenjindaira.jpg",
        badge: "2560px Upper Bowl Map",
      },
      {
        title: "Map 2: Full 3D Mt. Tanigawadake & Tajirisawa Valley Descent (2000×1413 HD)",
        caption:
          "Shows the full 3D topography from the 1,977m twin peaks down the 4km Tajirisawa valley run to Doaiguti Ropeway base.",
        imageUrl: "/trail-maps/tanigawadake-tenjindaira-2.jpg",
        badge: "2000px 3D Relief Map",
      },
    ],
    trailMapUrl: "https://tanigawadake-joch.com/en/",
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
    heroImage:
      "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=2000&q=90",
    trailMapImage: "/trail-maps/kawaba.jpg",
    mapGallery: [
      {
        title: "Kawaba Numbered Course & Park Map",
        caption:
          "Shows all 10 numbered runs, Crystal Express summit (1,870m), Flux Park, Murasaki Natural Park, and Mogul Course.",
        imageUrl: "/trail-maps/kawaba.jpg",
        badge: "Course & Park Map",
      },
      {
        title: "Kawaba High-Resolution Mountain Illustration (1512×1145)",
        caption:
          "Official illustrated topography showing the ridges, forest glades, and the iconic 8-story Kawaba City base building.",
        imageUrl: "/trail-maps/kawaba-illustration.jpg",
        badge: "1512px Mountain Relief",
      },
    ],
    trailMapUrl: "https://www.kawaba.co.jp/snow/gelande/",
    operatingHours: {
      seasonWindow: "Early December – Mid-April",
      dayHours: "08:30 – 16:00 (Weekends & holidays open 08:00)",
      nightSkiing: "No night skiing",
      earlyBird: "07:30 'First Track' Cat Skiing available by reservation!",
      notes: "'Off the Piste' (OTP) tree zones require a quick safety lecture and armband at the base.",
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
    heroImage:
      "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=2000&q=90",
    trailMapImage: "/trail-maps/marunuma-kogen.jpg",
    mapGallery: [
      {
        title: "Marunuma Kogen Official HD Slope Map (2339×1654)",
        caption:
          "Detailed high-res map showing the 2,000m Ropeway Summit, Silver & Gold steep courses, and Taro Tamai's Frozen Wave Park.",
        imageUrl: "/trail-maps/marunuma-kogen.jpg",
        badge: "2339px Ultra-HD Map",
      },
      {
        title: "Marunuma Live Lift & Course Layout Map",
        caption:
          "Clean vertical schematic of the Nikko-Shirane Ropeway and numbered chairlifts.",
        imageUrl: "/trail-maps/marunuma-kogen.webp",
        badge: "Lift Schematic",
      },
    ],
    trailMapUrl: "https://www.marunuma.jp/winter/course-map/",
    operatingHours: {
      seasonWindow: "Late November – Early May",
      dayHours: "08:15 – 16:30 (Nikko-Shirane Ropeway)",
      nightSkiing: "No night skiing (Center Station onsen open until 17:30)",
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
