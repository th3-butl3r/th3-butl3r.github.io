import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Github, Award, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import CircuitBackground from "@/components/CircuitBackground";
import TerminalGreeting from "@/components/TerminalGreeting";
import CountUp from "@/components/CountUp";
import { socialIcons, totalFollowersApprox } from "@/data/socialStats";
import heroCyberImage from "@/assets/banner.webp";
import heroPhoto from "@/assets/clients/LinkedIn_Closed.jpg";
import heroPhotoHover from "@/assets/clients/LinkedIn.jpg";

const badges = [
  { label: "Backend Engineer",   className: "border-cyber-green/50 text-cyber-green" },
  { label: "Soporte Técnico",   className: "border-border text-muted-foreground" },
  { label: "Seguridad Digital", className: "border-border text-muted-foreground" },
  { label: "CCTV",              className: "border-border text-muted-foreground" },
  { label: "OSINT",             className: "border-border text-muted-foreground" },
  { label: "DevSecOps", className: "border-cyber-blue/50 text-cyber-blue" },

];

const Hero = () => {
  const [revealed, setRevealed] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCyberImage})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <CircuitBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left / Top: Text ── */}
          <div className={`space-y-5 sm:space-y-7 transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

            {/* Terminal prompt */}
            <div className="inline-flex items-center gap-1.5 bg-card/70 border border-border/60 rounded px-3 py-1.5 font-mono text-xs sm:text-sm">
              <span className="text-cyber-green">usuario@elmayordomo</span>
              <span className="text-muted-foreground">:~$</span>
              <span className="text-foreground">whoami</span>
            </div>

            {/* Name */}
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                El Mayordomo
              </p>
              <Link
                to="/about"
                aria-label="Por qué El Mayordomo"
                title="Por qué El Mayordomo"
                className="inline-flex w-fit text-primary/70 hover:text-primary transition-colors duration-300"
              >
                <HandHeart className="w-4 h-4 motion-safe:animate-pulse-glow" />
              </Link>
              <TerminalGreeting />
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-md leading-relaxed">
              <span className="text-cyber-green font-semibold">Desarrollador de Software</span> &{" "}
              <span className="text-cyber-blue font-semibold">Divulgador de seguridad digital</span>
            </p>

            {/* Bio */}
          <div className="max-w-md space-y-3 text-justify">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Soy Vidale, ingeniero backend con 4+ años de experiencia en desarrollo web.
              Me especializo en construir sistemas robustos y escalables.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Actualmente profundizo en <strong>DevSecOps</strong>, integrando esas prácticas con mi experiencia en desarrollo web,
              soporte y sistemas de videovigilancia.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Fuera del trabajo, investigo y divulgo sobre seguridad digital e Internet, porque creo que
              entender la tecnología que usamos es tan importante como usarla bien.
            </p>
          </div>

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
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow transition-all duration-300 px-6 text-base w-full sm:w-auto"
                >
                  Hablemos
                </Button>
              </a>

              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 px-6 text-base w-full sm:w-auto"
                >
                  Ver servicios
                </Button>
              </a>

              <a href="#projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 px-6 text-base w-full sm:w-auto"
                >
                  Portafolio técnico
                </Button>
              </a>

              <a href="#blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 px-6 text-base w-full sm:w-auto"
                >
                  Blog personal
                </Button>
              </a>
            </div>
          </div>

          {/* ── Right / Bottom: Photo ── */}
          <div
            style={{ transitionDelay: "150ms" }}
            className={`flex justify-center lg:justify-end transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="flex flex-col items-center gap-3">

              {/* Card — hover en desktop, tap en móvil */}
              <div
                className="relative w-44 sm:w-52 lg:w-64 xl:w-72 cursor-pointer"
                style={{ aspectRatio: "3/4" }}
                onPointerEnter={(e) => { if (e.pointerType !== "touch") setRevealed(true); }}
                onPointerLeave={(e) => { if (e.pointerType !== "touch") setRevealed(false); }}
                onClick={() => setRevealed((v: boolean) => !v)}
              >
                {/* Frame */}
                <div className="absolute -inset-px rounded-xl border border-border shadow-cyber transition-colors duration-500" />

                <div className="absolute inset-0 rounded-xl bg-card/60 overflow-hidden">
                  {/* Foto por defecto */}
                  <img
                    src={heroPhoto}
                    alt="Foto de perfil"
                    className={`absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-500 ${revealed ? "opacity-0" : "opacity-100"}`}
                  />
                  {/* Foto revelada — difuminada */}
                  <img
                    src={heroPhotoHover}
                    alt="Foto de perfil sin editar"
                    className={`absolute inset-0 w-full h-full object-cover grayscale blur-sm transition-opacity duration-500 ${revealed ? "opacity-60" : "opacity-0"}`}
                  />
                </div>
              </div>

              {/* Leyenda */}
              <p className="max-w-[13rem] sm:max-w-[16rem] lg:max-w-xs text-center text-xs font-mono leading-relaxed transition-all duration-500">
                {revealed ? (
                  <span className="text-muted-foreground/70">
                    <span className="text-cyber-purple">// tip:</span> Una edición sutil como la anterior puede evitar que los algoritmos de IA detecten tu rostro en fotos públicas, aunque no es infalible.
                  </span>
                ) : (
                  <span className="text-muted-foreground/40">
                    <span className="text-cyber-blue/60">// hint:</span> toca la imagen
                  </span>
                )}
              </p>

              {/* Comunidad */}
              <div className="flex flex-col items-center gap-2 pt-2">
                <p className="max-w-[13rem] sm:max-w-[16rem] lg:max-w-xs text-center text-[11px] sm:text-xs text-muted-foreground/60 leading-relaxed">
                  Alcance en divulgación independiente: seguridad digital y pensamiento crítico tecnológico.
                </p>
                <div
                  className="flex items-center justify-center gap-3"
                  aria-label="Presente en TikTok, Instagram, YouTube y Substack"
                >
                  {socialIcons.map(({ icon: Icon, colorClass }, idx) => (
                    <Icon
                      key={idx}
                      aria-hidden="true"
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${colorClass} opacity-80`}
                    />
                  ))}
                </div>
                <CountUp
                  value={totalFollowersApprox}
                  format
                  suffix="+"
                  duration={1600}
                  className="text-lg sm:text-xl font-black text-foreground tabular-nums"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
