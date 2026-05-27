import { Linkedin, Github, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCyberImage from "@/assets/banner.webp";
import heroPhoto from "@/assets/clients/LinkedIn.jpg"; // ← reemplazar con la foto real
//import heroPhoto from "@/assets/clients/LinkedIn - Editada.jpg"; // ← reemplazar con la foto real

const badges = [
  { label: "Backend Engineer",   className: "border-cyber-green/50 text-cyber-green" },
  { label: "Soporte Técnico",   className: "border-border text-muted-foreground" },
  { label: "Seguridad Digital", className: "border-border text-muted-foreground" },
  { label: "CCTV",              className: "border-border text-muted-foreground" },
  { label: "OSINT",             className: "border-border text-muted-foreground" },
  { label: "Cloud Security", className: "border-cyber-blue/50 text-cyber-blue" },

];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCyberImage})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left / Top: Text ── */}
          <div className="space-y-5 sm:space-y-7">

            {/* Terminal prompt */}
            <div className="inline-flex items-center gap-1.5 bg-card/70 border border-border/60 rounded px-3 py-1.5 font-mono text-xs sm:text-sm">
              <span className="text-cyber-green">usuario@bastionlab</span>
              <span className="text-muted-foreground">:~$</span>
              <span className="text-foreground">whoami</span>
            </div>
      
            {/* Company name */}
            <h1 className="font-black tracking-tight leading-none">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
                Bastion
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground/35">
                Lab
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-md leading-relaxed">
              <span className="text-cyber-green font-semibold">Soporte Técnico</span> y{" "}
              <span className="text-cyber-blue font-semibold">Seguridad Digital</span>
            </p>

            {/* Bio */}
            <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed text-justify">
              Soy Vidale C., Ingeniero backend con 4+ años de experiencia en el desarrollo web, en formación hacia{" "}
              <span className="text-foreground">Cloud Security</span>, con experiencia en soporte técnico y sistemas CCTV.
              En mi tiempo libre realizo divulgación de seguridad digital en Internet para ayudar a otros. 
              <br></br><br></br>
              Bastion Lab es el espacio donde presento mi trabajo profesional, con el objetivo de conectar con reclutadores y ofrecer mis servicios a personas y pequeñas empresas.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className={`px-3 py-1 text-xs font-mono border rounded bg-background/40 ${b.className}`}
                >
                  {b.label}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/cvidale/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyber-blue transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/th3-butl3r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyber-blue transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="/certificaciones"
                className="text-muted-foreground hover:text-cyber-purple transition-colors duration-200"
                aria-label="Certificaciones"
              >
                <Award className="w-6 h-6" />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyber-yellow/50 text-cyber-yellow hover:bg-cyber-blue/10 transition-all duration-300 px-6 text-base w-full sm:w-auto"
                >
                  Hablemos
                </Button>
              </a>

              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300 px-6 text-base w-full sm:w-auto"
                >
                  Ver servicios
                </Button>
              </a>

              <a href="#projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/10 transition-all duration-300 px-6 text-base w-full sm:w-auto"
                >
                  Portafolio técnico
                </Button>
              </a>
            </div>
          </div>

          {/* ── Right / Bottom: Photo ── */}
          <div className="flex justify-center lg:justify-end">
            {/* Tamaño: pequeño en móvil, grande en desktop */}
            <div
              className="relative w-52 sm:w-64 lg:w-80 xl:w-96"
              style={{ aspectRatio: "3/4" }}
            >
              <div className="absolute -inset-px rounded-xl border border-cyber-blue/25 shadow-cyber" />
              <div className="absolute inset-0 rounded-xl bg-card/60 overflow-hidden">
                {/*
                  Cuando tengas la foto, reemplaza el placeholder por:
                  <img src={heroPhoto} alt="Equipo BastionLab" className="w-full h-full object-cover grayscale" />
                */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground/25">
                  {/*
                  <ShieldCheck className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
                  <span className="font-mono text-xs">// foto</span>
                  */}
                  <img src={heroPhoto} alt="Equipo BastionLab" className="w-full h-full object-cover grayscale" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
