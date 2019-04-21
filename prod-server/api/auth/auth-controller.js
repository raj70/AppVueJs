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

var _authService = require("../../services/auth-service");

function index(req, res) {
  var validation = validator.validate(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      message: validation.message
    });
  }

  _userModel.default.findOne({
    username: req.body.username.toLowerCase()
  }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }

    if (!user) {
      return res.status(401).json();
    }

    var passwordsMatch = _userModel.default.passwordMatches(req.body.password, user.password);

    if (!passwordsMatch) {
      return res.status(401).json();
    } else {
      var token = (0, _authService.generateJwt)(user);
      return res.status(200).json({
        token: token
      });
    }
  });
}