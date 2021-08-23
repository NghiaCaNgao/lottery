module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "comma-dangle": "off",
    quotes: "off",
    "space-before-function-paren": "off",
    "no-console": "off",
    indent: "off",
    curly: "off",
    "vue/prop-name-casing": "off",
    "arrow-parens": "off",
    "vue/max-attributes-per-line": "off",
    camelcase: "off"
  }
};
