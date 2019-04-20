import express from 'express';
var app = express();
const port = 3000;

import { registerRoutes } from './routes';
import { setEnvironment } from './config/env';

setEnvironment(app);
registerRoutes(app);

app.get('/', function (req, res) {
  console.log(process.env.NODE_ENV);
  if(process.env.NODE_ENV !== 'production'){
    return res.send('Running on development mode');
  }else{
    return res.sendFile('index.html', {root: __dirname + '/../dist/'});
  }
});

app.listen(port, () => console.log(`Vue app listening on port ${port}! on ${process.env.NODE_ENV}`))












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
