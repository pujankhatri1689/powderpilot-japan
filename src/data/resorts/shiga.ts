import type { Resort } from "@/data/types";

export const SHIGA_RESORTS: Resort[] = [
  {
    slug: "biwako-valley",
    name: "Biwako Valley",
    japaneseName: "びわ湖バレイ",
    region: "Shiga",
    area: "Otsu / Lake Biwa",
    description:
      "Perched 1,174m high in the Hira Mountains overlooking Lake Biwa (Japan's largest freshwater lake), Biwako Valley is the Kansai region's most famous alpine spectacle, just 40 minutes from Kyoto. Accessed via Japan's fastest 121-passenger ropeway rising from 300m to 1,100m in just 4 minutes, it features 9 varied ski courses, the stylish Biwako Terrace deck, and surreal vistas of blue lake water surrounded by snow.",
    address: {
      postalCode: "〒520-0514",
      english: "1547-1 Kido, Otsu-shi, Shiga 520-0514, Japan",
      japanese: "滋賀県大津市木戸1547-1",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Biwako+Valley+Shiga+Japan",
    },
    heroImage: "/trail-maps/biwako-valley-photo.jpg",
    trailMapImage: "/trail-maps/biwako-valley.jpg",
    mapGallery: [
      {
        title: "Biwako Valley Official Gelande & Lift Map",
        caption:
          "Official trail map showing the 121-passenger Ropeway, Mt. Horai (1,174m), Mt. Uchimi (1,108m), Champion course, and panoramic lake-view slopes.",
        imageUrl: "/trail-maps/biwako-valley.jpg",
        badge: "Official Trail Map",
      },
      {
        title: "Biwako Terrace & Lake Biwa Panorama",
        caption:
          "Breathtaking view across Japan's largest lake from the 1,100m Biwako Terrace snow observation deck.",
        imageUrl: "/trail-maps/biwako-valley-photo.jpg",
        badge: "Lake Biwa Terrace View",
      },
    ],
    trailMapUrl: "https://www.biwako-valley.com/winter_course/",
    webcamUrl: "https://www.biwako-valley.com/livecam/",
    operatingHours: {
      seasonWindow: "Late December – Mid March",
      dayHours: "08:30 – 16:30 (Weekends open 08:00)",
      nightSkiing: "No night skiing",
      earlyBird: "08:00 Ropeway start on weekends & holidays",
      notes:
        "Kansai's fastest ropeway whisks riders from valley floor to 1,100m alpine slopes in just 4 minutes.",
    },
    pricing: {
      oneDayAdultYen: 6500,
      halfDayYen: 5500,
      twoDayYen: 12000,
      nightPassYen: null,
      childOneDayYen: 4000,
      seniorOneDayYen: 5500,
      seasonPassYen: 58000,
      seasonPassName: "Biwako Valley Season Pass",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 4500,
      notes: "Lift pass includes return ropeway fare.",
    },
    snowboarderIntel: {
      liftFleet:
        "1 121-Passenger High-Speed Ropeway + 2 Quad Lifts + 5 Pair Lifts",
      terrainPark:
        "Snow Park with rails, boxes, and beginner jump lines on Horai slope",
      flatSpotWarning: "Low — natural ridge fall-line with good pitch",
      treeRunRules:
        "Strictly on-piste only. Steep rocky gullies outside courses are closed for safety.",
    },
    monthlySnowfallCm: {
      dec: 95,
      jan: 180,
      feb: 160,
      mar: 80,
      apr: 10,
      peakBaseCm: 180,
    },
    onsenAndVillage: [
      {
        name: "Ogoto Onsen (Yuzanso)",
        japaneseName: "おごと温泉 湯元館 / 雄山荘",
        category: "Onsen",
        description:
          "Historic 1,200-year-old hot spring village with rooftop open-air baths gazing over Lake Biwa, 20 mins south along JR Kosei Line.",
        info: "11:00 – 21:00 · ¥1,500 Day Use",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Ogoto+Onsen+Yuzanso+Shiga",
      },
      {
        name: "Biwako Terrace Cafe 360",
        japaneseName: "びわ湖テラス Cafe 360",
        category: "Food & Apres",
        description:
          "Gourmet dining, Omi beef stew curry, and artisanal hot chocolate served in an architectural wood-and-glass mountain pavilion with 360° lake panoramas.",
        info: "Ropeway Summit · 09:30 – 16:00",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Biwako+Terrace+Cafe+Shiga",
      },
    ],
    signatureRuns: [
      {
        name: "Horai Panorama Course (ホーライパノラマゲレンデ)",
        level: "Intermediate",
        note: "Iconic scenic cruiser dropping straight toward the glistening blue waters of Lake Biwa.",
      },
      {
        name: "Champion Course (チャンピオンコース)",
        level: "Advanced",
        note: "Steep 30° natural pitch on Mt. Horai holding fresh snow after storm days.",
      },
      {
        name: "Uchimi Slopes (打見ゲレンデ)",
        level: "Beginner",
        note: "Gentle, protected beginner slope right outside the Ropeway summit terminal.",
      },
    ],
    coordinates: {
      lat: 35.1950,
      lon: 135.9180,
    },
    elevation: {
      base: 1100,
      top: 1174,
      vertical: 74,
    },
    terrain: {
      beginner: 35,
      intermediate: 45,
      advanced: 20,
      runs: 9,
      lifts: 7,
      treeRunsAllowed: false,
    },
    dayPassYen: 6500,
    fromTokyo: {
      durationMinutes: 160,
      summary:
        "Tokaido Shinkansen to Kyoto Station (~135m) + JR Kosei Line to Shiga Station (40m) + 10-min bus to Biwako Valley Ropeway base",
      station: "JR Shiga Station (志賀駅) / Kyoto Station (京都駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Shiga+Station+Shiga+Japan",
    },
    vibeTags: [
      "Lake Biwa Panoramas",
      "Biwako Terrace",
      "40m from Kyoto",
      "121-Person Ropeway",
    ],
    bestFor:
      "Travelers in Kyoto/Osaka wanting effortless alpine access, world-class lake photography, and scenic cruising",
    officialUrl: "https://www.biwako-valley.com/",
  },
];
