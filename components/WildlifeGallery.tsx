'use client';

import React, { useEffect, useState } from 'react';

const WildlifeGallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/safari-images')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled) {
          const pool = data?.gallery || [];
          setImages(pool.slice(0, 4));
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 4 }).map((_, idx) =>
            images[idx] ? (
              <img
                key={idx}
                src={images[idx]}
                className="aspect-square w-full h-full object-cover shadow-lg rounded-sm"
                alt={`Wilpattu wildlife ${idx + 1}`}
              />
            ) : (
              <div
                key={idx}
                className="aspect-square w-full h-full bg-linear-to-br from-[#4b3427] via-[#8d5527] to-[#bf885e] shadow-lg rounded-sm"
              ></div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default WildlifeGallery;
