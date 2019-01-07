"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerCommands = void 0;

var _import = _interopRequireDefault(require("./import"));

var _export = _interopRequireDefault(require("./export"));

var _restore = _interopRequireDefault(require("./restore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commands = [_import.default, _export.default, _restore.default];

var registerCommands = function registerCommands(program) {
  return commands.forEach(function (registerCommand) {
    return registerCommand(program);
  });
};

exports.registerCommands = registerCommands;