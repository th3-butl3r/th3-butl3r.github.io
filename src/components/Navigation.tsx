import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Servicios", href: "#services" },
    { name: "Equipo", href: "#team" },
    { name: "Certificaciones", href: "#certifications" },
    { name: "Historia", href: "#timeline" },
    { name: "Contacto", href: "#contact" },
    { name: "Blog", href: "https://medium.com/@th3-butl3r", target: "_blank", rel: "noopener noreferrer" },  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-black">
            <span className="text-cyber-blue">BL</span>
            <span className="text-muted-foreground">/</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
           {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.target} // Agregado para abrir en nueva pestaña
              rel={item.rel}       // Agregado para seguridad
              className="text-sm font-medium text-muted-foreground hover:text-cyber-blue transition-colors duration-200"
            >
              {item.name.toUpperCase()}
            </a>
          ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-cyber-blue transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;