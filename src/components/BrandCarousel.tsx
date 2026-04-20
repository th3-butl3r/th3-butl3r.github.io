import { useEffect, useRef } from "react";
import dahua_icon from "@/assets/tools/dahua-logo.webp";
import hikvision_icon from "@/assets/tools/hikvision-logo-2.webp";
import epcom_icon from "@/assets/tools/epcom-logo.webp";
import steren_icon from "@/assets/tools/steren-logo.webp";
import hilook_icon from "@/assets/tools/hilook-logo.webp";
import softrestaurant_icon from "@/assets/tools/softrestaurant-logo2.webp";
import mybusiness_pos_icon from "@/assets/tools/mybusiness_pos-logo.webp";


interface Brand {
  name: string;
  logo?: string; // optional logo image URL/import
  showText?: boolean; // optional text label (defaults to true if no logo)
}

const brands: Brand[] = [
  { name: "Dahua", showText: true, logo: dahua_icon },
  { name: "Hikvision", showText: true, logo: hikvision_icon },
  { name: "Epcom", showText: true, logo: epcom_icon },
  { name: "Steren", showText: true, logo: steren_icon },
  { name: "HiLook", showText: true, logo: hilook_icon },
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

    const step = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const doubled = [...brands, ...brands];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-10">
          MARCAS QUE <span className="text-cyber-red">MANEJAMOS</span>
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-hidden whitespace-nowrap"
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
