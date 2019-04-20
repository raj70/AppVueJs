"use strict";

var _interopRequireDefault = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

var _env = require("./config/env");

var _db = require("./config/db");

var app = (0, _express.default)();
var port = 3000;
(0, _env.setEnvironment)(app);
(0, _db.connectToDb)();
(0, _routes.registerRoutes)(app);
app.get('/', function (req, res) {
  console.log(process.env.NODE_ENV);

  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running on development mode');
  } else {
    return res.sendFile('index.html', {
      root: __dirname + '/../dist/'
    });
  }
});
app.listen(port, function () {
  return console.log("Vue app listening on port ".concat(port, "! on ").concat(process.env.NODE_ENV));
});
/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/