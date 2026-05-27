import { useState } from "react";
import { Menu, X, ChevronDown} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { services } from "@/data/services";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBlogDialog, setShowBlogDialog] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Orden del menú: SERVICIOS (dropdown) → CERTIFICACIONES → CONTACTO → BLOG → ABOUT
  // { name: "Equipo", href: "#team" },     // oculto
  // { name: "Historia", href: "#timeline" }, // movido a /about

      const goToSection = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-black">
            <span className="text-cyber-blue">BL</span>
            <span className="text-muted-foreground">/</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-cyber-blue transition-colors duration-200 focus:outline-none"
                  onClick={(e) => {
                    if (e.detail === 0) return;
                  }}
                >
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSection("#services");
                    }}
                  >
                    SERVICIOS
                  </span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                className="bg-background/95 backdrop-blur-md border-border"
              >
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <DropdownMenuItem key={s.slug} asChild>
                      <Link
                        to={`/servicios/${s.slug}`}
                        className="flex items-center cursor-pointer"
                      >
                        <Icon className="w-4 h-4 mr-2 text-cyber-blue" />
                        <span>{s.title}</span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <button onClick={() => goToSection("/certificaciones")} className="text-sm font-medium text-muted-foreground hover:text-cyber-blue transition-colors duration-200">CERTIFICACIONES</button>
            <button onClick={() => goToSection("#contact")} className="text-sm font-medium text-muted-foreground hover:text-cyber-blue transition-colors duration-200">CONTACTO</button>
            <button onClick={() => setShowBlogDialog(true)} className="text-sm font-medium text-muted-foreground hover:text-cyber-blue transition-colors duration-200">BLOG</button>
            <button onClick={() => goToSection("/about")} className="text-sm font-medium text-muted-foreground hover:text-cyber-blue transition-colors duration-200">ABOUT</button>
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
              {/* Services collapsible */}
              <div>
                <div className="flex items-center justify-between">
                  <button
                    className="flex-1 text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-cyber-blue transition-colors"
                    onClick={() => {
                      goToSection("#services");
                      setIsOpen(false);
                    }}
                  >
                    Servicios
                  </button>

                  <button
                    className="px-3 py-2 text-muted-foreground"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-label="Toggle services"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-6 space-y-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/servicios/${s.slug}`}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-cyber-blue"
                        onClick={() => {
                          setIsOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => { goToSection("/certificaciones"); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-cyber-blue transition-colors">Certificaciones</button>
              <button onClick={() => { goToSection("#contact"); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-cyber-blue transition-colors">Contacto</button>
              <button onClick={() => { setShowBlogDialog(true); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-cyber-blue transition-colors">Blog</button>
              <button onClick={() => { goToSection("/about"); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-cyber-blue transition-colors">About</button>
            </div>
          </div>
        )}
      </div>
    </nav>
    <AlertDialog open={showBlogDialog} onOpenChange={setShowBlogDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmar navegación</AlertDialogTitle>
          <AlertDialogDescription>
            Saldrás de Bastion Lab y serás redirigido al blog personal del analista
            Vidale C.: https://medium.com/@th3-butl3r
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              setShowBlogDialog(false);
              window.open("https://medium.com/@th3-butl3r", "_blank", "noopener,noreferrer");
            }}
          >
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </>
  );
};

export default Navigation;