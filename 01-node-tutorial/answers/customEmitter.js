const EventEmitter = require("events");

const emitter = new EventEmitter();

//* **`` Setting an interval that emits a random number
setInterval(() => {
  emitter.emit("number", randomNum());
}, 2000);

//* **`` Listens for the "number" emitter and logs if the number is even or odd
emitter.on("number", (msg) =>
  console.log(`${msg}: This is an ${msg % 2 === 0 ? "even" : "odd"} number`)
);

//* **`` Creates a random number between 0 and 9
function randomNum() {
  return Math.floor(Math.random() * 10);
}
