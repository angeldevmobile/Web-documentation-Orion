import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, MapPin } from "lucide-react";

const Creator = () => {
  return (
    <section id="creator" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 animate-fade-in">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">El Creador</h2>
            <p className="text-xl text-muted-foreground">
              Conoce la mente detrás de Orion
            </p>
          </div>

          {/* Creator Card */}
          <Card className="glass-effect border-primary/20 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground glow">
                    GZ
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">Gabriel Zapata</h3>
                    <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Perú 🇵🇪</span>
                      <span className="text-primary">•</span>
                      <span>23 años</span>
                    </div>
                    <p className="text-lg text-primary font-semibold mt-2">
                      Desarrollador de Software
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Creador de Orion Language (2025)
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-lg text-foreground/90 leading-relaxed italic">
                    "Orion nació como un experimento personal. Hoy es un lenguaje que representa
                    una forma distinta de pensar el código: más humana, más clara y más cercana
                    al futuro."
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Como desarrollador de software apasionado por los lenguajes de programación,
                    siempre sentí que había espacio para algo diferente. Algo que combinara lo
                    mejor de los lenguajes que amo con una visión fresca para el futuro.
                  </p>
                  <p>
                    Orion es ese sueño hecho realidad. Un lenguaje diseñado desde cero para ser
                    intuitivo, potente y accesible para todos. Desde estudiantes que escriben su
                    primer programa hasta equipos que construyen sistemas complejos.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4 justify-center pt-6 border-t border-border/50">
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open("https://github.com/gabrielzapata", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open("https://twitter.com/orionlang", "_blank")}
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10"
                    onClick={() => window.location.href = "mailto:contact@orion-lang.dev"}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contacto
                  </Button>
                </div>

                {/* Community Call */}
                <div className="text-center pt-6 border-t border-border/50 space-y-4">
                  <h4 className="text-xl font-bold text-foreground">Únete a la comunidad</h4>
                  <p className="text-muted-foreground">
                    Orion es un proyecto de código abierto. Tu contribución puede ayudar a
                    dar forma al futuro de la programación.
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 glow"
                    onClick={() => window.open("https://github.com/orion-lang", "_blank")}
                  >
                    Contribuir en GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Creator;
