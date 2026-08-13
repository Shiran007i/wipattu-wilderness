import React from "react";

const SafariHighlight: React.FC = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/safari/Safari22.jpeg"
          alt="Wilpattu Safari Jeep"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#1a1310]/85 via-[#1a1310]/75 to-[#1a1310]/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8 opacity-90">
            <div className="w-8 md:w-12 h-px bg-[#bf885e]"></div>
            <p className="text-[#bf885e] font-bold tracking-[0.4em] text-[9px] md:text-[11px] uppercase">
              Our Signature Experience
            </p>
            <div className="w-8 md:w-12 h-px bg-[#bf885e]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif !text-white mb-4 md:mb-6 leading-tight">
            Guided by Expertise.
            <br />
            Driven by Passion.
          </h2>
          <p className="text-white/70 text-[13px] md:text-[15px] leading-[1.9] font-light px-2 md:px-0">
            A great safari isn&rsquo;t just about entering the park — it&rsquo;s about
            who takes you there. Your journey is led by a master duo: an
            experienced local track driver who knows every trail, waterhole,
            and hidden path, and a knowledgeable resident naturalist dedicated
            to decoding the secrets of the wild. Together, they transform a
            simple game drive into an unforgettable wildlife adventure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14 md:mb-20">
          {[
            { icon: "fa-user-tie", label: "Master Track Driver" },
            { icon: "fa-binoculars", label: "Resident Naturalist" },
            { icon: "fa-car-side", label: "Private Jeep, Up to 6" },
            { icon: "fa-paw", label: "Leopard & Bear Tracking" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-3 md:gap-4 p-5 md:p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#bf885e]/20 flex items-center justify-center">
                <i className={`fa-solid ${item.icon} text-[#bf885e] text-lg md:text-xl`}></i>
              </div>
              <p className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/safari-booking"
            className="inline-flex items-center gap-3 bg-[#bf885e] text-white px-14 py-5 md:py-6 font-bold text-[11px] md:text-xs uppercase tracking-[0.35em] hover:bg-white hover:text-[#1a1310] transition-all shadow-2xl active:scale-95"
          >
            Book Your Safari
            <i className="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SafariHighlight;
