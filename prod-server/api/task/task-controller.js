"use strict";

var _Object$defineProperty = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.index = index;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.show = show;

function index(req, res) {
  // find all task
  return res.status(200).json();
}

function create(req, res) {
  //create task
  return res.status(201).json();
}

function update(req, res) {
  //update task
  return res.status(204).json();
}

function remove(req, res) {
  //delete a task
  return res.status(204).json();
}

function show(req, res) {
  //get task for id
  return res.status(200).json();
}