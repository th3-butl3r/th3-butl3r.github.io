import { useEffect, useState, useRef } from "react";

type Milestone = "Inicio" | "Crecimiento" | "Ampliación";

const milestoneColor: Record<Milestone, "cyber-blue" | "cyber-purple" | "cyber-green"> = {
  Inicio: "cyber-blue",
  Crecimiento: "cyber-purple",
  Ampliación: "cyber-green",
};

const colorClasses = {
  "cyber-blue": { dot: "bg-cyber-blue border-cyber-blue shadow-glow", text: "text-cyber-blue", badge: "border-cyber-blue/40 text-cyber-blue" },
  "cyber-purple": { dot: "bg-cyber-purple border-cyber-purple shadow-glow", text: "text-cyber-purple", badge: "border-cyber-purple/40 text-cyber-purple" },
  "cyber-green": { dot: "bg-cyber-green border-cyber-green shadow-glow", text: "text-cyber-green", badge: "border-cyber-green/40 text-cyber-green" },
} as const;

// Hash cosmético (no criptográfico) solo para simular un hash de commit corto.
const shortHash = (input: string) => {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h.toString(16).padStart(7, "0").slice(0, 7);
};

const Timeline = () => {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  const events: { year: string; title: string; description: React.ReactNode; milestone: Milestone }[] = [
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
      year: "2023",
      title: "Inicio de la divulgación en seguridad digital",
      description: "Motivado por el alcance de la guía express, decido empezar a divulgar de forma regular sobre seguridad digital, sentando las bases de lo que hoy es mi trabajo de investigación y difusión.",
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
      title: "La estafa que me hizo ofrecer mis servicios de manera formal",
      description: "Una persona solicita ayuda para rastrear y recuperar su dinero, ofreciéndose desde un inicio pagar por el servicio. Si bien no fue posible recuperar su dinero, pudimos encontrar una estafa que llevaba varios años en operación. Con la información recopilada, fue elaborado un reporte que fue enviado al departamento de Ciberseguridad de Megacable, ya que la estafa partía del uso del nombre de Megacable y del aprovechamiento del registro en Google Maps de una de sus ubicaciones.",
      milestone: "Crecimiento"
    },
    /*{
      year: "Septiembre 2025",
      title: "Incorporación del servicio de: Recuperación de Datos",
      description: "La pérdida de datos en una memoria USB con información personal despertó la necesidad de aprender técnicas de recuperación y reforzar conocimientos en el manejo de información en dispositivos de almacenamiento. Gracias a esta experiencia, incorporamos el servicio de recuperación de datos como una solución adicional para nuestros clientes.",
      milestone: "Ampliación"
    },*/
    {
      year: "Octubre 2025",
      title: "Incorporación del servicio de: Soporte Técnico",
      description: "A raíz de los resultados después de apoyar a un restaurante con la instalación y configuración de su red y software de operación SoftRestaurant, incorporé oficialmente el servicio de soporte técnico para extender mis servicios y atender a más clientes.",
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
          } else {
            setVisibleEvents(prev => prev.filter(i => i !== index));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    eventRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            LA HISTORIA DETRÁS
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 mb-6">
            Desde los inicios, cuando la necesidad tocó la puerta, hasta ofrecer mis servicios para ayudar a las personas.
          </p>
          <div className="inline-flex items-center gap-1.5 bg-card/70 border border-border/60 rounded px-3 py-1.5 font-mono text-xs sm:text-sm">
            <span className="text-cyber-green">$</span>
            <span className="text-foreground">git log --graph --oneline -- history.log</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {events.map((event, index) => {
            const isVisible = visibleEvents.includes(index);
            const colors = colorClasses[milestoneColor[event.milestone]];
            return (
              <div
                key={index}
                ref={(el) => (eventRefs.current[index] = el)}
                data-index={index}
                className="relative flex gap-4 sm:gap-5"
              >
                {/* Connector column */}
                <div className="relative flex flex-col items-center w-3 flex-shrink-0">
                  <span
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                      isVisible ? `${colors.dot} scale-100` : "bg-background border-border scale-75"
                    }`}
                  />
                  {index < events.length - 1 && (
                    <span
                      className={`w-px flex-1 bg-border origin-top transition-transform duration-700 ${
                        isVisible ? "scale-y-100" : "scale-y-0"
                      }`}
                    />
                  )}
                </div>

                {/* Commit content */}
                <div
                  className={`flex-1 min-w-0 pb-9 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground mb-1.5">
                    <span className={colors.text}>commit {shortHash(event.title)}</span>
                    <span>{event.year}</span>
                    <span className={`px-1.5 py-0.5 rounded border text-[10px] ${colors.badge}`}>
                      [{event.milestone}]
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5">
                    {event.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* HEAD — presente / futuro (sin commitear) */}
          <div
            ref={(el) => (eventRefs.current[events.length] = el)}
            data-index={events.length}
            className="relative flex gap-4 sm:gap-5"
          >
            <div className="relative flex flex-col items-center w-3 flex-shrink-0">
              <span
                className={`w-3 h-3 rounded-full border-2 border-dashed border-primary transition-opacity duration-500 motion-safe:animate-pulse-glow ${
                  visibleEvents.includes(events.length) ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div
              className={`flex-1 min-w-0 rounded-lg border border-dashed border-primary/40 bg-card/30 p-4 sm:p-5 transition-all duration-500 ${
                visibleEvents.includes(events.length) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground mb-1.5">
                <span className="text-primary">HEAD</span>
                <span>2026+</span>
                <span className="px-1.5 py-0.5 rounded border border-primary/40 text-primary text-[10px]">
                  [en progreso]
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5">
                Presente &amp; Futuro
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                Continúo mi formación y actualización mientras consolido mi laboratorio de I+D, equipándolo con la
                tecnología y las herramientas necesarias para ofrecer un servicio de excelencia en el desarrollo de software,
                instalación de CCTV y seguridad digital, garantizando así una solución confiable y completa para mis clientes.
                <span className="inline-block w-[2px] h-[1em] bg-foreground/80 align-middle ml-1 animate-blink" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
