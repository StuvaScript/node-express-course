const { readFileSync, writeFileSync } = require("fs");

//* **`` Writing 3 lines of code in a file
writeFileSync(
  "./temporary/fileA.txt",
  `This is line 1.
  This is line 2.
  This is line 3.`,
  { flag: "a" }
);

//* **`` Reading the content of a file
const fileContent = readFileSync("./temporary/fileA.txt", "utf8");
console.log(fileContent);
