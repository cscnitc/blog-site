export type AchievementCategory =
  | "CTF Results"
  | "Bug Bounty"
  | "Research"
  | "Talks"
  | "Misc";

export interface Achievement {
  title: string;
  date: string; // ISO date string, e.g. "2026-07-01"
  dateLabel: string; // Human-readable, e.g. "July 2026"
  category: AchievementCategory;
  description: string;
  links?: { label: string; url: string }[];
  images?: string[]; // relative paths from /src/assets/images/
  highlight?: string; // bold inline callout text
}

export const achievements: Achievement[] = [
  // ── 2026 ──────────────────────────────────────────────────────────────────
  {
    title: "2nd Place @ BSides Bangalore ACSC 2026 B5CTF",
    date: "2026-07-01",
    dateLabel: "July 2026",
    category: "CTF Results",
    description:
      "Secured 2nd place at the B5CTF organised as part of BSides Bangalore ACSC 2026, competing against top security teams across India.",
    highlight: "2nd place",
  },
  {
    title: "Finals @ KaalChakra CTF — NFSU Goa",
    date: "2026-04-01",
    dateLabel: "April 2026",
    category: "CTF Results",
    description:
      "Qualified to the finals of KaalChakra CTF hosted at the National Forensic Sciences University, Goa.",
    links: [
      {
        label: "LinkedIn Post",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7449409717900066816",
      },
    ],
  },
  {
    title: "2nd Place @ Veni Vidi Vici 3.0 — IIT Dharwad Parsec 6.0",
    date: "2026-01-01",
    dateLabel: "January 2026",
    category: "CTF Results",
    description:
      "Won 2nd place at Veni Vidi Vici 3.0, held as part of IIT Dharwad's annual techfest Parsec 6.0.",
    links: [{ label: "CTF Site", url: "https://ctf-codingclub.iitdh.ac.in/" }],
  },
  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    title: "3rd Place @ CSAW'25 LLM CTF Attack Challenge",
    date: "2025-11-01",
    dateLabel: "November 2025",
    category: "CTF Results",
    description:
      "Placed 3rd in the CSAW 2025 LLM Attack Challenge, a premier international security competition.",
    links: [
      {
        label: "Leaderboard",
        url: "https://nyu-llm-ctf.github.io/csaw_llmac.html#leaderboard",
      },
    ],
  },
  {
    title: "Finalists @ CSAW Embedded Security Challenge 2025",
    date: "2025-10-01",
    dateLabel: "October 2025",
    category: "CTF Results",
    description:
      "Selected as finalists in the prestigious CSAW Embedded Security Challenge, one of the world's longest-running academic security competitions.",
    links: [
      {
        label: "Finalists List",
        url: "https://github.com/TrustworthyComputing/csaw_esc_2025/blob/main/finalists.md",
      },
    ],
  },
  {
    title: "Finalists @ NCIIPC-AICTE PENTATHON 2025",
    date: "2025-04-01",
    dateLabel: "April 2025",
    category: "CTF Results",
    description:
      "Qualified as finalists in PENTATHON 2025, a national cybersecurity challenge organised by NCIIPC and AICTE.",
    links: [
      { label: "Event Page", url: "https://mic.gov.in/pentathon2025/" },
    ],
  },
];

export const categories: AchievementCategory[] = [
  "CTF Results",
  "Bug Bounty",
  "Research",
  "Talks",
  "Misc",
];

