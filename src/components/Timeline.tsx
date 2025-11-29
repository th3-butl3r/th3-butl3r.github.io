import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";

const Timeline = () => {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  const events = [
    {
    year: "2023",
    title: "La primera estafa investigada",
    description: (
      <>
        Un familiar solicita ayuda con una estafa por más de 50 mil pesos. A raíz de ello se redacta y publica una guía express{" "}
        <a
          href="https://www.reddit.com/r/MexicoFinanciero/comments/1992uf8/qué_hacer_antes_de_introducir_tu_dinero_en_una/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyber-blue underline hover:text-cyber-purple"
        >
          (ver guía)
        </a>{" "}
        para la validación de sitios web y aplicaciones financieras, alcanzando más de 15 mil visualizaciones.
      </>
    ),
    milestone: "Inicio"
  },
    {
      year: "2024",
      title: "Primeros pasos en ciberseguridad",
      description: "Durante una capacitación sobre la norma ISO 27001 en mi trabajo, se presentó un caso de interceptación de información en una página web. Esta experiencia despertó en mí el interés por profundizar en el estudio de la ciberseguridad web.",
      milestone: "Crecimiento"
    },
    {
      year: "Junio 2025",
      title: "Primera certificación en ciberseguridad",
      description: "Graduado en la Hackers Academy de Hackmetrix, completando una formación intensiva de 6 meses en ciberseguridad ofensiva enfocada en páginas web.",
      milestone: "Crecimiento"
    },
    {
      year: "Agosto 2025",
      title: "La estafa que nos hizo ofrecer nuestros servicios de manera formal",
      description: "Una persona solicita ayuda para rastrear y recuperar su dinero, ofreciéndose desde un inicio pagar por el servicio. Si bien no fue posible recuperar su dinero, pudimos encontrar una estafa que llevaba varios años en operación. Con la información recopilada, fue elaborado un reporte que fue enviado al departamento de Ciberseguridad de Megacable, ya que la estafa partía del uso del nombre de Megacable y del aprovechamiento del registro en Google Maps de una de sus ubicaciones.",
      milestone: "Crecimiento"
    },
    {
      year: "Septiembre 2025",
      title: "Incorporación del servicio de: Recuperación de Datos",
      description: "La pérdida de datos en una memoria USB con información personal despertó la necesidad de aprender técnicas de recuperación y reforzar conocimientos en el manejo de información en dispositivos de almacenamiento. Gracias a esta experiencia, incorporamos el servicio de recuperación de datos como una solución adicional para nuestros clientes.",
      milestone: "Ampliación"
    }, 
    {
      year: "Octubre 2025",
      title: "Incorporación del servicio de: Soporte Técnico",
      description: "A raíz de los resultados después de apoyar a un pequeño restaurante con la instalación y configuración de su red y software de operación SoftRestaurant, incorporamos oficialmente el servicio de soporte técnico para atender a más clientes.",
      milestone: "Ampliación"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleEvents(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    eventRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            NUESTRA <span className="text-cyber-red">HISTORIA</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Desde nuestros inicios, cuando la necesidad tocó la puerta, hasta lanzar nuestros servicios de manera oficial para ayudar a las personas.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-red" />

          <div className="space-y-8 lg:space-y-12">
            {events.map((event, index) => (
              <div 
                key={index} 
                ref={(el) => eventRefs.current[index] = el}
                data-index={index}
                className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} 
                  transform transition-all duration-1000 ease-out ${
                    visibleEvents.includes(index) 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`, // Retraso dinámico basado en el índice
                  }}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                  <Card className="bg-gradient-card border-border/50 hover:shadow-cyber transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <CardTitle className="text-lg sm:text-xl font-bold text-foreground">
                          {event.title}
                        </CardTitle>
                        <div className="text-2xl sm:text-3xl font-black text-cyber-blue">
                          {event.year}
                        </div>
                      </div>
                      <div className="text-sm text-cyber-purple font-medium">
                        {event.milestone}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot - Hidden on mobile */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-accent rounded-full border-4 border-background shadow-glow" />
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-card border-cyber-blue/50 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-cyber-blue">2026+</CardTitle>
              <h3 className="text-xl font-bold text-foreground">Presente & Futuro</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Estamos consolidando nuestro laboratorio de recuperación de datos.
                 Poco a poco lo equipamos con la tecnología y las herramientas necesarias para ofrecer
                  un servicio de excelencia en la recuperación de la información, garantizando una solución confiable
                  para nuestros clientes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;