"use strict";

var _interopRequireDefault = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.validateUser = exports.validate = void 0;

var _underscore = _interopRequireDefault(require("underscore.string"));

var validate = function validate(body) {
  var errors = '';

  if (_underscore.default.isBlank(body.username)) {
    errors += "User name is required";
  }

  if (_underscore.default.isBlank(body.password)) {
    errors += "Password is required";
  }

  return {
    isValid: _underscore.default.isBlank(errors),
    message: errors
  };
};

exports.validate = validate;

var validateUser = function validateUser(body) {
  var errors = '';
  console.log(body.username);

  if (_underscore.default.isBlank(body.username)) {
    errors += "Validating user ".concat(body.username, " ");
    errors += "User name is required ";
  }

  if (_underscore.default.isBlank(body.password)) {
    errors += "Password is required ";
  }

  if (_underscore.default.isBlank(body.first)) {
    errors += "first name is required ";
  }

  if (_underscore.default.isBlank(body.last)) {
    errors += "last name is required ";
  }

  return {
    isValid: _underscore.default.isBlank(errors),
    message: errors
  };
};

exports.validateUser = validateUser;