import { Search, Headset, HardDrive, ShieldCheck, Eye, Lock, Database, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services, WHATSAPP_BASE } from "@/data/services";

const Services = () => {
   const generalWhatsApp = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    "Hola, no estoy seguro de qué servicio necesito. ¿Me puedes orientar? Mi problema es..."
    )}`;

  // const services = [
  //   {
  //     icon: ShieldCheck,
  //     title: "Seguridad Digital y Privacidad",
  //     subtitle: "Digital Security",
  //     description: "Revisión y protección de cuentas, dispositivos e información para personas y pequeños negocios, reduciendo riesgos digitales y previniendo fraudes y accesos no autorizados.",
  //     features: [
  //       "Revisión de seguridad en cuentas y dispositivos",
  //       "Configuración de privacidad en redes sociales y mensajería",
  //       "Activación de verificación en dos pasos",
  //       "Prevención de phishing, fraudes y robo de identidad",
  //       "Buenas prácticas de navegación y comunicación segura",
  //       "DISPONIBLE A DISTANCIA"
  //     ]
  //   },

  //   {
  //     icon: Headset,
  //     title: "Soporte Técnico",
  //     subtitle: "Instalación y Configuración",
  //     description: "Servicios técnicos especializados para hogares y pequeños negocios con atención personalizada.",
  //     features: [
  //       "Instalación y configuración de redes LAN", 
  //       "Instalación de software", 
  //       "Mantenimiento preventivo de equipos", 
  //       "Configuración de SoftRestaurant", 
  //       "Instalación y configuración de cámaras CCTV (Hikvision, Dahua, Epcom, Hilook, etc.)",
  //       "NO DISPONIBLE A DISTANCIA"]
  //   },
    
  //   {
  //     icon: HardDrive,
  //     title: "Recuperación de Datos",
  //     subtitle: "Data Recovery",
  //     description: "Recuperación forense de datos ante fallas lógicas en dispositivos de almacenamiento: USB, SD, Micro SD, HDD, SSD.",
  //     features: [
  //       "Dispositivo no detectado",
  //       "Borrado accidental", 
  //       "Formateo accidental", 
  //       "Diagnóstico y recuperación en video", 
  //       "No datos, no pago",
  //       "NO DISPONIBLE A DISTANCIA"]
  //   },
    
  //   {
  //     icon: Search,
  //     title: "OSINT",
  //     subtitle: "Open Source Intelligence",
  //     description: "Recopilación y análisis de información de fuentes públicas para investigaciones digitales.",
  //     features: [
  //       "Análisis de redes sociales", 
  //       "Revisión de exposición digital", 
  //       "Geolocalización", 
  //       "Prevención de estafas digitales", 
  //       "DISPONIBLE A DISTANCIA"]
  //   }    
  // ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            NUESTROS <span className="text-cyber-blue">SERVICIOS</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Ofrecemos soluciones en soporte técnico y seguridad digital.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            const isWhatsApp = service.ctaVariant === "whatsapp";
            const whatsappHref = `${WHATSAPP_BASE}?text=${encodeURIComponent(
              service.whatsappMessage
            )}`;

            return (
              <Card
                key={service.slug}
                className="w-full max-w-sm md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.34rem)] bg-gradient-card border-border/50 hover:shadow-cyber transition-all duration-300 group flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-1">
                  {/* Badge */}
                  <div className="mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-background/50 text-foreground border border-border/50 font-medium"
                    >
                      <Icon className="w-3.5 h-3.5 mr-1.5 text-cyber-blue" />
                      {service.badge}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground text-center mb-1">
                    {service.title}
                  </h3>
                  <p className="text-cyber-blue font-medium text-center mb-5">
                    {service.subtitle}
                  </p>

                  {/* Pitch */}
                  <p className="text-foreground font-bold text-center text-lg mb-5 leading-snug">
                    {service.shortPitch}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {isWhatsApp ? (
                    <Button
                      asChild
                      className="w-full bg-cyber-green hover:bg-cyber-green/90 text-white font-semibold"
                    >
                      <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {service.ctaLabel}
                      </a>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      className="w-full bg-cyber-blue hover:bg-cyber-blue/90 text-primary-foreground font-semibold"
                    >
                      <Link to={`/servicios/${service.slug}`}>{service.ctaLabel}</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-border/50 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            ¿No sabes qué necesitas?
          </h3>
          <p className="text-muted-foreground mb-6">Hablemos y resolveremos tu caso.</p>
          <Button
            asChild
            size="lg"
            className="bg-cyber-green hover:bg-cyber-green/90 text-white font-semibold"
          >
            <a href={generalWhatsApp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
