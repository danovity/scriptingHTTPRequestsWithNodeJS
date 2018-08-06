var getHTML = require("./functions");

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/1337.html"
};

function print1337(html) {
  /* Write your code here! */
  console.log(html);
}

getHTML(requestOptions, print1337);
