import { CodeBlock, InlineCode, Note, SectionHeading, SubHeading } from "./DocHelpers";

export default function LangReference() {
  return (
    <>
      {/* 2.1 Variables & Types */}
      <section id="variables">
        <SectionHeading id="variables">2.1 Variables and Types</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Variables are declared by assignment. There is no{" "}
          <InlineCode>let</InlineCode> or <InlineCode>var</InlineCode> keyword. Type
          annotations are optional and, when present, are checked with{" "}
          <InlineCode>orion check --types</InlineCode>.
        </p>

        <SubHeading>2.1.1 Declaration and constants</SubHeading>
        <CodeBlock code={`name = "Orion"\nversion = 1\nconst PI = 3.14159`} />
        <Note type="note">
          Orion has no <InlineCode>let</InlineCode> keyword. Writing{" "}
          <InlineCode>let x = 5</InlineCode> is an error; use{" "}
          <InlineCode>x = 5</InlineCode>. Use <InlineCode>const</InlineCode> for values
          that must not change.
        </Note>

        <SubHeading>2.1.2 Primitive types</SubHeading>
        <div className="overflow-x-auto my-5">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2.5 pr-6 font-semibold text-foreground/60">Type</th>
                <th className="text-left py-2.5 pr-6 font-semibold text-foreground/60">Example</th>
                <th className="text-left py-2.5 font-semibold text-foreground/60">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/40">
                <td className="py-2.5 pr-6 font-mono text-primary">int</td>
                <td className="py-2.5 pr-6 font-mono text-muted-foreground">42, -7</td>
                <td className="py-2.5 text-foreground/80">64-bit signed integer</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-2.5 pr-6 font-mono text-primary">float</td>
                <td className="py-2.5 pr-6 font-mono text-muted-foreground">3.14, -0.5</td>
                <td className="py-2.5 text-foreground/80">64-bit floating point</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-2.5 pr-6 font-mono text-primary">string</td>
                <td className="py-2.5 pr-6 font-mono text-muted-foreground">"hello"</td>
                <td className="py-2.5 text-foreground/80">{"UTF-8, supports ${...} interpolation"}</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-2.5 pr-6 font-mono text-primary">bool</td>
                <td className="py-2.5 pr-6 font-mono text-muted-foreground">yes, no</td>
                <td className="py-2.5 text-foreground/80">Boolean literals are yes and no</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-2.5 pr-6 font-mono text-primary">null</td>
                <td className="py-2.5 pr-6 font-mono text-muted-foreground">null</td>
                <td className="py-2.5 text-foreground/80">Absence of a value</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Note type="warning">
          Booleans are <InlineCode>yes</InlineCode> and <InlineCode>no</InlineCode>, not{" "}
          <InlineCode>true</InlineCode> and <InlineCode>false</InlineCode>.
        </Note>

        <SubHeading>2.1.3 Collections</SubHeading>
        <CodeBlock
          code={`numbers = [1, 2, 3]\nuser = { "name": "Ana", "age": 30 }\nshow(numbers[0])\nshow(user["name"])`}
        />

        <SubHeading>2.1.4 Type annotations</SubHeading>
        <CodeBlock code={`name: string = "Orion"\nage: int = 25`} />
      </section>

      {/* 2.2 Operators */}
      <section id="operators">
        <SectionHeading id="operators">2.2 Operators</SectionHeading>

        <SubHeading>2.2.1 Arithmetic</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          <InlineCode>+</InlineCode>, <InlineCode>-</InlineCode>,{" "}
          <InlineCode>*</InlineCode>, <InlineCode>/</InlineCode>, and{" "}
          <InlineCode>%</InlineCode> (modulo).
        </p>
        <CodeBlock code={`show(10 + 3)\nshow(10 % 3)`} />

        <SubHeading>2.2.2 Comparison</SubHeading>
        <p className="text-foreground/80 text-sm">
          <InlineCode>==</InlineCode>, <InlineCode>!=</InlineCode>,{" "}
          <InlineCode>{"<"}</InlineCode>, <InlineCode>{">"}</InlineCode>,{" "}
          <InlineCode>{"<="}</InlineCode>, <InlineCode>{">="}</InlineCode>.
        </p>

        <SubHeading>2.2.3 Logical</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          Logical operators are the words <InlineCode>and</InlineCode>,{" "}
          <InlineCode>or</InlineCode>, and <InlineCode>not</InlineCode>.
        </p>
        <CodeBlock code={`if x > 0 and not done {\n  show("keep going")\n}`} />

        <SubHeading>2.2.4 Compound assignment</SubHeading>
        <CodeBlock code={`x = 5\nx += 3\nx *= 2\nshow(x)`} />

        <SubHeading>2.2.5 String concatenation and interpolation</SubHeading>
        <CodeBlock
          code={`greeting = "Hello, " + "World"\nname = "Orion"\nshow("Welcome to \${name}")`}
        />
      </section>

      {/* 2.3 Control Flow */}
      <section id="control-flow">
        <SectionHeading id="control-flow">2.3 Control Flow</SectionHeading>

        <SubHeading>2.3.1 if / else if / else</SubHeading>
        <CodeBlock
          code={`score = 82\nif score >= 90 {\n  show("A")\n} else if score >= 80 {\n  show("B")\n} else {\n  show("C")\n}`}
        />
        <Note type="note">
          The keyword is <InlineCode>else if</InlineCode> (two words). There is no{" "}
          <InlineCode>elsif</InlineCode>.
        </Note>

        <SubHeading>2.3.2 while</SubHeading>
        <CodeBlock code={`i = 0\nwhile i < 3 {\n  show(i)\n  i += 1\n}`} />

        <SubHeading>2.3.3 for ... in</SubHeading>
        <CodeBlock
          code={`for item in ["a", "b", "c"] {\n  show(item)\n}\n\nfor i in range(3) {\n  show(i)\n}`}
        />

        <SubHeading>2.3.4 match</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          Each arm is a pattern followed by a block. Use <InlineCode>_</InlineCode> as the
          default arm.
        </p>
        <CodeBlock
          code={`match status {\n  1 { show("one") }\n  2 { show("two") }\n  _ { show("other") }\n}`}
        />
        <Note type="warning">
          Match arms do not use an arrow. The pattern is followed directly by a{" "}
          <InlineCode>{"{ ... }"}</InlineCode> block.
        </Note>

        <SubHeading>2.3.5 break and continue</SubHeading>
        <CodeBlock
          code={`for i in range(10) {\n  if i == 5 { break }\n  if i % 2 == 0 { continue }\n  show(i)\n}`}
        />
      </section>

      {/* 2.4 Functions */}
      <section id="functions">
        <SectionHeading id="functions">2.4 Functions</SectionHeading>

        <SubHeading>2.4.1 Definition</SubHeading>
        <CodeBlock code={`fn add(a, b) {\n  return a + b\n}\n\nshow(add(2, 3))`} />

        <SubHeading>2.4.2 Default parameters</SubHeading>
        <CodeBlock
          code={`fn greet(name = "World") {\n  show("Hi " + name)\n}\n\ngreet()\ngreet("Orion")`}
        />

        <SubHeading>2.4.3 Lambdas</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          Functions are values and can be assigned to variables. Lambdas capture the
          surrounding scope. There is a block form and a concise arrow form.
        </p>
        <CodeBlock
          code={`-- block form\ndouble = fn(x) { return x * 2 }\n\n-- arrow form: params => expression\ntriple = x => x * 3\nadd = (a, b) => a + b\n\nshow(double(21))\nshow(add(2, 3))`}
        />
        <p className="text-foreground/80 text-sm mt-2">
          The arrow form is convenient for inline callbacks, for example{" "}
          <InlineCode>{"nums.map(x => x * 2)"}</InlineCode>.
        </p>
      </section>

      {/* 2.5 Error Handling */}
      <section id="error-handling">
        <SectionHeading id="error-handling">2.5 Error Handling</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Wrap code that may fail in an <InlineCode>attempt</InlineCode> block and recover
          in the matching <InlineCode>handle</InlineCode> block, which receives the error.
        </p>
        <CodeBlock
          code={`attempt {\n  result = 10 / 0\n} handle err {\n  show("Something went wrong")\n}`}
        />
      </section>

      {/* 2.6 Module System */}
      <section id="modules">
        <SectionHeading id="modules">2.6 Modules and Imports</SectionHeading>

        <SubHeading>2.6.1 Built-in functions</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          Common functions such as <InlineCode>len</InlineCode>,{" "}
          <InlineCode>range</InlineCode>, and <InlineCode>sqrt</InlineCode> are available
          globally, with no import.
        </p>
        <CodeBlock code={`show(len([1, 2, 3]))\nshow(sqrt(16))\nshow(range(3))`} />

        <SubHeading>2.6.2 use</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          Import a module and bind it to a name with <InlineCode>use ... as</InlineCode>,
          then call its functions through that name.
        </p>
        <CodeBlock code={`use "math" as m\nshow(m.sqrt(25))`} />

        <SubHeading>2.6.3 Packages</SubHeading>
        <p className="text-foreground/80 text-sm">
          Install community packages with <InlineCode>orion add {"<package>"}</InlineCode>{" "}
          and publish your own with <InlineCode>orion publish</InlineCode>. See the CLI
          chapter for details.
        </p>
      </section>

      {/* 2.7 Shapes (OOP) */}
      <section id="shapes">
        <SectionHeading id="shapes">2.7 Shapes (OOP)</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          A <InlineCode>shape</InlineCode> defines an object type with fields and methods.
          The constructor is <InlineCode>on_create</InlineCode>, methods are declared with{" "}
          <InlineCode>act</InlineCode>, and the current instance is <InlineCode>me</InlineCode>.
        </p>

        <SubHeading>2.7.1 Defining a shape</SubHeading>
        <CodeBlock
          code={`shape Point {\n  x\n  y\n  on_create(a, b) {\n    me.x = a\n    me.y = b\n  }\n  act sum() {\n    return me.x + me.y\n  }\n}\n\np = Point(3, 4)\nshow(p.sum())`}
        />
        <Note type="warning">
          The instance reference is <InlineCode>me</InlineCode>, not{" "}
          <InlineCode>self</InlineCode> or <InlineCode>this</InlineCode>.
        </Note>

        <SubHeading>2.7.2 Composition with using</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          A shape can reuse other shapes with <InlineCode>using [ ... ]</InlineCode>.
        </p>
        <CodeBlock
          code={`shape Base {\n  act hello() { show("hello from base") }\n}\n\nshape Child using [Base] {\n}\n\nc = Child()\nc.hello()`}
        />

        <SubHeading>2.7.3 Type checks with is</SubHeading>
        <CodeBlock code={`a = Point(1, 2)\nshow(a is Point)`} />
      </section>

      {/* 2.8 Async / Await */}
      <section id="async">
        <SectionHeading id="async">2.8 Async and Await</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Declare asynchronous functions with <InlineCode>async fn</InlineCode> and wait for
          a result with <InlineCode>await</InlineCode>. Use <InlineCode>spawn</InlineCode> to
          start concurrent tasks.
        </p>
        <CodeBlock
          code={`async fn work() {\n  return 42\n}\n\nresult = await work()\nshow(result)`}
        />
        <Note type="note">
          Orion also provides native channels for communication between tasks. See the
          standard library chapter for the concurrency modules.
        </Note>
      </section>

      {/* 2.9 Type System */}
      <section id="type-system">
        <SectionHeading id="type-system">2.9 Type System</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Types are optional. When you add annotations, the built-in checker verifies them
          and reports mismatches, unused assignments, and undefined variables.
        </p>
        <CodeBlock code={`fn area(w: int, h: int) -> int {\n  return w * h\n}`} />
        <p className="text-foreground/80 text-sm mt-2">Run the checker explicitly with:</p>
        <CodeBlock code={`orion check --types program.orx`} />
      </section>

      {/* 2.10 AI Primitives */}
      <section id="ai-primitives">
        <SectionHeading id="ai-primitives">2.10 AI Primitives</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Orion includes built-in statements that call language models directly:{" "}
          <InlineCode>think</InlineCode>, <InlineCode>learn</InlineCode>, and{" "}
          <InlineCode>sense</InlineCode>. <InlineCode>think</InlineCode> sends a prompt and
          returns the model response.
        </p>
        <CodeBlock code={`answer = think "What is the speed of light?"\nshow(answer)`} />
        <Note type="note">
          The AI statements require a model provider to be configured (for example, an API
          key in your environment). Without it, these statements are unavailable at runtime.
        </Note>
      </section>
    </>
  );
}
