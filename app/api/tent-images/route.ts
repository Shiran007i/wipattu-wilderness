import { NextResponse } from "next/server";
import { getPublicFolderImages } from "@/lib/getPublicFolderImages";

export async function GET() {
  const images = getPublicFolderImages("images", "tent");
  return NextResponse.json({ images });
}
