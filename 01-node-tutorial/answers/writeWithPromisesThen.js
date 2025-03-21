const { read } = require("fs");

const { writeFile, readFile } = require("fs").promises;

writeFile("./temporary/temp.txt", `This is line 1.\n`, { flag: "a" })
  .then(() =>
    writeFile("./temporary/temp.txt", `This is line 2.\n`, { flag: "a" })
  )
  .then(() =>
    writeFile("./temporary/temp.txt", `This is line 3.\n`, { flag: "a" })
  )
  .then(() => readFile("./temporary/temp.txt", "utf8"))
  .then((result) => console.log("Result:", result))
  .catch((err) => console.error(err));
