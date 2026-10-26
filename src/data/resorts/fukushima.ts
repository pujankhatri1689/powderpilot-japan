import type { Resort } from "@/data/types";

export const FUKUSHIMA_RESORTS: Resort[] = [
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
    }
];
