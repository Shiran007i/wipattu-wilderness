import { NextResponse } from "next/server";

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

type BookingAmenity = {
  icon: string;
  label: string;
};

type BookingTermDefinition = {
  code: string;
  description: string;
};

type BookingRateFormula = {
  single: Record<string, number>;
  double: Record<string, number>;
  triple: Record<string, number>;
};

const DEFAULT_FORMULA: BookingRateFormula = {
  single: { bb: 90, hb: 110, fb: 125, ai: 360 },
  double: { bb: 110, hb: 140, fb: 165, ai: 570 },
  triple: { bb: 140, hb: 180, fb: 210, ai: 780 },
};

const DEFAULT_PLANS: BookingPlan[] = [
  {
    id: "bb",
    name: "Bed & Breakfast (BB)",
    nightlyPrice: 90,
    occupancyRates: { single: 90, double: 110, triple: 140 },
  },
  {
    id: "hb",
    name: "Half Board (HB)",
    nightlyPrice: 110,
    occupancyRates: { single: 110, double: 140, triple: 180 },
  },
  {
    id: "fb",
    name: "Full Board (FB)",
    nightlyPrice: 125,
    occupancyRates: { single: 125, double: 165, triple: 210 },
  },
  {
    id: "ai",
    name: "All-Inclusive (AI)*",
    nightlyPrice: 360,
    occupancyRates: { single: 360, double: 570, triple: 780 },
  },
];

const DEFAULT_AMENITIES: BookingAmenity[] = [
  { icon: "fa-house-chimney", label: "32 m2" },
  { icon: "fa-user-group", label: "Max 2 Adults + 1 Child" },
  { icon: "fa-snowflake", label: "Air Conditioned" },
];

const parseJsonArray = <T>(raw: string | undefined, fallback: T): T => {
  if (!raw) return fallback;

  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

const parseJsonObject = <T>(raw: string | undefined, fallback: T): T => {
  if (!raw) return fallback;

  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

const buildPlansFromFormula = (formula: BookingRateFormula): BookingPlan[] => [
  {
    id: "bb",
    name: "Bed & Breakfast (BB)",
    nightlyPrice: formula.single.bb,
    occupancyRates: {
      single: formula.single.bb,
      double: formula.double.bb,
      triple: formula.triple.bb,
    },
  },
  {
    id: "hb",
    name: "Half Board (HB)",
    nightlyPrice: formula.single.hb,
    occupancyRates: {
      single: formula.single.hb,
      double: formula.double.hb,
      triple: formula.triple.hb,
    },
  },
  {
    id: "fb",
    name: "Full Board (FB)",
    nightlyPrice: formula.single.fb,
    occupancyRates: {
      single: formula.single.fb,
      double: formula.double.fb,
      triple: formula.triple.fb,
    },
  },
  {
    id: "ai",
    name: "All-Inclusive (AI)*",
    nightlyPrice: formula.single.ai,
    occupancyRates: {
      single: formula.single.ai,
      double: formula.double.ai,
      triple: formula.triple.ai,
    },
  },
];

export async function GET() {
  const formula = parseJsonObject<BookingRateFormula>(
    process.env.BOOKING_RATE_FORMULA_JSON,
    DEFAULT_FORMULA,
  );

  const plans = parseJsonArray<BookingPlan[]>(
    process.env.BOOKING_PLANS_JSON,
    buildPlansFromFormula(formula),
  );

  const roomConfig = {
    title: process.env.BOOKING_ROOM_TITLE || "Deluxe Chalet",
    image:
      process.env.BOOKING_ROOM_IMAGE ||
      "https://images.unsplash.com/photo-1533142262417-ad51619ff391?auto=format&fit=crop&q=80&w=600",
    amenities: parseJsonArray<BookingAmenity[]>(
      process.env.BOOKING_ROOM_AMENITIES_JSON,
      DEFAULT_AMENITIES,
    ),
  };

  const terms = {
    title: "Meal Plan Definitions",
    definitions: parseJsonArray<BookingTermDefinition[]>(
      process.env.BOOKING_TERMS_JSON,
      [
        {
          code: "BB",
          description: "Overnight stay + Full Breakfast.",
        },
        {
          code: "HB",
          description: "Overnight stay + Full Breakfast + Dinner.",
        },
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
    ),
  };

  return NextResponse.json({
    roomConfig,
    plans,
    terms,
    pricingRules: {
      // 10% Service Charge is explicit in the tariff sheet.
      serviceChargePercent: Number(process.env.BOOKING_SERVICE_CHARGE_PERCENT ?? 10),
      // Government VAT/TDL rate is NOT specified in the tariff sheet — defaults
      // to 0 until the correct rate is set via BOOKING_VAT_PERCENT in Vercel.
      vatPercent: Number(process.env.BOOKING_VAT_PERCENT ?? 0),
      // Children 6-11.99 years are charged 50% of the adult rate per the tariff sheet.
      childRatePercent: Number(process.env.BOOKING_CHILD_RATE_PERCENT ?? 50),
      // Only 3 Deluxe Rooms exist per the tariff sheet.
      maxRooms: Number(process.env.BOOKING_MAX_ROOMS ?? 3),
    },
  });
}
