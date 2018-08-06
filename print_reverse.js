var getHTML = require("./functions");

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/reverse.html"
};

function print_reverse(html) {
  /* Write your code here! */
  console.log(html);
}

getHTML(requestOptions, print_reverse);
