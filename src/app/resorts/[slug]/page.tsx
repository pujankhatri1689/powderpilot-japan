import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResortDetailTabs from "@/components/ResortDetailTabs";
import { RESORTS, getResortBySlug } from "@/data/resorts";
import { getSiteUrl } from "@/lib/siteUrl";

const siteUrl = getSiteUrl();

export function generateStaticParams() {
  return RESORTS.map((resort) => ({ slug: resort.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resort = getResortBySlug(slug);
  if (!resort) {
    return { title: "Resort Not Found | PowderPilot Japan" };
  }

  const title = `${resort.name} (${resort.japaneseName}) | PowderPilot Japan`;
  const description = `${resort.name} in ${resort.region} (${resort.area}): ${resort.elevation.vertical}m vertical (${resort.elevation.base}m–${resort.elevation.top}m), ${resort.terrain.runs} runs, ¥${resort.dayPassYen.toLocaleString()} 1-day pass, HD trail maps, and 7-day Open-Meteo / JMA MSM mountain forecast.`;
  const canonicalUrl = `${siteUrl}/resorts/${resort.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "PowderPilot Japan",
      locale: "en_US",
      alternateLocale: ["ja_JP"],
      type: "website",
      images: [
        {
          url: resort.heroImage,
          alt: `${resort.name} (${resort.japaneseName}) mountain view`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resort.heroImage],
    },
  };
}

export default async function ResortDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = RESORTS.findIndex((r) => r.slug === slug);
  const resort = RESORTS[currentIndex];

  if (!resort) {
    notFound();
  }

  const prevResort =
    RESORTS[(currentIndex - 1 + RESORTS.length) % RESORTS.length]!;
  const nextResort = RESORTS[(currentIndex + 1) % RESORTS.length]!;

  return (
    <ResortDetailTabs
      resort={resort}
      prevResort={prevResort}
      nextResort={nextResort}
    />
  );
}
