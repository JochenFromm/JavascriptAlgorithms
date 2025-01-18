import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
        "no-unused-vars": "error",
        "no-undef": "warn"
    },
    files: ["**/*.js"],
    ignores: ["**/node-modules/", ".git/", ".github/"],
    languageOptions: {
    	sourceType: "commonjs",
    	globals: { ...globals.browser, ...globals.jest }
    }
  }
];
