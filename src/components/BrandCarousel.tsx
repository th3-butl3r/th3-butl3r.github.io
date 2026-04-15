import { useEffect, useRef } from "react";

const brands = [
  "Dahua",
  "Hikvision",
  "Epcom",
  "Steren",
  "HiLook",
  "SoftRestaurant",
  "MyBusiness POS",
  "WhatsApp Business",
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
          SOLUCIONES BASADAS EN MARCAS <span className="text-cyber-red">LÍDERES</span>
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-hidden whitespace-nowrap"
        >
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-8 py-6 rounded-lg border border-border/50 bg-gradient-card min-w-[180px] hover:shadow-cyber transition-shadow duration-300"
            >
              <span className="text-lg font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;