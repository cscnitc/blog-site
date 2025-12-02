import Avatar from "../../assets/images/avatar.jpg";


export interface TeamMember {
  name: string;
  role: string;
  avatar: string | ImageMetadata;
  github?: string;
  twitter?: string;
}

export const team: TeamMember[] = [
  {
    name: "muhsin",
    role: "Rev Specialist",
    avatar: Avatar,
    github: "https://github.com/muhsin",
    twitter: "https://twitter.com/muhsin"
  },
  {
    name: "aruneswar",
    role: "Web/Crypto",
    avatar: Avatar,    // using same avatar for now
    github: "https://github.com/aruneswar",
    twitter: "https://twitter.com/arun"
  },
  {
    name: "cyber_samurai",
    role: "Forensics Lead",
    avatar: Avatar,
    github: "https://github.com/cyber",
    twitter: "https://twitter.com/cyber"
  },
  {
    name: "net_runner",
    role: "Pwn/Misc",
    avatar: Avatar,
    github: "https://github.com/netrunner",
    twitter: "https://twitter.com/netrunner"
  }
];
