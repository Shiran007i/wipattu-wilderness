
import React, { useEffect, useRef, useState } from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1575515650222-3811726a2185?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1444464666168-49d633b86747?auto=format&fit=crop&q=80&w=600',
];

const ScrollingGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const requestRef = useRef<number>(0);
  const scrollX = useRef(0);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const animate = () => {
    if (!isPaused && scrollRef.current) {
      scrollX.current += 0.8; // Smooth, slow speed
      if (scrollX.current >= scrollRef.current.scrollWidth / 2) {
        scrollX.current = 0;
      }
      scrollRef.current.style.transform = `translateX(-${scrollX.current}px)`;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current && !isTouchDevice) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-[#FAF7F2] py-20 md:py-32 border-t border-[#064E3B]/10 leaf-pattern ${isTouchDevice ? 'cursor-auto' : 'cursor-none'}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isTouchDevice && setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsPaused(false);
      }}
      onMouseDown={() => setIsPaused(true)}
      onMouseUp={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Interactive Cursor Optimized for Green Theme - Only for Desktop */}
      {!isTouchDevice && (
        <div 
          className={`fixed pointer-events-none z-[160] flex flex-col items-center justify-center transition-all duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            left: `${mousePos.x + (containerRef.current?.getBoundingClientRect().left || 0)}px`, 
            top: `${mousePos.y + (containerRef.current?.getBoundingClientRect().top || 0)}px`,
            transform: `translate(-50%, -50%)`
          }}
        >
          <div className={`flex flex-col items-center justify-center transition-transform duration-300 ${isPaused ? 'scale-90' : 'scale-100'}`}>
            <div className="text-emerald-800 text-[10px] font-bold tracking-[0.6em] uppercase mb-2 drop-shadow-sm">
              {isPaused ? 'EXPLORE' : 'SWIPE WILD'}
            </div>
            <div className="w-12 h-[1px] bg-emerald-800/20"></div>
            <div className="mt-3 flex gap-2">
              <i className={`fa-solid fa-chevron-left text-[8px] text-emerald-600/40 ${!isPaused ? 'animate-pulse' : ''}`}></i>
              <div className={`w-1 h-1 rounded-full bg-emerald-500 ${isPaused ? 'animate-ping' : ''}`}></div>
              <i className={`fa-solid fa-chevron-right text-[8px] text-emerald-600/40 ${!isPaused ? 'animate-pulse' : ''}`}></i>
            </div>
          </div>
          <div className="absolute inset-0 w-48 h-48 bg-emerald-400/10 blur-[60px] rounded-full -z-10 animate-pulse"></div>
        </div>
      )}

      <div className="flex" ref={scrollRef}>
        {[...IMAGES, ...IMAGES].map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-[260px] md:w-[480px] px-3 md:px-6">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(6,78,59,0.12)] group relative border border-emerald-900/5 bg-white transition-all duration-700 hover:shadow-emerald-900/20">
              
              {/* Image with Green Duotone Effect */}
              <img 
                src={src} 
                alt={`Wildlife ${idx}`} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                style={{
                    filter: 'contrast(1.1) brightness(0.9) saturate(0.8)'
                }}
              />

              {/* Green Overlay (Tint) */}
              <div className="absolute inset-0 bg-emerald-900/20 md:bg-emerald-900/30 mix-blend-color group-hover:bg-transparent transition-colors duration-1000"></div>
              
              {/* Bottom Gradient for Depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-950/40 opacity-60 group-hover:opacity-20 transition-opacity duration-700"></div>

              {/* Hover ID Badge */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-4 md:group-hover:translate-y-0">
                <span className="text-white font-serif italic text-2xl md:text-4xl opacity-40">#{String(idx % IMAGES.length + 1).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingGallery;
