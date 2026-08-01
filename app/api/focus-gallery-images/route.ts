import { NextResponse } from "next/server";
import { getPublicFolderImages } from "@/lib/getPublicFolderImages";

export async function GET() {
  const images = getPublicFolderImages("images", "focus-gallery");
  return NextResponse.json({ images });
}
