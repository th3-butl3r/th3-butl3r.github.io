import { Shield, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-black">
                <span className="text-cyber-blue">BASTION</span>
                <span className="text-cyber-purple">LAB</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Una empresa de recuperación de datos.
            </p>
            <div className="flex space-x-4">
             
              <a href="https://www.instagram.com/bastionlab.mx" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-cyber-blue transition-colors">OSINT</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Pentesting Web</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Data Recovery</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Consultoría</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#team" className="hover:text-cyber-blue transition-colors">Equipo</a></li>
              <li><a href="#certifications" className="hover:text-cyber-blue transition-colors">Certificaciones</a></li>
              <li><a href="#timeline" className="hover:text-cyber-blue transition-colors">Historia</a></li>
              <li><a href="#contact" className="hover:text-cyber-blue transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © Bastion Lab. Todos los derechos reservados.
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