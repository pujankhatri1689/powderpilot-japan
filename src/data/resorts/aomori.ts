import type { Resort } from "@/data/types";

export const AOMORI_RESORTS: Resort[] = [
  {
      slug: "aomori-spring",
      name: "Aomori Spring Ski Resort",
      japaneseName: "青森スプリング・スキーリゾート",
      region: "Aomori",
      area: "Ajigasawa / Mt. Iwaki",
      description:
        "Carved into the northern flank of 1,625m Mt. Iwaki overlooking the Sea of Japan and Tsugaru Peninsula, Aomori Spring combines deep Siberian sea-effect powder with Japan's most famous terrain parks and a 22-foot Olympic-spec superpipe. Starting in 2026, daily pass sales are capped at 1,200 guests per day to guarantee zero lift lines and untracked stashes.",
      address: {
        postalCode: "〒038-2793",
        english: "Ajigasawa Kogen, Ajigasawa-machi, Nishitsugaru-gun, Aomori 038-2793, Japan",
        japanese: "青森県西津軽郡鰺ヶ沢町鰺ヶ沢高原",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Aomori+Spring+Ski+Resort+Ajigasawa+Aomori+Japan",
      },
      heroImage: "/trail-maps/aomori-spring-photo.jpg",
      trailMapImage: "/trail-maps/aomori-spring.jpg",
      mapGallery: [
        {
          title: "Aomori Spring 2026 Official English Trail Map",
          caption:
            "Official 2026 trail map showing the 2,967m Gondola, Quad 1 & 2, Night Grooming Areas, and the 1,200-pass daily cap.",
          imageUrl: "/trail-maps/aomori-spring.jpg",
          badge: "2026 English Map",
        },
        {
          title: "Aomori Spring Bilingual Tree Zone Map (DG-1 to GG-4)",
          caption:
            "Detailed bilingual map highlighting the 7 designated 'At Your Own Risk' tree zones (DG-1/2/3 & GG-1/2/3/4).",
          imageUrl: "/trail-maps/aomori-spring-2.jpg",
          badge: "Tree Zone Map",
        },
        {
          title: "Mount Iwaki ('Tsugaru Fuji') Towering Above Aomori Spring",
          caption:
            "The 1,625m volcanic cone of Mt. Iwaki catches relentless Sea of Japan snowstorms.",
          imageUrl: "/trail-maps/aomori-spring-photo.jpg",
          badge: "Mt. Iwaki Peak",
        },
      ],
      trailMapUrl: "https://www.aomorispring.com/",
      webcamUrl: "https://www.aomorispring.com/",
      operatingHours: {
        seasonWindow: "Mid December – Early April",
        dayHours: "08:30 – 16:30",
        nightSkiing: "16:30 – 20:30 on Quad 1 (Sunshine, Paradise & Lower Wave courses)",
        earlyBird: "08:30 Gondola opening",
        notes: "Daily day-pass sales are capped at 1,200 tickets (Rockwood Hotel guests & season pass holders guaranteed entry)—book online in advance!",
      },
      pricing: {
        oneDayAdultYen: 6600,
        halfDayYen: 5200,
        twoDayYen: 12600,
        nightPassYen: 2800,
        childOneDayYen: 3900,
        seniorOneDayYen: 5500,
        seasonPassYen: 68000,
        seasonPassName: "Aomori Spring Season Pass",
        fullBoardRentalDayYen: 5800,
        wearRentalDayYen: 4800,
        notes: "Includes the 2,967m Gondola, high-speed quads, and full terrain park access.",
      },
      snowboarderIntel: {
        liftFleet: "1 6-Passenger Gondola (2,967m) + 2 High-Speed Quads (Quad 1 & Quad 2) + 1 Pair Lift (Diamond Lift)",
        terrainPark: "World-renowned Snow Park + Pipe Dream (22ft superpipe used by Olympic pros)",
        flatSpotWarning: "Very Low — long, continuous 3.4km Gondola runs with ocean views.",
        treeRunRules: "7 clearly mapped 'At Your Own Risk' tree zones (GG-1 to GG-4 off the Gondola & DG-1 to DG-3 off Diamond Lift) open through mature beech forests.",
      },
      monthlySnowfallCm: {
        dec: 220,
        jan: 340,
        feb: 295,
        mar: 185,
        apr: 35,
        peakBaseCm: 360,
      },
      onsenAndVillage: [
        {
          name: "Rockwood Hotel & Spa Ajigasawa Onsen",
          japaneseName: "ロックウッド・ホテル＆スパ 鰺ヶ沢温泉",
          category: "Onsen",
          description:
            "Ski-in/ski-out resort hotel featuring fossil-seawater outdoor rotenburo looking straight out toward the Sea of Japan.",
          info: "Slopeside Base · ¥1,200 Day Use",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Rockwood+Hotel+and+Spa+Aomori+Spring",
        },
        {
          name: "Mountain Cafe & Ramen House (Base Village)",
          japaneseName: "マウンテンカフェ＆ラーメンハウス",
          category: "Food & Apres",
          description:
            "Steaming Aomori miso-curry-milk ramen, wood-fired pizza, and local apple cider right at the gondola base.",
          info: "Gondola Base",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Aomori+Spring+Ski+Resort+Japan",
        },
      ],
      signatureRuns: [
        {
          name: "The Corkscrew & Piste Off + GG-1/GG-2 Trees",
          level: "Advanced",
          note: "Steep ungroomed gondola faces flanked by spaced beech tree powder zones.",
        },
        {
          name: "Sunshine & Upper/Lower Wave (Night Grooming Area)",
          level: "Intermediate",
          note: "Groomed late at night so overnight snowfall piles fresh powder directly onto corduroy.",
        },
        {
          name: "Panorama & Skyline Course (3,400m)",
          level: "Beginner",
          note: "Sweeping 3.4km top-to-bottom cruiser with views of the Sea of Japan.",
        },
      ],
      coordinates: { lat: 40.6952, lon: 140.2833 },
      elevation: { base: 376, top: 921, vertical: 545 },
      terrain: {
        beginner: 55,
        intermediate: 35,
        advanced: 10,
        runs: 22,
        lifts: 4,
        treeRunsAllowed: true,
      },
      dayPassYen: 6600,
      fromTokyo: {
        durationMinutes: 255,
        summary: "Tohoku Shinkansen Hayabusa to Shin-Aomori Station (195 mins) + 60-min resort shuttle/bus",
        station: "Shin-Aomori Station / Hirosaki Station (新青森駅 / 弘前駅)",
        stationGoogleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Shin-Aomori+Station+Aomori+Japan",
      },
      vibeTags: ["1,200 Pass Cap", "Sea of Japan Views", "Beech Tree Glades"],
      bestFor: "Freeriders and park riders wanting uncrowded Gondola tree laps and world-class jumps",
      officialUrl: "https://www.aomorispring.com/",
    },

  {
      slug: "hakkoda",
      name: "Hakkoda Ropeway & Ski Area",
      japaneseName: "八甲田ロープウェー・八甲田国際スキー場",
      region: "Aomori",
      area: "Aomori City / Mt. Hakkoda",
      description:
        "A sacred pilgrimage site for deep-powder snowboarders worldwide. Centered around a 101-passenger ropeway climbing to the 1,324m Tamoyachidake summit, Hakkoda has almost no groomed runs—instead offering 5km–7km descents through surreal Juhyo snow monsters, bottomless northern Tohoku powder, and vast guided backcountry routes.",
      address: {
        postalCode: "〒030-0188",
        english: "1-12 Kansuizawa, Arakawa, Aomori-shi, Aomori 030-0188, Japan",
        japanese: "青森県青森市荒川寒水沢1-12",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Hakkoda+Ropeway+Aomori+Japan",
      },
      heroImage: "/trail-maps/hakkoda-photo.jpg",
      trailMapImage: "/trail-maps/hakkoda.jpg",
      mapGallery: [
        {
          title: "Hakkoda Ropeway Official Course & Backcountry Route Map",
          caption:
            "Official route schematic showing the 1,324m Summit Park Station, Forest Course (5km), Direct Course (3.5km), and backcountry routes toward Sukayu & Jogakura Onsen.",
          imageUrl: "/trail-maps/hakkoda.jpg",
          badge: "Official Route Map",
        },
        {
          title: "Hakkoda Ground & Base Lift Map",
          caption:
            "Detailed map of the Kunimizaka base pair lifts, Slalom Course, and Ropeway terminal.",
          imageUrl: "/trail-maps/hakkoda-2.png",
          badge: "Base Area Map",
        },
        {
          title: "Drawing S-Turns Through Hakkoda's Juhyo Snow Monsters",
          caption:
            "Untracked powder fields between rime-crusted Aomori fir trees at the top of Hakkoda Ropeway.",
          imageUrl: "/trail-maps/hakkoda-photo.jpg",
          badge: "Hakkoda Powder",
        },
      ],
      trailMapUrl: "https://www.hakkoda-ropeway.jp/ski/",
      webcamUrl: "https://www.hakkoda-ropeway.jp/",
      operatingHours: {
        seasonWindow: "Early December – Mid May",
        dayHours: "09:00 – 15:40 (16:20 from March to May)",
        nightSkiing: "No night skiing",
        earlyBird: "09:00 first Ropeway cabin (departs every 15–20 mins)",
        notes: "High winds can pause the Ropeway during peak January blizzards, while the lower pair lifts keep spinning in the sheltered trees.",
      },
      pricing: {
        oneDayAdultYen: 5900,
        halfDayYen: 4500,
        twoDayYen: 11000,
        nightPassYen: null,
        childOneDayYen: 3800,
        seniorOneDayYen: 5900,
        seasonPassYen: 62000,
        seasonPassName: "Hakkoda Season Pass",
        fullBoardRentalDayYen: 5500,
        wearRentalDayYen: 4500,
        notes: "Single Ropeway ticket (¥1,400) or 5-ride Ropeway coupon (¥5,600) is also popular for backcountry touring laps.",
      },
      snowboarderIntel: {
        liftFleet: "1 101-Passenger Aerial Ropeway (2,459m length, 663m vertical in 10 mins) + 2 Base Pair Lifts",
        terrainPark: "100% natural terrain — pillows, wind-lips, snow monsters, and birch glades",
        flatSpotWarning: "High in deep powder on the lower run-outs of the 5km Forest Course — keep your board waxed and carry momentum through the lower flats!",
        treeRunRules: "Entire upper mountain is an open, uncompacted natural snowfield marked by bamboo poles; carry beacon, probe, and shovel (and hire a local guide if venturing onto the Central/Sukayu routes).",
      },
      monthlySnowfallCm: {
        dec: 260,
        jan: 410,
        feb: 360,
        mar: 240,
        apr: 80,
        peakBaseCm: 480,
      },
      onsenAndVillage: [
        {
          name: "Sukayu Onsen (Hiba Sennin Buro 1,000-Person Bath)",
          japaneseName: "酸ヶ湯温泉 (ヒバ千人風呂)",
          category: "Onsen",
          description:
            "Iconic 300-year-old all-cypress bathhouse just 5 minutes from Hakkoda Ropeway—and the finish line of the famous Sukayu backcountry route.",
          info: "07:00 – 17:30 · ¥1,000 Day Use",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Sukayu+Onsen+Aomori+Japan",
        },
        {
          name: "Jogakura Onsen Hotel",
          japaneseName: "ホテル城ヶ倉 (城ヶ倉温泉)",
          category: "Onsen",
          description:
            "Luxury beech-forest hot spring hotel at the base of the Jogakura backcountry route.",
          info: "11:30 – 16:00 · ¥1,000 Day Use",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Hotel+Jogakura+Aomori+Japan",
        },
      ],
      signatureRuns: [
        {
          name: "Direct Course (ダイレクトコース · 3,500m)",
          level: "Advanced",
          note: "Steep, uncompacted 30° fall-line descent through snow monsters and deep glades straight under the ropeway.",
        },
        {
          name: "Forest Course (フォレストコース · 5,000m)",
          level: "Intermediate",
          note: "5km winding journey from the 1,324m summit through Juhyo fields and quiet birch forests.",
        },
        {
          name: "Central & Sukayu Backcountry Routes",
          level: "Advanced",
          note: "Legendary guided backcountry routes dropping all the way to Sukayu Onsen.",
        },
      ],
      coordinates: { lat: 40.679, lon: 140.8347 },
      elevation: { base: 661, top: 1324, vertical: 663 },
      terrain: {
        beginner: 15,
        intermediate: 35,
        advanced: 50,
        runs: 5,
        lifts: 3,
        treeRunsAllowed: true,
      },
      dayPassYen: 5900,
      fromTokyo: {
        durationMinutes: 245,
        summary: "Tohoku Shinkansen Hayabusa to Shin-Aomori Station (185 mins) + 60-min JR Bus Mizuumi-go to Hakkoda Ropeway",
        station: "Shin-Aomori Station / Aomori Station (新青森駅 / 青森駅)",
        stationGoogleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Shin-Aomori+Station+Aomori+Japan",
      },
      vibeTags: ["480cm Base Depth", "Backcountry Mecca", "Sukayu Onsen"],
      bestFor: "Advanced powder riders and backcountry splitboarders chasing Japan's deepest snow",
      officialUrl: "https://www.hakkoda-ropeway.jp/",
    },

  {
      slug: "owani-onsen",
      name: "Owani Onsen Ski Resort",
      japaneseName: "大鰐温泉スキー場",
      region: "Aomori",
      area: "Owani / Tsugaru",
      description:
        "Opened in 1923 as one of Tohoku's oldest and most storied ski mountains, Owani Onsen Ski Resort offers 525m of vertical drop on Mt. Ajara with zero crowds, a ¥4,000 lift pass, a 4.2km Panorama Course, and an 800-year-old hot spring town and JR train station right at the base.",
      address: {
        postalCode: "〒038-0211",
        english: "Hikage-1-92 Owani, Owani-machi, Minamitsugaru-gun, Aomori 038-0211, Japan",
        japanese: "青森県南津軽郡大鰐町大字大鰐字日影1-92",
        googleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Owani+Onsen+Ski+Resort+Aomori+Japan",
      },
      heroImage: "/trail-maps/owani-onsen-photo.jpg",
      trailMapImage: "/trail-maps/owani-onsen.jpg",
      mapGallery: [
        {
          title: "Owani Onsen Ski Resort Official English Trail Map",
          caption:
            "Official English map showing the 4,200m Amaike Panorama Course, 2,100m International Course, Off-Piste Course, and Pair Lift network.",
          imageUrl: "/trail-maps/owani-onsen.jpg",
          badge: "Official English Map",
        },
        {
          title: "Owani Onsen 3D Aerial Mountain Layout",
          caption:
            "Aerial view of the 525m vertical drop from the Aomori Winery Hotel summit to the Amaike Ski Center.",
          imageUrl: "/trail-maps/owani-onsen-aerial.jpg",
          badge: "3D Aerial Layout",
        },
        {
          title: "Amaike Ski Center Base at Owani Onsen",
          caption:
            "Friendly local Tsugaru atmosphere with zero lift lines and authentic Aomori snow.",
          imageUrl: "/trail-maps/owani-onsen-photo.jpg",
          badge: "Base Lodge",
        },
      ],
      trailMapUrl: "https://www.owani-ski.com/",
      webcamUrl: "https://www.owani-ski.com/",
      operatingHours: {
        seasonWindow: "Late December – Late March",
        dayHours: "08:30 – 16:30",
        nightSkiing: "No night skiing",
        earlyBird: "08:30 Amaike Pair Lift opening",
        notes: "Great storm-day backup when high winds close the upper lifts at Hakkoda or Aomori Spring!",
      },
      pricing: {
        oneDayAdultYen: 4000,
        halfDayYen: 2900,
        twoDayYen: 7500,
        nightPassYen: null,
        childOneDayYen: 2100,
        seniorOneDayYen: 2900,
        seasonPassYen: 32000,
        seasonPassName: "Owani Onsen Season Pass",
        fullBoardRentalDayYen: 4000,
        wearRentalDayYen: 3500,
        notes: "At ¥4,000 for a full day (and ¥2,900 for seniors), Owani is one of the best-value 500m+ vertical mountains in Japan.",
      },
      snowboarderIntel: {
        liftFleet: "3 Pair Lifts (Amaike Pair, International Family Lift, Pair Lift No. 3 to summit)",
        terrainPark: "Natural side-hits, rollers, and old-school FIS competition fall-lines",
        flatSpotWarning: "Low — steep, continuous pitch down the main International and Maehira courses.",
        treeRunRules: "Official 'Off-piste Course' and uncompacted Kansawa/Takinosawa faces open off the top lift after snowfall.",
      },
      monthlySnowfallCm: {
        dec: 160,
        jan: 260,
        feb: 225,
        mar: 135,
        apr: 15,
        peakBaseCm: 250,
      },
      onsenAndVillage: [
        {
          name: "Wancome (鰐come) Owani Onsen Day Spa",
          japaneseName: "大鰐温泉 地域交流センター 鰐come",
          category: "Onsen",
          description:
            "Spacious cypress and stone outdoor hot spring complex right in front of JR Owani-Onsen Station.",
          info: "09:00 – 22:00 · ¥600 Adult",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Wancome+Owani+Onsen+Aomori",
        },
        {
          name: "Owani Onsen Moyashi Ramen (豆もやしラーメン)",
          japaneseName: "大鰐温泉もやしラーメン",
          category: "Food & Apres",
          description:
            "Local specialty ramen topped with crisp, geothermal-spring-grown Owani bean sprouts—a 400-year Tsugaru winter tradition.",
          info: "Outside Owani-Onsen Station",
          googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Owani+Onsen+Station+Aomori",
        },
      ],
      signatureRuns: [
        {
          name: "Off-Piste Course & Kansawa Course",
          level: "Advanced",
          note: "Steep, ungroomed upper-mountain powder pitch dropping from the summit lift.",
        },
        {
          name: "Amaike International Course (2,100m)",
          level: "Intermediate",
          note: "Fast, sustained 2.1km competition cruiser from top to bottom.",
        },
        {
          name: "Amaike Panorama Course (4,200m)",
          level: "Beginner",
          note: "Scenic 4.2km forest run winding gently from the summit to the base.",
        },
      ],
      coordinates: { lat: 40.5076, lon: 140.5646 },
      elevation: { base: 190, top: 715, vertical: 525 },
      terrain: {
        beginner: 35,
        intermediate: 35,
        advanced: 30,
        runs: 9,
        lifts: 3,
        treeRunsAllowed: true,
      },
      dayPassYen: 4000,
      fromTokyo: {
        durationMinutes: 235,
        summary: "Tohoku Shinkansen Hayabusa to Shin-Aomori Station + JR Ou Main Line to Owani-Onsen Station + 5-min bus/taxi",
        station: "Owani-Onsen Station (大鰐温泉駅)",
        stationGoogleMapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Owani-Onsen+Station+Aomori+Japan",
      },
      vibeTags: ["¥4,000 Day Pass", "525m Vertical", "800-Year Onsen Town"],
      bestFor: "Soul riders and storm-chasing travellers wanting authentic Tsugaru culture and zero crowds",
      officialUrl: "https://www.owani-ski.com/",
    }
];
