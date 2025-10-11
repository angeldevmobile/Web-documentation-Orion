import { Telescope, Zap, Feather } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const History = () => {
  const principles = [
    {
      icon: Feather,
      title: "La simplicidad de Python",
      description: "Sintaxis clara y legible que se siente natural",
    },
    {
      icon: Zap,
      title: "La velocidad de Go",
      description: "Rendimiento optimizado para aplicaciones modernas",
    },
    {
      icon: Telescope,
      title: "La modernidad de Rust",
      description: "Características avanzadas y seguridad de tipos",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Historia & Filosofía</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              De dónde nace Orion y por qué fue creado
            </p>
          </div>

          {/* Story Card */}
          <Card className="glass-effect border-primary/20 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Orion nace en 2025 con una idea clara:
                  <span className="text-primary"> hacer que programar se sienta como pensar.</span>
                </h3>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Creado por <span className="text-primary font-semibold">Gabriel Zapata</span>, 
                  desarrollador de software peruano de 23 años, Orion surge como un experimento 
                  para combinar lo mejor de tres mundos:
                </p>

                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  {principles.map((principle, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center text-center space-y-3 p-6 rounded-lg glass-effect border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <principle.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground">{principle.title}</h4>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 space-y-4 border-t border-border/50">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    El nombre viene de la constelación <span className="text-primary font-semibold">Orion</span>, 
                    símbolo de guía y exploración. Así como las estrellas guían a los viajeros, Orion busca 
                    guiar a los programadores hacia un nuevo estilo de código:
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center pt-2">
                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                      Legible
                    </span>
                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                      Conciso
                    </span>
                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                      Futurista
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default History;
