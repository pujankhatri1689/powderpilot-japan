import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResortDetailTabs from "@/components/ResortDetailTabs";
import { RESORTS, getResortBySlug } from "@/data/resorts";

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
  return {
    title: `${resort.name} (${resort.japaneseName}) | PowderPilot Japan`,
    description: resort.description,
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
