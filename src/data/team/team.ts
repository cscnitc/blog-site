import Avatar from "../../assets/images/avatar.webp";
import AstroanaxAvatar from "../../assets/images/astroanax.webp";
import ShivaAvatar from "../../assets/images/SHIVA KUMAR.webp";
import SharadAvatar from "../../assets/images/SHARAD.webp";
import AruneswarAvatar from "../../assets/images/ARUNESWAR REDDY.webp";
import FidhaAvatar from "../../assets/images/Fidha Ismail.webp";
import SarangAvatar from "../../assets/images/sarangbabu.jpg";
import FahadAvatar from "../../assets/images/fahad.jpg";
import PunnooseAvatar from "../../assets/images/punnoose.jpg";
import RenishAvatar from "../../assets/images/renish.jpg";
import SudhinAvatar from "../../assets/images/sudhin.jpg";
import AmalAvatar from "../../assets/images/amal.jpg";

export interface TeamMember {
    name: string;
    role: string;
    avatar: ImageMetadata;
    github?: string;
    website?: string;
    linkedIn?: string;
}

export const team: TeamMember[] = [
    {
        name: "Amal Manoj",
        role: "MiniMal Encrypter",
        avatar: AmalAvatar,
        github: "https://github.com/AmalManoj2",
    },
    {
        name: "Aruneswar Reddy",
        role: "Developer",
        avatar: AruneswarAvatar,
        linkedIn: "https://www.linkedin.com/in/arun2601",
        github: "https://github.com/Arun-2601-2007",
    },
    {
        name: "eko_071",
        role: "Cryptographer",
        avatar: FahadAvatar,
        github: "https://github.com/eko-071",
    },
    {
        name: "Fidha ismail",
        role: "RE Explorer",
        avatar: FidhaAvatar,
        linkedIn: "https://www.linkedin.com/in/fidha-ismail-606197311/",
        github: "https://github.com/fidhaismail",
    },
    {
        name: "K4g3",
        role: "Forensics specialist",
        avatar: Avatar,
        github: "https://github.com/forcedtobesane",
    },
    {
        name: "Ordinary0x",
        role: "Just an ordinary person",
        avatar: SharadAvatar,
        github: "https://github.com/Ordinary0x",
        linkedIn: "https://www.linkedin.com/in/sharad-chandra-munugala",
    },
    {
        name: "Punnoose Purakel (ppnse)",
        role: "flag capturer / bruteforcer",
        avatar: PunnooseAvatar,
        website: "https://ppnse.qzz.io",
    },
    {
        name: "Rehan",
        role: "hax0r",
        avatar: AstroanaxAvatar,
        website: "https://falsafa.in",
    },
    {
        name: "Renish Dsouza",
        role: "Seriously loser",
        avatar: RenishAvatar,
        github: "https://github.com/renishdsouza",
    },
    {
        name: "Sahil Muhammed",
        role: "Crypto Lead",
        avatar: Avatar,
        github: "https://github.com/Sahil-Muhammed",
    },
    {
        name: "Sarang",
        role: "wannabesane",
        avatar: SarangAvatar,
        github: "https://github.com/SaneAF",
    },
    {
        name: "Shiva",
        role: "wanna die",
        avatar: ShivaAvatar,
        website: "https://shivagulapala.me",
    },
    {
        name: "SUDHIN M",
        role: "autistic forensics analyser",
        avatar: SudhinAvatar,
        linkedIn: "https://www.linkedin.com/in/sudhin-m-12a911323",
    },
];
