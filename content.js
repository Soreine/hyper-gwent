/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ý": "Y",
	"ß": "s",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z"
};

var accentsRegex;

function buildRegExp() {
	var accentList = [];

	for (var accented in characterMap) {
		accentList.push(accented);
	}

	accentsRegex = new RegExp('(' + accentList.join('|') + ')', 'g');
}

buildRegExp();

var removeAccents = function removeAccents(string) {
	string = string.replace(accentsRegex, function (match) {
		return characterMap[match];
	});

	return string;
};

module.exports = removeAccents;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matches = exports.append = exports.contains = exports.create = undefined;

var _create = __webpack_require__(2);

var _create2 = _interopRequireDefault(_create);

var _append = __webpack_require__(4);

var _append2 = _interopRequireDefault(_append);

var _contains = __webpack_require__(14);

var _contains2 = _interopRequireDefault(_contains);

var _matches = __webpack_require__(15);

var _matches2 = _interopRequireDefault(_matches);

var _DICTIONARY = __webpack_require__(16);

var _DICTIONARY2 = _interopRequireDefault(_DICTIONARY);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DICTIONARY2.default;
exports.create = _create2.default;
exports.contains = _contains2.default;
exports.append = _append2.default;
exports.matches = _matches2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _seamlessImmutable = __webpack_require__(3);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _append = __webpack_require__(4);

var _append2 = _interopRequireDefault(_append);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
type Dictionary = {
    [string]: Dictionary | true
}
*/

/**
 * @param  {Array<[string, any]>} entries Entries in the dictionary
 * @return {Dictionary} The built dictionary
 */
function create(entries) {
    return entries.reduce(function (dict, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            value = _ref2[1];

        return (0, _append2.default)(dict, name, value);
    }, (0, _seamlessImmutable2.default)({}));
}

exports.default = create;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  "use strict";

  function immutableInit(config) {

    // https://github.com/facebook/react/blob/v15.0.1/src/isomorphic/classic/element/ReactElement.js#L21
    var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element');
    var REACT_ELEMENT_TYPE_FALLBACK = 0xeac7;

    var globalConfig = {
      use_static: false
    };
    if (isObject(config)) {
      if (config.use_static !== undefined) {
        globalConfig.use_static = Boolean(config.use_static);
      }
    }

    function isObject(data) {
      return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && !Array.isArray(data) && data !== null;
    }

    function instantiateEmptyObject(obj) {
      var prototype = Object.getPrototypeOf(obj);
      if (!prototype) {
        return {};
      } else {
        return Object.create(prototype);
      }
    }

    function addPropertyTo(target, methodName, value) {
      Object.defineProperty(target, methodName, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: value
      });
    }

    function banProperty(target, methodName) {
      addPropertyTo(target, methodName, function () {
        throw new ImmutableError("The " + methodName + " method cannot be invoked on an Immutable data structure.");
      });
    }

    var immutabilityTag = "__immutable_invariants_hold";

    function addImmutabilityTag(target) {
      addPropertyTo(target, immutabilityTag, true);
    }

    function isImmutable(target) {
      if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === "object") {
        return target === null || Boolean(Object.getOwnPropertyDescriptor(target, immutabilityTag));
      } else {
        // In JavaScript, only objects are even potentially mutable.
        // strings, numbers, null, and undefined are all naturally immutable.
        return true;
      }
    }

    function isEqual(a, b) {
      // Avoid false positives due to (NaN !== NaN) evaluating to true
      return a === b || a !== a && b !== b;
    }

    function isMergableObject(target) {
      return target !== null && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === "object" && !Array.isArray(target) && !(target instanceof Date);
    }

    var mutatingObjectMethods = ["setPrototypeOf"];

    var nonMutatingObjectMethods = ["keys"];

    var mutatingArrayMethods = mutatingObjectMethods.concat(["push", "pop", "sort", "splice", "shift", "unshift", "reverse"]);

    var nonMutatingArrayMethods = nonMutatingObjectMethods.concat(["map", "filter", "slice", "concat", "reduce", "reduceRight"]);

    var mutatingDateMethods = mutatingObjectMethods.concat(["setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear"]);

    function ImmutableError(message) {
      this.name = 'MyError';
      this.message = message;
      this.stack = new Error().stack;
    }
    ImmutableError.prototype = new Error();
    ImmutableError.prototype.constructor = Error;

    function makeImmutable(obj, bannedMethods) {
      // Tag it so we can quickly tell it's immutable later.
      addImmutabilityTag(obj);

      if (true) {
        // Make all mutating methods throw exceptions.
        for (var index in bannedMethods) {
          if (bannedMethods.hasOwnProperty(index)) {
            banProperty(obj, bannedMethods[index]);
          }
        }

        // Freeze it and return it.
        Object.freeze(obj);
      }

      return obj;
    }

    function makeMethodReturnImmutable(obj, methodName) {
      var currentMethod = obj[methodName];

      addPropertyTo(obj, methodName, function () {
        return Immutable(currentMethod.apply(obj, arguments));
      });
    }

    function arraySet(idx, value, config) {
      var deep = config && config.deep;

      if (idx in this) {
        if (deep && this[idx] !== value && isMergableObject(value) && isMergableObject(this[idx])) {
          value = Immutable.merge(this[idx], value, { deep: true, mode: 'replace' });
        }
        if (isEqual(this[idx], value)) {
          return this;
        }
      }

      var mutable = asMutableArray.call(this);
      mutable[idx] = Immutable(value);
      return makeImmutableArray(mutable);
    }

    var immutableEmptyArray = Immutable([]);

    function arraySetIn(pth, value, config) {
      var head = pth[0];

      if (pth.length === 1) {
        return arraySet.call(this, head, value, config);
      } else {
        var tail = pth.slice(1);
        var thisHead = this[head];
        var newValue;

        if ((typeof thisHead === 'undefined' ? 'undefined' : _typeof(thisHead)) === "object" && thisHead !== null) {
          // Might (validly) be object or array
          newValue = Immutable.setIn(thisHead, tail, value);
        } else {
          var nextHead = tail[0];
          // If the next path part is a number, then we are setting into an array, else an object.
          if (nextHead !== '' && isFinite(nextHead)) {
            newValue = arraySetIn.call(immutableEmptyArray, tail, value);
          } else {
            newValue = objectSetIn.call(immutableEmptyObject, tail, value);
          }
        }

        if (head in this && thisHead === newValue) {
          return this;
        }

        var mutable = asMutableArray.call(this);
        mutable[head] = newValue;
        return makeImmutableArray(mutable);
      }
    }

    function makeImmutableArray(array) {
      // Don't change their implementations, but wrap these functions to make sure
      // they always return an immutable value.
      for (var index in nonMutatingArrayMethods) {
        if (nonMutatingArrayMethods.hasOwnProperty(index)) {
          var methodName = nonMutatingArrayMethods[index];
          makeMethodReturnImmutable(array, methodName);
        }
      }

      if (!globalConfig.use_static) {
        addPropertyTo(array, "flatMap", flatMap);
        addPropertyTo(array, "asObject", asObject);
        addPropertyTo(array, "asMutable", asMutableArray);
        addPropertyTo(array, "set", arraySet);
        addPropertyTo(array, "setIn", arraySetIn);
        addPropertyTo(array, "update", update);
        addPropertyTo(array, "updateIn", updateIn);
        addPropertyTo(array, "getIn", getIn);
      }

      for (var i = 0, length = array.length; i < length; i++) {
        array[i] = Immutable(array[i]);
      }

      return makeImmutable(array, mutatingArrayMethods);
    }

    function makeImmutableDate(date) {
      if (!globalConfig.use_static) {
        addPropertyTo(date, "asMutable", asMutableDate);
      }

      return makeImmutable(date, mutatingDateMethods);
    }

    function asMutableDate() {
      return new Date(this.getTime());
    }

    /**
     * Effectively performs a map() over the elements in the array, using the
     * provided iterator, except that whenever the iterator returns an array, that
     * array's elements are added to the final result instead of the array itself.
     *
     * @param {function} iterator - The iterator function that will be invoked on each element in the array. It will receive three arguments: the current value, the current index, and the current object.
     */
    function flatMap(iterator) {
      // Calling .flatMap() with no arguments is a no-op. Don't bother cloning.
      if (arguments.length === 0) {
        return this;
      }

      var result = [],
          length = this.length,
          index;

      for (index = 0; index < length; index++) {
        var iteratorResult = iterator(this[index], index, this);

        if (Array.isArray(iteratorResult)) {
          // Concatenate Array results into the return value we're building up.
          result.push.apply(result, iteratorResult);
        } else {
          // Handle non-Array results the same way map() does.
          result.push(iteratorResult);
        }
      }

      return makeImmutableArray(result);
    }

    /**
     * Returns an Immutable copy of the object without the given keys included.
     *
     * @param {array} keysToRemove - A list of strings representing the keys to exclude in the return value. Instead of providing a single array, this method can also be called by passing multiple strings as separate arguments.
     */
    function without(remove) {
      // Calling .without() with no arguments is a no-op. Don't bother cloning.
      if (typeof remove === "undefined" && arguments.length === 0) {
        return this;
      }

      if (typeof remove !== "function") {
        // If we weren't given an array, use the arguments list.
        var keysToRemoveArray = Array.isArray(remove) ? remove.slice() : Array.prototype.slice.call(arguments);

        // Convert numeric keys to strings since that's how they'll
        // come from the enumeration of the object.
        keysToRemoveArray.forEach(function (el, idx, arr) {
          if (typeof el === "number") {
            arr[idx] = el.toString();
          }
        });

        remove = function remove(val, key) {
          return keysToRemoveArray.indexOf(key) !== -1;
        };
      }

      var result = instantiateEmptyObject(this);

      for (var key in this) {
        if (this.hasOwnProperty(key) && remove(this[key], key) === false) {
          result[key] = this[key];
        }
      }

      return makeImmutableObject(result);
    }

    function asMutableArray(opts) {
      var result = [],
          i,
          length;

      if (opts && opts.deep) {
        for (i = 0, length = this.length; i < length; i++) {
          result.push(asDeepMutable(this[i]));
        }
      } else {
        for (i = 0, length = this.length; i < length; i++) {
          result.push(this[i]);
        }
      }

      return result;
    }

    /**
     * Effectively performs a [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) over the elements in the array, expecting that the iterator function
     * will return an array of two elements - the first representing a key, the other
     * a value. Then returns an Immutable Object constructed of those keys and values.
     *
     * @param {function} iterator - A function which should return an array of two elements - the first representing the desired key, the other the desired value.
     */
    function asObject(iterator) {
      // If no iterator was provided, assume the identity function
      // (suggesting this array is already a list of key/value pairs.)
      if (typeof iterator !== "function") {
        iterator = function iterator(value) {
          return value;
        };
      }

      var result = {},
          length = this.length,
          index;

      for (index = 0; index < length; index++) {
        var pair = iterator(this[index], index, this),
            key = pair[0],
            value = pair[1];

        result[key] = value;
      }

      return makeImmutableObject(result);
    }

    function asDeepMutable(obj) {
      if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || !Object.getOwnPropertyDescriptor(obj, immutabilityTag) || obj instanceof Date) {
        return obj;
      }
      return Immutable.asMutable(obj, { deep: true });
    }

    function quickCopy(src, dest) {
      for (var key in src) {
        if (Object.getOwnPropertyDescriptor(src, key)) {
          dest[key] = src[key];
        }
      }

      return dest;
    }

    /**
     * Returns an Immutable Object containing the properties and values of both
     * this object and the provided object, prioritizing the provided object's
     * values whenever the same key is present in both objects.
     *
     * @param {object} other - The other object to merge. Multiple objects can be passed as an array. In such a case, the later an object appears in that list, the higher its priority.
     * @param {object} config - Optional config object that contains settings. Supported settings are: {deep: true} for deep merge and {merger: mergerFunc} where mergerFunc is a function
     *                          that takes a property from both objects. If anything is returned it overrides the normal merge behaviour.
     */
    function merge(other, config) {
      // Calling .merge() with no arguments is a no-op. Don't bother cloning.
      if (arguments.length === 0) {
        return this;
      }

      if (other === null || (typeof other === 'undefined' ? 'undefined' : _typeof(other)) !== "object") {
        throw new TypeError("Immutable#merge can only be invoked with objects or arrays, not " + JSON.stringify(other));
      }

      var receivedArray = Array.isArray(other),
          deep = config && config.deep,
          mode = config && config.mode || 'merge',
          merger = config && config.merger,
          result;

      // Use the given key to extract a value from the given object, then place
      // that value in the result object under the same key. If that resulted
      // in a change from this object's value at that key, set anyChanges = true.
      function addToResult(currentObj, otherObj, key) {
        var immutableValue = Immutable(otherObj[key]);
        var mergerResult = merger && merger(currentObj[key], immutableValue, config);
        var currentValue = currentObj[key];

        if (result !== undefined || mergerResult !== undefined || !currentObj.hasOwnProperty(key) || !isEqual(immutableValue, currentValue)) {

          var newValue;

          if (mergerResult) {
            newValue = mergerResult;
          } else if (deep && isMergableObject(currentValue) && isMergableObject(immutableValue)) {
            newValue = Immutable.merge(currentValue, immutableValue, config);
          } else {
            newValue = immutableValue;
          }

          if (!isEqual(currentValue, newValue) || !currentObj.hasOwnProperty(key)) {
            if (result === undefined) {
              // Make a shallow clone of the current object.
              result = quickCopy(currentObj, instantiateEmptyObject(currentObj));
            }

            result[key] = newValue;
          }
        }
      }

      function clearDroppedKeys(currentObj, otherObj) {
        for (var key in currentObj) {
          if (!otherObj.hasOwnProperty(key)) {
            if (result === undefined) {
              // Make a shallow clone of the current object.
              result = quickCopy(currentObj, instantiateEmptyObject(currentObj));
            }
            delete result[key];
          }
        }
      }

      var key;

      // Achieve prioritization by overriding previous values that get in the way.
      if (!receivedArray) {
        // The most common use case: just merge one object into the existing one.
        for (key in other) {
          if (Object.getOwnPropertyDescriptor(other, key)) {
            addToResult(this, other, key);
          }
        }
        if (mode === 'replace') {
          clearDroppedKeys(this, other);
        }
      } else {
        // We also accept an Array
        for (var index = 0, length = other.length; index < length; index++) {
          var otherFromArray = other[index];

          for (key in otherFromArray) {
            if (otherFromArray.hasOwnProperty(key)) {
              addToResult(result !== undefined ? result : this, otherFromArray, key);
            }
          }
        }
      }

      if (result === undefined) {
        return this;
      } else {
        return makeImmutableObject(result);
      }
    }

    function objectReplace(value, config) {
      var deep = config && config.deep;

      // Calling .replace() with no arguments is a no-op. Don't bother cloning.
      if (arguments.length === 0) {
        return this;
      }

      if (value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== "object") {
        throw new TypeError("Immutable#replace can only be invoked with objects or arrays, not " + JSON.stringify(value));
      }

      return Immutable.merge(this, value, { deep: deep, mode: 'replace' });
    }

    var immutableEmptyObject = Immutable({});

    function objectSetIn(path, value, config) {
      if (!(path instanceof Array) || path.length === 0) {
        throw new TypeError("The first argument to Immutable#setIn must be an array containing at least one \"key\" string.");
      }

      var head = path[0];
      if (path.length === 1) {
        return objectSet.call(this, head, value, config);
      }

      var tail = path.slice(1);
      var newValue;
      var thisHead = this[head];

      if (this.hasOwnProperty(head) && (typeof thisHead === 'undefined' ? 'undefined' : _typeof(thisHead)) === "object" && thisHead !== null) {
        // Might (validly) be object or array
        newValue = Immutable.setIn(thisHead, tail, value);
      } else {
        newValue = objectSetIn.call(immutableEmptyObject, tail, value);
      }

      if (this.hasOwnProperty(head) && thisHead === newValue) {
        return this;
      }

      var mutable = quickCopy(this, instantiateEmptyObject(this));
      mutable[head] = newValue;
      return makeImmutableObject(mutable);
    }

    function objectSet(property, value, config) {
      var deep = config && config.deep;

      if (this.hasOwnProperty(property)) {
        if (deep && this[property] !== value && isMergableObject(value) && isMergableObject(this[property])) {
          value = Immutable.merge(this[property], value, { deep: true, mode: 'replace' });
        }
        if (isEqual(this[property], value)) {
          return this;
        }
      }

      var mutable = quickCopy(this, instantiateEmptyObject(this));
      mutable[property] = Immutable(value);
      return makeImmutableObject(mutable);
    }

    function update(property, updater) {
      var restArgs = Array.prototype.slice.call(arguments, 2);
      var initialVal = this[property];
      return Immutable.set(this, property, updater.apply(initialVal, [initialVal].concat(restArgs)));
    }

    function getInPath(obj, path) {
      /*jshint eqnull:true */
      for (var i = 0, l = path.length; obj != null && i < l; i++) {
        obj = obj[path[i]];
      }

      return i && i == l ? obj : undefined;
    }

    function updateIn(path, updater) {
      var restArgs = Array.prototype.slice.call(arguments, 2);
      var initialVal = getInPath(this, path);

      return Immutable.setIn(this, path, updater.apply(initialVal, [initialVal].concat(restArgs)));
    }

    function getIn(path, defaultValue) {
      var value = getInPath(this, path);
      return value === undefined ? defaultValue : value;
    }

    function asMutableObject(opts) {
      var result = instantiateEmptyObject(this),
          key;

      if (opts && opts.deep) {
        for (key in this) {
          if (this.hasOwnProperty(key)) {
            result[key] = asDeepMutable(this[key]);
          }
        }
      } else {
        for (key in this) {
          if (this.hasOwnProperty(key)) {
            result[key] = this[key];
          }
        }
      }

      return result;
    }

    // Creates plain object to be used for cloning
    function instantiatePlainObject() {
      return {};
    }

    // Finalizes an object with immutable methods, freezes it, and returns it.
    function makeImmutableObject(obj) {
      if (!globalConfig.use_static) {
        addPropertyTo(obj, "merge", merge);
        addPropertyTo(obj, "replace", objectReplace);
        addPropertyTo(obj, "without", without);
        addPropertyTo(obj, "asMutable", asMutableObject);
        addPropertyTo(obj, "set", objectSet);
        addPropertyTo(obj, "setIn", objectSetIn);
        addPropertyTo(obj, "update", update);
        addPropertyTo(obj, "updateIn", updateIn);
        addPropertyTo(obj, "getIn", getIn);
      }

      return makeImmutable(obj, mutatingObjectMethods);
    }

    // Returns true if object is a valid react element
    // https://github.com/facebook/react/blob/v15.0.1/src/isomorphic/classic/element/ReactElement.js#L326
    function isReactElement(obj) {
      return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && (obj.$$typeof === REACT_ELEMENT_TYPE_FALLBACK || obj.$$typeof === REACT_ELEMENT_TYPE);
    }

    function isFileObject(obj) {
      return typeof File !== 'undefined' && obj instanceof File;
    }

    function isPromise(obj) {
      return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.then === 'function';
    }

    function isError(obj) {
      return obj instanceof Error;
    }

    function Immutable(obj, options, stackRemaining) {
      if (isImmutable(obj) || isReactElement(obj) || isFileObject(obj) || isError(obj)) {
        return obj;
      } else if (isPromise(obj)) {
        return obj.then(Immutable);
      } else if (Array.isArray(obj)) {
        return makeImmutableArray(obj.slice());
      } else if (obj instanceof Date) {
        return makeImmutableDate(new Date(obj.getTime()));
      } else {
        // Don't freeze the object we were given; make a clone and use that.
        var prototype = options && options.prototype;
        var instantiateEmptyObject = !prototype || prototype === Object.prototype ? instantiatePlainObject : function () {
          return Object.create(prototype);
        };
        var clone = instantiateEmptyObject();

        if (true) {
          /*jshint eqnull:true */
          if (stackRemaining == null) {
            stackRemaining = 64;
          }
          if (stackRemaining <= 0) {
            throw new ImmutableError("Attempt to construct Immutable from a deeply nested object was detected." + " Have you tried to wrap an object with circular references (e.g. React element)?" + " See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.");
          }
          stackRemaining -= 1;
        }

        for (var key in obj) {
          if (Object.getOwnPropertyDescriptor(obj, key)) {
            clone[key] = Immutable(obj[key], undefined, stackRemaining);
          }
        }

        return makeImmutableObject(clone);
      }
    }

    // Wrapper to allow the use of object methods as static methods of Immutable.
    function toStatic(fn) {
      function staticWrapper() {
        var args = [].slice.call(arguments);
        var self = args.shift();
        return fn.apply(self, args);
      }

      return staticWrapper;
    }

    // Wrapper to allow the use of object methods as static methods of Immutable.
    // with the additional condition of choosing which function to call depending
    // if argument is an array or an object.
    function toStaticObjectOrArray(fnObject, fnArray) {
      function staticWrapper() {
        var args = [].slice.call(arguments);
        var self = args.shift();
        if (Array.isArray(self)) {
          return fnArray.apply(self, args);
        } else {
          return fnObject.apply(self, args);
        }
      }

      return staticWrapper;
    }

    // Wrapper to allow the use of object methods as static methods of Immutable.
    // with the additional condition of choosing which function to call depending
    // if argument is an array or an object or a date.
    function toStaticObjectOrDateOrArray(fnObject, fnArray, fnDate) {
      function staticWrapper() {
        var args = [].slice.call(arguments);
        var self = args.shift();
        if (Array.isArray(self)) {
          return fnArray.apply(self, args);
        } else if (self instanceof Date) {
          return fnDate.apply(self, args);
        } else {
          return fnObject.apply(self, args);
        }
      }

      return staticWrapper;
    }

    // Export the library
    Immutable.from = Immutable;
    Immutable.isImmutable = isImmutable;
    Immutable.ImmutableError = ImmutableError;
    Immutable.merge = toStatic(merge);
    Immutable.replace = toStatic(objectReplace);
    Immutable.without = toStatic(without);
    Immutable.asMutable = toStaticObjectOrDateOrArray(asMutableObject, asMutableArray, asMutableDate);
    Immutable.set = toStaticObjectOrArray(objectSet, arraySet);
    Immutable.setIn = toStaticObjectOrArray(objectSetIn, arraySetIn);
    Immutable.update = toStatic(update);
    Immutable.updateIn = toStatic(updateIn);
    Immutable.getIn = toStatic(getIn);
    Immutable.flatMap = toStatic(flatMap);
    Immutable.asObject = toStatic(asObject);
    if (!globalConfig.use_static) {
      Immutable.static = immutableInit({
        use_static: true
      });
    }

    Object.freeze(Immutable);

    return Immutable;
  }

  var Immutable = immutableInit();
  /* istanbul ignore if */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return Immutable;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === "object") {
    module.exports = Immutable;
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === "object") {
    exports.Immutable = Immutable;
  } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object") {
    window.Immutable = Immutable;
  } else if ((typeof global === 'undefined' ? 'undefined' : _typeof(global)) === "object") {
    global.Immutable = Immutable;
  }
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _seamlessImmutable = __webpack_require__(3);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param  {Dictionary} dictionary The dictionary to append to
 * @param  {string} name Entry name to add to the dictionary
 * @param  {any} value Value to store at the given entry
 * @return {Dictionary}  A dictionary with the added entry
 */
function append(dictionary, name, value) {
  var result = dictionary;

  if (name === '') {
    return _seamlessImmutable2.default.set(result, '', value);
  }
  var char = name.slice(0, 1);
  var subDict = result[char] || (0, _seamlessImmutable2.default)({});
  var updatedSubDict = append(subDict, name.slice(1), value);
  return _seamlessImmutable2.default.set(result, char, updatedSubDict);
}

exports.default = append;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ALIASES = exports.NAMES = exports.CARDS = undefined;

var _CARDS = __webpack_require__(6);

var _CARDS2 = _interopRequireDefault(_CARDS);

var _NAMES = __webpack_require__(19);

var _NAMES2 = _interopRequireDefault(_NAMES);

var _ALIASES = __webpack_require__(20);

var _ALIASES2 = _interopRequireDefault(_ALIASES);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CARDS = _CARDS2.default;
exports.NAMES = _NAMES2.default;
exports.ALIASES = _ALIASES2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
	"Adrenaline Rush": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "The beast rushed at them wildly, with fury in its eyes, immune to pain and any strikes the defenders could land. Nothing stood to stop it…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/_SIFOcYAVMqjbIi8HKVS9w",
		"info": "Toggle a Unit's Resilience.\n",
		"name": "Adrenaline Rush",
		"positions": [
			"Event"
		],
		"uuid": "_SIFOcYAVMqjbIi8HKVS9w",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/adrenaline-rush-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/_SIFOcYAVMqjbIi8HKVS9w/variations/PLiQvtbcVA6E8GD0pR0PaQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "PLiQvtbcVA6E8GD0pR0PaQ"
			}
		]
	},
	"Aelirenn": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Better to die standing than to live on bent knee.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/PAj3wOL2Xlm5t63YjLxWhg",
		"info": "When you have 5 or more Elf Allies, play this Unit from your Deck.\n",
		"name": "Aelirenn",
		"positions": [
			"Ranged"
		],
		"strength": 6,
		"uuid": "PAj3wOL2Xlm5t63YjLxWhg",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/aelirenn-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/PAj3wOL2Xlm5t63YjLxWhg/variations/JKToxvdGVaSYxoZMm7vCzA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "JKToxvdGVaSYxoZMm7vCzA"
			}
		]
	},
	"Aeromancy": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "The druid Vaedermakar controls the elements. He soothes storms into silence, musters destructive hail, summons lightning to turn foes into ash. So I advise you well… treat him with utmost respect.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/y98GaIwyXb-HnN0rf0p1kQ",
		"info": "Play a Bronze or Silver Weather card from your Deck. Shuffle the others back into your Deck.\n",
		"name": "Aeromancy",
		"positions": [
			"Event"
		],
		"uuid": "y98GaIwyXb-HnN0rf0p1kQ",
		"variations": [
			{
				"art": {
					"artist": "Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/aeromancy-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/y98GaIwyXb-HnN0rf0p1kQ/variations/KmKCZfxxW02yUe4klbWdcg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "KmKCZfxxW02yUe4klbWdcg"
			}
		]
	},
	"Aglaïs": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Brokilon bleeds… and not even I can heal it.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/DwF8OwZRUYiyajzuBfH2aA",
		"info": "Deploy: You may Resurrect a Special card from your opponent's Graveyard. If you do, Weaken self by 4.\n",
		"name": "Aglaïs",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 10,
		"uuid": "DwF8OwZRUYiyajzuBfH2aA",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/aglais-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/DwF8OwZRUYiyajzuBfH2aA/variations/vQttiw0qVUWyGXhoVei-Tw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "vQttiw0qVUWyGXhoVei-Tw"
			}
		]
	},
	"Alba Pikeman": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Pledge your allegiance to our Emperor, Emhyr var Emreis… or die.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/yEGctJ81V_ay1go6m1TFYg",
		"info": "After 2 turns, at the start of your turn, play an Alba Pikeman from your Deck on the row.\nDeploy: Gain 2 Armor.\n",
		"name": "Alba Pikeman",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "yEGctJ81V_ay1go6m1TFYg",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/alba-pikeman-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/yEGctJ81V_ay1go6m1TFYg/variations/uIQ0VJq2V3q3S63OzqceMA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "uIQ0VJq2V3q3S63OzqceMA"
			}
		]
	},
	"Alba Spearmen": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Death and glory!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/Up9mM6SDUuqH4tNx7p0q9g",
		"info": "Deploy: Give this Unit a Shield.\n",
		"name": "Alba Spearmen",
		"positions": [
			"Ranged"
		],
		"strength": 8,
		"uuid": "Up9mM6SDUuqH4tNx7p0q9g",
		"variations": [
			{
				"art": {
					"artist": "Bruno Biazotto",
					"thumbnailImage": "https://api.gwentapi.com/media/alba-spearmen-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/Up9mM6SDUuqH4tNx7p0q9g/variations/2bhfL2QzU46xI-ekbbixgg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "2bhfL2QzU46xI-ekbbixgg"
			}
		]
	},
	"Albrich": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "A ball of fire? Why, naturally. Whatsoever Your Imperial Majesty desires.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/zh9_mEPaUzy0la7NpwfO6w",
		"info": "Deploy: If neither player has passed, each player draws the top card from their Deck. Your opponent's card is Revealed.\n",
		"name": "Albrich",
		"positions": [
			"Siege"
		],
		"strength": 9,
		"uuid": "zh9_mEPaUzy0la7NpwfO6w",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/albrich-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/zh9_mEPaUzy0la7NpwfO6w/variations/AuzzdsivU5mqXgRwS1DlBg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "AuzzdsivU5mqXgRwS1DlBg"
			}
		]
	},
	"Alchemist": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Two ounces of calcium equum, one ounce of rubedo…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/gycZySRxV-2wgUFMzdNuFw",
		"info": "Deploy: Reveal a card.\n",
		"name": "Alchemist",
		"positions": [
			"Ranged"
		],
		"strength": 8,
		"uuid": "gycZySRxV-2wgUFMzdNuFw",
		"variations": [
			{
				"art": {
					"artist": "Sławomir Maniak",
					"thumbnailImage": "https://api.gwentapi.com/media/alchemist-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/gycZySRxV-2wgUFMzdNuFw/variations/WUzgWcP1XnOQUVfssYY4Tg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "WUzgWcP1XnOQUVfssYY4Tg"
			}
		]
	},
	"Alzur's Double–Cross": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "A few of Alzur's monstrous creations roam the world still. Not least among them the horrid viy, who massacred its mage-creator and destroyed half of Maribor before fleeing into Riverdell's gloomy woodland.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/vPscZ3I3WHeJw7cSoQnJ1Q",
		"info": "Boost one of the Highest Bronze or Silver Units in your Deck by 2 and play it.\n",
		"name": "Alzur's Double–Cross",
		"positions": [
			"Event"
		],
		"uuid": "vPscZ3I3WHeJw7cSoQnJ1Q",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/alzur-s-double-cross-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/vPscZ3I3WHeJw7cSoQnJ1Q/variations/JnRmshGOUZeEkYaVXS1vDw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "JnRmshGOUZeEkYaVXS1vDw"
			}
		]
	},
	"Alzur's Thunder": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "We stand not the slightest chance of incanting a spell so complex as Alzur's Thunder. It is claimed Alzur had a voice like a hunting horn and the diction of a master orator.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/7M955k-GVnmTXoJzAOL-vQ",
		"info": "Damage a Unit by 7.\n",
		"name": "Alzur's Thunder",
		"positions": [
			"Event"
		],
		"uuid": "7M955k-GVnmTXoJzAOL-vQ",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/alzur-s-thunder-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/7M955k-GVnmTXoJzAOL-vQ/variations/0bIlcjwpVcKcmPyD0aHiRg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "0bIlcjwpVcKcmPyD0aHiRg"
			}
		]
	},
	"Ambassador": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "A spy? No, that's saying far too much. I consider myself more of an observer.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/3VjeXngBVDWO3-gS0djLHg",
		"info": "Deploy: Boost an Ally by 10.\n",
		"name": "Ambassador",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 2,
		"uuid": "3VjeXngBVDWO3-gS0djLHg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/ambassador-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/3VjeXngBVDWO3-gS0djLHg/variations/nIrbiaq9V-S1fQHbvKBxEA",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "nIrbiaq9V-S1fQHbvKBxEA"
			}
		]
	},
	"Ancient Foglet": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg",
				"name": "Necrophage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Many primal fears lurk in the hearts of men. The fear of the mist is well–founded…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/hUA0zFrrXGCCpf3XOSDnuw",
		"info": "Every turn, at the start of your turn, Boost self by 1 if Fog is anywhere on the Board.\n",
		"name": "Ancient Foglet",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "hUA0zFrrXGCCpf3XOSDnuw",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/ancient-foglet-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/hUA0zFrrXGCCpf3XOSDnuw/variations/Nm4TxPYIW0e9zFXgs4R6Bw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "Nm4TxPYIW0e9zFXgs4R6Bw"
			}
		]
	},
	"Arachas": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/FTOev-YqW8qYw9ZLmXH5Bw",
				"name": "Insectoid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Ugly – nature's way of saying stay away.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/G0YxFDJHWYCxrMvlCsfBPQ",
		"info": "Deploy: Play all Arachasae from your Deck.\n",
		"name": "Arachas",
		"positions": [
			"Ranged"
		],
		"strength": 3,
		"uuid": "G0YxFDJHWYCxrMvlCsfBPQ",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/arachas-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/G0YxFDJHWYCxrMvlCsfBPQ/variations/m0yE68UcX3WRlE1-wrmgFQ",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "m0yE68UcX3WRlE1-wrmgFQ"
			}
		]
	},
	"Arachas Behemoth": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/FTOev-YqW8qYw9ZLmXH5Bw",
				"name": "Insectoid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Like a cross between a crab, a spider… and a mountain.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/0pkMcgkrW3WFIN1cu2eZHA",
		"info": "Whenever an Ally Consumes a card, Spawn an Arachas and Damage self by 1 (ignoring Armor).\nDeploy: Gain 2 Armor.\n",
		"name": "Arachas Behemoth",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "0pkMcgkrW3WFIN1cu2eZHA",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/arachas-behemoth-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/0pkMcgkrW3WFIN1cu2eZHA/variations/utzZdmNaVFyLw0tHs2X2aA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "utzZdmNaVFyLw0tHs2X2aA"
			}
		]
	},
	"Arachas Venom": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "If substance makes contact with eyes, rinse immediately with cold water, then commence drawing up will.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/yotiF-eRVQ6O37nauUVXJw",
		"info": "Damage 3 adjacent Units by 4.\n",
		"name": "Arachas Venom",
		"positions": [
			"Event"
		],
		"uuid": "yotiF-eRVQ6O37nauUVXJw",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/arachas-venom-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/yotiF-eRVQ6O37nauUVXJw/variations/9CslCuZrXsekZjvFwl8o6Q",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "9CslCuZrXsekZjvFwl8o6Q"
			}
		]
	},
	"Archgriffin": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ",
				"name": "Beast"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "It's a griffin, just more… griffiny.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/g2Hpp_chVxCaG3Le2CgWYg",
		"info": "Deploy: Clear Weather from the row on your side.\n",
		"name": "Archgriffin",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "g2Hpp_chVxCaG3Le2CgWYg",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/archgriffin-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/g2Hpp_chVxCaG3Le2CgWYg/variations/2_Ou_8R1UweFa5Xguw6wOQ",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "2_Ou_8R1UweFa5Xguw6wOQ"
			}
		]
	},
	"Aretuza Adept": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "The adepts' every whim is catered to - they live like princesses at Aretuza. And in turn half the city lives off servicing them: seamstresses, milliners, confectioners, delivery boys…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/ZIc3gjqcV9CWVaDjaaG6KQ",
		"info": "Deploy: Play a random Bronze Weather card from your Deck.\n",
		"name": "Aretuza Adept",
		"positions": [
			"Siege"
		],
		"strength": 4,
		"uuid": "ZIc3gjqcV9CWVaDjaaG6KQ",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/aretuza-adept-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/ZIc3gjqcV9CWVaDjaaG6KQ/variations/QBR9soElUjqxbLl_FyKLJA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "QBR9soElUjqxbLl_FyKLJA"
			}
		]
	},
	"Assassination": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "How much is a human life worth?",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/vursNIg0Vv6pGJLjU5-urw",
		"info": "Lock and Destroy an Enemy.\n",
		"name": "Assassination",
		"positions": [
			"Event"
		],
		"uuid": "vursNIg0Vv6pGJLjU5-urw",
		"variations": [
			{
				"art": {
					"artist": "Alicja Kapustka",
					"thumbnailImage": "https://api.gwentapi.com/media/assassination-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/vursNIg0Vv6pGJLjU5-urw/variations/KankY6HWW-eQ8GYguB4pJw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "KankY6HWW-eQ8GYguB4pJw"
			}
		]
	},
	"Assire var Anahid": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Nilfgaardian mages do have a choice: servile submission, or the gallows.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/T6-prpX1VnauueZloZSu9Q",
		"info": "Deploy: Shuffle up to 2 cards from either Graveyard into that player's Deck.\n",
		"name": "Assire var Anahid",
		"positions": [
			"Siege"
		],
		"strength": 10,
		"uuid": "T6-prpX1VnauueZloZSu9Q",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/assire-var-anahid-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/T6-prpX1VnauueZloZSu9Q/variations/FOGOUjvFW225XfgIDN7BgA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "FOGOUjvFW225XfgIDN7BgA"
			}
		]
	},
	"Auckes": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A",
				"name": "Witcher"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Letho's got a plan… what could go wrong?",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/8OVcWAxgXDGUZo2qz_ezsA",
		"info": "Deploy: Toggle 2 Units' Lock. If Enemies, Damage them by 1 as well.\n",
		"name": "Auckes",
		"positions": [
			"Ranged"
		],
		"strength": 4,
		"uuid": "8OVcWAxgXDGUZo2qz_ezsA",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/auckes-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/8OVcWAxgXDGUZo2qz_ezsA/variations/mRETemlDWK-1ThUxbwdeGQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "mRETemlDWK-1ThUxbwdeGQ"
			}
		]
	},
	"Avallac'h": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "You humans have… unusual tastes.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/Oi2X3jx8WaeR7orXVMEWGQ",
		"info": "Deploy: If neither player has passed, both players draw the top 2 cards from their Deck.\n",
		"name": "Avallac'h",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "Oi2X3jx8WaeR7orXVMEWGQ",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/avallac-h-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/Oi2X3jx8WaeR7orXVMEWGQ/variations/kBvEaYhZWf-kpPIXbUiVjA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "kBvEaYhZWf-kpPIXbUiVjA"
			}
		]
	},
	"Ballista": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g",
				"name": "Machine"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "What crossbows want to be when they grow up.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/C33AhGODWDqYV2QGZRHJnA",
		"info": "Deploy: Damage an Enemy and up to 3 other random Enemies with the same Power by 1.\nFresh Crew: Repeat the Deploy ability.\n",
		"name": "Ballista",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "C33AhGODWDqYV2QGZRHJnA",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/ballista-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/C33AhGODWDqYV2QGZRHJnA/variations/Oq1xsYtmVgq6a6BU3RKO7w",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "Oq1xsYtmVgq6a6BU3RKO7w"
			}
		]
	},
	"Barclay Els": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA",
				"name": "Dwarf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Our mead smells rotten to ye, do it? Easy to fix – I'll break yer nose!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/qx-QO6yoVd2Hc-Ynvg6-bg",
		"info": "Deploy: Play a random Bronze or Silver Dwarf from your Deck and Boost it by 3.\n",
		"name": "Barclay Els",
		"positions": [
			"Siege"
		],
		"strength": 2,
		"uuid": "qx-QO6yoVd2Hc-Ynvg6-bg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio ",
					"thumbnailImage": "https://api.gwentapi.com/media/barclay-els-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/qx-QO6yoVd2Hc-Ynvg6-bg/variations/lqesiHD8VnC8_7OQHVG8Kw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "lqesiHD8VnC8_7OQHVG8Kw"
			}
		]
	},
	"Bekker's Twisted Mirror": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Gaze long into the abyss, and the abyss will gaze back into you.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/Pt3HG0SFVzuX7QidTUQdNA",
		"info": "Swap the Power of the Highest and Lowest Unit.\n",
		"name": "Bekker's Twisted Mirror",
		"positions": [
			"Event"
		],
		"uuid": "Pt3HG0SFVzuX7QidTUQdNA",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/bekker-s-twisted-mirror-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/Pt3HG0SFVzuX7QidTUQdNA/variations/9dSdVDaLU4acrm5-bYgWYQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "9dSdVDaLU4acrm5-bYgWYQ"
			}
		]
	},
	"Berserker Marauder": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ",
				"name": "Cursed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Now finish your soup, or a berserker'll come and swallow ye whole.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/QQKrmedUVbSNfIRJHasS6A",
		"info": "Deploy: Strengthen self by 1 for each Damaged Ally (including Golds), then Damage self by 1.\n",
		"name": "Berserker Marauder",
		"positions": [
			"Melee"
		],
		"strength": 8,
		"uuid": "QQKrmedUVbSNfIRJHasS6A",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/berserker-marauder-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/QQKrmedUVbSNfIRJHasS6A/variations/WCY4aGS2U8yl0JS1tiLIsg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "WCY4aGS2U8yl0JS1tiLIsg"
			}
		]
	},
	"Birna Bran": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Skellige must have a strong king. No matter what it takes.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/RcpTUjInXOmeoOgw554eFQ",
		"info": "Deploy: Move a Unit from your opponent's Graveyard to yours.\nEvery turn, at the start of your turn, Damage self by 1 and Units adjacent to this Unit by 2.\n",
		"name": "Birna Bran",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "RcpTUjInXOmeoOgw554eFQ",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio, Katarzyna Redesiuk",
					"thumbnailImage": "https://api.gwentapi.com/media/birna-bran-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/RcpTUjInXOmeoOgw554eFQ/variations/NSJalElzXo6wqGy65VGzKA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "NSJalElzXo6wqGy65VGzKA"
			}
		]
	},
	"Biting Frost": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA",
				"name": "Weather"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Best thing about frost? Bodies of the fallen don't rot so quickly.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/5L7jhag2UdWcsqWg2z5rBw",
		"info": "Apply Frost to a row on your opponent's side.\nFrost: Every turn, at the start of your turn, Damage one of the Lowest Units on the row by 2.\n",
		"name": "Biting Frost",
		"positions": [
			"Melee",
			"Ranged",
			"Siege",
			"Event"
		],
		"uuid": "5L7jhag2UdWcsqWg2z5rBw",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/biting-frost-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/5L7jhag2UdWcsqWg2z5rBw/variations/VD6Y60hhVxSG8NhY0VvlnQ",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "VD6Y60hhVxSG8NhY0VvlnQ"
			}
		]
	},
	"Black Infantry Arbalest": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "I aim for the knees. Always.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/sN6yvBkqXuO0BnMx7KukQg",
		"info": "Deploy: Damage an Enemy by 3. If it was Boosted, Damage it by 5 instead.\n",
		"name": "Black Infantry Arbalest",
		"positions": [
			"Ranged"
		],
		"strength": 5,
		"uuid": "sN6yvBkqXuO0BnMx7KukQg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/black-infantry-arbalest-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/sN6yvBkqXuO0BnMx7KukQg/variations/ThENHUGGXcGa4if4_5Sj4g",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "ThENHUGGXcGa4if4_5Sj4g"
			}
		]
	},
	"Bloodcurdling Roar": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "First we ran into a bear… things just got worse from there.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/JVayddWZWiWSmTIzz0Jdag",
		"info": "Destroy an Ally.\nSpawn a Bear.\n",
		"name": "Bloodcurdling Roar",
		"positions": [
			"Event"
		],
		"uuid": "JVayddWZWiWSmTIzz0Jdag",
		"variations": [
			{
				"art": {
					"artist": "Alicja Użarowska",
					"thumbnailImage": "https://api.gwentapi.com/media/bloodcurdling-roar-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/JVayddWZWiWSmTIzz0Jdag/variations/GSkd-KdnXmKgmRpd8XHANA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "GSkd-KdnXmKgmRpd8XHANA"
			}
		]
	},
	"Bloody Baron": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "I've not been a good father, I know, but… perhaps it's not too late.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/EmfMIU_FVKKiUU7TGR9YwQ",
		"info": "If this Unit is in your Deck at the end of the Round, place it on top.\nWhenever an Enemy is Destroyed during a Round while this Unit is in your Deck, Boost it by 1.\n",
		"name": "Bloody Baron",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "EmfMIU_FVKKiUU7TGR9YwQ",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/bloody-baron-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/EmfMIU_FVKKiUU7TGR9YwQ/variations/HNgB8eNMU_Gl8ccqXSjh1A",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "HNgB8eNMU_Gl8ccqXSjh1A"
			}
		]
	},
	"Blue Mountain Commando": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "By the time we'd heard them, it was already too late…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/PBx-tKL5XgWY68Gq8AaFTA",
		"info": "Whenever this Unit is moved, Boost it by 2.\nDeploy: Play all Blue Mountain Commandos from your Deck.\n",
		"name": "Blue Mountain Commando",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "PBx-tKL5XgWY68Gq8AaFTA",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/blue-mountain-commando-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/PBx-tKL5XgWY68Gq8AaFTA/variations/CHrqA9xTWwOHKdMwcgE7IA",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "CHrqA9xTWwOHKdMwcgE7IA"
			}
		]
	},
	"Blue Stripes Commando": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/6mb4BjFJUKiOY3UfKkEVgQ",
				"name": "Blue Stripes"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "I'd do anything for Temeria. Mostly though, I kill for her.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/hk8QrWJKUNO6shF2lfLHng",
		"info": "Whenever a different Ally with the same Power as this Unit is played, play this Unit from your Deck (1 copy max) and place it on that Ally's row.\nWhenever you complete a Blue Stripes Commando Trio, create 1 base copy of a Blue Stripes Commando on the bottom of your Deck.\n",
		"name": "Blue Stripes Commando",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "hk8QrWJKUNO6shF2lfLHng",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/blue-stripes-commando-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/hk8QrWJKUNO6shF2lfLHng/variations/5cszaWYkUbeOR0YlK9OSmg",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "5cszaWYkUbeOR0YlK9OSmg"
			}
		]
	},
	"Blue Stripes Scout": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/6mb4BjFJUKiOY3UfKkEVgQ",
				"name": "Blue Stripes"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Blue Stripes and Scoia'tael are similar in one regard – hatred fuels both.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/iMj_PPeOWAe8v8oYIMXMww",
		"info": "Deploy: Gain 2 Armor.\nDeploy: Clear Weather from the row on your side.\nCrewmen 1.\n",
		"name": "Blue Stripes Scout",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "iMj_PPeOWAe8v8oYIMXMww",
		"variations": [
			{
				"art": {
					"artist": "Marta Dettlaff",
					"thumbnailImage": "https://api.gwentapi.com/media/blue-stripes-scout-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/iMj_PPeOWAe8v8oYIMXMww/variations/3trBricJWPe9OxgNrFCRUw",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "3trBricJWPe9OxgNrFCRUw"
			}
		]
	},
	"Blueboy Lugos": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "I'm near ready to puke from boredom.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/CRhj7cBlWeSIByK1_kymog",
		"info": "Veteran 1.\nDeploy: Spawn a Spectral Whale on your opponent's side.\n",
		"name": "Blueboy Lugos",
		"positions": [
			"Melee"
		],
		"strength": 6,
		"uuid": "CRhj7cBlWeSIByK1_kymog",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/blueboy-lugos-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/CRhj7cBlWeSIByK1_kymog/variations/9rAqak2jXiO0QjyBTk6yyQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "9rAqak2jXiO0QjyBTk6yyQ"
			}
		]
	},
	"Botchling": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ",
				"name": "Cursed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Admit your mistakes and bury them proper – else they'll come back to haunt you.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/Jx2KccPMUyWlkVL3mc4s9w",
		"info": "Deploy: Boost all Lubberkins in your Hand, Deck and Graveyard by 5.\nDeathwish: Play a Lubberkin from your Deck.\n",
		"name": "Botchling",
		"positions": [
			"Melee"
		],
		"strength": 5,
		"uuid": "Jx2KccPMUyWlkVL3mc4s9w",
		"variations": [
			{
				"art": {
					"artist": "Katarzyna Redesiuk",
					"thumbnailImage": "https://api.gwentapi.com/media/botchling-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/Jx2KccPMUyWlkVL3mc4s9w/variations/ni3sfRexXimEKoL-T-wH_Q",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "ni3sfRexXimEKoL-T-wH_Q"
			}
		]
	},
	"Braenn": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Mona…? No… no. I'm Braenn. A daughter of Brokilon.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/F_rXaZNeVuKwn_aKwoCjLQ",
		"info": "Deploy: Damage an Enemy by this Unit's Power.\n",
		"name": "Braenn",
		"positions": [
			"Ranged"
		],
		"strength": 5,
		"uuid": "F_rXaZNeVuKwn_aKwoCjLQ",
		"variations": [
			{
				"art": {
					"artist": "Miles Johnston, Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/braenn-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/F_rXaZNeVuKwn_aKwoCjLQ/variations/Y7OaZGTmWauZ1bYj58Ha6w",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "Y7OaZGTmWauZ1bYj58Ha6w"
			}
		]
	},
	"Brouver Hoog": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "That doddery dolt? Ye cannae even tell if he's alive or stuffed!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/61CL3W4jXw-oi4bi5JIbjg",
		"info": "Spawn Brouver Hoog\nDeploy: Play a Silver Unit from your Deck. Shuffle the others back.\n",
		"name": "Brouver Hoog",
		"positions": [
			"Event"
		],
		"strength": 4,
		"uuid": "61CL3W4jXw-oi4bi5JIbjg",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/brouver-hoog-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/61CL3W4jXw-oi4bi5JIbjg/variations/7qY0UgW_U0Ou1K_cbeGnsw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "7qY0UgW_U0Ou1K_cbeGnsw"
			}
		]
	},
	"Cahir": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/27_uBiygVSmMLu-FnPZekw",
				"name": "Stubborn"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "His eyes flashed under his winged helmet. Fire gleamed from his sword's blade.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/7QziT-N2W-GCFrNGWwUQEw",
		"info": "Deploy: If playing as Nilfgaard, trigger your Leader's Deploy ability.\n",
		"name": "Cahir",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "7QziT-N2W-GCFrNGWwUQEw",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/cahir-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/7QziT-N2W-GCFrNGWwUQEw/variations/riX5ICW5XmaTOPtENc6Vcg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "riX5ICW5XmaTOPtENc6Vcg"
			}
		]
	},
	"Cantarella": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Men require constant alluring. Mystique and refinement do the job quite well.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/bLkeCcb0VeaNNS2J73VLVA",
		"info": "Deploy: Draw the top card from your Deck. Keep it, or place it at the bottom of your Deck and draw the new top card.\n",
		"name": "Cantarella",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 10,
		"uuid": "bLkeCcb0VeaNNS2J73VLVA",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/cantarella-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/bLkeCcb0VeaNNS2J73VLVA/variations/YeyhsZVUX2W16gEXl0wk6A",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "YeyhsZVUX2W16gEXl0wk6A"
			}
		]
	},
	"Caranthir": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw",
				"name": "Wild Hunt"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "A favorite son who chose a life of villainy.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/yloS6Jo9Uvm8ldzQi1BSSg",
		"info": "Deploy: Move 3 Enemies to this Unit's row on your opponent's side and apply Frost to that row on that side only.\n",
		"name": "Caranthir",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 9,
		"uuid": "yloS6Jo9Uvm8ldzQi1BSSg",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/caranthir-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/yloS6Jo9Uvm8ldzQi1BSSg/variations/TvNdDoBUXaeelycudTKrZA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "TvNdDoBUXaeelycudTKrZA"
			}
		]
	},
	"Caretaker": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw",
				"name": "Relict"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "There are more things in heaven and earth than all the world's philosophers have dreamt.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/U0TZoPPOW9apZe5mGJjRjg",
		"info": "Deploy: Resurrect a Unit from your opponent's Graveyard.\n",
		"name": "Caretaker",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "U0TZoPPOW9apZe5mGJjRjg",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/caretaker-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/U0TZoPPOW9apZe5mGJjRjg/variations/Ds9D9Yv1VAe-Q42ECpm8Iw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "Ds9D9Yv1VAe-Q42ECpm8Iw"
			}
		]
	},
	"Ceallach": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Your Imperial Highness… blurted out the seneschal, whose presence until now had been thoroughly ignored. I beg your pardon, but Cahir… My son...",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/wCID1BLQUES8gX1mfj2s2A",
		"info": "Deploy: Move 2 Bronze Spying Enemies to your side.\n",
		"name": "Ceallach",
		"positions": [
			"Melee"
		],
		"strength": 8,
		"uuid": "wCID1BLQUES8gX1mfj2s2A",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/ceallach-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/wCID1BLQUES8gX1mfj2s2A/variations/dZRQI0_1UsmBjQc4bm8zqg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "dZRQI0_1UsmBjQc4bm8zqg"
			}
		]
	},
	"Celaeno Harpy": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ",
				"name": "Beast"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Common harpies feed on carrion. Celaeno harpies… they feed on dreams.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/N4PKsF6dUSClL3pJn3-2Wg",
		"info": "Deploy: Spawn 2 Harpy Eggs to the left of this Unit.\n",
		"name": "Celaeno Harpy",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "N4PKsF6dUSClL3pJn3-2Wg",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/celaeno-harpy-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/N4PKsF6dUSClL3pJn3-2Wg/variations/KJkPIKS3VNedzYmsVdq1Ww",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "KJkPIKS3VNedzYmsVdq1Ww"
			}
		]
	},
	"Cerys": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "They call me Sparrowhawk. Know why? Because I eat rats like you for breakfast.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/OAlNhSDzVZ6xt5aRmUdu4Q",
		"info": "After 4 Units are Resurrected on your side while this Unit is in the Graveyard, Resurrect it.\n",
		"name": "Cerys",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "OAlNhSDzVZ6xt5aRmUdu4Q",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/cerys-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/OAlNhSDzVZ6xt5aRmUdu4Q/variations/EmfZLmDEXIa6vOo_um4jSw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "EmfZLmDEXIa6vOo_um4jSw"
			}
		]
	},
	"Champion of Champions": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ",
				"name": "Ogroid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "He'll not reveal his name till he's defeated. He's a troll errant, see?",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/sn82k-BRVtSN6LmEdpGakg",
		"info": "Every turn, at the start of your turn, Strengthen this Unit by 2 if it is the only Unit on the row.\n",
		"name": "Champion of Champions",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "sn82k-BRVtSN6LmEdpGakg",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/champion-of-champions-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/sn82k-BRVtSN6LmEdpGakg/variations/Xp-gWAmzVu2huZ-UDASizA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "Xp-gWAmzVu2huZ-UDASizA"
			}
		]
	},
	"Chort": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw",
				"name": "Relict"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "A member of the Bovine Defense Force. Semper fi!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/Lv2n7qW8XKOl_PhVTR-AXA",
		"info": "Deploy, Brave: Strengthen self by 4.\n",
		"name": "Chort",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "Lv2n7qW8XKOl_PhVTR-AXA",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/chort-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/Lv2n7qW8XKOl_PhVTR-AXA/variations/A6naXz1DVKOqYXGzOS6t4Q",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "A6naXz1DVKOqYXGzOS6t4Q"
			}
		]
	},
	"Ciaran": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "The path to freedom is paved in blood, not ink.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/OFonhAdJXP-olNm-QCB_jw",
		"info": "Deploy: Toggle a Unit's Lock and move it to this row on its side.\n",
		"name": "Ciaran",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "OFonhAdJXP-olNm-QCB_jw",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/ciaran-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/OFonhAdJXP-olNm-QCB_jw/variations/9YoVITPFXCKM1K-TpWFMNg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "9YoVITPFXCKM1K-TpWFMNg"
			}
		]
	},
	"Ciri": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "I go wherever I please, whenever I please.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/AhNJa4AfX86UnZsxMmuILQ",
		"info": "At the end of the Round, return this Unit to your Hand if you lost.\n",
		"name": "Ciri",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "AhNJa4AfX86UnZsxMmuILQ",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/ciri-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/AhNJa4AfX86UnZsxMmuILQ/variations/vV1ILCBAX_CVpXEqQIT28Q",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "vV1ILCBAX_CVpXEqQIT28Q"
			}
		]
	},
	"Ciri: Dash": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Know when fairy tales cease to be tales? When people start believing them.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/TxoSrAY6V62h0Ue6i62_wg",
		"info": "When this Unit enters the Graveyard, Strengthen it by 3 and shuffle it back into your Deck.\n",
		"name": "Ciri: Dash",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 9,
		"uuid": "TxoSrAY6V62h0Ue6i62_wg",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/ciri-dash-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/TxoSrAY6V62h0Ue6i62_wg/variations/ckGTWvJAXsa54D7J1b572Q",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "ckGTWvJAXsa54D7J1b572Q"
			}
		]
	},
	"Clan Brokvar Archer": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "So ye can hit a movin' target at two hundred paces? Me, too. In a storm.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/irbdjPrfX1ezExZQ1ZkyxA",
		"info": "Veteran 1.\nDeploy: Damage 3 Units by 1.\n",
		"name": "Clan Brokvar Archer",
		"positions": [
			"Siege"
		],
		"strength": 5,
		"uuid": "irbdjPrfX1ezExZQ1ZkyxA",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-brokvar-archer-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/irbdjPrfX1ezExZQ1ZkyxA/variations/yIqHOD2mVrarj1hOAgedng",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "yIqHOD2mVrarj1hOAgedng"
			}
		]
	},
	"Clan Brokvar Hunter": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Better believe we can hunt. Thing is, not much game on Spikeroog…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/m-pK_rH7WRuVvx7JY8YHDw",
		"info": "Whenever a Unit adjacent to this Unit is Damaged, Strengthen self by 1.\nDeploy: Damage a Unit by 3.\n",
		"name": "Clan Brokvar Hunter",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "m-pK_rH7WRuVvx7JY8YHDw",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-brokvar-hunter-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/m-pK_rH7WRuVvx7JY8YHDw/variations/0wGFKXTrWvKJzz9Z6a0oQg",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "0wGFKXTrWvKJzz9Z6a0oQg"
			}
		]
	},
	"Clan Dimun Pirate": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Can see the fear in their eyes. Fear o' me… fear o' Clan Dimun!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/-7iMsZFOXJKzlIYkHMajRQ",
		"info": "Veteran 1.\nDeploy: Discard all copies of this Unit from your Deck.\n",
		"name": "Clan Dimun Pirate",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "-7iMsZFOXJKzlIYkHMajRQ",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-dimun-pirate-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/-7iMsZFOXJKzlIYkHMajRQ/variations/gt6ceb7iV0GtGHY3rUMvig",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "gt6ceb7iV0GtGHY3rUMvig"
			}
		]
	},
	"Clan Dimun Pirate Captain": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Haul together, hoist the colors high!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/_n4QZKc_XIekZg5v562PGw",
		"info": "Veteran 1.\nWhenever a Unit is Discarded to your Graveyard, Boost self by 1 while in your Hand, Deck or on your side of the Board.\n",
		"name": "Clan Dimun Pirate Captain",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "_n4QZKc_XIekZg5v562PGw",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio, Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-dimun-pirate-captain-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/_n4QZKc_XIekZg5v562PGw/variations/W6RQluw4VsOHCRP_CMCa3w",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "W6RQluw4VsOHCRP_CMCa3w"
			}
		]
	},
	"Clan Drummond Shieldmaiden": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "They'll shatter on our shields like waves on a craggy shore.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/ilvR1xZeXMCRI9myd7BWIg",
		"info": "Deploy: Damage a Unit by 2. If it was already Damaged, play a Clan Drummond Shieldmaiden from your Deck.\n",
		"name": "Clan Drummond Shieldmaiden",
		"positions": [
			"Ranged"
		],
		"strength": 3,
		"uuid": "ilvR1xZeXMCRI9myd7BWIg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-drummond-shieldmaiden-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/ilvR1xZeXMCRI9myd7BWIg/variations/5fjsWzXHW-yhPnkHRgA4wQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "5fjsWzXHW-yhPnkHRgA4wQ"
			}
		]
	},
	"Clan Heymaey Skald": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "The deeds of Clan Heymaey will go down in history.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/UbkjAo29W4mY1xZqEr8r1Q",
		"info": "Veteran 1.\nDeploy: Boost 3 Units to the left by 3, 2 and 1 respectively.\n",
		"name": "Clan Heymaey Skald",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "UbkjAo29W4mY1xZqEr8r1Q",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-heymaey-skald-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/UbkjAo29W4mY1xZqEr8r1Q/variations/aflZH6j6XHOS2xHHec1dmw",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "aflZH6j6XHOS2xHHec1dmw"
			}
		]
	},
	"Clan Tordarroch Armorsmith": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Ye're in for a poundin'.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/cPCPFyBhUNCnpJDp5LuvIA",
		"info": "Veteran 1.\nDeploy: Heal 3 Units to the left.\n",
		"name": "Clan Tordarroch Armorsmith",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "cPCPFyBhUNCnpJDp5LuvIA",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-tordarroch-armorsmith-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/cPCPFyBhUNCnpJDp5LuvIA/variations/j7voCohVVQKkAaJ_62_Onw",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "j7voCohVVQKkAaJ_62_Onw"
			}
		]
	},
	"Clan Tordarroch Shieldsmith": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Remember me words – a good shield can save yer life.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/36aKwkLlWDa1GEvbe9rBEg",
		"info": "Veteran 1.\nDeploy: Strengthen an Ally by 2.\n",
		"name": "Clan Tordarroch Shieldsmith",
		"positions": [
			"Siege"
		],
		"strength": 5,
		"uuid": "36aKwkLlWDa1GEvbe9rBEg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-tordarroch-shieldsmith-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/36aKwkLlWDa1GEvbe9rBEg/variations/GUYHzf6dUWGxda3UYIJZFQ",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "GUYHzf6dUWGxda3UYIJZFQ"
			}
		]
	},
	"Clan Tuirseach Axeman": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Swords are for wenches. Get yourself an axe.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/OBwsQEtRWgWvZWqQ04w1Pw",
		"info": "Whenever an Enemy is Damaged, Boost self by 1.\nDeploy: Gain 2 Armor.\n",
		"name": "Clan Tuirseach Axeman",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "OBwsQEtRWgWvZWqQ04w1Pw",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-tuirseach-axeman-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/OBwsQEtRWgWvZWqQ04w1Pw/variations/LJWx84SrWFeVojJga2l4fA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "LJWx84SrWFeVojJga2l4fA"
			}
		]
	},
	"Clan Tuirseach Skirmishers": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Friends we show heart, foes we show our axe. Remember that.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/PxhzlhmNUO61AOxhHhGN3w",
		"info": "Veteran 1.\nWhenever this Unit enters the Graveyard, Strengthen it by 3.\n",
		"name": "Clan Tuirseach Skirmishers",
		"positions": [
			"Melee"
		],
		"strength": 6,
		"uuid": "PxhzlhmNUO61AOxhHhGN3w",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-tuirseach-skirmishers-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/PxhzlhmNUO61AOxhHhGN3w/variations/A7hg6ZloXXqIvlAKiIKhog",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "A7hg6ZloXXqIvlAKiIKhog"
			}
		]
	},
	"Clan an Craite Raider": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "We are An Craite! What others buy with gold, we buy with our lifeblood.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/-mYoNRB-WXGxIXsua83opg",
		"info": "Veteran 1.\nWhenever this Unit is Discarded, Resurrect it immediately.\n",
		"name": "Clan an Craite Raider",
		"positions": [
			"Melee"
		],
		"strength": 4,
		"uuid": "-mYoNRB-WXGxIXsua83opg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-an-craite-raider-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/-mYoNRB-WXGxIXsua83opg/variations/-p6q-nZiV42Ksy0AwXeldQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "-p6q-nZiV42Ksy0AwXeldQ"
			}
		]
	},
	"Clan an Craite Warcrier": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Every man, woman and child in Skellige can split a foe with an axe. Only a select few can split enemy ears with a rage-filled cry.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/JniGwvqIV2253E5OIhfAUg",
		"info": "Veteran 1.\nDeploy: Boost 3 Damaged Units to the left by half their Power (rounding down).\n",
		"name": "Clan an Craite Warcrier",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "JniGwvqIV2253E5OIhfAUg",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-an-craite-warcrier-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/JniGwvqIV2253E5OIhfAUg/variations/L6HkJ_u8VhCfekr-GfOV2g",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "L6HkJ_u8VhCfekr-GfOV2g"
			}
		]
	},
	"Clan an Craite Warrior": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Our clan's bards will sing of my deeds long after you're dead and forgotten!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/4aafCWy6XE6Vzrcwpk_JVQ",
		"info": "Veteran 1.\nDeploy: Damage self by 1.\n",
		"name": "Clan an Craite Warrior",
		"positions": [
			"Melee"
		],
		"strength": 9,
		"uuid": "4aafCWy6XE6Vzrcwpk_JVQ",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio, Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/clan-an-craite-warrior-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/4aafCWy6XE6Vzrcwpk_JVQ/variations/Qkf3YYO9VSWobDHuxovb9Q",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "Qkf3YYO9VSWobDHuxovb9Q"
			}
		]
	},
	"Cleaver": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA",
				"name": "Dwarf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Everyone wantin' to trade in Novigrad's got a clear choice - agree terms with Cleaver or kiss their knees farewell.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/cvrYlp_0XQmj-2LvlZVnFQ",
		"info": "Deploy: Toggle a Unit's Lock.\n",
		"name": "Cleaver",
		"positions": [
			"Melee"
		],
		"strength": 6,
		"uuid": "cvrYlp_0XQmj-2LvlZVnFQ",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/cleaver-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/cvrYlp_0XQmj-2LvlZVnFQ/variations/VzuK7HwYWKmJKbPfbIqZlA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "VzuK7HwYWKmJKbPfbIqZlA"
			}
		]
	},
	"Combat Engineer": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Want irrefutable proof of civilization's advance? Look at war. Man gets better at killing with each one.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/Xzm_18KPXAejou0c8Nq1eA",
		"info": "Deploy: Toggle a Unit's Resilience.\n",
		"name": "Combat Engineer",
		"positions": [
			"Siege"
		],
		"strength": 2,
		"uuid": "Xzm_18KPXAejou0c8Nq1eA",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio, Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/combat-engineer-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/Xzm_18KPXAejou0c8Nq1eA/variations/m_J3z5ZeUIOAWNQ47O-RBw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "m_J3z5ZeUIOAWNQ47O-RBw"
			}
		]
	},
	"Commander's Horn": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Plus one to morale, minus one to hearing.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/nmXBiYvjUTaV1d9lwTAbdQ",
		"info": "Boost 5 adjacent Units by 4.\n",
		"name": "Commander's Horn",
		"positions": [
			"Event"
		],
		"uuid": "nmXBiYvjUTaV1d9lwTAbdQ",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/commander-s-horn-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/nmXBiYvjUTaV1d9lwTAbdQ/variations/fu-egAKFVOuRSVibjnf5zw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "fu-egAKFVOuRSVibjnf5zw"
			}
		]
	},
	"Commando Neophyte": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Many nonhumans, fed up with the racism and xenophobia they encounter in the cities, decide to join the Scoia'tael.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/K28cA2TGWrGm4yItVifZdQ",
		"info": "Whenever you Mulligan a card, Damage a random Enemy by 2.\n",
		"name": "Commando Neophyte",
		"positions": [
			"Melee"
		],
		"strength": 7,
		"uuid": "K28cA2TGWrGm4yItVifZdQ",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/commando-neophyte-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/K28cA2TGWrGm4yItVifZdQ/variations/Fv0Q85IGUdmSvuFeX59oUg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "Fv0Q85IGUdmSvuFeX59oUg"
			}
		]
	},
	"Coral": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Her true name's Astrid Lyttneyd Ásgeirrfinnbjornsdottir, but that never fit on any forms.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/l-m3HACVVXiF54qom24CMQ",
		"info": "Deploy: Pick a Unit and Damage all Units on its row by half their Power (rounding up and ignoring Armor).\n",
		"name": "Coral",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "l-m3HACVVXiF54qom24CMQ",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/coral-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/l-m3HACVVXiF54qom24CMQ/variations/56RS5Uw2WIWgBn16U7NSgw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "56RS5Uw2WIWgBn16U7NSgw"
			}
		]
	},
	"Crach an Craite": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Nilfgaardians call 'im Tirth ys Muire, the Wild Boar o' the Sea. Use 'im to scare their kiddies!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/0yevWlnyUP6GY9buxdNQWg",
		"info": "Spawn Crach an Craite\nDeploy: Play the Highest Loyal Bronze or Silver Unit in your Deck, Strengthen it by 3 and Damage it by 1.\n",
		"name": "Crach an Craite",
		"positions": [
			"Event"
		],
		"strength": 4,
		"uuid": "0yevWlnyUP6GY9buxdNQWg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio, Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/crach-an-craite-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/0yevWlnyUP6GY9buxdNQWg/variations/Y_-_DkdMWJGVnLV7c1yBmw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "Y_-_DkdMWJGVnLV7c1yBmw"
			}
		]
	},
	"Crone: Brewess": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "We'll cut you up, boy. A fine broth you'll make.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/bDMjrZSEV3CducTOYMiKMQ",
		"info": "Deploy: Play Whispess and Weavess from your Deck.\n",
		"name": "Crone: Brewess",
		"positions": [
			"Siege"
		],
		"strength": 8,
		"uuid": "bDMjrZSEV3CducTOYMiKMQ",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/crone-brewess-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/bDMjrZSEV3CducTOYMiKMQ/variations/Gfyt3wS_U2SgxHGCzgogmA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "Gfyt3wS_U2SgxHGCzgogmA"
			}
		]
	},
	"Crone: Weavess": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "I sense your pain. I see your fear.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/mESx6zNFXsKSAw919qH35Q",
		"info": "Deploy: Play Brewess and Whispess from your Deck.\n",
		"name": "Crone: Weavess",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "mESx6zNFXsKSAw919qH35Q",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/crone-weavess-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/mESx6zNFXsKSAw919qH35Q/variations/JF_g_UCOV7uMWb2_kw-88w",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "JF_g_UCOV7uMWb2_kw-88w"
			}
		]
	},
	"Crone: Whispess": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "I'd be your best – and last.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/lKFYB2atWvq7A5MkF_1-mg",
		"info": "Deploy: Play Brewess and Weavess from your Deck.\n",
		"name": "Crone: Whispess",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "lKFYB2atWvq7A5MkF_1-mg",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/crone-whispess-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/lKFYB2atWvq7A5MkF_1-mg/variations/GBJSytlCW_62nC9sJG2gig",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "GBJSytlCW_62nC9sJG2gig"
			}
		]
	},
	"Cynthia": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Cynthia's talents can be deadly. She needs a tight leash.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/UTSsWC-XXSad7PMdXsqYhQ",
		"info": "Deploy: Reveal one of the Highest Units in your opponent's Hand (including Golds) and Boost self by its Power.\n",
		"name": "Cynthia",
		"positions": [
			"Ranged"
		],
		"strength": 5,
		"uuid": "UTSsWC-XXSad7PMdXsqYhQ",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/cynthia-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/UTSsWC-XXSad7PMdXsqYhQ/variations/_HCldbFlUmeFzIGI_cqVLA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "_HCldbFlUmeFzIGI_cqVLA"
			}
		]
	},
	"Cyprian Wiley": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "One of four bosses who control the city's underworld - the others being Sigi Reuven, Carlo The Cleaver Varese and the King of Beggars.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/FpYlvbJwU3GVcCiM72ZUXw",
		"info": "Deploy: Weaken a Unit by 3 or Destroy an Ambush Unit.\n",
		"name": "Cyprian Wiley",
		"positions": [
			"Siege"
		],
		"strength": 7,
		"uuid": "FpYlvbJwU3GVcCiM72ZUXw",
		"variations": [
			{
				"art": {
					"artist": "Alicja Kapustka",
					"thumbnailImage": "https://api.gwentapi.com/media/cyprian-wiley-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/FpYlvbJwU3GVcCiM72ZUXw/variations/SdxJpeg0V2OO7yiHsX0wVg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "SdxJpeg0V2OO7yiHsX0wVg"
			}
		]
	},
	"Daerlan Foot Soldiers": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Learned a lot at Braibant Military Academy. How to scrub potatoes, for instance.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/RvqLmbRKXxqw5S9UKcPGRw",
		"info": "Whenever this Unit is Revealed, play it and draw the top card from your Deck.\n",
		"name": "Daerlan Foot Soldiers",
		"positions": [
			"Melee"
		],
		"strength": 4,
		"uuid": "RvqLmbRKXxqw5S9UKcPGRw",
		"variations": [
			{
				"art": {
					"artist": "Alicja Kapustka",
					"thumbnailImage": "https://api.gwentapi.com/media/daerlan-foot-soldiers-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/RvqLmbRKXxqw5S9UKcPGRw/variations/_aw78eU7XEirjlVZC-LDzA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "_aw78eU7XEirjlVZC-LDzA"
			}
		]
	},
	"Dagon": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "That is not dead which can eternal lie, and with strange aeons even death may die.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/a8bdVQGjV6KaullcE8mc9Q",
		"info": "Spawn Dagon.\nDeploy: Spawn Biting Frost, Impenetrable Fog or Torrential Rain.\n",
		"name": "Dagon",
		"positions": [
			"Event"
		],
		"strength": 6,
		"uuid": "a8bdVQGjV6KaullcE8mc9Q",
		"variations": [
			{
				"art": {
					"artist": "Alejandro Mirabal",
					"thumbnailImage": "https://api.gwentapi.com/media/dagon-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/a8bdVQGjV6KaullcE8mc9Q/variations/qitgaTPXWDavN66eb87TKw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "qitgaTPXWDavN66eb87TKw"
			}
		]
	},
	"Dandelion": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Dandelion, you're a cynic, a lecher, a liar – and my best friend.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/9dOGFiu7Vom0QV2-GPaqpQ",
		"info": "Deploy: Boost up to 3 Bronze or Silver Units in your Deck by 3, then shuffle your Deck.\n",
		"name": "Dandelion",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "9dOGFiu7Vom0QV2-GPaqpQ",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/dandelion-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/9dOGFiu7Vom0QV2-GPaqpQ/variations/J5DJ24pQWe6fg0gnUQKdEg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "J5DJ24pQWe6fg0gnUQKdEg"
			}
		]
	},
	"Decoy": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "When you run out of peasants, decoys also make decent arrow fodder.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/x0KYIX5mXk6aIQwgv7ITZQ",
		"info": "Return an Ally to your Hand, Boost it by 3 and play it.\n",
		"name": "Decoy",
		"positions": [
			"Event"
		],
		"uuid": "x0KYIX5mXk6aIQwgv7ITZQ",
		"variations": [
			{
				"art": {
					"artist": "Alicja Użarowska",
					"thumbnailImage": "https://api.gwentapi.com/media/decoy-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/x0KYIX5mXk6aIQwgv7ITZQ/variations/-SCHzEPsW_qETnOmIr-psw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "-SCHzEPsW_qETnOmIr-psw"
			}
		]
	},
	"Dennis Cranmer": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA",
				"name": "Dwarf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "I know how to execute orders, so take your advice somewhere else.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/8qI4jHv4XQqEumzjxOZXTg",
		"info": "Deploy: Strengthen all other Bronze and Silver Dwarves in your Deck, Hand and on your side of the Board by 1.\n",
		"name": "Dennis Cranmer",
		"positions": [
			"Melee"
		],
		"strength": 8,
		"uuid": "8qI4jHv4XQqEumzjxOZXTg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/dennis-cranmer-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/8qI4jHv4XQqEumzjxOZXTg/variations/3ANbyuzKVbC2OdapTQPeLQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "3ANbyuzKVbC2OdapTQPeLQ"
			}
		]
	},
	"Dethmold": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "I once made a prisoner vomit his own entrails… Ah, good times…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/EsC3l8bKU_eV-bkqVOtQfQ",
		"info": "Deploy: Spawn Torrential Rain, Clear Skies or Alzur's Thunder.\n",
		"name": "Dethmold",
		"positions": [
			"Siege"
		],
		"strength": 3,
		"uuid": "EsC3l8bKU_eV-bkqVOtQfQ",
		"variations": [
			{
				"art": {
					"artist": "Lasahido Lius",
					"thumbnailImage": "https://api.gwentapi.com/media/dethmold-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/EsC3l8bKU_eV-bkqVOtQfQ/variations/wycWTkbuVZOphZO1ihV-Bg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "wycWTkbuVZOphZO1ihV-Bg"
			}
		]
	},
	"Dijkstra": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Really believe you can dupe me with that tale you just pulled from your arse?",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/f1KVhgFIViqvMH_o5VTBNA",
		"info": "Deploy: Play the top 2 cards in your Deck.\n",
		"name": "Dijkstra",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "f1KVhgFIViqvMH_o5VTBNA",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/dijkstra-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/f1KVhgFIViqvMH_o5VTBNA/variations/a_SsQ0huWrqGbkJ4AZex4w",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "a_SsQ0huWrqGbkJ4AZex4w"
			}
		]
	},
	"Dimeritium Bomb": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "An important part of every Witch Hunter's kit. In one muted flash, it turns the most powerful sorcerer into pork jelly ripe for cutting.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/8O1CKcf_UjWRmdfbAmkE-w",
		"info": "Choose 3 adjacent Units (can be Golds) and Reset them. If any are Gold, Demote them first.\n",
		"name": "Dimeritium Bomb",
		"positions": [
			"Event"
		],
		"uuid": "8O1CKcf_UjWRmdfbAmkE-w",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/dimeritium-bomb-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/8O1CKcf_UjWRmdfbAmkE-w/variations/EEhl3wGGX0eCJDQZZcXuvA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "EEhl3wGGX0eCJDQZZcXuvA"
			}
		]
	},
	"Dimeritium Shackles": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "The mage's arms were twisted and bound behind his back. The Redanians gave the fetters a good shake. Terranova cried out, lurched, bent backwards, bowed forward, then retched and groaned. It was clear of what his manacles were made.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/WA5NdIxvXOe8xEfXUHFNtQ",
		"info": "Choose a Unit (can be Gold) and toggle its Lock. If it is Gold, Demote it first.\n",
		"name": "Dimeritium Shackles",
		"positions": [
			"Event"
		],
		"uuid": "WA5NdIxvXOe8xEfXUHFNtQ",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/dimeritium-shackles-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/WA5NdIxvXOe8xEfXUHFNtQ/variations/dCJnIybQUuagf2UQiGgyeQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "dCJnIybQUuagf2UQiGgyeQ"
			}
		]
	},
	"Djenge Frett": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "When a warrant says dead or alive, most bounty hunters'll just kill you. Not me. Should I catch you, you'll hang, and I'll tickle your feet as you expire.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/bSOAPPVSU52oapkl-132Aw",
		"info": "Veteran 1.\nDeploy: Damage 3 Allies by 1 and Strengthen self by 1 for each.\n",
		"name": "Djenge Frett",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "bSOAPPVSU52oapkl-132Aw",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/djenge-frett-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/bSOAPPVSU52oapkl-132Aw/variations/-z5kirobVbO5fKTYVKfBBg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "-z5kirobVbO5fKTYVKfBBg"
			}
		]
	},
	"Dol Blathanna Archer": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Take another step, dh'oine. You'd look better with an arrow between your eyes.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/Vhp_DlSyXROg2jOmNeQCFA",
		"info": "Deploy: Damage Enemies by 3 and then 1.\n",
		"name": "Dol Blathanna Archer",
		"positions": [
			"Ranged"
		],
		"strength": 5,
		"uuid": "Vhp_DlSyXROg2jOmNeQCFA",
		"variations": [
			{
				"art": {
					"artist": "Ilker Serdar Yildiz",
					"thumbnailImage": "https://api.gwentapi.com/media/dol-blathanna-archer-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/Vhp_DlSyXROg2jOmNeQCFA/variations/wj4c_xwiXvyfzH5xJnaHkw",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "wj4c_xwiXvyfzH5xJnaHkw"
			}
		]
	},
	"Dol Blathanna Marksman": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "You might manage to hide from them, but once spotted, don't bother trying to run.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/CGyTeXeDVXSgpfpdm2kbKw",
		"info": "Every time this Unit is moved, Damage a random Enemy by 2.\nDeploy: Damage an Enemy by 2.\n",
		"name": "Dol Blathanna Marksman",
		"positions": [
			"Ranged"
		],
		"strength": 6,
		"uuid": "CGyTeXeDVXSgpfpdm2kbKw",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/dol-blathanna-marksman-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/CGyTeXeDVXSgpfpdm2kbKw/variations/lofmh-B5W3-uif0XklPt0A",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "lofmh-B5W3-uif0XklPt0A"
			}
		]
	},
	"Dol Blathanna Protector": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "As long as we stand, no human foot shall trample Dol Blathanna's meadows.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/s8pfZRN6UBuPkzDjUj1nqw",
		"info": "Whenever you play a Special card, Boost this Unit by 1 while in your Hand, Deck or on your side of the Board.\n",
		"name": "Dol Blathanna Protector",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 2,
		"uuid": "s8pfZRN6UBuPkzDjUj1nqw",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/dol-blathanna-protector-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/s8pfZRN6UBuPkzDjUj1nqw/variations/N0181DysVNWM3GjvDiHEEw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "N0181DysVNWM3GjvDiHEEw"
			}
		]
	},
	"Dol Blathanna Trapper": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "They track like hounds, run like deer and kill like heartless demons.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/-4hXN9rFUJ--NG63ti7Azg",
		"info": "Deploy: Spawn a Fireball Trap on an opposing row.\n",
		"name": "Dol Blathanna Trapper",
		"positions": [
			"Ranged"
		],
		"strength": 6,
		"uuid": "-4hXN9rFUJ--NG63ti7Azg",
		"variations": [
			{
				"art": {
					"artist": "Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/dol-blathanna-trapper-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/-4hXN9rFUJ--NG63ti7Azg/variations/e4y8bYmIUkGEX7fhIpGdHg",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "e4y8bYmIUkGEX7fhIpGdHg"
			}
		]
	},
	"Donar an Hindar": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "I've gathered all the jarls together. Now make your case.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/54IUWi1qUWmG6x3PCZRnRA",
		"info": "Veteran 1.\nDeploy: Toggle a Unit's Lock. Discard a random Bronze card from your opponent's Deck to your Graveyard.\n",
		"name": "Donar an Hindar",
		"positions": [
			"Ranged"
		],
		"strength": 6,
		"uuid": "54IUWi1qUWmG6x3PCZRnRA",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/donar-an-hindar-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/54IUWi1qUWmG6x3PCZRnRA/variations/Sg3g7UOnXcmwUXMkOXfPLg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "Sg3g7UOnXcmwUXMkOXfPLg"
			}
		]
	},
	"Draig Bon–Dhu": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Hear ye now the tale of the heroic deeds of Clan an Craite.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/Fct2qt0KXdGNoW4amR-p8A",
		"info": "Deploy: Strengthen up to 2 Units in your Graveyard by 3.\n",
		"name": "Draig Bon–Dhu",
		"positions": [
			"Siege"
		],
		"strength": 4,
		"uuid": "Fct2qt0KXdGNoW4amR-p8A",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/draig-bon-dhu-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/Fct2qt0KXdGNoW4amR-p8A/variations/rQSvuBQEWs-n4g5GAQsGaA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "rQSvuBQEWs-n4g5GAQsGaA"
			}
		]
	},
	"Draug": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/1JN4dSZjX8G-J58kruQ_hA",
				"name": "Specter"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Some men cannot admit defeat. Some keep fighting from beyond the grave.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/h2jLlO8UWcmBqB0qr5D8wg",
		"info": "Deploy: Damage a random Enemy by 1 (ignoring Armor). Repeat 6 times.\n",
		"name": "Draug",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "h2jLlO8UWcmBqB0qr5D8wg",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/draug-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/h2jLlO8UWcmBqB0qr5D8wg/variations/z_hg5u_GUw655_dwaAzQhw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "z_hg5u_GUw655_dwaAzQhw"
			}
		]
	},
	"Drought": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA",
				"name": "Weather"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Vicovaro scholars have determined that, in the absence of imperial aid, drought-stricken provinces lose half their population, two-thirds of their livestock and all their will to rebel.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/oGgn9jocX8mytKs4OTgFtA",
		"info": "Apply Drought to all rows on your opponent's side.\nDrought: Every turn, at the start of your turn, Damage one of the Lowest Units on the row by 2.\n",
		"name": "Drought",
		"positions": [
			"Event"
		],
		"uuid": "oGgn9jocX8mytKs4OTgFtA",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/drought-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/oGgn9jocX8mytKs4OTgFtA/variations/sJkuvPwOVHi2CChCQAg2kA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "sJkuvPwOVHi2CChCQAg2kA"
			}
		]
	},
	"Drowner": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg",
				"name": "Necrophage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Though the witchman lusts for gold, for the smiting of a drowner thou shalt give him but a silver penny, or three halfpence, at most.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/qIVSZxz9UsaUOORO2SdIFQ",
		"info": "Deploy: Move a Unit to this row on its side.\n",
		"name": "Drowner",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "qIVSZxz9UsaUOORO2SdIFQ",
		"variations": [
			{
				"art": {
					"artist": "Adrian Smith",
					"thumbnailImage": "https://api.gwentapi.com/media/drowner-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/qIVSZxz9UsaUOORO2SdIFQ/variations/7qFiiTZaU1ytKnvSdrPGIA",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "7qFiiTZaU1ytKnvSdrPGIA"
			}
		]
	},
	"Dudu": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw",
				"name": "Relict"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "A mimic, among the many other names for his sort: changelings, doublings, vexlings… or dopplers.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/9ACPtOWKV6OFT_iUvQ7E7w",
		"info": "Deploy: Choose an Enemy and copy its Power.\n",
		"name": "Dudu",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 1,
		"uuid": "9ACPtOWKV6OFT_iUvQ7E7w",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/dudu-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/9ACPtOWKV6OFT_iUvQ7E7w/variations/LDmYq3m6UVung9Iz_g0QPw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "LDmYq3m6UVung9Iz_g0QPw"
			}
		]
	},
	"Dun Banner Heavy Cavalry": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Always wondered – how the blazes do those lads handle nature's call…?",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/eVAFOwdNU6ip9AyvBm8DWQ",
		"info": "Deploy: Remove Armor from 2 Units and Boost self by the amount of Armor removed.\n",
		"name": "Dun Banner Heavy Cavalry",
		"positions": [
			"Siege"
		],
		"strength": 4,
		"uuid": "eVAFOwdNU6ip9AyvBm8DWQ",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/dun-banner-heavy-cavalry-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/eVAFOwdNU6ip9AyvBm8DWQ/variations/-V4yriL-W8qY4m9fUb6ntw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "-V4yriL-W8qY4m9fUb6ntw"
			}
		]
	},
	"Dun Banner Light Cavalry": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Stay calm, everyone. And be alert. The true owners of those cloaks and beaver–skin caps might be elsewhere.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/7uy2lCexXliNGpAhX5dWCg",
		"info": "If at the start of your turn you have not passed and are losing the Round by more than 20 Power, play this Unit from your Deck.\n",
		"name": "Dun Banner Light Cavalry",
		"positions": [
			"Ranged"
		],
		"strength": 4,
		"uuid": "7uy2lCexXliNGpAhX5dWCg",
		"variations": [
			{
				"art": {
					"artist": "Lasahido Lius",
					"thumbnailImage": "https://api.gwentapi.com/media/dun-banner-light-cavalry-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/7uy2lCexXliNGpAhX5dWCg/variations/or7DIfn4XICF4HDEx630yg",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "or7DIfn4XICF4HDEx630yg"
			}
		]
	},
	"Dwarven Mercenary": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA",
				"name": "Dwarf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "The key's mixin' pleasure an' business – like smackin' foes and gettin' coin for it.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/PE4uAMXIWtmZBKSoAF36Bw",
		"info": "Deploy: Move a Unit on another row to this row on its side. If it's an Ally, Boost it by 3.\n",
		"name": "Dwarven Mercenary",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "PE4uAMXIWtmZBKSoAF36Bw",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/dwarven-mercenary-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/PE4uAMXIWtmZBKSoAF36Bw/variations/ZhSgHZKNWq2vLtzhPKAwHQ",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "ZhSgHZKNWq2vLtzhPKAwHQ"
			}
		]
	},
	"Dwarven Skirmisher": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA",
				"name": "Dwarf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Worked a pickaxe all me life. Battleaxe won't be any trouble.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/nopqCR4FVtiVYIoUIPCqLA",
		"info": "Deploy: Damage an Enemy by 3. If the Unit was not Destroyed, Boost self by 2.\n",
		"name": "Dwarven Skirmisher",
		"positions": [
			"Siege"
		],
		"strength": 5,
		"uuid": "nopqCR4FVtiVYIoUIPCqLA",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/dwarven-skirmisher-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/nopqCR4FVtiVYIoUIPCqLA/variations/Ve4IKo39W2Wm9_xNUGzThg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "Ve4IKo39W2Wm9_xNUGzThg"
			}
		]
	},
	"Earth Elemental": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fSkGIO3GV8CMFm8EY5FHyw",
				"name": "Construct"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "How do you fight an earth elemental? You don't. You run. Fast as you can.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/pAqdb8zcUjqKWlMKy8X_Tw",
		"info": "Deploy: Give this Unit a Shield.\nDeathwish: Spawn 2 Lesser Earth Elementals at the end of the row.\n",
		"name": "Earth Elemental",
		"positions": [
			"Melee"
		],
		"strength": 6,
		"uuid": "pAqdb8zcUjqKWlMKy8X_Tw",
		"variations": [
			{
				"art": {
					"artist": "Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/earth-elemental-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/pAqdb8zcUjqKWlMKy8X_Tw/variations/e3kxC0vEW6ytImZjInHCJA",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "e3kxC0vEW6ytImZjInHCJA"
			}
		]
	},
	"Eithné": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "The dryad queen has eyes of molten silver, and a heart of cold–forged steel.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/xTEJt1aCXxWo-of63YYWVg",
		"info": "Spawn Eithné\nDeploy: Resurrect a Special card.\n",
		"name": "Eithné",
		"positions": [
			"Event"
		],
		"strength": 5,
		"uuid": "xTEJt1aCXxWo-of63YYWVg",
		"variations": [
			{
				"art": {
					"artist": "Dário Coelho",
					"thumbnailImage": "https://api.gwentapi.com/media/eithne-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/xTEJt1aCXxWo-of63YYWVg/variations/myA_8rvbXE6Ql-X7chxaAA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "myA_8rvbXE6Ql-X7chxaAA"
			}
		]
	},
	"Ekimmara": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/nfEYjnG7WJq7UQ6_OuZsmQ",
				"name": "Vampire"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Who would think that overgrown bats would have a taste for gaudy jewelry?",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/vaOCbK7RVaOFel11_dla3w",
		"info": "Deploy: Gain Resilience.\nDeploy: Consume an Ally.\n",
		"name": "Ekimmara",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "vaOCbK7RVaOFel11_dla3w",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/ekimmara-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/vaOCbK7RVaOFel11_dla3w/variations/sP3f1xLlWweFjwAmLuk9VQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "sP3f1xLlWweFjwAmLuk9VQ"
			}
		]
	},
	"Ele'yas": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Love justifies madness in any of its forms.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/x6z1ZsAXUd-feoAP3wUcHA",
		"info": "Deploy: Destroy an Ally and Damage an Enemy by the Destroyed Ally's Power.\n",
		"name": "Ele'yas",
		"positions": [
			"Melee"
		],
		"strength": 9,
		"uuid": "x6z1ZsAXUd-feoAP3wUcHA",
		"variations": [
			{
				"art": {
					"artist": "Diego de Almeida",
					"thumbnailImage": "https://api.gwentapi.com/media/ele-yas-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/x6z1ZsAXUd-feoAP3wUcHA/variations/MHxGqHcbW6ivs25ZmvRqqw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "MHxGqHcbW6ivs25ZmvRqqw"
			}
		]
	},
	"Elven Mercenary": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "I spit on Scoia'tael ideals, but not on their coin.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/d-uQXJFjXDijlwUOJ_Rk-A",
		"info": "Deploy: Draw the top 2 Bronze Special cards in your Deck. Play 1 and shuffle the other back.\n",
		"name": "Elven Mercenary",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 2,
		"uuid": "d-uQXJFjXDijlwUOJ_Rk-A",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/elven-mercenary-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/d-uQXJFjXDijlwUOJ_Rk-A/variations/zSRuGnRPVJSs86ICMOjpPA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "zSRuGnRPVJSs86ICMOjpPA"
			}
		]
	},
	"Elven Wardancer": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "You mean to say the she–elf danced amidst the fray? Have you lost your mind, corporal?!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/Xf2XAN9mXJ26xMlCGPRWYg",
		"info": "Whenever you Mulligan this Unit, play it from your Deck immediately.\n",
		"name": "Elven Wardancer",
		"positions": [
			"Melee"
		],
		"strength": 3,
		"uuid": "Xf2XAN9mXJ26xMlCGPRWYg",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/elven-wardancer-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/Xf2XAN9mXJ26xMlCGPRWYg/variations/gzbminc4Xl2z_mpiZRNv8Q",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "gzbminc4Xl2z_mpiZRNv8Q"
			}
		]
	},
	"Emhyr var Emreis": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "They do not call me the Patient. Take care they do not call you the Headless.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/l0iUO6eWWMSA7Z0jLWXRSw",
		"info": "Spawn Emhyr var Emreis\nDeploy: Return an Ally to your Hand, then play a card from your Hand (can be Gold).\n",
		"name": "Emhyr var Emreis",
		"positions": [
			"Event"
		],
		"strength": 6,
		"uuid": "l0iUO6eWWMSA7Z0jLWXRSw",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/emhyr-var-emreis-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/l0iUO6eWWMSA7Z0jLWXRSw/variations/JCE9nB0IX0ekOk1-cQsb6A",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "JCE9nB0IX0ekOk1-cQsb6A"
			}
		]
	},
	"Emissary": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "But… but there's no justice in it! One does not kill the messenger!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/AtKKDvuJWNu7QsWg_Zuggg",
		"info": "Deploy: Draw the top 2 Bronze Units (not including Emissaries) from your Deck. Play 1 and shuffle the other back.\n",
		"name": "Emissary",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 2,
		"uuid": "AtKKDvuJWNu7QsWg_Zuggg",
		"variations": [
			{
				"art": {
					"artist": "Bruno Biazotto",
					"thumbnailImage": "https://api.gwentapi.com/media/emissary-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/AtKKDvuJWNu7QsWg_Zuggg/variations/jck-hZyDVTGdqPhr0N8Mew",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "jck-hZyDVTGdqPhr0N8Mew"
			}
		]
	},
	"Epidemic": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Epidemics respect no persons, no borders.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/skl7tCzpXsSjZxX1iRj52A",
		"info": "Destroy all the Lowest Units.\n",
		"name": "Epidemic",
		"positions": [
			"Event"
		],
		"uuid": "skl7tCzpXsSjZxX1iRj52A",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/epidemic-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/skl7tCzpXsSjZxX1iRj52A/variations/r3WvqIu-UTWDf1gFC5be5g",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "r3WvqIu-UTWDf1gFC5be5g"
			}
		]
	},
	"Eredin": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Have some dignity. You know how this will end.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/zeJ6DKvuWCKNLuhFd0X2WQ",
		"info": "Spawn Eredin.\nDeploy: Spawn a Bronze Wild Hunt Unit.\n",
		"name": "Eredin",
		"positions": [
			"Event"
		],
		"strength": 5,
		"uuid": "zeJ6DKvuWCKNLuhFd0X2WQ",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/eredin-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/zeJ6DKvuWCKNLuhFd0X2WQ/variations/122yxE3WXMK39iNrjz2a5A",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "122yxE3WXMK39iNrjz2a5A"
			}
		]
	},
	"Ermion": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Only the ignorant dismiss the importance of myths.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/IjZSRrtzWYS_xKTyj2ylGg",
		"info": "Deploy: Draw the top 2 cards from your Deck, then Discard 2 cards (can be Golds) from your Hand.\n",
		"name": "Ermion",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "IjZSRrtzWYS_xKTyj2ylGg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/ermion-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/IjZSRrtzWYS_xKTyj2ylGg/variations/07Ewr6SZXUa0SEucAAks9A",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "07Ewr6SZXUa0SEucAAks9A"
			}
		]
	},
	"Eskel": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A",
				"name": "Witcher"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "I'm a simple witcher, Wolf. Don't fight dragons, don't fraternize with kings and don't sleep with sorceresses…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/HQCNfX-JW-6aWOOqME2Bcw",
		"info": "Deploy: Play Vesemir and Lambert from your Deck.\n",
		"name": "Eskel",
		"positions": [
			"Melee"
		],
		"strength": 5,
		"uuid": "HQCNfX-JW-6aWOOqME2Bcw",
		"variations": [
			{
				"art": {
					"artist": "Chris Rallis, Alicja Kapustka",
					"thumbnailImage": "https://api.gwentapi.com/media/eskel-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/HQCNfX-JW-6aWOOqME2Bcw/variations/H-7ys8UNXCSFKIVnF-pj3Q",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "H-7ys8UNXCSFKIVnF-pj3Q"
			}
		]
	},
	"Fake Ciri": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Here she comes, he thought, our imperial interest. A mock-princess, a mock-queen for Cintra. A mock-ruler for the mouth of the Yarra, future lifeblood of the empire.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/HgqYwnuoWA6Nnq0VoFTjNQ",
		"info": "If this Unit is Spying at the start of your turn, Boost it by 1. If it is Spying when your opponent passes, move it to the opposite side.\nDeploy: When you play this Unit on your side, Strengthen it by 3.\n",
		"name": "Fake Ciri",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "HgqYwnuoWA6Nnq0VoFTjNQ",
		"variations": [
			{
				"art": {
					"artist": "Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/fake-ciri-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/HgqYwnuoWA6Nnq0VoFTjNQ/variations/xd7T7X_ZU5KheA0eyMeGLw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "xd7T7X_ZU5KheA0eyMeGLw"
			}
		]
	},
	"Field Medic": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Stitch red to red, white to white, and everything will be all right.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/fSuTfITIXGC_qL1pL7ZY1w",
		"info": "Deploy: Choose a different Bronze Ally and shuffle it back into your Deck, then play a random Bronze Unit from your Deck.\n",
		"name": "Field Medic",
		"positions": [
			"Siege"
		],
		"strength": 4,
		"uuid": "fSuTfITIXGC_qL1pL7ZY1w",
		"variations": [
			{
				"art": {
					"artist": "Diego de Almeida",
					"thumbnailImage": "https://api.gwentapi.com/media/field-medic-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/fSuTfITIXGC_qL1pL7ZY1w/variations/MmRYCB90W4msm0Gtawsp1A",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "MmRYCB90W4msm0Gtawsp1A"
			}
		]
	},
	"Fiend": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw",
				"name": "Relict"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "A fiend looks a bit like a deer. An enormous, evil deer.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/wKqfFJysVdaDshrcOKeazQ",
		"info": "Deploy: Toggle a Unit's Lock. If it's an Enemy, Damage it by half its Power (rounding up and ignoring Armor).\n",
		"name": "Fiend",
		"positions": [
			"Melee"
		],
		"strength": 5,
		"uuid": "wKqfFJysVdaDshrcOKeazQ",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/fiend-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/wKqfFJysVdaDshrcOKeazQ/variations/P1KJwpiiU2W_TCV2zj1j6A",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "P1KJwpiiU2W_TCV2zj1j6A"
			}
		]
	},
	"Fire Elemental": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fSkGIO3GV8CMFm8EY5FHyw",
				"name": "Construct"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Can't stand the heat? Then you don't stand a chance.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/NVQZ7dpMVNCTV_glc72yiQ",
		"info": "Deploy: Spawn 3 Lesser Fire Elementals.\n",
		"name": "Fire Elemental",
		"positions": [
			"Siege"
		],
		"strength": 7,
		"uuid": "NVQZ7dpMVNCTV_glc72yiQ",
		"variations": [
			{
				"art": {
					"artist": "Bayard Wu ",
					"thumbnailImage": "https://api.gwentapi.com/media/fire-elemental-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/NVQZ7dpMVNCTV_glc72yiQ/variations/BBQWPaQNVROWtKTpzaphMg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "BBQWPaQNVROWtKTpzaphMg"
			}
		]
	},
	"Fire Scorpion": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g",
				"name": "Machine"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Not the best for taking cities, but great for razing them to the ground.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/aJw0-8wcUHGWGQWMsT7H4w",
		"info": "Whenever this Unit is Revealed, Damage a random Enemy by 3.\nDeploy: Damage an Enemy by 3.\n",
		"name": "Fire Scorpion",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "aJw0-8wcUHGWGQWMsT7H4w",
		"variations": [
			{
				"art": {
					"artist": "Diego de Almeida",
					"thumbnailImage": "https://api.gwentapi.com/media/fire-scorpion-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/aJw0-8wcUHGWGQWMsT7H4w/variations/8DWqUN5GVIOD5agw5a5psg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "8DWqUN5GVIOD5agw5a5psg"
			}
		]
	},
	"First Light": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "The sun's shinin', Dromle! The sun's shinin'! Maybe there's hope after all…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/Xpu3LwbtXI6tSGoQ9V926Q",
		"info": "Spawn Clear Skies or Rally.\n",
		"name": "First Light",
		"positions": [
			"Event"
		],
		"uuid": "Xpu3LwbtXI6tSGoQ9V926Q",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/first-light-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/Xpu3LwbtXI6tSGoQ9V926Q/variations/DcjSdZHwVKOuVw8P8gTMDg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "DcjSdZHwVKOuVw8P8gTMDg"
			}
		]
	},
	"Foglet": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg",
				"name": "Necrophage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Fog creeps on little cat feet. Foglets creep over the bodies of their victims.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/lSfg_zOVUlGtH_cVoB2-LQ",
		"info": "Whenever you apply Fog to an opposing row, play this Unit from your Deck or Resurrect it on that row on your side.\nWhen all Fog has been cleared from the Board, Destroy this Unit.\n",
		"name": "Foglet",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 2,
		"uuid": "lSfg_zOVUlGtH_cVoB2-LQ",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/foglet-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/lSfg_zOVUlGtH_cVoB2-LQ/variations/2gQmdBSIWROIUng0q_rx4A",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "2gQmdBSIWROIUng0q_rx4A"
			}
		]
	},
	"Foltest": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Don't need advisors and their schemes. I place my trust in my soldiers' blades.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/Zk8arw13UJqR9A3Ego82XA",
		"info": "Spawn Foltest\nDeploy: Boost all Loyal Bronze and Silver Units in your Hand and Deck by 1.\n",
		"name": "Foltest",
		"positions": [
			"Event"
		],
		"strength": 5,
		"uuid": "Zk8arw13UJqR9A3Ego82XA",
		"variations": [
			{
				"art": {
					"artist": "KD Stanton",
					"thumbnailImage": "https://api.gwentapi.com/media/foltest-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/Zk8arw13UJqR9A3Ego82XA/variations/D2V-VHSYU7mLta1X9j66PQ",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "D2V-VHSYU7mLta1X9j66PQ"
			}
		]
	},
	"Francesca": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "To live in peace, we first must kill. This is human oppression's cruel finale.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/5RiN5KiPW7KYOcyQxPX-pQ",
		"info": "Spawn Francesca\nDeploy: Mulligan up to 3 cards.\n",
		"name": "Francesca",
		"positions": [
			"Event"
		],
		"strength": 6,
		"uuid": "5RiN5KiPW7KYOcyQxPX-pQ",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/francesca-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/5RiN5KiPW7KYOcyQxPX-pQ/variations/Fwa1_a0EUOKZIG2NA8tETg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "Fwa1_a0EUOKZIG2NA8tETg"
			}
		]
	},
	"Frightener": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/fSkGIO3GV8CMFm8EY5FHyw",
				"name": "Construct"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "”What have I done?” the mage cried out, frightened of his own creation.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/A3Sr4enXWWebg1nRsiryXA",
		"info": "Deploy: Move a Unit on another row on this side to this row. Draw the top card from your Deck.\n",
		"name": "Frightener",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 10,
		"uuid": "A3Sr4enXWWebg1nRsiryXA",
		"variations": [
			{
				"art": {
					"artist": "Marta Dettlaff",
					"thumbnailImage": "https://api.gwentapi.com/media/frightener-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/A3Sr4enXWWebg1nRsiryXA/variations/0ZZTWa7aWfqFaSr31bUniQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "0ZZTWa7aWfqFaSr31bUniQ"
			}
		]
	},
	"Fringilla Vigo": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Magic is the highest good. It transcends all borders and divisions.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/Nt-dWBIkV3mjFqgGkZCEGw",
		"info": "Deploy: If Spying, set own base Power to 1.\nDeploy: Set the Power of the Unit on the right to that of the Unit on the left.\n",
		"name": "Fringilla Vigo",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "Nt-dWBIkV3mjFqgGkZCEGw",
		"variations": [
			{
				"art": {
					"artist": "Diego de Almeida",
					"thumbnailImage": "https://api.gwentapi.com/media/fringilla-vigo-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/Nt-dWBIkV3mjFqgGkZCEGw/variations/iKnfxnXGWgqsueVZGrO56w",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "iKnfxnXGWgqsueVZGrO56w"
			}
		]
	},
	"Gaunter O'Dimm": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw",
				"name": "Relict"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "He always grants exactly what you wish for. That's the problem.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/crXWNoq0Uz6I4IFzzR0U7w",
		"info": "Deploy: Guess whether a random Bronze or Silver Unit from your opponent's Deck is Higher or Lower than 5. Success: Play any card from your Deck. Shuffle the others back. Failure: Your opponent draws the top Bronze or Silver card from their Deck. Tie: Both players draw the top Bronze or Silver card from their Deck.\n",
		"name": "Gaunter O'Dimm",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "crXWNoq0Uz6I4IFzzR0U7w",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/gaunter-o-dimm-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/crXWNoq0Uz6I4IFzzR0U7w/variations/z_dK8PLJUdO36wTdiTU5sw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "z_dK8PLJUdO36wTdiTU5sw"
			}
		]
	},
	"Ge'els": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw",
				"name": "Wild Hunt"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Paintings should convey emotion, not words.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/1hlh82x3XKS57-UoU-fVSg",
		"info": "Deploy: Draw the top Gold card and top Silver card from your Deck. Play one and return the other to the top of your Deck.\n",
		"name": "Ge'els",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 2,
		"uuid": "1hlh82x3XKS57-UoU-fVSg",
		"variations": [
			{
				"art": {
					"artist": "Marta Dettlaff",
					"thumbnailImage": "https://api.gwentapi.com/media/ge-els-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/1hlh82x3XKS57-UoU-fVSg/variations/QhLksvM1VxOCIl2FjcCgqg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "QhLksvM1VxOCIl2FjcCgqg"
			}
		]
	},
	"Geralt": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A",
				"name": "Witcher"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "If that's what it takes to save the world, it's better to let that world die.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/-xkyMa0FUReU7GZ8FnYttg",
		"info": "Deploy, Brave: Strengthen self by 3.\n",
		"name": "Geralt",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 10,
		"uuid": "-xkyMa0FUReU7GZ8FnYttg",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/geralt-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/-xkyMa0FUReU7GZ8FnYttg/variations/p7T-xEEDUhag2R-ZACv4Fg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "p7T-xEEDUhag2R-ZACv4Fg"
			}
		]
	},
	"Geralt: Aard": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A",
				"name": "Witcher"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "A blast of concentrated energy that pummels everything in its path. Great for when you forget your keys.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/u28ZI1dEXLmb7GqkI-_pwQ",
		"info": "Deploy: Push 5 adjacent Enemies to the row above them and Damage them by 2.\n",
		"name": "Geralt: Aard",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "u28ZI1dEXLmb7GqkI-_pwQ",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/geralt-aard-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/u28ZI1dEXLmb7GqkI-_pwQ/variations/O_uYsFbOWjWUQzSEd795qQ",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "O_uYsFbOWjWUQzSEd795qQ"
			}
		]
	},
	"Geralt: Igni": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A",
				"name": "Witcher"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "A twist of a witcher's fingers can light a lamp… or incinerate a foe.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/cmv3BD6PWVy1GYKLBTsTYw",
		"info": "Deploy: Destroy all the Highest Units on the opposite row if that row totals 20 or more Power.\n",
		"name": "Geralt: Igni",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "cmv3BD6PWVy1GYKLBTsTYw",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/geralt-igni-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/cmv3BD6PWVy1GYKLBTsTYw/variations/vNg2v4kJXQqEKQCazO8GIA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "vNg2v4kJXQqEKQCazO8GIA"
			}
		]
	},
	"Ghoul": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg",
				"name": "Necrophage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "If ghouls are part of the Circle of Life… then it's one vicious circle.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/h-JdQJhcWC23Ml8rXWra2g",
		"info": "Deploy: Consume a random Unit from either Graveyard.\n",
		"name": "Ghoul",
		"positions": [
			"Melee"
		],
		"strength": 4,
		"uuid": "h-JdQJhcWC23Ml8rXWra2g",
		"variations": [
			{
				"art": {
					"artist": "Adrian Smith",
					"thumbnailImage": "https://api.gwentapi.com/media/ghoul-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/h-JdQJhcWC23Ml8rXWra2g/variations/aCHujK80VTaBSWsTGR5s3Q",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "aCHujK80VTaBSWsTGR5s3Q"
			}
		]
	},
	"Giant Toad": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ",
				"name": "Cursed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Big, bad, ugly. Squats in the sewers.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/ifp6TtTAUWir5uW1ul5jOQ",
		"info": "Deploy: Consume a card in your Hand, then draw the top card from your Deck.\n",
		"name": "Giant Toad",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "ifp6TtTAUWir5uW1ul5jOQ",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/giant-toad-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/ifp6TtTAUWir5uW1ul5jOQ/variations/JqP1gqdgWEKN1UMFY6XswQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "JqP1gqdgWEKN1UMFY6XswQ"
			}
		]
	},
	"Grave Hag": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg",
				"name": "Necrophage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Their long tongues're for slurping marrow – and whipping prey.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/WMieImRzW0CGWdoxhF8irA",
		"info": "After 1 turn, at the start of your turn, Consume all Units in your Graveyard, but only Boost self by 1 for each.\n",
		"name": "Grave Hag",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 2,
		"uuid": "WMieImRzW0CGWdoxhF8irA",
		"variations": [
			{
				"art": {
					"artist": "Adrian Smith",
					"thumbnailImage": "https://api.gwentapi.com/media/grave-hag-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/WMieImRzW0CGWdoxhF8irA/variations/NW_eOxM1UrCGFqUz9B3BJg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "NW_eOxM1UrCGFqUz9B3BJg"
			}
		]
	},
	"Gremist": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "An archdruid, a master of alchemy, and the grumpiest old fart in the Isles.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/t1X-DXiuWSu6PFtmfK_riQ",
		"info": "Deploy: Spawn Impenetrable Fog, Clear Skies or Bloodcurdling Roar.\n",
		"name": "Gremist",
		"positions": [
			"Siege"
		],
		"strength": 3,
		"uuid": "t1X-DXiuWSu6PFtmfK_riQ",
		"variations": [
			{
				"art": {
					"artist": "Bruno Biazotto",
					"thumbnailImage": "https://api.gwentapi.com/media/gremist-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/t1X-DXiuWSu6PFtmfK_riQ/variations/Ss0I7Fh-XlmC3C6zI4YVtg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "Ss0I7Fh-XlmC3C6zI4YVtg"
			}
		]
	},
	"Griffin": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ",
				"name": "Beast"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Griffins like to toy with their prey. Eat 'em alive, piece by piece.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/VJP1zx2JVFSv70nFW1aygQ",
		"info": "Deploy: Move a card from one Graveyard to the other.\n",
		"name": "Griffin",
		"positions": [
			"Siege"
		],
		"strength": 8,
		"uuid": "VJP1zx2JVFSv70nFW1aygQ",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/griffin-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/VJP1zx2JVFSv70nFW1aygQ/variations/8IXkJ71pU2-sR88NuBH-FA",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "8IXkJ71pU2-sR88NuBH-FA"
			}
		]
	},
	"Harald the Cripple": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "No one knows how he got his nickname – no one's dared to ask.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/QZioC31FWQCiwJfvIO9Bmw",
		"info": "Spawn Harald the Cripple\nDeploy: Damage a Unit by 5. If this Destroys it, repeat this ability with Damage Power reduced by 1.\n",
		"name": "Harald the Cripple",
		"positions": [
			"Event"
		],
		"strength": 3,
		"uuid": "QZioC31FWQCiwJfvIO9Bmw",
		"variations": [
			{
				"art": {
					"artist": "Tokkun Studio, Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/harald-the-cripple-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/QZioC31FWQCiwJfvIO9Bmw/variations/d0hcy2iEWFS2yvrC1n7E4g",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "d0hcy2iEWFS2yvrC1n7E4g"
			}
		]
	},
	"Harpy": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ",
				"name": "Beast"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "There are many species of harpy, and all are kleptomaniacs.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/7YljdPHXX7ur0qmSjmCKyw",
		"info": "Deploy: Trigger the Deathwish of Units adjacent to this Unit.\n",
		"name": "Harpy",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "7YljdPHXX7ur0qmSjmCKyw",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/harpy-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/7YljdPHXX7ur0qmSjmCKyw/variations/kcHVuyXyWxKO62Siarqekw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "kcHVuyXyWxKO62Siarqekw"
			}
		]
	},
	"Hawker Healer": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Sure, I'll patch you up. Gonna cost you though.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/ouoMDnCBXu6GYK3QF15k4A",
		"info": "Deploy: Boost 2 Units to the right by 3.\n",
		"name": "Hawker Healer",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "ouoMDnCBXu6GYK3QF15k4A",
		"variations": [
			{
				"art": {
					"artist": "Ilker Serdar Yildiz",
					"thumbnailImage": "https://api.gwentapi.com/media/hawker-healer-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/ouoMDnCBXu6GYK3QF15k4A/variations/f4fsXrHFVrKKL9iXLyXnFg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "f4fsXrHFVrKKL9iXLyXnFg"
			}
		]
	},
	"Hawker Smuggler": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "I fight for whoever's paying the best. Or whoever's easiest to rob.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/9PMjqSDGUw-wEKv0oCHM7Q",
		"info": "Whenever an Enemy appears, Boost self by 1.\n",
		"name": "Hawker Smuggler",
		"positions": [
			"Ranged"
		],
		"strength": 4,
		"uuid": "9PMjqSDGUw-wEKv0oCHM7Q",
		"variations": [
			{
				"art": {
					"artist": "Ilker Serdar Yildiz",
					"thumbnailImage": "https://api.gwentapi.com/media/hawker-smuggler-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/9PMjqSDGUw-wEKv0oCHM7Q/variations/qf3iGzUFXNS-hwGJMuP-XQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "qf3iGzUFXNS-hwGJMuP-XQ"
			}
		]
	},
	"Hawker Support": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Elf, dwarf, makes no difference – long as they've got coin.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/APt47SHbWqqENUjvyoQM8w",
		"info": "Deploy: Boost a Unit in your Hand by 3.\n",
		"name": "Hawker Support",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "APt47SHbWqqENUjvyoQM8w",
		"variations": [
			{
				"art": {
					"artist": "Ilker Serdar Yildiz",
					"thumbnailImage": "https://api.gwentapi.com/media/hawker-support-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/APt47SHbWqqENUjvyoQM8w/variations/b02zBWx4Xf67Wn1vZH90lA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "b02zBWx4Xf67Wn1vZH90lA"
			}
		]
	},
	"Henselt": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "King Henselt did not look like a thief, but, with all due respect, that's really what he was.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/lsF-j3LrVWyS01whktOyyg",
		"info": "Spawn Henselt\nDeploy: Choose a Bronze Ally. Play all copies of it from your Deck.\n",
		"name": "Henselt",
		"positions": [
			"Event"
		],
		"strength": 2,
		"uuid": "lsF-j3LrVWyS01whktOyyg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio, Marek Madej.",
					"thumbnailImage": "https://api.gwentapi.com/media/henselt-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/lsF-j3LrVWyS01whktOyyg/variations/-pfiDfCaWBGcNFOAEVE7oQ",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "-pfiDfCaWBGcNFOAEVE7oQ"
			}
		]
	},
	"Hjalmar": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Instead of mournin' the fallen, let's drink to their memory!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/_0daGcJyXrSnFSG_XACv8Q",
		"info": "Deploy: Spawn the Lord of Undvik on the leftmost side of the opposite row.\n",
		"name": "Hjalmar",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 13,
		"uuid": "_0daGcJyXrSnFSG_XACv8Q",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/hjalmar-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/_0daGcJyXrSnFSG_XACv8Q/variations/KtRk0jowVa-oH-bEdsVmAA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "KtRk0jowVa-oH-bEdsVmAA"
			}
		]
	},
	"Holger Blackhand": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Now let's drink to Emperor of Nilfgaard – may he die of somethin' hideous!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/z1TourxKUJqtcUNq7nEdgA",
		"info": "Veteran 1.\nDeploy: Damage a Unit by 5. If it was Destroyed, Strengthen one of the Highest Units in your Graveyard by 3.\n",
		"name": "Holger Blackhand",
		"positions": [
			"Siege"
		],
		"strength": 5,
		"uuid": "z1TourxKUJqtcUNq7nEdgA",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/holger-blackhand-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/z1TourxKUJqtcUNq7nEdgA/variations/VrF__5G7VIyVde4Uui0zZQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "VrF__5G7VIyVde4Uui0zZQ"
			}
		]
	},
	"Ice Giant": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ",
				"name": "Ogroid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Fled one time in my life. From the Ice Giant. And I'm not a bit ashamed.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/xVjZssOnUXKWUsoaAcRYAA",
		"info": "If Frost is anywhere on the Board, Boost self by 5. When the last Frost is cleared, Damage self by 5.\n",
		"name": "Ice Giant",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "xVjZssOnUXKWUsoaAcRYAA",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/ice-giant-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/xVjZssOnUXKWUsoaAcRYAA/variations/E90aJyw7WE-RKkmrLHLsCQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "E90aJyw7WE-RKkmrLHLsCQ"
			}
		]
	},
	"Ida Emean": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "I am a Sage. My power lies in possessing knowledge. Not sharing it.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/Drc5rX0iV02YiJL8oaQiXQ",
		"info": "Deploy: Spawn Impenetrable Fog, Clear Skies or Quen Sign.\n",
		"name": "Ida Emean",
		"positions": [
			"Siege"
		],
		"strength": 4,
		"uuid": "Drc5rX0iV02YiJL8oaQiXQ",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/ida-emean-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/Drc5rX0iV02YiJL8oaQiXQ/variations/TgQINTsUVwS7EisVanoKDg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "TgQINTsUVwS7EisVanoKDg"
			}
		]
	},
	"Imlerith": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw",
				"name": "Wild Hunt"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Ladd nahw! Kill them! Litter the earth with their entrails!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/1gcPIvBqVhGzxWjwR85ipw",
		"info": "Deploy: Damage an Enemy by 4. If the Enemy is under Frost, Damage it by 8 instead.\n",
		"name": "Imlerith",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "1gcPIvBqVhGzxWjwR85ipw",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/imlerith-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/1gcPIvBqVhGzxWjwR85ipw/variations/xJNXkz_AW420BxfqzcVWQw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "xJNXkz_AW420BxfqzcVWQw"
			}
		]
	},
	"Immune Boost": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "The witcher moved with unnatural speed. Too fast for the human eye to register.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/4Eyz8bViUxG1sZcihy0Qaw",
		"info": "Add 3 Armor to 3 adjacent Units and Boost them by 3.\n",
		"name": "Immune Boost",
		"positions": [
			"Event"
		],
		"uuid": "4Eyz8bViUxG1sZcihy0Qaw",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio, Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/immune-boost-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/4Eyz8bViUxG1sZcihy0Qaw/variations/ByPuNoMWVpyjy2lUlrjZ1A",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "ByPuNoMWVpyjy2lUlrjZ1A"
			}
		]
	},
	"Impenetrable Fog": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA",
				"name": "Weather"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "A good commander's dream… and a bad one's horror.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/kSX8IncHWo6YbCT7d8tv7Q",
		"info": "Apply Fog to a row on your opponent's side.\nFog: Every turn, at the start of your turn, Damage the Highest Unit on the row by 2.\n",
		"name": "Impenetrable Fog",
		"positions": [
			"Melee",
			"Ranged",
			"Siege",
			"Event"
		],
		"uuid": "kSX8IncHWo6YbCT7d8tv7Q",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/impenetrable-fog-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/kSX8IncHWo6YbCT7d8tv7Q/variations/7TtiYyMqUlSotx6Uox6TcA",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "7TtiYyMqUlSotx6Uox6TcA"
			}
		]
	},
	"Impera Brigade": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "The Impera Brigade never surrenders. Ever.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/h6v-1BZdVpiHZX-q1cr8CQ",
		"info": "Whenever you play a Spying Unit (including Golds), Boost self by 2.\nDeploy: Boost self by 2 for each Spying Enemy (including Golds).\n",
		"name": "Impera Brigade",
		"positions": [
			"Melee"
		],
		"strength": 6,
		"uuid": "h6v-1BZdVpiHZX-q1cr8CQ",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/impera-brigade-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/h6v-1BZdVpiHZX-q1cr8CQ/variations/0VeJ02VQWSCJuPlh8_ZFLA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "0VeJ02VQWSCJuPlh8_ZFLA"
			}
		]
	},
	"Impera Enforcers": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Members of the emperor's fanatic body guard fight to the bitter end.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/Iv-IZpMxUPGTG8tkSy6YUg",
		"info": "Deploy: Look at the top card in your Deck. If it's Bronze, gain 2 Armor. If it's Silver, Boost self by 1. If it's Gold, Promote self.\n",
		"name": "Impera Enforcers",
		"positions": [
			"Ranged"
		],
		"strength": 8,
		"uuid": "Iv-IZpMxUPGTG8tkSy6YUg",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/impera-enforcers-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/Iv-IZpMxUPGTG8tkSy6YUg/variations/y69VPY5wV7K9QaNcW5MCgQ",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "y69VPY5wV7K9QaNcW5MCgQ"
			}
		]
	},
	"Imperial Golem": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fSkGIO3GV8CMFm8EY5FHyw",
				"name": "Construct"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "The most powerful of Nilfgaard's mages have mastered the art of creating golems. On a few occasions, they've even managed to make them fight for the imperial cause…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/Mp3Xfn0DVBWiJve3-0vTmQ",
		"info": "Orders: Play this Unit from your Deck.\n",
		"name": "Imperial Golem",
		"positions": [
			"Melee"
		],
		"strength": 2,
		"uuid": "Mp3Xfn0DVBWiJve3-0vTmQ",
		"variations": [
			{
				"art": {
					"artist": "Ilker Serdar Yildiz",
					"thumbnailImage": "https://api.gwentapi.com/media/imperial-golem-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/Mp3Xfn0DVBWiJve3-0vTmQ/variations/GI4WlnC3XMenNIt5w4Kgjw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "GI4WlnC3XMenNIt5w4Kgjw"
			}
		]
	},
	"Iorveth": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "King or beggar, what's the difference? One dh'oine less.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/2QonZ14fUSmDlJW_remf4Q",
		"info": "Whenever an Enemy moves to a different row, Damage it by 2.\nDeploy: Damage an Enemy by 4.\n",
		"name": "Iorveth",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "2QonZ14fUSmDlJW_remf4Q",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/iorveth-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/2QonZ14fUSmDlJW_remf4Q/variations/sDPI6ObmXee5mzPva0piMw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "sDPI6ObmXee5mzPva0piMw"
			}
		]
	},
	"Iris": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "I remember so little… Yet when I think of my rose, I begin to recall what was.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/T7oAkMz1WZ6MTKQJ7w2qFA",
		"info": "Deathwish: Boost all Units on the other side of the Board by 3.\n",
		"name": "Iris",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "T7oAkMz1WZ6MTKQJ7w2qFA",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/iris-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/T7oAkMz1WZ6MTKQJ7w2qFA/variations/CkFaKpLXXG2eHtxLv6Ferg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "CkFaKpLXXG2eHtxLv6Ferg"
			}
		]
	},
	"Isengrim": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "It dawns on them once they notice my scar: a realization of imminent death.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/mDuLxL65VnaiFiFpca26nw",
		"info": "Play a Bronze or Silver Ambush card from your Deck.\n",
		"name": "Isengrim",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "mDuLxL65VnaiFiFpca26nw",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/isengrim-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/mDuLxL65VnaiFiFpca26nw/variations/wB8iAsLIXIeUidbRikbMAQ",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "wB8iAsLIXIeUidbRikbMAQ"
			}
		]
	},
	"Ithlinne": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Famed for constantly prophesying the world's doom. Not much fun at parties.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/_4c7-_1BUcebSDeMOUceng",
		"info": "Deploy: Play a Bronze Special card from your Deck, then Spawn a copy of it. Shuffle the others back.\n",
		"name": "Ithlinne",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "_4c7-_1BUcebSDeMOUceng",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/ithlinne-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/_4c7-_1BUcebSDeMOUceng/variations/ikN-JiQyWqajA_anA3OJJg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "ikN-JiQyWqajA_anA3OJJg"
			}
		]
	},
	"Joachim de Wett": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "To describe the manner in which Duke de Wett led the Verden Group as incompetent would be far too kind.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/gCBMH9aRUU-6CD1_5ojGrg",
		"info": "Deploy: Play the top Loyal Bronze or Silver Unit in your Deck and Boost it by 10.\n",
		"name": "Joachim de Wett",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "gCBMH9aRUU-6CD1_5ojGrg",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/joachim-de-wett-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/gCBMH9aRUU-6CD1_5ojGrg/variations/RS7iq7iTUECC5KG-p98ZfQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "RS7iq7iTUECC5KG-p98ZfQ"
			}
		]
	},
	"John Calveit": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "A sword is but one of many tools at a ruler's disposal.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/F8j_qbytWvmaHMQSpccDww",
		"info": "Spawn John Calveit\nDeploy: Look at the top 3 Bronze or Silver cards in your Deck. Play 1. The others remain on top.\n",
		"name": "John Calveit",
		"positions": [
			"Event"
		],
		"strength": 3,
		"uuid": "F8j_qbytWvmaHMQSpccDww",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/john-calveit-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/F8j_qbytWvmaHMQSpccDww/variations/fV_U95PnUOunckL9RfVZcA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "fV_U95PnUOunckL9RfVZcA"
			}
		]
	},
	"John Natalis": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/NERc7o5PWUugFwUlm3UCWw",
				"name": "Temeria"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "That square should bear the names of my soldiers, of the dead. Not mine.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/XEeizJYFU5-sYyDlS6--Fg",
		"info": "Deploy: Force all Northern Realms Machine Allies to Damage a random Enemy by 2.\n",
		"name": "John Natalis",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "XEeizJYFU5-sYyDlS6--Fg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio ",
					"thumbnailImage": "https://api.gwentapi.com/media/john-natalis-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/XEeizJYFU5-sYyDlS6--Fg/variations/dMED_uXKXFCmds0xoXt2vA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "dMED_uXKXFCmds0xoXt2vA"
			}
		]
	},
	"Johnny": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw",
				"name": "Relict"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Life without savoring the sound of surreptitious shananacking is like licking snails through a cloth.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/AubUY2vxUsGndbu0aSAyEg",
		"info": "Deploy: Discard a card from your Hand (can be Gold), then create a copy in your Hand of a card of the same color in your opponent's Deck.\n",
		"name": "Johnny",
		"positions": [
			"Siege"
		],
		"strength": 7,
		"uuid": "AubUY2vxUsGndbu0aSAyEg",
		"variations": [
			{
				"art": {
					"artist": "Marta Dettlaff",
					"thumbnailImage": "https://api.gwentapi.com/media/johnny-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/AubUY2vxUsGndbu0aSAyEg/variations/fq4GZVu6V-uuWQa-hf34oA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "fq4GZVu6V-uuWQa-hf34oA"
			}
		]
	},
	"Jotunn": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ",
				"name": "Ogroid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Skellige legend claims the mighty and terrible Jotunn, King of Giants, reigned over the isles in ancient times. He was slain by Hemdall, but with his dying breath he vowed to return for Ragh nar Roog.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/lZrEQalOXT24K7SEeg2xvQ",
		"info": "Deploy: Move 3 adjacent Enemies to this Unit's row on their side and Damage them by 2.\n",
		"name": "Jotunn",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "lZrEQalOXT24K7SEeg2xvQ",
		"variations": [
			{
				"art": {
					"artist": "Diego de Almeida",
					"thumbnailImage": "https://api.gwentapi.com/media/jotunn-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/lZrEQalOXT24K7SEeg2xvQ/variations/S00VQQmCWni4BHpoVuDrwA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "S00VQQmCWni4BHpoVuDrwA"
			}
		]
	},
	"Jutta an Dimun": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Some call her the Iron Maiden.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/jJ53AXQ2XSea6Gp5F9oNZg",
		"info": "Veteran 1.\nDeploy: Damage self by 1.\n",
		"name": "Jutta an Dimun",
		"positions": [
			"Melee"
		],
		"strength": 12,
		"uuid": "jJ53AXQ2XSea6Gp5F9oNZg",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/jutta-an-dimun-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/jJ53AXQ2XSea6Gp5F9oNZg/variations/i3nN4zp3VTCQ3UQikBwvBw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "i3nN4zp3VTCQ3UQikBwvBw"
			}
		]
	},
	"Kaedweni Sergeant": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Forward, you sorry sods! Forward or you'll see the Nilfgaardians are the least of your worries!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/bVzNSsDRWYeOqIdETP9j-g",
		"info": "Deploy: Boost by 1 this Unit and all Bronze Loyal Units with the same Power in your Hand, Deck or on your side of the Board.\nCrewmen 1.\n",
		"name": "Kaedweni Sergeant",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "bVzNSsDRWYeOqIdETP9j-g",
		"variations": [
			{
				"art": {
					"artist": " Ilker Serdar Yildiz",
					"thumbnailImage": "https://api.gwentapi.com/media/kaedweni-sergeant-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/bVzNSsDRWYeOqIdETP9j-g/variations/bWCDoa_UWZ2D6Bc7nuV7dw",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "bWCDoa_UWZ2D6Bc7nuV7dw"
			}
		]
	},
	"Kaedweni Siege Platform": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "I never miss twice.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/qr3zb1exVc-m82rWdnJDqg",
		"info": "Deploy: Return a Machine Ally to your Hand and immediately play it again.\nCrewmen 1.\n",
		"name": "Kaedweni Siege Platform",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "qr3zb1exVc-m82rWdnJDqg",
		"variations": [
			{
				"art": {
					"artist": "Form Language Studio, Bogna GawroĹ„ska",
					"thumbnailImage": "https://api.gwentapi.com/media/kaedweni-siege-platform-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/qr3zb1exVc-m82rWdnJDqg/variations/bNFwqgOXX82MS-4oSuL9Ow",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "bNFwqgOXX82MS-4oSuL9Ow"
			}
		]
	},
	"Kaedweni Siege Support": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "You gotta recalibrate the arm by five degrees.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/EDt_FaZkUGy3PZ94M-Y1iA",
		"info": "Whenever an Ally appears, Boost it by 1. If it's a Machine, Boost it by 1 and add 1 Armor.\nCrewmen 1.\n",
		"name": "Kaedweni Siege Support",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "EDt_FaZkUGy3PZ94M-Y1iA",
		"variations": [
			{
				"art": {
					"artist": "Filipe Pagliuso, Alicja Kapustka",
					"thumbnailImage": "https://api.gwentapi.com/media/kaedweni-siege-support-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/EDt_FaZkUGy3PZ94M-Y1iA/variations/JHteu0m_WAunbtMZKhfB-g",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "JHteu0m_WAunbtMZKhfB-g"
			}
		]
	},
	"Kambi": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "When the time comes, the cockerel Kambi shall crow and awaken Hemdall.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/R_Y8f2-qVwOjRJyJ28Iydw",
		"info": "After 3 turns, at the start of your turn, Spawn Hemdall.\n",
		"name": "Kambi",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 1,
		"uuid": "R_Y8f2-qVwOjRJyJ28Iydw",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/kambi-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/R_Y8f2-qVwOjRJyJ28Iydw/variations/dB4cwcf3WDWmTvYTVPfeEA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "dB4cwcf3WDWmTvYTVPfeEA"
			}
		]
	},
	"Katakan": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/nfEYjnG7WJq7UQ6_OuZsmQ",
				"name": "Vampire"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Drinking the blood of the Continent since the Conjunction.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/5pn0k_B-VJWj8QcSLn-hcA",
		"info": "Deploy: Consume a Unit from either Graveyard.\n",
		"name": "Katakan",
		"positions": [
			"Melee"
		],
		"strength": 5,
		"uuid": "5pn0k_B-VJWj8QcSLn-hcA",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/katakan-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/5pn0k_B-VJWj8QcSLn-hcA/variations/wFv6pp47XPa3ZGt0yDIDfw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "wFv6pp47XPa3ZGt0yDIDfw"
			}
		]
	},
	"Kayran": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/FTOev-YqW8qYw9ZLmXH5Bw",
				"name": "Insectoid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "How to kill a kayran? Simple! Take your best sword… then sell it, and hire a witcher.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/czcL5gJfV5iyOnW9YB12kw",
		"info": "Deploy: Consume a Unit from your Hand, then Boost self by an additional 8.\n",
		"name": "Kayran",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "czcL5gJfV5iyOnW9YB12kw",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/kayran-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/czcL5gJfV5iyOnW9YB12kw/variations/SIDPWKteXmCcuA5zj27Nyw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "SIDPWKteXmCcuA5zj27Nyw"
			}
		]
	},
	"Keira Metz": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/NERc7o5PWUugFwUlm3UCWw",
				"name": "Temeria"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "If I'm to die today, I wish to look smashing for the occasion.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/Xr3XS8hUVBqJ_brUZGYRTg",
		"info": "Deploy: Spawn Quen Sign, Epidemic or Thunderbolt Potion.\n",
		"name": "Keira Metz",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "Xr3XS8hUVBqJ_brUZGYRTg",
		"variations": [
			{
				"art": {
					"artist": "Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/keira-metz-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/Xr3XS8hUVBqJ_brUZGYRTg/variations/6HMDdT2vVsmwgzgr3Qdwhw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "6HMDdT2vVsmwgzgr3Qdwhw"
			}
		]
	},
	"King Bran": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "No one can replace Bran. Though they're sure to try.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/HkUaGM14XBKpSFU4cV8Sww",
		"info": "Spawn King Bran\nDeploy: Discard up to 3 cards from your Deck and Strengthen all Units among them by 1. Then shuffle your deck.\n",
		"name": "King Bran",
		"positions": [
			"Event"
		],
		"strength": 4,
		"uuid": "HkUaGM14XBKpSFU4cV8Sww",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/king-bran-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/HkUaGM14XBKpSFU4cV8Sww/variations/7Y82AA3fWsebt1N4GbHYbQ",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "7Y82AA3fWsebt1N4GbHYbQ"
			}
		]
	},
	"King of Beggars": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "I might just discover I look great without ears… or hands. Apparently the King of Beggars accepts both as partial payment.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/XFCKuNk_Uyqgdr7FnuG9ag",
		"info": "Deploy, Brave: Strengthen self enough to tie the Round or to a maximum of 15 base Power.\n",
		"name": "King of Beggars",
		"positions": [
			"Ranged"
		],
		"strength": 5,
		"uuid": "XFCKuNk_Uyqgdr7FnuG9ag",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/king-of-beggars-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/XFCKuNk_Uyqgdr7FnuG9ag/variations/Fzw6BCr7VMmeWm6Kzfjzgw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "Fzw6BCr7VMmeWm6Kzfjzgw"
			}
		]
	},
	"Lacerate": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "A sight more horrid you've never seen… The poor soul lay shredded as the beast lapped up its blood from the ground all around.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/AzUn8L0AXHmD-TPBtRuwEw",
		"info": "Damage all Units on a row by 3.\n",
		"name": "Lacerate",
		"positions": [
			"Melee",
			"Ranged",
			"Siege",
			"Event"
		],
		"uuid": "AzUn8L0AXHmD-TPBtRuwEw",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/lacerate-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/AzUn8L0AXHmD-TPBtRuwEw/variations/qMTrQXeXW1eSCL_a8GgZKw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "qMTrQXeXW1eSCL_a8GgZKw"
			}
		]
	},
	"Lambert": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A",
				"name": "Witcher"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Now that's the kind of negotiating I understand.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/MNtl238TXBy1CAUVyqbTSw",
		"info": "Deploy: Play Eskel and Vesemir from your Deck.\n",
		"name": "Lambert",
		"positions": [
			"Melee"
		],
		"strength": 5,
		"uuid": "MNtl238TXBy1CAUVyqbTSw",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/lambert-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/MNtl238TXBy1CAUVyqbTSw/variations/sV1ucavqX3CK0b5gRLbQVw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "sV1ucavqX3CK0b5gRLbQVw"
			}
		]
	},
	"Leo Bonhart": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "He would just sit there and stare at me, not saying a word. His eyes, they were… fish-like, somehow. No brows, no lashes… Just these balls of water, with a black stone sunk in each. He would devour me with those eyes in total silence. That frightened me more than the beatings.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/0mYtP6JOUQqSJks71TH6YA",
		"info": "Deploy: Reveal a Unit in your Hand (can be Gold) and Damage an Enemy by its base Power.\n",
		"name": "Leo Bonhart",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "0mYtP6JOUQqSJks71TH6YA",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/leo-bonhart-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/0mYtP6JOUQqSJks71TH6YA/variations/sn-9hGHqXCC8oB_eR6_5NA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "sn-9hGHqXCC8oB_eR6_5NA"
			}
		]
	},
	"Letho of Gulet": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A",
				"name": "Witcher"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Witchers never die in their beds.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/qeCjbMnfW8a4k6TxcryDaw",
		"info": "Deploy: If Spying, set own base Power to 1.\nDeploy: Banish 2 Units to each side of this Unit and Boost this Unit by their Power.\n",
		"name": "Letho of Gulet",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "qeCjbMnfW8a4k6TxcryDaw",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/letho-of-gulet-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/qeCjbMnfW8a4k6TxcryDaw/variations/RfBXY_uCVxGhdaaPnq9dvw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "RfBXY_uCVxGhdaaPnq9dvw"
			}
		]
	},
	"Light Longship": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g",
				"name": "Machine"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Escape them? In the waters of Skellige? Good luck.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/EriCeLtQUlG0M8hFuvXMnQ",
		"info": "Every turn, at the start of your turn, Damage the Unit to the right by 1, then Strengthen self by 2.\n",
		"name": "Light Longship",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "EriCeLtQUlG0M8hFuvXMnQ",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/light-longship-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/EriCeLtQUlG0M8hFuvXMnQ/variations/HAgRagnxXRusfPsXbmyfaA",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "HAgRagnxXRusfPsXbmyfaA"
			}
		]
	},
	"Lubberkin": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ",
				"name": "Cursed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "I name thee Dea and embrace thee as my daughter.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/QLO6xNelU3K3R23X1TYb_Q",
		"info": "Deploy: Boost all Botchlings in your Hand, Deck and Graveyard by 5.\nDeathwish: Play a Botchling from your Deck.\n",
		"name": "Lubberkin",
		"positions": [
			"Ranged"
		],
		"strength": 5,
		"uuid": "QLO6xNelU3K3R23X1TYb_Q",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/lubberkin-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/QLO6xNelU3K3R23X1TYb_Q/variations/hB_RGRX1W2ahwIzCTQcclQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "hB_RGRX1W2ahwIzCTQcclQ"
			}
		]
	},
	"Madman Lugos": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "WAAAAAAAAAAGH!!!!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/qyS9WZKvV5qZDDrYg4x2xw",
		"info": "Deploy: Discard a Bronze Unit from your Deck and Damage a Unit by the Discarded Unit's base Power.\n",
		"name": "Madman Lugos",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "qyS9WZKvV5qZDDrYg4x2xw",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/madman-lugos-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/qyS9WZKvV5qZDDrYg4x2xw/variations/DlwOPfm-XcS-EKxZcreG6g",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "DlwOPfm-XcS-EKxZcreG6g"
			}
		]
	},
	"Mahakam Defender": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA",
				"name": "Dwarf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "I'm telling ye, we're born fer battle – we slash straight at their knees!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/HDb852UQWmSUrud_ebT2iw",
		"info": "Deploy: Gain Resilience.\n",
		"name": "Mahakam Defender",
		"positions": [
			"Melee"
		],
		"strength": 5,
		"uuid": "HDb852UQWmSUrud_ebT2iw",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/mahakam-defender-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/HDb852UQWmSUrud_ebT2iw/variations/TVwD1gyrWXOaKIlArWASsQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "TVwD1gyrWXOaKIlArWASsQ"
			}
		]
	},
	"Mahakam Guard": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA",
				"name": "Dwarf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Only one punishment for disturbin' the peace in Mahakam: a hammer to the heid.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/g__c5lOwV3yyY2TL1kyKCg",
		"info": "Deploy: Boost an Ally by 3. If it's a Dwarf, Boost by 4 instead.\n",
		"name": "Mahakam Guard",
		"positions": [
			"Melee"
		],
		"strength": 5,
		"uuid": "g__c5lOwV3yyY2TL1kyKCg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/mahakam-guard-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/g__c5lOwV3yyY2TL1kyKCg/variations/YhiyA5LiX5OBQuT2poQxYA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "YhiyA5LiX5OBQuT2poQxYA"
			}
		]
	},
	"Malena": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "I hate you, dh'oine. You are all the same.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/Cj6o99vnXtWHDm8w-Yvp3g",
		"info": "Every turn, at the start of your turn, move a random Unit on another row on this side to this row.\nDeploy: Gain 3 Armor.\n",
		"name": "Malena",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "Cj6o99vnXtWHDm8w-Yvp3g",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/malena-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/Cj6o99vnXtWHDm8w-Yvp3g/variations/6xOGAbZdWAmxNKxZ7EXAag",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "6xOGAbZdWAmxNKxZ7EXAag"
			}
		]
	},
	"Mangonel": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g",
				"name": "Machine"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "This model specializes in slinging corpses and ripe dung.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/WpubX1grXnSPK9GKnTDvXQ",
		"info": "Whenever a card is Revealed, Damage a random Enemy by 2.\n",
		"name": "Mangonel",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "WpubX1grXnSPK9GKnTDvXQ",
		"variations": [
			{
				"art": {
					"artist": "Diego de Almeida",
					"thumbnailImage": "https://api.gwentapi.com/media/mangonel-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/WpubX1grXnSPK9GKnTDvXQ/variations/G7ivpD3YXRCLe1EX42WrYw",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "G7ivpD3YXRCLe1EX42WrYw"
			}
		]
	},
	"Manticore": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ",
				"name": "Beast"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "We know little about what manticores look like: though many have seen them, very few have lived to tell their tale.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/JMhLp5B6WUGJntp1IRmKyA",
		"info": "Deploy, Brave: Strengthen self by 4.\n",
		"name": "Manticore",
		"positions": [
			"Siege"
		],
		"strength": 9,
		"uuid": "JMhLp5B6WUGJntp1IRmKyA",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/manticore-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/JMhLp5B6WUGJntp1IRmKyA/variations/btT6O2bDU4CoPKGpiLd3Pg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "btT6O2bDU4CoPKGpiLd3Pg"
			}
		]
	},
	"Manticore Venom": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Kills quicker than you can recite the Emperor of Nilfgaard's title in full.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/h90GBUgZVeioCArNtPfj6Q",
		"info": "Damage 5 adjacent Units by 4.\n",
		"name": "Manticore Venom",
		"positions": [
			"Event"
		],
		"uuid": "h90GBUgZVeioCArNtPfj6Q",
		"variations": [
			{
				"art": {
					"artist": "Alicja Kapustka",
					"thumbnailImage": "https://api.gwentapi.com/media/manticore-venom-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/h90GBUgZVeioCArNtPfj6Q/variations/npBXJWLMUxGgaRCHnjNA9Q",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "npBXJWLMUxGgaRCHnjNA9Q"
			}
		]
	},
	"Marching Orders": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "We are but pawns in a game played by old men, sent to fight and die on their senile whims…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/qMf3weBHXBSSPDPfNF1GBA",
		"info": "Boost one of the Lowest Bronze or Silver Units in your Deck by 2 and play it.\n",
		"name": "Marching Orders",
		"positions": [
			"Event"
		],
		"uuid": "qMf3weBHXBSSPDPfNF1GBA",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/marching-orders-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/qMf3weBHXBSSPDPfNF1GBA/variations/UbE297udX6-8ly0pZItKVg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "UbE297udX6-8ly0pZItKVg"
			}
		]
	},
	"Mardroeme": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Eat enough of them, and the world will never be the same…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/tg-EqFFxVxKKwIz_CPjM0g",
		"info": "Spawn Spores or Mutagen.\n",
		"name": "Mardroeme",
		"positions": [
			"Event"
		],
		"uuid": "tg-EqFFxVxKKwIz_CPjM0g",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/mardroeme-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/tg-EqFFxVxKKwIz_CPjM0g/variations/4LA4dVogW7WLA19BJjpBdw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "4LA4dVogW7WLA19BJjpBdw"
			}
		]
	},
	"Margarita Laux–Antille": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "I care only about what's good for Aretuza and my pupils.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/TsFW1qCMXsOtsupq0Nr33g",
		"info": "Deploy: Reset a Unit and toggle its Lock.\n",
		"name": "Margarita Laux–Antille",
		"positions": [
			"Siege"
		],
		"strength": 4,
		"uuid": "TsFW1qCMXsOtsupq0Nr33g",
		"variations": [
			{
				"art": {
					"artist": "Filipe Pagliuso, Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/margarita-laux-antille-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/TsFW1qCMXsOtsupq0Nr33g/variations/iwJgY8RoX2OQ9W-YPhHDzQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "iwJgY8RoX2OQ9W-YPhHDzQ"
			}
		]
	},
	"Menno Coehoorn": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "I'll take an attentive reconnaissance unit over a fine brigade any day.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/v83Y_jwDX-i3u7ivcFbPLA",
		"info": "Deploy: Destroy all Spying Enemies.\n",
		"name": "Menno Coehoorn",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "v83Y_jwDX-i3u7ivcFbPLA",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/menno-coehoorn-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/v83Y_jwDX-i3u7ivcFbPLA/variations/LFTD4MQ4UaioB21Gus2iJg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "LFTD4MQ4UaioB21Gus2iJg"
			}
		]
	},
	"Merigold's Hailstorm": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "The sky dimmed of a sudden, and clouds amassed over the town. It grew fiendishly dark, and a cold gust swept in. Oh my, gasped Yennefer. We're about to make quite the mess, I think.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/e8-2AShUXZ-EYGRjCY1h9g",
		"info": "Damage all Units on a row by half their Power (rounding up and ignoring Armor).\n",
		"name": "Merigold's Hailstorm",
		"positions": [
			"Melee",
			"Ranged",
			"Siege",
			"Event"
		],
		"uuid": "e8-2AShUXZ-EYGRjCY1h9g",
		"variations": [
			{
				"art": {
					"artist": "Bruno Biazotto",
					"thumbnailImage": "https://api.gwentapi.com/media/merigold-s-hailstorm-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/e8-2AShUXZ-EYGRjCY1h9g/variations/92TECD6iXou_gg58DenQdA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "92TECD6iXou_gg58DenQdA"
			}
		]
	},
	"Milva": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "With each arrow I loose, I think of my da. He'd be proud. I think.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/zvqMDb6VWMa9zfQ8dq2K9w",
		"info": "Deploy: If neither player has passed, return the Highest Enemy to your opponent's Hand, then return the Highest Ally to your Hand.\n",
		"name": "Milva",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 9,
		"uuid": "zvqMDb6VWMa9zfQ8dq2K9w",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/milva-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/zvqMDb6VWMa9zfQ8dq2K9w/variations/l1NOZCljVa6YZznO2DhOKg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "l1NOZCljVa6YZznO2DhOKg"
			}
		]
	},
	"Monster Nest": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Damn, the filth's o'errun us… We need a witcher or there's no livin' 'ere!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/4LR7CGP7U96P2ikHk0MRkA",
		"info": "Spawn a Bronze Necrophage or Insectoid Unit and Boost it by 2.\n",
		"name": "Monster Nest",
		"positions": [
			"Event"
		],
		"uuid": "4LR7CGP7U96P2ikHk0MRkA",
		"variations": [
			{
				"art": {
					"artist": "Marta Dettlaff",
					"thumbnailImage": "https://api.gwentapi.com/media/monster-nest-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/4LR7CGP7U96P2ikHk0MRkA/variations/K1dwYCP4Wzyr9XDonvSIHQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "K1dwYCP4Wzyr9XDonvSIHQ"
			}
		]
	},
	"Morenn": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/KZEU4PoUVx-Gf9gN2c7Vdw",
				"name": "Ambush"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Lady Eithné's daughter had inherited her sublime beauty and her wild hatred for all that is human.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/Sswu68AcXpGccwTVJ43puQ",
		"info": "Ambush: When an Enemy appears, turn Morenn over and Damage that Enemy by 5 before its Deploy ability resolves.\n",
		"name": "Morenn",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "Sswu68AcXpGccwTVJ43puQ",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/morenn-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/Sswu68AcXpGccwTVJ43puQ/variations/NTDqRYm8VzaHnoHMZr3vaA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "NTDqRYm8VzaHnoHMZr3vaA"
			}
		]
	},
	"Morkvarg": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ",
				"name": "Cursed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "The vilest man Skellige's ever known.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/Dogvtg3KXvmMUfOoywgvHA",
		"info": "Whenever this Unit is Discarded or Destroyed, Resurrect it and Weaken it by half its Power (rounding up).\n",
		"name": "Morkvarg",
		"positions": [
			"Melee"
		],
		"strength": 9,
		"uuid": "Dogvtg3KXvmMUfOoywgvHA",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/morkvarg-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/Dogvtg3KXvmMUfOoywgvHA/variations/cO9UnZEQX8e3IGAvj4-Q-w",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "cO9UnZEQX8e3IGAvj4-Q-w"
			}
		]
	},
	"Morvran Voorhis": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "The summer sun reflected in the quiet waters of the Alba – that's Nilfgaard to me.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/AQkgzstLXZq9GwDdBheEuQ",
		"info": "Spawn Morvran Voorhis\nDeploy: Reveal up to 3 cards from either player's Hand (can be Golds).\n",
		"name": "Morvran Voorhis",
		"positions": [
			"Event"
		],
		"strength": 6,
		"uuid": "AQkgzstLXZq9GwDdBheEuQ",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/morvran-voorhis-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/AQkgzstLXZq9GwDdBheEuQ/variations/oApBlXAYVbe0sGMCIH72HA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "oApBlXAYVbe0sGMCIH72HA"
			}
		]
	},
	"Myrgtabrakke": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g",
				"name": "Draconid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Never get between a mother dragon and her young.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/X-K0NrOnUCqHTH1Tdvte6w",
		"info": "Deploy: Damage Units by 2, 2 and then 1.\n",
		"name": "Myrgtabrakke",
		"positions": [
			"Ranged"
		],
		"strength": 5,
		"uuid": "X-K0NrOnUCqHTH1Tdvte6w",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/myrgtabrakke-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/X-K0NrOnUCqHTH1Tdvte6w/variations/wX_fKl4nVrCugYD-rwCffA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "wX_fKl4nVrCugYD-rwCffA"
			}
		]
	},
	"Nature's Gift": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "You exact from the earth a blood ransom, ripping out its riches by force. To us it bloomed, bore fruit and gave freely, for it loved us as we loved it.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/W_0qzhKMXvG7-GKUkJHKCQ",
		"info": "Play a Bronze or Silver Special card from your Deck. Shuffle the others back.\n",
		"name": "Nature's Gift",
		"positions": [
			"Event"
		],
		"uuid": "W_0qzhKMXvG7-GKUkJHKCQ",
		"variations": [
			{
				"art": {
					"artist": "Marta Dettlaff",
					"thumbnailImage": "https://api.gwentapi.com/media/nature-s-gift-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/W_0qzhKMXvG7-GKUkJHKCQ/variations/q6e9874MWL-SULwLCFyEyA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "q6e9874MWL-SULwLCFyEyA"
			}
		]
	},
	"Nauzicaa Brigade": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "They call us Death's Heads. Care to find out why?",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/6hvmEpeBWYKls9Jgw83GIw",
		"info": "Deploy: Damage a Spying Unit by 5. If it was Destroyed, Strengthen self by 4.\n",
		"name": "Nauzicaa Brigade",
		"positions": [
			"Ranged"
		],
		"strength": 5,
		"uuid": "6hvmEpeBWYKls9Jgw83GIw",
		"variations": [
			{
				"art": {
					"artist": "Marta Dettlaff",
					"thumbnailImage": "https://api.gwentapi.com/media/nauzicaa-brigade-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/6hvmEpeBWYKls9Jgw83GIw/variations/6xv7iVO-VKeLv7hWIL5brg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "6xv7iVO-VKeLv7hWIL5brg"
			}
		]
	},
	"Nauzicaa Standard Bearer": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "The Emperor will teach the North discipline.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/E71QeVNzUziHLPr3w3pjTw",
		"info": "Deploy: Clear Weather from the row on your side and Boost 1 Ally or Revealed Unit in your Hand by 3.\n",
		"name": "Nauzicaa Standard Bearer",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "E71QeVNzUziHLPr3w3pjTw",
		"variations": [
			{
				"art": {
					"artist": "Diego de Almeida",
					"thumbnailImage": "https://api.gwentapi.com/media/nauzicaa-standard-bearer-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/E71QeVNzUziHLPr3w3pjTw/variations/wxRdlPvZXKCwsPZG1p4OXw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "wxRdlPvZXKCwsPZG1p4OXw"
			}
		]
	},
	"Necromancy": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "We have ways of making you talk… alive or dead.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/a5ShFF_FVqKDQOi1S1livA",
		"info": "Banish a Unit from either Graveyard and Boost an Ally by its Power.\n",
		"name": "Necromancy",
		"positions": [
			"Event"
		],
		"uuid": "a5ShFF_FVqKDQOi1S1livA",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/necromancy-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/a5ShFF_FVqKDQOi1S1livA/variations/42za8ZeGUxq18B71bMuPQQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "42za8ZeGUxq18B71bMuPQQ"
			}
		]
	},
	"Nekker": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ",
				"name": "Ogroid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "These little guys are almost cute, if you ignore the whole vicious killer aspect.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/YZU5pI7_Xs2uxucB7KVJpA",
		"info": "Whenever an Ally Consumes a card while this Unit is in your Hand, Deck or on your side of the Board, Boost self by 1.\nDeathwish: Play a Nekker from your Deck.\n",
		"name": "Nekker",
		"positions": [
			"Melee"
		],
		"strength": 3,
		"uuid": "YZU5pI7_Xs2uxucB7KVJpA",
		"variations": [
			{
				"art": {
					"artist": "Katarzyna Redesiuk",
					"thumbnailImage": "https://api.gwentapi.com/media/nekker-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/YZU5pI7_Xs2uxucB7KVJpA/variations/92TC6XAeUwqdRUCLKK0BMw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "92TC6XAeUwqdRUCLKK0BMw"
			}
		]
	},
	"Nekker Warrior": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ",
				"name": "Ogroid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Take heed, gents, there's nekkers under this here bridge.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/ikJuWdcZW0OOuCyhiD2lWg",
		"info": "Deploy: Choose a Bronze Ally and create 2 base copies of it on the bottom of your Deck.\n",
		"name": "Nekker Warrior",
		"positions": [
			"Melee"
		],
		"strength": 5,
		"uuid": "ikJuWdcZW0OOuCyhiD2lWg",
		"variations": [
			{
				"art": {
					"artist": "Adrian Smith",
					"thumbnailImage": "https://api.gwentapi.com/media/nekker-warrior-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/ikJuWdcZW0OOuCyhiD2lWg/variations/dxs1hSvgWeWN4LgPjOKrPw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "dxs1hSvgWeWN4LgPjOKrPw"
			}
		]
	},
	"Nenneke": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Few know more about healing than Nenneke.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/lvGOfYlGUwW2tvkoiHmjkw",
		"info": "Deploy: Shuffle up to 3 cards from your Graveyard into your Deck.\n",
		"name": "Nenneke",
		"positions": [
			"Siege"
		],
		"strength": 8,
		"uuid": "lvGOfYlGUwW2tvkoiHmjkw",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/nenneke-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/lvGOfYlGUwW2tvkoiHmjkw/variations/I3_159mVXui9equJz91haw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "I3_159mVXui9equJz91haw"
			}
		]
	},
	"Nilfgaardian Knight": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Sons of noble houses, born in the City of the Golden Towers, form the elite backbone of the Imperial Army.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/quc_DfieVC6SUblOZPEL5A",
		"info": "Deploy: Gain 2 Armor.\nDeploy: Reveal a random card from your Hand (can be Gold).\n",
		"name": "Nilfgaardian Knight",
		"positions": [
			"Melee"
		],
		"strength": 10,
		"uuid": "quc_DfieVC6SUblOZPEL5A",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/nilfgaardian-knight-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/quc_DfieVC6SUblOZPEL5A/variations/tK73YPEqW_Kf58vAzOXTXg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "tK73YPEqW_Kf58vAzOXTXg"
			}
		]
	},
	"Nithral": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw",
				"name": "Wild Hunt"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Each Wild Hunt warrior has gone through a rigorous selection process, but Eredin's personal cavalcade includes only the most brutal and most ferocious of the Aen Elle.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/qnOX2qd3UaObQ3npBT5jQQ",
		"info": "Frost Damage on your opponent's side is increased to 3.\n",
		"name": "Nithral",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "qnOX2qd3UaObQ3npBT5jQQ",
		"variations": [
			{
				"art": {
					"artist": "Marta Dettlaff",
					"thumbnailImage": "https://api.gwentapi.com/media/nithral-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/qnOX2qd3UaObQ3npBT5jQQ/variations/JKBLPa7GXkCeJ1KQlDOKaA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "JKBLPa7GXkCeJ1KQlDOKaA"
			}
		]
	},
	"Ocvist": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g",
				"name": "Draconid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "The Master of Quartz Mountain, the Destroyer, Trajan's Slayer. In his free time, he likes long walks and candlelight dinners.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/t39YM3BWWHSOq35kaT9ibQ",
		"info": "After 4 turns, at the start of your turn, Damage all Enemies by 1, return this Unit to your Hand and Transform it into Exhausted Ocvist.\n",
		"name": "Ocvist",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "t39YM3BWWHSOq35kaT9ibQ",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/ocvist-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/t39YM3BWWHSOq35kaT9ibQ/variations/TnmG-QxMVCSRmZrKuYtCWA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "TnmG-QxMVCSRmZrKuYtCWA"
			}
		]
	},
	"Odrin": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Drinkin' without Odrin is like rowin' without a paddle.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/YAEQacp_XZCX-atgXMKJ6A",
		"info": "Every turn, at the start of your turn, move this Unit to a random row and Boost all Units on it by 1.\n",
		"name": "Odrin",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "YAEQacp_XZCX-atgXMKJ6A",
		"variations": [
			{
				"art": {
					"artist": "Darek Zabrocki & Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/odrin-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/YAEQacp_XZCX-atgXMKJ6A/variations/2tZuND2UXVmvfbtoGUkk1g",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "2tZuND2UXVmvfbtoGUkk1g"
			}
		]
	},
	"Old Speartip: Asleep": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ",
				"name": "Ogroid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Do not disturb.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/D6ez5qXSWUGILDU_Y-AZJw",
		"info": "If at the start of your turn there are 3 or more Units on the opposite row, wake up.\nDeploy: Boost Units adjacent to this Unit by 1.\n",
		"name": "Old Speartip: Asleep",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "D6ez5qXSWUGILDU_Y-AZJw",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/old-speartip-asleep-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/D6ez5qXSWUGILDU_Y-AZJw/variations/K-qqYDUoVKmYaTh5DRmntA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "K-qqYDUoVKmYaTh5DRmntA"
			}
		]
	},
	"Olgierd": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ",
				"name": "Cursed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "At least you now know I don't easily lose my head.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/2iqiNdHOWmO3663UXMevgA",
		"info": "When this Unit is Discarded or Destroyed, Weaken it by half (rounding up). At the start of Rounds 2 and 3, Resurrect this Unit if it is in the Graveyard.\n",
		"name": "Olgierd",
		"positions": [
			"Melee"
		],
		"strength": 9,
		"uuid": "2iqiNdHOWmO3663UXMevgA",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/olgierd-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/2iqiNdHOWmO3663UXMevgA/variations/NjsCRT6jVE-djY9Q1dWxvQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "NjsCRT6jVE-djY9Q1dWxvQ"
			}
		]
	},
	"Operator": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/27_uBiygVSmMLu-FnPZekw",
				"name": "Stubborn"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "As time and space collapse before us, they expand behind us. In that way one moves forward through both.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/i9Of-MRPUve7IkfgM1gbeA",
		"info": "Deploy: Choose a Bronze Unit in your Hand and create a base copy of it in both players' Hands.\n",
		"name": "Operator",
		"positions": [
			"Ranged"
		],
		"strength": 7,
		"uuid": "i9Of-MRPUve7IkfgM1gbeA",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/operator-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/i9Of-MRPUve7IkfgM1gbeA/variations/cxHvhEz5Xu-bqp2YLZ5I7g",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "cxHvhEz5Xu-bqp2YLZ5I7g"
			}
		]
	},
	"Overdose": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "While deadly for men, Potions are merely toxic for witchers. Yet even they must measure every drop, lest they exceed the maximum dosage... and pay the maximum price.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/aVWIVpaSUKKtJte9SaECsQ",
		"info": "Boost up to 6 random Allies by 2.\n",
		"name": "Overdose",
		"positions": [
			"Event"
		],
		"uuid": "aVWIVpaSUKKtJte9SaECsQ",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio, Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/overdose-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/aVWIVpaSUKKtJte9SaECsQ/variations/nxPlUVJFUzii5fgK99tT6w",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "nxPlUVJFUzii5fgK99tT6w"
			}
		]
	},
	"Pavetta": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "They said the queen was prone to outbursts, but I did not expect that…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/m9WdA2QAUROdwJY7sU0YNA",
		"info": "Deploy: If neither player has passed, shuffle the Lowest Ally into your Deck, then shuffle the Lowest Enemy into your opponent's Deck. Does not affect Pavetta.\n",
		"name": "Pavetta",
		"positions": [
			"Ranged"
		],
		"strength": 7,
		"uuid": "m9WdA2QAUROdwJY7sU0YNA",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/pavetta-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/m9WdA2QAUROdwJY7sU0YNA/variations/gLn5TjP3VMml1FlsgkZpiQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "gLn5TjP3VMml1FlsgkZpiQ"
			}
		]
	},
	"Peter Saar Gwynleve": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "These are not the hands of an Excellency, but of a farmer. So we speak peasant to peasant.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/TW54H-l6WI-KdM6ZTV6t-w",
		"info": "Deploy: Reset a Unit. If it's an Ally, Strengthen it by 3. If it's an Enemy, Weaken it by 3.\n",
		"name": "Peter Saar Gwynleve",
		"positions": [
			"Melee"
		],
		"strength": 4,
		"uuid": "TW54H-l6WI-KdM6ZTV6t-w",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/peter-saar-gwynleve-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/TW54H-l6WI-KdM6ZTV6t-w/variations/CfcpY1VQV0Wf4FSSMV1Evw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "CfcpY1VQV0Wf4FSSMV1Evw"
			}
		]
	},
	"Philippa Eilhart": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Soon the power of kings will wither, and the Lodge shall seize its rightful place.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/4b21kPEZWZ2f5OKeGiPiSw",
		"info": "Deploy: Damage an Enemy by 5, then Damage random Enemies by 4, 3, 2 and 1. The same Enemy cannot be Damaged twice in a row.\n",
		"name": "Philippa Eilhart",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 1,
		"uuid": "4b21kPEZWZ2f5OKeGiPiSw",
		"variations": [
			{
				"art": {
					"artist": "Diego de Almeida",
					"thumbnailImage": "https://api.gwentapi.com/media/philippa-eilhart-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/4b21kPEZWZ2f5OKeGiPiSw/variations/lEqTAROAWJaP-hRtwVSe-w",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "lEqTAROAWJaP-hRtwVSe-w"
			}
		]
	},
	"Priestess of Freya": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Modron Freya, the Great Mother, is the goddess of love, beauty and bounty.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/40IG6oRHWtG1QbiTjSfhAw",
		"info": "Deploy: Resurrect a Bronze Unit.\n",
		"name": "Priestess of Freya",
		"positions": [
			"Siege"
		],
		"strength": 1,
		"uuid": "40IG6oRHWtG1QbiTjSfhAw",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/priestess-of-freya-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/40IG6oRHWtG1QbiTjSfhAw/variations/-BlCXSLWU0-WtyBlDK4cVw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "-BlCXSLWU0-WtyBlDK4cVw"
			}
		]
	},
	"Prince Stennis": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "He wears armor made of gold. Of course he's a jerk.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/fDGf9QP2U1Gan0VhJnGTqw",
		"info": "Every 2 turns, at the start of your turn, Boost this Unit by the number of Machine Allies.\nCrewmen 1.\nDeploy: Gain 2 Armor.\n",
		"name": "Prince Stennis",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "fDGf9QP2U1Gan0VhJnGTqw",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/prince-stennis-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/fDGf9QP2U1Gan0VhJnGTqw/variations/LlctGbF9VtmQD3M2_4JJaQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "LlctGbF9VtmQD3M2_4JJaQ"
			}
		]
	},
	"Priscilla": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Picture Dandelion in a dress and you've got the general idea.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/Kze2ASEVWECG33hycfOQTA",
		"info": "Every turn, at the end of your turn, Boost a random Ally (but never self) by 3. Ability discontinues after the Unit Boosts Allies 4 times without leaving the Board.\n",
		"name": "Priscilla",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "Kze2ASEVWECG33hycfOQTA",
		"variations": [
			{
				"art": {
					"artist": "Tokkun Studio, Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/priscilla-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/Kze2ASEVWECG33hycfOQTA/variations/roqv56OnXOuSM9kGjVSF0A",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "roqv56OnXOuSM9kGjVSF0A"
			}
		]
	},
	"Prize-Winning Cow": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ",
				"name": "Beast"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Mooooo.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/NBW8TZauVjuQYLibzN52xQ",
		"info": "Retaliation: Spawn a Chort on the row.\nDeathwish: Spawn a Chort on the row.\n",
		"name": "Prize-Winning Cow",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 2,
		"uuid": "NBW8TZauVjuQYLibzN52xQ",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/prize-winning-cow-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/NBW8TZauVjuQYLibzN52xQ/variations/ZbzL1KYqVZekqx8aXm_xcA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "ZbzL1KYqVZekqx8aXm_xcA"
			}
		]
	},
	"Queensguard": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "The queen is guarded by the hardiest and fiercest shieldmaidens Skellige's ever known.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/EWBeVGIfXZO_tFBQHdb9Lw",
		"info": "Deploy: Resurrect all your Queensguards.\n",
		"name": "Queensguard",
		"positions": [
			"Melee"
		],
		"strength": 4,
		"uuid": "EWBeVGIfXZO_tFBQHdb9Lw",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/queensguard-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/EWBeVGIfXZO_tFBQHdb9Lw/variations/8Sy9PgKjWQ2x8b9ew7x1nw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "8Sy9PgKjWQ2x8b9ew7x1nw"
			}
		]
	},
	"Quen Sign": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "The witcher raised a hand and quickly traced a path with it in the air. The crowd's rumble rose, the stones flew thicker. Yet the Sign curved their course, pushing them aside. They simply passed their target, protected by a shield unseen.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/Uh25y0wnUhGokjVR5Jnu7A",
		"info": "Choose a Unit in your Hand. Give all copies of it in your Hand and Deck a Shield and Boost them by 2. Units which already have a Shield cannot be chosen and aren't affected.\n",
		"name": "Quen Sign",
		"positions": [
			"Event"
		],
		"uuid": "Uh25y0wnUhGokjVR5Jnu7A",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/quen-sign-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/Uh25y0wnUhGokjVR5Jnu7A/variations/Iy4xx0JjVTKZHU2yrBJPrA",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "Iy4xx0JjVTKZHU2yrBJPrA"
			}
		]
	},
	"Radovid": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "A king should be merciless towards his enemies and generous to his friends.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/rtpI83axVde6EZoBmS50gw",
		"info": "Spawn Radovid\nDeploy: Toggle 2 Units' Lock. If Enemies, Damage them by 4 as well.\n",
		"name": "Radovid",
		"positions": [
			"Event"
		],
		"strength": 5,
		"uuid": "rtpI83axVde6EZoBmS50gw",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/radovid-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/rtpI83axVde6EZoBmS50gw/variations/8k3KfSKUWWiv1kkBX01pNw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "8k3KfSKUWWiv1kkBX01pNw"
			}
		]
	},
	"Ragh Nar Roog": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA",
				"name": "Weather"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "In the Final Age, Hemdall will come forth to face the evil issuing from the land of Morhogg – the legions of wraiths, demons and specters of Chaos.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/WC7moK7LX4irUeCmilctOw",
		"info": "Apply Ragh Nar Roog to all rows on your opponent's side.\nRagh Nar Roog: Every turn, at the start of your turn, Damage one of the Highest Units on the row by 2.\n",
		"name": "Ragh Nar Roog",
		"positions": [
			"Melee",
			"Ranged",
			"Siege",
			"Event"
		],
		"uuid": "WC7moK7LX4irUeCmilctOw",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/ragh-nar-roog-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/WC7moK7LX4irUeCmilctOw/variations/bFX2cHNkWtePws0mghQRBw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "bFX2cHNkWtePws0mghQRBw"
			}
		]
	},
	"Raging Berserker": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ",
				"name": "Cursed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "In their ballads skalds claim you cannot tell a berserker changed in the heat of battle from a true–born bear.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/VNnuE03wV_6A8gX-0nCykA",
		"info": "Retaliation: Transform into a Raging Bear.\n",
		"name": "Raging Berserker",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "VNnuE03wV_6A8gX-0nCykA",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/raging-berserker-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/VNnuE03wV_6A8gX-0nCykA/variations/ugKfH3nqUkKufdNwVkRABA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "ugKfH3nqUkKufdNwVkRABA"
			}
		]
	},
	"Rainfarn": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "When Cintra fell, Attre followed, leaving its defenders a choice: accept the Nilfgaardian leash or die.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/wZ0gUXXgUo2FAwid6UBMJQ",
		"info": "Deploy: Play a Bronze or Silver Disloyal Unit from your Deck. Shuffle the others back.\n",
		"name": "Rainfarn",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "wZ0gUXXgUo2FAwid6UBMJQ",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/rainfarn-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/wZ0gUXXgUo2FAwid6UBMJQ/variations/Tg9bwOHzWaq_ufG2lExwnw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "Tg9bwOHzWaq_ufG2lExwnw"
			}
		]
	},
	"Reaver Hunter": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "See this here tattoo? 'At's me, hackin' at a dragon. A DRAGON, m'lady.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/tiWv2TVzUXuK4i6VJw70fA",
		"info": "Deploy or Bond: Boost all Reaver Hunters in your Hand, Deck and on your side of the Board by 1.\nWhen a Reaver Hunter Trio is completed, Damage the Highest Enemy by half its Power (rounding up and ignoring Armor).\n",
		"name": "Reaver Hunter",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "tiWv2TVzUXuK4i6VJw70fA",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/reaver-hunter-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/tiWv2TVzUXuK4i6VJw70fA/variations/chrB-5ZXWDWp2r8koXoCwQ",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "chrB-5ZXWDWp2r8koXoCwQ"
			}
		]
	},
	"Reaver Scout": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Haven't had much luck with monsters of late, so we enlisted.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/BETXDVYxXbGnppVuqjAcRQ",
		"info": "Deploy: Choose a different Bronze Ally. Play a copy of it from your Deck.\n",
		"name": "Reaver Scout",
		"positions": [
			"Ranged"
		],
		"strength": 1,
		"uuid": "BETXDVYxXbGnppVuqjAcRQ",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/reaver-scout-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/BETXDVYxXbGnppVuqjAcRQ/variations/LUG8y-vBX6KxThOH-vr6jA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "LUG8y-vBX6KxThOH-vr6jA"
			}
		]
	},
	"Redanian Elite": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "I'll die for Redania, I'll kill for Redania… I'll even eat worms for Redania!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/0bc89mdaUWGrCsVmOkxT9g",
		"info": "Whenever this Unit's Armor reaches 0, Boost self by 5.\nDeploy: Gain 4 Armor.\n",
		"name": "Redanian Elite",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "0bc89mdaUWGrCsVmOkxT9g",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/redanian-elite-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/0bc89mdaUWGrCsVmOkxT9g/variations/_lyOSXHgW3mwBFw-we_z-A",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "_lyOSXHgW3mwBFw-we_z-A"
			}
		]
	},
	"Redanian Knight": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "For glory! For Radovid!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/NCGr-pn3UGasAl4TSdMDQw",
		"info": "Every turn, at the start of your turn, if this Unit has no Armor, Boost it by 2 and add 2 Armor to it.\n",
		"name": "Redanian Knight",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "NCGr-pn3UGasAl4TSdMDQw",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/redanian-knight-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/NCGr-pn3UGasAl4TSdMDQw/variations/IdXhUN39XP69AM0O4ScilQ",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "IdXhUN39XP69AM0O4ScilQ"
			}
		]
	},
	"Redanian Knight-Elect": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Not wealth or fame but intentions true –– that's what makes a hero of you!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/54A7rE3eWGeU-f2-PQ5NsQ",
		"info": "If this Unit has Armor at the start of your turn, Boost Units adjacent to it by 1.\nDeploy: Gain 2 Armor.\n",
		"name": "Redanian Knight-Elect",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "54A7rE3eWGeU-f2-PQ5NsQ",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/redanian-knight-elect-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/54A7rE3eWGeU-f2-PQ5NsQ/variations/CXTR4evcVoS-lKBcLFaMAw",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "CXTR4evcVoS-lKBcLFaMAw"
			}
		]
	},
	"Regis": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/nfEYjnG7WJq7UQ6_OuZsmQ",
				"name": "Vampire"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Men, the polite ones, at least, would call me a monster. A blood–drinking freak.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/iOjWXWEqWhGO-WaWO5L1Og",
		"info": "After 2 turns, at the start of your turn, Boost self by 7 if you are winning the Round.\n",
		"name": "Regis",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "iOjWXWEqWhGO-WaWO5L1Og",
		"variations": [
			{
				"art": {
					"artist": "Marta Dettlaff",
					"thumbnailImage": "https://api.gwentapi.com/media/regis-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/iOjWXWEqWhGO-WaWO5L1Og/variations/i_4MZZdhWQOR71PTPsO9SA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "i_4MZZdhWQOR71PTPsO9SA"
			}
		]
	},
	"Regis: Higher Vampire": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/nfEYjnG7WJq7UQ6_OuZsmQ",
				"name": "Vampire"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "He becomes invisible at will. His glance hypnotizes into a deep sleep. He then drinks his fill, turns into a bat and flies off. Altogether uncouth.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/sLCtCTI7XKK7m1mMnNUjcA",
		"info": "Deploy: Look at 3 random Bronze Units from your opponent's Deck. Consume 1, Boost self by base Power of the consumed Unit,  then shuffle the others back.\n",
		"name": "Regis: Higher Vampire",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "sLCtCTI7XKK7m1mMnNUjcA",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/regis-higher-vampire-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/sLCtCTI7XKK7m1mMnNUjcA/variations/3LTdPbdkVXe6I4zvZ7tNmQ",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "3LTdPbdkVXe6I4zvZ7tNmQ"
			}
		]
	},
	"Reinforced Ballista": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g",
				"name": "Machine"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Never manages to hit the same place twice, which, upon further reflection, might constitute a real problem.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/kOQSY7PmVsW7pYhSoUJIhQ",
		"info": "Deploy: Damage an Enemy by 2.\nFresh Crew: Repeat the Deploy ability.\n",
		"name": "Reinforced Ballista",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "kOQSY7PmVsW7pYhSoUJIhQ",
		"variations": [
			{
				"art": {
					"artist": "Noah Bradley",
					"thumbnailImage": "https://api.gwentapi.com/media/reinforced-ballista-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/kOQSY7PmVsW7pYhSoUJIhQ/variations/o6wUChIWWwm6CRvVMlpkSw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "o6wUChIWWwm6CRvVMlpkSw"
			}
		]
	},
	"Reinforced Siege Tower": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g",
				"name": "Machine"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "The latest rage in assaults on walled cities.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/vcfc2dEtXTGlvOSd8-lDxA",
		"info": "Deploy: Add 2 Armor to Units adjacent to this Unit.\nFresh Crew: Boost self by 3.\n",
		"name": "Reinforced Siege Tower",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "vcfc2dEtXTGlvOSd8-lDxA",
		"variations": [
			{
				"art": {
					"artist": "Noah Bradley",
					"thumbnailImage": "https://api.gwentapi.com/media/reinforced-siege-tower-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/vcfc2dEtXTGlvOSd8-lDxA/variations/evgzKsu0XOyj0ANchiXCWA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "evgzKsu0XOyj0ANchiXCWA"
			}
		]
	},
	"Reinforced Trebuchet": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g",
				"name": "Machine"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Feel that? The earth trembles each time Big Bertha looses a stone.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/bkdxKKjtWsOfaHWfvYQEPg",
		"info": "Every turn, at the start of your turn, Damage a random Enemy by 1.\n",
		"name": "Reinforced Trebuchet",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "bkdxKKjtWsOfaHWfvYQEPg",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/reinforced-trebuchet-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/bkdxKKjtWsOfaHWfvYQEPg/variations/FwC4RhKVWBm3ILAiY6lYVA",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "FwC4RhKVWBm3ILAiY6lYVA"
			}
		]
	},
	"Reinforcement": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Sound the retreat! Regroup! And wait for reinforcements!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/cswSl8GWWBaaOd8tUagTVw",
		"info": "Play a Bronze or Silver Unit from your Deck. Shuffle the others back.\n",
		"name": "Reinforcement",
		"positions": [
			"Event"
		],
		"uuid": "cswSl8GWWBaaOd8tUagTVw",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/reinforcement-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/cswSl8GWWBaaOd8tUagTVw/variations/s5_S18d8Vt2cWrTKOK6W4g",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "s5_S18d8Vt2cWrTKOK6W4g"
			}
		]
	},
	"Renew": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Medicus curat, magicae sanat.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/Cl7T-YPtW9W4ycYMKVwIyQ",
		"info": "Resurrect a Gold Unit from your Graveyard.\n",
		"name": "Renew",
		"positions": [
			"Event"
		],
		"uuid": "Cl7T-YPtW9W4ycYMKVwIyQ",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/renew-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/Cl7T-YPtW9W4ycYMKVwIyQ/variations/rP41U2RdUFmd8oQ9boVX-Q",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "rP41U2RdUFmd8oQ9boVX-Q"
			}
		]
	},
	"Restore": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Those cursed sorceresses are stealing our thunder! Whyever should folk choose a procedure taking several hours, when some perfumed tart can solve their problem with a wave of her hand?",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/PJHCgdD7VTapBBUDhXIpiw",
		"info": "Return a Unit from your Graveyard to your Hand, then Discard a card from your Hand.\n",
		"name": "Restore",
		"positions": [
			"Event"
		],
		"uuid": "PJHCgdD7VTapBBUDhXIpiw",
		"variations": [
			{
				"art": {
					"artist": "Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/restore-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/PJHCgdD7VTapBBUDhXIpiw/variations/3kD-PT1VXraBpzjMbqHalA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "3kD-PT1VXraBpzjMbqHalA"
			}
		]
	},
	"Roach": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ",
				"name": "Beast"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Geralt, we gotta have a man–to–horse talk. No offense, but your riding skills? They leave a bit to be desired, buddy.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/W7m_xWX5WmaghULkIl6s3w",
		"info": "Whenever you play a Gold Unit from your Hand, play Roach from your Deck on a random row before that Unit's Deploy ability resolves.\n",
		"name": "Roach",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "W7m_xWX5WmaghULkIl6s3w",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/roach-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/W7m_xWX5WmaghULkIl6s3w/variations/IhtufmzBWiSCLeEc3oJS8Q",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "IhtufmzBWiSCLeEc3oJS8Q"
			}
		]
	},
	"Rot Tosser": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g",
				"name": "Machine"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Let historians debate whether spreading plague in a besieged city is ethical. We just care if it's effective.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/UnVnqp8dV52EPzmkhMBNuA",
		"info": "Deploy: Spawn a Cow Carcass on your opponent's side.\n",
		"name": "Rot Tosser",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "UnVnqp8dV52EPzmkhMBNuA",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/rot-tosser-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/UnVnqp8dV52EPzmkhMBNuA/variations/1oBBEaoNVoKY__GbHLRHAg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "1oBBEaoNVoKY__GbHLRHAg"
			}
		]
	},
	"Royal Decree": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "We, Foltest, by divine right King of Temeria, Prince of Sodden, Senior Protector of Brugge, etcetera, etcetera, do hereby decree the following…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/HkSUMkUrW8i68mBWEkHbGQ",
		"info": "Play a Gold card from your Deck. Shuffle the others back.\n",
		"name": "Royal Decree",
		"positions": [
			"Event"
		],
		"uuid": "HkSUMkUrW8i68mBWEkHbGQ",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/royal-decree-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/HkSUMkUrW8i68mBWEkHbGQ/variations/El6_9krLUKmInoSHPiuIfQ",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "El6_9krLUKmInoSHPiuIfQ"
			}
		]
	},
	"Sabrina Glevissig": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "The Daughter of the Kaedweni Wilderness.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/Hq_v0ZJdUnCr-EAJg-qp2Q",
		"info": "Deathwish: Set all Units on the row to the Power of the Lowest Unit on the row.\n",
		"name": "Sabrina Glevissig",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "Hq_v0ZJdUnCr-EAJg-qp2Q",
		"variations": [
			{
				"art": {
					"artist": "Paweł Świeżak, Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/sabrina-glevissig-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/Hq_v0ZJdUnCr-EAJg-qp2Q/variations/N9tn8ZFIXAWf-xjMyeiP9g",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "N9tn8ZFIXAWf-xjMyeiP9g"
			}
		]
	},
	"Saesenthessis": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g",
				"name": "Draconid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "I inherited my father's ability to assume other forms - well, one other form, in my case.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/nFtAUqOvW6WR_cVKG4pEvQ",
		"info": "Deploy: Boost self by 1 for each Dwarf Ally (including Golds). Damage an Enemy by the number of Elf Allies (including Golds).\n",
		"name": "Saesenthessis",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 9,
		"uuid": "nFtAUqOvW6WR_cVKG4pEvQ",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/saesenthessis-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/nFtAUqOvW6WR_cVKG4pEvQ/variations/IbA4bE2QVkCJkep1u9iPjQ",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "IbA4bE2QVkCJkep1u9iPjQ"
			}
		]
	},
	"Sarah": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw",
				"name": "Relict"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Little Sarah wants to play!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/bmEXzOv2VF-ldGOJ5jmP4g",
		"info": "Deploy: Shuffle a card from your Hand (can be Gold) back into your Deck, then draw the top different card of the same color from your Deck.\n",
		"name": "Sarah",
		"positions": [
			"Siege"
		],
		"strength": 8,
		"uuid": "bmEXzOv2VF-ldGOJ5jmP4g",
		"variations": [
			{
				"art": {
					"artist": "Aleksandra Wojtas",
					"thumbnailImage": "https://api.gwentapi.com/media/sarah-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/bmEXzOv2VF-ldGOJ5jmP4g/variations/FSKiH4C9X7GyhEaOZ4yiwQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "FSKiH4C9X7GyhEaOZ4yiwQ"
			}
		]
	},
	"Saskia": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g",
				"name": "Draconid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "I care not for kings and their titles. In the east lives one who truly deserves a crown.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/6t4SO9xBW2yMswUdq29Xog",
		"info": "Orders: Play this Unit from your Deck on a random row.\n",
		"name": "Saskia",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "6t4SO9xBW2yMswUdq29Xog",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/saskia-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/6t4SO9xBW2yMswUdq29Xog/variations/WI7Su4C7VR2XaADGdkKDpg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "WI7Su4C7VR2XaADGdkKDpg"
			}
		]
	},
	"Savage Bear": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ",
				"name": "Cursed"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ",
				"name": "Beast"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Tame? Och, lad, Skelligers might train bears, but that don't at all mean they tame 'em…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/AHxruNbAUkW4E5xHQesj3g",
		"info": "After an Enemy is played from any Hand and its Deploy ability resolves, Damage it by 1.\n",
		"name": "Savage Bear",
		"positions": [
			"Melee"
		],
		"strength": 7,
		"uuid": "AHxruNbAUkW4E5xHQesj3g",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/savage-bear-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/AHxruNbAUkW4E5xHQesj3g/variations/sPHp2ZrEU1u9GWjY2hdjiQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "sPHp2ZrEU1u9GWjY2hdjiQ"
			}
		]
	},
	"Schirrú": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Time to look death in the face.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/Fwr18gY7Xhqtt8z14sxf0Q",
		"info": "Deploy: You may Transform a card from your Hand (can be Gold) into Scorch.\n",
		"name": "Schirrú",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 10,
		"uuid": "Fwr18gY7Xhqtt8z14sxf0Q",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/schirru-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/Fwr18gY7Xhqtt8z14sxf0Q/variations/iMz2pT4NUNGHr8z1QfK3Ig",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "iMz2pT4NUNGHr8z1QfK3Ig"
			}
		]
	},
	"Scorch": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Geralt took one step back. He'd seen men hit by Scorch before. Or more accurately, seen what remained of them afterwards.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/hRfbwAnnWyOxJL8OB5v1vg",
		"info": "Destroy all the Highest Units.\n",
		"name": "Scorch",
		"positions": [
			"Event"
		],
		"uuid": "hRfbwAnnWyOxJL8OB5v1vg",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/scorch-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/hRfbwAnnWyOxJL8OB5v1vg/variations/mtDxMl9IXDqw0qfzwhFEqg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "mtDxMl9IXDqw0qfzwhFEqg"
			}
		]
	},
	"Serrit": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A",
				"name": "Witcher"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "We do what we must. I am not ashamed of that.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/zCxqz5LsU-uHNhUGLDXMLQ",
		"info": "Deploy: Set the Power of a Revealed Unit in your opponent's Hand to 1.\n",
		"name": "Serrit",
		"positions": [
			"Melee"
		],
		"strength": 9,
		"uuid": "zCxqz5LsU-uHNhUGLDXMLQ",
		"variations": [
			{
				"art": {
					"artist": "Diego de Almeida",
					"thumbnailImage": "https://api.gwentapi.com/media/serrit-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/zCxqz5LsU-uHNhUGLDXMLQ/variations/B6D4yXBGXICB3bAvtxASYQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "B6D4yXBGXICB3bAvtxASYQ"
			}
		]
	},
	"Shadow": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg",
				"name": "Necrophage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Fear not the shadows, but the light.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/put9Gcm8VpGtJ8epFuvpWg",
		"info": "Deploy: Trigger the Deathwish of 3 Units to the right.\n",
		"name": "Shadow",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "put9Gcm8VpGtJ8epFuvpWg",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/shadow-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/put9Gcm8VpGtJ8epFuvpWg/variations/Wy1ynrNbXpSLdRAOZqMiyA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "Wy1ynrNbXpSLdRAOZqMiyA"
			}
		]
	},
	"Shani": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "I'm a medic. I tend to know what I'm doing when I prescribe something.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/O7ckSKb7XTGdWCltsQNhLA",
		"info": "Deploy: Resurrect a Unit and add 4 Armor to it.\n",
		"name": "Shani",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "O7ckSKb7XTGdWCltsQNhLA",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/shani-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/O7ckSKb7XTGdWCltsQNhLA/variations/mTiqMnQpX9eOIpBOMsmmxA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "mTiqMnQpX9eOIpBOMsmmxA"
			}
		]
	},
	"Sheldon Skaggs": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA",
				"name": "Dwarf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "I was there, on the front lines! Right where the fightin' was the thickest!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/hk8e4pruWpu7Cr17IUliKA",
		"info": "Deploy: Move all Units on the row to random rows on the same side and Boost self by 1 for each.\n",
		"name": "Sheldon Skaggs",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "hk8e4pruWpu7Cr17IUliKA",
		"variations": [
			{
				"art": {
					"artist": "Paweł Świeżak",
					"thumbnailImage": "https://api.gwentapi.com/media/sheldon-skaggs-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/hk8e4pruWpu7Cr17IUliKA/variations/ogEhUPvrVKC4irEg-bePyA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "ogEhUPvrVKC4irEg-bePyA"
			}
		]
	},
	"Sigrdrifa": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Fall on your knees and beg Modron Freya for forgiveness.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/BCcPzWWxVOOyfceGn56Y4A",
		"info": "Deploy: Resurrect a Unit.\n",
		"name": "Sigrdrifa",
		"positions": [
			"Siege"
		],
		"strength": 3,
		"uuid": "BCcPzWWxVOOyfceGn56Y4A",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/sigrdrifa-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/BCcPzWWxVOOyfceGn56Y4A/variations/hZtcymKyWC2yM5Z4Wi_Wiw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "hZtcymKyWC2yM5Z4Wi_Wiw"
			}
		]
	},
	"Skellige Storm": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA",
				"name": "Weather"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "This ain't no normal storm. This here's the wrath of the gods.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/rVL_P6TWUNaHkc19NC34eA",
		"info": "Apply Skellige Storm to a row on your opponent's side.\nSkellige Storm: Every turn, at the start of your turn, Damage the leftmost units on the row by 2, 2 and 1, respectively.\n",
		"name": "Skellige Storm",
		"positions": [
			"Melee",
			"Ranged",
			"Siege",
			"Event"
		],
		"uuid": "rVL_P6TWUNaHkc19NC34eA",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/skellige-storm-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/rVL_P6TWUNaHkc19NC34eA/variations/hvZ0ReyuVrKnygYNisJ_wA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "hvZ0ReyuVrKnygYNisJ_wA"
			}
		]
	},
	"Skjall": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Strike his name from the Saga of Elders! No one dare grant him shelter or sustenance!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/v5g7AO5zUJKhzws-BjNt_w",
		"info": "Veteran 1.\nAfter 2 turns, at the end of your turn, convert this Unit's current Power into base Power.\n",
		"name": "Skjall",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "v5g7AO5zUJKhzws-BjNt_w",
		"variations": [
			{
				"art": {
					"artist": "Bruno Biazotto",
					"thumbnailImage": "https://api.gwentapi.com/media/skjall-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/v5g7AO5zUJKhzws-BjNt_w/variations/DQirSRdTU3ClTIppNqgECw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "DQirSRdTU3ClTIppNqgECw"
			}
		]
	},
	"Spotter": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "The North has nothing with which it could surprise us.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/H7zNV--7Xy-e_YoAZ1s14w",
		"info": "Whenever either player Reveals a card, Boost self by 1 while in your Hand, Deck or on your side of the Board.\n",
		"name": "Spotter",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "H7zNV--7Xy-e_YoAZ1s14w",
		"variations": [
			{
				"art": {
					"artist": "Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/spotter-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/H7zNV--7Xy-e_YoAZ1s14w/variations/_xw-rfPOVIeBpFhUn-Devg",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "_xw-rfPOVIeBpFhUn-Devg"
			}
		]
	},
	"Stammelford's Tremors": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "The sorcerer Stammelford moved a mountain that obscured the view from his tower. Rumor has it he could only do so for he'd fettered a d'ao, an earth elemental.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/T7eomqsgUtef8CCe2_4CqA",
		"info": "Damage up to 6 random Enemies by 2.\n",
		"name": "Stammelford's Tremors",
		"positions": [
			"Event"
		],
		"uuid": "T7eomqsgUtef8CCe2_4CqA",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/stammelford-s-tremors-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/T7eomqsgUtef8CCe2_4CqA/variations/oaKukU1XXT-R5WWX_ZszLQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "oaKukU1XXT-R5WWX_ZszLQ"
			}
		]
	},
	"Stefan Skellen": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "My mark scars the face of our future empress. That is my proudest achievement.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/Vq6GiaggU2219p0oY7Wzlg",
		"info": "Deploy: Choose any card from your Deck and place it on top. Then shuffle the rest of your Deck.\n",
		"name": "Stefan Skellen",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 10,
		"uuid": "Vq6GiaggU2219p0oY7Wzlg",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/stefan-skellen-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/Vq6GiaggU2219p0oY7Wzlg/variations/liqV5JipWIGAz5C0x9RV_g",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "liqV5JipWIGAz5C0x9RV_g"
			}
		]
	},
	"Succubus": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ",
				"name": "Beast"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Why fight? There are much better ways to work off excess energy…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/7AtQg0X-XFSpMoNLeEBYqQ",
		"info": "If played on your opponent's side, then after 2 turns, at the end of your turn, move the Highest other Unit on its row to your side.\n",
		"name": "Succubus",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "7AtQg0X-XFSpMoNLeEBYqQ",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł, Alicja Kapustka, Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/succubus-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/7AtQg0X-XFSpMoNLeEBYqQ/variations/Ums8rObRVFe3SUv56-Sq8w",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "Ums8rObRVFe3SUv56-Sq8w"
			}
		]
	},
	"Summoning Circle": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "There exist a great many realities outside our own… With the right knowledge, one can contact them and summon beings beyond human fathoming.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/WQgk3RBAXn-NA5fTNWqRLA",
		"info": "Spawn a base copy of the last Enemy your opponent played from their Hand.\n",
		"name": "Summoning Circle",
		"positions": [
			"Event"
		],
		"uuid": "WQgk3RBAXn-NA5fTNWqRLA",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/summoning-circle-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/WQgk3RBAXn-NA5fTNWqRLA/variations/KwPwrIoXVuCFznqNa_1OJA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "KwPwrIoXVuCFznqNa_1OJA"
			}
		]
	},
	"Svanrige": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "The emperor also thought him an accidental king. At first.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/nZEr8pw3WqiPLRmF4l4Blw",
		"info": "Veteran 1.\nDeploy: Draw the top card from your Deck, then Discard a card from your Hand (can be Gold).\n",
		"name": "Svanrige",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "nZEr8pw3WqiPLRmF4l4Blw",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/svanrige-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/nZEr8pw3WqiPLRmF4l4Blw/variations/E0jp6WnmWo2I2yEomoEf3w",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "E0jp6WnmWo2I2yEomoEf3w"
			}
		]
	},
	"Swallow Potion": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Symbolizing spring and rejuvenation, the swallow lent its name to this potion that accelerates the rate at which wounds scab over and heal.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/F-V84OtlVwWRloaS0Xp8WQ",
		"info": "Boost a Unit by 8.\n",
		"name": "Swallow Potion",
		"positions": [
			"Event"
		],
		"uuid": "F-V84OtlVwWRloaS0Xp8WQ",
		"variations": [
			{
				"art": {
					"artist": "Aleksandra Wojtas",
					"thumbnailImage": "https://api.gwentapi.com/media/swallow-potion-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/F-V84OtlVwWRloaS0Xp8WQ/variations/_6r43nVvVO6wDvmoM2VKqQ",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "_6r43nVvVO6wDvmoM2VKqQ"
			}
		]
	},
	"Sweers": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "And hands off the girl! Whatever we may be, we're not savages.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/_H-PZKA4WOCjgEsODtIBpw",
		"info": "Deploy: Choose an Enemy or a Revealed opposing Unit and move all copies of it from your opponent's Deck to their Graveyard.\n",
		"name": "Sweers",
		"positions": [
			"Melee"
		],
		"strength": 7,
		"uuid": "_H-PZKA4WOCjgEsODtIBpw",
		"variations": [
			{
				"art": {
					"artist": "Chris Rallis",
					"thumbnailImage": "https://api.gwentapi.com/media/sweers-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/_H-PZKA4WOCjgEsODtIBpw/variations/TSIzBHOrVeSdZi61ij_meA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "TSIzBHOrVeSdZi61ij_meA"
			}
		]
	},
	"Síle de Tansarville": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "The Lodge lacks humility. Our lust for power may yet be our undoing.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/o3N-tilfUL2jNh0_TnxwOw",
		"info": "Deploy: You may play a Bronze Special card from your Hand. If you do, draw the top card from your Deck.\n",
		"name": "Síle de Tansarville",
		"positions": [
			"Ranged"
		],
		"strength": 6,
		"uuid": "o3N-tilfUL2jNh0_TnxwOw",
		"variations": [
			{
				"art": {
					"artist": "Form Language Studio, Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/sile-de-tansarville-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/o3N-tilfUL2jNh0_TnxwOw/variations/DdJg-Fp6WiWLsuJ5fblUOw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "DdJg-Fp6WiWLsuJ5fblUOw"
			}
		]
	},
	"Temerian Infantryman": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Temeria! Temeria! Gods shed all grace on thee! And smite thy foes with horrid woes, for all eternity!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/GtYb7lRpULi3lwT1Yf1OsA",
		"info": "Deploy: Play all Temerian Infantrymen from your Deck on the row.\n",
		"name": "Temerian Infantryman",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "GtYb7lRpULi3lwT1Yf1OsA",
		"variations": [
			{
				"art": {
					"artist": "Marta Dettlaff",
					"thumbnailImage": "https://api.gwentapi.com/media/temerian-infantryman-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/GtYb7lRpULi3lwT1Yf1OsA/variations/i6u3nVpvULecheyJg8-ZHg",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "i6u3nVpvULecheyJg8-ZHg"
			}
		]
	},
	"Thaler": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Piss off! We aren't all philanderers. Some of us have depth…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/AfIRocr9Um6wJA0CkJgXtw",
		"info": "Deploy: Draw the top 2 cards from your Deck. Keep 1 and shuffle the other back.\n",
		"name": "Thaler",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 11,
		"uuid": "AfIRocr9Um6wJA0CkJgXtw",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/thaler-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/AfIRocr9Um6wJA0CkJgXtw/variations/vq_AMosDVGerQUxz2U20nQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "vq_AMosDVGerQUxz2U20nQ"
			}
		]
	},
	"The Guardian": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fSkGIO3GV8CMFm8EY5FHyw",
				"name": "Construct"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Stone fists to stop intruders armed with swords. Ironclad logic to stop those armed with lies.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/FHYkQDAqWUiKvgZMx5Ywjg",
		"info": "Deathwish: Create 2 Lesser Guardians on the top of your opponent's Deck.\n",
		"name": "The Guardian",
		"positions": [
			"Melee"
		],
		"strength": 10,
		"uuid": "FHYkQDAqWUiKvgZMx5Ywjg",
		"variations": [
			{
				"art": {
					"artist": "James Daly",
					"thumbnailImage": "https://api.gwentapi.com/media/the-guardian-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/FHYkQDAqWUiKvgZMx5Ywjg/variations/g-MdLAKUWq6N0VqCBZzCSg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "g-MdLAKUWq6N0VqCBZzCSg"
			}
		]
	},
	"The Last Wish": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "A djinn, good sirs, fulfills but three wishes. Thus freed, it flees to dimensions unknown.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/DvWOOF9dXQSvMnGZf5pAdA",
		"info": "Draw your top 2 Bronze or Silver cards. Play 1 and shuffle the other back.\n",
		"name": "The Last Wish",
		"positions": [
			"Event"
		],
		"uuid": "DvWOOF9dXQSvMnGZf5pAdA",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/the-last-wish-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/DvWOOF9dXQSvMnGZf5pAdA/variations/9sVTkrt3X2aaYQ7_Gtewkw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "9sVTkrt3X2aaYQ7_Gtewkw"
			}
		]
	},
	"Thunderbolt Potion": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "The witcher's face changed… his mien turning inhuman, horrifying.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/P3aCNw1dUDKyR8mwSMxMbQ",
		"info": "Boost 3 adjacent Units by 4.\n",
		"name": "Thunderbolt Potion",
		"positions": [
			"Event"
		],
		"uuid": "P3aCNw1dUDKyR8mwSMxMbQ",
		"variations": [
			{
				"art": {
					"artist": "Aleksandra Wojtas & Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/thunderbolt-potion-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/P3aCNw1dUDKyR8mwSMxMbQ/variations/exL_sX05XbeLOwDq284O8g",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "exL_sX05XbeLOwDq284O8g"
			}
		]
	},
	"Tibor Eggebracht": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Tibor's zeal was legendary. It was said when the emperor passed, he'd not so much bow as somersault.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/xD5U2Q-sUBaYJ1dTGybXMA",
		"info": "Deploy: If neither player has passed, Boost self by 15, then your opponent draws the top Bronze card from their Deck and Reveals it.\n",
		"name": "Tibor Eggebracht",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "xD5U2Q-sUBaYJ1dTGybXMA",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/tibor-eggebracht-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/xD5U2Q-sUBaYJ1dTGybXMA/variations/ypBx_yLKWuWFtAgtv4Y3Lg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "ypBx_yLKWuWFtAgtv4Y3Lg"
			}
		]
	},
	"Torrential Rain": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA",
				"name": "Weather"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Even the rain in this land smells vile.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/t1f5cN50XrqCtTVm9Nqkog",
		"info": "Apply Rain to a row on your opponent's side.\nRain: Every turn, at the start of your turn, Damage up to 5 of the Lowest Units on the row by 1.\n",
		"name": "Torrential Rain",
		"positions": [
			"Melee",
			"Ranged",
			"Siege",
			"Event"
		],
		"uuid": "t1f5cN50XrqCtTVm9Nqkog",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/torrential-rain-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/t1f5cN50XrqCtTVm9Nqkog/variations/_uXgl3fAXSqb7PPjcvqNDw",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "_uXgl3fAXSqb7PPjcvqNDw"
			}
		]
	},
	"Toruviel": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/KZEU4PoUVx-Gf9gN2c7Vdw",
				"name": "Ambush"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "I'd gladly kill you from up close, stare in your eyes… But you reek, human.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/dTi-ZUaDULKa5Om4djHAqw",
		"info": "Ambush: When your opponent passes, turn this Unit over and Boost 2 Units on each side by 2.\n",
		"name": "Toruviel",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "dTi-ZUaDULKa5Om4djHAqw",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/toruviel-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/dTi-ZUaDULKa5Om4djHAqw/variations/qOVbcPPxVD2fsl3geGlofA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "qOVbcPPxVD2fsl3geGlofA"
			}
		]
	},
	"Treason": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Many believe the empire's power rests upon the shoulders of its disciplined army and dutiful mages. In truth, the Nilfgaardian floren rules the world.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/f17i-EZAVH6fUxz7-tNgCw",
		"info": "Play the bottom card from your opponent's Deck.\n",
		"name": "Treason",
		"positions": [
			"Event"
		],
		"uuid": "f17i-EZAVH6fUxz7-tNgCw",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/treason-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/f17i-EZAVH6fUxz7-tNgCw/variations/SLAJbX-QW8eJC9oqW-YzzQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "SLAJbX-QW8eJC9oqW-YzzQ"
			}
		]
	},
	"Trebuchet": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g",
				"name": "Machine"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Castle won't batter itself down, now will it? Get them trebuchets rollin'!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/Q8U20cVPVXaqKC8ZRnNqgw",
		"info": "Deploy: Damage 3 adjacent Enemies by 1.\nFresh Crew: Increase the Damage dealt by 1.\n",
		"name": "Trebuchet",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 3,
		"uuid": "Q8U20cVPVXaqKC8ZRnNqgw",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/trebuchet-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/Q8U20cVPVXaqKC8ZRnNqgw/variations/HCtin4rOVm63OQpizOi1qg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "HCtin4rOVm63OQpizOi1qg"
			}
		]
	},
	"Tridam Infantryman": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Soldiers loyal to the old baron of Tridam left the city with Falibor, thus becoming renegades wanted by the law.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/_SOxfoqAXl-DlnUWpen5dg",
		"info": "Deploy: Gain 3 Armor.\n",
		"name": "Tridam Infantryman",
		"positions": [
			"Melee"
		],
		"strength": 8,
		"uuid": "_SOxfoqAXl-DlnUWpen5dg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/tridam-infantryman-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/_SOxfoqAXl-DlnUWpen5dg/variations/QY6PK_coXFOcZnJjr6KwZA",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "QY6PK_coXFOcZnJjr6KwZA"
			}
		]
	},
	"Triss Merigold": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "I can take care of myself. Trust me.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/78yrc7dJVLatTbZeymnRQw",
		"info": "Deploy: Damage a Unit by 5.\n",
		"name": "Triss Merigold",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "78yrc7dJVLatTbZeymnRQw",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/triss-merigold-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/78yrc7dJVLatTbZeymnRQw/variations/FJP2Hl-SUnK_jtEZIu-ogQ",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "FJP2Hl-SUnK_jtEZIu-ogQ"
			}
		]
	},
	"Triss: Butterfly Spell": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Cap'n… our arrows, they've… they've got wings!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/oNoDwOrWX4q_ZbJFvjs8qg",
		"info": "Every turn, at the start of your turn, Boost all other Lowest Allies by 1.\n",
		"name": "Triss: Butterfly Spell",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "oNoDwOrWX4q_ZbJFvjs8qg",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/triss-butterfly-spell-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/oNoDwOrWX4q_ZbJFvjs8qg/variations/i8TA_lGdUAmJgLGX4MqfCg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "i8TA_lGdUAmJgLGX4MqfCg"
			}
		]
	},
	"Trollololo": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ",
				"name": "Ogroid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Join me King Ravodid army. Order got – guard boatses.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/3Q8Q0W-sXrimkr_-bpjPug",
		"info": "Counts as part of any Northern Realms Trio on the row.\nDeploy: Gain 5 Armor.\n",
		"name": "Trollololo",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "3Q8Q0W-sXrimkr_-bpjPug",
		"variations": [
			{
				"art": {
					"artist": "Hugo Richard, Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/trollololo-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/3Q8Q0W-sXrimkr_-bpjPug/variations/QDl2gDgpVg2n4AcOfchVUg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "QDl2gDgpVg2n4AcOfchVUg"
			}
		]
	},
	"Udalryk": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ",
				"name": "Cursed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "The gods have spoken: a sacrifice is required.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/GEF0ERHvWuypmyTEfZKw_Q",
		"info": "Deploy: Draw the top 2 cards from your Deck. Keep one and Discard the other.\n",
		"name": "Udalryk",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 12,
		"uuid": "GEF0ERHvWuypmyTEfZKw_Q",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio, Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/udalryk-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/GEF0ERHvWuypmyTEfZKw_Q/variations/Gsab7Lw0UwW9uQ6dck828A",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "Gsab7Lw0UwW9uQ6dck828A"
			}
		]
	},
	"Unseen Elder": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "No one, not even among the higher vampires, knows exactly how old the Unseen Elder is. They only know they should never, under any circumstances, defy his will.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A",
			"name": "Leader"
		},
		"href": "https://api.gwentapi.com/v0/cards/syItPNBBUU6q5_MB1yaeDQ",
		"info": "Spawn Unseen Elder.\nDeploy: Consume 3 Allies, but Strengthen instead of Boosting.\n",
		"name": "Unseen Elder",
		"positions": [
			"Event"
		],
		"strength": 5,
		"uuid": "syItPNBBUU6q5_MB1yaeDQ",
		"variations": [
			{
				"art": {
					"artist": "Diego de Almeida",
					"thumbnailImage": "https://api.gwentapi.com/media/unseen-elder-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/syItPNBBUU6q5_MB1yaeDQ/variations/thS2L2NXXWKjCO_uJrBjYw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "thS2L2NXXWKjCO_uJrBjYw"
			}
		]
	},
	"Vabjorn": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ",
				"name": "Cursed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Blood for Svalblod! Skulls for his throne!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/kH8K35KJXF-oVDJ2XZlbmQ",
		"info": "Every turn, at the end of your turn, Damage by 2 every Damaged Enemy with 2 Power or less.\n",
		"name": "Vabjorn",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "kH8K35KJXF-oVDJ2XZlbmQ",
		"variations": [
			{
				"art": {
					"artist": "Sławomir Maniak",
					"thumbnailImage": "https://api.gwentapi.com/media/vabjorn-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/kH8K35KJXF-oVDJ2XZlbmQ/variations/diKx10pUX1KTVQWcS6pwcw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "diKx10pUX1KTVQWcS6pwcw"
			}
		]
	},
	"Vanhemar": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "For a fire mage, he's not very… flamboyant.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/eePf7L4DVGuDTuh3ScDKow",
		"info": "Deploy: Spawn Biting Frost, Clear Skies or Stammelford's Tremors.\n",
		"name": "Vanhemar",
		"positions": [
			"Siege"
		],
		"strength": 3,
		"uuid": "eePf7L4DVGuDTuh3ScDKow",
		"variations": [
			{
				"art": {
					"artist": "Chris Rallis",
					"thumbnailImage": "https://api.gwentapi.com/media/vanhemar-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/eePf7L4DVGuDTuh3ScDKow/variations/J6Q_oJW7VGmOmK3LAoo2Vg",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "J6Q_oJW7VGmOmK3LAoo2Vg"
			}
		]
	},
	"Vattier de Rideaux": {
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "There's never been a problem a well–planned assassination couldn't solve.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/ApbfZ9GzU2S8IiXf6fkI6Q",
		"info": "Deploy: Reveal up to 2 cards from your Hand (can be Golds). For each, Reveal 1 random card from your opponent's Hand (can be Gold).\n",
		"name": "Vattier de Rideaux",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "ApbfZ9GzU2S8IiXf6fkI6Q",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/vattier-de-rideaux-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/ApbfZ9GzU2S8IiXf6fkI6Q/variations/DXTSEL3dUD2hQG_2muX2bA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "DXTSEL3dUD2hQG_2muX2bA"
			}
		]
	},
	"Vernon Roche": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/6mb4BjFJUKiOY3UfKkEVgQ",
				"name": "Blue Stripes"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "A patriot… and a real pain in the rear.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/X8TKT0stXGO1brbHoikOrA",
		"info": "Deploy: Damage an Enemy by 3. If it was Destroyed, Spawn a Blue Stripes Commando on a random row and repeat the Deploy ability (one time only).\n",
		"name": "Vernon Roche",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "X8TKT0stXGO1brbHoikOrA",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/vernon-roche-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/X8TKT0stXGO1brbHoikOrA/variations/qF-_LErAUOaX5V91icUy8w",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "qF-_LErAUOaX5V91icUy8w"
			}
		]
	},
	"Ves": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/6mb4BjFJUKiOY3UfKkEVgQ",
				"name": "Blue Stripes"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ",
			"name": "Northern Realms"
		},
		"flavor": "Better to live one day as a king than a whole life as a beggar.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/QoOYUkzzXbComAt7iZny-w",
		"info": "Whenever you complete a Northern Realms Trio, play this Unit from your Deck.\n",
		"name": "Ves",
		"positions": [
			"Melee"
		],
		"strength": 7,
		"uuid": "QoOYUkzzXbComAt7iZny-w",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/ves-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/QoOYUkzzXbComAt7iZny-w/variations/038d6ZSaX-W0axnEdA1pyA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "038d6ZSaX-W0axnEdA1pyA"
			}
		]
	},
	"Vesemir": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A",
				"name": "Witcher"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "If you're to be hanged, ask for water. Anything can happen before they fetch it.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/ksPuGyXqWpOqg72cvSKt-A",
		"info": "Deploy: Play Eskel and Lambert from your Deck.\n",
		"name": "Vesemir",
		"positions": [
			"Melee"
		],
		"strength": 7,
		"uuid": "ksPuGyXqWpOqg72cvSKt-A",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/vesemir-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/ksPuGyXqWpOqg72cvSKt-A/variations/M8X4FMISWjO-zYuxT4mn3Q",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "M8X4FMISWjO-zYuxT4mn3Q"
			}
		]
	},
	"Vicovaro Medic": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "The world has known as many plagues as it has wars. Yet both war and plague always take men by surprise.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/boZuBMUTWVaYLzo96VELKQ",
		"info": "Deploy: Resurrect a Bronze Unit from your opponent's Graveyard.\n",
		"name": "Vicovaro Medic",
		"positions": [
			"Ranged"
		],
		"strength": 1,
		"uuid": "boZuBMUTWVaYLzo96VELKQ",
		"variations": [
			{
				"art": {
					"artist": "Lorenzo Mastroianni",
					"thumbnailImage": "https://api.gwentapi.com/media/vicovaro-medic-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/boZuBMUTWVaYLzo96VELKQ/variations/t0BfFPORUvCaH8oqAaguiA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "t0BfFPORUvCaH8oqAaguiA"
			}
		]
	},
	"Vicovaro Novice": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Mages in Nilfgaard are disposable. If one disappoints the Emperor, a dozen others await to provide what he requires.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/pD39Z2ekXYiu7i5pBjx_Fg",
		"info": "Deploy: Trigger the ability of a Spying Enemy Ambassador or Emissary.\n",
		"name": "Vicovaro Novice",
		"positions": [
			"Siege"
		],
		"strength": 1,
		"uuid": "pD39Z2ekXYiu7i5pBjx_Fg",
		"variations": [
			{
				"art": {
					"artist": "Bruno Biazotto",
					"thumbnailImage": "https://api.gwentapi.com/media/vicovaro-novice-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/pD39Z2ekXYiu7i5pBjx_Fg/variations/3hioxRqEXPWsykcswdR5fQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "3hioxRqEXPWsykcswdR5fQ"
			}
		]
	},
	"Vilgefortz": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "We are all pawns on his board. Playing a game whose rules we do not know.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/2FHNKVS8Vz6eAoSbL3sIgg",
		"info": "Deploy: Destroy an Ally or (only possible if your opponent has not passed) an Enemy. If you destroy an Ally, play the top card from your Deck. If you destroy an Enemy, your opponent draws the top Bronze card from their Deck and Reveals it.\n",
		"name": "Vilgefortz",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "2FHNKVS8Vz6eAoSbL3sIgg",
		"variations": [
			{
				"art": {
					"artist": "Nemanja Stankovic",
					"thumbnailImage": "https://api.gwentapi.com/media/vilgefortz-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/2FHNKVS8Vz6eAoSbL3sIgg/variations/ZA_ApFSvUea8CWjB06jFfg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "ZA_ApFSvUea8CWjB06jFfg"
			}
		]
	},
	"Villentretenmerth": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g",
				"name": "Draconid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Also calls himself Borkh Three Jackdaws… he's not the best at names.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/AAT11CoiU-6y4oy5IsXxUA",
		"info": "After 3 turns, at the start of your turn, Destroy all the Highest Units on the Board.\n",
		"name": "Villentretenmerth",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "AAT11CoiU-6y4oy5IsXxUA",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/villentretenmerth-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/AAT11CoiU-6y4oy5IsXxUA/variations/14XvEuoCXqmikAY224CO9w",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "14XvEuoCXqmikAY224CO9w"
			}
		]
	},
	"Vran Warrior": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g",
				"name": "Draconid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "They sat still on their horses, seemingly relaxed. He saw their weapons – short spears with wide tips. Swords with oddly forged guards. Battle axes. Toothed gisarmes.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/CdZSU2RJVUmpJ_NeNtlmBw",
		"info": "Deploy: Consume the Unit to the right.\nEvery 2 turns, at the start of your turn, Consume the Unit to the right.\n",
		"name": "Vran Warrior",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "CdZSU2RJVUmpJ_NeNtlmBw",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/vran-warrior-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/CdZSU2RJVUmpJ_NeNtlmBw/variations/JjaifJsKWZGzwhfDSpBjBw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "JjaifJsKWZGzwhfDSpBjBw"
			}
		]
	},
	"Vrihedd Brigade": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Vrihedd? What's that mean? Trouble.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/GCdSPKpsVEKhPnyfdk4PMg",
		"info": "Deploy: Clear Weather from the row on your side and move a Unit to this row on its side.\n",
		"name": "Vrihedd Brigade",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "GCdSPKpsVEKhPnyfdk4PMg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/vrihedd-brigade-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/GCdSPKpsVEKhPnyfdk4PMg/variations/BqBjx62nVEi_YbNFNl8Vdg",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "BqBjx62nVEi_YbNFNl8Vdg"
			}
		]
	},
	"Vrihedd Dragoon": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Most terrible things I've witnessed? The Catriona plague, the razing of Vengerberg and the charge of the Vrihedd Dragoons.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/ym8WoY2BWR-aIq-40zUsCQ",
		"info": "Every turn, at the start of your turn, Boost a random Loyal Unit in your Hand by 1.\n",
		"name": "Vrihedd Dragoon",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "ym8WoY2BWR-aIq-40zUsCQ",
		"variations": [
			{
				"art": {
					"artist": "Bartłomiej Gaweł",
					"thumbnailImage": "https://api.gwentapi.com/media/vrihedd-dragoon-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/ym8WoY2BWR-aIq-40zUsCQ/variations/Aal1wiezX8G3eF17w2DOlg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "Aal1wiezX8G3eF17w2DOlg"
			}
		]
	},
	"Vrihedd Officer": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Hatred burns brighter than any fire, and cuts deeper than any blade.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/cwN2cUY3V-qCJohLa8tPPg",
		"info": "Deploy: Mulligan a card.\n",
		"name": "Vrihedd Officer",
		"positions": [
			"Siege"
		],
		"strength": 7,
		"uuid": "cwN2cUY3V-qCJohLa8tPPg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/vrihedd-officer-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/cwN2cUY3V-qCJohLa8tPPg/variations/eo_fQASOWs2mIK69BcY_lQ",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "eo_fQASOWs2mIK69BcY_lQ"
			}
		]
	},
	"Vrihedd Sappers": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/KZEU4PoUVx-Gf9gN2c7Vdw",
				"name": "Ambush"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "No matter what you may have heard, elves don't take human scalps. Too much lice.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/HvF4tQnhVS-5raTTZXuDxA",
		"info": "Ambush: After 2 turns, at the start of your turn, turn this Unit over.\n",
		"name": "Vrihedd Sappers",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "HvF4tQnhVS-5raTTZXuDxA",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/vrihedd-sappers-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/HvF4tQnhVS-5raTTZXuDxA/variations/zwlPXJuoX4aQJAZaaR5wSw",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "zwlPXJuoX4aQJAZaaR5wSw"
			}
		]
	},
	"Vrihedd Vanguard": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Temerians, Redanians, all the same. Better off dead.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/r8sz89jTVuuCZ7g2Bd2Vrg",
		"info": "Whenever you Mulligan a card, Boost self by 1 while in your Hand, Deck or on your side of the Board.\n",
		"name": "Vrihedd Vanguard",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "r8sz89jTVuuCZ7g2Bd2Vrg",
		"variations": [
			{
				"art": {
					"artist": "Bryan Sola",
					"thumbnailImage": "https://api.gwentapi.com/media/vrihedd-vanguard-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/r8sz89jTVuuCZ7g2Bd2Vrg/variations/QOfbI8SOV7WprImf1E6c9Q",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "QOfbI8SOV7WprImf1E6c9Q"
			}
		]
	},
	"War Longship": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g",
				"name": "Machine"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "They say Hemdall's heart swells whenever the longships sail out on a raid.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/_c0hpwPnVmiyv-BhfSuCAg",
		"info": "Whenever you Discard a Unit, Damage a random Enemy by 2.\n",
		"name": "War Longship",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "_c0hpwPnVmiyv-BhfSuCAg",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/war-longship-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/_c0hpwPnVmiyv-BhfSuCAg/variations/7ib2EMNLW1C3v27UQPQmpQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "7ib2EMNLW1C3v27UQPQmpQ"
			}
		]
	},
	"Water Hag": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg",
				"name": "Necrophage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Seen a lot o' ugly critters in me life – morays, lampreys, blobfish… But never nothin' like this!",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/AM137LkZX0y_4yXtE0bZcA",
		"info": "Deploy: Spawn Torrential Rain, Clear Skies or Lacerate.\n",
		"name": "Water Hag",
		"positions": [
			"Siege"
		],
		"strength": 3,
		"uuid": "AM137LkZX0y_4yXtE0bZcA",
		"variations": [
			{
				"art": {
					"artist": "Adrian Smith",
					"thumbnailImage": "https://api.gwentapi.com/media/water-hag-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/AM137LkZX0y_4yXtE0bZcA/variations/igRVau_kWb6TLxxR14iPNQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "igRVau_kWb6TLxxR14iPNQ"
			}
		]
	},
	"White Frost": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA",
				"name": "Weather"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA",
				"name": "Special"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Behold Tedd Deireadh, the Final Age. The world destroyed by the White Frost.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/rFwly3N-WSqe8afApiOkjg",
		"info": "Apply Frost to a row on your opponent's side and the row above it.\nFrost: Every turn, at the start of your turn, Damage one of the Lowest Units on the row by 2.\n",
		"name": "White Frost",
		"positions": [
			"Melee",
			"Ranged",
			"Event"
		],
		"uuid": "rFwly3N-WSqe8afApiOkjg",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/white-frost-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/rFwly3N-WSqe8afApiOkjg/variations/l6jzuJg9VDmwz9zPAjyErA",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "l6jzuJg9VDmwz9zPAjyErA"
			}
		]
	},
	"Wild Boar of the Sea": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g",
				"name": "Machine"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ",
			"name": "Skellige"
		},
		"flavor": "Merely mention this name to a Nilfgaardian, and they'll feel a spreading warmth in their knickers…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/vKwgBF_MVQm1PQYcRb-rzw",
		"info": "Every turn, at the start of your turn, Strengthen the Unit to the left by 1 and Damage the Unit to the right by 1.\n",
		"name": "Wild Boar of the Sea",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "vKwgBF_MVQm1PQYcRb-rzw",
		"variations": [
			{
				"art": {
					"artist": "Bogna Gawrońska",
					"thumbnailImage": "https://api.gwentapi.com/media/wild-boar-of-the-sea-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/vKwgBF_MVQm1PQYcRb-rzw/variations/UigrLWbGUpiYS500hw8jqg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "UigrLWbGUpiYS500hw8jqg"
			}
		]
	},
	"Wild Hunt Hound": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw",
				"name": "Wild Hunt"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Cry 'Havoc!', and let slip the dogs of war.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/qc42Cjh9Uy-f65Jzds97bQ",
		"info": "Deploy: Play a Biting Frost card from your Deck.\n",
		"name": "Wild Hunt Hound",
		"positions": [
			"Melee"
		],
		"strength": 4,
		"uuid": "qc42Cjh9Uy-f65Jzds97bQ",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/wild-hunt-hound-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/qc42Cjh9Uy-f65Jzds97bQ/variations/C6dMpDJgWa6WFXnQ95uGBA",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "C6dMpDJgWa6WFXnQ95uGBA"
			}
		]
	},
	"Wild Hunt Navigator": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw",
				"name": "Wild Hunt"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "For hundreds of years, Avallac'h tried to recreate the Elder Blood gene through back breeding - yet the elven children thus fostered were but dim sparks compared to Lara's flame.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/rDdbgJ6XWviiaANitOZpUw",
		"info": "Deploy: Choose a different Bronze Wild Hunt Ally. Play a copy of it from your Deck.\n",
		"name": "Wild Hunt Navigator",
		"positions": [
			"Siege"
		],
		"strength": 3,
		"uuid": "rDdbgJ6XWviiaANitOZpUw",
		"variations": [
			{
				"art": {
					"artist": "Diego de Almeida",
					"thumbnailImage": "https://api.gwentapi.com/media/wild-hunt-navigator-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 80,
					"premium": 400
				},
				"href": "https://api.gwentapi.com/v0/cards/rDdbgJ6XWviiaANitOZpUw/variations/olsgflz_WWes2PNVjlK7QQ",
				"mill": {
					"normal": 20,
					"premium": 20
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow",
					"name": "Rare"
				},
				"uuid": "olsgflz_WWes2PNVjlK7QQ"
			}
		]
	},
	"Wild Hunt Rider": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw",
				"name": "Wild Hunt"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "First the buffalo horns atop their helms penetrate one's view, then the crest betwixt them, and finally the skull–like face exposed beneath their visors.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/oNE58vzwWs-oW_mOwZzr4g",
		"info": "At the end of the Round, keep this Unit on the Board if you lost.\nIf this Unit is part of a Trio at the end of your turn, Boost it by 1.\n",
		"name": "Wild Hunt Rider",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "oNE58vzwWs-oW_mOwZzr4g",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/wild-hunt-rider-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/oNE58vzwWs-oW_mOwZzr4g/variations/l8-s7PLBV3mMpN_rHZk6TQ",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "l8-s7PLBV3mMpN_rHZk6TQ"
			}
		]
	},
	"Wild Hunt Warrior": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw",
				"name": "Wild Hunt"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "The White Frost is coming.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/sI5xs-d3XrK_tIedPGhWkg",
		"info": "Deploy: Damage an Enemy by 3. If it was Destroyed, Boost self by 2.\n",
		"name": "Wild Hunt Warrior",
		"positions": [
			"Melee"
		],
		"strength": 5,
		"uuid": "sI5xs-d3XrK_tIedPGhWkg",
		"variations": [
			{
				"art": {
					"artist": "Marta Dettlaff",
					"thumbnailImage": "https://api.gwentapi.com/media/wild-hunt-warrior-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/sI5xs-d3XrK_tIedPGhWkg/variations/RXj9FgB-VDmzU8fejqbdLg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "RXj9FgB-VDmzU8fejqbdLg"
			}
		]
	},
	"Woodland Spirit": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw",
				"name": "Relict"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "We never hunt in these woods. Not even if it means the whole village'll starve.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/cRa7rxltVvOrK1bsZGPbuA",
		"info": "Deploy: Spawn 3 Rabid Wolves and apply Fog to the opposite row.\n",
		"name": "Woodland Spirit",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 5,
		"uuid": "cRa7rxltVvOrK1bsZGPbuA",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/woodland-spirit-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/cRa7rxltVvOrK1bsZGPbuA/variations/TPIhuhwYUn6RFx9cclOluA",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "TPIhuhwYUn6RFx9cclOluA"
			}
		]
	},
	"Wyvern": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g",
				"name": "Draconid"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg",
			"name": "Monster"
		},
		"flavor": "Imagine a cross between a winged snake and a nightmare. Wyverns are worse.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A",
			"name": "Bronze"
		},
		"href": "https://api.gwentapi.com/v0/cards/Y1XnFmv2XNqI2iDIL9geoQ",
		"info": "Deploy: Damage an Enemy by 3.\n",
		"name": "Wyvern",
		"positions": [
			"Siege"
		],
		"strength": 6,
		"uuid": "Y1XnFmv2XNqI2iDIL9geoQ",
		"variations": [
			{
				"art": {
					"artist": "Alejandro Mirabal",
					"thumbnailImage": "https://api.gwentapi.com/media/wyvern-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 30,
					"premium": 200
				},
				"href": "https://api.gwentapi.com/v0/cards/Y1XnFmv2XNqI2iDIL9geoQ/variations/dQQ-s1_aWV6VMILgnVNnYg",
				"mill": {
					"normal": 10,
					"premium": 10
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw",
					"name": "Common"
				},
				"uuid": "dQQ-s1_aWV6VMILgnVNnYg"
			}
		]
	},
	"Xarthisius": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw",
			"name": "Nilfgaard"
		},
		"flavor": "Astrology, hydromancy, haruspicy, ceromancy. Ovomancy, spodomancy, metroscopy, brontoscopy…",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/7zeFl3d_U6iDcs-wYTMPsQ",
		"info": "Deploy: Look at the top 3 cards in your opponent's Deck. You may move 1 to the bottom of their Deck.\n",
		"name": "Xarthisius",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 10,
		"uuid": "7zeFl3d_U6iDcs-wYTMPsQ",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/xarthisius-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/7zeFl3d_U6iDcs-wYTMPsQ/variations/5swHglkAWia1zcwb0nJUvg",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "5swHglkAWia1zcwb0nJUvg"
			}
		]
	},
	"Yaevinn": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g",
				"name": "Doomed"
			},
			{
				"href": "https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w",
				"name": "Elf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "We are the drops of rain that together make a ferocious storm.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/I-mkePuHV6uMcejBo-2Q0w",
		"info": "Deploy: Draw the top Unit and top Special card from your Deck. Keep 1 and shuffle the other back.\n",
		"name": "Yaevinn",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 12,
		"uuid": "I-mkePuHV6uMcejBo-2Q0w",
		"variations": [
			{
				"art": {
					"artist": "Ilker Serdar Yildiz",
					"thumbnailImage": "https://api.gwentapi.com/media/yaevinn-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/I-mkePuHV6uMcejBo-2Q0w/variations/o6JCdVyBWpaxDUMaTk_3Cw",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "o6JCdVyBWpaxDUMaTk_3Cw"
			}
		]
	},
	"Yarpen Zigrin": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA",
				"name": "Dwarf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Ever hear o' the dragon Ocvist? From Quartz Mountain? Well, Yarpen Zigrin and his band o' dwarves did 'im in.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag",
			"name": "Silver"
		},
		"href": "https://api.gwentapi.com/v0/cards/tGq44FNZUgizvCzlGMOnVA",
		"info": "Whenever a Dwarf Ally (including Golds) is played, Boost self by 1.\nDeploy: Gain Resilience.\n",
		"name": "Yarpen Zigrin",
		"positions": [
			"Siege"
		],
		"strength": 7,
		"uuid": "tGq44FNZUgizvCzlGMOnVA",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/yarpen-zigrin-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 200,
					"premium": 800
				},
				"href": "https://api.gwentapi.com/v0/cards/tGq44FNZUgizvCzlGMOnVA/variations/3-VIFGNyX_WAZigFxUF6VQ",
				"mill": {
					"normal": 50,
					"premium": 50
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg",
					"name": "Epic"
				},
				"uuid": "3-VIFGNyX_WAZigFxUF6VQ"
			}
		]
	},
	"Yennefer": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Magic is Chaos, Art and Science. It is a curse, a blessing and a progression.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/IR_9w0lcX5iM5-gJ6KwU6Q",
		"info": "Deploy: Spawn a Unicorn or a Chironex.\n",
		"name": "Yennefer",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 6,
		"uuid": "IR_9w0lcX5iM5-gJ6KwU6Q",
		"variations": [
			{
				"art": {
					"artist": "Anna Podedworna",
					"thumbnailImage": "https://api.gwentapi.com/media/yennefer-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/IR_9w0lcX5iM5-gJ6KwU6Q/variations/CHQj3YDTWLqMvBcbVtsB9g",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "CHQj3YDTWLqMvBcbVtsB9g"
			}
		]
	},
	"Yennefer: The Conjurer": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ",
				"name": "Mage"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "A good sorceress must know when to conjure ice… and when to conjure fire.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/EsZuchNWVceQ3TqM74BOQw",
		"info": "Every turn, at the start of your turn, Damage all the Highest Enemies by 1.\n",
		"name": "Yennefer: The Conjurer",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 4,
		"uuid": "EsZuchNWVceQ3TqM74BOQw",
		"variations": [
			{
				"art": {
					"artist": "Marek Madej",
					"thumbnailImage": "https://api.gwentapi.com/media/yennefer-the-conjurer-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/EsZuchNWVceQ3TqM74BOQw/variations/xfpsIqMaVz63FEFMO4sfHw",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "xfpsIqMaVz63FEFMO4sfHw"
			}
		]
	},
	"Zoltan Chivay": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA",
				"name": "Dwarf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ",
			"name": "Scoia'tael"
		},
		"flavor": "Drinkin' alone's like crappin' with company.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/sVC2mby7UNGO98kkBxHwiw",
		"info": "Deploy: Move 3 Units to this row on their side. If they are Allies, Strengthen them by 2.\n",
		"name": "Zoltan Chivay",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 8,
		"uuid": "sVC2mby7UNGO98kkBxHwiw",
		"variations": [
			{
				"art": {
					"artist": "James Daly",
					"thumbnailImage": "https://api.gwentapi.com/media/zoltan-chivay-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/sVC2mby7UNGO98kkBxHwiw/variations/NYBYXgmFWv2UCtbCg8i0lQ",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "NYBYXgmFWv2UCtbCg8i0lQ"
			}
		]
	},
	"Zoltan: Animal Tamer": {
		"categories": [
			{
				"href": "https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA",
				"name": "Dwarf"
			}
		],
		"faction": {
			"href": "https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng",
			"name": "Neutral"
		},
		"flavor": "Apologies. My exotic pet's a clever birdie, but a wee bit lewd. Paid ten thalers for the beaute.",
		"group": {
			"href": "https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw",
			"name": "Gold"
		},
		"href": "https://api.gwentapi.com/v0/cards/RlU29hgkVdWSt1GrSU7JEQ",
		"info": "Deploy: Spawn Field Marshal Duda Companion or Field Marshal Duda Agitator.\n",
		"name": "Zoltan: Animal Tamer",
		"positions": [
			"Melee",
			"Ranged",
			"Siege"
		],
		"strength": 7,
		"uuid": "RlU29hgkVdWSt1GrSU7JEQ",
		"variations": [
			{
				"art": {
					"artist": "Grafit Studio",
					"thumbnailImage": "https://api.gwentapi.com/media/zoltan-animal-tamer-thumbnail.png"
				},
				"availability": "BaseSet",
				"craft": {
					"normal": 800,
					"premium": 1600
				},
				"href": "https://api.gwentapi.com/v0/cards/RlU29hgkVdWSt1GrSU7JEQ/variations/ownFXQzhVSOvTtaBtA9zSQ",
				"mill": {
					"normal": 200,
					"premium": 200
				},
				"rarity": {
					"href": "https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA",
					"name": "Legendary"
				},
				"uuid": "ownFXQzhVSOvTtaBtA9zSQ"
			}
		]
	}
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _walk = __webpack_require__(8);

var _walk2 = _interopRequireDefault(_walk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _walk2.default)();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _urlParse = __webpack_require__(9);

var _urlParse2 = _interopRequireDefault(_urlParse);

var _findAllMatches = __webpack_require__(13);

var _findAllMatches2 = _interopRequireDefault(_findAllMatches);

var _replaceMatches = __webpack_require__(21);

var _replaceMatches2 = _interopRequireDefault(_replaceMatches);

var _index = __webpack_require__(22);

var _index2 = _interopRequireDefault(_index);

var _data = __webpack_require__(5);

var _dictionary = __webpack_require__(1);

var _dictionary2 = _interopRequireDefault(_dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window, document */

var CLASSNAME = 'hyper-gwent-card-highlight';
var CARD_NAME_ATTRIBUTE = 'data-card-name';
var GWENTDB_TOOLTIP_ATTR = 'data-tooltip-url';
var GWENTDB_HOSTNAME = 'www.gwentdb.com';

// Walk the document and highlight cards
function walk() {
  var HOSTNAME = (0, _urlParse2.default)(window.location.href).hostname;

  var walker = window.document.createTreeWalker(window.document.body, window.NodeFilter.SHOW_ELEMENT + window.NodeFilter.SHOW_TEXT,
  // Filter out GwentDB tooltips
  {
    acceptNode: function acceptNode(node) {
      var TEXT_NODE = 3;
      var ELEMENT_NODE = 1;

      var _window$NodeFilter = window.NodeFilter,
          FILTER_ACCEPT = _window$NodeFilter.FILTER_ACCEPT,
          FILTER_REJECT = _window$NodeFilter.FILTER_REJECT,
          FILTER_SKIP = _window$NodeFilter.FILTER_SKIP;


      if (node.nodeType === TEXT_NODE) {
        return FILTER_ACCEPT;
      } else if (node.nodeType === ELEMENT_NODE) {
        // Ignore style and scripts
        if (node.tagName === 'STYLE' || node.tagName === 'SCRIPT') {
          return FILTER_REJECT;
        }

        // on GwentDB, we skip existing tooltips
        if (HOSTNAME === GWENTDB_HOSTNAME && node.getAttribute(GWENTDB_TOOLTIP_ATTR)) {
          // Skip this node and all its children
          return FILTER_REJECT;
        }

        // Skip the node itself
        return FILTER_SKIP;
      }
      return FILTER_SKIP;
    }
  });

  var nodes = [];

  while (walker.nextNode()) {
    var node = walker.currentNode;
    var matches = (0, _findAllMatches2.default)(_dictionary2.default, node.nodeValue);

    if (matches.length) {
      nodes.push({
        node: node,
        matches: matches
      });
    }
  }

  nodes.forEach(function (_ref) {
    var node = _ref.node,
        matches = _ref.matches;

    var span = window.document.createElement('span');
    span.innerHTML = (0, _replaceMatches2.default)(node.nodeValue, matches, function (match) {
      return '<span class="' + CLASSNAME + '" ' + CARD_NAME_ATTRIBUTE + '="' + match.entryValue + '" style="border-bottom: 1px dashed; padding-bottom: 0.1em">' + node.nodeValue.slice(match.start, match.end) + '</span>';
    });

    node.parentNode.replaceChild(span, node);
  });

  // Add tooltips
  var highlights = document.getElementsByClassName(CLASSNAME);
  for (var i = 0; i < highlights.length; i += 1) {
    var highlight = highlights[i];
    var cardName = highlight.getAttribute(CARD_NAME_ATTRIBUTE);
    var card = _data.CARDS[cardName];
    (0, _index2.default)(card, highlight);
  }
}

exports.default = walk;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(11),
    qs = __webpack_require__(12),
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  loc = loc || global.location || {};

  var finaldestination = {},
      type = typeof loc === 'undefined' ? 'undefined' : _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location === 'undefined' ? 'undefined' : _typeof(location),
      url = this,
      i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
      url.pathname = value.length && value.charAt(0) !== '/' ? '/' + value : value;

      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query,
      url = this,
      protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (; part = parser.exec(query); result[decode(part[1])] = decode(part[2])) {}

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _removeAccents = __webpack_require__(0);

var _removeAccents2 = _interopRequireDefault(_removeAccents);

var _dictionary = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
type Match = {
    start: number,
    end: number,
    // The matched key path in the dictionary
    entryKey: string
    // The exact name of the card matched
    entryValue: string
}
*/

/**
 * @param  {Dictionary} dictionary
 * @param  {string} text
 * @return {Array<Match>} The ranges of matched text.
 */
function findAllMatches(dictionary, text) {
  var cleanText = (0, _removeAccents2.default)(text).toLowerCase();
  var result = [];

  // Only match at beginning of words
  var wasNotWord = true;
  for (var i = 0; i < cleanText.length; i += 1) {
    var isWord = /\w/.test(cleanText[i]);
    if (wasNotWord && isWord) {
      var match = (0, _dictionary.matches)(dictionary, cleanText, i);
      if (match) {
        result.push(match);

        // Fast forward
        i = match.end - 1;
      }
    }

    wasNotWord = /[^\w]/.test(cleanText[i]);
  }

  return result;
}

exports.default = findAllMatches;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param  {Dictionary} dictionary The dictionary to search in
 * @param  {string} text The text to search for a substring match
 * @param  {number} index The index of the start of the substring
 * @return {boolean} True if the dictionary contains the substring
 */
function contains(dictionary, text) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var char = text[index];
  if (char === undefined) {
    return dictionary[''];
  }
  var subDict = dictionary[char];
  return subDict && contains(subDict, text, index + 1);
}

exports.default = contains;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Find the longest match at the given index in the text
 * @param  {Dictionary} dictionary
 * @param  {string} text
 * @param  {number} [index=0]
 * @param  {string} acc.matchedString the piece of text matched so far
 * @param  {string} acc.key the matched key so far
 * @return {Match | undefined} Maybe the key of the found match
 */
function matches(dictionary, text) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var acc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { matchedString: '', key: '' };
  var matchedString = acc.matchedString,
      key = acc.key;


  var nextChar = text[index];
  var endOfWord = nextChar === undefined || !/\w/.test(nextChar);
  // Have we found a match yet?
  var isMatch = dictionary[''] && endOfWord;
  var match = {
    start: index - matchedString.length,
    end: index,
    entryValue: dictionary[''],
    entryKey: key
  };

  if (nextChar === undefined) {
    return isMatch && match;
  }

  var subDict = dictionary[nextChar];
  if (!subDict) {
    return isMatch && match;
  }

  var longerMatch = matches(subDict, text, index + 1, {
    matchedString: matchedString + nextChar,
    key: key + nextChar
  });
  // We want the longest match, or the current match
  return longerMatch || isMatch && match;
}

exports.default = matches;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pluralize = __webpack_require__(17);

var _pluralize2 = _interopRequireDefault(_pluralize);

var _removeAccents = __webpack_require__(0);

var _removeAccents2 = _interopRequireDefault(_removeAccents);

var _data = __webpack_require__(5);

var _create = __webpack_require__(2);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DICTIONARY = (0, _create2.default)(_data.NAMES.reduce(function (array, name) {
  var cleanName = (0, _removeAccents2.default)(name).toLowerCase();

  // Standard
  array.push([cleanName, name]);
  // Plural
  array.push([(0, _pluralize2.default)(cleanName), name]);

  // Aliases
  var aliases = _data.ALIASES[name] || [];
  aliases.forEach(function (alias) {
    array.push([alias, name]);
    array.push([(0, _pluralize2.default)(alias), name]);
  });
  return array;
}, []));

exports.default = DICTIONARY;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if ("function" === 'function' && ( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') {
    // Node.
    module.exports = pluralize();
  } else if (true) {
    // AMD, registers as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return pluralize();
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser global.
    root.pluralize = pluralize();
  }
})(undefined, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule(rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase(word, token) {
    // Tokens are an exact match.
    if (word === token) return token;

    // Upper cased words. E.g. "HELLO".
    if (word === word.toUpperCase()) return token.toUpperCase();

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate(str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Replace a word using a rule.
   *
   * @param  {string} word
   * @param  {Array}  rule
   * @return {string}
   */
  function replace(word, rule) {
    return word.replace(rule[0], function (match, index) {
      var result = interpolate(rule[1], arguments);

      if (match === '') {
        return restoreCase(word[index - 1], result);
      }

      return restoreCase(match, result);
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    rules
   * @return {string}
   */
  function sanitizeWord(token, word, rules) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = rules.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = rules[len];

      if (rule[0].test(word)) return replace(word, rule);
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord(replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Check if a word is part of the map.
   */
  function checkWord(replaceMap, keepMap, rules, bool) {
    return function (word) {
      var token = word.toLowerCase();

      if (keepMap.hasOwnProperty(token)) return true;
      if (replaceMap.hasOwnProperty(token)) return false;

      return sanitizeWord(token, token, rules) === token;
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word
   * @param  {number}  count
   * @param  {boolean} inclusive
   * @return {string}
   */
  function pluralize(word, count, inclusive) {
    var pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);

  /**
   * Check if a word is plural.
   *
   * @type {Function}
   */
  pluralize.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);

  /**
   * Check if a word is singular.
   *
   * @type {Function}
   */
  pluralize.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
  // Pronouns.
  ['I', 'we'], ['me', 'us'], ['he', 'they'], ['she', 'they'], ['them', 'them'], ['myself', 'ourselves'], ['yourself', 'yourselves'], ['itself', 'themselves'], ['herself', 'themselves'], ['himself', 'themselves'], ['themself', 'themselves'], ['is', 'are'], ['was', 'were'], ['has', 'have'], ['this', 'these'], ['that', 'those'],
  // Words ending in with a consonant and `o`.
  ['echo', 'echoes'], ['dingo', 'dingoes'], ['volcano', 'volcanoes'], ['tornado', 'tornadoes'], ['torpedo', 'torpedoes'],
  // Ends with `us`.
  ['genus', 'genera'], ['viscus', 'viscera'],
  // Ends with `ma`.
  ['stigma', 'stigmata'], ['stoma', 'stomata'], ['dogma', 'dogmata'], ['lemma', 'lemmata'], ['schema', 'schemata'], ['anathema', 'anathemata'],
  // Other irregular rules.
  ['ox', 'oxen'], ['axe', 'axes'], ['die', 'dice'], ['yes', 'yeses'], ['foot', 'feet'], ['eave', 'eaves'], ['goose', 'geese'], ['tooth', 'teeth'], ['quiz', 'quizzes'], ['human', 'humans'], ['proof', 'proofs'], ['carve', 'carves'], ['valve', 'valves'], ['looey', 'looies'], ['thief', 'thieves'], ['groove', 'grooves'], ['pickaxe', 'pickaxes'], ['whiskey', 'whiskies']].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [[/s?$/i, 's'], [/[^\u0000-\u007F]$/i, '$0'], [/([^aeiou]ese)$/i, '$1'], [/(ax|test)is$/i, '$1es'], [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'], [/(e[mn]u)s?$/i, '$1s'], [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'], [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'], [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'], [/(seraph|cherub)(?:im)?$/i, '$1im'], [/(her|at|gr)o$/i, '$1oes'], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'], [/sis$/i, 'ses'], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'], [/([^aeiouy]|qu)y$/i, '$1ies'], [/([^ch][ieo][ln])ey$/i, '$1ies'], [/(x|ch|ss|sh|zz)$/i, '$1es'], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'], [/(m|l)(?:ice|ouse)$/i, '$1ice'], [/(pe)(?:rson|ople)$/i, '$1ople'], [/(child)(?:ren)?$/i, '$1ren'], [/eaux$/i, '$0'], [/m[ae]n$/i, 'men'], ['thou', 'you']].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [[/s$/i, ''], [/(ss)$/i, '$1'], [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'], [/(^analy)(?:sis|ses)$/i, '$1sis'], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'], [/ies$/i, 'y'], [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'], [/\b(mon|smil)ies$/i, '$1ey'], [/(m|l)ice$/i, '$1ouse'], [/(seraph|cherub)im$/i, '$1'], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'], [/(e[mn]u)s?$/i, '$1'], [/(movie|twelve)s$/i, '$1'], [/(cris|test|diagnos)(?:is|es)$/i, '$1is'], [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'], [/(alumn|alg|vertebr)ae$/i, '$1a'], [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'], [/(matr|append)ices$/i, '$1ix'], [/(pe)(rson|ople)$/i, '$1rson'], [/(child)ren$/i, '$1'], [/(eau)x?$/i, '$1'], [/men$/i, 'man']].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
  // Singular words with no plurals.
  'adulthood', 'advice', 'agenda', 'aid', 'alcohol', 'ammo', 'anime', 'athletics', 'audio', 'bison', 'blood', 'bream', 'buffalo', 'butter', 'carp', 'cash', 'chassis', 'chess', 'clothing', 'cod', 'commerce', 'cooperation', 'corps', 'debris', 'diabetes', 'digestion', 'elk', 'energy', 'equipment', 'excretion', 'expertise', 'flounder', 'fun', 'gallows', 'garbage', 'graffiti', 'headquarters', 'health', 'herpes', 'highjinks', 'homework', 'housework', 'information', 'jeans', 'justice', 'kudos', 'labour', 'literature', 'machinery', 'mackerel', 'mail', 'media', 'mews', 'moose', 'music', 'manga', 'news', 'pike', 'plankton', 'pliers', 'pollution', 'premises', 'rain', 'research', 'rice', 'salmon', 'scissors', 'series', 'sewage', 'shambles', 'shrimp', 'species', 'staff', 'swine', 'tennis', 'traffic', 'transporation', 'trout', 'tuna', 'wealth', 'welfare', 'whiting', 'wildebeest', 'wildlife', 'you',
  // Regexes.
  /[^aeiou]ese$/i, // "chinese", "japanese"
  /deer$/i, // "deer", "reindeer"
  /fish$/i, // "fish", "blowfish", "angelfish"
  /measles$/i, /o[iu]s$/i, // "carnivorous"
  /pox$/i, // "chickpox", "smallpox"
  /sheep$/i].forEach(pluralize.addUncountableRule);

  return pluralize;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CARDS = __webpack_require__(6);

var _CARDS2 = _interopRequireDefault(_CARDS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAMES = Object.keys(_CARDS2.default);

exports.default = NAMES;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ALIASES = {
  'Adrenaline Rush': ['arush'],
  Aelirenn: [],
  Aeromancy: [],
  Aglaïs: [],
  'Alba Pikeman': ['pikeman'],
  'Alba Spearmen': ['spearmen'],
  Albrich: [],
  Alchemist: [],
  "Alzur's Double–Cross": ['adc'],
  "Alzur's Thunder": ['thunder', 'zap'],
  Ambassador: [],
  'Ancient Foglet': [
    // 'af',
  ],
  Arachas: [],
  'Arachas Behemoth': ['behemoth'],
  'Arachas Venom': [
    // 'av',
  ],
  Archgriffin: [],
  'Aretuza Adept': [
    // 'aa',
  ],
  Assassination: [],
  'Assire Var Anahid': ['assire'],
  Auckes: [],
  "Avallac'h": ['avallach'],
  Ballista: [],
  'Barclay Els': ['barclay'],
  "Bekker's Twisted Mirror": ['btm', 'bekker'],
  'Berserker Marauder': [
    // 'bm',
  ],
  'Birna Bran': ['birna'],
  'Biting Frost': ['frost'],
  'Black Infantry Arbalest': ['arbalest'],
  'Bloodcurdling Roar': [
    // 'br',
  ],
  'Bloody Baron': ['baron'],
  'Blue Mountain Commando': ['bmc'],
  'Blue Stripes Commando': ['bsc'],
  'Blue Stripes Scout': ['bss'],
  'Blueboy Lugos': ['bluefish'],
  Botchling: [],
  Braenn: [],
  'Brouver Hoog': ['brouver'],
  Cahir: [],
  Cantarella: [],
  Caranthir: [],
  Caretaker: [],
  Ceallach: [],
  'Celaeno Harpy': [
    // 'harpy',
  ],
  Cerys: [],
  'Champion of Champions': ['coc'],
  Chort: [],
  Ciaran: [],
  Ciri: [],
  'Ciri: Dash': ['cdash'],
  'Clan an Craite Raider': ['ccr', 'raider', 'cacr'],
  'Clan An Craite Warcrier': ['warcrier',
  // 'warcry',
  'cacw'],
  'Clan An Craite Warrior': [],
  'Clan Brokvar Archer': ['cba'],
  'Clan Brokvar Hunter': ['cbh'],
  'Clan Dimun Pirate': ['cdp'],
  'Clan Dimun Pirate Captain': ['cdpc'],
  'Clan Drummond Shieldmaiden': ['cds'],
  'Clan Heymaey Skald': ['skald'],
  'Clan Tordarroch Armorsmith': ['armorsmith'],
  'Clan Tordarroch Shieldsmith': ['shieldsmith'],
  'Clan Tuirseach Axeman': ['axeman', 'xman', 'xmen'],
  'Clan Tuirseach Skirmishers': ['skirmisher'],
  Cleaver: [],
  'Combat Engineer': ['engineer'],
  "Commander's Horn": [
  // 'ch',
  'horn'],
  'Commando Neophyte': ['neophyte'],
  Coral: [],
  'Crach An Craite': ['crach'],
  'Crone: Brewess': ['brewess'],
  'Crone: Weavess': ['weavess'],
  'Crone: Whispess': ['whispess'],
  Cynthia: [],
  'Cyprian Wiley': ['wiley', 'cyprian', 'whoreson'],
  'Daerlan Foot Soldiers': ['dfs'],
  Dagon: [],
  Dandelion: [],
  Decoy: [],
  'Dennis Cranmer': ['dennis', 'cranmer'],
  Dethmold: [],
  Dijkstra: [],
  'Dimeritium Bomb': ['dbomb'],
  'Dimeritium Shackles': ['shackles', 'dshackles', 'lock'],
  'Djenge Frett': ['djenge', 'frett'],
  'Dol Blathanna Archer': ['dba'],
  'Dol Blathanna Marksman': ['dbm'],
  'Dol Blathanna Protector': ['dbp', 'protector'],
  'Dol Blathanna Trapper': ['trapper'],
  'Donar an Hindar': ['donar', 'hindar'],
  'Draig Bon–Dhu': ['draig', 'bon-dhu'],
  Draug: [],
  Drought: [],
  Drowner: [],
  Dudu: [],
  'Dun Banner Heavy Cavalry': ['dbhc', 'heavy cavalry'],
  'Dun Banner Light Cavalry': ['dblc', 'light cavalry'],
  'Dwarven Mercenary': [],
  'Dwarven Skirmisher': [],
  'Earth Elemental': [],
  Eithné: ['eithne'],
  Ekimmara: ['eki'],
  "Ele'yas": ['eleyas'],
  'Elven Mercenary': ['merc'],
  'Elven Wardancer': ['wardancer'],
  'Emhyr Var Emreis': ['emhyr'],
  Emissary: [],
  Epidemic: [],
  Eredin: [],
  Ermion: [],
  Eskel: [],
  'Fake Ciri': [],
  'Field Medic': [
    // 'fm',
  ],
  Fiend: [],
  'Fire Elemental': [],
  'Fire Scorpion': [
  // 'fs',
  'scorpion'],
  'First Light': [
    // 'fl',
  ],
  Foglet: [],
  Foltest: [],
  Francesca: [],
  Frightener: [],
  'Fringilla Vigo': ['fringilla'],
  "Gaunter O'Dimm": ['gaunter', 'god'],
  "Ge'els": ['geels'],
  Geralt: [],
  'Geralt: Aard': ['aard', 'gaard'],
  'Geralt: Igni': ['igni', 'gigni'],
  Ghoul: [],
  'Giant Toad': ['toad', 'frog'],
  'Grave Hag': [
    // 'gh',
  ],
  Gremist: [],
  Griffin: [],
  'Harald the Cripple': ['htc', 'harald'],
  Harpy: [],
  'Hawker Healer': [],
  'Hawker Smuggler': ['smuggler'],
  'Hawker Support': [],
  Henselt: [],
  Hjalmar: [],
  'Holger Blackhand': ['holger'],
  'Ice Giant': [],
  'Ida Emean': ['ida'],
  Imlerith: [],
  'Immune Boost': [
    // 'blizzard',
  ],
  'Impenetrable Fog': ['fog'],
  'Impera Brigade': [],
  'Impera Enforcers': [],
  'Imperial Golem': ['golem'],
  Iorveth: [],
  Iris: [],
  Isengrim: [],
  Ithlinne: [],
  'Joachim De Wett': ['joachim'],
  'John Calveit': ['calveit'],
  'John Natalis': ['natalis'],
  Johnny: [],
  Jotunn: [],
  'Jutta an Dimun': ['jutta'],
  'Kaedweni Sergeant': ['sergeant'],
  'Kaedweni Siege Platform': ['ksp', 'siege platform'],
  'Kaedweni Siege Support': ['kss', 'siege support'],
  Kambi: [],
  Katakan: [],
  Kayran: [],
  'Keira Metz': ['keira'],
  'King Bran': ['bran'],
  'King of Beggars': ['kob'],
  Lacerate: [],
  Lambert: [],
  'Leo Bonhart': ['leo'],
  'Letho of Gulet': ['letho'],
  'Light Longship': [],
  Lubberkin: [],
  'Madman Lugos': [],
  'Mahakam Defender': ['defender', 'dorf'],
  'Mahakam Guard': [],
  Malena: [],
  Mangonel: [],
  Manticore: [],
  'Manticore Venom': [],
  'Marching Orders': [
    // 'mo',
  ],
  Mardroeme: ['mushroom', 'shroom'],
  'Margarita Laux–Antille': ['margarita', 'rita'],
  'Menno Coehoorn': ['menno'],
  "Merigold's Hailstorm": ['hailstorm', 'hail'],
  Milva: [],
  'Monster Nest': ['nest'],
  Morenn: [],
  Morkvarg: ['wolf'],
  'Morvran Voorhis': ['morvran'],
  Myrgtabrakke: ['myrgta', 'brakke'],
  "Nature's Gift": [
    // 'ng',
  ],
  'Nauzicaa Brigade': [],
  'Nauzicaa Standard Bearer': ['nsb', 'standard bearer'],
  Necromancy: [],
  Nekker: [],
  'Nekker Warrior': [
    // 'nw',
  ],
  Nenneke: [],
  'Nilfgaardian Knight': [
    // 'nk',
  ],
  Nithral: [],
  Ocvist: [],
  Odrin: [],
  'Old Speartip: Asleep': ['speartip'],
  Olgierd: [],
  Operator: [],
  Overdose: [],
  Pavetta: [],
  'Peter Saar Gwynleve': ['psg', 'peter'],
  'Philippa Eilhart': ['philippa'],
  'Priestess of Freya': ['priestess', 'freya'],
  'Prince Stennis': ['stennis'],
  Priscilla: [],
  'Prize-Winning Cow': ['prize winning cow', 'cow'],
  Queensguard: ['qg'],
  'Quen Sign': ['quen'],
  Radovid: [],
  'Ragh Nar Roog': ['rnr'],
  'Raging Berserker': [],
  Rainfarn: [],
  'Reaver Hunter': [],
  'Reaver Scout': [],
  'Redanian Elite': [],
  'Redanian Knight': [],
  'Redanian Knight-Elect': ['rke'],
  Regis: [],
  'Regis: Higher Vampire': ['rhv', 'higher vampire'],
  'Reinforced Ballista': ['ballista'],
  'Reinforced Siege Tower': ['rst', 'siege tower'],
  'Reinforced Trebuchet': [
    // 'rt',
  ],
  Reinforcement: [],
  Renew: [],
  Restore: ['restoration'],
  Roach: [],
  'Rot Tosser': [],
  'Royal Decree': ['decree'],
  'Sabrina Glevissig': ['sabrina'],
  Saesenthessis: [],
  Sarah: [],
  Saskia: [],
  'Savage Bear': ['bear'],
  Schirrú: [],
  Scorch: [],
  Serrit: [],
  Shadow: [],
  Shani: [],
  'Sheldon Skaggs': ['sheldon', 'skaggs'],
  Sigrdrifa: [],
  'Síle de Tansarville': ['sile'],
  'Skellige Storm': ['ss'],
  Skjall: [],
  Spotter: [],
  "Stammelford's Tremors": ['tremors', 'stammelford'],
  'Stefan Skellen': ['stefan'],
  Succubus: [],
  'Summoning Circle': [],
  Svanrige: [],
  'Swallow Potion': ['swallow'],
  Sweers: [],
  'Temerian Infantryman': [],
  Thaler: [],
  'The Guardian': ['guardian'],
  'The Last Wish': ['lw', 'last wish'],
  'Thunderbolt Potion': ['thunderbolt'],
  'Tibor Eggebracht': ['tibor'],
  'Torrential Rain': ['rain'],
  Toruviel: [],
  Treason: [],
  Trebuchet: [],
  'Tridam Infantryman': ['tridam'],
  'Triss: Butterfly Spell': ['triss butt'],
  'Triss Merigold': ['triss'],
  Trollololo: ['trololo'],
  Udalryk: [],
  'Unseen Elder': ['elder'],
  Vabjorn: [],
  Vanhemar: [],
  'Vattier De Rideaux': ['vdr', 'vattier'],
  'Vernon Roche': ['vernon', 'roche'],
  Ves: [],
  Vesemir: [],
  'Vicovaro Medic': [],
  'Vicovaro Novice': ['novice'],
  Vilgefortz: [],
  Villentretenmerth: ['borkh'],
  'Vran Warrior': ['vran'],
  'Vrihedd Brigade': [],
  'Vrihedd Dragoon': ['dragoon'],
  'Vrihedd Officer': [],
  'Vrihedd Sappers': ['sapper'],
  'Vrihedd Vanguard': [],
  'War Longship': ['war ship'],
  'Water Hag': [],
  'White Frost': [],
  'Wild Boar of the Sea': ['wild boar'],
  'Wild Hunt Hound': ['hound'],
  'Wild Hunt Navigator': ['navigator'],
  'Wild Hunt Rider': ['rider', 'whr'],
  'Wild Hunt Warrior': ['whw'],
  'Woodland Spirit': ['leshen'],
  Wyvern: [],
  Xarthisius: ['xarth'],
  Yaevinn: [],
  'Yarpen Zigrin': ['yarpen'],
  Yennefer: ['yen'],
  'Yennefer: The Conjurer': ['yencon'],
  'Zoltan: Animal Tamer': ['zat'],
  'Zoltan Chivay': ['chivay']
};

exports.default = ALIASES;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function replaceMatches(str, matches, reducer) {
  var acc = str;

  for (var i = 0, diff = 0; i < matches.length; i += 1) {
    var match = matches[i];
    var reducedValue = reducer(match);

    acc = acc.substr(0, match.start + diff) + reducedValue + acc.substr(match.end + diff);

    var originalValueLength = match.end - match.start;
    var reducedValueLength = reducedValue.length;

    diff += reducedValueLength - originalValueLength;
  }

  return acc;
}

exports.default = replaceMatches;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = __webpack_require__(23);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tooltip).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global window */

// eslint-disable-next-line no-unused-vars


var _jsxDom = __webpack_require__(24);

var _tooltip = __webpack_require__(25);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tooltipElement = function tooltipElement(card) {
  return (0, _jsxDom.createElement)(
    'div',
    { className: _tooltip2.default.locals.tooltip },
    (0, _jsxDom.createElement)(
      'style',
      null,
      _tooltip2.default.toString()
    ),
    (0, _jsxDom.createElement)('img', {
      className: _tooltip2.default.locals.tooltipImage,
      'data-src': card.variations[0].art.thumbnailImage,
      alt: ''
    }),
    (0, _jsxDom.createElement)(
      'div',
      { className: _tooltip2.default.locals.tooltipBlock + ' ' + (_tooltip2.default.locals.tooltipBlock + card.variations[0].rarity.name) },
      (0, _jsxDom.createElement)(
        'div',
        { className: _tooltip2.default.locals.tooltipName },
        card.name
      )
    ),
    (0, _jsxDom.createElement)(
      'div',
      { className: _tooltip2.default.locals.tooltipBlock + ' ' + (_tooltip2.default.locals.tooltipBlock + card.variations[0].rarity.name) },
      (0, _jsxDom.createElement)(
        'div',
        { className: _tooltip2.default.locals.tooltipInfo },
        card.info
      )
    )
  );
};

var CardTooltip = function () {
  // Tooltipped element
  function CardTooltip(card, target) {
    _classCallCheck(this, CardTooltip);

    this.visible = false;
    this.target = null;
    this.wrapper = null;

    this.target = target;

    this.wrapper = (0, _jsxDom.createElement)('hyper-gwent-tooltip', { style: {
        display: 'none',
        position: 'fixed',
        transform: 'translateY(-40%)',
        pointerEvents: 'none',
        zIndex: 999999999
      } });
    var shadow = this.wrapper.attachShadow({
      mode: 'closed'
    });
    this.wrapper.appendChild(shadow);

    this.tooltip = tooltipElement(card);
    shadow.appendChild(this.tooltip);
  }

  // Inject this tooltip in the page

  // HTML element to live in

  // Is the tooltip visible ?


  _createClass(CardTooltip, [{
    key: 'inject',
    value: function inject() {
      var _this = this;

      var wrapper = this.wrapper,
          target = this.target;

      window.document.body.appendChild(wrapper);
      target.addEventListener('mouseenter', function () {
        return _this.show();
      });
      target.addEventListener('mouseleave', function () {
        return _this.hide();
      });
      target.addEventListener('mousemove', function (e) {
        return _this.follow(e);
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.wrapper.style.display = 'none';
      this.visible = false;
    }
  }, {
    key: 'show',
    value: function show() {
      var wrapper = this.wrapper,
          tooltip = this.tooltip;


      var img = tooltip.querySelector('[data-src]');
      if (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.removeAttribute('data-src');
      }

      wrapper.style.display = 'block';

      this.visible = true;
    }
  }, {
    key: 'follow',
    value: function follow(mouseEvent) {
      var wrapper = this.wrapper,
          visible = this.visible,
          tooltip = this.tooltip;

      if (!visible) {
        return;
      }

      var clientX = mouseEvent.clientX,
          clientY = mouseEvent.clientY;
      var _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;

      var tooltipRect = tooltip.getBoundingClientRect();

      var left = clientX;
      if (left > innerWidth - tooltipRect.width) {
        // Too far on the right
        left = clientX - tooltipRect.width;
      }

      var top = clientY;
      // Do not go below screen
      top = Math.min(top, innerHeight - 0.6 * tooltipRect.height // Because of translateY(-40%)
      );
      // Do not go above screen
      top = Math.max(top, 0.4 * tooltipRect.height // Because of translateY(-40%)
      );

      wrapper.style.top = top + 'px';
      wrapper.style.left = left + 'px';
    }
  }]);

  return CardTooltip;
}();

function attachTooltip(card, target) {
  var tooltip = new CardTooltip(card, target);
  tooltip.inject();
}

exports.default = attachTooltip;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var keys = Object.keys;
function isBoolean(val) {
    return typeof val === 'boolean';
}
function isElement(val) {
    return val && typeof val.nodeType === 'number';
}
function isString(val) {
    return typeof val === 'string';
}
function isNumber(val) {
    return typeof val === 'number';
}
function isObject(val) {
    return val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || isFunction(val));
}
function isFunction(val) {
    return typeof val === 'function';
}
function isArrayLike(obj) {
    return isObject(obj) && typeof obj.length === 'number' && typeof obj.nodeType !== 'number';
}

function f(tag) {
    return function create(attr) {
        var children = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            children[_i - 1] = arguments[_i];
        }
        if (isElement(attr) || isString(attr)) {
            children.unshift(attr);
            attr = {};
        }
        return createElement(tag, attr, children);
    };
}
var DOM$$1 = function (obj) {
    for (var _i = 0, _a = keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        obj[key] = f(key);
    }
    return obj;
}({
    a: 0,
    blockquote: 0,
    button: 0,
    div: 0,
    em: 0,
    form: 0,
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0,
    hr: 0,
    img: 0,
    input: 0,
    li: 0,
    link: 0,
    ol: 0,
    p: 0,
    script: 0,
    span: 0,
    strong: 0,
    table: 0,
    thead: 0,
    td: 0,
    th: 0,
    tr: 0,
    ul: 0
});

var SVGNamespace = 'http://www.w3.org/2000/svg';
function preventDefault(event) {
    event.preventDefault();
    return event;
}
function stopPropagation(event) {
    event.stopPropagation();
    return event;
}

function isVisibleChild(value) {
    return !isBoolean(value) && value != null;
}

function className(value) {
    if (Array.isArray(value)) {
        return value.map(className).filter(Boolean).join(' ');
    } else if (isObject(value)) {
        return keys(value).filter(function (k) {
            return value[k];
        }).join(' ');
    } else if (isVisibleChild(value)) {
        return '' + value;
    } else {
        return '';
    }
}
function createElement(tag, attr) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    attr = attr || {};
    var node;
    if (isString(tag)) {
        node = attr.namespaceURI ? document.createElementNS(attr.namespaceURI, tag) : document.createElement(tag);
        attributes(attr, node);
        appendChildren(children, node);
    } else if (isFunction(tag)) {
        node = tag(__assign({}, attr, { children: children }));
    }
    if (isFunction(attr.ref)) {
        attr.ref(node);
    }
    return node;
}
function appendChild(child, node) {
    if (isArrayLike(child)) {
        appendChildren(child, node);
    } else if (isString(child) || isNumber(child)) {
        node.appendChild(document.createTextNode(child));
    } else if (child === null) {
        node.appendChild(document.createComment(''));
    } else if (isElement(child)) {
        node.appendChild(child);
    }
}
function appendChildren(children, node) {
    if (isElement(children) || isString(children)) {
        appendChild(children, node);
    } else {
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            appendChild(child, node);
        }
    }
    return node;
}
function attributes(attr, node) {
    for (var _i = 0, _a = keys(attr); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = attr[key];
        switch (key) {
            case 'style':
                if (isObject(value)) {
                    __assign(node[key], value);
                    continue;
                }
                break;
            case 'dataset':
                __assign(node[key], value);
                continue;
            case 'innerHTML':
            case 'innerText':
            case 'textContent':
                node[key] = value;
                continue;
            case 'spellCheck':
                node.spellcheck = value;
            case 'class':
            case 'className':
                node.setAttribute('class', className(value));
                continue;
            case 'ref':
            case 'namespaceURI':
                continue;
        }
        if (isFunction(value)) {
            if (key.substr(0, 2) === 'on') {
                var name = key.slice(2).toLowerCase();
                listen(node, name, value);
            }
        } else if (node) {
            if (value === true) {
                node.setAttribute(key, '');
            } else if (value !== false && value != null) {
                node.setAttribute(key, value);
            }
        }
    }
    return node;
}
function listen(node, eventName, callback) {
    node.addEventListener(eventName, callback);
    return node;
}

exports.SVGNamespace = SVGNamespace;
exports.preventDefault = preventDefault;
exports.stopPropagation = stopPropagation;
exports.createElement = createElement;
exports.DOM = DOM$$1;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(undefined);
// imports


// module
exports.push([module.i, ".tooltip {\n  font-family: Arial, sans-serif;\n  font-size: 13px;\n  line-height: 1.5;\n  width: 239px;\n  /* Same as left image padding */\n  padding-right: 62px;\n  /* Should not mess with hovering logic */\n  pointer-events: none;\n}\n\n.tooltipImage {\n  width: 260px;\n  margin-bottom: -27px;\n  background-image: url(" + __webpack_require__(27) + ");\n  background-size: 260px 347px;\n  background-position: top left;\n  background-repeat: no-repeat;\n\n  /*\n   * height of the image when it's loaded\n   * hard coding it here to prevent the tooltip from being resized\n   */\n  height: 347px;\n}\n\n.tooltipBlock {\n  position: relative;\n  color: #e8e8e8;\n  padding: 10px 10px 10px 16px;\n  background-color: #313131;\n  margin: 0 0 5px 62px;\n  border-radius: 2px;\n  overflow: hidden;\n}\n\n.tooltipBlock::before {\n  box-sizing: border-box;\n  content: '';\n  display: block;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  width: 6px;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.tooltipBlockEpic::before {\n  background: linear-gradient(-45deg, rgb(157, 86, 216) 0%, rgb(185, 126, 239) 50%, rgb(204, 180, 251) 51%, rgb(135, 78, 210) 100%);\n  box-shadow: inset 2px 0 0 rgba(255, 255, 255, 0.6), 0 0 8px rgba(195, 170, 243, 0.6);\n}\n\n.tooltipBlockRare::before {\n  background: linear-gradient(-45deg, rgb(42, 182, 249) 0%, rgb(88, 183, 228) 50%, rgb(227, 240, 247) 51%,  rgb(0, 172, 255) 100%);\n  box-shadow: inset 2px 0 0 rgba(255, 255, 255, 0.6), 0 0 8px rgba(156, 222, 253, 0.6);\n}\n\n.tooltipBlockCommon::before {\n  background: linear-gradient(-45deg, rgb(117, 117, 117) 0%, rgb(119, 119, 119) 50%, rgb(187, 187, 187) 51%, rgb(86, 86, 86) 100%);\n  box-shadow: inset 2px 0 0 rgba(255, 255, 255, 0.6), 0 0 8px rgba(160, 160, 160, 0.6);\n}\n\n.tooltipBlockLegendary::before {\n  background: linear-gradient(-45deg, rgb(156, 125, 11) 0%, rgb(193, 157, 48) 50%, rgb(245, 226, 148) 51%, rgb(99, 73, 15) 100%);\n  box-shadow: inset 2px 0 0 rgba(255, 255, 255, 0.6), 0 0 8px rgba(210, 200, 151, 0.6);\n}\n\n.tooltipName {\n  font-size: 15px;\n  line-height: 1.2;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  background: -webkit-linear-gradient(#fff, #999999);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.tooltipInfo {\n}\n", ""]);

// exports
exports.locals = {
	"tooltip": "tooltip",
	"tooltipImage": "tooltipImage",
	"tooltipBlock": "tooltipBlock",
	"tooltipBlockEpic": "tooltipBlockEpic",
	"tooltipBlockRare": "tooltipBlockRare",
	"tooltipBlockCommon": "tooltipBlockCommon",
	"tooltipBlockLegendary": "tooltipBlockLegendary",
	"tooltipName": "tooltipName",
	"tooltipInfo": "tooltipInfo"
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiMAAALbCAYAAAAo64DFAAAAAXNSR0IArs4c6QAAQABJREFUeAHsvVeM5ll6n3e+HCunrs7Tk2d2NnGXoihKpAwaliDTMggYvhBgwzAgmICgC8OAAMMXvvCFLQiG7AvDEOAAy4ZsS5RtWYJEBZqCmcnlxtnJqWN1d+WqLyc/z/m6ZnsTOWtta6dm3/9M9Zf+4ZzfOefN73tSiiMQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFA4JOAQOGT0Inoww8XgZcvX15daVfXi/U0W6zV0nA8Xr27f/Tccqt+UCyVhsen/esnx73BylLza93+oNrpjVurFxo7w17x9NV37/ZozcM/rEU/93PX61/5yvv1w8NUaadUWF5rVBYalebJ8XHaWl0rFZut0vD0NBVTmn3muadK01Tc2u92l7udQaNYLFUa1WK9Ui2V+Lm3vrDUrNRSmo6HxaPjw0Kr2io0W/VCKkyKs8m0UKvUiosLrVq72Uz94WTK9aldLxeH42nqT6fT4jSlcjmlwXg0OekOhvun/UFxMk33T0569/a7w/2jg1sHJ4P+/n6vOU7piH69xl/nD+sfvzUWa+nypJyOO510wuf+MylVAPNKtVl77ng07Y/Gow8Gg8J0Vu0fzY5TcWEhpbsnadZopHqjUrlSLlQX0zjtDDqdW8VG4tdGapR73cksFX14g1fb0CukaaGQJrVJqpXLlcun01GndJruVjil2EqTYSUNwHnCqQPPX1lJjYvlVuNoMF5oFMvAVZltrtfH2wvV3umsVJkWZtvH+6PnW81yZXmxXi4Xi4XD0/6dvUH/d37zy/fs/6H3efxYSumpUq38bKlSXK7VKtX15Wbp809vLV5YXl770lfe2O2P+oPJZFQYj9JsZXGxvLqxVlzfaJdazUal1xun27d3Zvu79ycL65uTP/nTX1gqpkJxMByNmq1qtTQpzQqlSaE3Gk/6g+G4NCsXavV6aTSbzGqlcZX2pU5vMu0O+uNKKpZqtWp5Op0VJ7NRocRgl6ulxmQ4Ks2GqZSKxWK1XqzOZql0eHRa7JyeFCu15mx5abHEHAGyKZAXp7VKsTzlfXFWKHSHE4Bm1pcKzEMuLEzL3kjCORxNxv3JsFAvVIq0qTArjLh1oVCv1wrVIrOIC6az2XTCOyYrN5oyVtNZOVXGpWp1UioUJoPxoH9w1C/PGMNKudgdjsbcczSrlCupSiNmxemsXqmMOqNxYTAelnrdYbU/GFUY62KjVptVbBCPGc3GxaOjXuPwpLsIrIVGtVzt0MD15dW7hVKl11qo9WtgVZjNCpPpeNo5OZ7sHveGd+4fTr7x1q36OBU2yuXS9Mrmcv3SysLiw72D8dFxt0+7piyfZq2SykutxcryWrtUq5RStVopHp100qDbTe2FxbS9uV5dWVmpTGcsRbCpJPCa2d9UOD7tMJzTSblcKzK/ZpXZBDyLaVIoFsbj2WwwHKRigcEqcM1kXKT/LGdAm02Lnk6rGVqGk/8mk0mZpTorlUS6zMgUZuPJZMzSHY8Gk+PxdMzyypiPOW86mE4qI4CjBeMx33d7fD1iKIqFm8XS7A8Y8VbnZHyFa5YW6tWDSZrW2tUK0FcZzMkqdGGRoX+YCuPXtzZWbh8eni4dQe+mo3G5UikWhsNJoVCZNhfqlb3hKF2hrbRu7DxlxBjsaWlaKiemApOB6bJzr/urt4+P9x9fP75/+ermn2i3ClfatVptuV2pLTUbtXqtVC5V6rON5bV6pTypTMcDZvDQmVko1heKFSZlGo+KvX7/9J3bu1/+H3/l1V/jVn3vdx6PEEbO46g9wTb/8Zee+dyzV5p/fXlh8aVmDYrDs1hEpValUFxeXpytrqym2WxWHE8Gs+FwNun0hoUp5KfTHUx7LPjpJD24urr8T9YWW+99+d2DX/vPf/kfftnm/jf/4S/+1FK58gWIyU+Ni6UXWclrVSSFQpmlXi6Xqxws7sRK5oGz1GrV4K7V1DnupKV2s1CH7UCo0r0H+zDHbqrVSnAXKF2Ba8aDdPfeTuHezm66sLqSLmxuKEClLoSyjMxS4jELC61UqZVnp/0+BLSfqo06VxchqvxVZGPlVCgXUr3emJWrnFtNcvdZpz9WpoGXzQrvvvXe7O//49/8G3/wtff+151R+j26VXlqOV28urn5+X/+5oP/w356fO7lK//Gv/9nv/hfjgZ9BKfK8UKr2R3OUq3TG23fvLnT2tvdg4A3p1try9OlpVb3jbfuFt5874N0+eL69Omnr1XX1tbq0/Ek9XqdaZqMTpqtRqOPONGuFof94RCmPqXfs+JiuzqDOs2GkM1uT8lm2oIQTncfnpyedEbFC9vL/WalMqhUC2Oofx/eAGubNuBIzdKsuACJlAlK5WfQ6BkkrgA/KM7G/aIEm/8LcN9UrhYn3cFo+PZ7B8cnh93/c3Gx/trRoHRyf2936+jw5M9c2lp95frljYWN1YVCG0Y47fXT7u5h8YMPHhSmg/60ylgho6Sl5eW0dWkrNVstxmzIeN1Puw/20qA3SNduXEuf+sxLs6XFBvOJ/hXLaYLACINKYJiKZUQC3jM74NAwIt5VEAtgOAX490wxIHF+h3v1wKLDGPcHgzSdjFK5WC40GW+mWnL8d+4/KBwfHKVF2nPtqetpdWUh1aolRhgwmBNThFGfxYzk2qLPfEQnEUZsh21gniJRMlVhM4yV7xO/9PpDcFOAGedrGah8dV5HzOwp89JrGk0kfW48HA1gXdPCBOEKYTv1BmO7mJaXmqkKw0YaBP9CGvZgk4VpQm4u2L5ZgbaAkViwHvnWtVBSKC8MBsM0httWyyVwGc1u3jmZ2f/1pYW0uNjOa+zOzt7sK6+9m+q1arp4cS1dWF8olnqjdHpymm7e3i90j49oP4J6pYKAXC8sgNXG1mpq1RvpqHNSuHXrTjo9PE4bFzfTM889m9ZWl1mTiEW2fgZmjGGZtckaz2Po91OgsO+VCqOHEoDglcZgNxFDJhuCFPj1U6czTJNplh7pe9n70FuWAvcc9AdpMOgXGs3GbHF5MdWR8oQYyUWlYsa8nRVQOMpc4r2ZA3ysMOcWEPCgBdypCfaHJyezYb87ZFoXK5V6sVatFnqd7uyo0ytsrnLfxpL0hekwKyy069P7uwdAO5xV6A+dyBNxgozURdvYWCgVTnujWbnJAuW1C31COk0LLTBhDlXLhRmCHrSl2ru9s/d3/+Jf/Tt/0TE+O/7Up2784n/w5z/9nyCgPd8bjVJ3NGL+DqGpQ1pL/7nXBEl+F61iPOoXKghhEwDtShTAeHu1OXv28tLw179+97f++3/0jT9zdt/z9vpokZ23Zkd7nwQCf/6Pv/DKykLtb37uU8++eOPapSqSeUKDSkeHpwlNMjPty1cus6BLqdGSSMPA0REl5DIPtIIkZe11et1upz8adEed9+/sfe0yWnCzXvtUqVprVhartZXVpQoLE+12VuihTsBcC+ViRUqdhsN+OjzWuALh6fXS6RFmA4hJiUU9g5kMIUZySdSbdIQlpQIxPWCR7u8fQ5DGENultLDYysQQjZh21dIyxMXWwsM59yTt7x1w3kJmjnDnTOSL9KEC8VflLcM4ywgnmF/yX7VZTcvLCxCXavp//sn/u3/r9t3/6tb9nf/6K1857F+5uvIT1y8s/PK//vNf+N3/7p+++jul/clfe72ze+E/+rf/1G+ghm1Dg2ezenVWQNMFtxLXFvqHEHoZHRrm1e3N2dEp/RyMEEbW0gLqkRRdYr6gwAQhO0XgG4ALvAFaDpPEFISyh1YJGafPBQk8nANGiSgBRsPprING30JznkG2JOIyO4YGjBDfOA+Oj/UBZsC1XJmwfmA5Ai/ob6tSTgsLTe5X4jpZ7BRGA7ObpBnWo9M7Nx9ipxhO20uL5bW1lcbSYqtKHwoPHh6kBw9204P7jMdhN5UYt9ZCPbUWF1Oj0UK4Yz4hIJ5i9eoiLIxoIzp3unRlK22sr6SJDH7Qh8lq9GI20e6UNWBaCNGFMuf2IhtmQbTMeCG2wKRQ35GC4dJpJIODWWMUQDaBITKOnAYDA+NOL3VPmFvM3+2L62ltc5nncE+EBwUg52+Be6GNpwkmsyzI8i3iKExfHJDNmIPyqDk/kgsiFNHcfCC4KAA1q9XUYO0gA3EFXeB3tFiECxgTgi9jl7/34XXOcey0zon1CFmEx6dGvZLblIUd2jYYjPN42IYBfXRMOU1rH88cZwGIJzLmjN1iEzMMmNCvJuOmYDVg8h8ddNLx0YnWBNZvK62yLlrtRtrZPUq3b+6ke/ceIER2EHRY3zDsekszHX91BDnu4bgdHZ+mHsKCtqHLT11IGxurtEKFYESbshUJDJ2ptK+sJQlhltESw/lc4jN9BsT8WSFCDJ3DwwE40ysVCaxaCC2sWr5HgeF8zuG+PhfdhfFJYDnLAhuzfv48nsEtYNzzeTDls2KrFhQFkbNnNRrVtLnepM0p3d7ZZ84w1sz5FmPmOHQR/AAp48fjUxsstjbbeTzu73VSB4HTZje4ZhGD2v5hJx0c9/N6xqqW6SFdoH20i/4ruLqu2o3a7MJWe79Srv7t33/jzm8dHQ/KV7YXp0v19JeOTocvHR4NGn3omjg2oEc17n+EgHbCOnVNcgvmFNZQrInIXZzH3KLBywu1dP3iQrqxvXb829/Y+Qd/61df+y86o9FXAe1cHc6KOAIBEbj07/785/7nz3/umZ/+6S9+trq/v5cePNzNmtIMAtlH4xxBVCTaO7fvZqJ87drlVGvUUgWGgoGcxVOBCFcy8Wq1IGDctF4sD5HoC7fv7uACKKPhofkcn6SDUxhyvYpGtQIBgPBKSGH+CiN7CD67d3ey1WLr6jbPLGQmg7k7E7IWTLqPFnl6cqJanwn8g/t7mZFtXbzAMkXwwPSLqSDVcc+06i0IXS+NYWhwdzSjKsR7mgmoFBHTDM+CYMlUIAR9iI30rwoDPUXLefjgQdpeX05jiMLyYhtFdHoTE/8/+NWv/eZfaU631y6utv/ZX/6lf+tKvVXt/61f+d3/9B999Wv/bb3X/Hv/zr/2mZ/GoNN8/YMHMPteaoGVjHEZZrGLUPTOW3cgMLN07drFtIXWedLp004cBbSfxidcDxCeIQKKWj3CkhYciDSWkHRyOkC76/BdSgtNCCkEVoLX74+x6mjpKaUejPeo20mnXe5Zqj5ipAokIsQzUPDkfBI/LUyY/cEFYggmasxYUyDlnoLRGm0WD0hmBDv3Hqbdh/vp+rUrMPQV7j9M98H/4YMDxvY0j//qyjIMD+0e1RWDFud0szAxgEpjBU8txmVxGQGF+VJAEJ1OsD0xt2zHEGaiVq1gmBmIwgfvZYjQ38yMsYZAmBFQQUs1FbN5GnI9JDszLE6jH4zxCCsBr/gJwADCjRDabNs3nznO89k+yiid2wo9Z8+dMQa4Wx4xcxk+Vg0ZH+eItejMZggGXCvz9Nn8lK0WOAOyAIJrIY+ZbgktM+MBQgHjfMI6WG6VYXS0BWHEcfMcx01hpMvYnvR7WHoQNKs1rmWc6EcWQbJiTp/5bNsdJ604Q/pKF5gLGL/ohMIIPGyunTN2nU437dzbBedJunzpUlpCGDk46qQdLIp3bt3XEpiWV5awIrQZQ9gdfdQK18daQZOykNDAMrKy7DmseW/OvXI7aAjN+S4MncdiKF4KUQoadDKPM7ekr8xE2umcw/OUsR5zjt8717OVioVZrykY8Uz6hdeP3xXAaRV4OxemCnHcY8x4DPtYF1BkdMU6I5rQGdcZgnSeB/ZfQefCphah5fzMLuPx8OAAa8McZ8cRKxX9R6hlTaA7pe2NtXTj6oUsPIrlA2jk7tGI++J/ZG5UmV9OcgXFOvMaX1rub5c1rEDl7GW8Z1e3t3rPXr/Y7/b7hbsP788e7vUXj7ujstg4m7XGSZ/uoQQusK7XFxvQxWE6RIBfx/9bLUInWSOuBSfA3DI2Sy9dXZNOHv3yP3vjP/vgqPfX/Pk8HfKLOAKB9Mq1zZ+7vLXy6eefvlzZ2dnBlL2XTaZDTb4QchkFMQEQm3EmCjc/uMcrwgeES800M0mIZxftCY9LuvHsUwgewzScDHF4FLImrKbqdx1MwacdmBYCi9rcQntJZTX1WLBqhlXFf4hBGSKsyRlfMHdAg5To8lsJ5lWsaO6tZuIswYfWpZWlxbSIRq95dsS5UlCMEekQS4SamvrV5oVNiGwxnWCGbtIf/CgQeu6XuQgeZIhKD9Or19UQevC/p321/Tv3vIVEv3D12vbFyxc3f+FPf/pnDv7+P/6d/6vRqHxz7+D06cqgXv2ZV575y4utxtN/43/755VbD47Gz11De8QNcHx6AlFHU222YEYDCG81Xbt+KRPVGe2/jVZaweJhPwkcmDMWXQwwKgWJPn3qw+DUAm2rxFVGpiNNNwgKMtoaDaTPjpXO+hHWFi1IEsUm/ZSQEy+Qz5MBqGbJ+LSfT9RO+b2C6Rl7NMIcf7SFn7KlAM8Hzx1q/sbXX0rNpeXUY6x2Hp7SVjXLerq4vZXKF3HDqNXTxgHjVkVTH8y8k+OzkCr1Gr/XM/OsZM2RZnDPGaouzeYZCBvONcafQIhMaLV6qE1XYX58jWY6ggNDlMHF+TIEr2lxRpBMNfdDS4BYyJxH42JaWmjA8CupBlPC9ZjHtsD5aeL5MHTfOj8yAwS/MdeDk0JaE6ZcYX7o/pmCTaVco01gALMYjfgOCw4eTPqAVk2jtczgeskM2DG24+JaxOVYQdgrY6mAfeU1VC7CdL0GkHGH5L7JtJ2DI/qkhl9nLS2wToiFyIxet1NWjx1nNX+ZOVd6nXEmAwTpAcKD4+YvGNVSCWapRSfjiDDhYukgWPcYO4W0VnsxvfAsQjtzXcF8wGQqPnKlEI3CfUtpCSGuDHaOnVYb76HwRFAM982NyWtRDF3LDDm/IWRkDMGN+4oh8TUZQy8ZaZmjr0iZ9MmLFEAQqLmTbWhqDaVvBE/g6nAdeAq0AMEMnyKfiTth/BReXDdiQThMnjvOeYVHF61ryHsrtBlzwZV8TszdE/BxzeDy6PYQ/HupnQWxWhZuGMTUHXfzvJgwz+5hQdLy4sW6gE+hEysLq2kF68gIYdp1SVxTOsVyQehHfp5+0KLjbLt5Zm8wKbx3Z695Opw05wLNblppL2s1oS/z+c1p6d5eF4VlkFahZ4soI3/wxm66SXvXFuvp+YsrYKhwS38eWXyQ+VA8Bun4pN8czCafspXn7Qhh5LyN2BNqL6bP1XYN3aNUKdy+fw9m3WXJySTUwObCgAxMU3gLN0gVwqQ2oTAiMZpgiTjexzy/t5cJ7eraSnr4kM9oG1vbm2gKRJmyIKsQiRkLrAZzlCAYvyHlXMdkrtYnE2tA8La3L0G8SzCTIYxHwqdWjmsDwqWW0MGt4PUuSBlPi3t6DlGEWGgg+ggsWZtA8NHsjluI+EGECRZxD22nIkNF2NBVon6pa0AhRwIrw5SQ0zCEByJRL19Ib776NkxjgkVCjsnlCaVqdekXX3z+xsU3bt67eIRwU4NA7+0dX99YbPzCv/KTz0J4hrVjXAOEYWIJqEOwYC7glrVD7r6IhaQvbggqEjuFOJlGeQLDotujLEg0aYnWEDRnqBnD84gpY4FC280xDHynBqt1QaZkrMUUQq9MJ5E24FCXm8doNCfEMhN8LfneFZi8zBjoGEudNnP+4HjwFUSfuwCHmMiEGcaMp3NjKHPke2MhpPkyHf3jxCNm10KR+yrEtonQXSWuQH+95/P4zEz07zPLGPd5+5xrygmwTiwCiqoKFjJ7p8HcLWPwYr0Jo6IdWj7ybwgMjp2CaB475pSWkBrCxOISFhiwlenYNgm4bfDMzFDph/fKsSh01OcWZroWYOLenD/b6diptc6xxpbH88RHd5buCPEr0lakKaNVE2IPePIlfVNY1+2kEElYDU+G8bAWbIOCh4fryNgJ4jEz5t7duVODKSaEijwaDGoeNx4m1g4MM5LfOIfrnSPAzVzlbBl2/o3+8exsfZCB8eccIQaCJ2BNQMhtMEdkcGKj1l0EKxl+hTlmfNUaFhOCg4HQPtBPhCdlCDyF9ITn8+r8FkOfWSTOhSDOjKFC2hmGDa0bPFUXHaJCFm6ZIFmAYHk58BnzEiHEWs1w7eKy4AlaoBDIaC54O+840Q/0U4HIea9lJcc6MReVahusXUDIAruuLM9X2LH9eVzoSwcaptCn0jM/xBAaw7Psq+crBPMkDi2S3Yy/54uns0jaMaY9rg2fp1BnrIi/Ox+9zmfm+cu44TJN+1gQT3HBsMSzwMZjGEcEaOiAmFYA9zKuJK2eusVuITjiyuHZ0/T8lbXcHgU5x0DQpIHOnx6/j6ZTAt7P3+E8iiMQ0ERLGPg4mzJdOZrLFT6yBp0/M+vzhJdJlNOFixvp5IjEChYXlgGC2frZ+tHD3NxeaLMmidhEACAgFOII8YPgyhxb+KrbRcz3EBp9uqe4bLrdUxZuG0aBwMAinqLRt9oLEEE0V7RMHssihBjRPmIV0zHX3MNV0Gxo5m66/tPCUjsdYXImVgUBpZx992ovak4bW+uZqEAn4QsQF+63sdLEXE8gJdTAeyvk6N6ozio8A82Uv0zM6fazz9/IQtOtD25hnZilA2JOBp1uZfb01RevXN14EZfL4NbNu+nFz6+l2w8OU7M0uXp9FUED+jckuFbryvr6EoRsSHvrmN+7WZtXACDTJBNk9F78wx3OrT0S3NCiOG9A+1rgrwslK6QQv7ICCYzMGBB5nwRcYmc8iW/kn336LtNqNHSVoJVDqB1LifAEwinxnrsYIKaMoXFA4gg9w+2GxYrx8734OU4yDwWnLBDCPHQFZKbI78ZBdPjtiHiEBxB3Bc8t5kebeASaCUPVPVXNlhwDWdWWs0WCeaEwqJCgFUOm4lgrwEicbbPMXwFJop/bA6EuMf/U1gk+zITdvhsrQze4hvs9YtDYjbhPGQxktFqBFKZgSJ4CS1SQyQyEZ8p4cJBkRmmApYyD9Bm+n8ee6JJQkPV8o7QV1BwD40Ig/rRb6w0YguOoD3OCwZO3Qv/qWUvWpTDGVehRKYEnnTHOSleirgiZeEVBhzlOgGaOd2kxPxUAHG/nbn9Eu/iP0Ex+93oZ3LytdD1jUGU90IwsUBjkOoYJG4ejYKZVrV5lPdIXBeK8Rhm7feIg7uJiI4kobW6v53gSgpbxaDJ4jLVjpmUtWxvolxgqYDo2Q7Tx78YQad3fvweGNQQh50224tE+56Ftt38KzOJKBklq0j8tGnUmPRlDYMS8kK/znmnMvWdZgMiuKO7pvKdb5MJAazyZZyvci6lxGFq6lIkUjGy34+QzVTD4MffNOcRPfG9wKGMg/eM9QdkZO1qbv6OJeezpZF4b3keLyN2DHuu0nK5sLuYxOMaValtcS1pNdOMoCDKtssVSQbdVb+Y5Z7xcHwXiPrFW+1y3jBvsuUvLtH2Aew0LKddeWK2iAbXSlbVl3ENYWllzhvbad2lBqdzmWfafB5zDg+GLIxBIMvYifuxCB3+sqXoGzPUxN0oc8sFikjnDPmBq07Sy2k77u/uYBU+yxqsm7GKV0tdggKTxwYxY3CwW/flHBJkuEATaIgdVBaeguR6m5z19hotf4cJ4jhO1FCwiJUzsJe4j4SAZMVtfNJFrlu90TiA07dQv9CAuMJv1NYjKKcQCZjEiVgLNY4Dmp194ZWURQQALif/xPGM3JDoyJZJ9MXPAFFjQmrE18deJXi/gklAr0n3RRAu/9sxVrEUEv2L9UQMxqv/99++kFz/9Qnruxnbt4d5heomeSFDffO0mDH6MS2gtMwgD7toEA/ZJqclWJACQCcuwFLaazTauJNxiCGEGpC0saN4vpIXxAgwNMzkfm+AAnYOBEsDLb2q08ITcZjJBs/WKLtEpiK1aKcxAn/fCMiZuhAPjIxRcdLNnlguTrcNg9KsTzZpxQxmdM2OtSAxl1ra4aNBDWGB8snCDm2mhCbGFcU3AW6uA7jrIKmbubjrUVYc/fWNjJa1eXMwm+ykdIPknM1HHWmGWLNeMbW6NFgYIthqh+JMxma0Gxljwcc6peIJjpsDgV0oeWhUMPDSbRSlGJql5XMFSzpPzSjnPM5XT/E03hvqsFiWmdGZytkFGJGPXMmDmDl8JAO3nM3MYSGmLlhmsg5xbZk5yFkyilJmIQkWzqcWBy8DDuB5OgZkas8DAYWUh0Ymb8CWNUaieMMfVyh3LLFTQboXFAkKHg2Xwb46nYp7o7tLNyQnZbVGUUfofnFBhRlwUoCowb1eUmWG6uWRYBoY2CHJsEgPVIPZCoU9hUO1bi+HiqE3g6gPW8jGB2u20wZpp4BqagcWMcWZoOBTACOrmfK0MtlkcvgvDPHaITIxdPr4DQy9gtoEDQ8QY2RY6xcRDwEbw8j0pYlKZrFA4N40nc/DNHtLKSe+Yf7jrYNIKgXUYeg5W5TctSYjHuF9or4IGfdQqdCaoOp/EWuurbqMRbhr7wahwOFdokwIoA2lat3FKtpMA/BzXk5m+A8+4KxT51jYb/H177zgtSiu2lhjf+ZxU8MkBtpzjWDaZg8coTHxEiEcwc57YKA4Vj72jbrpJEPFwtZVevr5GYLvWmZTv2ebezxEXQoYc+dLMP/HgUhHJMUvZwpQze7n7+TtCGDl/Y/ZEWrxQKU0J3JxJrM2O0dxJBm/WeudxBi5VF3slM02JmubGPQIZm80GGSvL2UxbYIFVYVgSztsEup6SQmnsgqkYyxtL+MsJzsN1MUESMFyLyhEQ3XViTY5hZMcIMgYYLmQCQPpwtpqUiA2A1OK2aaFJyrCpFYKraIXgV4mVGmYDhr62KqdF65Z6woxlUpsXNlBgdNt0XbVoNPPATLJB0gjmKSmcB0LCshCaZDYyaU3geD4y0TAY9hKBtD20/pPf+0b2yevjPyZA9Ctffj19/vMv0aZpOtg/QgiZZUEpxzEgWEB20ybETCYnwzvAJTMg42IdAalL+3poQQUqZJjl0Sb9WP+wjEcCuAwzUmPXJMylWP/BH8bufbQkyHQNiDTDSPN/pcr59EACb9BrBc3Q1GU6hoAGcZQQS9lQ+SW/1RrvAWDCdw/vH+W4FGDjPDqemTAvUDuGnOuwJq2v47Laoi/ltHP3Ia4g5goaHKUyCGjEtUaap5avAYKfLhlSlDHnq9GPsnBbJEbD1EitGjkwEO1caiqz93p0fmXQLKRVsWbIQGQkDoKWG10d/JqZr3PT/hhTMQb7CXjUmVN1TPOayOUuarYk/fAW1xECkPN6OuS6fCmuHsYZGZH78Vzx4TllhEmfK4MXG+OSFBi0luUH8qMCiEKFzC67djjPVHOzTvqkxxLknMejoyWEea8lxXH0XgpbZsA4LodowWrENdYSXJbn8T0DUMF9ZwCj4ztj7HTjKHQ5NnbbcStgwdOlSQkPXJZYDxHEtAxojVHK9lymaO6T6+QCgnEDa9YpgdSHB8fIRswfGOMI4XEZxeL67Ho6IuV8lXMdNwpn5HYrgA7R2HW55DRdJoLKxJwLI3x/F4YIiHUFDrtzhiHxEOD3LQyREZgDpNBloQgQWG+02XEDe8DPcGiJUUgge5017uxQiGOu0zdEJO6htYt1pWRCf7LwwS/OcWpyQFsYF+7rLY0XsVENBEYDWW1/lTEsMSeYJax12scc0ArX7UtTFCwnKBGsYeZHXgfcl/ow4K5LSkGIv1QnRgTliDXt+TPiPua00yDZR65BHq2FrotQSJUCMqiYKwgmRmVNJn3minE6lEfgPgPnIXg4CR3jBtmAu8PTdGGlljYYJ+obpHduHzL9dEvZJ+aNChUYKZDm6yQG5/BwrOMIBNJGu/aZKxdW/8ylyxsV01/ffPWt1CMTYwF/u9qWmoJpj6dI9T0WM7UHsk+WajwQJDQ4TPFmygwJAjOS/c779xBUHqa19c1MTJaIIdm4cBGtrg5NcDGr18HoYBJlhAVTCc0k6eCqWITpVRBwJABUvyAVEgYEsdBNc4h58t7NW2l37z6LvUWRjytpZWuTugwrMCK0dYixDJECTGltYxOiuopGP8jCUWtxBSI1Tbfu3IWAnyZqZqS7H9zDTH2YNcE2gY4KBbpHyMWFUJpiaYCrWnSB7IMl3B9kOBB8S+4y7ce/TjDl8elheva5pxEmCFQ9ME7mCNfQShbcZCrQKOgLTAimbFS91g8Z8jFpy9BB+j1MWwhN165vY1khGE7LEEKNJl1N5zIp4xM0r8tU1dyyW0GiCzHSeqOA4D3httByz5cQThO12/J1CjdajbJGzD1abS0tEHS0KRmqlhO1Tqp15TgLAyXNJDrBypE1Ot1rMDODmY+OD8B0mBln97STbjEexwf7CJWtdP3pG+nZl19Ky+urEGdTq+daLDpcZj4G9M2JLePPW61PMhWtIQq6pjOqsWspmXKC6dZzgURI0PZp4ylxRiDBvERIpR0KIEsIAFratJKJlYG22U2gho6bI2td4JTdAzJq4484xwwlYwLUUhUyzKDRolLPeMHNmH8KQcdgIQcj3x3Gxj2ZZ3nuIrQasNtG+DMbR5eF54u3MSLO4RyEDNYyzSkMTF1f5qv1MY8xbcGMQT+ZDJyfLYEIxrocnQ9KotR5yfdcIICRmn20da5HOg/yuDEbiwgpdS0oCIm7uBK15JhNtoByYFt0W3b7lsxjDtKHo/2D9N577zOnT9NTz9xIL3zmM7hptnIb5OA8FoyU6+iLz+TK7LqV1wnr98LQC2iLmTi1jCHqx2MYOhKmtWdLFOPcwBJqbId4MTh5nYuj/Z5bufiaueihIOf8NatNVxaPYT1jQUQx0fLUg5krpGbBlTYrUFr3JQsidMZ4HOrx5HslytDlNvBYrUh21jXK0OV14hxSkNFFJG83SN85rICocSuDw7PEeIyy4tzZwhX7ApYLM2tU6ryXlisK1dEO3NQ+C+EpZ2jxnoYyExB0+GHMeNMKFJBmeubSavrUU2vZNXyXuLsGwp3PeQC9erB36sPBRqErjwz31UXFmsZy0u2Ppu/cOXqDuLi/zYnn6pjP6HPV5Gjsk0CAtEjXW9b6L13dSh+89U56uPMwa0PbWAXUyEeU/vrK738dTXiSfupPfjan+FVJd+sinLz/wc10hJWkjyuDepssspS2L2/kDJkTmC6kMmuEqxtbJELUcqyITMmaGcYfYLVO6/izH97ZQUu/n7avXIZRkEa4gasC5muk+wlZMbnWAZqdyruuknff+QBGfiEdVg7TycHDXBPF2iOL7TZEaiG1EVL0f5dxHZkG/GDnIMd8aDI3XXkVQcY4A2sBqBXVYGhdypqWsMK0YNr8n83FZpeoiTzz/FUYeZVUSOoy3D2AwcBAFJQgTC1iZezbT/zkp2jbiP52oa9KIghfCERq5mMLJGRBjK+16HCvCxBTAzLNRNJsrICRKRNMo0kfGs0VLCEIgWixpRJatISVe+o6sd0yPC0dBuT2yVYyTVQtUUFR4ndw0E1LSw0ImNQQoQZqWuEa6pFmLW/KfTc3LPgKUQQX64ForUCWyONWRxAxuPEQy8/rX3s1u7wsGLZCUOMJwlebuKBnnruSti5fRHilXsisCrOQ+GrJgbjjnlIomWdD2XaINd8VaZuMWg26CNC5GJauDLkMgof8SeYzz6rwOjNpEN6Q1QrEwVIlOE2aMnm0WMZuQN/NalBIUBP1PprZ1cJ1+WiFkHlZTE98KGHJmIID91XblenwKZWz0IJ1CTx95pC2jAggZRrxnYGyukwU/Gzf3J1wdAzTgzkoUAwZ4xpMpV0jjpA5rhada00o7ICDwaODs1ghXDLNnLqJIN7BlWZcCB03zoriVwREdxDoiW/ChWlWjwzRQGtr7sxwRyoILXL9mDZ6X7XuwvIMq+Fqjv3QrXKCy/K9N9/J89414Dx1zXVxsW5y3suvPJMuXCUlngwlatRlpum8Z4o5tbMQldOH6b+uReqI5SBx+0rRwoyh6xEROY+z7pSSVkawcW44oiPaNyR4uoHJRgyNYVGQcp47z4xhmbBGqF7LPK1mQUTBUYMUo5itko6vDHuAq/KEmimnKAaOmMRAy2QWcjhXwVz3zBjBfExauxaKMsRtytou9sGPNjs/T5xIPCNbYGhzLn7I/U0h1kDRWDA7qUP7Xb/jdKrAzmRxHEwNt3aQKlUd99eMtbiJiytNelhGhoyLFk4VAuYO5xk74lzXddxljjq369A356ICS9XCZoVBWuQax7TXP017FJVroOTlAHPm9zJmvAkNUzCh5m8eJ/ute25e4gDrH/OEj+fyCMvIuRy2H36jL68tfXZ9ofHnWAiVy09tpQcw212C2qhempaouqq2CrtWbchWjAuXtjNzuX//ARYQGDznSrhbpNeuUwgJvYSI8ZPUIVZkY+sCsQsWR2LpcpIazpmvO7+yeqzl8cHb72TNs8oi1api0GBOmWQxV3FB6O554w++kkYQoadfeAEiWExvff2r3BXiCKHRdGl2TwltV4GkjnWliWbo6tRMrMZC6e+0TnvK3G9pdT1tXb+YlteWMhGsIgyZ5tjC5WPwm4e+3xb31OKg4GM9BgNtL8F4rz97nb6Slqy5F+KE/pTNvlp/2ghDCi9mwcjgWghDWYhAeFCLzhYSrmlrcUDb1VQL74FIqrmRHQThWUPTMr1YAqyBRN/yMcXdJpj5LaF9enBKDMsJ5n7TazXlE5RJH9X4dEdVYDhalPoIcmpSXi/jVRMzoM76FTlIUc0M4quVhOGH8FvDhVLfaHdaw+x/C6tRjYupzJu2L2zn5x/z7Jc//Xz67BdfSZepOdKkrki2YmCtMDbFwF3pogXItKSVYXbHZDfZd60RBrhqDXFeqd2V+M45ZMyAmjgVRGnnPC5EN4VppzKOVax1i8RA1JEOMnNCKB3CNKwHYS2U+XUOuwGQ9BEr0TEMWe66wDN1CRnc6YzWSuW45E9qmo+eaxEu3RIMKAJdEcG7ifsFqwQCpX1S67YQne6hIf1xaUzhqrbTuAvnXY554d420j4bczRF2HTsjvYI9kXrNSPNYM+5xWYuOFWZ7yXmLyX0GQMEDtuLtK6FLrsLGDddi7ndjKNxJhVTnemvhd1OGLspc6RRVxhv4r6i38yzrY31jIdC/Ahh+Sd+8tPpc/xtXMAaQiOnMHlquHOdWvejNcr3up+Me9AqKd6LBNa22xZWM8YKDBUs+EEtP4/RI4FCy5SMXUcZM45Kyqw5Knzp0vI63U+6ILXK6S7RKqZVU+Y7y8XuKFJIjJYCsjCqlAwGVDdlzCgOiFt2MVmo7R5lCLa3Nli3zCeUAQVf55ExFRZLnAd1IqxwX12gCrgKMFr5tE5Z+G8+H1gftFlh0GBl1y+3ybTKjDTd1Qr6VLDne5UXZg3tMqvNthvzpNUuu44QPMXMvmS3r/fiZkDFekBhMB6P9/OYGeNHdCMqahayFeWA2BGmGPSIeBgEEa0oVHLOz3O2Oq9tp23Pxf141hLzZIBf8pu3dt8khfh/p+nn6gCOOAIBF+48WP0U4tCHycFxYWZqSr3setjcgmDBVD71+U9lq4QFx95+92Z6+4130iLEapkiVxJIiUGbehJq7ie9TnZ/rG9uscAwEXeIqZChwOiz1swzZFoDKqkeP9xDWGCRYVKut8nOICvlhLRgNp5IDzCRdyiSdnK0B3Epps1rpP1CeNKokm48/yKCSCst4ZKx6JpaX66vAUOUwUzQ/g1ozXVDYC7s2pGGxG1oSte/zt4vEAui92G4ZhqodXTHMDYYxsyS1BJa+vXeB3fS++/fRfu/ijCzAeGAGXDOlSubaf/iSfrGl99I9ykS9xQWgitXllIXAWEHgaqGlrO0SDwN1qJDBDPjA45xg0lVtrc30IJa6ctffhXNfEo8Bn2AgRgcakYSNBxCA9EijeD+3b3M0BUqdBNZK2WBctgrqwRQwtDeee8O2SzH6VMvP4vWqXZN3A/UbBGrSwPBRrO8cTIGM6rFmi7aZUwo205QcYMxI9aDGJ1eB6sWgo21NqyTUVFjw4Uw7KjZoi1iqVmmxsvFK+vgW0oXKO/uWFuISs1YzGXUZhDUEewmMOzMrHm+hhktEjIHM1F0jSggVUpaIBRSJbqPAlK5kxjNxB8c1PrP0oSNt9Bld8RWAQeHCMxYCrTeyPiyqyb3VWsV90CIrvFim6yToflfs3wbzVJ3gIIi/2TmN88cgxrwXM3uCrdjmHa26MBAteh0cEt1mDNquHlu6BZAOFhYY63gumtTAXjOxECDW3fJ8NJaNXfNEVSMS0SNepWKsxcurKfX3ngvvfnmB+nll3Dz4bJQwxUT66cYeL1IlpjunQ739juFoSFzex8rlQxe96axFgOscM4xg8XZpgbLDPOH+hYjrJYjrFBVLBQNhIGNC8u5LQpoW8w/Y5uyhY05J3NFnOVcYl7EfwDDVROnHwbwOgYKDTlAGMGgrcAEM7QdKhWmwxp3oWCsIKh4krV2bG7Zfca1GUPL3hOv5bO1kJhtZaCnlkNgx/IxxCrZTO+9czN96fe/6W4v6cq1zXQRS+sC/aIqOxjochymTUoCsI0NWKMKQD+MM3OM2L8nF1WskpmjVbNLrAzbEGWlynXbx8SWhSeaqUhL1XcnSa6Jo/VRS5brKLtAqAlg8cEzNw5yFGBwHQupx1g4Xs57t8vKBRQVGrl2iiXZVFxmUz63jCvJeBXxKjA23oNTc3FD8csZT7aF9VFmnpaQVuhlvnef4nfFAlWNmVR0lwBd+sfFxrZlqGkDIl3O2GGq0pnzd4Qwcv7G7Im0uAl3UOvqUv1U6ryAD16ttYs21EVYKD11BT86UeIs5LffeCO989rbqceiuoyFZGtzlYqce2nn/du53HQLl8AGvmcXpDEgb37zm3JVFuc0LW/j41eqR+s18HKM8GN6bhlGsn7hEt+jmaPdLS1vooX00+0PbpO1s4MG04eRY5G4/hQLuURp6yPcQns5NiFn/0CACjAkOHLWViX4ZcynZZ5VhvCieEBYe+nVV7+cLlzeZuGn9ODeftpEsFikvQZ/GqB6sLubtffFlTbtIo6Fdh8jVFQX19NP/szlHOfx7ptvpdv0dQSBu4xl5cYLz6Qv/PRn0h6MXe3l5ns3cQc9RNPHr35q0TQ0YkiKFpse8SXuOVJFSDH4UEbF1mho00uZybA3Fm01gJigU7S2JtaNr7/6Tvrt3/gamwgupk//xHMQZFOSyeghwtbgyAIS3ebWctZOczwJ42L8zYP7DxEI0CANJIWA7sEYLbTEvh5Z675z6166v7OXLmEp0m9vDYgxAmOffrUpambtlhrWjT7j8Xtf+hoa92n6wk99lvLtV2Hq+EkgvsaFSFRz8CFUcqqww/PVBplOWfCs0s4sgDAftrfMMGIsFBCYD1peTL80a0p3RgHCzzZoqoxzhsY1WcThq3mmDZotaBr/sHe8lwlyjWBX55RBwloTFCiza4bXEkW2amjZ7PvDc405oLEIuFqHahUK5MFAaQnPkOwrHMEU+M14FZ9rzZGqheDoS596DwfH7DpIn52/FptzDzf7M4C56u7zKlNpja+xMOBr33w37d/fp8LuSnr2hSt5G4IBTN55RUFAUr4XeW+Mz7wVtm3APDzEkqNQv0rsk2tk795hFkx6CFI7dx8wbg8oRb4IM15LS1jQGvR/eELKOQXOVrCAtAmCte3f+NKrlOh/mJ5+/ka6fuMywsgGmCHg0cchazkLpigTulbxE2TBPDNhBq8yxTqIwK4gYSrtJYpt6faD5cOsESSw5rElINo51/J7tiZwnVaGeZyVpAqmrAsFzX3KWPaYW8cdtm5AmNSNUWMemf5vnJP3yLEajIPzdRlh7OVXbqAwkOqKW3DJXR6tuwFDP0EgVCi5cu1itjgYHCsTL+LmKrAGWy0EN+6vhcpaIlpitD64tkq4tbTKaMmyNopjWccCbAagSoECYR/ahEjPNfYAQR0rYU75RzA3xqmB4tLgmj4Ch0IEe/vRb+6dluk77kTmAPEbXDu3euh2K7Lj5RrC4tl9TOtto4z0EVLstzA67xTkauWNrAy9hxKyj6tp1fNQDBX4FN4ADNwZMgUx5q7XOKebYMkWjfxy/o4QRs7fmD2RFmsqrkJI3ORJKV2CqvmvBoN3sd7BCmIWTBdirOnx8rVr6fpTl9LzLz4NM6ymu/d3s+ChFuLC2KLSqTEQmnaz6Z7l4YIzsFKXii4CF5/mayP3XUSaVF1oWk2KaLtqYsZJTMbP5d+oyQZjIbWwh1vCvVq4p8tOt4gCij5sGYMZHjklmHOhf7k/EtgOgsqL6em0fe0qMstpWieodo2U4CpMuEd/jYZfWFJrNdCWa2mL7h7vW4VwwNPS+2++maYw/jUFGLMgwEqNViZ7GSsBm25hQfkg7w/CxoLZx6vAoTWoick1p4DCqLQ6aNI9PNpNn/+JF/ns7rOarNWAtNpAxDDP2v51hL3PfuE5/N5FGNIqZdTnxFSCbH0DbPoQ5aU5nhAmCf8AommdCgWPRQJrc4VPhIcmVhWZgIGbi1hsbjxDND8kVMK9RAzIYmth7lYxzYTDMXBPkKtPXcvM7cbTT3HfNhqwNTpwQSlxyNEkxMwTGfnkkYk7s3PHB5wURvzsxmZZ12PwC1xvUKruGVmc5cK9nUze2Jps4eF3NUEFW4UDTdyZ8dAXx06izG5nzBsEIMZL4cwx0USuO00LkXhCvrPIkWt0KBzRVrHVepTda7Q5m/MfacQVnst0yBV6LZ5ngCGyTFrBpadFJacTM/kM2tUi51jYQlOqTUnn1GyVuvHMReYZcT9gsLi0xvmkncpMEab6xGdsk53kYCtgycq8txYcBU4L5Tl2aYG5y9qrG+zJ3GljcbqCdVDTi4wxM13GeonvjbEwBiVXTaYvCt4XeMblq5ewoi3ltasg8G1jh1WEvSRz/0qYQOyn60rhrsZvMnkugD7MBUHEFNYEHRRnBGF3udaqUkIYK3Ifx4sfsUJiMaMNWhFz7BSA6lpYwtojTcixQjxMAcHCagrSWeCskTUCg7/Ed5evXFBGoQ06MBASaUejOaCqrgI540JDjD/S6mcMiUHJWjmdR1poXB9soJxjbgzgVtAw3se2apxRhL0AAEAASURBVF00hd+JYF6M80/hRNpi8TitUH0yWnSh6s60D1pfJtwXY006Zg8by/p3oVELCD1Xt1fTMWNbwKqo1a8GzrqYnHlsF871PJte3KOy6hAFpFzG2kJpghNdO8zbY4SuI9KVrQrLtM1z7NqFdnrq8hpbP7CPE2PPPscIfSgI9Nm1Y/aNKfzuHbW10YaG9AoUTrOy4Lk7Qhg5d0P2ZBrMhCaJAEKCxiOxX4YIbmFGznn4EMnbb7+HNeIgXX0BZr59Id157z0Wxiz95tc/ILUSAosWIIHJQYAQiDudB3nxSqSgWfnPNNxSASHCdFYWJ+ufc3jZlQBKbKAgUkIu8D0/5fe+qu3yT2YgEuw5NYRhSNRYlLbd9ni5hIt/Od8bcPCqxmH8BpQkpbd3YbIQHnzkafZuPkH3gYROLSNr/V4EQ8saC6xCAqApVwuNApS+gwIEwY3R+rdvptXblJynDSAAkzHQjpiD6n7ug+4n/dgyRuMyNLtLlA/ZYMvsBl0a2UdvWwUrv5w1XgZsYTYYD+05voU76xbfwSDZwZe2iIVN5YliTdPm14u7TPE01d7HpM+zzYgy00Kss3YFphLr7EJgPKqV/fl4gKmCgDfWNO0YiY9j9t7BG5mgGwyqv9vxzgDLsGyI45HHQROyLgXPox3018OsGduped++ZosEb32IQbKKBmKlQJwR8Lf8CL7jCxmBTMXzs2medvjkam0PixOMAyydCwrMZnsYY5I/494yhsEATLvGbGe8wZ2LnZe2xPv7j0xP5PwormYOyTjpGj97LqNM+xV46scKKWCre4PnlY5kfrp5GBvaXcfC1MB1oxVhDIM9ZCNmUzyHaPBT0mUPuhaU01iDFm0/eb5TAOcQcSXs03SykzOcZD4FLBm1Lj/mftA6/i/RniIxPpVTBAwvd+zIoBJeY11GCPVAld6/f5xuU78CaHL7M75+8BO/+3mO+XzlKXw5l7MgwrhrRXH+O28FUEWgh/VAJlpEsHb+Om42yvt4X7N8tDB45DgOhQEaZkqynUXkzhaUSqWThSrFVMlCjZgxLVveI9d98R33ct44CGcFEB0jSp9jYaUEPuvQEvJiQ+RGPse5R/Oy64hpwD1sCFYsmLfz2wBvx113nmPrtPLPnYMtCJjnqhfZb/vHvbWscQpXSSsRghCw3LF5Mj1Ov/36vWzlYqNK5oLY2VzdST730bynD31oZY4RyvgzJ/MJnMerwlvOjuP+/qy17aVr1bRLTR/hHfNlCdozxUWlkLe5yo7TuHR8nrFIN+/uGvNDfYFHhIBHn5cjhJHzMlJPuJ2d7oA6I8jtaELur2HsBVm5+OQpJAYDa+JGMJ3VBaJ2evBgLx0ShPfP32d/B+a9Zmz+VwTIhMPFmteaXz4iAmdd8Kv8nS8QpUwkzn703I9y5Jv4rPmfH/PzHr/2sedmYus5/BmfkA9eZRgSzQ8POqCfWyIlEcoHbaQ3vP1Wn/Kz+D1rSlghNJF65Dvlfzg3E+f89aMfzgQl2yqTmzN0n5WFsUePO7uHH33v756f/+NL2y/TkTY/Dt7j3chPtZGek9vv65xR2BsZsv3xXvne+fP8u/lFvvfwqb5wra8+5Dsf5AkZq3yGZ+VrTO/81rmPHsBLPn1+M36nP/7D/1mIzD/mW3z3P/k0zuZZZ13z/r6XUXzYDz6fCbeOgbfUOuJ589iUebM+7Du/5/H+8IkZ6Xy+X+Wsj3kT83e8nc8Z7p3jXPJ1c+bjW5+n4JZfeWieB1zkZ58pg5ozbD/zJyf0pvN/ONFx8k8uNsfl7Hz76J3ynMg48NmvPjzyjfj0bV/On/edpz66Jg/p2bMfXemznSc+TqFWq4WnzDGe31vG7LUy6nzih23gzaNm5GDRs3s+es2n5UvAzA+P+pRf+JitIIzX/Hn57PzP2RjltWxb+NbvMn4A6Vr2mH/Hv3zO1/CaY8TEk/dZqOHiLHBnnPNZ84s5wTXtf97fm3jb3G++efQpfzd/AM/nd+85Fyrm7zM5yODlW3gnTp9fnT98hH8Mmt1iM0mtWAtYy4zdGuCe9eEKawYaP3dtLe999c6dB+P/+9e++jrbYfwKIvavf4Tbf+xOCWHkYzckP5oGEXhWVNNuMcElpPrFxwaBoTqyRzxuinmA3kgtRE0M14jm0JPuw7RPMJgLP44fDAHN02465q6eZ4Tso94hE8qzk/kg/hJMd+9FsITQYg7Hdz63uPjj4yc/ev/hd/PPfvQeEnf93eytk/lEI7t1dHeg8dPmuUVEFwFBsLT9BBeC1/q7hDlbax599hyD+CTE/JzPyczL82iW587b+IhJ8L3HmXCmlmibPEcBys9ed8acNYd7jzM3uZq7DI5TMoPI7ifcgBqztHx5rxFtsY9eZ90JrzXGYQHXlJk4CgzfxTa84eOHnaEhiq1uNncEBh6ZkfLqPW3LXOibf8735T62QSuQJny/8zhr9/zZ7sRM1g9j6TnZVUb/nSP226Jajo2XOjamgs6Z7Xe1eg6ED3CAMirzF8Ut23hEDJGuwRYxQ7oJz8bp7NTHrvLtRzrE0rZrLbVo2o/6EG+PsznzL6M9QJvXyb/Is5xLy9QDcg4NzbLL3ZhbjOYB6TPKwhO5p+DGVCIu5TYbnP4ttl648y/y3B/VtSGM/KiQ/5g9F9cDLnxS+9zPA5O75lULgxmFv0Jqr9aQIUF6EwoOmWe/ffkSBZKouPnVu2xtzTb3ZG1Yen0DnzqlG1g3EGrWiAvpkKA1F4wlla3rIGM4Y0JaJVxYBc2tEHeDsrI2m2m0/7gCz/7yl9+B3Pf6zvP/iINTJOb+eXsZ2Hcf3ufs/o+/f/zM7/X99/rOa3BDoE3WMKli/yfLhRoj+PFvk5rY1Zytpgv2Ek3/ckCeVg2+h75nLdq2+l7XQG4bn+2DynUds+0i6ad3qKaqUKIP20gNBYT5uWrbMuW5YOC9pNPZBcYZvOW+3muW9gl2fXhwkmMgNol5MC7CyI4KsRkWjsO3k83cu6Sr3ntoZod1E2CwPEBBBv6GNjcv73/Ipoa6GaoV4geMccAXTwuYU2xUxrkNPis8WfvBkvju7+F+KLQkl+TWvdUi2ESBJO+Rg0VJDVEc1gjUNCvjxIJX/NfCZK0AJB5uiOiup5e2LHyHEGPmA5NSYWrIOKhx3se653MbXHeZ2BzTK7PrL6Mhto4FTfEf/wBMjVrc/Kjr54jg6XfusEEkZn/3UpG5W468xXsrqroWrLpq8T7dM3XiMpbJbOmybk5wGdgPBQprolCzKo/XNinj62Qu6QKg4bgrEOow/+uMsWz4A9pt0KQ7QpvqLOPKDJCmemTLRm73vJ1nbc6NpkWOl07JmwRxK4RcooT58bHjZH2Y+bzgZw7vC1ZOIj47P3yvRVPXZ3bf0W4Zvi4brXCu88vEUO2Q8eMmb/oOB+CfXT6PZqN3/tbhzMsP+9ZXGf/v/M6fHz/38fffutSmejvHyL/vuvW3Tn3s3fd71mOn5LdnN/R8/+g3XzmnXNZV5oaBrNm6wsM/FEpZrmPmrOs8B/KTYq5Q7Tx1LWjweLh3lHa0OBNn5+GTStx0XiDPbSGYIw4AGBrf5IaNN6l1xI7hCNK1whc+/XT9wcHV6t/77d/NNeG9x3k6Qhg5T6P1BNvam4w7tTJhe5QKt1ZF3iiOZWL8RJvgOGOimgvPQcQgmBCvOlUBlwkArTd+Oy/4bWqLfPGzz6dnblxKM3yXRt9L1Hy1zLGmXotR1SDOLlCZg0RYYqZ2WcXNqR+/z+rUNy2xmx8uPknn9zu+U/PyXK/5ww/PyE94/DG8P7tSAjN/biZtvP/wF394dPidf2fnPP69789u7vv5uUbwt9DmKXSSy2avwXB2HuxDpKAfEBhrI8hV5oTUz+BIF61ZYV0Ha5pkXBEGPNSk1ZwNZqxTAExLwM4umRhsa75J9g1n53NsikQwa+Jcc+ZeyM+BwPlf/t+xgUqeUpvEHYdN41xhT6Es/PC9qcUyYTVxiaSa9Q6M0fuQkQWztzCZAZIwYwQYd81VOOnAjGXCVg81liMLI7RbYaSJMFJFSDWjwwBAt1NXQJHpdRF+z4QR+23q6ABtu0cZfGvfLBHUaVZFl/gf+9AkUHhujWETRtqxSn2QTbJSFDC0hjg7DPrL8wtsD4jbUZjRAmiJfgu+CYQjp3BzJozYZ7/0O/uu5SZbbzj9FAZz+SIVaAl6tjiZ+9K4r0kWRuivdxsx7n36q1DWom8KHwPa10GwmPcPXB/112ddQADUspV3wqXd4musg9K9woFVkt3fZhFrjpk7Vgq1oNpZG2WOuc00+yw+Yd5mEOA03xv9cOPaMVldIzZgY58nrC39Lo0wtot2e46HsUY0gfuZb2TsEYII/ba+Sc7eEhuebU0bJDH6VkcxWSXbiTYSpIufl36yzhn33EAb+eExf8b8+w+/5I0j5Xl/2LmeYxwKLxz5xdudXcL7xz/mk77vP15EW7/tcC58v8Nz5w9SWbBoXp15UWZODQlgPYu3cQ47TxWkCctjrhnCiiWKLDUL1YmrrwWCr99+9076PbaXOBNGGMK8lixBv0h2o72Zu724iME1Dsu4mO7+gADXbuWV56/+7IPDnV9erbb/0mE6/bvfr+Uf1+9DGPm4jsy/5HZtLG++RZEnkgQMxpqbmJfYp6JF9sYMSwgx9VlLNv3S3VBdCBOIsMTaFb8FMXvhOnUzGsX0zr09iKPaKb+xbv4Y6Xl3KZB18+4+iwjLikGFLFyLYfnXod7FKhkAi0TIG2RqMam5tu5il+BIUs6I03cC853CyNm533net3+WKZviKBNyYQ9hFpn2Zq0GwultILzqj996/vd71nd+73V0/EOqyFsPseI7isDTHdwpCCDjwS0YPIQfPOZQ6goxg4Fz+V8rd8488H5y+kf+e4mb1yjU6SbRv1yD2RuJr0AyvjdKr3NOA2FSYU/m1MXFZvZIy2wjmJddlLEYYKt7gpdsLbAEvNkMTZirhPPN9wiiBJdDAiPVwk2RlAkZXCeBPUCjtvG2QQvD3Oc/Ta8fuV+HAsG8fovnOCe0ijmetj9r1OLBb2rv1pvYh9F6nmjNW6k2noFQXoMfmwnBK/17leJQI1JS11dgyFxrH/IcgnGjOFKgi9ojCFAGZPpM7/pg9zi7ZMpmgjDotkEB7Kuv34Sxz9NNbU/OzOE3rXlOZXh0ttxoWbLQlRv+yejtjljuHdo3T5y32rWR4xnAMLthnFT89oBr9g+ppss4ry2RVcaY2l+tQnlvEs65t0txMK0hrA+xt09aq5YpPpex5zdan8fU7BhTyq17AoQ5iNLA21x1lnbZpg6ZGq7JPKa0Q2ZpBpkdM9PqfSofN7B6mZliG3RZyUSzO4tzbEMGgLZrV3H9PpLbOAcXEuMstjSdz8fpDeaMtTJaCCYWDJwf8/4/+vCt77jffJ09/sv3WUN5TTp/nB2eg0jFWwU6LTBAzlw2H1e31nzDuzOh6vG7f/f7s3s+/ov3/86DPrgW8/N9VSAj65DSABPWxTGlDPaPe/Sb3bJZD/65flXuSMlJVy+upm2CTn/36+9mkuZacU0+Tdq19PPmrduJqgn5EEvr8ZhB2Kw7N6zcS7YV45QFQvqrNXSFsSdwe3b33t7guNOtLi40n6Y40/wm5+jfEEbO0WA9yaZ+7uUrJ93d+zN3462Sb9+khoH14U0DhVRC5CBULKgpZbHdUK61SHEz03EhUmoGagQnpP3+6m9+kP7pb3wdWuCilcfM0n/8S/9m+rXf+Wa6RUS/ZdP9bU6kn2SP4t6BQCAQCPzoEZgrGih4SLNXthbTz/2xl9Jf/5v/8Nto5M//iVfSFz91LdPRsxYr0mb6+yiOSaGzjpCpu+uYdGIF/ysUsbMe0q37e/1vvnfnV3b2+nc7vcL/dHaP8/Qawsh5Gq0n2NZSt1+doRFdvXoF7ZqqjWgYBh522Exrxs6SFndqr2wgkVNNEWndvRSKaFTzgDtN16St8lmNxN8vX75MkawTKkWa3moJZkzq7FtSIhbAxRlHIBAIBAI/LghkCxNxd7pZpIcqZKvsC7RACYXbt2/P6Sb0cx5XM0dF2mrtEYvX9bX04dJrYAmxro5u0Am1eIx7ck+n6xfXjr95a+evfuODh791XjENrnBeR+6H3O7R5LS4trVWuHR1O+3c3klf+s3fSm9ROdU8estDG8swdTHh/2V1YCanQBoBrfqvtYFoItfE7gJyoVn58Gx/FyeZ5uN84g+53XG7QCAQCATOBQLQQOngGdOVPkons6UYuin9lI6e/W6fzExySwxjgtwmoojrzCAyd5WmWHG6/eAovUuV1lqjtvnv/cKf+l/+yl/42T97LrD4Ho0My8j3AOXH8aspYdtNIvyrxB0YDX/popvbLadNCp+5CZxSOb4VMmtWKANPYBUVJ6nCnX2aLqYuQYBG5VtS3nNff/317KLJfnMBVRiJIxAIBAKBH2cEoIM54gThY2dnJ92/fz+7rKWb0k/pqL97GOtimf8edNd9e4z9GRC4XTL43ahd4k1MtXcLgDfe2in8ws99/vpz1y7+D688vf7nvv7O7pfmdzk//4Ywcn7G6om2dDgtTg8JvDrcO8wbZ61QantBwYOsiqO9+wTQWXOikLchXyJVsolJsXGBctwKGfyZ5aAP8+d/5pX0/I2L+bsGAZCnpPU+e3k9/frvIu+zAOMIBAKBQODHEgHon7F30sNf+gv/at61ukdQubGwVy6u5c38pKNnhwHElwjMNj0aeQSaOg+kzmG1CCNaofvsc2RAsdshkM1U2Nk7WqrMpn+Ss0MYOQMyXs8XAkR1z8ajARbBcVokJbRYIZ2XLIU9agWcHB+QJdNIuw8O0rtvvZuWHiyl559/nl1pD/LOqRZmMnK/ivReJ3rcPTW2iBh3Z9OL1Et4wOZzN9nYq9pYRohxl5A4AoFAIBD48ULA4ng3jw4zPXzuqQt524gadZnuk2ko3RxDP6Wj2YjMPzWycxZJ0T+h1P9ZUUSSqDiQXnDTmDyg1me2Dv/mBAN8OuT2eML5O8Iycv7G7Im0uEdFnjqbebm5mnUXjkjXrDao0cDuu9YTGZJ+W0UguXj1ajo+VEA5Si+/cC3vHeHMd++TLoFVf/DazfSNN+4gvNQwK5rSiBmRGhAnHVI8G/M0yifSgbhpIBAIBAIfYwQUKO4/PE5/4+/8Gu5t0u8JQjU93ZTuL372mfTCDXcTtyDg3EXjFhMWNyuz67ExI6a+u8/TCOHDOkGmV2MeyXv9mFFuDRMrCpemVBc8h8fjsTLnsPnR5B8WAqVBhY0pKZGFKXBMwSbLD1vEyFoSzvk+k5yf0pI7f5Lu2x8QM0Jk91nBIUtgKPnfvY+bh50uexOivtkrtTchk6aAUHNhOwdr/bDaG/cJBAKBQOC8IKCLu8UO6BcvX0mzMjtjF+ppWm5Rw32BgoAEolIJV/opHZXOah3JwgiumnncHYochLiAsFKyMCI1S/R6W+NEq4g02mdMKLMwdmvwc3iEZeQcDtqTaHK5MSuUEb+d3EcUnWJdpDZSO+aNNGKbbIOnKkjzw0GPypE9tptfTbfvEkviiayKXPyJc10GtRoVNLGixBEIBAKBQCAwFxQsedBuW0n1W4eWY5MBpJum6+ZqufychRFd3xZN49OU+kxuPYBhhFdPsNAcZebwySi8WMRQRXIuuPDDOTxCGDmHg/YkmlyrFWYk1DDvyV3HMjKv/OkkpwJglZLTi5a6rlMumn0TWDRrW9vp1p17ZM5YeZHDACukcuWXOAKBQCAQCAS+HQEtF7lS7Ld/nS0amW5aVjjTUQQMhAsrGmexRFcNebwGtEKaOcU0YMgtcSOTiecglCjMaCXhDTaTc0mF6VIcgYD7XswKY3a+KiGBL5PSO8ZNc3J8zKIo45ohe8Z8eOqLdNlnZki5dvfa6FGauIRrx7S0vEMpK8S1FEcgEAgEAoHAR0dAuul+QNJRLR2W7mfzu7zBopKFezpZOl7BY0BRSjde9DCLhlOhydaAmtcjyT+cw39CGDmHg/YkmrzMznc1BA/9kiubm2l1Y42Jzs6pWEpKuF3c92HU7aQP3nozDXqnqUK5+JdfeYm9SthEjdXghl7uv4BAH0cgEAgEAoHAD4CAdFP6mTdGxMrhzuXuIA3ZzbtkD9jfp9+zCisKoMXPkFhM7fXVzR0VXnookFqp2YrvXOqE4ab5ASbMJ/lUIj9SjWjvMUGr0+kotZeWU4WCO0X8nF02ThuNB1hLKMjDRnkXLl3FHMjOo2TMnJV2t4yxLp3zGTr1SR7Z6FsgEAh83BGQbko/v7McfIldztkEL1ufzRYosk8HsX24Z6DVlF4YG0tC3Im7oddQHt04szqDOJ/DI4SRczhoT6LJ1FjNE7nDrpOn3SMmeUrrFzYpuHOSdm7dTr3j01RvL6Raq52uvfRS6rpT66OIbttjiprSvb7LOAKBQCAQCAQ+OgLSTemndFQ3Df8TqFqgPPwMpY9dp8lKJOGXoFUsKLpkjFzFbDLFIj2ekvHYaKUGOy27u/V4dj4tI+Gm+ejz5RN9ZqnUKNTY7tvyw6cHu+mEv+7xCYujhKVkmr75lS+nW+9+kLNoDHCtNkjrzXloLpH5QtKl6TbicQQCgUAgEAh8dASkm9JPBZIzpqyvZUwW42g0rzcyZrPREfF61jqrQael1RUjWblmOJikw5NeDm4ljeBcEuGzfn901OLMTyQCDw7vDSjKMzs+PM570mD8Swe7h7lK4OrmVtq4dDHdvvk2O+8u5/1ojFRFBs+WEBfNgDLGQ/2ZivVxBAKBQCAQCHxkBKSb0k/pqAXMlCaMCZnhgsnFzPpsSIqMMYPqEi0yTwNGSdRFUzWJAMOJFa/H3OO8MvVw03zk6fLJPvGdd273qqVGWqH8sLL5lP/cIbJSraVWfSldfe5F0srGOYakWm8gsZ9gHmTh4OzMCwe/ziQvhBBGPtkzJXoXCAQCP2wEiAzJ9HP6WIkQ6aqCRbVWpII1RSjHWEiqdRQ+9qIpqAga4welRmgx3RfHTupzvfF/5/EIYeQ8jtoTaPPpcWG68+Bo+sXPPq/jMqeO1RrtVEfwsOqfqb2raxfS3Vs3MQvO0uLiMtJ45dEi4BICqMo1AqvyogiB5AkMUdwyEAgEPqEISDeln9LRfCBbFBA0ZiQUDAlanaAIlojRq+k2h8oOCR7JwgjCB1uDUSlbF48CiX/n8zivFp3zifbHudV1A6P6qXNyjCxSxiLSIGqbuBBniJOclN8acSIzg6bYwbdLmu/pcZcCaUMWDNYRTplGKs3HeYSjbYFAIPAxRkD6KR2dH7xHGLHydblSYEf0KgKHJeBx03CO1VgLZNJMiCOZ5WKTnj9CiaSk/NxMcnajc/MalpFzM1RPvqHmrA8G3XTc6RE0NUlNVsYiRo4S6b3uf7C0soyPkp0kV9ZyMbQpgkjerIlz8kJi4RiEFUcgEAgEAoHAR0cgB/9DP7+l0EFIiVS1amuljKBBpdUKVhFd5ep8Bd6bM4NzJ9NcBZROt89WHbkY2ocizUdvwY/+zBBGfvRj8LFpgfsbOL1PqSsyYD8ahRDriFhlleWQ6qSPLZLeW2kuUHCYyO7ZKP9eZiW1qTmy1G4gwVMgzZ2f4ggEAoFAIBD4SAhIN6Wf0tGyJVU9tH64Ax4CB2QZwURhZUphNBTEUgUhBOWPn92PRtJ9YnXswZDfzmWZESJe4ggERICyIRUmeKO9lCZU+lPqpgBxIoM9+y6n+Cg7p7007A5Ta3WShZVpv0MgKzv7IqwsLRD8utRKdYUR9uuNIxAIBAKBQOCjISDdlH5KR6WnmjaMCckb302KuGAmqYt7PAsl/GNlVjfQs/p1TgnGhTMlpmREUUpOP5dHCCPnctieTKOnSOKNejONprhp2P9A18yU/Q7cn6bCvjTFpWrqazXh7/DBLmbBU0oUe567S+rTrBr7GkcgEAgEAoHAD4CA1mV3RZeOljB3TC1eZjVsiprVcNPovumTJlOr1PM+NZ0RVhA2Kc2bkyK8FHHp1KrznXt/gMd+rE4N1vGxGo4fXWNq9VTo9YeFm7fupV6vm1qL7dReWWJfGqfIODV02fDOgNab77xDLvwkPfvii6nZbmFC0ac5ZqOmMZYSq47EEQgEAoFAIPBREXBPGjNmpKOIHtkCgj0EYYM9aRA8Dk+6JA0MoLGjNOCcKVYTXTRVSsNbBr7KPjZupFewCBqCzHk8wjJyHkftCbW5MB2k7Ysb7NK7Pk8XazQoEU+WTb+fjsiyseBOtdZkAbhJNZk2SOJuWV3js4thhBVl/+iU1hl7EkcgEAgEAoHAR0FAuin9lI5KTwdD3N9YpEtYPAZsgOf7aomaIlMyHnu8ohUaW1IlPsSy8fhzUq+PQnhOBRExCmHko8yUH4NzBv0+6TLN2cXLF4gbWU4np6M0U/Q2optCOytbF7JVZH/nYRqxOMYshlvvvI8VhWAT0ssmpJn1sIp0cNuw4fWPAWLRxUAgEAgEfjgISDeln9JRnC35poSlQlrddmNMnScElG4XgYNEAszYQ4qLaIkezigPb7mFwiStUBfKdN/zapsOYeSHM5c+EXchoz1HYk8JzS5j9RgidJyeHCCUlNIy1hLTzAZddvQltbdVL6fDo+PUZyffLhHce4dHaauzmOruHBnxq5+I+RCdCAQCgX85CEg33R1dOtrpD3JQ6pC6IRg8UqNZpUz8OPVV+AZUwS6xM28ut4ASiCWkz15hbs1hNWz3EjPt4DwecxHsPLY82vxDRWBItOp8u+paKk4NoMI9Y3wUGTZlAqR6p132qtkjnXeQrj77TLry0itMf62D8/0Ujvi9O+gRxBpT6oc6MHGzQCAQ+MQjIN2UfkpH+7ho8gENHo7dbwZBA4FjPCmkhYU65RUoCY/bxmyaIa4da49UqliwjTbhc83gkXN4BOc4h4P2JJpMWEiqFosz5I58aAbU3Gc1ViXuXq+TpfAm2TZLy0tUXz1MD+7cRWiZ4uPEcrLQxFpSp1jaeTUSPglU456BQCAQCPzRCEg3pZ/S0TpxI/OqZZaDn7JZKfvSQIMbfF8o6sqZkPFoYCvuciwjRSzZOmd020wwpZDeey6FkXDT/NHz5MfiDGRp5QoqCvfZDK+SK7H2Tk4JzJ4StNpIrYV2jjAqFyvp5OQkvfp7v59mRHZrLtREWEay10RolPd8e6cfC9iik4FAIBAI/AsjIN2UfkpHFS5ymVUEjAKxIKb7qiU2CFjtneKSwVqS/TemFCCkTLGa9HHfbK7VoNXQ7ikRrufwCMvIORy0J9VkYkKmUywiXQKlTg8O0+H+Pn7MTpZSLDds5LZxIzffeift47JZXLY8/HyL69OTPhL8MH9+Uu2L+wYCgUAg8ElEQDoq/ZSODhEsPHS2WAG7Wq+mZrVCJIgVV7GBQIt1ytRw1fjnPjUKJ0UEFrNupqPzydbDMvJJnNn/P/qEl4b4Vcx9TOjuUScN8du4KdOY/RK6p8cIGSktlNtp5/bt9NbXvpZWt7dTu11FdnfXSP506xhoEkcgEAgEAoHAD4yA9FM6qrXDbN0yFVUr5RqfIb781uuxKSmCiFaUad7HRmHFPWug2wgpxo/o3snn/8BP/9FfEMLIj34MPhYtKPSUPTD5sQgmuGYazQa79BLF3ZtXY53MxumESO93X3uNE8ZpfWsdk+Ehk/8xAYTdI7k8jkAgEAgEAoEfAIFMN6Gf33bwUYo6RQJxz5n+wGJmiBt+1jWD8OE+NO5rU+Da6cRy8d4jLCPfhmN8OGcINIzcHqWDoyM2xqti/mvkyOwSknkZn2WLSquvf+Vr6c7de+lTn/0Mi4OtqpHKa/xWLBBIhSCTJfrzuQ7O2WBFcwOBQOCThICeFumndFTrhhaQCeXgRxOqrk6IAxkigKAkGsOnJQT7CecOKQmP8MHJ1TLFKInfq9SJ23tcQTxHIAXrOEeD9SSbOutR3oyUsCrlhAuUdx/ivxxhMqy326nWbqbdnfvpPn8vfO7TqdZqpLs3b6VrN66n9kIrB1wpvU8wJernjCMQCAQCgUDgoyMg3ZR+SkfPjjFvR2TI9N2Jl/1Hq7jRa/jL3cm3VKpiEamnZo2YEQJezaqZIMjMs3rZxOYcHuGmOYeD9iSarHw9QPQenHZSdXEFCbuSF4Z+zFOCVd/+5tfTwnIjrW9vpre+8c20dfUSVVkv0hSvnL8okSO4xxEIBAKBQCDwAyAg3cwWjceUuQJhqtVyI9cdmQwpgIawYaLNDFfMzI3xsIS4FU2B7IICn8m9IeZkkirhpvkBkI9TP3YIFJtpev/hw/Taqx+k515id94Ru0SyYd7D+zvpBNdNs9FKFy/fSO99/TXe19OzL72UqsSR5M2c6E0D4WWZ9N92q54Oc0n4j10Xo0GBQCAQCHwsEZBuSj+loznsg1bOi5qN+Tyh8CQlFNhMbzSi9DvxIbpwPHFCzEiVUgzLLeo8NVuJPX8JGal8LPv4RzUqLCN/FEI/Jr8fdNN4sZImB4f7s9//nd8pnHSMaEVaR2Q3hqS5vJ7efefdNOj30uf/9M+ymd4a0x5zICbDBQJdL6+vpO21RVLLwvP3YzJlopuBQCDwQ0JAuin9lI4uNGrEgxisiuDhH1aTQq5Dwv7p+HO63SGVrnXPUJOEYJMZhHrEzr6eX7UCNmXkz+MRwsh5HLUn0OYWNc30tmAMTC0sH/vUGRlSlnhxZTUtLK2ksfvUHB+lS9evpltvvZ3upJtpqV1OXawnSvJlFon/jcNP8wRGJ24ZCAQCn2QEpJvST+lojvtAFrG8O1XeU4nd04+Oj6HH0/+PvTeJlSxL7/vOvXGnmN6c+XKoqqyRPZKw2DRN04MEC9bC8EaAAAuGDQiwvTIIGLBheGUY0Ep7ryQDXtg7wV5oYdgyZJqCQBMUKTbVU1VXd9eQWZXjm2K+cSf//ifyZWc3W6zI7heV7778Tma8IeJGxIn/Ped7//sN/8/nh6hPjRJd+70OtnrlScmbwgtV1ii0yoq3cRgZaeNZ29Cc1X1ascghzCTpHLmKRNaKJNbpaIJUfOPefveO26Jh3uMHD9yTu5/jFYnc6GwGeycLXC5DWHpMdY1z6txrwxAwBAwBQ2AdBGIa5VXYXtlRDX2L+T2iYnFKAz1pjKigQAqrOwNKH/FLK9n1eDTGaDfYbHqK0ei0IIRTkDXSRhtsPnWdeRsIm7kaAR1yo2DnuP9KckaqcuXtkERxn340M5JbP/vkU5f1hm5Bydm1W/uuhzqghHcCpYNDWERobBgChoAhYAisj4BSQOhQurKjTwmJPCQK0eQKwZC5Gj0NzcSExmOqatTAVFFx3RJC6TF6I3pCXWO8WzjMM9LCk7aJKcOvXUryVEqpWMHOkPiZcqHqANcgi/zGG3fYKI6+NCOE0Kbu7HTk3n47dF3im0ejmXvw6MTduLbj5uSU2DAEDAFDwBBYHwHZzUdPTr0dncxy33xUEe+csl6Z4oR4jbr2KrdEF3w5iawkkrhBtwcpIVQjRiLfiIhMS0Pl+gQ2DAGPQIcF3acrbwfWIW9ILHl4HikpKxudnvhGTgfXD327atRI3NnJme+nULD4JyRVTSYLXxdvcBoChoAhYAisj4D0RGQ/ZUeVP6IQjOxq4nvSwDvUkIaLRCW2qpNvCOmIISEdqmw8WyFULue0kll5uJWeESMj66+Xq38kMcpu1iXvI8bthwsQctJh0Ve4CZ88fEiJ7whCErqMLr5xkrqT41MyuxderMeX+LJh1DPBhiFgCBgChsD6CHi7if2UHZUnpH6qxipRMw1Z1QbCokam+kVExHfz5f6lvCTcJ11WFR2sjtCz2jUsTNOu87XR2TZ1BOsO0BHpQkYoLyP0mIiYZEjCE6o5fvzITc5OPSFRQ70qX8DUqYNnIyjPRHFMEXgbhoAhYAgYAusjILvp80Cwo09TRvByECLHXYC2KmGbTD94EhKiIyLhM5EPiZypyCAmd29BxeOTEy4Y6wI+0r5hZKR952wjMx7yqnEcuGkxdTe85yN2kdT8ICFZlnlCsoSZz8dThNA+dx1ISocMcLkL/ebBY6I+T42YycpvuJF52osaAoaAIXDVEJDdlP2UbpOKCHSThggml7qAmny+hJw9FQtEyIjQNI+bkvjChq69HXX3jdyEpqYzuq1jyHmh9pX3Ghm5aqv6V/g83QgXIVxiuZD0cE4oJnL9rW28Hh13/OTJKo5ZL+mJ0MMrWLkt9Efi5IlrFit2nlBVc22r78aPLYn1VzgN9lRDwBB4xRCQ3ZT9lJdDDfNEJ5SUGkAyuiSpDgifT8gZOUPrKeT+LhIKUmKVR0VVNSHVNgWNTuEtDT1M28dE+LxGRl6xRf+XfdwA1k2hu5uOJ3g9YjwiA+/jODs9duPp2HtAIti44pvZcOj2qJ5RTwQN9Zqs2QnmFPnLELbHDAFDwBD4BQjgFZH9XPXsXYW9JT7pkr7rIS45Hc/caDQV2XC5GAjHd1T621S+m29Vd1xD7kiJMNpM5ZAtHJbA2sKTtqkpL4lJzucLvHx4OK7foMy3586Ojtzo5NjnhCh5tUL9L8dr0h/2SGCd+hp4ZX6roZ5ilqdsGhuGgCFgCBgC6yMguyn7KTt6Pjp4O2RzZ7OZm+Qz13CBSNzcDdF5SvlZDfJgLy4lTJPhKZkvGjfNS8I2vgjy/GVa893ISGtO1WYn2hsokbsOStyEWzu7WuNudHzs5rMp7asjH8OUC7FUWRmPTR4fu+lkRFhnlf2t4xXDjJRxZcMQMAQMAUNgbQS83cR+ejvKs5SHh7ICN/JFIBoqLkiCyG3TEE/FAzoAc+yW2GMJycfokDQdKmnwmtRV5/xl1n7/y3Cg/eW4DGfhEsxhCseuSFgNs45vWX385NjNlnOXUFmTxX35EF0Bc5cHsENSa4xA2u03btMfoUtSFSXASryCyS9z3Cs2DAFDwBAwBNZGQHZT9lN2VINrPEhGg7wCbg4qaRqIiETNpDPie+GhQVJxk3Mk5gIwQyY+8MeUdPJtp76CkRF/6u1LTyXucRh0qZyZ0u9AWdli3Pq/LHLKfElc5bF9GufdevNt99bXvup++3e+5bq0vvaHwdTVRyF5WhdviBoChoAhYAish4DspuynqmjOR4nMwlK8Ag+IFFgrElZJEfHeEzlHFE5X4molITT5QhThETlpaZjGEljPz/wr/j2pu1HG6kY3JKh8IlSBM4QM7abERUide79PM6Y+ia1qW+3ca3de95U2at7kVf8UruH+rsjImLIzG4aAIWAIGAJrISC7Kfup/Lvzod8r5ZDIG00FTUi1owhIjv4TTmxPSjjE219pkiypdMSDEgxpYkOb0/OXac1384y05lRtdqL9YN4EanRHeZiSqLS4awTNtBl8TJJGTCmeEfwfKLGe+NDMBPVVtbNWnFISPCpJU18FG4aAIWAIGALrIyC7KfspO6rhHR24QUrsa6kSGuIxy6rw9hj/CBeIq1y9SKEdvCQhCSYNtlnOkVCCUS0c5hlp4UnbyJR7yOQsF3AQMWoU/ljsFYo70hhRma8UViMISUYOSZTMSZ4KCNvo/o6PV+5sd91AIRsbhoAhYAgYAi+EgNiD7KfsqPI/FHepSzwguEDmVMhUXBiKlFTYZ138hdhdXShOp3O3JImkcft4TWKJUKIa7434C73/ZTjYyMhlOAuXYA5EWzrLfBnIHahxrhvSITmq18sQ3hmQzJq4ncMbbBbJw/fczs62G/RSNkTstgciI4knJ6vg5SX4UDYFQ8AQMARagICEy4bYT9nRNI4gIYTH5R7RF3lGIB5dKV4TI1f/GRUQ5JPcnTwZrdRZ8ajoglG9xFBn/WmspwWf/XyKRkbOkXjFv+/H2/j4qiimjr3CPSimLlqixnm7u9fdcHeLyt3QDbe2EDvb9+7DM0R4ejTMU2yzpJleSUuEShvHhiFgCBgChsDaCEgyocB+yo7WP+fY6HEROJ3RwVdKq9jggpy+hEZ5Z0sKDQiVd5GKT5PM55uoXw2OklaGaSxnZO3lcrUPbOAUqlsXE5fTT8p+6j2TQEZEQhYook3Pztzpo/uuWORuPBqxKYhhQj5y9IdPzuZIFeMybCcpv9on1z6dIWAIXGoEZDdlP2VHczwf56NDwqrssK7xxpMpZIXMEBrlFUtkFsql13VKeTzm5skMIRy6c7RyGBlp5Wm7+EkHQd40AVUwZG7TosmXi0WUk9147dDduHXo8vGpj1XeuvOmZ+BKrNJQLbzKz8YkYM3mOZujlaT84gG1VzQEDAFDYE0EZDdlP2VHl7oq9K5pCZtRtkvIJsbdoWTVAm2RkltDOW9KCF1FB9MFStg0yVOSqxqXtnVYmKatZ+6C550oOZu+1HgAfZKUOkgqb0Rhm53dHUgHG6QK3IA8kRIvyWCA25BEq8l04YV4VO/ewY2oxNfVTrrgCdrLGQKGgCFwRRGQ3ZT9lB3VUKoIMgvY3AKZdyoWfRaI+oIRCscuJymhmVLJrhkhGnJJuK+LFwVSU3BV+SdthMnISBvP2obmrMQo+Tpi4pEprkB17z05Onb9wRBSkuD+W8LMC78BgiZ0fbK3fXyTnaMwp7K/nxft2dA07WUNAUPAELhSCMhuyn6ep4tIu6khj2TlBZESK0mtqLyrmiaU+Jky+lBcrbHDCpPPuUWQEahM0AT1bhvBMTLSxrO2gTkTgmyGO4OmRzJUSDZ3DEtfIv9OeQ3Jq9fc3v51GPmcuGTuPv/0U7dNy+t//H/+sTs7m6D413HbqrjBUyI34ir1dQOTtJc0BAwBQ+AKIiC7KfspO5phf/2AkARB7IY7tOMgFF6UdFOnYoZrQk9ackp+F5CQNO24GjIjWYaybuL9bvbrJ+PJP2sbTEZG2nbGNjTfZHs7eOvWtssgI8vFDI8HrkHikpPTM3f8+DHNIul9gNvw7PTU90n44Hvvu+99+9uwclT/9C/ANRJKHq29McsNQWsvawgYAobAX4qAt5vYT9lR/CPEacgXwVMiGbMBOk8TklcTLvqW5OqhxUoPG3ShaNGhJNZhr08FDXdAXqQezwWkrghbN4yMtO6UbWbCXdK2R2d5UOxCu0kcqZqI+KVzRw8furOTI3JFdmiM96Y7PLzlHj584L777T8jsYqQDrtCLsUYOeMOjN5vJMcTbRgChoAhYAishYDspuyn7GgopgGp0Le6KSAiMzeaqy0HuSIITy6xt8RqOJ6uvhI/g7jklAWnyiMhVEPHUw5o3+Dj2jAEnJvg4MAT0qg8TP4NrWZ5PHAAuox45XZ/4BvlnUBMfvL977qCzO/d3W1ySThCjBxK/nxfBcPUEDAEDAFDYH0EntlRSIdUVjHFbmuw5clJEFA503S4TlSFDY/jgE7J2YshMOrkO1tS5ktIJyO3L1A/jxYOIyMtPGmbmPLuoEFhOAx8W2pcfiIicvuphXWC2l8PV2AHV8l98kVOj/CU9LZontdbJayy9AM2CGTdhiFgCBgChsAvgYDsp+wo13+yvnwJ3R6VjBEEQxUzasdBAzFvm0NssxJcFUqXrdbTREwkJa+A+S/x9i/9Ka2c9EtH7QpOoNvrh3VZBqVqe7UqqFlX+CUIKBfrZH4TnJ2dugf3P/WLf7C1La5CdrdaVndIvkpdwmbwXSavID72kQwBQ8AQ2BQCspuyn7KjKh5Q5p1acWQiIcRrkiSClEBEOE7kQ9U3FWHyghwSVdgQm/FSC12Oa0JYTAtHKyfdQpwv/ZSLRyflg4fHvpRMBITVzpKHl4SkFRGclBjPD773XZfP5j48I7Gdk+OTVTM9Nk+qpnkRZMRX01z6j2sTNAQMAUPg0iAguyn7ubKjqK5CQDISVx8enXhF1g76IxGlvQVFBB28IwrEFHhFCgTRCkI0C1Sx0wwSQ3uOp908Ls1nW3cilsC6LlJX/Lj7k2UdkiEljZEO9esI5/g+CGLgxXzhxtyWs6Xrp13CMTU9EaiqOS+KF23hPjJHVmEbsRgbhoAhYAgYAmshIDsr+yk7yhdvR0VIxtJ+Imxe4wVRCe+wR08aGuTNZxVJq0sUVyWM5qiApJsvDpGMJFYvULnWu16ug4yMXK7z8dJmQ7fHOuzEjdh3xQKX/HDQoBtC/5kF5btlWdA1EpICK1dtO0ufDUM6N0OsXVncKj1TaMeGIWAIGAKGwPoIyG7KfsqOyp6WipYTqxkStpmhJ6KSXpnWThK62XTu5pCUHG+1xNCUU6KckTyvXKQIDc9t4zAy0saztoE5LxYLklQ7jTr2VizoDolQbAHfylqsXVUzxG5ImMIDwqZRrbsSrTSU6a1ukj7SaVxkBYp9NQQMAUNgXQRENLCvsqO+ciYgh4TwuJJa89mMBqTkiCzUFb1xNw/3PFl5RFh9RHO9St5rcvyoovEVNuu+5WU7zsjIZTsjL2k+hBqDqi4C1bhLgGcB+1bJmMI2uoelvkqeYpNIkMcnt3KfhkI6DQRGx9gwBAwBQ8AQeHEEvI2VHZU95elL3B1zRW6QPgtjPNbL0PUS504QnixLPNTkiQSEdVB48l5rqWXHXWxwS2WeLIH1xdfMlXzGmLAkLLwKVMAujk49e1DyM797kqGMKYb3gMDeQ2V2w9JV896h4ySJ4N69aGEaD5N9MQQMAUNgbQRkNxWeWdlRniY2Im8JXo9I6tcyxVwcdjqEbRaNOx2N3Xg8dQvCN3TGW10oVjkXkKXDbLcyUGNkZO3lcrUPnJ2FyzDo1CGByqApfWtqoi9sAnYE7FvpqX6IrGiDcIxKz3T8CIXAzx6fuqOzmS8vu9pI2aczBAwBQ+BiEVAHdNlP2dExXmk/sL0VF3sU2XilVeW2nk1nbrg9cLdvXnP9YearaYjdOEyxi31OH6GelrqojYxc7Jpq9atJRFhVvVoULGkfu9RP50P5JCEbRGx9MS3cb/7m190OG0NFNeocWdHPRs+zYQgYAoaAIbA+ArKbsp+yo4W0nhhEaxA7k7w7OSHk6nX7iVMj04qigvF0Sh5JDklZeaTluFZhgRJdCeq00ghbzsj66+VKH1l1mxCO4YOV9dOYpVyH6ocgRh7iQlTbapHuBex8a2vP7dy86f2B/X7mbl7bdbuDPhspB6fsSmNlH84QMAQMgYtEQHZT9lN2dDjoPSMkujSU/Y3wQIe4PFQm8HA8dnfvP3JjPNKYaG+DFwUh8yU5fjq4paOVDKqlWF/qaW/Tpwm5d/Khal/Gq0WucIwqaTzPVoWNJykNIjyFe/ubX3VPjscuXxS+BC0mb6RDWTDcxYYhYAgYAobACyAguyn76e2oanoZAfa2lNvZkxDsMs1qmhqPNYmqkznlvSSw1pAPXSKGegF614QdMlxb+le9pdN+gbNsh74AAnhBPJn4aWhGZIQEEl5DD4S4BhduMOi6tJu4e598ihgPojs+lIPnhEO8a+UF3tEONQQMAUPgVUdAdvOntlc2VxYXb4cUrSEa6gsm7wjXhOq/gUkWBeEwbLPE0WAuhGgURkenpKXlNEZGXvVd8Nznr4jJyMnXYaGLg2i1a8E/G6wWPbazt+1GdO99fO/zVaMmdpESrZTk6p/37An2gyFgCBgChsAXISC7Kfvp7eiKlfinqGeNbpKKF+lQqEb5IfKa6J9i67oppC6peD1OZcEXvd2lfNzIyKU8LV/+pHL0zLTIS9T+xLqlLaJKGlEMz9FZ7Lr35htvum53y/34+x+4Ajeh6LyeWLERGli896R8+dO3dzQEDAFDoLUIyG7KfsqOekP89CpwVc2oaho8IWo6w1/s+TznOIXHscn6Cw4xoaBGKgx4T/RE2ez2DSMj7TtnG5lxmYfsgqaaLRZNRUa2mLoWvkp39UtN7DKh78GNm7cp5V3Vt8dZ1z9Wol2sLHCJpAVP450bmaS9qCFgCBgCVxAB2U3ZT29HpQXvzW7gEsplfB4JNhju4aocmQX81x2Oj1VUwIXgkh41vutvmPh2HW2Fx8hIW8/cBc/7yXRaIZhTx6juBLBwyQ77hCi8IY28HrBy9U34+IP33cmTB3SITFesnE3TsDkkyKPKG361YQgYAoaAIfACCMhuyn56O4o91e/SDlHART3AqHXES62rQwoFuEp86rv2nhR17vVP4P6q4Rkt/avezuDSC5xkO3Q9BLp9sp6apkO2diAmnnArKBWT6zBGingwHLjJdOxgLNS+ox2PJ7AWVWf4mmBtBHYE+8mGIWAIGAKGwAsgILsp++n7fMktzdBXX83IxWEtoiKbK6FJwjAiLUpubehf09BlPY75TuimLJdtjdK0lUP5c2VfLhCB+ZS1Hkb1ZD5rIvrRJIRglEwVhBEJq4du79p1at/nbvm0ekYN8xSnhK77DaSYzsovYmzkAk+LvZQhYAi8EggoPw/6gR0VITkfHdpuwDMo60VDJJFXhLAM0goFZET2uSJRpKDclw6nXgCNpr6t7dr70099/unt+yuJwAQ+XZMtlfrVTJOm2ZIYZQePyC4tqlP35P59at7xgvhMbTwgYiFP86SkDpjjMVH8UrFMG4aAIWAIGALrIyC7KfspOyp7ej6UH6L+X8onWZYSlJTuU4Kd7bgU73UQcHxZyHq7DEl5aUHxUCuHkZFWnraLn3RfBWH0rE6zLFiQrV2zwPsoAcaQk8mIVtXjGaVlmY9XKrbJLvBuRM0kJclqC92RjN4IlXeXXPz87BUNAUPAELiqCMhuyn7KjsqeKmWPKLlb0hSvQuysrPGGcF+sChry9zjCe1LUwkPmOEsjT0omiyUhHMhJC4fljLTwpG1iylOce1EcL+DnzSyfBVG/67JeF4XVuRudjmDiZGqzQxrchJB12vsyi6deEHXyjaDjSPH4TbSJ+dlrGgKGgCFwVREQ+ZD9lB2VPYVR8Dsmlh+VpxdBUDo19+D5iMgbidEdKehlU8FQFN4h08/FeEamsJNCySUtHOYZaeFJ29CUT6ns/fbZZLnskBSVUlWzQHJ4RgfJQBuEfRBCRM5r2yW6w/5QiNPNl0t3Mp242XLORrEwzYbOj72sIWAIXFEEZDdlP2VHZU+Vw7qyuXhD+CEhPK5rP1XSyMIGSMfrGP1MhS9D/Tw6rkuOif61cbRz1m1E+pLP+V3WNPnY8SJfspRZ3TDzPM+JUxaecOAs5H7oOyRklbUqcrIK1eQkV53N5m7K8dosNgwBQ8AQMATWR0B2U/ZTdjRH50nj3JJ2YBvylsjaqmGpMvaUI4I19uZY/WvKaulJibr8ysfSxnH+eds4d5vzBSLwyLk+pbpfqasyrigPW9JFsoSIKKmqJp5J/pTP3PbyI2wT70kkWOl/Z1cUxDULXIa+T8IFzsteyhAwBAyBq46A7Kbsp+yobKqGD92IhPi/0vKEqHKmwBZXcBG0SDhO5b1zBCfniwWhdHJHcJ/EXqly9Rpt+mo5I206Wxuc6whvYN0E29DtUAJnqy411LazI/RPYUhFIrUvFNeUp6QiPnm+cTxZgbSYHPwGT5K9tCFgCFxJBGQ3lcQqO3puU1dkRGJnsr9UK0I+vFw8FTTc5Q2ylBa4XOTikb40sBZ5WPij7gM3bQPKPCNtO2Obm2/FYliwIZqGZNUQIR2taSWtskdWa19Kq9wrAZ6lUrufW/Na/T5oo7ttGAKGgCFgCKyPAHZT9vN5FqGcEG9/YSiqYFzyvYJsxFHCRR/WWo9zkxR8KSONcfZdfdd/10t1pJGRS3U6Xu5ktJ6p6YV94wr0bJyVjqBOyCLnJ24wb76WPI7kmXbKswl7pUAeW9GVZ3fbD4aAIWAIGAJfgIDsps8KEQM5H/yoypgFzUtDCAhlBC6iaiZCiFLJqniyPQlpED5reJ6+L+XCbumwME1LT9wmpq1sbSiGJxSrdtX8gjek4zfIKomKII7vXROowP254ct+taGe30zPPW4/GgLWNz/AAABAAElEQVSGgCFgCPxiBGQ3CcZ4T8jzR6iMN+nFdOpduOm8cL2ocTO+i3hIPj7XBSHPDcOUvFVJLOBfaKmLwcjI82f+Ff85JVPba4XgDen4DFXFMOngC0uJYOFeaodNoCGhnVVJ2cprIuXWBNGe8udIyisOqX18Q8AQMAS+EAHZTdlP2VFdFPqh6z2MbIoXZDSbEBqv8YwgpTCbcZGoh1TEi11WKJ1qmgKFVpGXEqfJ01do1TcjI606XZudrNa+QjFqTa2Ai7i6aDa+EIeunw/hiGuowiZCKj7urSh4P4vcwXbPDbsxG0K+FVtWmz1T9uqGgCFwlRCQ3ZT9lB3tZzSj0YB41OTmlShMdoc9l2B8dXEob7VnIzyeYoITtEV6iKApQoPjup1MhE/UUoeOzpSNC0dALj9WRIS0sOrJGtWOsbr56j0hBXoioVJFUBve2eu77iDyXhNtDF8CLHeJDUPAEDAEDIEXRkCFAbKjsqfKwevgBlHJbkmDUsm9q2I3DlGDwlMir7Salaq0V4JpW4PYi6R1UGGV9X7hN78ETzAycglOwmWZQhN4mVW/0P3CgJwoF0RMXN+UNKWOkf1u5l578zU2zMoDor5OyubWZrKckctyNm0ehoAh0BYEZDdlP2VHZU8rvuTz0t083PJCZ4vJ3PUgGltbXahK6HIdw/GyyZ0kJo8P/iFTjeHGr9JKMmL+9Las1i9hniH6IaE03lnoK30RrWlCNqxwScHnEJGIuOY7X7njm+gVy1XCVU3JWUGduzaS6Yx8CSfK3sIQMASuFAKym7KfsqOyp1JVvfvZY/fRjz5zp2dzuqdvqe+GOz15SJuOmfeSqLxXF40iJKVKfWEj+E9ai0t7Z95ayC/vxBVv1IJQ2oeUAH0M0odrWOao6xTF0t156zX3+lt3YO5SAVT8clWBU8p7olqcVnLyy3tObGaGgCHwCiDgHRuQEOyoZBVETgJIxoP7Jy7AIHdITD0dj9z773/kJuMJBISQDfepVxhtanyWnqoeq1LPb+ef9XbO+hVYmy/hIwYB9WKsbxfj/ZBnZKXCCsnAZaiu1IeH1yEjt1zaQxQNF6H612jox5VrkR98ctVLmL29pSFgCBgCbUVAJORpiEb6IaqK2d3uu3feft3tH+57j7Ri5boIbGRjdaXoQztcOC5LtySk48M8/OyNcQtxMDLSwpO2iSkPWNolno4kil2XZKmV8p8WP6QEth11Evfeu2+4a2yMmPIz5ZCIhcs10iGxKmHz6OZLgjcxQXtNQ8AQMASuKAKymz+1oapmxPMRd9yNwz0Xpl2alhYksqozL0UD/BMhUWmB1Fdni6UbjefYanm1uWps6bCckZaeuAufNmykIoG1P8hcF1IRyutBj5qS8Iw2ymuvX3Pvff1NKAsuRErNjo/OYOQLT0pixHa6JFFlSQJpsSV14efGXtAQMASuNAKym7KfsqOypws8HPfuH7t/9kffdmejmdcUmSxKN6OruqpssMLklSARz61ZFO7sbESIh7QSSEtba3vtL8eVXuLrf7hm4oLeG2kw6Hd9AlXOZlDZWEPiarefujfeve16va47Oz5zn3z8ufvxTz4lXonkDrFOCe/IO6KfawiM6Yysj7sdaQgYAoaA7Kbsp+zoqiIRopHP3Q++9yM8JCE2mTJfeIaqZqIYzzWVjJQNeN4BB+G6ES8JF455rt/aOYyMtPO8Xfise30X7Pb6QVEHQcmGKOHeJdUzGQI8167vuus3DyjrbdzJ8dx951++71RqNtzDnQIR0U1xzpxEq+ki53dbVhd+guwFDQFD4MoiILsp+yk7KnuqC7yUkLkuACX7ROGia5Z8x/0hfREVPQZ4Rbw2CY83eK8rKnGW9dItY+I5LRyWM9LCk7aJKfd7zo2mY3c6Gz318omNOzfoDqh1v+76vdRNkSF+//0P3YPPH7moyw6gFFijIn5ZcLCSWANpldgwBAwBQ8AQWBsB2U3ZT29HfT6Ioi0NIRtsKn+lfb4qBIXaAmys9EUwv1w04jBxFcxke6fH7+hAzQjj+Pqatd/60hxoZOTSnIqXOxF4RjOazpu4Qn+4ULJUgZhO5F57+7Z78707lJPN3D/9/T923/vuD93tN667wxsHbI3V0Hf1SUjZOf0sebkfxN7dEDAEDIGWISC7KfspO3puV/0P/KJiAXjHqoyXO0kpgaaoz29N3xqqbgijb231COOo47q0RtTBpn3DyEj7ztlGZjwLBg3Z2k0CuyZNxC1wGyZpx+3sb3kxnj//s/fdj3/0Caw8dHfefQ16TlM85OGV0a2tIbdhn+SrbTaGDUPAEDAEDIH1EZDdlP2UHZU9FZvQTR3CahqXKhNPQ/EXVTqW9KgpKJ/p08/mcKdPOD1zdcjRFB+o/sAf3LIvrZx0yzBuxXT3s7oTdTrhvI4CFYc1xCbTKPWtq3/y4Ufuhz/4mDsr99u/8+vkkFxzR8fH+AfZMD5farV1PDGBmdswBAwBQ8AQeAEEsJurC7tzWypKwsDA6pKP3NRnBMU1Ku9lcEBD1muAdyTBGZLBQnweiR5r4TAy0sKTtokpV9MmzLIo2N7pehZ+ePvQvfXuHaSHS/fn3/nIPTqau7ffedv91r/+G3hM1CESnT9JtrIrlAUuxUDx+fZWuW8CVXtNQ8AQMAS+GAF/AYj99Mqrsqc8RX+cSRHhl5WdVemuxChDKmrIGiGkQw4JB6nLegghUV4JgRo9o5XDf9ZWztwmfeEI+F4HLPBdqmT6W0MfkvnkJw/d8ZMREvDX3Tf/yrsseDpFEp4RN/dKgMxinlfuGNGd8XzOxmDH2DAEDAFDwBBYGwHZTdlP2VHZUxERRWyUvEpExhMNVc7oIlDlv3pUlTe6EOyIrIiJcHEoMuNjOWu/8+U5UJ/ZhiHgFqRo06hJN5cSu1zkufvscxGRY7eF9shXv/aG29kdInRWuHxC+Zia5D1d9ewRfi95ztJNudkwBAwBQ8AQWB8B2U3ZT9lRkY5ngx+l/o7zw+uPqHeNHhbn8JwET4kuEJXkGnBHJ5R/oZ3+afOMPDvrr/YP8yCo4SKMuplO8+CTjx66J49P3bXdLffeV950777zBgBpk9Tus88euDkJrmksnRE2ATcJoEnvbJFD4z2n1yM2DAFDwBAwBL4IAdlN2c+VkKQs6mqIZHiPwVO3gQTRCuI1YcJFI2JoJQfksJMCQjJEwTXmJln4Ng7zjLTxrG1mzl5uR/HJ09Mpcu9T3IONu3n7wL355iEqgDE8JHTT6cx7TETFQ5/6vXIViql7qmIJrJs5O/aqhoAhcGUR4ErQ20/ZUd38FZ5+xqhGPjePx/kliSKfH6JDEuxvB8ERdVmva7wiqqRpZ1WvP6/mGbmyy/vFPhiaZ5IrC0hYDSrikg3U5JAmTTdu7OD+q1y+WJAPkqG++hM3Ph2RxJr6eKbeRW7DXOp/UHK1tm5xDtWLgWZHGwKGgCFwAQjIbsp+yo5WGFQlqWooZyR4ztOxszPw7TrUvZdsVRcu9SAJrDUS8fyY+Kf5+mD//DZ9MTLSprO1wbn2YB9EI4PRaOqGaeLefAsicmvXxd2Oe3IyckG8cPc+euI++P5PaKaHlgiLvoG0rPwhfjsov9sT+g1O017aEDAEDIErh4A4xMp+/jRY4T3NeKBV1qsE1YPre+76/q7v3ts0oXs8XbizRyc+ZwT9a+8h6TxVxW4jQD/95G2cvc35whCIsiaibCxQ4urWbtcdHAzQGcH1h88wQhnws7sP3T//k++5Jbum4r6GZKlwFdjxc1CGt9j9Sq7nwqZlL2QIGAKGwJVHQHZT9tM3HNWnFRPxbIS8EHTi+/TruI2+k/zXEV7pFJE0eU2KgqTXkuTXes7vPEFZre10jLRTqe3Kr8yX9AFT4o/DYd/t7Q1dDRsvKDFroOUzvCU/+eChv284yFwHz0lO07xVHxrICpsiSzouoda9UomZDUPAEDAEDIG1EZDdlP2UHY38RZ2PwriSPJEYMZGG0t/5fOEJSkmSyGIxcXN6iZU5bTvwkhBJ54+5KhwZcli3cFiYpoUnbVNTDvGE7CEtrJ6RXUhHv5+5J6dz98EH993DxyM33Oq7127uudGcEl7ulyyxRgn/oCLNuwnlbrRhCBgChoAhsD4CsptKRPV2FHuqPFRJNilfJO523fZw4B6fnsp/QmEBsu9IvxfoPaX0D1PCa0kCq5RZfQJfSz0jRkbWXy9X+sgMR0e9bILT8QISkro99aQhJ+RjwjOffvYIxt24G4db7q33brs/+uMPPRZ0TXiGidh6hTtxJcjz7G77wRAwBAwBQ+ALEJDdlP2UHfUXeTAMERTlsTZoO23tbLudaI8k1aWbzehJs92DuGBzP7rvxrM5x4WuE4uYPG+Vv+BNL9nDljNyyU7Iy5pOklE4RmuD6bxCgXXHl43d/+zEPfjs2MsN713vuyFekxFlv/IFKsZZSY1HvzBK3Iw5UoHyqtgwBAwBQ8AQWB8B2U3ZT9nR58dyuURCgY7ovczb1qpEAr7LxeLODk1Jh9hmSn0hIGGAa5rnq48NIgytHOYZaeVp28yke/Sc6XKTLPzdu0/cvU+PKSNT6GbL7Rz04R21Ozsb4zukSy/HyD14PrSF5Cn0dP78TvtuCBgChoAh8MUIYDtlP5+nIirxDSAbSY/qRUm/E5pR4mpK2MarZBMulzdF4RoqghFAU58ackda+le9pdP+4nNrR7wYAmmTBR0ypXos9ieUi/34wwe4AxduZ6eHi7DrEiTi1SNBoZuaGnclbUtf5NmQt+T5nfTsAfvBEDAEDAFD4IsQeM7RTBPSwA0GXZqTvu6iDPtLpUx3exsikmJ/aZNHvp76+RY8SQqsMsUqJAhhI201w0ZGvmiFvGKPy9txiqjZjDhkRHVNn0RWERF1hYzC2E1nJf1pVunaEkbTJniek7xicNnHNQQMAUPgwhHoYG9le3f2tpF6D90A70hISS91MxAV3g4SImUFUlmxv+SLqAJHbMY/eOHT+VJe0AL8XwrMl/9NoiRV6NETDXlExLqTbuzilAikGDePKXZZEMMsci36n6cg4uNt5eSX//zYDA0BQ+CqI/BTG6pE1CROXMCFoOxyr9fDI1JzkVggeiZPiBJVMcw8qFLgCNuskA0CULq3laOt824l2Jd50tcOwjRognA+XboSz0ePTr0q7e3AtLmfqYduMqNnzSm17cRrQu5Xr4SfHeYn+Vk87DdDwBAwBNZB4Gdtp1QTaIxOdQ0N8IaZi7OEvBDICG05crSfCh5DpJKLRPrVcKUYcVN+iZRa2zosTNPWM3fB8846cThFyW+JmNmwm7iM2GSH+KNIR4TLUFnex8djNyNpSs2ZasTjFaZ5NvSjKLwNQ8AQMAQMgRdHQPbzqQkVNanJBUko193dGrolIZheV/1nak88IkiIiIhIiC4Ya5RZ4whPNnLwIiptHEZG2njWNjDn49k8h13QlrpD5cy2q1DfmS9ymPicRR+65aJ245Ocxd/xPWmCKqK2PWMmq93j69zZEPXzBGUD87SXNAQMAUPgqiEgu9nBfsqOyqKqEZ46pCsEU9EEb57PqKDpuJSwuTwkEcUEMcfrYrHEbpeU/Mb8nFIN2VIu0trw0lVbiy/983SiJIxpT70tuXd2w5KeBz6jWx4SPCFKai3q3C/+io0jtdaws/TzllpgP+u4HrfCN8976R/HJmAIGAKGQGsQkN2U/ZQdVVWMEli3CM9cP9iiTIb/2OCCuI1yRdSrpkDwbElJr4a8JyItHOIy2eWWshHLGWnNct3sRNkEkRh3SGJqBdOWoJnq1ceThfvs3rEb0yEySRJXkTxF4MZntNYiHhwrSqsmTcrmlmvRhiFgCBgChsD6CMhuyn6eN7uTjshrhwcUEfSIfleemHRVTMBxyhWJM0I2+EAKGpsG2OE0wksCEVF+H4Lx67/xJTrSwjSX6GS8zKmUhQ9C4hKEaXcSFFhLd0ay6uMnYzcnZKMeCA2uwG10R8TM66rgtgrR6Kuci+rwq5sNQ8AQMAQMgfUROLedsqOyoCIn85xYDAkgIT8vFwicYZuVuxfjOqn5nlPZuKBRnrfZaYhnJXVzjqka+bbbN8wz0r5ztpEZj6IpaSIwc3x9XYTPpiSqHp/N2QssfvJI1C+h24vd4eGuulh778lKagcioiRXQjwqL2vlLtgIovaihoAhYAish4Dspuyn7KjsqYaqFZf4P9SDpsY2T6mk8eW7kJMSkiLV1bATc6GYcBEYuUW5IHQz57gJj7RvmGekfedsIzOOppTH8H9nq+cmk4l7jAprDhtXrFIsXAv+9df3cQCWbpYvXeYZ+MpluJIkzkmiKs7zWTcyR3tRQ8AQMASuJAKwEdnPosh98ipXgFzYKUPkqaYIcgoD8vdyPNaTSY5NRoIBkpJR8htBXka06ZhPJzy3gMC0M3HPPCNXcmW/+IcKOk0nUyY2Wdz3H5zhAoRYMCDhsHU8Ite3Sa6K3RyPidTRlMSqrSL2AWl3E6pt5uiTaGPYMAQMAUPAEFgfAdlN2U/ZUTiGH7VvVrNSXPV5fNhm9Q3zZSeYXlXXZOSWJITQM7zX45OJG40WLq3aaYTtL8f66+VKHzlMhqRwh26BNyRfiIig8AcR6eA6HG513fZ2FxGemv40NYeJiPhDPB3RjyUHq77dUkaEhg1DwBAwBNZHQHZT9lN2VLZ1dVOKKjaYB9GjJCxDYQE2uOF3XSD2uhKlDLhAxCtN4kh/a4B95jktrSIwMrL+ernaR9IYUgRkWRRkZKsRtcp3Y7e1PXD7+wMXw75FUho2gzwj2ixosD7DRGXAul+Z3jYMAUPAEDAE1kdgpaaKDcWOasiMqguvd5JAREKqZUo8JSXlvNJ6SpGKz1Lk4nlsjl2WTFQPxWwJn+W5UlrbNyxnpH3nbCMzXixyX1WmF698yJGEVeKR20PaVbPofQWNPB/sEt+USXuGUM35iCAiEt1RoqsNQ8AQMAQMgfURkN2U/ZQd1dBXHwgniVWkRGJoBM29fU1Jcl0VEaw4hy4CJ+SLdJMQMkIIHbLylMbwvT3DyEh7ztXGZ9rAvKtK0u+o+xGD3NrOfOdIeUAKfIjaDwEMPSN3ZOoFd35KPERSAmmTPN1MG5+svYEhYAgYAlcEAdlN2U9vR/lMMqNqwxEqN49cEV3jKcFVpEQqq1OpY6P9VKEzUqHO+vlnc9fh+S7CO7LiMq1DxshI607ZZibci+NgyQ6QV2Q46NKcaeASRHYUllmSod1UEBIoejfO3IQSMiVUFdzOy3sXPD7ncSMjmzk/9qqGgCFwdRGQ3ZT9lB31l3iQEUVsooTuvXWM52NBCIffuXNBNaNy+06OR+7o0RE5IzMXoDFyhCbUIpy6ThY3btY+4TMjI1d3fb/QJ4sgIznlYyniOfs71wjP9H2HyKPjU19q1ut1ISOUkzUlzfRWOSXeVfJz7/JTX8nPPWC/GgKGgCFgCPxCBP6C3eQORcEDuUj4r9uqT03p80Z0x3kT0xQ5eLXyWCwXXCgG2PAetGXxC9/nMt+pQJQNQ8CNqemVwFmHeKOyt8/GM3d8MoV1i2HjLiRso32RT1XjXrkY/RHFN1d6gav9YjAaAoaAIWAI/PIIiHecDy/tzh1ZTOh8jud5tvTeaSWMxHhIDulb8/rNfa8BNZvlbnen727S5NQ97Vlz/jpt+W6ekbacqQ3Pc3JWlmrS5Gp13oV9L0oXEKvsUssuV+FSG4FGTYEaMuFKDEis6nDzNe8bnpu9vCFgCBgCrxICCtbUCI4sIBnz+cKNJmeugwdk2BuiBVXz+8QdjedEY/BkXztwu4PE7e0M3IefHtM/LG8lVOYZaeVpu/hJZ52axr2x29vtUsOeuBHiZgsSpvrD1G3tDF1KYyYSR3w2d5yFhG6QiQ/TZ56R8xk9z+zP77PvhoAhYAgYAv9qBH7ebiphdYne+2S8oGP6hItAVTfGhGgo453O/M9ThCnvPkGgEm2St+7cclu726tcvnolWPmvfrfL+Yh5Ri7nefnSZxU1SOloR5AldYrc8JIFPuwl1K53UfmDde/1XE4tO/4Qat5JtBqjBqie1QpmMhTf1E1laDYMAUPAEDAE1kdAdvPchvpnwUZ8mw280zVhmSSmqoZimWWVY39D1LApMuC2LEt3PJqSx1dio/u+r5gL25e8qs9sZGT99XK1j0yI0LDwFwrHwMgP94dusJV6YR0Rjny28OVlaTeh3KxxfUiKmvb+PPdYVb5fbajs0xkChoAhcJEI/CK76XVGfLimdJ/de+QGNDDdv77vBdAWeEV6lPi+cX0X1dWlOzo6Qfwsp8qmcGkIc3Ht845YmOYiV1SLX4tu1L6Md0bb6gMY9t5uH5W/CIEzElpJah2TuCq+3YWM3Ly1hwYJYmg0bvLaI9yfklBFjivjF20r3W/DEDAEDAFD4BcjQNgb+yk7ev5HOUBnRPIKx1Q0fvDBR64OkXwf9rzm0xneEFXXvHN7z93c77uHxyd4pekPhkgUt1a6Rswz8otXxit3byeKQ0kS90hi3aEXTchGKElULVnc0hpRT5oMSfjBIPVCaArfRLhGVFLWCQvciJFLkSJu5zZ45U63fWBDwBC4RAjIbsp+yo4+k4THK1Iht3B6fIaXuueJyHQ6x1G90oNacAUpvRHiOF6KYbjd57En3sN9iT7a2lM5J2FrP8EOvJoIZF2KxVjkWxCRLmxc5WPoqbplXvmSMgVk+v0EIhL7zRJ1Y4hJFzKyyhuBsvjkVvyDNgwBQ8AQMAReAAHZTUnCezuq53GHeoRNxhM3GY3dW2/fhqh03JNHx3qA8HnHh9MfHU/cmMrHmzeu4bXOeCIXjnp+C4eRkRaetE1NOYWEbA96bAoa3uENkfzwfLHwtxD2Pej3ENRJ3aNTSsogKR2E/hpcg9pE8qAsqbAxMrKps2OvawgYAlcVAdlN2U/vicaecm2HDQ7cdERJLwTjzTs33egM2ffPH6M5kpO8GtNR3bkno4k7mSzcDhWPFSH2xQxZeP/s9iFlZKR952wjM06omInU6I5dIWW/GiKSU9++zAsfopH6qhrkLevIfffDJ8yBjYObUC2tlSWS07tmiQ6Jwjs2DAFDwBAwBNZHQHZT9lN2lEJGBnKSeKf727tuZ2/g5kuSUyEb07OxG6MvMp2jhL2oKOXlFmCrscUNHpMA262XWP+dL8+R9pfj8pyLlz6TnCoaL5gDwZhMSpdrsVM6JuJx7dqATbHlfv8PP3Qlm+Irb12n3p1VT16JWLwn863cAi8ddpuAIWAIGAK+dFd2dDX4AXLRI1dk5/oB3umKXjVK8eSijwtFeVFEWHborN6HyHz08V33+b3PvFL2II6Js7dvWAJr+87ZxmbckEUVkUA1oox3RnhGMiLXru26Ln1parK8/8kf/cR9+vED95/9J3/VJSizSpfEJ1vJx3h+29js7IUNAUPAELjCCDxnQ8VJKlwk08mM8MuS0PjSHT984O9LEKfc2er78PmSBNbZeOoqFFm3SWCdj3PXSUgoaWFpr5GRK7y2X/SjJWmCq5AMbpotiWz0SFjN+pl7Qo7In3z7U/fjjx66v/Hvfc1dPxi4e58+cdu7AwiJOddeFGc73hAwBAyBL0JAF3sp1Yqf/OieOx0tXESeiL8AxH2SEo7pYa9jcvgi4jJ7e0MSXc/cyRmh9TCVO7t1w8hI607Z5iacxSnxytBNaEm9R5yyZNH/6Z9/7H7048duQfOl3jBBDG1An5q5m09GyA/fJIM7dSEJVDYMAUPAEDAELgYBXeJFFAfk5OztXN9z48kDiEmH8EyFXa7QfaKRKQmtiwJNbBRZ88Uc3RGUWZNUPWxa+XfdLmsvZu20/lWWJEAldIes1X8mqF3a77uzaenuPjxzx7gCj1n0kh/OcBFOJ1M2CQVkeEUGPRY/LN2GIWAIGAKGwMUgUEE6Tk7H7s//7Aek5AXu1755x8vA1w0FBaivlujHF9jsfDpxi8ncxd2e+9bvfsu9cftasBsHqvFt3bC/Iq07ZZuZcBTHgTKz9w+G7jd+4y13fDJyP/zRA/fxw6l7NKtcQgLJAaqr3V7slnhPaOXrCjaGNoXPXt3MtOxVDQFDwBB45RAoyReZUMJbY2q7w667fvu6S2hWWhBGVwwmpH2HtEb6SMKnkm4lnzWoCslDqSKSr+0brXTntA/myz/jqG6CPotbWiI/uXvivvP9++5H947diAZMcRS468PI7dPRVyJni1nJoseLQvVNXZcqprFhCBgChoAhcIEIqBHpIReH07OJe//xaNUz7Oahu0Z/GhXM1ITOCwTP1CTv9OjU/fD7H9GjZvJMwfUCp/KlvJSRkS8F5sv/JuSq0rK6dt/78HP3yadH7rNHJENN0RYhY2oXb8j+VuZu3drxG0IiZxFlZyVlv8r41u82DAFDwBAwBC4IAWxqI8ERPM9z8kPORjMUrzN3HSIipdWQELn6hG3v9Kl8XOKxTtzO7raLTtAjKfTE9g0jI+07ZxuZscrF7h2N3eP3P3MjYpAP8X6gweNu7fTcm4cD95X3Dt0dtEWOH43ZCEyhKSEjJFNZM5qNnA97UUPAEHh1ERCbqLGvMxqUYmhdiAd6d3fP7e5vc4GoRxu3tbPl3nr3Nd+fpktVzXtv33JHhNQ/+OSolcAZGWnlabv4SS9Jijo6nbij0dxN8JDMuG0jqPPmjR337p09d+eNA9/BV6W8ZZW7Avn3sMOmQPTsZx0jrSTlFw+ovaIhYAgYAmsj8BftpjrVFDTKk33dHvbdwfXrvrS3hpwEhM5Duqlvbw3dcNj4Tr9qtCfvSVvrCSyBde3FcrUPPDqb1Sfj5fH96fL0/miZ7/aS5k30RL6OR+QrX73pYvoknNGUqU+4xq989a8hk2pFRJTvLd0zbai/uKmuNnL26QwBQ8AQ+FURkA1d2dFnr4RxnU2nbkoY5vW33nT7CFCWXDTmKGArT2SOGNqc0t+C3L28yDnujARXFRWQ5drCYZ6RFp60TUz5Tz/89LPPT91/TUPqmzd3u//Nje3+a2+8tts5PBy6AC/Io8djuvZ2UShGDI0ysm7SdY8hJ3PKy2o2jfrWRHhK2hmt3ASi9pqGgCFgCKyHgOym7KfsqLqn6yKv5AIQF4i79cY1d/vODTefz31en673ArRFAsI1+SL3WiS9bohQ5Z6bLGaumOetbMxhnpH11sqVP+rjU4fgsPvfyGP9g9e2utGtg37n9s0dysYoJ5sXrk8336oK6Bw596EZ9aRRSVnIxulRhXONst8t1FpzGLsNQ8AQMAQMgfURkN2U/ZQdlT1VPEbqqt/8xjvu3XdfJzSOBwSO0UFWISZ8HoaosRKmkVdkmecuyzLXpRKSFL7maExNcAuHkZEWnrRNTnmrH/2dnW5n59b1AaW8fUh45BZLCtc7iauIYZbEMCejsZuMx/wesylCuv12vDpgBKtvaLJnwxAwBAwBQ2B9BGQ3ZT+lsioRyQb1VTUpjemm3sUTvaCDuqoWGx7LspRmebUXRZN35PD6jut3Y8gKF4q8DpyllUbYyMj66+VVOPIbX7u1/bdvXdvqE6tBOadxY5JaZzDv0/GpG6H2V1SEZUJim6jrDPCMFCgFTuZL+tdMkCjOUXG1yN+rsFDsMxoChsDFISC7KfspO6pSXYVq1Ctsf3+HFD3lksRuga11ncormt395J77+Ed3Kftd4CEJCd9wqVjHNDktgtsH3f7FzezLeyUjI18e1pf+nf7N9679vW+8ebj/3lduuS2yshvaVEtLpKaMV9LDXcp/U3ofdLtDPCK1g4x7HRLFO6fUAc/ZEBGxTBuGgCFgCBgC6yMguyn7KTuK08N7R4Z0S9+hAd6ipBMvhEMVNLLHD58c871wuzw2GA78BaGe0xDCqblIjBIObOGwy9gWnrRNTPk/+t1337k26P7O4c3t9PrhDowbdk5csktiVEVopkJxNepErvaJqpGLBmwCXIJq0iQWr6GvSryyYQgYAoaAIbA+ArKbzzMIH/6mV9ij4xMqZWqvfJ1V+KqTjHDM0l07wHONN6WmoEAVNZhlQumOggIk4ZMuP43Xf/NLcqRdxl6SE/Gyp/GNdw4Odnd7aX+YeZn3QZoRs3RuNJ77+GVK0tSCcE1d0qK6XsK+6SBZkvnt2ceKgejrU17ysj+Ovb8hYAgYAq1BQHbz+es4CUtGsIslCSChepLi+dB9BZ6RPk1Mt4ZbeKYzZOHJIUnxWGOvVe57fDJzW1nGke0bRkbad842MuO7R+P8hPhjj4SpmGTVTz4/cT/+9CHuwMpt9fqo/NW0ryadNU6996MmhJOmoa+mUb+aAXLEXZi6jrdhCBgChoAhsD4Cspuyn7KjiRrfMaS02oGBSE5BOSGLJXkhqp6BdCgso+SRSB5rxM5qyoB/+CHq2adTmufJR9K+YWSkfedsIzMeHU/y0XTeLEie+vizI/edH37qZeF3tgcu7aa+iqbDJlFsk/WP8GoDK2ejEMuUzoiki5XJ3UpKvhFE7UUNAUPAEFgPAW83sZ+yozVJePKUKPwdQkZq3CKysSUXgFEUcR+vSTJr7dVZK3+swjQ5eSSh0kWInK/3rpfrKCMjl+t8vLTZlIuqzIvC3Xtw6r7z/ifuweMTN4CEXNujFwIbgKQo16WkbBWbZNnA2mMIuOThtYi0aQJuPmrz0j6FvbEhYAgYAu1DQHZT9tPbUT997KkICf9qbK3qafRPPcRiLghV+itvijzUksIOqHAcDtAo6cfc307pSUtgbd+63ciMwzSMQ1SF/+g7Px7TIXL3t3/9rey3vvlWMKCd7xEtrPfI3FZ+CFLDKI80vltvHCUrT4lPapXHREVoNgwBQ8AQMAReBAHZTdlPhV2858M/WQLxq+4bATa2g9cDuuLDMkWEulmhlhzokeAlkUNkSAUkIRq8JkErY+XmGXmRFXOFj+3Uwc5kuvzu3dPp/9zrdh/82p2b1cHeli8bK/CYQM6JZ/aJZxKfJImqYhPo50QVNpBzKQGq7KyV/sErfF7toxkChsDlR0B2U/ZTdrTyjg3REBrg4S2JOrG/6Asp28XrgVdkpUESkWPic0nosL6YLdy9u/f5vXRpXx1M2zfMM9K+c7aRGT+a1w//xb3P/ib8ovz6nTt/+8a1LSkP+7Ix7yokgUq6fklI/kics/gLz9rLpvKbRw/LY6iwjblHNnKK7EUNAUPgiiIguyn76c0s3xWgabivI4NME7wGO0ttgTumH9hkOvOP4RfxvWz8RSFJrL2s9J6VxbJsJRkxz8gVXdwv+rH+n+/e/fHpqRvfCAf/y9feu/3awbWdgOIZSslwAYqBw9qlwLokaSru9OifgPwwBKQsGtfPYne4P3RbWz2OK170re14Q8AQMAReaQRkN2U/ZUcHXVgHQ1LvBRoiObcF/cEiyEmM06OAnNTkiUhvZMljIaGdbi91N29dc1s7W246XrTSCJtn5JXeAj/74dkLv/nVO3u/c+vGQbqsQnRF1PRu5SpMYjbI0yRV6Y00MBU1y4OFw+hxHTod28o98LMg2G+GgCFgCLwUBORtLrmtQjSU0OBuLt34bOoePzr2Ca43Xjt0BwcZUgu5G9EjbE7143xKvgmekwZCMuh1m8+fPGllzoiRkZey6C7lmybvXd/+H998/WB/Z9hzx2wAqfklVNAoW3uZL1xIvXtK3kiJPPyiWOA1YfOQ1a29U9PRV119lfVtwxAwBAwBQ2B9BGQ3ZT9lRz0XkR3FExISphnuDqigwTstO8zFX90s8ZTQmDfgMbr8qnN6Tc8wVUNGHZrozend28JhZKSFJ20TU/7trxzePsyCr965cRjLITJazolHdlxGxcxygVOEJCrFLZcENru0qy5g5k+enPoEqw6Z3jG3RJngxkU2cXrsNQ0BQ+AKIyC7KfspO6pqGp9/J90RJbRSxZihjN2FdCwWFReByMOjiN2ocR7MRQmvFeHyt+9cc5+fIY6WK4DevmE5I+07ZxuZ8Z1Bf7C3vRXs7PZo1rTEC0IBL3lQyvBWRreGF+Ehk9szdzK75TWR1ohaWwd4SLqIoO0P8KTYMAQMAUPAEFgbAdlN2U/ZUYmeyaaqSrEhb0TmN4eAlPSoKSEnsBDsc+MrGTt4T5bkjkwnc5dl6IykET4VWE0Lh3lGWnjSNjHlZT2rbm4deq/H6QwywiYQ+VB3SGnoqPcBvkD6ICS+P4I4yfbWtk+eYl84todrwsRliPI4Ypg2DAFDwBAwBNZDQHZT9tPbURlUhW2gFAHhmYBOvgkeEx6EiNS+R9h4pIqaAJGzzBcTHKCUvU04R96SMEUVrYXDyEgLT9omppzPykrVM7TldQkbQCs/YE3TpsnVhGRKYpJZmlJBQ/kY9+9sb5Fblfi6dz1RMsYNxGX1ImwcG4aAIWAIGAJrISC7Kfu5koNXWBx9EXp+BXigvQgaBEXkQw1LVdnY4C6ZzXJllridQc9du7nvJvOlOx0tXKSWvy0cRkZaeNI2M+Wc2CPywhASyb8TfIGW4yfkjhBXYFlTYkbadpykLkx6LsBbKPeg3IjqmZCrqkYxTD3HC8RvZpb2qoaAIWAIXDkEsJuyn7KjvgcNZKOgMV7oc1FlU6Ed/I/o0tsjPK6meSnCI7uUQMo7ckKDvONTvCWIx1/b6Q/d56etg8jISOtO2WYmXCeJtM1Y8CIhJFGRCyK1v4LN0UA2lDdSUtKr+/X4bLr0XhD1ZNJjuqk/gm42DAFDwBAwBNZH4Nx2ejuKfVXeyAK5kApvia+WUVycEUh9Fd2nPn3DUvJDBhCRHGLy8OgEew15CcL82rDfSiPcSnfO+qfYjlwXgWIZNEpGlVdEpbwK0KhQt6S8d4ngTkI1TX+4zYInmWqxYKNQbdNFphimHnPL0tV3tsu6b2nHGQKGgCFgCHgEqEg8t6M0mmnIXl1y8Tcn9NLrdb3GiGzrEsKRU2Aw6CV4RmL3+GjiPvrkkTs6njZ5Xp02dfmn2zuDP2sjqOYZaeNZ28CccWw0I+KNCsf0+l03mky9F2Q43PHhmGU59QqAFWzk0f0zt7u3767f2HdZnMLWx14RsJLmiJGRDZwde0lDwBC42giQsOorafBEQ0RUrjsmJ+R0PHd7166RB0LFDF6SBUQkwlifd1Hvdrt4SGL3/kcPZ//0T3/wvz6eVL/XVpyMjLT1zG1k3jWKfgukhXt4SGKaLrHwSVbtZ0MXLzru+OTYKwFKf2R8ckoyVR8hHnrTsIlUC0/Fmc852cjU7EUNAUPAELiiCChXT/ZTdlR61h0IR5eI+INP77uCJnjvfu0Nn7h6pItEZBfmeKu3t/vunbduuq//2k331a/cco/mi+Ldk6b7/927N28jTBamaeNZ29CcA3WHZFOMxxPyQeTlQGuE32sSq0o0RwrU0MTaSzR1trd33O7ujk9ulXqgklYD5Y2Q7GrDEDAEDAFDYH0EZDdXphOJBOxpmkTu9u19995XbroZhQMP759Q1di4LXJTF/SmefDwyH362SP3/R/ecx9+9MDd2Bv0/9v/9N/9z5Mbyf+w/rteriPtL8flOh8vbTazIoBz0BkSPZE47hCaQXaVkI3CMidnY/fo9Iyy3trduHng9vbYEJCU2ZzqG5X0wlvUp0bFNCqHt2EIGAKGgCGwPgLyhKzk4OUioVKR4oEzigSu3bjpfuff/hZhmdSd4RWJ6BG2w0XgtYM9t0dTvJqLw/sPT9z7P37odvuD4X/3H/+13/vv/85f/S/Wf+fLc6SFaS7PuXipM2GNB3mtKprERRlCO9MFdewzNshKflhFMv2tHUI2oYt2YzebrLRHxD5q3CeSKK48MeFAyxt5qefS3twQMATahYAqFmU/vR0lZhNQ6qscvo/f/8Sh9O6S4dAdvrZP4UCJCFrgDq/veStbcLGoRqWPj0bu6GTm7j48DU/OJu+069OvZmtkpI1nbQNzjintVdwyomwsCLl1IpJZySGZTSjbjdze9q4XAFTjpgX6ImkWE6ohl4THlFeSJBLnQZrYK6dtYIL2koaAIWAIXFEEZDdlP2VHI6pp5GWWzEJTzN2/+PY999bXXuN3vNRHZ24wlOBk6u2ulBZIIvGoHE9z98HdR/X/9QffvdtGmCxM08aztok5j9EQYQdUhGaGgz7iZjRi4l8IKUnpeeA6Nb0PyClBEXA8OnXjKV4Tyn4J1Hi3olomTPOKKhy6SdowBAwBQ8AQWBsB2U3ZT9lRlCS9zkhOjl5No9Jv/PpbmN/KffTje4ibTSAllD7iOZH0SIgUQ0RFYyfOsMfk83HrhPGKnaz97pfjQCMjl+M8vPxZJKqEqWHbiW9PPRmx6FnSw60hde49Elmh4LhO5DIMWfyEOJEkZtqEaFYKrCi00sJa3hQbhoAhYAgYAusjILsp+5lzgSd76geEY1Y4pN4P3Nl46nboBbaDPZbxjSnnDemHJxn5Qg1NYTElhKWA0OC8bmXmnoVp1l8vV/9IlrDKeSWqo6zUlKSplJUtJi4arixvxTZ7ZHR3GmKXup+bvkk5UElYNgwBQ8AQMAReHAHZz5UCK8/VRR/2Nkf4bEJ1YyfsuAwvSCUiQmzGy2XL9vJ7QhlORtJfTNdfEZq2DiMjbT1zFzzvIggaNZ4+OTqGdWfELkVC+M99WvgB8cwaQgIXd91uRjgTLwohGz22aupEJIdjVmW+Fzw5ezlDwBAwBK4wArKbsp8SwOYbeiOyqzQk7UcQkrnbv7ZN6JwuvVnmy35VwahcPUywHz1C6DVFBBKtREW7lX/X5Wi3YQi4Ah6h3NPpdO6rY0RBVDam0My5x0OOD+WRLOniK5YSsFnE3tUvQf/0qPlGbDEZAoaAIfBiCKzspuzn0394PWK80sNh19G812X0oEl7KcmrfWwuA9vsW3GQ8FrUy/LJyfjk8fHZaZZGwfaw28q/662c9IudZjt6LQSQFVGXyCjpejKicE1dlZ6th7gIRULYAS4vkSg+Q4CH73IXin2UsJickjOJocnNaMMQMAQMAUNgfQRkN2U/vR3Fw9FBMqGfdbC1M/fwwRPy+JZ4pPsUGGBvISKShZepVdfeLMvO/vCHn/7BH37/7j/u9+NPv/bOjaP13/nyHNlKd87lge8KzYTYpGsGLPgursCIEl1chlTSxCgBqhvkHG+I6uAh3pAQDq0KmlWLoOBSZIPAYxBFw7WoBJLV3VcIHPsohoAhYAhsDgHZTdlP2VHZ04TfO9x+8vmpqyZjYuA0xktTt43QmUbNQQsk4V873He3D/dGs2X5f//df/BP/v47t/Zu9qv4eHMz3dwrGxnZHLateuU4SZUQoqwpl/ZTl1RU1UBARmdT7xVJCEMu+Wm2UAG8QjSZK8jgVh8FcY8lm0PZ3Ip3qtrXhiFgCBgChsB6CMhuyn7Kjsp8imzoAlAClDW2NyVBdW8f0cl+7OaUASO64OZ54T57eOre6Ozd+fd/69f+q/tH1T/6n/73//fueu94+Y7Snw4bhgAMhIiLIiwwiymyw+Pp1J1R3ntyMnJnJ2OXz+gaOeY2m7ut4cAN0CIpCeM0bCA9yQdnyC9R7xobhoAhYAgYAusj4O0m9tPbUZ5WoPl0Sv5eQ6ZqGCYOKTQKBrC06CnEaURoJqJ1R0RZL17reRkmYfbazf30767/jpfvSCMjl++cvJQZ1VVYNRU1MhCMCoIhldWAeMz2zgARtAy2LjXWmUsJ0SRZ4ibTkQtFRJ6GZFR1oxQSNdazYQgYAoaAIbA+ArKbPgXv6V/kEIMqb7TSWXf3B25rf0gD06nXgKp00Qcp6Xa5guw07ujs1D0cnXa/9Y23/vp/8Ne++Vvrv+vlOtLIyOU6Hy9tNvmCXjSwcXwdbpiSFBWHLmV19Fjwwx3cgwjubJHZnWXpqqvvgpwRxXSeUvmaDSKxHiqEX9pnsDc2BAwBQ6CNCMhuyn7KjmpIwylBgLLf77oDwjMH17bQd0LoDJPbcEyEpohKe3X8bCGv9cLd3M32/62v3P4v2/j5NWcjI209cxc970xxSsTO8HbIyyGnR05OyFKeEh/FhKhIq1huQ/7tHuyQ3IreCJU2Sr7K6GkjJq/uvTYMAUPAEDAE1kdAdlP2U3b0XPws68Xu9TcOXNZVp96e29qmzJdYTQ+dp0gxdYoIOthmEZcndFZ/8OSs++4bB//h7/2t3/0b67/z5TnSyMjlORcvdSY4/FzM0pZ7UEPdetWNVyVnEa7AENZe1iVxyszt7e66gOL3DmEc6YxkxG4OdlJ3bTd1/S5iaTYMAUPAEDAE1kZAdlP2U3ZU9lR2t4cXejDMVn3waMeRJT36hNEgDxMrDagKm6zjOug95cuSHL9F8IMP7w0oPPjW2m98iQ60appLdDJe5lRCErSbpGliVrpyQgLCNAF9DmZ0gpzRRE9MfJvE1YxQjcp94SquQwGOwjSK1MhbklB+1uMxh2aJDUPAEDAEDIH1EJDdlP30MpI4lyXzntJ/ZjDYQk4BTRE8IHUV+3Yd0hjpcmwHL0lAook6pyd8VxLsv/zwXtDtkeTXwmGekRaetE1MWfxBTZciwi4xZWQRwUllcs/nCzeezHyPBLkL4SjENgsWvippVDnDzsGDIk/KjE0yIpfEhiFgCBgChsD6CMhuyn7KjsqeaoTYYOWNxGkiIWzuJoTOReGygJiEVN5wFSg7HaPCqgqbgiZ783nRoE/SypJGIyPrr5crfeSSDCrlaMvP0aHhQQemjSA8gmcF5WPqJFnSrprHIB9lSR4JN1XeaEiBVUlUs8XcLZRXYsMQMAQMAUNgbQRkN2U/ZUdlT/3AHEvynW4b2FvdR16JQuMqu5Gl5n4ltOJE4WfadBC2aXhOojtbONo56xYCfdmnLL9eHRKHhGRoRHEK+SBcw4qPydrOyORewryLmlZ5LPgC74jPcmWnFCIjsHq1vzadEQ+ffTEEDAFDYG0EZDdlP2VHC0iFhlRHJBGvihnJLdTyhJDgOlRTPN2HE6XAXi+RYUjwaHfxjmCNXdnSv+qWM7L2crnaB0I8OixwhSxh38QuYdeSgVePGjWB7Pd7kJAa9l24biSiokTV1fLR1lGXSakCqvOkWLsNQ8AQMAQMgfUQWHU814VewA0Tyk0e6YdHY3JGIjfoYWtpz6GqGyWvFrm801hcOpxmCZojaZfnSJgBxtI8ZTPrvfWlOaqlHOrS4HdlJkLuahCTNaXM7LomdrnMWfDKaqVrL5vB7w7ICA/jEcF9SNVNJAU0URDWf8IXSt/9Y1cGFPsghoAhYAh8GQhgU2U/ZUe9jfWXdgrLYFexsxEJrqtu6Y3b3elzccgFoY/RcAEIGZGXOuBaEmvtmmUpS9y6YZ6R1p2yzUx4Vi6rQZLi5GAdkwsyW0xh5rj/FKJRD2vur2HiAXkj8pzUkBHlkYiM4DV0233ch9TF42CB0m9mjvaqhoAhYAhcRQRkN2U/ZUclOOlFz6imuXljDy80tpZQzJzE1YKOvgHeE1XahAFdftVdHTOsfD7i7NwXuElOi98WDiMjLTxpm5hykrLGYRzz2cIdn03IzK5dN+tBRlbejxGdI9kHroK5qzVeX8I7nT5TIZubhKoBdfLDQcKGitzJ2SZmaK9pCBgChsDVREB2U/ZTdjTGNaJ81SX5IqfYYv2uZNWE0HjDDyoqUFhHpb10rPEJrtPFzJMSnkarjqKVl4NGRq7m2n7hTxXFSdiUQTCbz4nCdH2KtjwgA7RFRD7mNM+LyJhS2EYJrCoDTqEvqodXr4QcplJxk6PQhiFgCBgChsD6CMhuyn7KjpbY05qQuBJaO9jYDpoiDV7oZZnj+ZD4mXL2wpWXBDssocoa2zymsZ6vxCmpAW7hMDLSwpO2qSnXTzeCD8kQgyxZ4At0RmIyuLu4BcslTBxBtJq07jluw4ickprj2EZKmvJEpaxaGa7cFKT2uoaAIWAIfCECspu60JMdJd7CTR4PKmR6XbwiHSoZq6cluwrFcOFXUMpLOXCJC0WeE+X6lZQFF9wXxz577wvf87IdYAmsl+2MvKT51OSMLKqiTmDdEQtb4ZfIl/bCwElmlb5ZrzdAorhLipTcg0s3OZkQyyxdQKwy4PjVMM/ISzqF9raGgCHQWgRWdlN2VDddCI7Ppm52PMfmEhJH+KyDPVYwXXl7AZ6RmBB6rLA5xnk2WbgRF4g4VNRbrJVXhOd/QVp7Cm3iF4PAKM/ZDZ0mYoHP51TSSNiMRe63iNyA/LCk1HeBUmCI8E5dR2RzU9fOptDSV6vrVu6Ai4HPXsUQMAQMgV8JAdnPcysqL0mJ5sgJOSMB9ld2OYWQVIRuHj05c9Pp1ItPciXoPSV91LEHXCz6AE/RzjCNkZFfaflcnSdL9CyhXWREMmpNlrYcfZBuFcuwQ+DqiOood6RhYxTkRylvpNvPSKQi0qdjcS1qMZ1vJn60YQgYAoaAIbAGArKbsp+yo97oYndRW/AKrBX6Ifzi7+cucksIoXOT3oiUV8MOFY54TbzGE48v9GALh+WMtPCkbWLKSZNCRMIgw+vRS0N3BuOWQLxq2UPCNsQhXb2UFDxCaLgD+30a5vVQaH2Ozoq72DAEDAFDwBB4cQSet58qDEiyyG3v9AjZUNKLR0TJq6pw7ASx91oHXCDqQlBfSnL3lC/iPSpiKS0cRkZaeNI2MWUpsKqKV8QjSzJfLRNQwC5xM3WGFC8vYej5gg6+iKBlxDEVnxRjX5JENVnU9KWpaNy0idnZaxoChoAhcHURkN2U/ZQdlT1Vb7DBoOu9zzK+DVUzknnPqHBMuDCcIyUiL4lKfZVHIjKiY8RDOKyVVriVk766S/LlfbIaJwcbgGXNog5jXH7EJ1nYJYQkhHDkeEOms6kvIet1yfDGNdioWQKDRG82UenmSzHzVpLylwe8vbMhYAi88gj4DunYT9lRkRElp+7uDl2KrZW6uxRYlcE35mIwxzvdEErn8hCfCBeAEJeUME0X7Sf1rOlUVSv/rptn5JXfBk8BmIVlvdupc1T+5suFS8kHCURAphM3mVFohotQi36LUjM1zmtwGzap/CU8xtKPyPBWg6fTmcT/0CmxYQgYAoaAIbAWArKbsp+yoxEXevrXwSsd04+mgnhITkElvI0vAVYuCZU10BNJK4SEdHpdwjedhe/ou1S9bwtHKxlUC3G+9FMu4yasVeyOY2M8RgqeTO4O+iIRLkHliDw6OnKTyUhxHBY98cw0I8l1JT8s+eIB8c2Y/JLZvJW5U5f+/NgEDQFD4OoiILsp+yk7mmJP1aV3Mpm7JTpP6gFWyFuiEDo5fb58t4P3moalishIE1s5fUpkjQnb4MhupRE2MnJ11/cLfbKdPqLuoY9AUuCLpwMviGTexbi3t7fdkK69SqR6ePwQcpLTnClzKY+LlU/z2j04Xbgz2H3qm+e90FvbwYaAIWAIvNIIyG7KfsqOTharapnT0dgdn47wSmNrk5gEVcTOYCLynmCMSRWpff5IDDFBiMEXE0gQralM9OyVXkxt//An5bLupimLHvcgwTs16lViVI7gWUksc2dr1127fuBiaPf9hw/ck8f3ff6Iz2z1H16Fv5Yv0vZ1YPM3BAyBl4PAyn6uIixSvb5OzkjWy9y8nOE1wb6i/SR7TICcHBLvpPbiaIUIShC5HqGbgOMI3rycD/ArvqvljPyKAF6Zpy/QGdlddd09Oj2lG2TheyD0EdJJENRRbbvcaAfXbtAVcoHyauGmJFuVqiKDqCewdTyIPptbv9swBAwBQ8AQWA8BVcHIfsqOEq3xo8CQThfkgdAgL+WW0dXXFUjDY5sLynsVnikp543wTncikZjAdQndjNxkvTe9ZEcZGblkJ+RlTSdGZVjxx0ppI8Qnc/oclLgFJQnf7dLSF8atRk6ns5HfHHsH++SUsHt4mriHrzDTT6o3WMeADQAAQABJREFU0x02DAFDwBAwBNZDALvp/52bTwxqjH0d9HqQDfJE8H6IbkRUC6hxHlXAvspGYpRIVbo5IR6oCcdGtOto5zAy0s7zduGzpv+M1noTEqPp9fq+fbWk3nM6RZbjHF2RnkvpS1OVE7wmi1WIBkbOU7xUPOkk/rtIiQ1DwBAwBAyB9RGQ3VTLjXM7KtOaESvv91PupzBgNvcilEoMSdQ8j7/cFd7pHO90U1H1GOOthqEskWIYq29HC4clsLbwpG1iysssaxbLOpALMKNePcMbErJD6J1HXFLCZoUbn068IuuQst/JjHpfYpjPD7EZG4aAIWAIGAIvjsDz9lN6IQu13eAiTzLvioarYDdO8ITQekaClHVFmJyGeku+LxGk7HDxGJFrUhe09G3hMDLSwpO2iSn3Ke3NUfWbTCAc+Pm8HKuWNLcOd1D2S/IU7Fx38F/tqks2wflQaXvFzgnMNXIOiX03BAwBQ2AtBGQ3ZT9lR6kR8ENhG5RF3AK7XEE6JP8ukpKj8bTkptYc8qCkCKKpGqfSY+SQ0MKjlf5pIyNrLZVX46AFialT3IENVTTaD15amE0iaWL1gVRJWYVLcD6f4xIseFyBS59swjeFa1Y/vxpo2ac0BAwBQ+BiEBB7kP2UHdWQV1q6IpJYWHjigcw7ZKQgb089aAqIiI6XNyTFWxKjMYLYGcQFXRL90sJhOSMtPGmbmPL4tFjSIA+dYRY4LkHPRlj8tMrDA8KvKLD2k4Ts7hHCZqXrE8ZpCN2cDzlEjNmeo2HfDQFDwBB4MQRkP2VHz0dAeEY3Ja3WDZ4PDLH3PJND0lGhgAShKOMtkF6YjhdcKD69iDx/gZZ9NzLSshO2qenCQYIlGdshSVMDatsnc1yBuTpBFsjD0zGSfjXqUQNV8Yy9JoMq7EgB8Onu8dngOBU55vyuTc3VXtcQMAQMgauEgOymgjK+GpEPJppBup4vJECN0vXTrq9yVFVjvoCc6EJQndUhJCVS8QuEJ/tZTMJr5p6cTlsJjV3MtvK0Xfykk7QJ4qAJvLofGdtKmlJn3gh1v4os7VodfFnsIfXtCeI6IiUlMUptGvEPFZ5xFEz+OWp/8dO0VzQEDAFD4MohILsp+7kq4NXHkx2VtHsHe8sNiQU5rBdzdUenjw1H61+jzFb/zAJ17GN/4YgmSSv/rptnhFNpY4UATkA3nU9h2Quv9CfC0SEemTQqMdty+9tb7qg4oZqdZniQk5wOkhXfPY+HkOBY8VvI8DQEDAFDwBBYHwFRD9lPf3Wnb1zhqXFeTl5eBlFRIqsEzkhxdQmeEvWh0T95SHQ/aavudIy3hAvENG0lF7Ew//rL5WofScJUQ48mPCKRK+XdgIlXNR4SyQwjEx82Czcan8K8p+7k7GTFyAnhNMQp/fAuEn56+uvVRss+nSFgCBgCF4jAz9tPTHBIIYFuEjhTMUEDMZF9xnHNz6perNycC8cFEvFxkrrbhztuZ9BHG4oHWzjaSaFaCPRlnzL9mVzRdJr9nV03HGzBwGHdbISYkrEu4ZlMjZq8S9DhJenze0Y8E8EdbRItfTaPZ/eX/YPa/AwBQ8AQuGQIPDWhz1zLsqWSeR9gd9M08hU1PhgOAcHoets7my4p8aXaMe66wbBHXh8ERVWOal7TwmFhmhaetE1MuUt4MknTZr5goROX7FI5U0Vy/rHAKSeTK5AqM6/CqrKzlDimeifIs5jiMtyjb8IA0iLXYmv1iDcBrL2mIWAIGAJfgIDspuyn7GhG9YyGQjVQD8wpdhZRM1r2ch9MQ14THkux0RkhG2lCVZT1yi5nGe07UssZ8QDal3YisAzypqkSvH9LX7MekcCq9U9Gq88bQe6PDcAGIcU7L8kZwS0Y91ADZN8oozukazUFNysvSTshsFkbAoaAIfBSEJB3WfZTdlRhGJXwJrTmSOPUh2FCKmZkZ2PCNI1sM+TFH4f3hAi7C8ndU3S9SyVkGJ69lM/wq76peUZ+VQSvyPOTBiURitl73YELSFqVqE7FBkjVeIlVXndrN5vOETxb4g2h1Jdj0jDzn17RG3lOfB28doQNQ8AQMAQMgbUR8NU02FyfpPo0HK5axUU+901LKy4GvdAkf7ETOviqEFgKrOqejnPERbi2U6oc8ZNATnTZ2L6x8ge1b9424wtGIA4X9J1uHoSdsGoIy+AmgXTwj00gF0mHngcx8Uu0z/xAb1X0nZ+JWfJNjsEOv/uM8Auem72cIWAIGAJXGQHZTdnPlR2Vh5kQDXfmkI35Yg4pyf3H71BYoF5hCp1LPl4elQYRtAC3iqohJZWt0E4bh5GRNp61Dcz5zu+60yIMPsKxUZKvDdteta1eLp+W+bL4U0IzWZau3IMKXIqPMBdxEsUrzSmygRNjL2kIGAKvBAKyn7Kj5/29VKkoUqILwiVkJCZkk6gRHuW8FTcuHMnhy/wtijLkGLiApF9YLMPcwmFkpIUnbRNT/of/UGHImjBk4zs/dsgV8eycxKiaDO7yKQtPqGFvYOy1YpYiJAwtfVX4cpcNQ8AQMAQMgV8CAdlP2VFvRr3HQxeFXOSROxJ6lzRXioTDa2yy90aT6Jqo2oaLxCSGglSh713jYzi/xPu/7KcYGXnZZ+DyvH9GaObwbDzpLJWgyooWCVHpbgeKEnLT/TElvcreXsxxGz51hajaLKdrtdyHil/aMAQMAUPAEFgfAdlN2U/Z0fMeM+rCi0Pae0qiTpdwTeHG46kPy3QIy3RQZ+3gOYlJEUm5eAwgLHPsde5j6Ou/92U50v50XJYz8fLnMQuK4t7R2bQsyMxWzkiJK1BNmBziZzFlZOpbs7UzcLdv3HTdLqW/MHQlWamHwtxX2axaWr/8j2IzMAQMAUOgPQjoui4nIVV2VCJnGjUeaPEKFQZAS3xYhktDnxsiG52XUsAWW6GZKaGcgErIhL/oKjBo47BqmjaetQ3M+VvkoOZ1sFNXFI7JNciijtESCfGCxJKEJ4ckJ1e7YKfsXz9AoDV2x0cjOVC8NyRLqHHnVkNifCLJBuZoL2kIGAKGwFVEQHbz3IZKz0mGNQgqL3ymHmFFkSuTD0/1KjTuc0nID8lxYquypsZDUpQLSnzbGy83z8hVXNm/xGf6U+d2F6X7Kj0PkhA+IZ2Rg91t99prN9wO36W2uiQ0s3InLl1/2PcVNiIeil9GSrzym+KXeHN7iiFgCBgCrzAC4hCyn7KjqqrRRZ6Ih3L11J03Q2U1wvhmuD4idUjncTUt5Ss/N3TspYM6vy+ovmnrMDLS1jN3wfMeeq9gVZEL0hzubLu9rR4uwMqNJpSVwVLyinr2SJsgcPkc7XiCmb2tIR7CjiOJ253OKjdBvTV5qh54wdOzlzMEDAFD4MoiILsp+yk7mpeemXgPs3iJQuW5LgYVClcCKzkiyJz5EI0alRLIIc8kd3PpQGGLoS+tHBamaeVpu/hJ7x24eGe33zk6ngf/x+//c/fDT+57aeF/7ZvvuMPrOyx9mDpiO0quknckp411r7/tIu4To1dfhKhDadmK4l/8BO0VDQFDwBC4ogjIbsp+yo6eDymrSt+p10nd6Gzic0S6NC1NyN2LETir8ZjIa9JLEzwjGZU1hNJzNc9rZ12jeUbOz/wr/v363nZ3fytLP7h7f/IP/tGfjJ6MF9Ubtw/c9YOhF9+J6JuQsjEqPCRS/muIZwYrmZ1nDN7/8IrjaB/fEDAEDIFfDgEu6/CEPBteOgEPCGGYEs9HRDw8IHy+aliqVFZC5FwmqtoxQYNk5RGBzHiW8uxVWvODeUZac6o2O9FJXszvH+V/7+7R5MZWlvzNf+ff+Frv3dev86boikjwDGnAAuZORisN8zqrWvdYzWtW85J0fEmdu2SNFe+0YQgYAoaAIbAeArKbsp+yo+cDDkIH3oIweAnZQOa9k+D5IJGVQ5SnJ0MrgTQ1LVXgpqaypsFTIn/J+Wu06bt5Rtp0tjY4194nsyf3Hj7++92gjP7WX//m8De/9lZnOBiyQeAfxGVWZWYKx/AzuSQ1scsYRk4aiV/5XgiNjHA67W1wlvbShoAhYAhcPQRkN1VRIzuqoWoZlesu8oWrICRpt+dijG1dIw/Pfcrb8wqtkJCckprFYuH7iel5UJpWAmSekVaetoufNNU0xdcHg+vvvnHtr/z6V9/sQUGCuerGIBsSPCvZKCUMvULhLCBvhLxVz8rPZ0K40vUSh/hO4Mbt3AvnH8W+GwKGgCHwpSIguyn7KTu6GsrEW5ES2V9fukuenjRFOng/1LfG22a17eAHxKG4cSHIf35s5TDPSCtP28VP+hvaB1Hw/7P3Js+SbdmZ1z798e52EfHitZn5XqaUiUqlBkQJMworzKgqrDDTiAEMmDDGMPgHmGPGEIYwwDCrSY0KY0ABwgwwKJBKUimlVCrV5Gvyvehu3N7dj5+e37f93sh4KVOmRyr8XT831o7w/rj79u+cve53VvOt3/ro/QffeXj/KF7AvJfLYp24SuwSLgIZoZYdlq5yMzlAboT+VEAzySI3zWh5bdU0r3/n2CcaAobAnUZAdlP2U3Y0UW4ITERS8FK7joLY1YRnFgspYyOjQFhGRERSaPJDqwS4w4UtcTQ9wUuDpCPmGfG7164e/MrRW4uL5j8fZaO9FuZRqRkTtyFxTBERtUbIUV1VbDNQXFNPKj+E/ymsfppHMHtk4/WcDUPAEDAEDIGNEZDdlP2UHZU91VCyqnrO1CWlvXTupXkY4RtSViEsGjWeErXsIH5DqMa5+XLlCnQWVojE86rfZkhXRkaGtLe2ONf9Nt0rgm5cFFWw5MiWazCCgSgGSYdqSnhp1oTGjkp51aiJ0KXP5BYb0dpJfaY3lNxyRra4l+yjDQFD4C4iILuJyfV2VPZUrg1FYho0R6oKpsEJ4IiKRvWqaXlO22KcsdPc53YJCTk+v3Dzouop76WyYHhDP8mGIeCWXayIo6MBJMw880W7pRrlsTASOvVSROOdIS2hm4DnI8i3Jx56E0NuRbkX4Sw2DAFDwBAwBF4BAdnNm/CM3ga/8LkfklGICOFEeEPwgcBEsMmEymWDU7wpkluIMc6UFnBSiP6IQjrDlBlx9qdDO9gGCKDgBwNXN0h5RSQHnxCvRB4e0iGX4drr4d2EPA9lJ3SDqwQWIsURMRnWx5rSG56GgCFgCBgCmyMgjwf209tRxb4ZEV4P2WHiMuToUVWDxpMMcZaSm4fQWUwIp8VFLU+2XCYzMmDHkzjoz9vR5l+8O1saGdmdfXHLM8nI96jxgsCuISBh2PmLvB/rvCjYOQsjJt076BuOfdi5zw8J3KLs3Ocnpbu3R5JVxaqyYQgYAoaAIbAxArKbn5+V3o7OVy3EAo9HhC2GdIR4oUVPIh4rUTVKx5wgIhuPvEKriIxOFnGlnM6X/twwiuMfIte68XfvyoZGRnZlT9zyPJK0D2bEJPfGOZ4ReUPWYRhldAeSKCaAGZJD0kFESvrVRCySRrkjcpsw5BlccVUqqLkm9rf8i+zrDQFDwBAYBgKym7KfL0dYlH6nCsYQO6vcPYLgSh1BhLJ0TYWXhNepc8QuQ1SUz4cqdlW0qzxsfn8Yv/rLszQy8mU83uhHal2dw74rTzJ08BOqwRUYE5bpWxEUqmuEEDklfReSwQ0ZgaSwJvyCSCAxUgS0YQgYAoaAIbA5ArKbsp/e2czbek7yasLmTbXApkJCOAkU9Ygx0j3eEPWwUdNSiaV5obSGUDkCI1VTcaJIvOZqufmX78iWlsC6IzvitqdRusypCVNDSVjNAS23n7Ko6qry2dzq4FvBxgvikzFuw0YZ3iyOmyEOYjzkBg27NQQMAUPg1RD4kg3lgZrkJfHYjceZb8HhrS3koyVcnuWE1ckdaSEkqq5Z0CCv574a6Lnh8RAPlHlGXu14ucNbly7NSYCi+6OEdlRF05Ewpdp2BzNXmQx+D0gK4ZgVsUmX4hGREiCQcFG0RpuKw7zEUe4wXvbTDAFDwBB4PQjIbsp+Xke9/ZkddERZrNhUQjEUFvQdLTggG7EsLzl7KjSQFslq2bjF1dxdLgq3KipXLAtZ4cEN84wMbpdtb8Ji2FEIyVC+CK5AkQ+SoTjgOfxZEGLuEtmpSZwK6FfT4y3xTITFocWkh569b2+K9smGgCFgCNw5BGQ3ZT9lRzX0WH3AVMWoE0M1J4WS+DC4klh1UShHOXs19xdILlxeLVzZ1j06rXJbD26YZ2Rwu2x7E1YSlRZDQx37ijCMckaiAKEdDnYJ70Tkh7SryiUkuUoZUPFNLZoXDMQ/2N787JMNAUPAELizCLxkP30OCepneZb7n0vZAISEHmEoY683C12FLS6WJba5cctF6S9t24WQkQPedDo0nIyMDG2PbW2+xCADEqNYAA2kRPkhcHOYN3kjLACREXXp7UluzcIJC4IlgavEJ1y9xOblPbFhCBgChoAhsDkCspsvm049TiAficp5eaWuqGAkaoM/xKVp6uXf1TxP1TTXrWpciAuFDuuoM3QfrRr3w82/fTe2NDKyG/vh1mdBomqfjRDTIW8E55+vkvEekqKAnJDQClGZHtwjeXXi45V1WSC8M/aL49YnbxMwBAwBQ+AOIaCweE3cRqJmoimNFNEgG0pcVUuOikrG6SRz+9OM3jU15KRy+eenLu2bhEa+36QS4X8bGhyWMzK0Pbal+Y4nXbiCYFzMVy4bIarDwV+QqFrVBdREpWSkrOIyHI8nnrHXPrhJqa8a17zM6V+m91uaq32sIWAIGAJ3CoG/YjeRUsA9UpG7t9YVoUhmWbnz08LNL+aepMhrHaD9lFNtc+9o342mY7eCpMRBZDkjd+rgeMN+zL3ROPr45NQ9/vzEffS1B1TJwMhh5SMIiDK2FZJpWQw13XrFzrt4RH6JVhAxGpXY3IyX7t48ZbeGgCFgCBgCPwWBn7SbmFaJTKYxCqzY2TRhA8I0alCjpqVNq/YdtZtfrSj/XQufxVI+Y1uy+TDYbDiwYZ6Rge2wbU33X3z/0Tm1NP3z5+euuLqCiCgaCTsX4cD70SBRfLW84rkIYZ3OLdlGQmhrr4huGVpQP7mo/At2ZQgYAoaAIfDXIvATtlMWNeVK/KOhL42jPcf+bM/tH0w4GQzdbG/qZtMcuXiE0Giid/jgwL311qF7+/6+y3O9a3jDyMjw9tlWZvyD58tH56vqH59fXC2WCOjc3ztwU0Iyi9XKnZ5furM5SoBU0JAhhYsw9h0jaaP3IkDjO0iqqZ6Rka3sH/tQQ8AQuLsIyG5m2E/ZURERmVE1zSvRFllw4ifFVZU61tUKj0nrcrJWKXJ0Xzy5dF98fuFqThZrqiAlSBkmvqxgcGBZAuvgdtn2Jnwxv/gvLovRP3r67HTy7nsHLqf5I5ViLt/PSVqFh8DO65qckmQP9o32CAe+PCOID7ujGbdZT0kwssXrarTtTdQ+2RAwBAyBO4SA7Kbs59qOrj3NLSFxEYyArr2qqilXCzr1KmQeuitEzoKgcx99/W0IDCeFOEOUvleiFQVvGaRrxDwjd+iA/pv+lIsrF59cXnVPnh37fjT7sxmxSiSHKe1Vw7yMBdHQ/2BVXLrTiwvCNCi0kt4aszhS6s5UBy96YsMQMAQMAUNgcwRkN2U/ZUdjpXyoQEAXXCY5TUlrSEYLMXGcHHYNDUvRf1JVzXSSu4PDqXtwnxDOZIIQmtShhjnMMzLM/baVWS+ce2dRtPnT4zN3Na/c/cM9ElgX7vn8hINcUsQZxITuvXHr4nzqDlk84vDLunXnS0gKajtZTH7JVmZnH2oIGAKGwN1EQHZT9lN2dFl1boR3WbZVJ4OysquanmDY31CK2BQT9A1K2XhGOuzykn5hqxLigp68dEjKwEtjDw4oIyOD22VbnXBMNCZYLCq3mJfUsLcsipE72D+EiVPgy2rpI6SIe3rYpKN1Mz2mAz9xc/JMlgQ5xe5tGAKGgCFgCGyOgOym7KfsaE3DrzGEQ118I+XoQTISSIg8Jj2hmwZvScW2AZ18A/JHlLvX95AUvCp5yucgC7X5N+/OlvaXY3f2xS7M5LKjRr2GZV9ezl1RrFgMuA5xB8Y0alJTvJ7HMYmsCMeTTFVDTPQkpJyLFskgV8EuIG9zMAQMgTcWAdlN2U/fePQahZCweESTUmk8qTeNHgdc1I+GGLm3vQEh8pjnsiyhj5jCPHT0Del0OsBhZGSAO22LUz7rg2QO3+7PENaZL5Yc8Dro8Yrg/hBj14KJOeDVTG8FGWmvPYJwEd/QaYtzs482BAwBQ+DOIuBVFF78OugJWalrjScVD/CnWsSDE0MxDdXLhHhNArRFpDuSpuTssY1ITQqHefExA7pjYZoB7ayvYKpXsPCzfJq2V4siPj2fw7ipmiFEo5wRytkhI9yni6/chjV9ajoIipwjis5ogchjYsMQMAQMAUNgcwRkN2U/ZUeJzmBTOfHDvtYoYSOYwPO06eCkUJ3S41SeaWWHiJDoVcqAeT6iNFhvrjtf5rj5l+/IluYZ2ZEdsSPT6IOgr0dZ3CuhSslRJQ3y5PzICM2kuAO1AiR6VhYlkUpaOHEE4UGEjdPUSQtDK8OGIWAIGAKGwMYIyG7KfsqOqnJRhrZBCv7m9E6eaEePsI72HD01vAnKrBHGt6mx0auaEuAbMqLGesMc5hkZ5n7b1qzDNAnTMXR7jNsvhIkvl4V3B05GU1ZL6qbIw4e4ClfzS8KWHPYweN00lJ6pV4JfR9uanX2uIWAIGAJ3EAHZTdlP2dGWW+WCZGmO2urYk5IGfaeaapsUfScRliuKDC7xXF+ix9ChfqYozunzC8gKDfPSYeaMGBm5gwf23+An5TTAm9KlF75x4CZTdEYgJRVdIVuo+2SSwkdid3VKAz3KydJkJOLudBDR8Nfl+Bi9fPzfYAL2VkPAEDAE3jQEZDdlP2VHFW3xA4aiRngdHpKCogJEV1FeHRG6adyjR0/d2ekF2iPyTtM3jDPCJ8eX7vxy6aI8GaRzxMjIm3bU//TfW/Z1X/Vh0Ccc+aM0pVMvOSP8iyjplfxwWIfuHMEzhW9mM8VoWAh85oJFURDjlCqgDUPAEDAEDIHNEZDdlP2UHZVUgh/cKkdEeSQjVcsgdKbSXhGR05MzV1Ut2k88zwYxdjiMlT+CZ6Uobj5h8wnswJb8TBuGwAsEGkrDwixXiyYtBNRVcQmORgkNmUiawoX4+PEzd76Yu9F45ib7e76sTNvq6PcRTkI7NgwBQ8AQMAQ2R8BXLLL5T1pPPQ4hGjGd0fXHerUq3Nk5RATGokICdU7vyRfpOVPUv4iTyJCzyc2/eXe2NM/I7uyLXZjJL0zHyX1Kd0kXIW7J0d8h+b5cFJSQkTDFMY7TRDFJl40QPptNiFWSTMVi2adT5AzBHXlPhllYtgvw2xwMAUPgTURAdlP2U3Y0xcNxM+SVFiFJyNULCMU8e/6U7ukVIfIEWxzgoa58P7CEk8acXD4RlkpKaAMcRkYGuNO2NWVCkt/44MFsHHJIq/FShQSxXIZi4QczpOA58FXXPp2gDgghaWsE5K/Fd2oWCgRdlWU2DAFDwBAwBF4BAdlN2U/ZUSWyesEQKnQjeT/4p7Eq5+7irOAMEcohRWzZZrYX8xB/ifmQhg8ReRniEJGyYQh4BO7vZR892Nvj6Idlk8mtvgijPHd70wlZ3qRyQ1CybEwyK+2rETwLUQfUqlGaiDpcGw+xA8kQMAQMgZ8PAdlPb0fX3EOPMMWU+1JE0FFNc3x8QnUjXdORWIhFUiTXyiUjZyRLM6/AmmCzhzqGO/OhIr7D8/7aw4PfmoxHYyWn9vQ9KGlr7QXeYdx1CxmBbozHE8rNDlgMhGxCqmlwoSBO4n+VMdsd3rk2NUPAENhpBG7sp5RY/akddtWn4JHY2hLHubi8ory3ImE18cmrpSpp2CZDBG2kgoM8dROKDgrs9hCHkZEh7rXtzDl9+2j29TgJkiklvUHY0bl3zsGuBNbMZZMMJk6iFGGZ8WSM54T4JLkiWjRaPDS39pc1LdnOBO1TDQFDwBC4iwjIbt7Y0BeOEW9MA8LlnVuQJ1LSzbelrFeK1zf30YXy1TQtT3oxeFXVSJZ1gOOGjA1w6jbl14nAgXPjDx7sTdI4Dh48POQAD9xiseCyJCmVrpFyDZIgVROobGDnIiLrRSOJYsKYMBKFOm0YAoaAIWAIvDoCsp+yoyIbN0OdeGuqGC9oXNrgHdHrFSeFLSeFohyx5K/ZXmJpukPQHNtsZOQGP7sdIALvHOT7DyaT8Ww6DvYOZhAQDnwJnY1HbjIae5GzatW51bJ1n3/22D07PqacbOV/qZaB5IxFSq4jNgNEwKZsCBgChsDtICC76U/qZEchFPQq9WRDGiJN2bo55bwtyakRJ4RiKynqC2MqGhMeK3Wkbmr5qH0lTtNab5rb2Yv2ra8FgXe/Ps0+ffIsImXEdUXlri4KXIIwbxKi1JKpgIicnp27s2dPvSxxQtwy8syDlcDCkQKgOvhKDdCGIWAIGAKGwOYIeBVV7KfsqJrkYVI9uVitSvfkyVMvEZ8SGm+ocMQcY3vJ1cOVUiD/XpJTIrGzRImsKjrIhmmELWdk8+PlTm95ejkv+6pp/pXLD0lS3UM8J3Qr8qAurgqfyBrRpXeMHHxIktTBwb475FL77CpWBkPXuhgVERo2DAFDwBDYHAHZzRsbqncpNH51VboMmnF+dqHQC8/JFlduiuBkRqKqtqkhKxWVjtJ6ko2eTEduWlWD/LtuOSObHy93esvTq7Dqmq49PTl1cRa5+w8O3MEeCqu+zl1JUTRxKpErpkPkolhxn6WDd0TlZ6IgcpIogUqs3oYhYAgYAobA5gjIbsp+3oS5K0Iyx2eXvlFp09f0pIF8cHKosAz1vOT0UdJLqw7JLyS8icwRJBj26B82RQk7GaQRHiSD2nwX25abIrAsgr47SkiLatwl4ZiA1G6p+vWU9Hb0QCBKg+hZw4JBYwRGTjYrBCXl49e+kIhbKQIaF9kUcdvOEDAEDIE1ArKbsp+yo7KoykFVv5nHz07xisTugmKCOM6wyTHEBOVVdEeWnBxKIG2cU9pLhePh4YF7evpYomeDJCPmGbHV4BGgdoaeTG0fZaN+tH9ELLJxdV373jMxHhBYCnXsYxozIXxG8lSsFpLXzMMvHtyI/LeKGjueDAFDwBB4RQRUSSP7qYRVaYeImKRhRC8a9J14raJahi4d/txPtllERNU12j4f5+7h/XsuxT4/xZuShr0cJYMbRkYGt8u2M+EidG0SB11FDFLuvtlsDw8IfRGQV50dTr22SMCBP5pOqYfviF2iQSIOzhANrymnqeVqXDtK/PN2ZQgYAoaAIfCzEZDdlP2UHe24VdimRlNkibRCi9q1wjGRWnB48bOlK5bSG+FN2OSIEM69+w/cvKjd49NLnTgO0gobGfnZx8kbsQXHPlychNWLhTt+/BR3YOByOvVeXS7cxfmlO7q3ByEZKVqJi7B2J8+fk/ktmZ61R1CLxzfX85/yRkBmP9IQMAQMgdeCgLwhsp83OXfrfjQt/WakJ4InmhM/nShKHl4ekhG2OSc8I/XVyYik1cnMffH03NUlVZABZTkDHEZGBrjTtjHlB/0kbLo+TBDRKXANLq4W3ssRE6Nc0A/h/OTKxzDLakmqd83CYfG8RDxuauQHScm3Aah9piFgCBgCGyIgu3mj1aS36LF67ypEnhASb9FZUOHADM/0e+89cNMpiticAKbkkRzgydYp4cnJuUshKfhW9BGDG5bAOrhdtp0J03+XxaDyMSmqkrYNTQ0hJmqUJ72Rgjrfklhl26G+mtDOmjp3HTwBBfHQkheTeomfvHjO7hgChoAhYAj89Qj8Fbspk0oYRhU2Xt0ddiIPCXl95Ibkrhlxwe5mkI+Eyxy5+MWycGmUuuWqHaSTwcjIX398vFmvTKiWgYhUZeXUjDcIE7rxdi4fqXyMandY+ONnx9wnIDlRftT1QllzeD30gmc3bsY3Czz7tYaAIWAI/PwIyG56wUi5RDR0C6VQWkhPf7CUvBD1CTs/PadFR4zW08zt7c+ooDlyGc1LT57zfLFU6KY/mZfP/GcM7GqQDGpgGA9iunARes40COdEMHHIBougbdVvhgQpEqem+yMkiFkYEBT0Vlk4eFJ4j0gK/kLfxZdKYO9qHMQPtkkaAoaAIbAjCChEI/upbug3fATD6kMxSlSNeFHFNGVZ08B0Sdfe2iUpIZqjI4TOJnhGllQ/VoR1oq5u2o935Ge90jTMM/JKcN3djdUU72Cc+ZjjTdNHCZ3JLdiQIxLSH0FuwiCFqLAoJLgj2u4DNKweSuJ5ep12dXdRsl9mCBgChsDrR0B2VPZTdtQns+oruN8TDuc0kTQ9QuSUyewdob5KKEb6ImqON84n5JHMCJ+TKcJzXLpxGH6mtw9tGBkZ2h7b4nzXKdgQClJGxnsjF1JRs5wvaI63cFd4TVp61oQ0Z3p+Mnc5iVMPHzasF/5BSgJ5S7h4crLFOdpHGwKGgCFw1xCQ3byxoYG8zYx1B98eGYWVUxrfOx88oJImcSvCMSlekTEkRFU1erHEUxIGYV9V5fJ7x8oAHN7gHNeGISCHIJGXOAtiApc5LkE1aqKODDchS4TFEUadS8aJzx8pFyv37ItjYpQ17Jw0Km2MSiDxHIPSEDAEDAFD4OdBQPZTdpRQjXJIKrwhDVojUmNN89jF6RSTjALreOzuvfW2e+uddyAkY2w3p5FU8xLpQSEt/n2++unP8/W3/R7zjNz2Htih7w8ROJuMKBmDjFSEZjTWioC4AAlYNsQrla39tW984FKWwOX5HEauChsWDi7DitubEM8O/SybiiFgCBgCO42A7Kbsp+yo7Km6yygIrhC58kgmezNISezu3zvyJ38JImghdlrJrVzxmm/IQXsxN+eH6lRycMPIyOB22bYmPHFZ2PoysR52rr40HR0iKwTOJHKm0jM8hLgHIy+GpnrfhEUiYTTlkmgBtawExTxtGAKGgCFgCGyOgOym7KfsqIbsbcQVAqt4SZDHJickwDu9XM1xnnT0qZlAVpBYUN6eryTw2wcXZT3Yv+mDnfjmu9m23BQBGkX6kQUor84Ld3F16YlISBJV29DOOiOPZJS458+P3fEXp+4Xf/mXyeCWLLEWDBctChuGgCFgCBgCr4yA7KfsqIZucZIQmhmRoJpjc09IYi39yd+hynqn9wmZT7wia0dX05B+YdJ+CsJqsKeDRkbW+/6Nv85HfbhS3giHchr3JK7O3fxi7mOVk+mIcAwHOiJoWjCPn5z4Jk6jjOeuD33dDHYVvPF73wAwBAyB20bgr9hQyEiJGrZ6gL3z7luu5r5y92KSV0M6luIwIadEtTapi/MRrmtV3lyfUd72j/k5vt8SWH8O0O7iW8Il/ZVqfIT8D2Accg+2TeWOn564x4+eQ9Wdm5BEVVxJ5S90773/gPjlISI7+QuFQDGZG2Z/FzGy32QIGAKGwDYQkN38SdEzybovVyvfjkN6T/lsjN7Tkds7fIAEA+SDofBNi3J2iDc7Tvs+wjWyjfl9FZ9pnpGvAuUBfMcSXfcp8ccllTLLqvQdI1ckrD4/PmeRRHSGDN3DBzN3RtLqCE9JPqPWXZXx1zFOnzIlImPukQHsbZuiIWAI7BIC3m7KlvJfQ+RE2ajq0hsh/R7FOXZ37GaTqcvyMXYWAsLGyjVJEKqcpKEbZ2GyWAa/wNsfcDnW5wxpmGdkSHtry3PVAd5w8JclJWUsBKmrqpompHT3isZ5T45PkSJeuYzFATvx8vHSY9XCkSdFXkKa7W15lvbxhoAhYAjcLQRkN2U/ZUdvzudUGKDOX7odkaunooIIu9upKS/aItIj8TpPvCGke28YxOS8Bg+xzuMhomNkZIh7bQtzHvcLuAhZ2xz+EtCR4p9IhsR1six1BSTkz/7sMfkip5S08wJuQbF5LRcxdAmy5pTJp1ZOs4W9Yx9pCBgCdxkB2U3ZT9lR5e15koE9jmEoUl4lXQ87S8IeJ4a9yIi0ndiw41YXtewgVEOkJ5ntEzkfIlaDnPQQgd71OU8PRkmSBnGijrzKjKJ0VzE8ta8W/15ele5HHx+7z374hTshjyRhkYixa+gmiXo3SmDwkou3YQgYAoaAIbAxArKbsp+yo96simBANiSlUNW9PxkM0RZJ8Y6MRlLHxkPCp/cQlRAiM51khHByiVK2D8ejtUjUxt++GxsaGdmN/XDrs5ilBBzREx5xQO9ROjadTd2D+0d0hdwjIgMhYXFMZznsnVyRWnXuZHOzHKTOqsWjhSOnSHxNUG79B9kEDAFDwBAYCAKym7KfsqPehCrarUICneSh5RTjnZ7ODlyK+mo+nmKD0X+iTUdDp3XOIulRk7kjElyVdBJllDkOcBgZGeBO28aUV2RtU0/T3z8YU05WujlhmVpxGlZGRx6JnCWhwjBxjATxlCnwGgmvOE38UInZsnTusqCJgg1DwBAwBAyBjRGQ3ZT9lB3VEBdpCMcsisLlowiPR+KWxcIrrqqRXgAZ6SvsciMDHEFIOIncn7pDYjTPSrqaDnBYNc0Ad9q2piwnx9n5pbs6vXDnyxWkg+AjmdoZzfFIESGhtXNPV5cun0xcxcqJjmLYfIQ4T+DmLKRFtZaEZ23YMAQMAUPAENgQAUnBy37Kjkp8MvNuAmXj9cgnpG4ymXFeyGNYSlmu8JRgm1NSVemsXq+WkJGQst8pnusk7erqX+drP9/wq3dmMyMjO7MrbnciU8I0DUkg77z/0D08OHB/+cmPICBkbxOjTEmOOqek9/GjE7d/MHX3jzISqyS+IzJCUz1NXU4SLsoGt2EIGAKGgCGwOQK+ikaG1BtT3RC2wRvy/ntfc3t7UxcTipnu7yGzgNeEZJEWY9t3eEeoeoSZUGmTuxmhnEmShvcO8689pvpxaMPIyND22Jbme1m6/t23p323rNz3H/2JP8An2Z47YCEc7c9clhy7s5MLOkXe83XuWi5qZV21FWydOCWPRUu8m9E8I1vaS/axhoAhcBcRkN2U/ZQd9XwEsiECsg8BqZqC9hxnbnZ0hMAk1TVoruo2IH/Pi1TyDh8xh7yMxyO3l+YInxkZuYvHyZvxm3L6HqSHPjv7/sP7LhtPXFGs3PGTZ5T6lu6E0E2WJ+7th0fgoXbWoXv67AT9kZULUAHkJS4hpIXuk28GYvYrDQFDwBB4LQjIbsp+yo7ijPb6TtNxjp2FaKxa8kbGeKkTt1osvXckJnwu2iISQotSH84Z7U9ciiDlZMQHDXAMctIDxHkQU5YLcIXg2bPHpyj/1e7e4dQd7I/I3G5cjfbIw4eH7mA2wjXYuwsWxR989weuINmVcng3ZjHN8sDtaTXZMAQMAUPAENgYAdlN2U/ZUYVsJDY5wcsRxYRnDqlqPLqP15k+NTTLi1TUK++ziAheac4Ffcbrg6M9dx97XTW+6nfj796VDS1Msyt74pbnkfVZcHV5FahSRv0OLs+ukBdO3L17+xz0nZuQzHrA/ZIs7q4nh+Rs7hdAhBpPR+wSvsLCwLVIQpUNQ8AQMAQMgc0RkN2U/ZQdReJpPZBTSGiAN6acV/kjXdN4cTMFxCUVrwZ6FEB6MtJDThLJLfAZKLUOMlBuZGTz4+VOb6l8qGVR9xnN8N595+vu6fFzd3E596JnUZK5h+/tIxFfusVqAXOP3dnzU5dz8PuEVTF07y58aSHdabTsxxkChoAh8PoQEAHRaZzsqDweLU/I67yH3lNG5UxP1qrCGD3SCiIcJItwYfg3UQaJ9kKIMVa1TdzLVz28MchJDw/m3Z/xoq7aeVG35xdz9+DBvnvw1j03J5n1T//sR+7RYxRX8ZJIYEcuwZw+CW1ZusvzC79otHhUSaNxc7t+ZNeGgCFgCBgCPwuBG7vpbz0ZoWMv8goP9kZ4OvAZoDniOQaxdClf6w+3TK5C66G80UF7HU4ng6Rtr63xz/rW3XrdyMhu7Y9bm00pbTNSuuUNKVaVy7OM2vapq6rOPSNR9fnxiSNnitBN5saQkelk5C4I5dQUxYuN+5Xx45tb+x32xYaAIWAIDA2BF+zh+o6EzVKa3ykMrs7oeiyHSMfZoG+QxwOiOOvB8wGek6aq3KpauarjDQMcRkYGuNO2MeVpksWjLA5HVNHMJmM3Ilb5tfffdR999AHsO3B//hcfe0Z+cHRATokYeQo5kSjPmodoDekyyFWwDUDtMw0BQ8AQ2BCBn7SjIiJH2NorShN7wuJqx6HRNSsuNM4LISroi/SITrYdxCSIISrqrr6k+OA6hLPhd+/KZkZGdmVP3PI89rKesvU0mKDql0Up+SE1BWO1O3gwcw/evu/Oj5fu9//F92naVLo//uPP3O/83p94CeIU5g5XeXEZJie/ZfDt6w0BQ+CNRkB288aOKlQjT4gqaVaosqb0BuvwhPR4qYModx0N83ptpJNCLjGEJE5Gvn3HioqbDkHKIQ5LYB3iXtvCnMM4jZpVEa5a1M+Ui43Xo6JypqJnjcIyH3z4tvvuH/wJr/Xu+LigbXXEJkqaYpGwubwlHfGaWO4RG4aAIWAIGAIbIyC7Kfu5tqPXZAQbLK80Z4Y+QZWsED7Pq4uQQkLGqxgMTwXY4QQ7vERuoSiQWvAZJRt/9c5saGRkZ3bF7U5kjIpZE9Acj0SpFhaeRAmJU3TolcuP5959/z6den/F/cvf/b4rWQhjpIdVXdOQM6JeCuqrUNC4OlLrSRuGgCFgCBgCGyMguyn7KTsqe1pT43t5NXdv45m+pKhAOSGc+fnQOBzFdQhRtv652IWU/SqRtW3IGak5UfSkZeOv3pkNLUyzM7vi9ieiZKkowgUI+17Asi8vrnwccpSPfcLqh1/7wJeZRTDyBCov4iKuLs9IQEwzwj2o+zYMAUPAEDAENkdAdlP2U3ZUY1VW7smzZ4hMkpvnyQbP97AUWVgls1JhE5BXIg+2rG5LaW+vi1dA8x8xuCvzjAxul21vwnL9NRzMqqp5+viZO7049+RD/Q66JnSPHz8hZtm6X/7Vb9G5d+QeP6HC5odzF9GxGh8KTfNarRMbhoAhYAgYAq+AgOym7Ke3o7wvx/P81oMH7tnp8rqahqak+mvdNT5h1Vcw4hnpFa6RrAjlvaqmqWptNEwfwzBn/Qo72TbdHIEamfcG2XdxbRETuQp1XKdojEiCeEWvmsN7R27//qEbp5nbm0583gjJ3CS7Bp6dl7V8JTYMAUPAEDAENkVAdlPeDdlRWdCEJNVDmpRenhde5Eze6m5dxoi3mpPGFlJCTl9PPonC6A1ek5XUsUVOBjqMjAx0x732aZd4/wi9KPkpolPT9GDGE5G7vFy4BeI7JbLD5/OFC+PeVZCSsihorJf4BFbNpW5D1FkDd75icdgwBAwBQ8AQ2BgB2U3ZT9lRDTmYpWXW+xIbbuUFwTarZ1jfrk8YQ4SfIk4UQ+x1W6MvghBl4MnIME8ILUzjd71dOacsbBK3xbhJWlWljDpDXp4v3FOSpSS4M4eMjCZIExPKgZvgMcnZbt09ch235HmtA6O4dkAZAoaAIbAxArKbSkiVHcW0+nB5AfEYEw5Xrog684acHHboiUQ05RVHUfmvvCW9PCL1AiJDWa9/98Zfu1Mb2p+NndodtzsZFen2uPxKkqfmyznuwAbp99gnq5aw7oRkqSwhqsnCiYlpZnnOguAQYmHQrsn/E6O3YQgYAoaAIbA5ArKbayqy9moob2+OR/oQOXjxC/WekXckUJIrhQYBomcSQ/PkBbISwk4SHt9IxW/+zbuzpXlGdmdf3PpMlEQVoqKzWhXkhxT+/mzGYmC0HPBViSAaZESrI2ZBZGN5RlT3vh7KNbm5f/2U3RgChoAhYAj8DARkN2U/b4Zk31dohkzHKR3SxUb0p7rCQ62KGyTiPTnBEksWXjojQUrS63gdNh+oi8HIyM3ef8NvqdYNMtx/asq0WJaEYDI3VZmZ/nM52N8nWUpsRS5CYpSEbpRq5UV5PHZaToPsXP2G73n7+YaAIbAbCMh+/vh0LiQETkKIfyrC5gaU+HYdIRk4iwpopD0SSgE7HHO/dAcHicvHbHOxG7/mVWdhZORVEbuj24ekguRdTHOmmLr2wGVpSIlvQKM8ZOGJS7ZkeweEaXLlicBQzi8WLqGh3k1PJjH0tV/kx4vpjkJlP8sQMAQMgdeMwNp+yo5qKGcvzyIqGitk3iEfEXl8OtmTSisXH7LhNsJLoiEbneWpm9BbzLkz/9zQrgbq0BkazEOYr5ouiYRkboRXZDkvcRNWeD4Uy2xpwLSgS++CEA4dfcdjd5/y3lWF6BkuFdaKVya+KXkfwq+1ORoChoAhsCsIyNMh+ymFd42EfjT748z94E+/7wmJcvP0WoCOgjzTMroBnpMszziBxFNNrt/hwX33EcKUfJL/jKFdmWdkaHtsi/NVzkhLNU0CITk42HfJIuWY71waU2Ez6t3l6QIPSUVFzcSVIiXdAqfievXovSLpCunYMAQMAUPAENgcAdlN2U/ZUQ0loqbk5yXhiOdT3xBPvpMWAqITwBwPtmp/Ly6v3Goxd1Ns9P3333YffeN9hy7rIId5Rga527Yz6b5bl+nqIB8jaBYgvLOkikbiZxHxSnkQ0+kUcZ3SzVkE/uC5Xj1aQ3q3cZHt7Bv7VEPAELi7CMhuXltf/yNFOCoqapLJgcuVK8KzSlqVSyRC62k0jtyPPv/c/ZP/8bfd//S//54L8gOkGJCOh6NESTZIM2xkxO96uwqDqo+pjKnwFV5drRA7m1M9Q05I1bir8zny8CduQXa3PCc1eSRN31Ba9mPc5EJsEB9R/bsNQ8AQMAQMgc0RkN2U/ZQdvRkttriuCp/Squf1kipu9tEe+eSTR+6f/a+/7/7wjz4htJ66ew/uuaKilQee6yjNXrLMN5+2+7cWptn9ffSVzJD21cFEYjpqgIC7UEp/Zydn7vjZmZcdFgEpq5XLCG6SV0XYJnaT2QwmTpY3M9RCeWkdfSVzti8xBAwBQ+CuIPCTNjTCQx3Qr4bUPEgIXmfIiaoXpQDf0rrj6++/5b7+wVvul7/zDUIzEBkYS9eGQR4rA2V4w8jI8PbZVmb8YHqQBIicrY90XISrEsn3kmoaPCH0tF7xOFDvGqSIV5CSp188d8l45YoSeeKXWMhLd7cyT/tQQ8AQMATuGgJ/xW5yhucLaxQGxwutpJEgImsEldXFonYP377nvvXN91yGSvZysXJPji/cu+/eZztV2CjDdXjDyMjw9tlWZpwHYVxyCK/o/CjCUSB8tkQBUPkiHQshpKx3Opu60+eX7osfLQnHRG5xUZHISt272Mg1I+nlTxzkUtgKrPahhoAhYAj8TAS83dRWN2d23PrGeJJ7l8fDYYf7WMrw3hudSHqBkLlOGhtOCBM81PKMiIdQXSNn9eCG/dkY3C7b0oQpT9cRvI5T1i5CTGdE3boUVjs8I0pgPaScNyRD6pwSX3Kr3GyU+4UBOXezPHCHuXMTxXBsGAKGgCFgCGyMgOym7KfsaIwHRJ4SneTVGFr1Aguu9UdUbpMQShdB+eLzZ+53f+977vt/8Sn2mkAOr/W8B0VWIyMbI28b7hwCFJHpIGYFtO758YmrICD5KPOdeX0zJshHQ7Dy8HDP3bt3RHhGgmeNXwBSBxzT8VcLaZoNch3s3P6wCRkChsCbg4Dspuyn7ChhFv/DoRWuxh732Fm134jULA8bnVDWe/zFsfv//t/vun/6z/65+79//88QqqRXWBajN4L4WZIO8ozQPCNvzvH+M39pT7wx5HJ8fA4hOXPzReFDLure20JEzklohbS79z54G1Ge2J2dXvgwju/iS+1ZTU5JKblAG4aAIWAIGAIbIyC7KftJVMZ7N+SnlndatjeCoMjjQXte7wFpCJ1/9unn7k///FP3o2cXbkUVzpQTR+Wtajsa5g0y/cLIyMaHyx3fMCH3g5UQwbprBM2ePj51j7545ubzpQ/feDchC+Xp0xMYeOq+850P3XiGFglrRDxeqSIrvCeXurJhCBgChoAhsDECspsynbKjsqdyjqg3zWy67yajMURlbZ9HeeKen567Tz77wj2hJcdb777tfu2XvukeHCBECUmp6OExG+MiGeAwMjLAnbaVKdcJNeq1u3+AyA6dIi8vF+7k5MpdXRauoHGeuvbO7u15N+EPv/8JjfQS97d+6VtuNB155h7C3tuepNZyK7OzDzUEDAFD4M4iILsp+yk7GkYwEgYi78gqYH8JiZO850LadEiQUomr50XrvvXR++4//vf/nvt3/62/7R6dXNC8tHPz8ysXk+s3xDFIBjVEoIcw5xgVM4meiZ3XxCnXJb3rTO0ZDfIqSMnh/T33yekn7vjTx+6IPgiexbO91k+Em4SkblcP4cfaHA0BQ8AQ2BEEZDdlP2VH5YVW6HtFNePl+Tlq2PtIw+c+p2+F+2Q6Grnf+kd/j/5g+242y90KsqKcko6w+sn5GTU3w5R8Ms/IjhyMtz0Ndef1iqskrlJMBiEhg1uy8HhJlLR6cDiDsQeuuCrIGXnXPYGJP3/8hNBO41aUwZ9ztUSTBAJvwxAwBAwBQ+AVEJDdlP2UHV2RO6JKmqbpfDWNYuGqj+lpkleTW6LqxnfeuedivNMnhGp6PCrvPbjvPv70MzRHCvf87HKQ54PmGXmFA+bOb0qgcgEbJ0/KTWlFXceV298buxmN8bQaRjy3XK2omJm4d96P3ZPTK1yGoi4OjwoLhYsYvg1DwBAwBAyBzRHwHmXsp+yoPNPKF0nHuQvVH2xBH7AZ+iLBxOkPdk+n3surS99l/ejg0B3uzdzTJ8/dX/7gY5/398NHx8vNv3l3tjQysjv74lZnkqY0Y8I12OHuy8eJ++ZH7+EapI31/h6NmjJKfSt3fnHlJtMZiyBye3tTt3ef/JI/fOSCeUlnX0rOSOKGzNswBAwBQ8AQeAUEZDdlP2VHlbwqzZAoSlwiMVXy9Toe4ytZN8zjvmQYDiEiB9MDd3565v7oD/6QsM5y/qOnp//d73z6+B+/wlfvzKZGRnZmV9zuRE4fXXQNNe0Pjvbd196772pU/a7mK/cFvWl+8Pkj9yl17fvEJ//ur36HxNZTGDhVN8jF14RpVE7W817XV34h3e4vsW83BAwBQ2BYCIiAyH6u7eh67qpUzEZ7yMB7ITMYCimtXe1GlPHeO7pHuKZ23/2X33V//hcfn/3wky/+5Plp8U+jtvlv53N3Pqxfv56tkZEh7rUtzLmKm/YjElJLkqH+n9/9PrcNyVBz9/GjE3dVFO5wlrq/8yvfgrmT8Y2kzqpYEa9c+iRXhWkUoqnb8IVgzxamaB9pCBgChsCdREBCZ7KfsqOypxryjqgxntSvvYpZgOckpWqRk8C/+N4P3JNHj91f/JBigrPLzx6dL/8b1yX/x//1/c/O1u8e3rWRkeHts63M+OvvHM3eenAY/MEff3L8vU8f/7Csuh8uV+0vouX36x88nIa/+asfuvcfHrrz5xfENAP35OlzR1saPIgsHf3nuY4EKxuGgCFgCBgCr46A7Kfs6HrgbY6I3YSEZhqeUy4eiaoSNrtcLN3F1YVL0Rz5+tc/cEcPiq9/WDf/ad+0/+Df/tUPP/7T45Pf/ie//Uf//NVncLvvMDJyu/jvzLcfN2VTPj3/bTKxf/fJ6eKTq8v26cP7+X/4/lt7v/4L33jbffDeOzTFQ2+Ekl9leq9opOci6t5tGAKGgCFgCLxeBBS3ITePYl94CNojXDpC4UpuzcaZe5Cjgk1+n3rU0NR0f1XWv1Fczb95/MWzx+8ezC6ZjJGR17tH7NO+KgQ+fjI//fTzR//D4rT4X57Thubf+dbRh5Np1r7/zr3gow8e0qMmo2TsCpchTZooQWOl4Ea0bEnDO6EAAEAASURBVNWvav/Y9xgChsAbhIA8JOg+qWxXyaoq7ZXcgnJGcshIllNZE2KLeW6vayVNkpZXi4dnJ2cHe23y9SEiZZ6RIe61Lcz5//zu04/5WF1G33o4/od7e6P/7GvvHP76tz58L9ijgmZ+cenLxmJISVeXZH6nrmIhfGnA2sXcbRgChoAhYAhsjoC3my/bTsiHH7zQdZVr44SHbEASa1O1FBhc8Uj/9BQd1umgvn84pRQ4Qla+m6/fPKxrIyPD2l9bn+03jka/+o2j/f/q2x++/eG77xzFGbXuZ/MFOSKnCPB07j5lZmpdXdK/Jp+N5SDxQ2lXYu9qtGfDEDAEDAFDYHMEZDdlP3+cvqr30jivb1CAV3hGJb9swG0UIfeu5NZAfcC0DZWN5O61VUWTPCpvfFe9zb97V7Y0MrIre2I35hF/9N7Rf/kf/P1f/XBe1vGj55fus0dka58u3Lyo3K99+30YOVU2ZwvCNaGbwcgjVpDWiPpE0j+P9tWRmxsf2Y29abMwBAyBQSAguyn7+aLfrrehEpGkjob7oYysj9VAV7zNJV+kQVqhXKE9ErsoH1NME3tRtKHqThoZGcSh+tVM8j4hmjTPvvc73/vRL37yoycPKBmL50Xt9idT9xu/9pH7tV94333vu3/uy82O9sduCRtvuJDPSoKVblvf28Znfn81U7ZvMQQMAUNg8AioJ5jsp+wotMOf4FHFy+OYPNYEm9tia0lkJTkEzwcvoO9ELonvv4FXJUi4QFg8hxkoGkZGBrrjXve0v4VTg8+s/uff/eF/wm3xcJb9R1nfPPz2B2+53/jb33S/9O333Cd/+TELgH41k9SN6AyZxSNPTETYU5or5FJh1UqyYQgYAoaAIbAxArKbsp+yo6E8H9fvlENEDTegJDAUkQ+qCxoqGYnQRHHukvG+7+LbKkzDRYEehLQHOYyMDHK3vf5Jw0T670FG+OS9gyz6KO3K0S98/S33D/7ur7h37u27P//BX/hGTgf3phzstQtIYH3nrftulH1M3Ttvg6WniPOMaN7kP+X1T9E+0RAwBAyBO4mA7Kbsp+yoV7S+/pVQCywzXhPREU4ESWelnLeBcrBd6Fua+pJfkZa2ptqG93XdMAM1Rkbu5KH96j/qmoiEh5Pkv347qf/hv/pLH05+81/7tjuYTdzHn/zIPT2+dONR4kK6+B49OHRxMmKRyKnoQ5quYCGcFq07WaKEZkfVq+8Ae4chYAi8sQjIbsp+yo7+uCJRYZcOVWuFayAeGFv1D4vxiPSU9Ya+RTqPFbrRRpAWhc217RCH/dkY4l7bzpzjUeT++6/tp//ev/nr3578nV/5pquQhv/zv/yRK0handIZ8vBgIiegq4lXzigle4ocfIXmiGfyPlipjHAWhQ1DwBAwBAyBjRFY2811/t2X3gTR6H2FogiGpM90wzV2VuEYH9BBJp5UV99Gr4OQREExSCNsZORLe/7NffCb77339vSw+3u/9q2H+//Gr33HPaYl9edcVjRjmoxH3oU4meRuuVy5uqpdl3fukKZ6ScohxMJYs/b1OnlzUbRfbggYAobAqyMgfiFyITv6YvCc9zyjK9Ii/a4gjdhIj0e6ZWNfDszGSnkNqbpRQz0+pC/rdpCuESMjL/b8m33nl//W3kFbVHu/+I13la7tPvv8qTu9mJOsSsmYkqVI7e6axo3GEt8Zu5imNZPJyEsSayFpkcgp8qXF9GZDar/eEDAEDIGNEJDd9E5l2dKXhrI/lJfaVXKDtOSNQDq0jbqlK0yD8VWwnPRV19dokvDisiSpZIBjmJkuAwR616f8cJqkCOYEaZa7zx4fu2dnEjmr8IjEqK1S085qWdEtUnXv0+nUZdnI5aprj+EuLICYhRHRK0F9a2wYAoaAIWAIbI6A7Kbsp+yoFze7fquIR+jtKt7nRuW/sq9KYoWY6KL8EITR9HyJByWk4uZqsVht/s27s6V5RnZnX9zqTE4WKwT82r5AWXU+X/nwiw7sEUmrkwkS8GRVyTXYkiMiyeHQZ31rymsqL3aO89A8I7e6F+3LDQFDYIgIiGPIfsqO3jhHRDBEUgK8HwEJq65Zv6YeNd49QiM9NoeY8IvZRpU03PTzBeJQAxxGRga407YyZfJApKraIfkeQ8f3pxOfrZ0Tq0wJycRJitpf5WWHEwR2WBcweS0bMXVREmKY1/f9E3ZlCBgChoAhsDECayIiT4fPDnE1t63ICB6QMEX4DF2nri6IopOkmmQ+ZKOuvQ6i0kFM1FBPvpLFEu2FAQ4L0wxwp21nyiRIwS1aXIERin8pDfFyCEhDAituP9h35xKEzpIsducnl+7psxPIOQsB4gIZ9+xdNWj6DBuGgCFgCBgCmyPg7Sb203tBbs7x4CUdCSPKDWloTtog/S473GtjJfI1NfcJ0ShUw8BP4tVZm+DHxcH+hYFcmWdkIDvqK5kmx3RDYtT+DGEz1azTLbJrOeAhKKuqRPEvdPtU1lzgQVlcLd2KxSHVP8i7Z+St2PlXMlH7EkPAEDAE7g4Cspuyn/JsrH3NPCHSQag80EWxGIiHv2WbFvus1NWQbr4BOSU4RXyV40oebrlIBjiMjAxwp21rykqWavF2lFVBWIYDPcAt2LJAyNKW41BN8bqgcykJrZMJVTXkbGsRKZJZ1T2LAa8K29gwBAwBQ8AQ2BwB2U3ZT9nRF34NTKm3pwrVQDzEMdSrpsE74hNFcIV0EBQliwSU+9bVikqaktw+b5Y3//Id2dLIyI7siFufBh0j+6L3iasN7r+axk0xccoQQR0d7Rny7ylhmwovSYp08WiUQUr0Oi+vGYlfH0ZFbn1P2gQMAUNgYAh4E6poy41bRE+IbKi6hqrGHo91gP0NIgw1Z4HrpFa8KOrqi0elgbD0AcSEZL5FLbYyvGFkZHj7bGszVo16CMOOIBo1hIRaX5dnGaFJOtdAShpcgD1xzWLl2bfLR9MXc9EaUrjGhiFgCBgChsCrIyD7+cKE6gEnfm1RoOWEhILab/CqQueKyXQ1t4RnIl/ZyOkiYRuFdcRhEvzbr/7tt/8OIyO3vw92ZgZyArqocweTAzdJx3hAdEx3bknZesHCKKimKckdUcnZfdRXI0I6noOzbhTiUbdJIyQ7szttIoaAITAQBGQ3fbfeL9EIHpAvQgwGnsF98kYCNuwRP+uxtT6Eg76Z8vzCOIaq8Dqbp1JZGOAwMjLAnbaVKatfr+fVAS2q0RPhAKdEzGXqxDuizBcmrvANbZsIz8Tu8HCPRaDkKr2PmKYoPQtl/VjP2TAEDAFDwBDYBAFvN2U/ZUdvhp4kDNPLE8J9nQR6AuKfX7+mk0XZX11UaBCELdvS3neAw8jIAHfaNqZMlojPAYnJA1mUC1cSihELr6lnT7LUa44kLIpsD49JSo+askb8jBimJyPXy4F1oa6Rw+Tl20DVPtMQMAQMgZ+NgOymL5h5aVPpi3Q6AQxzlOAxruTxtdhjhdPX54AqKFDOiAiJ/NpyiJA/svZXv/RJw7hrZGQY+2nrs0yQyYlyh+AZWdlkaHcshEYxSxZJw0KQ6qokiCf5lD41Y1etVp6saFVIvpicVvJLeL8XQtv6dO0LDAFDwBC4MwjIbsp+yo76ogB+mTwiCt2EnBT60z2V+HLPd/hle180418TDSE249/IFlZNc2eOizf2h5AP5dKbPgig4CXglRjV0am3aF2SwMi9KwRFVvWruXaL6EbNe8cspkkWuvkg9f/e2N1uP9wQMARuGQHZTdnP6yboOsODdVBMQJhcHup1BF2eD4VqMMm8Lm+JXurxjuBXIUSzZiG8TZxlcGOQiS6DQ3kAExZ/CCkby6HnUmGtETTzLaph2wUhmfPTBc/ThGlZuqv5fE3UqbCRw1DOEApvXMICkZS8DUPAEDAEDIHNEZDdlP2UHfUODu/xgIOoSy/sQrkjXGFt1/l8LTZZJ4s+V5VtW7zWLV3VRVT4P8hhYZpB7rbXP2laK/UHHPARnXgjElTTGJrO4qhojFdWlcvynFyRhPAMnXwJ57RUj6X0qPEMnumoqoY+e25RyaVowxAwBAwBQ2BTBGQ3ZT9/rBCyPqkLVK5LeKaXh5qnWtpzVM0KORG80+mEkDleEb1GPoncJC3ektIntW76zbuznZGR3dkXtzqTrl12aXLfjSAdCYmpaoynkaIzMplJiTVwqyWLQLKr8PGcpFYlu4qMaAEVNQ2aytAtURF067f699uVIWAIGAKGwE9HQHZT9lN29IaQKC9VZbsRd3w4RnojXIIWJRGYSd/jz1Y+H2EalfbWIZpQDVLxNTZ4gGOoHp0BQr3bU6YhXh+RB9KyEp6dnLuzi0vfeyYno+pgf49+NbmPSzbz0i3xjkSIo/UqaicFXIe+WL2E/5LYwjS7vadtdoaAIbBrCMhuyn7KjvKfoRAM+SHYV4XBFarp1SdMFYyzPSocc+pm1hU0EQRF20RoRMmzPdRhZGSoe24L8+5JgCrob1CjKSItkZTkqaZmgawo+0WV9e13j9xkb0Q3X/JK8IhIi+RmKMM7YsG0Lxor3Lxit4aAIWAIGAI/DQHZTdlPXylzvaG68wbyhEhpNcXdrBwRSn0DwjLyiqiZacsJYcc2OomkDpKTQTwpOKyHOIZLo4aI9g7PedUGnZJRM/JC7h8dkiuyYnGg6gfjLtUob9lDTiK3dzB1pXcf9m5F/FJJVJLYSdlOTpHrvKsd/qU2NUPAEDAEdgsB2U3ZT9lRpapy42iS7hNXW6+82nlNkUikhUTVjiKDip41BHAousFrglAlBpyw+m79rleZjZGRV0HrTm9LE7yyJS8ErwiuwJC07A62Le+HMrUXPE9CCfkjiJ4pSaqoXLFcxzfjqHeTUeD2R5CVceyOrbT3Th8p9uMMAUPg9SIguyn7KTuKU5pUPDzNsJJI3g/lhxC70XMdvWkqiEeoKhum0EFMpAcVkdCKMrybo5pNNGeQw8jIIHfb65903iVeW6egcma5Wrqcovegg5CQuBp5lT/H8ySwKi+ERbE4XyCERgyTx/z36oFi8lNq04yMvP79Y59oCBgCdxcB2U2vH4It9faUn6pOvLUy8rjlVcp+Ke0NJz5EI09KiDaJSApGmQdKZCWfpB/un/ThzvzuHpe38svCWcXx3dCtF5ZNWW8MPVcvmhq6XROOQZTVZTzXBopVQlJoVV339KvBa8Jy8OGZ9brQIxuGgCFgCBgCmyLQEH7hP4Z0/Q7deAkzERDYCSbXv6YyXpGVCLdJAHuR0JlscY8Hu8Nj3WGEyTBZf8jAri2BdWA7bFvTPb9sa0hG70t7SYoq6NS7nBeurvD5iXiLtnK0xCRSKeu7oHxM5EPNm24WkOam/go2DAFDwBAwBDZH4K/YzWu7qvJeBOEhHRAMtEQaPNeBuvgqJsOJo0aAVwUaQp4fXdVllAf6V32g0958J9uWmyFQLK5ajv9+TF6IckREQuQCTGDgCeViqq4JiMMkJLgSpUEIrWRtaDHwQMFLXRgQeRuGgCFgCBgCr4DAC7v5ki3FNY3XQ5Uz2FVJvl+7TiSCJhvc4rmWR0TG1xMWvCbe/A70hNDCNK9wwNz1TaWVkyJkpoWhunaFalRuRtoUXhDpiahpExe9zmO5C/Wq5Iv9BYC0cGwYAoaAIWAIbI6AJxxsLjsqPiJDqn8Ku6grbwwRUeaISAiOEf+anu84IRQBkeKIvCOyzZjlQVphIyPa8TakuBri5gtrFPwm07HLUflTnbtG1yFBXJK1DVu5KgqeCb0QWi+yorglm/lFxK0n7/5ddmUIGAKGgCGwCQKymy/bUbGJjlrdTuqqEA71nZHmiAoG6rL0zcBCBEXqckET06UbTfe91gixG7zZElsY3jAyMrx9trUZV9XcXS0WbjRG7GxFSa9q11klPjeEb9URXhUlBCR1GRLxsXRIeFILidwpbuHua/6ytTnaBxsChoAhcNcQkN2U/ZQdlU31/hG8HBGyCRH5Ih2e6AZCErMhRTOuLAu3IoTTEi6n8Nd1CFVGkJMIz3YTdIPMYDUycteO6p/z9zR10DUU1DQI6fRt7kok3yvljXCoi1+oP4Kjxl0+wCQnhIM/cFWyLYsEkVYSWmn0pNekS2zDEDAEDAFDYGMEZDdlP2VHFS7PYSQ1dxoEJxPUr2VVQ2yzPzPk7G9B53T1ChuNJm66t4/Nrr0mSc2ZY+djOxt/9c5saGRkZ3bF7U6kgl7XaBJnNMbLR6mjNQ2hmconqcZS30mResdTUqxKKmtQap1OXLcShV+TDzH6Vi4UG4aAIWAIGAKvjIDsp/eM6J2QEZXqSjqhJklVfWji0cjVi7mrscGzo7fc/v14neCKx6THSx3gsZZLZJBuEeZtZEQ73oZHQG4/IpO4+ta9DlY1xAMPSJ6NfEJrQCOmlGZ6i8USUrKCkR/653XwZzGvUfOukhwbhoAhYAgYApsjILsp+yk7KueyFLAneeJGnBwqMbVpVpwtEoJpsMk8j+GFgJC2yklir9JeKmt0XohW5WDZiBJxbRgCbgXbbikNwxfoXYHKB1E5WRRl9KuZoC+Sk2DFAtmf0sY6d/P5kgM/9l16OzKv1OgJLk98c+0pMUgNAUPAEDAENkNAdlP2U3ZUOXjyjEgI3velcQkFBrkYCl7pMdU0lPlCPjryRpQzoqpGtfCQBkmxVLGBYurDG+YZGd4+28qMOdRxBJISssI7MiYMg0vwUIwc9dWqLiDdCBKnLAYWilpVHx7tea+IHCEqNRNTL9vQnS4G2hhhK6jahxoChoAh8LMRkN0s27G3o6qqkZhkozw88vZydJ4CPNKR1FZpzyGN1YREVd8sj1C6TiCjPIewZG5BF9O2rgd5RmiekZ99nLwZW+SZq4hZlpCPpiNDmyxuqbHmGf0OICUqGUML3l1d4UGBuu9NpvAPGDqvyCdC8Q0Lgf41lZ6xYQgYAoaAIbApArKbsp+yo/KMyIo22GPJKXSorUpdVRU10hFRPEav4YfGWYIHm8cBXu2G0I4KDuJsmO5p84xserS8Adu16nHAIR7AykOSpzjePfGo1aoaIkIKFRdUWOldk+AWhLG8QEVVNQF9ayDwDq5uwxAwBAwBQ2BDBGQ3ZT9lR18e6pzeQTTUi8a7oPFA67ZHe0Rh8wgyInn4VlLwXgMKItPhuh7gMM/IAHfatqZ849vzsUsWheTe1Z66qcjoliwx/2IqaXRLAveXF45/s/yL25qdfa4hYAgYAncUAW83sZ83Rtj/TBrkUdqrl3piNwqHSxlbAXUJLqi4IILFKKwj7wl913lNUgtq0zG8YZ6R4e2z7c1Yadwc2Sojayjj9VojxCQrhERW6kWTUjHDNgWP42XpErZV8pSG1pBoipERD4ddGQKGgCGwOQIiGhjPF1xEppR4jTwg/hW8IDo5VKVjSO5IyONQ7hS4SY+tlhK2BNHQGJE7e/Pv3aEtzTOyQzvjtqcCD/eqqlLykxS8ys06bn0yFQd8g8pfRSin5WCvuN9we+NW1PZQFOWx2jAEDAFDwBB4BQRkN2U/b1pwyPvcK1Sui874YCk3VEVhGTXx9d17RWKofIzJ73uxBcRkiMM8I0Pca1uac0vmtrK00yThlkODipoYIR1WAUycMl7vOdEDkqtg4Nl1x0hNR6TFrxn5DG0YAoaAIWAIbIxAcO1llh3VUJViRfKqRCbTckW39Nznh1Apg2cENag+x3OCFwQWo5NHvT/EdidU1EjBdYjDyMgQ99oW5kxtep+xDjo8HxFMWwREUsTiFlJllZdEUvH003MpC4MNYecEdF4i4bzFhiFgCBgChsDPgcDL9lPeaDUobdolhviA3BFeDams6WuIiETPMMxc9B55rHvE0Dpa0kSUAat/7xCHkZEh7rUtzPmyLLvZaErFGCGYtvLHesj9BncHS8AzdY5+7zlJ8rGLg9ZVPUzEE3lYObc+ZvnyitrCPO0jDQFDwBC4awionFf286Yod00zVEmzDpN3PXILitYECqGH9K2hgkC2V/EdVeBwcqgTSZUCD3UYGRnqnnvN8w6Coq/6FLKRImwWUO9OTohq16vGLYsVnSAbNxmP3N4eYmcsHNXDB1oEnnwowinh1puo5muenH2cIWAIGAJ3GAHxCtlPb071O33YJaX9xogTQtRWsc2KkpNI4qtlVNIbeYVsqmlwT/fY44hKx/Wpoz5geMPIyPD22VZmnPejICTwqITUVmW81O76xCmSoVIE0TIYeVnU7tOLR66n1DeBmBwczF7MRcx+nTPy4im7YwgYAoaAIbABAoq6yH7KjmpIQ0RaTjFNSxtVMtYZfWjwiigE40/6EJzEVne8ISCfT+Ska0ucJITPldQ3wGFkZIA7bStTHjkYd+/mxdJ98O49tzfdcwWJU3j+XMbx33KQLxcn7tGjJyyHwL334J7r9ibX4ZutzMg+1BAwBAyBNxIBOUEiSmbG4xlkQ6EXaAgFA6IZUhmRyJmPktOCQ+051Kqjh5TUFcZ6oMPIyEB33Ouedkr6Kk7CMCJBNc4iZOAzL7Qj9b8eKda6ZWHgIXnnwX0OfBJa6eh7fDInwUpiaOuhZdCI2g+TmL9uSO3zDAFDwBDYCAHZzS/RCNiIKmRimpHmNCoty5J8kBXEQ2JnKgGWUraXPsP+Bj6HpFfCiYwxYZ0hDvuzMcS9toU5r8gLwUfYK0TDMnAdB30veqL7PKODP6WWfW9vSs+aDNJBDskeMU0YuRZNwraTmH42sR1SW9g99pGGgCFwhxGQ3ZT9lB3VIBLDBfVVVTCiKRJnCTkhVNEw1KZD4RlM8npDTgg7tlMnXxUgdAM1wQOdtt8ndvU6ESBMk0RhX5Vi1RzoHNQ6sFtq2b13hOeUIFWTS3Jxfu5G47F77913fKwyg7gcTSJ3fxq6gzErx4YhYAgYAobAxgjIbsp+yo5mEBPZX98cr1rpHJFKG3XqJRQD0+iwwcopUemNtvOd1VeFa7DdKwoOvuxi2XgKt76hkZFb3wW7MYEMFwieEH88hGRpr5m3kqNwBXKRE1FsvSFuuVgWXqk1QRyNl/xi6dRFEqeKFFptGAKGgCFgCGyOgOym7KfsqDRGMLiQDk4GeSyy0UnsTI06OCGUr1o5JZKEd50MsIoOpIotXRKdTA7zhNDIyObHy53eUnwDBt7pAFfJmMp7RTQi2Lf6HoiOeCEenm9xEUqCuFO+CK5CT0hAp2BBXa0U5rFhCBgChoAhsCkCspuyn4q8yJ6uW3DUrlrVJKXSNR1viBJa8V5zIqh6mesAug/r6M94RN6IGpuqwkZUZnjDyMjw9tlWZnxVjts4CHvVsicQjZwYZUqwUp0hRVACCIpYuNj5mBDNlNyR9SCTm6Mo4I0tCoDLcpDrYCuY2ocaAoaAIbAJArKbsp+yo1K17mAUVVm4+dWpq4qF65U3kiP3jm3ORmO2wXuNB0XyCyIwEW07OooM+pKw+vqpTb52p7YxMrJTu+P2JkOrAzTMJPleu141VtDzuqRbb9k4VYvpwPcHCwtmRrnZ0eH+tfeEBQT/CHkdLsP7bu832DcbAoaAITBIBLCbsp/ejipMw+OWk8AaZlEWpX+eu6hha8OIhNackE3q/SOK6QQku0qVFR3WQf58TdrIyGB33eudeO6KoCVrJJSyH6GZ5apy55dLt+I2os49IjxDoIbY5MqNJomLJcDjj3ueY+1UEBmxdDugXu9+sU8zBAyBu4+A7Kbsp7ej2FPxEeXuvXPvwF3Ol25xfkF/GpJZIShSapVnJEmlmK2QOhSkJYGV21Y5ewONlNvfjrt/nG/0C9E3IyzZ92p5sE6i4piGbRSIoC0XK9T/CNdAVLJR7O7dm7lqWfG5HPgMBFndZdG5BS7C1JRrPCZ2ZQgYAobApgjIbsp+yo7ijMZD3bqzs0t3eXbiVvNzd3W1cAEbBV2J2aXklxPEgGY1cBIX0hwvoHmp8kVW5JYMNH/V2Z+OTY+WN2E7ckJKSsOUmS29kWq1cucsiHPY93SaurOTC7d3cAgZOeD5ORJpdO+9DsvgUsGjQlLrmp+8CWjZbzQEDAFD4LUgILsp+yk7quErGIl/f/ro1B0dzSAaC0p3W4jHiAobSnvxVHecLPbY7CCkqhEb3aqXmELlazmS1zKvr/JDzDPyVaK9w9+VZH1ELrd6LnntkDQiLkneSMSC6GhRffzszF1cLtzs4MBLDkdJxkG/Zh7iIymSxHEkTZId/pE2NUPAEDAEdhAB2U3ZT9lRCamqooZTO6/pJPVVhcuXxRUhGYXMyRHxVTTSfqJ3WEKFjaP8l8ob6Y4QPR+kFTYysoMH5m1MiSZ5PVEan7UdhnSGhH030g4hC6Rpcf8Rt3z33bfc/Xt76IzgIhQjv/aK6MhXnXzNRQvJhiFgCBgChsDmCMhuyn56vRFPJSgmwO4uLy/cyeNn9KJBP4S8EBJHUL/GA0I8XeW+PkGE00gl62UktXYl1Tg4UDb/5t3ZcpCT3h347s5M0p42S2EYZJTz9hzsPUxD3XrH49xlxCSzbOTefeehD0eWJFK1xC2D5seHT0fDprYhmeqGodwdaOyXGAKGgCGwVQRkN2U/ZUc1dE5H0MZLK5Tk59XFpWuKgpAMJ35lRa+ainANYRouCqtTWkNeX+yVWrHEgzwltJwRv+vtSp6/JEFkmFjk2bmSVmlbzZOq25Xo2dFbB248pWETDfKSnPwQMr21EG4cgiLzvNWGIWAIGAKGwM+BgOynd4rwXoVtSnXpxcZm04zmpON1YQHCZvhP8Irwp7vjQpgmInSj8I1C7JKDki3/Ob7+1t9iZOTWd8HuTCCEdCg2eXF27lawcGV0S+wso4PvZDblPklTlJ8lMSycI79kxYiv2DAEDAFDwBB4fQioHUepsDd2Np+OXIx3Gue1l3vvCc94s8uVOvhKdVK5fSlyCzGJrFZN8/r2g33SLSAAz+BQj/uCZKkFin+1GjTh/lOnyDwdUU0z83LDvh+CeigogeonE0R4yi+SW5i/faUhYAgYAkNFwNvNl40nBlnN8XK80TGyCrihvVe6xC63dOgNQyWqkleiqA5kJCeJVTkjEaRlqEM/xYYh4BFQ7FHdIAMqaZSdGpA7oh4IscR1RpIblsrZuqRMfRC84Oq1Q1CSaOImdkDZwWQIGAKGwKshILsp+yk7qiHhyXGe+pw9Ka+qW3qJ11oqq+tGeQrXkMxKpWNDcmtNsUECaYnUz6OWnR7esL8dw9tnW5lxtQr6moM4xROiZkyKPSpJqlyVLIzO5bS4dpSdNZCQNSGRdPy6eZ6Wj+KV8hAqwcqGIWAIGAKGwOYIyG7KfsqOakTcmU1Sl2YpJ31UNKrSBuLRK2cEg9vjKelb5Y6okZ469laEaHo3SkmCvfmQ9UcN5nq4Pp3BQDyMia6g5IlSQtSLhuTVBhLS0Y56NMkgIvRAuElWZSGs6YiSrHAU8ljOkQg3SUKdvBbUNbkfxg+3WRoChoAhcMsIyG7KfsqOauCYpqIArScqGhNOEJU7QqMO73n+7ItT19a9e3B/5vb2UxSwGwoOeB+ekyzhZPKWf8vP+/V2HvvzInfn3qfeBp07u7ggJkk7ayTgtSymiJyNpgd4RMTaKTULyPAmaWqdS6JEVsI5bKdwjprplSwSG4aAIWAIGAKbIyC7uW5Gug5399jSrq5dsaSy8arwJ33eLhcrvCCcMJI3UrVrkcmAbSVQ2VDR2/A5LYKsm3/z7mxpnpHd2Re3OpMqHLdZSwp3B+vgUFYsMpuN3ARXYQ8TWZHU6mkHrapDckpEQho1pWGIxUuLZDbK3dGkocfCrf4U+3JDwBAwBAaFwBHNR2U/s2Tl7alO6Wq15CiXFPKu0HzC7mJoFzQR+8b797wtrvBWF3iwMzwnsaQWKEGQA5sck0EmjRgZGdQhu93JZlnsDiAgq+WVS0cjd3B4SCVNRriGZFWCmuoIGeA9aZqS+GS6JifXUwpJnIqJ8yjfxIYhYAgYAobA5gjIbsp+yo76ARvpULmWp6PkZDBOC7zR/LnGC3J1hdcaYhJxUpgptk44vaNpnggM54iuL+miN8BhfzkGuNO2MuUln8rRvMIFOF8W7mB/5vb39l1G7XrCAlHMMiSw6Ut7OzXTU7hmPRMJ9CzJNbkqSnellpM2DAFDwBAwBDZGQHZT9lN21Bct8s5AYfEocSdPLtzVxQJCEpMrEuAxQXVV7g/scEO4pqzW76shLU2nbuqiJMMb5hkZ3j7b2oxLsrIvYd3vPXjgDu7vuTiL3JLOvZIdVuhGaqwkduMVQYRHR85L/FsRm6uih8hwhx56NgwBQ8AQMAQ2Q0B2U/bzOvLtvRw4QTgBjN1kOnVdpPw8FQrgAYGIhOruK88JhEQekQBnCEoM2GouVD0OcRgZGeJe28Kcu7wnDaQLWpj14b37LIB95IgR2lkpeQr9EbERVsf6VtckSunIvx7yjvitVE1jwxAwBAwBQ2BjBCSlIPspO7oeapRHw1Jy9+5zYphN1IoDbzSkxNtgdEXUSE/aT8olSVIqcQjbyJvy8knizacN4dbIyBD20lcwx9z7Plo3ykfuIQ3xShZFWylpVU4/xSWR2CF+mUkNEGbek7ktqfib0eMy6XsWg3/HzbN2awgYAoaAIfCzEPCnd9hP2dGbEeKJ1glfRF7IHhIL8pqos7r6grV4sT1ZUR4fRjqHxSQjPNe8GUsssz248eNfPrip24RfJwIr/B4o+fXjvanvQ7MW1UHtD6+IcrN9oQ1Hug53JUyJlb8g8dcTUTnaejm8zpnZZxkChoAhcLcR8JZTcZnrIXIS4QVRzp6SVVv4he8NJk8If7UVJhcJaYnNqIdYCVNpEa30IRx/YnnzScO5Nc/IcPbVVmfKgd3L5Xd4sL9OlFKSKgd6D+NWNY2Yh18MIic8aIlXqpzsZgRkc8eI9ozwnCyHGbK8+Sl2awgYAobAV4qA7Kbsp+yoHxANSZyN0hwyEjocIY72M5wxQjhSbG2gcM06TKPmpXKFdIikaUBWBukZMTLid59dBUHRj/KJe/ut+z4OWZe1Z9nyf9SQEdWw+6QpeT+IS6oGPorXJOV6AfgQzihnQagyx4YhYAgYAobARgjIbioEflOhqJM/nQzKzsZILnRtScuZwGVh6hYXK0LnkasqlFellM03TEbypRCgiT0t2eg7d20jIyO7tkduaT7FEo5xkLhsPIFiK1a5voiM9LB1NcYTIYkpLZvQSTK58RNez5dl5GOZkTWnuaU9aF9rCBgCQ0VAdlO5ILKjGgp5q4pxSdluUxRun4qa0Tj3CapqlldXBUqshGd8Z3VcIWHmJlQ/pohSUtw7SN+05YwM9eh9zfPOUSFWI7y+J0+EmA2ifi7kohBNSzyyg6UvUGEtUAAknuMSXIIvEw/FPLUCbjR7XvP07OMMAUPAELizCEgrUvZTdtQPxc2VFOIb4tXkjKgrL2rYvCzZeP2LiNvIDuvksZgv8Jy0qLHG3A6zttfIyJ09vF/th6XwiINZHo7GmT/QJXDWq4IGV6Bq2aUxMs6RHYZ9Xy0vSZpCEVDr5jo6qQRXLZxRNshw5auBZVsbAoaAIfAaERila+Lh7ej15+pkL0b0bJRlhGMa+obhvoaI5HTmTVDGjugR5nuCQUJW2Ol5UaHYWqpR3iCNsJGR13hADfmjsoOckOMoCIlJ0pjarUpKx8iaUivrjMWQ08paC0UJrYpNFjRserkFgkh8x2tLhHtsGAKGgCFgCGyOgOym7KfsqIZuFPGO8XSUrext4SsbY+xxiBtFr0lyoSgad3K+dAs69kaucStySLyLxX/KsK4sZ2RY+2trs836PBincTgdJ24xX7mz8zOaNJUuT2jQxD91ilyvFHrUwDfasnIt/OWFV5FtnOrfnXXJ29pOsg82BAyBO4kAwXBvP3Wi9/KQ4OQIb3TASWIsFVaFYcgjqQmdNxJBo5hgNhm7bIRUPCa6gtC4kM8a4PjyLx/gD7Apvx4EzpF939+f9DlekJK8kIiDXCqrFdncBR6SJfW6QafFQOM8Elnl//BVvtdfL4GehPdkhHdsGAKGgCFgCGyOgOym7Kfs6JeGetDQB2xE196qrdzFglAMVTVSYhUxCanAiQjxqJq35/kSETTa5v3Eh3zpE3f2gZGRnd01X+3EVrSp3t/L8Yas3MX8irBMBuOeeHcgudu+5EzEBGE0JOJpa407UC5D6DwZ3M4djkK3lyoD/Kudt32bIWAIGAJDR0B2U/ZTdjTz5blyOpOkSl5IgKbIcllykijVVYXJ8UxTaUMhDREZKV9zy2PSS7ynuqvDQZIRC9MM/Sh+TfNXwCVP4r6iF0LTUscOy1bssVUZGUlRpHZDVIhJFnxhWLtJOiJGuY7caPFMCNnkJK+qf5MNQ8AQMAQMgc0RkN2U/ZQdlT2V9LtIh3rNxPScCfGQxPKcQDMade2lWED+aRURqFVHkFAOmST0zuNdA7XBRkY2P17u9Jb7KmEP41C9EMS6KWHnKCc0A+2WKGAJIVECq7rPaDF0lN9osWio1Ey6JMWqc08v6h+/sH7Zrg0BQ8AQMAR+CgKym7KfsqOypzKi8oHonJDzQO/9kL2VrIKCMDd2usJTrdYcKe5pb4/XYR5/96d83U6+ZGGandwttzOpiCxtJUyp4V0LEakbRR8hJCSmKj9kMhq5/SPJxefokKQvyAgVZe74qnUnC3WZZEMbhoAhYAgYAhsjILsp+yk7WlQK0EA4OOk7uVi4q0salkJQJHLW4LmWohOOEcLltVtSSKBy3yQlf8Tbbr3Tv33j796VDY2M7MqeuOV5SMvMBW3n21GTHBUTq1yzc6Iy0I4YFbQsz90UJcAx+SRpNublNQEX/ViROEUU5+apW/419vWGgCFgCAwHAZlS2U/ZUZwjnmCUhMifH1+5+bzAQ9Ljka7RE6GKEZIiyQV5TGRwY8IzGfY54r5OJgcapXEWphnO8brVmXL8B9SyBzFZ3eoU2VEnliRqxkQpbwxTRwa+RfxMdewRMcwUJt6/lPktPi6XImFNG4aAIWAIGAKvgIDspg/JXL9HmiPqPUMSnwtGCSSk4I91jOAkBQN4og8oNpggUCnNEdnsNIOMoNCqRFh4ySCdDIOc9CvsY9t0QwQy/CJX81WQULorMuITp/COSPAsURtr2MZyUbjT07Pr2CTZ3JIqvvYI+pbXntFv+IW2mSFgCBgChoBHQPZVyaiyoxrylEjq/YMPHri9wz13caHKAedmI7zSlPIqry+AsKjwRkQmog9HTvg8IRO2G2io3DwjfhfblUIwz04v3eUVMu9JRgLr3Kus6oD3iVTUuiuxSn1rytXCjTnwI7K/A+8rhI3jG4xYTXIx2jAEDAFDwBDYHAHZTdlP2VEREYXLR5CRDMEzRFbdbIqwGV3VU9weAZ7pWi06iI8n0hshZONLfnlvzHta7xhRBcKwhpGRYe2vrc02HOX98dnCPTl5DvuO3WIxp6698ap/5HT7FcIagZjUriLBterXcvCiKmOEd46mKQmuauS0ZvBbm6h9sCFgCBgCdwwBeUZkP4+mNfYUsgE7kZpqpV4zkI/J4T4ClCGy7w35IjTOwyRL5ikmTKPwTkEuidzXqdiM11egqnFgw8I0A9th25ruZVV2URS3BRLwxbJwCcw8Jy8kICGqrWuXwbhn0wnN8vZZDDRuooSm7deHT4lC66qscRH27t5Myjs2DAFDwBAwBDZFQHZT9lN2tERkxHtGaEyaqSEejWhW9KaJMbfymjSIT6pBnpJY5VFZYIsvSHKVdyQjb8RFw/OKCCcjI5seLXd8O47xPgxw/ZGpHZCdrcXQc9D3XlJVyn/Ut3OwNzVVM0ta6XFfi0RhG0VmdCAhHujuje2QuuOHiv08Q8AQeM0IyG6OMMISNZM91ZCqaqMwOX1pTs+W7snjY3rSUPaY0CusLUlqXWJ/6ZROgmsiwTOF0RWqCYYpPWlhmvV+f+Ov074Pe7JWpf7HmmARQDTQFyZ3FSLS+Mxuqtth7cjAs81YjZn6Gs+gqt5JboWcLFk46Ka98VgaAIaAIWAIvAoCsptLbKlsKKaUuhmuRE4Iu9RU1RwezPCc0MGX8l75nqlpJJS+QoNkhS3O3eHRjO1bPNgxYR1Z5OENIyPD22dbmTGeEDwjkA1CMmGtaprIuwEVl9Sq6BSK5HZMNjf6q1TSIITWirawcNhGcU7JFV8Uw3QR+h9iV4aAIWAI3AICspvfwH7KjiZUxuifOvLK7zyfL5CKl8bTxHWk5PUiLAigeWUFCghWhHWq69BOh0KrGgAPcRgZGeJe28acdZCPGxKkKpcQq1z3o1H1DMe2JIgJ06hTpAR20GXFI6Ko5doLIm/KYR66KazEFFi3sXPsMw0BQ+AuIyC7KfspOyp7ivYZBpmTQIXNOTEs8I7kVDQm6Imcn16584sLbHPoJtM9ZbG6k/M5+SYlYZ71CeIQsTKf+hD32hbmXHLc103fFZIB5ICWl0R9ENoW6sGlYSGoth1SzvP0ihQt99QcsoJ7sVQoR5rxcHkbhoAhYAgYAq+CAM3xsJ+yo63sqMiIrrCtIeQkz1MfLpeeiM4QJYomMhJTZKBGeuoXVswrN8pCL4T2Kt+8K9saGdmVPXHL86jDoK3ouCR3nypoJC2s5FT/T8c/8/MN8VgcDTLFaqKnxXKzZjoIjGKdxkVueUfa1xsChsDwEMDAyn7Kjq6N6voGc4v/OXT7swlej5BmeisX4UFJJEaZo8DKfXmvVf6rhNcRpOXaYT04DCxMM7hdtp0Jn6yWbRaP5froIeeBukdKCj6OJfuecKtwjcIzSBTjMcFR4vsl8OB61Yi20DlSK8OGIWAIGAKGwMYIrE/8SMy7ISPeTaDiAHrPQDTUGyxOevfpp0/JHRlDOnJIBxojstPklowmucsnMzfjfTpNHOIwMjLEvbaFOY/6SYjaKuSbwjDcf2LoqqKR4LtGJ08I8u8xZWXqhaCy3pht5CqUN0TvkQfRhiFgCBgChsCrIyD7KTvqXR28Xd3SYxJXK9pwLNB+wnFNqFxlBLGXf6fiwNtenQZisOExoctHVN1QBal6m6ENIyND22Nbmu941AdVVQUS0ImomOmXS1ejM4LusE9g5TUyulPKzFRLAykhkUqSxCrt1VAOidZGeP14S9O0jzUEDAFD4M4hILvp7Sd2FDOqVBFuQ0dxjVvhlpbnJOFE8J2HR+SJUO3IY8LqvstvQWhdwpQVIZxkPMI6D1N40juD7tyetR/0ygjg9JPKGXXsnZvkI9/jwLsOWRlqvpQSoyzoIDlfLkTCYejrMI2yRvRYCVQti0MLyYYhYAgYAobA5gjIbsp+yo56+4on+nKO0NmzU5dPE04EM1dRXJBR6ahIjkIx8kortw9FeC+rENNdvUH7iXLHQQ4jI4Pcba9/0ks+MoR0rJb0QlAPapKlpMIqZb+E+KS693ZKbE0C2ldPfC6J2LgofAkxOV2xeGDoEkSzYQgYAoaAIbA5ArKbsp+yoytf10vwRSSDkHhX1G5ZI7mAXZYUvMp9W7ZRMWMcdLTu6Nx4jPDZ3oGrkWbo3HzzL96hLS1Ms0M74zankmWwj1UYPD97jlbIyjdtqsoCxVXRFBRWi9I1hGhm9w4hLYlroxJJYoVwFJpxjuaSeFACQjc8sGEIGAKGgCGwMQKym7KfsqPKHYm52ifkcriHjoia4fX8qY7xmnCCqBYd8oaodqClPUcBAVktr7wi67xGvdKF442/eIc2NDKyQzvjNqcS0vKgi5L+8mrp5lfnuAQJyRTcn8+9CzBKMjfDIyJXWiUBNLwooRYIAwViQjsRjfVoXy3/oQ1DwBAwBAyBjRGQ3ZT9/P/be5Mgy7Izz+u82d/gcwweHmNGRg5SplKZJVV1iTagga5FG23WxooF7GkWLFiyYMGSDWZYL1nDBjYYbWDWdDclalSppCxlpVI5RkbG6PP8/I3+Hr/fuf5SkYmkkmFElbz13UwP93ffvWf4n3O++TtHOlrDSjLixiFWak/lnaL8EbJKAOuQbRUm6bTfI4CVO2wPP1U4Qf87w4Veq5dSd6M/6Z1OH/3aFf8GPRjCyG/QYPxdNmVQKk08o9f03CETu0/A6pD9RDACksvewE1D/jqzftwfsAAIkSJie8jpkErnxeVGaeS/szjiCgQCgUAgEPj1EZBu5kyaInw1b+M0GA9TG7I7IIV3zNEbw/4Yt03ivDDOqMGdw1F5nm6aKtDmG7eu5hiSZxvPTg9Phn/y69f8m/NkCCO/OWPxd96SEsKGx83U5xeQznvp9JTdVydDdvRjO2K2GjayqsnE12pS5aRIs+BzMJXvIclP8Gcisfyd9yMaEAgEAoHAxUIAagr9nO1ybfJAHYVvUqmnEw7DM1akijW6RMxe5ayaJuVBIlSEH3bDZuOzerOetg+Pps+298bk0vQ43ePCXRHAeuGG7MU1mK2G2Xx1hM+ymupzLYJX6zm9TGvJhFN8B1hKhgStVj2nmkXg4jCo1cyanAPP3woncQUCgUAgEAj8+ghIN90GXjrqlk5eJSwiNdJ4T096aWd7n7NnhgWtRd+TBJeNJeHZERaTIfF80uceu1H6dVHCxfo3LCMXa7xeWGtN7a1g8jtDsvDgxzqR2xW3GGa2n7H52ZTV4hrpI4yY5uvVNs2MHQA9J+FswiZpRJQYCJ43SON7y/r6VWaBKfXHFQgEAoHAbwsC7sc0o4vP91ka63fSTemndDS7vjET5PNn+I5HMi1WWDk5xTVDAT7j8Rw+w6/8d5OMmpp+nBBGnoc4/r5oCLAgsoRwxi8FjDLR3AoNiBlp7ITn74pBq6TODIgnadQb6Zg8eI+szovDDlMCm8mn3d3ddHx8/JXF54IzPXhxcTGnC180fKK9gUAgEAj8f0XAg0YPOWl3gLv7eWVM5cwkgXSJ4BDpJxX4IzHWZXNCQoGf59qtvAlll43NWuwDpcvc4zn88cgOD9JbarVSo1ZJxzx/Ea+wjFzEUXsBbUa2KGPHQPrgfwQKTmPKOwK6qY7mwITrhrN7cdggjRPRfXh4kt5975MsqWsxUbJ3AS03Oda6dJSmoy4LRam9RN68Ev0oNZrt1G63Qxh5AeMXRQYCgcBvLgIKI/v7+2nQ66ZOi03M8gF3WD2wRi/Vp2mFNF7pp3R0JoxIUY+JF9ncPEx9LCZsOYIMckbWjdvBs70CwkqfzJoaAa3t5lpamG+lssT4gl4hjFzQgXsRzXb7YQ9lmmPb4TGb7AyGg3wQUx3Ju0IC/HSEiwXXy+azzfTpw022hkc8YUGwntiamHgRFs+3bi2l9RUkd6KrhkMDW3XtTNOffbSf9i/ecQkvAuYoMxAIBH4LEcBoka6sNtP3XluGxmJp5nOddFxSYtJqB0tzny3doaN6sXW/9IkBqc030uWzhXR40s27r3oyzSl0lddTBaHkDKPKEEVvNCDllzNs3CL+ol4hjFzUkXsR7S5NSkrc1Qpn0yTOqEF6H2AG7PX6aW6CMMIC2Nnvpccbe2y+w9bEuF1KJQQWRXkWiX7M3eOz9HCPd3HpuHmPm/h877VVNuYZpL/44oLuU/wisI4yA4FA4LcKgTbE8O3bc5ke/tlHe6Tn4oo50d0yRCCpsl2CcBCbl+kpKb0IFnsH/dRkG7MRe45MOSSvXEccMUgE97mu8vmF+bwh5SmFjaHVFf3ofnkBrxBGLuCgvYgm16aN8shtRpjoxmMrTCB7szTOA07ZQ4RUmzTfKKc333g557dXEVze3383DfBrNpA8pqyidz/fT3/y4d5Xmnh5CRMk77u9fFyBQCAQCPw2IiD9kw5+utlL/+MfPf4KBH//9ZX0u3cXMh19/gsVvKXldvr4s8002O9zHAfxfGyKJn1uEUdi1mO73UxlrNk9Djpl59baWidVNy7gjvCR2vv8yP82/006jbEhxFMpmyO1s6UOZsMatsSF9hz32HRniNkQl41R25dXVtLa2uWceuZ32hYLgb4IfF1gG+NmE3cNl24cBXY3Ko4rEAgEAoHfRgTyRu3QQemhl/RROlkEtJ7Tz68pbGOeq2KBrrH7daVMzJ7mZvZjtZDj4z4xJaf5gL1e7ywdd0fpzo2rreWFzn9g+RftCmHkoo3YC2yvy0FLyIAtc9zYrEx6r8dVj81fJ4rbE31r9TYBVPXUYCvija2D1CPVzBQzz1ZgU0By5ZVLKEWp5vzSqojgrsgSVyAQCAQCv5UISP+kg9nLco7AbKsD6ab08+tne5nVaPzIIoeVlrBE91AQ3duJ3c/YiHKcDg6OUv+kjyJZ5ZiOaXrnzXvly8sLdy4iwOGmuYij9gLarA2jizBSJSiqzDk0HBXJpjukjjHxDVKtuhEawVZzzJgRkeGDyiht7R/mtF+bM2YhDEdnWeAwn/7g4ODLVg7Yp+R0MCWjppe2jx9lQcVU37gCgUAgEPg3HQGVM2liE5p5Oqhxyrn2DrdJ7eUf/1ZQkX5KR2eXJPJsxCnqtU5qkinTOGI3VmjoXLtMMCvxelitfaaOpbrOuTavsiX8xu7+dHPnYHtWxkX6HcLIRRqtF9jWU4winP5YunGpQupZNT058aC8UU7NNTZkzH8uqhGpZSMWzNl0gFBC6u7MOcNqWp2vp3//W+10fWmOfHfsLGgBGkheudpJV9rVtLowh7XFDdX4jhCrY4/LJqZVy6RBW9mLc74Wp37gfs1YFP4oNvg5B0DFgO8sn2Ny+IP/z5/PX3BLU2idNhh93icV2bY2CCBrIFCdnnrmDs/wndXlKi2D/4xyX25xWBUhM1UqMYh362iSjnoQEJ7JVlLr9ofP1uP7/hT/+AdR8/M5Gi0d9nB5Ubd9ltDYj2w54j1xvNTB+kQ/drtjtCLblLudu+H+Li0C1uY5POsIM6x12E3T/6zccuyB+GRDFGXmjuV7EDKwsZ22MZebQWPseAwjF29ZDj80tW7H+LtO/qD+aHOjfM/Mqnkk0H12eewOEDZ5b4C7LmtnPsBlsRZm28Qkt4EPhiAZepTnDY02Q/yMPi93CNbj3T5ZAZZr+ngugn/sc4dxsl7rszj/UTt0jmQ3Is+pHKo15hf524f8Bc3PbbBNPpubSDvOaNisz7bRdom7c6BCw/xxtmSmQVzUCumXOx7dTpaCBQ/Y/ZI8h6KvvGe7qCJ/di4XN7hLXVXmWJ2Ke+yKmdvJ8z5M1/O8N4siD4Vt9cU8SOf3LNRb/OSLTntmSQMlwfluEOQy43EMbs7rjAmFn7HfT86k4H015DzI/G0x9pMqcwUqAVSb33O8clv8zgbaTu6J4WxeZaWBxjJ9czP5lRaa7GXRPyOrw12YeZJ3rMdy1fxXWetivQMNcf3aRssxZsLTaIeuRQpcZBsAry2C3r+8qMA6/PE9cbKdVmC3/GKhWU1XFtggjErGlAsPT/unZ+DhSvCF/L+/aBP18rsFTRsw3wbMKQ+ic3753ZB3rCdf5x1x3vry1HGiH97OhfiLwnLsB++6fm1Xft4CfIcf55zvsCcka4d5RTn2eQIJuXmpmRY7c+k//Qc3Cpwpf0AbXrs5D50YFfPLss4v5RbLMo23Nd/O41whcHWu2UitxVbeEbsOsbqyupDx+V//zz/vn/ZP/3D2/kX6HcLIRRqtF9hWFv0UIjStQ7k8hTcvUFeWC8GFx6LwVEkXYB+Jfmmxng6PuywoHuB6stdPP75/mK6vtFMH5qlw4DfEiaf/+6PdVIeg1qF8ZaizAojfaaJszVGHVGx2zf4u6FQOpp2QYy8j4zic4sWiyrz4M5XNhfEdRX15FU3nowy9kqrExGgGhaenJoRdIpcbwa/Z31YtIenR6CEEpIp/t4cf1nTnBRjAJFNDH+Lnb7iOSGO2CqLbU8sNa6EoNSnZc1cDnHvnEoibFdHEn1/0Sfht5CnESiJuN71F6/0il2mFmWrWAAA/10lEQVTjCxJ8DkqugpM++S8LGMWTxb9SdQqtzd6ffcc7jlc+60Kgqasi56MMaDdmYARR8GiDmxhUeHbC97kV3M/XeZMyEzxviveLYmyLlXCDPss0+raFdxR0Zq/m5/O71lv02XvFZXuKa1Z8gQj38ldFn79kDD46K1jsvz5ofJf7TGHOwxywTTllOJCMdOOIPsO0WiwGBRTE04xpbsGsz36wbpPEbNSsPu7JfJuMqYwk3+cd8c3P8Svfm3Vk9nlW7uw+2PunzK+GkKjwpVC17XhQl9uFG2Ke+0GmRY21Jd41sbaur1yUZPvygPz8i/zu1xozpZ6MrZWzbourWM8W4Xwss1A6jl1+5vwRfvnx2DnN/x0m+AyS2ROWUkXY88Fj1ojPt1mff+N13h8xsHubhyPWMVsQcF+hW9pSCJeURKUZdws9/9t173roIAj7TiGklCmDZ2zE7PJv67Lhdn32nZ/5Qf7K94yBa1NevrznNYPq/G/nwBG0pChK60g5/ewpLvApabr0meZneB2vhzs9aGg309Fc1vk/eYdWMhlPe4Oc2jvfvpKFL7qTEwaQTihvRLxIL3V4plKrVRAR7yDWf/Z8ORfh7xBGLsIo/S21EQ221ELiLrFo3KRHHdpFp3aXFzcLc8Lkd9e/BcT+fc5MmAkjWweDdIR2/9PG8ZcEarau1WAkXmrAmcH6BSv0fCkXvZst+uf7ev6AdUt88/X8c7/q3vPl8Ld0QprhD13K5c2Kspj8t/+cl+kv68yWDBt9fj/jcP43j/zSKxfFP5bxy96xGJ/L/eN3fvbrJfoAV37216i3ePqX/Jsb9Uu+e+62Ef8zRp+rP39PC4eNFZMvr6+36bmvvnzma3/MyrS4X3nx4C/E5Fe9ZOGzcmdtmX3+Je/NtGlfnPX7S638vM92uWDH54U8X+asnl9S/q99+/kyfem5chVIBCNbKrzvx/OCFUanLtK/6Tp/72967Fd9r/DxZbNmDTh/wY8FTrmpuX1fPvt8odw8hzXTg68V8/yTP//7/J18g78VosRkVt/s/gyXWb2zNqHPZBowowM/L/i5v2YveWvWqF9wzzptf76e//781pfv8jl/7T88L3YKk9JMLa62JRfDfUlMD8m/r5nn+Yv7I2iuD1aIC9E1Y2rvmJ1ch+yEPcaaUsdSsnfYTQudTnrnG/eq//v2u3cRRv7V88VchL9DGLkIo/S30EbmNyu7XOp0SMNFcOgTHDVgU7NC41DrcMWoT/AgK7GNVrR35C6rBRHUDDlEgMnujL+F9kYVgUAgEAj8m45APogUGlvHQicJ1gKiq3N4OiTb8TRby9xvxDg+DTVk05Qm09JXjKwXBaMQRi7KSL3gdqpkeF7kylIri/Cn3WHa3cMdMz+XFheIGVGqZ0fWElHcefLjo945IK3s3E3DOiiurDIo2fAfNxVceDVrMVpH8nOWhfSTtTxuaDHRFeJVPI/kjzVFP6nCD4/yPWZozN6mFqsF+p0aRvFbgUjTMa4gXAk55oGXtOLoJtHS7B4olq1f3XbZJv+hSecCFREDfKFFiBMDMXVXEMjYwr6Bef78YU3lEgLfty/KYSNsxPZDJ4Fl2wazjUyTPqOsEZqOApt1S1D8se9WPuL5EfEXlmdfqpric7n0n7bbttmVcTlvh68bR1BHILR/s86Iem4sDyhQauEQA3fSdVv+olafoq/U1eDHy9M+PdTQ6uo13REFJmJm37KbgvJsm3XPLCO5HdbPi7bD722X/fl/XdwTmwGYZsLJ3w3qMlZjNg/EyXRyy2kSoDeiXc4Ax2LWf2MjxrTVE6MdD9uaAeAPz0/KFoTnKtf3OLQcfhfP/vxLmylOmsKdX/bHez4n/tbTYLx8xpvOxS8v//Rh/gGB/Lt4M3/gtvgX7z1/f1bC+avnDxfvZxyshYeKV30/j2px47mn859ftqFYL77j2OR1w2/HxDXjeijK/noBv+TzrO25kTxjGyz8F17P35/1zge9P/v8i595/olZ0bN2FuP9q+qdvVH8npVVvP98fefP/YJbXy3hq+V85btf2I1iNoi1p+kW9KV4i2VTWFTzx2IeFBZhXZzn8W/nZc7W0lfqO/8g5GbJjKF30ok+de3t7Kcu6zm7FqmoQ2DrfKedXru7nu5ev5L+jz/+CWpk+otfVN5v+r0QRn7TR+hvsX01Az5NEWPi66M86Z5CyPD3498cD2UChbVkab6ZDshxbxAE5sm9Ep6GZkeIuszAIFW92cYJyNinMJA65TYJPNOnrwAzZGHJjHUIzDXqOajLWAT94BKUI8o/YefXIf5nGf4iFpsrK/NpmXx7zZYn3W7e1fXUQD61BXYgrJP+duP6JfZFaeczczxUqs29JgKFVp4STvvt/ROC8SDOtEuKT3gLdXEYFX+3OGxqZ/8oM8nVlYW80+z6tRUEFCjH2SgtLc0T/V4wyzly/yUkG9sH9GOUKjC73aMTzodopxvX1tiQaI7ze47Tzu5+OuJ+nT6uXb1EoNlSZvwy/43dw3w0eDa7jodpcWmBNjToWy8d8tM8Z7YSMlHWFS8JnIBbg37dvk09PO/dmbvM6SLhqjA2Deo8oD8Pn2xmvqCJF4CzQGdflhc7jMVZ2t45TF3igGTcSwstxgihi6hMmbgWsj441sQKJ7fCVR+BTCPzFDwVTCsKifzMkQZuMF1lJpDAxBWIvGSMc8QQPHm2x66Sx5ylMZeur60SWDiHwMS4V6apyy6TD59tM1719PKt62ln7yhnHlxe4jwjiTLPdSH8BxzQuICzfwmztGOg9ihtVxBSQJGROY/stKnnTzY2zwUS0AND+VLJ2AOecw+HRebUAhtIURQ/hQC8f9DN8+/65VW23UaIcozpT+63leUKC2aJzppxzXZ4vtIXqICjoDUT4JzTWbjzey/qLgqxIP+WgRWCa2ZQxHbYA+dWGWGi6rrg84xJ+7yX09jDKg9J75wgwA95XqY1OD1FoKun9SuX2RRrjjn3cwZpOUXdRb25446Z4OSuuIZZy7QrM1FqNpjbz1kwyyKirbaFRbssj5HI5RalKugW90Cav4rrvKdF933CL3jNJ70MSPVybExzFT9jQbzOvyo+nP+bYcx/K2wXQaW0Mv9XPEJ5POR3joHf+D8fM5ZfPnP+huXZguyO8jkfzyfp+kLx2XIcI/vrmVsPHz5N3eOeEzA/YkzKQKWGwvIcA0s64gCwTugXMUYD6EkJQqnCo7CRhXiKz24c5rmzsAXdukFg6vb2bnr8dBPLCFgTBes8tOwh63XAWHcIiP3ON15KQyLCf/TBg0HpqPcBRV24K4SRCzdkL67BEk9OwcunS56e4oKBGUlqSjKms2F68OQgM603X72Og7OU/uC7r+TI/SbCygoSusyoibausKKlY0rsyYiFJpHNQggEcQwjrUL4qgQH1mCYWhCq5TqLGCsGHFfGbzvm0EiHMMLNg5PM9JY7LXyizbw9vVruEAZ5cnSUmp2VdIq76C//4idp+dJCevNb98gIqaWnG7tpn3cvXVpKncxoEBZ292C8HDAFwb62spw6V5Yys3rw+VN8uJW0duNq2mXvlAOEhO/+7jeyxaBC30671nUCoyPzhbTnaq1OmQg5tPOnH35OEGovncBgy1fm0tvffi1dWloio6KB/3eQHtx/mD779GFqz3co89swWixPEKYx2s0nH36YHtbYXI6IWQWpb37rdRh2I93/7Iu0sbFFcCdthYBhdgUdKCH4YUth35dJukzb33jzDpi0MqOqwcAlYJnm4UvuITQ0Ydg/+PEHqbw7ScvLC2kNIenG9bV0aaWT1sCqB47HJ1i7EDIV3LZ3DtJjBBdoXfrWK7cQFJrpCCb3Kfjsbm9nN9yEQMkJwkqTehtV6mD3xxyYaVAqfeqPiiPOGdWcgVEnevdMQRSLlmnjK5NW6rY5GGx5MV2/ftWAOwIKnR8IXHCdg9vzGYtrV66l7piyIMwdBC7lKLlBtcIeN4yJDPoEhuuhjgpPfAEXAQHwUvCbX5xPU+ba/c8epo/nOLqAuhXMrEehrAG2c/w05+fT1fUr6fLqcpogcHdJnTSd/ZC09QmCzzfffCU9Q1g7g3lI9OfqWMDlVgoOU7OKFAgQPBAXswBEetcZWRvW4eaAzmMZjQKkaZpaqEqkySM6YCXqI1jDXFx3ZzJMR5AfmR2RkplRIUXYH7uvpWbC4CjYuYbGtCkL/3zWuvU58+b05Di9+tLN9NNP7qdaYy79zjvfSB2yLiyZltJu5hJ1KgBOYYwyS4UMx8b1ntm1YNOPKfWVaYunwk7Zrhz7fxY/SnznBl58w/qt5T4ovJZQXMoCbC8IuhRHs214mHnMXcGivEqVN8FMQSYHheeAjuJ0cIUdBWvXOJBl+qByk+/B5Z17xd4blM19haSR3B1GXeGG/RRPhVLrOqNs4E4jotc9MbeOYGmTGCK2KSB6lXYXTXSNSf/IWkFoVlHS7VxTgaIdCiQ20y3X6VYxj8BtCs3a3dhJP/jTn6RDhGdpmrEdzmUgZp4a6Is1mTk8hc4NWGeNRgkFqJtW169yYu8Y10s/zbM+qYb12EPYhp50B2me9TcHrXn8iN1XBxyI59xnTl1dW+G9HjSCU4AJkBVLFYcPP3+G4jCc7hCjb1H8XKgrhJELNVwvrrGskUzkPQhvaxeGjLVAjVPrh7Sy0IJxY6RGOu0PYVKnLLw6zBWCAvHYRTDQJSAhdaVKoKVLahAuYNYxPxA+KENVIYQbkjMJUpUHTQG8dGkxHZJ2q4a+jECjtm3Mitkw3e4JVogtYlKG2Rog0dOCM+ntpKtozt94+xWY0yB99nhPUpgJaYn3D7HuPN7czoRQa0ALa8CnnzxMz7b3073pHTJcqvQHLQUmP6DsBhp7c4H+mc/vDrIQK60D73/4MLuAvvn6S2jTtaydb2HNmJJqeXI8Sg+e7qTf+9030hxCxzOOCu+RKqDbYZ8dEqcIMWWYUn/YT8/Adh/31pMHT9I2GnsLS8Sly5fSS3dvpM7yEsSKaHuokhlHPYSmEoRN3LQ4LCy3soWgs9Bhi+j59BTh4Qn9aKABz2Ml6MHsRlAn9VBNuT0I2gFm3Rt3b4EtO+Jizh1R3hbt3epuQMQRRBg7U3UrCJKfP9wAi3566c619DlC2XC4A4+vpYXLS+khBHdju5vWr62mO3fWsxUH/gWBholBtLVO1SW0WLN6aHtlzjeiyen4cJ8UUBLDpcyMsQKCPXqytZsebGwzd2CwfD/A4gRfwezcTgPm3aT0QU5XLPGebXK26ErJDAPLlgzHeaNlxznUYL7JENWma4zb4mIboRRhGDxk4CWEHrnXCQeOqakfIcgYRNhinucN/WBUvlNmrimQbqKNHoDtzz5/zLjDTJjrmX86Zbmc52ODDWXAzCHns4KBggLbcvM9dWahu4xFbCVdh/GsrM6ng8NTBAfeV2jhfQ9GcytvVgvMqJS2N3fSs8cbCE4HCECsBcp15Wh58zrjhtkXrkkFEL9W8FdT3keA0sK0xZj7+eR0N7Wxtr3y+ssICuBMcxX2XddVmHJ1zFpkPljWCZZIh8gTYCsIOVpkzpQGwFMJV+FPoWWshZFxV5Ab8hwzlWDKoY+Ap62hH5oGXJ+8nt2vPid4/Exoc07J5nmLP1P54LUaAoo9VLB13SrQjXI54GPh9LtIjS+UGbdE11pXZy0e41KWlNQUbKFfFTAwrd+2cNoWc8424bzgMlNO69cpO0xnQPhbWmKbpoyXQqFK1YBy6GI63Xbukk7caGKJoB88qzCnpdgsvxprbwnB/I23X03v//QzamRnVNbdPvRR7LQMP9tDocKioULQYG6yaXtO1X/20y/Syy9dR5EzA7EKXYNOrLbz2NEssv+m2SJidtPdO7ew2h5kmlqkcQ+gQ6yXxSb0hTWNIHQE7XCcLuoVwshFHbn/v9uNwmfqLusb5qRrBIKUiTtMeljGSjFJ19HGdaXkqG8WY6/fzdvBa5LOWpV0i8VXlnCwkCR6kllFEQkHv2AMunsghjxXLRMzwE3oIVo4TB1p33umdR6woNWqzvSAUoLWlaz1oF0MiTrnDoyHO4Pj9LB/kjUI4m/5zkP6jHuA+cPE9g+3WeTVdOPKSqqbm1+ZT2+/PZ9+9rPP0hEZQCvLWDk65PijXQ2RADydeAVriu92sQo0sYAMs+ZVAD6C0Wi9mGmka7iFPKzqQMsJlgiFNPhx+uT+UwgQAcAQq0WsMGo5p6QJf3T/CXXfT8u05fL6WrqydildvrwC4x+ln338IAtic+35dPtuJzNhmYaaXwNt7fqNtbTYWsyun6cb+2kVE24bAcM4GnfJHYKZ1phasw2hgtFA6G+/dDstU/7p6QnaVh+NbJi19jEWjDHYSvwraGpliLrxMFcuXQJZ3HKMl0KXTPchwhzsNb1870567dXb2ULQ5Sh0Nb1Ws8VcOUvzMD0ZspYMrQAVtHIoe9qHoXtfd0wZTdSYkZ2tTdyAQwQPNnNC6z+AiR55KimxNsaJ6DLrgsejR0/yuM7znFYHx7uPkHiKS6lwySikFfFMfYQLLUY524D6ZC5qqS2ES/dk6HZbaJSXs3vrcO8w+7wc7wFzbntrP32BIHaFOfLKvbupvbiUrijw0I4PP3pAH3CzwZhk8BPmv4xCxi7zVmvnK9qGMM888xBWT1uVj/oc0DBfSunqlfl07/VX0urVKzDz7NjJWr0Myzk+VUBHgHNu7+0epU2EvwZWJdvQxiJYwSKXs9IYMK0HCi7ukJznIX2tIljdfe2ldIrG7a6caucvvfISrsUFBFw4sM/TtplyoM4wZn5WsW65FrXClMFSpql9QQHc/mW3DBagGgxeXu1apKXZskD3OLL+PK6GsnUx5FivbN3kZfpuHBXNy2NDNdSnxYKvsKSpdPidgZksWxgp65n72erDQ36vhUEMrNX/ZcRm+ElPjNfQgtFkjA1q0x3s+Chgn0GftPJYuNsRUDRlUD/zSNeivw8ODq0lC6tUk+shGoNXyihDjfTex4/Tv/zhZ+k//oPfSaUWNmKEGue2c5H/syVwcDikLmgOls2rWFYVrBfp9zH0YJ95VUW4m2NeKagtMY7Xbl6BfiIMY7V9//2P2YcImodwssWY1dnbhmJZc4h9vNc9PkmPH26lm6z7VRS1fVxBru+nCKvSoPXLy2mFta1QrXs5b5/ABjfoJdOTC3g2TQgjDH5cEExAQKsr6YecQEElommCDlti4cJEzF4/QttX0ymjxUgkphAACZMChYKAlgDNq/pCJXZqzTIzXT3Gk0gI1SqKNEQJKT+svvysZlDeUQMsQ3AnMGBEFjQZNl7jnvX6A03kN1oZmo6CQSbGuIP6mUjQD4i6GpQCxAjrgALW5dXLmRAd0/5JmVx8Km3BsOswbDVkiVSrhUaCCR4akN8/gaHQbCkOdA4zOHjUbD+ah9p3xggKesD7Qz7fvHaVDalwzfDgCUJMj/o1+a9gWr2+vpiZxfsfPkgPH+2m9Usr6dVX19MZzHwHLVyN1o2YjMdQqFC4mIO4Zb8w/RoQF7ON62hAHI+HYnkeRU8Vj5bvwlg1p3v/FClIk63EtjaHiXdhiT4YE7JPufQ7cxMsDTD+/f19sAZP6vXALU8fmmtjXVGrxwUns69q2uDSOrGAVen2nauMI8QdrbIG4zyhPZ9+/CgT3LXrK3l8HKsSJv2nH3+RBZCllUXmEgwJRqeAJ9Yd4mYacO8DCPIW/TJI+N4r9xAeEELpW5t2jHELaulYZFzW166iUdaZY7Sd7x998SzH2mDIT3Mw7OZ8IZTVGXvjf472j8HKLbJl2liJcEVVq+PURDC7dfsG2OF2g9BvPtvIzE3LRxkBVq12hxigK2tXcPMspHUCAu++fDd9/skjBIR9MGUDOLRbGa5jQVfzPjgthKgS6+Ex7qwm2m0TPLOCynwtIdRQSZ73u9uHzLn5dOXqYp73MmC5T7besIlYtYn7Cmzeevt1xuhmttI0WHsLxLQoGDjuU9Zhk/HtIVg6f2XECgzHCMEKXX3cqx+//1HaQ1M2sPGywiVWGAW1Iti8GFstErbLYx9MkzWeZ4QAki2OoKbFChGHZ2ggPF2mrZJBh/I6hcPTeYQu1kSFee9XumC11ijIlAGnLXNlHqlciK1uLS0eSjVaU42VMv5BMIbM8Sp9q2CB0iIy5dkhz+rm0Foj1lqKdBNaljYZ53unXAi92ZXJO1PmtLEvzlM+IISzJlhPmW7xnvXmoHHmRhslJAeRS0toY7PVSdeYS3NIlAfdfdyYo/S9b91NL6NwdHHFdtlYzV1SnS8K+0wH1iYCEYLP8bFr2O3aWT+jYTIRoMPcNCBboXIJ16gWF40rxnlNmn3iy5ppb+OInjAGYLBcxVWIEJktyeMBcT+OhwHvCOesd4YknakwMbkUWA60vpaJgQMz5yRu2dI8m68gY1UvoCzibIsrEMB82euXNBMqKEBTWFSegYCGAQEoZ4EEolpGk8RiUoaInaoKst4nfJ7qs1cjgVBpmuY2v9WvCy1HQmEGBSwcclBcZ7g4POtGhlzR1cOiNtZDFYYiMqPMZmrf4IZCh+UbGNZjRzEFEuUFGZa7vWbiSbulioWwg4sJ4sxesFkw6UPsFSpsn/EwR6TFzUEs3cDNgFjNrZrWZYYSLM3QWnd0ZUgM7rDV8hxaXZM2jmHYfcz6ar6ZkXEE+BIuFAUvTdsGP1qG2z2f+DyETua0e7CHJeksvfr6qzm4dBtBYpbp0UFwWMV6UNWPL/2nbDErVeboEn5lBBx39dTSsrC4mHbRhDY29rL52dgENSkJa8YaijfHmClQDjE7O5YUCYvRP05gHLjMt64VQZm0z+88GLHZUfsm+kG80cQNFh3Q14XF5aw1dmWYCCg7tPsYhj+EYAJpWsS0nOOAIKgMUTo6PEmfEqvx2ut3YSR18OulpwSuZj8+TLvm2Ua46+cRoLSGLGI1UnvvY31TMGGC0SZOh0ZAgX3lMZhgVVLb1xqwflOL0lI6xILwDAvRUXcv3bpVTovztFOrGHjbbnfXpMO0mXYhdP3k3ffSm99+K925dx1hgywELCAKgBkA8GbQ8jgZvD1mV9AuwlIboeTeW6/DRPrEBOymHeJHFjncbPXOMuUagDhkj4djLDzEOCGYHiMMXSMWptVGQKHvFQRzA0vV4ssIpjKefZ6vZeudUxtGrPXfeU5Z/m4gSDY5jVU5RleTvwe4wXThLSMU2g5da/XmWrbCjIg9QeLIG9XN4U5YoM1NrHUt3AcKCEWsgytPQUImfa5McEsbjdbELBwohDDX+wgGrl/julzXuiRqwKR1y2a67hRktHnSq+zyYLpTl8KCQLLuWSuuN+dwvge2DAtrEgscHfaedXIr/yiUnGF5GE8QmrEGyrS1BJ2Swpqfoc1j+jyC7uSsM9vGouri3jvE9eU4dxC+6rSbVQge0iNmEYoKZr405nv7rRXGTfdUOlwgLA3iv9oEbvsu62WAwIcS9oj5+s69mygY1fTP//SvLQ6hZDkHlfaZW/gScXXVwBglADOEQfhaLx9iaVNhGVOHAs6ENjivprwzVSBH+KuNj7PAcXx0jK6DZQdh7hjLiAOtsCvdGqkEaTFjftqjBnUha7CR3nzSUvgYq8vhIUHuWCbneM9ylxHib62tVt69v02vLt7FNI8rEEjp8nx1cXWx859dX50niUOz4XH2/bfRSDto6X1cN7pd9O1qxoTGZL+9GTNGg8sAXOxZ24GASqQyqeGeWo1EkG+zmVxNSFeNhErqoK/X98yMUbNQ8CgIp3UUBFkNSTJXBHTyF4/U0Xg8xVLfrYStIGtaaNDQIHj6hXUHqJ3mjAM0qRpCjFadx8Qr6AXXJaVZ3QUv3VD7hhZCkCB+3JMgSwQNgpXpj2DuclwJjy4pBZgGzts5cNI6c0rcyv3PnuRMGi0CEpFFGINBi10ZCoS/BfF7/HQLgjVCS16G8UDkwdS+Wm6Nd+zNGYQUOoq1A3eW7aDbaolahdz9dok2XV+/nJnPs81dCNI4rV0newLNS0KuxqwmRzczpgYRKzAV48HfMifayC1pOVYRxxhSLtDiqYBJm/gK3Gx/Pz1+tpO2trYZf9MLaRMadhtcKggJtlmB6Bhh5BCtbR2mbODoT3/6SfoETFZxVzXbDcZeZKmTMjWt6z7KtUDEbXNhvkeUBV8DHBWA9IXnLCzGCvZcMFzs0WrRBnKa8ri1tZcDAxVE0P9z+3yf6QbWxEVQT3tBRo8rkHESC8fSyzbpbvLSwmd7JvRNPEa4LviUmeDhkSel9on9OMYCdpzH1EDqTz+5nwXl/UMygGAMKyur2fxOQCHjgkBL2dbhPFQwOWCTKgW5Od1jrB++ylaFDDttUkD2Hef0kPdzRpfrhvbofmrT9wJzxpkuFFlNFMi1RTxOD+F1be0aQaxYBXhgKk6MTdE3hhdAHAMv14vl6vJSvFAzL2JL7H8hSIEiZfAswkAxf8RdQdEWihVM0/bSxhzwytxxLijYmM6uUOZad7wUeHzHeSbDFg/jf3gArCzXuiiLNjn/bEN+h0cyJLyt1UvlRIuPMV95d1XWja5lbToKIhbpfHKdClIfwcXUf9e0h8yNWV8v37iSrmON6jM3/vhHBHtTNsVgdSC2iHf/+R99kL7/4/vpky920ndeu50WsHIUbaNIBrDXK2LrWghZE9alVG6RmK451kTGmjK0YClAKYBl1zJtHGH1GRJD5npWeFVAH2FVzQHD9M0FqaVKjJu4jAyAbYKf2Xo7WPq2UEakFS/fvob1q3ArX8WVg3t7/P7nm/8CC/XDPLgX6B+GOq5AIAsjKAfNf/rK9aWmZtsjiOg+QW2e6aIJVwJogFe2nsCQJUgymoZaDIte10VOS4OAqNX6r2RKH7QLNGtkEARNmbpJvCSC/udzrHysHcZHIMbIlCRWECqZVbY4SJwhSvl+ZhZaPhBiYPJjrCy6IGSOPm9QoIzFTAXNm2b12Bz3tahRthq6gkATDUTLhAGXsh+D4vg/C1kSkry5EIKI7ZSYSVzVSLtozl3wMajU4EUZvgKCsQ7PYAQbT7dhvCvZhA4pzYRGV4jCwIAyTCs9IANoGRdGDQw1sdumrGlSjtq6MoRE+gz8sqQARsaVHOKLFstltPN5zLzGSHj2zZTfxq4Y7Kfbhl7wLr/A17KBJo9TQeMl0BBJ7oM8z8mCFCSME3CsxF4GrEusIBFdAoH39g4Yu0q6tb6as5ScG6Y0qhFL5O1/ARVtMR0XAvv0yRapj5vp5s2rub8UCfa4txBYHvPdxuZezmhS41c4kWArqKrN9xEeZYo9tMcz5mQlW41wHdIG3QHuQKlrYoHAU4N4ZUxHWjUYf+MM7HDOGqFOx1Ih17mtxUpXotxKq9GU+mRsxiUBQGZeuheAIjNEhVHbpfuskeNxqIuOHh3sY60w8BamCe5mRF0ildb5XVYAlqGAja7LwkXGuNI257DzyXVTg8HION0qfMI9hXIrdgUpDjt/qJrRpO2Um10MWrMQqstYzLR0GcxroHOxXhQmCV6FmZqxtIC1wLlucLdz1KoNRnfNmYGlEqGFR+xPYdZmsPmQ80CBwf9cE8ZYuDZdL87ZYnx4nvHJxzzQdtewGNsvBR8Fez/kdZmlWtsGw2X8HB/vZ+HT+uik/eiJNeUoXGidcYxEQ4VCnACCz/xHueIu1jkGDQWj5Vk3tsNW+9vqBY9y8v4+tFXmrkVWN+gbd69n18D7Hz9If/pXH/J4Kb31+i2CT4+wgNTTx4930x/+5X3m2Vn6h3/vzfTO6zcQELCk0jfHN68b5ozr69HTvfRk8yBdJ1iZYhhPhXSCvztYx+iL0EuEFITdDsE4O2OMdA9q0blDLMky81grnu9qvbxFDIoWm5XlTrp961o6NkCfNfMUd59jfe3KarrNulL4M9bqW/fW2bqgO/nxB5//gK6+a40X6Qph5CKN1gts6835zlJ3NPynd9cWm1eY/GrJavp7MKEdGKAWBlNQZQ4Gt45ZhPpAi6wZmYeERYIBoWJZQyKkBSyUQjRRu5myIg1DkIDkIDCIi0Su+Jv3ecHocy0zEjX3IpEpSNAVLnS/SGoUTvJhYHxy4RrhL1FWk+QjmpLtLDToOu4Gmava9SomVTXEAxa1AlYbjUMGL6PWZaBFQZN6pmP2hx+JusROQcbAuQkuGYMtdzHha1VxDxbprD54tUZjEdxP5RLBZQf8rZa5iNm8g6bk+3bADAB947p4DLYzRVWcbEjup/hBwGRcpvptb26SWruPJo7rgbbUMcWLj4KFbZtZl7Re6C+XZtd1j/Cdkf0SYJACNxg4L/mK9ekCyWwOwljms3Er8mMBkFjqYtGyQ2MysVsg80dzdBfhqQUxN/i2s4Cfm/bWdb3U6CP/HWG2lukcHh+n+2SjXCdQ9+5L69TNvKFPZi1ZhuO5iCuhg1AlFgqqx/j4n5FRMoLJQ+MzU1Q4U8jM8NEumZHWhyfPNrEOVImpwHSNNqrJPAuefF+kr/IefQEO5qvcgLbhhqsSXLtE+rWXcUVnWb2HsYGBacNiUsRXFPhSdc4+0WXi3xQJI4HRkM5uSrgConOW7sBsijiBLLgx52SsatAKE76XrUkwEuekE14B25gD5+ecc4z5zxuFoEish5YDWsa8o1nMe+c6ncrz0bFXOMgCDg+IoYJPE8ubsSdmYZjN9ficebl3iO4QislY14n7ERwFnCwMgKVMLj9AY/1PIaqDNcv5YL1mmWi5ctJrxbCtTA9ecf0VQpsTzLWhYKxAMWBduDbpNZ8RPKQhfC9erj1aROfoM0KO88Yg+ZnlQ6HDuS5Dh7TkZxUw+7SZ4rKS5JjlAG5wtDGON8XmunIwKJ9K9F36otty7fJievX2FayXJ+n/+sFfpx/+5CMsmr30D/7eN9MSLsenm/v0x2ykQbqJcPEHv/9G+t4bt1FCsHphbRX3PuOgGzOvGwTbU+aj1g/ns2tkh7L/+tNnaRdXimu/gytSy9OTrcP0o4+eMv5T9oAhnRdcXA/SLa2gzlfX6BauJ9Pz3VPnCEvcPuvii8dbOdBVAe4W6b1aRQzQHiHc37y6mr758s30p+/dHz96/OxfdkfTvwSCC3XpOYsrECBFNZXQ+sufPtljkSynNQSSLAywsk2hVQsYcSDT5EwCC4Fw0bNwJH4uJA+f83c2w0qwIcAzS4XEQe3JGAyJHiSUVWeUPMRKIs73kly1KZm0BMsfNycrtE4YEIROwgw7gLRYIm4FiIWbe0nMZB6SuwrvSCyll1patN7IoHq9k9SFaLpPhYLKWQWmfCLDZEtl2rHIKaAeVlcQRwQBiKJEW6auJUON1bZLve23aZk7uAYmxJSssEeF7TTQVGbSbLUyI5Y469+VyB4jwKiZNiFKvu8urTmDgf4baKiFSaHMdlvNGMHDDJ0j/MqmnnY592cNgmMgqYKd7Zax5F1p0Wzzvg0QfjFdpDz7MZax8Xuo4GjfKH+Owge0XWLaJ9bA52UKlmmQq3UbDGssjjjqP5dRKmzMw+xNG/38i63sUrsGFlUZGv1xjkzHXTRHYiJIQZwgOWj9mIdhX6LdMivdFNllJq74yTv66WGg7r2wRZpys+Umd1iqDCqmfY36Qh5fNWaaTptoJ21X080xBmjxpny7kZzcx8yiq1fdF4YYFKwfpt7qe3cL7byxFHNu5tJTuJtjx7sFhJg8j2mfjE8modavwMiAw1SZk44/Iy8DNH7CMbbdarXGscikT6jv8cOnOYvCvh3jhjFNuQODnyLEDOm7Aol9yVZC+uLY6Aoa0Vfnvu3QnSHWWiFluvaBP/mbeZ/bJ7NWQFSo0ArBb8dJSc0yswDAPTj3Lvi7R47PddC0xSz3hM+ZMeuqob8K70V2WxZZM5Y+p6WA6ZCZL0XnMXV9eR4KX+VxcD3IUPPY8Nv7Ci7SBeMmtETpktA1okjsYZH2V4Nfncw1rR1aGnSfKi7KaBXwnVNmxFhNtqDwWwuWAr/91GKn8Ow61KKpIKmgK2a6NLO1SOB4WMrgybgNxuKly8T7YLXbQUD7k7/6JL334QO8S+PSK7evltZQII7A64x54nxeRvhev8ymeKxZ++hGfVewZrpGtYweYhU8Jo5Ha6cWDGlWtiYxxh2eNfgYgOkDwiM0wD65sd/m7klawV3owM5x/wi3yxChQwx1LysEHR7iDuSkcLOGuqyHJkKQLrc1aPM8ws0qAngby7B0YxVl55Xba+kjMm8+fbSB8tNKW2TPXbQrhJGLNmIvqL3GpJsU+xH7dLzKxF5lQl+fdmBy3GfBdwkkk7maJnsKw6iixapdK3xIMeoQGQUWdKNM4Dz1VTFBgcbv3bDnjAh3yxijAkBuICZYQNT6eAB6n4l0BaaouRw2B72lchiPgo+EKO90yuJUE6pAHDxUyv0a6pQtgS9M1taldqQpWIFHwoyggObzCC3xKjtqmjIskznAr74PwdZkW5hcLUMDeUGAbXjdbIXzPqntuT14jjuhv4cnhxBWM0TMSKF/tEfNEgtT2mc/kXkCynSnyISOsbCo6Vwlk4bGoj1h2YDw5NRFrDclCLzdtX7TO3u4G44gdkPMwmpcmmIX2Zp/GSJ2SvkGymbrBYRXoiyWVJMZjlYfY0okfgsLaOq0W0wyU+eeQcATXHCaQcTVVNljxvcUS46BsAofMqkB42kdxstI/CXSaqDuKKtG36Xv8+6/kBkA482YTOmH2u0UZq0GfI89SdwszCBLmaFzAmc3Lg184C0DPA2YZBx2jtJJo5sDh5tokGqRCn81cHKuZaGUd3NsEPi5u2jLDBvG1r1wPBredi+xiZlMw30ljGE4JDBQYaQw6zNPIf66ibbY0dJzmMxsaNCezLacU5Qjp24twrzPBd0sHDNhcxwFbWiARQ1GqoujxtitrcHc2E/l4YPH9OMgXb5GBovzlfHlKfoCdnIa+qr1MBtfWBZZjlEwcL7B/HrEhtgWNWvdCpMzGDQY6jIwhiS7iwgWVyjUBVaf8H0NIRC8nSPOTRZLnhvGG6gQmG3T4X03DNSVpSXH+gj9wnICo6b+MZgofMlK4X4UYSB7RiS3n8fzPNBa0VR4HPIM5eiu8amZkCOTds7JNGswVCZ6tpjaXwOzbZunTxuITZPpq8Kcy0H3BWPJGwoeLco1Ayex6V1WSqjLRmcMeUqByzG3Pcb+VOiD7df9xLS12ryOFGy4g0UNOgDYq7hB1hFGXIs/fO+z9OMP7r9LSuziKzdWL7984+q8+BxgFcl0h/cWwG4W1O8OvO5YbIyPjTFwdJG5ts2eQm6uKAbFpdDNQaJsCXDvxiVop0J1sTbdFM7yblzFxUrsSZ7L4CWIttPsQLPkFHiNwxIvXT3GqBgfp9Dd7NTyNgFmNrme3Y/pBnv/tLFe/W/f/3F6StzUYttjkUMYOR+Q+HXRECjVK6O5cuno4GjQ+f5Pvij9w+/eZgdQdvaDYUAn0Q5gIBBVtfkpe1XUIOIGnlbJsBmhSsrCWTMssGLnQddf1mggngZ2QdUgILxPYTKkrCH6DotVoaHGIjXuQUamb7rNItUvm6mdBJs1m33GmWRCfPm8TPaHhElB4kxOTiUNPlcW3FaLzxCmHkLIcIhbASL6V/efsajZ8wGBpA5hkKlq8XBTNV8/QfuAnmVmkLVU2qMPd0QWCQVmwUYtuQUuA4SPY0wt9uXhY2NEWunapdVswdgiPVTGcPnypWwlkflp9UCnhAhDbOwzLo0ObiKZvSnAW2SFLC+3s1ViCk5jCPr6tSWYpz5oiC/EyN08jTtROKhcms/WDt1cEuAemKlNjyajyZOtncHHn2/WcXlV7pGO2yYV9IjB0S1iGS3G8ibZKPPta6SCsl3604002dhLAweNZ+CAEFctEZrXYaojBJszNrvDxL0CQX/5zuVsydjfYUdbjFwKgvq43WiKuCNSgNfJkGqlsxuDTCj3MTO7D0MThuAYumuq6qV9V6tdXWIPBVKcPfhrDlxXiLu4hLVJC4tCSxYo5V6OMJ+1sHTYPOo6/vIh8ULZpM+4OEfcLrODkNJmPxb5kv78rZ3dNDFNEobhvR7MqIQQfYLw8RA30uJSJ1u3dPmckCVkf0zbXIX4z8OQFHqNoah4bBNsw/lqWVpxbJaC4C3SgVu/V0kffXCfdiC0kvngzsVNxnLV3TWp2HkqYzZo0R1NFaRrMjHLUvhEMFbolAHNw1wmYHpAyujNdY4kwBixTdt6vTI76JIqnsed+mkX/9vxbMEr9toh5Rmc3Mpet51uUetUEFNQQNaiPC0KjAWCncK9Bge2E2dYcHUiMA2MHaH9vltlndNl5i9MX8sOtVllds3wqY5VQ2E1u1sZB9/RnVEIgFqCGG5TkilHwYFWZ0HOL7SgFAoLdAJXmgxaS8+pGT4KKH7O42p9vsc8ph3F6baFIKqVtUlavunbI6wJrsn8w4Qw5dodUNdXVzIzf+/jL9K//rOfpE+/wPncH/7nBOT/hy/fWPsnd9avvqVSoStRgatEyrA7sbqj9CX30GHufnT/6fT9Tx4SHjctX1qZr7756s307VfuECe2l+5jkegSzKrCID46sG6tk63FWjKQPluvKP+b99bSd3D5HGKBMeDcNWuKrxj2sLK4k7Uu0GXciDlOirJyppnKB0K568uUYcdcAWadAHgFzR/85JP0R3/5QXYJEfAuYhfuupCNvnAoX4wGV965vfRfQbv/y+3D/sq37l5K77yylgn71gHpavRBjc3sAClTc87NttASsdIbaDjUB8xiUxuRMPE/n+RrUGuIiCZYiU9Fos57mpGhhxAfLALcN95hxHcyK7NI8s6rcgQK0r+sBSabgy2Jxkg0jWBvQYRO0bpN15sjJbLYCwFNjI6oVZ0Sc2E7mhD4h4+esfHVJeIFltE+hun+gydpA01Wt9Q6Pli3Zd7dPU53yEgxGl5t3ODWHudPuDmXhB7ekgmx/mKflbkYFW/67yt378CkaC8M0rN1ZAhq6xITXUPtFql/mPI3SQ/97u+8nhmqTM3dL9/96ecQkjrZNTBAzPu6TdSoPJtnD6FJpnaE6VZzv8Zr4kCmg/5ZCe0f79UEBfGMWMzxENP85vbe/l+1W/Nvoj2+RNbLKgyOWhgLBAu1eVMJ1y8tT6mrpBsJMNH20cwykxqlFgJYG1eT2q/tUMo0JsIUZUYYbRdGjhvCDd7MojBWQ1eTe37MwUAaWAt0WcF+mQSU6xSA8ZoiLoM7IxPHrKk9UqB1r7k77B6MllAbUnRv5BgM/eztNvvJMN0e4SvfI3tAl9Q3Xn2Jci3TmCYypjBhj6nrEIFOxqbmbVqsW9nLWDYQRB4TQGsmkzPUudPGqqC0paY9ZayMWXFPEft8xHxRIDmGgbz9O2+kt169LdbZmiQzFEiaTF1o3M54+mdWhuZ2hfMd6vvjP38vb1rmVv2371wn+PBmFh48UkE8FHTHCOmmt+tmsS/TnCKPm5NyDUbMmRTMcVPLdenJlPexXm2TcuoOvG5rbgo0TaP+zKdZRjJuXCIKBPy0iI3RmiJDdC8KLZkGLWdLGsKJ88CAStvp3MiCIvUgoDNKrLcp8wu8pvhlsaDwNxY5vtfFx8Mua8rWiukyRWihbPcTUlizn5kWoFBkYZE1X2dt1Oh3SasGbdE1pNtGF6NBt46PFjzXjGXkucd8q9FXZ3DxBMIcrixdaSoiBhJrhWVIoBNF9gl/Ur+0Q8EP4Z2+T5lzP3zvQfr+j342PegPTrb3ev/d1snwv/9Hb6//s++89do/eusbd1dUfvawDhof1mKtmnYuzfkZSgzMvvvZ442t0WDyCYisYOW4g2Vt/t/+9jcb/9Y7ryKEtLEuIuSWUNZKWGrxQxnLoSvZ4yekec4ZDxqtSjRonPgbkzYkbVy6pcCjhUe6oXXGTenOxsZyoRAyD7IFCqFlEYGFnN8cp/Js5zh9/GAj/WtiXwBRGnKIJfu/fvfz3X+WcbhA/0ij4goEvkTgO3dX/gUBdb/PIqzeJa/+jZcvZ61qOIDMTcZlUgBLasETXC2HaHMSfHcv1SQPvYCeQF7hVlMokIzP76EsmUhCgrJ2xUeuQkuFfEKYIcAQNtYqzJ3Fx3MSIumJBMc7PM49tg2HgFMYhNKgO8uAqWDWlGi4mE/QgAtiC/HinQGFViFeEvNVFrEBYgYzaiHZ3jnJlp5FXB9qNLpHTAs1OMzYFV0YujT0qWfXA+WZjWPDJCw5/oXvxxAeTatLS51pFf/LAkxgByHH9je0LlFOYW6fy+fjPMNycvvOFawU7EhKdxRUdvf2sq9Yc7I7MUpc2TBp2mera9IVS7otoKtTQkdsI/BMT2Gm3JncB8O/GI5Kf0hmxmen9dED9jM7vHOHLVZO2v8Re7D8txD91VN8KX3yCmEuZxp7GiW2rEOxBDmaUS8tYwFoIA1gHp7Otzom6YCsQ8eYoZGZ0u2lO8dt5xvVJhYjNmYadNmsCzcTz8gU9Om7BX/XvRcgou514Vi6Fb4E9hBLjCZ2meghbjNTkC+ttNkWn/gRmQxY5c5rXcDabJxNn/gZ3TBMpyzwuCutBzjqqlKQPUJYVLiUCWMHyEKBwpMM1UBWd1o9hMnwKEwMxwmCsO4TeCdPqO0bUwGz1mLh3KNxx/ShjXvpygrWKXb5g5mUFBqsz7E3BsU4CGWCrkIak1/LkAHTB1iCnnE8gK4207SXYVRNyjZmShT9V6uC6wPWZUyP0hVr4Fy44CHnm5v/5XRbBk3xQCZ5Av77R+wjg/LebFYmMO8hFh02zC3XwZmpj8hXq5Adm/FBJpGJ20/aTZvzlupUp3tGwUqhhRXLhZJwLl0xrbr0yO3D+Jb3QB7xoMXjZUVhtHwMdK4BnmB8dD94ud5cqIxgthxlgcRb3NNahNjAuzDhPKe4R4Uy5TzRnMp+4p5BwK7h6RTHMczXwOjsrqH8FgxcZl5GYMnCk/Iu1lnnAm3O+6YAbe4r1WRB7gRL7ubuJgrCMXJV7eDjJ4f/c3c0+W/eee1S8/r83P+EEPp7cwiwU/bYUcjp4ApZxOqqNePTx5vpgy82iNef/i/Ysf6H9GTvx63bi+tYw/4dNmD7T4jx+N7V1fnq3//O61PdKCpGbiQHnKx7suyyMKjwpttMqw0Sd0KpYwzmWG9dsuqOCFblXK0SFhkMOohECnQ8uUu8mHNNd6KWMK18e7gdzRI0Td0gbjIeJ6TzTrr8vTJf7yPA/Pnm/vF/8Whr8BkVXagrT58L1eJo7AtF4OaVxsvrC+1/F+GjAfOCGOD+r1Qm3bOzMoz592qT8lLWjhAKNDuz6OTZkErIU7n0EC3nM6hcF42Z+LTsaEmF8+NXNzsTsPNH9P4qg5zCSwy4xFWiRJLpFsrCFG808bZZ/+Kch8mkiloxHkzO2JCsCj/UuQNRYbXTKPbJlEDxtndlT2wwilmFG6Umkg6WjLwGelDpAWWop6KZUWS1hDWCx/I7vKfhVc1VgcS/YEIAcnh6NkJUsvApWy+dLbZq1Saq2wRGTVwaXu80WWJb2PkGJ5AULvZpBU4ygoECYKmHhHd0fDZSxjEzyZJgOnlrBE5iHeMhmqy0Kxwdw4ZJxg9TUbtR+hhPzaNSqT3t1M66P7rPFq5fvWygkFrcP+afGnTRZ/w54IcjRlP/7o3GavWs+vtUNofZfoqsMj3tKyakchval9tLAQqDEsczYgkQhSCQasNos4PJeP9Q+wRGIxS+Bd5oMFhH5Icud9jWq4kGX2uUx6cDhKgeOl4Zhj4qrXQIuJDVWiHjdzyYDDHtV8mIARisWoyneENfqceDyzD7M/CkfZ4dnbDN3miUxVEFQxo7bbXKVcZ/zHbbtSEm6jEDiUVL+TRbxyXxCCHKGflS3vEiKgUBKpWQB+kTvIxWyQYEII88QjaZPOi6zMNWbcoZJI1WCTbIl3kK6A1EmOoenY7ZTh+lt4aNajJlLxPm1aj0bJNN7fE54iaodBqIhLSN4MRJdzoadZqtKoYNePlgfEieMpDSqrJHQ9maNEG5VgTn/pTMHVueRX2qLnVZmIwHm3NOv+CwoaepMjieVuqLgPudWrNSWqiUfoiAVEeGfovlybsUzYvEbOfZnKsQfxYwY19C9oVDEviLaQ0GfkAMyl/PVTvdxblJbToH1MyW7mh8s1+uvOq2Zwg77q6e4aw2poQwY8K0FqJHsXSagay4wboq1hs6PbajcrnBN3UICHuKlMelGvPNCLEsgzzHhzhfSRDsfdFQYs1yDzQEZWwEq8DJz14Ec1dqxAnPoaUUszQvINpk0r4xXuwATOvG248/3/tXLALXwPTeWufy1cXFf48A6ivMlyxRadl0fisUE+ReYj6zE2v5Tz59evA+7zAVfn69gVRRu3XldxvV8Xd7Q0/tpT/0FBtvib5h6yrbv7wVfdEXP3HxCwGqym7XY9ze7MdWw3g66uxjjOMrQunzkVel3nn/l5ocTUi5EEXCfGjbmNxFBZZquddu1D5FgXhCkPDgYNh7tHPQ/35RSfwbCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAg8Gsi8P8A6Gyq1fwTfCAAAAAASUVORK5CYII="

/***/ })
/******/ ]);