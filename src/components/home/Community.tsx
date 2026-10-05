import { ArrowRight, Github, MessageSquareWarning } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ISSUES_URL, ORION_VERSION, REPO_URL } from "@/lib/site";

const Community = () => (
  <section id="community" className="border-t border-border/60 px-4 py-24">
    <div className="container mx-auto max-w-3xl text-center">
      <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
        Beta · v{ORION_VERSION}
      </p>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Built in the open, growing fast</h2>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
        <p>
          Orion is young and under active development, with frequent releases. The
          goal is not to stay an experiment: it is for people to use it for real work.
        </p>
        <p>
          What gets built next is decided by what gets in the way of that. Known gaps are
          written down in the open, and the most useful thing you can do is try Orion on a
          script, a service or a report, and tell us what broke or what was missing.
        </p>
      </div>
      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg" className="bg-primary px-6 text-primary-foreground hover:bg-primary/90">
          <a href={ISSUES_URL} target="_blank" rel="noopener noreferrer">
            <MessageSquareWarning className="mr-2 h-4 w-4" /> Report an issue
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="px-6">
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Star on GitHub
          </a>
        </Button>
        <a
          href={`${REPO_URL}/blob/master/BACKLOG.md`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2 font-medium text-primary hover:underline"
        >
          What is missing <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

export default Community;
