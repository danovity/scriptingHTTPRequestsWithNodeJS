var functions = require("./functions");

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step1.html"
};
function printHTML(html) {
  console.log(html);
}

functions.getHTML(requestOptions, printHTML);
