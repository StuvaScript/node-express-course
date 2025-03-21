const EventEmitter = require("events");

const emitter = new EventEmitter();

setInterval(() => {
  emitter.emit("number", randomNum());
}, 2000);

emitter.on("number", (msg) =>
  console.log(`${msg}: This is an ${msg % 2 === 0 ? "even" : "odd"} number`)
);

function randomNum() {
  return Math.floor(Math.random() * 10);
}
