import type { Resort } from "@/data/types";

export const YAMAGATA_RESORTS: Resort[] = [
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
    }
];
