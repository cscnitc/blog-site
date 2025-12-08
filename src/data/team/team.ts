import Avatar from "../../assets/images/avatar.webp";
import AstroanaxAvatar from "../../assets/images/astroanax.webp";
import ShivaAvatar from "../../assets/images/SHIVA KUMAR.webp";
import SharadAvatar from "../../assets/images/SHARAD.webp";
import AruneswarAvatar from "../../assets/images/ARUNESWAR REDDY.webp";
import FidhaAvatar from "../../assets/images/Fidha Ismail.webp";

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
        name: "Rehan",
        role: "hax0r",
        avatar: AstroanaxAvatar,
        website: "https://falsafa.in",
    },
    {
        name: "Shiva",
        role: "wanna die",
        avatar: ShivaAvatar,
        website: "shivagulapala.me",
    },
    {
        name: "Ordinary0x",
        role: "Just an ordinary person",
        avatar: SharadAvatar,
        github: "https://github.com/Ordinary0x",
    },
    {
        name: "Aruneswar Reddy",
        role: "Developer",
        avatar: AruneswarAvatar,
        linkedIn: "https://www.linkedin.com/in/arun2601",
        github: "https://github.com/Arun-2601-2007",
    },
    {
        name: "Fidha ismail",
        role: "RE Explorer",
        avatar: FidhaAvatar,
        linkedIn: "https://www.linkedin.com/in/fidha-ismail-606197311/",
        github: "https://github.com/fidhaismail",
    },
    {
        name: "Sahil Muhammed",
        role: "Amateur Cryptanalyst/Cryptographer",
        avatar: Avatar,
        github: "https://github.com/Sahil-Muhammed",
    },
];
