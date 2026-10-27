/**
 * Image attribution data for locally hosted resort photos.
 *
 * Photo licenses (Wikimedia Commons) require attribution. The /credits page
 * renders this list, and docs/IMAGE_CREDITS.md keeps the long-form record.
 */
export interface ImageCredit {
  /** File name inside public/trail-maps */
  file: string;
  author: string;
  license: string;
  source: string;
}

export const PHOTO_CREDITS: ImageCredit[] = [
  {
    file: "akakura-onsen-photo.jpg",
    author: "Raita Futo",
    license: "CC BY 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Akakura_onsen_ski_resort_slopes_(49819875818).jpg",
  },
  {
    file: "furano-photo.jpg",
    author: "wakimasa",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Furano_Snow_Resort_view1.JPG",
  },
  {
    file: "appi-kogen-photo.jpg",
    author: "掬茶",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:APPI_Ski_Resort_jan_2023h.jpg",
  },
  {
    file: "asahidake-photo.jpg",
    author: "Calistemon",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Mount_Asahi_(Daisetsuzan)_under_snow,_April_2023_02.jpg",
  },
  {
    file: "tsugaike-kogen-photo.jpg",
    author: "Σ64",
    license: "CC BY 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Tsugaike-Kogen_Ski_resort_01.jpg",
  },
  {
    file: "maiko-photo.jpg",
    author: "ebio",
    license: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Maiko_-_panoramio.jpg",
  },
  {
    file: "hakuba-goryu-47-photo.jpg",
    author: "苗場山",
    license: "CC BY-SA 3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:%E4%BA%94%E7%AB%9C%E3%81%8B%E3%82%89%E3%81%BF%E3%81%9F%E7%99%BD%E9%A6%AC.jpg",
  },
  {
    file: "rusutsu-photo.jpg",
    author: "MIKI Yoshihito",
    license: "CC BY 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:SAKURAKO_-_RUSUTSU_Resort._(39198043194).jpg",
  },
  {
    file: "hakuba-iwatake-photo.jpg",
    author: "Ski Mania",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Hakuba_Iwatake_Snow_Field.JPG",
  },
  {
    file: "iwappara-photo.jpg",
    author: "Famifamifami",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Iwappara.jpg",
  },
  {
    file: "kiroro-photo.jpg",
    author: "MIKI Yoshihito",
    license: "CC BY 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:SAKURAKO_-_Kiroro_Resort._(25006803519).jpg",
  },
  {
    file: "takasu-snow-park-photo.jpg",
    author: "Alpsdake",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Takasu_Snow_Park_(2019-03-09).jpg",
  },
  {
    file: "tomamu-photo.jpg",
    author: "Masahiro TAKAGI",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Tomamu_ski_resort_01.jpg",
  },
  {
    file: "nozawa-onsen-powder.jpg",
    author: "Hideyuki KAMON",
    license: "CC BY-SA 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Nozawa_Onsen_01.jpg",
  },
  {
    file: "geto-kogen-photo.jpg",
    author: "663highland",
    license: "CC BY 2.5",
    source: "https://commons.wikimedia.org/wiki/File:Geto-kogen01s3200.jpg",
  },
];

export const TRAIL_MAP_CREDIT = {
  sourceName: "Snowline",
  sourceUrl: "https://snowline.jp",
} as const;
