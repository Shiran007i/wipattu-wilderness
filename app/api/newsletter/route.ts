import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isHoneypotTriggered, isValidEmail } from "@/lib/formValidation";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (isHoneypotTriggered(payload)) {
      return NextResponse.json({ success: true });
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const host = process.env.BOOKING_MAILER_HOST;
    const port = Number(process.env.BOOKING_MAILER_PORT || 587);
    const user = process.env.BOOKING_MAILER_USERNAME;
    const pass = process.env.BOOKING_MAILER_PASSWORD;
    const from = process.env.BOOKING_MAILER_FROM || user;
    const recipients = (process.env.BOOKING_NOTIFICATION_EMAILS || "")
      .split(",")
      .map((email: string) => email.trim())
      .filter(Boolean);

    if (!host || !user || !pass || recipients.length === 0) {
      return NextResponse.json(
        { message: "Newsletter email server configuration is incomplete." },
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

    // Notify the team of the new subscriber.
    await transporter.sendMail({
      from,
      to: recipients,
      subject: `New Newsletter Signup - ${payload.email}`,
      text: `A new visitor joined the mailing list from the website footer.\n\nEmail: ${payload.email}`,
      replyTo: payload.email,
    });

    // Confirmation email to the subscriber, non-fatal if it fails.
    try {
      const contactEmail = process.env.CONTACT_EMAIL || "info@wilpattuwilderness.com";
      await transporter.sendMail({
        from,
        to: payload.email,
        subject: "You're on the list! - Wilpattu Wilderness",
        text: [
          "Hi there,",
          "",
          "Thanks for joining the Wilpattu Wilderness mailing list! You'll hear from us with stories from the wild, seasonal offers, and updates from the park.",
          "",
          `If this wasn't you, just ignore this email — no further action needed. Questions? Reach us at ${contactEmail}.`,
          "",
          "Warm regards,",
          "Wilpattu Wilderness Camping",
        ].join("\n"),
        replyTo: contactEmail,
      });
    } catch (confirmError) {
      console.error("Newsletter confirmation email failed:", confirmError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup failed:", error);
    const message =
      error instanceof Error ? error.message : "Unable to join the mailing list right now.";
    return NextResponse.json({ message }, { status: 500 });
  }
}
