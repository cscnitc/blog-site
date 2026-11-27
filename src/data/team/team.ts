import Avatar from "../../assets/images/avatar.webp";
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

export interface TeamMember {
    name: string;
    role: string;
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
    {
        name: "Sana Sherin E K",
        role: "@SherlockSana",
        avatar: SanaAvatar,
        linkedIn: "https://www.linkedin.com/in/sana-sherin-15a53a418",
    },
    {
        name: "Muhammed Hanin",
        role: "@h0niin",
        avatar: HaninAvatar,
        github: "https://github.com/h0niin",
    },
    {
        name: "Ghazniya",
        role: "@ghazni",
        avatar: GhazniyaAvatar,
        linkedIn: "https://www.linkedin.com/in/ghazniya-abdul-gafoor-454114325",
    },
    {
        name: "Shinan Poroli",
        role: "@pshinan",
        avatar: ShinanAvatar,
        github: "https://github.com/porolishinan",
    },
    {
        name: "Sharad Chandra Munugala",
        role: "@Ordinary0x",
        avatar: SharadAvatar,
        linkedIn: "https://www.linkedin.com/in/sharad-chandra-munugala",
        github: "https://github.com/Ordinary0x",
    },
    {
        name: "Jasriyah E K",
        role: "@notme2",
        avatar: JasriyahAvatar,
        github: "https://github.com/jasriyahek2027",
    },
    {
        name: "Rabee Aman",
        role: "@neo",
        avatar: RabeeAvatar,
        linkedIn: "https://www.linkedin.com/in/rabeeaman",
    },
    {
        name: "Smithin J Raj",
        role: "@LeSmithBro",
        avatar: SmithinAvatar,
        github: "https://github.com/SmithinJRaj",
    },
    {
        name: "Rahul R",
        role: "@Orginatix",
        avatar: RahulAvatar,
        linkedIn: "https://www.linkedin.com/in/rahul-ranjit-416028393",
    },
    {
        name: "Benjamin Mathew",
        role: "@jammer",
        avatar: BenjaminAvatar,
        linkedIn: "https://www.linkedin.com/in/benjaminmathew06",
    },
    {
        name: "Punnoose Purakel",
        role: "@ppnse",
        avatar: PunnooseAvatar,
        website: "https://punn.cc",
    },
    {
        name: "Jayavarapu Venkata Harsha Vardhan",
        role: "@Harsha_Jay",
        avatar: HarshaAvatar,
        linkedIn: "https://www.linkedin.com/in/j-v-harsha-vardhan-144824335",
    },
    {
        name: "Chetan Khetpal",
        role: "@BoyWithBrain",
        avatar: ChetanAvatar,
        linkedIn: "https://www.linkedin.com/in/chetan-khetpal-a4a01a435",
        github: "https://github.com/BoyWithBrain",
    },
    {
        name: "Reja Fairooz",
        role: "@rjf-ctrl",
        avatar: RejaAvatar,
        linkedIn: "https://www.linkedin.com/in/reja-fairooz",
    },
    {
        name: "Dina Biju",
        role: "@|)INÆ",
        avatar: DinaAvatar,
        linkedIn: "https://www.linkedin.com/in/dina-biju-250a9a369",
    },
    {
        name: "Rithu Reksha Raj",
        role: "@tricky4747",
        avatar: RithuAvatar,
        github: "https://github.com/tricky4747",
    },
    {
        name: "Mohamed Sami AV",
        role: "@Kaskas",
        avatar: SamiAvatar,
        github: "https://github.com/Sami2225",
    },
    {
        name: "Sai Pranav Parasuraman",
        role: "@Oudeis",
        avatar: SaiPranavAvatar,
        linkedIn: "https://www.linkedin.com/in/sai-pranav-c0d3r6",
    },
];

export const alumni: AlumniMember[] = [
    {
        name: "Bhaskar Pal",
        avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGrEfOA1UUEkw/profile-displayphoto-shrink_200_200/B4DZXBs.rLHkAY-/0/1742711551012?e=1778112000&v=beta&t=9G907KBntF8fbftVHRFuL47F7I0SSEjjSX-kTCQf0gM",
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
