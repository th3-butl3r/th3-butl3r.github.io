import { useEffect, useRef } from "react";

interface Brand {
  name: string;
  logo?: string; // optional logo image URL/import
  showText?: boolean; // optional text label (defaults to true if no logo)
}

const brands: Brand[] = [
  { name: "Dahua", showText: true },
  { name: "Hikvision", showText: true },
  { name: "Epcom", showText: true },
  { name: "Steren", showText: true },
  { name: "HiLook", showText: true },
  { name: "SoftRestaurant", showText: true },
  { name: "MyBusiness POS", showText: true },
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
              className="flex-shrink-0 flex flex-col items-center justify-center gap-2 px-8 py-6 rounded-lg border border-border/50 bg-gradient-card min-w-[180px] hover:shadow-cyber transition-shadow duration-300"
            >
              {brand.logo && (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto max-w-[140px] object-contain"
                />
              )}
              {(brand.showText || !brand.logo) && (
                <span className="text-lg font-bold text-muted-foreground">
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