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

  {
    id: "cvmatch-website",
    title: "CV Match",
    description:
      "Sitio web para la compatibilidad automática entre una oferta y un CV. Así como la recomendación de optimizaciones a un CV y/o la generación automática de un CV optimizado para la oferta laboral.",
    image: undefined,
    githubUrl: "https://github.com/th3-butl3r/CV-Generator",
    blogUrl: "https://medium.com/@th3-butl3r/road-to-devsecops-pt-1-aprendiendo-a-construir-software-seguro-desde-cero-2178169b0aa7",
    demoUrl: undefined,
    tags: ["Python", "Django", "Docker"],
  },
  
];

export const PROJECTS_PREVIEW_LIMIT = 4;
