import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Por favor ingresa un email válido.",
        variant: "destructive",
      });
      return;
    }

    // Crear el mailto con los datos del formulario
    const subject = `Consulta Bastion Lab - ${formData.name}`;
    const body = `
Nombre: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Teléfono: ${formData.phone}` : ''}

Descripción de la situación:
${formData.description}
    `.trim();

    const mailtoUrl = `mailto:contact@cyberforge.security?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoUrl;
    
    // Limpiar el formulario
    setFormData({ name: '', phone: '', email: '', description: '' });
    
    toast({
      title: "Consulta preparada",
      description: "Se ha abierto tu cliente de correo con la consulta lista para enviar.",
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            <span className="text-cyber-blue">MEDIOS</span> DE CONTACTO
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            ¿Necesitas una consulta de seguridad digital o recuperación de datos?
            <br /><strong>¡Nuestro equipo está listo para ayudarte!</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Descríbenos tu caso
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nombre *" 
                  className="bg-background/50" 
                  required
                />
                <Input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Teléfono (opcional)" 
                  className="bg-background/50" 
                  type="tel"
                />
                <Input 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email *" 
                  type="email" 
                  className="bg-background/50" 
                  required
                />
                <Textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe tu caso con el mayor detalle posible... *"
                  className="bg-background/50 min-h-32"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-accent text-primary-foreground hover:shadow-cyber transition-all duration-300"
                >
                  <strong>Enviar Consulta</strong>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                                        <div className="text-muted-foreground"><a href="mailto:contacto@bastionlab.com.mx" className="hover:underline">contacto@bastionlab.com.mx</a></div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyber-purple/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cyber-purple" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Teléfono</div>
                    <div className="text-muted-foreground">753-121-0815</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyber-green/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyber-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Ubicación</div>
                    <div className="text-muted-foreground">Lázaro Cárdenas, Mich.</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyber-red/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-cyber-red" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Disponibilidad</div>
                    <div className="text-muted-foreground">10 AM - 6 PM de lunes a viernes</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Emergencias de Recuperación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Para incidentes de recuperación de datos urgentes, contáctanos inmediatamente:
                </p>
                <Button disabled variant="destructive" className="w-full">
                  <strong>DISPONIBLE PRÓXIMAMENTE</strong>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;