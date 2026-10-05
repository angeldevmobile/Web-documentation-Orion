import { Link, Navigate, useParams } from "react-router-dom";
import DocsLayout from "@/components/DocsLayout";
import DocsShell from "@/components/docs/DocsShell";
import { DOCS, docsOf, findDoc } from "@/content/docs";

const Docs = () => {
  const { section, page } = useParams();

  // /docs abre la primera página; /docs/<sección>, la primera de la sección.
  if (!section) return <Navigate to={DOCS[0].path} replace />;
  if (!page) return <Navigate to={docsOf(section)[0]?.path ?? DOCS[0].path} replace />;

  const doc = findDoc(section, page);
  if (doc) return <DocsLayout doc={doc} />;

  return (
    <DocsShell>
      <h1 className="mb-3 text-3xl font-bold">Page not found</h1>
      <p className="mb-6 text-muted-foreground">This documentation page does not exist or has moved.</p>
      <Link to={DOCS[0].path} className="text-primary hover:underline">
        Go to the documentation
      </Link>
    </DocsShell>
  );
};

export default Docs;
