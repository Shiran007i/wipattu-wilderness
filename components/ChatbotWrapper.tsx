'use client';

import React, { useState } from 'react';
import Chatbot from './Chatbot';

const ChatbotWrapper: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-8 right-8 flex flex-col gap-6 z-[200]">
        {/* AI Safari Guide Widget */}
        <div 
          onClick={() => setIsChatOpen(!isChatOpen)} 
          className="relative group cursor-pointer"
        >
          {/* 3D Depth Shadows */}
          <div className="absolute top-3 left-3 inset-0 rounded-full bg-black/20 blur-lg group-hover:blur-xl transition-all duration-500"></div>
          
          {/* Outer Jungle Glow */}
          <div className="absolute -inset-3 rounded-full bg-emerald-500/20 blur-lg group-hover:bg-emerald-400/40 group-hover:blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100 animate-pulse"></div>
          
          {/* Main Widget Container - Reduced to w-16 h-16 */}
          <div className="relative w-16 h-16 rounded-full flex items-center justify-center p-1 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-2xl border border-white/50 shadow-[0_6px_20px_rgba(6,78,59,0.5)] hover:shadow-[0_12px_35px_rgba(6,78,59,0.7)] hover:scale-105 hover:-translate-y-1 transition-all duration-500 ease-out overflow-visible">
            
            {/* Inner Earth-Toned Orb */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-[#064E3B] via-[#065F46] to-[#0D9488] shadow-[inner_0_3px_8px_rgba(0,0,0,0.4)]"></div>
            
            {/* Safari Guide Avatar - 3D Character */}
            <div className="relative w-full h-full flex items-center justify-center animate-safari-float">
              <img 
                src="/SafariBuddy.png" 
                alt="Safari Buddy"
                className="w-[92%] h-[92%] object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.5)] contrast-110 brightness-105"
              />
            </div>

            {/* Pulsing Status Ring */}
            <div className="absolute -inset-0.5 rounded-full border-2 border-emerald-400/30 scale-100 group-hover:scale-105 opacity-30 group-hover:opacity-100 transition-all duration-700 animate-[spin_15s_linear_infinite]"></div>
            
            {/* Online Indicator - Scaled down */}
            <div className="absolute top-0.5 right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#064E3B] shadow-[0_0_10px_rgba(52,211,153,0.8)] z-20">
              <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></div>
            </div>
          </div>

          {/* 3D Styled Label */}
          <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-10 group-hover:translate-x-0">
            <div className="bg-emerald-950/90 backdrop-blur-md text-white text-[10px] font-black py-2.5 px-6 rounded-2xl whitespace-nowrap shadow-[0_12px_30px_rgba(0,0,0,0.3)] border border-emerald-400/30 tracking-[0.2em] uppercase flex items-center gap-3">
              <i className="fa-solid fa-compass animate-spin-slow text-emerald-400"></i>
              AI JUNGLE GUIDE
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-emerald-950/90"></div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button - Reduced to w-12 h-12 */}
        <a 
          href="https://wa.me/94716335000" 
          target="_blank" 
          rel="noreferrer" 
          className="relative group w-12 h-12 self-center"
        >
          <div className="absolute inset-0 rounded-full bg-[#25D366] blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative w-full h-full bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 border-2 border-white/30">
            <i className="fa-brands fa-whatsapp"></i>
            
            <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-white text-[#25D366] text-[9px] font-black py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-xl translate-x-10 group-hover:translate-x-0 whitespace-nowrap border border-[#25D366]/10 uppercase tracking-widest">
              Direct Contact
            </span>
          </div>
        </a>
      </div>
      
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <style jsx global>{`
        @keyframes safari-float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-6px) rotate(3deg) scale(1.05); }
        }
        .animate-safari-float {
          animation: safari-float 5s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default ChatbotWrapper;
