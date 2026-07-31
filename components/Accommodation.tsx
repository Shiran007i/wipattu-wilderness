import React from "react";

const Accommodation: React.FC = () => {
  const amenities = [
    {
      icon: "fa-snowflake",
      text: "Air-conditioned interiors for ultimate comfort (From April 2024 onwards)",
    },
    {
      icon: "fa-shower",
      text: "En-suite bathroom with hot water and premium toiletries",
    },
    { icon: "fa-bed", text: "Queen-sized beds with comfort-rich linens" },
    {
      icon: "fa-chair",
      text: "Private outdoor seating area to relax and enjoy the view",
    },
    {
      icon: "fa-mug-hot",
      text: "Complimentary tea and coffee-making facilities",
    },
    { icon: "fa-plug", text: "Charging stations for your devices" },
    { icon: "fa-broom", text: "Daily housekeeping and turndown service" },
    {
      icon: "fa-snowflake",
      text: "Mini fridge stocked with local treats (on request)",
    },
    { icon: "fa-baby", text: "Baby cot (on request)" },
  ];

  return (
    <div className="min-h-screen bg-[#fbf7f2]">
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
      <section className="py-16 md:py-24 lg:py-32 bg-[#fbf7f2]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#8d5527] mb-8 md:mb-12">
            Where Stories of the Wild Come Alive
          </h2>
          <div className="space-y-6 md:space-y-8 text-[14px] md:text-[15px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-90 px-2 md:px-0 text-justify md:text-center">
            <p>
              Discover a perfect balance of comfort and nature at Wilds
              Wilpattu, where our luxury glamping tents provide a one-of-a-kind
              wilderness experience. Thoughtfully designed to blend with the
              surrounding environment, each tent offers modern amenities while
              preserving the charm of outdoor living.
            </p>
            <p>
              At Wilds Wilpattu, each of our three bespoke tents is thoughtfully
              named to reflect the rich natural and cultural heritage of
              Wilpattu National Park. These names — Aliya, Kotiya, and Walaha —
              are inspired by the wildlife, folklore, and timeless spirit of
              Wilpattu, offering guests a deeper connection to the wilderness
              they are about to explore.
            </p>
          </div>
        </div>
      </section>

      {/* Tent Sections (Legends) */}
      <section className="pb-20 md:pb-32 bg-[#fbf7f2]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Tent : Aliya */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 mb-20 md:mb-32">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-serif text-[#8d5527] mb-6 md:mb-8">
                Tent: Aliya (අලියා)
              </h3>
              <div className="space-y-4 md:space-y-6 text-[12px] md:text-[13px] leading-[1.6] md:leading-[1.8] text-[#382F2B] font-light text-justify">
                <p>
                  <strong>Aliya:</strong> The Gentle Giant of Wilpattu. Named
                  after the magnificent elephants that have roamed the ancient
                  wilderness of Wilpattu for generations,{" "}
                  <strong>Aliya (අලියා)</strong> is a tribute to the strength,
                  wisdom, and timeless spirit of Sri Lanka’s largest land
                  animal.
                </p>
                <p>
                  <strong>Name Origin:</strong> The Sinhala word{" "}
                  <strong>"Aliya" (අලියා)</strong> means{" "}
                  <strong>Elephant</strong>, an animal deeply respected in Sri
                  Lankan culture and wildlife heritage. For centuries, elephants
                  have been the guardians of Sri Lanka’s forests, representing
                  strength, intelligence, family bonds, and harmony with nature.
                </p>
                <p>
                  <strong>Jaya:</strong> Among the many magnificent elephants
                  that have lived within the wilderness of Wilpattu,{" "}
                  <strong>Jaya (ජය)</strong> became a memorable figure admired
                  by wildlife enthusiasts and safari visitors. Known for his
                  impressive size, calm presence, and majestic appearance, Jaya
                  represented the true spirit of a wild Sri Lankan elephant.
                </p>
                <p>
                  <strong>Symbol of Strength and Wisdom:</strong> Elephants are
                  not only the largest animals in the forest; they are
                  intelligent, emotional, and deeply connected to their
                  environment. They carry stories of generations, survival, and
                  the unbreakable bond between wildlife and nature. Jaya stands
                  as a symbol of{" "}
                  <strong>
                    strength, resilience, and the untamed spirit of Wilpattu
                  </strong>{" "}
                  — a gentle giant whose presence leaves a lasting memory in the
                  hearts of those fortunate enough to witness him.
                </p>
                <p>
                  <strong>Your Stay at Tent Aliya:</strong> When you step into{" "}
                  <strong>Tent Aliya</strong>, you discover the story of
                  Wilpattu’s magnificent giants. Through beautifully presented
                  images and stories, experience the journey of Jaya and the
                  timeless relationship between elephants and this legendary
                  wilderness.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=1200"
                alt="Aliya Tent"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl rounded-sm"
              />
            </div>
          </div>

          {/* Tent : Kotiya */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 mb-20 md:mb-32">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=1200"
                alt="Kotiya Tent"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl rounded-sm"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif text-[#8d5527] mb-6 md:mb-8">
                Tent: Kotiya (කොටියා)
              </h3>
              <div className="space-y-4 md:space-y-6 text-[12px] md:text-[13px] leading-[1.6] md:leading-[1.8] text-[#382F2B] font-light text-justify">
                <p>
                  <strong>Kotiya:</strong> The Shadow of Wilpattu. Named after
                  the magnificent <strong>Sri Lankan leopard (කොටියා)</strong>,
                  the most iconic predator of Wilpattu,{" "}
                  <strong>Tent Kotiya</strong> celebrates the mystery, power,
                  and beauty of one of the world’s most elusive big cats.
                </p>
                <p>
                  <strong>Name Origin:</strong> The Sinhala word{" "}
                  <strong>"Kotiya" (කොටියා)</strong> represents the leopard — a
                  symbol of courage, independence, and survival. Hidden among
                  the ancient forests, rocky landscapes, and peaceful waterholes
                  of Wilpattu, the leopard remains the true ruler of this
                  wilderness.
                </p>
                <p>
                  <strong>Cleopatra:</strong> Among the unforgettable leopards
                  of Wilpattu, <strong>Cleopatra</strong> became a favourite
                  among safari enthusiasts and wildlife photographers. Known for
                  her elegant appearance, confident movements, and remarkable
                  ability to survive in the wild, she represented the beauty and
                  resilience of the Sri Lankan leopard.
                </p>
                <p>
                  <strong>Symbol of Mystery and Strength:</strong> The leopard
                  is more than a predator; it is a symbol of balance within the
                  wilderness. With its unmatched camouflage, intelligence, and
                  solitary nature, the leopard represents the hidden wonders of
                  Wilpattu that only the fortunate few get to witness.
                </p>
                <p>
                  <strong>Your Stay at Tent Kotiya:</strong> When you enter{" "}
                  <strong>Tent Kotiya</strong>, you step into the world of
                  Wilpattu’s most legendary predator. Through beautifully
                  presented images and stories, discover the life of the leopard
                  and the unforgettable characters that have shaped the identity
                  of this ancient national park.
                </p>
                <p className="font-medium text-[#8d5527]">
                  Staying in Tent Kotiya is more than accommodation — it is an
                  invitation to experience the mystery of Wilpattu, where the
                  silent footsteps of the leopard continue to rule the
                  wilderness.
                </p>
              </div>
            </div>
          </div>

          {/* Tent : Walaha */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-serif text-[#8d5527] mb-6 md:mb-8">
                Tent: Walaha (වලහා)
              </h3>
              <div className="space-y-4 md:space-y-6 text-[12px] md:text-[13px] leading-[1.6] md:leading-[1.8] text-[#382F2B] font-light text-justify">
                <p>
                  <strong>Waalaha:</strong> The Mysterious Guardian of Wilpattu.
                  Named after the powerful yet secretive{" "}
                  <strong>Sri Lankan Sloth Bear (වලහා)</strong>,{" "}
                  <strong>Tent Walaha</strong> celebrates one of Wilpattu’s most
                  fascinating and rarely seen inhabitants. A creature of
                  strength, curiosity, and mystery, the bear represents the
                  hidden wonders that await within the ancient forests of
                  Wilpattu.
                </p>
                <p>
                  <strong>Name Origin:</strong> The Sinhala word{" "}
                  <strong>"Waalaha" (වලහා)</strong> refers to the bear — a
                  symbol of endurance, courage, and survival. Deep within the
                  dry zone forests of Wilpattu, these remarkable animals roam
                  quietly among the trees, searching for food and shelter while
                  maintaining their mysterious connection with the wilderness.
                </p>
                <p>
                  <strong>The Legendary Bears of Wilpattu:</strong> Wilpattu is
                  one of the most important habitats for Sri Lanka’s endangered
                  sloth bears. Known for their distinctive appearance, powerful
                  claws, and incredible sense of smell, these fascinating
                  creatures have captured the hearts of wildlife enthusiasts and
                  safari guides.
                </p>
                <p>
                  <strong>Symbol of Courage and Mystery:</strong> Unlike the
                  more frequently seen animals of Wilpattu, the bear remains a
                  symbol of the unknown. It represents the excitement of
                  exploration — the possibility that every journey into the
                  forest may reveal a rare and unforgettable encounter.
                </p>
                <p>
                  <strong>Your Stay at Tent Walaha:</strong> When you enter{" "}
                  <strong>Tent Walaha</strong>, you enter a world inspired by
                  one of Wilpattu’s most mysterious creatures. Through
                  beautifully presented images and stories, discover the life of
                  the Sri Lankan sloth bear and the untold stories hidden within
                  the forest.
                </p>
                <p className="font-medium text-[#8d5527]">
                  Staying in Tent Walaha is more than accommodation — it is an
                  invitation to experience the wild spirit of Wilpattu, where
                  every sound, footprint, and movement tells a story of nature’s
                  hidden guardians.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200"
                alt="Walaha Tent"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Section: A Stay Inspired by Wild Legends */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif text-[#382F2B] mb-6 md:mb-8">
            A Stay Inspired by Wild Legends
          </h2>
          <p className="text-[14px] leading-[1.8] md:leading-[2] text-[#382F2B] font-light mb-10 md:mb-12 opacity-80 px-2 md:px-0">
            Each tent at Wilds Wilpattu is more than just accommodation, it is a
            window into the soul of the park. Whether you walk the ancient sand
            by Hunuwilagama Tank, listen for the distant call of leopards, or
            simply relax in the heart of nature, your stay is woven into the
            living stories of Wilpattu.
          </p>

          <h3 className="text-xl md:text-2xl font-serif text-[#B08968] mb-4 md:mb-6">
            View Offered from Our Tents
          </h3>
          <p className="text-[12px] md:text-[13px] leading-[1.8] md:leading-[2] text-[#382F2B] font-light max-w-2xl mx-auto mb-12 md:mb-20 opacity-70 px-4 md:px-0">
            Our three glamping tents share the same sophisticated layout and
            premium amenities, ensuring a consistent level of comfort and
            convenience. However, each tent provides a unique connection to the
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
                <h4 className="text-2xl md:text-3xl font-serif tracking-wide drop-shadow-md">
                  Foliage View
                </h4>
              </div>
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="space-y-8 md:space-y-10 py-2 md:py-6">
              <h4 className="text-2xl md:text-3xl font-serif text-[#382F2B]">
                Amenities in Each Camp
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                {amenities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-1">
                      <i
                        className={`fa-solid ${item.icon} text-[#B08968] text-sm`}
                      ></i>
                    </div>
                    <span className="text-[11px] md:text-[12px] leading-[1.4] md:leading-[1.6] font-light text-[#382F2B] opacity-80">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kamatha Lounge Section */}
      <section className="py-20 md:py-32 bg-[#fbf7f2]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            <div className="w-full lg:w-[45%] lg:pr-16 z-10 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-serif text-[#382F2B] mb-6 md:mb-8 leading-tight">
                The View Offered from the Kamatha Lounge
              </h3>
              <p className="text-[14px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-80 text-justify px-2 md:px-0">
                Gaze across distant paddy fields, where the horizon blends into
                Wilpattu's borrowed landscape. The wilderness stretches
                endlessly, weaving serenity into every view. It's a setting that
                invites you to pause, breathe, and simply be.
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
          <div className="bg-[#fbf7f2] p-8 md:p-16 text-center border border-[#8d5527]/5 shadow-sm rounded-sm">
            <p className="text-[12px] md:text-[13px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-80 italic">
              "At Wilds Wilpattu, we aim to create a seamless blend of luxury
              and the wilderness. From waking up to the soft sounds of birdsong
              to unwinding under a canopy of stars, our tents provide the
              perfect setting for an immersive, yet comfortable, adventure.
              Whether you're seeking solitude in nature or a base for your
              wildlife explorations, our thoughtfully curated accommodations
              ensure your stay is as memorable as the breathtaking landscapes
              that surround you."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
