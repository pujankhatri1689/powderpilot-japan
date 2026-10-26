import type { Resort } from "@/data/types";

export const GUNMA_RESORTS: Resort[] = [
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

  {
      slug: "minakami-houdaigi",
      name: "Gunma Minakami Hodaigi",
      japaneseName: "群馬みなかみほうだいぎスキー場",
      region: "Gunma",
      area: "Minakami",
      description:
        "Perched high in the northern Minakami snowbelt with a 1,400m summit and north-facing slopes, Minakami Hodaigi catches heavy Sea of Japan storms spilling over the Tanigawa range. Featuring steep 40° powder faces, official tree-run zones, and wide family cruisers, it is Gunma's most balanced high-snowfall resort.",
      address: {
        postalCode: "〒379-1721",
        english: "3839-1 Fujiwara, Minakami-machi, Tone-gun, Gunma 379-1721, Japan",
        japanese: "群馬県利根郡みなかみ町藤原3839-1",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Gunma+Minakami+Hodaigi+Ski+Resort+Japan",
      },
      heroImage: "/trail-maps/minakami-houdaigi-photo.jpg",
      trailMapImage: "/trail-maps/minakami-houdaigi-2.jpg",
      mapGallery: [
        {
          title: "Gunma Minakami Hodaigi Official Labeled Course Map",
          caption:
            "Complete trail map showing all 16 courses, 40° Eagle face, uncompacted powder zones, Tree Run areas (Crest & Sanders), and Gravity Pipe.",
          imageUrl: "/trail-maps/minakami-houdaigi-2.jpg",
          badge: "Labeled Course Map",
        },
        {
          title: "Hodaigi Mountain Panorama Illustration",
          caption:
            "Clean topographic artwork illustrating the north-facing bowl and ridge lines.",
          imageUrl: "/trail-maps/minakami-houdaigi.jpg",
          badge: "Mountain Panorama",
        },
        {
          title: "Snowboarder Laying Down a Deep Carve at Hodaigi",
          caption:
            "Crisp inland Gunma snow on Hodaigi's wide intermediate groomers.",
          imageUrl: "/trail-maps/minakami-houdaigi-photo.jpg",
          badge: "Slope Photo",
        },
      ],
      trailMapUrl: "https://hodaigi.jp/course/",
      webcamUrl: "https://hodaigi.jp/",
      operatingHours: {
        seasonWindow: "Mid December – Late March",
        dayHours: "08:30 – 16:30 (08:00 start on weekends & holidays)",
        nightSkiing: "No night skiing",
        earlyBird: "08:00 weekend & holiday lift opening",
        notes: "Part of the Minakami area shuttle network from Jomo-Kogen and Minakami stations.",
      },
      pricing: {
        oneDayAdultYen: 5900,
        halfDayYen: 4900,
        twoDayYen: 11000,
        nightPassYen: null,
        childOneDayYen: 3400,
        seniorOneDayYen: 5300,
        seasonPassYen: 55000,
        seasonPassName: "Hodaigi Season Pass (or Powder5 Gunma)",
        fullBoardRentalDayYen: 5200,
        wearRentalDayYen: 4200,
        notes: "Also eligible for the Powder5 Gunma time-ticket pass shared across 5 northern Gunma resorts.",
      },
      snowboarderIntel: {
        liftFleet: "2 High-Speed Quad Lifts (No. 8 & No. 9 Quads) + 4 Pair Lifts",
        terrainPark: "Main Park + Mini Park + Gravity Pipe + Continuous Wave track",
        flatSpotWarning: "Low — upper mountain has strong pitch; only the No. 2 West Connector (0°–5°) requires carrying speed.",
        treeRunRules: "Official designated Tree Run areas ('Crest' and 'Sanders') plus 5 uncompacted powder courses open during winter storms.",
      },
      monthlySnowfallCm: {
        dec: 185,
        jan: 295,
        feb: 255,
        mar: 165,
        apr: 30,
        peakBaseCm: 310,
      },
      onsenAndVillage: [
        {
          name: "Takaragawa Onsen Osenkaku",
          japaneseName: "宝川温泉 汪泉閣",
          category: "Onsen",
          description:
            "World-famous riverside giant rotenburo (open-air baths) nestled in the snowy Fujiwara gorge just 10 minutes below Hodaigi.",
          info: "09:00 – 16:30 · ¥1,500 Day Use",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Takaragawa+Onsen+Osenkaku+Minakami+Gunma",
        },
        {
          name: "Minakami Onsen Town",
          japaneseName: "水上温泉街",
          category: "Village Landmark",
          description:
            "ClassicTone River hot spring town with footbaths, craft beer (Octone Brewing), and cozy ryokans.",
          info: "25 mins by bus",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Minakami+Onsen+Gunma+Japan",
        },
      ],
      signatureRuns: [
        {
          name: "Eagle Course (イーグル · 40° Max)",
          level: "Advanced",
          note: "Steepest ungroomed powder wall on the mountain at 40° maximum pitch.",
        },
        {
          name: "Nandaira (成平 · 1,400m) & Crest Tree Run",
          level: "Advanced",
          note: "Long 1.4km powder ridge run flanking the Crest gladed tree zone.",
        },
        {
          name: "No. 10 & No. 5 West Cruisers",
          level: "Intermediate",
          note: "1,050m–1,060m high-altitude groomers served by the No. 9 Quad.",
        },
        {
          name: "Family Gelande & Tanpopo Course",
          level: "Beginner",
          note: "Over 1km of gentle 8°–11° wide slopes at the base.",
        },
      ],
      coordinates: { lat: 36.8358, lon: 139.0789 },
      elevation: { base: 830, top: 1400, vertical: 570 },
      terrain: {
        beginner: 30,
        intermediate: 40,
        advanced: 30,
        runs: 16,
        lifts: 6,
        treeRunsAllowed: true,
      },
      dayPassYen: 5900,
      fromTokyo: {
        durationMinutes: 120,
        summary: "Joetsu Shinkansen to Jomo-Kogen Station (66 mins) + 50-min bus to Hodaigi",
        station: "Jomo-Kogen Station (上毛高原駅)",
        stationGoogleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Jomo-Kogen+Station+Gunma+Japan",
      },
      vibeTags: ["40° Steep Face", "Tree Run Zones", "Takaragawa Onsen"],
      bestFor: "Freeriders and families wanting uncrowded Minakami powder and riverside onsens",
      officialUrl: "https://hodaigi.jp/",
    }
];
