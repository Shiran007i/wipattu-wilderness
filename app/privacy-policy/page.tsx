import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Wilpattu Wilderness",
  description:
    "Privacy policy for Wilpattu Wilderness bookings, contact requests, and website visitor data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-[#4b3427]">
      <div className="rounded-2xl border border-[#bf885e]/20 bg-[#f8f1e8] p-8 shadow-sm sm:p-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#bf885e]">
          Privacy Policy
        </p>
        <h1 className="mb-6 text-4xl font-serif text-black sm:text-5xl">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-[15px] leading-8 text-black/75">
          <p>
            Wilpattu Wilderness respects your privacy and is committed to
            protecting any personal information you share with us through
            bookings, inquiries, or website interactions.
          </p>
          <p>
            We may collect information such as your name, email address, phone
            number, booking preferences, and messages sent through our contact
            forms. This information is used to manage reservations, answer your
            questions, and improve the experience we provide.
          </p>
          <p>
            We do not sell personal data. Information may only be shared with
            trusted service providers who assist us in operating the website,
            processing bookings, or delivering customer support when necessary.
          </p>
          <p>
            By using this website, you agree that we may store and process your
            information in line with this policy and applicable privacy laws.
          </p>
          <p>
            If you would like to request access to, correction of, or deletion
            of your personal data, please contact us at
            info@wilpattuwilderness.com.
          </p>
        </div>
      </div>
    </section>
  );
}
