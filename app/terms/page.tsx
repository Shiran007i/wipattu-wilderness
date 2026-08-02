import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Wilpattu Wilderness",
  description:
    "Terms and conditions for bookings and engagement with Wilpattu Wilderness.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-[#4b3427]">
      <div className="rounded-2xl border border-[#bf885e]/20 bg-[#f8f1e8] p-8 shadow-sm sm:p-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#bf885e]">
          Terms & Conditions
        </p>
        <h1 className="mb-6 text-4xl font-serif text-black sm:text-5xl">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-[15px] leading-8 text-black/75">
          <p>
            By booking with Wilpattu Wilderness, you agree to provide accurate
            details, follow the property and safari guidelines, and cooperate
            with our team during your stay.
          </p>
          <p>
            Rates, availability, and package details are subject to change
            without notice and may depend on season, occupancy, and booking
            confirmation.
          </p>
          <p>
            Any bookings made through the website are considered final once
            confirmed by our team. Cancellation and refund terms will be
            outlined in the relevant reservation communication.
          </p>
          <p>
            Wilpattu Wilderness reserves the right to refuse or cancel a booking
            if the information supplied is inaccurate, misleading, or
            inconsistent with our policies.
          </p>
        </div>
      </div>
    </section>
  );
}
