import { Puzzle, FileCode2, Play, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=AngelZapata.oriondev";
const RELEASES_URL = "https://github.com/angeldevmobile/Orion/releases";

type Step = {
  icon: typeof Puzzle;
  title: string;
  body: string;
  code: string;
  note?: string;
};

const steps: Step[] = [
  {
    icon: Puzzle,
    title: "Install the VS Code extension",
    body: 'Search for "Orion Language" in the extensions panel, or install it from the terminal:',
    code: "code --install-extension AngelZapata.oriondev",
    note: "The compiler downloads automatically the first time you open a .orx file.",
  },
  {
    icon: FileCode2,
    title: "Write your first program",
    body: "Create a hello.orx file with this content:",
    code: '-- hello.orx\nshow("Hello from Orion")',
  },
  {
    icon: Play,
    title: "Run it",
    body: "From the terminal, or with the extension's Run button:",
    code: "orion run hello.orx",
  },
];

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <section id="get-started" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get started in minutes
          </h2>
          <p className="text-xl text-muted-foreground">
            Install the extension, write a file, and run it. No configuration.
          </p>
        </div>

        {/* Steps */}
        <ol className="space-y-6">
          {steps.map((step, i) => (
            <li
              key={i}
              className="relative rounded-xl border border-border bg-card p-6 flex gap-5"
            >
              {/* Number + icon */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                  {i + 1}
                </span>
                <step.icon className="w-5 h-5 text-muted-foreground" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.body}</p>
                <pre className="font-mono text-sm bg-muted/60 border border-border rounded-lg px-4 py-3 overflow-x-auto text-foreground whitespace-pre">
                  {step.code}
                </pre>
                {step.note && (
                  <p className="text-sm text-muted-foreground">{step.note}</p>
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* CTA row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => window.open(MARKETPLACE_URL, "_blank")}
          >
            <Puzzle className="w-5 h-5 mr-2" />
            View on the Marketplace
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-muted/60 hover:text-foreground"
            onClick={() => window.open(RELEASES_URL, "_blank")}
          >
            <Download className="w-5 h-5 mr-2" />
            Download the CLI
          </Button>
          <button
            onClick={() => navigate("/docs")}
            className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
          >
            Read the documentation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
