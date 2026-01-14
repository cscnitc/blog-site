import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconWeb from "@/assets/icons/IconWeb.svg";
import IconReddit from "@/assets/icons/IconWeb.svg";
import IconSignal from "@/assets/icons/IconWeb.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconRss from "@/assets/icons/IconRss.svg";
import IconCTFtime from "@/assets/icons/IconCTFtime.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon?: (_props: Props) => Element;
  iconUrl?: string;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/cscnitc",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: `RSS Feed`,
    icon: IconRss,
  },
  {
    name: "CTFtime",
    href: "https://ctftime.org/team/373093",
    linkTitle: `${SITE.title} on CTFtime`,
    icon: IconCTFtime,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/cyber-secuirty-club-nitc/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "mailto:csc@nitc.ac.in",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "HackerNews",
    href: "https://news.ycombinator.com/submitlink?u={url}&t={title}",
    linkTitle: `Share this post on Hacker News`,
    iconUrl: "https://news.ycombinator.com/y18.svg",
  },
  {
    name: "X",
    href: "https://x.com/intent/tweet?url={url}&text={title}",
    linkTitle: `Share this post on X`,
    iconUrl: "https://abs.twimg.com/favicons/twitter.3.ico",
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/submit?url={url}&title={title}",
    linkTitle: `Share this post on Reddit`,
    iconUrl: "https://www.redditstatic.com/shreddit/assets/favicon/192x192.png",
  },
  {
    name: "Email",
    href: "mailto:?subject={title}&body={url}",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url={url}&text={title}",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Signal",
    href: "sgnl://send?text={url}",
    linkTitle: `Share this post via Signal (requires Signal app)`,
    iconUrl: "https://signal.org/assets/images/favicon/favicon.svg",
  },
] as const;
