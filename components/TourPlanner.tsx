
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TourPreferences, TourItinerary, AppSection } from '../types';
import { planTour } from '../app/actions';

const TourPlanner: React.FC = () => {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<TourPreferences>({
    duration: 3,
    interests: [],
    budget: 'mid-range',
    groupSize: 2,
    specialRequests: ''
  });
  const [itinerary, setItinerary] = useState<TourItinerary | null>(null);
  const [isPlanning, setIsPlanning] = useState(false);

  const interestsOptions = [
    'Leopard Tracking',
    'Bird Watching',
    'Photography',
    'Night Safaris',
    'Cultural Heritage',
    'Luxury Camping',
    'Nature Walks',
    'Wildlife Conservation'
  ];

  const handleInterestToggle = (interest: string) => {
    setPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const startPlanning = async () => {
    setIsPlanning(true);
    try {
      const result = await planTour(preferences);
      setItinerary(result);
      setStep(4);
    } catch (error) {
      console.error("Planning failed:", error);
    } finally {
      setIsPlanning(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-6 bg-[#f6efe7] leaf-pattern">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-serif mb-3 md:mb-4 text-[#473c35]"
          >
            AI Tour Planner
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#473c35]/80 tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold"
          >
            Crafting your perfect wilderness escape
          </motion.p>
        </div>

        <div className="bg-white shadow-2xl border border-[#d9c0a5] rounded-2xl md:rounded-3xl p-6 md:p-12">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="space-y-4">
                  <label className="block text-xs md:text-sm font-bold tracking-widest uppercase opacity-60">How many days?</label>
                  <div className="flex items-center gap-4 md:gap-6">
                    <button 
                      onClick={() => setPreferences(p => ({ ...p, duration: Math.max(1, p.duration - 1) }))}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#d9c0a5] bg-white text-[#473c35] flex items-center justify-center hover:bg-[#e6c9a0] transition-colors"
                    >-</button>
                    <span className="text-3xl md:text-4xl font-serif w-10 md:w-12 text-center">{preferences.duration}</span>
                    <button 
                      onClick={() => setPreferences(p => ({ ...p, duration: Math.min(14, p.duration + 1) }))}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#d9c0a5] bg-white text-[#473c35] flex items-center justify-center hover:bg-[#e6c9a0] transition-colors"
                    >+</button>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-xs md:text-sm font-bold tracking-widest uppercase opacity-60">Group Size</label>
                  <input 
                    type="range" 
                    min="1" 
                    max="12" 
                    value={preferences.groupSize}
                    onChange={(e) => setPreferences(p => ({ ...p, groupSize: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-[#d9c0a5] rounded-lg appearance-none cursor-pointer accent-[#473c35]"
                  />
                  <div className="flex justify-between text-[10px] md:text-xs opacity-50">
                    <span>1 Person</span>
                    <span>{preferences.groupSize} People</span>
                    <span>12 People</span>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-[#473c35] py-4 md:py-5 rounded-xl font-bold text-xs md:text-sm tracking-widest uppercase text-white hover:bg-[#2f2a21] transition-all shadow-xl"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="space-y-4">
                  <label className="block text-xs md:text-sm font-bold tracking-widest uppercase opacity-60">What interests you?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {interestsOptions.map(interest => (
                      <button
                        key={interest}
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-4 py-3 rounded-xl text-[9px] md:text-[10px] font-bold tracking-widest uppercase border transition-all ${
                          preferences.interests.includes(interest)
                            ? 'bg-[#473c35] border-[#473c35] text-white'
                            : 'bg-[#f5f0e7] border-[#d9c0a5] text-[#473c35]/90 hover:border-[#473c35]'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <button 
                    onClick={() => setStep(1)}
                    className="flex-1 border border-[#d9c0a5] py-4 md:py-5 rounded-xl font-bold text-xs md:text-sm tracking-widest uppercase text-[#473c35] hover:bg-[#faf5eb] transition-all"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => setStep(3)}
                    className="flex-1 bg-[#473c35] py-4 md:py-5 rounded-xl font-bold text-xs md:text-sm tracking-widest uppercase text-white hover:bg-[#2f2a21] transition-all shadow-xl"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="space-y-4">
                  <label className="block text-xs md:text-sm font-bold tracking-widest uppercase opacity-60">Budget Level</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                    {(['budget', 'mid-range', 'luxury'] as const).map(b => (
                      <button
                        key={b}
                        onClick={() => setPreferences(p => ({ ...p, budget: b }))}
                        className={`py-3 md:py-4 rounded-xl text-[9px] md:text-[10px] font-bold tracking-widest uppercase border transition-all ${
                          preferences.budget === b
                            ? 'bg-[#473c35] border-[#473c35] text-white'
                            : 'bg-[#f5f0e7] border-[#d9c0a5] text-[#473c35]/90 hover:border-[#473c35]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-xs md:text-sm font-bold tracking-widest uppercase opacity-60">Special Requests</label>
                  <textarea 
                    value={preferences.specialRequests}
                    onChange={(e) => setPreferences(p => ({ ...p, specialRequests: e.target.value }))}
                    placeholder="Any dietary requirements, accessibility needs, or specific animals you want to see?"
                    className="w-full bg-[#f5f0e7] border border-[#d9c0a5] rounded-xl p-4 text-sm text-[#473c35] outline-none focus:border-[#473c35] transition-colors h-24 md:h-32 resize-none"
                  />
                </div>

                <div className="flex gap-3 md:gap-4">
                  <button 
                    onClick={() => setStep(2)}
                    className="flex-1 border border-[#d9c0a5] py-4 md:py-5 rounded-xl font-bold text-xs md:text-sm tracking-widest uppercase text-[#473c35] hover:bg-[#faf5eb] transition-all"
                  >
                    Back
                  </button>
                  <button 
                    onClick={startPlanning}
                    disabled={isPlanning}
                    className="flex-1 bg-[#473c35] py-4 md:py-5 rounded-xl font-bold text-xs md:text-sm tracking-widest uppercase text-white hover:bg-[#2f2a21] transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    {isPlanning ? (
                      <>
                        <i className="fa-solid fa-circle-notch animate-spin text-xs"></i>
                        Planning...
                      </>
                    ) : 'Generate Itinerary'}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && itinerary && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8 md:space-y-12"
              >
                <div className="text-center border-b border-[#d9c0a5] pb-6 md:pb-8">
                  <h3 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4 text-[#473c35]">{itinerary.title}</h3>
                  <p className="text-xs md:text-sm text-[#473c35]/80 leading-relaxed">{itinerary.summary}</p>
                </div>

                <div className="space-y-12 md:space-y-16">
                  {itinerary.days.map((day, idx) => (
                    <div className="relative pl-6 md:pl-8 border-l border-[#473c35]/30">
                      <div className="absolute -left-[7px] md:-left-[9px] top-0 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-[#473c35] shadow-[0_0_15px_rgba(71,60,53,0.35)]"></div>
                      <div className="mb-4 md:mb-6">
                        <span className="text-[#473c35] text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">Day {day.day}</span>
                        <h4 className="text-xl md:text-2xl font-serif mt-1 text-[#473c35]">{day.title}</h4>
                      </div>

                      <div className="space-y-5 md:space-y-6">
                        {day.activities.map((act, aidx) => (
                          <div key={aidx} className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                            <div className="w-20 shrink-0 text-[9px] md:text-[10px] font-bold tracking-widest uppercase opacity-40 pt-1">
                              {act.time}
                            </div>
                            <div className="space-y-1">
                              <h5 className="font-bold text-sm text-[#473c35]">{act.activity}</h5>
                              <p className="text-[11px] md:text-xs text-[#473c35]/80 leading-relaxed text-justify">{act.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/5">
                        <div>
                          <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase opacity-40 block mb-2 md:mb-3">Meals</span>
                          <div className="flex flex-wrap gap-2">
                            {day.meals.map(m => (
                              <span key={m} className="px-2.5 py-1 bg-[#473c35]/10 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-[#473c35]">{m}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase opacity-40 block mb-2 md:mb-3">Accommodation</span>
                          <p className="text-[11px] md:text-xs font-bold">{day.accommodation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {itinerary.totalEstimatedPrice && (
                  <div className="bg-[#f5f0e7] rounded-xl md:rounded-2xl p-5 md:p-6 text-center border border-[#d9c0a5]">
                    <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-[#473c35]/70 block mb-1 md:mb-2">Estimated Investment</span>
                    <p className="text-2xl md:text-3xl font-serif text-[#473c35]">{itinerary.totalEstimatedPrice}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button 
                    onClick={() => setStep(1)}
                    className="w-full sm:flex-1 border border-[#d9c0a5] py-4 md:py-5 rounded-xl font-bold text-xs md:text-sm tracking-widest uppercase text-[#473c35] hover:bg-[#faf5eb] transition-all"
                  >
                    Plan Another
                  </button>
                  <button 
                    className="w-full sm:flex-1 bg-[#473c35] py-4 md:py-5 rounded-xl font-bold text-xs md:text-sm tracking-widest uppercase text-white hover:bg-[#2f2a21] transition-all shadow-xl"
                  >
                    Book This Trip
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TourPlanner;
