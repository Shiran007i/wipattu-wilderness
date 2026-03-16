
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=2400" 
            className="w-full h-full object-cover"
            alt="About Us Wilpattu"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white mt-16 md:mt-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 md:mb-6 drop-shadow-lg">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-80">
            <span>HOME</span>
            <span className="opacity-40">/</span>
            <span className="text-luxury-tan">ABOUT US</span>
          </div>
        </div>
      </section>

      {/* Introduction Text Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-[14px] md:text-[17px] leading-[1.8] md:leading-[2.2] text-[#63544B] font-light opacity-90 px-2 md:px-0 text-justify md:text-center">
            In 2021, Wilds Wilpattu began as a dream, to offer explorers a piece of paradise that remains untouched, unspoiled, and deeply rooted in the heart of nature. Fast forward to 2024, this vision has come to life, thanks to two passionate individuals. One, an accomplished investment banker, and the other, a visionary business tycoon in the apparel sector, joined forces to create a haven that seamlessly blends luxury, sustainability, and authentic Sri Lankan experiences.
          </p>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="relative bg-[#382F2B] py-24 md:py-32 lg:py-48 overflow-hidden text-white">
        {/* Subtle Leaf Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-leaf-pattern" width="300" height="300" patternUnits="userSpaceOnUse">
                 <path d="M150 0 Q225 150 150 300 Q75 150 150 0" fill="none" stroke="white" strokeWidth="0.5" />
                 <path d="M0 150 Q150 75 300 150 Q150 225 0 150" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-leaf-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6 tracking-wide text-white">Our Philosophy</h2>
            <p className="max-w-2xl mx-auto text-[10px] md:text-[12px] font-light tracking-[0.1em] opacity-60 leading-relaxed uppercase px-4 md:px-0">
              At Wilds Wilpattu, we believe in preserving the enchanting mystery and original wilderness of Wilpattu while sharing its beauty with the world. Guided by our pillars of operation, we've created a space where hospitality meets harmony with nature.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 md:px-0">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20 -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-12 md:space-y-12">
              <div className="flex flex-col md:flex-row items-center justify-center relative">
                <div className="w-full md:w-1/2 md:pr-16 text-center md:text-right">
                  <div className="bg-white p-8 md:p-14 shadow-2xl inline-block text-[#382F2B] transform transition-transform hover:scale-[1.02] w-full md:w-auto rounded-sm">
                    <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 tracking-wide">Sustainability</h3>
                    <p className="text-[11px] md:text-[12px] leading-relaxed opacity-80 font-light text-justify">
                      We are committed to protecting the environment and minimizing waste. By employing eco-friendly practices, sourcing locally, and using renewable materials, we ensure that Wilds Wilpattu leaves a positive impact on both the environment and the community.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#382F2B] border-2 border-white z-20"></div>
                <div className="w-full md:w-1/2"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center relative">
                <div className="w-full md:w-1/2"></div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#382F2B] border-2 border-white z-20"></div>
                <div className="w-full md:w-1/2 md:pl-16 text-center md:text-left">
                  <div className="bg-[#FAF7F2] p-8 md:p-14 shadow-2xl inline-block text-[#382F2B] transform transition-transform hover:scale-[1.02] w-full md:w-auto rounded-sm">
                    <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 tracking-wide">Community Empowerment</h3>
                    <p className="text-[11px] md:text-[12px] leading-relaxed opacity-80 font-light text-justify">
                      Wilds Wilpattu thrives on its deep connection with the local village. We've created employment opportunities for families in the area, helping to uplift the community while celebrating their traditions. From hosting authentic Sri Lankan cuisine to sharing stories of the land, our efforts support and showcase local culture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center relative">
                <div className="w-full md:w-1/2 md:pr-16 text-center md:text-right">
                  <div className="bg-white p-8 md:p-14 shadow-2xl inline-block text-[#382F2B] transform transition-transform hover:scale-[1.02] w-full md:w-auto rounded-sm">
                    <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 tracking-wide">Authenticity & Minimalism</h3>
                    <p className="text-[11px] md:text-[12px] leading-relaxed opacity-80 font-light text-justify">
                      Our guests are invited to experience the simplicity of life in its most beautiful form. From minimalistic living spaces to immersive cultural experiences, we highlight the treasure trove of Wilpattu's natural and cultural heritage in an unfiltered way, offering genuine hospitality that stays with you long after your visit.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#382F2B] border-2 border-white z-20"></div>
                <div className="w-full md:w-1/2"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center relative">
                <div className="w-full md:w-1/2"></div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#382F2B] border-2 border-white z-20"></div>
                <div className="w-full md:w-1/2 md:pl-16 text-center md:text-left">
                  <div className="bg-[#FAF7F2] p-8 md:p-14 shadow-2xl inline-block text-[#382F2B] transform transition-transform hover:scale-[1.02] w-full md:w-auto rounded-sm">
                    <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 tracking-wide">Wildlife Conservation & Education</h3>
                    <p className="text-[11px] md:text-[12px] leading-relaxed opacity-80 font-light text-justify">
                      Wilpattu's wilderness is home to an extraordinary array of flora and fauna. Our expert naturalists provide unparalleled insights into the region's biodiversity, turning every wildlife encounter into an opportunity for learning and appreciation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Journey Realized Section */}
      <section className="py-20 md:py-32 lg:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-serif text-[#382F2B] mb-6 md:mb-10 tracking-wide text-center lg:text-left">A Journey Realized</h2>
              <p className="text-[14px] md:text-[15px] leading-[1.8] md:leading-[2.2] text-[#63544B] font-light opacity-90 text-justify px-2 md:px-0">
                From the initial conceptualization to the realization of Wilds Wilpattu, the journey has been one of passion, perseverance, and purpose. Every aspect of our property has been thoughtfully designed to honor the land it occupies while offering guests a retreat that feels both luxurious and deeply connected to nature.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
              <div className="absolute -left-10 top-10 w-24 h-full bg-[#FAF7F2] z-0 hidden lg:block"></div>
              <img 
                src="https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl relative z-10 rounded-sm" 
                alt="Journey realized"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-20 md:py-32 lg:py-48 bg-[#FAF7F2] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -right-10 top-10 w-24 h-full bg-white z-0 hidden lg:block"></div>
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl relative z-10 rounded-sm" 
                alt="What sets us apart"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-serif text-[#382F2B] mb-6 md:mb-10 tracking-wide text-center lg:text-left">What Sets Us Apart</h2>
              <div className="space-y-6 md:space-y-8 text-[14px] md:text-[15px] leading-[1.8] md:leading-[2.2] text-[#63544B] font-light opacity-90 text-justify px-2 md:px-0">
                <p>
                  At Wilds Wilpattu, we offer more than just a place to stay; we offer an experience of a lifetime. Picture waking up to the sounds of nature, indulging in meals prepared with local flavors, and immersing yourself in the rhythms of village life. Combine this with an incomparable naturalist-led wildlife adventure, and you have a getaway unlike any other.
                </p>
                <p>
                  Whether you're seeking adventure, tranquility or a meaningful connection with nature, Wilds Wilpattu invites you to become part of our story, one that cherishes the wilderness, uplifts the community, and celebrates the essence of Sri Lanka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
