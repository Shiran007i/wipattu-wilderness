'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AppSection } from "../types";

// Shown only if /public/images/hero is empty, so the page never looks broken.
// Deliberately no external stock photo here — a plain branded gradient is
// safer than guessing at stock photo content.
const FALLBACK_HERO_IMAGES: string[] = [];

interface HeroProps {
  onStart: (section: AppSection) => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [images, setImages] = useState<string[]>(FALLBACK_HERO_IMAGES);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/hero-images")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.images?.length > 0) {
          setImages(data.images);
        }
      })
      .catch(() => {
        // Keep the fallback image on any error.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-linear-to-br from-[#2f241d] via-[#4b3427] to-[#8d5527]">
        {images.map((src, idx) => {
          const isActive = idx === activeIndex;
          const isFirstVisibleImage = idx === 0;

          return (
            <div
              key={src + idx}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt="Wilpattu Wild Camping"
                width={1600}
                height={1000}
                priority={isFirstVisibleImage}
                sizes="100vw"
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-black/10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10 text-center text-[#fefcf9] animate-fade-in-down max-w-7xl py-10 sm:py-16">
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-10 opacity-90">
          <div className="w-8 sm:w-12 md:w-20 h-[1.5px] bg-[#efe2d2]"></div>
          <h2 className="text-[#fefcf9] font-bold tracking-[0.3em] sm:tracking-[0.5em] text-[9px] sm:text-[10px] md:text-[12px] uppercase">
           PLAN YOUR ESCAPE
          </h2>
          <div className="w-8 sm:w-12 md:w-20 h-[1.5px] bg-[#efe2d2]"></div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-normal mb-6 sm:mb-8 leading-[1.1] !text-[#fefcf9] drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
          Wilpattu Wilderness Camping  <br className="hidden lg:block" /> Luxury Safari Tents & Game Drives
        </h1>
        <div className="w-20 sm:w-24 md:w-32 h-px bg-[#f7ebdc] mx-auto mb-8 sm:mb-10"></div>
        <button
          onClick={() => onStart(AppSection.ACCOMMODATION)}
          className="w-full sm:w-auto bg-[#bf885e] text-white px-6 sm:px-10 py-3 sm:py-4 font-bold text-[10px] sm:text-xs hover:bg-[#8d5527] transition-all uppercase tracking-[0.25em] sm:tracking-[0.3em] shadow-xl active:scale-95"
        >
          EXPLORE THE HAVEN
        </button>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Show slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === activeIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
