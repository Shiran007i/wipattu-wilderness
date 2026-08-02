import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const host = process.env.BOOKING_MAILER_HOST;
    const port = Number(process.env.BOOKING_MAILER_PORT || 587);
    const user = process.env.BOOKING_MAILER_USERNAME;
    const pass = process.env.BOOKING_MAILER_PASSWORD;
    const from = process.env.BOOKING_MAILER_FROM || user;
    const recipients = (process.env.BOOKING_NOTIFICATION_EMAILS || "")
      .split(",")
      .map((email) => email.trim())
      .filter(Boolean);

    if (!host || !user || !pass || recipients.length === 0) {
      return NextResponse.json(
        { message: "Inquiry email server configuration is incomplete." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      requireTLS: port === 587,
      auth: { user, pass },
    });

    const emailText = [
      "Hello,",
      "",
      "A new inquiry was submitted from the Wilpattu Wilderness website contact form.",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `Subject: ${payload.subject || "Not specified"}`,
      "",
      "Message:",
      payload.message,
    ].join("\n");

    await transporter.sendMail({
      from,
      to: recipients,
      subject: `New Inquiry - ${payload.name}${payload.subject ? ` (${payload.subject})` : ""}`,
      text: emailText,
      replyTo: payload.email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to send inquiry email.";
    return NextResponse.json({ message }, { status: 500 });
  }
}
