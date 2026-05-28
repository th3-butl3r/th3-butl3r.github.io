import { useEffect, useRef } from "react";
import dahua_icon from "@/assets/tools/dahua-logo.webp";
import epcom_icon from "@/assets/tools/epcom-logo.webp";
import steren_icon from "@/assets/tools/steren-logo.webp";
import softrestaurant_icon from "@/assets/tools/softrestaurant-logo2.webp";
import mybusiness_pos_icon from "@/assets/tools/mybusiness_pos-logo.webp";

interface Brand {
  name: string;
  logo?: string;
  showText?: boolean;
}

const brands: Brand[] = [
  { name: "Dahua", showText: true, logo: dahua_icon },
  // { name: "Hikvision", showText: true, logo: hikvision_icon },
  { name: "Epcom", showText: true, logo: epcom_icon },
  { name: "Steren", showText: true, logo: steren_icon },
  // { name: "HiLook", showText: true, logo: hilook_icon },
  { name: "Soft Restaurant", showText: true, logo: softrestaurant_icon },
  { name: "MyBusiness POS", showText: true, logo: mybusiness_pos_icon },
  { name: "WhatsApp Business", showText: true },
];

const BrandCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  const doubled = [...brands, ...brands];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-10">
          MARCAS QUE <span className="text-cyber-red">HE TRABAJADO</span>
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-hidden whitespace-nowrap cursor-grab select-none"
        >
          {doubled.map((brand, i) => (
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
                <span className="text-lg font-bold text-slate-500">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
