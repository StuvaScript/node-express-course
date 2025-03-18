const os = require("os");

//* **`` Info about the current user
const user = os.userInfo();
console.log(user);

//* **`` Logging the system uptime in seconds
console.log(
  `The system uptime is ${os.uptime} seconds. That's ${
    os.uptime / 60
  } minutes or ${os.uptime / 60 / 60} hours.`
);

//* **`` Info about the current operating system
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: `${os.totalmem()} bytes or ${
    os.totalmem() / 1024 / 1024 / 1024
  } GB`,
  freeMem: `${os.freemem()} bytes or ${os.freemem() / 1024 / 1024 / 1024} GB`,
};

console.log(currentOS);
