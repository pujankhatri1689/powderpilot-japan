import type { Resort } from "@/data/types";

export const SHIZUOKA_RESORTS: Resort[] = [
  {
    slug: "snow-town-yeti",
    name: "Snow Town Yeti",
    japaneseName: "スノータウン イエティ",
    region: "Shizuoka",
    area: "Mt. Fuji 2nd Station / Susono",
    description:
      "Legendary as Japan's earliest outdoor ski resort to open every season—typically welcoming skiers and snowboarders in mid-October—Snow Town Yeti is sculpted directly into the southern 2nd station of Mount Fuji at 1,300m–1,450m elevation. Riding down pristine white corduroy with the massive volcanic cone of Mt. Fuji towering directly above and Suruga Bay shimmering in the distance is an unforgettable early-season Japanese ritual.",
    address: {
      postalCode: "〒410-1231",
      english: "2428 Suyama, Susono-shi, Shizuoka 410-1231, Japan",
      japanese: "静岡県裾野市須山字藤原2428",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Snow+Town+Yeti+Shizuoka+Japan",
    },
    heroImage: "/trail-maps/snow-town-yeti-photo.jpg",
    trailMapImage: "/trail-maps/snow-town-yeti.jpg",
    mapGallery: [
      {
        title: "Snow Town Yeti 4-Course Layout Map",
        caption:
          "Official trail map showing the A, B, C, and D slopes carved along Mt. Fuji's 2nd station, with night lighting and snow fun parks.",
        imageUrl: "/trail-maps/snow-town-yeti.jpg",
        badge: "Official Trail Map",
      },
      {
        title: "Snowboarding Below Mount Fuji",
        caption:
          "Spectacular bluebird view of riders cruising the snow with Mt. Fuji's iconic peak in the background.",
        imageUrl: "/trail-maps/snow-town-yeti-photo.jpg",
        badge: "Mt. Fuji Peak View",
      },
    ],
    trailMapUrl: "https://www.yeti-resort.com/course/",
    webcamUrl: "https://www.yeti-resort.com/livecam/",
    operatingHours: {
      seasonWindow: "Mid October – Late March (Earliest in Japan)",
      dayHours: "09:00 – 17:00 (Weekends open 08:00)",
      nightSkiing: "15:30 – 22:00 (All-night skiing on select Saturdays)",
      earlyBird: "08:00 start on weekends",
      notes:
        "First resort in Japan to open for over 25 consecutive years using high-powered ICS snow machines!",
    },
    pricing: {
      oneDayAdultYen: 4300,
      halfDayYen: 3500,
      twoDayYen: 8000,
      nightPassYen: 2800,
      childOneDayYen: 3300,
      seniorOneDayYen: 3300,
      seasonPassYen: 42000,
      seasonPassName: "Yeti Season Pass",
      fullBoardRentalDayYen: 4800,
      wearRentalDayYen: 3800,
      notes: "All-night ski pass available on select holiday weekends.",
    },
    snowboarderIntel: {
      liftFleet: "2 Pair Lifts + 2 Moving Carpets / Conveyor Lifts",
      terrainPark: "Jib Park & Kicker line on Course B",
      flatSpotWarning: "Very Low — consistent gentle incline",
      treeRunRules:
        "Strictly on-piste only. Natural volcanic terrain outside courses is strictly protected national parkland.",
    },
    monthlySnowfallCm: {
      dec: 15,
      jan: 30,
      feb: 35,
      mar: 20,
      apr: 5,
      peakBaseCm: 100,
    },
    onsenAndVillage: [
      {
        name: "Gotemba Kogen Tokinosumika Onsen (Chame-no-Yu)",
        japaneseName: "御殿場高原 時之栖 茶目湯殿",
        category: "Onsen",
        description:
          "Spectacular open-air onsen with direct unobstructed views of Mount Fuji, 30 mins down the mountain road.",
        info: "10:00 – 21:00 · ¥1,500 Adult",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Tokinosumika+Chame+Yudono+Gotemba",
      },
      {
        name: "Yeti Center House Restaurant",
        japaneseName: "イエティ センターハウス",
        category: "Food & Apres",
        description:
          "Fujinomiya Yakisoba, Mt. Fuji curry with volcanic rice volcano, and steaming tonjiru pork soup at the base.",
        info: "Base Terminal · 09:00 – 21:00",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Snow+Town+Yeti+Center+House",
      },
    ],
    signatureRuns: [
      {
        name: "Course A (Main Slope · 1,000m)",
        level: "Beginner",
        note: "Japan's earliest open ski run, descending 1,000m under full floodlights with Mt. Fuji towering above.",
      },
      {
        name: "Course B (Terrain Park Slope)",
        level: "Intermediate",
        note: "Medium-grade pitch featuring rails, boxes, and banked turns.",
      },
      {
        name: "Course C & D (Upper Carving)",
        level: "Intermediate",
        note: "Quiet cruising slopes facing the twinkling lights of Suruga Bay and Mishima city.",
      },
    ],
    coordinates: {
      lat: 35.2970,
      lon: 138.7885,
    },
    elevation: {
      base: 1300,
      top: 1450,
      vertical: 150,
    },
    terrain: {
      beginner: 50,
      intermediate: 40,
      advanced: 10,
      runs: 4,
      lifts: 4,
      treeRunsAllowed: false,
    },
    dayPassYen: 4300,
    fromTokyo: {
      durationMinutes: 110,
      summary:
        "Tokaido Shinkansen to Mishima Station (~45m) + direct Yeti Resort Liner express bus (~60m), or direct highway bus from Shinjuku",
      station: "JR Mishima Station (三島駅) / Gotemba Station",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Mishima+Station+Shizuoka+Japan",
    },
    vibeTags: [
      "Mt. Fuji 2nd Station",
      "Mid-October Opener (Earliest in Japan)",
      "Suruga Bay Views",
      "All-Night Skiing",
    ],
    bestFor:
      "Snowboarders itching for first tracks in October and riding directly on the slopes of Mount Fuji",
    officialUrl: "https://www.yeti-resort.com/",
  },
];
