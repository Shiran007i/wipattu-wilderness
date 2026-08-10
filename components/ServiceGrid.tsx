'use client';

import React, { useEffect, useState } from "react";

const serviceItems = [
  {
    id: "01",
    slug: "accommodation",
    title: "Accommodation",
    text: "At Wilds Wilpattu, our luxury glamping tents redefine comfort in the wild. Featuring air-conditioning, en-suite bathrooms, queen-sized beds, and private outdoor seating, each tent offers a serene retreat where modern amenities blend seamlessly with the natural Wilpattu surroundings for a truly unique and indulgent stay.",
    img: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "02",
    slug: "food-beverage",
    title: "Food & Beverage",
    text: "Indulge in a culinary journey crafted by our in-house chef, showcasing the authentic flavors of Sri Lanka. From rice and curry with fresh organic vegetables to lake fish and kurakkan-based dishes, every bite reflects the essence of local cuisine. Signature experiences include breakfast by the lake, bonfire BBQ dinners, and a farmer's lunch featuring the catch of the day.",
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "03",
    slug: "adventure",
    title: "Adventure & Experiences",
    text: "Immerse yourself in Wilpattu's wild beauty with guided game drives led by expert naturalists. Explore the local village, enjoy stargazing nights, or engage in interactive wildlife quizzes for children. Our curated experiences are designed to connect you with nature, culture, and ensure you take away the best memories.",
    img: "https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "04",
    slug: "guest-services",
    title: "Guest Services",
    text: "Our dedicated team ensures every aspect of your stay is seamless. From personalized butler service to daily housekeeping, we cater to your every need. Whether arranging unique excursions or adding thoughtful details, we aim to create a flawless and memorable experience for every guest.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "05",
    slug: "recreation",
    title: "Recreation & Relaxation",
    text: "Unwind and rejuvenate in our serene spaces. Gather around the bonfire, enjoy board games, or delve into wildlife literature in our reading corner. Whether you're seeking adventure or relaxation, Wilds Wilpattu offers the perfect balance for a refreshing escape in nature.",
    img: "https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "06",
    slug: "safety",
    title: "Safety & Sustainability",
    text: "Your well-being and surrounding environment are our priorities. Our eco-friendly practices include sustainable materials and waste management systems. With 24/7 on-site staff and emergency readiness, we ensure a safe, responsible, and enjoyable stay for all our guests.",
    img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
  },
];

const ServiceGrid: React.FC = () => {
  const [customImages, setCustomImages] = useState<Record<string, string | null>>({});

  useEffect(() => {
    let cancelled = false;
    fetch("/api/service-images")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.images) {
          setCustomImages(data.images);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const getImage = (item: (typeof serviceItems)[number]) => customImages[item.slug] || item.img;

  return (
    <section className="relative leaf-pattern pb-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-2xl">
          {/* Row 1 */}
          <div className="bg-[#8d5527] p-8 sm:p-10 md:p-12 text-white flex flex-col justify-center min-h-[280px] sm:min-h-[320px] md:min-h-[400px]">
            <span className="text-[10px] font-bold opacity-60 mb-4 tracking-widest text-[#bf885e]">
              01.
            </span>
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider !text-white">
              Accommodation
            </h3>
            <p className="text-[11px] leading-[2] font-light text-justify opacity-90">
              {serviceItems[0].text}
            </p>
          </div>
          <div className="overflow-hidden h-[260px] sm:h-[300px] md:h-[400px]">
            <img
              src={getImage(serviceItems[0])}
              alt="Accommodation"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>
          <div className="bg-[#8d5527] p-8 sm:p-10 md:p-12 text-white flex flex-col justify-center min-h-[280px] sm:min-h-[320px] md:min-h-[400px]">
            <span className="text-[10px] font-bold opacity-60 mb-4 tracking-widest text-[#bf885e]">
              02.
            </span>
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider !text-white">
              Food & Beverage
            </h3>
            <p className="text-[11px] leading-[2] font-light text-justify opacity-90">
              {serviceItems[1].text}
            </p>
          </div>
          <div className="overflow-hidden h-[260px] sm:h-[300px] md:h-[400px]">
            <img
              src={getImage(serviceItems[1])}
              alt="Food & Beverage"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>

          {/* Row 2 - Order adjustment for mobile to maintain text-image-text-image or similar */}
          <div className="overflow-hidden h-[260px] sm:h-[300px] md:h-[400px] order-none">
            <img
              src={getImage(serviceItems[2])}
              alt="Adventure"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>
          <div className="bg-[#8d5527] p-8 sm:p-10 md:p-12 text-white flex flex-col justify-center min-h-[280px] sm:min-h-[320px] md:min-h-[400px]">
            <span className="text-[10px] font-bold opacity-60 mb-4 tracking-widest text-[#bf885e]">
              03.
            </span>
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider !text-white">
              Adventure & Experiences
            </h3>
            <p className="text-[11px] leading-[2] font-light text-justify opacity-90">
              {serviceItems[2].text}
            </p>
            <a
              href="/safari-booking"
              className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#bf885e] hover:text-white transition-colors w-fit"
            >
              Book a Safari
              <i className="fa-solid fa-arrow-right text-[9px]"></i>
            </a>
          </div>
          <div className="overflow-hidden h-[260px] sm:h-[300px] md:h-[400px]">
            <img
              src={getImage(serviceItems[3])}
              alt="Guest Services"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>
          <div className="bg-[#8d5527] p-8 sm:p-10 md:p-12 text-white flex flex-col justify-center min-h-[280px] sm:min-h-[320px] md:min-h-[400px]">
            <span className="text-[10px] font-bold opacity-60 mb-4 tracking-widest text-[#bf885e]">
              04.
            </span>
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider !text-white">
              Guest Services
            </h3>
            <p className="text-[11px] leading-[2] font-light text-justify opacity-90">
              {serviceItems[3].text}
            </p>
          </div>

          {/* Row 3 */}
          <div className="bg-[#8d5527] p-8 sm:p-10 md:p-12 text-white flex flex-col justify-center min-h-[280px] sm:min-h-[320px] md:min-h-[400px]">
            <span className="text-[10px] font-bold opacity-60 mb-4 tracking-widest text-[#bf885e]">
              05.
            </span>
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider !text-white">
              Recreation & Relaxation
            </h3>
            <p className="text-[11px] leading-[2] font-light text-justify opacity-90">
              {serviceItems[4].text}
            </p>
          </div>
          <div className="overflow-hidden h-[260px] sm:h-[300px] md:h-[400px]">
            <img
              src={getImage(serviceItems[4])}
              alt="Recreation"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>
          <div className="bg-[#8d5527] p-8 sm:p-10 md:p-12 text-white flex flex-col justify-center min-h-[280px] sm:min-h-[320px] md:min-h-[400px]">
            <span className="text-[10px] font-bold opacity-60 mb-4 tracking-widest text-[#bf885e]">
              06.
            </span>
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider !text-white">
              Safety & Sustainability
            </h3>
            <p className="text-[11px] leading-[2] font-light text-justify opacity-90">
              {serviceItems[5].text}
            </p>
          </div>
          <div className="overflow-hidden h-[260px] sm:h-[300px] md:h-[400px]">
            <img
              src={getImage(serviceItems[5])}
              alt="Safety"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
