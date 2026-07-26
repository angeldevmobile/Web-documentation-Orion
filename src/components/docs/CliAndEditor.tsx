import { CodeBlock, InlineCode, Note, SectionHeading, SubHeading } from "./DocHelpers";

function CmdTable({ rows }: { rows: { cmd: string; desc: string }[] }) {
  return (
    <div className="overflow-x-auto my-5">
      <table className="w-full text-[14px] border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-2.5 pr-6 font-semibold text-foreground/60 w-2/5">Command</th>
            <th className="text-left py-2.5 font-semibold text-foreground/60">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/40">
              <td className="py-2.5 pr-6 font-mono text-primary align-top whitespace-nowrap">{r.cmd}</td>
              <td className="py-2.5 text-foreground/80 align-top">{r.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CliAndEditor() {
  return (
    <>
      {/* 4.1 Running and building */}
      <section id="cli-run">
        <SectionHeading id="cli-run">4.1 Running and Building</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          The CLI is invoked as <InlineCode>orion {"<command>"} [options]</InlineCode>.
          Passing a file directly is a shortcut for <InlineCode>orion run</InlineCode>.
        </p>
        <CmdTable
          rows={[
            { cmd: "orion run file.orx", desc: "Compiles and runs a file. Add --no-typecheck to skip type checking." },
            { cmd: "orion file.orx", desc: "Shortcut for orion run." },
            { cmd: "orion jit file.orx", desc: "Runs with the Cranelift JIT backend." },
            { cmd: "orion build file.orx", desc: "Compiles to a native executable. Use -o to name the output." },
            { cmd: "orion compile file.orx", desc: "Compiles to .orbc bytecode." },
            { cmd: "orion check file.orx", desc: "Checks syntax and types. Add --types for full type checking." },
            { cmd: "orion new project", desc: "Creates a new project scaffold." },
            { cmd: "orion test [folder]", desc: "Runs tests (files named test_*.orx)." },
            { cmd: "orion repl", desc: "Starts the interactive REPL." },
            { cmd: "orion doctor", desc: "Checks your environment." },
          ]}
        />
        <SubHeading>4.1.1 Examples</SubHeading>
        <CodeBlock
          code={`orion run app.orx\norion build app.orx -o app.exe    -- native executable\norion check --types app.orx`}
        />
        <Note type="warning">
          <InlineCode>build</InlineCode> produces a native executable;{" "}
          <InlineCode>compile</InlineCode> produces <InlineCode>.orbc</InlineCode> bytecode.
          They are different commands.
        </Note>
      </section>

      {/* 4.2 Development tools */}
      <section id="cli-tools">
        <SectionHeading id="cli-tools">4.2 Development Tools</SectionHeading>
        <CmdTable
          rows={[
            { cmd: "orion fmt file.orx", desc: "Formats source code. Use --write to apply, --check for CI." },
            { cmd: "orion watch file.orx", desc: "Re-runs the file automatically on every save." },
            { cmd: "orion bench file.orx", desc: "Benchmarks a program. Use --runs=N to set the number of runs." },
            { cmd: "orion debug file.orx", desc: "Interactive debugger with breakpoints, step, and watch." },
            { cmd: "orion docs file", desc: "Generates Markdown documentation. Use --output=dir." },
          ]}
        />
        <CodeBlock code={`orion fmt app.orx --write\norion watch server.orx`} />
      </section>

      {/* 4.3 Package manager */}
      <section id="cli-packages">
        <SectionHeading id="cli-packages">4.3 Package Manager</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Packages are described by an <InlineCode>orion.json</InlineCode> manifest and
          resolved from the registry.
        </p>
        <CmdTable
          rows={[
            { cmd: "orion add pkg", desc: "Installs a package (alias: install; --force to reinstall)." },
            { cmd: "orion remove pkg", desc: "Uninstalls a package (alias: uninstall)." },
            { cmd: "orion list", desc: "Lists available packages." },
            { cmd: "orion search query", desc: "Searches for packages." },
            { cmd: "orion update [pkg]", desc: "Updates one package or all of them." },
            { cmd: "orion publish", desc: "Publishes a package (requires orion.json)." },
          ]}
        />
        <CodeBlock code={`orion search json\norion add http`} />
      </section>

      {/* 5.1 VS Code extension */}
      <section id="vscode-setup">
        <SectionHeading id="vscode-setup">5.1 VS Code Extension</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          The official extension turns VS Code into a full Orion environment: syntax
          highlighting, IntelliSense, real compiler diagnostics, a REPL, watch mode, a test
          runner, and visual tools.
        </p>

        <SubHeading>5.1.1 Install</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          Search for <InlineCode>Orion Language</InlineCode> in the Extensions panel, or
          install it from a terminal:
        </p>
        <CodeBlock code={`code --install-extension AngelZapata.oriondev`} />
        <Note type="tip">
          The compiler downloads automatically the first time you open a{" "}
          <InlineCode>.orx</InlineCode> file, so there is nothing else to set up.
        </Note>

        <SubHeading>5.1.2 Features</SubHeading>
        <ul className="list-disc list-inside space-y-1.5 text-foreground/80 text-sm leading-relaxed">
          <li>Syntax highlighting and string interpolation.</li>
          <li>IntelliSense and hover documentation across files.</li>
          <li>Real compiler diagnostics in the Problems panel as you save.</li>
          <li>Interactive REPL and watch mode.</li>
          <li>Test explorer for <InlineCode>test_*.orx</InlineCode> files.</li>
          <li>Visual tools: shape diagram, route explorer, and import graph.</li>
          <li>Package manager UI and HTML documentation generator.</li>
        </ul>

        <SubHeading>5.1.3 Editor toolbar</SubHeading>
        <p className="text-foreground/80 text-sm">
          Open any <InlineCode>.orx</InlineCode> file and a row of one click actions appears
          in the editor title bar: Run, Watch, Route Explorer, Shape Diagram, Package
          Manager, Docs, and Import Graph.
        </p>
      </section>
    </>
  );
}
