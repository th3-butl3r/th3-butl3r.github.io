import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Personal info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="mb-4 flex items-baseline gap-2">
              <span className="text-xl font-black tracking-tight text-foreground">El Mayordomo</span>
              <span className="text-sm text-muted-foreground">— V</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Desarrollo de software y seguridad digital, con atención personal.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/cvidale/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/th3-butl3r" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/#contact" className="hover:text-primary transition-colors">Seguridad Digital</Link></li>
              <li><Link to="/#contact" className="hover:text-primary transition-colors">Soporte Técnico</Link></li>
              <li><Link to="/#contact" className="hover:text-primary transition-colors">Consultoría</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Sobre mí</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/certificaciones" className="hover:text-primary transition-colors">Certificaciones</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">Historia</a></li>
              <li><Link to="/#contact" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © El Mayordomo · V. Todos los derechos reservados.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground text-center sm:text-left">
            {/*<a href="#" className="hover:text-cyber-blue transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-cyber-blue transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-cyber-blue transition-colors">ISO 27001</a>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;