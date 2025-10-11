import { CheckCircle2, Circle, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Roadmap = () => {
  const phases = [
    {
      phase: "Fase 1",
      year: "2025",
      title: "Prototipo",
      status: "current",
      objectives: [
        "Intérprete en Python",
        "Extensión .orx",
        "Estructuras básicas",
      ],
      result: 'Primer "Hola Mundo" funcional',
    },
    {
      phase: "Fase 2",
      year: "2025–2026",
      title: "Herramientas",
      status: "upcoming",
      objectives: [
        "CLI completo",
        "Extensión VS Code",
        "Documentación y tutoriales",
      ],
      result: "Orion usable por cualquier desarrollador",
    },
    {
      phase: "Fase 3",
      year: "2026–2027",
      title: "Crecimiento",
      status: "future",
      objectives: [
        "Reescritura en Go/Rust",
        "Sistema de tipos completo",
        "Concurrencia nativa",
      ],
      result: "Orion productivo y veloz",
    },
    {
      phase: "Fase 4",
      year: "2027+",
      title: "Comunidad",
      status: "future",
      objectives: [
        "Sistema de paquetes",
        "Frameworks oficiales",
        "Comunidad activa",
      ],
      result: "Ecosistema completo",
    },
    {
      phase: "Fase 5",
      year: "Futuro",
      title: "Integración IA",
      status: "vision",
      objectives: [
        "Soporte para modelos locales",
        "Asistentes de código AI",
        "Optimización inteligente",
      ],
      result: "Orion + Inteligencia Artificial",
    },
  ];

  const getStatusIcon = (status: string) => {
    if (status === "current") return <CheckCircle2 className="w-6 h-6 text-primary" />;
    if (status === "upcoming") return <Rocket className="w-6 h-6 text-accent" />;
    return <Circle className="w-6 h-6 text-muted-foreground" />;
  };

  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Roadmap Técnico
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              El camino hacia el futuro de Orion
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-6">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted-foreground/20 transform md:-translate-x-1/2" />

            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10 bg-background p-1 rounded-full">
                  {getStatusIcon(phase.status)}
                </div>

                {/* Content Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-primary font-semibold">{phase.phase}</div>
                          <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">{phase.year}</span>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground/80">Objetivos:</h4>
                        <ul className="space-y-1">
                          {phase.objectives.map((obj, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-border/50">
                        <p className="text-sm text-accent font-medium">
                          → {phase.result}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
