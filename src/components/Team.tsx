import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Github } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Vidale C.",
      role: "Lic. en Tecnologías de la Información",
      specialties: ["OSINT", "Web App Security", "Data Recovery"],
      bio: "4+ años como Backend Engineer, Técnico en recuperación de datos y egresado de la Hackmetrix Academy.",
      social: { linkedin: "https://www.linkedin.com/in/cvidale/", twitter: "#", github: "#" }
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            NUESTRO <span className="text-cyber-green">EQUIPO</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Las personas detrás cuentan con una trayectoria en el área de TI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 group hover:shadow-cyber transition-all duration-300">
              <CardHeader className="text-center pb-4">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center text-3xl font-black text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                <p className="text-cyber-blue font-medium text-sm">{member.role}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {member.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-3 pt-2">
                  <a href={member.social.linkedin} className="text-muted-foreground hover:text-cyber-blue transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;