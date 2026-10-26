import type { Resort } from "@/data/types";

export const NIIGATA_RESORTS: Resort[] = [
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
      webcamUrl: "https://www.princehotels.co.jp/ski/myoko/winter/store/livecamera.html",
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
      webcamUrl: "https://www.princehotels.co.jp/ski/kagura/livecamera/",
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
  
    // ================= GUNMA =================,

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
      webcamUrl: "https://www.princehotels.co.jp/ski/naeba/livecamera/",
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
    slug: "akakura-onsen",
    name: "Akakura Onsen & Kanko",
    japaneseName: "赤倉温泉スキー場 ＆ 赤倉観光リゾート（赤カン）",
    region: "Niigata",
    area: "Myoko Kogen",
    description:
      "The historic heart of Mt. Myoko, legendary for deep snowfall often exceeding 13–15 meters per season. Interconnected with Akakura Kanko, it features 760m of vertical drop, the high-speed Myoko Sky Cable Gondola, steep powder bowls, and direct ski-in access to a 200-year-old hot spring village.",
    address: {
      postalCode: "〒949-2111",
      english: "Akakura Onsen, Myoko-shi, Niigata 949-2111, Japan",
      japanese: "新潟県妙高市大字赤倉",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Akakura+Onsen+Ski+Resort+Niigata+Japan",
    },
    heroImage: "/trail-maps/akakura-onsen-photo.jpg",
    trailMapImage: "/trail-maps/akakura-onsen.jpg",
    mapGallery: [
      {
        title: "Akakura Onsen & Akakura Kanko Trail Map",
        caption: "Shows the 27 runs, Myoko Sky Cable Gondola, and steep upper powder bowls.",
        imageUrl: "/trail-maps/akakura-onsen.jpg",
        badge: "Dual-Resort Map",
      },
      {
        title: "Mt. Myoko Powder Face & Historic Hotel",
        caption: "Chest-deep Japow overlooking the red roof of the classic Akakura Kanko Hotel.",
        imageUrl: "/trail-maps/akakura-onsen-photo.jpg",
        badge: "Deep Myoko Snow",
      },
    ],
    trailMapUrl: "https://akakura-ski.com/gelande/",
    webcamUrl: "https://akakura-ski.com/livecam/",
    operatingHours: {
      seasonWindow: "Mid December – Early May",
      dayHours: "08:30 – 16:30",
      nightSkiing: "17:00 – 21:00 (Floodlit Kumado slope in Akakura Onsen)",
      earlyBird: "08:00 early morning gondola on peak season dates",
      notes: "Akakura Onsen and Akakura Kanko share a joint all-mountain pass for seamless ridge crossings.",
    },
    pricing: {
      oneDayAdultYen: 7000,
      halfDayYen: 5600,
      twoDayYen: 13200,
      nightPassYen: 2800,
      childOneDayYen: 3800,
      seniorOneDayYen: 6000,
      seasonPassYen: 78000,
      seasonPassName: "Akakura Joint All-Mountain Season Pass",
      fullBoardRentalDayYen: 5800,
      wearRentalDayYen: 4000,
      notes: "Night skiing requires a separate ticket or add-on onto all-mountain passes.",
    },
    snowboarderIntel: {
      liftFleet:
        "14 lifts including the 2,600m Myoko Sky Cable Gondola, 3 high-speed hooded quads, and double chairs.",
      terrainPark: "Akakura Freestyle Park with beginner jump lines, boxes, and natural side hits.",
      flatSpotWarning:
        "The lateral connection run between Kanko and Onsen bases has a slight flat section—tuck early.",
      treeRunRules:
        "Natural side gullies and ungroomed courses (Champion course) are open for powder riding within boundaries. Ducking boundary ropes into unpatrolled zones is prohibited.",
    },
    monthlySnowfallCm: {
      dec: 290,
      jan: 380,
      feb: 310,
      mar: 170,
      apr: 40,
      peakBaseCm: 420,
    },
    signatureRuns: [
      {
        name: "Hotel Main Course (Kanko)",
        level: "Intermediate",
        note: "4,000m long continuous descent from Sky Cable summit straight to the resort base.",
      },
      {
        name: "Champions Course (Onsen)",
        level: "Advanced",
        note: "Steep 38-degree un-groomed natural powder pitch with deep storm refills.",
      },
      {
        name: "Kumado Slope (Night Skiing)",
        level: "Beginner",
        note: "Wide, gentle floodlit cruiser leading directly into the historic Onsen village streets.",
      },
    ],
    coordinates: {
      lat: 36.9011,
      lon: 138.1967,
    },
    elevation: {
      base: 740,
      top: 1500,
      vertical: 760,
    },
    terrain: {
      beginner: 40,
      intermediate: 40,
      advanced: 20,
      runs: 27,
      lifts: 14,
      treeRunsAllowed: true,
    },
    dayPassYen: 7000,
    fromTokyo: {
      durationMinutes: 140,
      summary:
        "Hokuriku Shinkansen to Nagano Station (~80m) + Echigo Tokimeki Railway to Myoko-Kogen Station (~45m) + 10-min bus",
      station: "JR Myoko-Kogen Station (妙高高原駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Myoko-Kogen+Station+Niigata+Japan",
    },
    vibeTags: ["13m+ Annual Snow", "200-Year Onsen Village", "Sky Cable Gondola", "Night Skiing"],
    bestFor:
      "Riders seeking immense Myoko storm snowfall, authentic hot spring village atmosphere, and 4km long cruisers",
    officialUrl: "https://akakura-ski.com/",
  },
  {
    slug: "maiko",
    name: "Maiko Snow Resort",
    japaneseName: "舞子スノーリゾート",
    region: "Niigata",
    area: "Minamiuonuma / Yuzawa",
    description:
      "A massive three-zone resort located just 1 minute off the Shiozawa-Ishiuchi IC. Spanning Maiko, Nagazoe, and Okusoechi zones with 26 courses and the 2,800m Maiko Gondola, it delivers steep un-groomed natural powder bowls alongside extensive beginner terrain.",
    address: {
      postalCode: "〒949-6435",
      english: "2056-108 Maiko, Minamiuonuma-shi, Niigata 949-6435, Japan",
      japanese: "新潟県南魚沼市舞子2056-108",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Maiko+Snow+Resort+Niigata+Japan",
    },
    heroImage: "/trail-maps/maiko-photo.jpg",
    trailMapImage: "/trail-maps/maiko.jpg",
    mapGallery: [
      {
        title: "Maiko 3-Zone All-Mountain Map",
        caption: "Shows the Maiko Area, Nagazoe Area, and the high-elevation Okusoechi powder bowl.",
        imageUrl: "/trail-maps/maiko.jpg",
        badge: "Official Map",
      },
      {
        title: "Okusoechi Natural Powder Bowl",
        caption: "Untracked deep snow in the north-facing Okusoechi bowl served by the gondola.",
        imageUrl: "/trail-maps/maiko-photo.jpg",
        badge: "Powder Bowl",
      },
    ],
    trailMapUrl: "https://www.maiko-resort.com/winter/course.html",
    webcamUrl: "https://www.maiko-resort.com/winter/livecam.html",
    operatingHours: {
      seasonWindow: "Mid December – Early April",
      dayHours: "08:30 – 16:30 (Weekends start 08:00)",
      nightSkiing: "16:00 – 19:00 (Maiko base floodlit slopes)",
      earlyBird: "08:00 early start on weekends and holidays",
      notes: "The 2,800m Maiko Gondola ascends directly to the high-elevation Okusoechi powder zone.",
    },
    pricing: {
      oneDayAdultYen: 6500,
      halfDayYen: 5400,
      twoDayYen: 12000,
      nightPassYen: 1500,
      childOneDayYen: 3500,
      seniorOneDayYen: 5800,
      seasonPassYen: 68000,
      seasonPassName: "Maiko Season Pass",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 3800,
      notes: "Online advance tickets offer substantial discounts via the web shop.",
    },
    snowboarderIntel: {
      liftFleet:
        "8 lifts headlined by the 2,800m Maiko Gondola, 4 high-speed quads, and beginner doubles.",
      terrainPark: "Step Up Park in Nagazoe featuring beginner to advanced jump lines and rails.",
      flatSpotWarning:
        "The run-out cat-track connecting Okusoechi back down to Nagazoe requires steady gliding speed.",
      treeRunRules:
        "Okusoechi features 5 un-groomed steep powder courses (Gungun, Zozon, etc.) within resort boundaries.",
    },
    monthlySnowfallCm: {
      dec: 220,
      jan: 310,
      feb: 260,
      mar: 140,
      apr: 30,
      peakBaseCm: 330,
    },
    signatureRuns: [
      {
        name: "Gungun Course (Okusoechi)",
        level: "Advanced",
        note: "Steep 32-degree un-groomed natural powder face dropping off the gondola summit.",
      },
      {
        name: "RunRun Course",
        level: "Beginner",
        note: "Ultra-wide, confidence-building 2,000m cruiser with great valley views.",
      },
      {
        name: "Okusoechi Bowl Laps",
        level: "Advanced",
        note: "North-facing high-altitude natural bowl retaining soft, light Yuzawa snow.",
      },
    ],
    coordinates: {
      lat: 37.0142,
      lon: 138.8353,
    },
    elevation: {
      base: 260,
      top: 920,
      vertical: 660,
    },
    terrain: {
      beginner: 40,
      intermediate: 40,
      advanced: 20,
      runs: 26,
      lifts: 8,
      treeRunsAllowed: true,
    },
    dayPassYen: 6500,
    fromTokyo: {
      durationMinutes: 90,
      summary:
        "Joetsu Shinkansen to Echigo-Yuzawa Station (~75m) + free Maiko Resort Shuttle Bus (~20m) directly to the hotel base",
      station: "JR Echigo-Yuzawa Station (越後湯沢駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Echigo-Yuzawa+Station+Niigata+Japan",
    },
    vibeTags: ["1 Min from Highway", "2,800m Gondola", "Okusoechi Powder", "Family Friendly"],
    bestFor:
      "Riders wanting the quickest, easiest travel from Tokyo with a high-speed gondola, steep powder bowls, and slope-side hotel baths",
    officialUrl: "https://www.maiko-resort.com/",
  },
  {
    slug: "iwappara",
    name: "Iwappara Ski Area",
    japaneseName: "岩原スキー場（いわっぱら）",
    region: "Niigata",
    area: "Yuzawa",
    description:
      "Home to the most legendary wide-open cruising slope in Japan: the Main Slope stretches an incredible 600 meters across! Highly famous for snowboard carving, ground trick (Guratori) freestyle culture, family safety, and beautiful floodlit night skiing.",
    address: {
      postalCode: "〒949-6103",
      english: "731-79 Tsuchidaru, Yuzawa-machi, Minamiuonuma-gun, Niigata 949-6103, Japan",
      japanese: "新潟県南魚沼郡湯沢町大字土樽731-79",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Iwappara+Ski+Resort+Niigata+Japan",
    },
    heroImage: "/trail-maps/iwappara-photo.jpg",
    trailMapImage: "/trail-maps/iwappara.jpg",
    mapGallery: [
      {
        title: "Iwappara Wide Slope Trail Map",
        caption: "Shows the 20 courses and the massive 600m wide open Main Gelande.",
        imageUrl: "/trail-maps/iwappara.jpg",
        badge: "Official Map",
      },
      {
        title: "600-Meter-Wide Main Slope & Night Laps",
        caption: "Unmatched wide open space for carving and flat-ground tricks with zero crowding.",
        imageUrl: "/trail-maps/iwappara-photo.jpg",
        badge: "600m Wide Slope",
      },
    ],
    trailMapUrl: "https://iwa-ppara.com/course",
    webcamUrl: "https://iwa-ppara.com/livecam",
    operatingHours: {
      seasonWindow: "Late December – Late March",
      dayHours: "08:00 – 17:00 (Weekends start 08:00)",
      nightSkiing: "17:00 – 20:00 (Extended to 21:00 on Saturdays)",
      earlyBird: "08:00 start on Saturdays and holidays",
      notes: "The wide open layout provides unmatched visibility during both day and night riding.",
    },
    pricing: {
      oneDayAdultYen: 5800,
      halfDayYen: 4800,
      twoDayYen: 10800,
      nightPassYen: 2000,
      childOneDayYen: 3000,
      seniorOneDayYen: 4800,
      seasonPassYen: 58000,
      seasonPassName: "Iwappara & Joetsu Kokusai Joint Season Pass",
      fullBoardRentalDayYen: 5000,
      wearRentalDayYen: 3500,
      notes: "Long 1-day pass options cover day + night riding on the same ticket.",
    },
    snowboarderIntel: {
      liftFleet: "9 lifts featuring high-speed hooded quads and wide-spaced double chairlifts.",
      terrainPark: "Iwappara Snow Park featuring wave tracks, beginner bank turns, and jib boxes.",
      flatSpotWarning:
        "Zero scary choke points or narrow flat gullies—the entire mountain is a massive wide-open bowl.",
      treeRunRules:
        "Strictly an on-piste wide cruising resort. No tree riding allowed outside marked course boundaries.",
    },
    monthlySnowfallCm: {
      dec: 190,
      jan: 290,
      feb: 240,
      mar: 120,
      apr: 20,
      peakBaseCm: 300,
    },
    signatureRuns: [
      {
        name: "Main Gelande (600m Wide Slope)",
        level: "Beginner",
        note: "The signature slope of Yuzawa: up to 600 meters wide with gentle, consistent pitch.",
      },
      {
        name: "Grand Course (Upper Carving)",
        level: "Intermediate",
        note: "Wide, undulating upper course with views of the Joetsu mountains and wide sweeping turns.",
      },
      {
        name: "Corona Course",
        level: "Advanced",
        note: "Steeper natural pitch off the top ridge with natural rolls and ungroomed snow after storms.",
      },
    ],
    coordinates: {
      lat: 36.9367,
      lon: 138.8258,
    },
    elevation: {
      base: 400,
      top: 985,
      vertical: 585,
    },
    terrain: {
      beginner: 40,
      intermediate: 45,
      advanced: 15,
      runs: 20,
      lifts: 9,
      treeRunsAllowed: false,
    },
    dayPassYen: 5800,
    fromTokyo: {
      durationMinutes: 85,
      summary:
        "Joetsu Shinkansen from Tokyo to Echigo-Yuzawa Station (~70m) + free Iwappara Shuttle Bus (~10m)",
      station: "JR Echigo-Yuzawa Station (越後湯沢駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Echigo-Yuzawa+Station+Niigata+Japan",
    },
    vibeTags: ["600m Wide Slope", "Guratori Paradise", "Night Skiing", "70m from Tokyo"],
    bestFor:
      "Beginners, intermediate carvers, and flat-ground freestyle riders (Guratori) who want massive open space and 85-min transit from Tokyo",
    officialUrl: "https://iwa-ppara.com/",
  },

  {
    slug: "joetsu-kokusai",
    name: "Joetsu Kokusai Ski Resort",
    japaneseName: "上越国際スキー場",
    region: "Niigata",
    area: "Minamiuonuma / Tokamachi",
    description:
      "One of Japan's largest single ski expanses, 'Jokoku' spans a massive 10 million square meters across four interconnected valley zones: Mother Zone, Panorama Zone, Active Zone, and Forest Zone. Directly accessed via its own dedicated train station (Joetsu Kokusai Ski-jomae), it offers 22 expansive courses, extensive night riding, and the castle-like Hotel Green Plaza at the base.",
    address: {
      postalCode: "〒949-6431",
      english: "112 Yanakadaira, Minamiuonuma-shi, Niigata 949-6431, Japan",
      japanese: "新潟県南魚沼市樺野沢112",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Joetsu+Kokusai+Ski+Resort+Niigata+Japan",
    },
    heroImage: "/trail-maps/joetsu-kokusai-photo.jpg",
    trailMapImage: "/trail-maps/joetsu-kokusai.jpg",
    mapGallery: [
      {
        title: "Joetsu Kokusai 4-Zone Mega Trail Map",
        caption:
          "Official trail map encompassing all 4 distinct areas: Mother, Active, Panorama, and Forest zones across 10 million square meters.",
        imageUrl: "/trail-maps/joetsu-kokusai.jpg",
        badge: "Official Trail Map",
      },
      {
        title: "Hotel Green Plaza Joetsu & Ski-in/Ski-out Slopes",
        caption:
          "The iconic Tudor-style alpine resort hotel looking straight onto the illuminated Mother Zone pistes.",
        imageUrl: "/trail-maps/joetsu-kokusai-photo.jpg",
        badge: "Base Hotel & Slopes",
      },
    ],
    trailMapUrl: "https://www.jkokusai.co.jp/ski/course/",
    webcamUrl: "https://www.jkokusai.co.jp/ski/livecam/",
    operatingHours: {
      seasonWindow: "Early December – Late March",
      dayHours: "08:00 – 17:00",
      nightSkiing: "17:00 – 21:00 on Mother Zone main slopes",
      earlyBird: "08:00 start on weekends",
      notes: "Direct train access via JR Joetsu Line stopping right at the resort base station.",
    },
    pricing: {
      oneDayAdultYen: 6000,
      halfDayYen: 5000,
      twoDayYen: 11000,
      nightPassYen: 2500,
      childOneDayYen: 3500,
      seniorOneDayYen: 5000,
      seasonPassYen: 58000,
      seasonPassName: "Jokoku & Iwappara Joint Season Pass",
      fullBoardRentalDayYen: 5500,
      wearRentalDayYen: 4500,
      notes: "Joint lift pass options include neighboring Iwappara Ski Resort.",
    },
    snowboarderIntel: {
      liftFleet:
        "25 Chairlifts (including high-speed quads and double lifts connecting all 4 valleys)",
      terrainPark: "Kokusai Snow Park & SpongeBob Kids Park",
      flatSpotWarning:
        "Medium — valley transfer traverses between Panorama and Forest zones require keeping speed",
      treeRunRules:
        "Strictly on-piste only. Off-piste boundary zones strictly patrolled.",
    },
    monthlySnowfallCm: {
      dec: 180,
      jan: 310,
      feb: 270,
      mar: 140,
      apr: 20,
      peakBaseCm: 300,
    },
    onsenAndVillage: [
      {
        name: "Jokoku Onsen (Hotel Green Plaza Joetsu)",
        japaneseName: "上国温泉",
        category: "Onsen",
        description:
          "Hot soothing hot spring bathhouse inside Hotel Green Plaza looking out over snowy pine forests.",
        info: "12:00 – 21:00 · Slopeside Hotel",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hotel+Green+Plaza+Joetsu+Onsen",
      },
      {
        name: "Restaurant Mont Blanc",
        japaneseName: "レストラン モンブラン",
        category: "Food & Apres",
        description:
          "Hearty Niigata Koshihikari rice bowls, Echigo pork cutlet curry, and piping hot ramen right on the slopes.",
        info: "Mother Zone Base · 10:30 – 16:30",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hotel+Green+Plaza+Joetsu+Dining",
      },
    ],
    signatureRuns: [
      {
        name: "Panorama Cruiser",
        level: "Intermediate",
        note: "Scenic 2.5km descent from the 1,017m peak with panoramic views of the Echigo mountain range.",
      },
      {
        name: "Dan-par Slope (大別当ゲレンデ)",
        level: "Advanced",
        note: "Steep 38° natural pitch challenging mogul skiers and advanced riders.",
      },
      {
        name: "Main Mother Gelande",
        level: "Beginner",
        note: "Gentle, wide, floodlit slope directly outside Hotel Green Plaza perfect for evening carving.",
      },
    ],
    coordinates: {
      lat: 37.0378,
      lon: 138.8306,
    },
    elevation: {
      base: 200,
      top: 1017,
      vertical: 817,
    },
    terrain: {
      beginner: 30,
      intermediate: 50,
      advanced: 20,
      runs: 22,
      lifts: 25,
      treeRunsAllowed: false,
    },
    dayPassYen: 6000,
    fromTokyo: {
      durationMinutes: 85,
      summary:
        "Joetsu Shinkansen to Echigo-Yuzawa (~70m) + JR Joetsu local train directly to Joetsu-Kokusai-Ski-Jomae Station (13m)",
      station: "JR Joetsu-Kokusai-Ski-Jomae Station (上越国際スキー場前駅)",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Joetsu-Kokusai-Ski-Jomae+Station+Niigata+Japan",
    },
    vibeTags: ["Direct Train Station", "4 Valley Mega-Resort", "Hotel Green Plaza", "Tudor Castle Base"],
    bestFor:
      "Families, intermediate cruisers, and train travelers wanting an immense connected mountain with direct station ski-in access",
    officialUrl: "https://www.jkokusai.co.jp/",
  },
];
