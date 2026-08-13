import React from "react";

const HomeWelcome: React.FC = () => {
  return (
    <section className="bg-[#f6efe7] py-16 sm:py-20 md:py-32 lg:py-48 relative overflow-hidden leaf-pattern">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center text-[#4b3427] max-w-5xl relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="w-10 md:w-16 h-[1px] bg-[#8d5527] opacity-20"></div>
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-[#8d5527]/70">
            WELCOME
          </span>
          <div className="w-10 md:w-16 h-[1px] bg-[#8d5527] opacity-20"></div>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight md:leading-none tracking-tight text-[#8d5527]">
          Wilpattu Wilderness
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 md:mb-12 tracking-widest italic text-[#664831]/80">
          Hunuwilagama, Sri Lanka
        </p>

        <div className="flex flex-col items-center">
          <span className="text-[#bf885e] text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase mb-6 md:mb-8 px-4">
          WILD AT HEART, REFINED BY NATURE  
          </span>
          <p className="max-w-3xl mx-auto text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] md:leading-[2.2] text-[#4b3427] font-light mb-12 md:mb-16 opacity-95 px-4 md:px-0">
            Experience luxury wilderness camping in Wilpattu, Sri Lanka. Enjoy expert jeep safaris, serene natural villus, local gourmet dining, and untamed nature. Book your safari today!
          </p>

          {/* 
          <div className="flex flex-row items-center justify-center gap-6 md:gap-12 mt-4 md:mt-6 opacity-80">
            <div className="text-center">
              <span className="signature-font text-2xl md:text-3xl">
                Sugath
              </span>
              <p className="text-[9px] md:text-[10px] mt-2 font-bold opacity-40">
                FOUNDER
              </p>
            </div>
            <div className="h-8 md:h-10 w-px bg-[#664831]/20"></div>
            <div className="text-center">
              <span className="signature-font text-2xl md:text-3xl">007</span>
              <p className="text-[9px] md:text-[10px] mt-2 font-bold opacity-40">
                FOUNDER
              </p>
            </div>
          </div>
       */}
       </div>  
      </div>
    </section>
  );
};

export default HomeWelcome;
