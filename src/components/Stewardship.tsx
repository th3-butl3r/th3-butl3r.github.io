import { useReveal, revealClass } from "@/hooks/useReveal";

const Stewardship = () => {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className={`max-w-3xl mx-auto ${revealClass(isVisible)}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 text-center">
            POR QUÉ "EL MAYORDOMO"
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-foreground leading-snug mb-6 text-center">
            Un mayordomo administra lo que se le confía — no es dueño, pero responde por cómo lo cuida.
          </p>

          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
            <p>
              Elegí ese nombre porque así entiendo mi trabajo: los datos de un cliente, la infraestructura de
              un sistema, la confianza de alguien que me contrata para protegerlo. Nada de eso es mío, pero
              soy responsable de cuidarlo bien y de rendir cuentas si algo falla.
            </p>
            <p>
              Esa idea viene de mis convicciones personales, y es el estándar que trato de aplicar en cada
              proyecto: en seguridad digital, protegiendo lo que no me pertenece; en desarrollo de software,
              construyendo con cuidado en vez de solo cumplir; en soporte técnico, resolviendo el problema de
              alguien más como si fuera propio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stewardship;
