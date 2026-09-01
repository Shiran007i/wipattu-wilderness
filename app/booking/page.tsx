import type { Metadata } from "next";
import BookingPageClient from "@/components/BookingPageClient";

export const metadata: Metadata = {
  title: "Book Your Stay | Wilpattu Wilderness Camping",
  description:
    "Book your deluxe chalet at Wilpattu Wilderness Camping, 2km from Hunuwilagama Gate. Choose Bed & Breakfast, Half Board, Full Board, or All-Inclusive plans with single, double, or triple occupancy.",
  alternates: {
    canonical: "https://www.wilpattuwilderness.com/booking",
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
    title: "Book Your Stay | Wilpattu Wilderness Camping",
    description:
      "Book your deluxe chalet at Wilpattu Wilderness Camping, 2km from Hunuwilagama Gate.",
    url: "https://www.wilpattuwilderness.com/booking",
    siteName: "Wilpattu Wilderness",
    type: "website",
  },
};

export default function BookingPage() {
  return <BookingPageClient />;
}
