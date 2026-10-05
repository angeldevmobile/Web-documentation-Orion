import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UseCases from "@/components/home/UseCases";
import Performance from "@/components/home/Performance";
import StdlibGrid from "@/components/home/StdlibGrid";
import Tooling from "@/components/home/Tooling";
import GetStarted from "@/components/GetStarted";
import Community from "@/components/home/Community";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const timer = setTimeout(() => {
        document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <UseCases />
        <Performance />
        <StdlibGrid />
        <Tooling />
        <GetStarted />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
