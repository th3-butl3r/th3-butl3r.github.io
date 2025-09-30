import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


import { useState } from "react";


import certUdemyDataRecovery from "@/assets/CertificadoUdemy.webp";
import certHackmetrix from "@/assets/CertificadoHackmetrix.webp";
import certUnam from "@/assets/CertificadoUNAM.webp";
import certOwasp from "@/assets/CertificadoOWASP10.webp";
import certPlatziMetasploit from "@/assets/CertificadoMetasploit.webp";
import certPhishing from "@/assets/CertificadoPhishing.webp";
import certSecureDev from "@/assets/CertificadoDesarrolloSeguro.webp";


const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState<{ name: string; image: string } | null>(null);
    const certImages: Record<string, string> = {
      "Reparación de discos duros y recuperación de datos": certUdemyDataRecovery,
      "Pentesting Web": certHackmetrix,
      "Lic. Tecnologías de la Información en Ciencias": certUnam,
      "OWASP TOP 10": certOwasp,
      "Pentesting con Metasploit": certPlatziMetasploit,
      "Pishing Expert": certPhishing,
      "Desarrollo Seguro": certSecureDev,
    };
  const certifications = [
    {
      category: "Pentesting Web",
      color: "cyber-blue",
      certs: [
        { name: "Pentesting Web", org: "Hackmetrix", year: "2025" },
        { name: "Pentesting con Metasploit", org: "Platzi", year: "2024" },
        { name: "OWASP TOP 10", org: "Platzi", year: "2024" },
        { name: "Pishing Expert", org: "LetsDefend", year: "2025" },
        { name: "Desarrollo Seguro", org: "Hackmetrix", year: "2025" }
      ]
    },
    {
      category: "Recuperación de datos",
      color: "cyber-purple",
      certs: [
        { name: "Reparación de discos duros y recuperación de datos", org: "Udemy", year: "2025" },
        { name: "Experto en Recuperación de datos (en curso...)", org: "Whop", year: "2025" },
      ]
    },
    {
      category: "OSINT & Investigación",
      color: "cyber-green",
      certs: [
        { name: "OSINT: Open-Source Intelligence (en curso...)", org: "Udemy", year: "2025" },
        { name: "Rastreo de acosadores y ciberdelincuentes (en curso...)", org: "Udemy", year: "2025" },
      ]
    },
    {
      category: "Profesional",
      color: "cyber-red",
      certs: [
        { name: "Lic. Tecnologías de la Información en Ciencias", org: "UNAM", year: "2024" },
      ]
    }
  ];
  const handleCertClick = (certName: string) => {
    const image = certImages[certName];
    if (image) {
      setSelectedCert({ name: certName, image });
    }
  };
  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            <span className="text-cyber-purple">CURSOS</span> & CERTIFICACIONES
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Nuestro equipo se mantiene en formación y mejora constante para ofrecer un servicio de excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {certifications.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 group hover:shadow-cyber transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`inline-block px-4 py-2 rounded-full bg-${category.color}/20 mb-4`}>
                  <span className={`text-${category.color} font-bold text-sm`}>
                    {category.category.toUpperCase()}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.certs.map((cert, idx) => (
                  <div key={idx} className="border-l-2 border-cyber-blue/30 pl-4 group-hover:border-cyber-blue/60 transition-colors duration-300">
                    <h4 className={`font-bold text-foreground ${certImages[cert.name] ? 'cursor-pointer hover:text-cyber-blue transition-colors' : ''}`}
                      onClick={() => handleCertClick(cert.name)}>
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{cert.org}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {cert.year}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="py-4">
            <div className="text-3xl sm:text-4xl font-black text-cyber-blue mb-2">5+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Certificaciones Activas</div>
          </div>
          <div className="py-4">
            <div className="text-3xl sm:text-4xl font-black text-cyber-purple mb-2">150+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Horas de Entrenamiento Anual</div>
          </div>
          <div className="py-4">
            <div className="text-3xl sm:text-4xl font-black text-cyber-green mb-2">100%</div>
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