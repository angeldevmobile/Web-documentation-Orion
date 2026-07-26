import { Cpu, Library, Workflow, Brain, ShieldCheck, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Cpu,
      title: "Native compilation",
      description:
        "Runs on a Rust VM and a Cranelift JIT, and builds native executables with orion build.",
    },
    {
      icon: Library,
      title: "Rich standard library",
      description:
        "Ready-to-use modules for files, JSON, networking, dates, cryptography, data, and more.",
    },
    {
      icon: Workflow,
      title: "Concurrency and async",
      description:
        "async and await, tasks on a thread pool, and native channels for real concurrency.",
    },
    {
      icon: Brain,
      title: "Built-in AI",
      description:
        "think and sense primitives to query language models directly from your code.",
    },
    {
      icon: ShieldCheck,
      title: "Types and diagnostics",
      description:
        "Optional type checking and precise compiler errors as you type.",
    },
    {
      icon: Wrench,
      title: "Complete tooling",
      description:
        "VS Code extension, LSP server, REPL, formatter, test runner, and watch mode.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Key features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What makes Orion a modern, productive language.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-border bg-card hover:border-primary/50 transition-colors duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
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
