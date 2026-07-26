import { Button } from "@/components/ui/button";
import { Sparkles, Github, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="flex items-center justify-center pt-28 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-border">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">A language for the next generation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="inline-flex">
              {"Orion".split("").map((ch, i) => (
                <span
                  key={i}
                  className="text-gradient animate-letter"
                  style={{ animationDelay: `${i * 0.09}s` }}
                >
                  {ch}
                </span>
              ))}
            </span>
            <br />
            <span className="text-foreground">Code that thinks with you</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Clear syntax, native compilation, and a complete standard library.
          </p>

          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Orion pairs a readable syntax with efficient execution through a Rust VM and a
            Cranelift JIT. It includes optional typing, concurrency, built-in AI, and
            development tools ready to use.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              onClick={() =>
                document
                  .getElementById("get-started")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Get started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => window.open("https://github.com/angeldevmobile/Orion", "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              View source
            </Button>
          </div>

          {/* Code Example */}
          <div className="mt-8 max-w-3xl mx-auto animate-scale-in">
            <div className="glass-effect rounded-xl p-6 border border-border">
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
                  <span className="text-muted-foreground">-- Hello world in Orion</span>{"\n"}
                  <span className="text-primary">show</span>
                  <span className="text-foreground">(</span>
                  <span className="text-accent">"Hello, world from Orion"</span>
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
