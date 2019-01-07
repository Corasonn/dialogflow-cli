"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _commander = _interopRequireDefault(require("commander"));

var _globalFlags = require("../globalFlags");

var _import = require("./import");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var main =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var _ref2, agent, path, parent, agentContent, _ref3, _ref4, operation;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _globalFlags.handleArguments)(_commander.default);

          case 2:
            _ref2 = _context.sent;
            agent = _ref2.agent;
            path = _ref2.path;
            parent = _ref2.parent;
            _context.next = 8;
            return (0, _import.makeArchive)(path);

          case 8:
            agentContent = _context.sent;
            _context.next = 11;
            return agent.restoreAgent({
              parent,
              agentContent
            });

          case 11:
            _ref3 = _context.sent;
            _ref4 = _slicedToArray(_ref3, 1);
            operation = _ref4[0];
            _context.next = 16;
            return operation.promise();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

var attachCommand = function attachCommand(program) {
  program.command("restore [path]").description("Zips and imports the files at the specified path into the dialogflow agent").action(function () {
    main();
  });
};

var _default = attachCommand;
exports.default = _default;