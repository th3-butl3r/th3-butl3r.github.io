export interface ExperienceEntry {
  role: string;
  context: string;
  period: string;
  did: string;
  offered: string;
  learned: string;
}

export interface ExperienceCategory {
  id: string;
  title: string;
  entries: ExperienceEntry[];
}

export const experience: ExperienceCategory[] = [
  {
    id: "support",
    title: "Soporte TI",
    entries: [
      {
        role: "Técnico",
        context: "Freelance",
        period: "ago. 2025 - Actualidad",
        did: "Investigué y documenté fraudes digitales. Configuré una red LAN para la operativa de un restaurante, instalé un sistema CCTV de 4 cámaras y di mantenimiento a un sistema de 16 cámaras.",
        offered: "Reporte una estafa financiera a Megacable que se aprovechaba del nombre de la empresa. Mejoré los tiempos de toma de órdenes y emisión de cuentas en el restaurante. Mejoré la seguridad con la videovigilancia.",
        learned: "Investigación a partir de fuentes abiertas, generación de documentación y seguimiento de la información. Planear una topología de red para la operación de un negocio.  Instalación, configuración y mantenimiento de equipos Dahua.",
      },
    ],
  },
  {
    id: "BackendD",
    title: "Backend Developer",
    entries: [
      {
        role: "Bakend Developer",
        context: "Strat Plus",
        period: "sept. 2025 - feb. 2026",
        did: "Desarrollé un par de microservicios con Golang, alojados en GCP, para una superapp utilizada por los clientes de una cadena de casinos en México.",
        offered: "Implementación de una estrategia DLP para el respaldo y la prevención de la pérdida de información y el desarrollo de los microservicios.",
        learned: "Estrategias para el respaldo de la información:, Golang, Cloud SQL, Pub/Sub y gestión de secretos con GCP.",
      },
    ],
  },
  {
    id: "seguridad-digital",
    title: "Analista de seguridad web",
    entries: [
      {
        role: "Trainee en Hackmetrix Academy",
        context: "Hackmetrix",
        period: "ene. 2025 - jun. 2025",
        did: "Programa intensivo de ciberseguridad ofensiva y hacking ético. Implementación de pruebas de penetración y explotación de vulnerabilidades críticas.",
        offered: "Redacción de informes ejecutivos y técnicos, documentación de evidencias forenses, propuesta de mitigación y remediación y presentaciones ante equipos de seguridad C-Level.",
        learned: "Metodologías de investigación digital, análisis de metadatos, explotación de vulnerabilidades OWASP TOP 10 y el uso de herramientas como Burp Suite, Nmap, Chisel y Ngrok.",
      },
    ],
  },
  {
    id: "BackendE2",
    title: "Backend Engineer",
    entries: [
      {
        role: "Backend Engineer Mid L2",
        context: "Fairplay",
        period: "nov. 2021 - jun. 2025",
        did: "Desarrollé microservicios con FastAPI para la conexión con el Banco de México mediante STP para el procesamiento y dispersión de crédito. También realicé la implementación de un microservicio para la transacción con tarjetas virtuales y un microservicio para la creación de tarjetas virtuales. Los servicios mencionados estaban optimizados para retornar una respuesta HTTP en menos de un segundo.",
        offered: "Planeación y desarrollo del código, pruebas unitarias y pruebas de estrés al código, así como su debida documentación.",
        learned: "FastAPI, integración con servicios externos, desarrollo seguro, el uso de caché, bases de datos NoSQL y el uso de la nube AWS.",
      },
    ],
  },
  {
    id: "BackendE",
    title: "Backend Engineer",
    entries: [
      {
        role: "Backend Engineer",
        context: "IntelliDataSys",
        period: "may. 2021 - oct. 2021",
        did: "Desarrollé la integración de una API de ventas con Azure Blob Storage, Azure Container. El servicio fue realizado haciendo uso de Python y el framework Django.",
        offered: "Investigación de herramientas, contenerización y despliegue, así como su debida documentación.",
        learned: "Microsoft Azure, específicamente los servicios Blob Storage y Azure Container.",
      },
    ],
  },
];
