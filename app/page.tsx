'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Preloader from '@/components/Preloader';
import AvailabilityBar from '@/components/AvailabilityBar';
import HomeWelcome from '@/components/HomeWelcome';
import ServiceGrid from '@/components/ServiceGrid';
import Testimonial from '@/components/Testimonial';
import ThingsToKnow from '@/components/ThingsToKnow';
import ScrollingGallery from '@/components/ScrollingGallery';
import FocusGallery from '@/components/FocusGallery';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  const handleAvailabilityCheck = (checkIn: string, checkOut: string, adults: number, children: number) => {
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      adults: adults.toString(),
      children: children.toString()
    });
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <div className="relative">
      <Hero onStart={() => router.push('/accommodation')} />
      <AvailabilityBar 
        initialCheckIn=""
        initialCheckOut=""
        initialAdults={1}
        initialChildren={0}
        onCheck={handleAvailabilityCheck} 
      />

      <HomeWelcome />

      <div className="relative bg-white overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1000px] -translate-y-1/2 z-0 opacity-90 pointer-events-none">
          <img 
            src="/leafbackground.jpg" 
            className="w-full h-full object-cover"
            alt="Jungle Strip"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="relative z-10">
          <ServiceGrid />
          <FocusGallery />
        </div>
      </div>

      <Testimonial />
      <ThingsToKnow />
      <ScrollingGallery />
    </div>
  );
}
