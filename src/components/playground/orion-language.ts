import type * as Monaco from "monaco-editor";

export function registerOrionLanguage(monaco: typeof Monaco) {
  if (monaco.languages.getLanguages().some((l) => l.id === "orion")) return;

  monaco.languages.register({ id: "orion" });

  monaco.languages.setMonarchTokensProvider("orion", {
    keywords: [
      "fn", "shape", "act", "use", "as", "if", "elsif", "else",
      "while", "for", "in", "match", "attempt", "handle", "raise",
      "error", "async", "await", "think", "learn", "sense", "using",
      "is", "on_create", "self", "return", "let",
    ],
    literals: ["yes", "no", "null"],
    builtins: [
      "show", "len", "str", "int", "float", "bool", "range",
      "push", "pop", "keys", "values", "type", "assert_eq",
    ],

    tokenizer: {
      root: [
        // Doc comments ---
        [/---.*$/, "comment.doc"],
        // Line comments --
        [/--.*$/, "comment"],

        // Strings with interpolation
        [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],

        // Numbers
        [/\d+\.\d+/, "number.float"],
        [/\d+/, "number"],

        // Identifiers / keywords
        [
          /[a-zA-Z_]\w*/,
          {
            cases: {
              "@keywords": "keyword",
              "@literals": "constant.language",
              "@builtins": "support.function",
              "@default": "identifier",
            },
          },
        ],

        // Operators
        [/->|\.\.|\.\.\.|!=|==|<=|>=|&&|\|\||[+\-*/%<>=!&|^~]/, "operator"],

        // Delimiters
        [/[{}()[\]]/, "delimiter.bracket"],
        [/[,;:.]/, "delimiter"],

        // Whitespace
        [/\s+/, "white"],
      ],

      string: [
        [/\$\{/, { token: "delimiter.curly", next: "@interpolation" }],
        [/[^"$\\]+/, "string"],
        [/\\./, "string.escape"],
        [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }],
      ],

      interpolation: [
        [/\}/, { token: "delimiter.curly", next: "@pop" }],
        { include: "root" },
      ],
    },
  });

  monaco.languages.setLanguageConfiguration("orion", {
    comments: { lineComment: "--" },
    brackets: [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
    ],
    autoClosingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
    ],
    surroundingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
    ],
  });
}
