import type { Resort } from "@/data/types";

export const GIFU_RESORTS: Resort[] = [
  {
    slug: "takasu-snow-park",
    name: "Takasu Snow Park",
    japaneseName: "高鷲スノーパーク（たかすスノーパーク）",
    region: "Gifu",
    area: "Gujo Hachiman / Oku-Mino",
    description:
      "The undisputed snowboard Mecca of Central Japan. Perched on Mt. Dainichigatake at 1,550m, Takasu is powered by a massive 15-passenger SP Gondola and connects at the summit with Dynaland to offer 43km of terrain. Renowned for its world-cup size halfpipe and premier freestyle terrain park.",
    address: {
      postalCode: "〒501-5305",
      english: "3086-1 Nishibora, Takasu-cho, Gujo-shi, Gifu 501-5305, Japan",
      japanese: "岐阜県郡上市高鷲町西洞3086-1",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Takasu+Snow+Park+Gifu+Japan",
    },
    heroImage: "/trail-maps/takasu-snow-park-photo.jpg",
    trailMapImage: "/trail-maps/takasu-snow-park.jpg",
    mapGallery: [
      {
        title: "Takasu & Dynaland Interconnected Map",
        caption: "Shows the 15-person Gondola and the summit ridge connecting directly into Dynaland.",
        imageUrl: "/trail-maps/takasu-snow-park.jpg",
        badge: "Dual-Mountain Map",
      },
      {
        title: "World-Class Halfpipe & Park Lines",
        caption: "Riders dropping into the Olympic-standard superpipe with the Oku-Mino peaks behind.",
        imageUrl: "/trail-maps/takasu-snow-park-photo.jpg",
        badge: "Snowboard Mecca",
      },
    ],
    trailMapUrl: "https://www.takasu.gr.jp/course/index.html",
    webcamUrl: "https://www.takasu.gr.jp/live/index.html",
    operatingHours: {
      seasonWindow: "Early December – Late April",
      dayHours: "08:00 – 16:30 (Weekends open 07:30)",
      nightSkiing: "Head to connected Dynaland for 'Yorudyna' night skiing until 23:00",
      earlyBird: "07:30 weekend early bird lift operation",
      notes: "A Takasu & Dynaland Joint Pass allows unlimited crossing between both mountains at the ridge.",
    },
    pricing: {
      oneDayAdultYen: 6000,
      halfDayYen: 5000,
      twoDayYen: 11000,
      nightPassYen: 3300,
      childOneDayYen: 2600,
      seniorOneDayYen: 4800,
      seasonPassYen: 68000,
      seasonPassName: "Takasu Mountains Season Pass",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 4000,
      notes: "Joint Pass (+¥1,000) unlocks Dynaland's 20 additional courses on the same ticket.",
    },
    snowboarderIntel: {
      liftFleet:
        "5 lifts headlined by the 2,700m 15-passenger SP Gondola and 3 high-speed hooded quads.",
      terrainPark:
        "Legendary freestyle park: Olympic-spec 6.7m Global Superpipe, medium & large jump lines, jibs, and flow bowls.",
      flatSpotWarning:
        "The return cat-track from the Dynaland ridge connection requires good speed in wet spring conditions.",
      treeRunRules:
        "Natural side gullies and tree courses (Champion & Diamond) are open when snow depth permits. Roped boundaries must be respected.",
    },
    monthlySnowfallCm: {
      dec: 180,
      jan: 260,
      feb: 220,
      mar: 120,
      apr: 30,
      peakBaseCm: 280,
    },
    signatureRuns: [
      {
        name: "Diamond Course",
        level: "Intermediate",
        note: "4,000m long sweeping cruiser from the gondola summit with consistent carving pitch.",
      },
      {
        name: "Superpipe & Park Line",
        level: "Advanced",
        note: "World-cup standard halfpipe and progressive slopestyle kickers maintained daily.",
      },
      {
        name: "Champion Course",
        level: "Advanced",
        note: "Steep un-groomed powder face dropping from the summit ridge with natural hits.",
      },
    ],
    coordinates: {
      lat: 35.9922,
      lon: 136.8789,
    },
    elevation: {
      base: 950,
      top: 1550,
      vertical: 600,
    },
    terrain: {
      beginner: 30,
      intermediate: 45,
      advanced: 25,
      runs: 13,
      lifts: 5,
      treeRunsAllowed: true,
    },
    dayPassYen: 6000,
    fromTokyo: {
      durationMinutes: 220,
      summary:
        "Tokaido Shinkansen from Tokyo to Nagoya Station (~100m) + direct Takasu Mountains express ski bus (~110m) or Tokai-Hokuriku Expressway by car",
      station: "JR Nagoya Station (名古屋駅) / Gujo-Hachiman Hub",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Nagoya+Station+Aichi+Japan",
    },
    vibeTags: ["15-Person Gondola", "Superpipe & Park", "Connects to Dynaland", "4km Cruiser"],
    bestFor:
      "Park riders, carvers, and road-trippers from Kansai/Chubu who want the biggest, highest-energy snowboard resort in Central Japan",
    officialUrl: "https://www.takasu.gr.jp/",
  },
  {
    slug: "dynaland",
    name: "Dynaland",
    japaneseName: "ダイナランド",
    region: "Gifu",
    area: "Gujo Hachiman / Oku-Mino",
    description:
      "Famous for unmatched operating hours and night skiing, Dynaland runs from 06:00 in the morning until 23:00 at night ('Yorudyna')! Connected at the summit to Takasu Snow Park, it features 20 courses, high-capacity snowmaking, and 3 official Tree Run glade zones.",
    address: {
      postalCode: "〒501-5305",
      english: "3035-2 Nishibora, Takasu-cho, Gujo-shi, Gifu 501-5305, Japan",
      japanese: "岐阜県郡上市高鷲町西洞3035-2",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Dynaland+Ski+Resort+Gifu+Japan",
    },
    heroImage: "/trail-maps/dynaland-photo.jpg",
    trailMapImage: "/trail-maps/dynaland.jpg",
    mapGallery: [
      {
        title: "Dynaland Course & Night Skiing Map",
        caption: "Shows the 20 runs, Beta tree run, and the extended floodlit Yorudyna night slopes.",
        imageUrl: "/trail-maps/dynaland.jpg",
        badge: "Official Map",
      },
      {
        title: "Yorudyna Night Riding (Until 23:00)",
        caption: "Floodlit night laps under starry central Japan winter skies.",
        imageUrl: "/trail-maps/marunuma-photo.png",
        badge: "Open 06:00–23:00",
      },
    ],
    trailMapUrl: "https://www.dynaland.co.jp/gelande/",
    webcamUrl: "https://www.dynaland.co.jp/livecam/",
    operatingHours: {
      seasonWindow: "Early December – Early April",
      dayHours: "08:00 – 16:30 (Weekends start 06:00 AM 'Asadyna'!)",
      nightSkiing: "18:00 – 23:00 ('Yorudyna' extended night skiing)",
      earlyBird: "06:00 AM sunrise riding on Saturdays & Sundays",
      notes: "Ride for up to 17 continuous hours from 06:00 AM to 23:00 PM on peak winter weekends.",
    },
    pricing: {
      oneDayAdultYen: 6000,
      halfDayYen: 5000,
      twoDayYen: 11000,
      nightPassYen: 3300,
      childOneDayYen: 2600,
      seniorOneDayYen: 4800,
      seasonPassYen: 68000,
      seasonPassName: "Takasu Mountains Season Pass",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 4000,
      notes: "Night skiing tickets (Yorudyna) can be purchased standalone or added onto daytime passes.",
    },
    snowboarderIntel: {
      liftFleet:
        "6 lifts including 4 high-speed quads and high-efficiency snowmaking covering major trunk routes.",
      terrainPark: "Dyna Park with fun jib lines, rails, and beginner-friendly wave terrain.",
      flatSpotWarning:
        "The summit connector trail from Takasu has a gentle dip—maintain speed on the ridge traverse.",
      treeRunRules:
        "3 official Tree Run courses: Otome Course, Babao, and Sam. Open during natural powder conditions.",
    },
    monthlySnowfallCm: {
      dec: 170,
      jan: 250,
      feb: 210,
      mar: 110,
      apr: 20,
      peakBaseCm: 260,
    },
    signatureRuns: [
      {
        name: "Downhill Course",
        level: "Intermediate",
        note: "3,200m long continuous descent from summit ridge with panoramic mountain views.",
      },
      {
        name: "Beta Course (Tree Run)",
        level: "Advanced",
        note: "Steep natural powder glade that catches deep snow on northern-facing tree pitches.",
      },
      {
        name: "Yorudyna Night Slope",
        level: "Beginner",
        note: "Floodlit high-speed night cruising with dynamic music and lighting until 23:00.",
      },
    ],
    coordinates: {
      lat: 35.9867,
      lon: 136.8833,
    },
    elevation: {
      base: 980,
      top: 1430,
      vertical: 450,
    },
    terrain: {
      beginner: 35,
      intermediate: 40,
      advanced: 25,
      runs: 20,
      lifts: 6,
      treeRunsAllowed: true,
    },
    dayPassYen: 6000,
    fromTokyo: {
      durationMinutes: 220,
      summary:
        "Tokaido Shinkansen from Tokyo to Nagoya Station (~100m) + direct ski bus (~110m) or Chuo Expressway/Tokai-Hokuriku Expressway by car",
      station: "JR Nagoya Station (名古屋駅) / Gujo-Hachiman Hub",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Nagoya+Station+Aichi+Japan",
    },
    vibeTags: ["Open Until 23:00", "06:00 AM Sunrise Riding", "Connects to Takasu", "3 Tree Run Courses"],
    bestFor:
      "Night riders, dawn chasers (06:00 AM opening!), and powder hounds wanting maximum time on snow",
    officialUrl: "https://www.dynaland.co.jp/",
  },
];
