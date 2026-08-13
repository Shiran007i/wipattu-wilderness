import type { Metadata } from "next";
import Blog from "@/components/Blog";
import { getBlogGalleryImages } from "@/lib/getBlogGalleryImages";

export const metadata: Metadata = {
  title: "Wilpattu National Park Guide | History, Wildlife & Safari Tips",
  description:
    "Complete guide to Wilpattu National Park, Sri Lanka's largest national park. Discover its history, leopard population, best time to visit, entry fees, how to get there, and safari tips.",
  keywords: [
    "Wilpattu National Park",
    "Wilpattu safari",
    "Sri Lanka leopard safari",
    "Wilpattu wild camping",
    "Hunuwilagama entrance",
    "Wilpattu entry fees",
    "Sri Lanka national parks",
  ],
  alternates: {
    canonical: "https://www.wilpattuwilderness.com/blog",
  },
  openGraph: {
    title: "Wilpattu National Park Guide | History, Wildlife & Safari Tips",
    description:
      "Everything you need to know about Wilpattu National Park: history, wildlife, best time to visit, entry fees, directions, and safari tips.",
    url: "https://www.wilpattuwilderness.com/blog",
    siteName: "Wilpattu Wilderness",
    images: [
      {
        url:  "https://www.wilpattuwilderness.com/images/seo/wilpattu-wilderness-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Lankan leopard in Wilpattu National Park",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilpattu National Park Guide | History, Wildlife & Safari Tips",
    description:
      "Everything you need to know about Wilpattu National Park: history, wildlife, best time to visit, entry fees, directions, and safari tips.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Wilpattu National Park",
  description:
    "Sri Lanka's largest and oldest national park, established in 1938, known for its natural 'villu' lakes and Sri Lankan leopard population.",
  url: "https://www.wilpattuwilderness.com/blog",
  image:
    "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&q=80&w=1200",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hunuwilagama",
    addressLocality: "Wilpattu",
    postalCode: "50220",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.3076,
    longitude: 80.148,
  },
  touristType: ["Wildlife enthusiasts", "Photographers", "Nature lovers", "Birdwatchers"],
};

export default function BlogPage() {
  const galleryImages = getBlogGalleryImages();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Blog galleryImages={galleryImages} />
    </>
  );
}
