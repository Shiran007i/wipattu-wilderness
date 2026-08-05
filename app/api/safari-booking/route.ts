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

    if (isHoneypotTriggered(payload)) {
      return NextResponse.json({ success: true });
    }

    if (
      !isNonEmptyString(payload.firstName, 100) ||
      !isNonEmptyString(payload.lastName, 100) ||
      !isValidEmail(payload.email) ||
      !isNonEmptyString(payload.telephone, 40) ||
      !isNonEmptyString(payload.date, 20) ||
      !isNonEmptyString(payload.experienceName, 100) ||
      typeof payload.paxCount !== "number" ||
      payload.paxCount < 1 ||
      !payload.pricing
    ) {
      return NextResponse.json(
        { message: "Safari booking details are incomplete or invalid." },
        { status: 400 },
      );
    }

    payload.specialRequests = truncate(payload.specialRequests, 2000);

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
        { message: "Booking email server configuration is incomplete." },
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

    const pricing = payload.pricing;
    const priceLine =
      pricing.totalMin === pricing.totalMax
        ? `USD ${pricing.totalMin.toFixed(2)}`
        : `USD ${pricing.totalMin.toFixed(2)} - ${pricing.totalMax.toFixed(2)} (estimated, final park entry fee confirmed on booking)`;

    const emailText = [
      "Hello,",
      "",
      "A new safari booking request has been submitted from the Wilpattu Wilderness website.",
      "",
      "Guest Details:",
      `Name: ${payload.firstName} ${payload.lastName}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.telephone}`,
      "",
      "Safari Details:",
      `Experience: ${payload.experienceName}`,
      `Date: ${payload.date}`,
      `Passengers: ${payload.paxCount}`,
      "",
      "Special Requests:",
      payload.specialRequests || "None",
      "",
      "Price Breakdown:",
      `Jeep + Entry (base ${payload.basePaxIncluded ?? 2} pax): USD ${pricing.jeepWithEntryPrice.toFixed(2)}`,
      pricing.extraPax > 0
        ? `Extra Passengers (${pricing.extraPax}): USD ${pricing.extraPaxFeeMin.toFixed(2)} - ${pricing.extraPaxFeeMax.toFixed(2)} (estimated)`
        : "",
      `Service Charge: USD ${pricing.serviceChargeMin.toFixed(2)}${pricing.serviceChargeMin !== pricing.serviceChargeMax ? ` - ${pricing.serviceChargeMax.toFixed(2)}` : ""}`,
      `Total: ${priceLine}`,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from,
      to: recipients,
      subject: `New Safari Booking - ${payload.firstName} ${payload.lastName} (${payload.experienceName})`,
      text: emailText,
      replyTo: payload.email,
    });

    try {
      const contactPhone = process.env.CONTACT_PHONE || "+94 716 335000";
      const contactEmail = process.env.CONTACT_EMAIL || "info@wilpattuwilderness.com";

      const guestEmailText = [
        `Hi ${payload.firstName},`,
        "",
        "Thank you for your safari booking request with Wilpattu Wilderness Camping! We've received the details below and will be in touch shortly to confirm availability.",
        "",
        "Your Request:",
        `Experience: ${payload.experienceName}`,
        `Date: ${payload.date}`,
        `Passengers: ${payload.paxCount}`,
        "",
        `Estimated Total: ${priceLine}`,
        "",
        "If you have any questions in the meantime, feel free to reach us:",
        `Email: ${contactEmail}`,
        `Phone: ${contactPhone}`,
        "",
        "We look forward to welcoming you to Wilpattu!",
        "",
        "Warm regards,",
        "Wilpattu Wilderness Camping",
      ].join("\n");

      await transporter.sendMail({
        from,
        to: payload.email,
        subject: "We've received your safari booking request - Wilpattu Wilderness",
        text: guestEmailText,
        replyTo: contactEmail,
      });
    } catch (guestEmailError) {
      console.error("Guest confirmation email failed:", guestEmailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Safari booking email failed:", error);
    const message =
      error instanceof Error ? error.message : "Unable to send safari booking email.";
    return NextResponse.json({ message }, { status: 500 });
  }
}
