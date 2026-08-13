import { NextResponse } from "next/server";
import { getNamedPublicImage } from "@/lib/getNamedPublicImage";
import { getPublicFolderImages } from "@/lib/getPublicFolderImages";

export async function GET() {
  const mainImage = getNamedPublicImage(["images", "safari"], "booking-hero");
  const allImages = getPublicFolderImages("images", "safari");
  // The gallery pool excludes the reserved booking-hero file so it isn't
  // duplicated in both the main hero slot and the general gallery.
  const gallery = allImages.filter((img) => !img.includes("/booking-hero."));

  return NextResponse.json({ mainImage, gallery });
}
