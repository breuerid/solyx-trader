import js from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Basis: Node/ES globals en ESM
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node, ...globals.es2021 },
    },
  },

  // ESLint aanbevolen regels
  js.configs.recommended,

  // import-plugin aanbevolen regels + eigen tweaks
  {
    plugins: { import: pluginImport },
    rules: {
      ...pluginImport.configs.recommended.rules,
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },

  // Prettier: zet conflicterende style-regels uit
  eslintConfigPrettier,
];
