import { NextResponse } from "next/server";
import { getPublicFolderImages } from "@/lib/getPublicFolderImages";

export async function GET() {
  const images = getPublicFolderImages("images", "hero");
  return NextResponse.json({ images });
}
