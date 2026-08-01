"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 text-[#4b3427] relative overflow-hidden bg-[#f6efe7] flex flex-col">
      {/* Footer Image Background Strip - Pinned to bottom */}
      <div className="absolute bottom-0 left-0 w-full h-auto pointer-events-none select-none z-0">
        <img
          src="/footer.png"
          className="w-full h-full object-cover object-bottom"
          alt="Footer Background"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10 flex-grow pb-24 sm:pb-32 lg:pb-40">
        {/* Top Section: Experience & Weather */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16 lg:mb-24 items-start">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight text-black tracking-tighter">
              Escape into the <br />
              <span className="italic text-[#bf885e]">Untamed Wild.</span>
            </h2>
            <p className="text-[15px] leading-[2] font-light text-black/70 max-w-md">
              In 2021, Wilpattu Wilderness began as a dream to offer explorers a
              piece of paradise that remains untouched, unspoiled, and deeply
              rooted in the heart of nature.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white/40 backdrop-blur-sm p-8 border border-[#bf885e]/20 shadow-sm h-full">
              <h4 className="text-[10px] font-bold text-black uppercase tracking-[0.4em] mb-8">
                Wilds Weather
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#efe2d2] flex items-center justify-center text-[#8d5527] text-xl">
                    <i className="fa-solid fa-sun"></i>
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-black">29°C</p>
                    <p className="text-[9px] font-bold text-[#664831]/60 uppercase tracking-widest">
                      Hunuwilagama
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white/40 backdrop-blur-sm p-8 border border-[#bf885e]-900/5 shadow-sm h-full">
              <h4 className="text-[10px] font-bold text-black uppercase tracking-[0.4em] mb-8">
                Stay in the Loop
              </h4>
              <div className="space-y-6">
                <p className="text-[12px] text-black/60 font-medium">
                  Join our mailing list for stories from the wild.
                </p>
                <div className="flex group border-b border-black/10 focus-within:border-[#bf885e] transition-colors pb-2">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="bg-transparent w-full py-2 text-sm outline-none text-black placeholder:text-black/30 font-light"
                  />
                  <button className="text-[#bf885e] text-[10px] font-bold uppercase tracking-widest hover:text-[#4b3427] transition-colors px-4">
                    JOIN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Links & Contact - Shifted More to the Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 pt-12 sm:pt-16 lg:pt-24 border-t border-black/5 pb-12 sm:pb-16 lg:pb-20">
          {/* Column 1: Navigation Links Group - Pushed slightly right */}
          <div className="md:col-span-5 lg:col-span-4 lg:col-start-2 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold text-[#664831] uppercase tracking-[0.5em] flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf885e]"></span>
                Discover
              </h4>
              <ul className="space-y-5 text-[13px] font-light">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#bf885e] hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left"
                  >
                    <span className="w-0 h-px bg-[#bf885e] group-hover:w-4 transition-all duration-500"></span>
                    About Our Haven
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accommodation"
                    className="hover:text-[#bf885e] hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left"
                  >
                    <span className="w-0 h-px bg-[#bf885e] group-hover:w-4 transition-all duration-500"></span>
                    Luxury Tents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experiences"
                    className="hover:text-[#bf885e] hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left"
                  >
                    <span className="w-0 h-px bg-[#bf885e] group-hover:w-4 transition-all duration-500"></span>
                    Wildlife Safaris
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-bold text-[#664831] uppercase tracking-[0.5em] flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf885e]"></span>
                Information
              </h4>
              <ul className="space-y-5 text-[13px] font-light text-left">
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[#bf885e] hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left"
                  >
                    <span className="w-0 h-px bg-[#bf885e] group-hover:w-4 transition-all duration-500"></span>
                    The Wild Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="hover:text-[#bf885e] hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left"
                  >
                    <span className="w-0 h-px bg-[#bf885e] group-hover:w-4 transition-all duration-500"></span>
                    Contact & Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-[#bf885e] hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left"
                  >
                    <span className="w-0 h-px bg-[#bf885e] group-hover:w-4 transition-all duration-500"></span>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: The Sanctuary Contact Block - Moved to the far right */}
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
            <div className="bg-[#efe2d2]/70 p-6 sm:p-8 md:p-10 lg:p-12 rounded-sm border border-[#664831]/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#bf885e]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h4 className="text-[10px] font-bold text-[#664831] uppercase tracking-[0.5em]">
                    The Sanctuary
                  </h4>
                  <div className="space-y-6 text-[14px] font-light text-black/80 leading-relaxed text-left">
                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#bf885e]-900/5">
                        <i className="fa-solid fa-location-dot text-[#bf885e]"></i>
                      </div>
                      <p>
                        4th Miles Post, Hunuwilagama, <br />
                        Wilpattu, 50220 Sri Lanka
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#bf885e]-900/5">
                        <i className="fa-solid fa-phone text-[#bf885e] text-sm"></i>
                      </div>
                      <p className="font-medium">+94 770 083 313</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#bf885e]-900/5">
                        <i className="fa-solid fa-envelope text-[#bf885e] text-sm"></i>
                      </div>
                      <p className="hover:text-[#bf885e] transition-colors cursor-pointer">
                        info@wilpattuwilderness.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="space-y-6 text-right md:text-left">
                    <h4 className="text-[10px] font-bold text-[#664831] uppercase tracking-[0.5em]">
                      Follow Our Story
                    </h4>
                    <div className="flex flex-wrap gap-3 justify-end md:justify-start">
                      {[
                        { icon: "fa-facebook-f", label: "FB" },
                        { icon: "fa-instagram", label: "IG" },
                        { icon: "fa-twitter", label: "TW" },
                        { icon: "fa-vimeo-v", label: "VM" },
                      ].map((social, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="w-12 h-12 bg-white border border-[#664831]/10 rounded-sm flex flex-col items-center justify-center gap-1 hover:bg-[#bf885e] hover:border-[#bf885e] hover:text-white transition-all duration-500 shadow-sm group/icon"
                        >
                          <i className={`fa-brands ${social.icon} text-sm`}></i>
                          <span className="text-[7px] font-bold opacity-0 group-hover/icon:opacity-100 transition-opacity">
                            {social.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-black/5 mt-8">
                    <p className="text-[11px] italic text-[#664831]/70 font-serif text-right md:text-left">
                      "A journey of a thousand miles begins with a single step
                      into the wild."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relocated Bottom Bar with Solid Background at the very bottom */}
      <div className="p-6 sm:p-8 md:p-10 relative z-20 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#bf885e]">
              &copy; 2024 Wilpattu Wilderness. Crafted for Adventurers.
            </p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-[#bf885e]">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
