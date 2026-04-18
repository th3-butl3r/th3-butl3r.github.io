import { Button } from "@/components/ui/button";
import { Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CertificationsCTA = () => {
  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-card border border-border/50 rounded-2xl p-8 sm:p-12 text-center hover:shadow-cyber transition-all duration-300">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-purple/20 mb-6">
            <Award className="w-8 h-8 text-cyber-purple" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            <span className="text-cyber-purple">CERTIFICACIONES</span> PROFESIONALES
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Nuestro equipo apuesta por la mejora continua, incorporando nuevos conocimientos y certificaciones que nos permiten ofrecer soluciones más avanzadas y un servicio al cliente de alto nivel.
            </p>
          <Link to="/certificaciones">
            <Button size="lg" className="bg-cyber-purple hover:bg-cyber-purple/90 text-white">
              Ver Certificaciones
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CertificationsCTA;