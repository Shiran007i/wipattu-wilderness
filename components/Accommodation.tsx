
import React from 'react';

const Accommodation: React.FC = () => {
  const amenities = [
    { icon: 'fa-snowflake', text: 'Air-conditioned interiors for ultimate comfort (From April 2024 onwards)' },
    { icon: 'fa-shower', text: 'En-suite bathroom with hot water and premium toiletries' },
    { icon: 'fa-bed', text: 'Queen-sized beds with comfort-rich linens' },
    { icon: 'fa-chair', text: 'Private outdoor seating area to relax and enjoy the view' },
    { icon: 'fa-mug-hot', text: 'Complimentary tea and coffee-making facilities' },
    { icon: 'fa-plug', text: 'Charging stations for your devices' },
    { icon: 'fa-broom', text: 'Daily housekeeping and turndown service' },
    { icon: 'fa-snowflake', text: 'Mini fridge stocked with local treats (on request)' },
    { icon: 'fa-baby', text: 'Baby cot (on request)' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=2400" 
            className="w-full h-full object-cover"
            alt="Accommodation Hero"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 z-10 text-center text-white mt-16 md:mt-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 md:mb-6 drop-shadow-lg">
            Accommodation
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-80">
            <span>HOME</span>
            <span className="opacity-40">|</span>
            <span>ACCOMMODATION</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#FAF7F2]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#064E3B] mb-8 md:mb-12">Where Stories of the Wild Come Alive</h2>
          <div className="space-y-6 md:space-y-8 text-[14px] md:text-[15px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-90 px-2 md:px-0 text-justify md:text-center">
            <p>
              Discover a perfect balance of comfort and nature at Wilds Wilpattu, where our luxury glamping tents provide a one-of-a-kind wilderness experience. Thoughtfully designed to blend with the surrounding environment, each tent offers modern amenities while preserving the charm of outdoor living.
            </p>
            <p>
              At Wilds Wilpattu, each of our three bespoke tents is thoughtfully named to reflect the rich natural and cultural heritage of Wilpattu National Park. These names; Neluma, Chandi, and Kuweni, are inspired by legendary leopards and timeless folklore, offering guests a deeper connection to the wilderness they are about to explore.
            </p>
          </div>
        </div>
      </section>

      {/* Tent Sections (Legends) */}
      <section className="pb-20 md:pb-32 bg-[#FAF7F2]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          {/* Tent : Neluma */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 mb-20 md:mb-32">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-serif text-[#064E3B] mb-6 md:mb-8">Tent : Neluma</h3>
              <div className="space-y-4 md:space-y-6 text-[12px] md:text-[13px] leading-[1.6] md:leading-[1.8] text-[#382F2B] font-light text-justify">
                <p>
                  <strong>Neluma:</strong> The Enduring Lion of Wilpattu. Named after one of Wilpattu's most iconic and beloved leopards, Neluma is a tribute to a legendary male leopard known for his majestic presence and remarkable tolerance of visitors.
                </p>
                <p>
                  <strong>Name Origin:</strong> He was first sighted as a cub near Nelum Vila (Lotus Lake), a lotus-filled villa in the park, giving rise to the name "Neluma."
                </p>
                <p>
                  <strong>Legacy:</strong> Over a decade, Neluma has been closely observed by wildlife researchers and safari enthusiasts. Known as "Nelum Vila Male 1" (NVM1), he earned widespread admiration for his bold and calm demeanor, often allowing close-up sightings - a rarity among wild leopards.
                </p>
                <p>
                  <strong>Symbol of Resilience:</strong> Now in his twilight years, Neluma remains a symbol of strength, resilience, and the untamed spirit of Wilpattu. Staying in Tent Neluma is sharing space with a living legend, a leopard whose story has become an integral part of the park's identity.
                </p>
                <p className="italic opacity-60">When you check-in to your tent, you'll uncover the tale of Neluma, beautifully illustrated with images.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=1200" alt="Neluma Tent" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl rounded-sm" />
            </div>
          </div>

          {/* Tent : Kuweni */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 mb-20 md:mb-32">
            <div className="w-full lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=1200" alt="Kuweni Tent" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl rounded-sm" />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif text-[#064E3B] mb-6 md:mb-8">Tent : Kuweni</h3>
              <div className="space-y-4 md:space-y-6 text-[12px] md:text-[13px] leading-[1.6] md:leading-[1.8] text-[#382F2B] font-light text-justify">
                <p>
                  <strong>Kuweni:</strong> The Queen of Legends. While not a specific leopard, the name Kuweni draws from the ancient folklore and history surrounding Wilpattu. Queen Kuweni, a legendary tribal queen, is linked to the origins of Sri Lanka's first recorded kingdom through her union with Prince Vijaya, believed to have landed at Thambapanni (now Kudiramalai Point within Wilpattu).
                </p>
                <p>
                  <strong>Cultural Heritage:</strong> Remnants believed to be Kuweni's palace are still said to exist near Kali Vila in the park, making her story a vital part of Wilpattu's mystical allure.
                </p>
                <p>
                  <strong>Myth Meets Wilderness:</strong> Tent Kuweni invites guests to step into a world where myth and wilderness intertwine, a space that honors the park's cultural roots while offering a tranquil escape amidst nature.
                </p>
              </div>
            </div>
          </div>

          {/* Tent : Chandi */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-serif text-[#064E3B] mb-6 md:mb-8">Tent : Chandi</h3>
              <div className="space-y-4 md:space-y-6 text-[12px] md:text-[13px] leading-[1.6] md:leading-[1.8] text-[#382F2B] font-light text-justify">
                <p>
                  <strong>Chandi:</strong> The Elusive One of the Wild. The name Chandi is affectionately used by a circle of local guides to refer to a lesser-known, elusive leopard in Wilpattu.
                </p>
                <p>
                  <strong>Mystery & Local Lore:</strong> Unlike Neluma, Chandi is not widely documented but lives on through the stories and sightings of those who have encountered this secretive creature during quiet, early morning drives.
                </p>
                <p>
                  <strong>Spirit of Adventure:</strong> Tent Chandi pays homage to the thrill of the unexpected, the quiet excitement of tracking an elusive leopard, the mysteries that lie within the dense forest, and the personal connections forged between guides and wildlife over years of observation.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200" alt="Chandi Tent" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* New Section: A Stay Inspired by Wild Legends */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif text-[#382F2B] mb-6 md:mb-8">A Stay Inspired by Wild Legends</h2>
          <p className="text-[14px] leading-[1.8] md:leading-[2] text-[#382F2B] font-light mb-10 md:mb-12 opacity-80 px-2 md:px-0">
            Each tent at Wilds Wilpattu is more than just accommodation, it is a window into the soul of the park.
            Whether you walk the ancient sand by Hunuwilagama Tank, listen for the distant call of leopards, or simply
            relax in the heart of nature, your stay is woven into the living stories of Wilpattu.
          </p>
          
          <h3 className="text-xl md:text-2xl font-serif text-[#B08968] mb-4 md:mb-6">View Offered from Our Tents</h3>
          <p className="text-[12px] md:text-[13px] leading-[1.8] md:leading-[2] text-[#382F2B] font-light max-w-2xl mx-auto mb-12 md:mb-20 opacity-70 px-4 md:px-0">
            Our three glamping tents share the same sophisticated layout and premium amenities, ensuring a 
            consistent level of comfort and convenience. However, each tent provides a unique connection to the 
            breathtaking surroundings.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start text-left">
            <div className="relative group overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=1200" 
                alt="Foliage View" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10">
                <h4 className="text-2xl md:text-3xl font-serif tracking-wide drop-shadow-md">Foliage View</h4>
              </div>
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="space-y-8 md:space-y-10 py-2 md:py-6">
              <h4 className="text-2xl md:text-3xl font-serif text-[#382F2B]">Amenities in Each Camp</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                {amenities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-1">
                      <i className={`fa-solid ${item.icon} text-[#B08968] text-sm`}></i>
                    </div>
                    <span className="text-[11px] md:text-[12px] leading-[1.4] md:leading-[1.6] font-light text-[#382F2B] opacity-80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kamatha Lounge Section */}
      <section className="py-20 md:py-32 bg-[#FAF7F2]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            <div className="w-full lg:w-[45%] lg:pr-16 z-10 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-serif text-[#382F2B] mb-6 md:mb-8 leading-tight">The View Offered from the Kamatha Lounge</h3>
              <p className="text-[14px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-80 text-justify px-2 md:px-0">
                Gaze across distant paddy fields, where the horizon blends into Wilpattu's borrowed landscape. The wilderness
                stretches endlessly, weaving serenity into every view. It's a setting that invites you to pause, breathe, and simply be.
              </p>
            </div>
            <div className="w-full lg:w-[65%] relative -ml-0 lg:-ml-12">
               <div className="aspect-[4/3] sm:aspect-[16/9] overflow-hidden shadow-2xl rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1600" 
                  alt="Kamatha Lounge View" 
                  className="w-full h-full object-cover"
                />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote/Philosophy Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl">
          <div className="bg-[#FAF7F2] p-8 md:p-16 text-center border border-[#064E3B]/5 shadow-sm rounded-sm">
            <p className="text-[12px] md:text-[13px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-80 italic">
              "At Wilds Wilpattu, we aim to create a seamless blend of luxury and the wilderness. From waking up to the soft 
              sounds of birdsong to unwinding under a canopy of stars, our tents provide the perfect setting for an 
              immersive, yet comfortable, adventure. Whether you're seeking solitude in nature or a base for your 
              wildlife explorations, our thoughtfully curated accommodations ensure your stay is as memorable as 
              the breathtaking landscapes that surround you."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
