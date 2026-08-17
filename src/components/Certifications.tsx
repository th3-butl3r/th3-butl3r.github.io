import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn, Clock3, Linkedin } from "lucide-react";
import { useReveal, revealClass } from "@/hooks/useReveal";
import CountUp from "@/components/CountUp";

import certUdemyDataRecovery from "@/assets/CertificadoUdemy.webp";
import certSupport from "@/assets/CertificadoSupport.webp";
import certFundCiber from "@/assets/CertificadoFundamentosCiber.webp";
import certMalware from "@/assets/CertificadoMalware.webp";
import certCiberPersonal from "@/assets/CertificadoCiberPersonal.webp";
import certPhishing from "@/assets/CertificadoPhishing.webp";
import certOSINT from "@/assets/CertificadoOSINT.webp";
import certRedes from "@/assets/CertificadoRedes.webp";
import certMetrix from "@/assets/CertificadoHackmetrix.webp";
import certOwasp from "@/assets/CertificadoOWASP10.webp";
import certCiberWhats from "@/assets/CertificadoCiberWhatsApp.webp";
import certIntroInfoForense from "@/assets/CertificadoIntroInformaticaForense.webp";
import certCiberPreventiva from "@/assets/CertificadoCiberPreventiva.webp";
import certCCTV from "@/assets/cctv-2025.webp";

type CategoryId = "seguridad" | "soporte" | "recuperacion" | "osint";

const categories: { id: CategoryId; label: string; color: "cyber-blue" | "cyber-purple" | "cyber-green" | "cyber-red" }[] = [
  { id: "seguridad", label: "Seguridad Digital y Privacidad", color: "cyber-blue" },
  { id: "soporte", label: "Soporte Técnico", color: "cyber-purple" },
  { id: "recuperacion", label: "Recuperación de datos", color: "cyber-green" },
  { id: "osint", label: "OSINT & Investigación", color: "cyber-red" },
];

const colorClasses = {
  "cyber-blue": { dot: "bg-cyber-blue", badgeBg: "bg-cyber-blue/15", badgeText: "text-cyber-blue" },
  "cyber-purple": { dot: "bg-cyber-purple", badgeBg: "bg-cyber-purple/15", badgeText: "text-cyber-purple" },
  "cyber-green": { dot: "bg-cyber-green", badgeBg: "bg-cyber-green/15", badgeText: "text-cyber-green" },
  "cyber-red": { dot: "bg-cyber-red", badgeBg: "bg-cyber-red/15", badgeText: "text-cyber-red" },
} as const;

interface CertItem {
  name: string;
  org?: string;
  year: string;
  category: CategoryId;
  image?: string;
  inProgress?: boolean;
}

const certItems: CertItem[] = [
  { name: "Ciberseguridad Preventiva", org: "Platzi", year: "2026", category: "seguridad", image: certCiberPreventiva },
  { name: "Ciberseguridad Web", org: "Hackmetrix", year: "2025", category: "seguridad", image: certMetrix },
  { name: "Ciberseguridad Personal", org: "Platzi", year: "2025", category: "seguridad", image: certCiberPersonal },
  { name: "Ciberseguridad: Simulador Práctico en WhatsApp", year: "2026", category: "seguridad", image: certCiberWhats },
  { name: "Análisis de Pishing en Email", org: "LetsDefend", year: "2025", category: "seguridad", image: certPhishing },
  { name: "OWASP Top 10 Riesgos en Aplicaciones", org: "Platzi", year: "2024", category: "seguridad", image: certOwasp },
  { name: "Análisis de Malware", org: "Platzi", year: "2025", category: "seguridad", image: certMalware },
  { name: "Fundamentos de Ciberseguridad", org: "Platzi", year: "2026", category: "seguridad", image: certFundCiber },

  { name: "Atención al Cliente y Soporte a Usuarios", org: "Platzi", year: "2025", category: "soporte", image: certSupport },
  { name: "Redes Informáticas de Internet", org: "Platzi", year: "2025", category: "soporte", image: certRedes },
  { name: "Instalador Profesional de Cámaras de Seguridad", org: "Udemy", year: "2026", category: "soporte", image: certCCTV },

  { name: "Reparación de discos duros y recuperación de datos", org: "Udemy", year: "2025", category: "recuperacion", image: certUdemyDataRecovery },
  { name: "Introducción a Informática Forense", org: "Platzi", year: "2025", category: "recuperacion", image: certIntroInfoForense },
  /*{ name: "Experto en Recuperación de datos", org: "Whop", year: "2025", category: "recuperacion", inProgress: true },*/

  { name: "OSINT: Open-Source Intelligence", org: "Udemy", year: "2025", category: "osint", image: certOSINT },
  /*{ name: "Rastreo de acosadores y ciberdelincuentes", org: "Udemy", year: "", category: "osint", inProgress: true },*/
];

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">("all");
  const [selectedCert, setSelectedCert] = useState<{ name: string; image: string } | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useReveal<HTMLDivElement>();

  const filtered = activeCategory === "all" ? certItems : certItems.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-10 sm:mb-12 ${revealClass(headerVisible)}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            CURSOS & CERTIFICACIONES
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 mb-4">
            El aprendizaje es de por vida; actualizo mis conocimientos técnicos constantemente. Toca cualquier
            certificado para verlo completo.
          </p>
          <a
            href="https://www.linkedin.com/in/cvidale/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <span>El listado completo de mis certificaciones está en mi LinkedIn</span>
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-glow"
                : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
            }`}
          >
            Todos <span className="opacity-70">({certItems.length})</span>
          </button>
          {categories.map((cat) => {
            const count = certItems.filter((c) => c.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat.label} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* List */}
        <div
          key={activeCategory}
          className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8"
        >
          {filtered.map((cert, idx) => {
            const cat = categories.find((c) => c.id === cert.category)!;
            const colors = colorClasses[cat.color];

            if (cert.inProgress) {
              return (
                <div
                  key={cert.name}
                  style={{ animationDelay: `${idx * 40}ms` }}
                  className="animate-in fade-in slide-in-from-left-2 fill-mode-both duration-300 flex items-center gap-3 py-3 border-b border-border/60"
                >
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                    <Clock3 className="w-5 h-5 text-muted-foreground/50" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-muted-foreground truncate">{cert.name}</p>
                    <p className="text-xs text-muted-foreground/70 truncate">{cert.org}</p>
                  </div>
                  <Badge variant="outline" className="text-[10px] flex-shrink-0">
                    En curso
                  </Badge>
                </div>
              );
            }

            return (
              <button
                key={cert.name}
                onClick={() => cert.image && setSelectedCert({ name: cert.name, image: cert.image })}
                style={{ animationDelay: `${idx * 40}ms` }}
                className="animate-in fade-in slide-in-from-left-2 fill-mode-both duration-300 group flex items-center gap-3 py-3 border-b border-border/60 text-left hover:bg-muted/40 transition-colors duration-200 -mx-2 px-2 rounded-lg"
              >
                <div className="relative w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={cert.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-200 flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors duration-200">
                    {cert.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {cert.org ? `${cert.org} · ${cert.year}` : cert.year}
                  </p>
                </div>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`} />
              </button>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="py-4">
            <CountUp value={5} suffix="+" className="text-3xl sm:text-4xl font-black text-cyber-blue mb-2 tabular-nums" />
            <div className="text-sm sm:text-base text-muted-foreground">Certificaciones Activas</div>
          </div>
          <div className="py-4">
            <CountUp value={150} suffix="+" className="text-3xl sm:text-4xl font-black text-cyber-purple mb-2 tabular-nums" />
            <div className="text-sm sm:text-base text-muted-foreground">Horas de Entrenamiento Anual</div>
          </div>
          <div className="py-4">
            <CountUp value={100} suffix="%" className="text-3xl sm:text-4xl font-black text-cyber-green mb-2 tabular-nums" />
            <div className="text-sm sm:text-base text-muted-foreground">Certificaciones Vigentes</div>
          </div>
        </div>

        {/* Certification Dialog */}
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-bold">
                Certificación {selectedCert?.name}
              </DialogTitle>
            </DialogHeader>
            {selectedCert && (
              <div className="flex justify-center">
                <img
                  src={selectedCert.image}
                  alt={`Certificación ${selectedCert.name}`}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;
