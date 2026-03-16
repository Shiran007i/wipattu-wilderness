"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppSection } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [discoverDropdownOpen, setDiscoverDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: '/', label: 'HOME' },
    { id: '/about', label: 'ABOUT US' },
    { 
      id: '/safari', 
      label: 'DISCOVER', 
      isDropdown: true,
      subItems: [
        { id: '/accommodation', label: 'ACCOMMODATION' },
        { id: '/food-and-drinks', label: 'FOOD AND DRINKS' },
        { id: '/experiences', label: 'EXPERIENCES & EXCURSIONS' },
      ]
    },
    { id: '/tour-planner', label: 'TOUR PLANNER' },
    { id: '/blog', label: 'BLOG' },
    { id: '/contact-us', label: 'CONTACT US' },
  ];

  const isActive = (id: string) => {
    if (id === '/' && pathname === '/') return true;
    if (id !== '/' && pathname.startsWith(id)) return true;
    return false;
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setDiscoverDropdownOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-[#064E3B]/95 backdrop-blur-md shadow-2xl py-2' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-3 cursor-pointer shrink-0" 
            onClick={handleNavClick}
          >
            <div className={`transition-all duration-500 rounded-full border-2 border-emerald-500/20 shadow-lg overflow-hidden group ${isScrolled ? 'w-12 h-12 lg:w-16 lg:h-16' : 'w-20 h-20 lg:w-24 lg:h-24'}`}>
              <img src="/logo.jpeg" alt="Wilpattu Wilderness" className="w-full h-full object-cover animate-logo-pulse" />
            </div>
          </Link>
          
          <div className="hidden lg:flex gap-6 xl:gap-10 items-center">
            {navItems.map((item, idx) => (
              <div 
                key={idx} 
                className="relative group"
                onMouseEnter={() => item.isDropdown && setDiscoverDropdownOpen(true)}
                onMouseLeave={() => item.isDropdown && setDiscoverDropdownOpen(false)}
              >
                {item.isDropdown ? (
                  <button
                    className={`text-[11px] xl:text-[12px] font-bold tracking-[0.2em] transition-all uppercase relative flex items-center gap-2 ${
                      item.subItems?.some(si => isActive(si.id)) ? 'text-emerald-400' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <i className={`fa-solid fa-chevron-down text-[8px] transition-transform ${discoverDropdownOpen ? 'rotate-180' : ''}`}></i>
                    <span className={`absolute -bottom-2 left-0 h-[1.5px] transition-all duration-300 bg-emerald-400 ${
                      item.subItems?.some(si => isActive(si.id)) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                ) : (
                  <Link
                    href={item.id}
                    onClick={handleNavClick}
                    className={`text-[11px] xl:text-[12px] font-bold tracking-[0.2em] transition-all uppercase relative flex items-center gap-2 ${
                      isActive(item.id) ? 'text-emerald-400' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-2 left-0 h-[1.5px] transition-all duration-300 bg-emerald-400 ${
                      isActive(item.id) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )}

                {item.isDropdown && (
                  <div className={`absolute top-full left-0 mt-4 bg-[#064E3B] border border-white/10 shadow-2xl rounded-lg py-4 min-w-[240px] transition-all duration-300 ${discoverDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}>
                    {item.subItems?.map((sub, sidx) => (
                      <Link
                        key={sidx}
                        href={sub.id}
                        onClick={handleNavClick}
                        className={`block w-full text-left px-6 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-emerald-800 transition-colors ${isActive(sub.id) ? 'text-emerald-400' : 'text-white/80'}`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/booking"
              className="hidden sm:block bg-emerald-600 text-white px-6 lg:px-10 py-3 lg:py-4 font-bold text-[10px] lg:text-xs hover:bg-emerald-500 transition-all uppercase tracking-[0.2em] shadow-xl active:scale-95 whitespace-nowrap"
            >
              BOOK NOW
            </Link>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-[#064E3B] z-[90] transition-transform duration-500 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col items-center justify-center p-10 overflow-y-auto`}
      >
        <div className="flex flex-col items-center gap-6 py-20">
          {navItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              {item.isDropdown ? (
                <div className="flex flex-col items-center gap-4">
                  <span className="text-lg font-bold tracking-[0.3em] uppercase text-white/40">
                    {item.label}
                  </span>
                  <div className="flex flex-col items-center gap-3 opacity-80">
                    {item.subItems?.map((sub, sidx) => (
                      <Link
                        key={sidx}
                        href={sub.id}
                        onClick={handleNavClick}
                        className={`text-sm font-medium tracking-[0.2em] uppercase transition-all ${
                          isActive(sub.id) ? 'text-emerald-400' : 'text-white'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.id}
                  onClick={handleNavClick}
                  className={`text-lg font-bold tracking-[0.3em] uppercase transition-all ${
                    isActive(item.id) ? 'text-emerald-400' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link 
            href="/booking"
            onClick={handleNavClick}
            className="bg-emerald-600 text-white px-12 py-5 font-bold text-sm uppercase tracking-[0.3em] mt-6"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
