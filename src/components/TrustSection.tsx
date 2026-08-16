import { useState } from "react";
import { useReveal, revealClass } from "@/hooks/useReveal";
import { useDragMarquee } from "@/hooks/useDragMarquee";
import dahua_icon from "@/assets/tools/dahua-logo.webp";
import epcom_icon from "@/assets/tools/epcom-logo.webp";
import steren_icon from "@/assets/tools/steren-logo.webp";
import softrestaurant_icon from "@/assets/tools/softrestaurant-logo2.webp";
import mybusiness_pos_icon from "@/assets/tools/mybusiness_pos-logo.webp";
import bodega_lactigurt from "@/assets/clients/icon-bodega-lactigurt.webp";
import restaurant_las_higueras from "@/assets/clients/icon-las-higueras.webp";

interface Brand {
  name: string;
  logo?: string;
  showText?: boolean;
}

const brands: Brand[] = [
  { name: "Dahua", showText: true, logo: dahua_icon },
  { name: "Epcom", showText: true, logo: epcom_icon },
  { name: "Steren", showText: true, logo: steren_icon },
  { name: "Soft Restaurant", showText: true, logo: softrestaurant_icon },
  { name: "MyBusiness POS", showText: true, logo: mybusiness_pos_icon },
  { name: "WhatsApp Business", showText: true },
];

interface Client {
  name: string;
  logo: string;
  service: string;
}

const clients: Client[] = [
  {
    name: "Bodega Lactigurt",
    logo: bodega_lactigurt,
    service:
      "Limpieza y mantenimiento de equipos de CCTV y configuración de repetidor para ampliación de red.",
  },
  {
    name: "Restaurante Las Higueras",
    logo: restaurant_las_higueras,
    service:
      "Instalación y configuración de red LAN, así como la configuración del software SoftRestaurant 11 en la estación de trabajo y los equipos de los meseros.",
  },
];

// When a list reaches this size the row auto-scrolls; below it, items are
// shown centered and static (dragging/looping a two-item row looks broken).
const MIN_FOR_SCROLL = 4;

type Tab = "marcas" | "clientes";

const TAB_LABEL: Record<Tab, string> = {
  marcas: "MARCAS QUE HE MANEJADO ",
  clientes: "CLIENTES QUE HAN CONFIADO EN MI TRABAJO",
};

const TrustSection = () => {
  const [tab, setTab] = useState<Tab>("marcas");
  const { ref: headerRef, isVisible: headerVisible } = useReveal<HTMLDivElement>();

  const brandItems = [...brands, ...brands];
  const clientShouldScroll = clients.length >= MIN_FOR_SCROLL;
  const clientItems = clientShouldScroll ? [...clients, ...clients] : clients;

  const scrollEnabled = tab === "marcas" ? true : clientShouldScroll;
  const scrollRef = useDragMarquee<HTMLDivElement>(scrollEnabled, [tab]);

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={headerRef} className={`text-center mb-8 ${revealClass(headerVisible)}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            {TAB_LABEL[tab]}
          </h2>

          <div className="inline-flex rounded-full border border-border p-1 bg-muted/40">
            {(["marcas", "clientes"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-300 ${
                  tab === t
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {tab === "marcas" ? (
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-hidden whitespace-nowrap cursor-grab select-none"
          >
            {brandItems.map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-3 px-8 py-6 rounded-lg border border-white/80 bg-white min-w-[180px] hover:shadow-cyber transition-shadow duration-300"
              >
                {brand.logo && (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-14 w-auto max-w-[260px] object-contain"
                  />
                )}
                {(brand.showText || !brand.logo) && (
                  <span className="text-lg font-bold text-slate-500">{brand.name}</span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className={
              clientShouldScroll
                ? "flex gap-8 overflow-hidden cursor-grab select-none"
                : "flex flex-wrap justify-center gap-8"
            }
          >
            {clientItems.map((client, i) => (
              <div
                key={i}
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
        )}
      </div>
    </section>
  );
};

export default TrustSection;
