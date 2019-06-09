"use strict";

var _interopRequireWildcard = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.index = index;

require("core-js/modules/es6.array.find");

var _userModel = _interopRequireDefault(require("../../model/user-model"));

var auth = _interopRequireWildcard(require("../../services/auth-service"));

function index(req, res) {
  var userId = auth.getUserId(req);
  console.log("Users: ", userId);

  _userModel.default.findOne({
    _id: userId
  }, function (error, user) {
    if (error && !user) {
      return res.status(500).json();
    }

    _userModel.default.find({}, function (e, users) {
      if (e && !users) {
        return res.statu(500).json();
      }

      return res.status(200).json({
        users: users
      });
    });
  });
}