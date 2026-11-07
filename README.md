# PrivacyProof

> Landing page and waitlist for a pre-launch service: independent, plain-English audits of "local-only" AI note tools for therapists and small practices.

**Live:** [<LIVE_URL>](https://privacy-proof.vercel.app/)

## Status

Pre-launch. This repo contains only the landing page and signup capture, built to test whether clinicians want this service. The audit tooling and real reports are not part of this repo. The report card on the page is a worked example for a fictional tool (SampleScribe).

## The problem

AI scribes advertise "100% local", and a clinician has no practical way to check. A privacy policy is a promise, not evidence, and a BAA does not tell you what the software actually sent.

## The audit method

1. Run a scripted 20-minute mock therapy session with synthetic audio in a clean sandbox, capturing every outbound packet.
2. Repeat the session in airplane mode to see what works with no network.
3. Publish a version-dated report with a plain-English verdict and a badge scoped to one version, one device, one date.

Reports state their limits and are not a HIPAA certification.

## What the page measures

Every signup stores the email, the CTA it came from (`source`), and the pricing tier if one was selected. That makes it possible to compare which button and which price point drive interest.

| Field       | Values                                                                      |
| ----------- | --------------------------------------------------------------------------- |
| `source`    | `hero`, `navbar_cta`, `sample_report_card`, `final_cta`, `pricing_*`        |
| `tier`      | `Directory (Free)`, `Clinician Pro ($19/mo)`, `Practice ($299/yr)`, or none |
| `createdAt` | Server timestamp                                                            |

## How lead capture works

- Client-side email format check; a hidden honeypot field silently drops bot submissions.
- Each lead is written to `localStorage` (`privacyproof_leads_local`) first, then to the Firestore `leads` collection.
- `firestore.rules` is default-deny. Clients can only create a lead with `email`, `source`, optional `tier`, and `createdAt`. Reading, updating, and deleting are blocked, so leads are read in the Firebase console.

**Known limitation:** if the Firestore write fails (for example, blocked by an ad blocker), the UI still shows success and the lead exists only in that visitor's browser. Firestore will undercount signups.

## Stack

React 19, TypeScript, Vite, Tailwind CSS v4, Firebase Firestore, lucide-react.

## Run locally

Requires Node.js and a Firebase project with Firestore enabled.

```bash
git clone <REPO_URL>
cd <REPO_FOLDER>
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

**Before you submit any test email:** `firebase-applet-config.json` points at the original project's Firestore, and the rules allow public creates, so test signups from a clone would land in that database. Replace the values with your own Firebase web config, set `firestoreDatabaseId` to your database ID (`(default)` for the default database), and deploy `firestore.rules` to your project.

| Script            | Purpose                     |
| ----------------- | --------------------------- |
| `npm run dev`     | Start the dev server        |
| `npm run build`   | Production build            |
| `npm run preview` | Preview the build           |
| `npm run lint`    | Type check (`tsc --noEmit`) |

`.env.example` lists `GEMINI_API_KEY` and `APP_URL` from the AI Studio template. Nothing in the code reads them.

## Structure

```
src/
├── components/        One file per page section, plus EmailCaptureForm and CaptureModal
├── lib/
│   ├── storage.ts     saveLead(): honeypot, local mirror, Firestore write
│   └── firebase.ts    Firebase initialization
├── index.css          Design tokens: colors, fonts, radius, spacing
└── types.ts           Lead and pricing tier types
firestore.rules        Lead schema and access rules
firebase-blueprint.json  Lead entity and Firestore path
```

Design tokens live in `src/index.css`: warm off-white background, green accent (`#1F6B4E`), amber for warnings, Fraunces for headings, Source Sans 3 for body text, JetBrains Mono for packet and report text.

## Connect

**Sakhiur** · [LinkedIn](https://www.linkedin.com/in/sakhiur/) · [Portfolio](https://sakhiur.vercel.app)
