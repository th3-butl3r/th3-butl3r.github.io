import { useState } from "react";
import { MessageCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services, WHATSAPP_BASE } from "@/data/services";
import { useReveal, revealClass } from "@/hooks/useReveal";

const Services = () => {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const active = services.find((s) => s.slug === activeSlug) ?? services[0];
  const ActiveIcon = active.icon;
  const isWhatsApp = active.ctaVariant === "whatsapp";
  const activeWhatsappHref = `${WHATSAPP_BASE}?text=${encodeURIComponent(active.whatsappMessage)}`;
  const generalWhatsApp = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    "Hola, no estoy seguro de qué servicio necesito. ¿Me puedes orientar? Mi problema es..."
  )}`;

  const { ref: headerRef, isVisible: headerVisible } = useReveal<HTMLDivElement>();
  const { ref: panelRef, isVisible: panelVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-12 sm:mb-16 ${revealClass(headerVisible)}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            SERVICIOS
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Soluciones en soporte técnico y seguridad digital.
          </p>
        </div>

        <div
          ref={panelRef}
          className={`grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-4 lg:gap-6 max-w-5xl mx-auto ${revealClass(panelVisible)}`}
        >
          {/* Selector */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 -mx-1 px-1">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = service.slug === activeSlug;
              return (
                <button
                  key={service.slug}
                  onClick={() => setActiveSlug(service.slug)}
                  className={`flex-shrink-0 w-[240px] lg:w-auto flex items-center gap-3 text-left px-4 py-3.5 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-primary/10 shadow-glow"
                      : "border-border/60 hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-foreground truncate">{service.title}</div>
                    <div className="text-xs text-muted-foreground truncate">{service.shortPitch}</div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 ml-auto flex-shrink-0 hidden lg:block transition-all duration-300 ${
                      isActive ? "text-primary translate-x-0.5" : "text-muted-foreground/30"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            key={activeSlug}
            className="animate-in fade-in slide-in-from-right-4 duration-300 bg-gradient-card border border-border/50 rounded-2xl p-6 sm:p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-5">
              <ActiveIcon className="w-7 h-7 text-primary-foreground" />
            </div>

            <Badge
              variant="secondary"
              className="bg-background/50 text-foreground border border-border/50 font-medium mb-4"
            >
              {active.badge}
            </Badge>

            <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-1">{active.title}</h3>
            <p className="text-primary font-medium mb-5">{active.subtitle}</p>
            <p className="text-foreground font-bold text-lg mb-6 leading-snug">{active.shortPitch}</p>

            <ul className="space-y-2.5 mb-8">
              {active.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {isWhatsApp ? (
              <Button
                asChild
                className="bg-cyber-green hover:bg-cyber-green/90 hover:shadow-glow text-white font-semibold transition-all duration-300"
              >
                <a href={activeWhatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {active.ctaLabel}
                </a>
              </Button>
            ) : (
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 hover:shadow-glow text-primary-foreground font-semibold transition-all duration-300"
              >
                <Link to={`/servicios/${active.slug}`}>{active.ctaLabel}</Link>
              </Button>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-border/50 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            ¿No sabes qué necesitas?
          </h3>
          <p className="text-muted-foreground mb-6">Hablemos y revisemos tu caso.</p>
          <Button
            asChild
            size="lg"
            className="bg-cyber-green hover:bg-cyber-green/90 hover:shadow-glow text-white font-semibold transition-all duration-300"
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
