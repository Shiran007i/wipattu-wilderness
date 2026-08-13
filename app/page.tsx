import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Luxury Safari & Wilderness Camping in Wilpattu National Park",
  description:
    "Book luxury safari and wilderness camping in Wilpattu National Park, Sri Lanka. Explore curated stays, wildlife experiences, dining, and tailored safari adventures at Wilpattu Wilderness.",
  keywords: [
    "Wilpattu Wilderness",
    "Wilpattu National Park Safari",
    "Luxury safari Sri Lanka",
    "Wilderness camping Sri Lanka",
    "Luxury tents Sri Lanka",
    "Wildlife safari Sri Lanka",
    "Nature travel Sri Lanka",
  ],
  alternates: {
    canonical: "/",
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
    title: "Wilpattu Wilderness | Luxury Safari & Wilderness Camping",
    description:
      "Luxury safari and wilderness camping in Wilpattu National Park, Sri Lanka.",
    url: "https://wilpattuwilderness.com/",
    siteName: "Wilpattu Wilderness",
    locale: "en_US",
    type: "website",
    images: [
      {
        url:  "https://www.wilpattuwilderness.com/images/seo/wilpattu-wilderness-og.jpg",
        width: 1200,
        height: 630,
        alt: "Wilpattu Wilderness luxury safari and wilderness camping in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilpattu Wilderness | Luxury Safari & Wilderness Camping",
    description:
      "Luxury safari and wilderness camping in Wilpattu National Park, Sri Lanka.",
    images: [
      "https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&q=80&w=1200",
    ],
  },
};

export default function Home() {
  return <HomePageClient />;
}
