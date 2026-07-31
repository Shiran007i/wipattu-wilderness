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
      secure: provider === "zoho" ? false : false,
      auth: {
        user,
        pass,
      },
    });

    const roomDetails = payload.rooms
      .map(
        (room: { count: number; name: string; price: number }) =>
          `• ${room.count}x ${room.name} ($${room.price}/night)`,
      )
      .join("\n");

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
      "",
      "Accommodation:",
      roomDetails,
      "",
      "Special Requests:",
      payload.specialRequests || "None",
      "",
      `Total Stay Price: USD ${payload.total.toFixed(2)}`,
    ].join("\n");

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
