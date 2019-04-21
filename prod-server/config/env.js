"use strict";

var _interopRequireDefault = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.setEnvironment = setEnvironment;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function setEnvironment(app) {
  if (process.env.NODE_ENV !== 'production') {
    setDevEnv(app);
  } else {
    setProdEnv(app);
  }
}

var setDevEnv = function setDevEnv(app) {
  process.env.NODE_ENV = "development";
  process.env.DB_URL = 'mongodb://localhost:27017/task-dev-db';
  process.env.SIGN_SECRET = 'my-development-token';
  app.use(_bodyParser.default.json());
  app.use((0, _morgan.default)('dev'));
  app.use((0, _cors.default)());
};

var setProdEnv = function setProdEnv(app) {
  process.env.NODE_ENV = "production";
  process.env.DB_URL = 'mongodb://localhost:27017/task-prod-db';
  process.env.SIGN_SECRET = 'my-production-token';
  app.use(_bodyParser.default.json());
  app.use(_express.default.static(__dirname + '/../dist'));
};