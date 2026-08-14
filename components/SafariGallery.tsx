'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SafariGalleryProps {
  className?: string;
}

const SafariGallery: React.FC<SafariGalleryProps> = ({ className = '' }) => {
  const [images, setImages] = useState<string[]>([]);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/safari-images')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled) setImages(data?.gallery || []);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  if (images.length === 0) return null;

  // Alternating heights + vertical offsets create a staggered, dynamic
  // rhythm as the guest scrolls — deliberately not another uniform grid.
  const CARD_STYLES = [
    { h: 'h-[280px] md:h-[340px]', offset: 'md:mt-0' },
    { h: 'h-[360px] md:h-[440px]', offset: 'md:mt-10' },
    { h: 'h-[240px] md:h-[300px]', offset: 'md:-mt-4' },
    { h: 'h-[320px] md:h-[400px]', offset: 'md:mt-16' },
  ];

  return (
    <section className={`py-16 md:py-24 bg-[#1a1310] overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="text-[#bf885e] font-bold tracking-[0.35em] text-[9px] md:text-[11px] uppercase mb-3">
              Moments from the Wild
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif !text-white leading-tight">
              What You Might Encounter
            </h2>
          </div>
          <div className="hidden md:flex gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#1a1310] transition-colors"
            >
              <i className="fa-solid fa-arrow-left text-sm"></i>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#1a1310] transition-colors"
            >
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory px-4 md:px-8 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, idx) => {
          const style = CARD_STYLES[idx % CARD_STYLES.length];
          return (
            <button
              key={src + idx}
              type="button"
              onClick={() => setLightboxSrc(src)}
              className={`relative shrink-0 w-[220px] md:w-[280px] ${style.h} ${style.offset} rounded-2xl overflow-hidden shadow-2xl snap-start group cursor-zoom-in`}
            >
              <img
                src={src}
                alt={`Wilpattu wildlife ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <i className="fa-solid fa-expand text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"></i>
              </div>
            </button>
          );
        })}
        <div className="shrink-0 w-1 md:w-4" aria-hidden="true"></div>
      </div>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxSrc(null)}
            className="absolute top-6 right-6 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close full-size image"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <img
            src={lightboxSrc}
            alt="Wilpattu wildlife - full size"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
};

export default SafariGallery;
