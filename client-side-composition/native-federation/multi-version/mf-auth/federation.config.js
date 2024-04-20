const {
  withNativeFederation,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: "mf-authentication",

  exposes: {
    "./web-components": "./src/bootstrap.ts",
  },

  skip: ["rxjs/ajax", "rxjs/fetch", "rxjs/testing", "rxjs/webSocket"],
});
