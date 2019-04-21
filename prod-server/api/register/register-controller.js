"use strict";

var _interopRequireWildcard = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.index = index;

var _userModel = _interopRequireDefault(require("../../model/user-model"));

var validator = _interopRequireWildcard(require("../../utilities/user-password-validate"));

function index(req, res) {
  var validation = validator.validateUser(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      message: validation.message
    });
  }

  var user = new _userModel.default({
    username: req.body.username,
    password: req.body.password,
    first: req.body.first,
    last: req.body.last
  });
  user.save(function (error) {
    console.log(error);

    if (error) {
      if (error.code === 11000) {
        /* 11000 means user taken */
        return res.status(403).json({
          message: 'usename is used '
        });
      }

      return res.status(500).json();
    }

    return res.status(201).json();
  });
}