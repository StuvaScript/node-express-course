const { createReadStream } = require("fs");

let counter = 0;

//* **`` Reading our big file in chunks
const stream = createReadStream("../content/big.txt", {
  highWaterMark: 200,
  encoding: "utf8",
});

//* **`` For every "data" event fired, we add to the counter and log the data
stream.on("data", (result) => {
  counter += 1;
  console.log(result);
});

//* **`` When the stream ends, we log how many chunks of data we recieved
stream.on("end", () => console.log(`We recieved ${counter} chunks of data.`));

stream.on("error", (err) => console.error(err));
