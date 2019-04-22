"use strict";

var _interopRequireWildcard = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.index = index;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.show = show;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.array.find");

var _moment = _interopRequireDefault(require("moment"));

var _userModel = _interopRequireDefault(require("../../model/user-model"));

var _taskModel = _interopRequireDefault(require("../../model/task-model"));

var auth = _interopRequireWildcard(require("../../services/auth-service"));

function index(req, res) {
  // find all task
  _taskModel.default.find({}, function (error, tasks) {
    if (error) {
      return res.status(500).json();
    }

    return res.status(200).json({
      tasks: tasks
    });
  }).populate('author', 'username', 'user');
  /* other property from user model */

}

function create(req, res) {
  //create task
  var id = auth.getUserId(req);

  _userModel.default.findOne({
    _id: id
  }, function (error, user) {
    if (error && !user) {
      return res.status(500).json();
    }

    var task = new _taskModel.default(req.body.task);
    task.author = user._id;
    task.dueDate = (0, _moment.default)(task.dueDate);
    task.save(function (error) {
      if (error) {
        return res.status(500).json({
          message: "Not able to save task"
        });
      }

      return res.status(201).json();
    });
  });
}

function update(req, res) {
  //update task
  var id = auth.getUserId(req);

  _userModel.default.findOne({
    _id: id
  }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }

    if (!user) {
      return res.status(404).json();
    }

    var task = req.body.task;
    task.author = user._id;
    task.dueDate = (0, _moment.default)(req.body.task.dueDate);

    _taskModel.default.findByIdAndUpdate({
      _id: task._id
    }, task, function (error) {
      if (error) {
        return res.status(500).json();
      }

      return res.status(204).json();
    });
  });
}

function remove(req, res) {
  //delete a task
  var id = auth.getUserId(req);

  _taskModel.default.findOne({
    _id: req.params.id
  }, function (error, task) {
    if (error) {
      return res.status(500).json();
    }

    if (!task) {
      return res.status(404).json();
    }

    if (task.author._id.toString() !== id) {
      return res.status(403).json({
        message: 'Not allowed to delete another user task'
      });
    }

    _taskModel.default.deleteOne({
      _id: req.params.id
    }, function (error) {
      if (error) {
        return req.status(500).json();
      }

      return res.status(204).json();
    });
  });
}

function show(req, res) {
  //get task for id
  _taskModel.default.findOne({
    _id: req.params.id
  }, function (error, task) {
    if (error) {
      return res.status(500).json();
    }

    if (!task) {
      return res.status(404).json();
    }
    /* todo: add validattion if the task belongs to user */


    return res.status(200).json({
      task: task
    });
  });
}