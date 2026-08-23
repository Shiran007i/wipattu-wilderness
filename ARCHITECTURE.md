# Architecture

## Core pattern: env-driven config, everywhere
Prices, contact info, room/safari details all live in `.env` (server-only,
gitignored — never committed) with sensible hardcoded defaults baked into
each API route so the site works even if an env var is missing. To change
a price or contact detail, edit `.env` locally, then **manually mirror the
same change in Vercel → Settings → Environment Variables** (`.env` is
never pushed to git, so Vercel has its own copy that must be updated by
hand every time).

Key env vars: `BOOKING_*` (accommodation pricing/rooms/terms),
`SAFARI_*` (safari pricing/experiences), `CONTACT_*` (phone/email/address/
lat/long), `BOOKING_MAILER_*` (Zoho SMTP), `BOOKING_NOTIFICATION_EMAILS`
(who gets booking/inquiry emails — currently 3 addresses),
`WHATSAPP_NUMBER`, `GEMINI_API_KEY`.

## Image system: folder-based, no CMS
Photos are NOT hardcoded. Each section reads from a `public/images/<name>/`
folder at runtime via a dedicated `/api/<name>-images` route. Two flavors:

1. **Generic pool** (`getPublicFolderImages` in `lib/getPublicFolderImages.ts`):
   any filenames, folder = `hero`, `blog`, `tent`, `focus-gallery`,
   `scrolling-gallery`, `safari` (gallery portion). Used for auto-rotating
   carousels / galleries. Adding/removing a file = instant change, no code.
2. **Named slots** (`getNamedPublicImage` in `lib/getNamedPublicImage.ts`):
   exact reserved filename required, e.g. `services/accommodation.jpg`,
   `food-drinks/sri-lankan-cuisine.jpg`, `safari/booking-hero.jpg`. Used
   where a specific photo must map to a specific piece of content.

Every folder has a `README.txt` inside it telling the user exactly what
filenames to use. **Always compress user-uploaded photos before
committing** — originals are often 5–10MB+. Standard move:
```
for f in "folder/"*.jpg; do sips -Z <maxdim> -s formatOptions <quality> "$f" > /dev/null; done
```
Targets used so far: hero/tent ~1600-2000px/q72-75, gallery ~1400px/q72,
scrolling ~800px/q68.

**IMPORTANT — banned image**: an Unsplash stock photo
(`photo-1547407139-3c921a66005c`) was found across ~12 files and turned
out to show a dog, not safari wildlife. It has been fully removed and
replaced with dynamic fetches from `public/images/safari/` + plain CSS
gradient fallbacks (no guessed stock-photo URLs). **Never introduce a new
guessed Unsplash photo ID for safari/wildlife content again** — use a
gradient fallback and ask the user for a real photo instead.

## Booking systems (TWO separate ones, deliberately)
1. **Accommodation** (`/booking` → `/checkout`): per-tent builder. Guest
   adds tents one at a time, each with its own occupancy (Single/Double,
   Triple currently disabled), adult count, and specific children assigned
   to share it (checkbox by child index). Pricing:
   `lib/calculateBookingTotal.ts`. Capacity rule: **every person (any age)
   counts toward the 3-per-tent physical cap**; only adults + 12+ children
   count toward the *paying* occupancy-tier cap. Max 3 tents total
   (`BOOKING_MAX_ROOMS`).
2. **Safari** (`/safari-booking`): simpler single-page form, experience +
   date + pax count (max 6/jeep). Pricing: `lib/calculateSafariTotal.ts`,
   returns a min/max **range** (not a single number) since the tariff
   sheet itself only gives an estimated range for extra-passenger entry
   fees — don't collapse this to a fake-precise single figure.

Both send: (1) an internal notification email to all
`BOOKING_NOTIFICATION_EMAILS`, (2) a separate guest confirmation email,
(3) an auto-opened WhatsApp message. Both have honeypot + server-side
validation (`lib/formValidation.ts`) and a submit-guard against double-
clicks (duplicate emails were a real bug once — see DECISIONS.md).

The AI **Tour Planner** (`/tour-planner`, `app/actions.ts::planTour`) hands
off to BOTH booking flows via pre-filled URL params (`/booking?checkIn=...`
and `/safari-booking?experience=...&fromPlanner=1`) rather than trying to
force one combined checkout — they're genuinely separate systems.

## WhatsApp forwarding — the popup-blocking fix
`wa.me` links can only pre-fill a message; WhatsApp itself will never
auto-press Send (hard platform restriction, not fixable). To reliably
auto-*open* the chat without the browser blocking it as a popup:
**pre-fetch the WhatsApp number on page load** (before any user
interaction), then on submit call `window.open(url, '_blank')` with the
**real, final URL** as the literal first synchronous line of the click
handler — before any `await`. Opening a blank tab first and navigating it
later (the "standard" trick) does NOT reliably work across browsers/after
async delays; using the real URL synchronously does. Fallback: if the
pre-fetch hasn't resolved yet, skip auto-open entirely (no blank tab) and
show a manual "Send via WhatsApp" button once the confirmation completes.
Implemented in `Checkout.tsx`, `ContactUs.tsx`, `SafariBooking.tsx`.

## Mailer
Zoho SMTP (`smtppro.zoho.com:587`, `secure: port === 465`,
`requireTLS: port === 587` — get this wrong and it silently fails).
Domain needs SPF + DKIM DNS records (added to Vercel DNS) for Zoho
verification — new domains can still get spam-filtered by Gmail even with
correct SPF/DKIM until sending reputation builds up; that's expected, not
a bug to chase.

## AI (Gemini) — `app/actions.ts`
Model in use: **`gemini-3.6-flash`** (verified working + free-tier
accessible for this specific API key as of Aug 2026 — `gemini-3-pro-preview`
was retired March 9 2026; `gemini-2.0-flash-exp`/`gemini-2.5-flash` are
blocked for this project's tier). If AI features break again, first
suspect: model deprecation. Verify with a raw
`GET https://generativelanguage.googleapis.com/v1beta/models?key=...`
call before guessing a replacement.

No live Google Search grounding (deliberately removed — needs billing,
and wasn't wanted). Instead, `buildSiteContext()` inlines real
accommodation/safari/experience data + key park facts into every prompt,
with an explicit instruction to use ONLY that data. Keep this function as
the single source of truth if new bookable content is added.

## Known recurring bug pattern — read before adding any heading
`app/globals.css` has a **global, unlayered** rule:
```css
h1, h2, h3, .font-serif { color: var(--accent-strong); }
```
Because it's outside any Tailwind `@layer`, it beats `text-white` (and
any other color utility) on literal `<h1>/<h2>/<h3>` tags regardless of
specificity — cascade layers, not normal CSS specificity, decide the
winner. This has caused multiple "text is invisible" bugs. Rules of
thumb: use `<h4>`+ for anything that needs a non-brown color, or add
`!text-white` (Tailwind important-modifier) if the tag must stay h1-h3.

## Security posture (deliberately lightweight, proportionate)
Public POST routes (`booking`, `inquiry`, `safari-booking`, `newsletter`)
have: honeypot field (must be `display:none`, NOT off-screen positioning —
off-screen gets auto-filled by browser autofill/password managers and
silently kills real submissions), server-side required-field + email-
format validation, length caps on free text. No rate-limiting or CAPTCHA —
judged disproportionate for this site's traffic; would need Cloudflare
Turnstile or Vercel Firewall if that changes.
