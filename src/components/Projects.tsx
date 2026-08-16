import { Github, BookOpen, ExternalLink, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, PROJECTS_PREVIEW_LIMIT } from "@/data/projects";
import { techStack } from "@/data/techStack";
import { useReveal, revealClass } from "@/hooks/useReveal";

const Projects = () => {
  const preview = projects.slice(0, PROJECTS_PREVIEW_LIMIT);
  const hasMore = projects.length > PROJECTS_PREVIEW_LIMIT;
  const { ref: headerRef, isVisible: headerVisible } = useReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useReveal<HTMLDivElement>();
  const { ref: techRef, isVisible: techVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 sm:mb-16 ${revealClass(headerVisible)}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            PORTAFOLIO TÉCNICO
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Proyectos personales y de aprendizaje en las áreas de interés.
          </p>
        </div>

        {/* Cards — flex + justify-center para centrar cualquier cantidad */}
        <div ref={gridRef} className="flex flex-wrap justify-center gap-6">

          {preview.map((project, idx) => (
            <Card
              key={project.id}
              style={{ transitionDelay: gridVisible ? `${idx * 90}ms` : "0ms" }}
              className={`w-full sm:w-80 bg-gradient-card border-border/50 hover:border-primary/40 hover:shadow-glow transition-all duration-300 flex flex-col ${revealClass(gridVisible)}`}
            >
              {/* Image */}
              <div className="w-full aspect-video rounded-t-lg overflow-hidden bg-muted/50">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FolderOpen className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                )}
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col gap-4 flex-1">
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex items-center gap-3 pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-cyber-blue transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.blogUrl && (
                    <a
                      href={project.blogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-cyber-purple transition-colors"
                      aria-label="Blog post"
                    >
                      <BookOpen className="w-5 h-5" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow text-xs gap-1.5 transition-all duration-300"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ver más */}
        {hasMore && (
          <div className="text-center mt-12">
            <Link to="/proyectos">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
              >
                Ver más proyectos
              </Button>
            </Link>
          </div>
        )}

        {/* Tech stack */}
        <div ref={techRef} className="mt-16 sm:mt-20 pt-12 border-t border-border/50">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-8">
            Tecnologías que he usado
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map(({ name, icon: Icon }, idx) => (
              <span
                key={name}
                style={{ transitionDelay: techVisible ? `${idx * 40}ms` : "0ms" }}
                className={`inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-glow transition-all duration-300 ${revealClass(techVisible)}`}
              >
                <Icon className="w-4 h-4" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
