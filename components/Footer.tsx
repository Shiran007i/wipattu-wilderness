"use client";

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 text-[#064E3B] relative overflow-hidden bg-[#FAF7F2] flex flex-col">
      {/* Footer Image Background Strip - Pinned to bottom */}
      <div className="absolute bottom-0 left-0 w-full h-auto pointer-events-none select-none z-0">
        <img 
          src="/footer.png" 
          className="w-full h-full object-cover object-bottom" 
          alt="Footer Background" 
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex-grow pb-40">
        {/* Top Section: Experience & Weather */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif leading-tight text-black tracking-tighter">
              Escape into the <br/>
              <span className="italic text-emerald-600">Untamed Wild.</span>
            </h2>
            <p className="text-[15px] leading-[2] font-light text-black/70 max-w-md">
              In 2021, Wilpattu Wilderness began as a dream to offer explorers a piece of paradise that remains untouched, unspoiled, and deeply rooted in the heart of nature.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white/40 backdrop-blur-sm p-8 border border-emerald-900/5 shadow-sm h-full">
              <h4 className="text-[10px] font-bold text-black uppercase tracking-[0.4em] mb-8">Wilds Weather</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl">
                    <i className="fa-solid fa-sun"></i>
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-black">29°C</p>
                    <p className="text-[9px] font-bold text-emerald-800/40 uppercase tracking-widest">Hunuwilagama</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white/40 backdrop-blur-sm p-8 border border-emerald-900/5 shadow-sm h-full">
              <h4 className="text-[10px] font-bold text-black uppercase tracking-[0.4em] mb-8">Stay in the Loop</h4>
              <div className="space-y-6">
                <p className="text-[12px] text-black/60 font-medium">Join our mailing list for stories from the wild.</p>
                <div className="flex group border-b border-black/10 focus-within:border-emerald-600 transition-colors pb-2">
                  <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="bg-transparent w-full py-2 text-sm outline-none text-black placeholder:text-black/30 font-light"
                  />
                  <button className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest hover:text-black transition-colors px-4">
                    JOIN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Links & Contact - Shifted More to the Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pt-24 border-t border-black/5 pb-20">
          
          {/* Column 1: Navigation Links Group - Pushed slightly right */}
          <div className="md:col-span-5 lg:col-span-4 lg:col-start-2 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.5em] flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Discover
              </h4>
              <ul className="space-y-5 text-[13px] font-light">
                <li><Link href="/about" className="hover:text-emerald-600 hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left"><span className="w-0 h-[1px] bg-emerald-600 group-hover:w-4 transition-all duration-500"></span>About Our Haven</Link></li>
                <li><Link href="/accommodation" className="hover:text-emerald-600 hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left"><span className="w-0 h-[1px] bg-emerald-600 group-hover:w-4 transition-all duration-500"></span>Luxury Tents</Link></li>
                <li><Link href="/experiences" className="hover:text-emerald-600 hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left"><span className="w-0 h-[1px] bg-emerald-600 group-hover:w-4 transition-all duration-500"></span>Wildlife Safaris</Link></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.5em] flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Information
              </h4>
              <ul className="space-y-5 text-[13px] font-light text-left">
                <li><Link href="/blog" className="hover:text-emerald-600 hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left"><span className="w-0 h-[1px] bg-emerald-600 group-hover:w-4 transition-all duration-500"></span>The Wild Blog</Link></li>
                <li><Link href="/contact-us" className="hover:text-emerald-600 hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left"><span className="w-0 h-[1px] bg-emerald-600 group-hover:w-4 transition-all duration-500"></span>Contact & Support</Link></li>
                <li><Link href="/terms" className="hover:text-emerald-600 hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left"><span className="w-0 h-[1px] bg-emerald-600 group-hover:w-4 transition-all duration-500"></span>Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 2: The Sanctuary Contact Block - Moved to the far right */}
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
            <div className="bg-emerald-950/5 p-10 md:p-12 rounded-sm border border-emerald-900/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h4 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.5em]">The Sanctuary</h4>
                  <div className="space-y-6 text-[14px] font-light text-black/80 leading-relaxed text-left">
                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-emerald-900/5">
                        <i className="fa-solid fa-location-dot text-emerald-600"></i>
                      </div>
                      <p>4th Miles Post, Hunuwilagama, <br/>Wilpattu, 50220 Sri Lanka</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-emerald-900/5">
                        <i className="fa-solid fa-phone text-emerald-600 text-sm"></i>
                      </div>
                      <p className="font-medium">+94 770 083 313</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-emerald-900/5">
                        <i className="fa-solid fa-envelope text-emerald-600 text-sm"></i>
                      </div>
                      <p className="hover:text-emerald-600 transition-colors cursor-pointer">info@wilpattuwilderness.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="space-y-6 text-right md:text-left">
                    <h4 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.5em]">Follow Our Story</h4>
                    <div className="flex flex-wrap gap-3 justify-end md:justify-start">
                      {[
                        { icon: 'fa-facebook-f', label: 'FB' },
                        { icon: 'fa-instagram', label: 'IG' },
                        { icon: 'fa-twitter', label: 'TW' },
                        { icon: 'fa-vimeo-v', label: 'VM' }
                      ].map((social, idx) => (
                        <a 
                          key={idx} 
                          href="#" 
                          className="w-12 h-12 bg-white border border-emerald-900/5 rounded-sm flex flex-col items-center justify-center gap-1 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-500 shadow-sm group/icon"
                        >
                          <i className={`fa-brands ${social.icon} text-sm`}></i>
                          <span className="text-[7px] font-bold opacity-0 group-hover/icon:opacity-100 transition-opacity">{social.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-black/5 mt-8">
                    <p className="text-[11px] italic text-emerald-800/60 font-serif text-right md:text-left">"A journey of a thousand miles begins with a single step into the wild."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relocated Bottom Bar with Solid Background at the very bottom */}
      <div className=" p-8 md:p-10 relative z-20 mt-auto">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400">
              &copy; 2024 Wilpattu Wilderness. Crafted for Adventurers.
            </p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
