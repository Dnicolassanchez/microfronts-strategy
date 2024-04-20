const {
  withNativeFederation,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  skip: ["rxjs/ajax", "rxjs/fetch", "rxjs/testing", "rxjs/webSocket"],
});
