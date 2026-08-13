'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { calculateSafariTotals, SafariExperience, SafariPricingRules } from '../lib/calculateSafariTotal';

const DEFAULT_EXPERIENCES: SafariExperience[] = [
  {
    id: 'morning',
    name: 'Morning Safari',
    duration: '05:30 AM - 10:00 AM',
    jeepOnlyPrice: 60,
    jeepWithEntryPrice: 150,
    includes: 'Naturalist, Breakfast Packet, Cool box with water and Soft Drinks.',
  },
  {
    id: 'afternoon',
    name: 'Afternoon Safari',
    duration: '02:00 PM - 06:00 PM',
    jeepOnlyPrice: 60,
    jeepWithEntryPrice: 150,
    includes: 'Naturalist, Evening Tea with Cookies, Cool box with water and Soft Drinks.',
  },
  {
    id: 'fullday',
    name: 'Full-Day Safari',
    duration: '05:30 AM - 06:00 PM',
    jeepOnlyPrice: 110,
    jeepWithEntryPrice: 190,
    includes:
      'Naturalist, Breakfast Packet, Lunch, Evening Tea with Cookies, Cool box with water and Soft Drinks.',
  },
];

const DEFAULT_RULES: SafariPricingRules = {
  parkEntryFeeMin: 30,
  parkEntryFeeMax: 35,
  maxPaxPerJeep: 6,
  basePaxIncluded: 2,
  serviceChargePercent: 10,
};

const SafariBooking: React.FC = () => {
  const searchParams = useSearchParams();
  const [experiences, setExperiences] = useState<SafariExperience[]>(DEFAULT_EXPERIENCES);
  const [rules, setRules] = useState<SafariPricingRules>(DEFAULT_RULES);
  const [selectedId, setSelectedId] = useState(() => searchParams.get('experience') || 'morning');
  const [date, setDate] = useState(() => searchParams.get('date') || '');
  const [paxCount, setPaxCount] = useState(() => {
    const fromUrl = parseInt(searchParams.get('pax') || '2');
    return isNaN(fromUrl) ? 2 : Math.max(1, fromUrl);
  });
  const fromTourPlanner = searchParams.get('fromPlanner') === '1';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    specialRequests: '',
    website: '', // honeypot
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [whatsappAutoOpenFailed, setWhatsappAutoOpenFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/safari-config')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled) {
          if (data?.experiences?.length > 0) setExperiences(data.experiences);
          if (data?.pricingRules) setRules(data.pricingRules);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/whatsapp-number')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.number) setWhatsappNumber(data.number);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    setPaxCount((p) => Math.min(rules.maxPaxPerJeep, p));
  }, [rules.maxPaxPerJeep]);

  const selectedExperience = experiences.find((e) => e.id === selectedId) || experiences[0];
  const totals = useMemo(
    () => calculateSafariTotals(selectedExperience, paxCount, rules),
    [selectedExperience, paxCount, rules],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.telephone.trim()) newErrors.telephone = 'Required';
    if (!date) newErrors.date = 'Select a date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppUrl = (number: string) => {
    const priceLine =
      totals.totalMin === totals.totalMax
        ? `USD ${totals.totalMin.toFixed(2)}`
        : `USD ${totals.totalMin.toFixed(2)} - ${totals.totalMax.toFixed(2)} (estimated)`;

    const message = [
      'New Safari Booking Request - Wilpattu Wilderness website',
      '',
      'Guest Details:',
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.telephone}`,
      '',
      'Safari Details:',
      `Experience: ${selectedExperience.name}`,
      `Date: ${date}`,
      `Passengers: ${paxCount}`,
      '',
      'Special Requests:',
      formData.specialRequests || 'None',
      '',
      `Estimated Total: ${priceLine}`,
    ].join('\n');

    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitError('');
    if (!validateForm()) return;

    // Open WhatsApp with the real URL directly, synchronously, before any
    // await — keeps browsers from blocking it, and there's never a blank tab.
    if (whatsappNumber) {
      const url = buildWhatsAppUrl(whatsappNumber);
      window.open(url, '_blank', 'noopener,noreferrer');
      setWhatsappUrl(url);
    } else {
      setWhatsappAutoOpenFailed(true);
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/safari-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date,
          experienceId: selectedExperience.id,
          experienceName: selectedExperience.name,
          paxCount,
          basePaxIncluded: rules.basePaxIncluded,
          pricing: totals,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Unable to send safari booking right now.');
      }
      setSubmitted(true);
      if (!whatsappNumber) {
        try {
          const res = await fetch('/api/whatsapp-number');
          if (res.ok) {
            const data = await res.json();
            if (data?.number) setWhatsappUrl(buildWhatsAppUrl(data.number));
          }
        } catch {
          // not critical
        }
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to confirm safari booking.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f6efe7] flex items-center justify-center p-4">
        <div className="bg-white p-8 md:p-12 shadow-2xl max-w-2xl w-full text-center rounded-2xl border border-emerald-50">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#efe2d2] text-[#bf885e] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <i className="fa-solid fa-check text-4xl md:text-5xl"></i>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#8d5527] mb-4 md:mb-6">
            Safari Request Sent!
          </h2>
          <p className="text-[#065F46] font-light mb-8 leading-relaxed">
            Ayubowan {formData.firstName}! Your safari booking request has been sent to the team successfully.
          </p>
          {whatsappAutoOpenFailed && whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-emerald-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.3em] hover:bg-emerald-700 shadow-xl transition-all mb-6"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Send via WhatsApp
            </a>
          )}
          <div>
            <a
              href="/"
              className="inline-block bg-[#8d5527] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.4em] hover:bg-[#bf885e] shadow-xl transition-all"
            >
              Return Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6efe7] text-[#8d5527]">
      <section className="relative h-[35vh] md:h-[45vh] w-full flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/safari/Safari22.jpeg"
            className="w-full h-full object-cover"
            alt="Safari Jeep"
          />
          <div className="absolute inset-0 bg-emerald-900/50"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center text-white mt-8">
          <h1 className="text-4xl md:text-6xl font-serif mb-3 drop-shadow-lg !text-white">
            Book Your Safari
          </h1>
          <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-80">
            Private Jeep · Up to {rules.maxPaxPerJeep} Passengers
          </p>
        </div>
      </section>

      {/* The Ultimate Wilpattu Safari Experience */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <p className="text-[#bf885e] font-bold tracking-[0.35em] text-[9px] md:text-[11px] uppercase mb-4">
              The Ultimate Wilpattu Safari Experience
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-[#382F2B] mb-6 md:mb-8">
              Guided by Expertise. Driven by Passion.
            </h2>
            <p className="text-[13px] md:text-[14px] leading-[1.8] md:leading-[2] text-[#382F2B] font-light opacity-80">
              A great safari isn&rsquo;t just about entering the park — it&rsquo;s about
              who takes you there. Your journey is led by a master duo: an
              experienced local track driver who knows every trail, waterhole,
              and hidden path, and a knowledgeable resident naturalist
              dedicated to decoding the secrets of the wild. Together, they
              transform a simple game drive into an unforgettable wildlife
              adventure — tracking elusive leopards by sound, identifying rare
              bird calls, and positioning your jeep for the perfect
              photographic angle.
            </p>
          </div>

          <h3 className="text-xl md:text-2xl font-serif text-[#8d5527] text-center mb-10 md:mb-12">
            Meet Your Safari Experts
          </h3>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#f9f3ea] border border-[#bf885e]/20 rounded-2xl p-7 md:p-9">
              <div className="w-14 h-14 rounded-full bg-[#8d5527] flex items-center justify-center mb-6">
                <i className="fa-solid fa-user-tie text-white text-xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-serif text-[#8d5527] mb-5 md:mb-6">
                The Master Track Driver
              </h4>
              <ul className="space-y-4">
                {[
                  {
                    title: "Deep Local Knowledge",
                    text: "Decades of experience navigating Wilpattu's complex forest tracks, sand roads, and villu borders safely and smoothly.",
                  },
                  {
                    title: "Leopard & Bear Tracking",
                    text: "Skilfully reading paw prints (pugmarks), alarm calls, and territory markers to place you in the best position for rare sightings.",
                  },
                  {
                    title: "Photographer-Friendly Positioning",
                    text: "Angles the safari jeep precisely for high-quality photography, accounting for light direction, vehicle stability, and wildlife comfort.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-[#bf885e] text-xs mt-1.5 shrink-0"></i>
                    <div>
                      <p className="text-[12px] md:text-[13px] font-bold text-[#382F2B] mb-1">
                        {item.title}
                      </p>
                      <p className="text-[11px] md:text-[12px] leading-[1.6] text-[#382F2B] font-light opacity-75">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f9f3ea] border border-[#bf885e]/20 rounded-2xl p-7 md:p-9">
              <div className="w-14 h-14 rounded-full bg-[#8d5527] flex items-center justify-center mb-6">
                <i className="fa-solid fa-binoculars text-white text-xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-serif text-[#8d5527] mb-5 md:mb-6">
                The Resident Wildlife Naturalist
              </h4>
              <ul className="space-y-4">
                {[
                  {
                    title: "Expert Storytelling & Science",
                    text: "Shares deep insights into leopard behavior, sloth bear feeding cycles, elephant herd dynamics, and bird ecology.",
                  },
                  {
                    title: 'The "Big Five" & Beyond',
                    text: "Skilled at spotting camouflaged species — from hunting crocodiles and crested hawk-eagles to tiny endemic birds.",
                  },
                  {
                    title: "Interactive & Engaging",
                    text: "Perfect for keen birdwatchers, wildlife photographers, and families wanting an educational wilderness experience.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-[#bf885e] text-xs mt-1.5 shrink-0"></i>
                    <div>
                      <p className="text-[12px] md:text-[13px] font-bold text-[#382F2B] mb-1">
                        {item.title}
                      </p>
                      <p className="text-[11px] md:text-[12px] leading-[1.6] text-[#382F2B] font-light opacity-75">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#f6efe7]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {fromTourPlanner && (
            <div className="mb-8 p-4 md:p-5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
              <i className="fa-solid fa-wand-magic-sparkles text-amber-600 mt-0.5"></i>
              <p className="text-[11px] md:text-xs text-amber-800">
                We've pre-filled this safari based on your AI-planned itinerary. This is a{' '}
                <strong>separate booking</strong> from your accommodation — you'll get a
                dedicated confirmation for this safari specifically. Feel free to adjust
                anything below.
              </p>
            </div>
          )}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="w-full lg:w-[65%] space-y-6">
              {/* Experience selection */}
              <div className="bg-white shadow-lg border border-emerald-100 overflow-hidden rounded-2xl">
                <div className="bg-[#8d5527] px-5 py-4 md:py-5 flex items-center justify-center gap-2.5">
                  <i className="fa-solid fa-truck-monster text-[#bf885e] text-sm"></i>
                  <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-[0.2em]">
                    Choose Your Experience
                  </h4>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  {experiences.map((exp) => (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => setSelectedId(exp.id)}
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                        selectedId === exp.id
                          ? 'border-[#bf885e] bg-[#f9f3ea]'
                          : 'border-stone-100 hover:border-[#bf885e]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-serif text-lg text-[#8d5527]">{exp.name}</h5>
                        <span className="text-[#bf885e] font-bold text-sm">
                          ${exp.jeepWithEntryPrice}
                          <span className="text-[9px] text-black/40 font-normal"> / {rules.basePaxIncluded} pax</span>
                        </span>
                      </div>
                      <p className="text-[11px] text-black/50 mb-2">{exp.duration}</p>
                      <p className="text-[11px] text-black/60 leading-relaxed">{exp.includes}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Passengers */}
              <div className="bg-white shadow-lg border border-emerald-100 overflow-hidden rounded-2xl">
                <div className="bg-[#8d5527] px-5 py-4 md:py-5 flex items-center justify-center gap-2.5">
                  <i className="fa-solid fa-calendar-days text-[#bf885e] text-sm"></i>
                  <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-[0.2em]">
                    Date & Passengers
                  </h4>
                </div>
                <div className="p-6 md:p-8 grid sm:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#bf885e]">
                      Safari Date
                    </span>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-[#f9f3ea] border border-[#bf885e]/30 rounded-lg px-3 py-2.5 text-sm text-[#4b3427] font-semibold"
                    />
                    {errors.date && <span className="text-[10px] text-red-600">{errors.date}</span>}
                  </label>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#bf885e]">
                      Passengers (max {rules.maxPaxPerJeep} per jeep)
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setPaxCount((p) => Math.max(1, p - 1))}
                        className="w-9 h-9 rounded-full border border-[#8d5527]/20 flex items-center justify-center text-[#8d5527] hover:bg-[#8d5527] hover:text-white transition-colors"
                      >
                        <i className="fa-solid fa-minus text-[10px]"></i>
                      </button>
                      <span className="w-8 text-center text-lg font-bold">{paxCount}</span>
                      <button
                        type="button"
                        onClick={() => setPaxCount((p) => Math.min(rules.maxPaxPerJeep, p + 1))}
                        className="w-9 h-9 rounded-full border border-[#8d5527]/20 flex items-center justify-center text-[#8d5527] hover:bg-[#8d5527] hover:text-white transition-colors"
                      >
                        <i className="fa-solid fa-plus text-[10px]"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {totals.extraPax > 0 && (
                  <div className="mx-6 mb-6 md:mx-8 md:mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg text-[11px] text-amber-800">
                    <i className="fa-solid fa-circle-info mr-1.5"></i>
                    Base price covers {rules.basePaxIncluded} passengers. {totals.extraPax} extra
                    passenger(s) add an estimated ${rules.parkEntryFeeMin}-${rules.parkEntryFeeMax} each
                    for park entry (final amount confirmed at booking).
                  </div>
                )}
              </div>

              {/* Guest Details */}
              <div className="bg-white shadow-lg border border-emerald-100 overflow-hidden rounded-2xl">
                <div className="bg-[#8d5527] px-5 py-4 md:py-5 flex items-center justify-center gap-2.5">
                  <i className="fa-solid fa-user text-[#bf885e] text-sm"></i>
                  <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-[0.2em]">
                    Your Details
                  </h4>
                </div>
                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <label htmlFor="safari-website">Website</label>
                    <input
                      type="text"
                      id="safari-website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className="w-full border border-[#8d5527]/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#bf885e]"
                      />
                      {errors.firstName && <span className="text-[10px] text-red-600">{errors.firstName}</span>}
                    </div>
                    <div>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        className="w-full border border-[#8d5527]/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#bf885e]"
                      />
                      {errors.lastName && <span className="text-[10px] text-red-600">{errors.lastName}</span>}
                    </div>
                    <div>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="w-full border border-[#8d5527]/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#bf885e]"
                      />
                      {errors.email && <span className="text-[10px] text-red-600">{errors.email}</span>}
                    </div>
                    <div>
                      <input
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full border border-[#8d5527]/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#bf885e]"
                      />
                      {errors.telephone && <span className="text-[10px] text-red-600">{errors.telephone}</span>}
                    </div>
                  </div>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Special Requests (optional)"
                    rows={3}
                    className="w-full border border-[#8d5527]/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#bf885e]"
                  />
                  {submitError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-[0.3em] text-[11px] shadow-xl transition-all flex items-center justify-center gap-3 ${
                      isSubmitting
                        ? 'bg-[#8d5527]/50 text-white/70 cursor-not-allowed'
                        : 'bg-[#8d5527] text-white hover:bg-[#bf885e]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-circle-notch fa-spin"></i>
                        Processing...
                      </>
                    ) : (
                      'Confirm Safari Booking'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Summary */}
            <div className="w-full lg:w-[35%]">
              <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-emerald-100 sticky top-24">
                <div className="bg-[#8d5527] p-5 text-center">
                  <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">
                    Safari Summary
                  </h4>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <div className="pb-4 border-b border-emerald-50">
                    <p className="text-[9px] uppercase font-bold text-[#bf885e] tracking-widest mb-1.5">
                      Experience
                    </p>
                    <p className="text-sm font-serif font-medium">{selectedExperience.name}</p>
                    <p className="text-[10px] text-black/50 mt-1">{selectedExperience.duration}</p>
                  </div>
                  <div className="pb-4 border-b border-emerald-50">
                    <p className="text-[9px] uppercase font-bold text-[#bf885e] tracking-widest mb-1.5">
                      Date &amp; Passengers
                    </p>
                    <p className="text-sm font-serif font-medium">{date || 'Not selected'}</p>
                    <p className="text-[10px] text-black/50 mt-1">{paxCount} passenger(s)</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] text-black/70">
                      <span>Jeep + Entry ({rules.basePaxIncluded} pax)</span>
                      <span>${totals.jeepWithEntryPrice.toFixed(2)}</span>
                    </div>
                    {totals.extraPax > 0 && (
                      <div className="flex justify-between text-[11px] text-black/70">
                        <span>Extra Passengers ({totals.extraPax})</span>
                        <span>
                          ${totals.extraPaxFeeMin.toFixed(2)}
                          {totals.extraPaxFeeMin !== totals.extraPaxFeeMax && ` - $${totals.extraPaxFeeMax.toFixed(2)}`}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between text-[11px] text-black/50">
                      <span>Service Charge ({rules.serviceChargePercent}%)</span>
                      <span>
                        ${totals.serviceChargeMin.toFixed(2)}
                        {totals.serviceChargeMin !== totals.serviceChargeMax && ` - $${totals.serviceChargeMax.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-emerald-100 pt-3 mt-2">
                      <p className="text-xs font-bold text-[#8d5527] uppercase tracking-widest">Total</p>
                      <p className="text-lg font-serif font-bold text-[#bf885e]">
                        ${totals.totalMin.toFixed(2)}
                        {totals.totalMin !== totals.totalMax && ` - $${totals.totalMax.toFixed(2)}`}
                      </p>
                    </div>
                    {totals.totalMin !== totals.totalMax && (
                      <p className="text-[9px] text-black/40 italic">
                        Range reflects estimated park entry fees for extra passengers — confirmed at booking.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafariBooking;
