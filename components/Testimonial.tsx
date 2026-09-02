import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "../constants";

interface SocialLinks {
  tripadvisor?: string;
  googleReviews?: string;
}

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({});

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await fetch("/api/social-links");
        if (response.ok) {
          const data = await response.json();
          setSocialLinks(data);
        }
      } catch (error) {
        console.error("Failed to fetch social links:", error);
      }
    };
    fetchSocialLinks();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-gradient-to-b from-white to-[#f6efe7] py-24 md:py-36 border-b border-[#8d5527]/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#bf885e]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#bf885e]/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#4b3427] mb-4">
            Guest Experiences
          </h2>
          <p className="text-lg text-[#8d5527]/70 font-light">
            Hear from our valued guests about their unforgettable journey
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={() =>
              setCurrentIndex(
                (prev) =>
                  (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
              )
            }
            className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-[#bf885e]/30 flex items-center justify-center text-[#bf885e] hover:bg-[#bf885e] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
            }
            className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-[#bf885e]/30 flex items-center justify-center text-[#bf885e] hover:bg-[#bf885e] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next testimonial"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Testimonial Content */}
          <div className="bg-white border border-[#bf885e]/20 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-6 mb-8">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#bf885e] to-[#8d5527] flex items-center justify-center text-white text-2xl font-serif shrink-0 shadow-md">
                {TESTIMONIALS[currentIndex].initial}
              </div>

              {/* Guest Info */}
              <div className="flex-1">
                <p className="text-lg font-semibold text-[#4b3427]">
                  {TESTIMONIALS[currentIndex].name}
                </p>
                <div className="flex gap-1 text-yellow-400 mt-2">
                  {[...Array(TESTIMONIALS[currentIndex].stars)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-sm"></i>
                  ))}
                </div>
              </div>
            </div>

            {/* Review Text */}
            <blockquote className="text-lg md:text-xl font-serif text-[#4b3427] italic leading-relaxed mb-8 text-gray-700">
              "{TESTIMONIALS[currentIndex].text}"
            </blockquote>

            {/* Review Links */}
            <div className="border-t border-[#bf885e]/10 pt-6 flex flex-wrap items-center gap-6">
              <span className="text-xs font-bold text-[#8d5527]/60 uppercase tracking-widest">
                Read verified reviews on
              </span>
              <div className="flex items-center gap-4">
                {socialLinks.tripadvisor && (
                  <a
                    href={socialLinks.tripadvisor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#f6efe7] hover:bg-[#bf885e]/10 rounded-lg transition-colors duration-300"
                    title="View on TripAdvisor"
                  >
                    <img
                      src="/trip.png"
                      alt="TripAdvisor"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-xs font-semibold text-[#8d5527]">
                      TripAdvisor
                    </span>
                  </a>
                )}
                {socialLinks.googleReviews && (
                  <a
                    href={socialLinks.googleReviews}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#f6efe7] hover:bg-[#bf885e]/10 rounded-lg transition-colors duration-300"
                    title="View Google Reviews"
                  >
                    <i className="fa-brands fa-google text-[#4285F4]"></i>
                    <span className="text-xs font-semibold text-[#8d5527]">
                      Google
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 flex-wrap">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-8 h-3 bg-[#bf885e]"
                  : "w-3 h-3 bg-[#bf885e]/30 hover:bg-[#bf885e]/60"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
              aria-current={idx === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
