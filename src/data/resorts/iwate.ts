import type { Resort } from "@/data/types";

export const IWATE_RESORTS: Resort[] = [
  {
    slug: "geto-kogen",
    name: "Geto Kogen",
    japaneseName: "夏油高原スキー場（げとうこうげん）",
    region: "Iwate",
    area: "Kitakami Mountains",
    description:
      "Crowned Japan's 'King of Snow' (豪雪), Geto Kogen sits in a massive snow-pocket receiving over 15–17 meters of snow each winter. Celebrated worldwide for its 14 officially managed and named Tree Run zones (Shooter, Heart, Rabbit, Extreme, Cascade), paired with 2 quad gondolas.",
    address: {
      postalCode: "〒024-0322",
      english: "Iwasaki Shinden, Geto Onsen, Kitakami-shi, Iwate 024-0322, Japan",
      japanese: "岩手県北上市和賀町岩崎新田夏油温泉",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Geto+Kogen+Resort+Iwate+Japan",
    },
    heroImage: "/trail-maps/geto-kogen-photo.jpg",
    trailMapImage: "/trail-maps/geto-kogen.jpg",
    mapGallery: [
      {
        title: "Geto Kogen 14 Tree Run Zones Map",
        caption:
          "Official trail map highlighting all 14 designated Tree Run areas and Gondolas 1 & 2.",
        imageUrl: "/trail-maps/tanigawadake-tenjindaira.jpg",
        badge: "14 Tree Run Zones",
      },
      {
        title: "King of Snow Deep Powder Refills",
        caption: "Waist-deep powder spray inside the renowned Shooter tree course.",
        imageUrl: "/trail-maps/tanigawadake-tenjindaira-2.jpg",
        badge: "Heavy Snow Capital",
      },
    ],
    trailMapUrl: "https://www.getokogen.com/winter/course/index.html",
    webcamUrl: "https://www.getokogen.com/winter/livecamera/index.html",
    operatingHours: {
      seasonWindow: "Late November – Early May (Gondola operates into Golden Week)",
      dayHours: "08:30 – 16:30",
      nightSkiing: "16:30 – 19:30 (Selected Saturdays & holidays on A1)",
      earlyBird: "08:00 first tracks on high-season weekends",
      notes: "Gondola 1 and Gondola 2 provide non-stop warm laps even during intense Tohoku blizzards.",
    },
    pricing: {
      oneDayAdultYen: 6000,
      halfDayYen: 5000,
      twoDayYen: 11200,
      nightPassYen: 2200,
      childOneDayYen: 3200,
      seniorOneDayYen: 5200,
      seasonPassYen: 68000,
      seasonPassName: "Geto Kogen Season Pass",
      fullBoardRentalDayYen: 5800,
      wearRentalDayYen: 4000,
      notes: "On-site Geto Camp 88 dorms and semi-private bunks make slope-side stays very affordable.",
    },
    snowboarderIntel: {
      liftFleet:
        "5 lifts featuring 2 high-speed quad gondolas (Gondola 1: 1,756m, Gondola 2: 1,123m) and 1 hooded quad.",
      terrainPark: "Geto Terrain Park featuring beginner to advanced jumps, hips, rails, and wallrides.",
      flatSpotWarning:
        "The stream bottom exit of the Shooter tree runs connects to a cat-track; keep high speed to glide back to Gondola 1.",
      treeRunRules:
        "Geto actively promotes tree riding! 14 official tree zones are marked with entry signs and difficulty ratings. Helmet and mobile phone are mandatory.",
    },
    monthlySnowfallCm: {
      dec: 330,
      jan: 410,
      feb: 340,
      mar: 210,
      apr: 80,
      peakBaseCm: 440,
    },
    signatureRuns: [
      {
        name: "Shooter 1 & 2 (Tree Run)",
        level: "Advanced",
        note: "Steep natural ridge and bowl glade filled with deep blower snow and natural hits.",
      },
      {
        name: "Heart (Tree Run)",
        level: "Advanced",
        note: "Fun flowing natural halfpipe gully course lined with birch trees and pillow drops.",
      },
      {
        name: "A1 Main Course",
        level: "Intermediate",
        note: "3,000m long continuous high-speed carving cruiser served directly by Gondola 1.",
      },
    ],
    coordinates: {
      lat: 39.2155,
      lon: 140.8933,
    },
    elevation: {
      base: 640,
      top: 1070,
      vertical: 430,
    },
    terrain: {
      beginner: 20,
      intermediate: 40,
      advanced: 40,
      runs: 28,
      lifts: 5,
      treeRunsAllowed: true,
    },
    dayPassYen: 6000,
    fromTokyo: {
      durationMinutes: 190,
      summary:
        "Tohoku Shinkansen Hayabusa from Tokyo to Kitakami Station (~135m) + free Geto Kogen resort shuttle bus (~50m)",
      station: "JR Kitakami Station (北上駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Kitakami+Station+Iwate+Japan",
    },
    vibeTags: ["King of Snow", "14 Tree Run Zones", "2 Quad Gondolas", "Long Season (May)"],
    bestFor:
      "Powder riders who want the most progressive, legally encouraged tree run system in Japan with endless storm refills",
    officialUrl: "https://www.getokogen.com/winter/",
  },
  {
    slug: "appi-kogen",
    name: "Appi Kogen",
    japaneseName: "安比高原スキー場（あっぴこうげん）",
    region: "Iwate",
    area: "Hachimantai / Mt. Maemori",
    description:
      "Known as the 'Aspen of Japan', Appi Kogen is Tohoku's premier luxury ski resort. Boasting 828m of vertical drop across 21 wide courses, 2 long gondolas, and extensive north-facing tree run zones that preserve ultra-dry 'Aspirin Snow'.",
    address: {
      postalCode: "〒028-7306",
      english: "Appi Kogen, Hachimantai-shi, Iwate 028-7306, Japan",
      japanese: "岩手県八幡平市安比高原",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Appi+Kogen+Ski+Resort+Iwate+Japan",
    },
    heroImage: "/trail-maps/appi-kogen-photo.jpg",
    trailMapImage: "/trail-maps/appi-kogen.jpg",
    mapGallery: [
      {
        title: "Appi Kogen All-Mountain Trail Map",
        caption: "Shows Mt. Maemori, Mt. Nishimori, the 2 gondolas, and 8 Off-Piste Tree Run zones.",
        imageUrl: "/trail-maps/zao-onsen.jpg",
        badge: "Official Map",
      },
      {
        title: "Appi Grand Hotel Base & North-Facing Slopes",
        caption: "Panoramic view of the golden Appi Grand tower and wide groomed cruisers.",
        imageUrl: "/trail-maps/zao-onsen-photo.jpg",
        badge: "Aspen of Japan",
      },
    ],
    trailMapUrl: "https://www.appi-japan.com/winter-season/lift-trail-map/",
    webcamUrl: "https://www.appi-japan.com/winter-season/live-camera/",
    operatingHours: {
      seasonWindow: "Early December – Early May",
      dayHours: "08:30 – 16:00",
      nightSkiing: "16:00 – 20:00 (Floodlit Shirakaba and Central courses)",
      earlyBird: "07:30 First Track Gondola on weekend mornings",
      notes: "Appi Gondola stretches 2,820m from the hotel base to the summit of Mt. Maemori.",
    },
    pricing: {
      oneDayAdultYen: 7000,
      halfDayYen: 5800,
      twoDayYen: 13200,
      nightPassYen: 2800,
      childOneDayYen: 4200,
      seniorOneDayYen: 6000,
      seasonPassYen: 88000,
      seasonPassName: "Appi Kogen Season Pass",
      fullBoardRentalDayYen: 6500,
      wearRentalDayYen: 4500,
      notes: "Children ride free during select kids-week promotions; luxury ski-in/ski-out hotel packages available.",
    },
    snowboarderIntel: {
      liftFleet:
        "11 modern lifts including the 2,820m Appi Gondola, 2,120m Sailer Gondola, and 4 high-speed quads.",
      terrainPark: "Salomon Snowpark with jump lines, boxes, rails, and beginner bank tracks.",
      flatSpotWarning:
        "The long Yamabato run has gentle mid-sections—keep your board running cleanly on the cat-tracks.",
      treeRunRules:
        "8 designated Off-Piste Tree Zones (Attack, Bravo, Cruise, Dragon, etc.) accessible with helmet and safety acknowledgment.",
    },
    monthlySnowfallCm: {
      dec: 220,
      jan: 290,
      feb: 250,
      mar: 160,
      apr: 50,
      peakBaseCm: 320,
    },
    signatureRuns: [
      {
        name: "Yamabato Course",
        level: "Beginner",
        note: "One of Japan's longest continuous beginner cruisers at 5,500m from summit to hotel base.",
      },
      {
        name: "Bravo & Attack (Tree Run)",
        level: "Advanced",
        note: "Steep north-facing tree run on Mt. Nishimori with protected dry Aspirin Snow.",
      },
      {
        name: "Hayabusa Course",
        level: "Intermediate",
        note: "Fast 3,000m carving piste with consistent 25-degree pitch and sweeping mountain views.",
      },
    ],
    coordinates: {
      lat: 39.9995,
      lon: 140.9705,
    },
    elevation: {
      base: 476,
      top: 1304,
      vertical: 828,
    },
    terrain: {
      beginner: 30,
      intermediate: 40,
      advanced: 30,
      runs: 21,
      lifts: 11,
      treeRunsAllowed: true,
    },
    dayPassYen: 7000,
    fromTokyo: {
      durationMinutes: 170,
      summary:
        "Tohoku Shinkansen Hayabusa from Tokyo to Morioka Station (~130m) + direct Appi Kogen Resort Bus (~40m)",
      station: "JR Morioka Station (盛岡駅) / JR Appi-Kogen Station",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Morioka+Station+Iwate+Japan",
    },
    vibeTags: ["828m Vertical", "5.5km Cruiser", "2 Gondolas", "Aspirin Snow"],
    bestFor:
      "Riders who love long continuous corduroy cruisers, high-speed lift comfort, luxury hotels, and north-facing dry powder glades",
    officialUrl: "https://www.appi-japan.com/",
  },
];
