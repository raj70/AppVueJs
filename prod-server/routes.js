"use strict";

var _interopRequireDefault = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.registerRoutes = registerRoutes;

var _tasksRoute = _interopRequireDefault(require("./api/task/tasks-route"));

var _registerRoutes = _interopRequireDefault(require("./api/register/register-routes"));

var _authRoutes = _interopRequireDefault(require("./api/auth/auth-routes"));

var _userRoutes = _interopRequireDefault(require("./api/user/user-routes"));

function registerRoutes(app) {
  app.use('/api', _tasksRoute.default);
  app.use('/api', _registerRoutes.default);
  app.use('/api', _authRoutes.default);
  app.use('/api', _userRoutes.default);
}