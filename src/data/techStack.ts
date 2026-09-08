import type { IconType } from "react-icons";
import {
  SiPython,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiGo,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiTerraform,
  SiGooglecloud,
  SiSupabase,
  SiGithub,
  SiGitlab,
  SiGithubactions,
  SiNewrelic,
  SiSentry,
  SiMake,
  SiClaudecode,
  SiBurpsuite,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbBrandAzure, TbApi, TbBrandOpenai } from "react-icons/tb";

export interface TechItem {
  name: string;
  icon: IconType;
}

// Tecnologías con las que he trabajado en proyectos y experiencia profesional.
// Se muestran ordenadas alfabéticamente (ver `techStack` más abajo).
const techStackItems: TechItem[] = [
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Go", icon: SiGo },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "SQLite", icon: SiSqlite },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: SiDocker },
  { name: "Terraform", icon: SiTerraform },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "AWS", icon: FaAws },
  /*{ name: "Microsoft Azure", icon: TbBrandAzure },*/
  { name: "Supabase", icon: SiSupabase },
  { name: "GitHub", icon: SiGithub },
  { name: "GitLab", icon: SiGitlab },
  { name: "GitHub Actions (CI/CD)", icon: SiGithubactions },
  { name: "New Relic", icon: SiNewrelic },
  { name: "Sentry", icon: SiSentry },
  { name: "Make", icon: SiMake },
  { name: "APIs de terceros", icon: TbApi },
  { name: "ChatGPT", icon: TbBrandOpenai },
  { name: "Claude Code", icon: SiClaudecode },
  { name: "Burp Suite", icon: SiBurpsuite },
];

export const techStack: TechItem[] = [...techStackItems].sort((a, b) =>
  a.name.localeCompare(b.name, "es", { sensitivity: "base" })
);
