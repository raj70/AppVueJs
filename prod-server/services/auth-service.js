"use strict";

var _interopRequireDefault = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("/Users/rshrestha/Desktop/Html/VueJs/raj-vue/node_modules/@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.generateJwt = generateJwt;
exports.requireLogin = requireLogin;
exports.decodeToken = decodeToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function generateJwt(user) {
  var tokenData = {
    username: user.username,
    id: user._id
  };
  return _jsonwebtoken.default.sign({
    user: tokenData
  }, process.env.SIGN_SECRET);
}

function requireLogin(req, res, next) {
  var token = decodeToken(req);

  if (!token) {
    return res.statu(401).json({
      message: "you need to login"
    });
  }

  next();
}

function decodeToken(req) {
  var token = req.headers.authorization || req.headers['authorization'];

  if (!token) {
    return null;
  }

  try {
    return _jsonwebtoken.default.verify(token, process.env.TOKEN_SECRET);
  } catch (error) {
    return null;
  }
}