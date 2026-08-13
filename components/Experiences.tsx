
'use client';

import React, { useEffect, useState } from 'react';

const Experiences: React.FC = () => {
  const [safariImage, setSafariImage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/safari-images')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled) {
          const first = data?.mainImage || data?.gallery?.[0] || null;
          setSafariImage(first);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const signatureExperiences = [
    {
      title: 'Guided Game Drives in Wilpattu National Park',
      description: "Dive into the heart of Sri Lanka's oldest and largest national park with our expertly guided game drives. Witness elusive leopards, majestic elephants, and a myriad of bird species. With our knowledgeable naturalists by your side, every sighting becomes a story of the wilderness.",
      image: safariImage
    },
    {
      title: 'Breakfast by the Lake',
      description: 'Start your day in serenity with a lakeside breakfast surrounded by the symphony of nature. Relish freshly prepared local delicacies while enjoying the calmness of the water and the distant calls of wildlife.',
      image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Bonfire and BBQ Nights',
      description: "Under a starlit sky, gather around a roaring bonfire and indulge in a BBQ feast infused with local flavors. Share stories of the day's adventures in a setting that brings people together.",
      image: 'https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Wilpattu Village Walk',
      description: "Explore the quaint charm of Wilpattu's village life. Meet the friendly locals, learn about their traditions, and observe their daily routines. This immersive experience highlights the simplicity and warmth of Sri Lanka's rural culture.",
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Morning Walk Around the Lake & Surrounding',
      description: "Begin the day with the serenity of Hunuwilagama Tank, just steps from your tent. Take a peaceful morning walk along the tank bund, where mist rises over the water, birds call from the trees, and the surrounding forest slowly awakens. The path connects directly to Wilpattu National Park's entrance, offering a rare opportunity to walk to your safari vehicle, immersed in nature before even entering the park.",
      image: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Wildlife Quiz for Children',
      description: "An engaging activity for our younger explorers, the wildlife quiz combines fun and learning. Led by our naturalists, it fosters a deeper appreciation for the animals and ecosystems of Wilpattu.",
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const uniqueExcursions = [
    {
      title: 'Anuradhapura Ancient City (1 hour 30 minutes)',
      description: "Embark on a journey to Sri Lanka's sacred ancient capital, a UNESCO World Heritage Site. Explore timeless stupas, intricate carvings, and the revered Jaya Sri Maha Bodhi tree. Dive into the history of one of the world's oldest continually inhabited cities, filled with stories of kings and spiritual legacy.",
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Mannar (2 hours)',
      description: "Discover the untouched charm of Mannar, famous for its sprawling lagoons, baobab trees, and birdlife. Visit the Mannar Fort, originally built by the Portuguese, and marvel at the Adam's Bridge, a chain of limestone shoals steeped in myth and history.",
      image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Kalpitiya (2 hours 30 minutes)',
      description: "Uncover the coastal beauty of Kalpitiya, a hotspot for dolphin watching and a gateway to stunning marine life. Enjoy a scenic boat ride as you witness pods of playful dolphins or simply relax on pristine beaches, soaking in the sun and sea breeze.",
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Tantirimale Rock Temple (1 hour 15 minutes)',
      description: "Nestled in a peaceful setting, this ancient rock temple features stunning Buddhist sculptures, inscriptions, and breathtaking vistas. Explore its natural caves and rock formations that have served as a sanctuary for centuries.",
      image: 'https://images.unsplash.com/photo-1578490614485-937b019b1617?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fbf7f2]">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[65vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1575515650222-3811726a2185?auto=format&fit=crop&q=80&w=2400" 
            className="w-full h-full object-cover"
            alt="Leopard in Wilpattu"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 z-10 text-center text-white mt-16 md:mt-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 md:mb-6 drop-shadow-lg leading-tight">
            Experiences <br className="md:hidden" /> & Excursions
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-80">
            <span>HOME</span>
            <span className="opacity-40">/</span>
            <span>EXPERIENCES & EXCURSIONS</span>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#fbf7f2]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl text-center">
          <p className="text-[14px] md:text-[15px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-90 px-2 md:px-0 text-justify md:text-center">
            At Wilds Wilpattu, we offer a curated selection of immersive experiences and unique excursions that showcase the vibrant culture, breathtaking landscapes, and rich biodiversity of the region. Whether you seek adventure, cultural exploration, or tranquil moments in nature, our offerings promise unforgettable memories.
          </p>
        </div>
      </section>

      {/* Signature Experiences Section */}
      <section className="pb-20 md:pb-32 bg-[#fbf7f2]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#B08968] mb-2">Signature Experiences</h2>
            <div className="w-12 h-[1px] bg-[#B08968] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {signatureExperiences.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="h-56 md:h-64 overflow-hidden">
                  {exp.image ? (
                    <img 
                      src={exp.image} 
                      alt={exp.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-[#4b3427] via-[#8d5527] to-[#bf885e]"></div>
                  )}
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-serif text-[#8d5527] mb-3 md:mb-4 leading-tight group-hover:text-[#bf885e] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-[11px] md:text-[12px] leading-[1.6] md:leading-[1.8] text-[#382F2B] font-light opacity-70 text-justify">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Excursions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#382F2B] mb-3 md:mb-4 uppercase tracking-widest">Unique Excursions</h2>
            <p className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase opacity-40">*Drive times indicated are one-way</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {uniqueExcursions.map((exc, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-6 md:mb-8 shadow-lg rounded-sm">
                  <img 
                    src={exc.image} 
                    alt={exc.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-[#382F2B] mb-3 md:mb-4 leading-tight">
                  {exc.title}
                </h3>
                <p className="text-[12px] md:text-[13px] leading-[1.6] md:leading-[1.8] text-[#382F2B] font-light opacity-70 text-justify">
                  {exc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Journey Section */}
      <section className="py-20 md:py-32 bg-[#fbf7f2] border-t border-black/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#382F2B] mb-6 md:mb-8 uppercase tracking-widest">Plan Your Journey</h2>
          <p className="text-[14px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-80 mb-10 md:mb-12 px-2 md:px-0">
            Our experiences and excursions are designed to enrich your stay while keeping travel time manageable. Let us help you craft a personalized itinerary that combines adventure, culture, and relaxation, all within reach of Wilds Wilpattu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="/booking" className="w-full sm:w-auto bg-[#B08968] text-white px-12 py-5 font-bold text-[10px] lg:text-xs hover:bg-[#8d5527] transition-all uppercase tracking-[0.3em] shadow-xl rounded-sm inline-block text-center">
              BOOK YOUR STAY
            </a>
            <a href="/safari-booking" className="w-full sm:w-auto border border-[#8d5527]/30 text-[#8d5527] px-12 py-5 font-bold text-[10px] lg:text-xs hover:bg-[#8d5527] hover:text-white transition-all uppercase tracking-[0.3em] rounded-sm inline-block text-center">
              BOOK A SAFARI
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
