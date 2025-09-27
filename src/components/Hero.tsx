import { Shield, Search, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCyberImage from "@/assets/data_recovery.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCyberImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        {/* Company Name */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-2 sm:mb-4">
            <span className="text-foreground">- </span>
            <span className="text-cyber-white">Bastion</span>
            <span className="text-foreground"> </span>
            <span className="text-cyber-white">Lab</span>
            <span className="text-foreground"> -</span>
          </h1>
          <div className="text-right text-sm sm:text-lg md:text-xl font-bold text-muted-foreground">
            EST. 2021
          </div>
        </div>

        {/* Tagline */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-foreground leading-relaxed">
            Servicios en{" "}
            <span className="text-cyber-blue font-semibold">OSINT</span>,{" "}
            <span className="text-cyber-purple font-semibold">Pentesting Web</span> y{" "}
            <span className="text-cyber-green font-semibold">Recuperación de Datos</span>
          </p>
        </div>

        {/* Services Icons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cyber-blue/20 flex items-center justify-center mb-3 shadow-glow">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-blue" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">OSINT</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cyber-purple/20 flex items-center justify-center mb-3 shadow-glow">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-purple" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">Pentesting Web</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cyber-green/20 flex items-center justify-center mb-3 shadow-glow">
              <HardDrive className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-green" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">Data Recovery</span>
          </div>
        </div>

        {/* CTA */}
        <a href="#contact">
          <Button
          size="lg"
          className="bg-gradient-accent text-primary-foreground hover:shadow-cyber transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold">
            Envíanos tu caso
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;