const names = require("./04-names");
const sayHello = require("./05-utils");
const { places, rides } = require("./06-alternative-flavor");

console.log(names);
sayHello(names.billy);
console.log(places, rides);
require("./07-mind-grenade");
