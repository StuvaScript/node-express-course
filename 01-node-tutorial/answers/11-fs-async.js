const { writeFile } = require("fs");

console.log("Starting point");

//* **`` Creating callback hell and writing 3 lines of code in a file
writeFile("./temporary/fileB.txt", "This is line 1\n", (err, result) => {
  console.log("This is the first callback");
  if (err) return console.log("Here's the error:", err);

  writeFile(
    "./temporary/fileB.txt",
    "This is line 2\n",
    { flag: "a" },
    (err, result) => {
      console.log("This is the second callback");

      if (err) return console.log("Here's the error:", err);

      writeFile(
        "./temporary/fileB.txt",
        "This is line 3\n",
        { flag: "a" },
        (err, result) => {
          console.log("This is the third callback");

          if (err) return console.log("Here's the error:", err);
        }
      );
    }
  );
});

console.log("This is the end");
