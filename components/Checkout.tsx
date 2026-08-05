import React, { useEffect, useState } from "react";
import { SelectedRoom } from "../types";
import {
  calculateBookingTotals,
  classifyChildAges,
  PricingRules,
} from "../lib/calculateBookingTotal";

interface CheckoutProps {
  checkIn: string;
  checkOut: string;
  adults: number;
  childrenCount: number;
  rooms: SelectedRoom[];
  childAges: number[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({
  checkIn,
  checkOut,
  adults,
  childrenCount,
  rooms,
  childAges,
  onBack,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    specialRequests: "",
    website: "", // honeypot — must stay empty; real users never see this field
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [paymentDone, setPaymentDone] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [whatsappAutoOpenFailed, setWhatsappAutoOpenFailed] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState<string | null>(null);

  // Pre-fetch the WhatsApp number as soon as the page loads, so when the
  // guest clicks "Confirm Booking" we can navigate the tab instantly with
  // no visible blank flash while waiting on a fetch.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/whatsapp-number")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.number) {
          setWhatsappNumber(data.number);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0;
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

  const [pricingRules, setPricingRules] = useState<PricingRules>({
    serviceChargePercent: 10,
    vatPercent: 0,
    childRatePercent: 50,
    maxRooms: 3,
  });

  useEffect(() => {
    let cancelled = false;
    fetch("/api/booking-config")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.pricingRules) {
          setPricingRules(data.pricingRules);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const bookingTotals = calculateBookingTotals(rooms, nights, childAges, pricingRules);
  const childBreakdown = classifyChildAges(childAges);
  const total = bookingTotals.total;
  const occupancyLabel = (occupancy: SelectedRoom["occupancy"]) =>
    occupancy === "single"
      ? "1 Guest"
      : occupancy === "double"
        ? "2 Guests"
        : "3 Guests";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.telephone.trim())
      newErrors.telephone = "Telephone is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendBookingEmail = async () => {
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        telephone: formData.telephone,
        specialRequests: formData.specialRequests,
        website: formData.website,
        checkIn,
        checkOut,
        nights,
        adults,
        childrenCount,
        childAges,
        rooms,
        pricing: bookingTotals,
        total,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || "Unable to send booking email right now.",
      );
    }
  };

  // Builds the WhatsApp URL synchronously from data we already have (no
  // fetch needed here — the number is pre-fetched on page load). This lets
  // us call window.open() with the REAL destination directly, so there's
  // never a blank intermediate tab.
  const buildWhatsAppUrl = (number: string) => {
    const roomDetails = rooms
      .map((room, i) => {
        const childInfo =
          room.childIndices.length > 0
            ? ` + Child ${room.childIndices.map((idx) => idx + 1).join(", ")}`
            : "";
        return `• Tent ${i + 1}: ${room.name} (${occupancyLabel(room.occupancy)}) - ${room.adultsInTent} adult(s)${childInfo} ($${room.rate}/night)`;
      })
      .join("\n");

    const capacityNote =
      childrenCount > 0
        ? "Children can share with one adult in the same tent, subject to the selected occupancy."
        : "Children are not included in this booking.";

    const childAgesLine =
      childAges.length > 0
        ? `Child Ages: ${childAges.join(", ")} (Free: ${childBreakdown.free}, 50% rate: ${childBreakdown.halfRate}, Counted as adult: ${childBreakdown.countedAsAdult})`
        : "";

    const message = [
      "New Booking Request - Wilpattu Wilderness website",
      "",
      "Guest Details:",
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.telephone}`,
      "",
      "Stay Details:",
      `Check-in: ${checkIn}`,
      `Check-out: ${checkOut}`,
      `Duration: ${nights} Nights`,
      `Occupancy: ${adults} Adults, ${childrenCount} Children`,
      "Rule: Max 3 guests per tent (adults + children combined).",
      childAgesLine,
      "",
      "Accommodation:",
      roomDetails,
      "",
      capacityNote,
      "",
      "Special Requests:",
      formData.specialRequests || "None",
      "",
      `Room Subtotal: USD ${bookingTotals.roomSubtotal.toFixed(2)}`,
      bookingTotals.childSurcharge > 0
        ? `Child Surcharge (6-11y): USD ${bookingTotals.childSurcharge.toFixed(2)}`
        : "",
      `Service Charge (${pricingRules.serviceChargePercent}%): USD ${bookingTotals.serviceCharge.toFixed(2)}`,
      pricingRules.vatPercent > 0
        ? `VAT/TDL (${pricingRules.vatPercent}%): USD ${bookingTotals.vat.toFixed(2)}`
        : "",
      `Total Stay Price: USD ${total.toFixed(2)}`,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // guard against double-submit (double-click/tap)
    setSubmitError("");

    if (validateForm()) {
      // Open WhatsApp with the REAL url directly and synchronously, right
      // now, before any await — this is what keeps browsers from blocking
      // it as a popup, and since it's a real URL (not blank-then-navigate),
      // there's never a blank intermediate tab. Only possible if the
      // number was already pre-fetched on page load.
      if (whatsappNumber) {
        const url = buildWhatsAppUrl(whatsappNumber);
        window.open(url, "_blank", "noopener,noreferrer");
        setWhatsappUrl(url);
      } else {
        // Pre-fetch hasn't resolved yet (rare) — don't open a blank tab,
        // just let the guest use the manual button once it's ready.
        setWhatsappAutoOpenFailed(true);
      }

      setIsSubmitting(true);
      try {
        await sendBookingEmail();
        setPaymentDone(true);
        if (!whatsappNumber) {
          // Try once more now, purely to prepare the manual button's link
          // (never auto-opens at this point, to avoid a blank/late popup).
          try {
            const res = await fetch("/api/whatsapp-number");
            if (res.ok) {
              const data = await res.json();
              if (data?.number) {
                setWhatsappUrl(buildWhatsAppUrl(data.number));
              }
            }
          } catch {
            // Manual button just won't have a link ready; not critical.
          }
        }
      } catch (error) {
        setSubmitError(
          error instanceof Error ? error.message : "Unable to confirm booking.",
        );
        setIsSubmitting(false);
      }
    }
  };

  if (paymentDone) {
    return (
      <div className="min-h-screen bg-[#f6efe7] flex items-center justify-center p-4">
        <div className="bg-white p-8 md:p-12 shadow-2xl max-w-2xl w-full text-center rounded-2xl border border-emerald-50">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#efe2d2] text-[#bf885e] rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10 shadow-lg">
            <i className="fa-solid fa-check text-4xl md:text-5xl"></i>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#8d5527] mb-4 md:mb-6">
            Booking Confirmed!
          </h2>
          <p className="text-[#065F46] font-light mb-8 md:mb-12 leading-relaxed">
            Ayubowan {formData.firstName}! Your booking request has been sent to
            the team successfully.
          </p>
          {whatsappAutoOpenFailed && whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-emerald-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.3em] hover:bg-emerald-700 shadow-xl transition-all mb-4 md:mb-6"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Send via WhatsApp
            </a>
          )}
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full md:w-auto bg-[#8d5527] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.4em] hover:bg-[#8d5527] shadow-xl transition-all"
          >
            RETURN HOME
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6efe7] text-[#8d5527] pb-20 md:pb-32">
      <section className="relative h-[35vh] md:h-[45vh] w-full flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=2400"
            className="w-full h-full object-cover"
            alt="Billing"
          />
          <div className="absolute inset-0 bg-emerald-950/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center text-white mt-8 md:mt-10">
          <h1 className="text-4xl md:text-8xl font-serif mb-3 md:mb-4 tracking-tight">
            Billing
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-4 text-[9px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-80">
            <span>HOME</span>
            <span className="opacity-40">/</span>
            <span>WILPATTU</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl -mt-16 md:-mt-24 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8 md:gap-12">
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden border border-emerald-100">
              <div className="bg-[#8d5527] px-6 md:px-10 py-5 md:py-6 flex items-center gap-3">
                <i className="fa-regular fa-calendar-check text-white text-lg md:text-xl"></i>
                <h4 className="text-lg md:text-xl font-serif text-white">
                  Booking Details
                </h4>
              </div>
              <div className="p-6 md:p-10">
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 bg-[#efe2d2]/30 p-6 md:p-8 rounded-2xl border border-emerald-50 shadow-inner">
                  <div className="text-center">
                    <p className="text-[9px] md:text-[10px] font-bold text-[#664831] uppercase tracking-widest mb-2 md:mb-3">
                      CHECK-IN
                    </p>
                    <p className="text-xs md:text-[14px] font-bold">
                      {checkIn}
                    </p>
                  </div>
                  <div className="text-center border-l border-emerald-100">
                    <p className="text-[9px] md:text-[10px] font-bold text-[#664831] uppercase tracking-widest mb-2 md:mb-3">
                      CHECK-OUT
                    </p>
                    <p className="text-xs md:text-[14px] font-bold">
                      {checkOut}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4 px-5 md:py-5 md:px-6 bg-[#efe2d2]/50 text-[#664831] rounded-2xl border border-emerald-200 text-sm md:text-base font-medium mb-6">
                  <span>Length of stay</span>
                  <span className="font-bold">{nights} nights</span>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-[#664831] uppercase tracking-widest">
                    Selected Rooms
                  </p>
                  {rooms.map((room, idx) => (
                    <div
                      key={room.id ?? idx}
                      className="flex justify-between items-start text-sm border-b border-emerald-50 pb-3"
                    >
                      <div>
                        <p className="font-bold">
                          Tent {idx + 1}: {room.name}
                        </p>
                        <p className="text-[10px] opacity-60 mt-1">
                          {occupancyLabel(room.occupancy)} · {room.adultsInTent} adult(s)
                          {room.childIndices.length > 0 &&
                            ` + Child ${room.childIndices.map((i) => i + 1).join(", ")}`}
                          {" · "}
                          {nights} nights x ${room.rate.toFixed(2)}/night
                        </p>
                      </div>
                      <p className="font-bold">
                        ${(room.rate * nights).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/95 shadow-2xl rounded-2xl overflow-hidden border border-emerald-100">
              <div className="bg-[#8d5527] px-6 md:px-10 py-6 md:py-8 flex items-center gap-4 shadow-md">
                <i className="fa-solid fa-wallet text-white text-lg md:text-xl"></i>
                <h4 className="text-lg md:text-xl font-serif text-white">
                  Price Summary
                </h4>
              </div>
              <div className="p-6 md:p-10">
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center justify-between text-sm text-black/70">
                    <span>Room Subtotal</span>
                    <span>USD {bookingTotals.roomSubtotal.toFixed(2)}</span>
                  </div>
                  {bookingTotals.childSurcharge > 0 && (
                    <div className="flex items-center justify-between text-sm text-black/70">
                      <span>
                        Child Surcharge, 6-11y ({childBreakdown.halfRate} x {pricingRules.childRatePercent}%)
                      </span>
                      <span>USD {bookingTotals.childSurcharge.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm text-black/70">
                    <span>Service Charge ({pricingRules.serviceChargePercent}%)</span>
                    <span>USD {bookingTotals.serviceCharge.toFixed(2)}</span>
                  </div>
                  {pricingRules.vatPercent > 0 && (
                    <div className="flex items-center justify-between text-sm text-black/70">
                      <span>VAT / TDL ({pricingRules.vatPercent}%)</span>
                      <span>USD {bookingTotals.vat.toFixed(2)}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between border-t border-emerald-100 pt-6">
                  <span className="text-2xl md:text-3xl font-serif">
                    Total Stay:
                  </span>
                  <span className="text-2xl md:text-3xl font-serif font-bold text-[#bf885e]">
                    USD {total.toFixed(2)}
                  </span>
                </div>
                <p className="text-[10px] text-black/40 mt-4 italic">
                  {pricingRules.vatPercent > 0
                    ? "Includes service charge and applicable government taxes."
                    : "Includes service charge. Government VAT/TDL to be confirmed separately."}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden border border-emerald-100">
              <div className="bg-[#8d5527] px-6 md:px-10 py-6 md:py-7 flex items-center gap-4">
                <i className="fa-solid fa-list-check text-white text-lg md:text-xl"></i>
                <h4 className="text-lg md:text-xl font-serif text-white">
                  Personal Information
                </h4>
              </div>
              <div className="p-6 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Honeypot spam trap — display:none so browser autofill/password managers skip it too */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    {[
                      { name: "firstName", label: "First Name", type: "text" },
                      { name: "lastName", label: "Last Name", type: "text" },
                      { name: "email", label: "Email Address", type: "email" },
                      { name: "telephone", label: "Telephone", type: "tel" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="text-[10px] md:text-[11px] font-bold text-[#664831] block mb-3 md:mb-4 uppercase tracking-wider">
                          {field.label}
                        </label>
                        <input
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInputChange}
                          className={`w-full border rounded-xl px-5 py-4 md:px-6 md:py-5 outline-none transition-all shadow-sm text-sm ${
                            errors[field.name]
                              ? "border-red-500 focus:ring-red-500/10"
                              : "border-emerald-100 focus:ring-emerald-500/20 focus:border-emerald-500"
                          }`}
                          type={field.type}
                        />
                        {errors[field.name] && (
                          <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-tighter">
                            {errors[field.name]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="text-[10px] md:text-[11px] font-bold text-[#664831] block mb-3 md:mb-4 uppercase tracking-wider">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full border border-emerald-100 rounded-xl px-5 py-4 md:px-6 md:py-5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all shadow-sm text-sm"
                    />
                  </div>

                  {submitError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {submitError}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      type="button"
                      onClick={onBack}
                      className="w-full sm:w-1/3 border border-[#8d5527]/20 text-[#8d5527] py-5 rounded-2xl font-bold uppercase tracking-[0.3em] hover:bg-[#efe2d2] transition-all"
                    >
                      Go Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full sm:w-2/3 py-5 rounded-2xl font-bold uppercase tracking-[0.4em] shadow-xl transition-all flex items-center justify-center gap-4 ${
                        isSubmitting
                          ? "bg-[#8d5527]/50 text-white/70 cursor-not-allowed"
                          : "bg-[#8d5527] text-white hover:bg-[#bf885e]"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fa-solid fa-circle-notch fa-spin"></i>
                          Processing...
                        </>
                      ) : (
                        "Confirm Booking"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
