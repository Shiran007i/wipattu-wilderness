import React, { useState } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200",
];

const FocusGallery: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(1);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  const handleSwap = (idx: number) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden leaf-pattern">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 min-h-[640px] md:h-[600px] lg:h-[700px]">
          {IMAGES.map((src, idx) => {
            const isActive = idx === activeIdx;

            return (
              <div
                key={idx}
                onClick={() => handleSwap(idx)}
                onMouseEnter={() => !isActive && setHoverIdx(idx)}
                onMouseLeave={() => setHoverIdx(null)}
                className={`relative transition-all duration-1000 ease-in-out cursor-pointer overflow-hidden shadow-2xl rounded-sm
                  ${
                    isActive
                      ? "w-full h-[220px] sm:h-[280px] md:w-[50%] md:h-full z-20 shadow-emerald-900/20"
                      : "w-full h-[140px] sm:h-[180px] md:w-[25%] md:h-[85%] z-10 opacity-80 md:opacity-100"
                  }
                `}
              >
                {/* Image Layer */}
                <img
                  src={src}
                  alt={`Safari Focus ${idx}`}
                  className={`w-full h-full object-cover transition-all duration-1000 
                    ${isActive ? "grayscale-0 scale-100" : "grayscale group-hover:grayscale-0 scale-110"}
                  `}
                />

                {/* Overlay for inactive */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/30 md:bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                )}

                {/* Hover Arrow Animation - Only visible on md+ for desktop interaction */}
                <div
                  className={`hidden md:flex absolute inset-0 items-center justify-center pointer-events-none transition-opacity duration-500 ${!isActive && hoverIdx === idx ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-white/50 flex items-center justify-center animate-pulse bg-white/10 backdrop-blur-sm">
                    <i
                      className={`fa-solid ${idx < activeIdx ? "fa-arrow-right" : "fa-arrow-left"} text-white text-xl lg:text-2xl`}
                    ></i>
                  </div>
                </div>

                {/* Mobile Tap Indicator */}
                {!isActive && (
                  <div className="md:hidden absolute top-4 right-4 text-white/60">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-xs"></i>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusGallery;
