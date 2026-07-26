import Editor, { OnMount } from "@monaco-editor/react";
import { registerOrionLanguage } from "./orion-language";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor = ({ value, onChange }: CodeEditorProps) => {
  const handleMount: OnMount = (_, monaco) => {
    registerOrionLanguage(monaco);
  };

  return (
    <Editor
      height="100%"
      language="orion"
      value={value}
      theme="vs-dark"
      onChange={(v) => onChange(v ?? "")}
      onMount={handleMount}
      options={{
        fontSize: 14,
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        lineNumbers: "on",
        wordWrap: "on",
        automaticLayout: true,
        tabSize: 4,
        padding: { top: 12, bottom: 12 },
      }}
    />
  );
};

export default CodeEditor;
