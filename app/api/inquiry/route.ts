import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  isHoneypotTriggered,
  isNonEmptyString,
  isValidEmail,
  truncate,
} from "@/lib/formValidation";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Honeypot: bots that auto-fill every field will fill this hidden one.
    if (isHoneypotTriggered(payload)) {
      return NextResponse.json({ success: true });
    }

    if (
      !isNonEmptyString(payload.name, 150) ||
      !isValidEmail(payload.email) ||
      !isNonEmptyString(payload.message, 5000)
    ) {
      return NextResponse.json(
        { message: "Inquiry details are incomplete or invalid." },
        { status: 400 },
      );
    }

    payload.phone = truncate(payload.phone, 40);
    payload.subject = truncate(payload.subject, 200);
    payload.message = truncate(payload.message, 5000);

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

    // Send a confirmation email to the guest too, so they know their
    // message was received. Non-fatal if it fails — the internal
    // notification already went through.
    try {
      const firstName = String(payload.name).trim().split(" ")[0] || "there";
      const contactPhone = process.env.CONTACT_PHONE || "+94 716 335000";
      const contactEmail = process.env.CONTACT_EMAIL || "info@wilpattuwilderness.com";

      const guestEmailText = [
        `Hi ${firstName},`,
        "",
        "Thank you for reaching out to Wilpattu Wilderness Camping! We've received your message and will get back to you as soon as possible.",
        "",
        "Your Message:",
        payload.message,
        "",
        "If you need to reach us sooner, feel free to contact us directly:",
        `Email: ${contactEmail}`,
        `Phone: ${contactPhone}`,
        "",
        "Warm regards,",
        "Wilpattu Wilderness Camping",
      ].join("\n");

      await transporter.sendMail({
        from,
        to: payload.email,
        subject: "We've received your message - Wilpattu Wilderness",
        text: guestEmailText,
        replyTo: contactEmail,
      });
    } catch (guestEmailError) {
      // Non-fatal.
      console.error("Guest confirmation email failed:", guestEmailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inquiry email failed:", error);
    const message =
      error instanceof Error ? error.message : "Unable to send inquiry email.";
    return NextResponse.json({ message }, { status: 500 });
  }
}
