
import React from 'react';

const WildlifeGallery: React.FC = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <img src="https://images.unsplash.com/photo-1575515650222-3811726a2185?auto=format&fit=crop&q=80&w=600" className="aspect-square w-full h-full object-cover shadow-lg rounded-sm" alt="Wildlife 1" />
          <img src="https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&q=80&w=600" className="aspect-square w-full h-full object-cover shadow-lg rounded-sm" alt="Wildlife 2" />
          <img src="https://images.unsplash.com/photo-1444464666168-49d633b86747?auto=format&fit=crop&q=80&w=600" className="aspect-square w-full h-full object-cover shadow-lg rounded-sm" alt="Wildlife 3" />
          <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600" className="aspect-square w-full h-full object-cover shadow-lg rounded-sm" alt="Wildlife 4" />
        </div>
      </div>
    </section>
  );
};

export default WildlifeGallery;
