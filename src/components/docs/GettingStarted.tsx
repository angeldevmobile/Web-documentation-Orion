import { CodeBlock, InlineCode, Note, SectionHeading, SubHeading } from "./DocHelpers";

export default function GettingStarted() {
  return (
    <>
      {/* 1.1 What is Orion */}
      <section id="what-is-orion">
        <SectionHeading id="what-is-orion">1.1 What is Orion</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Orion is a general-purpose programming language implemented in Rust. Code runs
          on a stack-based virtual machine with a Cranelift JIT backend for native-speed
          execution, and it can also be compiled ahead of time into a standalone native
          executable.
        </p>
        <p className="text-foreground/80 leading-relaxed mt-3">
          The language favors a clean, readable syntax with optional static typing,
          object-oriented programming through <InlineCode>shape</InlineCode> definitions,
          native async concurrency, a broad standard library, and built-in AI statements
          (<InlineCode>think</InlineCode>, <InlineCode>learn</InlineCode>,{" "}
          <InlineCode>sense</InlineCode>).
        </p>

        <Note type="note">
          Orion is in active development (Beta). It is stable enough to build with, and new
          features, tests, and improvements land regularly. Feedback and contributions are
          welcome.
        </Note>

        <SubHeading>1.1.1 Key characteristics</SubHeading>
        <ul className="list-disc list-inside space-y-1.5 text-foreground/80 text-sm leading-relaxed">
          <li>Bytecode compilation executed by a stack-based virtual machine.</li>
          <li>Native-speed execution through a Cranelift JIT backend.</li>
          <li>
            Ahead-of-time compilation to native executables with{" "}
            <InlineCode>orion build</InlineCode>.
          </li>
          <li>Optional static type checking with a built-in type checker.</li>
          <li>
            Object-oriented programming with <InlineCode>shape</InlineCode> definitions.
          </li>
          <li>Native async and await, tasks, and channels.</li>
          <li>Standard library for files, JSON, networking, cryptography, and data.</li>
          <li>Interactive REPL and a VS Code extension with language server support.</li>
        </ul>
      </section>

      {/* 1.2 Installation */}
      <section id="installation">
        <SectionHeading id="installation">1.2 Installation</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          There are two ways to install Orion. The recommended path is the VS Code
          extension, which downloads the compiler for you. You can also install the CLI on
          its own.
        </p>

        <SubHeading>1.2.1 With the VS Code extension (recommended)</SubHeading>
        <p className="text-foreground/80 text-sm mb-3">
          Search for <InlineCode>Orion Language</InlineCode> in the Extensions panel, or
          install it from a terminal:
        </p>
        <CodeBlock code={`code --install-extension AngelZapata.oriondev`} />
        <p className="text-foreground/80 text-sm mt-2">
          The compiler is downloaded automatically the first time you open a{" "}
          <InlineCode>.orx</InlineCode> file, so there is nothing else to configure.
        </p>

        <SubHeading>1.2.2 Standalone CLI</SubHeading>
        <p className="text-foreground/80 text-sm mb-3">
          Download the binary for your platform from the{" "}
          <a
            href="https://github.com/angeldevmobile/Orion/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Releases page on GitHub
          </a>
          . No installer is required.
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground/80 text-sm">
          <li>
            Windows: <InlineCode>orion-win32-x64.exe</InlineCode>
          </li>
          <li>
            Linux: <InlineCode>orion-linux-x64</InlineCode>
          </li>
          <li>
            macOS (Apple Silicon): <InlineCode>orion-darwin-arm64</InlineCode>
          </li>
        </ul>

        <SubHeading>1.2.3 Add to PATH (optional)</SubHeading>
        <p className="text-foreground/80 text-sm">
          To run <InlineCode>orion</InlineCode> from any directory, move the executable to
          a folder that is already in your <InlineCode>PATH</InlineCode>, or add its folder
          to the system <InlineCode>PATH</InlineCode>.
        </p>

        <SubHeading>1.2.4 Verify the installation</SubHeading>
        <CodeBlock code={`orion --version\norion doctor`} />
        <Note type="tip">
          <InlineCode>orion doctor</InlineCode> checks your environment and reports any
          missing pieces. No Rust or Cargo installation is needed; the binary is fully
          standalone.
        </Note>
      </section>

      {/* 1.3 Quick Start */}
      <section id="quickstart">
        <SectionHeading id="quickstart">1.3 Quick Start</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Orion source files use the <InlineCode>.orx</InlineCode> extension.
        </p>

        <SubHeading>1.3.1 Hello, World</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          Create a file named <InlineCode>hello.orx</InlineCode>:
        </p>
        <CodeBlock code={`show("Hello, World!")`} />
        <p className="text-foreground/80 text-sm mb-2">Run it:</p>
        <CodeBlock code={`orion run hello.orx`} />
        <p className="text-foreground/80 text-sm mt-2">
          Running <InlineCode>orion hello.orx</InlineCode> without a subcommand does the
          same thing.
        </p>

        <SubHeading>1.3.2 Variables and interpolation</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          Variables are declared by assignment, with no keyword. Strings support{" "}
          <InlineCode>{"${...}"}</InlineCode> interpolation.
        </p>
        <CodeBlock
          code={`name = "Orion"\nversion = 1\nshow("Language: \${name} v\${version}")`}
        />
        <Note type="note">
          Orion has no <InlineCode>let</InlineCode> or <InlineCode>var</InlineCode> keyword.
          Writing <InlineCode>let x = 5</InlineCode> is an error; use{" "}
          <InlineCode>x = 5</InlineCode>.
        </Note>

        <SubHeading>1.3.3 Functions</SubHeading>
        <CodeBlock code={`fn double(x) {\n  return x * 2\n}\n\nshow(double(21))`} />

        <SubHeading>1.3.4 Create a project</SubHeading>
        <CodeBlock code={`orion new my-project\ncd my-project\norion run main.orx`} />
        <p className="text-foreground/80 text-sm mt-2">
          <InlineCode>orion new</InlineCode> generates a project scaffold with a main{" "}
          <InlineCode>.orx</InlineCode> file and an <InlineCode>orion.json</InlineCode>{" "}
          manifest.
        </p>
      </section>

      {/* 1.4 Interactive REPL */}
      <section id="repl">
        <SectionHeading id="repl">1.4 Interactive REPL</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          The <InlineCode>orion repl</InlineCode> command starts an interactive
          read-eval-print loop, useful for trying out expressions and definitions.
        </p>
        <CodeBlock
          code={`orion repl\n\norion> 2 + 3\n5\norion> fn double(x) { return x * 2 }\norion> double(21)\n42\norion> name = "World"\norion> show("Hello, \${name}!")\nHello, World!`}
        />
        <Note type="tip">
          Definitions such as functions and shapes persist across prompts within the same
          session.
        </Note>
      </section>
    </>
  );
}
