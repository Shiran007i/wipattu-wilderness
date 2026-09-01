"use client";

import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import AvailabilityBar from "@/components/AvailabilityBar";
import HomeWelcome from "@/components/HomeWelcome";
import ServiceGrid from "@/components/ServiceGrid";
import SafariHighlight from "@/components/SafariHighlight";
import Testimonial from "@/components/Testimonial";
import ThingsToKnow from "@/components/ThingsToKnow";
import ScrollingGallery from "@/components/ScrollingGallery";
import FocusGallery from "@/components/FocusGallery";
import { useRouter } from "next/navigation";

export default function HomePageClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [mapCoords, setMapCoords] = useState({ latitude: "8.3076", longitude: "80.1480" });
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/contact-info")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && typeof data?.latitude === "number" && typeof data?.longitude === "number") {
          setMapCoords({ latitude: String(data.latitude), longitude: String(data.longitude) });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  const handleAvailabilityCheck = (
    checkIn: string,
    checkOut: string,
    adults: number,
    children: number,
  ) => {
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      adults: adults.toString(),
      children: children.toString(),
    });

    router.push(`/booking?${params.toString()}`);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "Campground", "TouristTrip"],
    name: "Wilpattu Wilderness",
    image:
      "https://www.wilpattuwilderness.com/images/seo/wilpattu-wilderness-og.jpg",
    description:
      "Luxury tented safari lodge, camping, wildlife, and nature experiences in Wilpattu National Park, Sri Lanka.",
    url: "https://wilpattuwilderness.com/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "02Km Distance from Hunuwilagama Gate",
      addressLocality: "Wilpattu",
      postalCode: "50220",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: mapCoords.latitude,
      longitude: mapCoords.longitude,
    },
    hasMap:
      `https://www.google.com/maps/search/?api=1&query=${mapCoords.latitude},${mapCoords.longitude}`,
    telephone: "+94716335000",
    email: "info@wilpattuwilderness.com",
    priceRange: "$$$",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Reservations",
      telephone: "+94716335000",
      email: "info@wilpattuwilderness.com",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Luxury tented accommodation",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Safari and wildlife experiences",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Nature and wilderness stay",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Dining and guest experiences",
      },
    ],
    containsPlace: [
      {
        "@type": "Campground",
        name: "Luxury Tented Stays",
        description:
          "Premium tent accommodation in a protected wilderness setting.",
      },
      {
        "@type": "NationalPark",
        name: "Wilpattu National Park",
        description:
          "Wildlife safari and nature-focused discovery tours in Sri Lanka's protected landscape.",
      },
      {
        "@type": "TouristTrip",
        name: "Wilpattu Safari Experience",
        description:
          "Guided wildlife safari and nature-focused discovery tours.",
      },
    ],
    serviceType: [
      "Luxury tented accommodation",
      "Safari tour",
      "Wildlife tourism",
      "Camping tourism",
      "Nature tourism",
    ],
    touristType: [
      "Wildlife tourism",
      "Nature tourism",
      "Safari tourism",
      "Camping tourism",
    ],
    category: "Luxury safari lodge, camping, wildlife, and nature tourism",
    areaServed: {
      "@type": "Place",
      name: "Wilpattu National Park, Sri Lanka",
    },
    sameAs: ["https://www.facebook.com/", "https://www.instagram.com/"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of stay does Wilpattu Wilderness offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wilpattu Wilderness offers luxury tented accommodation, wilderness camping, wildlife safari experiences, and nature-focused stays in Wilpattu National Park, Sri Lanka.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Wilpattu Wilderness located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wilpattu Wilderness is located in Hunuwilagama, near Wilpattu National Park in Sri Lanka, offering a secluded base for wildlife and nature travel.",
        },
      },
      {
        "@type": "Question",
        name: "Can I book a safari and camping experience at Wilpattu Wilderness?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The property is designed for luxury safari, camping, and nature-focused stays with curated guest experiences centered on wildlife discovery and outdoor immersion.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Wilpattu Wilderness unique?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The overall experience combines luxury tented accommodation, untamed nature, wildlife exploration, and a serene wilderness atmosphere in one destination.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://wilpattuwilderness.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Accommodation",
        item: "https://wilpattuwilderness.com/accommodation",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experiences",
        item: "https://wilpattuwilderness.com/experiences",
      },
    ],
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero onStart={() => router.push("/accommodation")} />
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

      <ThingsToKnow />
      <Testimonial />

      <ScrollingGallery />
      <SafariHighlight />
    </div>
  );
}
