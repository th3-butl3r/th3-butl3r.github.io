import { Search, Headset, HardDrive, LucideIcon, Shield } from "lucide-react";

export const WHATSAPP_NUMBER = "7531210815";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  badge: string;
  shortPitch: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaVariant: "primary" | "whatsapp";
  whatsappMessage: string;
  detail: {
    intro: string;
    sections: { title: string; body: string; bullets?: string[] }[];
  };
}

export const services: ServiceData[] = [
  {
    slug: "soporte-tecnico",
    icon: Headset,
    title: "Soporte Técnico",
    subtitle: "Dirigido a particulares, hogares y pequeñas/medianas empresas (PYMES)",
    badge: "Particulares, Hogares & Pymes",
    shortPitch: "Solucionamos problemas técnicos con rapidez.",
    description:
      "Servicios técnicos especializados para hogares y pequeños negocios con atención personalizada.",
    features: [
      "Instalación y configuración de redes LAN",
      "Instalación y configuración de videovigilancia",
      "Instalación de software",
    ],
    ctaLabel: "Ver más",
    ctaVariant: "primary",
    whatsappMessage:
      "Hola, necesito soporte técnico para mi hogar/negocio. ¿Me puedes ayudar?",
    detail: {
      intro:
        "Brindamos soporte técnico integral para hogares y pequeños/medianos negocios: desde instalación de redes LAN hasta cámaras de seguridad y mantenimiento preventivo de equipos.",
      sections: [
        {
          title: "Instalación y configuración",
          body: "Configuramos tu red, equipos y software para que todo funcione desde el primer día.",
          bullets: [
            "Instalación de redes LAN y Wi-Fi",
            "Configuración de routers y switches",
            "Instalación de software empresarial: Soft Restaurant, MyBusinessPos, etc.",
            "Configuración de impresoras y periféricos",
          ],
        },
        {
          title: "Cámaras de seguridad",
          body: "Instalación profesional con marcas líderes (Dahua, Hikvision, Epcom, Hilook).",
          bullets: [
            "Instalación y cableado",
            "Mantenimiento periódico",
            "Configuración segura sin exponer grabaciones a Internet",
          ],
        },
        {
          title: "Mantenimiento preventivo",
          body: "Evita fallos costosos con revisiones periódicas de tus equipos.",
          bullets: [
            "Limpieza interna y externa",
            "Actualización de software",
            "Diagnóstico de hardware",
            "Optimización de rendimiento",
          ],
        },
      ],
    },
  },
  {
    slug: "seguridad-digital",
    icon: Shield,
    title: "Seguridad Digital",
    subtitle: "Dirigido a particulares, hogares, pequeñas y medianas empresas (PYMES), así como a colectivos y organizaciones orientadas a la justicia social y los derechos humanos",
    badge: "Particulares, Hogares, Pymes & Colectivos",
    shortPitch: "Revisión y protección de cuentas, dispositivos e información.",
    description:
      "Recopilación y análisis de información de fuentes públicas para investigaciones digitales profundas.",
    features: ["Prevención de fraudes y robo de identidad", "Revisión de seguridad en cuentas y dispositivos", "Revisión de exposición digital", "Revisión de filtraciones"],
    ctaLabel: "Ver más",
    ctaVariant: "primary",
    whatsappMessage:
      "Hola, necesito un servicio de seguridad digital e investigación. ¿Me puedes dar más información?",
    detail: {
      intro:
        "Servicio de asesoría y acompañamiento en seguridad digital y privacidad, para el buen manejo de la información en la vida digital.",
      sections: [
        {
          title: "Protección y prevención",
          body: "Protegemos tus cuentas, dispositivos e información personal mediante auditorías de seguridad y configuración adecuada, reduciendo riesgos de fraude, accesos no autorizados y exposición digital.",
          bullets: ["Auditoría de seguridad en cuentas y dispositivos", "Configuración de privacidad y accesos", "Detección de exposición de datos personales", "Prevención de fraudes y phishing"],
        },
        {
          title: "Análisis e inteligencia digital",
          body: "Analizamos tu presencia en línea utilizando técnicas de inteligencia digital para identificar vulnerabilidades, exposición de datos y posibles amenazas en el entorno digital.",
          bullets: ["Análisis de redes sociales y exposición digital", "Investigación de dominios, IPs y actividad online", "Geolocalización de eventos e imágenes", "Análisis de metadatos"],
        },
        {
          title: "Respuesta y acompañamiento",
          body: "Te brindamos un diagnóstico claro y te acompañamos con acciones concretas para mitigar riesgos, resolver incidentes y fortalecer tu seguridad a largo plazo.",
          bullets: ["Diagnóstico claro y plan de acción", "Evidencia documentada", "Asesoría personalizada", "Seguimiento y mejora continua"],
        },
      ],
    },
  },
  // {
  //   slug: "data-recovery",
  //   icon: HardDrive,
  //   title: "Recuperación de Datos",
  //   subtitle: "Dirigido a particulares, hogares y pequeñas/medianas empresas (PYMES)",
  //   badge: "Particulares, Hogares & Pymes",
  //   shortPitch: "Recuperamos tus archivos eliminados.",
  //   description:
  //     "Recuperación forense de datos críticos en dispositivos dañados o comprometidos.",
  //   features: ["Disco duro, SSD, USB y más", "Diagnóstico sin costo", "No datos, no pago"],
  //   ctaLabel: "Ver más",
  //   ctaVariant: "primary",
  //   whatsappMessage:
  //     "Hola, necesito recuperar datos de un dispositivo. ¿Me puedes ayudar?",
  //   detail: {
  //     intro:
  //       "Recuperamos información crítica ante fallas lógicas en dispositivos de almacenamiento: USB, SD, Micro SD, HDD, SSD. Diagnóstico inicial sin costo.",
  //     sections: [
  //       {
  //         title: "Dispositivos compatibles",
  //         body: "Trabajamos con prácticamente cualquier medio de almacenamiento de uso común.",
  //         bullets: ["Discos duros HDD y SSD", "Memorias USB y tarjetas SD"],
  //       },
  //       {
  //         title: "Tipos de pérdida",
  //         body: "Recuperamos datos en distintos escenarios.",
  //         bullets: ["Eliminación accidental", "Formateo del dispositivo", "Daño lógico"],
  //       },
  //       {
  //         title: "Proceso forense",
  //         body: "Seguimos metodologías y buenas prácticas de análisis digital para garantizar la integridad, trazabilidad y seguridad de la información durante todo el proceso.",
  //         bullets: ["Diagnóstico sin costo", "Cotización transparente", "Entrega segura de la información"],
  //       },
  //     ],
  //   },
  // },
];

export const getServiceBySlug = (slug?: string) =>
  services.find((s) => s.slug === slug);