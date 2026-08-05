import { NextResponse } from "next/server";

export interface SafariExperience {
  id: string;
  name: string;
  duration: string;
  jeepOnlyPrice: number;
  jeepWithEntryPrice: number;
  includes: string;
}

const DEFAULT_EXPERIENCES: SafariExperience[] = [
  {
    id: "morning",
    name: "Morning Safari",
    duration: "05:30 AM - 10:00 AM",
    jeepOnlyPrice: 60,
    jeepWithEntryPrice: 150,
    includes: "Naturalist, Breakfast Packet, Cool box with water and Soft Drinks.",
  },
  {
    id: "afternoon",
    name: "Afternoon Safari",
    duration: "02:00 PM - 06:00 PM",
    jeepOnlyPrice: 60,
    jeepWithEntryPrice: 150,
    includes: "Naturalist, Evening Tea with Cookies, Cool box with water and Soft Drinks.",
  },
  {
    id: "fullday",
    name: "Full-Day Safari",
    duration: "05:30 AM - 06:00 PM",
    jeepOnlyPrice: 110,
    jeepWithEntryPrice: 190,
    includes:
      "Naturalist, Breakfast Packet, Lunch, Evening Tea with Cookies, Cool box with water and Soft Drinks.",
  },
];

function parseExperiences(raw: string | undefined): SafariExperience[] {
  if (!raw) return DEFAULT_EXPERIENCES;
  try {
    return JSON.parse(raw) as SafariExperience[];
  } catch {
    return DEFAULT_EXPERIENCES;
  }
}

export async function GET() {
  const experiences = parseExperiences(process.env.SAFARI_EXPERIENCES_JSON);

  return NextResponse.json({
    experiences,
    pricingRules: {
      parkEntryFeeMin: Number(process.env.SAFARI_PARK_ENTRY_FEE_MIN ?? 30),
      parkEntryFeeMax: Number(process.env.SAFARI_PARK_ENTRY_FEE_MAX ?? 35),
      maxPaxPerJeep: Number(process.env.SAFARI_MAX_PAX_PER_JEEP ?? 6),
      basePaxIncluded: Number(process.env.SAFARI_BASE_PAX_INCLUDED ?? 2),
      serviceChargePercent: Number(process.env.SAFARI_SERVICE_CHARGE_PERCENT ?? 10),
    },
  });
}
