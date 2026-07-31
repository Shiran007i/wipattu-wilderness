import { NextResponse } from "next/server";

export async function GET() {
  const number = process.env.WHATSAPP_NUMBER;

  if (!number) {
    return NextResponse.json(
      { message: "WhatsApp number is not configured." },
      { status: 500 },
    );
  }

  return NextResponse.json({ number });
}
