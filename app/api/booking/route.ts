import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const provider =
      process.env.BOOKING_MAILER_PROVIDER ||
      process.env.BOOKING_EMAIL_PROVIDER ||
      "gmail";
    const host =
      process.env.BOOKING_MAILER_HOST || process.env.BOOKING_EMAIL_HOST;
    const port = Number(
      process.env.BOOKING_MAILER_PORT || process.env.BOOKING_EMAIL_PORT || 587,
    );
    const user =
      process.env.BOOKING_MAILER_USERNAME || process.env.BOOKING_EMAIL_USER;
    const pass =
      process.env.BOOKING_MAILER_PASSWORD || process.env.BOOKING_EMAIL_PASS;
    const from =
      process.env.BOOKING_MAILER_FROM || process.env.BOOKING_EMAIL_FROM || user;
    const recipients = (
      process.env.BOOKING_NOTIFICATION_EMAILS ||
      process.env.BOOKING_EMAIL_RECIPIENTS ||
      ""
    )
      .split(",")
      .map((email) => email.trim())
      .filter(Boolean);

    if (!host || !user || !pass || recipients.length === 0) {
      return NextResponse.json(
        { message: "Booking email server configuration is incomplete." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      // Port 465 = implicit SSL (secure: true). Port 587 = STARTTLS (secure: false).
      secure: port === 465,
      requireTLS: port === 587,
      auth: {
        user,
        pass,
      },
    });

    const roomDetails = payload.rooms
      .map(
        (
          room: {
            name: string;
            rate: number;
            occupancy: "single" | "double" | "triple";
            adultsInTent: number;
            childIndices: number[];
          },
          i: number,
        ) => {
          const occupancyLabel =
            room.occupancy === "single"
              ? "1 Guest"
              : room.occupancy === "double"
                ? "2 Guests"
                : "3 Guests";
          const childInfo =
            room.childIndices?.length > 0
              ? ` + Child ${room.childIndices.map((idx) => idx + 1).join(", ")}`
              : "";
          return `• Tent ${i + 1}: ${room.name} (${occupancyLabel}) - ${room.adultsInTent} adult(s)${childInfo} ($${room.rate}/night)`;
        },
      )
      .join("\n");

    const capacityNote =
      payload.childrenCount > 0
        ? "Children may share with one adult in the same tent, subject to the selected occupancy."
        : "Children are not included in this booking.";

    const pricing = payload.pricing || {};
    const childAgesLine =
      Array.isArray(payload.childAges) && payload.childAges.length > 0
        ? `Child Ages: ${payload.childAges.join(", ")}`
        : "";

    const emailText = [
      "Hello,",
      "",
      "A new booking request has been submitted from the Wilpattu Wilderness website.",
      "",
      "Guest Details:",
      `Name: ${payload.firstName} ${payload.lastName}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.telephone}`,
      "",
      "Stay Details:",
      `Check-in: ${payload.checkIn}`,
      `Check-out: ${payload.checkOut}`,
      `Duration: ${payload.nights} Nights`,
      `Occupancy: ${payload.adults} Adults, ${payload.childrenCount} Children`,
      "Rule: Max 3 guests per tent (adults + children combined).",
      childAgesLine,
      "",
      "Accommodation:",
      roomDetails,
      "",
      capacityNote,
      "",
      "Special Requests:",
      payload.specialRequests || "None",
      "",
      "Price Breakdown:",
      `Room Subtotal: USD ${(pricing.roomSubtotal ?? payload.total).toFixed(2)}`,
      pricing.childSurcharge > 0
        ? `Child Surcharge (6-11y): USD ${pricing.childSurcharge.toFixed(2)}`
        : "",
      pricing.serviceCharge !== undefined
        ? `Service Charge: USD ${pricing.serviceCharge.toFixed(2)}`
        : "",
      pricing.vat > 0 ? `VAT / TDL: USD ${pricing.vat.toFixed(2)}` : "",
      `Total Stay Price: USD ${payload.total.toFixed(2)}`,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from,
      to: recipients,
      subject: `New Booking Request - ${payload.firstName} ${payload.lastName}`,
      text: emailText,
      replyTo: payload.email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to send booking email.";
    return NextResponse.json({ message }, { status: 500 });
  }
}
