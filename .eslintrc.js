module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: "vuetify",
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-async-promise-executor": process.env.NODE_ENV === "production" ? "error" : "off",
    "vuetify/no-deprecated-classes": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-dupe-class-members": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  "overrides": [
    {
      "files": ["*.vue", "*.js"],
      "rules": {
        "no-unused-expressions": "off"
      }
    }
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
}
