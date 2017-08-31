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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGNamespace", function() { return SVGNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDefault", function() { return preventDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM$$1; });


var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
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
    return val && (typeof val === 'object' || isFunction(val));
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
                continue;
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




/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
	"z̧": "z",
}

var accentsRegex;

function buildRegExp() {
	var accentList = [];

	for(var accented in characterMap ) {
		accentList.push(accented);
	}

	accentsRegex = new RegExp('(' + accentList.join('|') + ')', 'g');
}

buildRegExp();

var removeAccents = function(string) {	
	string = string.replace(accentsRegex, function(match) {
		return characterMap[match];
	})

	return string;
}

module.exports = removeAccents;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matches = exports.append = exports.contains = exports.create = undefined;

var _create = __webpack_require__(3);

var _create2 = _interopRequireDefault(_create);

var _append = __webpack_require__(5);

var _append2 = _interopRequireDefault(_append);

var _contains = __webpack_require__(16);

var _contains2 = _interopRequireDefault(_contains);

var _matches = __webpack_require__(17);

var _matches2 = _interopRequireDefault(_matches);

var _DICTIONARY = __webpack_require__(18);

var _DICTIONARY2 = _interopRequireDefault(_DICTIONARY);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DICTIONARY2.default;
exports.create = _create2.default;
exports.contains = _contains2.default;
exports.append = _append2.default;
exports.matches = _matches2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _seamlessImmutable = __webpack_require__(4);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _append = __webpack_require__(5);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
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
    return (
      typeof data === 'object' &&
      !Array.isArray(data) &&
      data !== null
    );
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
    addPropertyTo(target, methodName, function() {
      throw new ImmutableError("The " + methodName +
        " method cannot be invoked on an Immutable data structure.");
    });
  }

  var immutabilityTag = "__immutable_invariants_hold";

  function addImmutabilityTag(target) {
    addPropertyTo(target, immutabilityTag, true);
  }

  function isImmutable(target) {
    if (typeof target === "object") {
      return target === null || Boolean(
        Object.getOwnPropertyDescriptor(target, immutabilityTag)
      );
    } else {
      // In JavaScript, only objects are even potentially mutable.
      // strings, numbers, null, and undefined are all naturally immutable.
      return true;
    }
  }

  function isEqual(a, b) {
    // Avoid false positives due to (NaN !== NaN) evaluating to true
    return (a === b || (a !== a && b !== b));
  }

  function isMergableObject(target) {
    return target !== null && typeof target === "object" && !(Array.isArray(target)) && !(target instanceof Date);
  }

  var mutatingObjectMethods = [
    "setPrototypeOf"
  ];

  var nonMutatingObjectMethods = [
    "keys"
  ];

  var mutatingArrayMethods = mutatingObjectMethods.concat([
    "push", "pop", "sort", "splice", "shift", "unshift", "reverse"
  ]);

  var nonMutatingArrayMethods = nonMutatingObjectMethods.concat([
    "map", "filter", "slice", "concat", "reduce", "reduceRight"
  ]);

  var mutatingDateMethods = mutatingObjectMethods.concat([
    "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds",
    "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes",
    "setUTCMonth", "setUTCSeconds", "setYear"
  ]);

  function ImmutableError(message) {
    this.name = 'MyError';
    this.message = message;
    this.stack = (new Error()).stack;
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

    addPropertyTo(obj, methodName, function() {
      return Immutable(currentMethod.apply(obj, arguments));
    });
  }

  function arraySet(idx, value, config) {
    var deep          = config && config.deep;

    if (idx in this) {
      if (deep && this[idx] !== value && isMergableObject(value) && isMergableObject(this[idx])) {
        value = Immutable.merge(this[idx], value, {deep: true, mode: 'replace'});
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

      if (typeof(thisHead) === "object" && thisHead !== null) {
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
      addPropertyTo(array, "flatMap",  flatMap);
      addPropertyTo(array, "asObject", asObject);
      addPropertyTo(array, "asMutable", asMutableArray);
      addPropertyTo(array, "set", arraySet);
      addPropertyTo(array, "setIn", arraySetIn);
      addPropertyTo(array, "update", update);
      addPropertyTo(array, "updateIn", updateIn);
      addPropertyTo(array, "getIn", getIn);
    }

    for(var i = 0, length = array.length; i < length; i++) {
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
      var keysToRemoveArray = (Array.isArray(remove)) ?
         remove.slice() : Array.prototype.slice.call(arguments);

      // Convert numeric keys to strings since that's how they'll
      // come from the enumeration of the object.
      keysToRemoveArray.forEach(function(el, idx, arr) {
        if(typeof(el) === "number") {
          arr[idx] = el.toString();
        }
      });

      remove = function(val, key) {
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
    var result = [], i, length;

    if(opts && opts.deep) {
      for(i = 0, length = this.length; i < length; i++) {
        result.push(asDeepMutable(this[i]));
      }
    } else {
      for(i = 0, length = this.length; i < length; i++) {
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
      iterator = function(value) { return value; };
    }

    var result = {},
        length = this.length,
        index;

    for (index = 0; index < length; index++) {
      var pair  = iterator(this[index], index, this),
          key   = pair[0],
          value = pair[1];

      result[key] = value;
    }

    return makeImmutableObject(result);
  }

  function asDeepMutable(obj) {
    if (
      (!obj) ||
      (typeof obj !== 'object') ||
      (!Object.getOwnPropertyDescriptor(obj, immutabilityTag)) ||
      (obj instanceof Date)
    ) { return obj; }
    return Immutable.asMutable(obj, {deep: true});
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

    if (other === null || (typeof other !== "object")) {
      throw new TypeError("Immutable#merge can only be invoked with objects or arrays, not " + JSON.stringify(other));
    }

    var receivedArray = (Array.isArray(other)),
        deep          = config && config.deep,
        mode          = config && config.mode || 'merge',
        merger        = config && config.merger,
        result;

    // Use the given key to extract a value from the given object, then place
    // that value in the result object under the same key. If that resulted
    // in a change from this object's value at that key, set anyChanges = true.
    function addToResult(currentObj, otherObj, key) {
      var immutableValue = Immutable(otherObj[key]);
      var mergerResult = merger && merger(currentObj[key], immutableValue, config);
      var currentValue = currentObj[key];

      if ((result !== undefined) ||
        (mergerResult !== undefined) ||
        (!currentObj.hasOwnProperty(key)) ||
        !isEqual(immutableValue, currentValue)) {

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
    var deep          = config && config.deep;

    // Calling .replace() with no arguments is a no-op. Don't bother cloning.
    if (arguments.length === 0) {
      return this;
    }

    if (value === null || typeof value !== "object") {
      throw new TypeError("Immutable#replace can only be invoked with objects or arrays, not " + JSON.stringify(value));
    }

    return Immutable.merge(this, value, {deep: deep, mode: 'replace'});
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

    if (this.hasOwnProperty(head) && typeof(thisHead) === "object" && thisHead !== null) {
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
    var deep          = config && config.deep;

    if (this.hasOwnProperty(property)) {
      if (deep && this[property] !== value && isMergableObject(value) && isMergableObject(this[property])) {
        value = Immutable.merge(this[property], value, {deep: true, mode: 'replace'});
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

    return (i && i == l) ? obj : undefined;
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
    var result = instantiateEmptyObject(this), key;

    if(opts && opts.deep) {
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
    return typeof obj === 'object' &&
           obj !== null &&
           (obj.$$typeof === REACT_ELEMENT_TYPE_FALLBACK || obj.$$typeof === REACT_ELEMENT_TYPE);
  }

  function isFileObject(obj) {
    return typeof File !== 'undefined' &&
           obj instanceof File;
  }

  function isPromise(obj) {
    return typeof obj === 'object' &&
           typeof obj.then === 'function';
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
      var instantiateEmptyObject =
        (!prototype || prototype === Object.prototype) ?
          instantiatePlainObject : (function() { return Object.create(prototype); });
      var clone = instantiateEmptyObject();

      if (true) {
        /*jshint eqnull:true */
        if (stackRemaining == null) {
          stackRemaining = 64;
        }
        if (stackRemaining <= 0) {
          throw new ImmutableError("Attempt to construct Immutable from a deeply nested object was detected." +
            " Have you tried to wrap an object with circular references (e.g. React element)?" +
            " See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.");
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
  Immutable.from           = Immutable;
  Immutable.isImmutable    = isImmutable;
  Immutable.ImmutableError = ImmutableError;
  Immutable.merge          = toStatic(merge);
  Immutable.replace        = toStatic(objectReplace);
  Immutable.without        = toStatic(without);
  Immutable.asMutable      = toStaticObjectOrDateOrArray(asMutableObject, asMutableArray, asMutableDate);
  Immutable.set            = toStaticObjectOrArray(objectSet, arraySet);
  Immutable.setIn          = toStaticObjectOrArray(objectSetIn, arraySetIn);
  Immutable.update         = toStatic(update);
  Immutable.updateIn       = toStatic(updateIn);
  Immutable.getIn          = toStatic(getIn);
  Immutable.flatMap        = toStatic(flatMap);
  Immutable.asObject       = toStatic(asObject);
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
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return Immutable;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === "object") {
    module.exports = Immutable;
  } else if (typeof exports === "object") {
    exports.Immutable = Immutable;
  } else if (typeof window === "object") {
    window.Immutable = Immutable;
  } else if (typeof global === "object") {
    global.Immutable = Immutable;
  }
})();


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _seamlessImmutable = __webpack_require__(4);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ALIASES = exports.NAMES = exports.CARDS = undefined;

var _CARDS = __webpack_require__(7);

var _CARDS2 = _interopRequireDefault(_CARDS);

var _NAMES = __webpack_require__(20);

var _NAMES2 = _interopRequireDefault(_NAMES);

var _ALIASES = __webpack_require__(21);

var _ALIASES2 = _interopRequireDefault(_ALIASES);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CARDS = _CARDS2.default;
exports.NAMES = _NAMES2.default;
exports.ALIASES = _ALIASES2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"Adrenaline Rush":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"The beast rushed at them wildly, with fury in its eyes, immune to pain and any strikes the defenders could land. Nothing stood to stop it…","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/_SIFOcYAVMqjbIi8HKVS9w","info":"Toggle a Unit's Resilience.\n","name":"Adrenaline Rush","positions":["Event"],"uuid":"_SIFOcYAVMqjbIi8HKVS9w","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/adrenaline-rush-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/_SIFOcYAVMqjbIi8HKVS9w/variations/PLiQvtbcVA6E8GD0pR0PaQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"PLiQvtbcVA6E8GD0pR0PaQ"}]},"Aelirenn":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Better to die standing than to live on bent knee.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/PAj3wOL2Xlm5t63YjLxWhg","info":"When you have 5 or more Elf Allies, play this Unit from your Deck.\n","name":"Aelirenn","positions":["Ranged"],"strength":6,"uuid":"PAj3wOL2Xlm5t63YjLxWhg","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/aelirenn-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/PAj3wOL2Xlm5t63YjLxWhg/variations/JKToxvdGVaSYxoZMm7vCzA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"JKToxvdGVaSYxoZMm7vCzA"}]},"Aeromancy":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"The druid Vaedermakar controls the elements. He soothes storms into silence, musters destructive hail, summons lightning to turn foes into ash. So I advise you well… treat him with utmost respect.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/y98GaIwyXb-HnN0rf0p1kQ","info":"Play a Bronze or Silver Weather card from your Deck. Shuffle the others back into your Deck.\n","name":"Aeromancy","positions":["Event"],"uuid":"y98GaIwyXb-HnN0rf0p1kQ","variations":[{"art":{"artist":"Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/aeromancy-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/y98GaIwyXb-HnN0rf0p1kQ/variations/KmKCZfxxW02yUe4klbWdcg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"KmKCZfxxW02yUe4klbWdcg"}]},"Aglaïs":{"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Brokilon bleeds… and not even I can heal it.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/DwF8OwZRUYiyajzuBfH2aA","info":"Deploy: You may Resurrect a Special card from your opponent's Graveyard. If you do, Weaken self by 4.\n","name":"Aglaïs","positions":["Melee","Ranged","Siege"],"strength":10,"uuid":"DwF8OwZRUYiyajzuBfH2aA","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/aglais-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/DwF8OwZRUYiyajzuBfH2aA/variations/vQttiw0qVUWyGXhoVei-Tw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"vQttiw0qVUWyGXhoVei-Tw"}]},"Alba Pikeman":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Pledge your allegiance to our Emperor, Emhyr var Emreis… or die.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/yEGctJ81V_ay1go6m1TFYg","info":"After 2 turns, at the start of your turn, play an Alba Pikeman from your Deck on the row.\nDeploy: Gain 2 Armor.\n","name":"Alba Pikeman","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"yEGctJ81V_ay1go6m1TFYg","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/alba-pikeman-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/yEGctJ81V_ay1go6m1TFYg/variations/uIQ0VJq2V3q3S63OzqceMA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"uIQ0VJq2V3q3S63OzqceMA"}]},"Alba Spearmen":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Death and glory!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/Up9mM6SDUuqH4tNx7p0q9g","info":"Deploy: Give this Unit a Shield.\n","name":"Alba Spearmen","positions":["Ranged"],"strength":8,"uuid":"Up9mM6SDUuqH4tNx7p0q9g","variations":[{"art":{"artist":"Bruno Biazotto","thumbnailImage":"https://api.gwentapi.com/media/alba-spearmen-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/Up9mM6SDUuqH4tNx7p0q9g/variations/2bhfL2QzU46xI-ekbbixgg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"2bhfL2QzU46xI-ekbbixgg"}]},"Albrich":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"A ball of fire? Why, naturally. Whatsoever Your Imperial Majesty desires.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/zh9_mEPaUzy0la7NpwfO6w","info":"Deploy: If neither player has passed, each player draws the top card from their Deck. Your opponent's card is Revealed.\n","name":"Albrich","positions":["Siege"],"strength":9,"uuid":"zh9_mEPaUzy0la7NpwfO6w","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/albrich-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/zh9_mEPaUzy0la7NpwfO6w/variations/AuzzdsivU5mqXgRwS1DlBg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"AuzzdsivU5mqXgRwS1DlBg"}]},"Alchemist":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Two ounces of calcium equum, one ounce of rubedo…","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/gycZySRxV-2wgUFMzdNuFw","info":"Deploy: Reveal a card.\n","name":"Alchemist","positions":["Ranged"],"strength":8,"uuid":"gycZySRxV-2wgUFMzdNuFw","variations":[{"art":{"artist":"Sławomir Maniak","thumbnailImage":"https://api.gwentapi.com/media/alchemist-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/gycZySRxV-2wgUFMzdNuFw/variations/WUzgWcP1XnOQUVfssYY4Tg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"WUzgWcP1XnOQUVfssYY4Tg"}]},"Alzur's Double–Cross":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"A few of Alzur's monstrous creations roam the world still. Not least among them the horrid viy, who massacred its mage-creator and destroyed half of Maribor before fleeing into Riverdell's gloomy woodland.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/vPscZ3I3WHeJw7cSoQnJ1Q","info":"Boost one of the Highest Bronze or Silver Units in your Deck by 2 and play it.\n","name":"Alzur's Double–Cross","positions":["Event"],"uuid":"vPscZ3I3WHeJw7cSoQnJ1Q","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/alzur-s-double-cross-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/vPscZ3I3WHeJw7cSoQnJ1Q/variations/JnRmshGOUZeEkYaVXS1vDw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"JnRmshGOUZeEkYaVXS1vDw"}]},"Alzur's Thunder":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"We stand not the slightest chance of incanting a spell so complex as Alzur's Thunder. It is claimed Alzur had a voice like a hunting horn and the diction of a master orator.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/7M955k-GVnmTXoJzAOL-vQ","info":"Damage a Unit by 7.\n","name":"Alzur's Thunder","positions":["Event"],"uuid":"7M955k-GVnmTXoJzAOL-vQ","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/alzur-s-thunder-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/7M955k-GVnmTXoJzAOL-vQ/variations/0bIlcjwpVcKcmPyD0aHiRg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"0bIlcjwpVcKcmPyD0aHiRg"}]},"Ambassador":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"A spy? No, that's saying far too much. I consider myself more of an observer.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/3VjeXngBVDWO3-gS0djLHg","info":"Deploy: Boost an Ally by 10.\n","name":"Ambassador","positions":["Melee","Ranged","Siege"],"strength":2,"uuid":"3VjeXngBVDWO3-gS0djLHg","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/ambassador-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/3VjeXngBVDWO3-gS0djLHg/variations/nIrbiaq9V-S1fQHbvKBxEA","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"nIrbiaq9V-S1fQHbvKBxEA"}]},"Ancient Foglet":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg","name":"Necrophage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Many primal fears lurk in the hearts of men. The fear of the mist is well–founded…","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/hUA0zFrrXGCCpf3XOSDnuw","info":"Every turn, at the start of your turn, Boost self by 1 if Fog is anywhere on the Board.\n","name":"Ancient Foglet","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"hUA0zFrrXGCCpf3XOSDnuw","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/ancient-foglet-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/hUA0zFrrXGCCpf3XOSDnuw/variations/Nm4TxPYIW0e9zFXgs4R6Bw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"Nm4TxPYIW0e9zFXgs4R6Bw"}]},"Arachas":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/FTOev-YqW8qYw9ZLmXH5Bw","name":"Insectoid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Ugly – nature's way of saying stay away.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/G0YxFDJHWYCxrMvlCsfBPQ","info":"Deploy: Play all Arachasae from your Deck.\n","name":"Arachas","positions":["Ranged"],"strength":3,"uuid":"G0YxFDJHWYCxrMvlCsfBPQ","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/arachas-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/G0YxFDJHWYCxrMvlCsfBPQ/variations/m0yE68UcX3WRlE1-wrmgFQ","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"m0yE68UcX3WRlE1-wrmgFQ"}]},"Arachas Behemoth":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/FTOev-YqW8qYw9ZLmXH5Bw","name":"Insectoid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Like a cross between a crab, a spider… and a mountain.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/0pkMcgkrW3WFIN1cu2eZHA","info":"Whenever an Ally Consumes a card, Spawn an Arachas and Damage self by 1 (ignoring Armor).\nDeploy: Gain 2 Armor.\n","name":"Arachas Behemoth","positions":["Siege"],"strength":6,"uuid":"0pkMcgkrW3WFIN1cu2eZHA","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/arachas-behemoth-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/0pkMcgkrW3WFIN1cu2eZHA/variations/utzZdmNaVFyLw0tHs2X2aA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"utzZdmNaVFyLw0tHs2X2aA"}]},"Arachas Venom":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"If substance makes contact with eyes, rinse immediately with cold water, then commence drawing up will.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/yotiF-eRVQ6O37nauUVXJw","info":"Damage 3 adjacent Units by 4.\n","name":"Arachas Venom","positions":["Event"],"uuid":"yotiF-eRVQ6O37nauUVXJw","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/arachas-venom-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/yotiF-eRVQ6O37nauUVXJw/variations/9CslCuZrXsekZjvFwl8o6Q","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"9CslCuZrXsekZjvFwl8o6Q"}]},"Archgriffin":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ","name":"Beast"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"It's a griffin, just more… griffiny.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/g2Hpp_chVxCaG3Le2CgWYg","info":"Deploy: Clear Weather from the row on your side.\n","name":"Archgriffin","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"g2Hpp_chVxCaG3Le2CgWYg","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/archgriffin-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/g2Hpp_chVxCaG3Le2CgWYg/variations/2_Ou_8R1UweFa5Xguw6wOQ","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"2_Ou_8R1UweFa5Xguw6wOQ"}]},"Aretuza Adept":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"The adepts' every whim is catered to - they live like princesses at Aretuza. And in turn half the city lives off servicing them: seamstresses, milliners, confectioners, delivery boys…","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/ZIc3gjqcV9CWVaDjaaG6KQ","info":"Deploy: Play a random Bronze Weather card from your Deck.\n","name":"Aretuza Adept","positions":["Siege"],"strength":4,"uuid":"ZIc3gjqcV9CWVaDjaaG6KQ","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/aretuza-adept-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/ZIc3gjqcV9CWVaDjaaG6KQ/variations/QBR9soElUjqxbLl_FyKLJA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"QBR9soElUjqxbLl_FyKLJA"}]},"Assassination":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"How much is a human life worth?","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/vursNIg0Vv6pGJLjU5-urw","info":"Lock and Destroy an Enemy.\n","name":"Assassination","positions":["Event"],"uuid":"vursNIg0Vv6pGJLjU5-urw","variations":[{"art":{"artist":"Alicja Kapustka","thumbnailImage":"https://api.gwentapi.com/media/assassination-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/vursNIg0Vv6pGJLjU5-urw/variations/KankY6HWW-eQ8GYguB4pJw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"KankY6HWW-eQ8GYguB4pJw"}]},"Assire var Anahid":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Nilfgaardian mages do have a choice: servile submission, or the gallows.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/T6-prpX1VnauueZloZSu9Q","info":"Deploy: Shuffle up to 2 cards from either Graveyard into that player's Deck.\n","name":"Assire var Anahid","positions":["Siege"],"strength":10,"uuid":"T6-prpX1VnauueZloZSu9Q","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/assire-var-anahid-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/T6-prpX1VnauueZloZSu9Q/variations/FOGOUjvFW225XfgIDN7BgA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"FOGOUjvFW225XfgIDN7BgA"}]},"Auckes":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A","name":"Witcher"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Letho's got a plan… what could go wrong?","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/8OVcWAxgXDGUZo2qz_ezsA","info":"Deploy: Toggle 2 Units' Lock. If Enemies, Damage them by 1 as well.\n","name":"Auckes","positions":["Ranged"],"strength":4,"uuid":"8OVcWAxgXDGUZo2qz_ezsA","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/auckes-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/8OVcWAxgXDGUZo2qz_ezsA/variations/mRETemlDWK-1ThUxbwdeGQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"mRETemlDWK-1ThUxbwdeGQ"}]},"Avallac'h":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"You humans have… unusual tastes.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/Oi2X3jx8WaeR7orXVMEWGQ","info":"Deploy: If neither player has passed, both players draw the top 2 cards from their Deck.\n","name":"Avallac'h","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"Oi2X3jx8WaeR7orXVMEWGQ","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/avallac-h-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/Oi2X3jx8WaeR7orXVMEWGQ/variations/kBvEaYhZWf-kpPIXbUiVjA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"kBvEaYhZWf-kpPIXbUiVjA"}]},"Ballista":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g","name":"Machine"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"What crossbows want to be when they grow up.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/C33AhGODWDqYV2QGZRHJnA","info":"Deploy: Damage an Enemy and up to 3 other random Enemies with the same Power by 1.\nFresh Crew: Repeat the Deploy ability.\n","name":"Ballista","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"C33AhGODWDqYV2QGZRHJnA","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/ballista-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/C33AhGODWDqYV2QGZRHJnA/variations/Oq1xsYtmVgq6a6BU3RKO7w","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"Oq1xsYtmVgq6a6BU3RKO7w"}]},"Barclay Els":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA","name":"Dwarf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Our mead smells rotten to ye, do it? Easy to fix – I'll break yer nose!","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/qx-QO6yoVd2Hc-Ynvg6-bg","info":"Deploy: Play a random Bronze or Silver Dwarf from your Deck and Boost it by 3.\n","name":"Barclay Els","positions":["Siege"],"strength":2,"uuid":"qx-QO6yoVd2Hc-Ynvg6-bg","variations":[{"art":{"artist":"Grafit Studio ","thumbnailImage":"https://api.gwentapi.com/media/barclay-els-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/qx-QO6yoVd2Hc-Ynvg6-bg/variations/lqesiHD8VnC8_7OQHVG8Kw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"lqesiHD8VnC8_7OQHVG8Kw"}]},"Bekker's Twisted Mirror":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Gaze long into the abyss, and the abyss will gaze back into you.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/Pt3HG0SFVzuX7QidTUQdNA","info":"Swap the Power of the Highest and Lowest Unit.\n","name":"Bekker's Twisted Mirror","positions":["Event"],"uuid":"Pt3HG0SFVzuX7QidTUQdNA","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/bekker-s-twisted-mirror-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/Pt3HG0SFVzuX7QidTUQdNA/variations/9dSdVDaLU4acrm5-bYgWYQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"9dSdVDaLU4acrm5-bYgWYQ"}]},"Berserker Marauder":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ","name":"Cursed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Now finish your soup, or a berserker'll come and swallow ye whole.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/QQKrmedUVbSNfIRJHasS6A","info":"Deploy: Strengthen self by 1 for each Damaged Ally (including Golds), then Damage self by 1.\n","name":"Berserker Marauder","positions":["Melee"],"strength":8,"uuid":"QQKrmedUVbSNfIRJHasS6A","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/berserker-marauder-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/QQKrmedUVbSNfIRJHasS6A/variations/WCY4aGS2U8yl0JS1tiLIsg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"WCY4aGS2U8yl0JS1tiLIsg"}]},"Birna Bran":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Skellige must have a strong king. No matter what it takes.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/RcpTUjInXOmeoOgw554eFQ","info":"Deploy: Move a Unit from your opponent's Graveyard to yours.\nEvery turn, at the start of your turn, Damage self by 1 and Units adjacent to this Unit by 2.\n","name":"Birna Bran","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"RcpTUjInXOmeoOgw554eFQ","variations":[{"art":{"artist":"Grafit Studio, Katarzyna Redesiuk","thumbnailImage":"https://api.gwentapi.com/media/birna-bran-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/RcpTUjInXOmeoOgw554eFQ/variations/NSJalElzXo6wqGy65VGzKA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"NSJalElzXo6wqGy65VGzKA"}]},"Biting Frost":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA","name":"Weather"},{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Best thing about frost? Bodies of the fallen don't rot so quickly.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/5L7jhag2UdWcsqWg2z5rBw","info":"Apply Frost to a row on your opponent's side.\nFrost: Every turn, at the start of your turn, Damage one of the Lowest Units on the row by 2.\n","name":"Biting Frost","positions":["Melee","Ranged","Siege","Event"],"uuid":"5L7jhag2UdWcsqWg2z5rBw","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/biting-frost-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/5L7jhag2UdWcsqWg2z5rBw/variations/VD6Y60hhVxSG8NhY0VvlnQ","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"VD6Y60hhVxSG8NhY0VvlnQ"}]},"Black Infantry Arbalest":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"I aim for the knees. Always.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/sN6yvBkqXuO0BnMx7KukQg","info":"Deploy: Damage an Enemy by 3. If it was Boosted, Damage it by 5 instead.\n","name":"Black Infantry Arbalest","positions":["Ranged"],"strength":5,"uuid":"sN6yvBkqXuO0BnMx7KukQg","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/black-infantry-arbalest-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/sN6yvBkqXuO0BnMx7KukQg/variations/ThENHUGGXcGa4if4_5Sj4g","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"ThENHUGGXcGa4if4_5Sj4g"}]},"Bloodcurdling Roar":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"First we ran into a bear… things just got worse from there.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/JVayddWZWiWSmTIzz0Jdag","info":"Destroy an Ally.\nSpawn a Bear.\n","name":"Bloodcurdling Roar","positions":["Event"],"uuid":"JVayddWZWiWSmTIzz0Jdag","variations":[{"art":{"artist":"Alicja Użarowska","thumbnailImage":"https://api.gwentapi.com/media/bloodcurdling-roar-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/JVayddWZWiWSmTIzz0Jdag/variations/GSkd-KdnXmKgmRpd8XHANA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"GSkd-KdnXmKgmRpd8XHANA"}]},"Bloody Baron":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"I've not been a good father, I know, but… perhaps it's not too late.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/EmfMIU_FVKKiUU7TGR9YwQ","info":"If this Unit is in your Deck at the end of the Round, place it on top.\nWhenever an Enemy is Destroyed during a Round while this Unit is in your Deck, Boost it by 1.\n","name":"Bloody Baron","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"EmfMIU_FVKKiUU7TGR9YwQ","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/bloody-baron-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/EmfMIU_FVKKiUU7TGR9YwQ/variations/HNgB8eNMU_Gl8ccqXSjh1A","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"HNgB8eNMU_Gl8ccqXSjh1A"}]},"Blue Mountain Commando":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"By the time we'd heard them, it was already too late…","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/PBx-tKL5XgWY68Gq8AaFTA","info":"Whenever this Unit is moved, Boost it by 2.\nDeploy: Play all Blue Mountain Commandos from your Deck.\n","name":"Blue Mountain Commando","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"PBx-tKL5XgWY68Gq8AaFTA","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/blue-mountain-commando-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/PBx-tKL5XgWY68Gq8AaFTA/variations/CHrqA9xTWwOHKdMwcgE7IA","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"CHrqA9xTWwOHKdMwcgE7IA"}]},"Blue Stripes Commando":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/6mb4BjFJUKiOY3UfKkEVgQ","name":"Blue Stripes"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"I'd do anything for Temeria. Mostly though, I kill for her.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/hk8QrWJKUNO6shF2lfLHng","info":"Whenever a different Ally with the same Power as this Unit is played, play this Unit from your Deck (1 copy max) and place it on that Ally's row.\nWhenever you complete a Blue Stripes Commando Trio, create 1 base copy of a Blue Stripes Commando on the bottom of your Deck.\n","name":"Blue Stripes Commando","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"hk8QrWJKUNO6shF2lfLHng","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/blue-stripes-commando-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/hk8QrWJKUNO6shF2lfLHng/variations/5cszaWYkUbeOR0YlK9OSmg","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"5cszaWYkUbeOR0YlK9OSmg"}]},"Blue Stripes Scout":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/6mb4BjFJUKiOY3UfKkEVgQ","name":"Blue Stripes"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Blue Stripes and Scoia'tael are similar in one regard – hatred fuels both.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/iMj_PPeOWAe8v8oYIMXMww","info":"Deploy: Gain 2 Armor.\nDeploy: Clear Weather from the row on your side.\nCrewmen 1.\n","name":"Blue Stripes Scout","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"iMj_PPeOWAe8v8oYIMXMww","variations":[{"art":{"artist":"Marta Dettlaff","thumbnailImage":"https://api.gwentapi.com/media/blue-stripes-scout-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/iMj_PPeOWAe8v8oYIMXMww/variations/3trBricJWPe9OxgNrFCRUw","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"3trBricJWPe9OxgNrFCRUw"}]},"Blueboy Lugos":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"I'm near ready to puke from boredom.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/CRhj7cBlWeSIByK1_kymog","info":"Veteran 1.\nDeploy: Spawn a Spectral Whale on your opponent's side.\n","name":"Blueboy Lugos","positions":["Melee"],"strength":6,"uuid":"CRhj7cBlWeSIByK1_kymog","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/blueboy-lugos-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/CRhj7cBlWeSIByK1_kymog/variations/9rAqak2jXiO0QjyBTk6yyQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"9rAqak2jXiO0QjyBTk6yyQ"}]},"Botchling":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ","name":"Cursed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Admit your mistakes and bury them proper – else they'll come back to haunt you.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/Jx2KccPMUyWlkVL3mc4s9w","info":"Deploy: Boost all Lubberkins in your Hand, Deck and Graveyard by 5.\nDeathwish: Play a Lubberkin from your Deck.\n","name":"Botchling","positions":["Melee"],"strength":5,"uuid":"Jx2KccPMUyWlkVL3mc4s9w","variations":[{"art":{"artist":"Katarzyna Redesiuk","thumbnailImage":"https://api.gwentapi.com/media/botchling-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/Jx2KccPMUyWlkVL3mc4s9w/variations/ni3sfRexXimEKoL-T-wH_Q","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"ni3sfRexXimEKoL-T-wH_Q"}]},"Braenn":{"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Mona…? No… no. I'm Braenn. A daughter of Brokilon.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/F_rXaZNeVuKwn_aKwoCjLQ","info":"Deploy: Damage an Enemy by this Unit's Power.\n","name":"Braenn","positions":["Ranged"],"strength":5,"uuid":"F_rXaZNeVuKwn_aKwoCjLQ","variations":[{"art":{"artist":"Miles Johnston, Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/braenn-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/F_rXaZNeVuKwn_aKwoCjLQ/variations/Y7OaZGTmWauZ1bYj58Ha6w","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"Y7OaZGTmWauZ1bYj58Ha6w"}]},"Brouver Hoog":{"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"That doddery dolt? Ye cannae even tell if he's alive or stuffed!","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/61CL3W4jXw-oi4bi5JIbjg","info":"Spawn Brouver Hoog\nDeploy: Play a Silver Unit from your Deck. Shuffle the others back.\n","name":"Brouver Hoog","positions":["Event"],"strength":4,"uuid":"61CL3W4jXw-oi4bi5JIbjg","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/brouver-hoog-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/61CL3W4jXw-oi4bi5JIbjg/variations/7qY0UgW_U0Ou1K_cbeGnsw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"7qY0UgW_U0Ou1K_cbeGnsw"}]},"Cahir":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"},{"href":"https://api.gwentapi.com/v0/categories/27_uBiygVSmMLu-FnPZekw","name":"Stubborn"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"His eyes flashed under his winged helmet. Fire gleamed from his sword's blade.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/7QziT-N2W-GCFrNGWwUQEw","info":"Deploy: If playing as Nilfgaard, trigger your Leader's Deploy ability.\n","name":"Cahir","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"7QziT-N2W-GCFrNGWwUQEw","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/cahir-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/7QziT-N2W-GCFrNGWwUQEw/variations/riX5ICW5XmaTOPtENc6Vcg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"riX5ICW5XmaTOPtENc6Vcg"}]},"Cantarella":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Men require constant alluring. Mystique and refinement do the job quite well.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/bLkeCcb0VeaNNS2J73VLVA","info":"Deploy: Draw the top card from your Deck. Keep it, or place it at the bottom of your Deck and draw the new top card.\n","name":"Cantarella","positions":["Melee","Ranged","Siege"],"strength":10,"uuid":"bLkeCcb0VeaNNS2J73VLVA","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/cantarella-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/bLkeCcb0VeaNNS2J73VLVA/variations/YeyhsZVUX2W16gEXl0wk6A","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"YeyhsZVUX2W16gEXl0wk6A"}]},"Caranthir":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"},{"href":"https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw","name":"Wild Hunt"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"A favorite son who chose a life of villainy.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/yloS6Jo9Uvm8ldzQi1BSSg","info":"Deploy: Move 3 Enemies to this Unit's row on your opponent's side and apply Frost to that row on that side only.\n","name":"Caranthir","positions":["Melee","Ranged","Siege"],"strength":9,"uuid":"yloS6Jo9Uvm8ldzQi1BSSg","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/caranthir-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/yloS6Jo9Uvm8ldzQi1BSSg/variations/TvNdDoBUXaeelycudTKrZA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"TvNdDoBUXaeelycudTKrZA"}]},"Caretaker":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw","name":"Relict"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"There are more things in heaven and earth than all the world's philosophers have dreamt.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/U0TZoPPOW9apZe5mGJjRjg","info":"Deploy: Resurrect a Unit from your opponent's Graveyard.\n","name":"Caretaker","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"U0TZoPPOW9apZe5mGJjRjg","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/caretaker-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/U0TZoPPOW9apZe5mGJjRjg/variations/Ds9D9Yv1VAe-Q42ECpm8Iw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"Ds9D9Yv1VAe-Q42ECpm8Iw"}]},"Ceallach":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Your Imperial Highness… blurted out the seneschal, whose presence until now had been thoroughly ignored. I beg your pardon, but Cahir… My son...","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/wCID1BLQUES8gX1mfj2s2A","info":"Deploy: Move 2 Bronze Spying Enemies to your side.\n","name":"Ceallach","positions":["Melee"],"strength":8,"uuid":"wCID1BLQUES8gX1mfj2s2A","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/ceallach-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/wCID1BLQUES8gX1mfj2s2A/variations/dZRQI0_1UsmBjQc4bm8zqg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"dZRQI0_1UsmBjQc4bm8zqg"}]},"Celaeno Harpy":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ","name":"Beast"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Common harpies feed on carrion. Celaeno harpies… they feed on dreams.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/N4PKsF6dUSClL3pJn3-2Wg","info":"Deploy: Spawn 2 Harpy Eggs to the left of this Unit.\n","name":"Celaeno Harpy","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"N4PKsF6dUSClL3pJn3-2Wg","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/celaeno-harpy-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/N4PKsF6dUSClL3pJn3-2Wg/variations/KJkPIKS3VNedzYmsVdq1Ww","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"KJkPIKS3VNedzYmsVdq1Ww"}]},"Cerys":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"They call me Sparrowhawk. Know why? Because I eat rats like you for breakfast.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/OAlNhSDzVZ6xt5aRmUdu4Q","info":"After 4 Units are Resurrected on your side while this Unit is in the Graveyard, Resurrect it.\n","name":"Cerys","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"OAlNhSDzVZ6xt5aRmUdu4Q","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/cerys-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/OAlNhSDzVZ6xt5aRmUdu4Q/variations/EmfZLmDEXIa6vOo_um4jSw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"EmfZLmDEXIa6vOo_um4jSw"}]},"Champion of Champions":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ","name":"Ogroid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"He'll not reveal his name till he's defeated. He's a troll errant, see?","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/sn82k-BRVtSN6LmEdpGakg","info":"Every turn, at the start of your turn, Strengthen this Unit by 2 if it is the only Unit on the row.\n","name":"Champion of Champions","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"sn82k-BRVtSN6LmEdpGakg","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/champion-of-champions-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/sn82k-BRVtSN6LmEdpGakg/variations/Xp-gWAmzVu2huZ-UDASizA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"Xp-gWAmzVu2huZ-UDASizA"}]},"Chort":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw","name":"Relict"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"A member of the Bovine Defense Force. Semper fi!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/Lv2n7qW8XKOl_PhVTR-AXA","info":"Deploy, Brave: Strengthen self by 4.\n","name":"Chort","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"Lv2n7qW8XKOl_PhVTR-AXA","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/chort-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/Lv2n7qW8XKOl_PhVTR-AXA/variations/A6naXz1DVKOqYXGzOS6t4Q","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"A6naXz1DVKOqYXGzOS6t4Q"}]},"Ciaran":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"The path to freedom is paved in blood, not ink.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/OFonhAdJXP-olNm-QCB_jw","info":"Deploy: Toggle a Unit's Lock and move it to this row on its side.\n","name":"Ciaran","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"OFonhAdJXP-olNm-QCB_jw","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/ciaran-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/OFonhAdJXP-olNm-QCB_jw/variations/9YoVITPFXCKM1K-TpWFMNg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"9YoVITPFXCKM1K-TpWFMNg"}]},"Ciri":{"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"I go wherever I please, whenever I please.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/AhNJa4AfX86UnZsxMmuILQ","info":"At the end of the Round, return this Unit to your Hand if you lost.\n","name":"Ciri","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"AhNJa4AfX86UnZsxMmuILQ","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/ciri-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/AhNJa4AfX86UnZsxMmuILQ/variations/vV1ILCBAX_CVpXEqQIT28Q","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"vV1ILCBAX_CVpXEqQIT28Q"}]},"Ciri: Dash":{"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Know when fairy tales cease to be tales? When people start believing them.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/TxoSrAY6V62h0Ue6i62_wg","info":"When this Unit enters the Graveyard, Strengthen it by 3 and shuffle it back into your Deck.\n","name":"Ciri: Dash","positions":["Melee","Ranged","Siege"],"strength":9,"uuid":"TxoSrAY6V62h0Ue6i62_wg","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/ciri-dash-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/TxoSrAY6V62h0Ue6i62_wg/variations/ckGTWvJAXsa54D7J1b572Q","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"ckGTWvJAXsa54D7J1b572Q"}]},"Clan Brokvar Archer":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"So ye can hit a movin' target at two hundred paces? Me, too. In a storm.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/irbdjPrfX1ezExZQ1ZkyxA","info":"Veteran 1.\nDeploy: Damage 3 Units by 1.\n","name":"Clan Brokvar Archer","positions":["Siege"],"strength":5,"uuid":"irbdjPrfX1ezExZQ1ZkyxA","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/clan-brokvar-archer-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/irbdjPrfX1ezExZQ1ZkyxA/variations/yIqHOD2mVrarj1hOAgedng","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"yIqHOD2mVrarj1hOAgedng"}]},"Clan Brokvar Hunter":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Better believe we can hunt. Thing is, not much game on Spikeroog…","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/m-pK_rH7WRuVvx7JY8YHDw","info":"Whenever a Unit adjacent to this Unit is Damaged, Strengthen self by 1.\nDeploy: Damage a Unit by 3.\n","name":"Clan Brokvar Hunter","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"m-pK_rH7WRuVvx7JY8YHDw","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/clan-brokvar-hunter-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/m-pK_rH7WRuVvx7JY8YHDw/variations/0wGFKXTrWvKJzz9Z6a0oQg","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"0wGFKXTrWvKJzz9Z6a0oQg"}]},"Clan Dimun Pirate":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Can see the fear in their eyes. Fear o' me… fear o' Clan Dimun!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/-7iMsZFOXJKzlIYkHMajRQ","info":"Veteran 1.\nDeploy: Discard all copies of this Unit from your Deck.\n","name":"Clan Dimun Pirate","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"-7iMsZFOXJKzlIYkHMajRQ","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/clan-dimun-pirate-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/-7iMsZFOXJKzlIYkHMajRQ/variations/gt6ceb7iV0GtGHY3rUMvig","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"gt6ceb7iV0GtGHY3rUMvig"}]},"Clan Dimun Pirate Captain":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Haul together, hoist the colors high!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/_n4QZKc_XIekZg5v562PGw","info":"Veteran 1.\nWhenever a Unit is Discarded to your Graveyard, Boost self by 1 while in your Hand, Deck or on your side of the Board.\n","name":"Clan Dimun Pirate Captain","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"_n4QZKc_XIekZg5v562PGw","variations":[{"art":{"artist":"Grafit Studio, Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/clan-dimun-pirate-captain-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/_n4QZKc_XIekZg5v562PGw/variations/W6RQluw4VsOHCRP_CMCa3w","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"W6RQluw4VsOHCRP_CMCa3w"}]},"Clan Drummond Shieldmaiden":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"They'll shatter on our shields like waves on a craggy shore.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/ilvR1xZeXMCRI9myd7BWIg","info":"Deploy: Damage a Unit by 2. If it was already Damaged, play a Clan Drummond Shieldmaiden from your Deck.\n","name":"Clan Drummond Shieldmaiden","positions":["Ranged"],"strength":3,"uuid":"ilvR1xZeXMCRI9myd7BWIg","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/clan-drummond-shieldmaiden-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/ilvR1xZeXMCRI9myd7BWIg/variations/5fjsWzXHW-yhPnkHRgA4wQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"5fjsWzXHW-yhPnkHRgA4wQ"}]},"Clan Heymaey Skald":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"The deeds of Clan Heymaey will go down in history.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/UbkjAo29W4mY1xZqEr8r1Q","info":"Veteran 1.\nDeploy: Boost 3 Units to the left by 3, 2 and 1 respectively.\n","name":"Clan Heymaey Skald","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"UbkjAo29W4mY1xZqEr8r1Q","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/clan-heymaey-skald-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/UbkjAo29W4mY1xZqEr8r1Q/variations/aflZH6j6XHOS2xHHec1dmw","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"aflZH6j6XHOS2xHHec1dmw"}]},"Clan Tordarroch Armorsmith":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Ye're in for a poundin'.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/cPCPFyBhUNCnpJDp5LuvIA","info":"Veteran 1.\nDeploy: Heal 3 Units to the left.\n","name":"Clan Tordarroch Armorsmith","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"cPCPFyBhUNCnpJDp5LuvIA","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/clan-tordarroch-armorsmith-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/cPCPFyBhUNCnpJDp5LuvIA/variations/j7voCohVVQKkAaJ_62_Onw","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"j7voCohVVQKkAaJ_62_Onw"}]},"Clan Tordarroch Shieldsmith":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Remember me words – a good shield can save yer life.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/36aKwkLlWDa1GEvbe9rBEg","info":"Veteran 1.\nDeploy: Strengthen an Ally by 2.\n","name":"Clan Tordarroch Shieldsmith","positions":["Siege"],"strength":5,"uuid":"36aKwkLlWDa1GEvbe9rBEg","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/clan-tordarroch-shieldsmith-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/36aKwkLlWDa1GEvbe9rBEg/variations/GUYHzf6dUWGxda3UYIJZFQ","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"GUYHzf6dUWGxda3UYIJZFQ"}]},"Clan Tuirseach Axeman":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Swords are for wenches. Get yourself an axe.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/OBwsQEtRWgWvZWqQ04w1Pw","info":"Whenever an Enemy is Damaged, Boost self by 1.\nDeploy: Gain 2 Armor.\n","name":"Clan Tuirseach Axeman","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"OBwsQEtRWgWvZWqQ04w1Pw","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/clan-tuirseach-axeman-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/OBwsQEtRWgWvZWqQ04w1Pw/variations/LJWx84SrWFeVojJga2l4fA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"LJWx84SrWFeVojJga2l4fA"}]},"Clan Tuirseach Skirmishers":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Friends we show heart, foes we show our axe. Remember that.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/PxhzlhmNUO61AOxhHhGN3w","info":"Veteran 1.\nWhenever this Unit enters the Graveyard, Strengthen it by 3.\n","name":"Clan Tuirseach Skirmishers","positions":["Melee"],"strength":6,"uuid":"PxhzlhmNUO61AOxhHhGN3w","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/clan-tuirseach-skirmishers-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/PxhzlhmNUO61AOxhHhGN3w/variations/A7hg6ZloXXqIvlAKiIKhog","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"A7hg6ZloXXqIvlAKiIKhog"}]},"Clan an Craite Raider":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"We are An Craite! What others buy with gold, we buy with our lifeblood.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/-mYoNRB-WXGxIXsua83opg","info":"Veteran 1.\nWhenever this Unit is Discarded, Resurrect it immediately.\n","name":"Clan an Craite Raider","positions":["Melee"],"strength":4,"uuid":"-mYoNRB-WXGxIXsua83opg","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/clan-an-craite-raider-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/-mYoNRB-WXGxIXsua83opg/variations/-p6q-nZiV42Ksy0AwXeldQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"-p6q-nZiV42Ksy0AwXeldQ"}]},"Clan an Craite Warcrier":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Every man, woman and child in Skellige can split a foe with an axe. Only a select few can split enemy ears with a rage-filled cry.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/JniGwvqIV2253E5OIhfAUg","info":"Veteran 1.\nDeploy: Boost 3 Damaged Units to the left by half their Power (rounding down).\n","name":"Clan an Craite Warcrier","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"JniGwvqIV2253E5OIhfAUg","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/clan-an-craite-warcrier-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/JniGwvqIV2253E5OIhfAUg/variations/L6HkJ_u8VhCfekr-GfOV2g","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"L6HkJ_u8VhCfekr-GfOV2g"}]},"Clan an Craite Warrior":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Our clan's bards will sing of my deeds long after you're dead and forgotten!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/4aafCWy6XE6Vzrcwpk_JVQ","info":"Veteran 1.\nDeploy: Damage self by 1.\n","name":"Clan an Craite Warrior","positions":["Melee"],"strength":9,"uuid":"4aafCWy6XE6Vzrcwpk_JVQ","variations":[{"art":{"artist":"Grafit Studio, Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/clan-an-craite-warrior-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/4aafCWy6XE6Vzrcwpk_JVQ/variations/Qkf3YYO9VSWobDHuxovb9Q","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"Qkf3YYO9VSWobDHuxovb9Q"}]},"Cleaver":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA","name":"Dwarf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Everyone wantin' to trade in Novigrad's got a clear choice - agree terms with Cleaver or kiss their knees farewell.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/cvrYlp_0XQmj-2LvlZVnFQ","info":"Deploy: Toggle a Unit's Lock.\n","name":"Cleaver","positions":["Melee"],"strength":6,"uuid":"cvrYlp_0XQmj-2LvlZVnFQ","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/cleaver-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/cvrYlp_0XQmj-2LvlZVnFQ/variations/VzuK7HwYWKmJKbPfbIqZlA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"VzuK7HwYWKmJKbPfbIqZlA"}]},"Combat Engineer":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Want irrefutable proof of civilization's advance? Look at war. Man gets better at killing with each one.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/Xzm_18KPXAejou0c8Nq1eA","info":"Deploy: Toggle a Unit's Resilience.\n","name":"Combat Engineer","positions":["Siege"],"strength":2,"uuid":"Xzm_18KPXAejou0c8Nq1eA","variations":[{"art":{"artist":"Grafit Studio, Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/combat-engineer-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/Xzm_18KPXAejou0c8Nq1eA/variations/m_J3z5ZeUIOAWNQ47O-RBw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"m_J3z5ZeUIOAWNQ47O-RBw"}]},"Commander's Horn":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Plus one to morale, minus one to hearing.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/nmXBiYvjUTaV1d9lwTAbdQ","info":"Boost 5 adjacent Units by 4.\n","name":"Commander's Horn","positions":["Event"],"uuid":"nmXBiYvjUTaV1d9lwTAbdQ","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/commander-s-horn-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/nmXBiYvjUTaV1d9lwTAbdQ/variations/fu-egAKFVOuRSVibjnf5zw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"fu-egAKFVOuRSVibjnf5zw"}]},"Commando Neophyte":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Many nonhumans, fed up with the racism and xenophobia they encounter in the cities, decide to join the Scoia'tael.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/K28cA2TGWrGm4yItVifZdQ","info":"Whenever you Mulligan a card, Damage a random Enemy by 2.\n","name":"Commando Neophyte","positions":["Melee"],"strength":7,"uuid":"K28cA2TGWrGm4yItVifZdQ","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/commando-neophyte-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/K28cA2TGWrGm4yItVifZdQ/variations/Fv0Q85IGUdmSvuFeX59oUg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"Fv0Q85IGUdmSvuFeX59oUg"}]},"Coral":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Her true name's Astrid Lyttneyd Ásgeirrfinnbjornsdottir, but that never fit on any forms.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/l-m3HACVVXiF54qom24CMQ","info":"Deploy: Pick a Unit and Damage all Units on its row by half their Power (rounding up and ignoring Armor).\n","name":"Coral","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"l-m3HACVVXiF54qom24CMQ","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/coral-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/l-m3HACVVXiF54qom24CMQ/variations/56RS5Uw2WIWgBn16U7NSgw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"56RS5Uw2WIWgBn16U7NSgw"}]},"Crach an Craite":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Nilfgaardians call 'im Tirth ys Muire, the Wild Boar o' the Sea. Use 'im to scare their kiddies!","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/0yevWlnyUP6GY9buxdNQWg","info":"Spawn Crach an Craite\nDeploy: Play the Highest Loyal Bronze or Silver Unit in your Deck, Strengthen it by 3 and Damage it by 1.\n","name":"Crach an Craite","positions":["Event"],"strength":4,"uuid":"0yevWlnyUP6GY9buxdNQWg","variations":[{"art":{"artist":"Grafit Studio, Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/crach-an-craite-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/0yevWlnyUP6GY9buxdNQWg/variations/Y_-_DkdMWJGVnLV7c1yBmw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"Y_-_DkdMWJGVnLV7c1yBmw"}]},"Crone: Brewess":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"We'll cut you up, boy. A fine broth you'll make.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/bDMjrZSEV3CducTOYMiKMQ","info":"Deploy: Play Whispess and Weavess from your Deck.\n","name":"Crone: Brewess","positions":["Siege"],"strength":8,"uuid":"bDMjrZSEV3CducTOYMiKMQ","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/crone-brewess-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/bDMjrZSEV3CducTOYMiKMQ/variations/Gfyt3wS_U2SgxHGCzgogmA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"Gfyt3wS_U2SgxHGCzgogmA"}]},"Crone: Weavess":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"I sense your pain. I see your fear.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/mESx6zNFXsKSAw919qH35Q","info":"Deploy: Play Brewess and Whispess from your Deck.\n","name":"Crone: Weavess","positions":["Siege"],"strength":6,"uuid":"mESx6zNFXsKSAw919qH35Q","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/crone-weavess-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/mESx6zNFXsKSAw919qH35Q/variations/JF_g_UCOV7uMWb2_kw-88w","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"JF_g_UCOV7uMWb2_kw-88w"}]},"Crone: Whispess":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"I'd be your best – and last.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/lKFYB2atWvq7A5MkF_1-mg","info":"Deploy: Play Brewess and Weavess from your Deck.\n","name":"Crone: Whispess","positions":["Siege"],"strength":6,"uuid":"lKFYB2atWvq7A5MkF_1-mg","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/crone-whispess-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/lKFYB2atWvq7A5MkF_1-mg/variations/GBJSytlCW_62nC9sJG2gig","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"GBJSytlCW_62nC9sJG2gig"}]},"Cynthia":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Cynthia's talents can be deadly. She needs a tight leash.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/UTSsWC-XXSad7PMdXsqYhQ","info":"Deploy: Reveal one of the Highest Units in your opponent's Hand (including Golds) and Boost self by its Power.\n","name":"Cynthia","positions":["Ranged"],"strength":5,"uuid":"UTSsWC-XXSad7PMdXsqYhQ","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/cynthia-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/UTSsWC-XXSad7PMdXsqYhQ/variations/_HCldbFlUmeFzIGI_cqVLA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"_HCldbFlUmeFzIGI_cqVLA"}]},"Cyprian Wiley":{"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"One of four bosses who control the city's underworld - the others being Sigi Reuven, Carlo The Cleaver Varese and the King of Beggars.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/FpYlvbJwU3GVcCiM72ZUXw","info":"Deploy: Weaken a Unit by 3 or Destroy an Ambush Unit.\n","name":"Cyprian Wiley","positions":["Siege"],"strength":7,"uuid":"FpYlvbJwU3GVcCiM72ZUXw","variations":[{"art":{"artist":"Alicja Kapustka","thumbnailImage":"https://api.gwentapi.com/media/cyprian-wiley-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/FpYlvbJwU3GVcCiM72ZUXw/variations/SdxJpeg0V2OO7yiHsX0wVg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"SdxJpeg0V2OO7yiHsX0wVg"}]},"Daerlan Foot Soldiers":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Learned a lot at Braibant Military Academy. How to scrub potatoes, for instance.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/RvqLmbRKXxqw5S9UKcPGRw","info":"Whenever this Unit is Revealed, play it and draw the top card from your Deck.\n","name":"Daerlan Foot Soldiers","positions":["Melee"],"strength":4,"uuid":"RvqLmbRKXxqw5S9UKcPGRw","variations":[{"art":{"artist":"Alicja Kapustka","thumbnailImage":"https://api.gwentapi.com/media/daerlan-foot-soldiers-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/RvqLmbRKXxqw5S9UKcPGRw/variations/_aw78eU7XEirjlVZC-LDzA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"_aw78eU7XEirjlVZC-LDzA"}]},"Dagon":{"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"That is not dead which can eternal lie, and with strange aeons even death may die.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/a8bdVQGjV6KaullcE8mc9Q","info":"Spawn Dagon.\nDeploy: Spawn Biting Frost, Impenetrable Fog or Torrential Rain.\n","name":"Dagon","positions":["Event"],"strength":6,"uuid":"a8bdVQGjV6KaullcE8mc9Q","variations":[{"art":{"artist":"Alejandro Mirabal","thumbnailImage":"https://api.gwentapi.com/media/dagon-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/a8bdVQGjV6KaullcE8mc9Q/variations/qitgaTPXWDavN66eb87TKw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"qitgaTPXWDavN66eb87TKw"}]},"Dandelion":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Dandelion, you're a cynic, a lecher, a liar – and my best friend.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/9dOGFiu7Vom0QV2-GPaqpQ","info":"Deploy: Boost up to 3 Bronze or Silver Units in your Deck by 3, then shuffle your Deck.\n","name":"Dandelion","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"9dOGFiu7Vom0QV2-GPaqpQ","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/dandelion-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/9dOGFiu7Vom0QV2-GPaqpQ/variations/J5DJ24pQWe6fg0gnUQKdEg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"J5DJ24pQWe6fg0gnUQKdEg"}]},"Decoy":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"When you run out of peasants, decoys also make decent arrow fodder.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/x0KYIX5mXk6aIQwgv7ITZQ","info":"Return an Ally to your Hand, Boost it by 3 and play it.\n","name":"Decoy","positions":["Event"],"uuid":"x0KYIX5mXk6aIQwgv7ITZQ","variations":[{"art":{"artist":"Alicja Użarowska","thumbnailImage":"https://api.gwentapi.com/media/decoy-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/x0KYIX5mXk6aIQwgv7ITZQ/variations/-SCHzEPsW_qETnOmIr-psw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"-SCHzEPsW_qETnOmIr-psw"}]},"Dennis Cranmer":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA","name":"Dwarf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"I know how to execute orders, so take your advice somewhere else.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/8qI4jHv4XQqEumzjxOZXTg","info":"Deploy: Strengthen all other Bronze and Silver Dwarves in your Deck, Hand and on your side of the Board by 1.\n","name":"Dennis Cranmer","positions":["Melee"],"strength":8,"uuid":"8qI4jHv4XQqEumzjxOZXTg","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/dennis-cranmer-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/8qI4jHv4XQqEumzjxOZXTg/variations/3ANbyuzKVbC2OdapTQPeLQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"3ANbyuzKVbC2OdapTQPeLQ"}]},"Dethmold":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"I once made a prisoner vomit his own entrails… Ah, good times…","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/EsC3l8bKU_eV-bkqVOtQfQ","info":"Deploy: Spawn Torrential Rain, Clear Skies or Alzur's Thunder.\n","name":"Dethmold","positions":["Siege"],"strength":3,"uuid":"EsC3l8bKU_eV-bkqVOtQfQ","variations":[{"art":{"artist":"Lasahido Lius","thumbnailImage":"https://api.gwentapi.com/media/dethmold-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/EsC3l8bKU_eV-bkqVOtQfQ/variations/wycWTkbuVZOphZO1ihV-Bg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"wycWTkbuVZOphZO1ihV-Bg"}]},"Dijkstra":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Really believe you can dupe me with that tale you just pulled from your arse?","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/f1KVhgFIViqvMH_o5VTBNA","info":"Deploy: Play the top 2 cards in your Deck.\n","name":"Dijkstra","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"f1KVhgFIViqvMH_o5VTBNA","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/dijkstra-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/f1KVhgFIViqvMH_o5VTBNA/variations/a_SsQ0huWrqGbkJ4AZex4w","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"a_SsQ0huWrqGbkJ4AZex4w"}]},"Dimeritium Bomb":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"An important part of every Witch Hunter's kit. In one muted flash, it turns the most powerful sorcerer into pork jelly ripe for cutting.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/8O1CKcf_UjWRmdfbAmkE-w","info":"Choose 3 adjacent Units (can be Golds) and Reset them. If any are Gold, Demote them first.\n","name":"Dimeritium Bomb","positions":["Event"],"uuid":"8O1CKcf_UjWRmdfbAmkE-w","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/dimeritium-bomb-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/8O1CKcf_UjWRmdfbAmkE-w/variations/EEhl3wGGX0eCJDQZZcXuvA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"EEhl3wGGX0eCJDQZZcXuvA"}]},"Dimeritium Shackles":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"The mage's arms were twisted and bound behind his back. The Redanians gave the fetters a good shake. Terranova cried out, lurched, bent backwards, bowed forward, then retched and groaned. It was clear of what his manacles were made.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/WA5NdIxvXOe8xEfXUHFNtQ","info":"Choose a Unit (can be Gold) and toggle its Lock. If it is Gold, Demote it first.\n","name":"Dimeritium Shackles","positions":["Event"],"uuid":"WA5NdIxvXOe8xEfXUHFNtQ","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/dimeritium-shackles-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/WA5NdIxvXOe8xEfXUHFNtQ/variations/dCJnIybQUuagf2UQiGgyeQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"dCJnIybQUuagf2UQiGgyeQ"}]},"Djenge Frett":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"When a warrant says dead or alive, most bounty hunters'll just kill you. Not me. Should I catch you, you'll hang, and I'll tickle your feet as you expire.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/bSOAPPVSU52oapkl-132Aw","info":"Veteran 1.\nDeploy: Damage 3 Allies by 1 and Strengthen self by 1 for each.\n","name":"Djenge Frett","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"bSOAPPVSU52oapkl-132Aw","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/djenge-frett-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/bSOAPPVSU52oapkl-132Aw/variations/-z5kirobVbO5fKTYVKfBBg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"-z5kirobVbO5fKTYVKfBBg"}]},"Dol Blathanna Archer":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Take another step, dh'oine. You'd look better with an arrow between your eyes.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/Vhp_DlSyXROg2jOmNeQCFA","info":"Deploy: Damage Enemies by 3 and then 1.\n","name":"Dol Blathanna Archer","positions":["Ranged"],"strength":5,"uuid":"Vhp_DlSyXROg2jOmNeQCFA","variations":[{"art":{"artist":"Ilker Serdar Yildiz","thumbnailImage":"https://api.gwentapi.com/media/dol-blathanna-archer-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/Vhp_DlSyXROg2jOmNeQCFA/variations/wj4c_xwiXvyfzH5xJnaHkw","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"wj4c_xwiXvyfzH5xJnaHkw"}]},"Dol Blathanna Marksman":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"You might manage to hide from them, but once spotted, don't bother trying to run.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/CGyTeXeDVXSgpfpdm2kbKw","info":"Every time this Unit is moved, Damage a random Enemy by 2.\nDeploy: Damage an Enemy by 2.\n","name":"Dol Blathanna Marksman","positions":["Ranged"],"strength":6,"uuid":"CGyTeXeDVXSgpfpdm2kbKw","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/dol-blathanna-marksman-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/CGyTeXeDVXSgpfpdm2kbKw/variations/lofmh-B5W3-uif0XklPt0A","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"lofmh-B5W3-uif0XklPt0A"}]},"Dol Blathanna Protector":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"As long as we stand, no human foot shall trample Dol Blathanna's meadows.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/s8pfZRN6UBuPkzDjUj1nqw","info":"Whenever you play a Special card, Boost this Unit by 1 while in your Hand, Deck or on your side of the Board.\n","name":"Dol Blathanna Protector","positions":["Melee","Ranged","Siege"],"strength":2,"uuid":"s8pfZRN6UBuPkzDjUj1nqw","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/dol-blathanna-protector-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/s8pfZRN6UBuPkzDjUj1nqw/variations/N0181DysVNWM3GjvDiHEEw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"N0181DysVNWM3GjvDiHEEw"}]},"Dol Blathanna Trapper":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"They track like hounds, run like deer and kill like heartless demons.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/-4hXN9rFUJ--NG63ti7Azg","info":"Deploy: Spawn a Fireball Trap on an opposing row.\n","name":"Dol Blathanna Trapper","positions":["Ranged"],"strength":6,"uuid":"-4hXN9rFUJ--NG63ti7Azg","variations":[{"art":{"artist":"Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/dol-blathanna-trapper-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/-4hXN9rFUJ--NG63ti7Azg/variations/e4y8bYmIUkGEX7fhIpGdHg","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"e4y8bYmIUkGEX7fhIpGdHg"}]},"Donar an Hindar":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"I've gathered all the jarls together. Now make your case.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/54IUWi1qUWmG6x3PCZRnRA","info":"Veteran 1.\nDeploy: Toggle a Unit's Lock. Discard a random Bronze card from your opponent's Deck to your Graveyard.\n","name":"Donar an Hindar","positions":["Ranged"],"strength":6,"uuid":"54IUWi1qUWmG6x3PCZRnRA","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/donar-an-hindar-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/54IUWi1qUWmG6x3PCZRnRA/variations/Sg3g7UOnXcmwUXMkOXfPLg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"Sg3g7UOnXcmwUXMkOXfPLg"}]},"Draig Bon–Dhu":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Hear ye now the tale of the heroic deeds of Clan an Craite.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/Fct2qt0KXdGNoW4amR-p8A","info":"Deploy: Strengthen up to 2 Units in your Graveyard by 3.\n","name":"Draig Bon–Dhu","positions":["Siege"],"strength":4,"uuid":"Fct2qt0KXdGNoW4amR-p8A","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/draig-bon-dhu-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/Fct2qt0KXdGNoW4amR-p8A/variations/rQSvuBQEWs-n4g5GAQsGaA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"rQSvuBQEWs-n4g5GAQsGaA"}]},"Draug":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/1JN4dSZjX8G-J58kruQ_hA","name":"Specter"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Some men cannot admit defeat. Some keep fighting from beyond the grave.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/h2jLlO8UWcmBqB0qr5D8wg","info":"Deploy: Damage a random Enemy by 1 (ignoring Armor). Repeat 6 times.\n","name":"Draug","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"h2jLlO8UWcmBqB0qr5D8wg","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/draug-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/h2jLlO8UWcmBqB0qr5D8wg/variations/z_hg5u_GUw655_dwaAzQhw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"z_hg5u_GUw655_dwaAzQhw"}]},"Drought":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA","name":"Weather"},{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Vicovaro scholars have determined that, in the absence of imperial aid, drought-stricken provinces lose half their population, two-thirds of their livestock and all their will to rebel.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/oGgn9jocX8mytKs4OTgFtA","info":"Apply Drought to all rows on your opponent's side.\nDrought: Every turn, at the start of your turn, Damage one of the Lowest Units on the row by 2.\n","name":"Drought","positions":["Event"],"uuid":"oGgn9jocX8mytKs4OTgFtA","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/drought-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/oGgn9jocX8mytKs4OTgFtA/variations/sJkuvPwOVHi2CChCQAg2kA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"sJkuvPwOVHi2CChCQAg2kA"}]},"Drowner":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg","name":"Necrophage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Though the witchman lusts for gold, for the smiting of a drowner thou shalt give him but a silver penny, or three halfpence, at most.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/qIVSZxz9UsaUOORO2SdIFQ","info":"Deploy: Move a Unit to this row on its side.\n","name":"Drowner","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"qIVSZxz9UsaUOORO2SdIFQ","variations":[{"art":{"artist":"Adrian Smith","thumbnailImage":"https://api.gwentapi.com/media/drowner-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/qIVSZxz9UsaUOORO2SdIFQ/variations/7qFiiTZaU1ytKnvSdrPGIA","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"7qFiiTZaU1ytKnvSdrPGIA"}]},"Dudu":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw","name":"Relict"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"A mimic, among the many other names for his sort: changelings, doublings, vexlings… or dopplers.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/9ACPtOWKV6OFT_iUvQ7E7w","info":"Deploy: Choose an Enemy and copy its Power.\n","name":"Dudu","positions":["Melee","Ranged","Siege"],"strength":1,"uuid":"9ACPtOWKV6OFT_iUvQ7E7w","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/dudu-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/9ACPtOWKV6OFT_iUvQ7E7w/variations/LDmYq3m6UVung9Iz_g0QPw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"LDmYq3m6UVung9Iz_g0QPw"}]},"Dun Banner Heavy Cavalry":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Always wondered – how the blazes do those lads handle nature's call…?","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/eVAFOwdNU6ip9AyvBm8DWQ","info":"Deploy: Remove Armor from 2 Units and Boost self by the amount of Armor removed.\n","name":"Dun Banner Heavy Cavalry","positions":["Siege"],"strength":4,"uuid":"eVAFOwdNU6ip9AyvBm8DWQ","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/dun-banner-heavy-cavalry-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/eVAFOwdNU6ip9AyvBm8DWQ/variations/-V4yriL-W8qY4m9fUb6ntw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"-V4yriL-W8qY4m9fUb6ntw"}]},"Dun Banner Light Cavalry":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Stay calm, everyone. And be alert. The true owners of those cloaks and beaver–skin caps might be elsewhere.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/7uy2lCexXliNGpAhX5dWCg","info":"If at the start of your turn you have not passed and are losing the Round by more than 20 Power, play this Unit from your Deck.\n","name":"Dun Banner Light Cavalry","positions":["Ranged"],"strength":4,"uuid":"7uy2lCexXliNGpAhX5dWCg","variations":[{"art":{"artist":"Lasahido Lius","thumbnailImage":"https://api.gwentapi.com/media/dun-banner-light-cavalry-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/7uy2lCexXliNGpAhX5dWCg/variations/or7DIfn4XICF4HDEx630yg","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"or7DIfn4XICF4HDEx630yg"}]},"Dwarven Mercenary":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA","name":"Dwarf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"The key's mixin' pleasure an' business – like smackin' foes and gettin' coin for it.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/PE4uAMXIWtmZBKSoAF36Bw","info":"Deploy: Move a Unit on another row to this row on its side. If it's an Ally, Boost it by 3.\n","name":"Dwarven Mercenary","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"PE4uAMXIWtmZBKSoAF36Bw","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/dwarven-mercenary-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/PE4uAMXIWtmZBKSoAF36Bw/variations/ZhSgHZKNWq2vLtzhPKAwHQ","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"ZhSgHZKNWq2vLtzhPKAwHQ"}]},"Dwarven Skirmisher":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA","name":"Dwarf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Worked a pickaxe all me life. Battleaxe won't be any trouble.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/nopqCR4FVtiVYIoUIPCqLA","info":"Deploy: Damage an Enemy by 3. If the Unit was not Destroyed, Boost self by 2.\n","name":"Dwarven Skirmisher","positions":["Siege"],"strength":5,"uuid":"nopqCR4FVtiVYIoUIPCqLA","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/dwarven-skirmisher-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/nopqCR4FVtiVYIoUIPCqLA/variations/Ve4IKo39W2Wm9_xNUGzThg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"Ve4IKo39W2Wm9_xNUGzThg"}]},"Earth Elemental":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fSkGIO3GV8CMFm8EY5FHyw","name":"Construct"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"How do you fight an earth elemental? You don't. You run. Fast as you can.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/pAqdb8zcUjqKWlMKy8X_Tw","info":"Deploy: Give this Unit a Shield.\nDeathwish: Spawn 2 Lesser Earth Elementals at the end of the row.\n","name":"Earth Elemental","positions":["Melee"],"strength":6,"uuid":"pAqdb8zcUjqKWlMKy8X_Tw","variations":[{"art":{"artist":"Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/earth-elemental-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/pAqdb8zcUjqKWlMKy8X_Tw/variations/e3kxC0vEW6ytImZjInHCJA","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"e3kxC0vEW6ytImZjInHCJA"}]},"Eithné":{"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"The dryad queen has eyes of molten silver, and a heart of cold–forged steel.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/xTEJt1aCXxWo-of63YYWVg","info":"Spawn Eithné\nDeploy: Resurrect a Special card.\n","name":"Eithné","positions":["Event"],"strength":5,"uuid":"xTEJt1aCXxWo-of63YYWVg","variations":[{"art":{"artist":"Dário Coelho","thumbnailImage":"https://api.gwentapi.com/media/eithne-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/xTEJt1aCXxWo-of63YYWVg/variations/myA_8rvbXE6Ql-X7chxaAA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"myA_8rvbXE6Ql-X7chxaAA"}]},"Ekimmara":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/nfEYjnG7WJq7UQ6_OuZsmQ","name":"Vampire"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Who would think that overgrown bats would have a taste for gaudy jewelry?","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/vaOCbK7RVaOFel11_dla3w","info":"Deploy: Gain Resilience.\nDeploy: Consume an Ally.\n","name":"Ekimmara","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"vaOCbK7RVaOFel11_dla3w","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/ekimmara-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/vaOCbK7RVaOFel11_dla3w/variations/sP3f1xLlWweFjwAmLuk9VQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"sP3f1xLlWweFjwAmLuk9VQ"}]},"Ele'yas":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Love justifies madness in any of its forms.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/x6z1ZsAXUd-feoAP3wUcHA","info":"Deploy: Destroy an Ally and Damage an Enemy by the Destroyed Ally's Power.\n","name":"Ele'yas","positions":["Melee"],"strength":9,"uuid":"x6z1ZsAXUd-feoAP3wUcHA","variations":[{"art":{"artist":"Diego de Almeida","thumbnailImage":"https://api.gwentapi.com/media/ele-yas-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/x6z1ZsAXUd-feoAP3wUcHA/variations/MHxGqHcbW6ivs25ZmvRqqw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"MHxGqHcbW6ivs25ZmvRqqw"}]},"Elven Mercenary":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"I spit on Scoia'tael ideals, but not on their coin.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/d-uQXJFjXDijlwUOJ_Rk-A","info":"Deploy: Draw the top 2 Bronze Special cards in your Deck. Play 1 and shuffle the other back.\n","name":"Elven Mercenary","positions":["Melee","Ranged","Siege"],"strength":2,"uuid":"d-uQXJFjXDijlwUOJ_Rk-A","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/elven-mercenary-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/d-uQXJFjXDijlwUOJ_Rk-A/variations/zSRuGnRPVJSs86ICMOjpPA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"zSRuGnRPVJSs86ICMOjpPA"}]},"Elven Wardancer":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"You mean to say the she–elf danced amidst the fray? Have you lost your mind, corporal?!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/Xf2XAN9mXJ26xMlCGPRWYg","info":"Whenever you Mulligan this Unit, play it from your Deck immediately.\n","name":"Elven Wardancer","positions":["Melee"],"strength":3,"uuid":"Xf2XAN9mXJ26xMlCGPRWYg","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/elven-wardancer-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/Xf2XAN9mXJ26xMlCGPRWYg/variations/gzbminc4Xl2z_mpiZRNv8Q","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"gzbminc4Xl2z_mpiZRNv8Q"}]},"Emhyr var Emreis":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"They do not call me the Patient. Take care they do not call you the Headless.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/l0iUO6eWWMSA7Z0jLWXRSw","info":"Spawn Emhyr var Emreis\nDeploy: Return an Ally to your Hand, then play a card from your Hand (can be Gold).\n","name":"Emhyr var Emreis","positions":["Event"],"strength":6,"uuid":"l0iUO6eWWMSA7Z0jLWXRSw","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/emhyr-var-emreis-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/l0iUO6eWWMSA7Z0jLWXRSw/variations/JCE9nB0IX0ekOk1-cQsb6A","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"JCE9nB0IX0ekOk1-cQsb6A"}]},"Emissary":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"But… but there's no justice in it! One does not kill the messenger!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/AtKKDvuJWNu7QsWg_Zuggg","info":"Deploy: Draw the top 2 Bronze Units (not including Emissaries) from your Deck. Play 1 and shuffle the other back.\n","name":"Emissary","positions":["Melee","Ranged","Siege"],"strength":2,"uuid":"AtKKDvuJWNu7QsWg_Zuggg","variations":[{"art":{"artist":"Bruno Biazotto","thumbnailImage":"https://api.gwentapi.com/media/emissary-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/AtKKDvuJWNu7QsWg_Zuggg/variations/jck-hZyDVTGdqPhr0N8Mew","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"jck-hZyDVTGdqPhr0N8Mew"}]},"Epidemic":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Epidemics respect no persons, no borders.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/skl7tCzpXsSjZxX1iRj52A","info":"Destroy all the Lowest Units.\n","name":"Epidemic","positions":["Event"],"uuid":"skl7tCzpXsSjZxX1iRj52A","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/epidemic-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/skl7tCzpXsSjZxX1iRj52A/variations/r3WvqIu-UTWDf1gFC5be5g","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"r3WvqIu-UTWDf1gFC5be5g"}]},"Eredin":{"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Have some dignity. You know how this will end.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/zeJ6DKvuWCKNLuhFd0X2WQ","info":"Spawn Eredin.\nDeploy: Spawn a Bronze Wild Hunt Unit.\n","name":"Eredin","positions":["Event"],"strength":5,"uuid":"zeJ6DKvuWCKNLuhFd0X2WQ","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/eredin-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/zeJ6DKvuWCKNLuhFd0X2WQ/variations/122yxE3WXMK39iNrjz2a5A","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"122yxE3WXMK39iNrjz2a5A"}]},"Ermion":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Only the ignorant dismiss the importance of myths.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/IjZSRrtzWYS_xKTyj2ylGg","info":"Deploy: Draw the top 2 cards from your Deck, then Discard 2 cards (can be Golds) from your Hand.\n","name":"Ermion","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"IjZSRrtzWYS_xKTyj2ylGg","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/ermion-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/IjZSRrtzWYS_xKTyj2ylGg/variations/07Ewr6SZXUa0SEucAAks9A","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"07Ewr6SZXUa0SEucAAks9A"}]},"Eskel":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A","name":"Witcher"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"I'm a simple witcher, Wolf. Don't fight dragons, don't fraternize with kings and don't sleep with sorceresses…","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/HQCNfX-JW-6aWOOqME2Bcw","info":"Deploy: Play Vesemir and Lambert from your Deck.\n","name":"Eskel","positions":["Melee"],"strength":5,"uuid":"HQCNfX-JW-6aWOOqME2Bcw","variations":[{"art":{"artist":"Chris Rallis, Alicja Kapustka","thumbnailImage":"https://api.gwentapi.com/media/eskel-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/HQCNfX-JW-6aWOOqME2Bcw/variations/H-7ys8UNXCSFKIVnF-pj3Q","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"H-7ys8UNXCSFKIVnF-pj3Q"}]},"Fake Ciri":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Here she comes, he thought, our imperial interest. A mock-princess, a mock-queen for Cintra. A mock-ruler for the mouth of the Yarra, future lifeblood of the empire.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/HgqYwnuoWA6Nnq0VoFTjNQ","info":"If this Unit is Spying at the start of your turn, Boost it by 1. If it is Spying when your opponent passes, move it to the opposite side.\nDeploy: When you play this Unit on your side, Strengthen it by 3.\n","name":"Fake Ciri","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"HgqYwnuoWA6Nnq0VoFTjNQ","variations":[{"art":{"artist":"Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/fake-ciri-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/HgqYwnuoWA6Nnq0VoFTjNQ/variations/xd7T7X_ZU5KheA0eyMeGLw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"xd7T7X_ZU5KheA0eyMeGLw"}]},"Field Medic":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Stitch red to red, white to white, and everything will be all right.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/fSuTfITIXGC_qL1pL7ZY1w","info":"Deploy: Choose a different Bronze Ally and shuffle it back into your Deck, then play a random Bronze Unit from your Deck.\n","name":"Field Medic","positions":["Siege"],"strength":4,"uuid":"fSuTfITIXGC_qL1pL7ZY1w","variations":[{"art":{"artist":"Diego de Almeida","thumbnailImage":"https://api.gwentapi.com/media/field-medic-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/fSuTfITIXGC_qL1pL7ZY1w/variations/MmRYCB90W4msm0Gtawsp1A","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"MmRYCB90W4msm0Gtawsp1A"}]},"Fiend":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw","name":"Relict"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"A fiend looks a bit like a deer. An enormous, evil deer.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/wKqfFJysVdaDshrcOKeazQ","info":"Deploy: Toggle a Unit's Lock. If it's an Enemy, Damage it by half its Power (rounding up and ignoring Armor).\n","name":"Fiend","positions":["Melee"],"strength":5,"uuid":"wKqfFJysVdaDshrcOKeazQ","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/fiend-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/wKqfFJysVdaDshrcOKeazQ/variations/P1KJwpiiU2W_TCV2zj1j6A","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"P1KJwpiiU2W_TCV2zj1j6A"}]},"Fire Elemental":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fSkGIO3GV8CMFm8EY5FHyw","name":"Construct"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Can't stand the heat? Then you don't stand a chance.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/NVQZ7dpMVNCTV_glc72yiQ","info":"Deploy: Spawn 3 Lesser Fire Elementals.\n","name":"Fire Elemental","positions":["Siege"],"strength":7,"uuid":"NVQZ7dpMVNCTV_glc72yiQ","variations":[{"art":{"artist":"Bayard Wu ","thumbnailImage":"https://api.gwentapi.com/media/fire-elemental-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/NVQZ7dpMVNCTV_glc72yiQ/variations/BBQWPaQNVROWtKTpzaphMg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"BBQWPaQNVROWtKTpzaphMg"}]},"Fire Scorpion":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g","name":"Machine"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Not the best for taking cities, but great for razing them to the ground.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/aJw0-8wcUHGWGQWMsT7H4w","info":"Whenever this Unit is Revealed, Damage a random Enemy by 3.\nDeploy: Damage an Enemy by 3.\n","name":"Fire Scorpion","positions":["Siege"],"strength":6,"uuid":"aJw0-8wcUHGWGQWMsT7H4w","variations":[{"art":{"artist":"Diego de Almeida","thumbnailImage":"https://api.gwentapi.com/media/fire-scorpion-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/aJw0-8wcUHGWGQWMsT7H4w/variations/8DWqUN5GVIOD5agw5a5psg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"8DWqUN5GVIOD5agw5a5psg"}]},"First Light":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"The sun's shinin', Dromle! The sun's shinin'! Maybe there's hope after all…","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/Xpu3LwbtXI6tSGoQ9V926Q","info":"Spawn Clear Skies or Rally.\n","name":"First Light","positions":["Event"],"uuid":"Xpu3LwbtXI6tSGoQ9V926Q","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/first-light-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/Xpu3LwbtXI6tSGoQ9V926Q/variations/DcjSdZHwVKOuVw8P8gTMDg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"DcjSdZHwVKOuVw8P8gTMDg"}]},"Foglet":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg","name":"Necrophage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Fog creeps on little cat feet. Foglets creep over the bodies of their victims.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/lSfg_zOVUlGtH_cVoB2-LQ","info":"Whenever you apply Fog to an opposing row, play this Unit from your Deck or Resurrect it on that row on your side.\nWhen all Fog has been cleared from the Board, Destroy this Unit.\n","name":"Foglet","positions":["Melee","Ranged","Siege"],"strength":2,"uuid":"lSfg_zOVUlGtH_cVoB2-LQ","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/foglet-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/lSfg_zOVUlGtH_cVoB2-LQ/variations/2gQmdBSIWROIUng0q_rx4A","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"2gQmdBSIWROIUng0q_rx4A"}]},"Foltest":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Don't need advisors and their schemes. I place my trust in my soldiers' blades.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/Zk8arw13UJqR9A3Ego82XA","info":"Spawn Foltest\nDeploy: Boost all Loyal Bronze and Silver Units in your Hand and Deck by 1.\n","name":"Foltest","positions":["Event"],"strength":5,"uuid":"Zk8arw13UJqR9A3Ego82XA","variations":[{"art":{"artist":"KD Stanton","thumbnailImage":"https://api.gwentapi.com/media/foltest-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/Zk8arw13UJqR9A3Ego82XA/variations/D2V-VHSYU7mLta1X9j66PQ","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"D2V-VHSYU7mLta1X9j66PQ"}]},"Francesca":{"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"To live in peace, we first must kill. This is human oppression's cruel finale.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/5RiN5KiPW7KYOcyQxPX-pQ","info":"Spawn Francesca\nDeploy: Mulligan up to 3 cards.\n","name":"Francesca","positions":["Event"],"strength":6,"uuid":"5RiN5KiPW7KYOcyQxPX-pQ","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/francesca-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/5RiN5KiPW7KYOcyQxPX-pQ/variations/Fwa1_a0EUOKZIG2NA8tETg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"Fwa1_a0EUOKZIG2NA8tETg"}]},"Frightener":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"},{"href":"https://api.gwentapi.com/v0/categories/fSkGIO3GV8CMFm8EY5FHyw","name":"Construct"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"”What have I done?” the mage cried out, frightened of his own creation.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/A3Sr4enXWWebg1nRsiryXA","info":"Deploy: Move a Unit on another row on this side to this row. Draw the top card from your Deck.\n","name":"Frightener","positions":["Melee","Ranged","Siege"],"strength":10,"uuid":"A3Sr4enXWWebg1nRsiryXA","variations":[{"art":{"artist":"Marta Dettlaff","thumbnailImage":"https://api.gwentapi.com/media/frightener-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/A3Sr4enXWWebg1nRsiryXA/variations/0ZZTWa7aWfqFaSr31bUniQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"0ZZTWa7aWfqFaSr31bUniQ"}]},"Fringilla Vigo":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Magic is the highest good. It transcends all borders and divisions.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/Nt-dWBIkV3mjFqgGkZCEGw","info":"Deploy: If Spying, set own base Power to 1.\nDeploy: Set the Power of the Unit on the right to that of the Unit on the left.\n","name":"Fringilla Vigo","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"Nt-dWBIkV3mjFqgGkZCEGw","variations":[{"art":{"artist":"Diego de Almeida","thumbnailImage":"https://api.gwentapi.com/media/fringilla-vigo-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/Nt-dWBIkV3mjFqgGkZCEGw/variations/iKnfxnXGWgqsueVZGrO56w","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"iKnfxnXGWgqsueVZGrO56w"}]},"Gaunter O'Dimm":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw","name":"Relict"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"He always grants exactly what you wish for. That's the problem.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/crXWNoq0Uz6I4IFzzR0U7w","info":"Deploy: Guess whether a random Bronze or Silver Unit from your opponent's Deck is Higher or Lower than 5. Success: Play any card from your Deck. Shuffle the others back. Failure: Your opponent draws the top Bronze or Silver card from their Deck. Tie: Both players draw the top Bronze or Silver card from their Deck.\n","name":"Gaunter O'Dimm","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"crXWNoq0Uz6I4IFzzR0U7w","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/gaunter-o-dimm-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/crXWNoq0Uz6I4IFzzR0U7w/variations/z_dK8PLJUdO36wTdiTU5sw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"z_dK8PLJUdO36wTdiTU5sw"}]},"Ge'els":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw","name":"Wild Hunt"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Paintings should convey emotion, not words.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/1hlh82x3XKS57-UoU-fVSg","info":"Deploy: Draw the top Gold card and top Silver card from your Deck. Play one and return the other to the top of your Deck.\n","name":"Ge'els","positions":["Melee","Ranged","Siege"],"strength":2,"uuid":"1hlh82x3XKS57-UoU-fVSg","variations":[{"art":{"artist":"Marta Dettlaff","thumbnailImage":"https://api.gwentapi.com/media/ge-els-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/1hlh82x3XKS57-UoU-fVSg/variations/QhLksvM1VxOCIl2FjcCgqg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"QhLksvM1VxOCIl2FjcCgqg"}]},"Geralt":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A","name":"Witcher"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"If that's what it takes to save the world, it's better to let that world die.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/-xkyMa0FUReU7GZ8FnYttg","info":"Deploy, Brave: Strengthen self by 3.\n","name":"Geralt","positions":["Melee","Ranged","Siege"],"strength":10,"uuid":"-xkyMa0FUReU7GZ8FnYttg","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/geralt-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/-xkyMa0FUReU7GZ8FnYttg/variations/p7T-xEEDUhag2R-ZACv4Fg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"p7T-xEEDUhag2R-ZACv4Fg"}]},"Geralt: Aard":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A","name":"Witcher"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"A blast of concentrated energy that pummels everything in its path. Great for when you forget your keys.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/u28ZI1dEXLmb7GqkI-_pwQ","info":"Deploy: Push 5 adjacent Enemies to the row above them and Damage them by 2.\n","name":"Geralt: Aard","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"u28ZI1dEXLmb7GqkI-_pwQ","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/geralt-aard-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/u28ZI1dEXLmb7GqkI-_pwQ/variations/O_uYsFbOWjWUQzSEd795qQ","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"O_uYsFbOWjWUQzSEd795qQ"}]},"Geralt: Igni":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A","name":"Witcher"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"A twist of a witcher's fingers can light a lamp… or incinerate a foe.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/cmv3BD6PWVy1GYKLBTsTYw","info":"Deploy: Destroy all the Highest Units on the opposite row if that row totals 20 or more Power.\n","name":"Geralt: Igni","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"cmv3BD6PWVy1GYKLBTsTYw","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/geralt-igni-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/cmv3BD6PWVy1GYKLBTsTYw/variations/vNg2v4kJXQqEKQCazO8GIA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"vNg2v4kJXQqEKQCazO8GIA"}]},"Ghoul":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg","name":"Necrophage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"If ghouls are part of the Circle of Life… then it's one vicious circle.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/h-JdQJhcWC23Ml8rXWra2g","info":"Deploy: Consume a random Unit from either Graveyard.\n","name":"Ghoul","positions":["Melee"],"strength":4,"uuid":"h-JdQJhcWC23Ml8rXWra2g","variations":[{"art":{"artist":"Adrian Smith","thumbnailImage":"https://api.gwentapi.com/media/ghoul-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/h-JdQJhcWC23Ml8rXWra2g/variations/aCHujK80VTaBSWsTGR5s3Q","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"aCHujK80VTaBSWsTGR5s3Q"}]},"Giant Toad":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ","name":"Cursed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Big, bad, ugly. Squats in the sewers.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/ifp6TtTAUWir5uW1ul5jOQ","info":"Deploy: Consume a card in your Hand, then draw the top card from your Deck.\n","name":"Giant Toad","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"ifp6TtTAUWir5uW1ul5jOQ","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/giant-toad-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/ifp6TtTAUWir5uW1ul5jOQ/variations/JqP1gqdgWEKN1UMFY6XswQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"JqP1gqdgWEKN1UMFY6XswQ"}]},"Grave Hag":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg","name":"Necrophage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Their long tongues're for slurping marrow – and whipping prey.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/WMieImRzW0CGWdoxhF8irA","info":"After 1 turn, at the start of your turn, Consume all Units in your Graveyard, but only Boost self by 1 for each.\n","name":"Grave Hag","positions":["Melee","Ranged","Siege"],"strength":2,"uuid":"WMieImRzW0CGWdoxhF8irA","variations":[{"art":{"artist":"Adrian Smith","thumbnailImage":"https://api.gwentapi.com/media/grave-hag-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/WMieImRzW0CGWdoxhF8irA/variations/NW_eOxM1UrCGFqUz9B3BJg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"NW_eOxM1UrCGFqUz9B3BJg"}]},"Gremist":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"An archdruid, a master of alchemy, and the grumpiest old fart in the Isles.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/t1X-DXiuWSu6PFtmfK_riQ","info":"Deploy: Spawn Impenetrable Fog, Clear Skies or Bloodcurdling Roar.\n","name":"Gremist","positions":["Siege"],"strength":3,"uuid":"t1X-DXiuWSu6PFtmfK_riQ","variations":[{"art":{"artist":"Bruno Biazotto","thumbnailImage":"https://api.gwentapi.com/media/gremist-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/t1X-DXiuWSu6PFtmfK_riQ/variations/Ss0I7Fh-XlmC3C6zI4YVtg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"Ss0I7Fh-XlmC3C6zI4YVtg"}]},"Griffin":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ","name":"Beast"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Griffins like to toy with their prey. Eat 'em alive, piece by piece.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/VJP1zx2JVFSv70nFW1aygQ","info":"Deploy: Move a card from one Graveyard to the other.\n","name":"Griffin","positions":["Siege"],"strength":8,"uuid":"VJP1zx2JVFSv70nFW1aygQ","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/griffin-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/VJP1zx2JVFSv70nFW1aygQ/variations/8IXkJ71pU2-sR88NuBH-FA","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"8IXkJ71pU2-sR88NuBH-FA"}]},"Harald the Cripple":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"No one knows how he got his nickname – no one's dared to ask.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/QZioC31FWQCiwJfvIO9Bmw","info":"Spawn Harald the Cripple\nDeploy: Damage a Unit by 5. If this Destroys it, repeat this ability with Damage Power reduced by 1.\n","name":"Harald the Cripple","positions":["Event"],"strength":3,"uuid":"QZioC31FWQCiwJfvIO9Bmw","variations":[{"art":{"artist":"Tokkun Studio, Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/harald-the-cripple-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/QZioC31FWQCiwJfvIO9Bmw/variations/d0hcy2iEWFS2yvrC1n7E4g","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"d0hcy2iEWFS2yvrC1n7E4g"}]},"Harpy":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ","name":"Beast"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"There are many species of harpy, and all are kleptomaniacs.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/7YljdPHXX7ur0qmSjmCKyw","info":"Deploy: Trigger the Deathwish of Units adjacent to this Unit.\n","name":"Harpy","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"7YljdPHXX7ur0qmSjmCKyw","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/harpy-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/7YljdPHXX7ur0qmSjmCKyw/variations/kcHVuyXyWxKO62Siarqekw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"kcHVuyXyWxKO62Siarqekw"}]},"Hawker Healer":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Sure, I'll patch you up. Gonna cost you though.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/ouoMDnCBXu6GYK3QF15k4A","info":"Deploy: Boost 2 Units to the right by 3.\n","name":"Hawker Healer","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"ouoMDnCBXu6GYK3QF15k4A","variations":[{"art":{"artist":"Ilker Serdar Yildiz","thumbnailImage":"https://api.gwentapi.com/media/hawker-healer-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/ouoMDnCBXu6GYK3QF15k4A/variations/f4fsXrHFVrKKL9iXLyXnFg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"f4fsXrHFVrKKL9iXLyXnFg"}]},"Hawker Smuggler":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"I fight for whoever's paying the best. Or whoever's easiest to rob.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/9PMjqSDGUw-wEKv0oCHM7Q","info":"Whenever an Enemy appears, Boost self by 1.\n","name":"Hawker Smuggler","positions":["Ranged"],"strength":4,"uuid":"9PMjqSDGUw-wEKv0oCHM7Q","variations":[{"art":{"artist":"Ilker Serdar Yildiz","thumbnailImage":"https://api.gwentapi.com/media/hawker-smuggler-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/9PMjqSDGUw-wEKv0oCHM7Q/variations/qf3iGzUFXNS-hwGJMuP-XQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"qf3iGzUFXNS-hwGJMuP-XQ"}]},"Hawker Support":{"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Elf, dwarf, makes no difference – long as they've got coin.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/APt47SHbWqqENUjvyoQM8w","info":"Deploy: Boost a Unit in your Hand by 3.\n","name":"Hawker Support","positions":["Siege"],"strength":6,"uuid":"APt47SHbWqqENUjvyoQM8w","variations":[{"art":{"artist":"Ilker Serdar Yildiz","thumbnailImage":"https://api.gwentapi.com/media/hawker-support-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/APt47SHbWqqENUjvyoQM8w/variations/b02zBWx4Xf67Wn1vZH90lA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"b02zBWx4Xf67Wn1vZH90lA"}]},"Henselt":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"King Henselt did not look like a thief, but, with all due respect, that's really what he was.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/lsF-j3LrVWyS01whktOyyg","info":"Spawn Henselt\nDeploy: Choose a Bronze Ally. Play all copies of it from your Deck.\n","name":"Henselt","positions":["Event"],"strength":2,"uuid":"lsF-j3LrVWyS01whktOyyg","variations":[{"art":{"artist":"Grafit Studio, Marek Madej.","thumbnailImage":"https://api.gwentapi.com/media/henselt-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/lsF-j3LrVWyS01whktOyyg/variations/-pfiDfCaWBGcNFOAEVE7oQ","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"-pfiDfCaWBGcNFOAEVE7oQ"}]},"Hjalmar":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Instead of mournin' the fallen, let's drink to their memory!","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/_0daGcJyXrSnFSG_XACv8Q","info":"Deploy: Spawn the Lord of Undvik on the leftmost side of the opposite row.\n","name":"Hjalmar","positions":["Melee","Ranged","Siege"],"strength":13,"uuid":"_0daGcJyXrSnFSG_XACv8Q","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/hjalmar-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/_0daGcJyXrSnFSG_XACv8Q/variations/KtRk0jowVa-oH-bEdsVmAA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"KtRk0jowVa-oH-bEdsVmAA"}]},"Holger Blackhand":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Now let's drink to Emperor of Nilfgaard – may he die of somethin' hideous!","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/z1TourxKUJqtcUNq7nEdgA","info":"Veteran 1.\nDeploy: Damage a Unit by 5. If it was Destroyed, Strengthen one of the Highest Units in your Graveyard by 3.\n","name":"Holger Blackhand","positions":["Siege"],"strength":5,"uuid":"z1TourxKUJqtcUNq7nEdgA","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/holger-blackhand-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/z1TourxKUJqtcUNq7nEdgA/variations/VrF__5G7VIyVde4Uui0zZQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"VrF__5G7VIyVde4Uui0zZQ"}]},"Ice Giant":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ","name":"Ogroid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Fled one time in my life. From the Ice Giant. And I'm not a bit ashamed.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/xVjZssOnUXKWUsoaAcRYAA","info":"If Frost is anywhere on the Board, Boost self by 5. When the last Frost is cleared, Damage self by 5.\n","name":"Ice Giant","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"xVjZssOnUXKWUsoaAcRYAA","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/ice-giant-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/xVjZssOnUXKWUsoaAcRYAA/variations/E90aJyw7WE-RKkmrLHLsCQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"E90aJyw7WE-RKkmrLHLsCQ"}]},"Ida Emean":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"},{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"I am a Sage. My power lies in possessing knowledge. Not sharing it.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/Drc5rX0iV02YiJL8oaQiXQ","info":"Deploy: Spawn Impenetrable Fog, Clear Skies or Quen Sign.\n","name":"Ida Emean","positions":["Siege"],"strength":4,"uuid":"Drc5rX0iV02YiJL8oaQiXQ","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/ida-emean-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/Drc5rX0iV02YiJL8oaQiXQ/variations/TgQINTsUVwS7EisVanoKDg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"TgQINTsUVwS7EisVanoKDg"}]},"Imlerith":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw","name":"Wild Hunt"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Ladd nahw! Kill them! Litter the earth with their entrails!","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/1gcPIvBqVhGzxWjwR85ipw","info":"Deploy: Damage an Enemy by 4. If the Enemy is under Frost, Damage it by 8 instead.\n","name":"Imlerith","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"1gcPIvBqVhGzxWjwR85ipw","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/imlerith-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/1gcPIvBqVhGzxWjwR85ipw/variations/xJNXkz_AW420BxfqzcVWQw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"xJNXkz_AW420BxfqzcVWQw"}]},"Immune Boost":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"The witcher moved with unnatural speed. Too fast for the human eye to register.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/4Eyz8bViUxG1sZcihy0Qaw","info":"Add 3 Armor to 3 adjacent Units and Boost them by 3.\n","name":"Immune Boost","positions":["Event"],"uuid":"4Eyz8bViUxG1sZcihy0Qaw","variations":[{"art":{"artist":"Grafit Studio, Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/immune-boost-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/4Eyz8bViUxG1sZcihy0Qaw/variations/ByPuNoMWVpyjy2lUlrjZ1A","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"ByPuNoMWVpyjy2lUlrjZ1A"}]},"Impenetrable Fog":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA","name":"Weather"},{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"A good commander's dream… and a bad one's horror.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/kSX8IncHWo6YbCT7d8tv7Q","info":"Apply Fog to a row on your opponent's side.\nFog: Every turn, at the start of your turn, Damage the Highest Unit on the row by 2.\n","name":"Impenetrable Fog","positions":["Melee","Ranged","Siege","Event"],"uuid":"kSX8IncHWo6YbCT7d8tv7Q","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/impenetrable-fog-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/kSX8IncHWo6YbCT7d8tv7Q/variations/7TtiYyMqUlSotx6Uox6TcA","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"7TtiYyMqUlSotx6Uox6TcA"}]},"Impera Brigade":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"The Impera Brigade never surrenders. Ever.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/h6v-1BZdVpiHZX-q1cr8CQ","info":"Whenever you play a Spying Unit (including Golds), Boost self by 2.\nDeploy: Boost self by 2 for each Spying Enemy (including Golds).\n","name":"Impera Brigade","positions":["Melee"],"strength":6,"uuid":"h6v-1BZdVpiHZX-q1cr8CQ","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/impera-brigade-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/h6v-1BZdVpiHZX-q1cr8CQ/variations/0VeJ02VQWSCJuPlh8_ZFLA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"0VeJ02VQWSCJuPlh8_ZFLA"}]},"Impera Enforcers":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Members of the emperor's fanatic body guard fight to the bitter end.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/Iv-IZpMxUPGTG8tkSy6YUg","info":"Deploy: Look at the top card in your Deck. If it's Bronze, gain 2 Armor. If it's Silver, Boost self by 1. If it's Gold, Promote self.\n","name":"Impera Enforcers","positions":["Ranged"],"strength":8,"uuid":"Iv-IZpMxUPGTG8tkSy6YUg","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/impera-enforcers-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/Iv-IZpMxUPGTG8tkSy6YUg/variations/y69VPY5wV7K9QaNcW5MCgQ","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"y69VPY5wV7K9QaNcW5MCgQ"}]},"Imperial Golem":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fSkGIO3GV8CMFm8EY5FHyw","name":"Construct"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"The most powerful of Nilfgaard's mages have mastered the art of creating golems. On a few occasions, they've even managed to make them fight for the imperial cause…","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/Mp3Xfn0DVBWiJve3-0vTmQ","info":"Orders: Play this Unit from your Deck.\n","name":"Imperial Golem","positions":["Melee"],"strength":2,"uuid":"Mp3Xfn0DVBWiJve3-0vTmQ","variations":[{"art":{"artist":"Ilker Serdar Yildiz","thumbnailImage":"https://api.gwentapi.com/media/imperial-golem-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/Mp3Xfn0DVBWiJve3-0vTmQ/variations/GI4WlnC3XMenNIt5w4Kgjw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"GI4WlnC3XMenNIt5w4Kgjw"}]},"Iorveth":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"King or beggar, what's the difference? One dh'oine less.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/2QonZ14fUSmDlJW_remf4Q","info":"Whenever an Enemy moves to a different row, Damage it by 2.\nDeploy: Damage an Enemy by 4.\n","name":"Iorveth","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"2QonZ14fUSmDlJW_remf4Q","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/iorveth-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/2QonZ14fUSmDlJW_remf4Q/variations/sDPI6ObmXee5mzPva0piMw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"sDPI6ObmXee5mzPva0piMw"}]},"Iris":{"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"I remember so little… Yet when I think of my rose, I begin to recall what was.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/T7oAkMz1WZ6MTKQJ7w2qFA","info":"Deathwish: Boost all Units on the other side of the Board by 3.\n","name":"Iris","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"T7oAkMz1WZ6MTKQJ7w2qFA","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/iris-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/T7oAkMz1WZ6MTKQJ7w2qFA/variations/CkFaKpLXXG2eHtxLv6Ferg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"CkFaKpLXXG2eHtxLv6Ferg"}]},"Isengrim":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"It dawns on them once they notice my scar: a realization of imminent death.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/mDuLxL65VnaiFiFpca26nw","info":"Play a Bronze or Silver Ambush card from your Deck.\n","name":"Isengrim","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"mDuLxL65VnaiFiFpca26nw","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/isengrim-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/mDuLxL65VnaiFiFpca26nw/variations/wB8iAsLIXIeUidbRikbMAQ","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"wB8iAsLIXIeUidbRikbMAQ"}]},"Ithlinne":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"},{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Famed for constantly prophesying the world's doom. Not much fun at parties.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/_4c7-_1BUcebSDeMOUceng","info":"Deploy: Play a Bronze Special card from your Deck, then Spawn a copy of it. Shuffle the others back.\n","name":"Ithlinne","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"_4c7-_1BUcebSDeMOUceng","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/ithlinne-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/_4c7-_1BUcebSDeMOUceng/variations/ikN-JiQyWqajA_anA3OJJg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"ikN-JiQyWqajA_anA3OJJg"}]},"Joachim de Wett":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"To describe the manner in which Duke de Wett led the Verden Group as incompetent would be far too kind.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/gCBMH9aRUU-6CD1_5ojGrg","info":"Deploy: Play the top Loyal Bronze or Silver Unit in your Deck and Boost it by 10.\n","name":"Joachim de Wett","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"gCBMH9aRUU-6CD1_5ojGrg","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/joachim-de-wett-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/gCBMH9aRUU-6CD1_5ojGrg/variations/RS7iq7iTUECC5KG-p98ZfQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"RS7iq7iTUECC5KG-p98ZfQ"}]},"John Calveit":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"A sword is but one of many tools at a ruler's disposal.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/F8j_qbytWvmaHMQSpccDww","info":"Spawn John Calveit\nDeploy: Look at the top 3 Bronze or Silver cards in your Deck. Play 1. The others remain on top.\n","name":"John Calveit","positions":["Event"],"strength":3,"uuid":"F8j_qbytWvmaHMQSpccDww","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/john-calveit-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/F8j_qbytWvmaHMQSpccDww/variations/fV_U95PnUOunckL9RfVZcA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"fV_U95PnUOunckL9RfVZcA"}]},"John Natalis":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/NERc7o5PWUugFwUlm3UCWw","name":"Temeria"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"That square should bear the names of my soldiers, of the dead. Not mine.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/XEeizJYFU5-sYyDlS6--Fg","info":"Deploy: Force all Northern Realms Machine Allies to Damage a random Enemy by 2.\n","name":"John Natalis","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"XEeizJYFU5-sYyDlS6--Fg","variations":[{"art":{"artist":"Grafit Studio ","thumbnailImage":"https://api.gwentapi.com/media/john-natalis-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/XEeizJYFU5-sYyDlS6--Fg/variations/dMED_uXKXFCmds0xoXt2vA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"dMED_uXKXFCmds0xoXt2vA"}]},"Johnny":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw","name":"Relict"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Life without savoring the sound of surreptitious shananacking is like licking snails through a cloth.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/AubUY2vxUsGndbu0aSAyEg","info":"Deploy: Discard a card from your Hand (can be Gold), then create a copy in your Hand of a card of the same color in your opponent's Deck.\n","name":"Johnny","positions":["Siege"],"strength":7,"uuid":"AubUY2vxUsGndbu0aSAyEg","variations":[{"art":{"artist":"Marta Dettlaff","thumbnailImage":"https://api.gwentapi.com/media/johnny-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/AubUY2vxUsGndbu0aSAyEg/variations/fq4GZVu6V-uuWQa-hf34oA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"fq4GZVu6V-uuWQa-hf34oA"}]},"Jotunn":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ","name":"Ogroid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Skellige legend claims the mighty and terrible Jotunn, King of Giants, reigned over the isles in ancient times. He was slain by Hemdall, but with his dying breath he vowed to return for Ragh nar Roog.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/lZrEQalOXT24K7SEeg2xvQ","info":"Deploy: Move 3 adjacent Enemies to this Unit's row on their side and Damage them by 2.\n","name":"Jotunn","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"lZrEQalOXT24K7SEeg2xvQ","variations":[{"art":{"artist":"Diego de Almeida","thumbnailImage":"https://api.gwentapi.com/media/jotunn-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/lZrEQalOXT24K7SEeg2xvQ/variations/S00VQQmCWni4BHpoVuDrwA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"S00VQQmCWni4BHpoVuDrwA"}]},"Jutta an Dimun":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Some call her the Iron Maiden.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/jJ53AXQ2XSea6Gp5F9oNZg","info":"Veteran 1.\nDeploy: Damage self by 1.\n","name":"Jutta an Dimun","positions":["Melee"],"strength":12,"uuid":"jJ53AXQ2XSea6Gp5F9oNZg","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/jutta-an-dimun-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/jJ53AXQ2XSea6Gp5F9oNZg/variations/i3nN4zp3VTCQ3UQikBwvBw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"i3nN4zp3VTCQ3UQikBwvBw"}]},"Kaedweni Sergeant":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Forward, you sorry sods! Forward or you'll see the Nilfgaardians are the least of your worries!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/bVzNSsDRWYeOqIdETP9j-g","info":"Deploy: Boost by 1 this Unit and all Bronze Loyal Units with the same Power in your Hand, Deck or on your side of the Board.\nCrewmen 1.\n","name":"Kaedweni Sergeant","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"bVzNSsDRWYeOqIdETP9j-g","variations":[{"art":{"artist":" Ilker Serdar Yildiz","thumbnailImage":"https://api.gwentapi.com/media/kaedweni-sergeant-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/bVzNSsDRWYeOqIdETP9j-g/variations/bWCDoa_UWZ2D6Bc7nuV7dw","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"bWCDoa_UWZ2D6Bc7nuV7dw"}]},"Kaedweni Siege Platform":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"I never miss twice.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/qr3zb1exVc-m82rWdnJDqg","info":"Deploy: Return a Machine Ally to your Hand and immediately play it again.\nCrewmen 1.\n","name":"Kaedweni Siege Platform","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"qr3zb1exVc-m82rWdnJDqg","variations":[{"art":{"artist":"Form Language Studio, Bogna GawroĹ„ska","thumbnailImage":"https://api.gwentapi.com/media/kaedweni-siege-platform-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/qr3zb1exVc-m82rWdnJDqg/variations/bNFwqgOXX82MS-4oSuL9Ow","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"bNFwqgOXX82MS-4oSuL9Ow"}]},"Kaedweni Siege Support":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"You gotta recalibrate the arm by five degrees.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/EDt_FaZkUGy3PZ94M-Y1iA","info":"Whenever an Ally appears, Boost it by 1. If it's a Machine, Boost it by 1 and add 1 Armor.\nCrewmen 1.\n","name":"Kaedweni Siege Support","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"EDt_FaZkUGy3PZ94M-Y1iA","variations":[{"art":{"artist":"Filipe Pagliuso, Alicja Kapustka","thumbnailImage":"https://api.gwentapi.com/media/kaedweni-siege-support-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/EDt_FaZkUGy3PZ94M-Y1iA/variations/JHteu0m_WAunbtMZKhfB-g","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"JHteu0m_WAunbtMZKhfB-g"}]},"Kambi":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"When the time comes, the cockerel Kambi shall crow and awaken Hemdall.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/R_Y8f2-qVwOjRJyJ28Iydw","info":"After 3 turns, at the start of your turn, Spawn Hemdall.\n","name":"Kambi","positions":["Melee","Ranged","Siege"],"strength":1,"uuid":"R_Y8f2-qVwOjRJyJ28Iydw","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/kambi-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/R_Y8f2-qVwOjRJyJ28Iydw/variations/dB4cwcf3WDWmTvYTVPfeEA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"dB4cwcf3WDWmTvYTVPfeEA"}]},"Katakan":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/nfEYjnG7WJq7UQ6_OuZsmQ","name":"Vampire"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Drinking the blood of the Continent since the Conjunction.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/5pn0k_B-VJWj8QcSLn-hcA","info":"Deploy: Consume a Unit from either Graveyard.\n","name":"Katakan","positions":["Melee"],"strength":5,"uuid":"5pn0k_B-VJWj8QcSLn-hcA","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/katakan-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/5pn0k_B-VJWj8QcSLn-hcA/variations/wFv6pp47XPa3ZGt0yDIDfw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"wFv6pp47XPa3ZGt0yDIDfw"}]},"Kayran":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/FTOev-YqW8qYw9ZLmXH5Bw","name":"Insectoid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"How to kill a kayran? Simple! Take your best sword… then sell it, and hire a witcher.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/czcL5gJfV5iyOnW9YB12kw","info":"Deploy: Consume a Unit from your Hand, then Boost self by an additional 8.\n","name":"Kayran","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"czcL5gJfV5iyOnW9YB12kw","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/kayran-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/czcL5gJfV5iyOnW9YB12kw/variations/SIDPWKteXmCcuA5zj27Nyw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"SIDPWKteXmCcuA5zj27Nyw"}]},"Keira Metz":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/NERc7o5PWUugFwUlm3UCWw","name":"Temeria"},{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"If I'm to die today, I wish to look smashing for the occasion.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/Xr3XS8hUVBqJ_brUZGYRTg","info":"Deploy: Spawn Quen Sign, Epidemic or Thunderbolt Potion.\n","name":"Keira Metz","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"Xr3XS8hUVBqJ_brUZGYRTg","variations":[{"art":{"artist":"Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/keira-metz-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/Xr3XS8hUVBqJ_brUZGYRTg/variations/6HMDdT2vVsmwgzgr3Qdwhw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"6HMDdT2vVsmwgzgr3Qdwhw"}]},"King Bran":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"No one can replace Bran. Though they're sure to try.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/HkUaGM14XBKpSFU4cV8Sww","info":"Spawn King Bran\nDeploy: Discard up to 3 cards from your Deck and Strengthen all Units among them by 1. Then shuffle your deck.\n","name":"King Bran","positions":["Event"],"strength":4,"uuid":"HkUaGM14XBKpSFU4cV8Sww","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/king-bran-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/HkUaGM14XBKpSFU4cV8Sww/variations/7Y82AA3fWsebt1N4GbHYbQ","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"7Y82AA3fWsebt1N4GbHYbQ"}]},"King of Beggars":{"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"I might just discover I look great without ears… or hands. Apparently the King of Beggars accepts both as partial payment.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/XFCKuNk_Uyqgdr7FnuG9ag","info":"Deploy, Brave: Strengthen self enough to tie the Round or to a maximum of 15 base Power.\n","name":"King of Beggars","positions":["Ranged"],"strength":5,"uuid":"XFCKuNk_Uyqgdr7FnuG9ag","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/king-of-beggars-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/XFCKuNk_Uyqgdr7FnuG9ag/variations/Fzw6BCr7VMmeWm6Kzfjzgw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"Fzw6BCr7VMmeWm6Kzfjzgw"}]},"Lacerate":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"A sight more horrid you've never seen… The poor soul lay shredded as the beast lapped up its blood from the ground all around.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/AzUn8L0AXHmD-TPBtRuwEw","info":"Damage all Units on a row by 3.\n","name":"Lacerate","positions":["Melee","Ranged","Siege","Event"],"uuid":"AzUn8L0AXHmD-TPBtRuwEw","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/lacerate-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/AzUn8L0AXHmD-TPBtRuwEw/variations/qMTrQXeXW1eSCL_a8GgZKw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"qMTrQXeXW1eSCL_a8GgZKw"}]},"Lambert":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A","name":"Witcher"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Now that's the kind of negotiating I understand.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/MNtl238TXBy1CAUVyqbTSw","info":"Deploy: Play Eskel and Vesemir from your Deck.\n","name":"Lambert","positions":["Melee"],"strength":5,"uuid":"MNtl238TXBy1CAUVyqbTSw","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/lambert-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/MNtl238TXBy1CAUVyqbTSw/variations/sV1ucavqX3CK0b5gRLbQVw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"sV1ucavqX3CK0b5gRLbQVw"}]},"Leo Bonhart":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"He would just sit there and stare at me, not saying a word. His eyes, they were… fish-like, somehow. No brows, no lashes… Just these balls of water, with a black stone sunk in each. He would devour me with those eyes in total silence. That frightened me more than the beatings.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/0mYtP6JOUQqSJks71TH6YA","info":"Deploy: Reveal a Unit in your Hand (can be Gold) and Damage an Enemy by its base Power.\n","name":"Leo Bonhart","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"0mYtP6JOUQqSJks71TH6YA","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/leo-bonhart-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/0mYtP6JOUQqSJks71TH6YA/variations/sn-9hGHqXCC8oB_eR6_5NA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"sn-9hGHqXCC8oB_eR6_5NA"}]},"Letho of Gulet":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A","name":"Witcher"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Witchers never die in their beds.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/qeCjbMnfW8a4k6TxcryDaw","info":"Deploy: If Spying, set own base Power to 1.\nDeploy: Banish 2 Units to each side of this Unit and Boost this Unit by their Power.\n","name":"Letho of Gulet","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"qeCjbMnfW8a4k6TxcryDaw","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/letho-of-gulet-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/qeCjbMnfW8a4k6TxcryDaw/variations/RfBXY_uCVxGhdaaPnq9dvw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"RfBXY_uCVxGhdaaPnq9dvw"}]},"Light Longship":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g","name":"Machine"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Escape them? In the waters of Skellige? Good luck.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/EriCeLtQUlG0M8hFuvXMnQ","info":"Every turn, at the start of your turn, Damage the Unit to the right by 1, then Strengthen self by 2.\n","name":"Light Longship","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"EriCeLtQUlG0M8hFuvXMnQ","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/light-longship-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/EriCeLtQUlG0M8hFuvXMnQ/variations/HAgRagnxXRusfPsXbmyfaA","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"HAgRagnxXRusfPsXbmyfaA"}]},"Lubberkin":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ","name":"Cursed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"I name thee Dea and embrace thee as my daughter.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/QLO6xNelU3K3R23X1TYb_Q","info":"Deploy: Boost all Botchlings in your Hand, Deck and Graveyard by 5.\nDeathwish: Play a Botchling from your Deck.\n","name":"Lubberkin","positions":["Ranged"],"strength":5,"uuid":"QLO6xNelU3K3R23X1TYb_Q","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/lubberkin-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/QLO6xNelU3K3R23X1TYb_Q/variations/hB_RGRX1W2ahwIzCTQcclQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"hB_RGRX1W2ahwIzCTQcclQ"}]},"Madman Lugos":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"WAAAAAAAAAAGH!!!!","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/qyS9WZKvV5qZDDrYg4x2xw","info":"Deploy: Discard a Bronze Unit from your Deck and Damage a Unit by the Discarded Unit's base Power.\n","name":"Madman Lugos","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"qyS9WZKvV5qZDDrYg4x2xw","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/madman-lugos-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/qyS9WZKvV5qZDDrYg4x2xw/variations/DlwOPfm-XcS-EKxZcreG6g","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"DlwOPfm-XcS-EKxZcreG6g"}]},"Mahakam Defender":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA","name":"Dwarf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"I'm telling ye, we're born fer battle – we slash straight at their knees!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/HDb852UQWmSUrud_ebT2iw","info":"Deploy: Gain Resilience.\n","name":"Mahakam Defender","positions":["Melee"],"strength":5,"uuid":"HDb852UQWmSUrud_ebT2iw","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/mahakam-defender-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/HDb852UQWmSUrud_ebT2iw/variations/TVwD1gyrWXOaKIlArWASsQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"TVwD1gyrWXOaKIlArWASsQ"}]},"Mahakam Guard":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA","name":"Dwarf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Only one punishment for disturbin' the peace in Mahakam: a hammer to the heid.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/g__c5lOwV3yyY2TL1kyKCg","info":"Deploy: Boost an Ally by 3. If it's a Dwarf, Boost by 4 instead.\n","name":"Mahakam Guard","positions":["Melee"],"strength":5,"uuid":"g__c5lOwV3yyY2TL1kyKCg","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/mahakam-guard-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/g__c5lOwV3yyY2TL1kyKCg/variations/YhiyA5LiX5OBQuT2poQxYA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"YhiyA5LiX5OBQuT2poQxYA"}]},"Malena":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"I hate you, dh'oine. You are all the same.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/Cj6o99vnXtWHDm8w-Yvp3g","info":"Every turn, at the start of your turn, move a random Unit on another row on this side to this row.\nDeploy: Gain 3 Armor.\n","name":"Malena","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"Cj6o99vnXtWHDm8w-Yvp3g","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/malena-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/Cj6o99vnXtWHDm8w-Yvp3g/variations/6xOGAbZdWAmxNKxZ7EXAag","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"6xOGAbZdWAmxNKxZ7EXAag"}]},"Mangonel":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g","name":"Machine"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"This model specializes in slinging corpses and ripe dung.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/WpubX1grXnSPK9GKnTDvXQ","info":"Whenever a card is Revealed, Damage a random Enemy by 2.\n","name":"Mangonel","positions":["Siege"],"strength":6,"uuid":"WpubX1grXnSPK9GKnTDvXQ","variations":[{"art":{"artist":"Diego de Almeida","thumbnailImage":"https://api.gwentapi.com/media/mangonel-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/WpubX1grXnSPK9GKnTDvXQ/variations/G7ivpD3YXRCLe1EX42WrYw","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"G7ivpD3YXRCLe1EX42WrYw"}]},"Manticore":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ","name":"Beast"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"We know little about what manticores look like: though many have seen them, very few have lived to tell their tale.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/JMhLp5B6WUGJntp1IRmKyA","info":"Deploy, Brave: Strengthen self by 4.\n","name":"Manticore","positions":["Siege"],"strength":9,"uuid":"JMhLp5B6WUGJntp1IRmKyA","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/manticore-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/JMhLp5B6WUGJntp1IRmKyA/variations/btT6O2bDU4CoPKGpiLd3Pg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"btT6O2bDU4CoPKGpiLd3Pg"}]},"Manticore Venom":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Kills quicker than you can recite the Emperor of Nilfgaard's title in full.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/h90GBUgZVeioCArNtPfj6Q","info":"Damage 5 adjacent Units by 4.\n","name":"Manticore Venom","positions":["Event"],"uuid":"h90GBUgZVeioCArNtPfj6Q","variations":[{"art":{"artist":"Alicja Kapustka","thumbnailImage":"https://api.gwentapi.com/media/manticore-venom-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/h90GBUgZVeioCArNtPfj6Q/variations/npBXJWLMUxGgaRCHnjNA9Q","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"npBXJWLMUxGgaRCHnjNA9Q"}]},"Marching Orders":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"We are but pawns in a game played by old men, sent to fight and die on their senile whims…","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/qMf3weBHXBSSPDPfNF1GBA","info":"Boost one of the Lowest Bronze or Silver Units in your Deck by 2 and play it.\n","name":"Marching Orders","positions":["Event"],"uuid":"qMf3weBHXBSSPDPfNF1GBA","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/marching-orders-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/qMf3weBHXBSSPDPfNF1GBA/variations/UbE297udX6-8ly0pZItKVg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"UbE297udX6-8ly0pZItKVg"}]},"Mardroeme":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Eat enough of them, and the world will never be the same…","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/tg-EqFFxVxKKwIz_CPjM0g","info":"Spawn Spores or Mutagen.\n","name":"Mardroeme","positions":["Event"],"uuid":"tg-EqFFxVxKKwIz_CPjM0g","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/mardroeme-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/tg-EqFFxVxKKwIz_CPjM0g/variations/4LA4dVogW7WLA19BJjpBdw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"4LA4dVogW7WLA19BJjpBdw"}]},"Margarita Laux–Antille":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"I care only about what's good for Aretuza and my pupils.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/TsFW1qCMXsOtsupq0Nr33g","info":"Deploy: Reset a Unit and toggle its Lock.\n","name":"Margarita Laux–Antille","positions":["Siege"],"strength":4,"uuid":"TsFW1qCMXsOtsupq0Nr33g","variations":[{"art":{"artist":"Filipe Pagliuso, Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/margarita-laux-antille-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/TsFW1qCMXsOtsupq0Nr33g/variations/iwJgY8RoX2OQ9W-YPhHDzQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"iwJgY8RoX2OQ9W-YPhHDzQ"}]},"Menno Coehoorn":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"I'll take an attentive reconnaissance unit over a fine brigade any day.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/v83Y_jwDX-i3u7ivcFbPLA","info":"Deploy: Destroy all Spying Enemies.\n","name":"Menno Coehoorn","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"v83Y_jwDX-i3u7ivcFbPLA","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/menno-coehoorn-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/v83Y_jwDX-i3u7ivcFbPLA/variations/LFTD4MQ4UaioB21Gus2iJg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"LFTD4MQ4UaioB21Gus2iJg"}]},"Merigold's Hailstorm":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"The sky dimmed of a sudden, and clouds amassed over the town. It grew fiendishly dark, and a cold gust swept in. Oh my, gasped Yennefer. We're about to make quite the mess, I think.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/e8-2AShUXZ-EYGRjCY1h9g","info":"Damage all Units on a row by half their Power (rounding up and ignoring Armor).\n","name":"Merigold's Hailstorm","positions":["Melee","Ranged","Siege","Event"],"uuid":"e8-2AShUXZ-EYGRjCY1h9g","variations":[{"art":{"artist":"Bruno Biazotto","thumbnailImage":"https://api.gwentapi.com/media/merigold-s-hailstorm-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/e8-2AShUXZ-EYGRjCY1h9g/variations/92TECD6iXou_gg58DenQdA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"92TECD6iXou_gg58DenQdA"}]},"Milva":{"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"With each arrow I loose, I think of my da. He'd be proud. I think.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/zvqMDb6VWMa9zfQ8dq2K9w","info":"Deploy: If neither player has passed, return the Highest Enemy to your opponent's Hand, then return the Highest Ally to your Hand.\n","name":"Milva","positions":["Melee","Ranged","Siege"],"strength":9,"uuid":"zvqMDb6VWMa9zfQ8dq2K9w","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/milva-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/zvqMDb6VWMa9zfQ8dq2K9w/variations/l1NOZCljVa6YZznO2DhOKg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"l1NOZCljVa6YZznO2DhOKg"}]},"Monster Nest":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Damn, the filth's o'errun us… We need a witcher or there's no livin' 'ere!","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/4LR7CGP7U96P2ikHk0MRkA","info":"Spawn a Bronze Necrophage or Insectoid Unit and Boost it by 2.\n","name":"Monster Nest","positions":["Event"],"uuid":"4LR7CGP7U96P2ikHk0MRkA","variations":[{"art":{"artist":"Marta Dettlaff","thumbnailImage":"https://api.gwentapi.com/media/monster-nest-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/4LR7CGP7U96P2ikHk0MRkA/variations/K1dwYCP4Wzyr9XDonvSIHQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"K1dwYCP4Wzyr9XDonvSIHQ"}]},"Morenn":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/KZEU4PoUVx-Gf9gN2c7Vdw","name":"Ambush"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Lady Eithné's daughter had inherited her sublime beauty and her wild hatred for all that is human.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/Sswu68AcXpGccwTVJ43puQ","info":"Ambush: When an Enemy appears, turn Morenn over and Damage that Enemy by 5 before its Deploy ability resolves.\n","name":"Morenn","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"Sswu68AcXpGccwTVJ43puQ","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/morenn-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/Sswu68AcXpGccwTVJ43puQ/variations/NTDqRYm8VzaHnoHMZr3vaA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"NTDqRYm8VzaHnoHMZr3vaA"}]},"Morkvarg":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ","name":"Cursed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"The vilest man Skellige's ever known.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/Dogvtg3KXvmMUfOoywgvHA","info":"Whenever this Unit is Discarded or Destroyed, Resurrect it and Weaken it by half its Power (rounding up).\n","name":"Morkvarg","positions":["Melee"],"strength":9,"uuid":"Dogvtg3KXvmMUfOoywgvHA","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/morkvarg-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/Dogvtg3KXvmMUfOoywgvHA/variations/cO9UnZEQX8e3IGAvj4-Q-w","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"cO9UnZEQX8e3IGAvj4-Q-w"}]},"Morvran Voorhis":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"The summer sun reflected in the quiet waters of the Alba – that's Nilfgaard to me.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/AQkgzstLXZq9GwDdBheEuQ","info":"Spawn Morvran Voorhis\nDeploy: Reveal up to 3 cards from either player's Hand (can be Golds).\n","name":"Morvran Voorhis","positions":["Event"],"strength":6,"uuid":"AQkgzstLXZq9GwDdBheEuQ","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/morvran-voorhis-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/AQkgzstLXZq9GwDdBheEuQ/variations/oApBlXAYVbe0sGMCIH72HA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"oApBlXAYVbe0sGMCIH72HA"}]},"Myrgtabrakke":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g","name":"Draconid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Never get between a mother dragon and her young.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/X-K0NrOnUCqHTH1Tdvte6w","info":"Deploy: Damage Units by 2, 2 and then 1.\n","name":"Myrgtabrakke","positions":["Ranged"],"strength":5,"uuid":"X-K0NrOnUCqHTH1Tdvte6w","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/myrgtabrakke-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/X-K0NrOnUCqHTH1Tdvte6w/variations/wX_fKl4nVrCugYD-rwCffA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"wX_fKl4nVrCugYD-rwCffA"}]},"Nature's Gift":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"You exact from the earth a blood ransom, ripping out its riches by force. To us it bloomed, bore fruit and gave freely, for it loved us as we loved it.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/W_0qzhKMXvG7-GKUkJHKCQ","info":"Play a Bronze or Silver Special card from your Deck. Shuffle the others back.\n","name":"Nature's Gift","positions":["Event"],"uuid":"W_0qzhKMXvG7-GKUkJHKCQ","variations":[{"art":{"artist":"Marta Dettlaff","thumbnailImage":"https://api.gwentapi.com/media/nature-s-gift-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/W_0qzhKMXvG7-GKUkJHKCQ/variations/q6e9874MWL-SULwLCFyEyA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"q6e9874MWL-SULwLCFyEyA"}]},"Nauzicaa Brigade":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"They call us Death's Heads. Care to find out why?","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/6hvmEpeBWYKls9Jgw83GIw","info":"Deploy: Damage a Spying Unit by 5. If it was Destroyed, Strengthen self by 4.\n","name":"Nauzicaa Brigade","positions":["Ranged"],"strength":5,"uuid":"6hvmEpeBWYKls9Jgw83GIw","variations":[{"art":{"artist":"Marta Dettlaff","thumbnailImage":"https://api.gwentapi.com/media/nauzicaa-brigade-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/6hvmEpeBWYKls9Jgw83GIw/variations/6xv7iVO-VKeLv7hWIL5brg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"6xv7iVO-VKeLv7hWIL5brg"}]},"Nauzicaa Standard Bearer":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"The Emperor will teach the North discipline.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/E71QeVNzUziHLPr3w3pjTw","info":"Deploy: Clear Weather from the row on your side and Boost 1 Ally or Revealed Unit in your Hand by 3.\n","name":"Nauzicaa Standard Bearer","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"E71QeVNzUziHLPr3w3pjTw","variations":[{"art":{"artist":"Diego de Almeida","thumbnailImage":"https://api.gwentapi.com/media/nauzicaa-standard-bearer-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/E71QeVNzUziHLPr3w3pjTw/variations/wxRdlPvZXKCwsPZG1p4OXw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"wxRdlPvZXKCwsPZG1p4OXw"}]},"Necromancy":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"We have ways of making you talk… alive or dead.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/a5ShFF_FVqKDQOi1S1livA","info":"Banish a Unit from either Graveyard and Boost an Ally by its Power.\n","name":"Necromancy","positions":["Event"],"uuid":"a5ShFF_FVqKDQOi1S1livA","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/necromancy-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/a5ShFF_FVqKDQOi1S1livA/variations/42za8ZeGUxq18B71bMuPQQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"42za8ZeGUxq18B71bMuPQQ"}]},"Nekker":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ","name":"Ogroid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"These little guys are almost cute, if you ignore the whole vicious killer aspect.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/YZU5pI7_Xs2uxucB7KVJpA","info":"Whenever an Ally Consumes a card while this Unit is in your Hand, Deck or on your side of the Board, Boost self by 1.\nDeathwish: Play a Nekker from your Deck.\n","name":"Nekker","positions":["Melee"],"strength":3,"uuid":"YZU5pI7_Xs2uxucB7KVJpA","variations":[{"art":{"artist":"Katarzyna Redesiuk","thumbnailImage":"https://api.gwentapi.com/media/nekker-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/YZU5pI7_Xs2uxucB7KVJpA/variations/92TC6XAeUwqdRUCLKK0BMw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"92TC6XAeUwqdRUCLKK0BMw"}]},"Nekker Warrior":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ","name":"Ogroid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Take heed, gents, there's nekkers under this here bridge.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/ikJuWdcZW0OOuCyhiD2lWg","info":"Deploy: Choose a Bronze Ally and create 2 base copies of it on the bottom of your Deck.\n","name":"Nekker Warrior","positions":["Melee"],"strength":5,"uuid":"ikJuWdcZW0OOuCyhiD2lWg","variations":[{"art":{"artist":"Adrian Smith","thumbnailImage":"https://api.gwentapi.com/media/nekker-warrior-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/ikJuWdcZW0OOuCyhiD2lWg/variations/dxs1hSvgWeWN4LgPjOKrPw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"dxs1hSvgWeWN4LgPjOKrPw"}]},"Nenneke":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Few know more about healing than Nenneke.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/lvGOfYlGUwW2tvkoiHmjkw","info":"Deploy: Shuffle up to 3 cards from your Graveyard into your Deck.\n","name":"Nenneke","positions":["Siege"],"strength":8,"uuid":"lvGOfYlGUwW2tvkoiHmjkw","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/nenneke-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/lvGOfYlGUwW2tvkoiHmjkw/variations/I3_159mVXui9equJz91haw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"I3_159mVXui9equJz91haw"}]},"Nilfgaardian Knight":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Sons of noble houses, born in the City of the Golden Towers, form the elite backbone of the Imperial Army.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/quc_DfieVC6SUblOZPEL5A","info":"Deploy: Gain 2 Armor.\nDeploy: Reveal a random card from your Hand (can be Gold).\n","name":"Nilfgaardian Knight","positions":["Melee"],"strength":10,"uuid":"quc_DfieVC6SUblOZPEL5A","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/nilfgaardian-knight-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/quc_DfieVC6SUblOZPEL5A/variations/tK73YPEqW_Kf58vAzOXTXg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"tK73YPEqW_Kf58vAzOXTXg"}]},"Nithral":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw","name":"Wild Hunt"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Each Wild Hunt warrior has gone through a rigorous selection process, but Eredin's personal cavalcade includes only the most brutal and most ferocious of the Aen Elle.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/qnOX2qd3UaObQ3npBT5jQQ","info":"Frost Damage on your opponent's side is increased to 3.\n","name":"Nithral","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"qnOX2qd3UaObQ3npBT5jQQ","variations":[{"art":{"artist":"Marta Dettlaff","thumbnailImage":"https://api.gwentapi.com/media/nithral-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/qnOX2qd3UaObQ3npBT5jQQ/variations/JKBLPa7GXkCeJ1KQlDOKaA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"JKBLPa7GXkCeJ1KQlDOKaA"}]},"Ocvist":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g","name":"Draconid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"The Master of Quartz Mountain, the Destroyer, Trajan's Slayer. In his free time, he likes long walks and candlelight dinners.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/t39YM3BWWHSOq35kaT9ibQ","info":"After 4 turns, at the start of your turn, Damage all Enemies by 1, return this Unit to your Hand and Transform it into Exhausted Ocvist.\n","name":"Ocvist","positions":["Siege"],"strength":6,"uuid":"t39YM3BWWHSOq35kaT9ibQ","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/ocvist-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/t39YM3BWWHSOq35kaT9ibQ/variations/TnmG-QxMVCSRmZrKuYtCWA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"TnmG-QxMVCSRmZrKuYtCWA"}]},"Odrin":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Drinkin' without Odrin is like rowin' without a paddle.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/YAEQacp_XZCX-atgXMKJ6A","info":"Every turn, at the start of your turn, move this Unit to a random row and Boost all Units on it by 1.\n","name":"Odrin","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"YAEQacp_XZCX-atgXMKJ6A","variations":[{"art":{"artist":"Darek Zabrocki & Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/odrin-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/YAEQacp_XZCX-atgXMKJ6A/variations/2tZuND2UXVmvfbtoGUkk1g","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"2tZuND2UXVmvfbtoGUkk1g"}]},"Old Speartip: Asleep":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ","name":"Ogroid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Do not disturb.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/D6ez5qXSWUGILDU_Y-AZJw","info":"If at the start of your turn there are 3 or more Units on the opposite row, wake up.\nDeploy: Boost Units adjacent to this Unit by 1.\n","name":"Old Speartip: Asleep","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"D6ez5qXSWUGILDU_Y-AZJw","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/old-speartip-asleep-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/D6ez5qXSWUGILDU_Y-AZJw/variations/K-qqYDUoVKmYaTh5DRmntA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"K-qqYDUoVKmYaTh5DRmntA"}]},"Olgierd":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ","name":"Cursed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"At least you now know I don't easily lose my head.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/2iqiNdHOWmO3663UXMevgA","info":"When this Unit is Discarded or Destroyed, Weaken it by half (rounding up). At the start of Rounds 2 and 3, Resurrect this Unit if it is in the Graveyard.\n","name":"Olgierd","positions":["Melee"],"strength":9,"uuid":"2iqiNdHOWmO3663UXMevgA","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/olgierd-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/2iqiNdHOWmO3663UXMevgA/variations/NjsCRT6jVE-djY9Q1dWxvQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"NjsCRT6jVE-djY9Q1dWxvQ"}]},"Operator":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"},{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"},{"href":"https://api.gwentapi.com/v0/categories/27_uBiygVSmMLu-FnPZekw","name":"Stubborn"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"As time and space collapse before us, they expand behind us. In that way one moves forward through both.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/i9Of-MRPUve7IkfgM1gbeA","info":"Deploy: Choose a Bronze Unit in your Hand and create a base copy of it in both players' Hands.\n","name":"Operator","positions":["Ranged"],"strength":7,"uuid":"i9Of-MRPUve7IkfgM1gbeA","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/operator-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/i9Of-MRPUve7IkfgM1gbeA/variations/cxHvhEz5Xu-bqp2YLZ5I7g","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"cxHvhEz5Xu-bqp2YLZ5I7g"}]},"Overdose":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"While deadly for men, Potions are merely toxic for witchers. Yet even they must measure every drop, lest they exceed the maximum dosage... and pay the maximum price.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/aVWIVpaSUKKtJte9SaECsQ","info":"Boost up to 6 random Allies by 2.\n","name":"Overdose","positions":["Event"],"uuid":"aVWIVpaSUKKtJte9SaECsQ","variations":[{"art":{"artist":"Grafit Studio, Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/overdose-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/aVWIVpaSUKKtJte9SaECsQ/variations/nxPlUVJFUzii5fgK99tT6w","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"nxPlUVJFUzii5fgK99tT6w"}]},"Pavetta":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"},{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"They said the queen was prone to outbursts, but I did not expect that…","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/m9WdA2QAUROdwJY7sU0YNA","info":"Deploy: If neither player has passed, shuffle the Lowest Ally into your Deck, then shuffle the Lowest Enemy into your opponent's Deck. Does not affect Pavetta.\n","name":"Pavetta","positions":["Ranged"],"strength":7,"uuid":"m9WdA2QAUROdwJY7sU0YNA","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/pavetta-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/m9WdA2QAUROdwJY7sU0YNA/variations/gLn5TjP3VMml1FlsgkZpiQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"gLn5TjP3VMml1FlsgkZpiQ"}]},"Peter Saar Gwynleve":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"These are not the hands of an Excellency, but of a farmer. So we speak peasant to peasant.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/TW54H-l6WI-KdM6ZTV6t-w","info":"Deploy: Reset a Unit. If it's an Ally, Strengthen it by 3. If it's an Enemy, Weaken it by 3.\n","name":"Peter Saar Gwynleve","positions":["Melee"],"strength":4,"uuid":"TW54H-l6WI-KdM6ZTV6t-w","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/peter-saar-gwynleve-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/TW54H-l6WI-KdM6ZTV6t-w/variations/CfcpY1VQV0Wf4FSSMV1Evw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"CfcpY1VQV0Wf4FSSMV1Evw"}]},"Philippa Eilhart":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Soon the power of kings will wither, and the Lodge shall seize its rightful place.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/4b21kPEZWZ2f5OKeGiPiSw","info":"Deploy: Damage an Enemy by 5, then Damage random Enemies by 4, 3, 2 and 1. The same Enemy cannot be Damaged twice in a row.\n","name":"Philippa Eilhart","positions":["Melee","Ranged","Siege"],"strength":1,"uuid":"4b21kPEZWZ2f5OKeGiPiSw","variations":[{"art":{"artist":"Diego de Almeida","thumbnailImage":"https://api.gwentapi.com/media/philippa-eilhart-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/4b21kPEZWZ2f5OKeGiPiSw/variations/lEqTAROAWJaP-hRtwVSe-w","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"lEqTAROAWJaP-hRtwVSe-w"}]},"Priestess of Freya":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Modron Freya, the Great Mother, is the goddess of love, beauty and bounty.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/40IG6oRHWtG1QbiTjSfhAw","info":"Deploy: Resurrect a Bronze Unit.\n","name":"Priestess of Freya","positions":["Siege"],"strength":1,"uuid":"40IG6oRHWtG1QbiTjSfhAw","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/priestess-of-freya-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/40IG6oRHWtG1QbiTjSfhAw/variations/-BlCXSLWU0-WtyBlDK4cVw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"-BlCXSLWU0-WtyBlDK4cVw"}]},"Prince Stennis":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"He wears armor made of gold. Of course he's a jerk.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/fDGf9QP2U1Gan0VhJnGTqw","info":"Every 2 turns, at the start of your turn, Boost this Unit by the number of Machine Allies.\nCrewmen 1.\nDeploy: Gain 2 Armor.\n","name":"Prince Stennis","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"fDGf9QP2U1Gan0VhJnGTqw","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/prince-stennis-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/fDGf9QP2U1Gan0VhJnGTqw/variations/LlctGbF9VtmQD3M2_4JJaQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"LlctGbF9VtmQD3M2_4JJaQ"}]},"Priscilla":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Picture Dandelion in a dress and you've got the general idea.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/Kze2ASEVWECG33hycfOQTA","info":"Every turn, at the end of your turn, Boost a random Ally (but never self) by 3. Ability discontinues after the Unit Boosts Allies 4 times without leaving the Board.\n","name":"Priscilla","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"Kze2ASEVWECG33hycfOQTA","variations":[{"art":{"artist":"Tokkun Studio, Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/priscilla-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/Kze2ASEVWECG33hycfOQTA/variations/roqv56OnXOuSM9kGjVSF0A","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"roqv56OnXOuSM9kGjVSF0A"}]},"Prize-Winning Cow":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"},{"href":"https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ","name":"Beast"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Mooooo.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/NBW8TZauVjuQYLibzN52xQ","info":"Retaliation: Spawn a Chort on the row.\nDeathwish: Spawn a Chort on the row.\n","name":"Prize-Winning Cow","positions":["Melee","Ranged","Siege"],"strength":2,"uuid":"NBW8TZauVjuQYLibzN52xQ","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/prize-winning-cow-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/NBW8TZauVjuQYLibzN52xQ/variations/ZbzL1KYqVZekqx8aXm_xcA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"ZbzL1KYqVZekqx8aXm_xcA"}]},"Queensguard":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"The queen is guarded by the hardiest and fiercest shieldmaidens Skellige's ever known.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/EWBeVGIfXZO_tFBQHdb9Lw","info":"Deploy: Resurrect all your Queensguards.\n","name":"Queensguard","positions":["Melee"],"strength":4,"uuid":"EWBeVGIfXZO_tFBQHdb9Lw","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/queensguard-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/EWBeVGIfXZO_tFBQHdb9Lw/variations/8Sy9PgKjWQ2x8b9ew7x1nw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"8Sy9PgKjWQ2x8b9ew7x1nw"}]},"Quen Sign":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"The witcher raised a hand and quickly traced a path with it in the air. The crowd's rumble rose, the stones flew thicker. Yet the Sign curved their course, pushing them aside. They simply passed their target, protected by a shield unseen.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/Uh25y0wnUhGokjVR5Jnu7A","info":"Choose a Unit in your Hand. Give all copies of it in your Hand and Deck a Shield and Boost them by 2. Units which already have a Shield cannot be chosen and aren't affected.\n","name":"Quen Sign","positions":["Event"],"uuid":"Uh25y0wnUhGokjVR5Jnu7A","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/quen-sign-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/Uh25y0wnUhGokjVR5Jnu7A/variations/Iy4xx0JjVTKZHU2yrBJPrA","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"Iy4xx0JjVTKZHU2yrBJPrA"}]},"Radovid":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"A king should be merciless towards his enemies and generous to his friends.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/rtpI83axVde6EZoBmS50gw","info":"Spawn Radovid\nDeploy: Toggle 2 Units' Lock. If Enemies, Damage them by 4 as well.\n","name":"Radovid","positions":["Event"],"strength":5,"uuid":"rtpI83axVde6EZoBmS50gw","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/radovid-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/rtpI83axVde6EZoBmS50gw/variations/8k3KfSKUWWiv1kkBX01pNw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"8k3KfSKUWWiv1kkBX01pNw"}]},"Ragh Nar Roog":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA","name":"Weather"},{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"In the Final Age, Hemdall will come forth to face the evil issuing from the land of Morhogg – the legions of wraiths, demons and specters of Chaos.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/WC7moK7LX4irUeCmilctOw","info":"Apply Ragh Nar Roog to all rows on your opponent's side.\nRagh Nar Roog: Every turn, at the start of your turn, Damage one of the Highest Units on the row by 2.\n","name":"Ragh Nar Roog","positions":["Melee","Ranged","Siege","Event"],"uuid":"WC7moK7LX4irUeCmilctOw","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/ragh-nar-roog-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/WC7moK7LX4irUeCmilctOw/variations/bFX2cHNkWtePws0mghQRBw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"bFX2cHNkWtePws0mghQRBw"}]},"Raging Berserker":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ","name":"Cursed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"In their ballads skalds claim you cannot tell a berserker changed in the heat of battle from a true–born bear.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/VNnuE03wV_6A8gX-0nCykA","info":"Retaliation: Transform into a Raging Bear.\n","name":"Raging Berserker","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"VNnuE03wV_6A8gX-0nCykA","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/raging-berserker-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/VNnuE03wV_6A8gX-0nCykA/variations/ugKfH3nqUkKufdNwVkRABA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"ugKfH3nqUkKufdNwVkRABA"}]},"Rainfarn":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"When Cintra fell, Attre followed, leaving its defenders a choice: accept the Nilfgaardian leash or die.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/wZ0gUXXgUo2FAwid6UBMJQ","info":"Deploy: Play a Bronze or Silver Disloyal Unit from your Deck. Shuffle the others back.\n","name":"Rainfarn","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"wZ0gUXXgUo2FAwid6UBMJQ","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/rainfarn-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/wZ0gUXXgUo2FAwid6UBMJQ/variations/Tg9bwOHzWaq_ufG2lExwnw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"Tg9bwOHzWaq_ufG2lExwnw"}]},"Reaver Hunter":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"See this here tattoo? 'At's me, hackin' at a dragon. A DRAGON, m'lady.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/tiWv2TVzUXuK4i6VJw70fA","info":"Deploy or Bond: Boost all Reaver Hunters in your Hand, Deck and on your side of the Board by 1.\nWhen a Reaver Hunter Trio is completed, Damage the Highest Enemy by half its Power (rounding up and ignoring Armor).\n","name":"Reaver Hunter","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"tiWv2TVzUXuK4i6VJw70fA","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/reaver-hunter-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/tiWv2TVzUXuK4i6VJw70fA/variations/chrB-5ZXWDWp2r8koXoCwQ","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"chrB-5ZXWDWp2r8koXoCwQ"}]},"Reaver Scout":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Haven't had much luck with monsters of late, so we enlisted.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/BETXDVYxXbGnppVuqjAcRQ","info":"Deploy: Choose a different Bronze Ally. Play a copy of it from your Deck.\n","name":"Reaver Scout","positions":["Ranged"],"strength":1,"uuid":"BETXDVYxXbGnppVuqjAcRQ","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/reaver-scout-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/BETXDVYxXbGnppVuqjAcRQ/variations/LUG8y-vBX6KxThOH-vr6jA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"LUG8y-vBX6KxThOH-vr6jA"}]},"Redanian Elite":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"I'll die for Redania, I'll kill for Redania… I'll even eat worms for Redania!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/0bc89mdaUWGrCsVmOkxT9g","info":"Whenever this Unit's Armor reaches 0, Boost self by 5.\nDeploy: Gain 4 Armor.\n","name":"Redanian Elite","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"0bc89mdaUWGrCsVmOkxT9g","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/redanian-elite-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/0bc89mdaUWGrCsVmOkxT9g/variations/_lyOSXHgW3mwBFw-we_z-A","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"_lyOSXHgW3mwBFw-we_z-A"}]},"Redanian Knight":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"For glory! For Radovid!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/NCGr-pn3UGasAl4TSdMDQw","info":"Every turn, at the start of your turn, if this Unit has no Armor, Boost it by 2 and add 2 Armor to it.\n","name":"Redanian Knight","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"NCGr-pn3UGasAl4TSdMDQw","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/redanian-knight-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/NCGr-pn3UGasAl4TSdMDQw/variations/IdXhUN39XP69AM0O4ScilQ","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"IdXhUN39XP69AM0O4ScilQ"}]},"Redanian Knight-Elect":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Not wealth or fame but intentions true –– that's what makes a hero of you!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/54A7rE3eWGeU-f2-PQ5NsQ","info":"If this Unit has Armor at the start of your turn, Boost Units adjacent to it by 1.\nDeploy: Gain 2 Armor.\n","name":"Redanian Knight-Elect","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"54A7rE3eWGeU-f2-PQ5NsQ","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/redanian-knight-elect-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/54A7rE3eWGeU-f2-PQ5NsQ/variations/CXTR4evcVoS-lKBcLFaMAw","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"CXTR4evcVoS-lKBcLFaMAw"}]},"Regis":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/nfEYjnG7WJq7UQ6_OuZsmQ","name":"Vampire"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Men, the polite ones, at least, would call me a monster. A blood–drinking freak.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/iOjWXWEqWhGO-WaWO5L1Og","info":"After 2 turns, at the start of your turn, Boost self by 7 if you are winning the Round.\n","name":"Regis","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"iOjWXWEqWhGO-WaWO5L1Og","variations":[{"art":{"artist":"Marta Dettlaff","thumbnailImage":"https://api.gwentapi.com/media/regis-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/iOjWXWEqWhGO-WaWO5L1Og/variations/i_4MZZdhWQOR71PTPsO9SA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"i_4MZZdhWQOR71PTPsO9SA"}]},"Regis: Higher Vampire":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/nfEYjnG7WJq7UQ6_OuZsmQ","name":"Vampire"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"He becomes invisible at will. His glance hypnotizes into a deep sleep. He then drinks his fill, turns into a bat and flies off. Altogether uncouth.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/sLCtCTI7XKK7m1mMnNUjcA","info":"Deploy: Look at 3 random Bronze Units from your opponent's Deck. Consume 1, Boost self by base Power of the consumed Unit,  then shuffle the others back.\n","name":"Regis: Higher Vampire","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"sLCtCTI7XKK7m1mMnNUjcA","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/regis-higher-vampire-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/sLCtCTI7XKK7m1mMnNUjcA/variations/3LTdPbdkVXe6I4zvZ7tNmQ","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"3LTdPbdkVXe6I4zvZ7tNmQ"}]},"Reinforced Ballista":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g","name":"Machine"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Never manages to hit the same place twice, which, upon further reflection, might constitute a real problem.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/kOQSY7PmVsW7pYhSoUJIhQ","info":"Deploy: Damage an Enemy by 2.\nFresh Crew: Repeat the Deploy ability.\n","name":"Reinforced Ballista","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"kOQSY7PmVsW7pYhSoUJIhQ","variations":[{"art":{"artist":"Noah Bradley","thumbnailImage":"https://api.gwentapi.com/media/reinforced-ballista-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/kOQSY7PmVsW7pYhSoUJIhQ/variations/o6wUChIWWwm6CRvVMlpkSw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"o6wUChIWWwm6CRvVMlpkSw"}]},"Reinforced Siege Tower":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g","name":"Machine"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"The latest rage in assaults on walled cities.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/vcfc2dEtXTGlvOSd8-lDxA","info":"Deploy: Add 2 Armor to Units adjacent to this Unit.\nFresh Crew: Boost self by 3.\n","name":"Reinforced Siege Tower","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"vcfc2dEtXTGlvOSd8-lDxA","variations":[{"art":{"artist":"Noah Bradley","thumbnailImage":"https://api.gwentapi.com/media/reinforced-siege-tower-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/vcfc2dEtXTGlvOSd8-lDxA/variations/evgzKsu0XOyj0ANchiXCWA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"evgzKsu0XOyj0ANchiXCWA"}]},"Reinforced Trebuchet":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g","name":"Machine"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Feel that? The earth trembles each time Big Bertha looses a stone.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/bkdxKKjtWsOfaHWfvYQEPg","info":"Every turn, at the start of your turn, Damage a random Enemy by 1.\n","name":"Reinforced Trebuchet","positions":["Siege"],"strength":6,"uuid":"bkdxKKjtWsOfaHWfvYQEPg","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/reinforced-trebuchet-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/bkdxKKjtWsOfaHWfvYQEPg/variations/FwC4RhKVWBm3ILAiY6lYVA","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"FwC4RhKVWBm3ILAiY6lYVA"}]},"Reinforcement":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Sound the retreat! Regroup! And wait for reinforcements!","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/cswSl8GWWBaaOd8tUagTVw","info":"Play a Bronze or Silver Unit from your Deck. Shuffle the others back.\n","name":"Reinforcement","positions":["Event"],"uuid":"cswSl8GWWBaaOd8tUagTVw","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/reinforcement-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/cswSl8GWWBaaOd8tUagTVw/variations/s5_S18d8Vt2cWrTKOK6W4g","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"s5_S18d8Vt2cWrTKOK6W4g"}]},"Renew":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Medicus curat, magicae sanat.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/Cl7T-YPtW9W4ycYMKVwIyQ","info":"Resurrect a Gold Unit from your Graveyard.\n","name":"Renew","positions":["Event"],"uuid":"Cl7T-YPtW9W4ycYMKVwIyQ","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/renew-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/Cl7T-YPtW9W4ycYMKVwIyQ/variations/rP41U2RdUFmd8oQ9boVX-Q","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"rP41U2RdUFmd8oQ9boVX-Q"}]},"Restore":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Those cursed sorceresses are stealing our thunder! Whyever should folk choose a procedure taking several hours, when some perfumed tart can solve their problem with a wave of her hand?","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/PJHCgdD7VTapBBUDhXIpiw","info":"Return a Unit from your Graveyard to your Hand, then Discard a card from your Hand.\n","name":"Restore","positions":["Event"],"uuid":"PJHCgdD7VTapBBUDhXIpiw","variations":[{"art":{"artist":"Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/restore-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/PJHCgdD7VTapBBUDhXIpiw/variations/3kD-PT1VXraBpzjMbqHalA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"3kD-PT1VXraBpzjMbqHalA"}]},"Roach":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ","name":"Beast"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Geralt, we gotta have a man–to–horse talk. No offense, but your riding skills? They leave a bit to be desired, buddy.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/W7m_xWX5WmaghULkIl6s3w","info":"Whenever you play a Gold Unit from your Hand, play Roach from your Deck on a random row before that Unit's Deploy ability resolves.\n","name":"Roach","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"W7m_xWX5WmaghULkIl6s3w","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/roach-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/W7m_xWX5WmaghULkIl6s3w/variations/IhtufmzBWiSCLeEc3oJS8Q","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"IhtufmzBWiSCLeEc3oJS8Q"}]},"Rot Tosser":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g","name":"Machine"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Let historians debate whether spreading plague in a besieged city is ethical. We just care if it's effective.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/UnVnqp8dV52EPzmkhMBNuA","info":"Deploy: Spawn a Cow Carcass on your opponent's side.\n","name":"Rot Tosser","positions":["Siege"],"strength":6,"uuid":"UnVnqp8dV52EPzmkhMBNuA","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/rot-tosser-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/UnVnqp8dV52EPzmkhMBNuA/variations/1oBBEaoNVoKY__GbHLRHAg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"1oBBEaoNVoKY__GbHLRHAg"}]},"Royal Decree":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"We, Foltest, by divine right King of Temeria, Prince of Sodden, Senior Protector of Brugge, etcetera, etcetera, do hereby decree the following…","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/HkSUMkUrW8i68mBWEkHbGQ","info":"Play a Gold card from your Deck. Shuffle the others back.\n","name":"Royal Decree","positions":["Event"],"uuid":"HkSUMkUrW8i68mBWEkHbGQ","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/royal-decree-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/HkSUMkUrW8i68mBWEkHbGQ/variations/El6_9krLUKmInoSHPiuIfQ","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"El6_9krLUKmInoSHPiuIfQ"}]},"Sabrina Glevissig":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"The Daughter of the Kaedweni Wilderness.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/Hq_v0ZJdUnCr-EAJg-qp2Q","info":"Deathwish: Set all Units on the row to the Power of the Lowest Unit on the row.\n","name":"Sabrina Glevissig","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"Hq_v0ZJdUnCr-EAJg-qp2Q","variations":[{"art":{"artist":"Paweł Świeżak, Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/sabrina-glevissig-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/Hq_v0ZJdUnCr-EAJg-qp2Q/variations/N9tn8ZFIXAWf-xjMyeiP9g","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"N9tn8ZFIXAWf-xjMyeiP9g"}]},"Saesenthessis":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g","name":"Draconid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"I inherited my father's ability to assume other forms - well, one other form, in my case.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/nFtAUqOvW6WR_cVKG4pEvQ","info":"Deploy: Boost self by 1 for each Dwarf Ally (including Golds). Damage an Enemy by the number of Elf Allies (including Golds).\n","name":"Saesenthessis","positions":["Melee","Ranged","Siege"],"strength":9,"uuid":"nFtAUqOvW6WR_cVKG4pEvQ","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/saesenthessis-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/nFtAUqOvW6WR_cVKG4pEvQ/variations/IbA4bE2QVkCJkep1u9iPjQ","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"IbA4bE2QVkCJkep1u9iPjQ"}]},"Sarah":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw","name":"Relict"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Little Sarah wants to play!","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/bmEXzOv2VF-ldGOJ5jmP4g","info":"Deploy: Shuffle a card from your Hand (can be Gold) back into your Deck, then draw the top different card of the same color from your Deck.\n","name":"Sarah","positions":["Siege"],"strength":8,"uuid":"bmEXzOv2VF-ldGOJ5jmP4g","variations":[{"art":{"artist":"Aleksandra Wojtas","thumbnailImage":"https://api.gwentapi.com/media/sarah-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/bmEXzOv2VF-ldGOJ5jmP4g/variations/FSKiH4C9X7GyhEaOZ4yiwQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"FSKiH4C9X7GyhEaOZ4yiwQ"}]},"Saskia":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g","name":"Draconid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"I care not for kings and their titles. In the east lives one who truly deserves a crown.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/6t4SO9xBW2yMswUdq29Xog","info":"Orders: Play this Unit from your Deck on a random row.\n","name":"Saskia","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"6t4SO9xBW2yMswUdq29Xog","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/saskia-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/6t4SO9xBW2yMswUdq29Xog/variations/WI7Su4C7VR2XaADGdkKDpg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"WI7Su4C7VR2XaADGdkKDpg"}]},"Savage Bear":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ","name":"Cursed"},{"href":"https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ","name":"Beast"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Tame? Och, lad, Skelligers might train bears, but that don't at all mean they tame 'em…","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/AHxruNbAUkW4E5xHQesj3g","info":"After an Enemy is played from any Hand and its Deploy ability resolves, Damage it by 1.\n","name":"Savage Bear","positions":["Melee"],"strength":7,"uuid":"AHxruNbAUkW4E5xHQesj3g","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/savage-bear-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/AHxruNbAUkW4E5xHQesj3g/variations/sPHp2ZrEU1u9GWjY2hdjiQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"sPHp2ZrEU1u9GWjY2hdjiQ"}]},"Schirrú":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Time to look death in the face.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/Fwr18gY7Xhqtt8z14sxf0Q","info":"Deploy: You may Transform a card from your Hand (can be Gold) into Scorch.\n","name":"Schirrú","positions":["Melee","Ranged","Siege"],"strength":10,"uuid":"Fwr18gY7Xhqtt8z14sxf0Q","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/schirru-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/Fwr18gY7Xhqtt8z14sxf0Q/variations/iMz2pT4NUNGHr8z1QfK3Ig","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"iMz2pT4NUNGHr8z1QfK3Ig"}]},"Scorch":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Geralt took one step back. He'd seen men hit by Scorch before. Or more accurately, seen what remained of them afterwards.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/hRfbwAnnWyOxJL8OB5v1vg","info":"Destroy all the Highest Units.\n","name":"Scorch","positions":["Event"],"uuid":"hRfbwAnnWyOxJL8OB5v1vg","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/scorch-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/hRfbwAnnWyOxJL8OB5v1vg/variations/mtDxMl9IXDqw0qfzwhFEqg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"mtDxMl9IXDqw0qfzwhFEqg"}]},"Serrit":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A","name":"Witcher"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"We do what we must. I am not ashamed of that.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/zCxqz5LsU-uHNhUGLDXMLQ","info":"Deploy: Set the Power of a Revealed Unit in your opponent's Hand to 1.\n","name":"Serrit","positions":["Melee"],"strength":9,"uuid":"zCxqz5LsU-uHNhUGLDXMLQ","variations":[{"art":{"artist":"Diego de Almeida","thumbnailImage":"https://api.gwentapi.com/media/serrit-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/zCxqz5LsU-uHNhUGLDXMLQ/variations/B6D4yXBGXICB3bAvtxASYQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"B6D4yXBGXICB3bAvtxASYQ"}]},"Shadow":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg","name":"Necrophage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Fear not the shadows, but the light.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/put9Gcm8VpGtJ8epFuvpWg","info":"Deploy: Trigger the Deathwish of 3 Units to the right.\n","name":"Shadow","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"put9Gcm8VpGtJ8epFuvpWg","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/shadow-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/put9Gcm8VpGtJ8epFuvpWg/variations/Wy1ynrNbXpSLdRAOZqMiyA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"Wy1ynrNbXpSLdRAOZqMiyA"}]},"Shani":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"I'm a medic. I tend to know what I'm doing when I prescribe something.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/O7ckSKb7XTGdWCltsQNhLA","info":"Deploy: Resurrect a Unit and add 4 Armor to it.\n","name":"Shani","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"O7ckSKb7XTGdWCltsQNhLA","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/shani-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/O7ckSKb7XTGdWCltsQNhLA/variations/mTiqMnQpX9eOIpBOMsmmxA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"mTiqMnQpX9eOIpBOMsmmxA"}]},"Sheldon Skaggs":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA","name":"Dwarf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"I was there, on the front lines! Right where the fightin' was the thickest!","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/hk8e4pruWpu7Cr17IUliKA","info":"Deploy: Move all Units on the row to random rows on the same side and Boost self by 1 for each.\n","name":"Sheldon Skaggs","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"hk8e4pruWpu7Cr17IUliKA","variations":[{"art":{"artist":"Paweł Świeżak","thumbnailImage":"https://api.gwentapi.com/media/sheldon-skaggs-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/hk8e4pruWpu7Cr17IUliKA/variations/ogEhUPvrVKC4irEg-bePyA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"ogEhUPvrVKC4irEg-bePyA"}]},"Sigrdrifa":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Fall on your knees and beg Modron Freya for forgiveness.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/BCcPzWWxVOOyfceGn56Y4A","info":"Deploy: Resurrect a Unit.\n","name":"Sigrdrifa","positions":["Siege"],"strength":3,"uuid":"BCcPzWWxVOOyfceGn56Y4A","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/sigrdrifa-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/BCcPzWWxVOOyfceGn56Y4A/variations/hZtcymKyWC2yM5Z4Wi_Wiw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"hZtcymKyWC2yM5Z4Wi_Wiw"}]},"Skellige Storm":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA","name":"Weather"},{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"This ain't no normal storm. This here's the wrath of the gods.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/rVL_P6TWUNaHkc19NC34eA","info":"Apply Skellige Storm to a row on your opponent's side.\nSkellige Storm: Every turn, at the start of your turn, Damage the leftmost units on the row by 2, 2 and 1, respectively.\n","name":"Skellige Storm","positions":["Melee","Ranged","Siege","Event"],"uuid":"rVL_P6TWUNaHkc19NC34eA","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/skellige-storm-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/rVL_P6TWUNaHkc19NC34eA/variations/hvZ0ReyuVrKnygYNisJ_wA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"hvZ0ReyuVrKnygYNisJ_wA"}]},"Skjall":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Strike his name from the Saga of Elders! No one dare grant him shelter or sustenance!","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/v5g7AO5zUJKhzws-BjNt_w","info":"Veteran 1.\nAfter 2 turns, at the end of your turn, convert this Unit's current Power into base Power.\n","name":"Skjall","positions":["Siege"],"strength":6,"uuid":"v5g7AO5zUJKhzws-BjNt_w","variations":[{"art":{"artist":"Bruno Biazotto","thumbnailImage":"https://api.gwentapi.com/media/skjall-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/v5g7AO5zUJKhzws-BjNt_w/variations/DQirSRdTU3ClTIppNqgECw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"DQirSRdTU3ClTIppNqgECw"}]},"Spotter":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"The North has nothing with which it could surprise us.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/H7zNV--7Xy-e_YoAZ1s14w","info":"Whenever either player Reveals a card, Boost self by 1 while in your Hand, Deck or on your side of the Board.\n","name":"Spotter","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"H7zNV--7Xy-e_YoAZ1s14w","variations":[{"art":{"artist":"Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/spotter-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/H7zNV--7Xy-e_YoAZ1s14w/variations/_xw-rfPOVIeBpFhUn-Devg","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"_xw-rfPOVIeBpFhUn-Devg"}]},"Stammelford's Tremors":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"The sorcerer Stammelford moved a mountain that obscured the view from his tower. Rumor has it he could only do so for he'd fettered a d'ao, an earth elemental.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/T7eomqsgUtef8CCe2_4CqA","info":"Damage up to 6 random Enemies by 2.\n","name":"Stammelford's Tremors","positions":["Event"],"uuid":"T7eomqsgUtef8CCe2_4CqA","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/stammelford-s-tremors-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/T7eomqsgUtef8CCe2_4CqA/variations/oaKukU1XXT-R5WWX_ZszLQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"oaKukU1XXT-R5WWX_ZszLQ"}]},"Stefan Skellen":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"My mark scars the face of our future empress. That is my proudest achievement.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/Vq6GiaggU2219p0oY7Wzlg","info":"Deploy: Choose any card from your Deck and place it on top. Then shuffle the rest of your Deck.\n","name":"Stefan Skellen","positions":["Melee","Ranged","Siege"],"strength":10,"uuid":"Vq6GiaggU2219p0oY7Wzlg","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/stefan-skellen-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/Vq6GiaggU2219p0oY7Wzlg/variations/liqV5JipWIGAz5C0x9RV_g","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"liqV5JipWIGAz5C0x9RV_g"}]},"Succubus":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/RIgGe8EXX0-BpnWm-WROAQ","name":"Beast"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Why fight? There are much better ways to work off excess energy…","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/7AtQg0X-XFSpMoNLeEBYqQ","info":"If played on your opponent's side, then after 2 turns, at the end of your turn, move the Highest other Unit on its row to your side.\n","name":"Succubus","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"7AtQg0X-XFSpMoNLeEBYqQ","variations":[{"art":{"artist":"Bartłomiej Gaweł, Alicja Kapustka, Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/succubus-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/7AtQg0X-XFSpMoNLeEBYqQ/variations/Ums8rObRVFe3SUv56-Sq8w","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"Ums8rObRVFe3SUv56-Sq8w"}]},"Summoning Circle":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"There exist a great many realities outside our own… With the right knowledge, one can contact them and summon beings beyond human fathoming.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/WQgk3RBAXn-NA5fTNWqRLA","info":"Spawn a base copy of the last Enemy your opponent played from their Hand.\n","name":"Summoning Circle","positions":["Event"],"uuid":"WQgk3RBAXn-NA5fTNWqRLA","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/summoning-circle-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/WQgk3RBAXn-NA5fTNWqRLA/variations/KwPwrIoXVuCFznqNa_1OJA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"KwPwrIoXVuCFznqNa_1OJA"}]},"Svanrige":{"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"The emperor also thought him an accidental king. At first.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/nZEr8pw3WqiPLRmF4l4Blw","info":"Veteran 1.\nDeploy: Draw the top card from your Deck, then Discard a card from your Hand (can be Gold).\n","name":"Svanrige","positions":["Siege"],"strength":6,"uuid":"nZEr8pw3WqiPLRmF4l4Blw","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/svanrige-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/nZEr8pw3WqiPLRmF4l4Blw/variations/E0jp6WnmWo2I2yEomoEf3w","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"E0jp6WnmWo2I2yEomoEf3w"}]},"Swallow Potion":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Symbolizing spring and rejuvenation, the swallow lent its name to this potion that accelerates the rate at which wounds scab over and heal.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/F-V84OtlVwWRloaS0Xp8WQ","info":"Boost a Unit by 8.\n","name":"Swallow Potion","positions":["Event"],"uuid":"F-V84OtlVwWRloaS0Xp8WQ","variations":[{"art":{"artist":"Aleksandra Wojtas","thumbnailImage":"https://api.gwentapi.com/media/swallow-potion-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/F-V84OtlVwWRloaS0Xp8WQ/variations/_6r43nVvVO6wDvmoM2VKqQ","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"_6r43nVvVO6wDvmoM2VKqQ"}]},"Sweers":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"And hands off the girl! Whatever we may be, we're not savages.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/_H-PZKA4WOCjgEsODtIBpw","info":"Deploy: Choose an Enemy or a Revealed opposing Unit and move all copies of it from your opponent's Deck to their Graveyard.\n","name":"Sweers","positions":["Melee"],"strength":7,"uuid":"_H-PZKA4WOCjgEsODtIBpw","variations":[{"art":{"artist":"Chris Rallis","thumbnailImage":"https://api.gwentapi.com/media/sweers-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/_H-PZKA4WOCjgEsODtIBpw/variations/TSIzBHOrVeSdZi61ij_meA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"TSIzBHOrVeSdZi61ij_meA"}]},"Síle de Tansarville":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"The Lodge lacks humility. Our lust for power may yet be our undoing.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/o3N-tilfUL2jNh0_TnxwOw","info":"Deploy: You may play a Bronze Special card from your Hand. If you do, draw the top card from your Deck.\n","name":"Síle de Tansarville","positions":["Ranged"],"strength":6,"uuid":"o3N-tilfUL2jNh0_TnxwOw","variations":[{"art":{"artist":"Form Language Studio, Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/sile-de-tansarville-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/o3N-tilfUL2jNh0_TnxwOw/variations/DdJg-Fp6WiWLsuJ5fblUOw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"DdJg-Fp6WiWLsuJ5fblUOw"}]},"Temerian Infantryman":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Temeria! Temeria! Gods shed all grace on thee! And smite thy foes with horrid woes, for all eternity!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/GtYb7lRpULi3lwT1Yf1OsA","info":"Deploy: Play all Temerian Infantrymen from your Deck on the row.\n","name":"Temerian Infantryman","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"GtYb7lRpULi3lwT1Yf1OsA","variations":[{"art":{"artist":"Marta Dettlaff","thumbnailImage":"https://api.gwentapi.com/media/temerian-infantryman-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/GtYb7lRpULi3lwT1Yf1OsA/variations/i6u3nVpvULecheyJg8-ZHg","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"i6u3nVpvULecheyJg8-ZHg"}]},"Thaler":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Piss off! We aren't all philanderers. Some of us have depth…","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/AfIRocr9Um6wJA0CkJgXtw","info":"Deploy: Draw the top 2 cards from your Deck. Keep 1 and shuffle the other back.\n","name":"Thaler","positions":["Melee","Ranged","Siege"],"strength":11,"uuid":"AfIRocr9Um6wJA0CkJgXtw","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/thaler-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/AfIRocr9Um6wJA0CkJgXtw/variations/vq_AMosDVGerQUxz2U20nQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"vq_AMosDVGerQUxz2U20nQ"}]},"The Guardian":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fSkGIO3GV8CMFm8EY5FHyw","name":"Construct"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Stone fists to stop intruders armed with swords. Ironclad logic to stop those armed with lies.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/FHYkQDAqWUiKvgZMx5Ywjg","info":"Deathwish: Create 2 Lesser Guardians on the top of your opponent's Deck.\n","name":"The Guardian","positions":["Melee"],"strength":10,"uuid":"FHYkQDAqWUiKvgZMx5Ywjg","variations":[{"art":{"artist":"James Daly","thumbnailImage":"https://api.gwentapi.com/media/the-guardian-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/FHYkQDAqWUiKvgZMx5Ywjg/variations/g-MdLAKUWq6N0VqCBZzCSg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"g-MdLAKUWq6N0VqCBZzCSg"}]},"The Last Wish":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"A djinn, good sirs, fulfills but three wishes. Thus freed, it flees to dimensions unknown.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/DvWOOF9dXQSvMnGZf5pAdA","info":"Draw your top 2 Bronze or Silver cards. Play 1 and shuffle the other back.\n","name":"The Last Wish","positions":["Event"],"uuid":"DvWOOF9dXQSvMnGZf5pAdA","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/the-last-wish-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/DvWOOF9dXQSvMnGZf5pAdA/variations/9sVTkrt3X2aaYQ7_Gtewkw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"9sVTkrt3X2aaYQ7_Gtewkw"}]},"Thunderbolt Potion":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"The witcher's face changed… his mien turning inhuman, horrifying.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/P3aCNw1dUDKyR8mwSMxMbQ","info":"Boost 3 adjacent Units by 4.\n","name":"Thunderbolt Potion","positions":["Event"],"uuid":"P3aCNw1dUDKyR8mwSMxMbQ","variations":[{"art":{"artist":"Aleksandra Wojtas & Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/thunderbolt-potion-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/P3aCNw1dUDKyR8mwSMxMbQ/variations/exL_sX05XbeLOwDq284O8g","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"exL_sX05XbeLOwDq284O8g"}]},"Tibor Eggebracht":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Tibor's zeal was legendary. It was said when the emperor passed, he'd not so much bow as somersault.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/xD5U2Q-sUBaYJ1dTGybXMA","info":"Deploy: If neither player has passed, Boost self by 15, then your opponent draws the top Bronze card from their Deck and Reveals it.\n","name":"Tibor Eggebracht","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"xD5U2Q-sUBaYJ1dTGybXMA","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/tibor-eggebracht-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/xD5U2Q-sUBaYJ1dTGybXMA/variations/ypBx_yLKWuWFtAgtv4Y3Lg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"ypBx_yLKWuWFtAgtv4Y3Lg"}]},"Torrential Rain":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA","name":"Weather"},{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Even the rain in this land smells vile.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/t1f5cN50XrqCtTVm9Nqkog","info":"Apply Rain to a row on your opponent's side.\nRain: Every turn, at the start of your turn, Damage up to 5 of the Lowest Units on the row by 1.\n","name":"Torrential Rain","positions":["Melee","Ranged","Siege","Event"],"uuid":"t1f5cN50XrqCtTVm9Nqkog","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/torrential-rain-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/t1f5cN50XrqCtTVm9Nqkog/variations/_uXgl3fAXSqb7PPjcvqNDw","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"_uXgl3fAXSqb7PPjcvqNDw"}]},"Toruviel":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/KZEU4PoUVx-Gf9gN2c7Vdw","name":"Ambush"},{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"I'd gladly kill you from up close, stare in your eyes… But you reek, human.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/dTi-ZUaDULKa5Om4djHAqw","info":"Ambush: When your opponent passes, turn this Unit over and Boost 2 Units on each side by 2.\n","name":"Toruviel","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"dTi-ZUaDULKa5Om4djHAqw","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/toruviel-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/dTi-ZUaDULKa5Om4djHAqw/variations/qOVbcPPxVD2fsl3geGlofA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"qOVbcPPxVD2fsl3geGlofA"}]},"Treason":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Many believe the empire's power rests upon the shoulders of its disciplined army and dutiful mages. In truth, the Nilfgaardian floren rules the world.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/f17i-EZAVH6fUxz7-tNgCw","info":"Play the bottom card from your opponent's Deck.\n","name":"Treason","positions":["Event"],"uuid":"f17i-EZAVH6fUxz7-tNgCw","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/treason-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/f17i-EZAVH6fUxz7-tNgCw/variations/SLAJbX-QW8eJC9oqW-YzzQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"SLAJbX-QW8eJC9oqW-YzzQ"}]},"Trebuchet":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g","name":"Machine"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Castle won't batter itself down, now will it? Get them trebuchets rollin'!","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/Q8U20cVPVXaqKC8ZRnNqgw","info":"Deploy: Damage 3 adjacent Enemies by 1.\nFresh Crew: Increase the Damage dealt by 1.\n","name":"Trebuchet","positions":["Melee","Ranged","Siege"],"strength":3,"uuid":"Q8U20cVPVXaqKC8ZRnNqgw","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/trebuchet-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/Q8U20cVPVXaqKC8ZRnNqgw/variations/HCtin4rOVm63OQpizOi1qg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"HCtin4rOVm63OQpizOi1qg"}]},"Tridam Infantryman":{"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Soldiers loyal to the old baron of Tridam left the city with Falibor, thus becoming renegades wanted by the law.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/_SOxfoqAXl-DlnUWpen5dg","info":"Deploy: Gain 3 Armor.\n","name":"Tridam Infantryman","positions":["Melee"],"strength":8,"uuid":"_SOxfoqAXl-DlnUWpen5dg","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/tridam-infantryman-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/_SOxfoqAXl-DlnUWpen5dg/variations/QY6PK_coXFOcZnJjr6KwZA","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"QY6PK_coXFOcZnJjr6KwZA"}]},"Triss Merigold":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"I can take care of myself. Trust me.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/78yrc7dJVLatTbZeymnRQw","info":"Deploy: Damage a Unit by 5.\n","name":"Triss Merigold","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"78yrc7dJVLatTbZeymnRQw","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/triss-merigold-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/78yrc7dJVLatTbZeymnRQw/variations/FJP2Hl-SUnK_jtEZIu-ogQ","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"FJP2Hl-SUnK_jtEZIu-ogQ"}]},"Triss: Butterfly Spell":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Cap'n… our arrows, they've… they've got wings!","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/oNoDwOrWX4q_ZbJFvjs8qg","info":"Every turn, at the start of your turn, Boost all other Lowest Allies by 1.\n","name":"Triss: Butterfly Spell","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"oNoDwOrWX4q_ZbJFvjs8qg","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/triss-butterfly-spell-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/oNoDwOrWX4q_ZbJFvjs8qg/variations/i8TA_lGdUAmJgLGX4MqfCg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"i8TA_lGdUAmJgLGX4MqfCg"}]},"Trollololo":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/9kLCp7e3WQCwUF2BnNJYWQ","name":"Ogroid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Join me King Ravodid army. Order got – guard boatses.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/3Q8Q0W-sXrimkr_-bpjPug","info":"Counts as part of any Northern Realms Trio on the row.\nDeploy: Gain 5 Armor.\n","name":"Trollololo","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"3Q8Q0W-sXrimkr_-bpjPug","variations":[{"art":{"artist":"Hugo Richard, Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/trollololo-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/3Q8Q0W-sXrimkr_-bpjPug/variations/QDl2gDgpVg2n4AcOfchVUg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"QDl2gDgpVg2n4AcOfchVUg"}]},"Udalryk":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"},{"href":"https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ","name":"Cursed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"The gods have spoken: a sacrifice is required.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/GEF0ERHvWuypmyTEfZKw_Q","info":"Deploy: Draw the top 2 cards from your Deck. Keep one and Discard the other.\n","name":"Udalryk","positions":["Melee","Ranged","Siege"],"strength":12,"uuid":"GEF0ERHvWuypmyTEfZKw_Q","variations":[{"art":{"artist":"Grafit Studio, Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/udalryk-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/GEF0ERHvWuypmyTEfZKw_Q/variations/Gsab7Lw0UwW9uQ6dck828A","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"Gsab7Lw0UwW9uQ6dck828A"}]},"Unseen Elder":{"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"No one, not even among the higher vampires, knows exactly how old the Unseen Elder is. They only know they should never, under any circumstances, defy his will.","group":{"href":"https://api.gwentapi.com/v0/groups/OmmwzaNVX3y8Tum_hmXs7A","name":"Leader"},"href":"https://api.gwentapi.com/v0/cards/syItPNBBUU6q5_MB1yaeDQ","info":"Spawn Unseen Elder.\nDeploy: Consume 3 Allies, but Strengthen instead of Boosting.\n","name":"Unseen Elder","positions":["Event"],"strength":5,"uuid":"syItPNBBUU6q5_MB1yaeDQ","variations":[{"art":{"artist":"Diego de Almeida","thumbnailImage":"https://api.gwentapi.com/media/unseen-elder-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/syItPNBBUU6q5_MB1yaeDQ/variations/thS2L2NXXWKjCO_uJrBjYw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"thS2L2NXXWKjCO_uJrBjYw"}]},"Vabjorn":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/oRo5HwxwWUCAHQZMxkc-aQ","name":"Cursed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Blood for Svalblod! Skulls for his throne!","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/kH8K35KJXF-oVDJ2XZlbmQ","info":"Every turn, at the end of your turn, Damage by 2 every Damaged Enemy with 2 Power or less.\n","name":"Vabjorn","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"kH8K35KJXF-oVDJ2XZlbmQ","variations":[{"art":{"artist":"Sławomir Maniak","thumbnailImage":"https://api.gwentapi.com/media/vabjorn-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/kH8K35KJXF-oVDJ2XZlbmQ/variations/diKx10pUX1KTVQWcS6pwcw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"diKx10pUX1KTVQWcS6pwcw"}]},"Vanhemar":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"For a fire mage, he's not very… flamboyant.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/eePf7L4DVGuDTuh3ScDKow","info":"Deploy: Spawn Biting Frost, Clear Skies or Stammelford's Tremors.\n","name":"Vanhemar","positions":["Siege"],"strength":3,"uuid":"eePf7L4DVGuDTuh3ScDKow","variations":[{"art":{"artist":"Chris Rallis","thumbnailImage":"https://api.gwentapi.com/media/vanhemar-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/eePf7L4DVGuDTuh3ScDKow/variations/J6Q_oJW7VGmOmK3LAoo2Vg","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"J6Q_oJW7VGmOmK3LAoo2Vg"}]},"Vattier de Rideaux":{"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"There's never been a problem a well–planned assassination couldn't solve.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/ApbfZ9GzU2S8IiXf6fkI6Q","info":"Deploy: Reveal up to 2 cards from your Hand (can be Golds). For each, Reveal 1 random card from your opponent's Hand (can be Gold).\n","name":"Vattier de Rideaux","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"ApbfZ9GzU2S8IiXf6fkI6Q","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/vattier-de-rideaux-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/ApbfZ9GzU2S8IiXf6fkI6Q/variations/DXTSEL3dUD2hQG_2muX2bA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"DXTSEL3dUD2hQG_2muX2bA"}]},"Vernon Roche":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/6mb4BjFJUKiOY3UfKkEVgQ","name":"Blue Stripes"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"A patriot… and a real pain in the rear.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/X8TKT0stXGO1brbHoikOrA","info":"Deploy: Damage an Enemy by 3. If it was Destroyed, Spawn a Blue Stripes Commando on a random row and repeat the Deploy ability (one time only).\n","name":"Vernon Roche","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"X8TKT0stXGO1brbHoikOrA","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/vernon-roche-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/X8TKT0stXGO1brbHoikOrA/variations/qF-_LErAUOaX5V91icUy8w","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"qF-_LErAUOaX5V91icUy8w"}]},"Ves":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/6mb4BjFJUKiOY3UfKkEVgQ","name":"Blue Stripes"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/s3E2FZW2XZmLZ9YsEiLeeQ","name":"Northern Realms"},"flavor":"Better to live one day as a king than a whole life as a beggar.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/QoOYUkzzXbComAt7iZny-w","info":"Whenever you complete a Northern Realms Trio, play this Unit from your Deck.\n","name":"Ves","positions":["Melee"],"strength":7,"uuid":"QoOYUkzzXbComAt7iZny-w","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/ves-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/QoOYUkzzXbComAt7iZny-w/variations/038d6ZSaX-W0axnEdA1pyA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"038d6ZSaX-W0axnEdA1pyA"}]},"Vesemir":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/fwBroIP0XYu2cEBqFGnK8A","name":"Witcher"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"If you're to be hanged, ask for water. Anything can happen before they fetch it.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/ksPuGyXqWpOqg72cvSKt-A","info":"Deploy: Play Eskel and Lambert from your Deck.\n","name":"Vesemir","positions":["Melee"],"strength":7,"uuid":"ksPuGyXqWpOqg72cvSKt-A","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/vesemir-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/ksPuGyXqWpOqg72cvSKt-A/variations/M8X4FMISWjO-zYuxT4mn3Q","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"M8X4FMISWjO-zYuxT4mn3Q"}]},"Vicovaro Medic":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"The world has known as many plagues as it has wars. Yet both war and plague always take men by surprise.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/boZuBMUTWVaYLzo96VELKQ","info":"Deploy: Resurrect a Bronze Unit from your opponent's Graveyard.\n","name":"Vicovaro Medic","positions":["Ranged"],"strength":1,"uuid":"boZuBMUTWVaYLzo96VELKQ","variations":[{"art":{"artist":"Lorenzo Mastroianni","thumbnailImage":"https://api.gwentapi.com/media/vicovaro-medic-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/boZuBMUTWVaYLzo96VELKQ/variations/t0BfFPORUvCaH8oqAaguiA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"t0BfFPORUvCaH8oqAaguiA"}]},"Vicovaro Novice":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Mages in Nilfgaard are disposable. If one disappoints the Emperor, a dozen others await to provide what he requires.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/pD39Z2ekXYiu7i5pBjx_Fg","info":"Deploy: Trigger the ability of a Spying Enemy Ambassador or Emissary.\n","name":"Vicovaro Novice","positions":["Siege"],"strength":1,"uuid":"pD39Z2ekXYiu7i5pBjx_Fg","variations":[{"art":{"artist":"Bruno Biazotto","thumbnailImage":"https://api.gwentapi.com/media/vicovaro-novice-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/pD39Z2ekXYiu7i5pBjx_Fg/variations/3hioxRqEXPWsykcswdR5fQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"3hioxRqEXPWsykcswdR5fQ"}]},"Vilgefortz":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"We are all pawns on his board. Playing a game whose rules we do not know.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/2FHNKVS8Vz6eAoSbL3sIgg","info":"Deploy: Destroy an Ally or (only possible if your opponent has not passed) an Enemy. If you destroy an Ally, play the top card from your Deck. If you destroy an Enemy, your opponent draws the top Bronze card from their Deck and Reveals it.\n","name":"Vilgefortz","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"2FHNKVS8Vz6eAoSbL3sIgg","variations":[{"art":{"artist":"Nemanja Stankovic","thumbnailImage":"https://api.gwentapi.com/media/vilgefortz-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/2FHNKVS8Vz6eAoSbL3sIgg/variations/ZA_ApFSvUea8CWjB06jFfg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"ZA_ApFSvUea8CWjB06jFfg"}]},"Villentretenmerth":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g","name":"Draconid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Also calls himself Borkh Three Jackdaws… he's not the best at names.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/AAT11CoiU-6y4oy5IsXxUA","info":"After 3 turns, at the start of your turn, Destroy all the Highest Units on the Board.\n","name":"Villentretenmerth","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"AAT11CoiU-6y4oy5IsXxUA","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/villentretenmerth-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/AAT11CoiU-6y4oy5IsXxUA/variations/14XvEuoCXqmikAY224CO9w","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"14XvEuoCXqmikAY224CO9w"}]},"Vran Warrior":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g","name":"Draconid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"They sat still on their horses, seemingly relaxed. He saw their weapons – short spears with wide tips. Swords with oddly forged guards. Battle axes. Toothed gisarmes.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/CdZSU2RJVUmpJ_NeNtlmBw","info":"Deploy: Consume the Unit to the right.\nEvery 2 turns, at the start of your turn, Consume the Unit to the right.\n","name":"Vran Warrior","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"CdZSU2RJVUmpJ_NeNtlmBw","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/vran-warrior-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/CdZSU2RJVUmpJ_NeNtlmBw/variations/JjaifJsKWZGzwhfDSpBjBw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"JjaifJsKWZGzwhfDSpBjBw"}]},"Vrihedd Brigade":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Vrihedd? What's that mean? Trouble.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/GCdSPKpsVEKhPnyfdk4PMg","info":"Deploy: Clear Weather from the row on your side and move a Unit to this row on its side.\n","name":"Vrihedd Brigade","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"GCdSPKpsVEKhPnyfdk4PMg","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/vrihedd-brigade-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/GCdSPKpsVEKhPnyfdk4PMg/variations/BqBjx62nVEi_YbNFNl8Vdg","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"BqBjx62nVEi_YbNFNl8Vdg"}]},"Vrihedd Dragoon":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Most terrible things I've witnessed? The Catriona plague, the razing of Vengerberg and the charge of the Vrihedd Dragoons.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/ym8WoY2BWR-aIq-40zUsCQ","info":"Every turn, at the start of your turn, Boost a random Loyal Unit in your Hand by 1.\n","name":"Vrihedd Dragoon","positions":["Siege"],"strength":6,"uuid":"ym8WoY2BWR-aIq-40zUsCQ","variations":[{"art":{"artist":"Bartłomiej Gaweł","thumbnailImage":"https://api.gwentapi.com/media/vrihedd-dragoon-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/ym8WoY2BWR-aIq-40zUsCQ/variations/Aal1wiezX8G3eF17w2DOlg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"Aal1wiezX8G3eF17w2DOlg"}]},"Vrihedd Officer":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Hatred burns brighter than any fire, and cuts deeper than any blade.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/cwN2cUY3V-qCJohLa8tPPg","info":"Deploy: Mulligan a card.\n","name":"Vrihedd Officer","positions":["Siege"],"strength":7,"uuid":"cwN2cUY3V-qCJohLa8tPPg","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/vrihedd-officer-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/cwN2cUY3V-qCJohLa8tPPg/variations/eo_fQASOWs2mIK69BcY_lQ","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"eo_fQASOWs2mIK69BcY_lQ"}]},"Vrihedd Sappers":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/KZEU4PoUVx-Gf9gN2c7Vdw","name":"Ambush"},{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"No matter what you may have heard, elves don't take human scalps. Too much lice.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/HvF4tQnhVS-5raTTZXuDxA","info":"Ambush: After 2 turns, at the start of your turn, turn this Unit over.\n","name":"Vrihedd Sappers","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"HvF4tQnhVS-5raTTZXuDxA","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/vrihedd-sappers-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/HvF4tQnhVS-5raTTZXuDxA/variations/zwlPXJuoX4aQJAZaaR5wSw","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"zwlPXJuoX4aQJAZaaR5wSw"}]},"Vrihedd Vanguard":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Temerians, Redanians, all the same. Better off dead.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/r8sz89jTVuuCZ7g2Bd2Vrg","info":"Whenever you Mulligan a card, Boost self by 1 while in your Hand, Deck or on your side of the Board.\n","name":"Vrihedd Vanguard","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"r8sz89jTVuuCZ7g2Bd2Vrg","variations":[{"art":{"artist":"Bryan Sola","thumbnailImage":"https://api.gwentapi.com/media/vrihedd-vanguard-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/r8sz89jTVuuCZ7g2Bd2Vrg/variations/QOfbI8SOV7WprImf1E6c9Q","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"QOfbI8SOV7WprImf1E6c9Q"}]},"War Longship":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g","name":"Machine"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"They say Hemdall's heart swells whenever the longships sail out on a raid.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/_c0hpwPnVmiyv-BhfSuCAg","info":"Whenever you Discard a Unit, Damage a random Enemy by 2.\n","name":"War Longship","positions":["Siege"],"strength":6,"uuid":"_c0hpwPnVmiyv-BhfSuCAg","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/war-longship-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/_c0hpwPnVmiyv-BhfSuCAg/variations/7ib2EMNLW1C3v27UQPQmpQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"7ib2EMNLW1C3v27UQPQmpQ"}]},"Water Hag":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/1wnI6NinXfK1PqobYjCsYg","name":"Necrophage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Seen a lot o' ugly critters in me life – morays, lampreys, blobfish… But never nothin' like this!","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/AM137LkZX0y_4yXtE0bZcA","info":"Deploy: Spawn Torrential Rain, Clear Skies or Lacerate.\n","name":"Water Hag","positions":["Siege"],"strength":3,"uuid":"AM137LkZX0y_4yXtE0bZcA","variations":[{"art":{"artist":"Adrian Smith","thumbnailImage":"https://api.gwentapi.com/media/water-hag-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/AM137LkZX0y_4yXtE0bZcA/variations/igRVau_kWb6TLxxR14iPNQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"igRVau_kWb6TLxxR14iPNQ"}]},"White Frost":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/zr8KciZRWbiTjzUcR_WlLA","name":"Weather"},{"href":"https://api.gwentapi.com/v0/categories/wWqBTy3SWJubVk7yUYbBTA","name":"Special"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Behold Tedd Deireadh, the Final Age. The world destroyed by the White Frost.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/rFwly3N-WSqe8afApiOkjg","info":"Apply Frost to a row on your opponent's side and the row above it.\nFrost: Every turn, at the start of your turn, Damage one of the Lowest Units on the row by 2.\n","name":"White Frost","positions":["Melee","Ranged","Event"],"uuid":"rFwly3N-WSqe8afApiOkjg","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/white-frost-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/rFwly3N-WSqe8afApiOkjg/variations/l6jzuJg9VDmwz9zPAjyErA","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"l6jzuJg9VDmwz9zPAjyErA"}]},"Wild Boar of the Sea":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HkKnxxu9Uhy8Mkwwi1ua2g","name":"Machine"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/Ito_P7DSWi-TCfpWIoG7aQ","name":"Skellige"},"flavor":"Merely mention this name to a Nilfgaardian, and they'll feel a spreading warmth in their knickers…","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/vKwgBF_MVQm1PQYcRb-rzw","info":"Every turn, at the start of your turn, Strengthen the Unit to the left by 1 and Damage the Unit to the right by 1.\n","name":"Wild Boar of the Sea","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"vKwgBF_MVQm1PQYcRb-rzw","variations":[{"art":{"artist":"Bogna Gawrońska","thumbnailImage":"https://api.gwentapi.com/media/wild-boar-of-the-sea-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/vKwgBF_MVQm1PQYcRb-rzw/variations/UigrLWbGUpiYS500hw8jqg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"UigrLWbGUpiYS500hw8jqg"}]},"Wild Hunt Hound":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw","name":"Wild Hunt"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Cry 'Havoc!', and let slip the dogs of war.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/qc42Cjh9Uy-f65Jzds97bQ","info":"Deploy: Play a Biting Frost card from your Deck.\n","name":"Wild Hunt Hound","positions":["Melee"],"strength":4,"uuid":"qc42Cjh9Uy-f65Jzds97bQ","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/wild-hunt-hound-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/qc42Cjh9Uy-f65Jzds97bQ/variations/C6dMpDJgWa6WFXnQ95uGBA","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"C6dMpDJgWa6WFXnQ95uGBA"}]},"Wild Hunt Navigator":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw","name":"Wild Hunt"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"For hundreds of years, Avallac'h tried to recreate the Elder Blood gene through back breeding - yet the elven children thus fostered were but dim sparks compared to Lara's flame.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/rDdbgJ6XWviiaANitOZpUw","info":"Deploy: Choose a different Bronze Wild Hunt Ally. Play a copy of it from your Deck.\n","name":"Wild Hunt Navigator","positions":["Siege"],"strength":3,"uuid":"rDdbgJ6XWviiaANitOZpUw","variations":[{"art":{"artist":"Diego de Almeida","thumbnailImage":"https://api.gwentapi.com/media/wild-hunt-navigator-thumbnail.png"},"availability":"BaseSet","craft":{"normal":80,"premium":400},"href":"https://api.gwentapi.com/v0/cards/rDdbgJ6XWviiaANitOZpUw/variations/olsgflz_WWes2PNVjlK7QQ","mill":{"normal":20,"premium":20},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/-naHV1zlVuCFll-j-7T1ow","name":"Rare"},"uuid":"olsgflz_WWes2PNVjlK7QQ"}]},"Wild Hunt Rider":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw","name":"Wild Hunt"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"First the buffalo horns atop their helms penetrate one's view, then the crest betwixt them, and finally the skull–like face exposed beneath their visors.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/oNE58vzwWs-oW_mOwZzr4g","info":"At the end of the Round, keep this Unit on the Board if you lost.\nIf this Unit is part of a Trio at the end of your turn, Boost it by 1.\n","name":"Wild Hunt Rider","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"oNE58vzwWs-oW_mOwZzr4g","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/wild-hunt-rider-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/oNE58vzwWs-oW_mOwZzr4g/variations/l8-s7PLBV3mMpN_rHZk6TQ","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"l8-s7PLBV3mMpN_rHZk6TQ"}]},"Wild Hunt Warrior":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/2zDUxCHhUTyXnoNs1sCwpw","name":"Wild Hunt"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"The White Frost is coming.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/sI5xs-d3XrK_tIedPGhWkg","info":"Deploy: Damage an Enemy by 3. If it was Destroyed, Boost self by 2.\n","name":"Wild Hunt Warrior","positions":["Melee"],"strength":5,"uuid":"sI5xs-d3XrK_tIedPGhWkg","variations":[{"art":{"artist":"Marta Dettlaff","thumbnailImage":"https://api.gwentapi.com/media/wild-hunt-warrior-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/sI5xs-d3XrK_tIedPGhWkg/variations/RXj9FgB-VDmzU8fejqbdLg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"RXj9FgB-VDmzU8fejqbdLg"}]},"Woodland Spirit":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/Sf-hvr4CXum3E9I65JtmGw","name":"Relict"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"We never hunt in these woods. Not even if it means the whole village'll starve.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/cRa7rxltVvOrK1bsZGPbuA","info":"Deploy: Spawn 3 Rabid Wolves and apply Fog to the opposite row.\n","name":"Woodland Spirit","positions":["Melee","Ranged","Siege"],"strength":5,"uuid":"cRa7rxltVvOrK1bsZGPbuA","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/woodland-spirit-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/cRa7rxltVvOrK1bsZGPbuA/variations/TPIhuhwYUn6RFx9cclOluA","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"TPIhuhwYUn6RFx9cclOluA"}]},"Wyvern":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/n0vIrj1SV8ycLmRqBHWK6g","name":"Draconid"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/M_7suYAmXIC1wZnypJ5zYg","name":"Monster"},"flavor":"Imagine a cross between a winged snake and a nightmare. Wyverns are worse.","group":{"href":"https://api.gwentapi.com/v0/groups/hjkTk62UXuu30r_GJAYv4A","name":"Bronze"},"href":"https://api.gwentapi.com/v0/cards/Y1XnFmv2XNqI2iDIL9geoQ","info":"Deploy: Damage an Enemy by 3.\n","name":"Wyvern","positions":["Siege"],"strength":6,"uuid":"Y1XnFmv2XNqI2iDIL9geoQ","variations":[{"art":{"artist":"Alejandro Mirabal","thumbnailImage":"https://api.gwentapi.com/media/wyvern-thumbnail.png"},"availability":"BaseSet","craft":{"normal":30,"premium":200},"href":"https://api.gwentapi.com/v0/cards/Y1XnFmv2XNqI2iDIL9geoQ/variations/dQQ-s1_aWV6VMILgnVNnYg","mill":{"normal":10,"premium":10},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/gGlnI525WLailI_mBFFiSw","name":"Common"},"uuid":"dQQ-s1_aWV6VMILgnVNnYg"}]},"Xarthisius":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/PleNo81aUQmuAk_rl8lyFw","name":"Nilfgaard"},"flavor":"Astrology, hydromancy, haruspicy, ceromancy. Ovomancy, spodomancy, metroscopy, brontoscopy…","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/7zeFl3d_U6iDcs-wYTMPsQ","info":"Deploy: Look at the top 3 cards in your opponent's Deck. You may move 1 to the bottom of their Deck.\n","name":"Xarthisius","positions":["Melee","Ranged","Siege"],"strength":10,"uuid":"7zeFl3d_U6iDcs-wYTMPsQ","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/xarthisius-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/7zeFl3d_U6iDcs-wYTMPsQ/variations/5swHglkAWia1zcwb0nJUvg","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"5swHglkAWia1zcwb0nJUvg"}]},"Yaevinn":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/jwrOszYUXryMMDUtuJOb-g","name":"Doomed"},{"href":"https://api.gwentapi.com/v0/categories/x9Kd2sk1U2mnrvC2n6MI7w","name":"Elf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"We are the drops of rain that together make a ferocious storm.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/I-mkePuHV6uMcejBo-2Q0w","info":"Deploy: Draw the top Unit and top Special card from your Deck. Keep 1 and shuffle the other back.\n","name":"Yaevinn","positions":["Melee","Ranged","Siege"],"strength":12,"uuid":"I-mkePuHV6uMcejBo-2Q0w","variations":[{"art":{"artist":"Ilker Serdar Yildiz","thumbnailImage":"https://api.gwentapi.com/media/yaevinn-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/I-mkePuHV6uMcejBo-2Q0w/variations/o6JCdVyBWpaxDUMaTk_3Cw","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"o6JCdVyBWpaxDUMaTk_3Cw"}]},"Yarpen Zigrin":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA","name":"Dwarf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Ever hear o' the dragon Ocvist? From Quartz Mountain? Well, Yarpen Zigrin and his band o' dwarves did 'im in.","group":{"href":"https://api.gwentapi.com/v0/groups/H7ISGXIHW6WazTe6-Iamag","name":"Silver"},"href":"https://api.gwentapi.com/v0/cards/tGq44FNZUgizvCzlGMOnVA","info":"Whenever a Dwarf Ally (including Golds) is played, Boost self by 1.\nDeploy: Gain Resilience.\n","name":"Yarpen Zigrin","positions":["Siege"],"strength":7,"uuid":"tGq44FNZUgizvCzlGMOnVA","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/yarpen-zigrin-thumbnail.png"},"availability":"BaseSet","craft":{"normal":200,"premium":800},"href":"https://api.gwentapi.com/v0/cards/tGq44FNZUgizvCzlGMOnVA/variations/3-VIFGNyX_WAZigFxUF6VQ","mill":{"normal":50,"premium":50},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/V_ImiYfTVhG_WaAOof9Rxg","name":"Epic"},"uuid":"3-VIFGNyX_WAZigFxUF6VQ"}]},"Yennefer":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Magic is Chaos, Art and Science. It is a curse, a blessing and a progression.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/IR_9w0lcX5iM5-gJ6KwU6Q","info":"Deploy: Spawn a Unicorn or a Chironex.\n","name":"Yennefer","positions":["Melee","Ranged","Siege"],"strength":6,"uuid":"IR_9w0lcX5iM5-gJ6KwU6Q","variations":[{"art":{"artist":"Anna Podedworna","thumbnailImage":"https://api.gwentapi.com/media/yennefer-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/IR_9w0lcX5iM5-gJ6KwU6Q/variations/CHQj3YDTWLqMvBcbVtsB9g","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"CHQj3YDTWLqMvBcbVtsB9g"}]},"Yennefer: The Conjurer":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/HfaxmUTjWtO4xGZDRNRzvQ","name":"Mage"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"A good sorceress must know when to conjure ice… and when to conjure fire.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/EsZuchNWVceQ3TqM74BOQw","info":"Every turn, at the start of your turn, Damage all the Highest Enemies by 1.\n","name":"Yennefer: The Conjurer","positions":["Melee","Ranged","Siege"],"strength":4,"uuid":"EsZuchNWVceQ3TqM74BOQw","variations":[{"art":{"artist":"Marek Madej","thumbnailImage":"https://api.gwentapi.com/media/yennefer-the-conjurer-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/EsZuchNWVceQ3TqM74BOQw/variations/xfpsIqMaVz63FEFMO4sfHw","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"xfpsIqMaVz63FEFMO4sfHw"}]},"Zoltan Chivay":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA","name":"Dwarf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/0BJkuyNoWYyIAcKRVIfWVQ","name":"Scoia'tael"},"flavor":"Drinkin' alone's like crappin' with company.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/sVC2mby7UNGO98kkBxHwiw","info":"Deploy: Move 3 Units to this row on their side. If they are Allies, Strengthen them by 2.\n","name":"Zoltan Chivay","positions":["Melee","Ranged","Siege"],"strength":8,"uuid":"sVC2mby7UNGO98kkBxHwiw","variations":[{"art":{"artist":"James Daly","thumbnailImage":"https://api.gwentapi.com/media/zoltan-chivay-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/sVC2mby7UNGO98kkBxHwiw/variations/NYBYXgmFWv2UCtbCg8i0lQ","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"NYBYXgmFWv2UCtbCg8i0lQ"}]},"Zoltan: Animal Tamer":{"categories":[{"href":"https://api.gwentapi.com/v0/categories/gAB3OAQuVfaIifplJ5jZEA","name":"Dwarf"}],"faction":{"href":"https://api.gwentapi.com/v0/factions/b6aJCvL_W5G5jm_uaaa9ng","name":"Neutral"},"flavor":"Apologies. My exotic pet's a clever birdie, but a wee bit lewd. Paid ten thalers for the beaute.","group":{"href":"https://api.gwentapi.com/v0/groups/f1z4bv7pXU-BzFKd-EBOIw","name":"Gold"},"href":"https://api.gwentapi.com/v0/cards/RlU29hgkVdWSt1GrSU7JEQ","info":"Deploy: Spawn Field Marshal Duda Companion or Field Marshal Duda Agitator.\n","name":"Zoltan: Animal Tamer","positions":["Melee","Ranged","Siege"],"strength":7,"uuid":"RlU29hgkVdWSt1GrSU7JEQ","variations":[{"art":{"artist":"Grafit Studio","thumbnailImage":"https://api.gwentapi.com/media/zoltan-animal-tamer-thumbnail.png"},"availability":"BaseSet","craft":{"normal":800,"premium":1600},"href":"https://api.gwentapi.com/v0/cards/RlU29hgkVdWSt1GrSU7JEQ/variations/ownFXQzhVSOvTtaBtA9zSQ","mill":{"normal":200,"premium":200},"rarity":{"href":"https://api.gwentapi.com/v0/rarities/u0zNKy4EULa_VU4JD5r4EA","name":"Legendary"},"uuid":"ownFXQzhVSOvTtaBtA9zSQ"}]}}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsxDom = __webpack_require__(0);

var _walk = __webpack_require__(10);

var _walk2 = _interopRequireDefault(_walk);

var _logo = __webpack_require__(27);

var _logo2 = _interopRequireDefault(_logo);

var _website = __webpack_require__(28);

var _website2 = _interopRequireDefault(_website);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */

// eslint-disable-next-line no-unused-vars
var REDDIT = 'https://www.reddit.com/r/gwent/';
var GWENTDB = 'http://www.gwentdb.com/';
var REPO = 'https://github.com/Soreine/hyper-gwent/issues';
var CHROME_EXTENSION = 'https://chrome.google.com/webstore/detail/hyper-gwent/ihaocjeiipaghnmnagdnacpeaeljgneo';
var FIREFOX_EXTENSION = 'https://addons.mozilla.org/en-US/firefox/addon/hyper-gwent/';

var browser = /firefox/.test(window.navigator.userAgent.toLowerCase()) && 'firefox' || window.chrome && 'chrome';

var htmlPage =
/* eslint-disable max-len */
(0, _jsxDom.createElement)(
  'div',
  { className: 'content' },
  (0, _jsxDom.createElement)(
    'style',
    { type: 'text/css' },
    _website2.default.toString()
  ),
  (0, _jsxDom.createElement)(
    'div',
    { className: 'logo' },
    (0, _jsxDom.createElement)('div', { className: 'logo-title',
      innerHTML: _logo2.default }),
    (0, _jsxDom.createElement)(
      'div',
      { className: 'logo-subtitle' },
      'Browser extension for GWENT®: The Witcher Card Game'
    )
  ),
  browser === 'chrome' && (0, _jsxDom.createElement)(
    'a',
    { className: 'download-link', href: CHROME_EXTENSION },
    'Add to Chrome'
  ),
  browser === 'firefox' && (0, _jsxDom.createElement)(
    'a',
    { className: 'download-link', href: FIREFOX_EXTENSION },
    'Add to Firefox'
  ),
  !browser && (0, _jsxDom.createElement)(
    'p',
    { className: 'noextension' },
    'Although the demonstration should work in your browser, the extension is only available for Chrome and Firefox.'
  ),
  (0, _jsxDom.createElement)(
    'div',
    { className: 'description' },
    (0, _jsxDom.createElement)(
      'p',
      null,
      'None of us can reasonably remember every possible Gwent card\'s name and effect. Browsing ',
      (0, _jsxDom.createElement)(
        'a',
        { href: REDDIT },
        'r/gwent'
      ),
      ' and reading deck guides on ',
      (0, _jsxDom.createElement)(
        'a',
        { href: GWENTDB },
        'GwentDB'
      ),
      ' can be challenging if you don\'t know half the cards people are talking about.'
    ),
    (0, _jsxDom.createElement)(
      'p',
      null,
      (0, _jsxDom.createElement)(
        'em',
        null,
        'You might find this shocking:'
      ),
      (0, _jsxDom.createElement)(
        'ul',
        null,
        (0, _jsxDom.createElement)(
          'li',
          null,
          'Xmen are not what they used to be.'
        ),
        (0, _jsxDom.createElement)(
          'li',
          null,
          'ADC does not stand for Attack Damage Carry.'
        ),
        (0, _jsxDom.createElement)(
          'li',
          null,
          'There ',
          (0, _jsxDom.createElement)(
            'em',
            null,
            'are'
          ),
          ' worst names for a dragon than Borkh.'
        ),
        (0, _jsxDom.createElement)(
          'li',
          null,
          'Gwent has nothing to do with cooking frogs, mushrooms, or anything remotely related to french cuisine.'
        )
      )
    ),
    (0, _jsxDom.createElement)(
      'div',
      { className: 'emote' },
      (0, _jsxDom.createElement)('div', { className: 'avatar geralt' }),
      (0, _jsxDom.createElement)(
        'div',
        { className: 'emote-text' },
        'Not bad. Not bad at all.'
      )
    ),
    (0, _jsxDom.createElement)(
      'p',
      null,
      'Whether you are new to the game, or you want to keep up with the latest card changes, or you can\'t remember crap, Hyper Gwent is here to save the day. Hyper Gwent automatically detects card names or acronyms in the pages you visit, highlights them and shows a tooltip when hovering them.'
    ),
    (0, _jsxDom.createElement)(
      'p',
      null,
      'Feature list:',
      (0, _jsxDom.createElement)(
        'ul',
        null,
        (0, _jsxDom.createElement)(
          'li',
          null,
          'Includes all existing cards, up to date with the latest patch'
        ),
        (0, _jsxDom.createElement)(
          'li',
          null,
          'Support abbreviations, acronyms, plurals, missing capitals, and missing accents'
        ),
        (0, _jsxDom.createElement)(
          'li',
          null,
          'Non obstrusive. Add subtle highlights and does not break links.'
        ),
        (0, _jsxDom.createElement)(
          'li',
          null,
          'Fast'
        )
      )
    ),
    (0, _jsxDom.createElement)(
      'p',
      null,
      'Incoming features:',
      (0, _jsxDom.createElement)(
        'ul',
        null,
        (0, _jsxDom.createElement)(
          'li',
          null,
          'Enable on any website with a simple click (currently only enabled on r/gwent and GwentDB)'
        ),
        (0, _jsxDom.createElement)(
          'li',
          null,
          'Even more accurate card detection'
        )
      )
    ),
    (0, _jsxDom.createElement)(
      'p',
      null,
      'What do you think of that, Dandelion?'
    ),
    (0, _jsxDom.createElement)(
      'div',
      { className: 'emote' },
      (0, _jsxDom.createElement)('div', { className: 'avatar dandelion' }),
      (0, _jsxDom.createElement)(
        'div',
        { className: 'emote-text' },
        'That… was actually rather impressive. Congratulations.'
      )
    )
  ),
  browser === 'chrome' && (0, _jsxDom.createElement)(
    'a',
    { className: 'download-link', href: CHROME_EXTENSION },
    'Add to Chrome'
  ),
  browser === 'firefox' && (0, _jsxDom.createElement)(
    'a',
    { className: 'download-link', href: FIREFOX_EXTENSION },
    'Add to Firefox'
  ),
  (0, _jsxDom.createElement)(
    'p',
    null,
    'Special thanks and credit:',
    (0, _jsxDom.createElement)(
      'ul',
      null,
      (0, _jsxDom.createElement)(
        'li',
        null,
        'Thanks to ',
        (0, _jsxDom.createElement)(
          'a',
          { href: 'https://github.com/Zhouzi' },
          'Zhouzi'
        ),
        ' for all the work he did on this. Props to him for the great looking tooltips.'
      ),
      (0, _jsxDom.createElement)(
        'li',
        null,
        'Thanks to ',
        (0, _jsxDom.createElement)(
          'a',
          { href: 'https://twitter.com/GwentAPI' },
          '@GwentAPI'
        ),
        ' for maintaining the API which this extension is built upon. All cards infos come from here.'
      )
    )
  ),
  (0, _jsxDom.createElement)(
    'p',
    { className: 'issues' },
    'If you find bugs, if you want to submit new acronyms, request a feature, or contribute, post an issue ',
    (0, _jsxDom.createElement)(
      'a',
      { href: REPO },
      'here'
    ),
    '.',
    (0, _jsxDom.createElement)('br', null),
    'You can also contact ',
    (0, _jsxDom.createElement)(
      'a',
      { href: 'https://www.reddit.com/message/compose/?to=Soreine' },
      '/u/Soreine'
    ),
    '.'
  )
)
/* eslint-enable max-len */
;
window.document.body.appendChild(htmlPage);

// Launch extension within the page
(0, _walk2.default)();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _urlParse = __webpack_require__(11);

var _urlParse2 = _interopRequireDefault(_urlParse);

var _findAllMatches = __webpack_require__(15);

var _findAllMatches2 = _interopRequireDefault(_findAllMatches);

var _replaceMatches = __webpack_require__(22);

var _replaceMatches2 = _interopRequireDefault(_replaceMatches);

var _tooltip = __webpack_require__(23);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _data = __webpack_require__(6);

var _dictionary = __webpack_require__(2);

var _dictionary2 = _interopRequireDefault(_dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window, document */

var CLASSNAME = 'hyper-gwent-card-highlight';
var CARD_NAME_ATTRIBUTE = 'data-card-name';
var GWENTDB_TOOLTIP_ATTR = 'data-tooltip-url';
var GWENTDB_HOSTNAME = 'www.gwentdb.com';

// Walk the document and highlight cards
function walk() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$shouldUnderline = _ref.shouldUnderline,
      shouldUnderline = _ref$shouldUnderline === undefined ? true : _ref$shouldUnderline;

  var assets = arguments[1];

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

  nodes.forEach(function (_ref2) {
    var node = _ref2.node,
        matches = _ref2.matches;

    var span = window.document.createElement('span');
    span.innerHTML = (0, _replaceMatches2.default)(node.nodeValue, matches, function (match) {
      return '<span class="' + CLASSNAME + '" ' + CARD_NAME_ATTRIBUTE + '="' + match.entryValue + '" ' + (shouldUnderline ? 'style="border-bottom: 1px dashed; padding-bottom: 0.1em"' : '') + '>' + node.nodeValue.slice(match.start, match.end) + '</span>';
    });

    node.parentNode.replaceChild(span, node);
  });

  // Add tooltips
  var highlights = document.getElementsByClassName(CLASSNAME);
  for (var i = 0; i < highlights.length; i += 1) {
    var highlight = highlights[i];
    var cardName = highlight.getAttribute(CARD_NAME_ATTRIBUTE);
    var card = _data.CARDS[cardName];
    (0, _tooltip2.default)(card, highlight, assets);
  }
}

exports.default = walk;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(13)
  , qs = __webpack_require__(14)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

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
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
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

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) delete finaldestination[key];
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
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

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

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

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
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

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
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
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

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

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
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
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

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

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

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
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
/* 14 */
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
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (;
    part = parser.exec(query);
    result[decode(part[1])] = decode(part[2])
  );

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
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _removeAccents = __webpack_require__(1);

var _removeAccents2 = _interopRequireDefault(_removeAccents);

var _dictionary = __webpack_require__(2);

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
/* 16 */
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
/* 17 */
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
  var isSpace = !/\w/.test(nextChar);
  var endOfWord = nextChar === undefined || isSpace;
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pluralize = __webpack_require__(19);

var _pluralize2 = _interopRequireDefault(_pluralize);

var _removeAccents = __webpack_require__(1);

var _removeAccents2 = _interopRequireDefault(_removeAccents);

var _data = __webpack_require__(6);

var _create = __webpack_require__(3);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (true) {
    // Node.
    module.exports = pluralize();
  } else if (typeof define === 'function' && define.amd) {
    // AMD, registers as an anonymous module.
    define(function () {
      return pluralize();
    });
  } else {
    // Browser global.
    root.pluralize = pluralize();
  }
})(this, function () {
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
  function sanitizeRule (rule) {
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
  function restoreCase (word, token) {
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
  function interpolate (str, args) {
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
  function replace (word, rule) {
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
  function sanitizeWord (token, word, rules) {
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
  function replaceWord (replaceMap, keepMap, rules) {
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
  function checkWord (replaceMap, keepMap, rules, bool) {
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
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Check if a word is plural.
   *
   * @type {Function}
   */
  pluralize.isPlural = checkWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Check if a word is singular.
   *
   * @type {Function}
   */
  pluralize.isSingular = checkWord(
    irregularPlurals, irregularSingles, singularRules
  );

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
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['was', 'were'],
    ['has', 'have'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['looey', 'looies'],
    ['thief', 'thieves'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['whiskey', 'whiskies']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/[^\u0000-\u007F]$/i, '$0'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/(m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'],
    [/(^analy)(?:sis|ses)$/i, '$1sis'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/ies$/i, 'y'],
    [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
    [/\b(mon|smil)ies$/i, '$1ey'],
    [/(m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'],
    [/(e[mn]u)s?$/i, '$1'],
    [/(movie|twelve)s$/i, '$1'],
    [/(cris|test|diagnos)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'adulthood',
    'advice',
    'agenda',
    'aid',
    'alcohol',
    'ammo',
    'anime',
    'athletics',
    'audio',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'cod',
    'commerce',
    'cooperation',
    'corps',
    'debris',
    'diabetes',
    'digestion',
    'elk',
    'energy',
    'equipment',
    'excretion',
    'expertise',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'manga',
    'news',
    'pike',
    'plankton',
    'pliers',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'species',
    'staff',
    'swine',
    'tennis',
    'traffic',
    'transporation',
    'trout',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    // Regexes.
    /[^aeiou]ese$/i, // "chinese", "japanese"
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /measles$/i,
    /o[iu]s$/i, // "carnivorous"
    /pox$/i, // "chickpox", "smallpox"
    /sheep$/i
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CARDS = __webpack_require__(7);

var _CARDS2 = _interopRequireDefault(_CARDS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAMES = Object.keys(_CARDS2.default);

exports.default = NAMES;

/***/ }),
/* 21 */
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
  "Alzur's Double–Cross": ['alzur double cross', 'adc'],
  "Alzur's Thunder": ['alzur thunder', 'thunder', 'zap'],
  Ambassador: [],
  'Ancient Foglet': [],
  Arachas: [],
  'Arachas Behemoth': ['behemoth'],
  'Arachas Venom': [],
  Archgriffin: [],
  'Aretuza Adept': [],
  Assassination: [],
  'Assire var Anahid': ['assire'],
  Auckes: [],
  "Avallac'h": ['avallach'],
  Ballista: [],
  'Barclay Els': ['barclay'],
  "Bekker's Twisted Mirror": ['bekkers twisted mirror', 'btm', 'bekker'],
  'Berserker Marauder': [],
  'Birna Bran': ['birna'],
  'Biting Frost': ['frost'],
  'Black Infantry Arbalest': ['arbalest'],
  'Bloodcurdling Roar': [],
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
  'Celaeno Harpy': [],
  Cerys: [],
  'Champion of Champions': ['coc'],
  Chort: [],
  Ciaran: [],
  Ciri: [],
  'Ciri: Dash': ['cdash', 'ciri dash'],
  'Clan an Craite Raider': ['ccr', 'raider', 'cacr'],
  'Clan an Craite Warcrier': ['warcrier', 'cacw'],
  'Clan an Craite Warrior': [],
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
  "Commander's Horn": ['horn'],
  'Commando Neophyte': ['neophyte'],
  Coral: [],
  'Crach an Craite': ['crach'],
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
  'Emhyr var Emreis': ['emhyr'],
  Emissary: [],
  Epidemic: [],
  Eredin: [],
  Ermion: [],
  Eskel: [],
  'Fake Ciri': [],
  'Field Medic': [],
  Fiend: [],
  'Fire Elemental': [],
  'Fire Scorpion': ['scorpion'],
  'First Light': [],
  Foglet: [],
  Foltest: [],
  Francesca: [],
  Frightener: [],
  'Fringilla Vigo': ['fringilla'],
  "Gaunter O'Dimm": ['gaunter odimm', 'gaunter', 'god'],
  "Ge'els": ['geels'],
  Geralt: [],
  'Geralt: Aard': ['aard', 'gaard', 'geralt aard'],
  'Geralt: Igni': ['igni', 'gigni', 'geralt igni'],
  Ghoul: [],
  'Giant Toad': ['toad', 'frog'],
  'Grave Hag': [],
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
  'Immune Boost': [],
  'Impenetrable Fog': ['fog'],
  'Impera Brigade': [],
  'Impera Enforcers': [],
  'Imperial Golem': ['golem'],
  Iorveth: [],
  Iris: [],
  Isengrim: [],
  Ithlinne: [],
  'Joachim de Wett': ['joachim'],
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
  'Marching Orders': [],
  Mardroeme: ['mushroom', 'shroom'],
  'Margarita Laux–Antille': ['margarita laux antille', 'margarita', 'rita'],
  'Menno Coehoorn': ['menno'],
  "Merigold's Hailstorm": ['hailstorm', 'hail', 'merigold hailstorm'],
  Milva: [],
  'Monster Nest': ['nest'],
  Morenn: [],
  Morkvarg: ['wolf'],
  'Morvran Voorhis': ['morvran'],
  Myrgtabrakke: ['myrgta', 'brakke'],
  "Nature's Gift": [],
  'Nauzicaa Brigade': [],
  'Nauzicaa Standard Bearer': ['nsb', 'standard bearer'],
  Necromancy: [],
  Nekker: [],
  'Nekker Warrior': [],
  Nenneke: [],
  'Nilfgaardian Knight': [],
  Nithral: [],
  Ocvist: [],
  Odrin: [],
  'Old Speartip: Asleep': ['speartip', 'old speartip asleep'],
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
  'Redanian Knight-Elect': ['rke', 'redanian knight elect'],
  Regis: [],
  'Regis: Higher Vampire': ['rhv', 'higher vampire', 'regis higher vampire'],
  'Reinforced Ballista': ['ballista'],
  'Reinforced Siege Tower': ['rst', 'siege tower'],
  'Reinforced Trebuchet': [],
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
  "Stammelford's Tremors": ['tremors', 'stammelford', 'stammelford tremors'],
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
  'Triss: Butterfly Spell': ['triss butt', 'triss: butt', 'triss butterfly spell'],
  'Triss Merigold': ['triss'],
  Trollololo: ['trololo'],
  Udalryk: [],
  'Unseen Elder': ['elder'],
  Vabjorn: [],
  Vanhemar: [],
  'Vattier de Rideaux': ['vdr', 'vattier'],
  'Vernon Roche': ['vernon', 'roche'],
  Ves: [],
  Vesemir: [],
  'Vicovaro Medic': [],
  'Vicovaro Novice': [],
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
  'Yennefer: The Conjurer': ['yencon', 'yen:con', 'yennefer the conjurer', 'yennefer conjurer'],
  'Zoltan: Animal Tamer': ['zat', 'zoltan animal tamer'],
  'Zoltan Chivay': ['chivay']
};

exports.default = ALIASES;

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = __webpack_require__(24);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tooltip).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global window */

// eslint-disable-next-line no-unused-vars


var _jsxDom = __webpack_require__(0);

var _tooltip = __webpack_require__(25);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tooltipElement = function tooltipElement(card) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$cardFrame = _ref.cardFrame,
      cardFrame = _ref$cardFrame === undefined ? null : _ref$cardFrame;

  return (0, _jsxDom.createElement)(
    'div',
    { className: _tooltip2.default.locals.hyperGwentTooltip },
    (0, _jsxDom.createElement)('img', {
      className: _tooltip2.default.locals.hyperGwentTooltipImage,
      'data-src': card.variations[0].art.thumbnailImage,
      style: cardFrame ? 'background-image: url(' + cardFrame + ');' : '',
      alt: ''
    }),
    (0, _jsxDom.createElement)(
      'div',
      { className: _tooltip2.default.locals.hyperGwentTooltipBlock + ' ' + (_tooltip2.default.locals.hyperGwentTooltipBlock + card.variations[0].rarity.name) },
      (0, _jsxDom.createElement)(
        'div',
        { className: _tooltip2.default.locals.hyperGwentTooltipName },
        card.name
      )
    ),
    (0, _jsxDom.createElement)(
      'div',
      { className: _tooltip2.default.locals.hyperGwentTooltipBlock + ' ' + (_tooltip2.default.locals.hyperGwentTooltipBlock + card.variations[0].rarity.name) },
      (0, _jsxDom.createElement)(
        'div',
        { className: _tooltip2.default.locals.hyperGwentTooltipInfo },
        card.info
      )
    )
  );
};

var CardTooltip = function () {
  // Outer element used to scope CSS

  // Is the tooltip visible ?
  function CardTooltip(card, target, assets) {
    _classCallCheck(this, CardTooltip);

    this.visible = false;
    this.target = null;
    this.outer = null;
    this.wrapper = null;

    this.target = target;

    var tooltip = tooltipElement(card, assets);
    var wrapper = (0, _jsxDom.createElement)('div', { style: {
        display: 'none',
        position: 'fixed',
        transform: 'translateY(-40%)',
        pointerEvents: 'none',
        zIndex: 999999999
      } });
    // Outer's name attribute is just there for easier inspection
    var outer = (0, _jsxDom.createElement)('div', {
      className: _tooltip2.default.locals.hyperGwentTooltipOuter,
      'data-card-name': card.name
    });

    wrapper.appendChild(tooltip);
    outer.appendChild(wrapper);

    this.outer = outer;
    this.wrapper = wrapper;
  }

  // Inject this tooltip in the page

  // HTML element to live in

  // Tooltipped element


  _createClass(CardTooltip, [{
    key: 'inject',
    value: function inject() {
      var _this = this;

      var outer = this.outer,
          target = this.target;


      window.document.body.appendChild(outer);

      var STYLE_ID = 'hyperGwentStyle';
      if (window.document.getElementById(STYLE_ID) == null) {
        var style = (0, _jsxDom.createElement)(
          'style',
          { type: 'text/css', id: STYLE_ID },
          _tooltip2.default.toString()
        );
        window.document.head.appendChild(style);
      }

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
      var wrapper = this.wrapper;


      var img = wrapper.querySelector('[data-src]');
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
          visible = this.visible;

      if (!visible) {
        return;
      }

      var clientX = mouseEvent.clientX,
          clientY = mouseEvent.clientY;
      var _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;

      var wrapperRect = wrapper.getBoundingClientRect();

      var left = clientX;
      if (left > innerWidth - wrapperRect.width) {
        // Too far on the right
        left = clientX - wrapperRect.width;
      }

      var top = clientY;
      // Do not go below screen
      top = Math.min(top, innerHeight - 0.6 * wrapperRect.height // Because of translateY(-40%)
      );
      // Do not go above screen
      top = Math.max(top, 0.4 * wrapperRect.height // Because of translateY(-40%)
      );

      wrapper.style.top = top + 'px';
      wrapper.style.left = left + 'px';
    }
  }]);

  return CardTooltip;
}();

function attachTooltip(card, target, assets) {
  var tooltip = new CardTooltip(card, target, assets);
  tooltip.inject();
}

exports.default = attachTooltip;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".hyperGwentTooltipOuter {\n  all: initial;\n}\n\n.hyperGwentTooltipOuter *,\n.hyperGwentTooltipOuter *::before,\n.hyperGwentTooltipOuter *::after {\n  all: unset;\n}\n\n.hyperGwentTooltip,\n.hyperGwentTooltip div,\n.hyperGwentTooltip img {\n  display: block;\n}\n\n.hyperGwentTooltip {\n  font-family: Arial, sans-serif;\n  font-size: 13px;\n  line-height: 1.5;\n  width: 239px;\n  /* Same as left image padding */\n  padding-right: 62px;\n  /* Should not mess with hovering logic */\n  pointer-events: none;\n}\n\n.hyperGwentTooltipImage {\n  width: 260px;\n  margin-bottom: -27px;\n  background-image: url(" + __webpack_require__(26) + ");\n  background-size: 260px 347px;\n  background-position: top left;\n  background-repeat: no-repeat;\n\n  /*\n   * height of the image when it's loaded\n   * hard coding it here to prevent the tooltip from being resized\n   */\n  height: 347px;\n}\n\n.hyperGwentTooltipBlock {\n  position: relative;\n  color: #e8e8e8;\n  padding: 10px 10px 10px 16px;\n  background-color: #313131;\n  margin: 0 0 5px 62px;\n  border-radius: 2px;\n  overflow: hidden;\n  /* Helps with readability when there is text behind */\n  box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.63);\n}\n\n.hyperGwentTooltipBlock::before {\n  box-sizing: border-box;\n  content: '';\n  display: block;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  width: 6px;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.hyperGwentTooltipBlockEpic::before {\n  background: linear-gradient(-45deg, rgb(157, 86, 216) 0%, rgb(185, 126, 239) 50%, rgb(204, 180, 251) 51%, rgb(135, 78, 210) 100%);\n  box-shadow: inset 2px 0 0 rgba(255, 255, 255, 0.6), 0 0 8px rgba(195, 170, 243, 0.6);\n}\n\n.hyperGwentTooltipBlockRare::before {\n  background: linear-gradient(-45deg, rgb(42, 182, 249) 0%, rgb(88, 183, 228) 50%, rgb(227, 240, 247) 51%,  rgb(0, 172, 255) 100%);\n  box-shadow: inset 2px 0 0 rgba(255, 255, 255, 0.6), 0 0 8px rgba(156, 222, 253, 0.6);\n}\n\n.hyperGwentTooltipBlockCommon::before {\n  background: linear-gradient(-45deg, rgb(117, 117, 117) 0%, rgb(119, 119, 119) 50%, rgb(187, 187, 187) 51%, rgb(86, 86, 86) 100%);\n  box-shadow: inset 2px 0 0 rgba(255, 255, 255, 0.6), 0 0 8px rgba(160, 160, 160, 0.6);\n}\n\n.hyperGwentTooltipBlockLegendary::before {\n  background: linear-gradient(-45deg, rgb(156, 125, 11) 0%, rgb(193, 157, 48) 50%, rgb(245, 226, 148) 51%, rgb(99, 73, 15) 100%);\n  box-shadow: inset 2px 0 0 rgba(255, 255, 255, 0.6), 0 0 8px rgba(210, 200, 151, 0.6);\n}\n\n.hyperGwentTooltipName {\n  font-size: 13px;\n  line-height: 1.2;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  background: -webkit-linear-gradient(#fff, #999999);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.hyperGwentTooltipInfo {\n}\n", ""]);

// exports
exports.locals = {
	"hyperGwentTooltipOuter": "hyperGwentTooltipOuter",
	"hyperGwentTooltip": "hyperGwentTooltip",
	"hyperGwentTooltipImage": "hyperGwentTooltipImage",
	"hyperGwentTooltipBlock": "hyperGwentTooltipBlock",
	"hyperGwentTooltipBlockEpic": "hyperGwentTooltipBlockEpic",
	"hyperGwentTooltipBlockRare": "hyperGwentTooltipBlockRare",
	"hyperGwentTooltipBlockCommon": "hyperGwentTooltipBlockCommon",
	"hyperGwentTooltipBlockLegendary": "hyperGwentTooltipBlockLegendary",
	"hyperGwentTooltipName": "hyperGwentTooltipName",
	"hyperGwentTooltipInfo": "hyperGwentTooltipInfo"
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7aa31ce7edf8eae813ce0c49bd6309b8.png";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 1770 261\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><title>Logo</title><desc>Created with Sketch.</desc><defs><linearGradient x1=\"50%\" y1=\"3.08314732%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-1\"><stop stop-color=\"#09484D\" offset=\"0%\"></stop><stop stop-color=\"#24D180\" offset=\"100%\"></stop></linearGradient><linearGradient x1=\"50%\" y1=\"98.0189732%\" x2=\"50%\" y2=\"0%\" id=\"linearGradient-2\"><stop stop-color=\"#FFD87F\" offset=\"0%\"></stop><stop stop-color=\"#935401\" offset=\"100%\"></stop></linearGradient></defs><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"Logo\" stroke=\"url(#linearGradient-2)\" fill-rule=\"nonzero\" stroke-width=\"6\" fill=\"url(#linearGradient-1)\"><g id=\"Group-5\" transform=\"translate(3.000000, 3.000000)\"><g id=\"Group-3\" transform=\"translate(0.000000, 1.000000)\"><path d=\"M2.84217094e-14,125.5 L2.84217094e-14,1.42108547e-14 L42.5608696,1.42108547e-14 C42.5608696,17.8246377 42.5608696,27.5008696 42.5608696,29.0286957 C42.5608696,44.1978261 51.2913043,57.8391304 68.0973913,77.7008696 C69.9526087,79.8834783 127.136957,140.778261 128.337391,140.778261 C128.482899,140.778261 128.628406,93.8521739 128.773913,1.42108547e-14 L171.334783,1.42108547e-14 L171.334783,251 L128.773913,251 C128.482899,216.805797 128.191884,199.708696 127.90087,199.708696 C127.318841,199.708696 98.8721739,171.152899 42.5608696,114.041304 L42.5608696,182.575217 L42.5608696,251 L2.84217094e-14,251 L2.84217094e-14,125.5 Z\" id=\"Shape\" transform=\"translate(85.667391, 125.500000) scale(-1, 1) rotate(-180.000000) translate(-85.667391, -125.500000) \"></path><g id=\"Group\" transform=\"translate(182.000000, 39.000000)\"><path d=\"M54.1320182,106.939901 C56.2261002,102.658128 56.6449165,0 56.9590288,0 C57.2382398,0 68.5462822,8.49392447 90.8831563,25.4817734 L90.8831563,99.9428571 C107.266271,122.956458 118.958228,143.773535 125.959029,162.394089 C129.100152,170.748768 133.113809,187.284072 138,212 L117.687405,212 L97.2701062,212 L96.9559939,190.382266 C96.7465857,176.17931 88.7890744,157.799015 73.0834598,135.241379 L35.3899848,212 L0,212 C33.1562974,147.738588 51.2003035,112.718555 54.1320182,106.939901 Z\" id=\"Shape\" transform=\"translate(69.000000, 106.000000) scale(-1, 1) rotate(-180.000000) translate(-69.000000, -106.000000) \"></path><path d=\"M157,180.464583 L157,0 L198.830645,0 L198.830645,72.9583333 C234.440323,82.0423611 257.322043,91.6986111 267.475806,101.927083 C282.706452,117.269792 290,130.359375 290,143.770833 C290,143.413194 290,164.15625 290,206 L181.133065,206 L157,180.464583 Z M243.235484,138.620833 C234.440323,122.527083 223.178226,114.802083 207.840323,114.158333 L199.045161,114.158333 L199.045161,169.520833 L247.096774,169.520833 C247.025269,153.570139 245.738172,143.270139 243.235484,138.620833 Z\" id=\"Shape\" transform=\"translate(223.500000, 103.000000) scale(-1, 1) rotate(-180.000000) translate(-223.500000, -103.000000) \"></path><path d=\"M463,193.523437 L463,0 L499.68491,0 L499.68491,78.703125 L525.040657,78.703125 L559.891321,0 L601,0 L598.949961,3.5578125 C597.870993,5.390625 556.978108,85.7109375 554.172791,97.03125 C570.5,115.5 569.5,115 590.318217,136 C590.318217,154.032292 590.318217,177.698958 590.318217,207 L475.408131,207 L463,193.523437 Z M543.167318,138 C515.04222,123.625 500.691947,116.4375 500.116497,116.4375 C499.972635,116.4375 499.828772,134.40625 499.68491,170.34375 L543.167318,170.34375 L543.167318,138 Z\" id=\"Shape\" transform=\"translate(532.000000, 103.500000) scale(-1, 1) rotate(-180.000000) translate(-532.000000, -103.500000) \"></path><path d=\"M324.115737,198.60283 L315,190.108019 L315.396336,131.913679 C315.792673,68.0561321 315.891757,66.884434 322.034971,53.9957547 C329.466278,38.0801887 346.905079,25.3867925 373.063281,16.6966981 C382.179017,13.6698113 431.225645,0 433.009159,0 C433.603664,0 434,6.83490566 434,17.8683962 L434,35.7367925 L410.318901,42.2787736 C382.97169,49.6995283 373.162365,53.2146226 364.839301,58.5849057 C355.327227,64.5410377 351.7602,72.840566 351.7602,88.365566 L351.7602,95.6886792 L385.448793,95.6886792 L419.137386,95.6886792 L419.137386,112.775943 L419.137386,129.863208 L385.448793,129.863208 L351.7602,129.863208 L351.7602,150.856132 L351.7602,171.849057 L392.8801,171.849057 L434,171.849057 L434,189.424528 L434,207 L383.566195,207 L333.231474,207 L324.115737,198.60283 Z\" id=\"Shape\" transform=\"translate(374.500000, 103.500000) scale(-1, 1) rotate(-180.000000) translate(-374.500000, -103.500000) \"></path></g></g><g id=\"Group-4\" transform=\"translate(884.000000, 0.000000)\"><path d=\"M11.8456507,240.2 L0.9,229.4 L1.30539447,161.4 C1.60944032,100.9 1.81213756,92.7 3.43371544,86 C10.8321645,55 32.1153742,33.7 68.3981794,21 C75.5939312,18.5 141.774579,5.68434189e-14 143.497505,5.68434189e-14 C143.700202,5.68434189e-14 143.9029,36.2 143.9029,80.5 L143.9029,161 L122.822387,161 L101.843223,161 L85.1207013,144.5 L68.3981794,128 L86.4382333,128 L104.376939,128 L104.376939,88.4 C104.376939,51.2 104.27559,48.9 102.654012,49.4 C101.640526,49.6 95.5596089,51.3 89.174646,53 C72.8575185,57.4 63.736143,61.9 56.1349966,69.4 C52.6891436,72.8 48.6351989,78 47.2163183,80.9 C41.8448415,91.3 41.5407957,94.5 41.5407957,157.8 L41.5407957,216 L67.8914363,216 L94.1407283,216 L94.4447741,206.1 L94.74882,196.3 L123.025084,223.6 L151.2,251 L86.9449764,251 L22.7913014,251 L11.8456507,240.2 Z\" id=\"Shape\" transform=\"translate(76.050000, 125.500000) scale(-1, 1) rotate(-180.000000) translate(-76.050000, -125.500000) \"></path><path d=\"M716,240.2 C716,239.3 723.592593,230.9 733.007407,221.7 L749.91358,205 L763.883951,205 L777.753086,205 L777.753086,102.5 L777.753086,-5.68434189e-14 L798,-5.68434189e-14 L818.246914,-5.68434189e-14 L818.246914,102.5 L818.246914,205 L832.217284,205 L846.08642,205 L863.093827,221.8 C872.407407,231 880,239.3 880,240.3 C880,241.9 875.241975,242 798,242 C720.353086,242 716,241.9 716,240.2 Z\" id=\"Shape\" transform=\"translate(798.000000, 121.000000) scale(-1, 1) rotate(-180.000000) translate(-798.000000, -121.000000) \"></path><g id=\"Group-2\" transform=\"translate(174.000000, 38.000000)\"><path d=\"M1.30377181,145.9 C1.70754361,71.1 1.70754361,71.7 7.9660066,55.5 C14.2244696,39.7 27.851768,24.6 50.2611033,8.8 L62.6770863,1.42108547e-14 L73.9826968,7.4 C85.9949081,15.3 101.035408,27.8 105.476898,33.5 L108.101414,36.9 L118.90231,26.2 C126.372089,18.7 133.337152,13.1 141.513531,7.7 L153.323857,1.42108547e-14 L166.244554,9.3 C188.250118,25.1 199.151957,36.8 206.318906,52.3 C214.192456,69.4 215,78.4 215,153.1 L215,214.1 L196.325554,213.9 L177.550165,213.6 L177.550165,154.1 C177.550165,121.4 177.247336,89.3 176.742621,82.9 C175.632249,67.1 172.906789,61.4 161.399293,50.3 C153.727628,42.8 152.819142,42.2 151.002169,43.5 C146.863508,46.1 137.072041,58.7 133.740924,65.6 C127.684347,78.2 127.179632,83 127.179632,131.1 L127.179632,174.1 L108.3033,173.9 L89.3260255,173.6 L89.4269684,130.6 C89.4269684,103.3 89.9316832,85.2 90.6382838,81.1 C92.354314,71.5 89.8307402,66.7 75.4968411,52.6 L64.2921735,41.7 L57.125224,49.2 C48.746959,58 44.2045262,65.8 41.1762376,76.8 C39.0564356,84.3 38.9554927,86.7 38.5517209,149.4 L38.1479491,214.1 L19.574446,214.1 L0.9,214.1 L1.30377181,145.9 Z\" id=\"Shape\" transform=\"translate(107.950000, 107.050000) scale(-1, 1) rotate(-180.000000) translate(-107.950000, -107.050000) \"></path><path d=\"M254.253206,203.4 L244.9,194.7 L245.306661,135.1 C245.713322,69.7 245.814988,68.5 252.118235,55.3 C259.743131,39 277.63622,26 304.475853,17.1 C313.829059,14 364.153372,0 365.983347,0 C366.593339,0 367,7 367,18.3 L367,36.6 L342.701998,43.3 C314.642381,50.9 304.577519,54.5 296.037635,60 C286.277769,66.1 282.617818,74.6 282.617818,90.5 L282.617818,98 L317.184013,98 L351.750208,98 L351.750208,115.5 L351.750208,133 L317.184013,133 L282.617818,133 L282.617818,154.5 L282.617818,176 L324.808909,176 L367,176 L367,194 L367,212 L315.252373,212 L263.606411,212 L254.253206,203.4 Z\" id=\"Shape\" transform=\"translate(305.950000, 106.000000) scale(-1, 1) rotate(-180.000000) translate(-305.950000, -106.000000) \"></path><path d=\"M394.709333,203.3 C394.304,203 394,157.1 394,101.3 L394,-5.68434189e-14 L413.253333,-5.68434189e-14 L432.506667,-5.68434189e-14 L432.506667,66.4 L432.506667,132.8 L454.192,111.2 C484.490667,80.9 493.914667,69.3 502.528,51.7 C508,40.4 509.52,32.5 509.52,14.8 L509.52,-5.68434189e-14 L527.76,-5.68434189e-14 L546,-5.68434189e-14 L546,102 L546,204 L527.253333,204 L508.506667,204 L508.506667,153.4 L508.506667,102.9 L502.224,111.2 C498.677333,115.7 481.552,133.7 464.224,151.1 L432.506667,182.7 L432.506667,193.4 L432.506667,204 L413.962667,204 C403.728,204 395.013333,203.7 394.709333,203.3 Z\" id=\"Shape\" transform=\"translate(470.000000, 102.000000) scale(-1, 1) rotate(-180.000000) translate(-470.000000, -102.000000) \"></path></g></g></g></g></g></svg>"

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);

// module
exports.push([module.i, "/*\nLogo colors\n- top: #24D180\n- bottom: #09484D\n */\n\nbody {\n    background: #232018;\n    background: linear-gradient(to bottom, rgb(35, 32, 24) 0%,rgb(23, 20, 13) 100%);\n    font-family: 'Josefin Sans', Helvetica, sans-serif;\n    font-size: 1.3rem;\n    color: #d2c8bb;\n    font-weight: 300;\n    line-height: 1.5;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    margin: auto;\n    max-width: 800px;\n    padding: 3em;\n}\n\n.logo {\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 3em;\n}\n\n.logo-title {\n    width: 80%;\n}\n\n.noextension {\n    padding: 0.8em;\n    border: 1px dashed;\n    opacity: 0.6;\n    font-size: 0.8em;\n}\n\n.download-link {\n    align-self: center;\n\n    background: linear-gradient(to bottom, rgb(21, 199, 109) 0%,rgb(16, 86, 93) 100%);\n\n    padding: 0.8em;\n    border-radius: 0.5em;\n    border-bottom: none;\n\n    color: #fff8d7;\n    text-decoration: none;\n    font-weight: 400;\n\n    margin-bottom: 3em;\n}\n\n.emote {\n    display: flex;\n    margin-bottom: 3em;\n    align-items: center;\n    justify-content: center;\n}\n\n.avatar {\n    height: 100px;\n    width: 100px;\n    flex: 0 0 auto;\n    transform: scale(0.8);\n}\n\n.dandelion {\n    background: url(" + __webpack_require__(29) + ") #313131;\n}\n\n.geralt {\n    background: url(" + __webpack_require__(30) + ") #313131;\n}\n\n.emote-text {\n    font-style: italic;\n    width: 400px;\n    flex: 0 1 auto;\n    margin-left: 3em;\n}\n\n.issues {\n    font-size: 0.8em;\n    opacity: 0.6;\n}\n\na {\n    color: rgb(55, 207, 136);\n    text-decoration: none;\n    padding-bottom: 0.1em;\n    border-bottom: 1px solid;\n}\n\np {\n    margin-top: 0;\n    margin-bottom: 3em;\n}\n", ""]);

// exports
exports.locals = {
	"content": "content",
	"logo": "logo",
	"logo-title": "logo-title",
	"noextension": "noextension",
	"download-link": "download-link",
	"emote": "emote",
	"avatar": "avatar",
	"dandelion": "dandelion",
	"geralt": "geralt",
	"emote-text": "emote-text",
	"issues": "issues"
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4c44e2906da2732a359ad1830201b1e4.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b7fb82a7cf2cbbc953655042f5d77be.png";

/***/ })
/******/ ]);