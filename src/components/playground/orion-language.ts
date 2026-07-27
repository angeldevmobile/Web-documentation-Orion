import type * as Monaco from "monaco-editor";

export function registerOrionLanguage(monaco: typeof Monaco) {
  if (monaco.languages.getLanguages().some((l) => l.id === "orion")) return;

  monaco.languages.register({ id: "orion" });

  monaco.languages.setMonarchTokensProvider("orion", {
    // Espejo de la tabla de palabras clave del lexer (orion-vm/src/lexer.rs).
    // Ojo: no hay `let`, `elsif`, `raise` ni `self` — son `x = 5`, `else if`,
    // `error` y `me`. Resaltarlas invitaba a escribir código que no compila.
    keywords: [
      "fn", "shape", "act", "use", "as", "if", "else", "while", "for", "in",
      "match", "attempt", "handle", "error", "on_error", "async", "await",
      "spawn", "think", "learn", "sense", "ask", "choices", "serve", "with",
      "using", "is", "on_create", "me", "super", "return", "const", "break",
      "continue", "and", "or", "not", "take", "append", "read", "write",
      "extern", "undefined",
    ],
    literals: ["yes", "no", "null"],
    types: ["int", "float", "bool", "string", "list", "dict", "any", "auto"],
    builtins: [
      "show", "len", "str", "range", "push", "pop", "keys", "values", "type",
      "assert_eq", "sqrt", "abs", "floor", "ceil", "round", "sin", "cos",
      "tan", "log", "log10", "log2", "exp", "pow", "max", "min", "clamp",
      "factorial", "sign", "degrees", "radians", "hypot", "rand", "randint",
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
              "@types": "type",
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
