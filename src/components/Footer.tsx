import { Github, BookOpen, MessageSquare, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const links = {
    recursos: [
      { name: "Documentación", url: "https://docs.orion-lang.dev" },
      { name: "GitHub", url: "https://github.com/orion-lang" },
      { name: "Tutoriales", url: "https://docs.orion-lang.dev/tutorials" },
    ],
    comunidad: [
      { name: "Discord", url: "#" },
      { name: "Reddit", url: "#" },
      { name: "Twitter", url: "https://twitter.com/orionlang" },
    ],
  };

  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Orion Language</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Un lenguaje de programación moderno diseñado para la nueva generación de desarrolladores.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/orion-lang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://docs.orion-lang.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-2">
              {links.recursos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Comunidad</h4>
            <ul className="space-y-2">
              {links.comunidad.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Orion Language. Creado con ❤️ por Gabriel Zapata.</p>
          <div className="flex items-center gap-2">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>para la comunidad de desarrolladores</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
