import { useEffect, useRef } from "react";
import bodega_lactigurt from "@/assets/clients/icon-bodega-lactigurt.webp";
import restaurant_las_higueras from "@/assets/clients/icon-las-higueras.webp";

const clients = [
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

// When clients.length reaches this number the carousel auto-scrolls.
// Below this threshold cards are shown centered and static.
const MIN_FOR_SCROLL = 4;

const ClientCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const shouldScroll = clients.length >= MIN_FOR_SCROLL;

  // Doubled array for seamless loop — only used when scrolling is active
  const items = shouldScroll ? [...clients, ...clients] : clients;

  useEffect(() => {
    if (!shouldScroll) return;

    const el = scrollRef.current;
    if (!el) return;

    let raf: number;
    let pos = 0;
    const speed = 0.5;
    let paused = false;
    let dragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const step = () => {
      if (!paused) {
        pos += speed;
        if (pos >= el.scrollWidth / 2) pos = 0;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const onMouseDown = (e: MouseEvent) => {
      dragging = true;
      paused = true;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      el.scrollLeft = startScrollLeft - (e.clientX - startX);
      pos = el.scrollLeft;
    };
    const stopDrag = () => {
      if (!dragging) return;
      dragging = false;
      paused = false;
      pos = el.scrollLeft;
      el.style.cursor = "";
    };
    const onTouchStart = (e: TouchEvent) => {
      paused = true;
      startX = e.touches[0].clientX;
      startScrollLeft = el.scrollLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      el.scrollLeft = startScrollLeft - (e.touches[0].clientX - startX);
      pos = el.scrollLeft;
      e.preventDefault();
    };
    const onTouchEnd = () => {
      paused = false;
      pos = el.scrollLeft;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", stopDrag);
    el.addEventListener("mouseleave", stopDrag);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", stopDrag);
      el.removeEventListener("mouseleave", stopDrag);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [shouldScroll]);

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-10">
          CLIENTES QUE HAN{" "}
          <span className="text-cyber-red">CONFIADO EN MI TRABAJO</span>
        </h2>

        <div
          ref={scrollRef}
          className={
            shouldScroll
              ? "flex gap-8 overflow-hidden cursor-grab select-none"
              : "flex flex-wrap justify-center gap-8"
          }
        >
          {items.map((client, i) => (
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
                <p className="truncate text-sm font-bold text-foreground">
                  {client.name}
                </p>
                <p className="mt-1 line-clamp-6 text-justify text-xs leading-relaxed text-muted-foreground">
                  {client.service}
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
