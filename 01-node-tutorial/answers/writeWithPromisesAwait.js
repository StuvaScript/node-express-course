const { writeFile, readFile } = require("fs").promises;

//* **`` Write to a file
async function writer() {
  try {
    await writeFile(
      "./temporary/temp.txt",
      `This is line 1.\n This is line 2.\n This is line 3.\n`,
      { flag: "a" }
    );
  } catch (err) {
    console.error(err);
  }
}
//* **`` Read a file
async function reader() {
  try {
    const result = await readFile("./temporary/temp.txt", "utf8");
    console.log("Result:", result);
  } catch (err) {
    console.error(err);
  }
}

//* **`` Calling the write file before the read file
async function readWrite() {
  try {
    await writer();
    await reader();
  } catch (err) {
    console.error(err);
  }
}

readWrite();
