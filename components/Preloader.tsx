import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#f6efe7] flex flex-col items-center justify-center">
      <div className="w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full border-4 border-[#bf885e]/25 shadow-2xl overflow-hidden">
        <img
          src="/logo.jpeg"
          alt="Wilpattu Wilderness"
          className="w-full h-full object-cover animate-logo-pulse"
        />
      </div>
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
        <div
          className="absolute inset-y-0 left-0 bg-[#bf885e] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-4 text-[#8d5527] font-bold tracking-[0.3em] text-xs uppercase">
        Entering the Wild... {progress}%
      </div>
    </div>
  );
};

// Default export for Preloader
export default Preloader;
