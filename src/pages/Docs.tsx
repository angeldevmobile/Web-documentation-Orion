import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocsLayout, { type DocPage } from "@/components/DocsLayout";
import GettingStarted from "@/components/docs/GettingStarted";
import LangReference from "@/components/docs/LangReference";
import StdlibDocs from "@/components/docs/StdlibDocs";
import CliAndEditor from "@/components/docs/CliAndEditor";
import Guides from "@/components/docs/Guides";

const pages: DocPage[] = [
  { group: "Getting Started",    content: <GettingStarted /> },
  { group: "Language Reference", content: <LangReference /> },
  { group: "Standard Library",   content: <StdlibDocs /> },
  { group: "CLI & Editor",       content: <CliAndEditor /> },
  { group: "Guides",             content: <Guides /> },
];

const Docs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DocsLayout pages={pages} />
      {/* La barra lateral de DocsLayout es `fixed w-64`, así que sale del flujo:
          el footer necesita el mismo desplazamiento que su <main> o queda
          tapado por detrás. */}
      <div className="lg:pl-64">
        <Footer />
      </div>
    </div>
  );
};

export default Docs;
