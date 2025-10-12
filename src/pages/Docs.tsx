import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ErrorsModule from "@/components/docs/ErrorsModule";
import { Book } from "lucide-react";
import OrionCoreTypes from "@/components/docs/OrionCoreTypes";

const Docs = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-20 px-4 pb-16">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-primary/30 mb-6">
              <Book className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">Documentación técnica</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Documentación de Orion</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora los módulos y funcionalidades del lenguaje
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <ErrorsModule />
            <OrionCoreTypes />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Docs;
