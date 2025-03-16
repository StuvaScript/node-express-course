const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.

//* **`` Colors to choose from in the select dropdown element
const colorsArray = [
  "white",
  "aqua",
  "chartreuse",
  "crimson",
  "ivory",
  "gold",
  "maroon",
  "olive",
  "plum",
  "teal",
  "tomato",
  "turquoise",
];

//* **`` The currently selected color
let color = "white";

//* **`` The options for the select element
let selectOptions = htmlSelectOptionsBuilder(colorsArray, color);

//* **`` This creates all our options for the select element based on the colorsArray
function htmlSelectOptionsBuilder(colorsArray, color) {
  let options = "";
  colorsArray.forEach((currentColor) => {
    currentColor === color
      ? (options += `<option value=${currentColor} selected>${currentColor}</option>\n`)
      : (options += `<option value=${currentColor}>${currentColor}</option>\n`);
  });
  return options;
}

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body style="background-color:${color};">
  <form method="POST">
  <label for="color-select">Choose a color:</label>
  <select name="colors" id="color-select">
    ${selectOptions}
  </select>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      color = body["colors"];
      selectOptions = htmlSelectOptionsBuilder(colorsArray, color);
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
