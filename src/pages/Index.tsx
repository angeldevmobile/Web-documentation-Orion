import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import Manifesto from "@/components/Manifesto";
import Creator from "@/components/Creator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <History />
        <Features />
        <Roadmap />
        <Manifesto />
        <Creator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
