import { SiYoutube, SiInstagram, SiTiktok, SiSubstack } from "react-icons/si";
import type { IconType } from "react-icons";

export interface SocialIcon {
  icon: IconType;
  colorClass: string;
  label: string;
  href: string;
}

const PRIVTREE_URL = "https://privtree.com/@srwatchman";

export const socialIcons: SocialIcon[] = [
  { icon: SiTiktok, colorClass: "text-foreground", label: "TikTok", href: PRIVTREE_URL },
  { icon: SiInstagram, colorClass: "text-cyber-purple", label: "Instagram", href: PRIVTREE_URL },
  { icon: SiYoutube, colorClass: "text-cyber-red", label: "YouTube", href: PRIVTREE_URL },
  { icon: SiSubstack, colorClass: "text-cyber-green", label: "Substack", href: PRIVTREE_URL },
];

// Solo se guarda el total aproximado — el desglose de seguidores por red no se expone por privacidad.
export const totalFollowersApprox = 19000;
