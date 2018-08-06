var getHTML = require("./functions");

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/lowercase.html"
};

function print_lowercase(html) {
  /* Write your code here! */
  console.log(html);
}

getHTML(requestOptions, print_lowercase);
