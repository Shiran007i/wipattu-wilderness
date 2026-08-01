import { NextResponse } from "next/server";
import { getPublicFolderImages } from "@/lib/getPublicFolderImages";

export async function GET() {
  const images = getPublicFolderImages("images", "scrolling-gallery");
  return NextResponse.json({ images });
}
