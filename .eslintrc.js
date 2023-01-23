module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  rules: {
    "vue/no-restricted-component-options": [
      "warn",
      {
        name: "mixins",
        message:
          "using `mixins` is not allowed, instead use `VueWithMixins(...).extend(...)` from `@mailbutler-vue/mixins`",
      },
    ],
  },
};
