"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Resort } from "@/data/resorts";
import { translateLevel } from "@/i18n/translations";

/**
 * Multi-image touch-swipeable HD Trail Map & Mountain Photo Gallery
 * with prev/next arrows, dot indicators, thumbnail strip, and full-screen zoom.
 */
export default function MountainMapDiagram({
  resort: rawResort,
}: {
  resort: Resort;
}) {
  const { lang, t, localizeResort } = useLanguage();
  const resort = localizeResort(rawResort);

  const slides =
    resort.mapGallery.length > 0
      ? resort.mapGallery
      : [
          {
            title: `${resort.name} Official Trail Map`,
            caption: "Official course map.",
            imageUrl: resort.trailMapImage,
            badge: "Official HD Map",
          },
        ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const currentSlide = slides[activeIndex] ?? slides[0];

  function prevSlide() {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  function nextSlide() {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-charcoal-light bg-charcoal p-5 sm:p-6">
      {/* Header Row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ice">
            {t.maps.galleryEyebrow(activeIndex + 1, slides.length)}
          </p>
          <h2 className="mt-0.5 text-lg font-bold text-snow">
            {currentSlide.title}
          </h2>
          <p className="mt-0.5 text-xs text-snow-muted">
            {currentSlide.caption}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setZoomed(true)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-ice-deep px-3.5 py-2 text-xs font-semibold text-charcoal transition hover:bg-ice"
          >
            <span>{t.maps.fullResZoom}</span>
          </button>
          <a
            href={resort.trailMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-charcoal-light bg-charcoal-light/50 px-3.5 py-2 text-xs font-semibold text-snow transition hover:border-ice hover:text-ice"
          >
            <span>{t.maps.officialMapPage}</span>
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>

      {/* Main Swipeable Carousel Viewport */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative mt-4 overflow-hidden rounded-xl border border-charcoal-light bg-charcoal-dark"
      >
        <button
          type="button"
          onClick={() => setZoomed(true)}
          className="group relative block w-full cursor-zoom-in overflow-hidden"
          title={t.maps.tapFullScreen}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={currentSlide.imageUrl}
            src={currentSlide.imageUrl}
            alt={currentSlide.title}
            className="max-h-[640px] w-full bg-charcoal-dark object-contain transition duration-300"
          />

          {currentSlide.badge && (
            <span className="absolute left-3 top-3 rounded-lg bg-charcoal/90 px-3 py-1 text-xs font-bold text-ice shadow-md backdrop-blur-sm">
              {currentSlide.badge}
            </span>
          )}

          <span className="absolute bottom-3 right-3 rounded-lg bg-charcoal/90 px-3 py-1.5 text-xs font-semibold text-ice shadow-lg backdrop-blur-sm">
            {t.maps.tapFullScreen}
          </span>
        </button>

        {/* Left / Right Swipe Arrows if multiple maps */}
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous map"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-charcoal-light bg-charcoal/90 text-base font-bold text-snow shadow-lg backdrop-blur-sm transition hover:border-ice hover:text-ice"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next map"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-charcoal-light bg-charcoal/90 text-base font-bold text-snow shadow-lg backdrop-blur-sm transition hover:border-ice hover:text-ice"
            >
              ›
            </button>
          </>
        )}

        {/* Thumbnail / Slide Selector Strip */}
        {slides.length > 1 && (
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-charcoal-light bg-charcoal/90 px-4 py-3">
            <div className="flex flex-wrap gap-2">
              {slides.map((slide, idx) => {
                const active = idx === activeIndex;
                return (
                  <button
                    key={slide.imageUrl}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-semibold transition ${
                      active
                        ? "border-ice bg-ice-deep/20 text-ice"
                        : "border-charcoal-light bg-charcoal text-snow-muted hover:text-snow"
                    }`}
                  >
                    <span>{t.maps.mapIndex(idx + 1)}</span>
                    <span className="max-w-[180px] truncate">
                      {slide.badge ?? slide.title}
                    </span>
                  </button>
                );
              })}
            </div>
            <span className="text-[11px] text-snow-muted">
              {t.maps.swipeHint}
            </span>
          </div>
        )}

        {/* Legend / Stats Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-charcoal-light bg-charcoal px-4 py-3 text-xs text-snow-muted">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              {t.maps.beginnerLegend(resort.terrain.beginner)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ice-deep" />
              {t.maps.intermediateLegend(resort.terrain.intermediate)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              {t.maps.advancedLegend(resort.terrain.advanced)}
            </span>
          </div>
          <span>
            {t.maps.elevationFooter(
              resort.elevation.base,
              resort.elevation.top,
              resort.elevation.vertical,
              resort.terrain.runs
            )}
          </span>
        </div>
      </div>

      {/* Signature Runs Breakdown */}
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {resort.signatureRuns.map((run) => {
          const badgeStyle =
            run.level === "Advanced"
              ? "border-rose-500/40 bg-rose-500/15 text-rose-300"
              : run.level === "Intermediate"
              ? "border-ice/40 bg-ice/15 text-ice"
              : "border-emerald-400/40 bg-emerald-400/15 text-emerald-300";

          return (
            <div
              key={run.name}
              className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-4"
            >
              <span
                className={`inline-block rounded-md border px-2 py-0.5 text-[11px] font-semibold ${badgeStyle}`}
              >
                {translateLevel(run.level, lang)}
              </span>
              <h3 className="mt-2 text-sm font-bold text-snow">{run.name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-snow-muted">
                {run.note}
              </p>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal when user clicks the map */}
      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${currentSlide.title} full screen`}
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal-dark/95 p-4 backdrop-blur-md"
        >
          <div className="mb-3 flex w-full max-w-6xl flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-sm font-bold text-snow">
                {currentSlide.title}
              </p>
              <p className="text-xs text-snow-muted">{currentSlide.caption}</p>
            </div>
            <div className="flex items-center gap-2">
              {slides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    className="rounded-xl border border-charcoal-light bg-charcoal px-3 py-1.5 text-xs font-semibold text-snow hover:border-ice"
                  >
                    {t.maps.prevMap}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    className="rounded-xl border border-charcoal-light bg-charcoal px-3 py-1.5 text-xs font-semibold text-snow hover:border-ice"
                  >
                    {t.maps.nextMap}
                  </button>
                </>
              )}
              <a
                href={currentSlide.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-xl border border-charcoal-light bg-charcoal px-3 py-1.5 text-xs font-semibold text-ice hover:border-ice"
              >
                {t.maps.openRaw}
              </a>
              <button
                type="button"
                onClick={() => setZoomed(false)}
                className="rounded-xl bg-ice-deep px-3.5 py-1.5 text-xs font-bold text-charcoal hover:bg-ice"
              >
                {t.maps.close}
              </button>
            </div>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-6xl overflow-auto rounded-2xl border border-charcoal-light bg-charcoal-dark p-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              className="mx-auto h-auto max-w-none sm:max-w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
