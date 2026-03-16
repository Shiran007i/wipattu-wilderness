
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-white py-24 md:py-36 border-b border-[#064E3B]/5 relative overflow-hidden leaf-pattern group">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-50/30 to-transparent"></div>
      
      {/* Navigation Buttons - Appear on Hover */}
      <button 
        onClick={prevTestimonial}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-emerald-100 flex items-center justify-center text-[#064E3B] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#064E3B] hover:text-white shadow-lg"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <button 
        onClick={nextTestimonial}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-emerald-100 flex items-center justify-center text-[#064E3B] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#064E3B] hover:text-white shadow-lg"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="relative">
          {/* Large Decorative Quote Mark */}
          <div className="absolute -top-12 -left-4 md:-left-12 text-emerald-100 text-8xl md:text-[12rem] font-serif select-none pointer-events-none opacity-50">
            &ldquo;
          </div>

          <div className="bg-white/40 backdrop-blur-sm border border-emerald-100/50 p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] shadow-[0_30px_100px_-20px_rgba(6,78,59,0.08)] relative overflow-hidden group/card hover:shadow-[0_40px_120px_-20px_rgba(6,78,59,0.12)] transition-all duration-700 min-h-[400px] flex flex-col justify-center">
            {/* Inner Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-50 rounded-full blur-3xl group-hover/card:bg-emerald-100/50 transition-colors duration-700"></div>
            
            <div className="relative z-10 animate-fade-in">
              <p className="text-xl sm:text-2xl md:text-3xl font-serif text-[#064E3B] italic leading-relaxed mb-12 text-center md:text-left transition-all duration-500">
                "{current.text}"
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-emerald-100/80 pt-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white text-2xl font-serif shadow-lg">
                    {current.initial}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base md:text-lg font-black tracking-widest text-[#064E3B] uppercase">{current.name}</span>
                    <div className="flex gap-1 text-xs text-emerald-500 mt-1">
                      {[...Array(current.stars)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  {/* Verified on Badges */}
                  <div className="flex flex-col items-center md:items-end gap-1">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#064E3B]/40 uppercase mb-2">Verified on {current.source}</span>
                    <div className="flex items-center gap-6">
                      <a 
                        href={process.env.NEXT_PUBLIC_TRIPADVISOR_URL || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`transition-all hover:scale-110 ${current.source === 'Tripadvisor' ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
                        title="View on TripAdvisor"
                      >
                        {/* Custom TripAdvisor SVG for maximum reliability */}
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#34E0A1]">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-3.452 0-6.25-2.798-6.25-6.25s2.798-6.25 6.25-6.25 6.25 2.798 6.25 6.25-2.798 6.25-6.25 6.25zm.022-9.354c-1.613 0-2.921 1.308-2.921 2.921s1.308 2.921 2.921 2.921c1.613 0 2.921-1.308 2.921-2.921s-1.308-2.921-2.921-2.921z"/>
                        </svg>
                      </a>
                      <a 
                        href={process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`transition-all hover:scale-110 ${current.source === 'Google' ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
                        title="View Google Reviews"
                      >
                        <i className="fa-brands fa-google text-2xl text-[#4285F4]"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Decorative Quote Mark - Bottom Right */}
          <div className="absolute -bottom-24 -right-4 md:-right-8 text-emerald-100 text-8xl md:text-[12rem] font-serif select-none pointer-events-none opacity-50 rotate-180">
            &ldquo;
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-emerald-600' : 'bg-emerald-200 hover:bg-emerald-300'}`}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
