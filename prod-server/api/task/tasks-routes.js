"use strict";

var _interopRequireWildcard = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var controller = _interopRequireWildcard(require("./task-controller"));

var auth = _interopRequireWildcard(require("../../services/auth-service"));

var router = _express.default.Router();

router.post('/task', auth.requireLogin, controller.create);
router.get('/task', auth.requireLogin, controller.index);
router.get('/task/completed/:completed', auth.requireLogin, controller.getCompleted);
router.get('/task/:id', auth.requireLogin, controller.show);
router.put('/task', auth.requireLogin, controller.update);
router.delete('/task/:id', auth.requireLogin, controller.remove);
var _default = router;
exports.default = _default;