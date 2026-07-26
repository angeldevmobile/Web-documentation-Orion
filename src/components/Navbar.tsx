import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const GITHUB_URL = "https://github.com/angeldevmobile/Orion";

const Navbar = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();
  const [isDark, setIsDark] = useState<boolean>(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch (e) { /* ignore */ }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLink = (id: string) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const navLinks = [
    { name: "Home",        id: "hero" },
    { name: "Features",    id: "features" },
    { name: "Get started", id: "get-started" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-5 md:px-8 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavLink("hero")}
            className="flex items-center space-x-2 group"
          >
            <img src={`${import.meta.env.BASE_URL}orion.png`} alt="Orion" className="w-12 h-12 md:w-14 md:h-14 group-hover:animate-float" />
            <span className="text-xl font-bold text-gradient">Orion</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
              Beta
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavLink(link.id)}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Button
              asChild
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              <Link to="/playground" onClick={() => setIsOpen(false)}>
                Playground
              </Link>
            </Button>
            <Button
              asChild
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavLink(link.id)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                aria-label="Cambiar tema"
                className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors font-medium text-left"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                {isDark ? "Light mode" : "Dark mode"}
              </button>
              <Button
                asChild
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 w-full"
              >
                <Link to="/playground" onClick={() => setIsOpen(false)}>
                  Playground
                </Link>
              </Button>
              <Button
                asChild
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
