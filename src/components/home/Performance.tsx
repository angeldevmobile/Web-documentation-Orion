import { ArrowRight } from "lucide-react";
import { BENCH_URL } from "@/lib/site";

// Cifras de bench/ en el repo del lenguaje (mejor de 3, misma máquina). Al
// actualizarlas, actualizar también el README y el CHANGELOG.
const STATS = [
  {
    value: "30×",
    label: "faster with the JIT",
    detail: "fib(30): 2.2 s interpreted, 0.07 s with orion --jit. Arithmetic compiles to plain CPU instructions.",
  },
  {
    value: "2×",
    label: "faster than Python at loading data",
    detail: "500k CSV rows into typed columns: 264 ms against 516 ms for Python's csv module, with the same memory.",
  },
  {
    value: "8 ms",
    label: "to scrape 500 products",
    detail: "Selenium needs 14 s and Playwright 9 s for the same 2,000 reads. Orion has no driver process in between.",
  },
];

const Performance = () => (
  <section id="performance" className="border-t border-border/60 bg-muted/20 px-4 py-24">
    <div className="container mx-auto max-w-6xl">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Measured, not promised</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Every number here comes from a script in the repository that you can run on
          your own machine, and both sides print the same results.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-7">
            <p className="text-5xl font-bold tracking-tight text-gradient">{s.value}</p>
            <p className="mt-2 font-semibold">{s.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center">
        <a
          href={BENCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
        >
          Benchmarks and methodology <ArrowRight className="h-4 w-4" />
        </a>
      </p>
    </div>
  </section>
);

export default Performance;
