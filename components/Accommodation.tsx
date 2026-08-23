'use client';

import React, { useEffect, useState } from "react";

interface RotatingTentImageProps {
  images: string[];
  fallback: string;
  alt: string;
  className: string;
  intervalMs: number;
}

const IMAGE_FADE_DURATION_MS = 800;

const RotatingTentImage: React.FC<RotatingTentImageProps> = ({
  images,
  fallback,
  alt,
  className,
  intervalMs,
}) => {
  const pool = images.length > 0 ? images : [fallback];
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (pool.length <= 1) return;
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % pool.length);
        setIsFading(false);
      }, IMAGE_FADE_DURATION_MS);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [pool.length, intervalMs]);

  return (
    <img
      src={pool[index]}
      alt={alt}
      className={`${className} transition-opacity duration-[800ms] ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      referrerPolicy="no-referrer"
    />
  );
};

const accommodationFeatures = [
  {
    icon: "fa-expand",
    title: "Expansive 300 Sq. Ft. Footprint",
    text: "Abundant headroom and floor space allowing smooth movement and easy luggage storage.",
  },
  {
    icon: "fa-chair",
    title: "Private Outdoor Sit-Out",
    text: "Elevated shaded veranda overlooking nature — perfect for early morning tea or evening stargazing.",
  },
  {
    icon: "fa-shower",
    title: "En-Suite Bathroom",
    text: "Fully attached private bathroom featuring a flushing toilet, fresh running water, and hot/cold safari shower.",
  },
  {
    icon: "fa-wind",
    title: "Climate-Conscious Design",
    text: "Heavy-duty, weather-resistant canvas with large mesh windows for maximum airflow and insect protection.",
  },
  {
    icon: "fa-bed",
    title: "Plush Interior Furnishings",
    text: "Outfitted with comfortable king or twin beds, premium crisp linens, ambient lighting, and power outlets for charging camera gear.",
  },
];

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const FALLBACKS = {
  aliya: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=1200",
  kotiya: "https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=1200",
  walaha: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200",
  foliage: "https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=1200",
};

type TentGroups = {
  aliya: string[];
  kotiya: string[];
  walaha: string[];
};

const TENT_NAMES = ["aliya", "kotiya", "walaha"] as const;
const FOLIAGE_IMAGE_PATTERN = /\/tent\/tent\d+\.webp$/i;

function buildTentGroups(images: string[]): TentGroups {
  const namedImages = Object.fromEntries(
    TENT_NAMES.map((name) => [
      name,
      images.filter((image) => image.toLowerCase().includes(`/tent/${name}`)),
    ]),
  ) as TentGroups;

  const sharedImages = images.filter(
    (image) =>
      !TENT_NAMES.some((name) => image.toLowerCase().includes(`/tent/${name}`)) &&
      !FOLIAGE_IMAGE_PATTERN.test(image),
  );

  return {
    aliya: [...shuffle(namedImages.aliya), ...shuffle(sharedImages)],
    kotiya: [...shuffle(namedImages.kotiya), ...shuffle(sharedImages)],
    walaha: [...shuffle(namedImages.walaha), ...shuffle(sharedImages)],
  };
}

const Accommodation: React.FC = () => {
  const [tentGroups, setTentGroups] = useState<TentGroups>({
    aliya: [],
    kotiya: [],
    walaha: [],
  });
  const [heroImage, setHeroImage] = useState(FALLBACKS.aliya);
  const [foliageImages, setFoliageImages] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/tent-images")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data?.images?.length) return;
        const images = data.images as string[];
        setTentGroups(buildTentGroups(images));
        setFoliageImages(shuffle(images.filter((image) => FOLIAGE_IMAGE_PATTERN.test(image))));

        const heroImages = images.filter((image) =>
          /\/tent\/(aliya|kotiya|walaha)001\.webp$/i.test(image),
        );
        if (heroImages.length > 0) setHeroImage(shuffle(heroImages)[0]);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf7f2]">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            className="w-full h-full object-cover"
            alt="Accommodation Hero"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 z-10 text-center text-white mt-16 md:mt-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 md:mb-6 drop-shadow-lg !text-white">
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
            Your untamed journey begins here.
          </h2>
          <div className="space-y-6 md:space-y-8 text-[14px] md:text-[15px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-90 px-2 md:px-0 text-justify md:text-center">
            <p>
              Welcome to Wilpattu Wilderness Camping, where raw nature meets uncompromised luxury. Tucked away on the edge of Sri Lanka’s oldest and largest national park, our eco-luxury glamping retreat offers a rare front-row seat to the wild.

            </p>
            <p>
              Wake to a choir of exotic bird song beneath our centuries-old Banyan tree, venture deep into pristine forest tracks led by master trackers, and return to spacious 300 sq. ft. luxury canvas suites. Here, gourmet clay-pot curries, fine wines under starlight campfires, and 24/7 dedicated hospitality come together to craft an unforgettable safari escape.

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
                  wisdom, and timeless spirit of Sri Lanka's largest land
                  animal.
                </p>
                <p>
                  <strong>Name Origin:</strong> The Sinhala word{" "}
                  <strong>"Aliya" (අලියා)</strong> means{" "}
                  <strong>Elephant</strong>, an animal deeply respected in Sri
                  Lankan culture and wildlife heritage. For centuries, elephants
                  have been the guardians of Sri Lanka's forests, representing
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
                  Wilpattu's magnificent giants. Through beautifully presented
                  images and stories, experience the journey of Jaya and the
                  timeless relationship between elephants and this legendary
                  wilderness.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <RotatingTentImage
                images={tentGroups.aliya}
                fallback={FALLBACKS.aliya}
                alt="Aliya Tent"
                intervalMs={7000}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl rounded-sm"
              />
            </div>
          </div>

          {/* Tent : Kotiya */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 mb-20 md:mb-32">
            <div className="w-full lg:w-1/2">
              <RotatingTentImage
                images={tentGroups.kotiya}
                fallback={FALLBACKS.kotiya}
                alt="Kotiya Tent"
                intervalMs={8500}
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
                  and beauty of one of the world's most elusive big cats.
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
                  Wilpattu's most legendary predator. Through beautifully
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
                  <strong>Tent Walaha</strong> celebrates one of Wilpattu's most
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
                  one of the most important habitats for Sri Lanka's endangered
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
                  one of Wilpattu's most mysterious creatures. Through
                  beautifully presented images and stories, discover the life of
                  the Sri Lankan sloth bear and the untold stories hidden within
                  the forest.
                </p>
                <p className="font-medium text-[#8d5527]">
                  Staying in Tent Walaha is more than accommodation — it is an
                  invitation to experience the wild spirit of Wilpattu, where
                  every sound, footprint, and movement tells a story of nature's
                  hidden guardians.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <RotatingTentImage
                images={tentGroups.walaha}
                fallback={FALLBACKS.walaha}
                alt="Walaha Tent"
                intervalMs={9500}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Section: A Stay Inspired by Wild Legends */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-serif text-[#382F2B] mb-6 md:mb-8">
            Luxury Glamping & World-Class Safaris at Wilpattu

          </h2>
          <p className="text-[14px] leading-[1.8] md:leading-[2] text-[#382F2B] font-light mb-10 md:mb-12 opacity-80 px-2 md:px-0">
            Discover the ultimate wilderness escape at Wilpattu Wilderness Camping. Blending authentic island hospitality with high-end glamping comfort, we offer tailored safari experiences designed for wildlife lovers, photographers, and discerning travelers.
            
            Surrounded by serene natural villus and ancient jungle canopies, our camp combines custom-designed 300 sq. ft. en-suite luxury tents, expert-guided leopard and bear safaris, authentic Sri Lankan and Western dining, and 24-hour personalized service. Experience the majesty of Wilpattu in effortless style and quiet tranquility.
          </p>

          <h3 className="text-xl md:text-2xl font-serif text-[#B08968] mb-2">
            Spacious Luxury Safari Canvas
          </h3>
          <p className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-[#8d5527] mb-4 md:mb-6">
            300 Sq. Ft. (12 ft × 25 ft) / ~28 Sq. Meters of Pure Wilderness Comfort
          </p>
          <p className="text-[12px] md:text-[13px] leading-[1.8] md:leading-[2] text-[#382F2B] font-light max-w-2xl mx-auto mb-12 md:mb-20 opacity-70 px-4 md:px-0">
            Designed for travellers seeking an authentic, close-to-nature
            escape without sacrificing space or modern comfort. Our
            custom-designed safari glamping tents offer a generous 300 sq. ft.
            layout, blending seamlessly with the natural dry-zone canopy of
            Wilpattu.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-10 md:gap-16 items-start text-left">
            <div className="relative group overflow-hidden rounded-sm lg:translate-y-8">
              <RotatingTentImage
                images={foliageImages}
                fallback={FALLBACKS.foliage}
                alt="Foliage View"
                intervalMs={15000}
                className="w-full aspect-[3/2] object-contain bg-[#e8e0d6] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 md:top-10 md:left-10 text-white z-10">
                <h4 className="text-2xl md:text-3xl font-serif tracking-wide drop-shadow-md !text-white">
                  Foliage View
                </h4>
              </div>
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="space-y-4 md:space-y-5 py-0 md:py-1">
              <h4 className="text-2xl md:text-3xl font-serif text-[#382F2B]">
                Key Accommodation Features
              </h4>
              <ul className="space-y-3 md:space-y-4">
                {accommodationFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#efe2d2] flex items-center justify-center shrink-0 mt-0.5">
                      <i className={`fa-solid ${item.icon} text-[#bf885e] text-sm`}></i>
                    </div>
                    <div>
                      <p className="text-[13px] md:text-[14px] font-bold text-[#382F2B] mb-1">
                        {item.title}
                      </p>
                      <p className="text-[12px] md:text-[13px] leading-[1.6] font-light text-[#382F2B] opacity-75">
                        {item.text}
                      </p>
                    </div>
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
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
            <div className="w-full lg:w-[45%] text-center lg:text-left flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-serif text-[#382F2B] mb-6 md:mb-8 leading-tight">
                Wake Up to Nature&rsquo;s Symphony beneath a Centuries-Old Banyan Tree
              </h3>
              <p className="text-[14px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-80 text-justify px-2 md:px-0 mb-8 md:mb-10">
                Nestled in the heart of our campsite stands a majestic,
                centuries-old Banyan tree — a living natural monument whose
                massive aerial roots create a peaceful shelter for nature
                lovers. Serving as a vibrant sanctuary for Wilpattu&rsquo;s
                birdlife, this giant canopy comes alive every morning and
                evening. From your private luxury tent veranda, sip fresh
                Ceylon tea while watching flocks of exotic birds gather in the
                branches above.
              </p>

              <h4 className="text-lg md:text-xl font-serif text-[#8d5527] mb-5 md:mb-6">
                Highlights of the Banyan Tree View Experience
              </h4>
              <ul className="space-y-5 md:space-y-6 text-left">
                {[
                  {
                    icon: "fa-dove",
                    title: "A Living Birdwatcher's Paradise",
                    text: "Home to Sri Lanka's vibrant bird species — including hornbills, parakeets, barbets, green pigeons, and kingfishers right above your tent.",
                  },
                  {
                    icon: "fa-wind",
                    title: "Natural Shade & Cool Breeze",
                    text: "The sprawling root system and dense leaf canopy provide natural cooling during warm safari afternoons.",
                  },
                  {
                    icon: "fa-sun",
                    title: "Golden Hour Magic",
                    text: "Watch the sunlight filter through the ancient roots at sunrise and sunset, creating an enchanting backdrop for outdoor dining and campfire evenings.",
                  },
                  {
                    icon: "fa-camera",
                    title: "Tranquil Photography Spot",
                    text: "Capture magnificent wildlife and landscape photos without leaving the comfort of your glamping camp site.",
                  },
                ].map((item, idx) => (
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
            <div className="w-full lg:w-[55%] min-h-[380px] sm:min-h-[460px]">
              <div className="relative h-full w-full overflow-hidden rounded-sm shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600"
                  alt="Centuries-old Banyan Tree at the campsite"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/5 to-transparent"></div>
                <div className="absolute inset-4 md:inset-6 border border-white/20 pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-10">
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#efe2d2] mb-2">
                    <i className="fa-solid fa-tree mr-2"></i>
                    Est. Centuries Ago
                  </p>
                  <h4 className="text-xl md:text-2xl font-serif tracking-wide drop-shadow-md !text-white">
                    The Ancient Banyan Bird Sanctuary
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote/Philosophy Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl">
          <div className="bg-[#fbf7f2] p-8 md:p-16 text-center border border-[#8d5527]/5 shadow-sm rounded-sm">
            <p className="text-[13px] md:text-[14px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-90">
              Experience Sri Lanka&rsquo;s grandest national park with Wilpattu
              Wilderness Camping. Featuring 300 sq. ft. luxury safari tents, an
              ancient Banyan tree bird sanctuary, master naturalist-guided game
              drives, gourmet Sri Lankan &amp; Western dining, ice-cold drinks,
              and round-the-clock dedicated service. Immerse yourself in the
              wild without sacrificing comfort.
            </p>
          </div>
        </div>
      </section>
      {/* Booking CTA Section */}
      <section className="py-20 md:py-28 bg-[#8d5527] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 !text-white">
            Ready to Stay With Us?
          </h2>
          <p className="text-[13px] md:text-[14px] leading-[1.8] font-light opacity-80 mb-10 md:mb-12">
            Reserve your tent, then pair it with a private jeep safari to make
            the most of your time in Wilpattu.
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

export default Accommodation;
