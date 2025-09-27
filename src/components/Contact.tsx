import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    // Limpia el formulario después de enviar
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      empresa: "",
      telefono: "",
      mensaje: "",
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
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="nombre"
                  placeholder="Nombre"
                  className="bg-background/50"
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <Input
                  name="apellido"
                  placeholder="Apellido"
                  className="bg-background/50"
                  value={formData.apellido}
                  onChange={handleChange}
                />
              </div>
              <Input
                name="email"
                placeholder="Email"
                type="email"
                className="bg-background/50"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                name="empresa"
                placeholder="Empresa"
                className="bg-background/50"
                value={formData.empresa}
                onChange={handleChange}
              />
              <Input
                name="telefono"
                placeholder="Teléfono"
                className="bg-background/50"
                value={formData.telefono}
                onChange={handleChange}
              />
              <Textarea
                name="mensaje"
                placeholder="Describe tu situación o necesidades de seguridad..."
                className="bg-background/50 min-h-32"
                value={formData.mensaje}
                onChange={handleChange}
              />
              <a
                className="w-full bg-gradient-accent text-primary-foreground hover:shadow-cyber transition-all duration-300 flex items-center justify-center py-3 rounded-md"
                href={`mailto:contacto@bastionlab.com.mx?subject=Consulta%20Confidencial&body=Nombre:%20${formData.nombre}%20${formData.apellido}%0AEmail:%20${formData.email}%0AEmpresa:%20${formData.empresa}%0ATeléfono:%20${formData.telefono}%0AMensaje:%20${encodeURIComponent(
                  formData.mensaje
                )}`}
                onClick={handleSend} // Limpia el formulario al hacer clic
              >
                <strong>Enviar Consulta</strong>
              </a>
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
                <Button variant="destructive" className="w-full">
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