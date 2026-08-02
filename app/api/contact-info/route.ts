import { NextResponse } from "next/server";

export async function GET() {
  const phone = process.env.CONTACT_PHONE || "+94 716 335000";
  const email = process.env.CONTACT_EMAIL || "info@wilpattuwilderness.com";
  const address =
    process.env.CONTACT_ADDRESS || "02Km Distance from Hunuwilagama Gate, Wilpattu";
  const latitude = Number(process.env.CONTACT_LATITUDE ?? 8.3076);
  const longitude = Number(process.env.CONTACT_LONGITUDE ?? 80.148);
  return NextResponse.json({ phone, email, address, latitude, longitude });
}
