'use client';

import React, { useEffect, useState } from "react";

const serviceItems = [
  {
    id: "01",
    slug: "accommodation",
    title: "Accommodation",
    text: "After a day spent exploring the wilds of Wilpattu, return to the quiet comfort of Wilpattu Wilderness. Our luxury glamping tents bring you closer to nature without giving up the comforts of a refined stay. Air-conditioning, private en-suite bathrooms, queen-sized beds, and your own outdoor space create the perfect setting to slow down, listen to the forest, and rest in complete comfort.",
    img: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "02",
    slug: "food-beverage",
    title: "Food & Beverage",
    text: "At Wilpattu Wilderness, food is part of the adventure. Our kitchen brings the authentic character of Sri Lanka to your table through fragrant rice and curry, fresh vegetables, lake fish, and traditional kurakkan creations. Enjoy breakfast beside the water, a BBQ beneath the evening sky, or a farmer's-style lunch inspired by the freshest ingredients and flavours of the surrounding land.",
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "03",
    slug: "adventure",
    title: "Adventure & Experiences",
    text: "Wilpattu is not simply a place to visit; it is a wilderness waiting to reveal itself. At Wilpattu Wilderness, follow experienced naturalists into the park, watch the landscape come alive on a game drive, discover the rhythm of village life, or look upward as the night fills with stars. Every experience is designed to bring you closer to nature and leave you with a story worth carrying home.",
    img: null as string | null, // sourced from the safari folder instead of a static default
  },
  {
    id: "04",
    slug: "guest-services",
    title: "Guest Services",
    text: "At Wilpattu Wilderness, the finest stays are often defined by the little things. From the moment you arrive, our team is here to make your time with us effortless and personal. Thoughtful butler service, attentive housekeeping, help with excursions, and those unexpected little touches come together quietly in the background, allowing you to simply enjoy the wilderness at your own pace.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "05",
    slug: "recreation",
    title: "Recreation & Relaxation",
    text: "Not every moment at Wilpattu Wilderness needs to be an adventure. Sometimes it is a warm fire, a good conversation, a board game with the family, or a quiet hour with a book about the wild. Our spaces invite you to pause between journeys, breathe a little deeper, and enjoy the simple pleasure of having nowhere else to be.",
    img: "https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "06",
    slug: "safety",
    title: "Safety & Sustainability",
    text: "At Wilpattu Wilderness, being close to nature comes with a responsibility to protect it and the people who experience it. We make thoughtful choices through responsible use of materials, careful waste management, and practices that respect the surrounding wilderness. With our team present around the clock and emergency arrangements in place, you can explore, relax, and reconnect with confidence while leaving a lighter footprint behind.",
    img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
  },
];

const ServiceGrid: React.FC = () => {
  const [customImages, setCustomImages] = useState<Record<string, string | null>>({});
  const [safariFallback, setSafariFallback] = useState<string | null>(null);

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
    fetch("/api/safari-images")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled) {
          setSafariFallback(data?.mainImage || data?.gallery?.[0] || null);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const getImage = (item: (typeof serviceItems)[number]) =>
    customImages[item.slug] || item.img || (item.slug === "adventure" ? safariFallback : null);

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
            {getImage(serviceItems[2]) ? (
              <img
                src={getImage(serviceItems[2]) as string}
                alt="Adventure"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-[#4b3427] via-[#8d5527] to-[#bf885e]"></div>
            )}
          </div>
          <div className="bg-[#8d5527] p-8 sm:p-10 md:p-12 text-white flex flex-col justify-center h-[260px] sm:h-[300px] md:h-[400px] overflow-hidden">
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
          <div className="bg-[#8d5527] p-8 sm:p-10 md:p-12 text-white flex flex-col justify-center h-[260px] sm:h-[300px] md:h-[400px] overflow-hidden">
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
          <div className="bg-[#8d5527] p-8 sm:p-10 md:p-12 text-white flex flex-col justify-center h-[260px] sm:h-[300px] md:h-[400px] overflow-hidden">
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
