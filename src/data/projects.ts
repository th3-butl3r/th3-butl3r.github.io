export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image?: string;
  githubUrl?: string;
  blogUrl?: string;
  demoUrl?: string;
  tags: string[];
}

export const projects: ProjectData[] = [
  {
    id: "bastionlab-website",
    title: "Bastion Lab Website",
    description:
      "Sitio web personal y de servicios. Construido con React, TypeScript y Tailwind CSS. Desplegado en GitHub Pages.",
    image: undefined,
    githubUrl: undefined,
    blogUrl: undefined,
    demoUrl: "https://bastionlab.com.mx",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  
];

export const PROJECTS_PREVIEW_LIMIT = 4;
