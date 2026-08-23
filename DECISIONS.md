# Decisions Log

Non-obvious choices, and why, so they don't get silently re-litigated or
accidentally reverted. Newest first.

## Triple occupancy disabled (not deleted)
Business only actually has capacity to reliably run Single/Double right
now. Triple stays visible-but-disabled (greyed out, `disabled` attribute)
in both the rate table and the tent-occupancy dropdown, so it's easy to
re-enable later without re-adding UI. Max **paying** adults per tent = 2
as a result. Physical cap per tent stays at 3 total people (see below) —
these are two different numbers for two different reasons, don't merge
them.

## Child capacity vs. child pricing are two separate systems
Every child, any age, counts toward the flat 3-person physical tent cap
(a child still takes up space). Only children 12+ ("counted as adult" per
the tariff sheet) count toward the *paying occupancy tier* cap (tied to
Single=1/Double=2). A free 4-year-old can join a "Single" tent (1 adult +
1 child = 2 people, fits under 3) without forcing an upgrade to Double.
Getting this conflated was a real bug once (see BookingSelection.tsx
capacity logic) — don't recombine these two checks into one.

## No "extra bed" wording anywhere
Removed deliberately per explicit user request. The 6–11 child rate is
just "50% surcharge" in all copy (UI, emails, WhatsApp messages) — no
physical bed is being tracked or promised.

## Safari booking is a fully separate system from accommodation
Different pricing model (per-experience, min/max range vs. per-tent
exact), different form, different confirmation emails — not bolted onto
the accommodation Checkout. The Tour Planner hands off to both via
pre-filled URL params instead of one "combined" checkout, because trying
to force a single invoice across genuinely different backend systems was
explicitly rejected as confusing.

## VAT/TDL defaults to 0%
The tariff sheet only says "applicable government taxes (VAT/TDL)"
without a number. Rather than guess a rate (real financial/legal risk if
wrong), `BOOKING_VAT_PERCENT` defaults to 0 and is clearly flagged to the
user as something *they* need to set once they confirm the correct
current rate. Service charge (10%) IS hardcoded as a default since the
tariff sheet states it explicitly.

## WhatsApp: real-URL-synchronous-open, not blank-tab-then-navigate
See ARCHITECTURE.md. Tried the "open blank tab, navigate once data
arrives" trick first — it silently failed for real users despite testing
fine in some conditions. Pre-fetching the number on page load and opening
the *real* URL as the literal first synchronous statement in the click
handler is what actually works reliably. Don't revert to the blank-tab
version even though it "should" work per common advice — it demonstrably
didn't here.

## No live Google Search grounding in the AI chatbot
Tried it, works technically, but requires billing enabled on the Google
Cloud project (quota is 0 on the free tier) and the user explicitly said
they don't need live web search — the AI should just use real site data
(env + curated content), not the open web. Removed entirely rather than
kept as a half-working fallback path, to avoid wasted failed API calls.

## Banned stock photo — do not reintroduce
`https://images.unsplash.com/photo-1547407139-3c921a66005c` turned out to
depict a dog, not safari wildlife, despite being used as a generic
"safari" placeholder across ~12 files early in the project. Fully removed.
General rule now: never guess a new Unsplash photo ID for content-specific
imagery (safari, wildlife, specific dishes, etc.) — use a plain CSS
gradient fallback and ask the user for a real photo instead. Generic,
already-established decorative photos elsewhere in the codebase (that
haven't been flagged) are lower-risk but still not verified — prefer real
uploaded photos over any stock guess where the subject matter matters.

## Newsletter signup has no real ESP integration
"Stay in the Loop" form (footer) posts to `/api/newsletter`, which emails
the team a notification and the subscriber a confirmation — it does NOT
add them to Mailchimp/any mailing list platform, because none is
connected. If a real ESP gets set up later, this route is the place to
wire it in.

## Double-submit guard added after a real duplicate-email bug
The "Confirm Booking" button had no `disabled` state while submitting —
a double-click fired two separate API calls, sending two identical
notification emails. Fixed with an `isSubmitting` guard + disabled/
loading button state on all three forms (booking, inquiry, safari). Don't
remove this guard when refactoring these forms.

## Gemini model pinned to `gemini-3.6-flash`
Chosen empirically (tested live against the actual API key), not from
general knowledge — `gemini-3-pro-preview` was already retired by the
time this was diagnosed, and `gemini-2.0-flash-exp`/`gemini-2.5-flash`
returned "no longer available to new users" for this specific project.
If AI features break again, re-verify against the live models endpoint
before assuming a model name is still valid — this space moves fast and
training-data knowledge of model names goes stale quickly.
