import type { IconType } from "react-icons";
import {
  SiPython,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiGo,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiTerraform,
  SiGooglecloud,
  SiSupabase,
  SiGithub,
  SiClaudecode,
  SiBurpsuite,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbBrandAzure } from "react-icons/tb";

export interface TechItem {
  name: string;
  icon: IconType;
}

// Tecnologías con las que he trabajado en proyectos y experiencia profesional.
export const techStack: TechItem[] = [
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Go", icon: SiGo },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: SiDocker },
  { name: "Terraform", icon: SiTerraform },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "AWS", icon: FaAws },
  /*{ name: "Microsoft Azure", icon: TbBrandAzure },*/
  { name: "Supabase", icon: SiSupabase },
  { name: "GitHub", icon: SiGithub },
  { name: "Claude Code", icon: SiClaudecode },
  { name: "Burp Suite", icon: SiBurpsuite },
];
