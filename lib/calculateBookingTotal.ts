// Shared booking pricing logic — used by both the room-selection page and
// checkout, so the two screens (and the emailed invoice) can never disagree
// on the total. If a pricing rule ever needs to change, change it here.

export interface PricingRules {
  serviceChargePercent: number;
  vatPercent: number;
  childRatePercent: number;
  maxRooms: number;
}

export type OccupancyKey = "single" | "double" | "triple";

export function occupancyCapacity(occupancy: OccupancyKey): number {
  return occupancy === "single" ? 1 : occupancy === "double" ? 2 : 3;
}

// One physical tent booked by the guest. Each tent is tracked individually
// (not aggregated by count) because two tents under the same meal plan can
// have different occupancy, different adults, and different children
// sharing them — e.g. one Triple (2 adults + 1 child) and one Single
// (the 3rd adult, booked separately).
export interface TentBooking {
  id: string;
  planId: string;
  name: string;
  occupancy: OccupancyKey;
  rate: number; // resolved nightly rate for this plan + occupancy
  singleRate: number; // this plan's single-occupancy rate — basis for child surcharges
  adultsInTent: number;
  childIndices: number[]; // indices into the shared childAges array
}

export interface ChildAgeBreakdown {
  free: number; // 0 - 5.99 years: free, shares parent's bed
  halfRate: number; // 6 - 11.99 years: 50% of adult rate, extra bed
  countedAsAdult: number; // 12+ years: full adult, needs own capacity
}

// Age thresholds come directly from the published tariff sheet's child policy.
export function classifyAge(age: number): "free" | "halfRate" | "adult" {
  if (age < 6) return "free";
  if (age < 12) return "halfRate";
  return "adult";
}

export function classifyChildAges(ages: number[]): ChildAgeBreakdown {
  return {
    free: ages.filter((age) => age < 6).length,
    halfRate: ages.filter((age) => age >= 6 && age < 12).length,
    countedAsAdult: ages.filter((age) => age >= 12).length,
  };
}

export interface BookingTotals {
  roomSubtotal: number;
  childSurcharge: number;
  subtotal: number;
  serviceCharge: number;
  vat: number;
  total: number;
  childBreakdown: ChildAgeBreakdown;
}

export function calculateBookingTotals(
  tents: TentBooking[],
  nights: number,
  childAges: number[],
  rules: PricingRules,
): BookingTotals {
  const roomSubtotal = tents.reduce((acc, tent) => acc + tent.rate * nights, 0);

  let childSurcharge = 0;
  let free = 0;
  let halfRate = 0;
  let countedAsAdult = 0;

  for (const tent of tents) {
    for (const idx of tent.childIndices) {
      const age = childAges[idx];
      if (age === undefined) continue;
      const tier = classifyAge(age);
      if (tier === "free") free++;
      else if (tier === "halfRate") {
        halfRate++;
        // 50% of THIS tent's adult (single-occupancy) rate — matches the
        // "extra bed in the tent they're actually sharing" real-world case.
        childSurcharge += tent.singleRate * (rules.childRatePercent / 100) * nights;
      } else {
        countedAsAdult++;
      }
    }
  }

  const childBreakdown: ChildAgeBreakdown = { free, halfRate, countedAsAdult };
  const subtotal = roomSubtotal + childSurcharge;
  const serviceCharge = subtotal * (rules.serviceChargePercent / 100);
  const vat = subtotal * (rules.vatPercent / 100);
  const total = subtotal + serviceCharge + vat;

  return { roomSubtotal, childSurcharge, subtotal, serviceCharge, vat, total, childBreakdown };
}
