import { NextResponse } from "next/server";
import { getNamedPublicImage } from "@/lib/getNamedPublicImage";

const SERVICE_SLUGS = [
  "accommodation",
  "food-beverage",
  "adventure",
  "guest-services",
  "recreation",
  "safety",
];

export async function GET() {
  const images: Record<string, string | null> = {};
  for (const slug of SERVICE_SLUGS) {
    images[slug] = getNamedPublicImage(["images", "services"], slug);
  }
  return NextResponse.json({ images });
}
