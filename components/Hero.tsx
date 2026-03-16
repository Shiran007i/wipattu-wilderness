
import React from 'react';
import { AppSection } from '../types';

interface HeroProps {
  onStart: (section: AppSection) => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&q=80&w=2400" className="w-full h-full object-cover" alt="Safari" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#022C22]"></div>
        <div className="absolute inset-0 bg-[#064E3B]/20"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center text-white animate-fade-in-down max-w-7xl">
        <div className="flex items-center justify-center gap-6 mb-10 opacity-80">
          <div className="w-12 md:w-20 h-[1.5px] bg-emerald-400"></div>
          <h2 className="text-white font-bold tracking-[0.5em] text-[10px] md:text-[12px] uppercase">TIME TO RECONNECT</h2>
          <div className="w-12 md:w-20 h-[1.5px] bg-emerald-400"></div>
        </div>
        <h1 className="text-4xl md:text-7xl font-serif font-normal mb-8 leading-[1.1] drop-shadow-2xl">Crafted Luxury In <br className="hidden lg:block" /> The Wilderness</h1>
        <div className="w-24 md:w-32 h-[1px] bg-emerald-50 mx-auto mb-10"></div>
        <button 
          onClick={() => onStart(AppSection.ACCOMMODATION)}
          className="bg-emerald-600 text-white px-10 py-4 font-bold text-xs hover:bg-emerald-500 transition-all uppercase tracking-[0.3em] shadow-xl active:scale-95"
        >
          EXPLORE THE HAVEN
        </button>
      </div>
    </section>
  );
};

// Default export for Hero
export default Hero;
