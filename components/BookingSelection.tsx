import React, { useState, useMemo, useEffect } from "react";
import AvailabilityBar from "./AvailabilityBar";
import { SelectedRoom } from "../types";
import {
  calculateBookingTotals,
  classifyAge,
  occupancyCapacity,
  OccupancyKey,
  PricingRules,
  TentBooking,
} from "../lib/calculateBookingTotal";

interface BookingSelectionProps {
  checkIn: string;
  checkOut: string;
  adults: number;
  childrenCount: number;
  onUpdateParams: (
    checkIn: string,
    checkOut: string,
    adults: number,
    children: number,
  ) => void;
  onProceed: (rooms: SelectedRoom[], childAges: number[]) => void;
}

type BookingPlan = {
  id: string;
  name: string;
  nightlyPrice: number;
  occupancyRates: {
    single: number;
    double: number;
    triple: number;
  };
};

type BookingRoomConfig = {
  title: string;
  image: string;
  amenities: { icon: string; label: string }[];
};

type BookingTerms = {
  title: string;
  definitions: {
    code: string;
    description: string;
  }[];
};

const OCCUPANCY_LABELS: Record<OccupancyKey, string> = {
  single: "Single (1 guest)",
  double: "Double (2 guests)",
  triple: "Triple (3 guests)",
};

let tentIdCounter = 0;
const nextTentId = () => `tent-${Date.now()}-${tentIdCounter++}`;

const BookingSelection: React.FC<BookingSelectionProps> = ({
  checkIn,
  checkOut,
  adults,
  childrenCount,
  onUpdateParams,
  onProceed,
}) => {
  const [plans, setPlans] = useState<BookingPlan[]>([]);
  const [roomConfig, setRoomConfig] = useState<BookingRoomConfig>({
    title: "Deluxe Chalet",
    image:
      "https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=600",
    amenities: [
      { icon: "fa-house-chimney", label: "Deluxe chalet accommodation" },
      { icon: "fa-user-group", label: "Single / Double / Triple occupancy" },
      { icon: "fa-snowflake", label: "Air conditioned comfort" },
    ],
  });
  const [terms, setTerms] = useState<BookingTerms>({
    title: "Meal Plan Definitions",
    definitions: [
      { code: "BB", description: "Overnight stay + Full Breakfast." },
      { code: "HB", description: "Overnight stay + Full Breakfast + Dinner." },
      {
        code: "FB",
        description:
          "Overnight stay + Full Breakfast + Lunch (or Picnic Box for Safari) + Dinner.",
      },
      {
        code: "AI",
        description:
          "Overnight stay + All Meals + Selected Beverages + 1 Daily Half-Day Safari Jeep.",
      },
    ],
  });
  const [pricingRules, setPricingRules] = useState<PricingRules>({
    serviceChargePercent: 10,
    vatPercent: 0,
    childRatePercent: 50,
    maxRooms: 3,
  });
  const [childAges, setChildAges] = useState<number[]>([]);

  // Room photo(s) for the reference card — pulled from /public/images/tent,
  // auto-rotating if more than one is present.
  const [tentImages, setTentImages] = useState<string[]>([]);
  const [tentImageIndex, setTentImageIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/tent-images")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.images?.length > 0) {
          setTentImages(data.images);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (tentImages.length <= 1) return;
    const timer = setInterval(() => {
      setTentImageIndex((prev) => (prev + 1) % tentImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [tentImages.length]);

  // Each individual tent the guest has added, with its own occupancy,
  // adults, and specific children assigned to share it.
  const [tents, setTents] = useState<TentBooking[]>([]);

  // Draft form for the tent currently being configured before "Add Tent".
  const [draftPlanId, setDraftPlanId] = useState<string>("");
  const [draftOccupancy, setDraftOccupancy] = useState<OccupancyKey>("single");
  const [draftAdults, setDraftAdults] = useState(1);
  const [draftChildIndices, setDraftChildIndices] = useState<number[]>([]);

  // Keep the childAges array in sync with the childrenCount selected on the
  // availability bar — preserve existing ages, default new ones to 8.
  useEffect(() => {
    setChildAges((prev) => {
      const next = prev.slice(0, childrenCount);
      while (next.length < childrenCount) next.push(8);
      return next;
    });
  }, [childrenCount]);

  // Reset the whole tent plan if the guest changes party size — old
  // per-tent assignments won't necessarily make sense anymore.
  useEffect(() => {
    setTents([]);
  }, [adults, childrenCount]);

  useEffect(() => {
    const loadBookingConfig = async () => {
      const response = await fetch("/api/booking-config");
      const data = await response.json();
      setRoomConfig(data.roomConfig);
      setTerms(data.terms ?? terms);
      setPlans(data.plans);
      if (data.plans?.length > 0) {
        setDraftPlanId(data.plans[0].id);
      }
      if (data.pricingRules) {
        setPricingRules(data.pricingRules);
      }
    };

    loadBookingConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChildAgeChange = (index: number, age: number) => {
    setChildAges((prev) => {
      const next = [...prev];
      next[index] = Math.max(0, Math.min(17, age));
      return next;
    });
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return 1;
    const utc1 = Date.UTC(
      start.getFullYear(),
      start.getMonth(),
      start.getDate(),
    );
    const utc2 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
    const n = Math.ceil((utc2 - utc1) / (1000 * 60 * 60 * 24));
    return n > 0 ? n : 1;
  };

  const nights = calculateNights();

  // --- Allocation bookkeeping: who's already assigned to a tent, who's left ---
  const assignedAdults = tents.reduce((acc, t) => acc + t.adultsInTent, 0);
  const assignedChildIndexSet = new Set(tents.flatMap((t) => t.childIndices));
  const unassignedChildIndices = childAges
    .map((_, idx) => idx)
    .filter((idx) => !assignedChildIndexSet.has(idx));
  const remainingAdults = adults - assignedAdults;

  // Every tent physically fits a flat max of 3 occupants (adults + children
  // of any age), independent of which rate tier is chosen.
  const ABSOLUTE_TENT_CAPACITY = 3;
  // The chosen occupancy tier (single/double/triple) only needs to fit the
  // PAYING slots: adults, plus any child aged 12+ ("counted as adult" per
  // the tariff sheet). Children under 12 are extras — a free child under 6
  // can join a Single tent without upgrading it to Double, and a 6-11 year
  // old just adds a 50% surcharge without needing a bigger occupancy tier.
  const draftCapacity = occupancyCapacity(draftOccupancy);
  const draftPayingChildCount = draftChildIndices.filter(
    (idx) => classifyAge(childAges[idx]) === "adult",
  ).length;
  const draftPayingSlotsUsed = draftAdults + draftPayingChildCount;
  const draftTotalHeadcount = draftAdults + draftChildIndices.length;

  const maxDraftAdults = Math.max(
    0,
    Math.min(
      remainingAdults,
      draftCapacity - draftPayingChildCount,
      ABSOLUTE_TENT_CAPACITY - draftChildIndices.length,
    ),
  );

  const canAddTent =
    draftPlanId !== "" &&
    draftTotalHeadcount > 0 &&
    draftTotalHeadcount <= ABSOLUTE_TENT_CAPACITY &&
    draftPayingSlotsUsed <= draftCapacity &&
    draftAdults <= remainingAdults &&
    tents.length < pricingRules.maxRooms;

  // Keep the draft's adult count within whatever's left / still fits.
  useEffect(() => {
    setDraftAdults((prev) => Math.min(prev, maxDraftAdults));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftOccupancy, draftChildIndices.join(","), remainingAdults]);

  const toggleDraftChild = (idx: number) => {
    setDraftChildIndices((prev) => {
      if (prev.includes(idx)) return prev.filter((i) => i !== idx);
      // Absolute physical cap: max 3 people in the tent, regardless of age.
      if (draftAdults + prev.length + 1 > ABSOLUTE_TENT_CAPACITY) return prev;
      // If this child is 12+, they take a PAYING slot bounded by the chosen tier.
      const isPayingSlot = classifyAge(childAges[idx]) === "adult";
      if (isPayingSlot) {
        const currentPayingChildren = prev.filter(
          (i) => classifyAge(childAges[i]) === "adult",
        ).length;
        if (draftAdults + currentPayingChildren + 1 > draftCapacity) return prev;
      }
      return [...prev, idx];
    });
  };

  const handleAddTent = () => {
    const plan = plans.find((p) => p.id === draftPlanId);
    if (!plan || !canAddTent) return;
    const rate = plan.occupancyRates[draftOccupancy] ?? plan.nightlyPrice;
    const newTent: TentBooking = {
      id: nextTentId(),
      planId: plan.id,
      name: plan.name,
      occupancy: draftOccupancy,
      rate,
      singleRate: plan.occupancyRates.single,
      adultsInTent: draftAdults,
      childIndices: draftChildIndices,
    };
    setTents((prev) => [...prev, newTent]);
    setDraftAdults(0);
    setDraftChildIndices([]);
  };

  const handleRemoveTent = (id: string) => {
    setTents((prev) => prev.filter((t) => t.id !== id));
  };

  const bookingTotals = useMemo(
    () => calculateBookingTotals(tents, nights, childAges, pricingRules),
    [tents, nights, childAges, pricingRules],
  );
  const totalStayPrice = bookingTotals.total;

  const totalPeople = adults + childrenCount;
  const isFullyAllocated =
    tents.length > 0 && remainingAdults === 0 && unassignedChildIndices.length === 0;
  const isWithinRoomLimit = tents.length <= pricingRules.maxRooms;

  const rateRows = [
    { label: "Single", values: plans.map((plan) => plan.occupancyRates.single) },
    { label: "Double", values: plans.map((plan) => plan.occupancyRates.double) },
    { label: "Triple", values: plans.map((plan) => plan.occupancyRates.triple) },
  ];

  const handleProceedClick = () => {
    if (!isFullyAllocated) return;
    onProceed(tents, childAges);
  };

  return (
    <div className="min-h-screen bg-[#f6efe7] text-[#8d5527]">
      <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&q=80&w=2400"
            className="w-full h-full object-cover"
            alt="Safari"
          />
          <div className="absolute inset-0 bg-emerald-900/40"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center text-white mt-8 md:mt-10">
          <h1 className="text-4xl md:text-7xl font-serif mb-3 md:mb-4 drop-shadow-lg">
            Select Package
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-80">
            <span>HOME</span>
            <span className="opacity-40">/</span>
            <span className="text-[#bf885e]">WILPATTU</span>
          </div>
        </div>
      </section>

      <div className="relative z-20">
        <AvailabilityBar
          initialCheckIn={checkIn}
          initialCheckOut={checkOut}
          initialAdults={adults}
          initialChildren={childrenCount}
          onCheck={onUpdateParams}
        />
      </div>

      <div className="bg-[#8d5527] text-white py-3 md:py-4 border-y border-white/10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[9px] md:text-[11px] font-bold tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-circle-info text-[#bf885e]"></i>
            <span>Max 3 Guests per Tent</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-child text-[#bf885e]"></i>
            <span>Children under 6 stay free</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-house-chimney text-[#bf885e]"></i>
            <span>Only {pricingRules.maxRooms} Tents Available</span>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mb-6 md:mb-8 p-4 md:p-6 bg-white border border-emerald-100 rounded-xl shadow-sm">
            <h4 className="text-xs md:text-sm font-bold text-[#8d5527] uppercase tracking-wider mb-1">
              Party to Assign
            </h4>
            <p className="text-[10px] md:text-xs text-black/50">
              {adults} adult(s) and {childrenCount} child(ren) total. Build one tent
              at a time below, assigning who shares each tent — max 3 guests per
              tent, {pricingRules.maxRooms} tents available.
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-[11px] font-bold">
              <span className={remainingAdults === 0 ? "text-emerald-600" : "text-[#bf885e]"}>
                Adults remaining to assign: {remainingAdults}
              </span>
              <span className={unassignedChildIndices.length === 0 ? "text-emerald-600" : "text-[#bf885e]"}>
                Children remaining to assign: {unassignedChildIndices.length}
              </span>
            </div>
          </div>

          {childrenCount > 0 && (
            <div className="mb-6 md:mb-8 p-5 md:p-6 bg-white border border-emerald-100 rounded-xl shadow-sm">
              <h4 className="text-xs md:text-sm font-bold text-[#8d5527] uppercase tracking-wider mb-1">
                Children&apos;s Ages
              </h4>
              <p className="text-[10px] md:text-xs text-black/50 mb-4">
                Pricing follows the child policy: 0–5 free (shares the tent at no
                charge), 6–11 charged at {pricingRules.childRatePercent}% of the
                adult rate, 12+ counted as a full adult.
              </p>
              <div className="flex flex-wrap gap-4">
                {childAges.map((age, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <label className="text-[9px] font-bold text-[#bf885e] uppercase tracking-widest">
                      Child {idx + 1}
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={17}
                      value={age}
                      onChange={(e) =>
                        handleChildAgeChange(idx, parseInt(e.target.value) || 0)
                      }
                      className="w-16 text-center border border-[#8d5527]/20 rounded-lg px-2 py-2 text-sm font-bold text-[#8d5527] focus:outline-none focus:border-[#bf885e]"
                    />
                    <span className="text-[9px] text-black/40">years</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="w-full lg:w-[70%] space-y-6 md:space-y-8">
              {/* Rate reference card */}
              <div className="bg-white shadow-sm border border-emerald-100 overflow-hidden rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif mb-4">{roomConfig.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="relative aspect-16/10 md:aspect-video mb-6 overflow-hidden rounded-lg shadow-sm">
                      {(tentImages.length > 0 ? tentImages : [roomConfig.image]).map(
                        (src, idx) => (
                          <img
                            key={src + idx}
                            src={src}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                              idx === tentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                            alt="Room"
                            referrerPolicy="no-referrer"
                          />
                        ),
                      )}
                      {tentImages.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {tentImages.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setTentImageIndex(idx)}
                              aria-label={`Show photo ${idx + 1}`}
                              className={`h-1.5 rounded-full transition-all ${
                                idx === tentImageIndex ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <ul className="flex flex-wrap gap-4 text-[10px] md:text-[11px] text-[#8d5527]/70 font-medium">
                      {roomConfig.amenities.map((amenity, index) => (
                        <li key={`${amenity.label}-${index}`} className="flex items-center gap-2">
                          <i className={`fa-solid ${amenity.icon} text-emerald-500`}></i>
                          <span>{amenity.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] uppercase font-bold text-[#bf885e] tracking-widest mb-3">
                      Rate Grid (per night)
                    </p>
                    <div className="overflow-hidden rounded-xl border border-[#bf885e]/20">
                      <div className="grid grid-cols-5 bg-[#8d5527] text-white text-[9px] font-bold uppercase tracking-wider">
                        <div className="p-2.5 border-r border-white/10">Occ.</div>
                        {plans.map((p) => (
                          <div key={p.id} className="p-2.5 border-r border-white/10 last:border-r-0">
                            {p.id.toUpperCase()}
                          </div>
                        ))}
                      </div>
                      {rateRows.map((row) => (
                        <div key={row.label} className="grid grid-cols-5 bg-[#f9f3ea] text-[#4b3427] text-[10px] font-semibold">
                          <div className="p-2.5 border-t border-[#bf885e]/15 border-r">{row.label}</div>
                          {row.values.map((v, i) => (
                            <div key={i} className="p-2.5 border-t border-[#bf885e]/15 border-r last:border-r-0">
                              ${v}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 space-y-2 text-[11px] leading-6 text-black/75">
                      {terms.definitions.map((item) => (
                        <p key={item.code}>
                          <span className="font-bold text-[#4b3427]">{item.code}:</span>{" "}
                          {item.description}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Add Tent builder */}
              {remainingAdults + unassignedChildIndices.length > 0 &&
                tents.length < pricingRules.maxRooms && (
                  <div className="bg-white shadow-sm border border-emerald-100 overflow-hidden rounded-xl p-6 md:p-8">
                    <h3 className="text-lg font-serif mb-1 flex items-center gap-2">
                      <i className="fa-solid fa-tent text-[#bf885e]"></i>
                      Add a Tent
                    </h3>
                    <p className="text-[10px] md:text-xs text-black/50 mb-5">
                      Choose the meal plan and occupancy for this tent, how many
                      adults are staying in it, then tick which children (if any)
                      share it.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-5">
                      <label className="flex flex-col gap-1.5">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#bf885e]">
                          Meal Plan
                        </span>
                        <select
                          value={draftPlanId}
                          onChange={(e) => setDraftPlanId(e.target.value)}
                          className="bg-[#f9f3ea] border border-[#bf885e]/30 rounded-lg px-3 py-2.5 text-sm text-[#4b3427] font-semibold"
                        >
                          {plans.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#bf885e]">
                          Occupancy
                        </span>
                        <select
                          value={draftOccupancy}
                          onChange={(e) => setDraftOccupancy(e.target.value as OccupancyKey)}
                          className="bg-[#f9f3ea] border border-[#bf885e]/30 rounded-lg px-3 py-2.5 text-sm text-[#4b3427] font-semibold"
                        >
                          <option value="single">{OCCUPANCY_LABELS.single}</option>
                          <option value="double">{OCCUPANCY_LABELS.double}</option>
                          <option value="triple">{OCCUPANCY_LABELS.triple}</option>
                        </select>
                      </label>
                    </div>

                    <div className="mb-5">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#bf885e] block mb-1.5">
                        Adults in this Tent
                      </span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setDraftAdults((v) => Math.max(0, v - 1))}
                          className="w-8 h-8 rounded-full border border-[#8d5527]/20 flex items-center justify-center text-[#8d5527] hover:bg-[#8d5527] hover:text-white transition-colors"
                        >
                          <i className="fa-solid fa-minus text-[10px]"></i>
                        </button>
                        <span className="w-8 text-center text-lg font-bold">{draftAdults}</span>
                        <button
                          type="button"
                          onClick={() => setDraftAdults((v) => Math.min(maxDraftAdults, v + 1))}
                          className="w-8 h-8 rounded-full border border-[#8d5527]/20 flex items-center justify-center text-[#8d5527] hover:bg-[#8d5527] hover:text-white transition-colors"
                        >
                          <i className="fa-solid fa-plus text-[10px]"></i>
                        </button>
                        <span className="text-[10px] text-black/40">
                          ({remainingAdults} adult(s) still unassigned)
                        </span>
                      </div>
                    </div>

                    {unassignedChildIndices.length > 0 && (
                      <div className="mb-5">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#bf885e] block mb-2">
                          Children Sharing This Tent
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {unassignedChildIndices.map((idx) => {
                            const selected = draftChildIndices.includes(idx);
                            const tierLabel =
                              classifyAge(childAges[idx]) === "free"
                                ? "Free"
                                : classifyAge(childAges[idx]) === "halfRate"
                                  ? `${pricingRules.childRatePercent}%`
                                  : "Adult rate";
                            return (
                              <button
                                type="button"
                                key={idx}
                                onClick={() => toggleDraftChild(idx)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-full border text-[11px] font-bold transition-colors ${
                                  selected
                                    ? "bg-[#8d5527] text-white border-[#8d5527]"
                                    : "bg-[#f9f3ea] text-[#4b3427] border-[#bf885e]/30 hover:border-[#bf885e]"
                                }`}
                              >
                                <i className={`fa-solid ${selected ? "fa-check-circle" : "fa-child"}`}></i>
                                Child {idx + 1} ({childAges[idx]}y · {tierLabel})
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <p className="text-[10px] text-black/50 mb-4">
                      Occupants: {draftTotalHeadcount} / {ABSOLUTE_TENT_CAPACITY} (tent
                      max) · Paying slots: {draftPayingSlotsUsed} / {draftCapacity} (
                      {OCCUPANCY_LABELS[draftOccupancy].split(" ")[0]} rate)
                      {draftTotalHeadcount > ABSOLUTE_TENT_CAPACITY && (
                        <span className="text-red-600 font-bold"> — over tent capacity</span>
                      )}
                      {draftPayingSlotsUsed > draftCapacity && (
                        <span className="text-red-600 font-bold">
                          {" "}
                          — needs a bigger occupancy tier
                        </span>
                      )}
                    </p>

                    <button
                      type="button"
                      onClick={handleAddTent}
                      disabled={!canAddTent}
                      className={`w-full py-3.5 text-[11px] font-bold uppercase tracking-[0.3em] rounded-xl transition-all ${
                        canAddTent
                          ? "bg-[#bf885e] text-white hover:bg-[#4b3427]"
                          : "bg-stone-100 text-stone-400 cursor-not-allowed"
                      }`}
                    >
                      <i className="fa-solid fa-plus mr-2"></i>
                      Add This Tent
                    </button>
                  </div>
                )}

              {/* List of added tents */}
              {tents.length > 0 && (
                <div className="space-y-4">
                  {tents.map((tent, i) => (
                    <div
                      key={tent.id}
                      className="bg-white shadow-sm border border-emerald-100 rounded-xl p-5 md:p-6 flex items-start justify-between gap-4"
                    >
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-[#bf885e] mb-1">
                          Tent {i + 1}
                        </p>
                        <h4 className="text-sm md:text-base font-bold text-[#8d5527]">
                          {tent.name} · {OCCUPANCY_LABELS[tent.occupancy]}
                        </h4>
                        <p className="text-[11px] text-black/60 mt-1">
                          {tent.adultsInTent} adult(s)
                          {tent.childIndices.length > 0 &&
                            ` + Child ${tent.childIndices.map((idx) => idx + 1).join(", ")}`}
                        </p>
                        <p className="text-[11px] font-bold text-[#bf885e] mt-1">
                          USD {tent.rate} / night x {nights} N = USD {(tent.rate * nights).toFixed(2)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveTent(tent.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        aria-label="Remove tent"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sticky Summary */}
            <div className="w-full lg:w-[30%]">
              <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-emerald-100 sticky top-24">
                <div className="bg-[#8d5527] p-5 text-center">
                  <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">
                    Reservation Summary
                  </h4>
                </div>
                <div className="p-6 md:p-8">
                  <div className="space-y-6 mb-8">
                    <div className="pb-4 border-b border-emerald-50">
                      <p className="text-[9px] md:text-[10px] uppercase font-bold text-[#bf885e] tracking-widest mb-1.5">
                        Stay Period
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm md:text-base font-serif font-medium">
                          {checkIn} — {checkOut}
                        </p>
                        <span className="text-[10px] bg-[#efe2d2] text-[#bf885e] px-2 py-0.5 rounded-full font-bold">
                          {nights} N
                        </span>
                      </div>
                    </div>
                    <div className="pb-4 border-b border-emerald-50">
                      <p className="text-[9px] md:text-[10px] uppercase font-bold text-[#bf885e] tracking-widest mb-1.5">
                        Party
                      </p>
                      <p className="text-sm md:text-base font-serif font-medium">
                        {adults} Adult(s) / {childrenCount} Child(ren) · {totalPeople} total
                      </p>
                      <p className="text-[10px] text-black/60 mt-1">
                        {tents.length} tent(s) added · max {pricingRules.maxRooms}
                      </p>
                      {!isFullyAllocated && (
                        <p className="text-[10px] text-red-600 font-bold mt-1">
                          {remainingAdults > 0 && `${remainingAdults} adult(s) not yet assigned. `}
                          {unassignedChildIndices.length > 0 &&
                            `${unassignedChildIndices.length} child(ren) not yet assigned.`}
                        </p>
                      )}
                    </div>
                    <div className="pt-2">
                      <p className="text-[9px] md:text-[10px] uppercase font-bold text-[#bf885e] tracking-widest mb-2">
                        Price Breakdown
                      </p>
                      <div className="space-y-2">
                        {tents.map((tent, i) => (
                          <div key={tent.id} className="flex justify-between text-[11px] text-black/70">
                            <span>
                              Tent {i + 1}: {tent.name} ({tent.occupancy}) x {nights}N
                            </span>
                            <span>${(tent.rate * nights).toFixed(2)}</span>
                          </div>
                        ))}
                        {bookingTotals.childBreakdown.halfRate > 0 && (
                          <div className="flex justify-between text-[11px] text-black/70">
                            <span>
                              {bookingTotals.childBreakdown.halfRate} Child(ren) 6-11y @ {pricingRules.childRatePercent}% x {nights}N
                            </span>
                            <span>${bookingTotals.childSurcharge.toFixed(2)}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-[11px] text-black/50 border-t border-emerald-50 pt-2 mt-1">
                          <span>Subtotal</span>
                          <span>${bookingTotals.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-[11px] text-black/50">
                          <span>Service Charge ({pricingRules.serviceChargePercent}%)</span>
                          <span>${bookingTotals.serviceCharge.toFixed(2)}</span>
                        </div>
                        {pricingRules.vatPercent > 0 && (
                          <div className="flex justify-between text-[11px] text-black/50">
                            <span>VAT / TDL ({pricingRules.vatPercent}%)</span>
                            <span>${bookingTotals.vat.toFixed(2)}</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between border-t border-emerald-100 pt-3 mt-2">
                          <p className="text-xs font-bold text-[#8d5527] uppercase tracking-widest">
                            Total Stay
                          </p>
                          <p className="text-xl font-serif font-bold text-[#bf885e]">
                            USD {totalStayPrice.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleProceedClick}
                    disabled={!isFullyAllocated || !isWithinRoomLimit}
                    className={`w-full py-5 text-[11px] font-bold uppercase tracking-[0.3em] rounded-xl shadow-xl transition-all duration-300 ${
                      isFullyAllocated && isWithinRoomLimit
                        ? "bg-[#bf885e] text-white hover:bg-[#4b3427] transform hover:-translate-y-1 active:scale-95"
                        : "bg-stone-100 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    PROCEED TO BILLING
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingSelection;
