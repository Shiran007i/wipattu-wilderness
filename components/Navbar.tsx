"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppSection } from "../types";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [discoverDropdownOpen, setDiscoverDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "/", label: "HOME" },
   // { id: "/about", label: "ABOUT US", disabled: true },
    {
      id: "/safari",
      label: "DISCOVER",
      isDropdown: true,
      subItems: [
        { id: "/accommodation", label: "ACCOMMODATION" },
        { id: "/food-and-drinks", label: "FOOD AND DRINKS" },
       // { id: "/experiences", label: "EXPERIENCES & EXCURSIONS" },
      ],
    },
    { id: "/tour-planner", label: "TOUR PLANNER" },
    { id: "/blog", label: "BLOG" },
    { id: "/contact-us", label: "CONTACT US" },
  ];

  const isActive = (id: string) => {
    if (id === "/" && pathname === "/") return true;
    if (id !== "/" && pathname.startsWith(id)) return true;
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
            ? "py-1.5 bg-[#cec5a6]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(29,24,18,0.16)] text-[#4b3427] border-b border-[#4b3427]/10"
            : "py-4 bg-transparent text-white"
        }`}
      >
        <div
          className={`container mx-auto px-4 sm:px-6 relative flex items-center justify-between pl-32 lg:pl-40 transition-all duration-500 ${
            isScrolled
              ? "min-h-[44px] sm:min-h-[48px] lg:min-h-[56px]"
              : "min-h-[76px] sm:min-h-[84px] lg:min-h-[100px]"
          }`}
        >
          <Link
            href="/"
            className="absolute left-4 sm:left-6 lg:left-8 top-1 sm:top-1.5 flex items-center gap-3 cursor-pointer shrink-0 z-[101]"
            onClick={handleNavClick}
          >
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full border-2 shadow-2xl overflow-hidden group border-[#bf885e]/30 bg-white transition-all duration-500 transform ${
                isScrolled
                  ? "scale-[0.6] border-[#4b3427]/40"
                  : "scale-100"
              }`}
            >
              <img
                src="/logo.jpeg"
                alt="Wilpattu Wilderness"
                className="w-full h-full object-cover animate-logo-pulse"
              />
            </div>
          </Link>

          <div className="hidden lg:flex gap-6 xl:gap-10 items-center">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() =>
                  item.isDropdown && setDiscoverDropdownOpen(true)
                }
                onMouseLeave={() =>
                  item.isDropdown && setDiscoverDropdownOpen(false)
                }
              >
                {item.isDropdown ? (
                  <button
                    className={`text-[11px] xl:text-[12px] font-bold tracking-[0.2em] transition-all uppercase relative flex items-center gap-2 ${
                      item.subItems?.some((si) => isActive(si.id))
                        ? "text-[#bf885e]"
                        : "text-inherit hover:text-[#8d5527]"
                    }`}
                  >
                    {item.label}
                    <i
                      className={`fa-solid fa-chevron-down text-[8px] transition-transform ${discoverDropdownOpen ? "rotate-180" : ""}`}
                    ></i>
                    <span
                      className={`absolute -bottom-2 left-0 h-[1.5px] transition-all duration-300 ${isScrolled ? "bg-[#4b3427]" : "bg-[#e8d1b4]"} ${
                        item.subItems?.some((si) => isActive(si.id))
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </button>
                ) : (
                  <Link
                    href={item.id}
                    onClick={handleNavClick}
                    className={`text-[11px] xl:text-[12px] font-bold tracking-[0.2em] transition-all uppercase relative flex items-center gap-2 ${
                      isActive(item.id)
                        ? "text-[#bf885e]"
                        : "text-inherit hover:text-[#8d5527]"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-[1.5px] transition-all duration-300 ${isScrolled ? "bg-[#4b3427]" : "bg-[#e8d1b4]"} ${
                        isActive(item.id) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                )}

                {item.isDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-4 bg-[#f6efe7] border border-[#664831]/10 shadow-2xl rounded-lg py-4 min-w-[240px] transition-all duration-300 ${discoverDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"}`}
                  >
                    {item.subItems?.map((sub, sidx) => (
                      <Link
                        key={sidx}
                        href={sub.id}
                        onClick={handleNavClick}
                        className={`block w-full text-left px-6 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-[#efe2d2] transition-colors ${isActive(sub.id) ? "text-[#8d5527]" : "text-[#4b3427]"}`}
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
              href="/contact-us"
              className={`hidden sm:block px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-bold text-[10px] lg:text-xs transition-all uppercase tracking-[0.2em] shadow-xl active:scale-95 whitespace-nowrap ${
                isScrolled
                  ? "bg-[#4b3427] text-[#f6efe7] hover:bg-[#3a2d23]"
                  : "bg-[#bf885e] text-white hover:bg-[#8d5527]"
              }`}
            >
              INQUIRE NOW
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 focus:outline-none transition-colors ${isScrolled ? "text-[#4b3427]" : "text-white"}`}
              aria-label="Toggle Menu"
            >
              <i
                className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"} text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[90] transition-transform duration-500 ease-in-out transform ${
          isScrolled ? "bg-[#cec5a6] text-[#4b3427]" : "bg-[#4b3427] text-white"
        } ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden flex flex-col items-center justify-center p-10 overflow-y-auto`}
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
                          isActive(sub.id) ? "text-[#e8d1b4]" : "text-white"
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
                    isActive(item.id) ? "text-[#e8d1b4]" : "text-white"
                  }`}
                >
                  {item.label}
              </Link>
              )}
            </div>
          ))}

          <Link
            href="/contact-us"
            onClick={handleNavClick}
            className="bg-[#bf885e] text-white px-12 py-5 font-bold text-sm uppercase tracking-[0.3em] mt-6 hover:bg-[#8d5527] transition-all"
          >
            INQUIRE NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
