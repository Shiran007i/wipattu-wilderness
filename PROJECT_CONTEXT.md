# Wilpattu Wilderness Camping — Project Context

Read this file first in any new session. It's the fastest way to get
oriented without re-discovering everything from scratch.

## What this is
Marketing + booking website for **Wilpattu Wilderness Camping**, a luxury
glamping site near Wilpattu National Park, Sri Lanka. Next.js (App Router,
TypeScript, Tailwind), deployed on **Vercel**, domain
`wilpattuwilderness.com`, hosted email on **Zoho Mail**.

- Local repo: `/Volumes/Projects/build/wilpattu-wild-camping`
- Access to it: **Desktop Commander** (local filesystem + bash on the
  user's Mac). Claude's own sandboxed `bash_tool`/`create_file`/etc. are a
  **different, unrelated filesystem** — never use them for this project.
- Git remote: `https://github.com/Shiran007i/wipattu-wilderness.git`,
  branch `main`. User sometimes commits directly themselves outside the
  session — always `git log --oneline -8` and `git status` before assuming
  what's live.
- The user is non-technical-ish but capable; explain plainly, avoid jargon
  dumps, confirm before pushing.

## Business facts (source of truth: `Standard_Tariff_Sheet_2026-2027.pdf`,
user-uploaded, and `.env`)
- Location: 2km from Hunuwilagama Gate, Wilpattu. Coords ~8.3076, 80.1480.
- Official contact: +94 716 335000, info@wilpattuwilderness.com (Zoho).
- 3 Deluxe Chalet tents total (named Aliya/Kotiya/Walaha — elephant,
  leopard, sloth bear respectively).
- Room rates: Single/Double/Triple × BB/HB/FB/AI meal plans — exact
  numbers live in `BOOKING_PLANS_JSON` / `BOOKING_RATE_FORMULA_JSON` env
  vars, not hardcoded assumptions.
- Child policy: 0–5.99 free, 6–11.99 = 50% of adult rate, 12+ = full adult.
- Safari packages: Morning/Afternoon/Full-Day, private jeep up to 6 pax,
  base price covers 2 pax, extra pax = estimated park entry fee ($30–35).
- Triple occupancy is currently **disabled** (business decision, not a
  bug) — see DECISIONS.md.

## Where to look for more detail
- **ARCHITECTURE.md** — how the systems are actually built (env-driven
  config pattern, image folders, booking flows, mailer, WhatsApp, AI).
- **DECISIONS.md** — non-obvious choices and why, so they don't get
  silently re-litigated or re-broken.
- **CURRENT_STATUS.md** — what's pending, known gaps, next steps as of
  the last session.

## Ground rules established with this user
- Always run `npm run build` after edits before saying something is done.
- Never push to git without explicit confirmation.
- Always compress user-uploaded photos before committing (`sips` on Mac —
  see ARCHITECTURE.md for the exact commands used).
- When Desktop Commander times out, it usually recovers — just retry a
  simple command before assuming it's dead.
