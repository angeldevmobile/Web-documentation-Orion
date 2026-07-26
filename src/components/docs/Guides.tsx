import { CodeBlock, InlineCode, Note, SectionHeading, SubHeading } from "./DocHelpers";

export default function Guides() {
  return (
    <>
      {/* 6.1 Build a REST API */}
      <section id="guide-api">
        <SectionHeading id="guide-api">6.1 Build a REST API</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          Orion has a built-in HTTP server. The <InlineCode>serve</InlineCode> statement
          takes a port and a router function; the router receives each request as a dict and
          returns a response. The server is multi-threaded.
        </p>

        <SubHeading>6.1.1 The server</SubHeading>
        <CodeBlock
          code={`use json

fn json_response(status, body) {
  return { "status": status, "body": json.forge(body), "content_type": "application/json" }
}

fn router(req) {
  path = req["path"]
  method = req["method"]

  if path == "/" {
    return json_response(200, { "message": "Orion backend is running" })
  }

  if path == "/api/users" {
    return json_response(200, { "users": ["Ana", "Luis", "Sofia"], "count": 3 })
  }

  if path == "/echo" and method == "POST" {
    return json_response(200, { "you_sent": req["body"] })
  }

  return json_response(404, { "error": "not found", "path": path })
}

serve 8123 router`}
        />

        <SubHeading>6.1.2 Run and test it</SubHeading>
        <CodeBlock code={`orion run api.orx`} />
        <p className="text-foreground/80 text-sm mb-2">Then, from another terminal:</p>
        <CodeBlock
          code={`curl http://localhost:8123/
curl http://localhost:8123/api/users
curl -X POST -d 'hello' http://localhost:8123/echo`}
        />

        <Note type="note">
          Each request runs in its own frame, so in-memory variables do not persist between
          requests. For state that must survive, use a file or a database (for example the{" "}
          <InlineCode>fs</InlineCode>, <InlineCode>json</InlineCode>, or{" "}
          <InlineCode>db</InlineCode> modules).
        </Note>
      </section>

      {/* 6.2 Automate file processing */}
      <section id="guide-automation">
        <SectionHeading id="guide-automation">6.2 Automate File Processing</SectionHeading>
        <p className="text-foreground/80 leading-relaxed">
          A common automation task: read a set of files, process them, and write a summary.
          This uses the <InlineCode>fs</InlineCode> and <InlineCode>json</InlineCode> modules.
        </p>
        <CodeBlock
          code={`use fs
use json

-- Create some input files
fs.mkdir("work")
fs.write("work/a.txt", "hello world")
fs.write("work/b.txt", "orion automation engine")
fs.write("work/c.txt", "beta")

-- Process every file and build a report
files = fs.ls("work")
report = {}
total = 0
for path in files {
  content = fs.read(path)
  report[path] = len(content)
  total = total + len(content)
}

-- Write the result
fs.write("work/report.json", json.forge(report))
show("Files processed: " + str(len(files)))
show("Total characters: " + str(total))`}
        />
        <p className="text-foreground/80 text-sm mt-2">Output:</p>
        <CodeBlock code={`Files processed: 3\nTotal characters: 38`} />
        <Note type="tip">
          <InlineCode>fs.ls</InlineCode> returns full relative paths (for example{" "}
          <InlineCode>work/a.txt</InlineCode>), so you can pass each entry straight to{" "}
          <InlineCode>fs.read</InlineCode>.
        </Note>
      </section>
    </>
  );
}
