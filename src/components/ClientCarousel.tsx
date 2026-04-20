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
];

const ClientCarousel = () => {
  const repeatedClients = [...clients, ...clients];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-10">
          CLIENTES QUE <span className="text-cyber-red">CONFÍAN EN NOSOTROS</span>
        </h2>
        <div className="overflow-hidden">
          <div className="flex w-max animate-client-marquee motion-reduce:animate-none">
            {[0, 1].map((group) => (
              <div key={group} className="flex flex-shrink-0 gap-8 pr-8">
                {repeatedClients.map((client, i) => (
                  <div
                    key={`${group}-${client.name}-${i}`}
                    className="flex w-[320px] sm:w-[360px] flex-shrink-0 items-center gap-4 rounded-lg border border-border/50 bg-gradient-card px-6 py-5 transition-shadow duration-300 hover:shadow-cyber"
                  >
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                      <img
                        src={client.logo}
                        alt={client.name}
                        loading="lazy"
                        width={56}
                        height={56}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-foreground">{client.name}</p>
                      <p className="mt-1 line-clamp-6 text-justify text-xs leading-relaxed text-muted-foreground">
                        {client.service}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
