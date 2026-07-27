
import React, { useState, useEffect, useRef } from 'react';

interface InfoPoint {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  extra: string;
}

interface DraggableCardProps {
  point: InfoPoint;
  idx: number;
  onMinimize: (id: string) => void;
  isMinimized: boolean;
  isFocused: boolean;
  onFocus: (id: string) => void;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ point, idx, onMinimize, isMinimized, isFocused, onFocus }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMinimized || isFocused || 'ontouchstart' in window) return;
    setIsDragging(true);
    startPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const newX = e.clientX - startPos.current.x;
      const newY = e.clientY - startPos.current.y;
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const genieStyle: React.CSSProperties = isMinimized ? {
    transform: `translate(-400px, ${idx * 30}px) scale(0) rotate(-10deg)`,
    opacity: 0,
    pointerEvents: 'none',
    filter: 'blur(20px)',
    position: 'absolute',
    width: '100%'
  } : {
    transform: `translate(${position.x}px, ${position.y}px) scale(1) rotate(0deg)`,
    opacity: 1,
    position: 'relative',
    gridColumn: isFocused ? 'span 2 / span 2' : 'auto'
  };

  return (
    <div 
      ref={cardRef}
      onMouseDown={handleMouseDown}
      onClick={() => !isMinimized && onFocus(point.id)}
      className={`group overflow-hidden backdrop-blur-3xl border select-none transition-all duration-700
        ${isFocused ? 'bg-[#D1FAE5] border-emerald-500/50 p-6 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-[0_0_80px_rgba(16,185,129,0.2)] z-30 cursor-default' : 'bg-white/[0.03] border-white/10 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] z-10 cursor-pointer'}
        ${isDragging ? 'cursor-grabbing scale-[1.05] shadow-[0_60px_100px_-20px_rgba(16,185,129,0.4)] z-50 transition-none' : 'hover:bg-[#8d5527]/[0.08] hover:border-emerald-500/40 hover:scale-[1.02]'} 
        ${!isDragging ? 'cubic-bezier(0.6, -0.28, 0.735, 0.045)' : ''}
        ${idx % 2 !== 0 && !isFocused && !isMinimized ? 'md:mt-16' : ''}
        ${isMinimized ? 'invisible h-0 overflow-hidden' : 'visible min-h-[350px] md:min-h-[400px]'}`}
      style={genieStyle}
    >
      {/* MINUS BUTTON (DOCK) */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col items-end gap-2 z-20 pointer-events-auto">
        <button 
          onClick={(e) => { e.stopPropagation(); onMinimize(point.id); }}
          className={`w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all shadow-lg backdrop-blur-md ${isFocused ? 'bg-[#8d5527]/10 border-[#8d5527]/20 text-[#8d5527] hover:bg-red-500/80 hover:text-white' : 'bg-white/5 border-white/10 text-white/40 hover:bg-red-500/40 hover:text-white'}`}
          title="Minimize to Rail"
        >
          <i className="fa-solid fa-minus text-[12px] md:text-[14px] animate-blink"></i>
        </button>
        <span className={`text-[6px] md:text-[7px] font-bold opacity-0 group-hover:opacity-100 tracking-[0.3em] uppercase transition-opacity whitespace-nowrap select-none ${isFocused ? 'text-[#8d5527]/40 group-hover:text-[#bf885e]' : 'text-[#bf885e]'}`}>
          Click to Dock
        </span>
      </div>

      <div className={`flex flex-col items-center justify-center w-full h-full relative z-10 pointer-events-none transition-all duration-700 ${isFocused ? 'scale-[1.02]' : 'scale-100'}`}>
        <div className={`flex items-center justify-center transition-all duration-500 rounded-xl md:rounded-2xl mb-4 md:mb-6 group-hover:bg-[#8d5527] group-hover:text-white shadow-xl group-hover:shadow-emerald-500/40 ${isFocused ? 'w-16 h-16 md:w-20 md:h-20 text-xl md:text-2xl bg-[#8d5527] text-white' : 'w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#efe2d2]0/10 text-[#bf885e]'}`}>
          <i className={`fa-solid ${point.icon} ${!isFocused ? 'animate-pulse' : ''}`}></i>
        </div>
        
        <span className={`absolute -right-4 -bottom-4 font-serif font-bold transition-all duration-1000 select-none pointer-events-none transform group-hover:scale-110 ${isFocused ? 'text-[#8d5527]/[0.05] text-[150px] md:text-[250px]' : 'text-white/[0.01] text-[100px] md:text-[150px]'}`}>
          {point.id}
        </span>

        {/* Subtitle */}
        <p className={`font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase mb-1 md:mb-2 transition-colors ${isFocused ? 'text-[#664831]/80 group-hover:text-emerald-500 text-[8px] md:text-[10px]' : 'text-[#bf885e]/40 group-hover:text-[#bf885e] text-[7px] md:text-[8px]'}`}>
          {point.subtitle}
        </p>

        {/* Title */}
        <h3 className={`font-serif mb-2 md:mb-4 transition-colors leading-tight text-center ${isFocused ? 'text-[#8d5527] group-hover:text-[#bf885e] text-3xl md:text-5xl' : 'text-white group-hover:text-emerald-300 text-xl md:text-2xl'}`}>
          {point.title}
        </h3>
        
        {/* Description */}
        <p className={`leading-[1.6] md:leading-[2] font-light mb-4 md:mb-6 transition-all duration-500 text-center max-w-xl ${isFocused ? 'text-[#8d5527]/70 group-hover:text-emerald-700 text-sm md:text-lg italic' : 'text-white/60 group-hover:text-white/90 text-[12px] md:text-[13px]'}`}>
          {point.description}
        </p>
        
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#efe2d2]0 shadow-[0_0_15px_rgba(16,185,129,1)] animate-ping-slow"></div>
          <span className={`font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase transition-colors ${isFocused ? 'text-[#8d5527]/80 group-hover:text-[#bf885e] text-[8px] md:text-[10px]' : 'text-white/80 group-hover:text-[#bf885e] text-[8px] md:text-[9px]'}`}>
            {point.extra}
          </span>
        </div>

        {isFocused && (
          <button 
            onClick={(e) => { e.stopPropagation(); onMinimize(point.id); }}
            className="mt-8 md:mt-10 px-6 py-3 md:px-8 md:py-4 bg-[#8d5527] text-white rounded-xl font-bold text-[8px] md:text-[9px] tracking-[0.3em] uppercase hover:bg-[#bf885e] hover:scale-105 transition-all shadow-2xl pointer-events-auto active:scale-95"
          >
            EXIT FOCUS MODE
          </button>
        )}
      </div>
      
      {!isFocused && <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/[0.02] to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>}
    </div>
  );
};

const ThingsToKnow: React.FC = () => {
  const [minimizedIds, setMinimizedIds] = useState<Set<string>>(new Set());
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  const infoPoints: InfoPoint[] = [
    {
      id: '01',
      icon: 'fa-tent',
      title: 'Camp Sanctuary',
      subtitle: 'Luxury Glamping Dimensions',
      description: 'Our tents are masterfully designed spaces (32x45m) that offer a seamless transition between luxury and wild. Each dwelling features hand-picked mahogany furnishings and canvas walls that breathe with the forest.',
      extra: 'Max: 2 Adults + 1 Child'
    },
    {
      id: '02',
      icon: 'fa-binoculars',
      title: 'Wild Rhythms',
      subtitle: 'Game Drive Schedules',
      description: 'Align your heartbeat with the jungle. Morning drives depart at 06:00 when the predators are active, while afternoon explorations begin at 14:30 as the golden hour illuminates the villus.',
      extra: 'Custom Safari Jeeps'
    },
    {
      id: '03',
      icon: 'fa-utensils',
      title: 'Harvest Table',
      subtitle: 'Culinary Philosophy',
      description: 'Experience a menu that honors the village. We source organic vegetables and fresh lake fish from local farmers to create dishes that tell the story of the North Central Province.',
      extra: 'A La Carte Dining'
    },
    {
      id: '04',
      icon: 'fa-shield-heart',
      title: 'Guardianship',
      subtitle: 'Safety & Ethics',
      description: 'We coexist with the wild. Our 24/7 staff ensures your safety while strictly adhering to zero-waste protocols. We use high-voltage invisible fencing that respects elephant corridors.',
      extra: 'Sustainable Practices'
    }
  ];

  const handleMinimize = (id: string) => {
    setMinimizedIds(prev => new Set(prev).add(id));
    if (focusedId === id) setFocusedId(null);
  };

  const handleToggleDockAll = () => {
    if (minimizedIds.size === infoPoints.length) {
      setMinimizedIds(new Set());
      setFocusedId(null);
    } else {
      const allIds = new Set(infoPoints.map(p => p.id));
      setMinimizedIds(allIds);
      setFocusedId(null);
    }
  };

  const handleRailClick = (id: string) => {
    if (focusedId && focusedId !== id) {
      setMinimizedIds(prev => new Set(prev).add(focusedId));
    }
    
    setMinimizedIds(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    
    setFocusedId(id);
  };

  const handleFocus = (id: string) => {
    setFocusedId(id === focusedId ? null : id);
  };

  useEffect(() => {
    let requestFrame: number;
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.05);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.05);

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
      }
      requestFrame = requestAnimationFrame(animate);
    };
    requestFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestFrame);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const allDocked = minimizedIds.size === infoPoints.length;

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="bg-[#4b3427] py-20 md:py-32 lg:py-48 relative overflow-hidden leaf-pattern"
    >
      {/* Tropical Leaves Background Image */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="/leafbackground.jpg" 
          className="w-full h-full object-cover" 
          alt="Tropical Background" 
        />
        <div className="absolute inset-0 bg-[#4b3427]/60 mix-blend-multiply"></div>
      </div>

      <div className="hidden lg:block absolute left-0 top-0 w-[120px] h-full bg-black/10 border-r border-white/5 pointer-events-none z-0"></div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div 
          ref={blobRef}
          className="absolute top-0 left-0 w-[600px] h-[600px] -mt-[300px] -ml-[300px] rounded-full mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(6, 78, 59, 0) 70%)',
            filter: 'blur(80px)',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 relative">
          
          {/* Vertical Rail - Hidden on mobile, shown on lg+ */}
          <div className="hidden lg:block absolute left-0 top-[140px] w-[120px] h-full z-20">
             <div className="flex flex-col items-center gap-8">
                {infoPoints.filter(p => minimizedIds.has(p.id)).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleRailClick(p.id)}
                    className="group/rail relative w-16 h-16 rounded-2xl bg-[#efe2d2]0/20 border border-[#bf885e]/30 flex items-center justify-center text-[#bf885e] hover:bg-[#8d5527] hover:text-white transition-all hover:scale-110 shadow-[0_0_25px_rgba(16,185,129,0.3)] animate-dock-in"
                  >
                    <i className={`fa-solid ${p.icon} text-xl`}></i>
                    <div className="absolute left-full ml-4 opacity-0 group-hover/rail:opacity-100 transition-all bg-emerald-800 text-white text-[9px] font-bold py-2 px-4 rounded-lg whitespace-nowrap pointer-events-none translate-x-[-10px] group-hover/rail:translate-x-0 border border-emerald-500/20">
                      UNDOCK & FOCUS {p.title.toUpperCase()}
                    </div>
                  </button>
                ))}
             </div>
          </div>

          <div className="w-full lg:w-[45%] relative pl-0 lg:pl-[140px]">
            <div className="lg:sticky lg:top-40">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-8 md:w-12 h-[1px] bg-emerald-400/40"></div>
                <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-[#bf885e]/80">WILDERNESS INTELLIGENCE</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white mb-6 md:mb-10 leading-[1.05] tracking-tighter">
                Things <br className="hidden md:block"/>
                <span className="italic text-[#bf885e]">To Know</span>
              </h2>
              
              <div className="space-y-6 md:space-y-10">
                <p className="text-sm md:text-[16px] leading-[1.8] md:leading-[2.2] text-white/70 font-light italic border-l-2 border-[#bf885e]/30 pl-6 md:pl-10 max-w-md">
                  {allDocked 
                    ? "The wilderness is now focused in the Knowledge Rail. Restore grid or undock a specific item for an in-grid focus view."
                    : "Experience Wilpattu's magic through our curated insights. Explore each sanctuary detail designed for your reconnection."}
                </p>
                
                <button 
                  onClick={handleToggleDockAll}
                  className="pt-6 md:pt-10 flex items-center gap-6 md:gap-8 group/btn cursor-pointer w-full text-left outline-none"
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border border-emerald-500/20 flex items-center justify-center text-[#bf885e] text-xl md:text-2xl transition-all duration-700 group-hover/btn:bg-[#efe2d2]0 group-hover/btn:text-white group-hover/btn:scale-110 group-active/btn:scale-95 ${allDocked ? 'bg-[#efe2d2]0/10' : ''}`}>
                    <i className={`fa-solid ${allDocked ? 'fa-plus' : 'fa-minus'} animate-blink`}></i>
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-white uppercase mb-1 md:mb-2 group-hover/btn:text-[#bf885e] transition-colors">
                      {allDocked ? 'RESTORE GRID' : 'DOCK ALL'}
                    </p>
                    <p className="text-[8px] md:text-[9px] text-[#bf885e]/60 tracking-wider font-medium uppercase leading-relaxed max-w-[200px] md:max-w-none">
                      {allDocked 
                        ? 'RESTORE ALL CARDS TO ORIGINAL PLACES' 
                        : 'CLEAN UP THE VIEW BY DOCKING ALL CARDS'}
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[55%] relative">
            {/* Horizontal rail for mobile when items are docked */}
            <div className="lg:hidden flex flex-wrap justify-center gap-4 mb-10 empty:hidden">
                {infoPoints.filter(p => minimizedIds.has(p.id)).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleRailClick(p.id)}
                    className="w-12 h-12 rounded-xl bg-[#efe2d2]0/20 border border-[#bf885e]/30 flex items-center justify-center text-[#bf885e] active:scale-90 transition-all"
                  >
                    <i className={`fa-solid ${p.icon} text-lg`}></i>
                  </button>
                ))}
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 auto-rows-min transition-all duration-700 ${focusedId ? 'md:gap-y-16' : ''}`}>
              {infoPoints.map((point, idx) => (
                <DraggableCard 
                  key={point.id} 
                  point={point} 
                  idx={idx} 
                  isMinimized={minimizedIds.has(point.id)}
                  isFocused={focusedId === point.id}
                  onMinimize={handleMinimize}
                  onFocus={handleFocus}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(3); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.9); }
        }
        .animate-blink {
          animation: blink 1.5s ease-in-out infinite;
        }
        @keyframes dock-in {
          0% { opacity: 0; transform: translateX(200px) scale(1.3) rotate(10deg); filter: blur(15px); }
          100% { opacity: 1; transform: translateX(0) scale(1) rotate(0deg); filter: blur(0px); }
        }
        .animate-dock-in {
          animation: dock-in 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default ThingsToKnow;
