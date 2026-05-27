import { useState } from "react";
import { Plus, X } from "lucide-react";
import { experience } from "@/data/experience";

const Experience = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            EXPERIENCIA <span className="text-cyber-blue">PROFESIONAL</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Áreas en las que he trabajado y lo que he aportado en cada una.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {experience.map((category) => {
            const isOpen = openId === category.id;
            return (
              <div
                key={category.id}
                className="border border-border rounded-lg overflow-hidden transition-all duration-300"
              >
                {/* Trigger */}
                <button
                  onClick={() => toggle(category.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/30 transition-colors duration-200"
                >
                  <span className="font-mono text-sm sm:text-base font-semibold text-foreground">
                    <span className="text-cyber-blue mr-1">~</span>
                    {category.title}
                  </span>
                  {isOpen ? (
                    <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  )}
                </button>

                {/* Content */}
                {isOpen && (
                  <div className="px-5 pb-5 space-y-3">
                    {category.entries.map((entry, i) => (
                      <div
                        key={i}
                        className="bg-background/60 border border-border/50 rounded-lg p-4 sm:p-5 space-y-3"
                      >
                        {/* Role + period */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <span className="font-bold text-foreground text-sm sm:text-base">
                            {entry.role}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">
                            {entry.context}&nbsp;|&nbsp;{entry.period}
                          </span>
                        </div>
                        <div className="h-px bg-border/60" />

                        {/* Fields */}
                        <div className="space-y-2 text-sm">
                          <div className="flex gap-2">
                            <span className="font-mono text-cyber-green font-semibold whitespace-nowrap">
                              Qué hice:
                            </span>
                            <span className="text-muted-foreground leading-relaxed">
                              {entry.did}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <span className="font-mono text-cyber-blue font-semibold whitespace-nowrap">
                              Qué ofrecí:
                            </span>
                            <span className="text-muted-foreground leading-relaxed">
                              {entry.offered}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <span className="font-mono text-cyber-purple font-semibold whitespace-nowrap">
                              Qué aprendí:
                            </span>
                            <span className="text-muted-foreground leading-relaxed">
                              {entry.learned}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
