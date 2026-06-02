import { useState } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useMediumFeed } from "@/hooks/useMediumFeed";

const POSTS_LIMIT = 3;
const MEDIUM_URL = "https://medium.com/@th3-butl3r";

const BlogPreview = () => {
  const { posts, loading, error } = useMediumFeed(POSTS_LIMIT);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);

  if (!loading && (error || posts.length === 0)) return null;

  const openExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setPendingUrl(null);
  };

  return (
    <>
      <section id="blog" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              BITÁCORA <span className="text-cyber-blue">PERSONAL</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Entradas en las que detallo mis ejercicios y proyectos, compartiendo tanto las soluciones
              aplicadas como el camino mental que tomé para llegar a ellas. 
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {loading
              ? Array.from({ length: POSTS_LIMIT }).map((_, i) => (
                  <div
                    key={i}
                    className="w-full sm:w-80 h-72 rounded-lg border border-border/50 bg-card/40 animate-pulse"
                  />
                ))
              : posts.map((post) => (
                  <div
                    key={post.link}
                    onClick={() => setPendingUrl(post.link)}
                    className="w-full sm:w-80 group cursor-pointer"
                  >
                    <div className="h-full rounded-lg border border-border/50 bg-card/40 hover:border-cyber-blue/40 hover:shadow-cyber transition-all duration-300 overflow-hidden flex flex-col">

                      {/* Thumbnail */}
                      {post.thumbnail && (
                        <div className="h-40 overflow-hidden bg-muted flex-shrink-0">
                          <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      <div className="p-5 flex flex-col gap-3 flex-1">
                        {/* Tags */}
                        {post.categories.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {post.categories.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs font-mono border border-cyber-blue/30 text-cyber-blue/70 rounded bg-cyber-blue/5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-cyber-blue transition-colors duration-200 line-clamp-3">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        {post.description && (
                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                            {post.description}
                          </p>
                        )}

                        {/* Date + icon */}
                        <div className="flex items-center justify-between mt-auto pt-1">
                          <span className="text-xs font-mono text-muted-foreground">
                            {new Date(post.pubDate).toLocaleDateString("es-MX", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <ExternalLink className="w-3 h-3 text-muted-foreground/50 group-hover:text-cyber-blue transition-colors duration-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {/* CTA */}
          {!loading && (
            <div className="text-center mt-10 space-y-3">
              <p className="text-xs font-mono text-muted-foreground/60">
                // publicaciones más recientes
              </p>
              <Button
                variant="outline"
                className="border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300"
                onClick={() => setPendingUrl(MEDIUM_URL)}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Ver todas las publicaciones
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Confirmation dialog — shared for cards and CTA button */}
      <AlertDialog open={pendingUrl !== null} onOpenChange={(open) => !open && setPendingUrl(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar navegación</AlertDialogTitle>
            <AlertDialogDescription>
              Saldrás de Bastion Lab y serás redirigido al blog del analista Vidale C. en Medium.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => pendingUrl && openExternal(pendingUrl)}>
              Continuar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default BlogPreview;
