import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeastAnimation from "@/components/BeastAnimation";
import ChatbotWrapper from "@/components/ChatbotWrapper";

export const metadata: Metadata = {
  title: "Wilpattu Wilderness | Luxury Safari & Wilderness",
  description:
    "Experience the ultimate luxury safari and wilderness at Wilpattu National Park, Sri Lanka.",
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
