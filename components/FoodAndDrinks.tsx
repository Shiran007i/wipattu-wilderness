'use client';

import React, { useEffect, useState } from 'react';

const FALLBACKS: Record<string, string> = {
  'sri-lankan-cuisine':
    'https://images.unsplash.com/photo-1541014741259-df549fa3bb68?auto=format&fit=crop&q=80&w=1200',
  'western-cuisine':
    'https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&q=80&w=1200',
  beverages:
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200',
};

const sriLankanSpecialties = [
  {
    icon: 'fa-bowl-rice',
    title: 'Traditional Clay-Pot Rice & Curry',
    text: 'Fluffy white or local red rice served with a colorful spread of coconut dhal, fiery chicken or black pork curry, fresh market vegetables, and crisp papadam.',
  },
  {
    icon: 'fa-shrimp',
    title: 'Fresh Villu & Coastal Seafood',
    text: 'Hot & spicy black pepper crab, prawn baduma, cuttlefish devilled, or authentic clay-pot fish ambul thiyal (sour fish curry).',
  },
  {
    icon: 'fa-circle-dot',
    title: 'Live Hopper Counter',
    text: 'Delicate, bowl-shaped fermented rice flour pancakes with crispy edges and a soft center — served plain, with an egg, or paired with spicy lunu miris and pol sambol.',
  },
  {
    icon: 'fa-fire-burner',
    title: 'Kottu Roti Experience',
    text: 'Chopped flatbread stir-fried with vegetables, eggs, aromatic spices, and tender meats, cooked live on a hot grill.',
  },
  {
    icon: 'fa-mug-hot',
    title: 'Island Desserts & Ceylon Tea',
    text: 'Finish your meal with classic Watalappan (steamed coconut milk, palm jaggery, and cardamom pudding) paired with single-origin Ceylon tea.',
  },
];

const westernFavorites = [
  {
    icon: 'fa-drumstick-bite',
    title: 'Starlight Campfire BBQ',
    text: 'Tender grilled tenderloin steaks, juicy chicken skewers, and flame-grilled jumbo prawns infused with garlic butter and rosemary, cooked over charcoal.',
  },
  {
    icon: 'fa-egg',
    title: 'Bush Continental Breakfast',
    text: 'Freshly baked pastries, warm toasts, eggs prepared to order (poached, scrambled, or sunny-side up), crispy bacon, grilled sausages, and tropical fruit platters.',
  },
  {
    icon: 'fa-utensils',
    title: 'Gourmet Pastas & Bistro Fare',
    text: 'Al dente pasta tossed in creamy carbonara, garlic olive oil seafood marinara, or rich Bolognese sauce.',
  },
  {
    icon: 'fa-burger',
    title: 'Artisanal Sandwiches & Wraps',
    text: 'Perfect for safari game drives — packed toasted club sandwiches, grilled chicken avocado wraps, and gourmet burgers served with golden fries.',
  },
];

const diningAtAGlance = [
  {
    category: 'Breakfast',
    sriLankan: 'Egg Hoppers, String Hoppers, Pol Roti with Sambol & Dhal',
    western: 'Eggs Any Style, Pancakes, Fresh Pastries & Ceylon Coffee',
  },
  {
    category: 'Lunch',
    sriLankan: 'Traditional Paddy Field Ambula or Seafood Rice & Curry',
    western: 'Gourmet Burgers, Grilled Wraps, or Pasta Primavera',
  },
  {
    category: 'Dinner',
    sriLankan: 'Live Kottu Roti, Clay-Pot Crab/Prawn Curry, & Watalappan',
    western: 'Charcoal-Grilled Steak & Seafood BBQ with Garlic Mash',
  },
  {
    category: 'Safari Packs',
    sriLankan: 'Packed Sri Lankan Fried Rice & Devilled Chicken',
    western: 'Packed Continental Sandwiches, Fruit Platters & Chilled Juices',
  },
];

const beverageHighlights = [
  {
    icon: 'fa-beer-mug-empty',
    title: 'Chilled Ceylon & International Beers',
    text: "Served frosty-cold — featuring Sri Lanka's iconic Lion Lager, Lion Stout, and premium imported beers. Perfect for post-safari relaxation.",
  },
  {
    icon: 'fa-wine-glass',
    title: 'Curated Wine Selection',
    text: 'A choice of light, crisp whites to pair with fresh seafood and rich, full-bodied reds to accompany starlight BBQ dinners under the Banyan tree.',
  },
  {
    icon: 'fa-sun',
    title: 'Safari Sundowners',
    text: 'Enjoy your favorite drink served with light bites at our scenic outdoor lounge or private tent sit-out as dusk settles over the jungle.',
  },
];

const drinksAtAGlance = [
  {
    category: 'Ice-Cold Beers',
    offerings: 'Lion Lager, Lion Stout, Premium International Lager',
    pairing: 'Spicy Sri Lankan Kottu Roti, Devilled Bites, & Campfire BBQ',
  },
  {
    category: 'White & Rosé Wines',
    offerings: 'Sauvignon Blanc, Pinot Grigio, Chilled Rosé',
    pairing: 'Grilled Prawns, Fresh Villu Seafood, & Pasta Primavera',
  },
  {
    category: 'Red Wines',
    offerings: 'Cabernet Sauvignon, Shiraz, Merlot',
    pairing: 'Flame-Grilled Tenderloin Steaks & Black Pepper Pork Curry',
  },
  {
    category: 'Soft & Fresh Drinks',
    offerings: 'King Coconut Water, Fresh Tropical Juices, Soda & Mixers',
    pairing: 'Afternoon relaxation under the Banyan tree',
  },
];

const FoodAndDrinks: React.FC = () => {
  const [images, setImages] = useState<Record<string, string | null>>({});

  useEffect(() => {
    let cancelled = false;
    fetch('/api/food-drinks-images')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.images) setImages(data.images);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const getImage = (slug: string) => images[slug] || FALLBACKS[slug];

  return (
    <div className="min-h-screen bg-[#fbf7f2]">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/food-drinks/sri-lankan-cuisine.jpeg"
            className="w-full h-full object-cover"
            alt="Food and Drinks Hero"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white mt-16 md:mt-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 md:mb-6 drop-shadow-lg !text-white">
            Food & Drinks
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-80">
            <span>HOME</span>
            <span className="opacity-40">/</span>
            <span>FOOD & DRINKS</span>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-16 md:py-24 bg-[#fbf7f2]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#8d5527] mb-6 md:mb-8">
            From Spicy Island Flavors to Western Comforts: A Feast for Every Palate
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-90 px-2 md:px-0 text-justify md:text-center">
            Dining at Wilpattu Wilderness Camping is more than just a meal — it
            is a sensory journey. Our executive chefs blend centuries-old Sri
            Lankan clay-pot recipes with masterfully crafted Western classics,
            using locally sourced, farm-fresh ingredients. Whether you are
            savoring rich coconut curries by a glowing campfire or enjoying a
            hot continental breakfast beneath the Banyan canopy, every dish is
            prepared fresh to deliver the best taste in the wild.
          </p>
        </div>
      </section>

      {/* Culinary Sections */}
      <section className="pb-20 md:pb-32 bg-[#fbf7f2]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Authentic Sri Lankan Specialties */}
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 mb-20 md:mb-32">
            <div className="w-full lg:w-[45%] min-h-[320px] sm:min-h-[420px]">
              <img
                src={getImage('sri-lankan-cuisine')}
                alt="Authentic Sri Lankan Specialties"
                className="w-full h-full object-cover shadow-2xl rounded-sm"
              />
            </div>
            <div className="w-full lg:w-[55%] flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif text-[#8d5527] mb-3 md:mb-4 text-center lg:text-left">
                Authentic Sri Lankan Specialties
              </h3>
              <p className="text-[12px] md:text-[13px] leading-[1.7] text-[#382F2B] font-light opacity-70 mb-8 md:mb-10 text-center lg:text-left">
                Immerse yourself in the vibrant, aromatic spices of Sri Lanka,
                cooked over traditional wood fires to seal in authentic island
                flavors.
              </p>
              <ul className="space-y-5 md:space-y-6">
                {sriLankanSpecialties.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#efe2d2] flex items-center justify-center shrink-0 mt-0.5">
                      <i className={`fa-solid ${item.icon} text-[#bf885e] text-sm`}></i>
                    </div>
                    <div>
                      <p className="text-[13px] md:text-[14px] font-bold text-[#382F2B] mb-1">
                        {item.title}
                      </p>
                      <p className="text-[12px] md:text-[13px] leading-[1.6] text-[#382F2B] font-light opacity-75">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Refined Western & International Favorites */}
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 mb-20 md:mb-32">
            <div className="w-full lg:w-[55%] order-2 lg:order-1 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif text-[#8d5527] mb-3 md:mb-4 text-center lg:text-left">
                Refined Western & International Favorites
              </h3>
              <p className="text-[12px] md:text-[13px] leading-[1.7] text-[#382F2B] font-light opacity-70 mb-8 md:mb-10 text-center lg:text-left">
                For guests seeking familiar comfort with gourmet standards, our
                Western menu offers time-tested classics cooked to perfection.
              </p>
              <ul className="space-y-5 md:space-y-6">
                {westernFavorites.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#efe2d2] flex items-center justify-center shrink-0 mt-0.5">
                      <i className={`fa-solid ${item.icon} text-[#bf885e] text-sm`}></i>
                    </div>
                    <div>
                      <p className="text-[13px] md:text-[14px] font-bold text-[#382F2B] mb-1">
                        {item.title}
                      </p>
                      <p className="text-[12px] md:text-[13px] leading-[1.6] text-[#382F2B] font-light opacity-75">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-[45%] order-1 lg:order-2 min-h-[320px] sm:min-h-[420px]">
              <img
                src={getImage('western-cuisine')}
                alt="Refined Western & International Favorites"
                className="w-full h-full object-cover shadow-2xl rounded-sm"
              />
            </div>
          </div>

          {/* Dining at a Glance Table */}
          <div className="mb-20 md:mb-32">
            <h3 className="text-2xl md:text-3xl font-serif text-[#382F2B] mb-8 md:mb-10 text-center">
              Dining at a Glance
            </h3>
            <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="min-w-[640px] rounded-xl overflow-hidden border border-[#bf885e]/20 shadow-sm">
                <div className="grid grid-cols-3 bg-[#8d5527] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  <div className="p-3 md:p-4 border-r border-white/10">Category</div>
                  <div className="p-3 md:p-4 border-r border-white/10">Sri Lankan Heritage Selection</div>
                  <div className="p-3 md:p-4">Western Gourmet Selection</div>
                </div>
                {diningAtAGlance.map((row, idx) => (
                  <div
                    key={row.category}
                    className={`grid grid-cols-3 text-[11px] md:text-[12px] ${
                      idx % 2 === 0 ? 'bg-[#f9f3ea]' : 'bg-white'
                    } text-[#382F2B]`}
                  >
                    <div className="p-3 md:p-4 border-t border-[#bf885e]/15 border-r font-bold text-[#8d5527]">
                      {row.category}
                    </div>
                    <div className="p-3 md:p-4 border-t border-[#bf885e]/15 border-r font-light leading-[1.6]">
                      {row.sriLankan}
                    </div>
                    <div className="p-3 md:p-4 border-t border-[#bf885e]/15 font-light leading-[1.6]">
                      {row.western}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wilderness Spirits & Refreshments */}
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 mb-20 md:mb-32">
            <div className="w-full lg:w-[45%] min-h-[320px] sm:min-h-[420px]">
              <img
                src={getImage('beverages')}
                alt="Wilderness Spirits & Refreshments"
                className="w-full h-full object-cover shadow-2xl rounded-sm"
              />
            </div>
            <div className="w-full lg:w-[55%] flex flex-col justify-center">
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-[#B08968] mb-2 text-center lg:text-left">
                Wilderness Spirits & Refreshments
              </p>
              <h3 className="text-2xl md:text-3xl font-serif text-[#8d5527] mb-4 md:mb-5 text-center lg:text-left">
                Unwind in the Wild with Ice-Cold Beers & Fine Wines
              </h3>
              <p className="text-[12px] md:text-[13px] leading-[1.7] text-[#382F2B] font-light opacity-70 mb-8 md:mb-10 text-center lg:text-left">
                After an exhilarating day tracking wildlife under the Sri
                Lankan sun, nothing compares to washing down the dust with a
                crisp, ice-cold beverage. We keep your favorite drinks
                perfectly chilled — sip on local ice-cold lagers or enjoy a
                handpicked glass of fine wine as the sun sets over the dry-zone
                canopy and the campfire comes alive.
              </p>
              <ul className="space-y-5 md:space-y-6">
                {beverageHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#efe2d2] flex items-center justify-center shrink-0 mt-0.5">
                      <i className={`fa-solid ${item.icon} text-[#bf885e] text-sm`}></i>
                    </div>
                    <div>
                      <p className="text-[13px] md:text-[14px] font-bold text-[#382F2B] mb-1">
                        {item.title}
                      </p>
                      <p className="text-[12px] md:text-[13px] leading-[1.6] text-[#382F2B] font-light opacity-75">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Drinks Selection at a Glance Table */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif text-[#382F2B] mb-8 md:mb-10 text-center">
              Drinks Selection at a Glance
            </h3>
            <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="min-w-[640px] rounded-xl overflow-hidden border border-[#bf885e]/20 shadow-sm">
                <div className="grid grid-cols-3 bg-[#8d5527] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  <div className="p-3 md:p-4 border-r border-white/10">Category</div>
                  <div className="p-3 md:p-4 border-r border-white/10">Offerings</div>
                  <div className="p-3 md:p-4">Best Paired With</div>
                </div>
                {drinksAtAGlance.map((row, idx) => (
                  <div
                    key={row.category}
                    className={`grid grid-cols-3 text-[11px] md:text-[12px] ${
                      idx % 2 === 0 ? 'bg-[#f9f3ea]' : 'bg-white'
                    } text-[#382F2B]`}
                  >
                    <div className="p-3 md:p-4 border-t border-[#bf885e]/15 border-r font-bold text-[#8d5527]">
                      {row.category}
                    </div>
                    <div className="p-3 md:p-4 border-t border-[#bf885e]/15 border-r font-light leading-[1.6]">
                      {row.offerings}
                    </div>
                    <div className="p-3 md:p-4 border-t border-[#bf885e]/15 font-light leading-[1.6]">
                      {row.pairing}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-20 md:py-28 bg-[#8d5527] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 !text-white">
            Hungry for the Wild?
          </h2>
          <p className="text-[13px] md:text-[14px] leading-[1.8] font-light opacity-80 mb-10 md:mb-12">
            Reserve your tent and experience our full dining and beverage
            menu as part of your stay.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="/booking"
              className="w-full sm:w-auto bg-[#bf885e] text-white px-12 py-5 font-bold text-[10px] lg:text-xs hover:bg-white hover:text-[#8d5527] transition-all uppercase tracking-[0.3em] shadow-xl rounded-sm text-center"
            >
              Book Your Stay
            </a>
            <a
              href="/safari-booking"
              className="w-full sm:w-auto border border-white/30 text-white px-12 py-5 font-bold text-[10px] lg:text-xs hover:bg-white/10 transition-all uppercase tracking-[0.3em] rounded-sm text-center"
            >
              Book a Safari
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodAndDrinks;
