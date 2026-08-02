import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Wilpattu Wilderness",
  description:
    "Cookie policy describing how Wilpattu Wilderness uses cookies and tracking preferences on its website.",
};

export default function CookiePolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-[#4b3427]">
      <div className="rounded-2xl border border-[#bf885e]/20 bg-[#f8f1e8] p-8 shadow-sm sm:p-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#bf885e]">
          Cookie Policy
        </p>
        <h1 className="mb-6 text-4xl font-serif text-black sm:text-5xl">
          Cookie Policy
        </h1>

        <div className="space-y-6 text-[15px] leading-8 text-black/75">
          <p>
            Cookies are small text files stored in your browser when you visit a
            website. They help the site remember preferences, improve
            navigation, and understand how visitors use the platform.
          </p>
          <p>
            Wilpattu Wilderness may use cookies for essential website functions,
            such as maintaining session activity, remembering your booking-
            related selections, and improving general site performance.
          </p>
          <p>
            We may also use analytics cookies to understand traffic patterns and
            improve future user experience. These cookies are generally
            non-personal and help us review how the website is used.
          </p>
          <p>
            You can usually manage or disable cookies through your browser
            settings. Please note that disabling cookies may affect certain
            features of the website.
          </p>
        </div>
      </div>
    </section>
  );
}
