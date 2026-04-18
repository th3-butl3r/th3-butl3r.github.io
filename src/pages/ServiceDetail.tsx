import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getServiceBySlug, WHATSAPP_BASE } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;
  const whatsappHref = `${WHATSAPP_BASE}?text=${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Back link */}
          <Link
            to="/#services"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-cyber-blue transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a servicios
          </Link>

          {/* Hero */}
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="bg-background/50 text-foreground border border-border/50 font-medium mb-6"
            >
              <Icon className="w-3.5 h-3.5 mr-1.5 text-cyber-blue" />
              {service.badge}
            </Badge>
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-accent flex items-center justify-center">
              <Icon className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              {service.title}
            </h1>
            <p className="text-cyber-blue text-lg font-medium mb-6">
              {service.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {service.detail.intro}
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {service.detail.sections.map((section, idx) => (
              <Card
                key={idx}
                className="bg-gradient-card border-border/50"
              >
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {section.body}
                  </p>
                  {section.bullets && (
                    <ul className="space-y-2">
                      {section.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 mr-2 text-cyber-blue flex-shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                ¿Listo para empezar?
              </h3>
              <p className="text-muted-foreground mb-6">
                Cuéntanos tu caso y te respondemos por WhatsApp.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-cyber-green hover:bg-cyber-green/90 text-white font-semibold"
              >
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Hablar por WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;