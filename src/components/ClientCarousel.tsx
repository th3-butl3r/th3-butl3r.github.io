import { useEffect, useRef } from "react";
import bodega_lactigurt from "@/assets/clients/icon-bodega-lactigurt.webp";
import restaurant_las_higueras from "@/assets/clients/icon-las-higueras.webp";

const clients = [
  {
    name: "Bodega Lactigurt",
    logo: bodega_lactigurt,
    service: "Limpieza y mantenimiento de equipos de CCTV y configuración de repetidor para ampliación de red.",
  },
  {
    name: "Restaurante Las Higueras",
    logo: restaurant_las_higueras,
    service: "Instalación y configuración de red LAN, así como la configuración del software SoftRestaurant 11 en la estación de trabajo y los equipos de los meseros.",
  },
  {
    name: "Bodega Lactigurt",
    logo: bodega_lactigurt,
    service: "Limpieza y mantenimiento de equipos de CCTV y configuración de repetidor para ampliación de red.",
  },
  {
    name: "Restaurante Las Higueras",
    logo: restaurant_las_higueras,
    service: "Instalación y configuración de red LAN, así como la configuración del software SoftRestaurant 11 en la estación de trabajo y los equipos de los meseros.",
  },
];

const ClientCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf: number;
    const speed = 0.5;
    const baseWidth = el.scrollWidth / 3;

    let pos = baseWidth;
    el.scrollLeft = pos;

    const step = () => {
      pos += speed;

      if (pos >= baseWidth * 2) {
        pos -= baseWidth;
      }

      el.scrollLeft = pos;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-10">
          CLIENTES QUE <span className="text-cyber-red">CONFÍAN EN NOSOTROS</span>
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-hidden whitespace-nowrap scroll-smooth"
        >
          {repeatedClients.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-4 px-6 py-5 rounded-lg border border-border/50 bg-gradient-card min-w-[320px] max-w-[360px] hover:shadow-cyber transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-foreground text-sm truncate">{client.name}</p>
                <p className="text-xs text-muted-foreground whitespace-normal line-clamp-6 leading-relaxed mt-1 text-justify">
                  {client.service.slice(0, 500)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
