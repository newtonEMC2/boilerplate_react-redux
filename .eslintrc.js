module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    sourceType: "module"
  },
  parser: "babel-eslint",
  extends: ["eslint:recommended", "prettier"],
  plugins: ["react", "prettier"],
  rules: {
    "no-unused-vars": "off",
    "no-undef": "off"
  }
};
