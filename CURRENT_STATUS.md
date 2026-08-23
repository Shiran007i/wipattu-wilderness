# Current Status

Last updated: this session (Aug 2026). Update this file at the end of
each session — replace it, don't just append forever.

## Pending — not yet pushed to git
Check `git status` and `git log --oneline -8` first; the user sometimes
commits/pushes directly themselves outside the session, so this list may
already be stale by the time you read it. As of the last check in this
session, still-local changes included:
- Navbar: bigger overlapping logo, nav shrinks on scroll, "BOOK NOW" →
  restored as "INQUIRE NOW" linking to `/contact-us`.
- Hero section: removed heavy brown gradient overlay, lighter neutral
  overlay instead.
- Footer newsletter ("Stay in the Loop") wired up to `/api/newsletter`.
- New docs: this file + PROJECT_CONTEXT.md + ARCHITECTURE.md +
  DECISIONS.md.

## Explicitly waiting on the user
- **About Us page rewrite**: user has new content for this but sent it as
  a WhatsApp voice note (.opus) — Claude cannot transcribe audio. Waiting
  on a text version before rebuilding this page (should follow the same
  `public/images/about/` folder pattern as other pages once content is in
  hand).
- **VAT/TDL rate**: `BOOKING_VAT_PERCENT` is 0 pending the user confirming
  the actual current government rate.
- **Contact info mismatch**: resolved earlier (now uses PDF's official
  `+94 716 335000` / `info@wilpattuwilderness.com`), but if new
  discrepancies show up between the live site and the tariff sheet,
  the tariff sheet is the source of truth unless the user says otherwise.

## Vercel environment variables checklist
`.env` is gitignored and never pushed — Vercel's copy must be updated by
hand whenever `.env` changes locally. Full current variable list lives in
`.env` itself (with inline comments); don't try to reconstruct it from
memory across sessions, just read the file. Groups: `BOOKING_MAILER_*`
(Zoho), `BOOKING_*` (accommodation pricing/rooms), `SAFARI_*` (safari
pricing), `CONTACT_*`, `WHATSAPP_NUMBER`, `GEMINI_API_KEY`.

## Known non-issues (don't re-diagnose these from scratch)
- New-domain email deliverability hiccups (Gmail spam-filtering despite
  correct SPF/DKIM) — expected while sending reputation builds up, not a
  bug.
- Local dev SMTP failures that work fine on the live Vercel site — almost
  always means the local `npm run dev` server needs a full restart to
  pick up `.env` changes (Next.js doesn't hot-reload env vars).

## Useful verification commands
```bash
# Confirm what's actually live vs. local
git log --oneline -8 && git status

# Full build check (always do this before saying something is done)
npm run build

# Test SMTP credentials directly
node -e "const nodemailer=require('nodemailer'); ..."  # see ARCHITECTURE.md pattern

# Check current Gemini model availability for this API key
curl -s "https://generativelanguage.googleapis.com/v1beta/models?key=$KEY"
```
