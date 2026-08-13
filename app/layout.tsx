import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeastAnimation from "@/components/BeastAnimation";
import ChatbotWrapper from "@/components/ChatbotWrapper";
import { getNamedPublicImage } from "@/lib/getNamedPublicImage";

// Social share preview image — only included if a real photo has been
// added, so we never show a wrong/mismatched stock photo.
const ogImagePath = getNamedPublicImage(["images", "safari"], "booking-hero");
const ogImageUrl = ogImagePath
  ? `https://wilpattuwilderness.com${ogImagePath}`
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL("https://wilpattuwilderness.com"),
  applicationName: "Wilpattu Wilderness",
  authors: [{ name: "Wilpattu Wilderness" }],
  title: {
    default:
      "Wilpattu Wilderness | Luxury Safari & Wilderness Camping in Sri Lanka",
    template: "%s | Wilpattu Wilderness",
  },
  description:
    "Discover luxury safari and wilderness camping in Wilpattu National Park, Sri Lanka. Explore curated stays, wildlife experiences, dining, and booking options at Wilpattu Wilderness.",
  keywords: [
    "Wilpattu Wilderness",
    "Wilpattu National Park",
    "Luxury Safari Sri Lanka",
    "Wilderness Camping Sri Lanka",
    "Luxury Tents Sri Lanka",
    "Wildlife experiences",
    "Nature tourism Sri Lanka",
    "Safari lodge Sri Lanka",
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
    title:
      "Wilpattu Wilderness | Luxury Safari & Wilderness Camping in Sri Lanka",
    description:
      "Discover luxury safari and wilderness camping in Wilpattu National Park, Sri Lanka.",
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
    title:
      "Wilpattu Wilderness | Luxury Safari & Wilderness Camping in Sri Lanka",
    description:
      "Discover luxury safari and wilderness camping in Wilpattu National Park, Sri Lanka.",
    images: [
      "https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&q=80&w=1200",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
        <BeastAnimation />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatbotWrapper />
      </body>
    </html>
  );
}
