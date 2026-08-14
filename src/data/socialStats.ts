import { SiYoutube, SiInstagram, SiTiktok, SiSubstack } from "react-icons/si";
import type { IconType } from "react-icons";

export interface SocialIcon {
  icon: IconType;
  colorClass: string;
}

export const socialIcons: SocialIcon[] = [
  { icon: SiTiktok, colorClass: "text-foreground" },
  { icon: SiInstagram, colorClass: "text-cyber-purple" },
  { icon: SiYoutube, colorClass: "text-cyber-red" },
  { icon: SiSubstack, colorClass: "text-cyber-green" },
];

// Solo se guarda el total aproximado — el desglose de seguidores por red no se expone por privacidad.
export const totalFollowersApprox = 19000;
