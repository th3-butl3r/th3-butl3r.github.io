import { Code2, Cctv, Wrench, LucideIcon } from "lucide-react";

export const WHATSAPP_NUMBER = "7531210815";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  /** Etiqueta corta para el selector de pestañas (cabe en móvil). */
  tabLabel: string;
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
    slug: "desarrollo-web-software",
    icon: Code2,
    tabLabel: "Desarrollo Web",
    title: "Desarrollo Web y Software a Medida",
    subtitle: "Dirigido a particulares, emprendedores y pequeñas empresas",
    badge: "Particulares, Emprendedores & Pequeñas empresas",
    shortPitch: "Sitios web y aplicaciones hechos a tu medida.",
    description:
      "Desarrollo de sitios web, aplicaciones y software a medida para negocios que necesitan algo más que una plantilla.",
    features: [
      "Sitios web y landing pages",
      "Aplicaciones web y paneles de administración a medida",
      "Automatización de tareas y procesos",
      "Configuración de software para negocios: Soft Restaurant & MyBusiness POS",
    ],
    ctaLabel: "Ver más",
    ctaVariant: "primary",
    whatsappMessage:
      "Hola, necesito desarrollo web o software a medida. ¿Me puedes dar más información?",
    detail: {
      intro:
        "Desarrollo de sitios web, aplicaciones y software a medida: desde una landing page hasta paneles de administración, automatizaciones e integración de sistemas para tu negocio.",
      sections: [
        {
          title: "Sitios y aplicaciones web",
          body: "Sitios rápidos y responsive, hechos a la medida de tu negocio y no al revés.",
          bullets: [
            "Landing pages y sitios institucionales",
            "Tiendas y catálogos en línea",
            "Paneles de administración a medida",
            "Despliegue, dominio y correo",
          ],
        },
        {
          title: "Software y automatización",
          body: "Herramientas a medida para eliminar el trabajo manual y repetitivo.",
          bullets: [
            "Bots para tareas repetitivas",
            "Automatización de reportes",
            "Integración entre sistemas y APIs",
            "Migración y limpieza de datos",
          ],
        },
        {
          title: "Software para negocios",
          body: "Configuración de sistemas de punto de venta y su puesta en marcha.",
          bullets: [
            "Soft Restaurant",
            "MyBusiness POS",
            "Configuración de estaciones de trabajo y meseros",
            "Respaldo y soporte inicial",
          ],
        },
      ],
    },
  },
  {
    slug: "vigilancia-inteligente",
    icon: Cctv,
    tabLabel: "Vigilancia IA",
    title: "Vigilancia Inteligente",
    subtitle: "Dirigido a empresas, obra e industria",
    badge: "Empresas, Obra & Industria",
    shortPitch: "Algoritmos de IA que corren sobre tus cámaras.",
    description:
      "Desarrollo de algoritmos de detección a medida que se montan sobre tu CCTV existente, más flexibles que los kits comerciales.",
    features: [
      "Detección personalizada: personas, objetos, EPP, vehículos",
      "Alertas en tiempo real: caídas en obra, celulares en zonas restringidas y más",
      "Se monta sobre tus cámaras actuales",
      "Instalación de cámaras solo si el proyecto lo requiere",
    ],
    ctaLabel: "Ver más",
    ctaVariant: "primary",
    whatsappMessage:
      "Hola, me interesa un algoritmo de detección para CCTV (vigilancia inteligente). ¿Me puedes dar más información?",
    detail: {
      intro:
        "Desarrollo de algoritmos de visión por computadora que se ejecutan sobre las cámaras que ya tienes, entrenados para tu caso de uso concreto y sin depender de kits cerrados.",
      sections: [
        {
          title: "Algoritmos a medida",
          body: "Modelos de visión por computadora entrenados para detectar exactamente lo que tu operación necesita.",
          bullets: [
            "Detección de caídas en obra",
            "Detección de celulares en zonas peligrosas",
            "Uso de EPP: casco, chaleco, botas",
            "Conteo de personas y control de aforo",
            "Acceso a zonas restringidas",
          ],
        },
        {
          title: "Integración sobre CCTV existente",
          body: "El software se conecta a tu infraestructura actual; no hace falta cambiar de cámaras.",
          bullets: [
            "Compatible con RTSP/ONVIF",
            "Sin depender de kits cerrados",
            "Procesamiento cloud o de manera local",
          ],
        },
        {
          title: "Alertas y despliegue",
          body: "Notificaciones automáticas cuando ocurre algo y puesta en marcha completa.",
          bullets: [
            "Alertas por WhatsApp, Telegram o correo",
            "Registro de eventos con captura de imagen",
            "Instalación de cámaras si el proyecto lo demanda",
          ],
        },
      ],
    },
  },
  {
    slug: "soporte-tecnico",
    icon: Wrench,
    tabLabel: "Soporte Técnico",
    title: "Soporte Técnico",
    subtitle: "Dirigido a particulares, hogares y pequeñas empresas",
    badge: "Particulares, Hogares & Pequeñas empresas",
    shortPitch: "Resuelvo fallos de equipos, redes y software.",
    description:
      "Servicio de soporte para hogares y pequeños negocios: redes, mantenimiento preventivo y resolución de fallos con atención personalizada.",
    features: [
      "Instalación de redes LAN y Wi-Fi",
      "Configuración de routers y repetidores",
      "Mantenimiento preventivo de equipos",
      "Diagnóstico de hardware y optimización",
    ],
    ctaLabel: "Ver más",
    ctaVariant: "primary",
    whatsappMessage:
      "Hola, necesito soporte técnico para mi hogar/negocio. ¿Me puedes ayudar?",
    detail: {
      intro:
        "Soporte técnico integral para hogares y pequeños negocios: instalación de redes, mantenimiento preventivo de equipos y resolución de fallos del día a día.",
      sections: [
        {
          title: "Redes e instalación",
          body: "Dejo tu red funcionando de forma estable en toda la casa o el local.",
          bullets: [
            "Instalación de redes LAN y Wi-Fi",
            "Configuración de routers",
            "Ampliación de cobertura con repetidores",
            "Cableado estructurado básico",
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
        {
          title: "Resolución de fallos",
          body: "Diagnóstico y solución de los problemas más comunes en equipos de cómputo.",
          bullets: [
            "Equipos lentos o que no encienden",
            "Eliminación de malware",
            "Recuperación básica de archivos",
            "Respaldo y migración de datos",
          ],
        },
      ],
    },
  },
  // {
  //   slug: "seguridad-digital",
  //   icon: Shield,
  //   tabLabel: "Seguridad Digital",
  //   title: "Seguridad Digital",
  //   subtitle: "Dirigido a particulares, hogares y pequeñas/medianas empresas, así como a colectivos y organizaciones orientadas a la justicia social y los derechos humanos",
  //   badge: "Particulares, Hogares, Empresas & Colectivos",
  //   shortPitch: "Revisión y protección de cuentas, dispositivos e información.",
  //   description:
  //     "Recopilación y análisis de información de fuentes públicas para investigaciones digitales profundas.",
  //   features: ["Prevención de fraudes y robo de identidad", "Revisión de seguridad en cuentas y dispositivos", "Revisión de exposición digital", "Revisión de filtraciones"],
  //   ctaLabel: "Ver más",
  //   ctaVariant: "primary",
  //   whatsappMessage:
  //     "Hola, necesito un servicio de seguridad digital e investigación. ¿Me puedes dar más información?",
  //   detail: {
  //     intro:
  //       "Servicio de asesoría y acompañamiento en seguridad digital y privacidad, para el buen manejo de la información en la vida digital.",
  //     sections: [
  //       {
  //         title: "Protección y prevención",
  //         body: "Protegemos tus cuentas, dispositivos e información personal mediante auditorías de seguridad y configuración adecuada, reduciendo riesgos de fraude, accesos no autorizados y exposición digital.",
  //         bullets: ["Auditoría de seguridad en cuentas y dispositivos", "Configuración de privacidad y accesos", "Detección de exposición de datos personales", "Prevención de fraudes y phishing"],
  //       },
  //       {
  //         title: "Análisis e inteligencia digital",
  //         body: "Analizamos tu presencia en línea utilizando técnicas de inteligencia digital para identificar vulnerabilidades, exposición de datos y posibles amenazas en el entorno digital.",
  //         bullets: ["Análisis de redes sociales y exposición digital", "Investigación de dominios, IPs y actividad online", "Geolocalización de eventos e imágenes", "Análisis de metadatos"],
  //       },
  //       {
  //         title: "Respuesta y acompañamiento",
  //         body: "Te brindamos un diagnóstico claro y te acompañamos con acciones concretas para mitigar riesgos, resolver incidentes y fortalecer tu seguridad a largo plazo.",
  //         bullets: ["Diagnóstico claro y plan de acción", "Evidencia documentada", "Asesoría personalizada", "Seguimiento y mejora continua"],
  //       },
  //     ],
  //   },
  // },
  // Pendiente: reactivar "Seguridad Digital" cuando la audiencia de divulgación
  // crezca lo suficiente para que valga la pena ofrecerlo como servicio.
];

export const getServiceBySlug = (slug?: string) =>
  services.find((s) => s.slug === slug);
