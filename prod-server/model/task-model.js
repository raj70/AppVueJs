"use strict";

var _interopRequireDefault = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _now = _interopRequireDefault(require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/core-js/date/now"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var taskSchema = new _mongoose.default.Schema({
  title: String,
  body: String,
  dueDate: {
    type: Date,
    default: _now.default
  },
  completed: {
    type: Boolean,
    default: false
  },
  author: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'user'
  }
});
taskSchema.set('timestamps', true);

var _default = _mongoose.default.model('task', taskSchema);

exports.default = _default;