import type { Metadata } from "next";
import { Suspense } from "react";
import SafariBooking from "@/components/SafariBooking";

export const metadata: Metadata = {
  title: "Book a Safari | Wilpattu Wilderness Camping",
  description:
    "Book a private jeep safari at Wilpattu National Park. Morning, afternoon, and full-day options with a naturalist guide, park entry, and refreshments included.",
  alternates: {
    canonical: "https://www.wilpattuwilderness.com/safari-booking",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Book a Safari | Wilpattu Wilderness Camping",
    description:
      "Book a private jeep safari at Wilpattu National Park — morning, afternoon, or full-day.",
    url: "https://www.wilpattuwilderness.com/safari-booking",
    siteName: "Wilpattu Wilderness",
    type: "website",
  },
};

export default function SafariBookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f6efe7]" />}>
      <SafariBooking />
    </Suspense>
  );
}
