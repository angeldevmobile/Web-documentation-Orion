import { Brain, Zap, Code2, Globe, Lock, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Legibilidad primero",
      description: "Código que parece pseudocódigo, fácil de enseñar y entender",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Rapidez real",
      description: "Diseñado para ejecutarse con rendimiento al nivel de Go o Rust",
      color: "text-accent",
    },
    {
      icon: Code2,
      title: "Modernidad",
      description: "Async, match, interpolación, null-safe y tipado opcional",
      color: "text-primary",
    },
    {
      icon: Globe,
      title: "Universalidad",
      description: "Desde scripts rápidos hasta grandes proyectos",
      color: "text-accent",
    },
    {
      icon: Lock,
      title: "Accesible",
      description: "Instalar, aprender y usar en minutos",
      color: "text-primary",
    },
    {
      icon: Sparkles,
      title: "Sintaxis futurista",
      description: "Expresiva, elegante y preparada para el futuro",
      color: "text-accent",
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Características clave
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Por qué Orion se diferencia de otros lenguajes
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors ${feature.color}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
