
import React from 'react';

const HomeWelcome: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32 lg:py-48 relative overflow-hidden leaf-pattern">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center text-[#064E3B] max-w-5xl relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="w-10 md:w-16 h-[1px] bg-[#064E3B] opacity-10"></div>
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase opacity-40">WELCOME</span>
          <div className="w-10 md:w-16 h-[1px] bg-[#064E3B] opacity-10"></div>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight md:leading-none tracking-tight text-[#064E3B]">Wilpattu Wilderness</h2>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 md:mb-12 tracking-[0.1em] italic text-[#064E3B]/60">Hunuwilagama, Sri Lanka</p>
        
        <div className="flex flex-col items-center">
          <span className="text-emerald-600 text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase mb-6 md:mb-8 px-4">CRAFTED LUXURY IN THE WILDERNESS</span>
          <p className="max-w-3xl mx-auto text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] md:leading-[2.2] text-[#064E3B] font-light mb-12 md:mb-16 opacity-90 px-4 md:px-0">
            At Wilpattu Wilderness, our vision is to merge luxury with the wild, creating an escape where you can immerse yourself in nature's raw beauty. Here, comfort meets adventure, offering a sanctuary to reconnect with the earth and yourself, in the heart of Sri Lanka's untamed wilderness.
          </p>
          
          <div className="flex flex-row items-center justify-center gap-6 md:gap-12 mt-4 md:mt-6 opacity-80">
            <div className="text-center">
              <span className="signature-font text-2xl md:text-3xl">Sugath</span>
              <p className="text-[9px] md:text-[10px] mt-2 font-bold opacity-40">FOUNDER</p>
            </div>
            <div className="h-8 md:h-10 w-[1px] bg-[#064E3B]/20"></div>
            <div className="text-center">
              <span className="signature-font text-2xl md:text-3xl">007</span>
              <p className="text-[9px] md:text-[10px] mt-2 font-bold opacity-40">FOUNDER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWelcome;
