import { Button } from "@/components/ui/button";
import { Sparkles, Github, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-primary/30 animate-glow-pulse">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">Un lenguaje para la nueva generación</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient">Orion</span>
            <br />
            <span className="text-foreground">Código que piensa contigo</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Simple como Python. Moderno como Rust. Rápido como Go.
          </p>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Combina la legibilidad de los lenguajes modernos con una ejecución eficiente
            y una sintaxis futurista. Su misión: acercar el poder del código al pensamiento humano.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow text-lg px-8 py-6"
              onClick={() => navigate("/docs")}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Empezar ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => window.open("https://github.com/orion-lang", "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              Ver código
            </Button>
          </div>

          {/* Code Example */}
          <div className="mt-12 max-w-2xl mx-auto animate-scale-in">
            <div className="glass-effect rounded-xl p-6 border border-primary/20 glow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground font-mono">hello.orx</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent/50"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/50"></div>
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/50"></div>
                </div>
              </div>
              <pre className="text-left bg-transparent border-0 p-0">
                <code className="font-mono text-sm md:text-base text-foreground">
                  <span className="text-accent">// Hola Mundo en Orion</span>{"\n"}
                  <span className="text-primary">show</span>
                  <span className="text-foreground">(</span>
                  <span className="text-accent">"✨ Hola, universo desde Orion! ✨"</span>
                  <span className="text-foreground">)</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
