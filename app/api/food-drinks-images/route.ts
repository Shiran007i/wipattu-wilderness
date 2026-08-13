import { NextResponse } from "next/server";
import { getNamedPublicImage } from "@/lib/getNamedPublicImage";

const SLUGS = ["sri-lankan-cuisine", "western-cuisine", "beverages"];

export async function GET() {
  const images: Record<string, string | null> = {};
  for (const slug of SLUGS) {
    images[slug] = getNamedPublicImage(["images", "food-drinks"], slug);
  }
  return NextResponse.json({ images });
}
