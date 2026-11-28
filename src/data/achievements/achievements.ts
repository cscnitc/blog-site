import type { ImageMetadata } from "astro";
import B5CTF from "../../assets/images/b5ctf.jpg";
import KCCTF from "../../assets/images/kcctf.jpg";
import HackTheChess from "../../assets/hackchess-image.jpeg"
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
  image?: ImageMetadata;
  highlight?: string; // bold inline callout text
}

export const achievements: Achievement[] = [
  // ── 2026 ──────────────────────────────────────────────────────────────────
  
  {
    title: "3rd place at the HACK@CHES'26 ",
    date: "2026-10-15",
    dateLabel: "October 2026",
    category: "CTF Results",
    description:
      "Won 3rd place at the HACK@CHES'26 challenge held at the Cryptographic Hardware and Embedded Systems (CHES) conference in Turkey",
    highlight: "3rd place",
    image: HackTheChess,
    links : [
      {
        label: "Leaderboard",
        url: "https://hackthesilicon.com/ches26/"
      },
      {
        label: "LinkedIn Post",
        url: "https://www.linkedin.com/posts/cscnitc_ches2026-hardwaresecurity-cryptography-activity-7519087824969736193-Ux9K"
      }
    ]
  },
  {
    title: "Business Logic Vulnerability in LG ThinQ-Backed Laundry Service",
    date: "2026-09-27",
    dateLabel: "September 2026",
    category: "Bug Bounty",
    description:
      "One of our most significant real-world security findings was discovering a business logic vulnerability in an LG ThinQ-backed laundry service. While investigating its payment flow, a payment replay flaw was identified that allowed a low-value activation transaction to be reused to trigger multiple washing cycles without corresponding payments. Successfully demonstrated on two physical machines, exposing a flaw in the service's payment validation and transaction integrity, and reported to LG where it was forwarded to their development team for investigation. Full report coming soon.",
    highlight: "Full report coming soon",
  },
  {
    title: "2nd Place @ BSides Bangalore ACSC 2026 B5CTF",
    date: "2026-07-01",
    dateLabel: "July 2026",
    category: "CTF Results",
    description:
      "Secured 2nd place at the B5CTF organised as part of BSides Bangalore ACSC 2026, competing against top security teams across India.",
    highlight: "2nd place",
    image: B5CTF,
  },
  {
    title: "Finals @ KaalChakra CTF — NFSU Goa",
    date: "2026-04-01",
    dateLabel: "April 2026",
    category: "CTF Results",
    description:
      "Qualified to the finals of KaalChakra CTF hosted at the National Forensic Sciences University, Goa.",
    image: KCCTF,
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
    title: "Detection of Fileless Malware",
    date: "19-22 May 2025",
    dateLabel: "September 2025",
    category: "Research",
    description:
      "academic paper on detecting fileless malware, which runs entirely in memory rather than writing files to disk. That makes it hard to catch with signature-based antivirus or static file scans. The introduction explains the threat and points to runtime memory analysis and behavioral analysis as more effective detection approaches. It names techniques attackers use, such as reflective DLL injection, process hollowing, and code injection into trusted processes.",
    links: [
      {
        label: "Link",
        url: "https://ieeexplore.ieee.org/document/11140126",
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

