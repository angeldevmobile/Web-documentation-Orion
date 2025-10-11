import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Manifesto = () => {
  const principles = [
    {
      title: "La claridad es poder",
      description: "El código debe ser comprensible a primera vista. La claridad no es un lujo, es una necesidad.",
    },
    {
      title: "La simplicidad gana a la complejidad",
      description: "Siempre elige la solución más simple que funcione. La complejidad debe justificarse.",
    },
    {
      title: "Primero lo humano, luego la máquina",
      description: "El código se escribe una vez pero se lee mil veces. Optimiza para el lector, no solo para el compilador.",
    },
    {
      title: "Velocidad sin sacrificios",
      description: "El rendimiento importa, pero nunca a costa de la legibilidad o mantenibilidad.",
    },
    {
      title: "Universalidad práctica",
      description: "Desde scripts de 10 líneas hasta sistemas de millones. Orion escala contigo.",
    },
    {
      title: "Aprender en minutos, dominar en años",
      description: "La curva de aprendizaje debe ser suave al inicio, pero profunda con el tiempo.",
    },
    {
      title: "Legibilidad ≠ rigidez",
      description: "Ser expresivo no significa ser verboso. Busca el equilibrio perfecto.",
    },
    {
      title: "Cero fricción",
      description: "Instalar, configurar y usar debe ser instantáneo. Sin barreras de entrada.",
    },
    {
      title: "Evolución consciente",
      description: "Adopta lo nuevo sin romper lo viejo. La compatibilidad importa.",
    },
    {
      title: "El futuro es paralelo",
      description: "Async y concurrencia deben ser naturales, no excepcionales.",
    },
    {
      title: "Código para todos",
      description: "Desde estudiantes hasta expertos. Orion es inclusivo por diseño.",
    },
    {
      title: "Explorar sin miedo",
      description: "Los errores deben ser claros y educativos. Fallar es parte de aprender.",
    },
  ];

  return (
    <section id="manifesto" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 animate-fade-in">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Manifiesto de Orion
            </h2>
            <Card className="glass-effect border-primary/30 glow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                    "El código no debe ser una lucha contra la máquina, sino una conversación con ella."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Principles Accordion */}
          <Card className="glass-effect border-border/50">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-2">
                {principles.map((principle, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-border/50 rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 hover:bg-primary/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-mono text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-semibold text-left">{principle.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p className="text-muted-foreground leading-relaxed pl-10">
                        {principle.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
