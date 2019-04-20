"use strict";

var _interopRequireDefault = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _underscore = _interopRequireDefault(require("underscore.string"));

var userSchema = new _mongoose.default.Schema({
  username: String,
  first: String,
  last: String,
  password: String
});
userSchema.set('timestamps', true);
userSchema.virtual('fullName').get(function () {
  var first = _underscore.default.capitalize(this.first.toLowerCase());

  var last = _underscore.default.capitalize(this.last);

  return "".concat(first, "  ").concat(last);
});
userSchema.pre('save', function (next) {
  this.username = this.username.toLowerCase();
  this.first = this.first.toLowerCase();
  this.last = this.last.toLowerCase();
  next();
});

var _default = _mongoose.default.model('user', userSchema);

exports.default = _default;