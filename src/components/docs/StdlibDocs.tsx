import { Link } from "react-router-dom";
import { CodeBlock, InlineCode, FnTable, Note, SectionHeading, SubHeading } from "./DocHelpers";

const CATEGORIES: { title: string; modules: string; note: string }[] = [
  { title: "Text", modules: "strings, regex, template, validate, formato", note: "String manipulation, pattern matching, and formatting." },
  { title: "Numbers and data", modules: "math, list, vector, matrix, stat, serie, frame, table", note: "Arithmetic, collections, linear algebra, statistics, and data frames." },
  { title: "Files and formats", modules: "fs, json, csv, excel, pdf, zip, proto", note: "File system access and common data formats." },
  { title: "System", modules: "env, process, config, log, term, tui, watch", note: "Environment, processes, configuration, and terminal UI." },
  { title: "Date and time", modules: "datetime, timewarp", note: "Dates, times, and time-zone aware operations." },
  { title: "Networking and web", modules: "net, router, ws, sse, session, middleware, mail, s3, ssh, docker, search", note: "HTTP clients and servers, websockets, and cloud services." },
  { title: "Data and storage", modules: "db, cache, cola, state, stream, embed", note: "Databases, caching, queues, and shared state." },
  { title: "Security", modules: "crypto, crypto2, auth, secret", note: "Hashing, encryption, authentication, and secrets." },
  { title: "Concurrency", modules: "chan, tarea", note: "Channels and task orchestration." },
  { title: "AI", modules: "ai, llm, insight, vision", note: "Language models, analysis, and computer vision." },
  { title: "Specialized", modules: "quantum, cosmos, grafo, gui, random", note: "Quantum simulation, graphs, desktop GUI, and randomness." },
  { title: "Orion packages", modules: "packages/colors, packages/dates, packages/http, packages/list, packages/math, packages/progress, packages/strings, packages/uuid, packages/validate", note: "Written in Orion itself rather than Rust. Imported by path: use \"packages/uuid\"." },
];

export default function StdlibDocs() {
  return (
    <>
      {/* 3.1 Overview */}
      <section id="stdlib-overview">
        <SectionHeading id="stdlib-overview">3.1 Overview</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Orion ships with a broad standard library covering text, data, files,
          networking, security, concurrency, and AI. Functionality is reached in three
          ways.
        </p>

        <SubHeading>3.1.1 Global functions</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          A few common functions are always available, with no import.
        </p>
        <CodeBlock code={`show(len([1, 2, 3]))\nshow(sqrt(16))\nshow(range(3))`} />

        <SubHeading>3.1.2 Methods on values</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          Values such as lists and strings have methods, called with a dot.
        </p>
        <CodeBlock code={`nums = [1, 2, 3]\nshow(nums.map(x => x * 2))\nshow("orion".upper())`} />

        <SubHeading>3.1.3 Modules with use</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          Most modules are imported with <InlineCode>use</InlineCode>. An alias is optional.
        </p>
        <CodeBlock code={`use "math" as m\nshow(m.sqrt(25))\n\nuse "json"\nshow(json.forge({ "ok": yes }))`} />

        <SubHeading>3.1.4 Available modules</SubHeading>
        <div className="space-y-3 mt-3">
          {CATEGORIES.map((c) => (
            <div key={c.title} className="border border-border rounded-lg p-4 bg-card">
              <p className="font-semibold text-foreground text-sm">{c.title}</p>
              <p className="font-mono text-[13px] text-primary mt-1">{c.modules}</p>
              <p className="text-muted-foreground text-sm mt-1">{c.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Link
            to="/modules"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Browse the full module reference
          </Link>
        </div>
        <Note type="note">
          The sections below cover the most common modules. For the complete list of every
          module and function, see the{" "}
          <Link to="/modules" className="text-primary underline underline-offset-2">
            module reference
          </Link>
          . Every module follows the same pattern: import it with{" "}
          <InlineCode>use "name"</InlineCode> and call its functions through the module name.
        </Note>
      </section>

      {/* 3.2 strings */}
      <section id="lib-strings">
        <SectionHeading id="lib-strings">3.2 strings</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Text utilities. These are available both as methods on string values and through
          the <InlineCode>strings</InlineCode> module.
        </p>
        <CodeBlock code={`title = "  orion language  "\nshow(title.strip().upper())\nshow("a,b,c".split(","))`} />
        <FnTable
          rows={[
            { signature: "s.upper()", returns: "string", description: "Uppercase copy of the string." },
            { signature: "s.lower()", returns: "string", description: "Lowercase copy of the string." },
            { signature: "s.strip()", returns: "string", description: "Removes leading and trailing whitespace." },
            { signature: "s.reverse()", returns: "string", description: "Reverses the characters." },
            { signature: "s.title()", returns: "string", description: "Capitalizes the first letter of each word." },
            { signature: "s.split(sep)", returns: "list", description: "Splits into a list on the separator." },
            { signature: "s.replace(a, b)", returns: "string", description: "Replaces occurrences of a with b." },
            { signature: "s.contains(sub)", returns: "bool", description: "Whether the string contains a substring." },
            { signature: "s.length()", returns: "int", description: "Number of characters." },
          ]}
        />
      </section>

      {/* 3.3 math */}
      <section id="lib-math">
        <SectionHeading id="lib-math">3.3 math</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Mathematical constants and functions. Unlike the native modules, math ships as an
          Orion package, so it is imported by path. Several of its functions —{" "}
          <InlineCode>sqrt</InlineCode>, <InlineCode>abs</InlineCode>,{" "}
          <InlineCode>round</InlineCode>, <InlineCode>floor</InlineCode>,{" "}
          <InlineCode>ceil</InlineCode>, <InlineCode>min</InlineCode>,{" "}
          <InlineCode>max</InlineCode> — are also available globally with no import at all.
        </p>
        <CodeBlock code={`use "packages/math" as m\nshow(m.PI)\nshow(m.sqrt(144))\nshow(m.clamp(15, 0, 10))`} />
        <FnTable
          rows={[
            { signature: "m.PI", returns: "float", description: "The constant pi (3.14159...)." },
            { signature: "m.E", returns: "float", description: "The constant e (2.71828...)." },
            { signature: "m.TAU", returns: "float", description: "The constant tau (2 pi)." },
            { signature: "m.PHI", returns: "float", description: "The golden ratio (1.61803...)." },
            { signature: "m.sqrt(x)", returns: "float", description: "Square root (Newton-Raphson)." },
            { signature: "m.abs(x)", returns: "number", description: "Absolute value." },
            { signature: "m.floor(x)", returns: "int", description: "Rounds down." },
            { signature: "m.ceil(x)", returns: "int", description: "Rounds up." },
            { signature: "m.max(a, b)", returns: "number", description: "The larger of two values." },
            { signature: "m.min(a, b)", returns: "number", description: "The smaller of two values." },
            { signature: "m.pow(base, exp)", returns: "number", description: "Base raised to an integer exponent." },
            { signature: "m.factorial(n)", returns: "int", description: "Factorial of n." },
            { signature: "m.clamp(x, lo, hi)", returns: "number", description: "Constrains x to the range [lo, hi]." },
          ]}
        />
      </section>

      {/* 3.4 Lists */}
      <section id="lib-list">
        <SectionHeading id="lib-list">3.4 Lists</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Lists have methods for iteration, transformation, and mutation. Methods such as{" "}
          <InlineCode>push</InlineCode> modify the list in place.
        </p>
        <CodeBlock code={`nums = [3, 1, 2]\nnums.push(4)\nshow(nums.map(x => x * 10))\nshow(nums.contains(2))`} />
        <FnTable
          rows={[
            { signature: "list.push(item)", returns: "list", description: "Appends an item (mutates in place)." },
            { signature: "list.len()", returns: "int", description: "Number of elements." },
            { signature: "list.is_empty()", returns: "bool", description: "Whether the list has no elements." },
            { signature: "list.first()", returns: "any", description: "First element, or null." },
            { signature: "list.last()", returns: "any", description: "Last element, or null." },
            { signature: "list.reverse()", returns: "list", description: "Reverses in place." },
            { signature: "list.contains(item)", returns: "bool", description: "Whether the list contains the item." },
            { signature: "list.join(sep)", returns: "string", description: "Joins the elements into a string." },
            { signature: "list.map(fn)", returns: "list", description: "New list applying fn to each element." },
          ]}
        />
        <Note type="note">
          Lists also provide <InlineCode>filter</InlineCode>, <InlineCode>reduce</InlineCode>,
          and sorting. Explore them in the REPL or the editor autocomplete.
        </Note>
      </section>

      {/* 3.5 fs */}
      <section id="lib-fs">
        <SectionHeading id="lib-fs">3.5 fs (file system)</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Read and write files and directories.
        </p>
        <CodeBlock code={`use "fs"\nfs.write("notes.txt", "Hello")\nif fs.exists("notes.txt") {\n  show(fs.read("notes.txt"))\n}`} />
        <FnTable
          rows={[
            { signature: "fs.read(path)", returns: "string", description: "Reads an entire text file." },
            { signature: "fs.write(path, text)", returns: "null", description: "Writes (overwrites) a file." },
            { signature: "fs.append(path, text)", returns: "null", description: "Appends to the end of a file." },
            { signature: "fs.exists(path)", returns: "bool", description: "Whether the file or folder exists." },
            { signature: "fs.ls(path)", returns: "list", description: "Lists the contents of a folder." },
            { signature: "fs.mkdir(path)", returns: "null", description: "Creates a folder and its parents." },
            { signature: "fs.delete(path)", returns: "null", description: "Deletes a file or folder." },
            { signature: "fs.is_dir(path)", returns: "bool", description: "Whether the path is a folder." },
          ]}
        />
      </section>

      {/* 3.6 json */}
      <section id="lib-json">
        <SectionHeading id="lib-json">3.6 json</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Parse and serialize JSON, and work with structured data.
        </p>
        <CodeBlock code={`use "json"\ndata = json.parse("{\\"name\\": \\"Ana\\"}")\nshow(data["name"])\nshow(json.forge({ "ok": yes }))`} />
        <FnTable
          rows={[
            { signature: "json.parse(text)", returns: "any", description: "Parses a JSON string into an Orion value." },
            { signature: "json.forge(value)", returns: "string", description: "Serializes a value to JSON (sorted keys)." },
            { signature: "json.forge_pretty(value)", returns: "string", description: "Serializes with indentation." },
            { signature: "json.sort_keys(dict)", returns: "dict", description: "Returns the dict with sorted keys." },
            { signature: "json.merge_deep(a, b)", returns: "dict", description: "Deep-merges two dicts." },
            { signature: "json.validate(obj, schema)", returns: "bool", description: "Validates a value against a schema." },
          ]}
        />
      </section>

      {/* 3.7 datetime */}
      <section id="lib-datetime">
        <SectionHeading id="lib-datetime">3.7 datetime</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Current date and time, formatting, parsing, and arithmetic.
        </p>
        <CodeBlock code={`use "datetime" as dt\nshow(dt.today())\nshow(dt.add_days(dt.today(), 7))`} />
        <FnTable
          rows={[
            { signature: "dt.now()", returns: "string", description: "Current date and time." },
            { signature: "dt.today()", returns: "string", description: "Today's date." },
            { signature: "dt.timestamp()", returns: "int", description: "Seconds since the Unix epoch." },
            { signature: "dt.format(value, fmt)", returns: "string", description: "Formats a date with a pattern." },
            { signature: "dt.parse(text)", returns: "string", description: "Parses a date string." },
            { signature: "dt.add_days(value, n)", returns: "string", description: "Adds n days." },
            { signature: "dt.add_hours(value, n)", returns: "string", description: "Adds n hours." },
          ]}
        />
      </section>

      {/* 3.8 random */}
      <section id="lib-random">
        <SectionHeading id="lib-random">3.8 random</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Random numbers, choices, and identifiers.
        </p>
        <CodeBlock code={`use "random" as rnd\nshow(rnd.int(1, 6))\nshow(rnd.choice(["red", "green", "blue"]))`} />
        <FnTable
          rows={[
            { signature: "rnd.int(a, b)", returns: "int", description: "Random integer in the range [a, b]." },
            { signature: "rnd.float()", returns: "float", description: "Random float in [0, 1)." },
            { signature: "rnd.between(a, b)", returns: "float", description: "Random float in [a, b)." },
            { signature: "rnd.choice(list)", returns: "any", description: "A random element from a list." },
            { signature: "rnd.shuffle(list)", returns: "list", description: "A shuffled copy of the list." },
            { signature: "rnd.sample(list, n)", returns: "list", description: "n distinct random elements." },
            { signature: "rnd.uuidv4()", returns: "string", description: "A random UUID v4 string." },
          ]}
        />
      </section>

      {/* 3.9 frame */}
      <section id="lib-frame">
        <SectionHeading id="lib-frame">3.9 frame (data engine)</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          <InlineCode>frame</InlineCode> is Orion's columnar data engine for tabular data,
          similar to a data frame. It is implemented natively in Rust, stores data in a
          compact binary format (<InlineCode>.odf</InlineCode>), and can stream large files
          with near-constant memory.
        </p>
        <p className="text-foreground/80 leading-relaxed mt-3">
          The point is having a fast data engine built into the language, with nothing to
          install. It is the option for scripts and automation where you would otherwise
          reach for plain Python and lose speed, or add a heavy dependency to gain it.
        </p>
        <CodeBlock
          code={`use "frame" as f\n\nrows = [\n  { "name": "Ana", "age": 30 },\n  { "name": "Luis", "age": 25 }\n]\n\nd = f.from_list(rows)\nshow(f.size(d))     -- { rows: 2, cols: 2 }\nshow(f.schema(d))   -- { name: string, age: int }`}
        />
        <FnTable
          rows={[
            { signature: "f.from_list(rows)", returns: "frame", description: "Builds a frame from a list of dicts." },
            { signature: "f.from_txt(path)", returns: "frame", description: "Loads a frame from a text or CSV file." },
            { signature: "f.open(path)", returns: "frame", description: "Opens a frame from a file, auto-detecting the format." },
            { signature: "f.size(frame)", returns: "dict", description: "Row and column counts." },
            { signature: "f.schema(frame)", returns: "dict", description: "Column names and their types." },
            { signature: "f.peek(frame)", returns: "null", description: "Prints a preview of the frame." },
            { signature: "f.col(frame, name)", returns: "list", description: "Returns a column as a list." },
            { signature: "f.keep(frame, cols)", returns: "frame", description: "Keeps only the given columns." },
            { signature: "f.drop(frame, cols)", returns: "frame", description: "Removes the given columns." },
            { signature: "f.where_(frame, field, op, value)", returns: "frame", description: "Filters rows by a condition." },
            { signature: "f.to_excel(frame, path)", returns: "null", description: "Exports the frame to an Excel file." },
            { signature: "f.to_list(frame)", returns: "list", description: "Converts the frame to a list of dicts." },
          ]}
        />
        <SubHeading>3.9.1 Performance</SubHeading>
        <p className="text-foreground/80 text-sm mb-2">
          The same task in Orion and Python: load 500,000 rows and compute a sum and a
          mean. Python uses its standard library <InlineCode>csv</InlineCode> module, not
          pandas. Measured on a warm run; all three pipelines produce identical results.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2.5 pr-6 font-semibold text-foreground/60">Pipeline</th>
                <th className="text-left py-2.5 pr-6 font-semibold text-foreground/60">Time</th>
                <th className="text-left py-2.5 font-semibold text-foreground/60">Peak memory</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/40">
                <td className="py-2.5 pr-6 text-foreground/80">Python 3.13 (stdlib csv)</td>
                <td className="py-2.5 pr-6 font-mono text-muted-foreground">1034 ms</td>
                <td className="py-2.5 font-mono text-muted-foreground">104 MB</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-2.5 pr-6 text-foreground/80">Orion frame.open (CSV)</td>
                <td className="py-2.5 pr-6 font-mono text-primary">421 ms</td>
                <td className="py-2.5 font-mono text-muted-foreground">104 MB</td>
              </tr>
              <tr className="border-b border-border/40">
                <td className="py-2.5 pr-6 text-foreground/80 font-semibold">Orion frame.open (.odf)</td>
                <td className="py-2.5 pr-6 font-mono text-primary font-semibold">132 ms</td>
                <td className="py-2.5 font-mono text-primary font-semibold">69 MB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-foreground/80 text-sm">
          With the binary <InlineCode>.odf</InlineCode> format the same job runs about{" "}
          <span className="text-foreground font-semibold">7.8x faster than the Python
          baseline above</span> and uses roughly{" "}
          <span className="text-foreground font-semibold">a third less memory</span>.
        </p>
        <Note type="note">
          This compares against Python's standard library, which is the fair equivalent of{" "}
          <InlineCode>frame.open</InlineCode>. It is not a comparison against pandas or
          polars, which are specialized C and Rust libraries. The goal of{" "}
          <InlineCode>frame</InlineCode> is dependency-free performance built into the
          language, not to replace a dedicated analytics stack.
        </Note>

        <Note type="tip">
          The binary <InlineCode>.odf</InlineCode> format is much smaller than CSV, and the
          streaming functions keep memory nearly flat when converting very large files. See
          the full API in the{" "}
          <Link to="/modules/frame" className="text-primary underline underline-offset-2">
            frame module reference
          </Link>
          .
        </Note>
      </section>
    </>
  );
}
