// Shared safari booking pricing logic — single source of truth used by
// both the booking form and the emailed confirmation, so they can't
// disagree on the total.

export interface SafariPricingRules {
  parkEntryFeeMin: number;
  parkEntryFeeMax: number;
  maxPaxPerJeep: number;
  basePaxIncluded: number;
  serviceChargePercent: number;
}

export interface SafariExperience {
  id: string;
  name: string;
  duration: string;
  jeepOnlyPrice: number;
  jeepWithEntryPrice: number;
  includes: string;
}

export interface SafariTotals {
  jeepWithEntryPrice: number; // covers the base included pax
  extraPax: number;
  extraPaxFeeMin: number;
  extraPaxFeeMax: number;
  subtotalMin: number;
  subtotalMax: number;
  serviceChargeMin: number;
  serviceChargeMax: number;
  totalMin: number;
  totalMax: number;
}

/**
 * Returns a price RANGE (not a single number) because the tariff sheet
 * itself only gives an estimated range ($30-35) for per-person park entry
 * beyond the base included passengers — we shouldn't imply more precision
 * than the source pricing actually has.
 */
export function calculateSafariTotals(
  experience: SafariExperience,
  paxCount: number,
  rules: SafariPricingRules,
): SafariTotals {
  const extraPax = Math.max(0, paxCount - rules.basePaxIncluded);
  const extraPaxFeeMin = extraPax * rules.parkEntryFeeMin;
  const extraPaxFeeMax = extraPax * rules.parkEntryFeeMax;

  const subtotalMin = experience.jeepWithEntryPrice + extraPaxFeeMin;
  const subtotalMax = experience.jeepWithEntryPrice + extraPaxFeeMax;

  const serviceChargeMin = subtotalMin * (rules.serviceChargePercent / 100);
  const serviceChargeMax = subtotalMax * (rules.serviceChargePercent / 100);

  return {
    jeepWithEntryPrice: experience.jeepWithEntryPrice,
    extraPax,
    extraPaxFeeMin,
    extraPaxFeeMax,
    subtotalMin,
    subtotalMax,
    serviceChargeMin,
    serviceChargeMax,
    totalMin: subtotalMin + serviceChargeMin,
    totalMax: subtotalMax + serviceChargeMax,
  };
}
