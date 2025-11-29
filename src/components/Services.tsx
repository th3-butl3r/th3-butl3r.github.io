import { Search, Headset, HardDrive, Eye, Lock, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Headset,
      title: "Soporte Técnico",
      subtitle: "Instalación y Configuración",
      description: "Servicios técnicos especializados para hogares y pequeños negocios con atención personalizada.",
      features: ["Instalación y configuración de redes LAN", "Instalación de software", "Mantenimiento preventivo", "Configuración de SoftRestaurant", "NO DISPONIBLE A DISTANCIA"]
    },
    
    {
      icon: Search,
      title: "OSINT",
      subtitle: "Open Source Intelligence",
      description: "Recopilación y análisis de información de fuentes públicas para investigaciones digitales.",
      features: ["Análisis de redes sociales", "Revisión de exposición digital", "Geolocalización", "Prevención de estafas digitales", "DISPONIBLE A DISTANCIA"]
    },
    
    {
      icon: HardDrive,
      title: "Recuperación de Datos",
      subtitle: "Data Recovery",
      description: "Recuperación forense de datos ante fallas lógicas en dispositivos de almacenamiento: USB, SD, Micro SD, HDD, SSD.",
      features: ["Dispositivo no detectado", "Borrado accidental", "Formateo accidental", "Diagnóstico y recuperación en video", "No datos, no pago","NO DISPONIBLE A DISTANCIA"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            NUESTROS <span className="text-cyber-blue">SERVICIOS</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Ofrecemos soluciones en soporte, recuperación de datos e investigación digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-cyber transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-cyber-blue font-medium">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;