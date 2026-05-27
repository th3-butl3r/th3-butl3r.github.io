import { Github, BookOpen, ExternalLink, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, PROJECTS_PREVIEW_LIMIT } from "@/data/projects";

const Projects = () => {
  const preview = projects.slice(0, PROJECTS_PREVIEW_LIMIT);
  const hasMore = projects.length > PROJECTS_PREVIEW_LIMIT;

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            PORTAFOLIO <span className="text-cyber-blue">TÉCNICO</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Proyectos personales y de aprendizaje en las áreas de interés.
          </p>
        </div>

        {/* Cards — flex + justify-center para centrar cualquier cantidad */}
        <div className="flex flex-wrap justify-center gap-6">
          
          {preview.map((project) => (
            <Card
              key={project.id}
              className="w-full sm:w-80 bg-gradient-card border-border/50 hover:shadow-cyber transition-all duration-300 flex flex-col"
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
                        className="border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 text-xs gap-1.5"
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
                className="border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300"
              >
                Ver más proyectos
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
