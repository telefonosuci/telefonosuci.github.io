/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/logrocket/dist/build.umd.js":
/*!**************************************************!*\
  !*** ./node_modules/logrocket/dist/build.umd.js ***!
  \**************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_536__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_536__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_536__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_536__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_536__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_536__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_536__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_536__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_536__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_536__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_536__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_536__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_536__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_536__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_536__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_536__(__nested_webpack_require_536__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_4978__) {

var arrayLikeToArray = __nested_webpack_require_4978__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_8685__) {

var _typeof = __nested_webpack_require_8685__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_11924__) {

var objectWithoutPropertiesLoose = __nested_webpack_require_11924__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_14012__) {

var arrayWithoutHoles = __nested_webpack_require_14012__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __nested_webpack_require_14012__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __nested_webpack_require_14012__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __nested_webpack_require_14012__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_16314__) {

var arrayLikeToArray = __nested_webpack_require_16314__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./packages/@logrocket/console/src/index.js":
/*!**************************************************!*\
  !*** ./packages/@logrocket/console/src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_18044__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_18044__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _registerConsole = _interopRequireDefault(__nested_webpack_require_18044__(/*! ./registerConsole */ "./packages/@logrocket/console/src/registerConsole.js"));

var _default = _registerConsole.default;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/console/src/registerConsole.js":
/*!************************************************************!*\
  !*** ./packages/@logrocket/console/src/registerConsole.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_18933__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_18933__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerConsole;

var _typeof2 = _interopRequireDefault(__nested_webpack_require_18933__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _enhanceFunc = _interopRequireDefault(__nested_webpack_require_18933__(/*! @logrocket/utils/src/enhanceFunc */ "./packages/@logrocket/utils/src/enhanceFunc.js"));

var _exceptions = __nested_webpack_require_18933__(/*! @logrocket/exceptions */ "./packages/@logrocket/exceptions/src/index.js");

// eslint-disable-line no-restricted-imports
function registerConsole(logger) {
  var unsubFunctions = [];
  var methods = ['log', 'warn', 'info', 'error', 'debug'];
  methods.forEach(function (method) {
    unsubFunctions.push((0, _enhanceFunc.default)(console, method, function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      logger.addEvent('lr.core.LogEvent', function () {
        var consoleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var isEnabled = consoleOptions.isEnabled;

        if ((0, _typeof2.default)(isEnabled) === 'object' && isEnabled[method] === false || isEnabled === false) {
          return null;
        }

        if (method === 'error' && consoleOptions.shouldAggregateConsoleErrors) {
          _exceptions.Capture.captureMessage(logger, args[0], args, {}, true);
        }

        return {
          logLevel: method.toUpperCase(),
          args: args
        };
      });
    }));
  });
  return function () {
    unsubFunctions.forEach(function (unsubFunction) {
      return unsubFunction();
    });
  };
}

module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/exceptions/src/Capture.js":
/*!*******************************************************!*\
  !*** ./packages/@logrocket/exceptions/src/Capture.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_21210__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_21210__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.captureMessage = captureMessage;
exports.captureException = captureException;

var _typeof2 = _interopRequireDefault(__nested_webpack_require_21210__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _TraceKit = _interopRequireDefault(__nested_webpack_require_21210__(/*! @logrocket/utils/src/TraceKit */ "./packages/@logrocket/utils/src/TraceKit.js"));

var _stackTraceFromError = _interopRequireDefault(__nested_webpack_require_21210__(/*! ./stackTraceFromError */ "./packages/@logrocket/exceptions/src/stackTraceFromError.js"));

/* eslint-disable no-param-reassign */
// eslint-disable-line no-restricted-imports
function isScalar(value) {
  return /boolean|number|string/.test((0, _typeof2.default)(value));
}

function scrub(data, options) {
  if (options) {
    var optionalScalars = [// Valid values for 'level' are 'fatal', 'error', 'warning', 'info',
    // and 'debug'. Defaults to 'error'.
    'level', 'logger'];

    for (var _i = 0, _optionalScalars = optionalScalars; _i < _optionalScalars.length; _i++) {
      var field = _optionalScalars[_i];
      var value = options[field];

      if (isScalar(value)) {
        data[field] = value.toString();
      }
    }

    var optionalMaps = ['tags', 'extra'];

    for (var _i2 = 0, _optionalMaps = optionalMaps; _i2 < _optionalMaps.length; _i2++) {
      var _field = _optionalMaps[_i2];
      var dirty = options[_field] || {};
      var scrubbed = {};

      for (var _i3 = 0, _Object$keys = Object.keys(dirty); _i3 < _Object$keys.length; _i3++) {
        var key = _Object$keys[_i3];
        var _value = dirty[key];

        if (isScalar(_value)) {
          scrubbed[key.toString()] = _value.toString();
        }
      }

      data[_field] = scrubbed;
    }
  }
}

function captureMessage(logger, message, messageArgs) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var isConsole = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var data = {
    exceptionType: isConsole ? 'CONSOLE' : 'MESSAGE',
    message: message,
    messageArgs: messageArgs,
    browserHref: window.location ? window.location.href : ''
  };
  scrub(data, options);
  logger.addEvent('lr.core.Exception', function () {
    return data;
  });
}

function captureException(logger, exception) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var preppedTrace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var trace = preppedTrace || _TraceKit.default.computeStackTrace(exception);

  var data = {
    exceptionType: 'WINDOW',
    errorType: trace.name,
    message: trace.message,
    browserHref: window.location ? window.location.href : ''
  };
  scrub(data, options);
  var addEventOptions = {
    _stackTrace: (0, _stackTraceFromError.default)(trace)
  };
  logger.addEvent('lr.core.Exception', function () {
    return data;
  }, addEventOptions);
}

/***/ }),

/***/ "./packages/@logrocket/exceptions/src/index.js":
/*!*****************************************************!*\
  !*** ./packages/@logrocket/exceptions/src/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_24751__) {

"use strict";


var _interopRequireWildcard = __nested_webpack_require_24751__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __nested_webpack_require_24751__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "registerExceptions", {
  enumerable: true,
  get: function get() {
    return _registerExceptions.default;
  }
});
exports.Capture = void 0;

var _registerExceptions = _interopRequireDefault(__nested_webpack_require_24751__(/*! ./registerExceptions */ "./packages/@logrocket/exceptions/src/registerExceptions.js"));

var Capture = _interopRequireWildcard(__nested_webpack_require_24751__(/*! ./Capture */ "./packages/@logrocket/exceptions/src/Capture.js"));

exports.Capture = Capture;

/***/ }),

/***/ "./packages/@logrocket/exceptions/src/raven/raven.js":
/*!***********************************************************!*\
  !*** ./packages/@logrocket/exceptions/src/raven/raven.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_26020__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __nested_webpack_require_26020__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__nested_webpack_require_26020__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__nested_webpack_require_26020__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _TraceKit = _interopRequireDefault(__nested_webpack_require_26020__(/*! @logrocket/utils/src/TraceKit */ "./packages/@logrocket/utils/src/TraceKit.js"));

/* eslint-disable */

/*
Some contents of this file were originaly from raven-js, BSD-2 Clause

Copyright (c) 2018 Sentry (https://sentry.io) and individual contributors.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var objectPrototype = Object.prototype;

function isUndefined(what) {
  return what === void 0;
}

function isFunction(what) {
  return typeof what === 'function';
}

function each(obj, callback) {
  var i, j;

  if (isUndefined(obj.length)) {
    for (i in obj) {
      if (hasKey(obj, i)) {
        callback.call(null, i, obj[i]);
      }
    }
  } else {
    j = obj.length;

    if (j) {
      for (i = 0; i < j; i++) {
        callback.call(null, i, obj[i]);
      }
    }
  }
}
/**
 * hasKey, a better form of hasOwnProperty
 * Example: hasKey(MainHostObject, property) === true/false
 *
 * @param {Object} host object to check property
 * @param {string} key to check
 */


function hasKey(object, key) {
  return objectPrototype.hasOwnProperty.call(object, key);
}
/**
 * Polyfill a method
 * @param obj object e.g. `document`
 * @param name method name present on object e.g. `addEventListener`
 * @param replacement replacement function
 * @param track {optional} record instrumentation to an array
 */


function fill(obj, name, replacement, track) {
  var orig = obj[name];
  obj[name] = replacement(orig);

  if (track) {
    track.push([obj, name, orig]);
  }
}

var _window = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var _document = _window.document;

var Handler = /*#__PURE__*/function () {
  function Handler(_ref) {
    var captureException = _ref.captureException;
    (0, _classCallCheck2.default)(this, Handler);
    this._errorHandler = this._errorHandler.bind(this);
    this._ignoreOnError = 0;
    this._wrappedBuiltIns = [];
    this.captureException = captureException;

    _TraceKit.default.report.subscribe(this._errorHandler);

    this._instrumentTryCatch();
  }

  (0, _createClass2.default)(Handler, [{
    key: "uninstall",
    value: function uninstall() {
      _TraceKit.default.report.unsubscribe(this._errorHandler); // restore any wrapped builtins


      var builtin;

      while (this._wrappedBuiltIns.length) {
        builtin = this._wrappedBuiltIns.shift();
        var obj = builtin[0],
            name = builtin[1],
            orig = builtin[2];
        obj[name] = orig;
      }
    }
  }, {
    key: "_errorHandler",
    value: function _errorHandler(report) {
      if (!this._ignoreOnError) {
        this.captureException(report);
      }
    }
  }, {
    key: "_ignoreNextOnError",
    value: function _ignoreNextOnError() {
      var _this = this;

      this._ignoreOnError += 1;
      setTimeout(function () {
        // onerror should trigger before setTimeout
        _this._ignoreOnError -= 1;
      });
    }
    /*
     * Wrap code within a context so Handler can capture errors
     * reliably across domains that is executed immediately.
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The callback to be immediately executed within the context
     * @param {array} args An array of arguments to be called with the callback [optional]
     */

  }, {
    key: "context",
    value: function context(options, func, args) {
      if (isFunction(options)) {
        args = func || [];
        func = options;
        options = undefined;
      }

      return this.wrap(options, func).apply(this, args);
    }
  }, {
    key: "wrap",
    value:
    /*
     * Wrap code within a context and returns back a new function to be executed
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The function to be wrapped in a new context
     * @param {function} func A function to call before the try/catch wrapper [optional, private]
     * @return {function} The newly wrapped functions with a context
     */
    function wrap(options, func, _before) {
      var self = this; // 1 argument has been passed, and it's not a function
      // so just return it

      if (isUndefined(func) && !isFunction(options)) {
        return options;
      } // options is optional


      if (isFunction(options)) {
        func = options;
        options = undefined;
      } // At this point, we've passed along 2 arguments, and the second one
      // is not a function either, so we'll just return the second argument.


      if (!isFunction(func)) {
        return func;
      } // We don't wanna wrap it twice!


      try {
        if (func.__lr__) {
          return func;
        } // If this has already been wrapped in the past, return that


        if (func.__lr_wrapper__) {
          return func.__lr_wrapper__;
        } // If func is not extensible, return the function as-is to prevent TypeErrors
        // when trying to add new props & to assure immutable funcs aren't changed


        if (!Object.isExtensible(func)) {
          return func;
        }
      } catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see lr-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return func;
      }

      function wrapped() {
        var args = [],
            i = arguments.length,
            deep = !options || options && options.deep !== false;

        if (_before && isFunction(_before)) {
          _before.apply(this, arguments);
        } // Recursively wrap all of a function's arguments that are
        // functions themselves.


        while (i--) {
          args[i] = deep ? self.wrap(options, arguments[i]) : arguments[i];
        }

        try {
          // Attempt to invoke user-land function. This is part of the LogRocket SDK.
          // If you're seeing this frame in a stack trace, it means that LogRocket caught
          // an unhandled error thrown by your application code, reported it, then bubbled
          // it up. This is expected behavior and is not a bug with LogRocket.
          return func.apply(this, args);
        } catch (e) {
          self._ignoreNextOnError();

          self.captureException(_TraceKit.default.computeStackTrace(e), options);
          throw e;
        }
      } // copy over properties of the old function


      for (var property in func) {
        if (hasKey(func, property)) {
          wrapped[property] = func[property];
        }
      }

      wrapped.prototype = func.prototype;
      func.__lr_wrapper__ = wrapped; // Signal that this function has been wrapped already
      // for both debugging and to prevent it to being wrapped twice

      wrapped.__lr__ = true;
      wrapped.__inner__ = func;
      return wrapped;
    }
  }, {
    key: "_instrumentTryCatch",
    value:
    /**
     * Install any queued plugins
     */
    function _instrumentTryCatch() {
      var self = this;
      var wrappedBuiltIns = self._wrappedBuiltIns;

      function wrapTimeFn(orig) {
        return function (fn, t) {
          // preserve arity
          // Make a copy of the arguments to prevent deoptimization
          // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
          var args = new Array(arguments.length);

          for (var i = 0; i < args.length; ++i) {
            args[i] = arguments[i];
          }

          var originalCallback = args[0];

          if (isFunction(originalCallback)) {
            args[0] = self.wrap(originalCallback);
          } // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
          // also supports only two arguments and doesn't care what this is, so we
          // can just call the original function directly.


          if (orig.apply) {
            return orig.apply(this, args);
          } else {
            return orig(args[0], args[1]);
          }
        };
      }

      function wrapEventTarget(global) {
        var proto = _window[global] && _window[global].prototype;

        if (proto && proto.hasOwnProperty && proto.hasOwnProperty('addEventListener')) {
          fill(proto, 'addEventListener', function (orig) {
            return function (evtName, fn, capture, secure) {
              // preserve arity
              try {
                if (fn && fn.handleEvent) {
                  fn.handleEvent = self.wrap(fn.handleEvent);
                }
              } catch (err) {// can sometimes get 'Permission denied to access property "handle Event'
              } // More breadcrumb DOM capture ... done here and not in `_instrumentBreadcrumbs`
              // so that we don't have more than one wrapper function


              var before;
              return orig.call(this, evtName, self.wrap(fn, undefined, before), capture, secure);
            };
          }, wrappedBuiltIns);
          fill(proto, 'removeEventListener', function (orig) {
            return function (evt, fn, capture, secure) {
              try {
                fn = fn && (fn.__lr_wrapper__ ? fn.__lr_wrapper__ : fn);
              } catch (e) {// ignore, accessing __lr_wrapper__ will throw in some Selenium environments
              }

              return orig.call(this, evt, fn, capture, secure);
            };
          }, wrappedBuiltIns);
        }
      }

      fill(_window, 'setTimeout', wrapTimeFn, wrappedBuiltIns);
      fill(_window, 'setInterval', wrapTimeFn, wrappedBuiltIns);

      if (_window.requestAnimationFrame) {
        fill(_window, 'requestAnimationFrame', function (orig) {
          return function (cb) {
            return orig(self.wrap(cb));
          };
        }, wrappedBuiltIns);
      } // event targets borrowed from bugsnag-js:
      // https://github.com/bugsnag/bugsnag-js/blob/master/src/bugsnag.js#L666


      var eventTargets = ['EventTarget', 'Window', 'Node', 'ApplicationCache', 'AudioTrackList', 'ChannelMergerNode', 'CryptoOperation', 'EventSource', 'FileReader', 'HTMLUnknownElement', 'IDBDatabase', 'IDBRequest', 'IDBTransaction', 'KeyOperation', 'MediaController', 'MessagePort', 'ModalWindow', 'Notification', 'SVGElementInstance', 'Screen', 'TextTrack', 'TextTrackCue', 'TextTrackList', 'WebSocket', 'WebSocketWorker', 'Worker', 'XMLHttpRequest', 'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload'];

      for (var i = 0; i < eventTargets.length; i++) {
        wrapEventTarget(eventTargets[i]);
      }

      var $ = _window.jQuery || _window.$;

      if ($ && $.fn && $.fn.ready) {
        fill($.fn, 'ready', function (orig) {
          return function (fn) {
            return orig.call(this, self.wrap(fn));
          };
        }, wrappedBuiltIns);
      }
    }
  }]);
  return Handler;
}();

exports.default = Handler;
;
module.exports = exports.default;
/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_26020__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./packages/@logrocket/exceptions/src/registerExceptions.js":
/*!******************************************************************!*\
  !*** ./packages/@logrocket/exceptions/src/registerExceptions.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_39462__) {

"use strict";


var _interopRequireWildcard = __nested_webpack_require_39462__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __nested_webpack_require_39462__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerCore;

var _raven = _interopRequireDefault(__nested_webpack_require_39462__(/*! ./raven/raven */ "./packages/@logrocket/exceptions/src/raven/raven.js"));

var Capture = _interopRequireWildcard(__nested_webpack_require_39462__(/*! ./Capture */ "./packages/@logrocket/exceptions/src/Capture.js"));

function registerCore(logger) {
  var raven = new _raven.default({
    captureException: function captureException(errorReport) {
      Capture.captureException(logger, null, null, errorReport);
    }
  });

  var rejectionHandler = function rejectionHandler(evt) {
    // http://2ality.com/2016/04/unhandled-rejections.html
    logger.addEvent('lr.core.Exception', function () {
      return {
        exceptionType: 'UNHANDLED_REJECTION',
        message: evt.reason || 'Unhandled Promise rejection'
      };
    });
  };

  window.addEventListener('unhandledrejection', rejectionHandler);
  return function () {
    window.removeEventListener('unhandledrejection', rejectionHandler);
    raven.uninstall();
  };
}

module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/exceptions/src/stackTraceFromError.js":
/*!*******************************************************************!*\
  !*** ./packages/@logrocket/exceptions/src/stackTraceFromError.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stackTraceFromError;

function stackTraceFromError(errorReport) {
  function makeNotNull(val) {
    return val === null ? undefined : val;
  }

  return errorReport.stack ? errorReport.stack.map(function (frame) {
    return {
      lineNumber: makeNotNull(frame.line),
      columnNumber: makeNotNull(frame.column),
      fileName: makeNotNull(frame.url),
      functionName: makeNotNull(frame.func)
    };
  }) : undefined;
}

module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/network/src/fetchIntercept.js":
/*!***********************************************************!*\
  !*** ./packages/@logrocket/network/src/fetchIntercept.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_42237__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_42237__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__nested_webpack_require_42237__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _registerXHR = __nested_webpack_require_42237__(/*! ./registerXHR */ "./packages/@logrocket/network/src/registerXHR.js");

var interceptors = [];

function makeInterceptor(fetch, fetchId) {
  var reversedInterceptors = interceptors.reduce(function (array, interceptor) {
    return [interceptor].concat(array);
  }, []); // if a browser supports fetch, it supports promise
  // eslint-disable-next-line compat/compat

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var promise = Promise.resolve(args); // Register request interceptors

  reversedInterceptors.forEach(function (_ref) {
    var request = _ref.request,
        requestError = _ref.requestError;

    if (request || requestError) {
      promise = promise.then(function (args) {
        return request.apply(void 0, [fetchId].concat((0, _toConsumableArray2.default)(args)));
      }, function (args) {
        return requestError.apply(void 0, [fetchId].concat((0, _toConsumableArray2.default)(args)));
      });
    }
  });
  promise = promise.then(function (args) {
    (0, _registerXHR.setActive)(false);
    var res;
    var err;

    try {
      res = fetch.apply(void 0, (0, _toConsumableArray2.default)(args));
    } catch (_err) {
      err = _err;
    }

    (0, _registerXHR.setActive)(true);

    if (err) {
      throw err;
    }

    return res;
  });
  reversedInterceptors.forEach(function (_ref2) {
    var response = _ref2.response,
        responseError = _ref2.responseError;

    if (response || responseError) {
      promise = promise.then(function (res) {
        return response(fetchId, res);
      }, function (err) {
        return responseError && responseError(fetchId, err);
      });
    }
  });
  return promise;
}

function attach(env) {
  if (!env.fetch || !env.Promise) {
    // Make sure fetch is available in the given environment. If it's not, then
    // default to using XHR intercept.
    return;
  }

  var isPolyfill = env.fetch.polyfill; // eslint-disable-next-line no-param-reassign

  env.fetch = function (fetch) {
    var fetchId = 0;
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return makeInterceptor.apply(void 0, [fetch, fetchId++].concat(args));
    };
  }(env.fetch); // Forward the polyfill properly from fetch (set by github/whatwg-fetch).


  if (isPolyfill) {
    // eslint-disable-next-line no-param-reassign
    env.fetch.polyfill = isPolyfill;
  }
} // TODO: React Native
//   attach(global);


var didAttach = false;
var _default = {
  register: function register(interceptor) {
    if (!didAttach) {
      didAttach = true;
      attach(window);
    }

    interceptors.push(interceptor);
    return function () {
      var index = interceptors.indexOf(interceptor);

      if (index >= 0) {
        interceptors.splice(index, 1);
      }
    };
  },
  clear: function clear() {
    interceptors = [];
  }
};
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/network/src/index.js":
/*!**************************************************!*\
  !*** ./packages/@logrocket/network/src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_46151__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_46151__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerNetwork;

var _defineProperty2 = _interopRequireDefault(__nested_webpack_require_46151__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _typeof2 = _interopRequireDefault(__nested_webpack_require_46151__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _registerFetch = _interopRequireDefault(__nested_webpack_require_46151__(/*! ./registerFetch */ "./packages/@logrocket/network/src/registerFetch.js"));

var _registerNetworkInformation = _interopRequireDefault(__nested_webpack_require_46151__(/*! ./registerNetworkInformation */ "./packages/@logrocket/network/src/registerNetworkInformation.js"));

var _registerXHR = _interopRequireDefault(__nested_webpack_require_46151__(/*! ./registerXHR */ "./packages/@logrocket/network/src/registerXHR.js"));

var _mapValues = _interopRequireDefault(__nested_webpack_require_46151__(/*! @logrocket/utils/src/mapValues */ "./packages/@logrocket/utils/src/mapValues.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// eslint-disable-line no-restricted-imports
function registerNetwork(logger) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    isReactNative: false
  };
  var isReactNative = config.isReactNative,
      shouldAugmentNPS = config.shouldAugmentNPS,
      shouldParseXHRBlob = config.shouldParseXHRBlob;
  var ignoredNetwork = {}; // truncate if > 4MB in size

  var truncate = function truncate(data) {
    var limit = 1024 * 1000 * 4;
    var str = data;

    if ((0, _typeof2.default)(data) === 'object' && data != null) {
      var proto = Object.getPrototypeOf(data);

      if (proto === Object.prototype || proto === null) {
        // plain object - jsonify for the size check
        str = JSON.stringify(data);
      }
    }

    if (str && str.length && str.length > limit && typeof str === 'string') {
      var beginning = str.substring(0, 1000);
      return "".concat(beginning, " ... LogRocket truncating to first 1000 characters.\n      Keep data under 4MB to prevent truncation. https://docs.logrocket.com/reference#network");
    }

    return data;
  };

  var addRequest = function addRequest(reqId, request) {
    var method = request.method;
    logger.addEvent('lr.network.RequestEvent', function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$isEnabled = _ref.isEnabled,
          isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled,
          _ref$requestSanitizer = _ref.requestSanitizer,
          requestSanitizer = _ref$requestSanitizer === void 0 ? function (f) {
        return f;
      } : _ref$requestSanitizer;

      if (!isEnabled) {
        return null;
      }

      var sanitized = null;

      try {
        // only try catch user defined functions
        sanitized = requestSanitizer(_objectSpread(_objectSpread({}, request), {}, {
          reqId: reqId
        }));
      } catch (err) {
        console.error(err);
      }

      if (sanitized) {
        var url = sanitized.url;

        if (typeof document !== 'undefined' && typeof document.createElement === 'function') {
          // Writing and then reading from an a tag turns a relative
          // url into an absolute one.
          var a = document.createElement('a');
          a.href = sanitized.url;
          url = a.href;
        }

        return {
          reqId: reqId,
          // default
          url: url,
          // sanitized
          headers: (0, _mapValues.default)(sanitized.headers, function (headerValue) {
            // sanitized
            return "".concat(headerValue);
          }),
          body: truncate(sanitized.body),
          // sanitized
          method: method,
          // default
          referrer: sanitized.referrer || undefined,
          // sanitized
          mode: sanitized.mode || undefined,
          // sanitized
          credentials: sanitized.credentials || undefined // sanitized

        };
      }

      ignoredNetwork[reqId] = true;
      return null;
    });
  };

  var addResponse = function addResponse(reqId, response) {
    var method = response.method,
        status = response.status;
    logger.addEvent('lr.network.ResponseEvent', function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$isEnabled = _ref2.isEnabled,
          isEnabled = _ref2$isEnabled === void 0 ? true : _ref2$isEnabled,
          _ref2$responseSanitiz = _ref2.responseSanitizer,
          responseSanitizer = _ref2$responseSanitiz === void 0 ? function (f) {
        return f;
      } : _ref2$responseSanitiz;

      if (!isEnabled) {
        return null;
      } else if (ignoredNetwork[reqId]) {
        delete ignoredNetwork[reqId];
        return null;
      }

      var sanitized = null;

      try {
        // only try catch user defined functions
        sanitized = responseSanitizer(_objectSpread(_objectSpread({}, response), {}, {
          reqId: reqId
        }));
      } catch (err) {
        console.error(err); // fall through to redacted log
      }

      if (sanitized) {
        return {
          reqId: reqId,
          // default
          status: sanitized.status,
          // sanitized
          headers: (0, _mapValues.default)(sanitized.headers, function (headerValue) {
            // sanitized
            return "".concat(headerValue);
          }),
          body: truncate(sanitized.body),
          // sanitized
          method: method // default

        };
      }

      return {
        reqId: reqId,
        // default
        status: status,
        // default
        headers: {},
        // redacted
        body: null,
        // redacted
        method: method // default

      };
    });
  };

  var isIgnored = function isIgnored(reqId) {
    return logger.isDisabled || ignoredNetwork[reqId] === true;
  };

  var unsubFetch = (0, _registerFetch.default)({
    addRequest: addRequest,
    addResponse: addResponse,
    isIgnored: isIgnored
  });
  var unsubXHR = (0, _registerXHR.default)({
    addRequest: addRequest,
    addResponse: addResponse,
    isIgnored: isIgnored,
    logger: logger,
    shouldAugmentNPS: shouldAugmentNPS,
    shouldParseXHRBlob: shouldParseXHRBlob
  });
  var unsubNetworkInformation = isReactNative ? function () {} : (0, _registerNetworkInformation.default)(logger);
  return function () {
    unsubNetworkInformation();
    unsubFetch();
    unsubXHR();
  };
}

module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/network/src/registerFetch.js":
/*!**********************************************************!*\
  !*** ./packages/@logrocket/network/src/registerFetch.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_54126__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_54126__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerFetch;

var _defineProperty2 = _interopRequireDefault(__nested_webpack_require_54126__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _mapValues = _interopRequireDefault(__nested_webpack_require_54126__(/*! @logrocket/utils/src/mapValues */ "./packages/@logrocket/utils/src/mapValues.js"));

var _fetchIntercept = _interopRequireDefault(__nested_webpack_require_54126__(/*! ./fetchIntercept */ "./packages/@logrocket/network/src/fetchIntercept.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function makeObjectFromHeaders(headers) {
  // If using real fetch, we must stringify the Headers object.
  if (headers == null || typeof headers.forEach !== 'function') {
    return headers;
  }

  var result = {};
  headers.forEach(function (value, key) {
    if (result[key]) {
      result[key] = "".concat(result[key], ",").concat(value);
    } else {
      result[key] = "".concat(value);
    }
  });
  return result;
} // XHR specification is unclear of what types to allow in value so using toString method for now


var stringifyHeaders = function stringifyHeaders(headers) {
  return (0, _mapValues.default)(makeObjectFromHeaders(headers), function (value) {
    return "".concat(value);
  });
};

function pluckFetchFields() {
  var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    url: arg.url,
    headers: stringifyHeaders(arg.headers),
    method: arg.method && arg.method.toUpperCase(),
    referrer: arg.referrer || undefined,
    mode: arg.mode || undefined,
    credentials: arg.credentials || undefined
  };
}

function registerFetch(_ref) {
  var addRequest = _ref.addRequest,
      addResponse = _ref.addResponse,
      isIgnored = _ref.isIgnored;
  var LOGROCKET_FETCH_LABEL = 'fetch-';
  var fetchMethodMap = {};

  var unregister = _fetchIntercept.default.register({
    request: function request(fetchId) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var p;

      if (typeof Request !== 'undefined' && args[0] instanceof Request) {
        var clonedText; // Request.clone() and Request.text() may throw in Safari (e.g., when
        // request body contains FormData)

        try {
          clonedText = args[0].clone().text();
        } catch (err) {
          // if a browser supports fetch, it supports promise
          // eslint-disable-next-line compat/compat
          clonedText = Promise.resolve("LogRocket fetch error: ".concat(err.message));
        }

        p = clonedText.then(function (body) {
          return _objectSpread(_objectSpread({}, pluckFetchFields(args[0])), {}, {
            body: body
          });
        }, function (err) {
          return _objectSpread(_objectSpread({}, pluckFetchFields(args[0])), {}, {
            body: "LogRocket fetch error: ".concat(err.message)
          });
        });
      } else {
        // if a browser supports fetch, it supports promise
        // eslint-disable-next-line compat/compat
        p = Promise.resolve(_objectSpread(_objectSpread({}, pluckFetchFields(args[1])), {}, {
          url: "".concat(args[0]),
          body: (args[1] || {}).body
        }));
      }

      return p.then(function (req) {
        fetchMethodMap[fetchId] = req.method;
        addRequest("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId), req);
        return args;
      });
    },
    requestError: function requestError(fetchId, error) {
      // if a browser supports fetch, it supports promise
      // eslint-disable-next-line compat/compat
      return Promise.reject(error);
    },
    response: function response(fetchId, _response) {
      var responseClone;
      var responseTextPromise;

      if (isIgnored("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId))) {
        // Don't even try to read ignored requests
        return _response;
      }

      try {
        // TODO: enhance function on original response and future clones for:
        // text(), json(), blob(), formdata(), arraybuffer()
        responseClone = _response.clone();
      } catch (err) {
        // safari has a bug where cloning can fail
        var responseHash = {
          url: _response.url,
          status: _response.status,
          headers: stringifyHeaders(_response.headers),
          body: "LogRocket fetch error: ".concat(err.message),
          method: fetchMethodMap[fetchId]
        };
        delete fetchMethodMap[fetchId];
        addResponse("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId), responseHash);
        return _response;
      }

      try {
        if (window.TextDecoder) {
          // use a reader to manually read the response body rather than calling response.text()
          // response.text() was timing out for some responses, in some cases because Apollo sends
          //   an abort signal or because the stream wasn't getting terminated cleanly
          // using a reader allows us to capture what we can from response bodies before the
          //   response receives an abort signal
          var reader = responseClone.body.getReader(); // response bodies always decode with UTF-8
          // https://developer.mozilla.org/en-US/docs/Web/API/Response/text

          var utf8Decoder = new window.TextDecoder('utf-8');
          var bodyContents = '';
          responseTextPromise = reader.read().then(function readResponseBody(_ref2) {
            var done = _ref2.done,
                value = _ref2.value;

            if (done) {
              return bodyContents;
            }

            var chunk = value ? utf8Decoder.decode(value, {
              stream: true
            }) : '';
            bodyContents += chunk;
            return reader.read().then(readResponseBody);
          });
        } else {
          // TextDecoder doesn't have support across all browsers that LR supports, so if there's
          //  no TextDecoder, fall back to the old approach
          responseTextPromise = responseClone.text();
        }
      } catch (error) {
        // eslint-disable-next-line compat/compat
        responseTextPromise = Promise.resolve("LogRocket error reading body: ".concat(error.message));
      }

      responseTextPromise.catch(function (error) {
        // don't drop request & log to console when the request is aborted,
        // as it may have already completed
        // https://github.com/LogRocket/logrocket/issues/34
        if (error.name === 'AbortError' && error instanceof DOMException) {
          return;
        }

        return "LogRocket error reading body: ".concat(error.message);
      }).then(function (data) {
        var responseHash = {
          url: _response.url,
          status: _response.status,
          headers: stringifyHeaders(_response.headers),
          body: data,
          method: fetchMethodMap[fetchId]
        };
        delete fetchMethodMap[fetchId];
        addResponse("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId), responseHash);
      });
      return _response;
    },
    responseError: function responseError(fetchId, error) {
      var response = {
        url: undefined,
        status: 0,
        headers: {},
        body: "".concat(error)
      };
      addResponse("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId), response); // if a browser supports fetch, it supports promise
      // eslint-disable-next-line compat/compat

      return Promise.reject(error);
    }
  });

  return unregister;
}

module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/network/src/registerNetworkInformation.js":
/*!***********************************************************************!*\
  !*** ./packages/@logrocket/network/src/registerNetworkInformation.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerNetworkInformation;
var EFFECTIVE_TYPE_VALS = {
  'slow-2g': 'SLOW2G',
  '2g': 'TWOG',
  '3g': 'THREEG',
  '4g': 'FOURG'
};

function registerNetworkInformation(logger) {
  var lastStatus = undefined;

  function sendNetworkInformation() {
    var newStatus = {
      online: window.navigator.onLine,
      effectiveType: 'UNKOWN'
    };

    if (!window.navigator.onLine) {
      newStatus.effectiveType = 'NONE';
    } else if (window.navigator.connection && window.navigator.connection.effectiveType) {
      newStatus.effectiveType = EFFECTIVE_TYPE_VALS[window.navigator.connection.effectiveType] || 'UNKNOWN';
    }

    if (lastStatus && newStatus.online === lastStatus.online && newStatus.effectiveType === lastStatus.effectiveType) {
      return;
    }

    lastStatus = newStatus;
    logger.addEvent('lr.network.NetworkStatusEvent', function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$isEnabled = _ref.isEnabled,
          isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled;

      if (!isEnabled) {
        return null;
      }

      return newStatus;
    });
  }

  setTimeout(sendNetworkInformation);

  if (window.navigator.connection && typeof window.navigator.connection.addEventListener === 'function') {
    window.navigator.connection.addEventListener('change', sendNetworkInformation);
  }

  window.addEventListener('online', sendNetworkInformation);
  window.addEventListener('offline', sendNetworkInformation);
  return function () {
    window.removeEventListener('offline', sendNetworkInformation);
    window.removeEventListener('online', sendNetworkInformation);

    if (window.navigator.connection && typeof window.navigator.connection.removeEventListener === 'function') {
      window.navigator.connection.removeEventListener('change', sendNetworkInformation);
    }
  };
}

module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/network/src/registerXHR.js":
/*!********************************************************!*\
  !*** ./packages/@logrocket/network/src/registerXHR.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_65576__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_65576__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setActive = setActive;
exports.default = registerXHR;

var _mapValues = _interopRequireDefault(__nested_webpack_require_65576__(/*! @logrocket/utils/src/mapValues */ "./packages/@logrocket/utils/src/mapValues.js"));

var _enhanceFunc = _interopRequireDefault(__nested_webpack_require_65576__(/*! @logrocket/utils/src/enhanceFunc */ "./packages/@logrocket/utils/src/enhanceFunc.js"));

var _startsWith = _interopRequireDefault(__nested_webpack_require_65576__(/*! @logrocket/utils/src/startsWith */ "./packages/@logrocket/utils/src/startsWith.js"));

var _nps = __nested_webpack_require_65576__(/*! @logrocket/utils/src/constants/nps */ "./packages/@logrocket/utils/src/constants/nps.js");

// eslint-disable-line no-restricted-imports
// eslint-disable-line no-restricted-imports
// eslint-disable-line no-restricted-imports
var isActive = true;

function setActive(shouldBeActive) {
  isActive = shouldBeActive;
}

var currentXHRId = 0;

function registerXHR(_ref) {
  var addRequest = _ref.addRequest,
      addResponse = _ref.addResponse,
      isIgnored = _ref.isIgnored,
      logger = _ref.logger,
      _ref$shouldAugmentNPS = _ref.shouldAugmentNPS,
      shouldAugmentNPS = _ref$shouldAugmentNPS === void 0 ? true : _ref$shouldAugmentNPS,
      _ref$shouldParseXHRBl = _ref.shouldParseXHRBlob,
      shouldParseXHRBlob = _ref$shouldParseXHRBl === void 0 ? false : _ref$shouldParseXHRBl;
  var _XHR = XMLHttpRequest;
  var xhrMap = new WeakMap();
  var unsubscribedFromXhr = false;
  var LOGROCKET_XHR_LABEL = 'xhr-';
  window._lrXMLHttpRequest = XMLHttpRequest; // eslint-disable-next-line no-native-reassign

  XMLHttpRequest = function XMLHttpRequest(mozAnon, mozSystem) {
    var xhrObject = new _XHR(mozAnon, mozSystem);

    if (!isActive) {
      return xhrObject;
    }

    xhrMap.set(xhrObject, {
      xhrId: ++currentXHRId,
      headers: {}
    });
    var openOriginal = xhrObject.open;

    function openShim() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      try {
        var url = args[1];

        if (window.URL && typeof window.URL === 'function' && url.search(_nps.WOOTRIC_RESPONSES_REGEX) === 0) {
          var logrocketSessionURL = new window.URL(logger.recordingURL);
          logrocketSessionURL.searchParams.set('nps', 'wootric');
          var urlObj = new window.URL(url);
          var responseText = urlObj.searchParams.get('response[text]');
          var feedback = responseText ? "".concat(responseText, "\n\n") : '';
          urlObj.searchParams.set('response[text]', "".concat(feedback, "<").concat(logrocketSessionURL.href, "|View LogRocket session>"));
          args[1] = urlObj.href; // eslint-disable-line no-param-reassign
        }
      } catch (e) {
        /* do nothing */
      }

      return openOriginal.apply(this, args);
    }

    var sendOriginal = xhrObject.send;

    function sendShim() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      try {
        var currentXHR = xhrMap.get(xhrObject);

        if (window.URL && typeof window.URL === 'function' && currentXHR && currentXHR.url && currentXHR.url.search(_nps.DELIGHTED_RESPONSES_REGEX) === 0 && args.length && args[0].indexOf(_nps.DELIGHTED_FEEDBACK_PREFIX) !== -1) {
          var recordingURL = new window.URL(logger.recordingURL);
          recordingURL.searchParams.set('nps', 'delighted');
          var logrocketSessionURL = encodeURIComponent(recordingURL.href);
          var data = args[0].split('&').map(function (dataString) {
            if ((0, _startsWith.default)(dataString, _nps.DELIGHTED_FEEDBACK_PREFIX)) {
              var isEmpty = dataString === _nps.DELIGHTED_FEEDBACK_PREFIX;
              return "".concat(dataString).concat(isEmpty ? '' : '\n\n', "<").concat(logrocketSessionURL, "|View LogRocket session>");
            }

            return dataString;
          }).join('&');
          args[0] = data; // eslint-disable-line no-param-reassign
        }
      } catch (e) {
        /* do nothing */
      }

      return sendOriginal.apply(this, args);
    }

    if (shouldAugmentNPS) {
      xhrObject.open = openShim;
      xhrObject.send = sendShim;
    } // ..., 'open', (method, url, async, username, password) => {


    (0, _enhanceFunc.default)(xhrObject, 'open', function (method, url) {
      if (unsubscribedFromXhr) {
        return;
      }

      var currentXHR = xhrMap.get(xhrObject);
      currentXHR.method = method;
      currentXHR.url = url;
    });
    (0, _enhanceFunc.default)(xhrObject, 'send', function (data) {
      if (unsubscribedFromXhr) {
        return;
      }

      var currentXHR = xhrMap.get(xhrObject);

      if (!currentXHR) {
        return;
      }

      var request = {
        url: currentXHR.url,
        method: currentXHR.method && currentXHR.method.toUpperCase(),
        headers: (0, _mapValues.default)(currentXHR.headers || {}, function (headerValues) {
          return headerValues.join(', ');
        }),
        body: data
      };
      addRequest("".concat(LOGROCKET_XHR_LABEL).concat(currentXHR.xhrId), request);
    });
    (0, _enhanceFunc.default)(xhrObject, 'setRequestHeader', function (header, value) {
      if (unsubscribedFromXhr) {
        return;
      }

      var currentXHR = xhrMap.get(xhrObject);

      if (!currentXHR) {
        return;
      }

      currentXHR.headers = currentXHR.headers || {};
      currentXHR.headers[header] = currentXHR.headers[header] || [];
      currentXHR.headers[header].push(value);
    });
    var xhrListeners = {
      readystatechange: function readystatechange() {
        if (unsubscribedFromXhr) {
          return;
        }

        if (xhrObject.readyState === 4) {
          var currentXHR = xhrMap.get(xhrObject);

          if (!currentXHR) {
            return;
          } // Do not read ignored requests at all.


          if (isIgnored("".concat(LOGROCKET_XHR_LABEL).concat(currentXHR.xhrId))) {
            return;
          }

          var headerString = xhrObject.getAllResponseHeaders() || '';
          var headers = headerString.split(/[\r\n]+/).reduce(function (previous, current) {
            var next = previous;
            var headerParts = current.split(': ');

            if (headerParts.length > 0) {
              var key = headerParts.shift(); // first index of the array

              var value = headerParts.join(': '); // rest of the array repaired

              if (previous[key]) {
                next[key] += ", ".concat(value);
              } else {
                next[key] = value;
              }
            }

            return next;
          }, {});
          var body; // IE 11 sometimes throws when trying to access large responses

          try {
            switch (xhrObject.responseType) {
              case 'json':
                body = logger._shouldCloneResponse ? JSON.parse(JSON.stringify(xhrObject.response)) : xhrObject.response;
                break;

              case 'arraybuffer':
              case 'blob':
                {
                  body = xhrObject.response;
                  break;
                }

              case 'document':
                {
                  body = xhrObject.responseXML;
                  break;
                }

              case 'text':
              case '':
                {
                  body = xhrObject.responseText;
                  break;
                }

              default:
                {
                  body = '';
                }
            }
          } catch (err) {
            body = 'LogRocket: Error accessing response.';
          }

          var response = {
            url: currentXHR.url,
            status: xhrObject.status,
            headers: headers,
            body: body,
            method: (currentXHR.method || '').toUpperCase()
          };

          if (shouldParseXHRBlob && response.body instanceof Blob) {
            var blobReader = new FileReader();
            blobReader.readAsText(response.body);

            blobReader.onload = function () {
              try {
                response.body = JSON.parse(blobReader.result);
              } catch (_unused) {} // eslint-disable-line no-empty


              addResponse("".concat(LOGROCKET_XHR_LABEL).concat(currentXHR.xhrId), response);
            };
          } else {
            addResponse("".concat(LOGROCKET_XHR_LABEL).concat(currentXHR.xhrId), response);
          }
        }
      } // // Unused Event Listeners
      // loadstart: () => {},
      // progress: () => {},
      // abort: () => {},
      // error: () => {},
      // load: () => {},
      // timeout: () => {},
      // loadend: () => {},

    };
    Object.keys(xhrListeners).forEach(function (key) {
      xhrObject.addEventListener(key, xhrListeners[key]);
    });
    return xhrObject;
  }; // this allows "instanceof XMLHttpRequest" to work


  XMLHttpRequest.prototype = _XHR.prototype; // Persist the static variables.

  ['UNSENT', 'OPENED', 'HEADERS_RECEIVED', 'LOADING', 'DONE'].forEach(function (variable) {
    XMLHttpRequest[variable] = _XHR[variable];
  });
  return function () {
    unsubscribedFromXhr = true; // eslint-disable-next-line no-native-reassign

    XMLHttpRequest = _XHR;
  };
}

/***/ }),

/***/ "./packages/@logrocket/now/src/index.js":
/*!**********************************************!*\
  !*** ./packages/@logrocket/now/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable compat/compat */
var dateNow = Date.now.bind(Date);
var loadTime = dateNow();

var _default = typeof performance !== 'undefined' && performance.now ? performance.now.bind(performance) : function () {
  return dateNow() - loadTime;
};

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/redux/src/createEnhancer.js":
/*!*********************************************************!*\
  !*** ./packages/@logrocket/redux/src/createEnhancer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_76258__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_76258__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createEnhancer;

var _defineProperty2 = _interopRequireDefault(__nested_webpack_require_76258__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _now = _interopRequireDefault(__nested_webpack_require_76258__(/*! @logrocket/now */ "./packages/@logrocket/now/src/index.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var storeIdCounter = 0;

function createEnhancer(logger) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$stateSanitizer = _ref.stateSanitizer,
      stateSanitizer = _ref$stateSanitizer === void 0 ? function (f) {
    return f;
  } : _ref$stateSanitizer,
      _ref$actionSanitizer = _ref.actionSanitizer,
      actionSanitizer = _ref$actionSanitizer === void 0 ? function (f) {
    return f;
  } : _ref$actionSanitizer;

  // an enhancer is a function that returns a Store
  return function (createStore) {
    return function (reducer, initialState, enhancer) {
      var store = createStore(reducer, initialState, enhancer);
      var originalDispatch = store.dispatch;
      var storeId = storeIdCounter++;
      logger.addEvent('lr.redux.InitialState', function () {
        var sanitizedState;

        try {
          // only try catch user defined functions
          sanitizedState = stateSanitizer(store.getState());
        } catch (err) {
          console.error(err.toString());
        }

        return {
          state: sanitizedState,
          storeId: storeId
        };
      });

      var dispatch = function dispatch(action) {
        var start = (0, _now.default)();
        var err;
        var res;

        try {
          res = originalDispatch(action);
        } catch (_err) {
          err = _err;
        } finally {
          var duration = (0, _now.default)() - start;
          logger.addEvent('lr.redux.ReduxAction', function () {
            var sanitizedState = null;
            var sanitizedAction = null;

            try {
              // only try catch user defined functions
              sanitizedState = stateSanitizer(store.getState());
              sanitizedAction = actionSanitizer(action);
            } catch (err) {
              console.error(err.toString());
            }

            if (sanitizedState && sanitizedAction) {
              return {
                storeId: storeId,
                action: sanitizedAction,
                duration: duration,
                stateDelta: sanitizedState
              };
            }

            return null;
          });
        }

        if (err) {
          throw err;
        }

        return res;
      };

      return _objectSpread(_objectSpread({}, store), {}, {
        dispatch: dispatch
      });
    };
  };
}

module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/redux/src/createMiddleware.js":
/*!***********************************************************!*\
  !*** ./packages/@logrocket/redux/src/createMiddleware.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_80504__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_80504__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMiddleware;

var _now = _interopRequireDefault(__nested_webpack_require_80504__(/*! @logrocket/now */ "./packages/@logrocket/now/src/index.js"));

var storeIdCounter = 0;

function createMiddleware(logger) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$stateSanitizer = _ref.stateSanitizer,
      stateSanitizer = _ref$stateSanitizer === void 0 ? function (f) {
    return f;
  } : _ref$stateSanitizer,
      _ref$actionSanitizer = _ref.actionSanitizer,
      actionSanitizer = _ref$actionSanitizer === void 0 ? function (f) {
    return f;
  } : _ref$actionSanitizer;

  return function (store) {
    var storeId = storeIdCounter++;
    logger.addEvent('lr.redux.InitialState', function () {
      var sanitizedState;

      try {
        // only try catch user defined functions
        sanitizedState = stateSanitizer(store.getState());
      } catch (err) {
        console.error(err.toString());
      }

      return {
        state: sanitizedState,
        storeId: storeId
      };
    });
    return function (next) {
      return function (action) {
        var start = (0, _now.default)();
        var err;
        var res;

        try {
          res = next(action);
        } catch (_err) {
          err = _err;
        } finally {
          var duration = (0, _now.default)() - start;
          logger.addEvent('lr.redux.ReduxAction', function () {
            var sanitizedState = null;
            var sanitizedAction = null;

            try {
              // only try catch user defined functions
              sanitizedState = stateSanitizer(store.getState());
              sanitizedAction = actionSanitizer(action);
            } catch (err) {
              console.error(err.toString());
            }

            if (sanitizedState && sanitizedAction) {
              return {
                storeId: storeId,
                action: sanitizedAction,
                duration: duration,
                stateDelta: sanitizedState
              };
            }

            return null;
          });
        }

        if (err) {
          throw err;
        }

        return res;
      };
    };
  };
}

module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/redux/src/index.js":
/*!************************************************!*\
  !*** ./packages/@logrocket/redux/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_83296__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_83296__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createEnhancer", {
  enumerable: true,
  get: function get() {
    return _createEnhancer.default;
  }
});
Object.defineProperty(exports, "createMiddleware", {
  enumerable: true,
  get: function get() {
    return _createMiddleware.default;
  }
});

var _createEnhancer = _interopRequireDefault(__nested_webpack_require_83296__(/*! ./createEnhancer */ "./packages/@logrocket/redux/src/createEnhancer.js"));

var _createMiddleware = _interopRequireDefault(__nested_webpack_require_83296__(/*! ./createMiddleware */ "./packages/@logrocket/redux/src/createMiddleware.js"));

/***/ }),

/***/ "./packages/@logrocket/utils/src/TraceKit.js":
/*!***************************************************!*\
  !*** ./packages/@logrocket/utils/src/TraceKit.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_84447__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* eslint-disable */

/*
 TraceKit - Cross brower stack traces - github.com/occ/TraceKit

 This was originally forked from github.com/occ/TraceKit, but has since been
 largely re-written and is now maintained as part of raven-js.  Tests for
 this are in test/vendor.

 MIT license
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var TraceKit = {
  collectWindowErrors: true,
  debug: false
}; // This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)

var _window = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; // global reference to slice


var _slice = [].slice;
var UNKNOWN_FUNCTION = '?'; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types

var ERROR_TYPES_RE = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;

function getLocationHref() {
  if (typeof document === 'undefined' || typeof document.location === 'undefined') return '';
  return document.location.href;
}
/**
 * TraceKit.report: cross-browser processing of unhandled exceptions
 *
 * Syntax:
 *   TraceKit.report.subscribe(function(stackInfo) { ... })
 *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
 *   TraceKit.report(exception)
 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
 *
 * Supports:
 *   - Firefox: full stack trace with line numbers, plus column number
 *              on top frame; column number is not guaranteed
 *   - Opera:   full stack trace with line and column numbers
 *   - Chrome:  full stack trace with line and column numbers
 *   - Safari:  line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *   - IE:      line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 *   - IE5.5+ (only 8.0 tested)
 *   - Firefox 0.9+ (only 3.5+ tested)
 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 *     Exceptions Have Stacktrace to be enabled in opera:config)
 *   - Safari 3+ (only 4+ tested)
 *   - Chrome 1+ (only 5+ tested)
 *   - Konqueror 3.5+ (untested)
 *
 * Requires TraceKit.computeStackTrace.
 *
 * Tries to catch all unhandled exceptions and report them to the
 * subscribed handlers. Please note that TraceKit.report will rethrow the
 * exception. This is REQUIRED in order to get a useful stack trace in IE.
 * If the exception does not reach the top of the browser, you will only
 * get a stack trace from the point where TraceKit.report was called.
 *
 * Handlers receive a stackInfo object as described in the
 * TraceKit.computeStackTrace docs.
 */


TraceKit.report = function reportModuleWrapper() {
  var handlers = [],
      lastArgs = null,
      lastException = null,
      lastExceptionStack = null;
  /**
   * Add a crash handler.
   * @param {Function} handler
   */

  function subscribe(handler) {
    installGlobalHandler();
    handlers.push(handler);
  }
  /**
   * Remove a crash handler.
   * @param {Function} handler
   */


  function unsubscribe(handler) {
    for (var i = handlers.length - 1; i >= 0; --i) {
      if (handlers[i] === handler) {
        handlers.splice(i, 1);
      }
    }
  }
  /**
   * Remove all crash handlers.
   */


  function unsubscribeAll() {
    uninstallGlobalHandler();
    handlers = [];
  }
  /**
   * Dispatch stack information to all handlers.
   * @param {Object.<string, *>} stack
   */


  function notifyHandlers(stack, isWindowError) {
    var exception = null;

    if (isWindowError && !TraceKit.collectWindowErrors) {
      return;
    }

    for (var i in handlers) {
      if (handlers.hasOwnProperty(i)) {
        try {
          handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)));
        } catch (inner) {
          exception = inner;
        }
      }
    }

    if (exception) {
      throw exception;
    }
  }

  var _oldOnerrorHandler, _onErrorHandlerInstalled;
  /**
   * Ensures all global unhandled exceptions are recorded.
   * Supported by Gecko and IE.
   * @param {string} message Error message.
   * @param {string} url URL of script that generated the exception.
   * @param {(number|string)} lineNo The line number at which the error
   * occurred.
   * @param {?(number|string)} colNo The column number at which the error
   * occurred.
   * @param {?Error} ex The actual Error object.
   */


  function traceKitWindowOnError(message, url, lineNo, colNo, ex) {
    var stack = null;

    if (lastExceptionStack) {
      TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message);
      processLastException();
    } else if (ex) {
      // New chrome and blink send along a real error object
      // Let's just report that like a normal error.
      // See: https://mikewest.org/2013/08/debugging-runtime-errors-with-window-onerror
      stack = TraceKit.computeStackTrace(ex);
      notifyHandlers(stack, true);
    } else {
      var location = {
        'url': url,
        'line': lineNo,
        'column': colNo
      };
      var name = undefined;
      var msg = message; // must be new var or will modify original `arguments`

      var groups;

      if ({}.toString.call(message) === '[object String]') {
        var groups = message.match(ERROR_TYPES_RE);

        if (groups) {
          name = groups[1];
          msg = groups[2];
        }
      }

      location.func = UNKNOWN_FUNCTION;
      stack = {
        'name': name,
        'message': msg,
        'url': getLocationHref(),
        'stack': [location]
      };
      notifyHandlers(stack, true);
    }

    if (_oldOnerrorHandler) {
      return _oldOnerrorHandler.apply(this, arguments);
    }

    return false;
  }

  function installGlobalHandler() {
    if (_onErrorHandlerInstalled) {
      return;
    }

    _oldOnerrorHandler = _window.onerror;
    _window.onerror = traceKitWindowOnError;
    _onErrorHandlerInstalled = true;
  }

  function uninstallGlobalHandler() {
    if (!_onErrorHandlerInstalled) {
      return;
    }

    _window.onerror = _oldOnerrorHandler;
    _onErrorHandlerInstalled = false;
    _oldOnerrorHandler = undefined;
  }

  function processLastException() {
    var _lastExceptionStack = lastExceptionStack,
        _lastArgs = lastArgs;
    lastArgs = null;
    lastExceptionStack = null;
    lastException = null;
    notifyHandlers.apply(null, [_lastExceptionStack, false].concat(_lastArgs));
  }
  /**
   * Reports an unhandled Error to TraceKit.
   * @param {Error} ex
   * @param {?boolean} rethrow If false, do not re-throw the exception.
   * Only used for window.onerror to not cause an infinite loop of
   * rethrowing.
   */


  function report(ex, rethrow) {
    var args = _slice.call(arguments, 1);

    if (lastExceptionStack) {
      if (lastException === ex) {
        return; // already caught by an inner catch block, ignore
      } else {
        processLastException();
      }
    }

    var stack = TraceKit.computeStackTrace(ex);
    lastExceptionStack = stack;
    lastException = ex;
    lastArgs = args; // If the stack trace is incomplete, wait for 2 seconds for
    // slow slow IE to see if onerror occurs or not before reporting
    // this exception; otherwise, we will end up with an incomplete
    // stack trace

    setTimeout(function () {
      if (lastException === ex) {
        processLastException();
      }
    }, stack.incomplete ? 2000 : 0);

    if (rethrow !== false) {
      throw ex; // re-throw to propagate to the top level (and cause window.onerror)
    }
  }

  report.subscribe = subscribe;
  report.unsubscribe = unsubscribe;
  report.uninstall = unsubscribeAll;
  return report;
}();
/**
 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
 *
 * Syntax:
 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
 * Returns:
 *   s.name              - exception name
 *   s.message           - exception message
 *   s.stack[i].url      - JavaScript or HTML file URL
 *   s.stack[i].func     - function name, or empty for anonymous functions (if guessing did not work)
 *   s.stack[i].args     - arguments passed to the function, if known
 *   s.stack[i].line     - line number, if known
 *   s.stack[i].column   - column number, if known
 *
 * Supports:
 *   - Firefox:  full stack trace with line numbers and unreliable column
 *               number on top frame
 *   - Opera 10: full stack trace with line and column numbers
 *   - Opera 9-: full stack trace with line numbers
 *   - Chrome:   full stack trace with line and column numbers
 *   - Safari:   line and column number for the topmost stacktrace element
 *               only
 *   - IE:       no line numbers whatsoever
 *
 * Tries to guess names of anonymous functions by looking for assignments
 * in the source code. In IE and Safari, we have to guess source file names
 * by searching for function bodies inside all page scripts. This will not
 * work for scripts that are loaded cross-domain.
 * Here be dragons: some function names may be guessed incorrectly, and
 * duplicate functions may be mismatched.
 *
 * TraceKit.computeStackTrace should only be used for tracing purposes.
 * Logging of unhandled exceptions should be done with TraceKit.report,
 * which builds on top of TraceKit.computeStackTrace and provides better
 * IE support by utilizing the window.onerror event to retrieve information
 * about the top of the stack.
 *
 * Note: In IE and Safari, no stack trace is recorded on the Error object,
 * so computeStackTrace instead walks its *own* chain of callers.
 * This means that:
 *  * in Safari, some methods may be missing from the stack trace;
 *  * in IE, the topmost function in the stack trace will always be the
 *    caller of computeStackTrace.
 *
 * This is okay for tracing (because you are likely to be calling
 * computeStackTrace from the function you want to be the topmost element
 * of the stack trace anyway), but not okay for logging unhandled
 * exceptions (because your catch block will likely be far away from the
 * inner function that actually caused the exception).
 *
 */


TraceKit.computeStackTrace = function computeStackTraceWrapper() {
  /**
   * Escapes special characters, except for whitespace, in a string to be
   * used inside a regular expression as a string literal.
   * @param {string} text The string.
   * @return {string} The escaped string literal.
   */
  function escapeRegExp(text) {
    return text.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, '\\$&');
  }
  /**
   * Escapes special characters in a string to be used inside a regular
   * expression as a string literal. Also ensures that HTML entities will
   * be matched the same as their literal friends.
   * @param {string} body The string.
   * @return {string} The escaped string.
   */


  function escapeCodeAsRegExpForMatchingInsideHTML(body) {
    return escapeRegExp(body).replace('<', '(?:<|&lt;)').replace('>', '(?:>|&gt;)').replace('&', '(?:&|&amp;)').replace('"', '(?:"|&quot;)').replace(/\s+/g, '\\s+');
  } // Contents of Exception in various browsers.
  //
  // SAFARI:
  // ex.message = Can't find variable: qq
  // ex.line = 59
  // ex.sourceId = 580238192
  // ex.sourceURL = http://...
  // ex.expressionBeginOffset = 96
  // ex.expressionCaretOffset = 98
  // ex.expressionEndOffset = 98
  // ex.name = ReferenceError
  //
  // FIREFOX:
  // ex.message = qq is not defined
  // ex.fileName = http://...
  // ex.lineNumber = 59
  // ex.columnNumber = 69
  // ex.stack = ...stack trace... (see the example below)
  // ex.name = ReferenceError
  //
  // CHROME:
  // ex.message = qq is not defined
  // ex.name = ReferenceError
  // ex.type = not_defined
  // ex.arguments = ['aa']
  // ex.stack = ...stack trace...
  //
  // INTERNET EXPLORER:
  // ex.message = ...
  // ex.name = ReferenceError
  //
  // OPERA:
  // ex.message = ...message... (see the example below)
  // ex.name = ReferenceError
  // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
  // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

  /**
   * Computes stack trace information from the stack property.
   * Chrome and Gecko use this property.
   * @param {Error} ex
   * @return {?Object.<string, *>} Stack trace information.
   */


  function computeStackTraceFromStackProp(ex) {
    if (typeof ex.stack === 'undefined' || !ex.stack) return;
    var chrome = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,
        winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        lines = ex.stack.split('\n'),
        stack = [],
        parts,
        element,
        reference = /^(.*) is undefined$/.exec(ex.message);

    for (var i = 0, j = lines.length; i < j; ++i) {
      if (parts = chrome.exec(lines[i])) {
        var isNative = parts[2] && parts[2].indexOf('native') !== -1;
        element = {
          'url': !isNative ? parts[2] : null,
          'func': parts[1] || UNKNOWN_FUNCTION,
          'args': isNative ? [parts[2]] : [],
          'line': parts[3] ? +parts[3] : null,
          'column': parts[4] ? +parts[4] : null
        };
      } else if (parts = winjs.exec(lines[i])) {
        element = {
          'url': parts[2],
          'func': parts[1] || UNKNOWN_FUNCTION,
          'args': [],
          'line': +parts[3],
          'column': parts[4] ? +parts[4] : null
        };
      } else if (parts = gecko.exec(lines[i])) {
        element = {
          'url': parts[3],
          'func': parts[1] || UNKNOWN_FUNCTION,
          'args': parts[2] ? parts[2].split(',') : [],
          'line': parts[4] ? +parts[4] : null,
          'column': parts[5] ? +parts[5] : null
        };
      } else {
        continue;
      }

      if (!element.func && element.line) {
        element.func = UNKNOWN_FUNCTION;
      }

      stack.push(element);
    }

    if (!stack.length) {
      return null;
    }

    if (!stack[0].column && typeof ex.columnNumber !== 'undefined') {
      // FireFox uses this awesome columnNumber property for its top frame
      // Also note, Firefox's column number is 0-based and everything else expects 1-based,
      // so adding 1
      stack[0].column = ex.columnNumber + 1;
    }

    return {
      'name': ex.name,
      'message': ex.message,
      'url': getLocationHref(),
      'stack': stack
    };
  }
  /**
   * Adds information about the first frame to incomplete stack traces.
   * Safari and IE require this to get complete data on the first frame.
   * @param {Object.<string, *>} stackInfo Stack trace information from
   * one of the compute* methods.
   * @param {string} url The URL of the script that caused an error.
   * @param {(number|string)} lineNo The line number of the script that
   * caused an error.
   * @param {string=} message The error generated by the browser, which
   * hopefully contains the name of the object that caused the error.
   * @return {boolean} Whether or not the stack information was
   * augmented.
   */


  function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
    var initial = {
      'url': url,
      'line': lineNo
    };

    if (initial.url && initial.line) {
      stackInfo.incomplete = false;

      if (!initial.func) {
        initial.func = UNKNOWN_FUNCTION;
      }

      if (stackInfo.stack.length > 0) {
        if (stackInfo.stack[0].url === initial.url) {
          if (stackInfo.stack[0].line === initial.line) {
            return false; // already in stack trace
          } else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
            stackInfo.stack[0].line = initial.line;
            return false;
          }
        }
      }

      stackInfo.stack.unshift(initial);
      stackInfo.partial = true;
      return true;
    } else {
      stackInfo.incomplete = true;
    }

    return false;
  }
  /**
   * Computes stack trace information by walking the arguments.caller
   * chain at the time the exception occurred. This will cause earlier
   * frames to be missed but is the only way to get any stack trace in
   * Safari and IE. The top frame is restored by
   * {@link augmentStackTraceWithInitialElement}.
   * @param {Error} ex
   * @return {?Object.<string, *>} Stack trace information.
   */


  function computeStackTraceByWalkingCallerChain(ex, depth) {
    var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
        stack = [],
        funcs = {},
        recursion = false,
        parts,
        item,
        source;

    for (var curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
      if (curr === computeStackTrace || curr === TraceKit.report) {
        // console.log('skipping internal function');
        continue;
      }

      item = {
        'url': null,
        'func': UNKNOWN_FUNCTION,
        'line': null,
        'column': null
      };

      if (curr.name) {
        item.func = curr.name;
      } else if (parts = functionName.exec(curr.toString())) {
        item.func = parts[1];
      }

      if (typeof item.func === 'undefined') {
        try {
          item.func = parts.input.substring(0, parts.input.indexOf('{'));
        } catch (e) {}
      }

      if (funcs['' + curr]) {
        recursion = true;
      } else {
        funcs['' + curr] = true;
      }

      stack.push(item);
    }

    if (depth) {
      // console.log('depth is ' + depth);
      // console.log('stack is ' + stack.length);
      stack.splice(0, depth);
    }

    var result = {
      'name': ex.name,
      'message': ex.message,
      'url': getLocationHref(),
      'stack': stack
    };
    augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);
    return result;
  }
  /**
   * Computes a stack trace for an exception.
   * @param {Error} ex
   * @param {(string|number)=} depth
   */


  function computeStackTrace(ex, depth) {
    var stack = null;
    depth = depth == null ? 0 : +depth;

    try {
      stack = computeStackTraceFromStackProp(ex);

      if (stack) {
        return stack;
      }
    } catch (e) {
      if (TraceKit.debug) {
        throw e;
      }
    }

    try {
      stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);

      if (stack) {
        return stack;
      }
    } catch (e) {
      if (TraceKit.debug) {
        throw e;
      }
    }

    return {
      'name': ex.name,
      'message': ex.message,
      'url': getLocationHref()
    };
  }

  computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
  computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;
  return computeStackTrace;
}();

var _default = TraceKit;
exports.default = _default;
module.exports = exports.default;
/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_84447__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./packages/@logrocket/utils/src/constants/nps.js":
/*!********************************************************!*\
  !*** ./packages/@logrocket/utils/src/constants/nps.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELIGHTED_FEEDBACK_PREFIX = exports.DELIGHTED_RESPONSES_REGEX = exports.WOOTRIC_RESPONSES_REGEX = void 0;
var WOOTRIC_RESPONSES_REGEX = /^https:\/\/production.wootric.com\/responses/;
exports.WOOTRIC_RESPONSES_REGEX = WOOTRIC_RESPONSES_REGEX;
var DELIGHTED_RESPONSES_REGEX = /^https:\/\/web.delighted.com\/e\/[a-zA-Z-]*\/c/;
exports.DELIGHTED_RESPONSES_REGEX = DELIGHTED_RESPONSES_REGEX;
var DELIGHTED_FEEDBACK_PREFIX = 'comment=';
exports.DELIGHTED_FEEDBACK_PREFIX = DELIGHTED_FEEDBACK_PREFIX;

/***/ }),

/***/ "./packages/@logrocket/utils/src/enhanceFunc.js":
/*!******************************************************!*\
  !*** ./packages/@logrocket/utils/src/enhanceFunc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = enhanceFunc;

/* eslint no-param-reassign: ["error", { "props": false }] */
function enhanceFunc(obj, method, handler) {
  var original = obj[method];

  function shim() {
    var res;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (original) {
      res = original.apply(this, args);
    }

    handler.apply(this, args);
    return res;
  }

  obj[method] = shim;
  return function () {
    obj[method] = original;
  };
}

module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/utils/src/mapValues.js":
/*!****************************************************!*\
  !*** ./packages/@logrocket/utils/src/mapValues.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapValues;

function mapValues(obj, f) {
  if (obj == null) {
    return {};
  }

  var res = {};
  Object.keys(obj).forEach(function (key) {
    res[key] = f(obj[key]);
  });
  return res;
}

module.exports = exports.default;

/***/ }),

/***/ "./packages/@logrocket/utils/src/startsWith.js":
/*!*****************************************************!*\
  !*** ./packages/@logrocket/utils/src/startsWith.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startsWith;

function startsWith(value, search) {
  var pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return value && search && value.substring(pos, pos + search.length) === search;
}

module.exports = exports.default;

/***/ }),

/***/ "./packages/logrocket/src/LogRocket.js":
/*!*********************************************!*\
  !*** ./packages/logrocket/src/LogRocket.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_107645__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_107645__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MAX_QUEUE_SIZE = void 0;

var _classCallCheck2 = _interopRequireDefault(__nested_webpack_require_107645__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__nested_webpack_require_107645__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__nested_webpack_require_107645__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__nested_webpack_require_107645__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _network = _interopRequireDefault(__nested_webpack_require_107645__(/*! @logrocket/network */ "./packages/@logrocket/network/src/index.js"));

var _exceptions = __nested_webpack_require_107645__(/*! @logrocket/exceptions */ "./packages/@logrocket/exceptions/src/index.js");

var _console = _interopRequireDefault(__nested_webpack_require_107645__(/*! @logrocket/console */ "./packages/@logrocket/console/src/index.js"));

var _redux = __nested_webpack_require_107645__(/*! @logrocket/redux */ "./packages/@logrocket/redux/src/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MAX_QUEUE_SIZE = 1000;
exports.MAX_QUEUE_SIZE = MAX_QUEUE_SIZE;

var considerIngestServerOption = function considerIngestServerOption() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      ingestServer = _ref.ingestServer,
      options = (0, _objectWithoutProperties2.default)(_ref, ["ingestServer"]);

  if (ingestServer) {
    return _objectSpread({
      serverURL: "".concat(ingestServer, "/i"),
      statsURL: "".concat(ingestServer, "/s")
    }, options);
  }

  return options;
};

var LogRocket = /*#__PURE__*/function () {
  function LogRocket() {
    var _this = this;

    (0, _classCallCheck2.default)(this, LogRocket);
    this._buffer = [];
    // TODO: tests for these exposed methods.
    ['log', 'info', 'warn', 'error', 'debug'].forEach(function (method) {
      _this[method] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this.addEvent('lr.core.LogEvent', function () {
          var consoleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (method === 'error' && consoleOptions.shouldAggregateConsoleErrors) {
            _exceptions.Capture.captureMessage(_this, args[0], args, {}, true);
          }

          return {
            logLevel: method.toUpperCase(),
            args: args
          };
        }, {
          shouldCaptureStackTrace: true
        });
      };
    });
    this._isInitialized = false;
    this._installed = []; // expose a callback to get the session URL from the global context

    window._lr_surl_cb = this.getSessionURL.bind(this);
  }

  (0, _createClass2.default)(LogRocket, [{
    key: "addEvent",
    value: function addEvent(type, getMessage) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var time = Date.now();

      this._run(function (logger) {
        logger.addEvent(type, getMessage, _objectSpread(_objectSpread({}, opts), {}, {
          timeOverride: time
        }));
      });
    }
  }, {
    key: "onLogger",
    value: function onLogger(logger) {
      this._logger = logger;

      while (this._buffer.length > 0) {
        var f = this._buffer.shift();

        f(this._logger);
      }
    }
  }, {
    key: "_run",
    value: function _run(f) {
      if (this._isDisabled) {
        return;
      }

      if (this._logger) {
        f(this._logger);
      } else {
        if (this._buffer.length >= MAX_QUEUE_SIZE) {
          this._isDisabled = true;
          console.warn('LogRocket: script did not load. Check that you have a valid network connection.');
          this.uninstall();
          return;
        }

        this._buffer.push(f.bind(this));
      }
    }
  }, {
    key: "init",
    value: function init(appID) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this._isInitialized) {
        var _opts$shouldAugmentNP = opts.shouldAugmentNPS,
            shouldAugmentNPS = _opts$shouldAugmentNP === void 0 ? true : _opts$shouldAugmentNP,
            _opts$shouldParseXHRB = opts.shouldParseXHRBlob,
            shouldParseXHRBlob = _opts$shouldParseXHRB === void 0 ? false : _opts$shouldParseXHRB;

        this._installed.push((0, _exceptions.registerExceptions)(this));

        this._installed.push((0, _network.default)(this, {
          shouldAugmentNPS: !!shouldAugmentNPS,
          shouldParseXHRBlob: !!shouldParseXHRBlob
        }));

        this._installed.push((0, _console.default)(this));

        this._isInitialized = true;

        this._run(function (logger) {
          logger.init(appID, considerIngestServerOption(opts));
        });
      }
    }
  }, {
    key: "start",
    value: function start() {
      this._run(function (logger) {
        logger.start();
      });
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      this._installed.forEach(function (f) {
        return f();
      });

      this._buffer = [];

      this._run(function (logger) {
        logger.uninstall();
      });
    }
  }, {
    key: "identify",
    value: function identify(id, opts) {
      this._run(function (logger) {
        logger.identify(id, opts);
      });
    }
  }, {
    key: "startNewSession",
    value: function startNewSession() {
      this._run(function (logger) {
        logger.startNewSession();
      });
    }
  }, {
    key: "track",
    value: function track(customEventName, eventProperties) {
      this._run(function (logger) {
        logger.track(customEventName, eventProperties);
      });
    }
  }, {
    key: "getSessionURL",
    value: function getSessionURL(cb) {
      if (typeof cb !== 'function') {
        throw new Error('LogRocket: must pass callback to getSessionURL()');
      }

      this._run(function (logger) {
        if (logger.getSessionURL) {
          logger.getSessionURL(cb);
        } else {
          cb(logger.recordingURL);
        }
      });
    }
  }, {
    key: "getVersion",
    value: function getVersion(cb) {
      this._run(function (logger) {
        cb(logger.version);
      });
    }
  }, {
    key: "captureMessage",
    value: function captureMessage(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _exceptions.Capture.captureMessage(this, message, [message], options);
    }
  }, {
    key: "captureException",
    value: function captureException(exception) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _exceptions.Capture.captureException(this, exception, options);
    }
  }, {
    key: "version",
    get: function get() {
      return this._logger && this._logger.version;
    }
  }, {
    key: "sessionURL",
    get: function get() {
      return this._logger && this._logger.recordingURL;
    }
  }, {
    key: "recordingURL",
    get: function get() {
      return this._logger && this._logger.recordingURL;
    }
  }, {
    key: "recordingID",
    get: function get() {
      return this._logger && this._logger.recordingID;
    }
  }, {
    key: "threadID",
    get: function get() {
      return this._logger && this._logger.threadID;
    }
  }, {
    key: "tabID",
    get: function get() {
      return this._logger && this._logger.tabID;
    }
  }, {
    key: "reduxEnhancer",
    value: function reduxEnhancer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0, _redux.createEnhancer)(this, options);
    }
  }, {
    key: "reduxMiddleware",
    value: function reduxMiddleware() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0, _redux.createMiddleware)(this, options);
    }
  }, {
    key: "isDisabled",
    get: function get() {
      return !!(this._isDisabled || this._logger && this._logger._isDisabled);
    }
  }]);
  return LogRocket;
}();

exports.default = LogRocket;

/***/ }),

/***/ "./packages/logrocket/src/makeLogRocket.js":
/*!*************************************************!*\
  !*** ./packages/logrocket/src/makeLogRocket.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_117417__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_117417__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeLogRocket;

var _LogRocket = _interopRequireDefault(__nested_webpack_require_117417__(/*! ./LogRocket */ "./packages/logrocket/src/LogRocket.js"));

var REACT_NATIVE_NOTICE = 'LogRocket does not yet support React Native.';

var makeNoopPolyfill = function makeNoopPolyfill() {
  return {
    init: function init() {},
    uninstall: function uninstall() {},
    log: function log() {},
    info: function info() {},
    warn: function warn() {},
    error: function error() {},
    debug: function debug() {},
    addEvent: function addEvent() {},
    identify: function identify() {},
    start: function start() {},

    get threadID() {
      return null;
    },

    get recordingID() {
      return null;
    },

    get recordingURL() {
      return null;
    },

    reduxEnhancer: function reduxEnhancer() {
      return function (store) {
        return function () {
          return store.apply(void 0, arguments);
        };
      };
    },
    reduxMiddleware: function reduxMiddleware() {
      return function () {
        return function (next) {
          return function (action) {
            return next(action);
          };
        };
      };
    },
    track: function track() {},
    getSessionURL: function getSessionURL() {},
    getVersion: function getVersion() {},
    startNewSession: function startNewSession() {},
    onLogger: function onLogger() {},
    setClock: function setClock() {},
    captureMessage: function captureMessage() {},
    captureException: function captureException() {}
  };
};

function makeLogRocket() {
  var getLogger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    throw new Error(REACT_NATIVE_NOTICE);
  }

  if (typeof window !== 'undefined') {
    if (window._disableLogRocket) {
      return makeNoopPolyfill();
    }

    if (window.MutationObserver && window.WeakMap) {
      // Save window globals that we rely on.
      window._lrMutationObserver = window.MutationObserver;
      var instance = new _LogRocket.default();
      getLogger(instance);
      return instance;
    }
  }

  return makeNoopPolyfill();
}

module.exports = exports.default;

/***/ }),

/***/ "./packages/logrocket/src/module-npm.js":
/*!**********************************************!*\
  !*** ./packages/logrocket/src/module-npm.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_120219__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_120219__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _setup = _interopRequireDefault(__nested_webpack_require_120219__(/*! ./setup */ "./packages/logrocket/src/setup.js"));

var instance = (0, _setup.default)();
var _default = instance;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./packages/logrocket/src/setup.js":
/*!*****************************************!*\
  !*** ./packages/logrocket/src/setup.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_121015__) {

"use strict";


var _interopRequireDefault = __nested_webpack_require_121015__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setup;

var _objectWithoutProperties2 = _interopRequireDefault(__nested_webpack_require_121015__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _makeLogRocket = _interopRequireDefault(__nested_webpack_require_121015__(/*! ./makeLogRocket */ "./packages/logrocket/src/makeLogRocket.js"));

var CDN_SERVER_MAP = {
  'cdn.logrocket.io': 'https://r.logrocket.io',
  'cdn.lr-ingest.io': 'https://r.lr-ingest.io',
  'cdn.lr-in.com': 'https://r.lr-in.com',
  'cdn.lr-in-prod.com': 'https://r.lr-in-prod.com',
  'cdn-staging.logrocket.io': 'https://staging-i.logrocket.io',
  'cdn-staging.lr-ingest.io': 'https://staging-i.lr-ingest.io',
  'cdn-staging.lr-in.com': 'https://staging-i.lr-in.com',
  'cdn-staging.lr-in-prod.com': 'https://staging-i.lr-in-prod.com'
};

function setup() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      enterpriseServer = _ref.enterpriseServer,
      _ref$sdkVersion = _ref.sdkVersion,
      sdkVersion = _ref$sdkVersion === void 0 ? "3.0.1" : _ref$sdkVersion,
      opts = (0, _objectWithoutProperties2.default)(_ref, ["enterpriseServer", "sdkVersion"]);

  var scriptOrigin =  false ? 0 : 'https://cdn.logrocket.io';
  var scriptIngest;

  if (sdkVersion === 'script') {
    try {
      // eslint-disable-next-line compat/compat
      var scriptTag = document.currentScript;
      var matches = scriptTag.src.match(/^(https?:\/\/([^\\]+))\/.+$/);
      var scriptHostname = matches && matches[2];

      if (scriptHostname && CDN_SERVER_MAP[scriptHostname]) {
        scriptOrigin = matches && matches[1];
        scriptIngest = CDN_SERVER_MAP[scriptHostname];
      }
    } catch (_) {
      /* no-op */
    }
  } else {
    // NPM
    scriptOrigin =  false ? 0 : 'https://cdn.lr-in-prod.com';
    scriptIngest =  false ? 0 : 'https://r.lr-in-prod.com';
  }

  var sdkServer = opts.sdkServer || enterpriseServer;
  var ingestServer = opts.ingestServer || enterpriseServer || scriptIngest;
  var instance = (0, _makeLogRocket.default)(function () {
    var script = document.createElement('script');

    if (ingestServer) {
      if (typeof window.__SDKCONFIG__ === 'undefined') {
        window.__SDKCONFIG__ = {};
      }

      window.__SDKCONFIG__.serverURL = "".concat(ingestServer, "/i");
      window.__SDKCONFIG__.statsURL = "".concat(ingestServer, "/s");
    }

    if (sdkServer) {
      script.src = "".concat(sdkServer, "/logger.min.js");
    } else if (window.__SDKCONFIG__ && window.__SDKCONFIG__.loggerURL) {
      script.src = window.__SDKCONFIG__.loggerURL;
    } else if (window._lrAsyncScript) {
      script.src = window._lrAsyncScript;
    } else {
      script.src = "".concat(scriptOrigin, "/logger-1.min.js");
    }

    script.async = true;
    document.head.appendChild(script);

    script.onload = function () {
      // Brave browser: Advertises its user-agent as Chrome ##.##... then
      // loads logger.min.js, but blocks the execution of the script
      // causing _LRlogger to be undefined.  Let's make sure its there first.
      if (typeof window._LRLogger === 'function') {
        instance.onLogger(new window._LRLogger({
          sdkVersion: sdkVersion
        }));
      } else {
        console.warn('LogRocket: script execution has been blocked by a product or service.');
        instance.uninstall();
      }
    };

    script.onerror = function () {
      console.warn('LogRocket: script could not load. Check that you have a valid network connection.');
      instance.uninstall();
    };
  });
  return instance;
}

module.exports = exports.default;

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./packages/logrocket/src/module-npm.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_125341__) {

module.exports = __nested_webpack_require_125341__(/*! /root/project/packages/logrocket/src/module-npm.js */"./packages/logrocket/src/module-npm.js");


/***/ })

/******/ });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************!*\
  !*** ./client/src/pages/global/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var logrocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! logrocket */ "./node_modules/logrocket/dist/build.umd.js");
/* harmony import */ var logrocket__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(logrocket__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener('DOMContentLoaded', function () {
  console.log('Loaded global entry point');
  logrocket__WEBPACK_IMPORTED_MODULE_0___default().init('1k2gse/telefonosuci-site');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdDQUFtQjs7QUFFcEQsbUNBQW1DLGdDQUFtQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0IsNkJBQTZCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdDQUFtQjs7QUFFcEQsd0JBQXdCLGdDQUFtQjs7QUFFM0Msc0JBQXNCLGdDQUFtQjs7QUFFekMsaUNBQWlDLGdDQUFtQjs7QUFFcEQsd0JBQXdCLGdDQUFtQjs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdDQUFtQjs7QUFFcEQsdUJBQXVCLGdDQUFtQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFF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aUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtFQUNsREMsT0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7RUFDQUoscURBQUEsQ0FBZSwwQkFBZjtBQUNELENBSEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdGh1Yi1zaXRlLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2dyb2NrZXQvZGlzdC9idWlsZC51bWQuanMiLCJ3ZWJwYWNrOi8vZ2l0aHViLXNpdGUtY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dpdGh1Yi1zaXRlLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9naXRodWItc2l0ZS1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dpdGh1Yi1zaXRlLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dpdGh1Yi1zaXRlLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dpdGh1Yi1zaXRlLWNsaWVudC8uL2NsaWVudC9zcmMvcGFnZXMvZ2xvYmFsL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGFycmF5TGlrZVRvQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2FycmF5TGlrZVRvQXJyYXkuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX3R5cGVvZiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7XG4gIHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7XG4gICAgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wO1xuICB9KShub2RlSW50ZXJvcCk7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHtcbiAgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgYXJyYXlXaXRob3V0SG9sZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2FycmF5V2l0aG91dEhvbGVzLmpzICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaXRlcmFibGVUb0FycmF5LmpzICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vbkl0ZXJhYmxlU3ByZWFkLmpzICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGFycmF5TGlrZVRvQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2FycmF5TGlrZVRvQXJyYXkuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvY29uc29sZS9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGxvZ3JvY2tldC9jb25zb2xlL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlZ2lzdGVyQ29uc29sZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yZWdpc3RlckNvbnNvbGUgKi8gXCIuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvY29uc29sZS9zcmMvcmVnaXN0ZXJDb25zb2xlLmpzXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX3JlZ2lzdGVyQ29uc29sZS5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L2NvbnNvbGUvc3JjL3JlZ2lzdGVyQ29uc29sZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGxvZ3JvY2tldC9jb25zb2xlL3NyYy9yZWdpc3RlckNvbnNvbGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZWdpc3RlckNvbnNvbGU7XG5cbnZhciBfdHlwZW9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1wiKSk7XG5cbnZhciBfZW5oYW5jZUZ1bmMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIEBsb2dyb2NrZXQvdXRpbHMvc3JjL2VuaGFuY2VGdW5jICovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L3V0aWxzL3NyYy9lbmhhbmNlRnVuYy5qc1wiKSk7XG5cbnZhciBfZXhjZXB0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBsb2dyb2NrZXQvZXhjZXB0aW9ucyAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9leGNlcHRpb25zL3NyYy9pbmRleC5qc1wiKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLWltcG9ydHNcbmZ1bmN0aW9uIHJlZ2lzdGVyQ29uc29sZShsb2dnZXIpIHtcbiAgdmFyIHVuc3ViRnVuY3Rpb25zID0gW107XG4gIHZhciBtZXRob2RzID0gWydsb2cnLCAnd2FybicsICdpbmZvJywgJ2Vycm9yJywgJ2RlYnVnJ107XG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgdW5zdWJGdW5jdGlvbnMucHVzaCgoMCwgX2VuaGFuY2VGdW5jLmRlZmF1bHQpKGNvbnNvbGUsIG1ldGhvZCwgZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGxvZ2dlci5hZGRFdmVudCgnbHIuY29yZS5Mb2dFdmVudCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnNvbGVPcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgICAgdmFyIGlzRW5hYmxlZCA9IGNvbnNvbGVPcHRpb25zLmlzRW5hYmxlZDtcblxuICAgICAgICBpZiAoKDAsIF90eXBlb2YyLmRlZmF1bHQpKGlzRW5hYmxlZCkgPT09ICdvYmplY3QnICYmIGlzRW5hYmxlZFttZXRob2RdID09PSBmYWxzZSB8fCBpc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSAnZXJyb3InICYmIGNvbnNvbGVPcHRpb25zLnNob3VsZEFnZ3JlZ2F0ZUNvbnNvbGVFcnJvcnMpIHtcbiAgICAgICAgICBfZXhjZXB0aW9ucy5DYXB0dXJlLmNhcHR1cmVNZXNzYWdlKGxvZ2dlciwgYXJnc1swXSwgYXJncywge30sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsb2dMZXZlbDogbWV0aG9kLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB1bnN1YkZ1bmN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh1bnN1YkZ1bmN0aW9uKSB7XG4gICAgICByZXR1cm4gdW5zdWJGdW5jdGlvbigpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L2V4Y2VwdGlvbnMvc3JjL0NhcHR1cmUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9wYWNrYWdlcy9AbG9ncm9ja2V0L2V4Y2VwdGlvbnMvc3JjL0NhcHR1cmUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYXB0dXJlTWVzc2FnZSA9IGNhcHR1cmVNZXNzYWdlO1xuZXhwb3J0cy5jYXB0dXJlRXhjZXB0aW9uID0gY2FwdHVyZUV4Y2VwdGlvbjtcblxudmFyIF90eXBlb2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZiAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXCIpKTtcblxudmFyIF9UcmFjZUtpdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGxvZ3JvY2tldC91dGlscy9zcmMvVHJhY2VLaXQgKi8gXCIuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvdXRpbHMvc3JjL1RyYWNlS2l0LmpzXCIpKTtcblxudmFyIF9zdGFja1RyYWNlRnJvbUVycm9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3N0YWNrVHJhY2VGcm9tRXJyb3IgKi8gXCIuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvZXhjZXB0aW9ucy9zcmMvc3RhY2tUcmFjZUZyb21FcnJvci5qc1wiKSk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtaW1wb3J0c1xuZnVuY3Rpb24gaXNTY2FsYXIodmFsdWUpIHtcbiAgcmV0dXJuIC9ib29sZWFufG51bWJlcnxzdHJpbmcvLnRlc3QoKDAsIF90eXBlb2YyLmRlZmF1bHQpKHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIHNjcnViKGRhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9uYWxTY2FsYXJzID0gWy8vIFZhbGlkIHZhbHVlcyBmb3IgJ2xldmVsJyBhcmUgJ2ZhdGFsJywgJ2Vycm9yJywgJ3dhcm5pbmcnLCAnaW5mbycsXG4gICAgLy8gYW5kICdkZWJ1ZycuIERlZmF1bHRzIHRvICdlcnJvcicuXG4gICAgJ2xldmVsJywgJ2xvZ2dlciddO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfb3B0aW9uYWxTY2FsYXJzID0gb3B0aW9uYWxTY2FsYXJzOyBfaSA8IF9vcHRpb25hbFNjYWxhcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgZmllbGQgPSBfb3B0aW9uYWxTY2FsYXJzW19pXTtcbiAgICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNbZmllbGRdO1xuXG4gICAgICBpZiAoaXNTY2FsYXIodmFsdWUpKSB7XG4gICAgICAgIGRhdGFbZmllbGRdID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgb3B0aW9uYWxNYXBzID0gWyd0YWdzJywgJ2V4dHJhJ107XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwLCBfb3B0aW9uYWxNYXBzID0gb3B0aW9uYWxNYXBzOyBfaTIgPCBfb3B0aW9uYWxNYXBzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBfZmllbGQgPSBfb3B0aW9uYWxNYXBzW19pMl07XG4gICAgICB2YXIgZGlydHkgPSBvcHRpb25zW19maWVsZF0gfHwge307XG4gICAgICB2YXIgc2NydWJiZWQgPSB7fTtcblxuICAgICAgZm9yICh2YXIgX2kzID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXMoZGlydHkpOyBfaTMgPCBfT2JqZWN0JGtleXMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgICB2YXIga2V5ID0gX09iamVjdCRrZXlzW19pM107XG4gICAgICAgIHZhciBfdmFsdWUgPSBkaXJ0eVtrZXldO1xuXG4gICAgICAgIGlmIChpc1NjYWxhcihfdmFsdWUpKSB7XG4gICAgICAgICAgc2NydWJiZWRba2V5LnRvU3RyaW5nKCldID0gX3ZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGF0YVtfZmllbGRdID0gc2NydWJiZWQ7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNZXNzYWdlKGxvZ2dlciwgbWVzc2FnZSwgbWVzc2FnZUFyZ3MpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICB2YXIgaXNDb25zb2xlID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmYWxzZTtcbiAgdmFyIGRhdGEgPSB7XG4gICAgZXhjZXB0aW9uVHlwZTogaXNDb25zb2xlID8gJ0NPTlNPTEUnIDogJ01FU1NBR0UnLFxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgbWVzc2FnZUFyZ3M6IG1lc3NhZ2VBcmdzLFxuICAgIGJyb3dzZXJIcmVmOiB3aW5kb3cubG9jYXRpb24gPyB3aW5kb3cubG9jYXRpb24uaHJlZiA6ICcnXG4gIH07XG4gIHNjcnViKGRhdGEsIG9wdGlvbnMpO1xuICBsb2dnZXIuYWRkRXZlbnQoJ2xyLmNvcmUuRXhjZXB0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZUV4Y2VwdGlvbihsb2dnZXIsIGV4Y2VwdGlvbikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciBwcmVwcGVkVHJhY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG5cbiAgdmFyIHRyYWNlID0gcHJlcHBlZFRyYWNlIHx8IF9UcmFjZUtpdC5kZWZhdWx0LmNvbXB1dGVTdGFja1RyYWNlKGV4Y2VwdGlvbik7XG5cbiAgdmFyIGRhdGEgPSB7XG4gICAgZXhjZXB0aW9uVHlwZTogJ1dJTkRPVycsXG4gICAgZXJyb3JUeXBlOiB0cmFjZS5uYW1lLFxuICAgIG1lc3NhZ2U6IHRyYWNlLm1lc3NhZ2UsXG4gICAgYnJvd3NlckhyZWY6IHdpbmRvdy5sb2NhdGlvbiA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmIDogJydcbiAgfTtcbiAgc2NydWIoZGF0YSwgb3B0aW9ucyk7XG4gIHZhciBhZGRFdmVudE9wdGlvbnMgPSB7XG4gICAgX3N0YWNrVHJhY2U6ICgwLCBfc3RhY2tUcmFjZUZyb21FcnJvci5kZWZhdWx0KSh0cmFjZSlcbiAgfTtcbiAgbG9nZ2VyLmFkZEV2ZW50KCdsci5jb3JlLkV4Y2VwdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSwgYWRkRXZlbnRPcHRpb25zKTtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L2V4Y2VwdGlvbnMvc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvZXhjZXB0aW9ucy9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qc1wiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVnaXN0ZXJFeGNlcHRpb25zXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZWdpc3RlckV4Y2VwdGlvbnMuZGVmYXVsdDtcbiAgfVxufSk7XG5leHBvcnRzLkNhcHR1cmUgPSB2b2lkIDA7XG5cbnZhciBfcmVnaXN0ZXJFeGNlcHRpb25zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JlZ2lzdGVyRXhjZXB0aW9ucyAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9leGNlcHRpb25zL3NyYy9yZWdpc3RlckV4Y2VwdGlvbnMuanNcIikpO1xuXG52YXIgQ2FwdHVyZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQ2FwdHVyZSAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9leGNlcHRpb25zL3NyYy9DYXB0dXJlLmpzXCIpKTtcblxuZXhwb3J0cy5DYXB0dXJlID0gQ2FwdHVyZTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L2V4Y2VwdGlvbnMvc3JjL3JhdmVuL3JhdmVuLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvZXhjZXB0aW9ucy9zcmMvcmF2ZW4vcmF2ZW4uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkge1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1wiKSk7XG5cbnZhciBfVHJhY2VLaXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIEBsb2dyb2NrZXQvdXRpbHMvc3JjL1RyYWNlS2l0ICovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L3V0aWxzL3NyYy9UcmFjZUtpdC5qc1wiKSk7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qXG5Tb21lIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSB3ZXJlIG9yaWdpbmFseSBmcm9tIHJhdmVuLWpzLCBCU0QtMiBDbGF1c2VcblxuQ29weXJpZ2h0IChjKSAyMDE4IFNlbnRyeSAoaHR0cHM6Ly9zZW50cnkuaW8pIGFuZCBpbmRpdmlkdWFsIGNvbnRyaWJ1dG9ycy5cbkFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cblJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh3aGF0KSB7XG4gIHJldHVybiB3aGF0ID09PSB2b2lkIDA7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24od2hhdCkge1xuICByZXR1cm4gdHlwZW9mIHdoYXQgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGVhY2gob2JqLCBjYWxsYmFjaykge1xuICB2YXIgaSwgajtcblxuICBpZiAoaXNVbmRlZmluZWQob2JqLmxlbmd0aCkpIHtcbiAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICBpZiAoaGFzS2V5KG9iaiwgaSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChudWxsLCBpLCBvYmpbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBqID0gb2JqLmxlbmd0aDtcblxuICAgIGlmIChqKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgajsgaSsrKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgaSwgb2JqW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogaGFzS2V5LCBhIGJldHRlciBmb3JtIG9mIGhhc093blByb3BlcnR5XG4gKiBFeGFtcGxlOiBoYXNLZXkoTWFpbkhvc3RPYmplY3QsIHByb3BlcnR5KSA9PT0gdHJ1ZS9mYWxzZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBob3N0IG9iamVjdCB0byBjaGVjayBwcm9wZXJ0eVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBjaGVja1xuICovXG5cblxuZnVuY3Rpb24gaGFzS2V5KG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3RQcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSk7XG59XG4vKipcbiAqIFBvbHlmaWxsIGEgbWV0aG9kXG4gKiBAcGFyYW0gb2JqIG9iamVjdCBlLmcuIGBkb2N1bWVudGBcbiAqIEBwYXJhbSBuYW1lIG1ldGhvZCBuYW1lIHByZXNlbnQgb24gb2JqZWN0IGUuZy4gYGFkZEV2ZW50TGlzdGVuZXJgXG4gKiBAcGFyYW0gcmVwbGFjZW1lbnQgcmVwbGFjZW1lbnQgZnVuY3Rpb25cbiAqIEBwYXJhbSB0cmFjayB7b3B0aW9uYWx9IHJlY29yZCBpbnN0cnVtZW50YXRpb24gdG8gYW4gYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIGZpbGwob2JqLCBuYW1lLCByZXBsYWNlbWVudCwgdHJhY2spIHtcbiAgdmFyIG9yaWcgPSBvYmpbbmFtZV07XG4gIG9ialtuYW1lXSA9IHJlcGxhY2VtZW50KG9yaWcpO1xuXG4gIGlmICh0cmFjaykge1xuICAgIHRyYWNrLnB1c2goW29iaiwgbmFtZSwgb3JpZ10pO1xuICB9XG59XG5cbnZhciBfd2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxudmFyIF9kb2N1bWVudCA9IF93aW5kb3cuZG9jdW1lbnQ7XG5cbnZhciBIYW5kbGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSGFuZGxlcihfcmVmKSB7XG4gICAgdmFyIGNhcHR1cmVFeGNlcHRpb24gPSBfcmVmLmNhcHR1cmVFeGNlcHRpb247XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazIuZGVmYXVsdCkodGhpcywgSGFuZGxlcik7XG4gICAgdGhpcy5fZXJyb3JIYW5kbGVyID0gdGhpcy5fZXJyb3JIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faWdub3JlT25FcnJvciA9IDA7XG4gICAgdGhpcy5fd3JhcHBlZEJ1aWx0SW5zID0gW107XG4gICAgdGhpcy5jYXB0dXJlRXhjZXB0aW9uID0gY2FwdHVyZUV4Y2VwdGlvbjtcblxuICAgIF9UcmFjZUtpdC5kZWZhdWx0LnJlcG9ydC5zdWJzY3JpYmUodGhpcy5fZXJyb3JIYW5kbGVyKTtcblxuICAgIHRoaXMuX2luc3RydW1lbnRUcnlDYXRjaCgpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczIuZGVmYXVsdCkoSGFuZGxlciwgW3tcbiAgICBrZXk6IFwidW5pbnN0YWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuaW5zdGFsbCgpIHtcbiAgICAgIF9UcmFjZUtpdC5kZWZhdWx0LnJlcG9ydC51bnN1YnNjcmliZSh0aGlzLl9lcnJvckhhbmRsZXIpOyAvLyByZXN0b3JlIGFueSB3cmFwcGVkIGJ1aWx0aW5zXG5cblxuICAgICAgdmFyIGJ1aWx0aW47XG5cbiAgICAgIHdoaWxlICh0aGlzLl93cmFwcGVkQnVpbHRJbnMubGVuZ3RoKSB7XG4gICAgICAgIGJ1aWx0aW4gPSB0aGlzLl93cmFwcGVkQnVpbHRJbnMuc2hpZnQoKTtcbiAgICAgICAgdmFyIG9iaiA9IGJ1aWx0aW5bMF0sXG4gICAgICAgICAgICBuYW1lID0gYnVpbHRpblsxXSxcbiAgICAgICAgICAgIG9yaWcgPSBidWlsdGluWzJdO1xuICAgICAgICBvYmpbbmFtZV0gPSBvcmlnO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZXJyb3JIYW5kbGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9lcnJvckhhbmRsZXIocmVwb3J0KSB7XG4gICAgICBpZiAoIXRoaXMuX2lnbm9yZU9uRXJyb3IpIHtcbiAgICAgICAgdGhpcy5jYXB0dXJlRXhjZXB0aW9uKHJlcG9ydCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9pZ25vcmVOZXh0T25FcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaWdub3JlTmV4dE9uRXJyb3IoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9pZ25vcmVPbkVycm9yICs9IDE7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gb25lcnJvciBzaG91bGQgdHJpZ2dlciBiZWZvcmUgc2V0VGltZW91dFxuICAgICAgICBfdGhpcy5faWdub3JlT25FcnJvciAtPSAxO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qXG4gICAgICogV3JhcCBjb2RlIHdpdGhpbiBhIGNvbnRleHQgc28gSGFuZGxlciBjYW4gY2FwdHVyZSBlcnJvcnNcbiAgICAgKiByZWxpYWJseSBhY3Jvc3MgZG9tYWlucyB0aGF0IGlzIGV4ZWN1dGVkIGltbWVkaWF0ZWx5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgQSBzcGVjaWZpYyBzZXQgb2Ygb3B0aW9ucyBmb3IgdGhpcyBjb250ZXh0IFtvcHRpb25hbF1cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBjYWxsYmFjayB0byBiZSBpbW1lZGlhdGVseSBleGVjdXRlZCB3aXRoaW4gdGhlIGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhcmdzIEFuIGFycmF5IG9mIGFyZ3VtZW50cyB0byBiZSBjYWxsZWQgd2l0aCB0aGUgY2FsbGJhY2sgW29wdGlvbmFsXVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udGV4dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb250ZXh0KG9wdGlvbnMsIGZ1bmMsIGFyZ3MpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgIGFyZ3MgPSBmdW5jIHx8IFtdO1xuICAgICAgICBmdW5jID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMud3JhcChvcHRpb25zLCBmdW5jKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid3JhcFwiLFxuICAgIHZhbHVlOlxuICAgIC8qXG4gICAgICogV3JhcCBjb2RlIHdpdGhpbiBhIGNvbnRleHQgYW5kIHJldHVybnMgYmFjayBhIG5ldyBmdW5jdGlvbiB0byBiZSBleGVjdXRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgQSBzcGVjaWZpYyBzZXQgb2Ygb3B0aW9ucyBmb3IgdGhpcyBjb250ZXh0IFtvcHRpb25hbF1cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiZSB3cmFwcGVkIGluIGEgbmV3IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIEEgZnVuY3Rpb24gdG8gY2FsbCBiZWZvcmUgdGhlIHRyeS9jYXRjaCB3cmFwcGVyIFtvcHRpb25hbCwgcHJpdmF0ZV1cbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIG5ld2x5IHdyYXBwZWQgZnVuY3Rpb25zIHdpdGggYSBjb250ZXh0XG4gICAgICovXG4gICAgZnVuY3Rpb24gd3JhcChvcHRpb25zLCBmdW5jLCBfYmVmb3JlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7IC8vIDEgYXJndW1lbnQgaGFzIGJlZW4gcGFzc2VkLCBhbmQgaXQncyBub3QgYSBmdW5jdGlvblxuICAgICAgLy8gc28ganVzdCByZXR1cm4gaXRcblxuICAgICAgaWYgKGlzVW5kZWZpbmVkKGZ1bmMpICYmICFpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgfSAvLyBvcHRpb25zIGlzIG9wdGlvbmFsXG5cblxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgZnVuYyA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB9IC8vIEF0IHRoaXMgcG9pbnQsIHdlJ3ZlIHBhc3NlZCBhbG9uZyAyIGFyZ3VtZW50cywgYW5kIHRoZSBzZWNvbmQgb25lXG4gICAgICAvLyBpcyBub3QgYSBmdW5jdGlvbiBlaXRoZXIsIHNvIHdlJ2xsIGp1c3QgcmV0dXJuIHRoZSBzZWNvbmQgYXJndW1lbnQuXG5cblxuICAgICAgaWYgKCFpc0Z1bmN0aW9uKGZ1bmMpKSB7XG4gICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgfSAvLyBXZSBkb24ndCB3YW5uYSB3cmFwIGl0IHR3aWNlIVxuXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChmdW5jLl9fbHJfXykge1xuICAgICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgICB9IC8vIElmIHRoaXMgaGFzIGFscmVhZHkgYmVlbiB3cmFwcGVkIGluIHRoZSBwYXN0LCByZXR1cm4gdGhhdFxuXG5cbiAgICAgICAgaWYgKGZ1bmMuX19scl93cmFwcGVyX18pIHtcbiAgICAgICAgICByZXR1cm4gZnVuYy5fX2xyX3dyYXBwZXJfXztcbiAgICAgICAgfSAvLyBJZiBmdW5jIGlzIG5vdCBleHRlbnNpYmxlLCByZXR1cm4gdGhlIGZ1bmN0aW9uIGFzLWlzIHRvIHByZXZlbnQgVHlwZUVycm9yc1xuICAgICAgICAvLyB3aGVuIHRyeWluZyB0byBhZGQgbmV3IHByb3BzICYgdG8gYXNzdXJlIGltbXV0YWJsZSBmdW5jcyBhcmVuJ3QgY2hhbmdlZFxuXG5cbiAgICAgICAgaWYgKCFPYmplY3QuaXNFeHRlbnNpYmxlKGZ1bmMpKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gSnVzdCBhY2Nlc3NpbmcgY3VzdG9tIHByb3BzIGluIHNvbWUgU2VsZW5pdW0gZW52aXJvbm1lbnRzXG4gICAgICAgIC8vIGNhbiBjYXVzZSBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBleGNlcHRpb24gKHNlZSBsci1qcyM0OTUpLlxuICAgICAgICAvLyBCYWlsIG9uIHdyYXBwaW5nIGFuZCByZXR1cm4gdGhlIGZ1bmN0aW9uIGFzLWlzIChkZWZlcnMgdG8gd2luZG93Lm9uZXJyb3IpLlxuICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gd3JhcHBlZCgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSxcbiAgICAgICAgICAgIGkgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgZGVlcCA9ICFvcHRpb25zIHx8IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWVwICE9PSBmYWxzZTtcblxuICAgICAgICBpZiAoX2JlZm9yZSAmJiBpc0Z1bmN0aW9uKF9iZWZvcmUpKSB7XG4gICAgICAgICAgX2JlZm9yZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9IC8vIFJlY3Vyc2l2ZWx5IHdyYXAgYWxsIG9mIGEgZnVuY3Rpb24ncyBhcmd1bWVudHMgdGhhdCBhcmVcbiAgICAgICAgLy8gZnVuY3Rpb25zIHRoZW1zZWx2ZXMuXG5cblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGRlZXAgPyBzZWxmLndyYXAob3B0aW9ucywgYXJndW1lbnRzW2ldKSA6IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXR0ZW1wdCB0byBpbnZva2UgdXNlci1sYW5kIGZ1bmN0aW9uLiBUaGlzIGlzIHBhcnQgb2YgdGhlIExvZ1JvY2tldCBTREsuXG4gICAgICAgICAgLy8gSWYgeW91J3JlIHNlZWluZyB0aGlzIGZyYW1lIGluIGEgc3RhY2sgdHJhY2UsIGl0IG1lYW5zIHRoYXQgTG9nUm9ja2V0IGNhdWdodFxuICAgICAgICAgIC8vIGFuIHVuaGFuZGxlZCBlcnJvciB0aHJvd24gYnkgeW91ciBhcHBsaWNhdGlvbiBjb2RlLCByZXBvcnRlZCBpdCwgdGhlbiBidWJibGVkXG4gICAgICAgICAgLy8gaXQgdXAuIFRoaXMgaXMgZXhwZWN0ZWQgYmVoYXZpb3IgYW5kIGlzIG5vdCBhIGJ1ZyB3aXRoIExvZ1JvY2tldC5cbiAgICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHNlbGYuX2lnbm9yZU5leHRPbkVycm9yKCk7XG5cbiAgICAgICAgICBzZWxmLmNhcHR1cmVFeGNlcHRpb24oX1RyYWNlS2l0LmRlZmF1bHQuY29tcHV0ZVN0YWNrVHJhY2UoZSksIG9wdGlvbnMpO1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gY29weSBvdmVyIHByb3BlcnRpZXMgb2YgdGhlIG9sZCBmdW5jdGlvblxuXG5cbiAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGZ1bmMpIHtcbiAgICAgICAgaWYgKGhhc0tleShmdW5jLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICB3cmFwcGVkW3Byb3BlcnR5XSA9IGZ1bmNbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdyYXBwZWQucHJvdG90eXBlID0gZnVuYy5wcm90b3R5cGU7XG4gICAgICBmdW5jLl9fbHJfd3JhcHBlcl9fID0gd3JhcHBlZDsgLy8gU2lnbmFsIHRoYXQgdGhpcyBmdW5jdGlvbiBoYXMgYmVlbiB3cmFwcGVkIGFscmVhZHlcbiAgICAgIC8vIGZvciBib3RoIGRlYnVnZ2luZyBhbmQgdG8gcHJldmVudCBpdCB0byBiZWluZyB3cmFwcGVkIHR3aWNlXG5cbiAgICAgIHdyYXBwZWQuX19scl9fID0gdHJ1ZTtcbiAgICAgIHdyYXBwZWQuX19pbm5lcl9fID0gZnVuYztcbiAgICAgIHJldHVybiB3cmFwcGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaW5zdHJ1bWVudFRyeUNhdGNoXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICogSW5zdGFsbCBhbnkgcXVldWVkIHBsdWdpbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaW5zdHJ1bWVudFRyeUNhdGNoKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHdyYXBwZWRCdWlsdElucyA9IHNlbGYuX3dyYXBwZWRCdWlsdElucztcblxuICAgICAgZnVuY3Rpb24gd3JhcFRpbWVGbihvcmlnKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZm4sIHQpIHtcbiAgICAgICAgICAvLyBwcmVzZXJ2ZSBhcml0eVxuICAgICAgICAgIC8vIE1ha2UgYSBjb3B5IG9mIHRoZSBhcmd1bWVudHMgdG8gcHJldmVudCBkZW9wdGltaXphdGlvblxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgICAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBvcmlnaW5hbENhbGxiYWNrID0gYXJnc1swXTtcblxuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKG9yaWdpbmFsQ2FsbGJhY2spKSB7XG4gICAgICAgICAgICBhcmdzWzBdID0gc2VsZi53cmFwKG9yaWdpbmFsQ2FsbGJhY2spO1xuICAgICAgICAgIH0gLy8gSUUgPCA5IGRvZXNuJ3Qgc3VwcG9ydCAuY2FsbC8uYXBwbHkgb24gc2V0SW50ZXJ2YWwvc2V0VGltZW91dCwgYnV0IGl0XG4gICAgICAgICAgLy8gYWxzbyBzdXBwb3J0cyBvbmx5IHR3byBhcmd1bWVudHMgYW5kIGRvZXNuJ3QgY2FyZSB3aGF0IHRoaXMgaXMsIHNvIHdlXG4gICAgICAgICAgLy8gY2FuIGp1c3QgY2FsbCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZGlyZWN0bHkuXG5cblxuICAgICAgICAgIGlmIChvcmlnLmFwcGx5KSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWcoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB3cmFwRXZlbnRUYXJnZXQoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBwcm90byA9IF93aW5kb3dbZ2xvYmFsXSAmJiBfd2luZG93W2dsb2JhbF0ucHJvdG90eXBlO1xuXG4gICAgICAgIGlmIChwcm90byAmJiBwcm90by5oYXNPd25Qcm9wZXJ0eSAmJiBwcm90by5oYXNPd25Qcm9wZXJ0eSgnYWRkRXZlbnRMaXN0ZW5lcicpKSB7XG4gICAgICAgICAgZmlsbChwcm90bywgJ2FkZEV2ZW50TGlzdGVuZXInLCBmdW5jdGlvbiAob3JpZykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldnROYW1lLCBmbiwgY2FwdHVyZSwgc2VjdXJlKSB7XG4gICAgICAgICAgICAgIC8vIHByZXNlcnZlIGFyaXR5XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGZuICYmIGZuLmhhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBmbi5oYW5kbGVFdmVudCA9IHNlbGYud3JhcChmbi5oYW5kbGVFdmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHsvLyBjYW4gc29tZXRpbWVzIGdldCAnUGVybWlzc2lvbiBkZW5pZWQgdG8gYWNjZXNzIHByb3BlcnR5IFwiaGFuZGxlIEV2ZW50J1xuICAgICAgICAgICAgICB9IC8vIE1vcmUgYnJlYWRjcnVtYiBET00gY2FwdHVyZSAuLi4gZG9uZSBoZXJlIGFuZCBub3QgaW4gYF9pbnN0cnVtZW50QnJlYWRjcnVtYnNgXG4gICAgICAgICAgICAgIC8vIHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZSBtb3JlIHRoYW4gb25lIHdyYXBwZXIgZnVuY3Rpb25cblxuXG4gICAgICAgICAgICAgIHZhciBiZWZvcmU7XG4gICAgICAgICAgICAgIHJldHVybiBvcmlnLmNhbGwodGhpcywgZXZ0TmFtZSwgc2VsZi53cmFwKGZuLCB1bmRlZmluZWQsIGJlZm9yZSksIGNhcHR1cmUsIHNlY3VyZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sIHdyYXBwZWRCdWlsdElucyk7XG4gICAgICAgICAgZmlsbChwcm90bywgJ3JlbW92ZUV2ZW50TGlzdGVuZXInLCBmdW5jdGlvbiAob3JpZykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldnQsIGZuLCBjYXB0dXJlLCBzZWN1cmUpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmbiA9IGZuICYmIChmbi5fX2xyX3dyYXBwZXJfXyA/IGZuLl9fbHJfd3JhcHBlcl9fIDogZm4pO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7Ly8gaWdub3JlLCBhY2Nlc3NpbmcgX19scl93cmFwcGVyX18gd2lsbCB0aHJvdyBpbiBzb21lIFNlbGVuaXVtIGVudmlyb25tZW50c1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIG9yaWcuY2FsbCh0aGlzLCBldnQsIGZuLCBjYXB0dXJlLCBzZWN1cmUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LCB3cmFwcGVkQnVpbHRJbnMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZpbGwoX3dpbmRvdywgJ3NldFRpbWVvdXQnLCB3cmFwVGltZUZuLCB3cmFwcGVkQnVpbHRJbnMpO1xuICAgICAgZmlsbChfd2luZG93LCAnc2V0SW50ZXJ2YWwnLCB3cmFwVGltZUZuLCB3cmFwcGVkQnVpbHRJbnMpO1xuXG4gICAgICBpZiAoX3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgZmlsbChfd2luZG93LCAncmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgZnVuY3Rpb24gKG9yaWcpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZyhzZWxmLndyYXAoY2IpKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9LCB3cmFwcGVkQnVpbHRJbnMpO1xuICAgICAgfSAvLyBldmVudCB0YXJnZXRzIGJvcnJvd2VkIGZyb20gYnVnc25hZy1qczpcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9idWdzbmFnL2J1Z3NuYWctanMvYmxvYi9tYXN0ZXIvc3JjL2J1Z3NuYWcuanMjTDY2NlxuXG5cbiAgICAgIHZhciBldmVudFRhcmdldHMgPSBbJ0V2ZW50VGFyZ2V0JywgJ1dpbmRvdycsICdOb2RlJywgJ0FwcGxpY2F0aW9uQ2FjaGUnLCAnQXVkaW9UcmFja0xpc3QnLCAnQ2hhbm5lbE1lcmdlck5vZGUnLCAnQ3J5cHRvT3BlcmF0aW9uJywgJ0V2ZW50U291cmNlJywgJ0ZpbGVSZWFkZXInLCAnSFRNTFVua25vd25FbGVtZW50JywgJ0lEQkRhdGFiYXNlJywgJ0lEQlJlcXVlc3QnLCAnSURCVHJhbnNhY3Rpb24nLCAnS2V5T3BlcmF0aW9uJywgJ01lZGlhQ29udHJvbGxlcicsICdNZXNzYWdlUG9ydCcsICdNb2RhbFdpbmRvdycsICdOb3RpZmljYXRpb24nLCAnU1ZHRWxlbWVudEluc3RhbmNlJywgJ1NjcmVlbicsICdUZXh0VHJhY2snLCAnVGV4dFRyYWNrQ3VlJywgJ1RleHRUcmFja0xpc3QnLCAnV2ViU29ja2V0JywgJ1dlYlNvY2tldFdvcmtlcicsICdXb3JrZXInLCAnWE1MSHR0cFJlcXVlc3QnLCAnWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCcsICdYTUxIdHRwUmVxdWVzdFVwbG9hZCddO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50VGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB3cmFwRXZlbnRUYXJnZXQoZXZlbnRUYXJnZXRzW2ldKTtcbiAgICAgIH1cblxuICAgICAgdmFyICQgPSBfd2luZG93LmpRdWVyeSB8fCBfd2luZG93LiQ7XG5cbiAgICAgIGlmICgkICYmICQuZm4gJiYgJC5mbi5yZWFkeSkge1xuICAgICAgICBmaWxsKCQuZm4sICdyZWFkeScsIGZ1bmN0aW9uIChvcmlnKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWcuY2FsbCh0aGlzLCBzZWxmLndyYXAoZm4pKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9LCB3cmFwcGVkQnVpbHRJbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSGFuZGxlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSGFuZGxlcjtcbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L2V4Y2VwdGlvbnMvc3JjL3JlZ2lzdGVyRXhjZXB0aW9ucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGxvZ3JvY2tldC9leGNlcHRpb25zL3NyYy9yZWdpc3RlckV4Y2VwdGlvbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanNcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlZ2lzdGVyQ29yZTtcblxudmFyIF9yYXZlbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yYXZlbi9yYXZlbiAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9leGNlcHRpb25zL3NyYy9yYXZlbi9yYXZlbi5qc1wiKSk7XG5cbnZhciBDYXB0dXJlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9DYXB0dXJlICovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L2V4Y2VwdGlvbnMvc3JjL0NhcHR1cmUuanNcIikpO1xuXG5mdW5jdGlvbiByZWdpc3RlckNvcmUobG9nZ2VyKSB7XG4gIHZhciByYXZlbiA9IG5ldyBfcmF2ZW4uZGVmYXVsdCh7XG4gICAgY2FwdHVyZUV4Y2VwdGlvbjogZnVuY3Rpb24gY2FwdHVyZUV4Y2VwdGlvbihlcnJvclJlcG9ydCkge1xuICAgICAgQ2FwdHVyZS5jYXB0dXJlRXhjZXB0aW9uKGxvZ2dlciwgbnVsbCwgbnVsbCwgZXJyb3JSZXBvcnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHJlamVjdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiByZWplY3Rpb25IYW5kbGVyKGV2dCkge1xuICAgIC8vIGh0dHA6Ly8yYWxpdHkuY29tLzIwMTYvMDQvdW5oYW5kbGVkLXJlamVjdGlvbnMuaHRtbFxuICAgIGxvZ2dlci5hZGRFdmVudCgnbHIuY29yZS5FeGNlcHRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBleGNlcHRpb25UeXBlOiAnVU5IQU5ETEVEX1JFSkVDVElPTicsXG4gICAgICAgIG1lc3NhZ2U6IGV2dC5yZWFzb24gfHwgJ1VuaGFuZGxlZCBQcm9taXNlIHJlamVjdGlvbidcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIHJlamVjdGlvbkhhbmRsZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICByYXZlbi51bmluc3RhbGwoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9leGNlcHRpb25zL3NyYy9zdGFja1RyYWNlRnJvbUVycm9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGxvZ3JvY2tldC9leGNlcHRpb25zL3NyYy9zdGFja1RyYWNlRnJvbUVycm9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzdGFja1RyYWNlRnJvbUVycm9yO1xuXG5mdW5jdGlvbiBzdGFja1RyYWNlRnJvbUVycm9yKGVycm9yUmVwb3J0KSB7XG4gIGZ1bmN0aW9uIG1ha2VOb3ROdWxsKHZhbCkge1xuICAgIHJldHVybiB2YWwgPT09IG51bGwgPyB1bmRlZmluZWQgOiB2YWw7XG4gIH1cblxuICByZXR1cm4gZXJyb3JSZXBvcnQuc3RhY2sgPyBlcnJvclJlcG9ydC5zdGFjay5tYXAoZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmVOdW1iZXI6IG1ha2VOb3ROdWxsKGZyYW1lLmxpbmUpLFxuICAgICAgY29sdW1uTnVtYmVyOiBtYWtlTm90TnVsbChmcmFtZS5jb2x1bW4pLFxuICAgICAgZmlsZU5hbWU6IG1ha2VOb3ROdWxsKGZyYW1lLnVybCksXG4gICAgICBmdW5jdGlvbk5hbWU6IG1ha2VOb3ROdWxsKGZyYW1lLmZ1bmMpXG4gICAgfTtcbiAgfSkgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvbmV0d29yay9zcmMvZmV0Y2hJbnRlcmNlcHQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGxvZ3JvY2tldC9uZXR3b3JrL3NyYy9mZXRjaEludGVyY2VwdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheSAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanNcIikpO1xuXG52YXIgX3JlZ2lzdGVyWEhSID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yZWdpc3RlclhIUiAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9uZXR3b3JrL3NyYy9yZWdpc3RlclhIUi5qc1wiKTtcblxudmFyIGludGVyY2VwdG9ycyA9IFtdO1xuXG5mdW5jdGlvbiBtYWtlSW50ZXJjZXB0b3IoZmV0Y2gsIGZldGNoSWQpIHtcbiAgdmFyIHJldmVyc2VkSW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0b3JzLnJlZHVjZShmdW5jdGlvbiAoYXJyYXksIGludGVyY2VwdG9yKSB7XG4gICAgcmV0dXJuIFtpbnRlcmNlcHRvcl0uY29uY2F0KGFycmF5KTtcbiAgfSwgW10pOyAvLyBpZiBhIGJyb3dzZXIgc3VwcG9ydHMgZmV0Y2gsIGl0IHN1cHBvcnRzIHByb21pc2VcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBhdC9jb21wYXRcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShhcmdzKTsgLy8gUmVnaXN0ZXIgcmVxdWVzdCBpbnRlcmNlcHRvcnNcblxuICByZXZlcnNlZEludGVyY2VwdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBfcmVmLnJlcXVlc3QsXG4gICAgICAgIHJlcXVlc3RFcnJvciA9IF9yZWYucmVxdWVzdEVycm9yO1xuXG4gICAgaWYgKHJlcXVlc3QgfHwgcmVxdWVzdEVycm9yKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0LmFwcGx5KHZvaWQgMCwgW2ZldGNoSWRdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5Mi5kZWZhdWx0KShhcmdzKSkpO1xuICAgICAgfSwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RFcnJvci5hcHBseSh2b2lkIDAsIFtmZXRjaElkXS5jb25jYXQoKDAsIF90b0NvbnN1bWFibGVBcnJheTIuZGVmYXVsdCkoYXJncykpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAoMCwgX3JlZ2lzdGVyWEhSLnNldEFjdGl2ZSkoZmFsc2UpO1xuICAgIHZhciByZXM7XG4gICAgdmFyIGVycjtcblxuICAgIHRyeSB7XG4gICAgICByZXMgPSBmZXRjaC5hcHBseSh2b2lkIDAsICgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKGFyZ3MpKTtcbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICBlcnIgPSBfZXJyO1xuICAgIH1cblxuICAgICgwLCBfcmVnaXN0ZXJYSFIuc2V0QWN0aXZlKSh0cnVlKTtcblxuICAgIGlmIChlcnIpIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9KTtcbiAgcmV2ZXJzZWRJbnRlcmNlcHRvcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBfcmVmMi5yZXNwb25zZSxcbiAgICAgICAgcmVzcG9uc2VFcnJvciA9IF9yZWYyLnJlc3BvbnNlRXJyb3I7XG5cbiAgICBpZiAocmVzcG9uc2UgfHwgcmVzcG9uc2VFcnJvcikge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZShmZXRjaElkLCByZXMpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VFcnJvciAmJiByZXNwb25zZUVycm9yKGZldGNoSWQsIGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoKGVudikge1xuICBpZiAoIWVudi5mZXRjaCB8fCAhZW52LlByb21pc2UpIHtcbiAgICAvLyBNYWtlIHN1cmUgZmV0Y2ggaXMgYXZhaWxhYmxlIGluIHRoZSBnaXZlbiBlbnZpcm9ubWVudC4gSWYgaXQncyBub3QsIHRoZW5cbiAgICAvLyBkZWZhdWx0IHRvIHVzaW5nIFhIUiBpbnRlcmNlcHQuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGlzUG9seWZpbGwgPSBlbnYuZmV0Y2gucG9seWZpbGw7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG4gIGVudi5mZXRjaCA9IGZ1bmN0aW9uIChmZXRjaCkge1xuICAgIHZhciBmZXRjaElkID0gMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1ha2VJbnRlcmNlcHRvci5hcHBseSh2b2lkIDAsIFtmZXRjaCwgZmV0Y2hJZCsrXS5jb25jYXQoYXJncykpO1xuICAgIH07XG4gIH0oZW52LmZldGNoKTsgLy8gRm9yd2FyZCB0aGUgcG9seWZpbGwgcHJvcGVybHkgZnJvbSBmZXRjaCAoc2V0IGJ5IGdpdGh1Yi93aGF0d2ctZmV0Y2gpLlxuXG5cbiAgaWYgKGlzUG9seWZpbGwpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBlbnYuZmV0Y2gucG9seWZpbGwgPSBpc1BvbHlmaWxsO1xuICB9XG59IC8vIFRPRE86IFJlYWN0IE5hdGl2ZVxuLy8gICBhdHRhY2goZ2xvYmFsKTtcblxuXG52YXIgZGlkQXR0YWNoID0gZmFsc2U7XG52YXIgX2RlZmF1bHQgPSB7XG4gIHJlZ2lzdGVyOiBmdW5jdGlvbiByZWdpc3RlcihpbnRlcmNlcHRvcikge1xuICAgIGlmICghZGlkQXR0YWNoKSB7XG4gICAgICBkaWRBdHRhY2ggPSB0cnVlO1xuICAgICAgYXR0YWNoKHdpbmRvdyk7XG4gICAgfVxuXG4gICAgaW50ZXJjZXB0b3JzLnB1c2goaW50ZXJjZXB0b3IpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5kZXggPSBpbnRlcmNlcHRvcnMuaW5kZXhPZihpbnRlcmNlcHRvcik7XG5cbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIGludGVyY2VwdG9ycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBpbnRlcmNlcHRvcnMgPSBbXTtcbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9uZXR3b3JrL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9wYWNrYWdlcy9AbG9ncm9ja2V0L25ldHdvcmsvc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZWdpc3Rlck5ldHdvcms7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5ICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1wiKSk7XG5cbnZhciBfdHlwZW9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1wiKSk7XG5cbnZhciBfcmVnaXN0ZXJGZXRjaCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yZWdpc3RlckZldGNoICovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L25ldHdvcmsvc3JjL3JlZ2lzdGVyRmV0Y2guanNcIikpO1xuXG52YXIgX3JlZ2lzdGVyTmV0d29ya0luZm9ybWF0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JlZ2lzdGVyTmV0d29ya0luZm9ybWF0aW9uICovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L25ldHdvcmsvc3JjL3JlZ2lzdGVyTmV0d29ya0luZm9ybWF0aW9uLmpzXCIpKTtcblxudmFyIF9yZWdpc3RlclhIUiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yZWdpc3RlclhIUiAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9uZXR3b3JrL3NyYy9yZWdpc3RlclhIUi5qc1wiKSk7XG5cbnZhciBfbWFwVmFsdWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAbG9ncm9ja2V0L3V0aWxzL3NyYy9tYXBWYWx1ZXMgKi8gXCIuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvdXRpbHMvc3JjL21hcFZhbHVlcy5qc1wiKSk7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1pbXBvcnRzXG5mdW5jdGlvbiByZWdpc3Rlck5ldHdvcmsobG9nZ2VyKSB7XG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICBpc1JlYWN0TmF0aXZlOiBmYWxzZVxuICB9O1xuICB2YXIgaXNSZWFjdE5hdGl2ZSA9IGNvbmZpZy5pc1JlYWN0TmF0aXZlLFxuICAgICAgc2hvdWxkQXVnbWVudE5QUyA9IGNvbmZpZy5zaG91bGRBdWdtZW50TlBTLFxuICAgICAgc2hvdWxkUGFyc2VYSFJCbG9iID0gY29uZmlnLnNob3VsZFBhcnNlWEhSQmxvYjtcbiAgdmFyIGlnbm9yZWROZXR3b3JrID0ge307IC8vIHRydW5jYXRlIGlmID4gNE1CIGluIHNpemVcblxuICB2YXIgdHJ1bmNhdGUgPSBmdW5jdGlvbiB0cnVuY2F0ZShkYXRhKSB7XG4gICAgdmFyIGxpbWl0ID0gMTAyNCAqIDEwMDAgKiA0O1xuICAgIHZhciBzdHIgPSBkYXRhO1xuXG4gICAgaWYgKCgwLCBfdHlwZW9mMi5kZWZhdWx0KShkYXRhKSA9PT0gJ29iamVjdCcgJiYgZGF0YSAhPSBudWxsKSB7XG4gICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZGF0YSk7XG5cbiAgICAgIGlmIChwcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBwcm90byA9PT0gbnVsbCkge1xuICAgICAgICAvLyBwbGFpbiBvYmplY3QgLSBqc29uaWZ5IGZvciB0aGUgc2l6ZSBjaGVja1xuICAgICAgICBzdHIgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyICYmIHN0ci5sZW5ndGggJiYgc3RyLmxlbmd0aCA+IGxpbWl0ICYmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgYmVnaW5uaW5nID0gc3RyLnN1YnN0cmluZygwLCAxMDAwKTtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChiZWdpbm5pbmcsIFwiIC4uLiBMb2dSb2NrZXQgdHJ1bmNhdGluZyB0byBmaXJzdCAxMDAwIGNoYXJhY3RlcnMuXFxuICAgICAgS2VlcCBkYXRhIHVuZGVyIDRNQiB0byBwcmV2ZW50IHRydW5jYXRpb24uIGh0dHBzOi8vZG9jcy5sb2dyb2NrZXQuY29tL3JlZmVyZW5jZSNuZXR3b3JrXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHZhciBhZGRSZXF1ZXN0ID0gZnVuY3Rpb24gYWRkUmVxdWVzdChyZXFJZCwgcmVxdWVzdCkge1xuICAgIHZhciBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcbiAgICBsb2dnZXIuYWRkRXZlbnQoJ2xyLm5ldHdvcmsuUmVxdWVzdEV2ZW50JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICAgIF9yZWYkaXNFbmFibGVkID0gX3JlZi5pc0VuYWJsZWQsXG4gICAgICAgICAgaXNFbmFibGVkID0gX3JlZiRpc0VuYWJsZWQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGlzRW5hYmxlZCxcbiAgICAgICAgICBfcmVmJHJlcXVlc3RTYW5pdGl6ZXIgPSBfcmVmLnJlcXVlc3RTYW5pdGl6ZXIsXG4gICAgICAgICAgcmVxdWVzdFNhbml0aXplciA9IF9yZWYkcmVxdWVzdFNhbml0aXplciA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgICB9IDogX3JlZiRyZXF1ZXN0U2FuaXRpemVyO1xuXG4gICAgICBpZiAoIWlzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHNhbml0aXplZCA9IG51bGw7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIG9ubHkgdHJ5IGNhdGNoIHVzZXIgZGVmaW5lZCBmdW5jdGlvbnNcbiAgICAgICAgc2FuaXRpemVkID0gcmVxdWVzdFNhbml0aXplcihfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHJlcXVlc3QpLCB7fSwge1xuICAgICAgICAgIHJlcUlkOiByZXFJZFxuICAgICAgICB9KSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2FuaXRpemVkKSB7XG4gICAgICAgIHZhciB1cmwgPSBzYW5pdGl6ZWQudXJsO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgLy8gV3JpdGluZyBhbmQgdGhlbiByZWFkaW5nIGZyb20gYW4gYSB0YWcgdHVybnMgYSByZWxhdGl2ZVxuICAgICAgICAgIC8vIHVybCBpbnRvIGFuIGFic29sdXRlIG9uZS5cbiAgICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBhLmhyZWYgPSBzYW5pdGl6ZWQudXJsO1xuICAgICAgICAgIHVybCA9IGEuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVxSWQ6IHJlcUlkLFxuICAgICAgICAgIC8vIGRlZmF1bHRcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAvLyBzYW5pdGl6ZWRcbiAgICAgICAgICBoZWFkZXJzOiAoMCwgX21hcFZhbHVlcy5kZWZhdWx0KShzYW5pdGl6ZWQuaGVhZGVycywgZnVuY3Rpb24gKGhlYWRlclZhbHVlKSB7XG4gICAgICAgICAgICAvLyBzYW5pdGl6ZWRcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChoZWFkZXJWYWx1ZSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYm9keTogdHJ1bmNhdGUoc2FuaXRpemVkLmJvZHkpLFxuICAgICAgICAgIC8vIHNhbml0aXplZFxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgIC8vIGRlZmF1bHRcbiAgICAgICAgICByZWZlcnJlcjogc2FuaXRpemVkLnJlZmVycmVyIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAvLyBzYW5pdGl6ZWRcbiAgICAgICAgICBtb2RlOiBzYW5pdGl6ZWQubW9kZSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgLy8gc2FuaXRpemVkXG4gICAgICAgICAgY3JlZGVudGlhbHM6IHNhbml0aXplZC5jcmVkZW50aWFscyB8fCB1bmRlZmluZWQgLy8gc2FuaXRpemVkXG5cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWdub3JlZE5ldHdvcmtbcmVxSWRdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBhZGRSZXNwb25zZSA9IGZ1bmN0aW9uIGFkZFJlc3BvbnNlKHJlcUlkLCByZXNwb25zZSkge1xuICAgIHZhciBtZXRob2QgPSByZXNwb25zZS5tZXRob2QsXG4gICAgICAgIHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICBsb2dnZXIuYWRkRXZlbnQoJ2xyLm5ldHdvcmsuUmVzcG9uc2VFdmVudCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgICAgX3JlZjIkaXNFbmFibGVkID0gX3JlZjIuaXNFbmFibGVkLFxuICAgICAgICAgIGlzRW5hYmxlZCA9IF9yZWYyJGlzRW5hYmxlZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYyJGlzRW5hYmxlZCxcbiAgICAgICAgICBfcmVmMiRyZXNwb25zZVNhbml0aXogPSBfcmVmMi5yZXNwb25zZVNhbml0aXplcixcbiAgICAgICAgICByZXNwb25zZVNhbml0aXplciA9IF9yZWYyJHJlc3BvbnNlU2FuaXRpeiA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgICB9IDogX3JlZjIkcmVzcG9uc2VTYW5pdGl6O1xuXG4gICAgICBpZiAoIWlzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoaWdub3JlZE5ldHdvcmtbcmVxSWRdKSB7XG4gICAgICAgIGRlbGV0ZSBpZ25vcmVkTmV0d29ya1tyZXFJZF07XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2FuaXRpemVkID0gbnVsbDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gb25seSB0cnkgY2F0Y2ggdXNlciBkZWZpbmVkIGZ1bmN0aW9uc1xuICAgICAgICBzYW5pdGl6ZWQgPSByZXNwb25zZVNhbml0aXplcihfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHJlc3BvbnNlKSwge30sIHtcbiAgICAgICAgICByZXFJZDogcmVxSWRcbiAgICAgICAgfSkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTsgLy8gZmFsbCB0aHJvdWdoIHRvIHJlZGFjdGVkIGxvZ1xuICAgICAgfVxuXG4gICAgICBpZiAoc2FuaXRpemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVxSWQ6IHJlcUlkLFxuICAgICAgICAgIC8vIGRlZmF1bHRcbiAgICAgICAgICBzdGF0dXM6IHNhbml0aXplZC5zdGF0dXMsXG4gICAgICAgICAgLy8gc2FuaXRpemVkXG4gICAgICAgICAgaGVhZGVyczogKDAsIF9tYXBWYWx1ZXMuZGVmYXVsdCkoc2FuaXRpemVkLmhlYWRlcnMsIGZ1bmN0aW9uIChoZWFkZXJWYWx1ZSkge1xuICAgICAgICAgICAgLy8gc2FuaXRpemVkXG4gICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoaGVhZGVyVmFsdWUpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGJvZHk6IHRydW5jYXRlKHNhbml0aXplZC5ib2R5KSxcbiAgICAgICAgICAvLyBzYW5pdGl6ZWRcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCAvLyBkZWZhdWx0XG5cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVxSWQ6IHJlcUlkLFxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAvLyByZWRhY3RlZFxuICAgICAgICBib2R5OiBudWxsLFxuICAgICAgICAvLyByZWRhY3RlZFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCAvLyBkZWZhdWx0XG5cbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGlzSWdub3JlZCA9IGZ1bmN0aW9uIGlzSWdub3JlZChyZXFJZCkge1xuICAgIHJldHVybiBsb2dnZXIuaXNEaXNhYmxlZCB8fCBpZ25vcmVkTmV0d29ya1tyZXFJZF0gPT09IHRydWU7XG4gIH07XG5cbiAgdmFyIHVuc3ViRmV0Y2ggPSAoMCwgX3JlZ2lzdGVyRmV0Y2guZGVmYXVsdCkoe1xuICAgIGFkZFJlcXVlc3Q6IGFkZFJlcXVlc3QsXG4gICAgYWRkUmVzcG9uc2U6IGFkZFJlc3BvbnNlLFxuICAgIGlzSWdub3JlZDogaXNJZ25vcmVkXG4gIH0pO1xuICB2YXIgdW5zdWJYSFIgPSAoMCwgX3JlZ2lzdGVyWEhSLmRlZmF1bHQpKHtcbiAgICBhZGRSZXF1ZXN0OiBhZGRSZXF1ZXN0LFxuICAgIGFkZFJlc3BvbnNlOiBhZGRSZXNwb25zZSxcbiAgICBpc0lnbm9yZWQ6IGlzSWdub3JlZCxcbiAgICBsb2dnZXI6IGxvZ2dlcixcbiAgICBzaG91bGRBdWdtZW50TlBTOiBzaG91bGRBdWdtZW50TlBTLFxuICAgIHNob3VsZFBhcnNlWEhSQmxvYjogc2hvdWxkUGFyc2VYSFJCbG9iXG4gIH0pO1xuICB2YXIgdW5zdWJOZXR3b3JrSW5mb3JtYXRpb24gPSBpc1JlYWN0TmF0aXZlID8gZnVuY3Rpb24gKCkge30gOiAoMCwgX3JlZ2lzdGVyTmV0d29ya0luZm9ybWF0aW9uLmRlZmF1bHQpKGxvZ2dlcik7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdW5zdWJOZXR3b3JrSW5mb3JtYXRpb24oKTtcbiAgICB1bnN1YkZldGNoKCk7XG4gICAgdW5zdWJYSFIoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9uZXR3b3JrL3NyYy9yZWdpc3RlckZldGNoLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGxvZ3JvY2tldC9uZXR3b3JrL3NyYy9yZWdpc3RlckZldGNoLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlZ2lzdGVyRmV0Y2g7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5ICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1wiKSk7XG5cbnZhciBfbWFwVmFsdWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAbG9ncm9ja2V0L3V0aWxzL3NyYy9tYXBWYWx1ZXMgKi8gXCIuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvdXRpbHMvc3JjL21hcFZhbHVlcy5qc1wiKSk7XG5cbnZhciBfZmV0Y2hJbnRlcmNlcHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZmV0Y2hJbnRlcmNlcHQgKi8gXCIuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvbmV0d29yay9zcmMvZmV0Y2hJbnRlcmNlcHQuanNcIikpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBtYWtlT2JqZWN0RnJvbUhlYWRlcnMoaGVhZGVycykge1xuICAvLyBJZiB1c2luZyByZWFsIGZldGNoLCB3ZSBtdXN0IHN0cmluZ2lmeSB0aGUgSGVhZGVycyBvYmplY3QuXG4gIGlmIChoZWFkZXJzID09IG51bGwgfHwgdHlwZW9mIGhlYWRlcnMuZm9yRWFjaCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBpZiAocmVzdWx0W2tleV0pIHtcbiAgICAgIHJlc3VsdFtrZXldID0gXCJcIi5jb25jYXQocmVzdWx0W2tleV0sIFwiLFwiKS5jb25jYXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IFwiXCIuY29uY2F0KHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSAvLyBYSFIgc3BlY2lmaWNhdGlvbiBpcyB1bmNsZWFyIG9mIHdoYXQgdHlwZXMgdG8gYWxsb3cgaW4gdmFsdWUgc28gdXNpbmcgdG9TdHJpbmcgbWV0aG9kIGZvciBub3dcblxuXG52YXIgc3RyaW5naWZ5SGVhZGVycyA9IGZ1bmN0aW9uIHN0cmluZ2lmeUhlYWRlcnMoaGVhZGVycykge1xuICByZXR1cm4gKDAsIF9tYXBWYWx1ZXMuZGVmYXVsdCkobWFrZU9iamVjdEZyb21IZWFkZXJzKGhlYWRlcnMpLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQodmFsdWUpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHBsdWNrRmV0Y2hGaWVsZHMoKSB7XG4gIHZhciBhcmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICByZXR1cm4ge1xuICAgIHVybDogYXJnLnVybCxcbiAgICBoZWFkZXJzOiBzdHJpbmdpZnlIZWFkZXJzKGFyZy5oZWFkZXJzKSxcbiAgICBtZXRob2Q6IGFyZy5tZXRob2QgJiYgYXJnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgIHJlZmVycmVyOiBhcmcucmVmZXJyZXIgfHwgdW5kZWZpbmVkLFxuICAgIG1vZGU6IGFyZy5tb2RlIHx8IHVuZGVmaW5lZCxcbiAgICBjcmVkZW50aWFsczogYXJnLmNyZWRlbnRpYWxzIHx8IHVuZGVmaW5lZFxuICB9O1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckZldGNoKF9yZWYpIHtcbiAgdmFyIGFkZFJlcXVlc3QgPSBfcmVmLmFkZFJlcXVlc3QsXG4gICAgICBhZGRSZXNwb25zZSA9IF9yZWYuYWRkUmVzcG9uc2UsXG4gICAgICBpc0lnbm9yZWQgPSBfcmVmLmlzSWdub3JlZDtcbiAgdmFyIExPR1JPQ0tFVF9GRVRDSF9MQUJFTCA9ICdmZXRjaC0nO1xuICB2YXIgZmV0Y2hNZXRob2RNYXAgPSB7fTtcblxuICB2YXIgdW5yZWdpc3RlciA9IF9mZXRjaEludGVyY2VwdC5kZWZhdWx0LnJlZ2lzdGVyKHtcbiAgICByZXF1ZXN0OiBmdW5jdGlvbiByZXF1ZXN0KGZldGNoSWQpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBwO1xuXG4gICAgICBpZiAodHlwZW9mIFJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmIGFyZ3NbMF0gaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICAgIHZhciBjbG9uZWRUZXh0OyAvLyBSZXF1ZXN0LmNsb25lKCkgYW5kIFJlcXVlc3QudGV4dCgpIG1heSB0aHJvdyBpbiBTYWZhcmkgKGUuZy4sIHdoZW5cbiAgICAgICAgLy8gcmVxdWVzdCBib2R5IGNvbnRhaW5zIEZvcm1EYXRhKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2xvbmVkVGV4dCA9IGFyZ3NbMF0uY2xvbmUoKS50ZXh0KCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIGlmIGEgYnJvd3NlciBzdXBwb3J0cyBmZXRjaCwgaXQgc3VwcG9ydHMgcHJvbWlzZVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wYXQvY29tcGF0XG4gICAgICAgICAgY2xvbmVkVGV4dCA9IFByb21pc2UucmVzb2x2ZShcIkxvZ1JvY2tldCBmZXRjaCBlcnJvcjogXCIuY29uY2F0KGVyci5tZXNzYWdlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBwID0gY2xvbmVkVGV4dC50aGVuKGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcGx1Y2tGZXRjaEZpZWxkcyhhcmdzWzBdKSksIHt9LCB7XG4gICAgICAgICAgICBib2R5OiBib2R5XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwbHVja0ZldGNoRmllbGRzKGFyZ3NbMF0pKSwge30sIHtcbiAgICAgICAgICAgIGJvZHk6IFwiTG9nUm9ja2V0IGZldGNoIGVycm9yOiBcIi5jb25jYXQoZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgYSBicm93c2VyIHN1cHBvcnRzIGZldGNoLCBpdCBzdXBwb3J0cyBwcm9taXNlXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wYXQvY29tcGF0XG4gICAgICAgIHAgPSBQcm9taXNlLnJlc29sdmUoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwbHVja0ZldGNoRmllbGRzKGFyZ3NbMV0pKSwge30sIHtcbiAgICAgICAgICB1cmw6IFwiXCIuY29uY2F0KGFyZ3NbMF0pLFxuICAgICAgICAgIGJvZHk6IChhcmdzWzFdIHx8IHt9KS5ib2R5XG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHAudGhlbihmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIGZldGNoTWV0aG9kTWFwW2ZldGNoSWRdID0gcmVxLm1ldGhvZDtcbiAgICAgICAgYWRkUmVxdWVzdChcIlwiLmNvbmNhdChMT0dST0NLRVRfRkVUQ0hfTEFCRUwpLmNvbmNhdChmZXRjaElkKSwgcmVxKTtcbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJlcXVlc3RFcnJvcjogZnVuY3Rpb24gcmVxdWVzdEVycm9yKGZldGNoSWQsIGVycm9yKSB7XG4gICAgICAvLyBpZiBhIGJyb3dzZXIgc3VwcG9ydHMgZmV0Y2gsIGl0IHN1cHBvcnRzIHByb21pc2VcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wYXQvY29tcGF0XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH0sXG4gICAgcmVzcG9uc2U6IGZ1bmN0aW9uIHJlc3BvbnNlKGZldGNoSWQsIF9yZXNwb25zZSkge1xuICAgICAgdmFyIHJlc3BvbnNlQ2xvbmU7XG4gICAgICB2YXIgcmVzcG9uc2VUZXh0UHJvbWlzZTtcblxuICAgICAgaWYgKGlzSWdub3JlZChcIlwiLmNvbmNhdChMT0dST0NLRVRfRkVUQ0hfTEFCRUwpLmNvbmNhdChmZXRjaElkKSkpIHtcbiAgICAgICAgLy8gRG9uJ3QgZXZlbiB0cnkgdG8gcmVhZCBpZ25vcmVkIHJlcXVlc3RzXG4gICAgICAgIHJldHVybiBfcmVzcG9uc2U7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRPRE86IGVuaGFuY2UgZnVuY3Rpb24gb24gb3JpZ2luYWwgcmVzcG9uc2UgYW5kIGZ1dHVyZSBjbG9uZXMgZm9yOlxuICAgICAgICAvLyB0ZXh0KCksIGpzb24oKSwgYmxvYigpLCBmb3JtZGF0YSgpLCBhcnJheWJ1ZmZlcigpXG4gICAgICAgIHJlc3BvbnNlQ2xvbmUgPSBfcmVzcG9uc2UuY2xvbmUoKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBzYWZhcmkgaGFzIGEgYnVnIHdoZXJlIGNsb25pbmcgY2FuIGZhaWxcbiAgICAgICAgdmFyIHJlc3BvbnNlSGFzaCA9IHtcbiAgICAgICAgICB1cmw6IF9yZXNwb25zZS51cmwsXG4gICAgICAgICAgc3RhdHVzOiBfcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgIGhlYWRlcnM6IHN0cmluZ2lmeUhlYWRlcnMoX3Jlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICAgIGJvZHk6IFwiTG9nUm9ja2V0IGZldGNoIGVycm9yOiBcIi5jb25jYXQoZXJyLm1lc3NhZ2UpLFxuICAgICAgICAgIG1ldGhvZDogZmV0Y2hNZXRob2RNYXBbZmV0Y2hJZF1cbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIGZldGNoTWV0aG9kTWFwW2ZldGNoSWRdO1xuICAgICAgICBhZGRSZXNwb25zZShcIlwiLmNvbmNhdChMT0dST0NLRVRfRkVUQ0hfTEFCRUwpLmNvbmNhdChmZXRjaElkKSwgcmVzcG9uc2VIYXNoKTtcbiAgICAgICAgcmV0dXJuIF9yZXNwb25zZTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHdpbmRvdy5UZXh0RGVjb2Rlcikge1xuICAgICAgICAgIC8vIHVzZSBhIHJlYWRlciB0byBtYW51YWxseSByZWFkIHRoZSByZXNwb25zZSBib2R5IHJhdGhlciB0aGFuIGNhbGxpbmcgcmVzcG9uc2UudGV4dCgpXG4gICAgICAgICAgLy8gcmVzcG9uc2UudGV4dCgpIHdhcyB0aW1pbmcgb3V0IGZvciBzb21lIHJlc3BvbnNlcywgaW4gc29tZSBjYXNlcyBiZWNhdXNlIEFwb2xsbyBzZW5kc1xuICAgICAgICAgIC8vICAgYW4gYWJvcnQgc2lnbmFsIG9yIGJlY2F1c2UgdGhlIHN0cmVhbSB3YXNuJ3QgZ2V0dGluZyB0ZXJtaW5hdGVkIGNsZWFubHlcbiAgICAgICAgICAvLyB1c2luZyBhIHJlYWRlciBhbGxvd3MgdXMgdG8gY2FwdHVyZSB3aGF0IHdlIGNhbiBmcm9tIHJlc3BvbnNlIGJvZGllcyBiZWZvcmUgdGhlXG4gICAgICAgICAgLy8gICByZXNwb25zZSByZWNlaXZlcyBhbiBhYm9ydCBzaWduYWxcbiAgICAgICAgICB2YXIgcmVhZGVyID0gcmVzcG9uc2VDbG9uZS5ib2R5LmdldFJlYWRlcigpOyAvLyByZXNwb25zZSBib2RpZXMgYWx3YXlzIGRlY29kZSB3aXRoIFVURi04XG4gICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Jlc3BvbnNlL3RleHRcblxuICAgICAgICAgIHZhciB1dGY4RGVjb2RlciA9IG5ldyB3aW5kb3cuVGV4dERlY29kZXIoJ3V0Zi04Jyk7XG4gICAgICAgICAgdmFyIGJvZHlDb250ZW50cyA9ICcnO1xuICAgICAgICAgIHJlc3BvbnNlVGV4dFByb21pc2UgPSByZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24gcmVhZFJlc3BvbnNlQm9keShfcmVmMikge1xuICAgICAgICAgICAgdmFyIGRvbmUgPSBfcmVmMi5kb25lLFxuICAgICAgICAgICAgICAgIHZhbHVlID0gX3JlZjIudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgIHJldHVybiBib2R5Q29udGVudHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjaHVuayA9IHZhbHVlID8gdXRmOERlY29kZXIuZGVjb2RlKHZhbHVlLCB7XG4gICAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxuICAgICAgICAgICAgfSkgOiAnJztcbiAgICAgICAgICAgIGJvZHlDb250ZW50cyArPSBjaHVuaztcbiAgICAgICAgICAgIHJldHVybiByZWFkZXIucmVhZCgpLnRoZW4ocmVhZFJlc3BvbnNlQm9keSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGV4dERlY29kZXIgZG9lc24ndCBoYXZlIHN1cHBvcnQgYWNyb3NzIGFsbCBicm93c2VycyB0aGF0IExSIHN1cHBvcnRzLCBzbyBpZiB0aGVyZSdzXG4gICAgICAgICAgLy8gIG5vIFRleHREZWNvZGVyLCBmYWxsIGJhY2sgdG8gdGhlIG9sZCBhcHByb2FjaFxuICAgICAgICAgIHJlc3BvbnNlVGV4dFByb21pc2UgPSByZXNwb25zZUNsb25lLnRleHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBhdC9jb21wYXRcbiAgICAgICAgcmVzcG9uc2VUZXh0UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShcIkxvZ1JvY2tldCBlcnJvciByZWFkaW5nIGJvZHk6IFwiLmNvbmNhdChlcnJvci5tZXNzYWdlKSk7XG4gICAgICB9XG5cbiAgICAgIHJlc3BvbnNlVGV4dFByb21pc2UuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIC8vIGRvbid0IGRyb3AgcmVxdWVzdCAmIGxvZyB0byBjb25zb2xlIHdoZW4gdGhlIHJlcXVlc3QgaXMgYWJvcnRlZCxcbiAgICAgICAgLy8gYXMgaXQgbWF5IGhhdmUgYWxyZWFkeSBjb21wbGV0ZWRcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0xvZ1JvY2tldC9sb2dyb2NrZXQvaXNzdWVzLzM0XG4gICAgICAgIGlmIChlcnJvci5uYW1lID09PSAnQWJvcnRFcnJvcicgJiYgZXJyb3IgaW5zdGFuY2VvZiBET01FeGNlcHRpb24pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJMb2dSb2NrZXQgZXJyb3IgcmVhZGluZyBib2R5OiBcIi5jb25jYXQoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciByZXNwb25zZUhhc2ggPSB7XG4gICAgICAgICAgdXJsOiBfcmVzcG9uc2UudXJsLFxuICAgICAgICAgIHN0YXR1czogX3Jlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICBoZWFkZXJzOiBzdHJpbmdpZnlIZWFkZXJzKF9yZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgICBib2R5OiBkYXRhLFxuICAgICAgICAgIG1ldGhvZDogZmV0Y2hNZXRob2RNYXBbZmV0Y2hJZF1cbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIGZldGNoTWV0aG9kTWFwW2ZldGNoSWRdO1xuICAgICAgICBhZGRSZXNwb25zZShcIlwiLmNvbmNhdChMT0dST0NLRVRfRkVUQ0hfTEFCRUwpLmNvbmNhdChmZXRjaElkKSwgcmVzcG9uc2VIYXNoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9yZXNwb25zZTtcbiAgICB9LFxuICAgIHJlc3BvbnNlRXJyb3I6IGZ1bmN0aW9uIHJlc3BvbnNlRXJyb3IoZmV0Y2hJZCwgZXJyb3IpIHtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgdXJsOiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgIGJvZHk6IFwiXCIuY29uY2F0KGVycm9yKVxuICAgICAgfTtcbiAgICAgIGFkZFJlc3BvbnNlKFwiXCIuY29uY2F0KExPR1JPQ0tFVF9GRVRDSF9MQUJFTCkuY29uY2F0KGZldGNoSWQpLCByZXNwb25zZSk7IC8vIGlmIGEgYnJvd3NlciBzdXBwb3J0cyBmZXRjaCwgaXQgc3VwcG9ydHMgcHJvbWlzZVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBhdC9jb21wYXRcblxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB1bnJlZ2lzdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L25ldHdvcmsvc3JjL3JlZ2lzdGVyTmV0d29ya0luZm9ybWF0aW9uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvbmV0d29yay9zcmMvcmVnaXN0ZXJOZXR3b3JrSW5mb3JtYXRpb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZWdpc3Rlck5ldHdvcmtJbmZvcm1hdGlvbjtcbnZhciBFRkZFQ1RJVkVfVFlQRV9WQUxTID0ge1xuICAnc2xvdy0yZyc6ICdTTE9XMkcnLFxuICAnMmcnOiAnVFdPRycsXG4gICczZyc6ICdUSFJFRUcnLFxuICAnNGcnOiAnRk9VUkcnXG59O1xuXG5mdW5jdGlvbiByZWdpc3Rlck5ldHdvcmtJbmZvcm1hdGlvbihsb2dnZXIpIHtcbiAgdmFyIGxhc3RTdGF0dXMgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gc2VuZE5ldHdvcmtJbmZvcm1hdGlvbigpIHtcbiAgICB2YXIgbmV3U3RhdHVzID0ge1xuICAgICAgb25saW5lOiB3aW5kb3cubmF2aWdhdG9yLm9uTGluZSxcbiAgICAgIGVmZmVjdGl2ZVR5cGU6ICdVTktPV04nXG4gICAgfTtcblxuICAgIGlmICghd2luZG93Lm5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgIG5ld1N0YXR1cy5lZmZlY3RpdmVUeXBlID0gJ05PTkUnO1xuICAgIH0gZWxzZSBpZiAod2luZG93Lm5hdmlnYXRvci5jb25uZWN0aW9uICYmIHdpbmRvdy5uYXZpZ2F0b3IuY29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlKSB7XG4gICAgICBuZXdTdGF0dXMuZWZmZWN0aXZlVHlwZSA9IEVGRkVDVElWRV9UWVBFX1ZBTFNbd2luZG93Lm5hdmlnYXRvci5jb25uZWN0aW9uLmVmZmVjdGl2ZVR5cGVdIHx8ICdVTktOT1dOJztcbiAgICB9XG5cbiAgICBpZiAobGFzdFN0YXR1cyAmJiBuZXdTdGF0dXMub25saW5lID09PSBsYXN0U3RhdHVzLm9ubGluZSAmJiBuZXdTdGF0dXMuZWZmZWN0aXZlVHlwZSA9PT0gbGFzdFN0YXR1cy5lZmZlY3RpdmVUeXBlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGFzdFN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICBsb2dnZXIuYWRkRXZlbnQoJ2xyLm5ldHdvcmsuTmV0d29ya1N0YXR1c0V2ZW50JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICAgIF9yZWYkaXNFbmFibGVkID0gX3JlZi5pc0VuYWJsZWQsXG4gICAgICAgICAgaXNFbmFibGVkID0gX3JlZiRpc0VuYWJsZWQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGlzRW5hYmxlZDtcblxuICAgICAgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdGF0dXM7XG4gICAgfSk7XG4gIH1cblxuICBzZXRUaW1lb3V0KHNlbmROZXR3b3JrSW5mb3JtYXRpb24pO1xuXG4gIGlmICh3aW5kb3cubmF2aWdhdG9yLmNvbm5lY3Rpb24gJiYgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IuY29ubmVjdGlvbi5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgd2luZG93Lm5hdmlnYXRvci5jb25uZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNlbmROZXR3b3JrSW5mb3JtYXRpb24pO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubGluZScsIHNlbmROZXR3b3JrSW5mb3JtYXRpb24pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIHNlbmROZXR3b3JrSW5mb3JtYXRpb24pO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgc2VuZE5ldHdvcmtJbmZvcm1hdGlvbik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29ubGluZScsIHNlbmROZXR3b3JrSW5mb3JtYXRpb24pO1xuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IuY29ubmVjdGlvbiAmJiB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvci5jb25uZWN0aW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IuY29ubmVjdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZW5kTmV0d29ya0luZm9ybWF0aW9uKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvbmV0d29yay9zcmMvcmVnaXN0ZXJYSFIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGxvZ3JvY2tldC9uZXR3b3JrL3NyYy9yZWdpc3RlclhIUi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZXRBY3RpdmUgPSBzZXRBY3RpdmU7XG5leHBvcnRzLmRlZmF1bHQgPSByZWdpc3RlclhIUjtcblxudmFyIF9tYXBWYWx1ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIEBsb2dyb2NrZXQvdXRpbHMvc3JjL21hcFZhbHVlcyAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC91dGlscy9zcmMvbWFwVmFsdWVzLmpzXCIpKTtcblxudmFyIF9lbmhhbmNlRnVuYyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGxvZ3JvY2tldC91dGlscy9zcmMvZW5oYW5jZUZ1bmMgKi8gXCIuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvdXRpbHMvc3JjL2VuaGFuY2VGdW5jLmpzXCIpKTtcblxudmFyIF9zdGFydHNXaXRoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAbG9ncm9ja2V0L3V0aWxzL3NyYy9zdGFydHNXaXRoICovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L3V0aWxzL3NyYy9zdGFydHNXaXRoLmpzXCIpKTtcblxudmFyIF9ucHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAbG9ncm9ja2V0L3V0aWxzL3NyYy9jb25zdGFudHMvbnBzICovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L3V0aWxzL3NyYy9jb25zdGFudHMvbnBzLmpzXCIpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtaW1wb3J0c1xuLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLWltcG9ydHNcbi8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1pbXBvcnRzXG52YXIgaXNBY3RpdmUgPSB0cnVlO1xuXG5mdW5jdGlvbiBzZXRBY3RpdmUoc2hvdWxkQmVBY3RpdmUpIHtcbiAgaXNBY3RpdmUgPSBzaG91bGRCZUFjdGl2ZTtcbn1cblxudmFyIGN1cnJlbnRYSFJJZCA9IDA7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyWEhSKF9yZWYpIHtcbiAgdmFyIGFkZFJlcXVlc3QgPSBfcmVmLmFkZFJlcXVlc3QsXG4gICAgICBhZGRSZXNwb25zZSA9IF9yZWYuYWRkUmVzcG9uc2UsXG4gICAgICBpc0lnbm9yZWQgPSBfcmVmLmlzSWdub3JlZCxcbiAgICAgIGxvZ2dlciA9IF9yZWYubG9nZ2VyLFxuICAgICAgX3JlZiRzaG91bGRBdWdtZW50TlBTID0gX3JlZi5zaG91bGRBdWdtZW50TlBTLFxuICAgICAgc2hvdWxkQXVnbWVudE5QUyA9IF9yZWYkc2hvdWxkQXVnbWVudE5QUyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkc2hvdWxkQXVnbWVudE5QUyxcbiAgICAgIF9yZWYkc2hvdWxkUGFyc2VYSFJCbCA9IF9yZWYuc2hvdWxkUGFyc2VYSFJCbG9iLFxuICAgICAgc2hvdWxkUGFyc2VYSFJCbG9iID0gX3JlZiRzaG91bGRQYXJzZVhIUkJsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkc2hvdWxkUGFyc2VYSFJCbDtcbiAgdmFyIF9YSFIgPSBYTUxIdHRwUmVxdWVzdDtcbiAgdmFyIHhock1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciB1bnN1YnNjcmliZWRGcm9tWGhyID0gZmFsc2U7XG4gIHZhciBMT0dST0NLRVRfWEhSX0xBQkVMID0gJ3hoci0nO1xuICB3aW5kb3cuX2xyWE1MSHR0cFJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5hdGl2ZS1yZWFzc2lnblxuXG4gIFhNTEh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gWE1MSHR0cFJlcXVlc3QobW96QW5vbiwgbW96U3lzdGVtKSB7XG4gICAgdmFyIHhock9iamVjdCA9IG5ldyBfWEhSKG1vekFub24sIG1velN5c3RlbSk7XG5cbiAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4geGhyT2JqZWN0O1xuICAgIH1cblxuICAgIHhock1hcC5zZXQoeGhyT2JqZWN0LCB7XG4gICAgICB4aHJJZDogKytjdXJyZW50WEhSSWQsXG4gICAgICBoZWFkZXJzOiB7fVxuICAgIH0pO1xuICAgIHZhciBvcGVuT3JpZ2luYWwgPSB4aHJPYmplY3Qub3BlbjtcblxuICAgIGZ1bmN0aW9uIG9wZW5TaGltKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciB1cmwgPSBhcmdzWzFdO1xuXG4gICAgICAgIGlmICh3aW5kb3cuVVJMICYmIHR5cGVvZiB3aW5kb3cuVVJMID09PSAnZnVuY3Rpb24nICYmIHVybC5zZWFyY2goX25wcy5XT09UUklDX1JFU1BPTlNFU19SRUdFWCkgPT09IDApIHtcbiAgICAgICAgICB2YXIgbG9ncm9ja2V0U2Vzc2lvblVSTCA9IG5ldyB3aW5kb3cuVVJMKGxvZ2dlci5yZWNvcmRpbmdVUkwpO1xuICAgICAgICAgIGxvZ3JvY2tldFNlc3Npb25VUkwuc2VhcmNoUGFyYW1zLnNldCgnbnBzJywgJ3dvb3RyaWMnKTtcbiAgICAgICAgICB2YXIgdXJsT2JqID0gbmV3IHdpbmRvdy5VUkwodXJsKTtcbiAgICAgICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gdXJsT2JqLnNlYXJjaFBhcmFtcy5nZXQoJ3Jlc3BvbnNlW3RleHRdJyk7XG4gICAgICAgICAgdmFyIGZlZWRiYWNrID0gcmVzcG9uc2VUZXh0ID8gXCJcIi5jb25jYXQocmVzcG9uc2VUZXh0LCBcIlxcblxcblwiKSA6ICcnO1xuICAgICAgICAgIHVybE9iai5zZWFyY2hQYXJhbXMuc2V0KCdyZXNwb25zZVt0ZXh0XScsIFwiXCIuY29uY2F0KGZlZWRiYWNrLCBcIjxcIikuY29uY2F0KGxvZ3JvY2tldFNlc3Npb25VUkwuaHJlZiwgXCJ8VmlldyBMb2dSb2NrZXQgc2Vzc2lvbj5cIikpO1xuICAgICAgICAgIGFyZ3NbMV0gPSB1cmxPYmouaHJlZjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8qIGRvIG5vdGhpbmcgKi9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wZW5PcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG5cbiAgICB2YXIgc2VuZE9yaWdpbmFsID0geGhyT2JqZWN0LnNlbmQ7XG5cbiAgICBmdW5jdGlvbiBzZW5kU2hpbSgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBjdXJyZW50WEhSID0geGhyTWFwLmdldCh4aHJPYmplY3QpO1xuXG4gICAgICAgIGlmICh3aW5kb3cuVVJMICYmIHR5cGVvZiB3aW5kb3cuVVJMID09PSAnZnVuY3Rpb24nICYmIGN1cnJlbnRYSFIgJiYgY3VycmVudFhIUi51cmwgJiYgY3VycmVudFhIUi51cmwuc2VhcmNoKF9ucHMuREVMSUdIVEVEX1JFU1BPTlNFU19SRUdFWCkgPT09IDAgJiYgYXJncy5sZW5ndGggJiYgYXJnc1swXS5pbmRleE9mKF9ucHMuREVMSUdIVEVEX0ZFRURCQUNLX1BSRUZJWCkgIT09IC0xKSB7XG4gICAgICAgICAgdmFyIHJlY29yZGluZ1VSTCA9IG5ldyB3aW5kb3cuVVJMKGxvZ2dlci5yZWNvcmRpbmdVUkwpO1xuICAgICAgICAgIHJlY29yZGluZ1VSTC5zZWFyY2hQYXJhbXMuc2V0KCducHMnLCAnZGVsaWdodGVkJyk7XG4gICAgICAgICAgdmFyIGxvZ3JvY2tldFNlc3Npb25VUkwgPSBlbmNvZGVVUklDb21wb25lbnQocmVjb3JkaW5nVVJMLmhyZWYpO1xuICAgICAgICAgIHZhciBkYXRhID0gYXJnc1swXS5zcGxpdCgnJicpLm1hcChmdW5jdGlvbiAoZGF0YVN0cmluZykge1xuICAgICAgICAgICAgaWYgKCgwLCBfc3RhcnRzV2l0aC5kZWZhdWx0KShkYXRhU3RyaW5nLCBfbnBzLkRFTElHSFRFRF9GRUVEQkFDS19QUkVGSVgpKSB7XG4gICAgICAgICAgICAgIHZhciBpc0VtcHR5ID0gZGF0YVN0cmluZyA9PT0gX25wcy5ERUxJR0hURURfRkVFREJBQ0tfUFJFRklYO1xuICAgICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZGF0YVN0cmluZykuY29uY2F0KGlzRW1wdHkgPyAnJyA6ICdcXG5cXG4nLCBcIjxcIikuY29uY2F0KGxvZ3JvY2tldFNlc3Npb25VUkwsIFwifFZpZXcgTG9nUm9ja2V0IHNlc3Npb24+XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGF0YVN0cmluZztcbiAgICAgICAgICB9KS5qb2luKCcmJyk7XG4gICAgICAgICAgYXJnc1swXSA9IGRhdGE7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvKiBkbyBub3RoaW5nICovXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZW5kT3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZEF1Z21lbnROUFMpIHtcbiAgICAgIHhock9iamVjdC5vcGVuID0gb3BlblNoaW07XG4gICAgICB4aHJPYmplY3Quc2VuZCA9IHNlbmRTaGltO1xuICAgIH0gLy8gLi4uLCAnb3BlbicsIChtZXRob2QsIHVybCwgYXN5bmMsIHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xuXG5cbiAgICAoMCwgX2VuaGFuY2VGdW5jLmRlZmF1bHQpKHhock9iamVjdCwgJ29wZW4nLCBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgICAgIGlmICh1bnN1YnNjcmliZWRGcm9tWGhyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1cnJlbnRYSFIgPSB4aHJNYXAuZ2V0KHhock9iamVjdCk7XG4gICAgICBjdXJyZW50WEhSLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGN1cnJlbnRYSFIudXJsID0gdXJsO1xuICAgIH0pO1xuICAgICgwLCBfZW5oYW5jZUZ1bmMuZGVmYXVsdCkoeGhyT2JqZWN0LCAnc2VuZCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAodW5zdWJzY3JpYmVkRnJvbVhocikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJyZW50WEhSID0geGhyTWFwLmdldCh4aHJPYmplY3QpO1xuXG4gICAgICBpZiAoIWN1cnJlbnRYSFIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgdXJsOiBjdXJyZW50WEhSLnVybCxcbiAgICAgICAgbWV0aG9kOiBjdXJyZW50WEhSLm1ldGhvZCAmJiBjdXJyZW50WEhSLm1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBoZWFkZXJzOiAoMCwgX21hcFZhbHVlcy5kZWZhdWx0KShjdXJyZW50WEhSLmhlYWRlcnMgfHwge30sIGZ1bmN0aW9uIChoZWFkZXJWYWx1ZXMpIHtcbiAgICAgICAgICByZXR1cm4gaGVhZGVyVmFsdWVzLmpvaW4oJywgJyk7XG4gICAgICAgIH0pLFxuICAgICAgICBib2R5OiBkYXRhXG4gICAgICB9O1xuICAgICAgYWRkUmVxdWVzdChcIlwiLmNvbmNhdChMT0dST0NLRVRfWEhSX0xBQkVMKS5jb25jYXQoY3VycmVudFhIUi54aHJJZCksIHJlcXVlc3QpO1xuICAgIH0pO1xuICAgICgwLCBfZW5oYW5jZUZ1bmMuZGVmYXVsdCkoeGhyT2JqZWN0LCAnc2V0UmVxdWVzdEhlYWRlcicsIGZ1bmN0aW9uIChoZWFkZXIsIHZhbHVlKSB7XG4gICAgICBpZiAodW5zdWJzY3JpYmVkRnJvbVhocikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJyZW50WEhSID0geGhyTWFwLmdldCh4aHJPYmplY3QpO1xuXG4gICAgICBpZiAoIWN1cnJlbnRYSFIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50WEhSLmhlYWRlcnMgPSBjdXJyZW50WEhSLmhlYWRlcnMgfHwge307XG4gICAgICBjdXJyZW50WEhSLmhlYWRlcnNbaGVhZGVyXSA9IGN1cnJlbnRYSFIuaGVhZGVyc1toZWFkZXJdIHx8IFtdO1xuICAgICAgY3VycmVudFhIUi5oZWFkZXJzW2hlYWRlcl0ucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgdmFyIHhockxpc3RlbmVycyA9IHtcbiAgICAgIHJlYWR5c3RhdGVjaGFuZ2U6IGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh1bnN1YnNjcmliZWRGcm9tWGhyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHhock9iamVjdC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRYSFIgPSB4aHJNYXAuZ2V0KHhock9iamVjdCk7XG5cbiAgICAgICAgICBpZiAoIWN1cnJlbnRYSFIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IC8vIERvIG5vdCByZWFkIGlnbm9yZWQgcmVxdWVzdHMgYXQgYWxsLlxuXG5cbiAgICAgICAgICBpZiAoaXNJZ25vcmVkKFwiXCIuY29uY2F0KExPR1JPQ0tFVF9YSFJfTEFCRUwpLmNvbmNhdChjdXJyZW50WEhSLnhocklkKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaGVhZGVyU3RyaW5nID0geGhyT2JqZWN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnO1xuICAgICAgICAgIHZhciBoZWFkZXJzID0gaGVhZGVyU3RyaW5nLnNwbGl0KC9bXFxyXFxuXSsvKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV4dCA9IHByZXZpb3VzO1xuICAgICAgICAgICAgdmFyIGhlYWRlclBhcnRzID0gY3VycmVudC5zcGxpdCgnOiAnKTtcblxuICAgICAgICAgICAgaWYgKGhlYWRlclBhcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdmFyIGtleSA9IGhlYWRlclBhcnRzLnNoaWZ0KCk7IC8vIGZpcnN0IGluZGV4IG9mIHRoZSBhcnJheVxuXG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGhlYWRlclBhcnRzLmpvaW4oJzogJyk7IC8vIHJlc3Qgb2YgdGhlIGFycmF5IHJlcGFpcmVkXG5cbiAgICAgICAgICAgICAgaWYgKHByZXZpb3VzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBuZXh0W2tleV0gKz0gXCIsIFwiLmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICAgIHZhciBib2R5OyAvLyBJRSAxMSBzb21ldGltZXMgdGhyb3dzIHdoZW4gdHJ5aW5nIHRvIGFjY2VzcyBsYXJnZSByZXNwb25zZXNcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHhock9iamVjdC5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgICAgICAgYm9keSA9IGxvZ2dlci5fc2hvdWxkQ2xvbmVSZXNwb25zZSA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoeGhyT2JqZWN0LnJlc3BvbnNlKSkgOiB4aHJPYmplY3QucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAnYXJyYXlidWZmZXInOlxuICAgICAgICAgICAgICBjYXNlICdibG9iJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBib2R5ID0geGhyT2JqZWN0LnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNhc2UgJ2RvY3VtZW50JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBib2R5ID0geGhyT2JqZWN0LnJlc3BvbnNlWE1MO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICBjYXNlICcnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJvZHkgPSB4aHJPYmplY3QucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYm9keSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGJvZHkgPSAnTG9nUm9ja2V0OiBFcnJvciBhY2Nlc3NpbmcgcmVzcG9uc2UuJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICB1cmw6IGN1cnJlbnRYSFIudXJsLFxuICAgICAgICAgICAgc3RhdHVzOiB4aHJPYmplY3Quc3RhdHVzLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICBtZXRob2Q6IChjdXJyZW50WEhSLm1ldGhvZCB8fCAnJykudG9VcHBlckNhc2UoKVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoc2hvdWxkUGFyc2VYSFJCbG9iICYmIHJlc3BvbnNlLmJvZHkgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICAgICB2YXIgYmxvYlJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICBibG9iUmVhZGVyLnJlYWRBc1RleHQocmVzcG9uc2UuYm9keSk7XG5cbiAgICAgICAgICAgIGJsb2JSZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmJvZHkgPSBKU09OLnBhcnNlKGJsb2JSZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoX3VudXNlZCkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG5cbiAgICAgICAgICAgICAgYWRkUmVzcG9uc2UoXCJcIi5jb25jYXQoTE9HUk9DS0VUX1hIUl9MQUJFTCkuY29uY2F0KGN1cnJlbnRYSFIueGhySWQpLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRSZXNwb25zZShcIlwiLmNvbmNhdChMT0dST0NLRVRfWEhSX0xBQkVMKS5jb25jYXQoY3VycmVudFhIUi54aHJJZCksIHJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gLy8gVW51c2VkIEV2ZW50IExpc3RlbmVyc1xuICAgICAgLy8gbG9hZHN0YXJ0OiAoKSA9PiB7fSxcbiAgICAgIC8vIHByb2dyZXNzOiAoKSA9PiB7fSxcbiAgICAgIC8vIGFib3J0OiAoKSA9PiB7fSxcbiAgICAgIC8vIGVycm9yOiAoKSA9PiB7fSxcbiAgICAgIC8vIGxvYWQ6ICgpID0+IHt9LFxuICAgICAgLy8gdGltZW91dDogKCkgPT4ge30sXG4gICAgICAvLyBsb2FkZW5kOiAoKSA9PiB7fSxcblxuICAgIH07XG4gICAgT2JqZWN0LmtleXMoeGhyTGlzdGVuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHhock9iamVjdC5hZGRFdmVudExpc3RlbmVyKGtleSwgeGhyTGlzdGVuZXJzW2tleV0pO1xuICAgIH0pO1xuICAgIHJldHVybiB4aHJPYmplY3Q7XG4gIH07IC8vIHRoaXMgYWxsb3dzIFwiaW5zdGFuY2VvZiBYTUxIdHRwUmVxdWVzdFwiIHRvIHdvcmtcblxuXG4gIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSA9IF9YSFIucHJvdG90eXBlOyAvLyBQZXJzaXN0IHRoZSBzdGF0aWMgdmFyaWFibGVzLlxuXG4gIFsnVU5TRU5UJywgJ09QRU5FRCcsICdIRUFERVJTX1JFQ0VJVkVEJywgJ0xPQURJTkcnLCAnRE9ORSddLmZvckVhY2goZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gICAgWE1MSHR0cFJlcXVlc3RbdmFyaWFibGVdID0gX1hIUlt2YXJpYWJsZV07XG4gIH0pO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHVuc3Vic2NyaWJlZEZyb21YaHIgPSB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmF0aXZlLXJlYXNzaWduXG5cbiAgICBYTUxIdHRwUmVxdWVzdCA9IF9YSFI7XG4gIH07XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9ub3cvc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGxvZ3JvY2tldC9ub3cvc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBhdC9jb21wYXQgKi9cbnZhciBkYXRlTm93ID0gRGF0ZS5ub3cuYmluZChEYXRlKTtcbnZhciBsb2FkVGltZSA9IGRhdGVOb3coKTtcblxudmFyIF9kZWZhdWx0ID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cgPyBwZXJmb3JtYW5jZS5ub3cuYmluZChwZXJmb3JtYW5jZSkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkYXRlTm93KCkgLSBsb2FkVGltZTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9yZWR1eC9zcmMvY3JlYXRlRW5oYW5jZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvcmVkdXgvc3JjL2NyZWF0ZUVuaGFuY2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRW5oYW5jZXI7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5ICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1wiKSk7XG5cbnZhciBfbm93ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAbG9ncm9ja2V0L25vdyAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9ub3cvc3JjL2luZGV4LmpzXCIpKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIHN0b3JlSWRDb3VudGVyID0gMDtcblxuZnVuY3Rpb24gY3JlYXRlRW5oYW5jZXIobG9nZ2VyKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgIF9yZWYkc3RhdGVTYW5pdGl6ZXIgPSBfcmVmLnN0YXRlU2FuaXRpemVyLFxuICAgICAgc3RhdGVTYW5pdGl6ZXIgPSBfcmVmJHN0YXRlU2FuaXRpemVyID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBmO1xuICB9IDogX3JlZiRzdGF0ZVNhbml0aXplcixcbiAgICAgIF9yZWYkYWN0aW9uU2FuaXRpemVyID0gX3JlZi5hY3Rpb25TYW5pdGl6ZXIsXG4gICAgICBhY3Rpb25TYW5pdGl6ZXIgPSBfcmVmJGFjdGlvblNhbml0aXplciA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZjtcbiAgfSA6IF9yZWYkYWN0aW9uU2FuaXRpemVyO1xuXG4gIC8vIGFuIGVuaGFuY2VyIGlzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgU3RvcmVcbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcikge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG4gICAgICB2YXIgb3JpZ2luYWxEaXNwYXRjaCA9IHN0b3JlLmRpc3BhdGNoO1xuICAgICAgdmFyIHN0b3JlSWQgPSBzdG9yZUlkQ291bnRlcisrO1xuICAgICAgbG9nZ2VyLmFkZEV2ZW50KCdsci5yZWR1eC5Jbml0aWFsU3RhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzYW5pdGl6ZWRTdGF0ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIG9ubHkgdHJ5IGNhdGNoIHVzZXIgZGVmaW5lZCBmdW5jdGlvbnNcbiAgICAgICAgICBzYW5pdGl6ZWRTdGF0ZSA9IHN0YXRlU2FuaXRpemVyKHN0b3JlLmdldFN0YXRlKCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdGU6IHNhbml0aXplZFN0YXRlLFxuICAgICAgICAgIHN0b3JlSWQ6IHN0b3JlSWRcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gKDAsIF9ub3cuZGVmYXVsdCkoKTtcbiAgICAgICAgdmFyIGVycjtcbiAgICAgICAgdmFyIHJlcztcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IG9yaWdpbmFsRGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgIGVyciA9IF9lcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uID0gKDAsIF9ub3cuZGVmYXVsdCkoKSAtIHN0YXJ0O1xuICAgICAgICAgIGxvZ2dlci5hZGRFdmVudCgnbHIucmVkdXguUmVkdXhBY3Rpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2FuaXRpemVkU3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgdmFyIHNhbml0aXplZEFjdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIG9ubHkgdHJ5IGNhdGNoIHVzZXIgZGVmaW5lZCBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgc2FuaXRpemVkU3RhdGUgPSBzdGF0ZVNhbml0aXplcihzdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICAgICAgICAgICAgc2FuaXRpemVkQWN0aW9uID0gYWN0aW9uU2FuaXRpemVyKGFjdGlvbik7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRTdGF0ZSAmJiBzYW5pdGl6ZWRBY3Rpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdG9yZUlkOiBzdG9yZUlkLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogc2FuaXRpemVkQWN0aW9uLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICBzdGF0ZURlbHRhOiBzYW5pdGl6ZWRTdGF0ZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RvcmUpLCB7fSwge1xuICAgICAgICBkaXNwYXRjaDogZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvcmVkdXgvc3JjL2NyZWF0ZU1pZGRsZXdhcmUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGxvZ3JvY2tldC9yZWR1eC9zcmMvY3JlYXRlTWlkZGxld2FyZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlTWlkZGxld2FyZTtcblxudmFyIF9ub3cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIEBsb2dyb2NrZXQvbm93ICovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L25vdy9zcmMvaW5kZXguanNcIikpO1xuXG52YXIgc3RvcmVJZENvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBjcmVhdGVNaWRkbGV3YXJlKGxvZ2dlcikge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG4gICAgICBfcmVmJHN0YXRlU2FuaXRpemVyID0gX3JlZi5zdGF0ZVNhbml0aXplcixcbiAgICAgIHN0YXRlU2FuaXRpemVyID0gX3JlZiRzdGF0ZVNhbml0aXplciA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZjtcbiAgfSA6IF9yZWYkc3RhdGVTYW5pdGl6ZXIsXG4gICAgICBfcmVmJGFjdGlvblNhbml0aXplciA9IF9yZWYuYWN0aW9uU2FuaXRpemVyLFxuICAgICAgYWN0aW9uU2FuaXRpemVyID0gX3JlZiRhY3Rpb25TYW5pdGl6ZXIgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGY7XG4gIH0gOiBfcmVmJGFjdGlvblNhbml0aXplcjtcblxuICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgdmFyIHN0b3JlSWQgPSBzdG9yZUlkQ291bnRlcisrO1xuICAgIGxvZ2dlci5hZGRFdmVudCgnbHIucmVkdXguSW5pdGlhbFN0YXRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNhbml0aXplZFN0YXRlO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBvbmx5IHRyeSBjYXRjaCB1c2VyIGRlZmluZWQgZnVuY3Rpb25zXG4gICAgICAgIHNhbml0aXplZFN0YXRlID0gc3RhdGVTYW5pdGl6ZXIoc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIudG9TdHJpbmcoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXRlOiBzYW5pdGl6ZWRTdGF0ZSxcbiAgICAgICAgc3RvcmVJZDogc3RvcmVJZFxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBzdGFydCA9ICgwLCBfbm93LmRlZmF1bHQpKCk7XG4gICAgICAgIHZhciBlcnI7XG4gICAgICAgIHZhciByZXM7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBuZXh0KGFjdGlvbik7XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICBlcnIgPSBfZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHZhciBkdXJhdGlvbiA9ICgwLCBfbm93LmRlZmF1bHQpKCkgLSBzdGFydDtcbiAgICAgICAgICBsb2dnZXIuYWRkRXZlbnQoJ2xyLnJlZHV4LlJlZHV4QWN0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNhbml0aXplZFN0YXRlID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBzYW5pdGl6ZWRBY3Rpb24gPSBudWxsO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyBvbmx5IHRyeSBjYXRjaCB1c2VyIGRlZmluZWQgZnVuY3Rpb25zXG4gICAgICAgICAgICAgIHNhbml0aXplZFN0YXRlID0gc3RhdGVTYW5pdGl6ZXIoc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgICAgIHNhbml0aXplZEFjdGlvbiA9IGFjdGlvblNhbml0aXplcihhY3Rpb24pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkU3RhdGUgJiYgc2FuaXRpemVkQWN0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RvcmVJZDogc3RvcmVJZCxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHNhbml0aXplZEFjdGlvbixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgc3RhdGVEZWx0YTogc2FuaXRpemVkU3RhdGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9yZWR1eC9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvcmVkdXgvc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlRW5oYW5jZXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NyZWF0ZUVuaGFuY2VyLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlTWlkZGxld2FyZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY3JlYXRlTWlkZGxld2FyZS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9jcmVhdGVFbmhhbmNlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jcmVhdGVFbmhhbmNlciAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9yZWR1eC9zcmMvY3JlYXRlRW5oYW5jZXIuanNcIikpO1xuXG52YXIgX2NyZWF0ZU1pZGRsZXdhcmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY3JlYXRlTWlkZGxld2FyZSAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9yZWR1eC9zcmMvY3JlYXRlTWlkZGxld2FyZS5qc1wiKSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC91dGlscy9zcmMvVHJhY2VLaXQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvdXRpbHMvc3JjL1RyYWNlS2l0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7LyogZXNsaW50LWRpc2FibGUgKi9cblxuLypcbiBUcmFjZUtpdCAtIENyb3NzIGJyb3dlciBzdGFjayB0cmFjZXMgLSBnaXRodWIuY29tL29jYy9UcmFjZUtpdFxuXG4gVGhpcyB3YXMgb3JpZ2luYWxseSBmb3JrZWQgZnJvbSBnaXRodWIuY29tL29jYy9UcmFjZUtpdCwgYnV0IGhhcyBzaW5jZSBiZWVuXG4gbGFyZ2VseSByZS13cml0dGVuIGFuZCBpcyBub3cgbWFpbnRhaW5lZCBhcyBwYXJ0IG9mIHJhdmVuLWpzLiAgVGVzdHMgZm9yXG4gdGhpcyBhcmUgaW4gdGVzdC92ZW5kb3IuXG5cbiBNSVQgbGljZW5zZVxuKi9cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBUcmFjZUtpdCA9IHtcbiAgY29sbGVjdFdpbmRvd0Vycm9yczogdHJ1ZSxcbiAgZGVidWc6IGZhbHNlXG59OyAvLyBUaGlzIGlzIHRvIGJlIGRlZmVuc2l2ZSBpbiBlbnZpcm9ubWVudHMgd2hlcmUgd2luZG93IGRvZXMgbm90IGV4aXN0IChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9yYXZlbi1qcy9wdWxsLzc4NSlcblxudmFyIF93aW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9OyAvLyBnbG9iYWwgcmVmZXJlbmNlIHRvIHNsaWNlXG5cblxudmFyIF9zbGljZSA9IFtdLnNsaWNlO1xudmFyIFVOS05PV05fRlVOQ1RJT04gPSAnPyc7IC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yI0Vycm9yX3R5cGVzXG5cbnZhciBFUlJPUl9UWVBFU19SRSA9IC9eKD86VW5jYXVnaHQgKD86ZXhjZXB0aW9uOiApPyk/KCg/OkV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvcik6ID8oLiopJC87XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uSHJlZigpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50LmxvY2F0aW9uID09PSAndW5kZWZpbmVkJykgcmV0dXJuICcnO1xuICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbn1cbi8qKlxuICogVHJhY2VLaXQucmVwb3J0OiBjcm9zcy1icm93c2VyIHByb2Nlc3Npbmcgb2YgdW5oYW5kbGVkIGV4Y2VwdGlvbnNcbiAqXG4gKiBTeW50YXg6XG4gKiAgIFRyYWNlS2l0LnJlcG9ydC5zdWJzY3JpYmUoZnVuY3Rpb24oc3RhY2tJbmZvKSB7IC4uLiB9KVxuICogICBUcmFjZUtpdC5yZXBvcnQudW5zdWJzY3JpYmUoZnVuY3Rpb24oc3RhY2tJbmZvKSB7IC4uLiB9KVxuICogICBUcmFjZUtpdC5yZXBvcnQoZXhjZXB0aW9uKVxuICogICB0cnkgeyAuLi5jb2RlLi4uIH0gY2F0Y2goZXgpIHsgVHJhY2VLaXQucmVwb3J0KGV4KTsgfVxuICpcbiAqIFN1cHBvcnRzOlxuICogICAtIEZpcmVmb3g6IGZ1bGwgc3RhY2sgdHJhY2Ugd2l0aCBsaW5lIG51bWJlcnMsIHBsdXMgY29sdW1uIG51bWJlclxuICogICAgICAgICAgICAgIG9uIHRvcCBmcmFtZTsgY29sdW1uIG51bWJlciBpcyBub3QgZ3VhcmFudGVlZFxuICogICAtIE9wZXJhOiAgIGZ1bGwgc3RhY2sgdHJhY2Ugd2l0aCBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyc1xuICogICAtIENocm9tZTogIGZ1bGwgc3RhY2sgdHJhY2Ugd2l0aCBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyc1xuICogICAtIFNhZmFyaTogIGxpbmUgYW5kIGNvbHVtbiBudW1iZXIgZm9yIHRoZSB0b3AgZnJhbWUgb25seTsgc29tZSBmcmFtZXNcbiAqICAgICAgICAgICAgICBtYXkgYmUgbWlzc2luZywgYW5kIGNvbHVtbiBudW1iZXIgaXMgbm90IGd1YXJhbnRlZWRcbiAqICAgLSBJRTogICAgICBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyIGZvciB0aGUgdG9wIGZyYW1lIG9ubHk7IHNvbWUgZnJhbWVzXG4gKiAgICAgICAgICAgICAgbWF5IGJlIG1pc3NpbmcsIGFuZCBjb2x1bW4gbnVtYmVyIGlzIG5vdCBndWFyYW50ZWVkXG4gKlxuICogSW4gdGhlb3J5LCBUcmFjZUtpdCBzaG91bGQgd29yayBvbiBhbGwgb2YgdGhlIGZvbGxvd2luZyB2ZXJzaW9uczpcbiAqICAgLSBJRTUuNSsgKG9ubHkgOC4wIHRlc3RlZClcbiAqICAgLSBGaXJlZm94IDAuOSsgKG9ubHkgMy41KyB0ZXN0ZWQpXG4gKiAgIC0gT3BlcmEgNysgKG9ubHkgMTAuNTAgdGVzdGVkOyB2ZXJzaW9ucyA5IGFuZCBlYXJsaWVyIG1heSByZXF1aXJlXG4gKiAgICAgRXhjZXB0aW9ucyBIYXZlIFN0YWNrdHJhY2UgdG8gYmUgZW5hYmxlZCBpbiBvcGVyYTpjb25maWcpXG4gKiAgIC0gU2FmYXJpIDMrIChvbmx5IDQrIHRlc3RlZClcbiAqICAgLSBDaHJvbWUgMSsgKG9ubHkgNSsgdGVzdGVkKVxuICogICAtIEtvbnF1ZXJvciAzLjUrICh1bnRlc3RlZClcbiAqXG4gKiBSZXF1aXJlcyBUcmFjZUtpdC5jb21wdXRlU3RhY2tUcmFjZS5cbiAqXG4gKiBUcmllcyB0byBjYXRjaCBhbGwgdW5oYW5kbGVkIGV4Y2VwdGlvbnMgYW5kIHJlcG9ydCB0aGVtIHRvIHRoZVxuICogc3Vic2NyaWJlZCBoYW5kbGVycy4gUGxlYXNlIG5vdGUgdGhhdCBUcmFjZUtpdC5yZXBvcnQgd2lsbCByZXRocm93IHRoZVxuICogZXhjZXB0aW9uLiBUaGlzIGlzIFJFUVVJUkVEIGluIG9yZGVyIHRvIGdldCBhIHVzZWZ1bCBzdGFjayB0cmFjZSBpbiBJRS5cbiAqIElmIHRoZSBleGNlcHRpb24gZG9lcyBub3QgcmVhY2ggdGhlIHRvcCBvZiB0aGUgYnJvd3NlciwgeW91IHdpbGwgb25seVxuICogZ2V0IGEgc3RhY2sgdHJhY2UgZnJvbSB0aGUgcG9pbnQgd2hlcmUgVHJhY2VLaXQucmVwb3J0IHdhcyBjYWxsZWQuXG4gKlxuICogSGFuZGxlcnMgcmVjZWl2ZSBhIHN0YWNrSW5mbyBvYmplY3QgYXMgZGVzY3JpYmVkIGluIHRoZVxuICogVHJhY2VLaXQuY29tcHV0ZVN0YWNrVHJhY2UgZG9jcy5cbiAqL1xuXG5cblRyYWNlS2l0LnJlcG9ydCA9IGZ1bmN0aW9uIHJlcG9ydE1vZHVsZVdyYXBwZXIoKSB7XG4gIHZhciBoYW5kbGVycyA9IFtdLFxuICAgICAgbGFzdEFyZ3MgPSBudWxsLFxuICAgICAgbGFzdEV4Y2VwdGlvbiA9IG51bGwsXG4gICAgICBsYXN0RXhjZXB0aW9uU3RhY2sgPSBudWxsO1xuICAvKipcbiAgICogQWRkIGEgY3Jhc2ggaGFuZGxlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUoaGFuZGxlcikge1xuICAgIGluc3RhbGxHbG9iYWxIYW5kbGVyKCk7XG4gICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGEgY3Jhc2ggaGFuZGxlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGhhbmRsZXIpIHtcbiAgICBmb3IgKHZhciBpID0gaGFuZGxlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGlmIChoYW5kbGVyc1tpXSA9PT0gaGFuZGxlcikge1xuICAgICAgICBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNyYXNoIGhhbmRsZXJzLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHVuc3Vic2NyaWJlQWxsKCkge1xuICAgIHVuaW5zdGFsbEdsb2JhbEhhbmRsZXIoKTtcbiAgICBoYW5kbGVycyA9IFtdO1xuICB9XG4gIC8qKlxuICAgKiBEaXNwYXRjaCBzdGFjayBpbmZvcm1hdGlvbiB0byBhbGwgaGFuZGxlcnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsICo+fSBzdGFja1xuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG5vdGlmeUhhbmRsZXJzKHN0YWNrLCBpc1dpbmRvd0Vycm9yKSB7XG4gICAgdmFyIGV4Y2VwdGlvbiA9IG51bGw7XG5cbiAgICBpZiAoaXNXaW5kb3dFcnJvciAmJiAhVHJhY2VLaXQuY29sbGVjdFdpbmRvd0Vycm9ycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgaW4gaGFuZGxlcnMpIHtcbiAgICAgIGlmIChoYW5kbGVycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGhhbmRsZXJzW2ldLmFwcGx5KG51bGwsIFtzdGFja10uY29uY2F0KF9zbGljZS5jYWxsKGFyZ3VtZW50cywgMikpKTtcbiAgICAgICAgfSBjYXRjaCAoaW5uZXIpIHtcbiAgICAgICAgICBleGNlcHRpb24gPSBpbm5lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChleGNlcHRpb24pIHtcbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG4gIH1cblxuICB2YXIgX29sZE9uZXJyb3JIYW5kbGVyLCBfb25FcnJvckhhbmRsZXJJbnN0YWxsZWQ7XG4gIC8qKlxuICAgKiBFbnN1cmVzIGFsbCBnbG9iYWwgdW5oYW5kbGVkIGV4Y2VwdGlvbnMgYXJlIHJlY29yZGVkLlxuICAgKiBTdXBwb3J0ZWQgYnkgR2Vja28gYW5kIElFLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBFcnJvciBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCBvZiBzY3JpcHQgdGhhdCBnZW5lcmF0ZWQgdGhlIGV4Y2VwdGlvbi5cbiAgICogQHBhcmFtIHsobnVtYmVyfHN0cmluZyl9IGxpbmVObyBUaGUgbGluZSBudW1iZXIgYXQgd2hpY2ggdGhlIGVycm9yXG4gICAqIG9jY3VycmVkLlxuICAgKiBAcGFyYW0gez8obnVtYmVyfHN0cmluZyl9IGNvbE5vIFRoZSBjb2x1bW4gbnVtYmVyIGF0IHdoaWNoIHRoZSBlcnJvclxuICAgKiBvY2N1cnJlZC5cbiAgICogQHBhcmFtIHs/RXJyb3J9IGV4IFRoZSBhY3R1YWwgRXJyb3Igb2JqZWN0LlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHRyYWNlS2l0V2luZG93T25FcnJvcihtZXNzYWdlLCB1cmwsIGxpbmVObywgY29sTm8sIGV4KSB7XG4gICAgdmFyIHN0YWNrID0gbnVsbDtcblxuICAgIGlmIChsYXN0RXhjZXB0aW9uU3RhY2spIHtcbiAgICAgIFRyYWNlS2l0LmNvbXB1dGVTdGFja1RyYWNlLmF1Z21lbnRTdGFja1RyYWNlV2l0aEluaXRpYWxFbGVtZW50KGxhc3RFeGNlcHRpb25TdGFjaywgdXJsLCBsaW5lTm8sIG1lc3NhZ2UpO1xuICAgICAgcHJvY2Vzc0xhc3RFeGNlcHRpb24oKTtcbiAgICB9IGVsc2UgaWYgKGV4KSB7XG4gICAgICAvLyBOZXcgY2hyb21lIGFuZCBibGluayBzZW5kIGFsb25nIGEgcmVhbCBlcnJvciBvYmplY3RcbiAgICAgIC8vIExldCdzIGp1c3QgcmVwb3J0IHRoYXQgbGlrZSBhIG5vcm1hbCBlcnJvci5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9taWtld2VzdC5vcmcvMjAxMy8wOC9kZWJ1Z2dpbmctcnVudGltZS1lcnJvcnMtd2l0aC13aW5kb3ctb25lcnJvclxuICAgICAgc3RhY2sgPSBUcmFjZUtpdC5jb21wdXRlU3RhY2tUcmFjZShleCk7XG4gICAgICBub3RpZnlIYW5kbGVycyhzdGFjaywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsb2NhdGlvbiA9IHtcbiAgICAgICAgJ3VybCc6IHVybCxcbiAgICAgICAgJ2xpbmUnOiBsaW5lTm8sXG4gICAgICAgICdjb2x1bW4nOiBjb2xOb1xuICAgICAgfTtcbiAgICAgIHZhciBuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdmFyIG1zZyA9IG1lc3NhZ2U7IC8vIG11c3QgYmUgbmV3IHZhciBvciB3aWxsIG1vZGlmeSBvcmlnaW5hbCBgYXJndW1lbnRzYFxuXG4gICAgICB2YXIgZ3JvdXBzO1xuXG4gICAgICBpZiAoe30udG9TdHJpbmcuY2FsbChtZXNzYWdlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICAgICAgdmFyIGdyb3VwcyA9IG1lc3NhZ2UubWF0Y2goRVJST1JfVFlQRVNfUkUpO1xuXG4gICAgICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgICBuYW1lID0gZ3JvdXBzWzFdO1xuICAgICAgICAgIG1zZyA9IGdyb3Vwc1syXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsb2NhdGlvbi5mdW5jID0gVU5LTk9XTl9GVU5DVElPTjtcbiAgICAgIHN0YWNrID0ge1xuICAgICAgICAnbmFtZSc6IG5hbWUsXG4gICAgICAgICdtZXNzYWdlJzogbXNnLFxuICAgICAgICAndXJsJzogZ2V0TG9jYXRpb25IcmVmKCksXG4gICAgICAgICdzdGFjayc6IFtsb2NhdGlvbl1cbiAgICAgIH07XG4gICAgICBub3RpZnlIYW5kbGVycyhzdGFjaywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKF9vbGRPbmVycm9ySGFuZGxlcikge1xuICAgICAgcmV0dXJuIF9vbGRPbmVycm9ySGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc3RhbGxHbG9iYWxIYW5kbGVyKCkge1xuICAgIGlmIChfb25FcnJvckhhbmRsZXJJbnN0YWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfb2xkT25lcnJvckhhbmRsZXIgPSBfd2luZG93Lm9uZXJyb3I7XG4gICAgX3dpbmRvdy5vbmVycm9yID0gdHJhY2VLaXRXaW5kb3dPbkVycm9yO1xuICAgIF9vbkVycm9ySGFuZGxlckluc3RhbGxlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiB1bmluc3RhbGxHbG9iYWxIYW5kbGVyKCkge1xuICAgIGlmICghX29uRXJyb3JIYW5kbGVySW5zdGFsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX3dpbmRvdy5vbmVycm9yID0gX29sZE9uZXJyb3JIYW5kbGVyO1xuICAgIF9vbkVycm9ySGFuZGxlckluc3RhbGxlZCA9IGZhbHNlO1xuICAgIF9vbGRPbmVycm9ySGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NMYXN0RXhjZXB0aW9uKCkge1xuICAgIHZhciBfbGFzdEV4Y2VwdGlvblN0YWNrID0gbGFzdEV4Y2VwdGlvblN0YWNrLFxuICAgICAgICBfbGFzdEFyZ3MgPSBsYXN0QXJncztcbiAgICBsYXN0QXJncyA9IG51bGw7XG4gICAgbGFzdEV4Y2VwdGlvblN0YWNrID0gbnVsbDtcbiAgICBsYXN0RXhjZXB0aW9uID0gbnVsbDtcbiAgICBub3RpZnlIYW5kbGVycy5hcHBseShudWxsLCBbX2xhc3RFeGNlcHRpb25TdGFjaywgZmFsc2VdLmNvbmNhdChfbGFzdEFyZ3MpKTtcbiAgfVxuICAvKipcbiAgICogUmVwb3J0cyBhbiB1bmhhbmRsZWQgRXJyb3IgdG8gVHJhY2VLaXQuXG4gICAqIEBwYXJhbSB7RXJyb3J9IGV4XG4gICAqIEBwYXJhbSB7P2Jvb2xlYW59IHJldGhyb3cgSWYgZmFsc2UsIGRvIG5vdCByZS10aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgKiBPbmx5IHVzZWQgZm9yIHdpbmRvdy5vbmVycm9yIHRvIG5vdCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wIG9mXG4gICAqIHJldGhyb3dpbmcuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVwb3J0KGV4LCByZXRocm93KSB7XG4gICAgdmFyIGFyZ3MgPSBfc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgaWYgKGxhc3RFeGNlcHRpb25TdGFjaykge1xuICAgICAgaWYgKGxhc3RFeGNlcHRpb24gPT09IGV4KSB7XG4gICAgICAgIHJldHVybjsgLy8gYWxyZWFkeSBjYXVnaHQgYnkgYW4gaW5uZXIgY2F0Y2ggYmxvY2ssIGlnbm9yZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzc0xhc3RFeGNlcHRpb24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc3RhY2sgPSBUcmFjZUtpdC5jb21wdXRlU3RhY2tUcmFjZShleCk7XG4gICAgbGFzdEV4Y2VwdGlvblN0YWNrID0gc3RhY2s7XG4gICAgbGFzdEV4Y2VwdGlvbiA9IGV4O1xuICAgIGxhc3RBcmdzID0gYXJnczsgLy8gSWYgdGhlIHN0YWNrIHRyYWNlIGlzIGluY29tcGxldGUsIHdhaXQgZm9yIDIgc2Vjb25kcyBmb3JcbiAgICAvLyBzbG93IHNsb3cgSUUgdG8gc2VlIGlmIG9uZXJyb3Igb2NjdXJzIG9yIG5vdCBiZWZvcmUgcmVwb3J0aW5nXG4gICAgLy8gdGhpcyBleGNlcHRpb247IG90aGVyd2lzZSwgd2Ugd2lsbCBlbmQgdXAgd2l0aCBhbiBpbmNvbXBsZXRlXG4gICAgLy8gc3RhY2sgdHJhY2VcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGxhc3RFeGNlcHRpb24gPT09IGV4KSB7XG4gICAgICAgIHByb2Nlc3NMYXN0RXhjZXB0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgc3RhY2suaW5jb21wbGV0ZSA/IDIwMDAgOiAwKTtcblxuICAgIGlmIChyZXRocm93ICE9PSBmYWxzZSkge1xuICAgICAgdGhyb3cgZXg7IC8vIHJlLXRocm93IHRvIHByb3BhZ2F0ZSB0byB0aGUgdG9wIGxldmVsIChhbmQgY2F1c2Ugd2luZG93Lm9uZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgcmVwb3J0LnN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgcmVwb3J0LnVuc3Vic2NyaWJlID0gdW5zdWJzY3JpYmU7XG4gIHJlcG9ydC51bmluc3RhbGwgPSB1bnN1YnNjcmliZUFsbDtcbiAgcmV0dXJuIHJlcG9ydDtcbn0oKTtcbi8qKlxuICogVHJhY2VLaXQuY29tcHV0ZVN0YWNrVHJhY2U6IGNyb3NzLWJyb3dzZXIgc3RhY2sgdHJhY2VzIGluIEphdmFTY3JpcHRcbiAqXG4gKiBTeW50YXg6XG4gKiAgIHMgPSBUcmFjZUtpdC5jb21wdXRlU3RhY2tUcmFjZShleGNlcHRpb24pIC8vIGNvbnNpZGVyIHVzaW5nIFRyYWNlS2l0LnJlcG9ydCBpbnN0ZWFkIChzZWUgYmVsb3cpXG4gKiBSZXR1cm5zOlxuICogICBzLm5hbWUgICAgICAgICAgICAgIC0gZXhjZXB0aW9uIG5hbWVcbiAqICAgcy5tZXNzYWdlICAgICAgICAgICAtIGV4Y2VwdGlvbiBtZXNzYWdlXG4gKiAgIHMuc3RhY2tbaV0udXJsICAgICAgLSBKYXZhU2NyaXB0IG9yIEhUTUwgZmlsZSBVUkxcbiAqICAgcy5zdGFja1tpXS5mdW5jICAgICAtIGZ1bmN0aW9uIG5hbWUsIG9yIGVtcHR5IGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIChpZiBndWVzc2luZyBkaWQgbm90IHdvcmspXG4gKiAgIHMuc3RhY2tbaV0uYXJncyAgICAgLSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiwgaWYga25vd25cbiAqICAgcy5zdGFja1tpXS5saW5lICAgICAtIGxpbmUgbnVtYmVyLCBpZiBrbm93blxuICogICBzLnN0YWNrW2ldLmNvbHVtbiAgIC0gY29sdW1uIG51bWJlciwgaWYga25vd25cbiAqXG4gKiBTdXBwb3J0czpcbiAqICAgLSBGaXJlZm94OiAgZnVsbCBzdGFjayB0cmFjZSB3aXRoIGxpbmUgbnVtYmVycyBhbmQgdW5yZWxpYWJsZSBjb2x1bW5cbiAqICAgICAgICAgICAgICAgbnVtYmVyIG9uIHRvcCBmcmFtZVxuICogICAtIE9wZXJhIDEwOiBmdWxsIHN0YWNrIHRyYWNlIHdpdGggbGluZSBhbmQgY29sdW1uIG51bWJlcnNcbiAqICAgLSBPcGVyYSA5LTogZnVsbCBzdGFjayB0cmFjZSB3aXRoIGxpbmUgbnVtYmVyc1xuICogICAtIENocm9tZTogICBmdWxsIHN0YWNrIHRyYWNlIHdpdGggbGluZSBhbmQgY29sdW1uIG51bWJlcnNcbiAqICAgLSBTYWZhcmk6ICAgbGluZSBhbmQgY29sdW1uIG51bWJlciBmb3IgdGhlIHRvcG1vc3Qgc3RhY2t0cmFjZSBlbGVtZW50XG4gKiAgICAgICAgICAgICAgIG9ubHlcbiAqICAgLSBJRTogICAgICAgbm8gbGluZSBudW1iZXJzIHdoYXRzb2V2ZXJcbiAqXG4gKiBUcmllcyB0byBndWVzcyBuYW1lcyBvZiBhbm9ueW1vdXMgZnVuY3Rpb25zIGJ5IGxvb2tpbmcgZm9yIGFzc2lnbm1lbnRzXG4gKiBpbiB0aGUgc291cmNlIGNvZGUuIEluIElFIGFuZCBTYWZhcmksIHdlIGhhdmUgdG8gZ3Vlc3Mgc291cmNlIGZpbGUgbmFtZXNcbiAqIGJ5IHNlYXJjaGluZyBmb3IgZnVuY3Rpb24gYm9kaWVzIGluc2lkZSBhbGwgcGFnZSBzY3JpcHRzLiBUaGlzIHdpbGwgbm90XG4gKiB3b3JrIGZvciBzY3JpcHRzIHRoYXQgYXJlIGxvYWRlZCBjcm9zcy1kb21haW4uXG4gKiBIZXJlIGJlIGRyYWdvbnM6IHNvbWUgZnVuY3Rpb24gbmFtZXMgbWF5IGJlIGd1ZXNzZWQgaW5jb3JyZWN0bHksIGFuZFxuICogZHVwbGljYXRlIGZ1bmN0aW9ucyBtYXkgYmUgbWlzbWF0Y2hlZC5cbiAqXG4gKiBUcmFjZUtpdC5jb21wdXRlU3RhY2tUcmFjZSBzaG91bGQgb25seSBiZSB1c2VkIGZvciB0cmFjaW5nIHB1cnBvc2VzLlxuICogTG9nZ2luZyBvZiB1bmhhbmRsZWQgZXhjZXB0aW9ucyBzaG91bGQgYmUgZG9uZSB3aXRoIFRyYWNlS2l0LnJlcG9ydCxcbiAqIHdoaWNoIGJ1aWxkcyBvbiB0b3Agb2YgVHJhY2VLaXQuY29tcHV0ZVN0YWNrVHJhY2UgYW5kIHByb3ZpZGVzIGJldHRlclxuICogSUUgc3VwcG9ydCBieSB1dGlsaXppbmcgdGhlIHdpbmRvdy5vbmVycm9yIGV2ZW50IHRvIHJldHJpZXZlIGluZm9ybWF0aW9uXG4gKiBhYm91dCB0aGUgdG9wIG9mIHRoZSBzdGFjay5cbiAqXG4gKiBOb3RlOiBJbiBJRSBhbmQgU2FmYXJpLCBubyBzdGFjayB0cmFjZSBpcyByZWNvcmRlZCBvbiB0aGUgRXJyb3Igb2JqZWN0LFxuICogc28gY29tcHV0ZVN0YWNrVHJhY2UgaW5zdGVhZCB3YWxrcyBpdHMgKm93biogY2hhaW4gb2YgY2FsbGVycy5cbiAqIFRoaXMgbWVhbnMgdGhhdDpcbiAqICAqIGluIFNhZmFyaSwgc29tZSBtZXRob2RzIG1heSBiZSBtaXNzaW5nIGZyb20gdGhlIHN0YWNrIHRyYWNlO1xuICogICogaW4gSUUsIHRoZSB0b3Btb3N0IGZ1bmN0aW9uIGluIHRoZSBzdGFjayB0cmFjZSB3aWxsIGFsd2F5cyBiZSB0aGVcbiAqICAgIGNhbGxlciBvZiBjb21wdXRlU3RhY2tUcmFjZS5cbiAqXG4gKiBUaGlzIGlzIG9rYXkgZm9yIHRyYWNpbmcgKGJlY2F1c2UgeW91IGFyZSBsaWtlbHkgdG8gYmUgY2FsbGluZ1xuICogY29tcHV0ZVN0YWNrVHJhY2UgZnJvbSB0aGUgZnVuY3Rpb24geW91IHdhbnQgdG8gYmUgdGhlIHRvcG1vc3QgZWxlbWVudFxuICogb2YgdGhlIHN0YWNrIHRyYWNlIGFueXdheSksIGJ1dCBub3Qgb2theSBmb3IgbG9nZ2luZyB1bmhhbmRsZWRcbiAqIGV4Y2VwdGlvbnMgKGJlY2F1c2UgeW91ciBjYXRjaCBibG9jayB3aWxsIGxpa2VseSBiZSBmYXIgYXdheSBmcm9tIHRoZVxuICogaW5uZXIgZnVuY3Rpb24gdGhhdCBhY3R1YWxseSBjYXVzZWQgdGhlIGV4Y2VwdGlvbikuXG4gKlxuICovXG5cblxuVHJhY2VLaXQuY29tcHV0ZVN0YWNrVHJhY2UgPSBmdW5jdGlvbiBjb21wdXRlU3RhY2tUcmFjZVdyYXBwZXIoKSB7XG4gIC8qKlxuICAgKiBFc2NhcGVzIHNwZWNpYWwgY2hhcmFjdGVycywgZXhjZXB0IGZvciB3aGl0ZXNwYWNlLCBpbiBhIHN0cmluZyB0byBiZVxuICAgKiB1c2VkIGluc2lkZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBhcyBhIHN0cmluZyBsaXRlcmFsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgc3RyaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBlc2NhcGVkIHN0cmluZyBsaXRlcmFsLlxuICAgKi9cbiAgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHRleHQpIHtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I10vZywgJ1xcXFwkJicpO1xuICB9XG4gIC8qKlxuICAgKiBFc2NhcGVzIHNwZWNpYWwgY2hhcmFjdGVycyBpbiBhIHN0cmluZyB0byBiZSB1c2VkIGluc2lkZSBhIHJlZ3VsYXJcbiAgICogZXhwcmVzc2lvbiBhcyBhIHN0cmluZyBsaXRlcmFsLiBBbHNvIGVuc3VyZXMgdGhhdCBIVE1MIGVudGl0aWVzIHdpbGxcbiAgICogYmUgbWF0Y2hlZCB0aGUgc2FtZSBhcyB0aGVpciBsaXRlcmFsIGZyaWVuZHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBib2R5IFRoZSBzdHJpbmcuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGVzY2FwZWQgc3RyaW5nLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGVzY2FwZUNvZGVBc1JlZ0V4cEZvck1hdGNoaW5nSW5zaWRlSFRNTChib2R5KSB7XG4gICAgcmV0dXJuIGVzY2FwZVJlZ0V4cChib2R5KS5yZXBsYWNlKCc8JywgJyg/Ojx8Jmx0OyknKS5yZXBsYWNlKCc+JywgJyg/Oj58Jmd0OyknKS5yZXBsYWNlKCcmJywgJyg/OiZ8JmFtcDspJykucmVwbGFjZSgnXCInLCAnKD86XCJ8JnF1b3Q7KScpLnJlcGxhY2UoL1xccysvZywgJ1xcXFxzKycpO1xuICB9IC8vIENvbnRlbnRzIG9mIEV4Y2VwdGlvbiBpbiB2YXJpb3VzIGJyb3dzZXJzLlxuICAvL1xuICAvLyBTQUZBUkk6XG4gIC8vIGV4Lm1lc3NhZ2UgPSBDYW4ndCBmaW5kIHZhcmlhYmxlOiBxcVxuICAvLyBleC5saW5lID0gNTlcbiAgLy8gZXguc291cmNlSWQgPSA1ODAyMzgxOTJcbiAgLy8gZXguc291cmNlVVJMID0gaHR0cDovLy4uLlxuICAvLyBleC5leHByZXNzaW9uQmVnaW5PZmZzZXQgPSA5NlxuICAvLyBleC5leHByZXNzaW9uQ2FyZXRPZmZzZXQgPSA5OFxuICAvLyBleC5leHByZXNzaW9uRW5kT2Zmc2V0ID0gOThcbiAgLy8gZXgubmFtZSA9IFJlZmVyZW5jZUVycm9yXG4gIC8vXG4gIC8vIEZJUkVGT1g6XG4gIC8vIGV4Lm1lc3NhZ2UgPSBxcSBpcyBub3QgZGVmaW5lZFxuICAvLyBleC5maWxlTmFtZSA9IGh0dHA6Ly8uLi5cbiAgLy8gZXgubGluZU51bWJlciA9IDU5XG4gIC8vIGV4LmNvbHVtbk51bWJlciA9IDY5XG4gIC8vIGV4LnN0YWNrID0gLi4uc3RhY2sgdHJhY2UuLi4gKHNlZSB0aGUgZXhhbXBsZSBiZWxvdylcbiAgLy8gZXgubmFtZSA9IFJlZmVyZW5jZUVycm9yXG4gIC8vXG4gIC8vIENIUk9NRTpcbiAgLy8gZXgubWVzc2FnZSA9IHFxIGlzIG5vdCBkZWZpbmVkXG4gIC8vIGV4Lm5hbWUgPSBSZWZlcmVuY2VFcnJvclxuICAvLyBleC50eXBlID0gbm90X2RlZmluZWRcbiAgLy8gZXguYXJndW1lbnRzID0gWydhYSddXG4gIC8vIGV4LnN0YWNrID0gLi4uc3RhY2sgdHJhY2UuLi5cbiAgLy9cbiAgLy8gSU5URVJORVQgRVhQTE9SRVI6XG4gIC8vIGV4Lm1lc3NhZ2UgPSAuLi5cbiAgLy8gZXgubmFtZSA9IFJlZmVyZW5jZUVycm9yXG4gIC8vXG4gIC8vIE9QRVJBOlxuICAvLyBleC5tZXNzYWdlID0gLi4ubWVzc2FnZS4uLiAoc2VlIHRoZSBleGFtcGxlIGJlbG93KVxuICAvLyBleC5uYW1lID0gUmVmZXJlbmNlRXJyb3JcbiAgLy8gZXgub3BlcmEjc291cmNlbG9jID0gMTEgIChwcmV0dHkgbXVjaCB1c2VsZXNzLCBkdXBsaWNhdGVzIHRoZSBpbmZvIGluIGV4Lm1lc3NhZ2UpXG4gIC8vIGV4LnN0YWNrdHJhY2UgPSBuL2E7IHNlZSAnb3BlcmE6Y29uZmlnI1VzZXJQcmVmc3xFeGNlcHRpb25zIEhhdmUgU3RhY2t0cmFjZSdcblxuICAvKipcbiAgICogQ29tcHV0ZXMgc3RhY2sgdHJhY2UgaW5mb3JtYXRpb24gZnJvbSB0aGUgc3RhY2sgcHJvcGVydHkuXG4gICAqIENocm9tZSBhbmQgR2Vja28gdXNlIHRoaXMgcHJvcGVydHkuXG4gICAqIEBwYXJhbSB7RXJyb3J9IGV4XG4gICAqIEByZXR1cm4gez9PYmplY3QuPHN0cmluZywgKj59IFN0YWNrIHRyYWNlIGluZm9ybWF0aW9uLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVTdGFja1RyYWNlRnJvbVN0YWNrUHJvcChleCkge1xuICAgIGlmICh0eXBlb2YgZXguc3RhY2sgPT09ICd1bmRlZmluZWQnIHx8ICFleC5zdGFjaykgcmV0dXJuO1xuICAgIHZhciBjaHJvbWUgPSAvXlxccyphdCAoLio/KSA/XFwoKCg/OmZpbGV8aHR0cHM/fGJsb2J8Y2hyb21lLWV4dGVuc2lvbnxuYXRpdmV8ZXZhbHw8YW5vbnltb3VzPikuKj8pKD86OihcXGQrKSk/KD86OihcXGQrKSk/XFwpP1xccyokL2ksXG4gICAgICAgIGdlY2tvID0gL15cXHMqKC4qPykoPzpcXCgoLio/KVxcKSk/KD86XnxAKSgoPzpmaWxlfGh0dHBzP3xibG9ifGNocm9tZXxyZXNvdXJjZXxcXFtuYXRpdmUpLio/KSg/OjooXFxkKykpPyg/OjooXFxkKykpP1xccyokL2ksXG4gICAgICAgIHdpbmpzID0gL15cXHMqYXQgKD86KCg/OlxcW29iamVjdCBvYmplY3RcXF0pPy4rKSApP1xcKD8oKD86ZmlsZXxtcy1hcHB4fGh0dHBzP3xibG9iKTouKj8pOihcXGQrKSg/OjooXFxkKykpP1xcKT9cXHMqJC9pLFxuICAgICAgICBsaW5lcyA9IGV4LnN0YWNrLnNwbGl0KCdcXG4nKSxcbiAgICAgICAgc3RhY2sgPSBbXSxcbiAgICAgICAgcGFydHMsXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHJlZmVyZW5jZSA9IC9eKC4qKSBpcyB1bmRlZmluZWQkLy5leGVjKGV4Lm1lc3NhZ2UpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSBsaW5lcy5sZW5ndGg7IGkgPCBqOyArK2kpIHtcbiAgICAgIGlmIChwYXJ0cyA9IGNocm9tZS5leGVjKGxpbmVzW2ldKSkge1xuICAgICAgICB2YXIgaXNOYXRpdmUgPSBwYXJ0c1syXSAmJiBwYXJ0c1syXS5pbmRleE9mKCduYXRpdmUnKSAhPT0gLTE7XG4gICAgICAgIGVsZW1lbnQgPSB7XG4gICAgICAgICAgJ3VybCc6ICFpc05hdGl2ZSA/IHBhcnRzWzJdIDogbnVsbCxcbiAgICAgICAgICAnZnVuYyc6IHBhcnRzWzFdIHx8IFVOS05PV05fRlVOQ1RJT04sXG4gICAgICAgICAgJ2FyZ3MnOiBpc05hdGl2ZSA/IFtwYXJ0c1syXV0gOiBbXSxcbiAgICAgICAgICAnbGluZSc6IHBhcnRzWzNdID8gK3BhcnRzWzNdIDogbnVsbCxcbiAgICAgICAgICAnY29sdW1uJzogcGFydHNbNF0gPyArcGFydHNbNF0gOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHBhcnRzID0gd2luanMuZXhlYyhsaW5lc1tpXSkpIHtcbiAgICAgICAgZWxlbWVudCA9IHtcbiAgICAgICAgICAndXJsJzogcGFydHNbMl0sXG4gICAgICAgICAgJ2Z1bmMnOiBwYXJ0c1sxXSB8fCBVTktOT1dOX0ZVTkNUSU9OLFxuICAgICAgICAgICdhcmdzJzogW10sXG4gICAgICAgICAgJ2xpbmUnOiArcGFydHNbM10sXG4gICAgICAgICAgJ2NvbHVtbic6IHBhcnRzWzRdID8gK3BhcnRzWzRdIDogbnVsbFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChwYXJ0cyA9IGdlY2tvLmV4ZWMobGluZXNbaV0pKSB7XG4gICAgICAgIGVsZW1lbnQgPSB7XG4gICAgICAgICAgJ3VybCc6IHBhcnRzWzNdLFxuICAgICAgICAgICdmdW5jJzogcGFydHNbMV0gfHwgVU5LTk9XTl9GVU5DVElPTixcbiAgICAgICAgICAnYXJncyc6IHBhcnRzWzJdID8gcGFydHNbMl0uc3BsaXQoJywnKSA6IFtdLFxuICAgICAgICAgICdsaW5lJzogcGFydHNbNF0gPyArcGFydHNbNF0gOiBudWxsLFxuICAgICAgICAgICdjb2x1bW4nOiBwYXJ0c1s1XSA/ICtwYXJ0c1s1XSA6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVsZW1lbnQuZnVuYyAmJiBlbGVtZW50LmxpbmUpIHtcbiAgICAgICAgZWxlbWVudC5mdW5jID0gVU5LTk9XTl9GVU5DVElPTjtcbiAgICAgIH1cblxuICAgICAgc3RhY2sucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YWNrLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFzdGFja1swXS5jb2x1bW4gJiYgdHlwZW9mIGV4LmNvbHVtbk51bWJlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIEZpcmVGb3ggdXNlcyB0aGlzIGF3ZXNvbWUgY29sdW1uTnVtYmVyIHByb3BlcnR5IGZvciBpdHMgdG9wIGZyYW1lXG4gICAgICAvLyBBbHNvIG5vdGUsIEZpcmVmb3gncyBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQgYW5kIGV2ZXJ5dGhpbmcgZWxzZSBleHBlY3RzIDEtYmFzZWQsXG4gICAgICAvLyBzbyBhZGRpbmcgMVxuICAgICAgc3RhY2tbMF0uY29sdW1uID0gZXguY29sdW1uTnVtYmVyICsgMTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ25hbWUnOiBleC5uYW1lLFxuICAgICAgJ21lc3NhZ2UnOiBleC5tZXNzYWdlLFxuICAgICAgJ3VybCc6IGdldExvY2F0aW9uSHJlZigpLFxuICAgICAgJ3N0YWNrJzogc3RhY2tcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBmaXJzdCBmcmFtZSB0byBpbmNvbXBsZXRlIHN0YWNrIHRyYWNlcy5cbiAgICogU2FmYXJpIGFuZCBJRSByZXF1aXJlIHRoaXMgdG8gZ2V0IGNvbXBsZXRlIGRhdGEgb24gdGhlIGZpcnN0IGZyYW1lLlxuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCAqPn0gc3RhY2tJbmZvIFN0YWNrIHRyYWNlIGluZm9ybWF0aW9uIGZyb21cbiAgICogb25lIG9mIHRoZSBjb21wdXRlKiBtZXRob2RzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgb2YgdGhlIHNjcmlwdCB0aGF0IGNhdXNlZCBhbiBlcnJvci5cbiAgICogQHBhcmFtIHsobnVtYmVyfHN0cmluZyl9IGxpbmVObyBUaGUgbGluZSBudW1iZXIgb2YgdGhlIHNjcmlwdCB0aGF0XG4gICAqIGNhdXNlZCBhbiBlcnJvci5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBlcnJvciBnZW5lcmF0ZWQgYnkgdGhlIGJyb3dzZXIsIHdoaWNoXG4gICAqIGhvcGVmdWxseSBjb250YWlucyB0aGUgbmFtZSBvZiB0aGUgb2JqZWN0IHRoYXQgY2F1c2VkIHRoZSBlcnJvci5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIHN0YWNrIGluZm9ybWF0aW9uIHdhc1xuICAgKiBhdWdtZW50ZWQuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gYXVnbWVudFN0YWNrVHJhY2VXaXRoSW5pdGlhbEVsZW1lbnQoc3RhY2tJbmZvLCB1cmwsIGxpbmVObywgbWVzc2FnZSkge1xuICAgIHZhciBpbml0aWFsID0ge1xuICAgICAgJ3VybCc6IHVybCxcbiAgICAgICdsaW5lJzogbGluZU5vXG4gICAgfTtcblxuICAgIGlmIChpbml0aWFsLnVybCAmJiBpbml0aWFsLmxpbmUpIHtcbiAgICAgIHN0YWNrSW5mby5pbmNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAgIGlmICghaW5pdGlhbC5mdW5jKSB7XG4gICAgICAgIGluaXRpYWwuZnVuYyA9IFVOS05PV05fRlVOQ1RJT047XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFja0luZm8uc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoc3RhY2tJbmZvLnN0YWNrWzBdLnVybCA9PT0gaW5pdGlhbC51cmwpIHtcbiAgICAgICAgICBpZiAoc3RhY2tJbmZvLnN0YWNrWzBdLmxpbmUgPT09IGluaXRpYWwubGluZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBhbHJlYWR5IGluIHN0YWNrIHRyYWNlXG4gICAgICAgICAgfSBlbHNlIGlmICghc3RhY2tJbmZvLnN0YWNrWzBdLmxpbmUgJiYgc3RhY2tJbmZvLnN0YWNrWzBdLmZ1bmMgPT09IGluaXRpYWwuZnVuYykge1xuICAgICAgICAgICAgc3RhY2tJbmZvLnN0YWNrWzBdLmxpbmUgPSBpbml0aWFsLmxpbmU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0YWNrSW5mby5zdGFjay51bnNoaWZ0KGluaXRpYWwpO1xuICAgICAgc3RhY2tJbmZvLnBhcnRpYWwgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrSW5mby5pbmNvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIENvbXB1dGVzIHN0YWNrIHRyYWNlIGluZm9ybWF0aW9uIGJ5IHdhbGtpbmcgdGhlIGFyZ3VtZW50cy5jYWxsZXJcbiAgICogY2hhaW4gYXQgdGhlIHRpbWUgdGhlIGV4Y2VwdGlvbiBvY2N1cnJlZC4gVGhpcyB3aWxsIGNhdXNlIGVhcmxpZXJcbiAgICogZnJhbWVzIHRvIGJlIG1pc3NlZCBidXQgaXMgdGhlIG9ubHkgd2F5IHRvIGdldCBhbnkgc3RhY2sgdHJhY2UgaW5cbiAgICogU2FmYXJpIGFuZCBJRS4gVGhlIHRvcCBmcmFtZSBpcyByZXN0b3JlZCBieVxuICAgKiB7QGxpbmsgYXVnbWVudFN0YWNrVHJhY2VXaXRoSW5pdGlhbEVsZW1lbnR9LlxuICAgKiBAcGFyYW0ge0Vycm9yfSBleFxuICAgKiBAcmV0dXJuIHs/T2JqZWN0LjxzdHJpbmcsICo+fSBTdGFjayB0cmFjZSBpbmZvcm1hdGlvbi5cbiAgICovXG5cblxuICBmdW5jdGlvbiBjb21wdXRlU3RhY2tUcmFjZUJ5V2Fsa2luZ0NhbGxlckNoYWluKGV4LCBkZXB0aCkge1xuICAgIHZhciBmdW5jdGlvbk5hbWUgPSAvZnVuY3Rpb25cXHMrKFtfJGEtekEtWlxceEEwLVxcdUZGRkZdW18kYS16QS1aMC05XFx4QTAtXFx1RkZGRl0qKT9cXHMqXFwoL2ksXG4gICAgICAgIHN0YWNrID0gW10sXG4gICAgICAgIGZ1bmNzID0ge30sXG4gICAgICAgIHJlY3Vyc2lvbiA9IGZhbHNlLFxuICAgICAgICBwYXJ0cyxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgc291cmNlO1xuXG4gICAgZm9yICh2YXIgY3VyciA9IGNvbXB1dGVTdGFja1RyYWNlQnlXYWxraW5nQ2FsbGVyQ2hhaW4uY2FsbGVyOyBjdXJyICYmICFyZWN1cnNpb247IGN1cnIgPSBjdXJyLmNhbGxlcikge1xuICAgICAgaWYgKGN1cnIgPT09IGNvbXB1dGVTdGFja1RyYWNlIHx8IGN1cnIgPT09IFRyYWNlS2l0LnJlcG9ydCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2tpcHBpbmcgaW50ZXJuYWwgZnVuY3Rpb24nKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgICd1cmwnOiBudWxsLFxuICAgICAgICAnZnVuYyc6IFVOS05PV05fRlVOQ1RJT04sXG4gICAgICAgICdsaW5lJzogbnVsbCxcbiAgICAgICAgJ2NvbHVtbic6IG51bGxcbiAgICAgIH07XG5cbiAgICAgIGlmIChjdXJyLm5hbWUpIHtcbiAgICAgICAgaXRlbS5mdW5jID0gY3Vyci5uYW1lO1xuICAgICAgfSBlbHNlIGlmIChwYXJ0cyA9IGZ1bmN0aW9uTmFtZS5leGVjKGN1cnIudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgaXRlbS5mdW5jID0gcGFydHNbMV07XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlbS5mdW5jID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGl0ZW0uZnVuYyA9IHBhcnRzLmlucHV0LnN1YnN0cmluZygwLCBwYXJ0cy5pbnB1dC5pbmRleE9mKCd7JykpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuXG4gICAgICBpZiAoZnVuY3NbJycgKyBjdXJyXSkge1xuICAgICAgICByZWN1cnNpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVuY3NbJycgKyBjdXJyXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgaWYgKGRlcHRoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZGVwdGggaXMgJyArIGRlcHRoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGFjayBpcyAnICsgc3RhY2subGVuZ3RoKTtcbiAgICAgIHN0YWNrLnNwbGljZSgwLCBkZXB0aCk7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICduYW1lJzogZXgubmFtZSxcbiAgICAgICdtZXNzYWdlJzogZXgubWVzc2FnZSxcbiAgICAgICd1cmwnOiBnZXRMb2NhdGlvbkhyZWYoKSxcbiAgICAgICdzdGFjayc6IHN0YWNrXG4gICAgfTtcbiAgICBhdWdtZW50U3RhY2tUcmFjZVdpdGhJbml0aWFsRWxlbWVudChyZXN1bHQsIGV4LnNvdXJjZVVSTCB8fCBleC5maWxlTmFtZSwgZXgubGluZSB8fCBleC5saW5lTnVtYmVyLCBleC5tZXNzYWdlIHx8IGV4LmRlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8qKlxuICAgKiBDb21wdXRlcyBhIHN0YWNrIHRyYWNlIGZvciBhbiBleGNlcHRpb24uXG4gICAqIEBwYXJhbSB7RXJyb3J9IGV4XG4gICAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpPX0gZGVwdGhcbiAgICovXG5cblxuICBmdW5jdGlvbiBjb21wdXRlU3RhY2tUcmFjZShleCwgZGVwdGgpIHtcbiAgICB2YXIgc3RhY2sgPSBudWxsO1xuICAgIGRlcHRoID0gZGVwdGggPT0gbnVsbCA/IDAgOiArZGVwdGg7XG5cbiAgICB0cnkge1xuICAgICAgc3RhY2sgPSBjb21wdXRlU3RhY2tUcmFjZUZyb21TdGFja1Byb3AoZXgpO1xuXG4gICAgICBpZiAoc3RhY2spIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChUcmFjZUtpdC5kZWJ1Zykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBzdGFjayA9IGNvbXB1dGVTdGFja1RyYWNlQnlXYWxraW5nQ2FsbGVyQ2hhaW4oZXgsIGRlcHRoICsgMSk7XG5cbiAgICAgIGlmIChzdGFjaykge1xuICAgICAgICByZXR1cm4gc3RhY2s7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKFRyYWNlS2l0LmRlYnVnKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICduYW1lJzogZXgubmFtZSxcbiAgICAgICdtZXNzYWdlJzogZXgubWVzc2FnZSxcbiAgICAgICd1cmwnOiBnZXRMb2NhdGlvbkhyZWYoKVxuICAgIH07XG4gIH1cblxuICBjb21wdXRlU3RhY2tUcmFjZS5hdWdtZW50U3RhY2tUcmFjZVdpdGhJbml0aWFsRWxlbWVudCA9IGF1Z21lbnRTdGFja1RyYWNlV2l0aEluaXRpYWxFbGVtZW50O1xuICBjb21wdXRlU3RhY2tUcmFjZS5jb21wdXRlU3RhY2tUcmFjZUZyb21TdGFja1Byb3AgPSBjb21wdXRlU3RhY2tUcmFjZUZyb21TdGFja1Byb3A7XG4gIHJldHVybiBjb21wdXRlU3RhY2tUcmFjZTtcbn0oKTtcblxudmFyIF9kZWZhdWx0ID0gVHJhY2VLaXQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L3V0aWxzL3NyYy9jb25zdGFudHMvbnBzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvdXRpbHMvc3JjL2NvbnN0YW50cy9ucHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkRFTElHSFRFRF9GRUVEQkFDS19QUkVGSVggPSBleHBvcnRzLkRFTElHSFRFRF9SRVNQT05TRVNfUkVHRVggPSBleHBvcnRzLldPT1RSSUNfUkVTUE9OU0VTX1JFR0VYID0gdm9pZCAwO1xudmFyIFdPT1RSSUNfUkVTUE9OU0VTX1JFR0VYID0gL15odHRwczpcXC9cXC9wcm9kdWN0aW9uLndvb3RyaWMuY29tXFwvcmVzcG9uc2VzLztcbmV4cG9ydHMuV09PVFJJQ19SRVNQT05TRVNfUkVHRVggPSBXT09UUklDX1JFU1BPTlNFU19SRUdFWDtcbnZhciBERUxJR0hURURfUkVTUE9OU0VTX1JFR0VYID0gL15odHRwczpcXC9cXC93ZWIuZGVsaWdodGVkLmNvbVxcL2VcXC9bYS16QS1aLV0qXFwvYy87XG5leHBvcnRzLkRFTElHSFRFRF9SRVNQT05TRVNfUkVHRVggPSBERUxJR0hURURfUkVTUE9OU0VTX1JFR0VYO1xudmFyIERFTElHSFRFRF9GRUVEQkFDS19QUkVGSVggPSAnY29tbWVudD0nO1xuZXhwb3J0cy5ERUxJR0hURURfRkVFREJBQ0tfUFJFRklYID0gREVMSUdIVEVEX0ZFRURCQUNLX1BSRUZJWDtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L3V0aWxzL3NyYy9lbmhhbmNlRnVuYy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGxvZ3JvY2tldC91dGlscy9zcmMvZW5oYW5jZUZ1bmMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZW5oYW5jZUZ1bmM7XG5cbi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogW1wiZXJyb3JcIiwgeyBcInByb3BzXCI6IGZhbHNlIH1dICovXG5mdW5jdGlvbiBlbmhhbmNlRnVuYyhvYmosIG1ldGhvZCwgaGFuZGxlcikge1xuICB2YXIgb3JpZ2luYWwgPSBvYmpbbWV0aG9kXTtcblxuICBmdW5jdGlvbiBzaGltKCkge1xuICAgIHZhciByZXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKG9yaWdpbmFsKSB7XG4gICAgICByZXMgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBvYmpbbWV0aG9kXSA9IHNoaW07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgb2JqW21ldGhvZF0gPSBvcmlnaW5hbDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC91dGlscy9zcmMvbWFwVmFsdWVzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGxvZ3JvY2tldC91dGlscy9zcmMvbWFwVmFsdWVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBtYXBWYWx1ZXM7XG5cbmZ1bmN0aW9uIG1hcFZhbHVlcyhvYmosIGYpIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgdmFyIHJlcyA9IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHJlc1trZXldID0gZihvYmpba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gcmVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AbG9ncm9ja2V0L3V0aWxzL3NyYy9zdGFydHNXaXRoLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvdXRpbHMvc3JjL3N0YXJ0c1dpdGguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzdGFydHNXaXRoO1xuXG5mdW5jdGlvbiBzdGFydHNXaXRoKHZhbHVlLCBzZWFyY2gpIHtcbiAgdmFyIHBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMDtcbiAgcmV0dXJuIHZhbHVlICYmIHNlYXJjaCAmJiB2YWx1ZS5zdWJzdHJpbmcocG9zLCBwb3MgKyBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9sb2dyb2NrZXQvc3JjL0xvZ1JvY2tldC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvbG9ncm9ja2V0L3NyYy9Mb2dSb2NrZXQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLk1BWF9RVUVVRV9TSVpFID0gdm9pZCAwO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanNcIikpO1xuXG52YXIgX25ldHdvcmsgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIEBsb2dyb2NrZXQvbmV0d29yayAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9uZXR3b3JrL3NyYy9pbmRleC5qc1wiKSk7XG5cbnZhciBfZXhjZXB0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBsb2dyb2NrZXQvZXhjZXB0aW9ucyAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9leGNlcHRpb25zL3NyYy9pbmRleC5qc1wiKTtcblxudmFyIF9jb25zb2xlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAbG9ncm9ja2V0L2NvbnNvbGUgKi8gXCIuL3BhY2thZ2VzL0Bsb2dyb2NrZXQvY29uc29sZS9zcmMvaW5kZXguanNcIikpO1xuXG52YXIgX3JlZHV4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGxvZ3JvY2tldC9yZWR1eCAqLyBcIi4vcGFja2FnZXMvQGxvZ3JvY2tldC9yZWR1eC9zcmMvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBNQVhfUVVFVUVfU0laRSA9IDEwMDA7XG5leHBvcnRzLk1BWF9RVUVVRV9TSVpFID0gTUFYX1FVRVVFX1NJWkU7XG5cbnZhciBjb25zaWRlckluZ2VzdFNlcnZlck9wdGlvbiA9IGZ1bmN0aW9uIGNvbnNpZGVySW5nZXN0U2VydmVyT3B0aW9uKCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBpbmdlc3RTZXJ2ZXIgPSBfcmVmLmluZ2VzdFNlcnZlcixcbiAgICAgIG9wdGlvbnMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMi5kZWZhdWx0KShfcmVmLCBbXCJpbmdlc3RTZXJ2ZXJcIl0pO1xuXG4gIGlmIChpbmdlc3RTZXJ2ZXIpIHtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgICBzZXJ2ZXJVUkw6IFwiXCIuY29uY2F0KGluZ2VzdFNlcnZlciwgXCIvaVwiKSxcbiAgICAgIHN0YXRzVVJMOiBcIlwiLmNvbmNhdChpbmdlc3RTZXJ2ZXIsIFwiL3NcIilcbiAgICB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufTtcblxudmFyIExvZ1JvY2tldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExvZ1JvY2tldCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazIuZGVmYXVsdCkodGhpcywgTG9nUm9ja2V0KTtcbiAgICB0aGlzLl9idWZmZXIgPSBbXTtcbiAgICAvLyBUT0RPOiB0ZXN0cyBmb3IgdGhlc2UgZXhwb3NlZCBtZXRob2RzLlxuICAgIFsnbG9nJywgJ2luZm8nLCAnd2FybicsICdlcnJvcicsICdkZWJ1ZyddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgX3RoaXNbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmFkZEV2ZW50KCdsci5jb3JlLkxvZ0V2ZW50JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBjb25zb2xlT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICBpZiAobWV0aG9kID09PSAnZXJyb3InICYmIGNvbnNvbGVPcHRpb25zLnNob3VsZEFnZ3JlZ2F0ZUNvbnNvbGVFcnJvcnMpIHtcbiAgICAgICAgICAgIF9leGNlcHRpb25zLkNhcHR1cmUuY2FwdHVyZU1lc3NhZ2UoX3RoaXMsIGFyZ3NbMF0sIGFyZ3MsIHt9LCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9nTGV2ZWw6IG1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgIH07XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBzaG91bGRDYXB0dXJlU3RhY2tUcmFjZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSk7XG4gICAgdGhpcy5faXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuX2luc3RhbGxlZCA9IFtdOyAvLyBleHBvc2UgYSBjYWxsYmFjayB0byBnZXQgdGhlIHNlc3Npb24gVVJMIGZyb20gdGhlIGdsb2JhbCBjb250ZXh0XG5cbiAgICB3aW5kb3cuX2xyX3N1cmxfY2IgPSB0aGlzLmdldFNlc3Npb25VUkwuYmluZCh0aGlzKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyLmRlZmF1bHQpKExvZ1JvY2tldCwgW3tcbiAgICBrZXk6IFwiYWRkRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnQodHlwZSwgZ2V0TWVzc2FnZSkge1xuICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICB0aGlzLl9ydW4oZnVuY3Rpb24gKGxvZ2dlcikge1xuICAgICAgICBsb2dnZXIuYWRkRXZlbnQodHlwZSwgZ2V0TWVzc2FnZSwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBvcHRzKSwge30sIHtcbiAgICAgICAgICB0aW1lT3ZlcnJpZGU6IHRpbWVcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTG9nZ2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTG9nZ2VyKGxvZ2dlcikge1xuICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xuXG4gICAgICB3aGlsZSAodGhpcy5fYnVmZmVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGYgPSB0aGlzLl9idWZmZXIuc2hpZnQoKTtcblxuICAgICAgICBmKHRoaXMuX2xvZ2dlcik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9ydW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3J1bihmKSB7XG4gICAgICBpZiAodGhpcy5faXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9sb2dnZXIpIHtcbiAgICAgICAgZih0aGlzLl9sb2dnZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuX2J1ZmZlci5sZW5ndGggPj0gTUFYX1FVRVVFX1NJWkUpIHtcbiAgICAgICAgICB0aGlzLl9pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0xvZ1JvY2tldDogc2NyaXB0IGRpZCBub3QgbG9hZC4gQ2hlY2sgdGhhdCB5b3UgaGF2ZSBhIHZhbGlkIG5ldHdvcmsgY29ubmVjdGlvbi4nKTtcbiAgICAgICAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2J1ZmZlci5wdXNoKGYuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChhcHBJRCkge1xuICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICBpZiAoIXRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdmFyIF9vcHRzJHNob3VsZEF1Z21lbnROUCA9IG9wdHMuc2hvdWxkQXVnbWVudE5QUyxcbiAgICAgICAgICAgIHNob3VsZEF1Z21lbnROUFMgPSBfb3B0cyRzaG91bGRBdWdtZW50TlAgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0cyRzaG91bGRBdWdtZW50TlAsXG4gICAgICAgICAgICBfb3B0cyRzaG91bGRQYXJzZVhIUkIgPSBvcHRzLnNob3VsZFBhcnNlWEhSQmxvYixcbiAgICAgICAgICAgIHNob3VsZFBhcnNlWEhSQmxvYiA9IF9vcHRzJHNob3VsZFBhcnNlWEhSQiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0cyRzaG91bGRQYXJzZVhIUkI7XG5cbiAgICAgICAgdGhpcy5faW5zdGFsbGVkLnB1c2goKDAsIF9leGNlcHRpb25zLnJlZ2lzdGVyRXhjZXB0aW9ucykodGhpcykpO1xuXG4gICAgICAgIHRoaXMuX2luc3RhbGxlZC5wdXNoKCgwLCBfbmV0d29yay5kZWZhdWx0KSh0aGlzLCB7XG4gICAgICAgICAgc2hvdWxkQXVnbWVudE5QUzogISFzaG91bGRBdWdtZW50TlBTLFxuICAgICAgICAgIHNob3VsZFBhcnNlWEhSQmxvYjogISFzaG91bGRQYXJzZVhIUkJsb2JcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuX2luc3RhbGxlZC5wdXNoKCgwLCBfY29uc29sZS5kZWZhdWx0KSh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fcnVuKGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAgICAgICAgICBsb2dnZXIuaW5pdChhcHBJRCwgY29uc2lkZXJJbmdlc3RTZXJ2ZXJPcHRpb24ob3B0cykpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICB0aGlzLl9ydW4oZnVuY3Rpb24gKGxvZ2dlcikge1xuICAgICAgICBsb2dnZXIuc3RhcnQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmluc3RhbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5pbnN0YWxsKCkge1xuICAgICAgdGhpcy5faW5zdGFsbGVkLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGYoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9idWZmZXIgPSBbXTtcblxuICAgICAgdGhpcy5fcnVuKGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAgICAgICAgbG9nZ2VyLnVuaW5zdGFsbCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlkZW50aWZ5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlkZW50aWZ5KGlkLCBvcHRzKSB7XG4gICAgICB0aGlzLl9ydW4oZnVuY3Rpb24gKGxvZ2dlcikge1xuICAgICAgICBsb2dnZXIuaWRlbnRpZnkoaWQsIG9wdHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0TmV3U2Vzc2lvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydE5ld1Nlc3Npb24oKSB7XG4gICAgICB0aGlzLl9ydW4oZnVuY3Rpb24gKGxvZ2dlcikge1xuICAgICAgICBsb2dnZXIuc3RhcnROZXdTZXNzaW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidHJhY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJhY2soY3VzdG9tRXZlbnROYW1lLCBldmVudFByb3BlcnRpZXMpIHtcbiAgICAgIHRoaXMuX3J1bihmdW5jdGlvbiAobG9nZ2VyKSB7XG4gICAgICAgIGxvZ2dlci50cmFjayhjdXN0b21FdmVudE5hbWUsIGV2ZW50UHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2Vzc2lvblVSTFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZXNzaW9uVVJMKGNiKSB7XG4gICAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTG9nUm9ja2V0OiBtdXN0IHBhc3MgY2FsbGJhY2sgdG8gZ2V0U2Vzc2lvblVSTCgpJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3J1bihmdW5jdGlvbiAobG9nZ2VyKSB7XG4gICAgICAgIGlmIChsb2dnZXIuZ2V0U2Vzc2lvblVSTCkge1xuICAgICAgICAgIGxvZ2dlci5nZXRTZXNzaW9uVVJMKGNiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYihsb2dnZXIucmVjb3JkaW5nVVJMKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFZlcnNpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmVyc2lvbihjYikge1xuICAgICAgdGhpcy5fcnVuKGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAgICAgICAgY2IobG9nZ2VyLnZlcnNpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhcHR1cmVNZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhcHR1cmVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgX2V4Y2VwdGlvbnMuQ2FwdHVyZS5jYXB0dXJlTWVzc2FnZSh0aGlzLCBtZXNzYWdlLCBbbWVzc2FnZV0sIG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYXB0dXJlRXhjZXB0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhcHR1cmVFeGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIF9leGNlcHRpb25zLkNhcHR1cmUuY2FwdHVyZUV4Y2VwdGlvbih0aGlzLCBleGNlcHRpb24sIG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2ZXJzaW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbG9nZ2VyICYmIHRoaXMuX2xvZ2dlci52ZXJzaW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXNzaW9uVVJMXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbG9nZ2VyICYmIHRoaXMuX2xvZ2dlci5yZWNvcmRpbmdVUkw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlY29yZGluZ1VSTFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvZ2dlciAmJiB0aGlzLl9sb2dnZXIucmVjb3JkaW5nVVJMO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWNvcmRpbmdJRFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvZ2dlciAmJiB0aGlzLl9sb2dnZXIucmVjb3JkaW5nSUQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRocmVhZElEXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbG9nZ2VyICYmIHRoaXMuX2xvZ2dlci50aHJlYWRJRDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGFiSURcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2dnZXIgJiYgdGhpcy5fbG9nZ2VyLnRhYklEO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWR1eEVuaGFuY2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZHV4RW5oYW5jZXIoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICByZXR1cm4gKDAsIF9yZWR1eC5jcmVhdGVFbmhhbmNlcikodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlZHV4TWlkZGxld2FyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWR1eE1pZGRsZXdhcmUoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICByZXR1cm4gKDAsIF9yZWR1eC5jcmVhdGVNaWRkbGV3YXJlKSh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNEaXNhYmxlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICEhKHRoaXMuX2lzRGlzYWJsZWQgfHwgdGhpcy5fbG9nZ2VyICYmIHRoaXMuX2xvZ2dlci5faXNEaXNhYmxlZCk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMb2dSb2NrZXQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExvZ1JvY2tldDtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9sb2dyb2NrZXQvc3JjL21ha2VMb2dSb2NrZXQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9wYWNrYWdlcy9sb2dyb2NrZXQvc3JjL21ha2VMb2dSb2NrZXQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWFrZUxvZ1JvY2tldDtcblxudmFyIF9Mb2dSb2NrZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTG9nUm9ja2V0ICovIFwiLi9wYWNrYWdlcy9sb2dyb2NrZXQvc3JjL0xvZ1JvY2tldC5qc1wiKSk7XG5cbnZhciBSRUFDVF9OQVRJVkVfTk9USUNFID0gJ0xvZ1JvY2tldCBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBSZWFjdCBOYXRpdmUuJztcblxudmFyIG1ha2VOb29wUG9seWZpbGwgPSBmdW5jdGlvbiBtYWtlTm9vcFBvbHlmaWxsKCkge1xuICByZXR1cm4ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7fSxcbiAgICB1bmluc3RhbGw6IGZ1bmN0aW9uIHVuaW5zdGFsbCgpIHt9LFxuICAgIGxvZzogZnVuY3Rpb24gbG9nKCkge30sXG4gICAgaW5mbzogZnVuY3Rpb24gaW5mbygpIHt9LFxuICAgIHdhcm46IGZ1bmN0aW9uIHdhcm4oKSB7fSxcbiAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoKSB7fSxcbiAgICBkZWJ1ZzogZnVuY3Rpb24gZGVidWcoKSB7fSxcbiAgICBhZGRFdmVudDogZnVuY3Rpb24gYWRkRXZlbnQoKSB7fSxcbiAgICBpZGVudGlmeTogZnVuY3Rpb24gaWRlbnRpZnkoKSB7fSxcbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoKSB7fSxcblxuICAgIGdldCB0aHJlYWRJRCgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBnZXQgcmVjb3JkaW5nSUQoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgZ2V0IHJlY29yZGluZ1VSTCgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICByZWR1eEVuaGFuY2VyOiBmdW5jdGlvbiByZWR1eEVuaGFuY2VyKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBzdG9yZS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0sXG4gICAgcmVkdXhNaWRkbGV3YXJlOiBmdW5jdGlvbiByZWR1eE1pZGRsZXdhcmUoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9LFxuICAgIHRyYWNrOiBmdW5jdGlvbiB0cmFjaygpIHt9LFxuICAgIGdldFNlc3Npb25VUkw6IGZ1bmN0aW9uIGdldFNlc3Npb25VUkwoKSB7fSxcbiAgICBnZXRWZXJzaW9uOiBmdW5jdGlvbiBnZXRWZXJzaW9uKCkge30sXG4gICAgc3RhcnROZXdTZXNzaW9uOiBmdW5jdGlvbiBzdGFydE5ld1Nlc3Npb24oKSB7fSxcbiAgICBvbkxvZ2dlcjogZnVuY3Rpb24gb25Mb2dnZXIoKSB7fSxcbiAgICBzZXRDbG9jazogZnVuY3Rpb24gc2V0Q2xvY2soKSB7fSxcbiAgICBjYXB0dXJlTWVzc2FnZTogZnVuY3Rpb24gY2FwdHVyZU1lc3NhZ2UoKSB7fSxcbiAgICBjYXB0dXJlRXhjZXB0aW9uOiBmdW5jdGlvbiBjYXB0dXJlRXhjZXB0aW9uKCkge31cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIG1ha2VMb2dSb2NrZXQoKSB7XG4gIHZhciBnZXRMb2dnZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZ1bmN0aW9uICgpIHt9O1xuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHRocm93IG5ldyBFcnJvcihSRUFDVF9OQVRJVkVfTk9USUNFKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh3aW5kb3cuX2Rpc2FibGVMb2dSb2NrZXQpIHtcbiAgICAgIHJldHVybiBtYWtlTm9vcFBvbHlmaWxsKCk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyICYmIHdpbmRvdy5XZWFrTWFwKSB7XG4gICAgICAvLyBTYXZlIHdpbmRvdyBnbG9iYWxzIHRoYXQgd2UgcmVseSBvbi5cbiAgICAgIHdpbmRvdy5fbHJNdXRhdGlvbk9ic2VydmVyID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgX0xvZ1JvY2tldC5kZWZhdWx0KCk7XG4gICAgICBnZXRMb2dnZXIoaW5zdGFuY2UpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlTm9vcFBvbHlmaWxsKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL2xvZ3JvY2tldC9zcmMvbW9kdWxlLW5wbS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL2xvZ3JvY2tldC9zcmMvbW9kdWxlLW5wbS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfc2V0dXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc2V0dXAgKi8gXCIuL3BhY2thZ2VzL2xvZ3JvY2tldC9zcmMvc2V0dXAuanNcIikpO1xuXG52YXIgaW5zdGFuY2UgPSAoMCwgX3NldHVwLmRlZmF1bHQpKCk7XG52YXIgX2RlZmF1bHQgPSBpbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvbG9ncm9ja2V0L3NyYy9zZXR1cC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9wYWNrYWdlcy9sb2dyb2NrZXQvc3JjL3NldHVwLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzZXR1cDtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzXCIpKTtcblxudmFyIF9tYWtlTG9nUm9ja2V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21ha2VMb2dSb2NrZXQgKi8gXCIuL3BhY2thZ2VzL2xvZ3JvY2tldC9zcmMvbWFrZUxvZ1JvY2tldC5qc1wiKSk7XG5cbnZhciBDRE5fU0VSVkVSX01BUCA9IHtcbiAgJ2Nkbi5sb2dyb2NrZXQuaW8nOiAnaHR0cHM6Ly9yLmxvZ3JvY2tldC5pbycsXG4gICdjZG4ubHItaW5nZXN0LmlvJzogJ2h0dHBzOi8vci5sci1pbmdlc3QuaW8nLFxuICAnY2RuLmxyLWluLmNvbSc6ICdodHRwczovL3IubHItaW4uY29tJyxcbiAgJ2Nkbi5sci1pbi1wcm9kLmNvbSc6ICdodHRwczovL3IubHItaW4tcHJvZC5jb20nLFxuICAnY2RuLXN0YWdpbmcubG9ncm9ja2V0LmlvJzogJ2h0dHBzOi8vc3RhZ2luZy1pLmxvZ3JvY2tldC5pbycsXG4gICdjZG4tc3RhZ2luZy5sci1pbmdlc3QuaW8nOiAnaHR0cHM6Ly9zdGFnaW5nLWkubHItaW5nZXN0LmlvJyxcbiAgJ2Nkbi1zdGFnaW5nLmxyLWluLmNvbSc6ICdodHRwczovL3N0YWdpbmctaS5sci1pbi5jb20nLFxuICAnY2RuLXN0YWdpbmcubHItaW4tcHJvZC5jb20nOiAnaHR0cHM6Ly9zdGFnaW5nLWkubHItaW4tcHJvZC5jb20nXG59O1xuXG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgZW50ZXJwcmlzZVNlcnZlciA9IF9yZWYuZW50ZXJwcmlzZVNlcnZlcixcbiAgICAgIF9yZWYkc2RrVmVyc2lvbiA9IF9yZWYuc2RrVmVyc2lvbixcbiAgICAgIHNka1ZlcnNpb24gPSBfcmVmJHNka1ZlcnNpb24gPT09IHZvaWQgMCA/IFwiMy4wLjFcIiA6IF9yZWYkc2RrVmVyc2lvbixcbiAgICAgIG9wdHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMi5kZWZhdWx0KShfcmVmLCBbXCJlbnRlcnByaXNlU2VydmVyXCIsIFwic2RrVmVyc2lvblwiXSk7XG5cbiAgdmFyIHNjcmlwdE9yaWdpbiA9IHVuZGVmaW5lZCA9PT0gJ3N0YWdpbmcnID8gJ2h0dHBzOi8vY2RuLXN0YWdpbmcubG9ncm9ja2V0LmlvJyA6ICdodHRwczovL2Nkbi5sb2dyb2NrZXQuaW8nO1xuICB2YXIgc2NyaXB0SW5nZXN0O1xuXG4gIGlmIChzZGtWZXJzaW9uID09PSAnc2NyaXB0Jykge1xuICAgIHRyeSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGF0L2NvbXBhdFxuICAgICAgdmFyIHNjcmlwdFRhZyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQ7XG4gICAgICB2YXIgbWF0Y2hlcyA9IHNjcmlwdFRhZy5zcmMubWF0Y2goL14oaHR0cHM/OlxcL1xcLyhbXlxcXFxdKykpXFwvLiskLyk7XG4gICAgICB2YXIgc2NyaXB0SG9zdG5hbWUgPSBtYXRjaGVzICYmIG1hdGNoZXNbMl07XG5cbiAgICAgIGlmIChzY3JpcHRIb3N0bmFtZSAmJiBDRE5fU0VSVkVSX01BUFtzY3JpcHRIb3N0bmFtZV0pIHtcbiAgICAgICAgc2NyaXB0T3JpZ2luID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzFdO1xuICAgICAgICBzY3JpcHRJbmdlc3QgPSBDRE5fU0VSVkVSX01BUFtzY3JpcHRIb3N0bmFtZV07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgLyogbm8tb3AgKi9cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gTlBNXG4gICAgc2NyaXB0T3JpZ2luID0gdW5kZWZpbmVkID09PSAnc3RhZ2luZycgPyAnaHR0cHM6Ly9jZG4tc3RhZ2luZy5sci1pbi1wcm9kLmNvbScgOiAnaHR0cHM6Ly9jZG4ubHItaW4tcHJvZC5jb20nO1xuICAgIHNjcmlwdEluZ2VzdCA9IHVuZGVmaW5lZCA9PT0gJ3N0YWdpbmcnID8gJ2h0dHBzOi8vc3RhZ2luZy1pLmxyLWluLXByb2QuY29tJyA6ICdodHRwczovL3IubHItaW4tcHJvZC5jb20nO1xuICB9XG5cbiAgdmFyIHNka1NlcnZlciA9IG9wdHMuc2RrU2VydmVyIHx8IGVudGVycHJpc2VTZXJ2ZXI7XG4gIHZhciBpbmdlc3RTZXJ2ZXIgPSBvcHRzLmluZ2VzdFNlcnZlciB8fCBlbnRlcnByaXNlU2VydmVyIHx8IHNjcmlwdEluZ2VzdDtcbiAgdmFyIGluc3RhbmNlID0gKDAsIF9tYWtlTG9nUm9ja2V0LmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICBpZiAoaW5nZXN0U2VydmVyKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5fX1NES0NPTkZJR19fID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cuX19TREtDT05GSUdfXyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuX19TREtDT05GSUdfXy5zZXJ2ZXJVUkwgPSBcIlwiLmNvbmNhdChpbmdlc3RTZXJ2ZXIsIFwiL2lcIik7XG4gICAgICB3aW5kb3cuX19TREtDT05GSUdfXy5zdGF0c1VSTCA9IFwiXCIuY29uY2F0KGluZ2VzdFNlcnZlciwgXCIvc1wiKTtcbiAgICB9XG5cbiAgICBpZiAoc2RrU2VydmVyKSB7XG4gICAgICBzY3JpcHQuc3JjID0gXCJcIi5jb25jYXQoc2RrU2VydmVyLCBcIi9sb2dnZXIubWluLmpzXCIpO1xuICAgIH0gZWxzZSBpZiAod2luZG93Ll9fU0RLQ09ORklHX18gJiYgd2luZG93Ll9fU0RLQ09ORklHX18ubG9nZ2VyVVJMKSB7XG4gICAgICBzY3JpcHQuc3JjID0gd2luZG93Ll9fU0RLQ09ORklHX18ubG9nZ2VyVVJMO1xuICAgIH0gZWxzZSBpZiAod2luZG93Ll9sckFzeW5jU2NyaXB0KSB7XG4gICAgICBzY3JpcHQuc3JjID0gd2luZG93Ll9sckFzeW5jU2NyaXB0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHQuc3JjID0gXCJcIi5jb25jYXQoc2NyaXB0T3JpZ2luLCBcIi9sb2dnZXItMS5taW4uanNcIik7XG4gICAgfVxuXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQnJhdmUgYnJvd3NlcjogQWR2ZXJ0aXNlcyBpdHMgdXNlci1hZ2VudCBhcyBDaHJvbWUgIyMuIyMuLi4gdGhlblxuICAgICAgLy8gbG9hZHMgbG9nZ2VyLm1pbi5qcywgYnV0IGJsb2NrcyB0aGUgZXhlY3V0aW9uIG9mIHRoZSBzY3JpcHRcbiAgICAgIC8vIGNhdXNpbmcgX0xSbG9nZ2VyIHRvIGJlIHVuZGVmaW5lZC4gIExldCdzIG1ha2Ugc3VyZSBpdHMgdGhlcmUgZmlyc3QuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5fTFJMb2dnZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaW5zdGFuY2Uub25Mb2dnZXIobmV3IHdpbmRvdy5fTFJMb2dnZXIoe1xuICAgICAgICAgIHNka1ZlcnNpb246IHNka1ZlcnNpb25cbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdMb2dSb2NrZXQ6IHNjcmlwdCBleGVjdXRpb24gaGFzIGJlZW4gYmxvY2tlZCBieSBhIHByb2R1Y3Qgb3Igc2VydmljZS4nKTtcbiAgICAgICAgaW5zdGFuY2UudW5pbnN0YWxsKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS53YXJuKCdMb2dSb2NrZXQ6IHNjcmlwdCBjb3VsZCBub3QgbG9hZC4gQ2hlY2sgdGhhdCB5b3UgaGF2ZSBhIHZhbGlkIG5ldHdvcmsgY29ubmVjdGlvbi4nKTtcbiAgICAgIGluc3RhbmNlLnVuaW5zdGFsbCgpO1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMDpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogbXVsdGkgLi9wYWNrYWdlcy9sb2dyb2NrZXQvc3JjL21vZHVsZS1ucG0uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAvcm9vdC9wcm9qZWN0L3BhY2thZ2VzL2xvZ3JvY2tldC9zcmMvbW9kdWxlLW5wbS5qcyAqL1wiLi9wYWNrYWdlcy9sb2dyb2NrZXQvc3JjL21vZHVsZS1ucG0uanNcIik7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IExvZ1JvY2tldCBmcm9tICdsb2dyb2NrZXQnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnTG9hZGVkIGdsb2JhbCBlbnRyeSBwb2ludCcpO1xuICBMb2dSb2NrZXQuaW5pdCgnMWsyZ3NlL3RlbGVmb25vc3VjaS1zaXRlJyk7XG59KTtcbiJdLCJuYW1lcyI6WyJMb2dSb2NrZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiaW5pdCJdLCJzb3VyY2VSb290IjoiIn0=