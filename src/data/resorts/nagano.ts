import type { Resort } from "@/data/types";

export const NAGANO_RESORTS: Resort[] = [
  {
      slug: "nozawa-onsen",
      name: "Nozawa Onsen",
      japaneseName: "野沢温泉スキー場",
      region: "Nagano",
      area: "Kita-Shinshu",
      description:
        "One of Japan's best all-around snowboard resorts, combining 1,085m of vertical drop, official Yamabiko tree-riding glades, a brand-new 10-person Nagasaka Gondola, and a historic Edo-period hot spring village with 13 free public Soto-yu bathhouses.",
      address: {
        postalCode: "〒389-2502",
        english: "7653 Toyosato, Nozawaonsen-mura, Shimotakai-gun, Nagano 389-2502, Japan",
        japanese: "長野県下高井郡野沢温泉村豊郷7653",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Nozawa+Onsen+Snow+Resort+Nagano+Japan",
      },
      heroImage: "/trail-maps/nozawa-onsen-photo.jpg",
      trailMapImage: "/trail-maps/nozawa-onsen.jpg",
      mapGallery: [
        {
          title: "Nozawa Onsen 2026 Full HD Ski Area Map (3000×2122)",
          caption:
            "Crystal-clear 3000px official trail map showing all 46 numbered courses, Yamabiko tree zones, and village shuttle stops.",
          imageUrl: "/trail-maps/nozawa-onsen.jpg",
          badge: "3000px Ultra-HD Map",
        },
        {
          title: "Nagasaka Express Gondola & Historic Village View",
          caption:
            "The modern 10-passenger Nagasaka Gondola whisks riders from the village base straight to the upper Yamabiko powder zone in 8 minutes.",
          imageUrl: "/trail-maps/nozawa-onsen-photo.jpg",
          badge: "Gondola & Village Photo",
        },
        {
          title: "Yamabiko Powder Tree Zone Action",
          caption:
            "Feather-light Kita-Shinshu powder in the upper Yamabiko birch glades (1,650m).",
          imageUrl: "/trail-maps/nozawa-onsen-powder.jpg",
          badge: "Powder Action",
        },
      ],
      trailMapUrl: "https://en.nozawaski.com/the-mountain/trail-map/",
      webcamUrl: "https://en.nozawaski.com/the-mountain/webcams/",
      operatingHours: {
        seasonWindow: "Late November – Early May (Golden Week)",
        dayHours: "08:30 – 16:30 (Nagasaka & Hikage Gondolas)",
        nightSkiing: "16:30 – 20:00 (Nagasaka Slope — Saturdays & peak holidays)",
        earlyBird: "08:10 early gondola load on peak mid-winter weekends",
        notes: "Free covered 'Yu-Road' moving walkway connects the hot spring village directly to the Hikage base lodge.",
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
        notes: "Salomon Station at Nagasaka Gondola base offers high-performance wide powder snowboard demos.",
      },
      snowboarderIntel: {
        liftFleet: "2 High-Speed Gondolas (Nagasaka 10-pax & Hikage 8-pax), 4 Hooded Quads, 14 Pair Lifts",
        terrainPark: "Uenotaira Snow Park (kickers, boxes, rails & 110m halfpipe)",
        flatSpotWarning: "Low — Karasawa connectivity cat-track has a brief flat section; keep speed coming out of Uenotaira.",
        treeRunRules: "Allowed in designated upper Yamabiko Self-Responsibility Tree Zones (A–E); stay out of strictly roped avalanche closures.",
      },
      monthlySnowfallCm: {
        dec: 210,
        jan: 340,
        feb: 290,
        mar: 160,
        apr: 45,
        peakBaseCm: 360,
      },
      onsenAndVillage: [
        {
          name: "Oyu (The Grand Bathhouse)",
          japaneseName: "大湯 (外湯)",
          category: "Onsen",
          description:
            "The iconic wooden Edo-style bathhouse in the center of Nozawa village. 100% natural volcanic spring water — free entry (donation box).",
          info: "05:00 – 23:00 · Free (Donation)",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Oyu+Hot+Spring+Nozawa+Onsen",
        },
        {
          name: "Sparena Nozawa (Outdoor Rotenburo Complex)",
          japaneseName: "野沢温泉スパリーナ",
          category: "Onsen",
          description:
            "Large indoor/outdoor hot spring pool complex right at the base of Nagasaka slope with mountain views.",
          info: "10:00 – 20:30 · ¥900 Adult",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Nozawa+Onsen+Sparena",
        },
        {
          name: "Ogama Steaming Geothermal Vent & Osenbei Street",
          japaneseName: "麻釜 (おがま)",
          category: "Village Landmark",
          description:
            "90°C boiling volcanic spring where locals boil Nozawana greens and onsen eggs, surrounded by craft beer bars and gyoza spots.",
          info: "Open 24h · Village Center",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Ogama+Nozawa+Onsen",
        },
      ],
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
        summary: "Hokuriku Shinkansen to Iiyama Station (105m) + 25m Nozawa Onsen Liner Bus",
        station: "Iiyama Station (飯山駅)",
        stationGoogleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Iiyama+Station+Nagano+Japan",
      },
      vibeTags: ["Historic Onsen Town", "Big Vertical", "Tree Zones"],
      bestFor: "Riders wanting deep powder by day and authentic onsen hopping by night",
      officialUrl: "https://en.nozawaski.com/",
    },

  {
      slug: "hakuba-happo-one",
      name: "Hakuba Happo-One",
      japaneseName: "白馬八方尾根スキー場",
      region: "Nagano",
      area: "Hakuba Valley",
      description:
        "The flagship resort of Hakuba Valley and host of the 1998 Winter Olympics. Famous for a massive 1,071m vertical drop, wide-open high-alpine faces above the treeline, and the liveliest dining and nightlife scene in the Japanese Alps.",
      address: {
        postalCode: "〒399-9301",
        english: "4258 Hokujo, Hakuba-mura, Kitaazumi-gun, Nagano 399-9301, Japan",
        japanese: "長野県北安曇郡白馬村北城4258",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hakuba+Happo-One+Snow+Resort+Nagano+Japan",
      },
      heroImage: "/trail-maps/hakuba-happo-one-panorama.jpg",
      trailMapImage: "/trail-maps/hakuba-happo-one.jpg",
      mapGallery: [
        {
          title: "Official Happo-One Full Trail & Course Map (1440×1098 HD)",
          caption:
            "Complete trail map covering Kurobishi, Usagidaira, Riesen Slalom, Skyline, Olympic Courses, and Sakka base.",
          imageUrl: "/trail-maps/hakuba-happo-one.jpg",
          badge: "Official HD Map",
        },
        {
          title: "Happo-One High-Alpine Face Panorama",
          caption:
            "Actual mountain photograph showing the 1,071m vertical drop from Happo-ike Sanso (1,831m) to Hakuba town.",
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
      webcamUrl: "https://www.happo-one.jp/en/gelande/livecamera/",
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
        seasonPassName: "Happo-One Season Pass (Epic Pass Partner)",
        fullBoardRentalDayYen: 6500,
        wearRentalDayYen: 5000,
        notes: "Online Webket reload saves ¥300–¥500 off window rates. Epic Pass holders get 5 consecutive days across all 10 Hakuba Valley resorts.",
      },
      snowboarderIntel: {
        liftFleet: "1 Gondola (Adam), 5 High-Speed Quads, 4 Triple Lifts, 12 Pair Lifts",
        terrainPark: "HAPPO PARKS -NATURES- at Kitaone/Sakka (surf-inspired banks, hips, jumps & jibs)",
        flatSpotWarning: "Very Low — steep continuous fall-line all the way down Skyline, Riesen, and Olympic courses.",
        treeRunRules: "Strict on-piste policy inside resort ropes; sidecountry/backcountry access only through top Grat Quad gate with beacon/shovel/probe.",
      },
      monthlySnowfallCm: {
        dec: 195,
        jan: 310,
        feb: 265,
        mar: 170,
        apr: 50,
        peakBaseCm: 340,
      },
      onsenAndVillage: [
        {
          name: "Happo-no-Yu Onsen (High-pH Hydrogen Hot Spring)",
          japaneseName: "八方の湯",
          category: "Onsen",
          description:
            "Closest hot spring to the Gondola station with outdoor rotenburo looking straight up at the Northern Alps.",
          info: "10:00 – 21:00 · ¥850 Adult",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Happo-no-yu+Onsen+Hakuba",
        },
        {
          name: "Obinata-no-Yu Outdoor Rock Bath",
          japaneseName: "おびなたの湯",
          category: "Onsen",
          description:
            "Tucked into the forest along the river road; famous for huge snow-covered boulders around the outdoor bath.",
          info: "10:00 – 18:00 · ¥750 Adult",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Obinata+no+Yu+Hakuba",
        },
        {
          name: "Echoland Dining & Izakaya Strip",
          japaneseName: "エコーランド通り",
          category: "Food & Apres",
          description:
            "Hakuba's main restaurant, ramen, craft beer, and cocktail bar street — connected by evening shuttle buses.",
          info: "17:00 – Late · Main Apres Strip",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Echoland+Hakuba+Nagano",
        },
      ],
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
        summary: "Hokuriku Shinkansen to Nagano Station (90m) + 75m Alpico Express Bus to Happo Bus Terminal",
        station: "Happo Bus Terminal / Hakuba Station (白馬駅)",
        stationGoogleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hakuba+Happo+Bus+Terminal+Nagano",
      },
      vibeTags: ["Big Vertical", "Alpine Bowls", "Lively Nightlife"],
      bestFor: "Freeriders chasing high-alpine steeps and lively town vibes",
      officialUrl: "https://www.happo-one.jp/en/",
    },

  {
      slug: "hakuba-cortina",
      name: "Hakuba Cortina",
      japaneseName: "白馬コルチナスキー場",
      region: "Nagano",
      area: "Northern Hakuba Valley",
      description:
        "A legendary powder magnet at the northern tip of Hakuba Valley. Storms off the Sea of Japan hit Cortina first, dumping deep snow into steep, natural bowl-shaped tree zones that funnel directly back to the lifts.",
      address: {
        postalCode: "〒399-9422",
        english: "12860-1 Chikuniotsu, Otari-mura, Kitaazumi-gun, Nagano 399-9422, Japan",
        japanese: "長野県北安曇郡小谷村千国乙12860-1",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hakuba+Cortina+Ski+Resort+Nagano+Japan",
      },
      heroImage: "/trail-maps/cortina-photo.jpg",
      trailMapImage: "/trail-maps/hakuba-cortina.jpg",
      mapGallery: [
        {
          title: "Map 1: Hakuba Cortina & Hakuba Norikura English HD Map (2480×1748)",
          caption:
            "High-definition English map showing Cortina's steep Hiedayama bowls & tree zones (right) and connected Hakuba Norikura (left).",
          imageUrl: "/trail-maps/hakuba-cortina.jpg",
          badge: "2480px English Dual Map",
        },
        {
          title: "Map 2: 2025–2026 Official Cortina & Hakunori Japanese Course Map",
          caption:
            "Detailed Japanese course & backcountry gate map showing all tree zones and connection lifts.",
          imageUrl: "/trail-maps/hakuba-norikura-map.jpg",
          badge: "2026 Japanese Map",
        },
        {
          title: "Northern Hakuba Valley & Cortina Tree Slopes Panorama",
          caption:
            "Actual winter view across the snow-blanketed glades and bowls of Northern Hakuba Valley.",
          imageUrl: "/trail-maps/cortina-photo.jpg",
          badge: "Valley Panorama",
        },
      ],
      trailMapUrl: "https://www.hgp.co.jp/cortina/ski/en/course/",
      webcamUrl: "https://www.hgp.co.jp/cortina/ski/en/",
      operatingHours: {
        seasonWindow: "Mid-December – Late March",
        dayHours: "08:30 – 16:30",
        nightSkiing: "17:00 – 20:00 (Ikenota Slope — check weekend/peak schedule)",
        earlyBird: "Line up at No. 2 Quad by 08:00 on storm mornings for first tracks!",
        notes: "Joint lift pass automatically includes neighboring Hakuba Norikura Onsen Ski Resort (32 courses combined).",
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
        notes: "1-Day pass covers both Hakuba Cortina and Hakuba Norikura.",
      },
      snowboarderIntel: {
        liftFleet: "2 High-Speed Quads (Cortina No.2 & Hakunori Alps No.3), 10 Pair Lifts across both resorts",
        terrainPark: "Alps Snow Park & Mogul Course on the Hakuba Norikura side",
        flatSpotWarning: "Moderate at bottom — keep your speed on the Warabidaira/Itadaira return cat-tracks after exiting the trees.",
        treeRunRules: "Open in-bounds 'Self-Responsibility' Tree Riding across almost all forested ridges between groomed runs! Helmet strongly recommended.",
      },
      monthlySnowfallCm: {
        dec: 260,
        jan: 420,
        feb: 350,
        mar: 210,
        apr: 40,
        peakBaseCm: 420,
      },
      onsenAndVillage: [
        {
          name: "Cortina Bijin-no-Yu Onsen (Inside Hotel Green Plaza)",
          japaneseName: "白馬コルチナ 美人の湯",
          category: "Onsen",
          description:
            "Grand volcanic baking-soda hot spring complex on the 3rd floor of the iconic green-roofed hotel overlooking Ikenota slope.",
          info: "13:00 – 21:00 · ¥1,200 Day-Use",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Hotel+Green+Plaza+Hakuba+Cortina",
        },
        {
          name: "Wakaguri Onsen (Hakuba Alps Hotel)",
          japaneseName: "若栗温泉 (白馬アルプスホテル)",
          category: "Onsen",
          description:
            "Natural brown mineral hot spring right at the base of the connected Hakuba Norikura slopes.",
          info: "11:00 – 20:00 · ¥1,000 Adult",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Hakuba+Alps+Hotel+Norikura",
        },
      ],
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
        summary: "Hokuriku Shinkansen to Nagano + Express Bus to Hakuba + Free Cortina Hotel Shuttle",
        station: "Minami-Otari Station (南小谷駅)",
        stationGoogleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Minami-Otari+Station+Nagano+Japan",
      },
      vibeTags: ["Steep Trees", "Powder Magnet", "Iconic Hotel"],
      bestFor: "Storm-day tree riding in steep, natural bowls",
      officialUrl: "https://www.hgp.co.jp/cortina/ski/en/",
    },

  {
      slug: "shiga-kogen",
      name: "Shiga Kogen",
      japaneseName: "志賀高原マウンテンリゾート",
      region: "Nagano",
      area: "Yamanouchi",
      description:
        "Japan's largest interconnected ski area (18 resorts on 1 lift pass) and highest-elevation resort network (up to 2,307m). Because of the extreme altitude, snow stays feather-dry and chalky long after storms end.",
      address: {
        postalCode: "〒381-0401",
        english: "7148 Hirao, Yamanouchi-machi, Shimotakai-gun, Nagano 381-0401, Japan",
        japanese: "長野県下高井郡山ノ内町平穏7148",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Shiga+Kogen+Yama+no+Eki+Nagano+Japan",
      },
      heroImage: "/trail-maps/shiga-kogen-photo.jpg",
      trailMapImage: "/trail-maps/shiga-kogen.jpg",
      mapGallery: [
        {
          title: "Map 1: All 18 Resorts Full Shiga Kogen Elevation Map (1,400m–2,307m)",
          caption:
            "Bird's-eye panoramic map showing all 18 ski areas from Okushiga & Yakebitaiyama (left) across Central Area to Yokoteyama 2,307m (right).",
          imageUrl: "/trail-maps/shiga-kogen-all.jpg",
          badge: "Full 18-Resort Overview Map",
        },
        {
          title: "Map 2: Shiga Kogen Central Area Detailed Course & Lift Map",
          caption:
            "Detailed course map covering Ichinose, Takamagahara, Higashitateyama, Terakoya (2,125m), Giant, Sun Valley, and Maruike.",
          imageUrl: "/trail-maps/shiga-kogen.jpg",
          badge: "Central Area HD Map",
        },
        {
          title: "Map 3: Shiga Kogen Yakebitaiyama & Powder Courses Map",
          caption:
            "Detailed sector map of Yakebitaiyama's two gondolas, the 1998 Olympic Course, and the 'Yakebi Coast' & 'Yakebi Valley' powder tree zones.",
          imageUrl: "/trail-maps/shiga-kogen-yakebitai.jpg",
          badge: "Yakebitaiyama Sector Map",
        },
        {
          title: "Shiga Kogen High-Alpine Powder & Northern Alps View",
          caption:
            "High-elevation dry chalky powder at 2,000m+ in Joshin'etsukogen National Park.",
          imageUrl: "/trail-maps/shiga-kogen-photo.jpg",
          badge: "Alpine Powder Photo",
        },
      ],
      trailMapUrl: "https://shigakogen-ski.or.jp/english/",
      webcamUrl: "https://shigakogen-ski.or.jp/livecam/",
      operatingHours: {
        seasonWindow: "Late November – Late May (Yokoteyama open into May)",
        dayHours: "08:30 – 16:30",
        nightSkiing: "18:00 – 21:00 (Ichinose Family, Diamond, Takamagahara & Yakebitai)",
        earlyBird: "06:30 'First Track' Yakebitaiyama Gondola on select dates",
        notes: "All 18 ski areas are connected by slopes and free ski-in shuttle buses included with your lift pass.",
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
        notes: "All-Area Pass covers all 48 lifts across Central, Yakebitaiyama, Okushiga, Kumanoyu, and Yokoteyama.",
      },
      snowboarderIntel: {
        liftFleet: "5 Gondolas (Yakebitai No.1 & No.2, Higashitateyama, Bunadaira, Resort Gondola), 12 High-Speed Quads, 31 Chairlifts",
        terrainPark: "Yakebi Snow Park & Okushiga Fun Park",
        flatSpotWarning: "Moderate between sectors — traversing between Giant, Hasuike, and Sun Valley has flat connecting bridges; riding between Yakebitai, Okushiga, and Ichinose is super smooth.",
        treeRunRules: "Designated ungroomed powder zones open at Yakebitaiyama ('Yakebi Valley' & 'Yakebi Coast'); general forest off-piste in the National Park is restricted.",
      },
      monthlySnowfallCm: {
        dec: 190,
        jan: 280,
        feb: 250,
        mar: 180,
        apr: 75,
        peakBaseCm: 310,
      },
      onsenAndVillage: [
        {
          name: "Jigokudani Wild Snow Monkey Park",
          japaneseName: "地獄谷野猿公苑",
          category: "Village Landmark",
          description:
            "World-famous valley at the base of Shiga Kogen where wild Japanese macaques soak in steaming volcanic hot springs.",
          info: "09:00 – 16:00 · ¥800 Entry",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Jigokudani+Monkey+Park+Nagano",
        },
        {
          name: "Shibu Onsen Historic 9-Bath Town (Kanakuya)",
          japaneseName: "渋温泉 (金具屋)",
          category: "Onsen",
          description:
            "Cobblestone hot spring town 20 mins down the mountain with 9 historic public baths and the wooden ryokan that inspired Spirited Away.",
          info: "Day & Overnight · Footbaths Free",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Shibu+Onsen+Yamanouchi+Nagano",
        },
        {
          name: "Kumanoyu Onsen (Milky Green Sulfur Hot Spring)",
          japaneseName: "熊の湯温泉",
          category: "Onsen",
          description:
            "Famous emerald-green sulfur hot spring right at the base of Kumanoyu Ski Area at 1,700m elevation.",
          info: "12:30 – 15:30 Day-Use · ¥1,200",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Kumanoyu+Hotel+Shiga+Kogen",
        },
      ],
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
        summary: "Hokuriku Shinkansen to Nagano Station (90m) + 70m Nagaden Express Bus direct to Shiga Kogen",
        station: "Nagano Station (長野駅) / Yudanaka Station",
        stationGoogleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Nagano+Station+East+Exit+Bus+Terminal",
      },
      vibeTags: ["Highest Elevation", "Massive Area", "Dry Snow"],
      bestFor: "Cruising endless interconnected peaks with cold, dry snow",
      officialUrl: "https://shigakogen-ski.or.jp/english/",
    },
  
    // ================= NIIGATA =================,

  {
      slug: "madarao-kogen",
      name: "Madarao Mountain Resort",
      japaneseName: "斑尾高原スキー場",
      region: "Nagano",
      area: "Iiyama / Madarao",
      description:
        "Nicknamed 'Madapow', Madarao is Japan's undisputed capital of official lift-served tree riding. Located in the heavy-snow belt above Iiyama Station, it features over 13 groomed and gladed official tree-run courses, natural halfpipes (SAWA), and a bowl-shaped layout where every run funnels safely back to the main base.",
      address: {
        postalCode: "〒389-2257",
        english: "11492-321 Madarao Kogen, Iiyama-shi, Nagano 389-2257, Japan",
        japanese: "長野県飯山市斑尾高原11492-321",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Madarao+Mountain+Resort+Iiyama+Nagano+Japan",
      },
      heroImage: "/trail-maps/madarao-kogen-photo.jpg",
      trailMapImage: "/trail-maps/madarao-kogen.jpg",
      mapGallery: [
        {
          title: "Madarao Mountain Resort Official Map & Tree Run Guide",
          caption:
            "Official trail map detailing all 32 courses including NINJA, SAWA I–III Natural Pipes, Powder Theater, Crystal Bowl, and Tangram connection.",
          imageUrl: "/trail-maps/madarao-kogen.jpg",
          badge: "Official Tree Run Map",
        },
        {
          title: "Madarao 3D Lift & Bowl Layout",
          caption:
            "Aerial overview of Madarao's natural bowl geometry and chairlift network.",
          imageUrl: "/trail-maps/madarao-kogen-aerial.jpg",
          badge: "3D Aerial Layout",
        },
        {
          title: "Overlooking the Madarao Bowl on a Bluebird Day",
          caption:
            "Snowboarders taking in the view across Madarao's central bowl and gladed ridges.",
          imageUrl: "/trail-maps/madarao-kogen-photo.jpg",
          badge: "Slope Photo",
        },
      ],
      trailMapUrl: "https://www.madarao.jp/ski/course",
      webcamUrl: "https://www.madarao.jp/ski",
      operatingHours: {
        seasonWindow: "Mid December – Late March",
        dayHours: "08:30 – 16:30",
        nightSkiing: "16:30 – 21:00 (Select Saturdays & peak holiday dates)",
        earlyBird: "Standard 08:30 Super Quad Lift start",
        notes: "Optional Mt.3 Pass or Tangram All-Mountain pass unlocks the neighboring Tangram Ski Circus bowls.",
      },
      pricing: {
        oneDayAdultYen: 6500,
        halfDayYen: 5500,
        twoDayYen: 12000,
        nightPassYen: 2500,
        childOneDayYen: 3500,
        seniorOneDayYen: 6000,
        seasonPassYen: 68000,
        seasonPassName: "Madarao Mountain Pass",
        fullBoardRentalDayYen: 5500,
        wearRentalDayYen: 4500,
        notes: "Upgrading to the Madarao + Tangram Common Pass (+¥500) opens 51 combined courses.",
      },
      snowboarderIntel: {
        liftFleet: "1 High-Speed Hooded Super Quad + 3 Quads + 6 Pair Lifts",
        terrainPark: "Free Ride Park + Natural Pipe (SAWA I/II/III) + NINJA 7m log rail feature",
        flatSpotWarning: "Low — the natural amphitheater bowl funnels riders back to the base without flat cat-tracks, though the Tangram traverse requires speed.",
        treeRunRules: "Gold Standard — 13+ official, named, patrolled gladed tree-run courses open to all riders without special registration.",
      },
      monthlySnowfallCm: {
        dec: 210,
        jan: 330,
        feb: 280,
        mar: 160,
        apr: 30,
        peakBaseCm: 340,
      },
      onsenAndVillage: [
        {
          name: "Madarao Kogen Hotel Onsen",
          japaneseName: "斑尾高原ホテル 温泉",
          category: "Onsen",
          description:
            "Alkaline simple thermal spring right at the base of the slopes, ideal for soothing sore legs after tree laps.",
          info: "06:00 – 10:00 / 12:00 – 23:00 · ¥1,000 Day Use",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Madarao+Kogen+Hotel+Onsen+Nagano",
        },
        {
          name: "Aki's Pub & Cafe / Heidi Restaurant",
          japaneseName: "レストラン ハイジ・Aki's Pub",
          category: "Food & Apres",
          description:
            "Classic slopeside burger, curry, and craft beer spots right at the bottom of the main quad lifts.",
          info: "Slopeside at Base Area",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Restaurant+Heidi+Madarao+Kogen",
        },
      ],
      signatureRuns: [
        {
          name: "Powder Wave 2 & Powder Theater",
          level: "Advanced",
          note: "Spacious, perfectly spaced birch glades holding deep 'Madapow' stashes.",
        },
        {
          name: "SAWA I / II / III Natural Pipe",
          level: "Advanced",
          note: "Natural gully terrain forming an organic snowsurf halfpipe through the trees.",
        },
        {
          name: "Crystal Bowl",
          level: "Advanced",
          note: "Steep, sustained north-facing tree bowl served by Lift No. 13.",
        },
        {
          name: "Paradise & Utopia",
          level: "Beginner",
          note: "Wide, forgiving groomers winding from the upper ridge to the base.",
        },
      ],
      coordinates: { lat: 36.8519, lon: 138.2858 },
      elevation: { base: 910, top: 1382, vertical: 472 },
      terrain: {
        beginner: 30,
        intermediate: 35,
        advanced: 35,
        runs: 32,
        lifts: 10,
        treeRunsAllowed: true,
      },
      dayPassYen: 6500,
      fromTokyo: {
        durationMinutes: 130,
        summary: "Hokuriku Shinkansen to Iiyama Station (100 mins) + 30-min direct community bus",
        station: "Iiyama Station (飯山駅)",
        stationGoogleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Iiyama+Station+Nagano+Japan",
      },
      vibeTags: ["#1 Tree Runs", "Madapow", "Natural Halfpipes"],
      bestFor: "Snowboarders obsessed with accessible, patrolled tree runs and natural gullies",
      officialUrl: "https://www.madarao.jp/ski/",
    },
  {
    slug: "hakuba-goryu-47",
    name: "Hakuba Goryu & Hakuba47",
    japaneseName: "エイブル白馬五竜 ＆ Hakuba47 ウインタースポーツパーク",
    region: "Nagano",
    area: "Hakuba Valley",
    description:
      "Two interconnected powerhouses sharing one lift pass. Hakuba Goryu offers 926m of vertical and high-altitude powder bowls at Alps Daira, while Hakuba47 boasts Japan's premier freestyle terrain park, an Olympic-standard halfpipe, and an official Tree Riding Zone.",
    address: {
      postalCode: "〒399-9211",
      english: "22184-10 Kamishiro, Hakuba-mura, Kitaazumi-gun, Nagano 399-9211, Japan",
      japanese: "長野県北安曇郡白馬村神城22184-10",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hakuba+Goryu+Snow+Resort+Nagano+Japan",
    },
    heroImage: "/trail-maps/hakuba-goryu-47-photo.jpg",
    trailMapImage: "/trail-maps/hakuba-goryu-47.jpg",
    mapGallery: [
      {
        title: "Hakuba Goryu & Hakuba47 Dual Mountain Map",
        caption: "Shows Alps Daira, Toomi, Iimori, and the 47 Terrain Park lines.",
        imageUrl: "/trail-maps/hakuba-happo-one.jpg",
        badge: "Dual-Mountain Map",
      },
      {
        title: "Alps Daira High-Alpine Powder Bowls",
        caption: "Untracked snow above the clouds at 1,676m with the Northern Alps ridge towering above.",
        imageUrl: "/trail-maps/hakuba-happo-one-riesen.jpg",
        badge: "1,676m Summit",
      },
    ],
    trailMapUrl: "https://www.hakuba47.co.jp/winter/en/mountain/trailmap/",
    webcamUrl: "https://www.hakuba47.co.jp/winter/en/mountain/webcam/",
    operatingHours: {
      seasonWindow: "Late November – Early May",
      dayHours: "08:00 – 16:30",
      nightSkiing: "18:00 – 21:30 (Goryu Toomi slope floodlit)",
      earlyBird: "07:00 sunrise laps on peak season weekends",
      notes: "The Goryu Telecabin Gondola (8-person) and Line-8 Gondola (6-person) access the summit ridge.",
    },
    pricing: {
      oneDayAdultYen: 8500,
      halfDayYen: 6800,
      twoDayYen: 16000,
      nightPassYen: 3200,
      childOneDayYen: 4500,
      seniorOneDayYen: 7500,
      seasonPassYen: 95000,
      seasonPassName: "Goryu & Hakuba47 Season Pass",
      fullBoardRentalDayYen: 6000,
      wearRentalDayYen: 4200,
      notes: "Pass is 100% valid across both Goryu and Hakuba47 slopes simultaneously.",
    },
    snowboarderIntel: {
      liftFleet:
        "16 lifts including the 8-person Goryu Telecabin Gondola, 6-person Hakuba47 Gondola, and 4 high-speed quads.",
      terrainPark:
        "The best park in Hakuba: Route 4 Park with Olympic superpipe, pro-level kickers, and creative jibs.",
      flatSpotWarning:
        "The bottom cat-track from Hakuba47 base back to Goryu Iimori has a flat section—carry speed.",
      treeRunRules:
        "Hakuba47 operates the 'Tree Riding Zone' (Members Only with registration & bib). Goryu requires strict boundary adherence.",
    },
    monthlySnowfallCm: {
      dec: 240,
      jan: 340,
      feb: 280,
      mar: 160,
      apr: 40,
      peakBaseCm: 350,
    },
    signatureRuns: [
      {
        name: "Route 1 to 4 (Hakuba47)",
        level: "Advanced",
        note: "Non-stop top-to-bottom terrain park and freeride course descending 900 vertical meters.",
      },
      {
        name: "Grand Prix (Goryu Alps Daira)",
        level: "Advanced",
        note: "Steep natural powder bowl and mogul pitch with panoramic Hakuba valley views.",
      },
      {
        name: "Toomi Slope (Night Skiing)",
        level: "Beginner",
        note: "Wide, perfectly groomed floodlit highway for evening carving and night laps.",
      },
    ],
    coordinates: {
      lat: 36.6631,
      lon: 137.8344,
    },
    elevation: {
      base: 750,
      top: 1676,
      vertical: 926,
    },
    terrain: {
      beginner: 35,
      intermediate: 40,
      advanced: 25,
      runs: 23,
      lifts: 16,
      treeRunsAllowed: true,
    },
    dayPassYen: 8500,
    fromTokyo: {
      durationMinutes: 160,
      summary:
        "Hokuriku Shinkansen to Nagano Station (~80m) + Alpico Hakuba Express Bus to Hakuba Goryu Bus Stop (~75m)",
      station: "JR Nagano Station (長野駅) / JR Kamishiro Station",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Kamishiro+Station+Nagano+Japan",
    },
    vibeTags: ["926m Vertical", "Superpipe & Park", "Alps Daira Powder", "Dual Mountain"],
    bestFor:
      "Riders who want Hakuba's best freestyle park alongside high-altitude powder bowls and night riding",
    officialUrl: "https://www.hakubagoryu.com/",
  },
  {
    slug: "tsugaike-kogen",
    name: "Tsugaike Mountain Resort",
    japaneseName: "つがいけマウンテンリゾート（栂池高原スキー場）",
    region: "Nagano",
    area: "Hakuba Valley",
    description:
      "Hakuba's powder gateway and freeride capital. Features the legendary 'TSUGA POW DBD' controlled avalanche gate program, 904m of vertical served by the 4,120m Eve Gondola, and Japan's widest beginner slope (1,200m wide Kane-no-naru-oka).",
    address: {
      postalCode: "〒399-9422",
      english: "Chikuniotsu, Otari-mura, Kitaazumi-gun, Nagano 399-9422, Japan",
      japanese: "長野県北安曇郡小谷村千国乙",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Tsugaike+Mountain+Resort+Nagano+Japan",
    },
    heroImage: "/trail-maps/tsugaike-kogen-photo.jpg",
    trailMapImage: "/trail-maps/tsugaike-kogen.jpg",
    mapGallery: [
      {
        title: "Tsugaike Full Trail Map & TSUGA POW DBD Gates",
        caption: "Shows the 4,120m Eve Gondola and the DBD avalanche-controlled powder gates.",
        imageUrl: "/trail-maps/hakuba-cortina.jpg",
        badge: "Official Map",
      },
      {
        title: "Tsuga Pow Deep Tree Glades",
        caption: "Chest-deep blower powder inside the gated Tsugaike DBD safety zone.",
        imageUrl: "/trail-maps/cortina-photo.jpg",
        badge: "TSUGA POW DBD",
      },
    ],
    trailMapUrl: "https://www.tsugaike.gr.jp/gelande",
    webcamUrl: "https://www.tsugaike.gr.jp/livecam",
    operatingHours: {
      seasonWindow: "Late November – Early May (Spring touring operates into Golden Week)",
      dayHours: "08:00 – 16:30",
      nightSkiing: "Closed (Night skiing discontinued)",
      earlyBird: "Morning DBD early briefing available on peak powder days",
      notes: "The 4,120m Eve Gondola takes riders from base straight to the upper powder bowls in 20 minutes.",
    },
    pricing: {
      oneDayAdultYen: 7500,
      halfDayYen: 6000,
      twoDayYen: 14000,
      nightPassYen: null,
      childOneDayYen: 4500,
      seniorOneDayYen: 6800,
      seasonPassYen: 80000,
      seasonPassName: "Tsugaike Season Pass",
      fullBoardRentalDayYen: 6000,
      wearRentalDayYen: 4200,
      notes: "DBD program requires watching a 10-minute avalanche safety lecture and wearing an armband.",
    },
    snowboarderIntel: {
      liftFleet:
        "19 lifts including the famous 4,120m Eve Gondola, 2 high-speed quads, and long beginner double lifts.",
      terrainPark: "TG PARKS designed by pro riders featuring progressive jump lines, rails, and wallrides.",
      flatSpotWarning:
        "The lower Kane-no-naru-oka slope is extremely gentle—snowboard beginners never need to fear steep drops.",
      treeRunRules:
        "TSUGA POW DBD (Double Black Diamond) program provides official legal access to expert tree powder zones upon lecture completion.",
    },
    monthlySnowfallCm: {
      dec: 280,
      jan: 380,
      feb: 310,
      mar: 180,
      apr: 60,
      peakBaseCm: 410,
    },
    signatureRuns: [
      {
        name: "TSUGA POW DBD (Tree Run)",
        level: "Advanced",
        note: "Official gated avalanche-controlled deep powder zone with steep natural pillows and trees.",
      },
      {
        name: "Han-no-ki Course",
        level: "Intermediate",
        note: "3,000m continuous tree-lined carving cruiser descending from the gondola summit.",
      },
      {
        name: "Kane-no-naru-oka",
        level: "Beginner",
        note: "The widest beginner slope in Japan at 1,200m across—impossble to collide with anyone.",
      },
    ],
    coordinates: {
      lat: 36.7578,
      lon: 137.8631,
    },
    elevation: {
      base: 800,
      top: 1704,
      vertical: 904,
    },
    terrain: {
      beginner: 50,
      intermediate: 30,
      advanced: 20,
      runs: 14,
      lifts: 19,
      treeRunsAllowed: true,
    },
    dayPassYen: 7500,
    fromTokyo: {
      durationMinutes: 165,
      summary:
        "Hokuriku Shinkansen to Nagano Station (~80m) + Alpico Express Bus directly to Tsugaike Kogen base (~85m)",
      station: "JR Nagano Station (長野駅) / Tsugaike Kogen Bus Terminal",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Tsugaike+Kogen+Bus+Terminal+Nagano+Japan",
    },
    vibeTags: ["TSUGA POW DBD", "4,120m Gondola", "1,200m Wide Slope", "Spring Touring"],
    bestFor:
      "Powder hunters wanting regulated deep tree glades alongside beginners wanting the widest, safest practice slopes in Japan",
    officialUrl: "https://www.tsugaike.gr.jp/",
  },
  {
    slug: "hakuba-iwatake",
    name: "Hakuba Iwatake Mountain Resort",
    japaneseName: "白馬岩岳マウンテンリゾート",
    region: "Nagano",
    area: "Hakuba Valley",
    description:
      "An independent standalone mountain at 1,289m with unforgettable 360-degree views of the Hakuba Northern Alps. Famous for natural terrain cruising, flowing banked slalom lines, high-altitude terrace cafes (Mountain Harbor), and untracked powder bowls in View D.",
    address: {
      postalCode: "〒399-9301",
      english: "12056 Hokujo, Hakuba-mura, Kitaazumi-gun, Nagano 399-9301, Japan",
      japanese: "長野県北安曇郡白馬村北城12056",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hakuba+Iwatake+Mountain+Resort+Nagano+Japan",
    },
    heroImage: "/trail-maps/hakuba-iwatake-photo.jpg",
    trailMapImage: "/trail-maps/hakuba-iwatake.jpg",
    mapGallery: [
      {
        title: "Hakuba Iwatake Full Trail Map",
        caption: "Shows the Noah Gondola, South Slope cruisers, and the north-facing View powder bowls.",
        imageUrl: "/trail-maps/hakuba-happo-one.jpg",
        badge: "Official Map",
      },
      {
        title: "Mountain Harbor & Northern Alps Panorama",
        caption: "The world-famous deck terrace overlooking the jagged Hakuba Sanzan peaks.",
        imageUrl: "/trail-maps/hakuba-happo-one-panorama.jpg",
        badge: "360° Alpine Views",
      },
    ],
    trailMapUrl: "https://iwatake-mountain-resort.com/winter/course",
    webcamUrl: "https://iwatake-mountain-resort.com/livecam",
    operatingHours: {
      seasonWindow: "Mid December – Late March",
      dayHours: "08:00 – 16:30",
      nightSkiing: "Closed",
      earlyBird: "07:30 weekend early upload during mid-winter peak",
      notes: "The brand-new Noah Gondola whisks riders to the 1,289m summit in under 7 minutes.",
    },
    pricing: {
      oneDayAdultYen: 6500,
      halfDayYen: 5200,
      twoDayYen: 12200,
      nightPassYen: null,
      childOneDayYen: 3800,
      seniorOneDayYen: 5900,
      seasonPassYen: 68000,
      seasonPassName: "Iwatake Season Pass",
      fullBoardRentalDayYen: 5800,
      wearRentalDayYen: 4000,
      notes: "Includes access to the Mountain Harbor observation deck and bakery.",
    },
    snowboarderIntel: {
      liftFleet:
        "8 lifts headlined by the new 8-passenger Noah Gondola and 3 high-speed quad lifts.",
      terrainPark: "Iwatake Freestyle Park and fun banked slalom courses with flowy berms.",
      flatSpotWarning:
        "The bottom connector run returning to the Noah Gondola base has gentle flats—keep speed.",
      treeRunRules:
        "View C and View D natural bowl slopes are kept 100% un-groomed for powder days. Forest areas outside courses are restricted.",
    },
    monthlySnowfallCm: {
      dec: 210,
      jan: 300,
      feb: 250,
      mar: 130,
      apr: 20,
      peakBaseCm: 310,
    },
    signatureRuns: [
      {
        name: "View Course D (Powder Bowl)",
        level: "Advanced",
        note: "North-facing steep natural bowl retaining dry powder with views of Tsugaike and Cortina.",
      },
      {
        name: "South Course (Scenic Cruiser)",
        level: "Intermediate",
        note: "Wide, perfectly undulating corduroy carving run with full view of Hakuba valley.",
      },
      {
        name: "Mountain Harbor Banked Slalom",
        level: "Intermediate",
        note: "Fun natural berms, waves, and bank turns flowing through scenic mountain terraces.",
      },
    ],
    coordinates: {
      lat: 36.7175,
      lon: 137.8636,
    },
    elevation: {
      base: 750,
      top: 1289,
      vertical: 539,
    },
    terrain: {
      beginner: 30,
      intermediate: 50,
      advanced: 20,
      runs: 16,
      lifts: 8,
      treeRunsAllowed: true,
    },
    dayPassYen: 6500,
    fromTokyo: {
      durationMinutes: 155,
      summary:
        "Hokuriku Shinkansen to Nagano Station (~80m) + Alpico Hakuba Express Bus directly to Iwatake base (~70m)",
      station: "JR Nagano Station (長野駅) / Hakuba Happo Bus Terminal",
      stationGoogleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hakuba+Iwatake+Mountain+Resort+Nagano+Japan",
    },
    vibeTags: ["360° Northern Alps Views", "Mountain Harbor", "Banked Slalom", "Noah Gondola"],
    bestFor:
      "Riders wanting the most scenic mountain vibe in Hakuba with flowy terrain parks, banked slalom, and un-groomed powder bowls",
    officialUrl: "https://iwatake-mountain-resort.com/",
  },
];
