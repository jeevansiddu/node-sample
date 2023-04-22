const EventEmitter = require("events");

// on -listen for an event
//emit - emit an event

const customEmitter = new EventEmitter();
//always places listening for an event above emit the event
// like 'on always above 'emit

customEmitter.on("response", () => {
  console.log(`Data Recieved`);
});
customEmitter.on("response", () => {
  console.log(`Data with other logic`);
});

customEmitter.emit("response");

customEmitter.on("printname", (name, id) => {
  console.log(`The name is ${name} with is ${id}`);
});

customEmitter.emit("printname", "jeevan", 109); // an emitter with arguments

//creating server using event
const http = require("http");

//using event emitter API
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Hello world");
});

server.listen(5000);
