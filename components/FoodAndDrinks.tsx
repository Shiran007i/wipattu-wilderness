
import React from 'react';

const FoodAndDrinks: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fbf7f2]">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=2400" 
            className="w-full h-full object-cover"
            alt="Food and Drinks Hero"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white mt-16 md:mt-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 md:mb-6 drop-shadow-lg">
            Food & Drinks
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-80">
            <span>HOME</span>
            <span className="opacity-40">/</span>
            <span>FOOD & DRINKS</span>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#fbf7f2]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-[14px] md:text-[15px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-90 px-2 md:px-0 text-justify md:text-center">
            At Wilds Wilpattu, every meal is a celebration of Sri Lanka’s rich culinary heritage, thoughtfully crafted to tantalize your taste buds and connect you with the essence of the land. From traditional flavors to unique dining settings, our food and drink offerings promise an unforgettable gastronomic journey.
          </p>
        </div>
      </section>

      {/* Culinary Sections */}
      <section className="pb-20 md:pb-32 bg-[#fbf7f2]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          
          {/* Authentic Sri Lankan Cuisine */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 mb-20 md:mb-32">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1541014741259-df549fa3bb68?auto=format&fit=crop&q=80&w=1200" 
                alt="Authentic Sri Lankan Cuisine" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl rounded-sm" 
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif text-[#8d5527] mb-6 md:mb-8 text-center lg:text-left">Authentic Sri Lankan Cuisine</h3>
              <div className="space-y-4 md:space-y-6 text-[12px] md:text-[13px] leading-[1.6] md:leading-[1.8] text-[#382F2B] font-light text-justify px-2 md:px-0">
                <p>
                  Savour the true taste of Sri Lanka with dishes inspired by age-old recipes and local ingredients. Our menu features staples like rice and curry made with fresh, organic vegetables, lake fish, and hearty kurakkan-based dishes.
                </p>
                <p>
                  Each dish is prepared by our in-house chef, who brings authentic flavors to life with care and expertise, ensuring that every bite tells a story of the island's vibrant culture and culinary traditions.
                </p>
              </div>
            </div>
          </div>

          {/* Beyond Sri Lankan Cuisine */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 mb-20 md:mb-32">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-serif text-[#8d5527] mb-6 md:mb-8 text-center lg:text-left">Beyond Sri Lankan Cuisine</h3>
              <div className="space-y-4 md:space-y-6 text-[12px] md:text-[13px] leading-[1.6] md:leading-[1.8] text-[#382F2B] font-light text-justify px-2 md:px-0">
                <p>
                  While we proudly serve authentic Sri Lankan cuisine, we also cater to a variety of tastes. Guests can enjoy Western-style dishes prepared with the same care and attention to detail, based on individual preferences.
                </p>
                <p>
                  Whether it’s a hearty breakfast with sunny side up, a light salad, a sizzling steak or a comforting pasta, our team is happy to accommodate your culinary requests to ensure a delightful and personalized dining experience.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&q=80&w=1200" 
                alt="Beyond Sri Lankan Cuisine" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl rounded-sm" 
              />
            </div>
          </div>

          {/* Signature Culinary Experiences */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 mb-20 md:mb-48">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1467453272184-d55c993610c1?auto=format&fit=crop&q=80&w=1200" 
                alt="Signature Culinary Experiences" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl rounded-sm" 
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif text-[#8d5527] mb-6 md:mb-8 text-center lg:text-left">Signature Culinary Experiences</h3>
              <div className="space-y-6 md:space-y-8 text-[12px] md:text-[13px] leading-[1.6] md:leading-[1.8] text-[#382F2B] font-light px-2 md:px-0">
                <div>
                  <h4 className="font-bold text-[#8d5527] mb-2 uppercase tracking-widest text-[10px] md:text-[11px]">Breakfast by the Lake:</h4>
                  <p>Begin your day with a serene lakeside breakfast featuring local favorites and freshly brewed beverages, surrounded by the sounds of nature.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#8d5527] mb-2 uppercase tracking-widest text-[10px] md:text-[11px]">Farmer's Lunch:</h4>
                  <p>Enjoy the catch of the day, served alongside seasonal vegetables and traditional curries, for a rustic dining experience inspired by village life.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#8d5527] mb-2 uppercase tracking-widest text-[10px] md:text-[11px]">Bonfire BBQ Dinner:</h4>
                  <p>Relish a feast of smoky barbecued delights prepared under the starry night sky, creating a perfect atmosphere for sharing stories and laughter.</p>
                </div>
              </div>
            </div>
          </div>

          {/* The 'Kamatha' Lounge */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 mb-20 md:mb-48">
            <div className="w-full lg:w-[45%] lg:pr-16 z-10 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-serif text-[#382F2B] mb-6 md:mb-8 leading-tight">The 'Kamatha' Lounge</h3>
              <p className="text-[14px] leading-[1.8] md:leading-[2.2] text-[#382F2B] font-light opacity-80 text-justify px-2 md:px-0">
                Unwind at the Kamatha Lounge with refreshing drinks and light nibbles. This cozy space is perfect for relaxing after a day of exploration or for connecting with fellow travelers over a locally inspired cocktail or fresh juice.
              </p>
            </div>
            <div className="w-full lg:w-[65%] relative -ml-0 lg:-ml-12">
               <div className="aspect-[4/3] sm:aspect-[16/9] overflow-hidden shadow-2xl rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=1600" 
                  alt="Kamatha Lounge" 
                  className="w-full h-full object-cover"
                />
               </div>
            </div>
          </div>

          {/* Sustainability in Dining */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200" 
                alt="Sustainability in Dining" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover shadow-2xl rounded-sm" 
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif text-[#8d5527] mb-6 md:mb-8 text-center lg:text-left">Sustainability in Dining</h3>
              <div className="space-y-4 md:space-y-6 text-[12px] md:text-[13px] leading-[1.6] md:leading-[1.8] text-[#382F2B] font-light text-justify px-2 md:px-0">
                <p>
                  Our culinary approach is rooted in sustainability. Ingredients are sourced locally, ensuring freshness while supporting the surrounding community. Meals are prepared with minimal waste, and every effort is made to use eco-friendly practices in the kitchen and dining areas.
                </p>
                <p>
                  Whether you're indulging in a curated dinner or a simple village-style snack, every bite at Wilds Wilpattu reflects our passion for authenticity, sustainability, and a connection to the land.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FoodAndDrinks;
