import type { Resort } from "@/data/types";

export const HOKKAIDO_RESORTS: Resort[] = [
  {
    slug: "niseko-united",
    name: "Niseko United",
    japaneseName: "ニセコユナイテッド（東急グラン・ヒラフ / HANAZONO / ビレッジ / アンヌプリ）",
    region: "Hokkaido",
    area: "Niseko & Mt. Yotei",
    description:
      "The undisputed global capital of powder snow. Four interconnected resorts encircle Mt. Annupuri, offering 1,058m of vertical, 70 courses, 30 lifts, and 11 official backcountry gates giving access to world-famous deep ocean powder overlooking Mt. Yotei.",
    address: {
      postalCode: "〒044-0080",
      english: "204 Yamada, Kutchan-cho, Abuta-gun, Hokkaido 044-0080, Japan",
      japanese: "北海道虻田郡倶知安町山田204",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Niseko+Tokyu+Grand+Hirafu+Hokkaido+Japan",
    },
    heroImage: "/trail-maps/niseko-united-photo.jpg",
    trailMapImage: "/trail-maps/niseko-united.jpg",
    mapGallery: [
      {
        title: "Niseko United All-Mountain Trail Map",
        caption:
          "Complete panoramic map connecting Grand Hirafu, Hanazono, Niseko Village, and Annupuri.",
        imageUrl: "/trail-maps/niseko-united.jpg",
        badge: "All-Mountain Map",
      },
      {
        title: "Mt. Yotei & Deep Hirafu Powder",
        caption:
          "Looking out toward the iconic Ezo Fuji (Mt. Yotei) while riding knee-to-waist deep champagne powder.",
        imageUrl: "/trail-maps/niseko-united-photo.jpg",
        badge: "World-Class Japow",
      },
    ],
    trailMapUrl: "https://www.niseko.ne.jp/en/niseko-lift-map/",
    webcamUrl: "https://www.niseko.ne.jp/en/webcam/",
    operatingHours: {
      seasonWindow: "Late November – Early May",
      dayHours: "08:30 – 16:30",
      nightSkiing: "16:30 – 19:00 (Hirafu, Village & Annupuri floodlit slopes)",
      earlyBird: "08:00 early upload on peak mid-winter dates",
      notes:
        "All four resorts are connected at the summit ridge; free shuttle buses connect the bases with an All-Mountain Pass.",
    },
    pricing: {
      oneDayAdultYen: 9500,
      halfDayYen: 7800,
      twoDayYen: 18200,
      nightPassYen: 3500,
      childOneDayYen: 5700,
      seniorOneDayYen: 7600,
      seasonPassYen: 118000,
      seasonPassName: "Niseko United All-Mountain Season Pass",
      fullBoardRentalDayYen: 6500,
      wearRentalDayYen: 4500,
      notes:
        "Includes access to all 4 resorts (Hirafu, Hanazono, Village, Annupuri) and the free Niseko United shuttle bus.",
    },
    snowboarderIntel: {
      liftFleet:
        "30 lifts including the brand-new 10-person Ace Gondola, Hanazono Symphony Gondola, and 4 high-speed hooded quads.",
      terrainPark:
        "Hanazono Parks is Hokkaido's top freestyle setup with progressive jump lines, jibs, and pipe.",
      flatSpotWarning:
        "Annupuri base cat-tracks and the traverse from Village to Hirafu require momentum to avoid unclipping.",
      treeRunRules:
        "Niseko Rules strictly regulate off-piste. You must exit through designated numbered gates (Gate 1 to 11) with beacon and helmet.",
    },
    monthlySnowfallCm: {
      dec: 310,
      jan: 380,
      feb: 310,
      mar: 190,
      apr: 60,
      peakBaseCm: 420,
    },
    signatureRuns: [
      {
        name: "Strawberry Fields (Hanazono)",
        level: "Advanced",
        note: "Famous naturally spaced silver birch glade offering endless powder pillow drops.",
      },
      {
        name: "Miharashi (Grand Hirafu)",
        level: "Advanced",
        note: "Steep un-groomed powder pitch cutting through deep trees on mountain right.",
      },
      {
        name: "Super Stiff (Grand Hirafu)",
        level: "Intermediate",
        note: "Wide carving bowl with direct front-row panoramic views of Mt. Yotei.",
      },
    ],
    coordinates: {
      lat: 42.8622,
      lon: 140.7042,
    },
    elevation: {
      base: 250,
      top: 1308,
      vertical: 1058,
    },
    terrain: {
      beginner: 30,
      intermediate: 40,
      advanced: 30,
      runs: 70,
      lifts: 30,
      treeRunsAllowed: true,
    },
    dayPassYen: 9500,
    fromTokyo: {
      durationMinutes: 270,
      summary:
        "Fly Haneda to New Chitose Airport (CTS ~90m) + direct Hokkaido Resort Liner bus or JR Rapid Airport train to Kutchan Station (~150m)",
      station: "JR Kutchan Station (倶知安駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Kutchan+Station+Hokkaido+Japan",
    },
    vibeTags: ["1,058m Vertical", "11 Backcountry Gates", "Mt. Yotei Views", "Night Skiing"],
    bestFor:
      "Riders wanting the definitive world-renowned Japow pilgrimage with international village amenities and backcountry gates",
    officialUrl: "https://www.niseko.ne.jp/en/",
  },
  {
    slug: "rusutsu",
    name: "Rusutsu Resort",
    japaneseName: "ルスツリゾート",
    region: "Hokkaido",
    area: "Yotei & Rusutsu",
    description:
      "Repeatedly voted Japan's Best Ski Resort, Rusutsu spans 3 massive mountains (West, East, Mt. Isola) with 37 courses and 4 gondolas. Famous for the world's finest in-bounds lift-accessed tree glades, natural gullies, and sidecountry powder parks.",
    address: {
      postalCode: "〒048-1711",
      english: "13 Izumikawa, Rusutsu-mura, Abuta-gun, Hokkaido 048-1711, Japan",
      japanese: "北海道虻田郡留寿都村泉川13",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Rusutsu+Resort+Hokkaido+Japan",
    },
    heroImage: "/trail-maps/rusutsu-photo.jpg",
    trailMapImage: "/trail-maps/rusutsu.jpg",
    mapGallery: [
      {
        title: "Rusutsu 3-Peak Trail Map (West, East, Isola)",
        caption: "Huge layout covering 37 runs across West Mountain, East Mountain, and Mt. Isola.",
        imageUrl: "/trail-maps/rusutsu.jpg",
        badge: "3-Mountain Map",
      },
      {
        title: "Mt. Isola Untracked Tree Glades",
        caption: "Steep gladed trees and natural terrain features between Heavenly and Stream courses.",
        imageUrl: "/trail-maps/rusutsu-photo.jpg",
        badge: "Glade Heaven",
      },
    ],
    trailMapUrl: "https://rusutsu.com/en/trail-map/",
    webcamUrl: "https://rusutsu.com/en/live-camera/",
    operatingHours: {
      seasonWindow: "Late November – Early April",
      dayHours: "09:00 – 16:00 (Mt. Isola closes 15:30)",
      nightSkiing: "16:00 – 19:00 (West Mountain floodlit)",
      earlyBird: "08:30 first lift on peak powder weekends",
      notes:
        "The East Gondola and Isola lifts close earlier than West Mountain; plan your return transit accordingly.",
    },
    pricing: {
      oneDayAdultYen: 11500,
      halfDayYen: 9200,
      twoDayYen: 21000,
      nightPassYen: 3300,
      childOneDayYen: 5800,
      seniorOneDayYen: 9200,
      seasonPassYen: 118000,
      seasonPassName: "Rusutsu Season Pass (Kamori Kanko)",
      fullBoardRentalDayYen: 7000,
      wearRentalDayYen: 4800,
      notes: "Flexible 25-Hour Ticketing passes available (deducts 1 hour per first gate beep).",
    },
    snowboarderIntel: {
      liftFleet:
        "18 lifts including 4 high-speed gondolas (East Gondola 1 & 2, Isola Gondola) and 7 hooded quads.",
      terrainPark:
        "Sidecountry Park built into natural terrain features with wooden log jibs, drops, and wallrides.",
      flatSpotWarning:
        "The bottom connector cat-track between East Mountain base and West Mountain can slow down in wet spring snow.",
      treeRunRules:
        "100% legal in-bounds tree skiing between marked trails! Ducking boundary ropes into unpatrolled backcountry requires avalanche gear.",
    },
    monthlySnowfallCm: {
      dec: 290,
      jan: 360,
      feb: 300,
      mar: 180,
      apr: 50,
      peakBaseCm: 390,
    },
    signatureRuns: [
      {
        name: "Heavenly Canyon (Mt. Isola)",
        level: "Advanced",
        note: "Deep natural halfpipe ravine packed with fresh powder pillows and tree drops.",
      },
      {
        name: "Super East (East Mountain)",
        level: "Advanced",
        note: "40-degree un-groomed steep powder face dropping straight off the peak.",
      },
      {
        name: "Isola Grand (Mt. Isola)",
        level: "Intermediate",
        note: "3,500m long, undulating high-speed carving cruiser through alpine birch trees.",
      },
    ],
    coordinates: {
      lat: 42.7523,
      lon: 140.9056,
    },
    elevation: {
      base: 400,
      top: 994,
      vertical: 594,
    },
    terrain: {
      beginner: 30,
      intermediate: 40,
      advanced: 30,
      runs: 37,
      lifts: 18,
      treeRunsAllowed: true,
    },
    dayPassYen: 11500,
    fromTokyo: {
      durationMinutes: 240,
      summary:
        "Fly Haneda to New Chitose Airport (CTS ~90m) + direct Bigruns / Resort Liner bus (~90m) straight to Rusutsu Resort hotel base",
      station: "New Chitose Airport Station (新千歳空港駅) / Rusutsu Bus Hub",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Rusutsu+Resort+Hotel+Hokkaido+Japan",
    },
    vibeTags: ["Best In-Bounds Trees", "4 Gondolas", "Mt. Isola", "Flexible 25h Pass"],
    bestFor:
      "Freeriders who live for legal tree skiing, pillow drops, and continuous gondola laps without backcountry red tape",
    officialUrl: "https://rusutsu.com/en/",
  },
  {
    slug: "kiroro",
    name: "Kiroro Snow World",
    japaneseName: "キロロスノーワールド",
    region: "Hokkaido",
    area: "Otaru & Yoichi",
    description:
      "A renowned powder powerhouse blessed with an astonishing 17–21 meters of annual snowfall. Located near the Sea of Japan coast, Kiroro delivers consistently light blower snow across 23 courses, 2 gondolas, and 5 dedicated Off-Piste tree zones.",
    address: {
      postalCode: "〒046-0593",
      english: "128-1 Tokiwa, Akaigawa-mura, Yoichi-gun, Hokkaido 046-0593, Japan",
      japanese: "北海道余市郡赤井川村常盤128-1",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Kiroro+Snow+World+Hokkaido+Japan",
    },
    heroImage: "/trail-maps/kiroro-photo.jpg",
    trailMapImage: "/trail-maps/kiroro.jpg",
    mapGallery: [
      {
        title: "Kiroro Course & Off-Piste Gate Map",
        caption: "Shows the 23 courses, Kiroro Gondola, and 5 designated Off-Piste tree areas.",
        imageUrl: "/trail-maps/kiroro.jpg",
        badge: "Official Map",
      },
      {
        title: "Asari Peak & Sea of Japan Cloudbreak",
        caption: "High-speed riding in deep feather-weight powder along the Asari ridge.",
        imageUrl: "/trail-maps/kiroro-photo.jpg",
        badge: "17m Annual Snow",
      },
    ],
    trailMapUrl: "https://www.kiroro.co.jp/trail-map/",
    webcamUrl: "https://www.kiroro.co.jp/live-camera/",
    operatingHours: {
      seasonWindow: "Late November – Early May (One of Japan's longest seasons)",
      dayHours: "09:00 – 16:00",
      nightSkiing: "Closed (Night skiing discontinued)",
      earlyBird: "08:30 first gondola on peak season dates",
      notes: "The high-speed Kiroro Gondola stretches 3,300m straight to Asari Peak in 10 minutes.",
    },
    pricing: {
      oneDayAdultYen: 7400,
      halfDayYen: 6200,
      twoDayYen: 13800,
      nightPassYen: null,
      childOneDayYen: 4200,
      seniorOneDayYen: 6800,
      seasonPassYen: 89000,
      seasonPassName: "Kiroro Season Pass",
      fullBoardRentalDayYen: 6500,
      wearRentalDayYen: 4500,
      notes: "Early bird pass discounts available online through the official web shop.",
    },
    snowboarderIntel: {
      liftFleet:
        "10 modern lifts including the 3,300m Kiroro Gondola, Yoichi Gondola, and 6 hooded high-speed quads.",
      terrainPark: "Kiroro Park with beginner to intermediate kickers, rails, and boxes.",
      flatSpotWarning:
        "The lower run-out return from Nagamine Peak to the Mountain Center has gentle sections—keep your board waxed.",
      treeRunRules:
        "5 designated Off-Piste Zones (Asari, Nagamine, Yoichi) accessible by submitting an online climbing plan & wearing beacon/helmet.",
    },
    monthlySnowfallCm: {
      dec: 340,
      jan: 420,
      feb: 350,
      mar: 230,
      apr: 90,
      peakBaseCm: 450,
    },
    signatureRuns: [
      {
        name: "Asagiri Course (Asari Peak)",
        level: "Advanced",
        note: "Steep ungroomed powder bowl dropping into wide tree glades with frequent knee-deep refills.",
      },
      {
        name: "Grand Couloir",
        level: "Advanced",
        note: "37-degree steep natural pitch at the summit of Asari with untracked snow.",
      },
      {
        name: "Asari Dynamic",
        level: "Intermediate",
        note: "4,050m continuous top-to-bottom cruiser served by the 3,300m gondola.",
      },
    ],
    coordinates: {
      lat: 43.0754,
      lon: 140.9856,
    },
    elevation: {
      base: 570,
      top: 1180,
      vertical: 610,
    },
    terrain: {
      beginner: 38,
      intermediate: 29,
      advanced: 33,
      runs: 23,
      lifts: 10,
      treeRunsAllowed: true,
    },
    dayPassYen: 7400,
    fromTokyo: {
      durationMinutes: 240,
      summary:
        "Fly Haneda to New Chitose Airport (CTS ~90m) + JR Rapid Airport train to Otaru Station (~75m) + Kiroro Resort shuttle bus (~50m)",
      station: "JR Otaru Station (小樽駅) / Otaru-Chikkō Station",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Otaru+Station+Hokkaido+Japan",
    },
    vibeTags: ["17m Annual Snowfall", "Long Season (May)", "3,300m Gondola", "5 Off-Piste Zones"],
    bestFor:
      "Deep-snow hunters who want the most reliable snow depths in Hokkaido with high-speed hooded lifts and managed tree zones",
    officialUrl: "https://www.kiroro.co.jp/",
  },
  {
    slug: "furano",
    name: "Furano Ski Resort",
    japaneseName: "富良野スキー場（プリンスホテル）",
    region: "Hokkaido",
    area: "Central Hokkaido (Powder Belt)",
    description:
      "Heart of the renowned 'Hokkaido Powder Belt', Furano offers 950m of vertical drop and ultra-dry 'diamond dust' powder. Powered by a 100-person high-speed ropeway and Kitanomine Gondola, it balances steep World Cup downhill runs with backcountry gate access.",
    address: {
      postalCode: "〒076-8511",
      english: "Nakagoryo, Furano-shi, Hokkaido 076-8511, Japan",
      japanese: "北海道富良野市中五稜",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Furano+Ski+Resort+Hokkaido+Japan",
    },
    heroImage: "/trail-maps/furano-photo.jpg",
    trailMapImage: "/trail-maps/furano.jpg",
    mapGallery: [
      {
        title: "Furano Dual-Zone Trail Map (Furano & Kitanomine)",
        caption: "Shows the 100-person Ropeway on Furano Zone and the Gondola on Kitanomine Zone.",
        imageUrl: "/trail-maps/furano.jpg",
        badge: "Dual-Zone Map",
      },
      {
        title: "Furano Peak & Tokachidake Mountain Range",
        caption: "Stunning clear winter view of the smoking Tokachi volcanic range across the valley.",
        imageUrl: "/trail-maps/furano-photo.jpg",
        badge: "Diamond Dust",
      },
    ],
    trailMapUrl: "https://www.princehotels.com/en/ski/furano/trailmap.html",
    webcamUrl: "https://www.princehotels.com/en/ski/furano/webcam.html",
    operatingHours: {
      seasonWindow: "Late November – Early May",
      dayHours: "08:30 – 16:30",
      nightSkiing: "16:30 – 19:30 (Kitanomine & Furano Prince bases)",
      earlyBird: "07:30 first tracks on selected mid-winter Sundays",
      notes: "The two zones (Furano and Kitanomine) are linked at the top ridge and via connecting runs at the base.",
    },
    pricing: {
      oneDayAdultYen: 7500,
      halfDayYen: 6300,
      twoDayYen: 14200,
      nightPassYen: 2500,
      childOneDayYen: 0,
      seniorOneDayYen: 6700,
      seasonPassYen: 84000,
      seasonPassName: "Prince Snow Resorts Furano Season Pass",
      fullBoardRentalDayYen: 6000,
      wearRentalDayYen: 4200,
      notes: "Children (elementary school age 12 and under) ride lift passes 100% FREE all season!",
    },
    snowboarderIntel: {
      liftFleet:
        "9 fast lifts including the 100-passenger Furano Ropeway, Kitanomine Gondola, and 5 high-speed quads.",
      terrainPark: "Kitanomine Snow Park with small to large jump lines and beginner-friendly wave boxes.",
      flatSpotWarning:
        "The cross-mountain link trails between Furano and Kitanomine bases are flat—carry speed on the transition run.",
      treeRunRules:
        "Controlled backcountry access through official summit gates. Off-piste ducking inside active boundary areas is strictly prohibited.",
    },
    monthlySnowfallCm: {
      dec: 220,
      jan: 290,
      feb: 240,
      mar: 150,
      apr: 40,
      peakBaseCm: 320,
    },
    signatureRuns: [
      {
        name: "Downhill Course (Kitanomine)",
        level: "Advanced",
        note: "Former FIS World Cup downhill pitch with steep rolls, continuous pitch, and 3km length.",
      },
      {
        name: "Panorama Course",
        level: "Intermediate",
        note: "High-speed sweeping cruiser from Furano peak with direct Tokachidake mountain views.",
      },
      {
        name: "Challenge Course",
        level: "Advanced",
        note: "Ungroomed steep mogul and powder slope right beside the 100-person Ropeway.",
      },
    ],
    coordinates: {
      lat: 43.3262,
      lon: 142.3486,
    },
    elevation: {
      base: 235,
      top: 1074,
      vertical: 839,
    },
    terrain: {
      beginner: 40,
      intermediate: 40,
      advanced: 20,
      runs: 28,
      lifts: 9,
      treeRunsAllowed: true,
    },
    dayPassYen: 7500,
    fromTokyo: {
      durationMinutes: 220,
      summary:
        "Fly Haneda to Asahikawa Airport (AKJ ~100m) + Furano Lavender Bus (~60m) directly to Furano Prince Hotel base",
      station: "JR Furano Station (富良野駅) / Asahikawa Airport Hub",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Furano+Station+Hokkaido+Japan",
    },
    vibeTags: ["100-Person Ropeway", "Kids Ski FREE", "950m Vertical", "Diamond Dust"],
    bestFor:
      "Riders seeking super-dry inland powder, long vertical cruisers, night riding, and authentic Japanese town dining in Furano",
    officialUrl: "https://www.princehotels.com/en/ski/furano/",
  },
  {
    slug: "tomamu",
    name: "Hoshino Resorts Tomamu",
    japaneseName: "星野リゾート トマム スキー場",
    region: "Hokkaido",
    area: "Yufutsu / Central Hokkaido",
    description:
      "An upscale modern resort in the cold inland mountains of central Hokkaido. Spread across Tomamu Mountain and Tower Mountain with 29 runs, it is celebrated for its dedicated 'Experts-Only Powder Area' where riders sign a safety pledge to access raw tree glades.",
    address: {
      postalCode: "〒079-2204",
      english: "Nakatomamu, Shimukappu-mura, Yufutsu-gun, Hokkaido 079-2204, Japan",
      japanese: "北海道勇払郡占冠村中トマム",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hoshino+Resorts+Tomamu+Hokkaido+Japan",
    },
    heroImage: "/trail-maps/tomamu-photo.jpg",
    trailMapImage: "/trail-maps/tomamu.jpg",
    mapGallery: [
      {
        title: "Hoshino Resorts Tomamu Full Trail Map",
        caption: "Shows Tomamu Mountain, Tower Mountain, and the dedicated Expert Powder zone.",
        imageUrl: "/trail-maps/tomamu.jpg",
        badge: "Official Map",
      },
      {
        title: "The Twin Towers & Silver Birch Glades",
        caption: "The iconic twin hotel towers rising above the frosted sub-zero birch powder glades.",
        imageUrl: "/trail-maps/tomamu-photo.jpg",
        badge: "Sub-Zero Powder",
      },
    ],
    trailMapUrl: "https://www.snowtomamu.jp/winter/en/ski/mountain/",
    webcamUrl: "https://www.snowtomamu.jp/winter/en/ski/webcam/",
    operatingHours: {
      seasonWindow: "December 1 – Early April",
      dayHours: "09:00 – 16:00",
      nightSkiing: "16:00 – 18:00 (Tower Mountain base slopes)",
      earlyBird: "Morning First Track tours available on selected dates",
      notes: "Sub-zero temperatures frequently drop below -15°C; dress in heavy-duty thermal layers.",
    },
    pricing: {
      oneDayAdultYen: 7000,
      halfDayYen: 5800,
      twoDayYen: 13000,
      nightPassYen: 2200,
      childOneDayYen: 4500,
      seniorOneDayYen: 6300,
      seasonPassYen: 75000,
      seasonPassName: "Tomamu Season Pass",
      fullBoardRentalDayYen: 6200,
      wearRentalDayYen: 4200,
      notes: "Direct booking hotel guests often receive discounted or bundled lift tickets.",
    },
    snowboarderIntel: {
      liftFleet:
        "6 lifts including the high-speed Unkai Gondola running from the base straight to the peak terrace.",
      terrainPark: "Slope Style Park with progressive jump lines, rails, and beginner fun boxes.",
      flatSpotWarning:
        "The cross-over trail between Tomamu Mountain and Tower Mountain base is flat; tuck to carry speed.",
      treeRunRules:
        "Official 'Only Experts Powder Area' operates with mandatory registration, helmet, and fluorescent numbered safety bib.",
    },
    monthlySnowfallCm: {
      dec: 210,
      jan: 280,
      feb: 230,
      mar: 140,
      apr: 30,
      peakBaseCm: 300,
    },
    signatureRuns: [
      {
        name: "Glory Course (Tomamu Peak)",
        level: "Advanced",
        note: "Steep north-facing ungroomed powder bowl dropping from the top of the Unkai Gondola.",
      },
      {
        name: "Expert Only Tree Zone",
        level: "Advanced",
        note: "Controlled backcountry glades inside the ski resort boundary reserved for registered riders.",
      },
      {
        name: "Silver Bell",
        level: "Beginner",
        note: "Gentle 3,300m scenic cruiser winding through the forested sub-alpine ridge.",
      },
    ],
    coordinates: {
      lat: 43.0645,
      lon: 142.6175,
    },
    elevation: {
      base: 586,
      top: 1239,
      vertical: 653,
    },
    terrain: {
      beginner: 30,
      intermediate: 40,
      advanced: 30,
      runs: 29,
      lifts: 6,
      treeRunsAllowed: true,
    },
    dayPassYen: 7000,
    fromTokyo: {
      durationMinutes: 210,
      summary:
        "Fly Haneda to New Chitose Airport (CTS ~90m) + JR Limited Express Ozora / Tokachi (~90m) directly to JR Tomamu Station",
      station: "JR Tomamu Station (トマム駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Tomamu+Station+Hokkaido+Japan",
    },
    vibeTags: ["Direct JR Train Station", "Expert Tree Bib System", "Unkai Gondola", "Ice Village"],
    bestFor:
      "Riders wanting effortless direct rail access from Chitose, luxurious resort infrastructure, and official tree run zones",
    officialUrl: "https://www.snowtomamu.jp/winter/en/",
  },
  {
    slug: "asahidake",
    name: "Daisetsuzan Asahidake",
    japaneseName: "大雪山 旭岳ロープウェイ",
    region: "Hokkaido",
    area: "Daisetsuzan National Park",
    description:
      "The holy grail of wild volcano powder skiing. Situated on Hokkaido's highest peak (Mt. Asahi, 2,291m), a single 101-person Ropeway carries riders up into an active volcanic landscape of smoking fumaroles, alpine bowls, and endless waist-deep silver birch trees.",
    address: {
      postalCode: "〒071-1472",
      english: "Asahidake Onsen, Higashikawa-cho, Kamikawa-gun, Hokkaido 071-1472, Japan",
      japanese: "北海道上川郡東川町旭岳温泉",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Asahidake+Ropeway+Hokkaido+Japan",
    },
    heroImage: "/trail-maps/asahidake-photo.jpg",
    trailMapImage: "/trail-maps/asahidake.jpg",
    mapGallery: [
      {
        title: "Asahidake Ropeway & Alpine Trail Map",
        caption: "Shows the 4 marked maintenance courses and the vast wild alpine terrain.",
        imageUrl: "/trail-maps/asahidake.jpg",
        badge: "Alpine Wilderness",
      },
      {
        title: "Smoking Fumaroles & Waist-Deep Japow",
        caption: "Riding waist-deep featherweight powder beside steaming sulfur vents in Daisetsuzan National Park.",
        imageUrl: "/trail-maps/asahidake-photo.jpg",
        badge: "Active Volcano",
      },
    ],
    trailMapUrl: "https://asahidake.hokkaido.jp/en/",
    webcamUrl: "https://asahidake.hokkaido.jp/en/livecam/",
    operatingHours: {
      seasonWindow: "Late November – Early May",
      dayHours: "09:00 – 15:40 (Ropeway runs every 20 minutes)",
      nightSkiing: "Closed (Wild national park; absolutely no night skiing)",
      earlyBird: "08:40 first car during spring touring season",
      notes: "Severe alpine weather can cause ropeway holds; carry beacon, probe, shovel, and storm goggles.",
    },
    pricing: {
      oneDayAdultYen: 5800,
      halfDayYen: 4500,
      twoDayYen: 11000,
      nightPassYen: null,
      childOneDayYen: 3200,
      seniorOneDayYen: 5800,
      seasonPassYen: 65000,
      seasonPassName: "Asahidake Ropeway Season Pass",
      fullBoardRentalDayYen: 6500,
      wearRentalDayYen: 4500,
      notes: "Lift ticket is a Ropeway Day Pass allowing unlimited round trips during operating hours.",
    },
    snowboarderIntel: {
      liftFleet: "1 single heavy-duty 101-person Ropeway ascending 500m vertical in 9 minutes.",
      terrainPark: "None. Zero artificial features—pure 100% natural volcanic drops, pillows, and wind lips.",
      flatSpotWarning:
        "CRITICAL: If you drop too low into the side gullies, you risk a grueling hours-long hike out. Keep track of the cat-track return.",
      treeRunRules:
        "The entire mountain is unpatrolled national park backcountry once you leave the marked cat-tracks. Beacon, probe, and shovel are mandatory.",
    },
    monthlySnowfallCm: {
      dec: 360,
      jan: 440,
      feb: 370,
      mar: 250,
      apr: 110,
      peakBaseCm: 480,
    },
    signatureRuns: [
      {
        name: "Sugatami Course (Top Cat-Track)",
        level: "Intermediate",
        note: "The groomed spine descending from the top station through active volcanic steam vents.",
      },
      {
        name: "A-Course & B-Course Silver Birch Glades",
        level: "Advanced",
        note: "Bottomless powder glades weaving through widely-spaced old-growth birch trees.",
      },
      {
        name: "Wild Caldera Bowls",
        level: "Advanced",
        note: "High-alpine wind-sculpted powder bowls reserved for experienced backcountry riders.",
      },
    ],
    coordinates: {
      lat: 43.6633,
      lon: 142.8258,
    },
    elevation: {
      base: 1100,
      top: 1600,
      vertical: 500,
    },
    terrain: {
      beginner: 10,
      intermediate: 20,
      advanced: 70,
      runs: 4,
      lifts: 1,
      treeRunsAllowed: true,
    },
    dayPassYen: 5800,
    fromTokyo: {
      durationMinutes: 210,
      summary:
        "Fly Haneda to Asahikawa Airport (AKJ ~100m) + Asahidake Ideyu Bus (~55m) directly to Asahidake Ropeway station base",
      station: "Asahikawa Airport (AKJ) / JR Asahikawa Station (旭川駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Asahidake+Ropeway+Hokkaido+Japan",
    },
    vibeTags: ["Active Volcano", "101-Person Ropeway", "Waist-Deep Blower Snow", "True Wilderness"],
    bestFor:
      "Expert backcountry powder riders and splitboarders equipped with avalanche gear wanting raw, wild Hokkaido volcano powder",
    officialUrl: "https://asahidake.hokkaido.jp/en/",
  },

  {
    slug: "sapporo-teine",
    name: "Sapporo Teine",
    japaneseName: "サッポロテイネ",
    region: "Hokkaido",
    area: "Teine-ku, Sapporo",
    description:
      "Host of the 1972 Winter Olympic alpine events, Sapporo Teine features two distinct zones: Highland and Olympia, connected by the 8-passenger Rainbow Gondola. Perched 1,023m above Ishikari Bay with breathtaking ocean and Sapporo city skylines, Teine boasts the legendary 36° North Wall course and extensive gated tree-riding.",
    address: {
      postalCode: "〒006-0029",
      english: "593 Teine-kanayama, Teine-ku, Sapporo, Hokkaido 006-0029, Japan",
      japanese: "北海道札幌市手稲区手稲金山593",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Sapporo+Teine+Ski+Resort+Hokkaido+Japan",
    },
    heroImage: "/trail-maps/sapporo-teine-photo.jpg",
    trailMapImage: "/trail-maps/sapporo-teine.jpg",
    mapGallery: [
      {
        title: "Sapporo Teine Highland & Olympia Dual-Zone Map",
        caption:
          "Official trail map connecting Highland and Olympia via the Rainbow Gondola, covering the 36° North Wall and City View cruising runs.",
        imageUrl: "/trail-maps/sapporo-teine.jpg",
        badge: "Official Trail Map",
      },
      {
        title: "Ocean & City Skyline Panorama from Mt. Teine Summit",
        caption:
          "View from 1,023m summit looking directly over Ishikari Bay and downtown Sapporo.",
        imageUrl: "/trail-maps/sapporo-teine-photo.jpg",
        badge: "Summit Ocean View",
      },
    ],
    trailMapUrl: "https://sapporo-teine.com/snow/course/",
    webcamUrl: "https://sapporo-teine.com/snow/camera/",
    operatingHours: {
      seasonWindow: "Late November – Early May",
      dayHours: "09:00 – 17:00",
      nightSkiing: "16:00 – 21:00 at Olympia Zone (Shirakaba & Sunfish slopes)",
      earlyBird: "08:45 Highland lift upload on weekends",
      notes: "Olympia Zone features Japan's historic 1972 Olympic Cauldron and floodlit night riding.",
    },
    pricing: {
      oneDayAdultYen: 7500,
      halfDayYen: 6200,
      twoDayYen: 13800,
      nightPassYen: 3200,
      childOneDayYen: 4000,
      seniorOneDayYen: 6500,
      seasonPassYen: 78000,
      seasonPassName: "K-Winter Pass (Teine / Rusutsu / Sahoro / Nakayama)",
      fullBoardRentalDayYen: 6500,
      wearRentalDayYen: 4800,
      notes: "K-Winter Pass covers all 4 Kamori Kanko Hokkaido mountains.",
    },
    snowboarderIntel: {
      liftFleet: "1 8-passenger Gondola (Rainbow Gondola) + 4 High-Speed Quads + 5 Pair Lifts",
      terrainPark: "Teine Terrain Park at Olympia Zone with rail line, kickers, and wave courses",
      flatSpotWarning: "Low — Rainbow course connector requires moderate speed",
      treeRunRules: "North Wall sidecountry and designated BC gates open when avalanche conditions permit; registration required.",
    },
    monthlySnowfallCm: {
      dec: 210,
      jan: 310,
      feb: 275,
      mar: 180,
      apr: 50,
      peakBaseCm: 320,
    },
    onsenAndVillage: [
      {
        name: "Teine Onsen Honoka",
        japaneseName: "ていね温泉 ほのか",
        category: "Onsen",
        description:
          "Large natural thermal bathhouse with outdoor rotemburo and stone saunas, 10 mins from Teine Station.",
        info: "24 Hours · ¥1,100 Adult",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Teine+Onsen+Honoka+Sapporo",
      },
      {
        name: "Highland Ski Center Cafeteria",
        japaneseName: "ハイランドスキーセンター",
        category: "Food & Apres",
        description:
          "Hearty Hokkaido miso butter-corn ramen, soup curry, and Genghis Khan lamb bowls with Ishikari Bay views.",
        info: "Highland Base · 10:00 - 16:30",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Sapporo+Teine+Highland+Ski+Center",
      },
    ],
    signatureRuns: [
      {
        name: "North Wall Course (北壁)",
        level: "Advanced",
        note: "Historic 36° maximum pitch Olympic mogul and deep powder run from the summit.",
      },
      {
        name: "City View Cruise",
        level: "Intermediate",
        note: "Wide, sweeping cruiser directly facing the glittering Sapporo skyline and sea.",
      },
      {
        name: "Rainbow Course (5,700m)",
        level: "Beginner",
        note: "Long, scenic beginner course flowing from Highland summit all the way to Olympia base.",
      },
    ],
    coordinates: {
      lat: 43.0805,
      lon: 141.2025,
    },
    elevation: {
      base: 340,
      top: 1023,
      vertical: 683,
    },
    terrain: {
      beginner: 35,
      intermediate: 40,
      advanced: 25,
      runs: 15,
      lifts: 10,
      treeRunsAllowed: true,
    },
    dayPassYen: 7500,
    fromTokyo: {
      durationMinutes: 180,
      summary:
        "Fly Haneda to New Chitose (CTS ~95m) + JR Rapid Airport Train to Teine Station (~45m) + 15-min bus/taxi",
      station: "JR Teine Station (手稲駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=JR+Teine+Station+Hokkaido+Japan",
    },
    vibeTags: ["1972 Olympic Slopes", "Ocean & City Skyline", "36° North Wall", "40m from Sapporo"],
    bestFor:
      "Snowboarders wanting Olympic-grade steeps and deep powder with immediate Sapporo city access",
    officialUrl: "https://sapporo-teine.com/snow/",
  },

  {
    slug: "kamui-ski-links",
    name: "Kamui Ski Links",
    japaneseName: "カムイスキーリンクス",
    region: "Hokkaido",
    area: "Asahikawa / Mt. Kamui",
    description:
      "Asahikawa's premier powder sanctuary, Kamui Ski Links offers 25 sprawling courses served by its iconic 6-passenger Gold Gondola. Nestled inland in the Daisetsuzan microclimate, temperatures stay bitterly cold, guaranteeing ultra-dry, chalky 'Silky Snow' through uncrowded 150m-wide cruisers and certified tree-riding glades.",
    address: {
      postalCode: "〒074-1181",
      english: "112 Kamui-cho, Nishi-toyoushi, Asahikawa, Hokkaido 074-1181, Japan",
      japanese: "北海道旭川市神居町西丘112",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Kamui+Ski+Links+Asahikawa+Hokkaido+Japan",
    },
    heroImage: "/trail-maps/kamui-ski-links-photo.jpg",
    trailMapImage: "/trail-maps/kamui-ski-links.jpg",
    mapGallery: [
      {
        title: "Kamui Ski Links 25-Course Official Layout",
        caption:
          "Official trail map featuring Gold Gondola, dynamic Deep Powder tree zones (Todomatsu & Shirakaba), and wide carving pistes.",
        imageUrl: "/trail-maps/kamui-ski-links.jpg",
        badge: "Official Trail Map",
      },
      {
        title: "Kamui Ski Links Gold Gondola & Slopes",
        caption:
          "Winter scenery across the wide north-facing tree runs and base lodge.",
        imageUrl: "/trail-maps/kamui-ski-links-photo.jpg",
        badge: "Slope Scenery",
      },
    ],
    trailMapUrl: "https://www.kamui-skilinks.com/gelande/",
    webcamUrl: "https://www.kamui-skilinks.com/gelande/",
    operatingHours: {
      seasonWindow: "Early December – Late March",
      dayHours: "09:00 – 16:30",
      nightSkiing: "No night skiing (Day operations only)",
      earlyBird: "09:00 Gold Gondola opening",
      notes: "Unbeatable value at ¥4,500 for a full-mountain pass on authentic inland Hokkaido powder.",
    },
    pricing: {
      oneDayAdultYen: 4500,
      halfDayYen: 3500,
      twoDayYen: 8000,
      nightPassYen: null,
      childOneDayYen: 2000,
      seniorOneDayYen: 3800,
      seasonPassYen: 45000,
      seasonPassName: "Kamui Season Pass",
      fullBoardRentalDayYen: 5000,
      wearRentalDayYen: 4000,
      notes: "Children under elementary age ride free.",
    },
    snowboarderIntel: {
      liftFleet: "1 6-passenger Gondola (2,327m Gold Gondola) + 5 Pair Lifts",
      terrainPark: "Snow Park with continuous box, rail, and wave features",
      flatSpotWarning: "Very Low — consistent fall line on all main pistes",
      treeRunRules:
        "Designated ungroomed tree zones (Todomatsu, Shirakaba, Banyan) open for powder riding within resort boundaries.",
    },
    monthlySnowfallCm: {
      dec: 180,
      jan: 280,
      feb: 240,
      mar: 140,
      apr: 30,
      peakBaseCm: 290,
    },
    onsenAndVillage: [
      {
        name: "Takasago Onsen",
        japaneseName: "高砂温泉",
        category: "Onsen",
        description:
          "Traditional hot spring with 7 different mineral baths overlooking Asahikawa city, 20 mins from Kamui base.",
        info: "06:00 – 23:00 · ¥700 Adult",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Takasago+Onsen+Asahikawa",
      },
      {
        name: "Center House Restaurant & Ramen",
        japaneseName: "センターハウス レストラン",
        category: "Food & Apres",
        description:
          "Authentic Asahikawa soy sauce ramen with savory pork belly chashu, tonkatsu curry, and local soft serve.",
        info: "Base Lodge · 10:30 – 15:30",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Kamui+Ski+Links+Center+House",
      },
    ],
    signatureRuns: [
      {
        name: "Gold Course (ゴールドコース)",
        level: "Intermediate",
        note: "Epic 150m-wide carving boulevard descending 2.5km directly off the Gondola.",
      },
      {
        name: "Todomatsu Tree Run (トド松コース)",
        level: "Advanced",
        note: "Steep 32° ungroomed powder glade through native Hokkaido fir trees.",
      },
      {
        name: "Banyan & Shirakaba Glades",
        level: "Advanced",
        note: "Playful natural pillow lines and spaced white birch powder riding.",
      },
    ],
    coordinates: {
      lat: 43.6845,
      lon: 142.1894,
    },
    elevation: {
      base: 150,
      top: 751,
      vertical: 601,
    },
    terrain: {
      beginner: 32,
      intermediate: 36,
      advanced: 32,
      runs: 25,
      lifts: 6,
      treeRunsAllowed: true,
    },
    dayPassYen: 4500,
    fromTokyo: {
      durationMinutes: 165,
      summary:
        "Fly Haneda to Asahikawa Airport (AKJ ~100m) + Kamui Ski Liner bus or 30-min taxi from Asahikawa city center",
      station: "JR Asahikawa Station (旭川駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Asahikawa+Station+Hokkaido+Japan",
    },
    vibeTags: ["Gold Gondola", "150m-Wide Carving", "Inland Silky Powder", "¥4,500 Value"],
    bestFor:
      "Snowboarders seeking uncrowded, wide-open cruisers and pristine Hokkaido tree stashes on a budget",
    officialUrl: "https://www.kamui-skilinks.com/",
  },
];
