import Avatar from "../../assets/images/avatar.webp";
import FidhaAvatar from "../../assets/images/Fidha Ismail.webp";
import FahadAvatar from "../../assets/images/fahad.jpg";
import SanaAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/IMG-20260121-WA0005 - SANA SHERIN E K.jpg";
import HaninAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/58506 - MUHAMMED HANIN ABDUL JALEEL.jpg";
import GhazniyaAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/Screenshot_20261124_120243_Photos - GHAZNIYA ghazniya.jpg";
import ShinanAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/IMG_5053 - SHINAN POROLI.jpeg";
import SharadAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/WhatsApp Image 2026-01-07 at 9.32.45 PM - SHARAD CHANDRA MUNUGALA.jpeg";
import JasriyahAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/IMG_20261124_180214 - JASRIYAH E K.jpg";
import RabeeAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/img - RABEE AMAN A.jpg";
import SmithinAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/IMG-20260912-WA0009 - Smithin J Raj.jpg";
import RahulAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/20260729_075502000_iOS - RAHUL R.jpeg";
import BenjaminAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/DSC_8340 Benjamin - BENJAMIN MATHEW.jpg";
import PunnooseAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/pfp - PUNNOOSE KUNCHERIA PURAKEL.jpeg";
import HarshaAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/1000078350 - JAYAVARAPU VENKATA HARSHA VARDHAN.png";
import ChetanAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/Photo - CHETAN KHETPAL.png";
import RejaAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/IMG-20261012-WA0014 - REJA FAIROOZ.jpg";
import DinaAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/IMG_20261124_205554 - DINA BIJU.jpg";
import RithuAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/IMG_20260518_133920 - RITHU REKSHA RAJ.jpg";
import SamiAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/IMG_20260720_165345419 - MOHAMED SAMI AMMAM VEETTIL.jpg";
import SaiPranavAvatar from "../../assets/members/image of urs _(Make sure u face is visible in the image) (File responses)/IMG_6085 - SAI PRANAV PARASURAMAN.jpeg";
import type { ImageMetadata } from "astro";

export type MemberTier = "exec" | "head" | "board" | "jnr" | "member";

export interface TeamMember {
    name: string;
    alias?: string;
    role: string;
    tier: MemberTier;
    domains?: string[];
    avatar: ImageMetadata;
    github?: string;
    website?: string;
    linkedIn?: string;
}

export interface AlumniMember {
    name: string;
    avatar: ImageMetadata | string;
    github?: string;
    website?: string;
    linkedIn?: string;
}

export const team: TeamMember[] = [
    // ── 1. Joint Secretaries ──────────────────────────────────────
    {
        name: "Sharad Chandra Munugala",
        alias: "Ordinary0x",
        role: "Joint Secretary\nWeb Exploitation Head",
        tier: "exec",
        domains: [
            "Reverse Engineering",
            "Binary Exploitation",
            "Web Exploitation",
            "Pentesting",
            "Research",
            "Bug Bounty",
        ],
        avatar: SharadAvatar,
        linkedIn: "https://www.linkedin.com/in/sharad-chandra-munugala",
        github: "https://github.com/Ordinary0x",
    },
    {
        name: "Fidha Ismail",
        alias: "Fidha",
        role: "Joint Secretary\nReverse Engineering Head",
        tier: "exec",
        domains: ["Reverse Engineering", "Digital Forensics"],
        avatar: FidhaAvatar,
        linkedIn: "https://www.linkedin.com/in/fidha-ismail-606197311/",
        github: "https://github.com/fidhaismail",
    },

    // ── 2. Treasurer & Domain Heads ───────────────────────────────
    {
        name: "Shaheen",
        alias: "she1n",
        role: "Treasurer",
        tier: "exec",
        domains: ["Pentesting", "Hardware Security"],
        avatar: Avatar,
    },
    {
        name: "Smithin J Raj",
        alias: "LeSmithBro",
        role: "Crypto Head",
        tier: "head",
        domains: ["Crypto"],
        avatar: SmithinAvatar,
        github: "https://github.com/SmithinJRaj",
    },
    {
        name: "Fahad",
        alias: "eko_071",
        role: "Adversarial AI Head",
        tier: "head",
        domains: ["Adversarial AI"],
        avatar: FahadAvatar,
        github: "https://github.com/eko-071",
    },
    {
        name: "Reja Fairooz",
        alias: "rjf-ctrl",
        role: "Forensics Head",
        tier: "head",
        domains: ["Digital Forensics", "Web Exploitation"],
        avatar: RejaAvatar,
        linkedIn: "https://www.linkedin.com/in/reja-fairooz",
    },
    {
        name: "Utkarsh Gautam",
        alias: "Deadware22",
        role: "Hardware Security Head",
        tier: "head",
        domains: ["Hardware Security", "Reverse Engineering", "Binary Exploitation"],
        avatar: Avatar,
        website: "https://Utkarshgautam22.vercel.app",
    },
    {
        name: "Jayavarapu Venkata Harsha Vardhan",
        alias: "Harsha_Jay",
        role: "Pentesting Head",
        tier: "head",
        domains: ["Pentesting"],
        avatar: HarshaAvatar,
        linkedIn: "https://www.linkedin.com/in/j-v-harsha-vardhan-144824335",
    },
    {
        name: "Ahmad",
        role: "Design Head",
        tier: "head",
        domains: ["Design"],
        avatar: Avatar,
    },
    {
        name: "Muhsin",
        role: "Website Head",
        tier: "head",
        domains: ["Web Development"],
        avatar: Avatar,
    },

    // ── 3. Board Members ──────────────────────────────────────────
    {
        name: "Ghazniya",
        alias: "ghazni",
        role: "Board Member",
        tier: "board",
        domains: ["Web Exploitation"],
        avatar: GhazniyaAvatar,
        linkedIn: "https://www.linkedin.com/in/ghazniya-abdul-gafoor-454114325",
    },

    // ── 4. Junior Executives ──────────────────────────────────────
    {
        name: "Shinan Poroli",
        alias: "pshinan",
        role: "Junior Executive",
        tier: "jnr",
        domains: ["Web Exploitation", "Pentesting"],
        avatar: ShinanAvatar,
        github: "https://github.com/porolishinan",
    },
    {
        name: "Punnoose Purakel",
        alias: "ppnse",
        role: "Junior Executive",
        tier: "jnr",
        domains: ["Reverse Engineering"],
        avatar: PunnooseAvatar,
        website: "https://punn.cc",
    },
    {
        name: "Sai Pranav Parasuraman",
        alias: "Oudeis",
        role: "Junior Executive",
        tier: "jnr",
        domains: ["Digital Forensics"],
        avatar: SaiPranavAvatar,
        linkedIn: "https://www.linkedin.com/in/sai-pranav-c0d3r6",
    },
    {
        name: "Rabee Aman",
        alias: "neo",
        role: "Junior Executive",
        tier: "jnr",
        domains: ["Adversarial AI"],
        avatar: RabeeAvatar,
        linkedIn: "https://www.linkedin.com/in/rabeeaman",
    },
    {
        name: "Mohamed Sami AV",
        alias: "Kaskas",
        role: "Junior Executive",
        tier: "jnr",
        domains: ["Reverse Engineering"],
        avatar: SamiAvatar,
        github: "https://github.com/Sami2225",
    },
    {
        name: "Muhammed Hanin",
        alias: "h0niin",
        role: "Junior Executive",
        tier: "jnr",
        domains: [
            "Web Exploitation",
            "Digital Forensics",
            "Adversarial AI",
            "Research",
            "Bug Bounty",
        ],
        avatar: HaninAvatar,
        github: "https://github.com/h0niin",
    },
    {
        name: "Rahul R",
        alias: "Orginatix",
        role: "Junior Executive",
        tier: "jnr",
        domains: ["Digital Forensics", "Pentesting", "Crypto"],
        avatar: RahulAvatar,
        linkedIn: "https://www.linkedin.com/in/rahul-ranjit-416028393",
    },
    {
        name: "Rithu Reksha Raj",
        alias: "tricky4747",
        role: "Junior Executive",
        tier: "jnr",
        domains: ["Pentesting"],
        avatar: RithuAvatar,
        github: "https://github.com/tricky4747",
    },
    {
        name: "Benjamin Mathew",
        alias: "jammer",
        role: "Junior Executive",
        tier: "jnr",
        domains: ["Digital Forensics", "Crypto"],
        avatar: BenjaminAvatar,
        linkedIn: "https://www.linkedin.com/in/benjaminmathew06",
    },

    // ── 5. Members ────────────────────────────────────────────────
    {
        name: "Sana Sherin E K",
        alias: "SherlockSana",
        role: "Member",
        tier: "member",
        domains: ["OSINT"],
        avatar: SanaAvatar,
        linkedIn: "https://www.linkedin.com/in/sana-sherin-15a53a418",
    },
    {
        name: "Jasriyah E K",
        alias: "notme2",
        role: "Member",
        tier: "member",
        domains: ["Pentesting"],
        avatar: JasriyahAvatar,
        github: "https://github.com/jasriyahek2027",
    },
    {
        name: "Dina Biju",
        alias: "|)INÆ",
        role: "Member",
        tier: "member",
        domains: ["Web Exploitation"],
        avatar: DinaAvatar,
        linkedIn: "https://www.linkedin.com/in/dina-biju-250a9a369",
    },
    {
        name: "Chetan Khetpal",
        alias: "BoyWithBrain",
        role: "Member",
        tier: "member",
        domains: ["Hardware Security", "Circuit Design / PCB / CAD"],
        avatar: ChetanAvatar,
        linkedIn: "https://www.linkedin.com/in/chetan-khetpal-a4a01a435",
        github: "https://github.com/BoyWithBrain",
    },
];

export const alumni: AlumniMember[] = [
    {
        name: "Bhaskar Pal",
        avatar: Avatar,
        linkedIn: "https://www.linkedin.com/in/bhaskar-pal-9447ba296/",
    },
    {
        name: "YELAMARTHY SHRADDHA",
        avatar: Avatar,
        linkedIn: "https://www.linkedin.com/in/yelamarthy-shraddha-36b938280/",
    },
    {
        name: "Jaefar Shameem",
        avatar: Avatar,
        linkedIn: "https://www.linkedin.com/in/jaefar-shameem-290b601b9/",
    },
];
