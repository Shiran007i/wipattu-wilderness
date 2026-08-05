
'use client';

import React, { useState, useEffect } from 'react';

// Shown only if /public/images/blog is empty, so the page never looks broken.
const FALLBACK_GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1590418606746-018840fb9cd0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1581852017103-68accd352432?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516428990250-d844c3386dd4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=800",
];

interface BlogProps {
  galleryImages?: string[];
}

interface GallerySlotProps {
  images: string[];
  gridArea: string;
  intervalMs: number;
  isPlaying: boolean;
  startIndex: number;
  slotNumber: number;
  onImageClick: (src: string) => void;
}

const GallerySlot: React.FC<GallerySlotProps> = ({ images, gridArea, intervalMs, isPlaying, startIndex, slotNumber, onImageClick }) => {
  const [index, setIndex] = useState(startIndex % images.length);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || !isPlaying) return;
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => {
          if (images.length <= 1) return prev;
          let next = prev;
          while (next === prev) {
            next = Math.floor(Math.random() * images.length);
          }
          return next;
        });
        setIsFading(false);
      }, 800);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs, isPlaying]);

  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg h-full w-full cursor-pointer" style={{ gridArea }} onClick={() => onImageClick(images[index])}>
      <img
        src={images[index]}
        alt={`Wilpattu National Park - photo ${slotNumber + 1}`}
        className={`w-full h-full object-cover transition-all duration-[1200ms] ease-in-out group-hover:scale-110 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
        <i className="fa-solid fa-expand text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"></i>
      </div>
    </div>
  );
};

const Blog: React.FC<BlogProps> = ({ galleryImages }) => {
  const images = galleryImages && galleryImages.length > 0 ? galleryImages : FALLBACK_GALLERY_IMAGES;
  // Grid area names: t1/t2 = tall portrait, w1/w2 = wide landscape, s1/s2 = square.
  const SLOT_AREAS = ["t1", "w1", "s1", "s2", "t2", "w2"];
  // Each slot rotates on its own independent, distinct interval (seconds -> ms)
  // so the whole wall feels organic instead of flipping all at once.
  const SLOT_INTERVALS = [9000, 13000, 11000, 15500, 10000, 14000];

  const [isGalleryPlaying, setIsGalleryPlaying] = useState(true);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [mapCoords, setMapCoords] = useState({ latitude: 8.3076, longitude: 80.148 });

  useEffect(() => {
    let cancelled = false;
    fetch('/api/contact-info')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && typeof data?.latitude === 'number' && typeof data?.longitude === 'number') {
          setMapCoords({ latitude: data.latitude, longitude: data.longitude });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!lightboxSrc) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxSrc]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Colombo'
    });
  };

  return (
    <>
    <div className="bg-[#fbf7f2] min-h-screen pt-32 pb-20 text-[#382F2B] leaf-pattern">
      {/* SEO Header - Hidden from view but good for crawlers */}
      <h1 className="sr-only">Discover Wilpattu National Park: Sri Lanka’s Hidden Wildlife Paradise</h1>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header Section */}
        <header className="mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#B08968]"></div>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#B08968]">Wild Wilpattu Chronicles</span>
            <div className="w-12 h-[1px] bg-[#B08968]"></div>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif mb-8 leading-tight text-[#8d5527]">Wilpattu <br />National Park</h2>
          <p className="text-lg md:text-xl font-light opacity-70 max-w-3xl mx-auto leading-relaxed italic">
            "Sri Lanka’s largest and oldest national park, a sanctuary of natural lakes and elusive predators."
          </p>
        </header>

        {/* Real-time Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-y border-[#8d5527]/10 py-12 bg-white/50 backdrop-blur-sm rounded-xl px-8">
          <div className="text-center md:text-left border-r border-[#8d5527]/5 last:border-0">
            <h4 className="text-[10px] font-bold tracking-widest uppercase opacity-50 mb-2">Current Date</h4>
            <p className="text-sm font-serif">{formatDate(currentTime)}</p>
          </div>
          <div className="text-center border-r border-[#8d5527]/5 last:border-0">
            <h4 className="text-[10px] font-bold tracking-widest uppercase opacity-50 mb-2">Local Time (Wilpattu)</h4>
            <p className="text-sm font-serif">{formatTime(currentTime)}</p>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-[10px] font-bold tracking-widest uppercase opacity-50 mb-2">Current Weather</h4>
            <div className="flex items-center justify-center md:justify-end gap-3 text-sm font-serif">
              <i className="fa-solid fa-sun text-amber-600 animate-pulse"></i>
              <span>29°C | Sunny & Dry</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Main Narrative */}
          <div className="lg:col-span-8 space-y-16">
            <article className="prose prose-stone max-w-none">
              <section>
                <h3 className="text-4xl font-serif mb-8 text-[#8d5527] border-l-4 border-[#B08968] pl-6">Introduction to Wilpattu</h3>
                <div className="text-[16px] leading-[2] font-light opacity-90 space-y-6 text-justify">
                  <p>
                    Wilpattu National Park, located in the northwest of Sri Lanka, is one of the country’s oldest and largest national parks, spanning over 1,300 square kilometers. Established in 1938, it has become a sanctuary for a wide variety of wildlife, offering visitors a peaceful and unspoiled environment to explore.
                  </p>
                  <p>
                    The park is named after its unique "willus," natural lakes or lagoons that are scattered throughout the landscape. Wilpattu’s diverse ecosystem includes dense tropical forests, grasslands, and wetlands, making it home to a rich variety of flora and fauna.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-4xl font-serif mb-8 text-[#8d5527] border-l-4 border-[#B08968] pl-6">Why Pick Wilpattu?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Less Crowded", desc: "Unlike other parks in Sri Lanka, Wilpattu sees fewer visitors, allowing for a quieter and more personalized safari experience. The absence of large crowds means there are fewer jeeps, offering a more exclusive and uninterrupted wildlife viewing experience.", icon: "fa-users-slash" },
                    { title: "Incredible Biodiversity", desc: "Wilpattu is home to the rare Sri Lankan leopard, making it a top destination for wildlife enthusiasts. Additionally, the park is rich in diverse habitats, providing a safe haven for elephants, bears, and a variety of bird species.", icon: "fa-dna" },
                    { title: "Unique Landscapes", desc: "The park's distinct 'willus' – shallow natural lakes – create a picturesque and tranquil setting, perfect for photography and peaceful exploration. These willus attract large herds of animals, especially during the dry season.", icon: "fa-mountain-sun" },
                    { title: "Birdwatching Paradise", desc: "For bird enthusiasts, Wilpattu is a paradise. With over 200 species of birds, including migratory birds, the park provides an exceptional bird-watching experience in their natural habitat.", icon: "fa-dove" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#8d5527]/5 hover:border-[#bf885e]/30 transition-all group">
                      <div className="w-12 h-12 bg-[#efe2d2] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#8d5527] group-hover:text-white transition-colors">
                        <i className={`fa-solid ${item.icon} text-emerald-700 group-hover:text-white`}></i>
                      </div>
                      <h4 className="text-xl font-serif mb-4 text-[#8d5527]">{item.title}</h4>
                      <p className="text-[13px] leading-relaxed opacity-70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

            </article>

            {/* How to Get There */}
            <section>
              <h3 className="text-4xl font-serif mb-8 text-[#8d5527] border-l-4 border-[#B08968] pl-6">How to Get There</h3>
              <div className="text-[16px] leading-[2] font-light opacity-90 space-y-6 text-justify">
                <p>
                  Wilpattu National Park sits on Sri Lanka's northwest coast, about 30 km west of Anuradhapura, 26 km north of Puttalam, and roughly 180 km (4-5 hours by road) from Colombo. The main visitor entrance is the <strong>Hunuwilagama Gate</strong>, located on the Puttalam–Anuradhapura A12 road.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  { title: "By Private Vehicle", desc: "From Colombo, take the Negombo–Chilaw–Puttalam route, then continue towards Anuradhapura and follow signs to Hunuwilagama. Roughly 4-5 hours from Colombo.", icon: "fa-car" },
                  { title: "From Anuradhapura", desc: "Take the A12 towards Puttalam. The Hunuwilagama turn-off is well signposted, about 45-60 minutes by taxi from town.", icon: "fa-route" },
                  { title: "By Public Transport", desc: "Bus from Anuradhapura to Puttalam, then a local bus towards Hunuwilagama. Ask the driver to drop you near the park entrance.", icon: "fa-bus" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#8d5527]/5">
                    <div className="w-12 h-12 bg-[#efe2d2] rounded-xl flex items-center justify-center mb-6">
                      <i className={`fa-solid ${item.icon} text-emerald-700`}></i>
                    </div>
                    <h4 className="text-lg font-serif mb-3 text-[#8d5527]">{item.title}</h4>
                    <p className="text-[13px] leading-relaxed opacity-70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Entry Fees & Permits */}
            <section>
              <h3 className="text-4xl font-serif mb-8 text-[#8d5527] border-l-4 border-[#B08968] pl-6">Entry Fees & Permits</h3>
              <div className="text-[16px] leading-[2] font-light opacity-90 space-y-6 text-justify mb-8">
                <p>
                  Entry to Wilpattu is arranged through the Sri Lanka Department of Wildlife Conservation and is typically included in your safari jeep booking. Fees vary by nationality, group size, and season, so always confirm current rates when booking rather than relying on published figures, which change periodically.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex items-start gap-4">
                <i className="fa-solid fa-circle-info text-amber-600 mt-1"></i>
                <p className="text-[13px] leading-relaxed text-amber-800">
                  We handle entry permits and tickets as part of our safari and camping packages — no need to arrange these separately. <a href="/booking" className="underline font-bold">Get in touch to confirm current pricing</a> for your dates.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h3 className="text-4xl font-serif mb-8 text-[#8d5527] border-l-4 border-[#B08968] pl-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {[
                  { q: "What is the best time to visit Wilpattu National Park?", a: "The dry season, from February to October, offers the best wildlife viewing as animals gather around the park's villus (natural lakes) for water." },
                  { q: "Is Wilpattu good for leopard spotting?", a: "Yes. Wilpattu is renowned for its Sri Lankan leopard population and, being far less crowded than parks like Yala, often provides more relaxed and exclusive sightings." },
                  { q: "How far is Wilpattu from Colombo?", a: "Approximately 180 km, roughly a 4-5 hour drive via Negombo, Chilaw, and Puttalam." },
                  { q: "Do I need to arrange park entry tickets myself?", a: "No, entry permits and tickets are arranged as part of our safari and camping packages." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#8d5527]/5">
                    <h4 className="text-base font-bold text-[#8d5527] mb-2">{item.q}</h4>
                    <p className="text-[13px] leading-relaxed opacity-70">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar Stats & Info */}
          <div className="lg:col-span-4 space-y-10">
            {/* Key Facts Card */}
            <div className="bg-[#8d5527] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 -rotate-12 translate-x-1/4 -translate-y-1/4">
                <i className="fa-solid fa-leaf text-[150px]"></i>
              </div>
              <h4 className="text-2xl font-serif mb-8 relative z-10">Key Facts</h4>
              <div className="space-y-8 relative z-10">
                {[
                  { label: "Established", value: "1938", icon: "fa-calendar-check" },
                  { label: "Total Area", value: "1,317 sq km", icon: "fa-expand" },
                  { label: "Mammal Species", value: "30+", icon: "fa-paw" },
                  { label: "Bird Species", value: "200+", icon: "fa-feather" },
                  { label: "Best Time", value: "Feb - Oct", icon: "fa-clock" }
                ].map((fact, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#8d5527] transition-colors">
                      <i className={`fa-solid ${fact.icon} text-[#bf885e] group-hover:text-white`}></i>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold">{fact.label}</p>
                      <p className="text-xl font-serif font-bold !text-white">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Time to Visit */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-[#8d5527]/5">
              <h4 className="text-2xl font-serif mb-6 text-[#8d5527]">Best Time to Visit</h4>
              <p className="text-[14px] leading-[1.8] font-light opacity-80 mb-6">
                The ideal time to visit Wilpattu is from <strong>February to October</strong> when the weather is drier, and wildlife sightings are more frequent.
              </p>
              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <i className="fa-solid fa-circle-info text-amber-600"></i>
                <p className="text-[11px] font-bold text-amber-800 uppercase tracking-widest">Plan ahead for peak sightings</p>
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-[#8d5527]/5">
              <h4 className="text-xl font-serif mb-4 text-[#8d5527]">Our Location</h4>
              <div className="w-full h-[250px] bg-stone-100 rounded-2xl overflow-hidden">
                <iframe 
                  src={`https://www.google.com/maps?q=${mapCoords.latitude},${mapCoords.longitude}&z=13&output=embed`}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wilpattu National Park Map"
                ></iframe>
              </div>
              <p className="mt-4 text-[10px] font-bold tracking-widest uppercase opacity-40 text-center">
                Hunuwilagama Entrance
              </p>
            </div>
          </div>
        </div>

        {/* Full Width Visual Journey Section */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-12 pl-6 border-l-4 border-[#B08968]">
            <h3 className="text-4xl font-serif text-[#8d5527]">A Visual Journey</h3>
            <button
              type="button"
              onClick={() => setIsGalleryPlaying((prev) => !prev)}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8d5527] border border-[#8d5527]/30 rounded-full px-4 py-2 hover:bg-[#8d5527] hover:text-white transition-colors"
              aria-label={isGalleryPlaying ? "Pause gallery rotation" : "Play gallery rotation"}
            >
              <i className={`fa-solid ${isGalleryPlaying ? "fa-pause" : "fa-play"}`}></i>
              {isGalleryPlaying ? "Pause" : "Play"}
            </button>
          </div>
          <style>{`
            .wj-visual-gallery {
              display: grid;
              gap: 6px;
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: 150px 150px 150px 150px 260px;
              grid-template-areas:
                "t1 t2"
                "t1 t2"
                "w1 w1"
                "s1 s2"
                "w2 w2";
            }
            @media (min-width: 640px) {
              .wj-visual-gallery {
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: 210px 210px 380px;
                grid-template-areas:
                  "t1 w1 w1 t2"
                  "t1 s1 s2 t2"
                  "w2 w2 w2 w2";
              }
            }
          `}</style>
          <div className="wj-visual-gallery">
            {SLOT_AREAS.map((area, slot) => (
              <GallerySlot
                key={slot}
                images={images}
                gridArea={area}
                intervalMs={SLOT_INTERVALS[slot % SLOT_INTERVALS.length]}
                isPlaying={isGalleryPlaying}
                startIndex={slot}
                slotNumber={slot}
                onImageClick={setLightboxSrc}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 p-16 bg-[#8d5527] text-white rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 opacity-10 -rotate-12 translate-x-1/4 -translate-y-1/4">
            <i className="fa-solid fa-elephant text-[300px]"></i>
          </div>
          <div className="absolute bottom-0 left-0 opacity-10 rotate-12 -translate-x-1/4 translate-y-1/4">
            <i className="fa-solid fa-tree text-[200px]"></i>
          </div>
          
          <div className="relative z-10">
            <h4 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Ready for a <br />Peaceful Safari?</h4>
            <p className="text-lg font-light opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the unmatched biodiversity and tranquil landscapes of Wilpattu with our expert guides.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/safari-booking" className="bg-[#B08968] text-white px-16 py-6 text-[12px] font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-[#8d5527] transition-all shadow-xl active:scale-95 inline-block">
                Book Your Safari
              </a>
              <a href="/accommodation" className="border border-white/30 text-white px-16 py-6 text-[12px] font-bold tracking-[0.4em] uppercase hover:bg-white/10 transition-all active:scale-95 inline-block">
                View Packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {lightboxSrc && (
      <div
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
        onClick={() => setLightboxSrc(null)}
      >
        <button
          type="button"
          onClick={() => setLightboxSrc(null)}
          className="absolute top-6 right-6 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close full-size image"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <img
          src={lightboxSrc}
          alt="Wilpattu National Park - full size"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
          onClick={(e) => e.stopPropagation()}
          referrerPolicy="no-referrer"
        />
      </div>
    )}
    </>
  );
};

export default Blog;
