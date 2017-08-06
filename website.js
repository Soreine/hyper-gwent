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
/* 1 */
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

var _NAMES = __webpack_require__(21);

var _NAMES2 = _interopRequireDefault(_NAMES);

var _ALIASES = __webpack_require__(22);

var _ALIASES2 = _interopRequireDefault(_ALIASES);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CARDS = _CARDS2.default;
exports.NAMES = _NAMES2.default;
exports.ALIASES = _ALIASES2.default;

/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsxDom = __webpack_require__(0);

var _walk = __webpack_require__(10);

var _walk2 = _interopRequireDefault(_walk);

var _hyperGwent = __webpack_require__(28);

var _hyperGwent2 = _interopRequireDefault(_hyperGwent);

var _website = __webpack_require__(29);

var _website2 = _interopRequireDefault(_website);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */

// eslint-disable-next-line no-unused-vars
var REDDIT = 'https://www.reddit.com/r/gwent/';
var GWENTDB = 'http://www.gwentdb.com/';
var REPO = 'https://github.com/Soreine/hyper-gwent/issues';
var EXT_LINK = '#';

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
      innerHTML: _hyperGwent2.default }),
    (0, _jsxDom.createElement)(
      'div',
      { className: 'logo-subtitle' },
      'Chrome extension for GWENT®: The Witcher Card Game'
    )
  ),
  (0, _jsxDom.createElement)(
    'a',
    { className: 'download-link', href: EXT_LINK },
    'Add to Chrome'
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
        '/r/gwent'
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
          'Up to date with all existing cards'
        ),
        (0, _jsxDom.createElement)(
          'li',
          null,
          'Support acronyms, plurals, lowercase, and missing accents'
        ),
        (0, _jsxDom.createElement)(
          'li',
          null,
          'Lightweight'
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
  (0, _jsxDom.createElement)(
    'a',
    { className: 'download-link', href: EXT_LINK },
    'Add to Chrome'
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
      { href: 'https://www.reddit.com/user/Soreine/' },
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

var _replaceMatches = __webpack_require__(23);

var _replaceMatches2 = _interopRequireDefault(_replaceMatches);

var _index = __webpack_require__(24);

var _index2 = _interopRequireDefault(_index);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(13),
    qs = __webpack_require__(14),
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 12 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)(module)))

/***/ }),
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = __webpack_require__(25);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tooltip).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global window */

// eslint-disable-next-line no-unused-vars


var _jsxDom = __webpack_require__(0);

var _tooltip = __webpack_require__(26);

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
      { className: _tooltip2.default.locals.tooltipBlock },
      (0, _jsxDom.createElement)(
        'div',
        { className: _tooltip2.default.locals.tooltipName },
        card.name
      )
    ),
    (0, _jsxDom.createElement)(
      'div',
      { className: _tooltip2.default.locals.tooltipBlock },
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

      var left = void 0;
      if (left > innerWidth - tooltipRect.width) {
        // Too far on the right
        left = clientX - tooltipRect.width;
      } else {
        left = clientX;
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".tooltip {\n  font-family: Arial, sans-serif;\n  font-size: 13px;\n  line-height: 1.4;\n  width: 239px;\n  /* Same as left image padding */\n  padding-right: 62px;\n  /* Should not mess with hovering logic */\n  pointer-events: none;\n}\n\n.tooltipImage {\n  width: 260px;\n  margin-bottom: -27px;\n\n  /*\n   * height of the image when it's loaded\n   * hard coding it here to prevent the tooltip from being resized\n   */\n  height: 347px;\n}\n\n.tooltipBlock {\n  position: relative;\n  color: #e8e8e8;\n  padding: 10px 10px 10px 14px;\n  background: url(" + __webpack_require__(27) + ") #313131;\n  margin: 0 0 5px 62px;\n  border-radius: 2px;\n  overflow: hidden;\n}\n\n.tooltipBlock::before {\n  content: '';\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 100%;\n  background: linear-gradient(to bottom, #5e5e5e 0%, #ababab 100%);\n  box-shadow: inset -2px 0 0 rgba(255, 255, 255, 0.4), 2px 0 2px rgba(255, 255, 255, 0.3);\n}\n\n.tooltipBlock::after {\n  content: '';\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset 0 0 8px 3px rgba(0, 0, 0, 0.4);\n}\n\n.tooltipName {\n  font-size: 15px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  background: -webkit-linear-gradient(#fff, #999999);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.tooltipInfo {\n}\n", ""]);

// exports
exports.locals = {
	"tooltip": "tooltip",
	"tooltipImage": "tooltipImage",
	"tooltipBlock": "tooltipBlock",
	"tooltipName": "tooltipName",
	"tooltipInfo": "tooltipInfo"
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 1774 266\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><title>Artboard</title><desc>Created with Sketch.</desc><defs><linearGradient x1=\"50%\" y1=\"3.08314732%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-1\"><stop stop-color=\"#09484D\" offset=\"0%\"></stop><stop stop-color=\"#24D180\" offset=\"100%\"></stop></linearGradient></defs><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"Artboard\" stroke=\"#C6BBAA\" fill-rule=\"nonzero\" stroke-width=\"10\" fill=\"url(#linearGradient-1)\"><g id=\"Group-3\" transform=\"translate(5.000000, 6.000000)\"><path d=\"M2.84217094e-14,125.5 L2.84217094e-14,1.42108547e-14 L42.5608696,1.42108547e-14 C42.5608696,17.8246377 42.5608696,27.5008696 42.5608696,29.0286957 C42.5608696,44.1978261 51.2913043,57.8391304 68.0973913,77.7008696 C69.9526087,79.8834783 127.136957,140.778261 128.337391,140.778261 C128.482899,140.778261 128.628406,93.8521739 128.773913,1.42108547e-14 L171.334783,1.42108547e-14 L171.334783,251 L128.773913,251 C128.482899,216.805797 128.191884,199.708696 127.90087,199.708696 C127.318841,199.708696 98.8721739,171.152899 42.5608696,114.041304 L42.5608696,182.575217 L42.5608696,251 L2.84217094e-14,251 L2.84217094e-14,125.5 Z\" id=\"Shape\" transform=\"translate(85.667391, 125.500000) scale(-1, 1) rotate(-180.000000) translate(-85.667391, -125.500000) \"></path><g id=\"Group\" transform=\"translate(182.000000, 39.000000)\"><path d=\"M54.1320182,106.939901 C56.2261002,102.658128 56.6449165,0 56.9590288,0 C57.2382398,0 68.5462822,8.49392447 90.8831563,25.4817734 L90.8831563,99.9428571 C107.266271,122.956458 118.958228,143.773535 125.959029,162.394089 C129.100152,170.748768 133.113809,187.284072 138,212 L117.687405,212 L97.2701062,212 L96.9559939,190.382266 C96.7465857,176.17931 88.7890744,157.799015 73.0834598,135.241379 L35.3899848,212 L0,212 C33.1562974,147.738588 51.2003035,112.718555 54.1320182,106.939901 Z\" id=\"Shape\" transform=\"translate(69.000000, 106.000000) scale(-1, 1) rotate(-180.000000) translate(-69.000000, -106.000000) \"></path><path d=\"M157,180.464583 L157,0 L198.830645,0 L198.830645,72.9583333 C234.440323,82.0423611 257.322043,91.6986111 267.475806,101.927083 C282.706452,117.269792 290,130.359375 290,143.770833 C290,143.413194 290,164.15625 290,206 L181.133065,206 L157,180.464583 Z M243.235484,138.620833 C234.440323,122.527083 223.178226,114.802083 207.840323,114.158333 L199.045161,114.158333 L199.045161,169.520833 L247.096774,169.520833 C247.025269,153.570139 245.738172,143.270139 243.235484,138.620833 Z\" id=\"Shape\" transform=\"translate(223.500000, 103.000000) scale(-1, 1) rotate(-180.000000) translate(-223.500000, -103.000000) \"></path><path d=\"M463,193.523437 L463,0 L499.68491,0 L499.68491,78.703125 L525.040657,78.703125 L559.891321,0 L601,0 L598.949961,3.5578125 C597.870993,5.390625 556.978108,85.7109375 554.172791,97.03125 C570.5,115.5 569.5,115 590.318217,136 C590.318217,154.032292 590.318217,177.698958 590.318217,207 L475.408131,207 L463,193.523437 Z M543.167318,138 C515.04222,123.625 500.691947,116.4375 500.116497,116.4375 C499.972635,116.4375 499.828772,134.40625 499.68491,170.34375 L543.167318,170.34375 L543.167318,138 Z\" id=\"Shape\" transform=\"translate(532.000000, 103.500000) scale(-1, 1) rotate(-180.000000) translate(-532.000000, -103.500000) \"></path><path d=\"M324.115737,198.60283 L315,190.108019 L315.396336,131.913679 C315.792673,68.0561321 315.891757,66.884434 322.034971,53.9957547 C329.466278,38.0801887 346.905079,25.3867925 373.063281,16.6966981 C382.179017,13.6698113 431.225645,0 433.009159,0 C433.603664,0 434,6.83490566 434,17.8683962 L434,35.7367925 L410.318901,42.2787736 C382.97169,49.6995283 373.162365,53.2146226 364.839301,58.5849057 C355.327227,64.5410377 351.7602,72.840566 351.7602,88.365566 L351.7602,95.6886792 L385.448793,95.6886792 L419.137386,95.6886792 L419.137386,112.775943 L419.137386,129.863208 L385.448793,129.863208 L351.7602,129.863208 L351.7602,150.856132 L351.7602,171.849057 L392.8801,171.849057 L434,171.849057 L434,189.424528 L434,207 L383.566195,207 L333.231474,207 L324.115737,198.60283 Z\" id=\"Shape\" transform=\"translate(374.500000, 103.500000) scale(-1, 1) rotate(-180.000000) translate(-374.500000, -103.500000) \"></path></g></g><g id=\"Group-4\" transform=\"translate(889.000000, 5.000000)\"><path d=\"M11.8456507,240.2 L0.9,229.4 L1.30539447,161.4 C1.60944032,100.9 1.81213756,92.7 3.43371544,86 C10.8321645,55 32.1153742,33.7 68.3981794,21 C75.5939312,18.5 141.774579,5.68434189e-14 143.497505,5.68434189e-14 C143.700202,5.68434189e-14 143.9029,36.2 143.9029,80.5 L143.9029,161 L122.822387,161 L101.843223,161 L85.1207013,144.5 L68.3981794,128 L86.4382333,128 L104.376939,128 L104.376939,88.4 C104.376939,51.2 104.27559,48.9 102.654012,49.4 C101.640526,49.6 95.5596089,51.3 89.174646,53 C72.8575185,57.4 63.736143,61.9 56.1349966,69.4 C52.6891436,72.8 48.6351989,78 47.2163183,80.9 C41.8448415,91.3 41.5407957,94.5 41.5407957,157.8 L41.5407957,216 L67.8914363,216 L94.1407283,216 L94.4447741,206.1 L94.74882,196.3 L123.025084,223.6 L151.2,251 L86.9449764,251 L22.7913014,251 L11.8456507,240.2 Z\" id=\"Shape\" transform=\"translate(76.050000, 125.500000) scale(-1, 1) rotate(-180.000000) translate(-76.050000, -125.500000) \"></path><path d=\"M716,240.2 C716,239.3 723.592593,230.9 733.007407,221.7 L749.91358,205 L763.883951,205 L777.753086,205 L777.753086,102.5 L777.753086,-5.68434189e-14 L798,-5.68434189e-14 L818.246914,-5.68434189e-14 L818.246914,102.5 L818.246914,205 L832.217284,205 L846.08642,205 L863.093827,221.8 C872.407407,231 880,239.3 880,240.3 C880,241.9 875.241975,242 798,242 C720.353086,242 716,241.9 716,240.2 Z\" id=\"Shape\" transform=\"translate(798.000000, 121.000000) scale(-1, 1) rotate(-180.000000) translate(-798.000000, -121.000000) \"></path><g id=\"Group-2\" transform=\"translate(174.000000, 38.000000)\"><path d=\"M1.30377181,145.9 C1.70754361,71.1 1.70754361,71.7 7.9660066,55.5 C14.2244696,39.7 27.851768,24.6 50.2611033,8.8 L62.6770863,1.42108547e-14 L73.9826968,7.4 C85.9949081,15.3 101.035408,27.8 105.476898,33.5 L108.101414,36.9 L118.90231,26.2 C126.372089,18.7 133.337152,13.1 141.513531,7.7 L153.323857,1.42108547e-14 L166.244554,9.3 C188.250118,25.1 199.151957,36.8 206.318906,52.3 C214.192456,69.4 215,78.4 215,153.1 L215,214.1 L196.325554,213.9 L177.550165,213.6 L177.550165,154.1 C177.550165,121.4 177.247336,89.3 176.742621,82.9 C175.632249,67.1 172.906789,61.4 161.399293,50.3 C153.727628,42.8 152.819142,42.2 151.002169,43.5 C146.863508,46.1 137.072041,58.7 133.740924,65.6 C127.684347,78.2 127.179632,83 127.179632,131.1 L127.179632,174.1 L108.3033,173.9 L89.3260255,173.6 L89.4269684,130.6 C89.4269684,103.3 89.9316832,85.2 90.6382838,81.1 C92.354314,71.5 89.8307402,66.7 75.4968411,52.6 L64.2921735,41.7 L57.125224,49.2 C48.746959,58 44.2045262,65.8 41.1762376,76.8 C39.0564356,84.3 38.9554927,86.7 38.5517209,149.4 L38.1479491,214.1 L19.574446,214.1 L0.9,214.1 L1.30377181,145.9 Z\" id=\"Shape\" transform=\"translate(107.950000, 107.050000) scale(-1, 1) rotate(-180.000000) translate(-107.950000, -107.050000) \"></path><path d=\"M254.253206,203.4 L244.9,194.7 L245.306661,135.1 C245.713322,69.7 245.814988,68.5 252.118235,55.3 C259.743131,39 277.63622,26 304.475853,17.1 C313.829059,14 364.153372,0 365.983347,0 C366.593339,0 367,7 367,18.3 L367,36.6 L342.701998,43.3 C314.642381,50.9 304.577519,54.5 296.037635,60 C286.277769,66.1 282.617818,74.6 282.617818,90.5 L282.617818,98 L317.184013,98 L351.750208,98 L351.750208,115.5 L351.750208,133 L317.184013,133 L282.617818,133 L282.617818,154.5 L282.617818,176 L324.808909,176 L367,176 L367,194 L367,212 L315.252373,212 L263.606411,212 L254.253206,203.4 Z\" id=\"Shape\" transform=\"translate(305.950000, 106.000000) scale(-1, 1) rotate(-180.000000) translate(-305.950000, -106.000000) \"></path><path d=\"M394.709333,203.3 C394.304,203 394,157.1 394,101.3 L394,-5.68434189e-14 L413.253333,-5.68434189e-14 L432.506667,-5.68434189e-14 L432.506667,66.4 L432.506667,132.8 L454.192,111.2 C484.490667,80.9 493.914667,69.3 502.528,51.7 C508,40.4 509.52,32.5 509.52,14.8 L509.52,-5.68434189e-14 L527.76,-5.68434189e-14 L546,-5.68434189e-14 L546,102 L546,204 L527.253333,204 L508.506667,204 L508.506667,153.4 L508.506667,102.9 L502.224,111.2 C498.677333,115.7 481.552,133.7 464.224,151.1 L432.506667,182.7 L432.506667,193.4 L432.506667,204 L413.962667,204 C403.728,204 395.013333,203.7 394.709333,203.3 Z\" id=\"Shape\" transform=\"translate(470.000000, 102.000000) scale(-1, 1) rotate(-180.000000) translate(-470.000000, -102.000000) \"></path></g></g></g></g></svg>"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);

// module
exports.push([module.i, "/*\nLogo colors\n- top: #24D180\n- bottom: #09484D\n */\n\nbody {\n    background-color: #232018;\n    font-family: 'Josefin Sans', Helvetica, sans-serif;\n    font-size: 1.3rem;\n    color: #d2c8bb;\n    font-weight: 300;\n    line-height: 1.5;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    margin: auto;\n    max-width: 800px;\n    padding: 3rem;\n}\n\n.logo {\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 3rem;\n}\n\n.logo-title {\n    width: 80%;\n}\n\n.download-link {\n    align-self: center;\n\n    background: linear-gradient(to bottom, rgba(36,209,128,1) 0%,rgb(31, 116, 123) 100%);\n\n    padding: 1rem;\n    border-radius: 0.5rem;\n    border-bottom: none;\n\n    color: #fefffe;\n    text-decoration: none;\n    font-weight: 400;\n\n    margin-bottom: 3rem;\n}\n\n.emote {\n    display: flex;\n    margin-bottom: 3rem;\n    align-items: center;\n    justify-content: center;\n}\n\n.avatar {\n    height: 100px;\n    width: 100px;\n    flex: 0 0 auto;\n    transform: scale(0.8);\n}\n\n.dandelion {\n    background: url(" + __webpack_require__(30) + ") #313131;\n}\n\n.geralt {\n    background: url(" + __webpack_require__(31) + ") #313131;\n}\n\n.emote-text {\n    font-style: italic;\n    width: 400px;\n    flex: 0 1 auto;\n    margin-left: 3rem;\n}\n\n.issues {\n    font-size: 1rem;\n    opacity: 0.6;\n}\n\nul {\n    list-style-type: circle;\n}\n\na {\n    color: rgb(55, 207, 136);\n    text-decoration: none;\n    padding-bottom: 0.1rem;\n    border-bottom: 1px solid;\n}\n\np {\n    margin-top: 0;\n    margin-bottom: 3rem;\n}\n", ""]);

// exports
exports.locals = {
	"content": "content",
	"logo": "logo",
	"logo-title": "logo-title",
	"download-link": "download-link",
	"emote": "emote",
	"avatar": "avatar",
	"dandelion": "dandelion",
	"geralt": "geralt",
	"emote-text": "emote-text",
	"issues": "issues"
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QgGCxIcZHe15wAAaQBJREFUeNqs/XeQXHl234l+rjfpXWV5X0DBu3ZoOz3TM9PjSQ21FCkaiRQlailRT9oNhkSFVpQhVxHS6q2etFqJXBmSohkOyRmO75npad/oBtDwQAEolHdZ6e3N6+/7Iws9rQ1yuC/i3QhEJZCZqMw8+Tvme77newQgEgQQBIEwjBBFiSgCSZIIw5Aw9IHB/QggigACYRQhyxJRCL7vI0oiAgJEAoIAYRjywSsiGvwUBYQoQoggEkUIQ8RIIEJAEEGQB78nCAMiEURfQgoiQlMmdFzUSCQUQzxfQxUlRDHCF0ICXJRIRAkjXEFFVCQCXKIgQIxC8CIkWcKNQJLFwesTQBRF/NAHX0BTdYIgIIwOXrsIURRBEL7//pEG7x8iolBEiAREIUIUIWTwJwpFCCMEQUCQBAgDIEJSFDzHJooiBEFClnQ8zwNComjwGEEUhSiKIqKIP/USBGHw2kSBIAj5/+WSRJEg/POfI2oSURgS+RF88HWoIkIQQTAwpygIyIKAG4YgDd70n/nC3//PQYhAFgWCIOJPezWCKMAP+Az+/31JsoAoyHieD4gIQgREA0Nx8BEkEkkSiSSBHxKGEZIsIgjQ7/doNpsoiszoaBFFVWm3uiSTSURRpNvt4nkuiUSSYrGIJAp4ns/+/j71eh1FUTBNE1EUcBybZquNAKTTaSRZpt1q0XYs8CNmRod54bkXECSR777+Bqsba0jAcDpLerzI9toa84Uiatzkws0lnnrkJGdmZ7lzb4ldq4Okx5AElbQeJztc4O7yMq7rsbu3i2PZZFIpZqamSMQTBJHP1PQUhPCNb36LwHf46Z/6Sbo9i5WVFRLxOKIoUi6Xqbc7HDo0TxiG9B0HRdWICHG6Hsl4nNmpcQTACwN29ivs7O2jiAGmGWNkZJj9/X3KlX2OHl3k4qX3WFndQpIURkcn6Ft9bMei220BIMuyjO/7xOMJRoZHCYIIURQRRYFOt0WjUUdVFcbHx9ANnaGhPNqMRhhGWJZFzDTQdJ1MOk2xWCSdTHDp0iVkEc6ePkk+n2d7e5uVlVXCMGA4nyWXy3H48GF2dna4d8/i9MnTfO6Tn+bcidNoeozf/J3fodvvMTQxghZETOeLaCmD2prH6ZkpJuYmuHFniUfmpvjnv/A3uHfvNt+5fImlrTLxRJ7Di4e4v77Ke40qL3ziE2hajK999RvIokA6nWJifIzpmSlOnziJrqqoYsgf/PGX2C/v8nM/8zNUq1U21zeYGB/n4qX3ePPCRT78zHMkkklqjTq6oSOIIqWdCkIY8YmPfxjb6lEcHeWNCxdZ29pBjRzCKOAXf/Fv819/87/ynW+/xL/8tX/KP/21f8HK6u8iyzKLhw/TaDTZ2dmi220hCALyQ48SBhFhGOG6LpIk0W632NxaR1FkstkcjUYT0zVIJuMQCjRbLYgiZmdnGRsbY2t7m1dfeYVyaQ9JkpifnycKQ25cv47rukyOjXDs6CKLi4vE4wnSmTRrq6v80Gc+xdHZw9TqNf7rb/83rl2/ys0HG8iiyMzMCJ2WzeljR7AimxtvBhydmSSbS6JEcP/mPdbuLCE4XU5NjaMHEru7NZzqFivXrrJdqvHSV7/Kiy9+gr/zN3+eP/zyH7Oxt8nKxirpm9fRVY352WmefvIp3n7vPb7wx9/g5s1b/Pxf/xvkC0V2dkokYgl67Tb3bt/m2MkT+LZNvdMhX8hTq1f5xte+jij6HD1ymEanzU5pBzOm8+4b75DN5ag327z62hu0Oj3GJiaZmZ0DBnH33r17TE1Nvx9vRVFAAuFXICKZSBOLxQiCAEmSaXfadLtNNE1DFEXi8RiHDx9CUWVajRbHjh7l2LFjeK7LzRs3eO/yZSqVKrqucfLkCSanJhEQGCoO8dTTT/Oxj3yYU8ePU8gXiMKAvZ1dVEWh2+5w+cYSv/E7v80rb71Dqdbk2OQQf++HP4NTbyLmcvxPP/fXuPTeO/idBn/1L3yebFzjS29cotLo8vz5M+SGYsi6SEwzyBpxYjGRp59+DN9qsbZZYm9vD13VSeQzXLt7G0GEbqdFrVbm1ImTpJIJHuzssL6xQbnSZGd7h2PHTpDPFui0O1i9HvlCgUI+T7vVQpZlEnGTK9ducOfeHT7y4Q9RGMrwhT/8Q1K5HH4k8N3vvcLjTzzB6voav/U7v89nf+iH+dRn/yI9x+JrX/sqfcumZ/VJJVM4jk27c+CyHkbRMIoIQxBFGU3TyWQyJBIxSqU96vU6c3OP4DgeYRjwxPnzRGHIW2+9zd2lJTo9i0wqyROPP0axkCUWj2MaBo8/+ijTM9M4tsP+3i6b6+s4jsPy8n3298ucPXuWCxfe5tq9NcRB+sbiTJF/+0t/n41793nj6h1+8Z/8L+THJnjt5Xf4Hz7+JI8+coILb79OiIiZiHH0sTMM5XTuP1hD6JTIFhQSOQNBVfnpz3+OH/nsp7m/ssn9pfvEh4tIoURpu0Iqm2K30uKVNy7w4osf5dnz53nle98jVcxy4959vvTHX+Hv/c9/j7cvXcTUZEYLRXrNNlIkMz4yzX65zK07d5k/cphDJ47zzW9+na9881v8ux/6HJcuXmZsaIRCYZQvfPGLnDp7jueefYrIqXF4ZoLHH32Ul779PXzfplTaIZVOfSARkviVKIJ4PEUmlSeKIlzXIgwDRoqjOK5Ds9mk2WySTKQYGxnj3oP7vP7mm6ysrOJHIXNzszz+xBPMzEwzmh9ibmaWhdl5fNfl5e98l9dffY1e38YJAnb2Sli2i6go3LozMOaLT32MbqdNs9vhV//GXyOqtfnF//e/JXFkkn/9z36N//Sbv0t59T7/4Od/iqHhFOvlEn/00ls8++ij/MxPfZ5Go0EkJ4klcxgxnVgyQd+yMRWF4VScQ2NFzi5MkjJVCpk0U+PjbGzu0ev2CTyXuGHw9LnT3F1bpt7rcXTxOFffvURxYgxX9Gm3K8wdmkdTNSRVpW3ZvPzmG1y5doVf/Nu/QCqf4x/+g3/MJz71Ip/75Cf57te/RkyRqdbqbO1XOffo43znm1/hylvfRkMkiDR2tzZpdrrEYwaqplCvNwYx5H3TRBBFIYMsVxjUIfj0ej0gYnJyisJQnqW7t1leXiEMQxYOzXL+iSdIJpIIEcRMg6RpEoYhG5sbXLt+ndu3bhGLxRibHEeWJOKxGHOzs9y6dYutzU1+4Rd+gcMzC3zhW1/ipz7+YabSRX7in/0zWqLEt/7Df2Rn6wHf+cPf4x/97Z9nOJ1kd3ubQJHpOX0WF+fA9WiX6/hqjGQ6RRhTCP2I3Mg4vU6XVquJLInECqMkiy2ee/wsbV/kyGiOS1dvkM/H2Lz2Dhc1lSeeeJYL7/2fjGRHGZ+c4O3XX+OpDz1FO5skkUsQ9F1Wbi/R7DS5ce0C8xPjnFo8wq/+i3/BzMQE//iX/hEvfeWbXH7tClpOZL/WJJHK8rWvfol6ucLrb0Z8+TtX+OwnXuSxxx9j90++QrVWo9FsIhyk8fLDvF8URTzPJwx9FFVBVkTq9TrNZp1isUihkOfu0h02N7eJJwyeeeZpxsfHMTSdQ/PziILIzvY25dI+lmWhaipz0zPMzcwQj8VJpVPs7u2xub7BlcvvkU6n+Yf/4JeZnJjgn/yrf05CVXjs0FH+z//2+zStPv/+P/474pLBj/2Vz/OXPv0jPHvmBDfeeZnpE8d4+e1LmLrMycU58Dx0WacbKliuS+B7JOJZRE3DlDRiqSyiEFGrNxEBU4iQVIm/+iOf4/Of+gStrs3Va9f4xmuvcvLx88yOjVMu7fHcU0+ytrKMZ/Vp7na49tY1nE6HseEhRifm+G7/a/ztX/y7/Mkffomle8v8x1//j1y6fp1/8xu/TtVqMTw8zPnnnuP+nSXsVodPffITVBsd3nn7DZbu3mNqeoqh4hCtTo92p4soiYRESIIo/EoUQSKexozFgQhREuh0WqyuPUCSZBYW5tnZ2WRzc4dEMsZjjz3CCy+8QDqZ4pvf+AZLt+8wNTXJcHEYTVbI5/MkkkkMXScWi5HL5dje2eGP//iP2d7aIh6LUxwaYnpqmldfe5U3Llzmiakpyvt1vn7jKr/6T/8XPv388/zkT/wUk+kUf/fnf4bdtWVCr4eSzvLvv/A1sqkkP/6Zj6GFPu2eTaCaGIkYnucQhiIhAlEU4Ychvh8gygqKqtNzPCzbp9PtEUQQS6RIZnKEoUva0EkaJvdXljl87BgiId1Ol7v313n11deZmZnHMJP89hf+gNz4GKqi871XX+H/9Ut/l1Kzzq/+2v9KvV4lM1lkZnaRdqvNoZkZfuYnf4KPPvsUCxMjLN28RbXRIJNJo2karXaHnmWBKEAYIUmy8CthCMlEmlQqgySLBIFPuVyi2+2g6xr9voXrOni+zdGjR5manODB/fsUi0PMTE1x7+5d1tbW8F2XVDKJrutEUYTd79Nqt6lVqziOQzqd5tzZczz37LOoqsq777zD9WvXCFWBtJ7kwtIST774EU7Pz/MPf/EXGU6p/Nov/V2arTadTo3J2SnWyy2+9tZNjowN8cJjp/B8h04AerZAPBbHt7rYrg88dL8hge8jEhBKClYgkkjEIfRoN2vUKiWi0OPUwjhHJ8epl0p8+fV3eOTRM0xPz/Dm915hOJ/g6OI8O9sbvPLGK4iGwtDkGA9W1/j05z5LdijHP/5H/4TQsTl9dIYzczP4jTr3r19nemKS4UKB6v4e0yMF+v0eb166hqYq5HI5bMchjEL6Vh9BEJAQBickFk8RMxOo2qCyliQBq9+j1+sRhgGJZAxdN5idnUGRFba3d6hXq0xPTfP0U08hCgI3r19nc30D3/NwbAfP8+hbFpqmsTA/z6OPPkoikeDGjRusrq4SRRGSKJDTE1wpbZKaGGdxfJYvf/mLHJ+f5h/+7F+jXtpndWub7FiOSAr5zqvv8Mq1HZ46MsPHnzyNappI6SxaqoBv9VE8B2SJMPBxbIso9FFkESEKcEORQJDQBQfRaaLjIId9xNBBsKoYYYBr+1y/f4/83BxOKDOVSfPLn38Bsd0iatQ4NT/HC888w8LoCMeefparq2v85n/6T5w/cZSf+OiH+OSJU3x08SjnFsfIxxNcu7HEysYOiUQS3TBIpDNcvnodiDBjMXTTIBZPUNorIYri912WaSZIxJP4vkev10HTNWy3T6/bo1DIMz01ycT4BLqq4ochRtzEsm3WNzfxw5D5Q4c4fuIExXR6kC2IIogCwyPDHDt2hP1Gg1//7d/kmy99i/1qBTUWo9JsU21bNNt9uu0WI5pCWNnhzMQQv/CXfxjZdnn39lUio8NTU8e5sd7n37z2Gmm7yS/9+F8kkc1S7lrEM3lEUcSxHRBVJFlDVhQUXUOVZYQwQPB8JLuNGVq06w12d8uosk5S1zBDl6qnUm11WZwd5cdffJYJxWMuJvBjLzzDZCKG7NsUU3HSqkhSjMirAkOyQLCzwaPjQ/zEix8mGXnYzSqtWol4BIVsmlsrK9wr18BMMjaUpJhP887lK7TbHQRFo9HsUm806HW7CIAsSQJhECEgIAjCAeA1QGcfgm2ZdJqZmRmCIMDqdvBcF8M0MXMGrXaLa1eucO/OEvlcjkIywcLCAvmhAkEY0u52+NJXvsz33rxAudZEIOJoNkOv32djc5O+4yF6LicnxjhzZJ60LLA4OYLdbFFv98nkckhal1CUee/OMvfvrvBXnj7HzOQYrVYHXxQJXQ+7X0eUNPwIAjckEEJUXUYWB9CQEEEURgSBRyAqGKkCThQQ2jaZWJax4QJh6BPZXQTPZq44hGHo1EvbvHTlNkePHeXoxBxLS0vcu7+MXw7JpZocHy8giTJrd25RrZSRJAlJElEFEU+RSMcN3L0GV69f46lTcxTyOURBpNu1EMoV2h2LIPAGoGIUIfv+4FOXJAlBEHFdF0GIMEQNRZHfL/Mdx6bZbOM6fWK6Sa/Rxrb7KLKCIav4fRvfcRmeHCc/OsxuqUS9XufbL3+P6zeWkCSRibFhxifGCf2I3d0dNEWi3+3y3OI0j547hUxE2LdIZ9K0ezYeIbIkYYQmr95d4g++/Q2OZYt88jOfJVAE/K5DJp8ncGysvksmo+Pi40cHhS4iXhThBaBIOmrCwPFtFA+UhEDgOHj9Dm0hQo0idDOBr8ZoNur4fojSsvCCgLHFI0jJJEoqzanzT5EamWBja4uULjGSzyKIIuX9PYaGhzANnTAICfouduAxNTJCeqvGeqXC5vYeH3v+OQqFLGs7+/R6PXzfJwoDRHEAXH+/DjmAf2VJJp1JIskCjuMAoBsGUQSapiIQ4nkusqxQyGRJp9KMjowwOTVFLp9nc3+HL3/t61x49xL7+xVAIJGOMVLIcfrUGcx4htt3lui0OzTbXT70xFk+c3aRTquJ1e1hahqh7+OFIYEiQRQihzq/9Y2X2Ov0+Jd/568zNjKMHbjIQojVbuJ1u1g+aKqGrOoYmk7X6uI4AoauEUkyfcuhE/ogCsSNGJIsgRkjSqXpW30ct0W31UXSYsQyI3iKhlPbRRBcxooJZBFalU10zWCqmGJuNE8YBTiOgyRCKhVHVRTC0Mfq9lhf2UAQAiZG8hTTSTYqDa7fukOl0WJifJx3ry0RBAGyLOO5wQAwiUCWZQHPHRgjikIkWcI0TWzXom/1GS4O8elPf4rJiXEqlQqmoSOEAyPls1kkUcKxbfZ2d3nltVd57e032d2vIgkiMzOTpFJJEAVmJyY4eew471y9yf0HK3S7fTKawhMnjxD2bXr1FoVCnlQqBWFAJEC31UaTNOqez9XlNT788Y8wPzNNo1xhenaY/d09WlaffHEMUzVotxokM1kyuoErRbheHzt0EYIQWRKIBImQEN+ziQIQBAVBUtASKbx+ROS62HYfx++iCB56Ik3kiuA08AMBxfPwnQ5hKCAiEBhx1EQSohBREvEDD1mSUHQFVwgI7B6FVIKRTBpT2uH+gzVWN7YYGR5+H66KDppXgjCwiRyG0UGTRkQQRIIgoNlssru3jdWz0DWNr3zlqyTiJrl8HlPXkGQZQZJw+zaVapXK/j7lUplqu4sQRRyZmeb8009i2X02NjZJJJM8c/5Jrly5yivfexVJ0QjDgBOH57h3/TJRboJ8YRxFk5AkBU1RcFybTCJGJp7l//Pf/hjZSPLoI4/z+rtvcHR6hHpMZHd3G0Ux8G2bWCwBskzP6tDa3cVMJlAMAyGKUGSFhGEiyiJeYFPb3WG/XCKZzpMeGkPRDKIwhuN5iH4fOQzQNQVZNUFXsFs2tmWjKwah6yMIAk7XotYuc2x8DKvbxfVsRAQcx8ULfLJDeayqj2aaFDMpZFGi7fss3V/GkGVEIPB9ZFlFVnVc1x4E9YfdSh6ekANn1rcsABLJBJlMhl63zbWr1xCikFqrhef7CAgosoBtBwRByMToEOfPDgDFre1tHqysoOoazz/3IaqVKl/7xjeYmJzF6jt0GxUkUWZ7d4dDI/MQCfT7NplskkgSUISIYizNtfsrvLO0wqd+5mfQZZlvvvYyx6Z+nDAKiCdiCKHE7sYGZquLns/TsS3iYoiaMUkldZAUGtUGb7x3he3tVaYnRxkv5vHdHm5fpdMyCNtdQkkmHY8hSD7VvW1aHQ9ZjYEQ4XkiyCahKOOGArl0lp5VJgp7xGMm1VIJ3/dIxGL0XBvX9VAVFV/VEYKAtGkwPJRDsCx2dnY4fugQpqbQdTxS6TSaprK7sw0CyMJDe4QBgeciyyJ9q0On0wRgYWGBhfl5qpUKjz32BCIC7129we7eDoHvYHe7JFMa586c5sMf/gj1jsWN69fZ3t4mmUrx/Ic+RBj6/B+/8Z+JZzK0Ow32t/YYy2QplWqk8sMkYhGyZOF6NpWmz/z0HNlYAk1N8LXL97C1NCePn+XOO99hSAdNDPBkkeH5GSQXDFGnVWshOT45xaBmN9ku7/De8hJ3r9+nVW3x2uXL5DMGf/VH/wLG0aPohWEIwWp3MRSImxJ+v0Xk+ySTSfrdNpHbIYwCQj9AlwTcXpdkPEMgRHz7rQs895HzaJKIKSt4QUjo+siKhuW4CE5AN5IxXJGTI2PUz3p85Z3LdOstHnvkNG+/e5kLV26iqSqqog68lCAiIzw8IBGaYSBJUKmWCMKQ4ugAw1pdXaVaqdC3bSqlfdY2Nmk0W3iey/T4CH/5x36UQj7P1Svvsb1XJgxDJicnyeVyWJbFN7/+DZq9NtlCitp2hU9//EUqrTIX33mPz8/NMCTp1D0X2cjy6KGTbDy4z9fWrnH6mcfoWGVOnJ5HosfGvducP3YMIxS5vbTOydOnyGdTuK7Hxs42G3vb9G2PN1+5xZWVOzi+i+7BY8cO83P/w19i4cg8xaEskqDQ7vYwdINELEWz1iCKAgQhgDBEQUBVVBzPIwoDTMNAJiRwXBKpFOVqk+3tbeKJBKIsD4gboojneyCJiIJIgIAsS4RugB4zqbda7FfaHJnTmZ+bJ5lOA+D5AZouvG8DOfp+joUoCdTqNUrlEpIsoWsaly9dptvtkk6luH7tGts7u0QR5DNpPvz8Jzl58jgbm5tcuHABq99naGgE2+7T7fUwTJObt26xubXJ8MQIVrfHj3zkRc5//Hn+wb/6NQwZzs7MYIt9zEjj8NRx7u7V+Q9/8mXmFoYI+g57rTIf/+gnaDabOJ7PyPQ87Ujl/u4Oy6XX2F1bpd2s0e60aFktZFFGCgssHjvG8ZPHeP7cOWbyBURVQI3FCBFotFu0uhaBBwndQBUVet0usiKgCiK2Z+M7fQgCNFnB9QNc30VVVURJxPE9FF0jm8/R6XVxPQ9JFBD8iEgEz3FxPRdZUWi06yTTRURpkNBmsxmOHjv2fm6rqsp/R4CQH1JaZFUBQWCvVCKMoFgsYNs2XbeDrutUKmV6lk0UweTIED/8w59DMwzeeeddOp3OgCSRyrCxscHu7i5jY2MMFYs8ePAA3TCImzEkSeUvfO6H+MaFVyhv7vPCoycZTsVo2Q6F4Qm+dfECf/C9bzM+McTf/OEf4+rl96haAsXiDHeW7nP97jrbe79Ny4kIAx8l8BkyVI7MTHP28EnmZqYoFPIURopMnD7CXrUKlotiKPiKRMd1wBMIBYjHk6gidNst5EhAVVUUWUSKQlxngH/JB5Vx4PsQBKi6jhcG7Fb2iadTDI2NUC/vYjs2hqwgihLCAbUpAlzHpd+3mZrNkMlmDwwgoyeTGKYJgOu5aKb+fYM85EsJCLQ7HXpWj2QyMcgkHBciBt9O28EPQo4cWuATH32e7e0t2l2LWCKBounUG03uLN3B6nUYGxtj7tACXuCj6BqzxQV2d3c5cew4K6UtfvcLX0AAFsYKSEJEzkjyH770R7x2b4sXzy3wSHGK9maJ3VoTJBNNMRAcl5OH5kilYtR9ialChsl8ljNHjnNkbp6EoaOqKggRXa9G6NsYpsLe/h7rKw/IjQyTyRQQBQlJkhBFCOw+VreFSoQSmRBKCIKAKitoZozQc/F9j7hpIkQhoiigGTrLa6sgiRiZDFG9BAc8NFmUkRBRZZlAE4icPmYsBsLA8wCMT0xgdzo0m82HfQ+CIODACN+PIbbvYVWrIIooukavb9Hv9Qj8cJCBhREjw0We//CH2VxfRddVDi/MsbWzx52791jb2EEURfL5DBOTk4M6JwyZGB/n5p07nJ0/zPH5Q/wfv/NfqFs2jx+dZyqXo1Yrs4HD+HCKXzo2z+lDi8QNA6vfY61RxxNcxKCL1N3nk6cW+MjT5+mFCvFiATNm0O85uKKPUEhhayp+CBlpilbUR1UcTh0bZlu4Q7VaIjRiCFoMRRHxPZtOt4auReiiSM/zcByHlmPjWR00EVJxEwFwbIfQd4gnkriOQ7m0i5wo4HsufhigaBqSHyEJAlEQoCDR9myc0AdBoF6tUi6XAUhlUpTK+1QODCQoMuGBQQSEQZYVAYQ+ruMiKzL9voNtWYOiJYqIx2N0Oj2eevo8uq7i+BEKMm++c5Fbd+7iuD66rjEyUmQ4nSamaOSTaXZKe1x+7wrJdJLRmWm+9vJ3uXtvlelcmg8fP4HfcdlsNwjiOp//8IssFAps723RcXqomkar1iJCRJBAshxq63W6Z44TqWmEIMSxbdrdHopp0mi1kRMxDDNOEAmoKDi9Dr4qMzY3jxo36QcRYiggBgKBHaJJBjFNpddu0a3vEY+ZCJ5H5Dv4okCj5aIqCn4Y0HdsIKQXSaxWLU4VNGob6zR3ywSOjygrIEQEUYDtu/iej+oEWJ5Hw7ORjIFburf0gGwiyWihyG0e4PdtFP0DLuthxzAKfWRVQgoCHMcjQiQWjyOLIp1OB1UR0TWNtdUHXLlxE8fzqVZrSJJILpNifHyc2elplCAilUkxXChw48Z1oiBgdnqGC5cvcuP2EglT4cmTJ0grJvt7W0jJODnV5O13L7IzPkQ2Ecc0TDKJOL7r4IUivSAknsrQq3VYadTx1RCz3SKdSZPNFUin09RrDcRmh9joGJ2wTRgEqJJIx3IGOFEsAb0+QhTh9D2CvociKti2x/ZuGau8hptKouk6umGg6wbNZgtBiBgaHsEJAgzBpycqlLsBU1OTaGFEq1wnCAOCeJxEMoEgSLhhgAgoXoiu6+yHAY1OD4DyfoWYrjOUyw8wRAQUWf5ADIkGvqtnWUSRMADGXJvi2DhTE2OsPFiGCMZGR7hw4QLVcpVW10IQBTLZBCOFIlMTkxQLBYQwYmJyAklR+MpXv0IynebzP/zDvPLa6yyvrjM5PkI2HceImdQbNQRJQBQj9roW5XKF3FCWpChg+zaKLnL6kRN879sX2NovsTg/RWE+y/BIho4VkcnmmZicxvNDXN+nODqCJKsgiphmElEUDnoiDq1WHddxgQCr1yYMfKQwRJIEAt9GlUNIpAhFGceP8Ho27a5Fp9MlbuqoWoNIlpmaGadkQczQOHbsGPmFeUYqVaxuF0mW0WQF3/dRRBFXEOi7LolcgVZpn63t0vsF+PbODv1+f+DC0mkymTTra6sIAshRNODTBoFPGIZEQUg8FmNxfo5Wt0O73UZWJCrVGt2ejSoLJNIm6UyWU8eOM5TLY8gKhWweAdgu77GxucnU9DTDw8NcuXKF5dV1JopDfPKjL3D//l32d/cYHp9AFnV6notvi0yNTJGJpVBDASkIEPseZw4dJfHty9R395EnxmhX68wsTjK/OI8VSkSAqmlohoFhxug7Pla/D5JEOp0kCgKECGxVHRC6Iwffdgk9hygMEQMBMfIp5FJUHIswCFFUFc/zsHoWQRjh+T5ra2to8TiTQ2larYDJySkmpqag3UEEDF0nCEJs2yYMB6fCtm0UVUOLJVnfvUHL8gYnQBwQveWDU+G67gHh+gDLGvQ5B0FbV1V6vT7nzpzk1Inj/Nbv/C7eAXajyDKzs5McOXwIQRzA9NPjE4yPjdG3LMqlfUrlMj3HRlEUEokE77xzgWs3lyhmUnz+M59BlAVWlpeZSadRNRXfDfA9jwQGRTPOUCyFLoZUqxVu7N6kFSjEfYGo59Jv99F96FsBjhUhmQqO66CqIrZtY3s+kqSiahpdp08sMIk8b8DEFES8MEIUBFLxOBYCbt/C6fcIPBdNVTHNGI7jkEgMOMs93aDd6SIJIePj4yimie041GpNgiBAALrNJv2ehaIoCEAYhHjOIDMThIhkOkXX8bi9vErwsOATQkZGRpmZnQGg2+0SReEHYogoAoPjDTKZhMHCzCSZdAJF0wbktcVDLMzPoGk6Y6MjFJJpnL5Nx+px794S1XqdSBDQDR2318ELIy5evMjq6hrpmMkLz3+YXDrD1776J1TKTaYScfpWD91Q8J2AmBpgxhTaVhuzOITkpGl0bRJDReZmJxFNjc1mnQQe21duUvrGRT781Fk+80OfpjgxQ32/hB8JBJGA67romozjuXh9G7tvIXg+YhThex6SCLKoEIoyiDJh6BL5IbbrUG/U8cOAdDpNrlCgMDxM4NmokkggiKSSSWItn/W1NWq1GsmUMWB6yjKyNEine70e7XabMPSIxwvcW91la686GGMIoFFv0O/3icfjA8Q3CL6f9kYPg3oUIkoyoedx7Mxpjh09wlvvXKJRr5PJpDh8+BCV8j5bW1scO3aU4dOP4Pf63F+6i2SoxDMp1re32F+pgBtg9XpUyjUSmsYTjz7C4UOHuH/7FvcerJJJ6szPzhKPxbDsLpqhUWtWkTugpMa5tn6fzb0qViDS3Nxmo7rD8Y8/z50LF1i6ehUpLVMq+7z1zkV29rZ58dOfYWZqmqGRMcrVOolkAo+IRr2Ga1n4PRspDFAECQIIwojQjxCQMPUEiiAN3I7pInc6uJ5Hq91GVhTSmQyiENJtNfAFEfJJZFlGNwwcx8GyogEvNxrMgoRRiOd52LZNFHmkMwqVWhPH91F0FRkJq9fBsm1GRkcHQV1WEAXhAyckDJAQCD2ffL7AM08/R7Pv8b0338IPXOxA4eWXX+P4oXl+/id+HCXsc//WLax6jZgp0BIVultN6g82sbwGspqi1WgxOT7G4sIMqXQKx+lwa2ubZhDw7NQCJyZH6PY7OJ6LZikgGeSzI5Rqfb75+jss75ToBSJOGHJoaoxsP2DzQYWKLUBDQkFg23b51f/yh/zel7/Jh84c52d+7PMcPTyN7faxxTRJWcITQ1qhhevauIIAvoMpS0Sihx9YCJqG23dwHAdZiVHMjCCIPvpQEjGm03NcRD/CEiJGUzEiyeTCm6+QcB1kq48fgqrHCBI6QiTgVJtIPkSRSMsS0WtNav0mPUCLDMayGp7ksde0OH34GKYA8ZRBJpNne3trAL8LgjAYrPEDFhcXGZuY4KWXv0u91kRWRUxZZXJknE98+CMMZ9NceOO7NKs9pMhHVuNcvX4dZ9/iucdO0RWHuPDubZ770LMcP3aUmzduYJoGq+tr3F++R1rROHnsOK7jUG/W0ZQ4QiAwVBghQqDdapGNxTizMEff9xAVlWde/BiXbtxir7FBRtPoORYugKYShT736j12XnmXzUqD58+fZ7KYY0iCsaOHqEcelueSNhIk0BAkhbbdGgRvRcW2+8iyjCSJOIGMG/rgOMREcTA85IOARK4whCFL7GzvsV+pkclkKORzON0uomaAJNOt1YmsPqqmIRkaWD7uQbHpuj5GTGJ6aoqbD27x4MEKT546i2kY2Lb9flDnoUFcP2ByZISnnn2GarXKu++8O/BvXsih6WnOHTvBjYvvctN38N0etUqTwwvz1D2ffqeH4Nvsbm1hjmb4Sz/+46SSCV761reZnJxAVlQuXb5Kr2fzxKF5kqZOr1VBVlRUVYMwoOd6dGs1As9hbmSYuGGgaQpSPEO9a3P54nucOjTOYrbA8toWG55Nvedj90IEWcQSJb554z4Xl3c4d2SRH3nuKOwm0FUVIwhplhtYpk5hqIiuGrQ7TeJGjHQ6TbvVoFQq4SoGuqEiSCG9VhfRMMjpaTRFp2Y3CNwuZjzL4rGjLK+sIsoSniIjaxqCEBK6ATICgixiRx6+76HI8mCWRBKQDuZwmo0+t27d5rMf+RjZbJbdTgdZbj7MiJEFUYAADi0uMj4xzn/+zf9KuVIFaTA+Ftc1TEWkvL3B8FCBKBJoN6tcu95j17Wx+zYZoJhOsfjIY9ho/N4XvoCEwOzcLG+8+TYPtkqMJA0ePbqAa/UJwhBJ1vECj2Iuy0atSrvdQpUEdFnFtXpIrkSp0uArl29xIhPj4ydP4vgOuq4y0e2zX2tTbraoeTZWFNKXRGp2j5evX+XG9j0+duoUP/rUs5ycmcSOujyortGxGkwMz5FMpEnG41i9HltbO7RaDfZ6NkfGJynEYtQ6bfK5AlEk0/cCvEhkpDhKJjNEYa/N6vY2sq4i+D591yd0BjM1pmniiAFe5NPtdnETSXzfhzCi1WryyU/+HJOHplheXqZcLg8IDkTvjw1CNDghAPF4nLX1dd67chVRFgj9iJNnT3Fk8TB3bl6l02wwNTFGvd3i0Pwsji9w5/ZdxCji5Pw0j505w06nx5e+9VWsXp9TJ09w9eo19kv7GKrC8089xsxogX6tDYhEIsiCgCiCJosEnksgqLhRhKxotGyHSrdDLqnx6OwififgXqXEfrNFItQYNQ2GM3FKnQ5bzQZ7joungixJVKs+v/vdt3nj2m1OzYzw9KkjvHj+HJn8CDuNNla3Q7vZorxfIvACcrk8l++8yUQ8STKMcHo2uh6j3w9JpbLMTB4lpQj0ug4dy6LSbOL4Hm4Q4vghqqqRHh5G6fdpV3ZxrC6JeAJVVWk0mkQhjI2N8dGPfpRKt8orL19gfX0d3TDQQh/pv6vUD7CTZrvF2+9cwHE9REUEIgqTE8QSJp1uE92Q8H0Xyw+YS6dxQw3bC5iZG+fEkUUq2zu8+eA+9XqD+bk5ypUKbctCVmRkzSSuKUiOhRB4SLJMqIoHsEyL4VSSXDJJvdfn1vIKaixO07JJJGJ89NlHub+yw/byfcqtNm27TzpukkjpRL5PFAgU00NoUoJWt43t+fRkEU9QWWu2WLvY5NX37nFtucKLT55jdiKHLIrs7OzQ7XQYHxuj3W5xYvEIiiDy3jsXyY6PkUxnyU9kyOaKyJFPt1EGUSGXL9Dtden7LrpikjJU4oUEqtunvbqGZfVQIsiMjKABzkFFHgnwxS/+Ad/89jfpWyKWZVEoFNhs1LBt+wMGOSA5NJpN2u3mw9qFRNzk0tsXaG0OkzESdPwAWwgh8NktVzGyw2RTMYYNg1zc5F69zmalzPjYMKauUNmvMzpUpNNqsbVf4crVG0w9/QSiphJXVdp2D1GMCEWBuyurTM3OMr0wx4WbN9jc3EGNJxEqZTa3VlhpdbHskISsE4gSW+0etAcVuakr9Lw6CVlHj+LUrCqeHiEhEjoRmqLTDQP+22tv8aVX3+CF0ws8+9QT5BM66UwaWRapN2pk4nHc/Rr9Sp2zn/40I9OTbFdr3F+5j9O1EJ0uiqpz5dZNXM8nZph0Gn0MTSMpiwi+hJhKI0/OcmjuMNVql0qtTKQP2rM729vcvHEXM56i12viOBaSAG7fRVWch6A7IsFgcml3f59mpzvIjSP45AsfYqyYpdPokI0PcW+jzLX1bWZyQzT7EUulEoVkjLMjwxhixNW1B9iyxKmTiyhigC7AM48+SsqMIwuQKYyxWe/RlyQQIkTbRgogUjTKtsNGrUKj22BsfIjIc0jLMJYfZm2/R7vpoEoSiyeP8rlPfZonj5/hL8wmea4Q4FkuW406G/UWfb9HMiZiBDKiE2Co2kHdG6FIAn1Z5U+urfCrv/7b7DUsPvz084zEM6hdnzCEhBpjKJYhEY/Rs1qYYsiQIqC09ylqoAc27778MprnM6wnMAIXqnt0l5bwqhX6gce7yyt87d1r1MpVRudmEBMGAPl4ngidSrOPH0Uk0gaz0+NISHhu8L5B5IiBWEC1UjkQBYDh4SHOn3+Kzf0SmzslpFmRTDzOTrmGsHCYfJBifXkZN4zoCgIN20EKYH50gnw+T6fWxBjXyeZyxBIx0pkUURhS2t0hkzTwUREP/KYIHJubx/Ucbr93lVg8wceefozdvTqqKnJuaoS7u/vsdSzWVtaZyOc5cuY0fz1n43QUfvkPKmSPTLG077K8uUdqMkO8I9K3+5imScfqEfkBiqqhChE+ApYHr1++Qzb5Cv39fW6++x69iSFmYklkx2J9c51z8+OEXY+wYyH2W3TtFr1QpZAbotLs8vWX36barHPt7hL71RKRobHX7XJleY1uO+T5Q1P8y1/6n1nMDfEVINJgdXuN1dUVCpkMpdI+jusiKyqpdIpOq35Qh0QD/4YwmKcAeOLxx8iks+zultmvt6nVq4wW8+yt1bl+/wFHJ8fJpbPc2Njm4u0lPvL4WZ770HPsWz57OzuMFIsQCVy+fJl4PE4ilWS/UmEiaaJpGqqqoEkifhgSIpFJp9gv7WIqCo29HWbnDzF+8jjX33uPEVNh5OxpvnvxGtX9fV579RWkKOJd3eH84jDHx1U+/cgc1zY6/Pu9BqVdkUjq4nk+viIjHFCboijAc31M0yAQJF66fpOXrl8j8iOGUgLDVg1ywzx7/AjJQoHLN+/zxd//MqVKCzejs7e+hhWI7HZBUjQu/2//jmq7hfc+jeoAqhJNQObt9S1e+s5rFIw4pipQae3jh31CP8J2Pa5cvcb1G7eQVRXtAKIShIM5ddd3EB72gwlZXFyk2Wixv1fBBxRdJSEP5tdX9ssM5ZPMzM9R6nnc29knfmeJ0yfPUSnt4YsBJxePYVs2zUYTLwpptdvY/T5nZs4QRdDr9Qb4UBgiyiIEIflclnw2ThhMs7dXwnJ9PvL0E3Q6dWo9j6eOLXBnbQNkEd1UCUKNd5c9ZD/NvT+5TXq0wInjM0RL92g6EQhgWV10XUdVZbq9PpEk0A1thEgm8H2SmsLpQxMszoxxJBGjWa6wtbvD1d//Ekv1FlduPcDywgNZkAhRAFkz0YUQt9chq2mIkkguqePbHo4TEaLR6PfpOiGtdodMJkaEAH44cIvpNKIoUKvVaLc7RMj4fvj9OsQLPERRIowiAjdAVRXy+RyhA5pqYLsOiipjyCKKrGAJIm9cv8/YWIswAA+BG2ubBJqOJBnMT06hygpu5HDy1Cm+8d3vUK+1GNY1YrEYrusQ+h6xZGJALBYVEAWG8nkMU0YkYm93m7t37qLIAsNjw5gxj+MLM5yYmeCL3/guVdfn77zwHGcmZ1mv1Xh37S41wUPstjlzeJG71SadVgvbdRBFkTAMEIKQSJEJiTB9jylT4yc/8hFePHeOOxcv0trZIfA8Xrm7wZVmH0cAZA1ZV0n6PobgETcNZCNBXJWYGo8znswQ+hHxmIqsK3Q9l5bt0LI9Go7AxPgwF+7dxg5CYvECw4UcviLQqFXY3Nmh0WojxvM4BxMHALIsygPxFWHQqDpyZJGZ2VmuvXMdxIGfL+1uszg9japrOB2PWE5lp14hcmPEY2kSWYHbW6sszCyyuHCYbreDANQqVfZLg8ZMKp8mkUjieTaBY0MijiQrhIKIE/r4UYgf+hiqxIuf+CiHFxa4fPMOHSHk3MwE0xmT+dHT7Dc6fPG19/g33/kGR6ZG6XcatL0Ogijz2ORxFnJTlP3r1CoVwiCg17PwghBZE4mhkhJUJkcMzh2a4Pzjh9iurnCn9oATUwuY8TTtlQoODrFUGimwEXwPyVQJ/IBdx6PTtTAVia2aQ1JrEzc0UioUkyYp3UBF5MTIFEcPL/Jge43vXLpMFKmMZ8aJKRJ3d+5jKgq9rkUYCYyMjFCu1b9vkFAIiaKQbCqDLMLs1CSyIHLpxmVa7SpqXOXOdonZyUPkjSzblU3CTAa32yAt9Hjy1Bm6fsSNpVs8fvIEmXyS9fU1vEjg5vID6u02edPkQ8dPInkOzXYTURKI+z56BJoYgSggSzJ2p4+gKZw9epbR9AiBF7G5X2Jnr4yuqCQigWfOHOL4zAgr3QYrq2sEzYDz86eZn1vAsz0u3bjJnc0NLMfDECQUQaQYTzI/M0qt3mWvWuX0mSeYz8Rpdyymzp5j3wkZH03T1TJ0XlbQRRgSQip9G98P6atJkrEMU6LNYsHgzVtb7Moye74DjRZ5xSCzYzNdzJFOq7R2Vjl7eJr7rQ7VnjBgnXglJCFPUjfI5FNsluuIehxTU5GjD2BZD5sjw8UiVrfNg/v3WV1dpVIbsCRm5xeore1wa3mVhYkJSrUKpd0ahgDnT89y/PAMX/jqywxnh1mYnmF55QG1Wp2O43F/bRXPj5iaHGY0k6VR3R0Ae4aBZpgYskxku0iqjBP4+FGEGEHH8yBhMjY9hShJ9PoWLcvBDZsYqsr4UIrp4SKnU0N4jo+eyHBnb5svXXiN29stcqrEqcPTDGUKTAwVmR0fIRtXuHTrHn/4vR06vRZKOkW3bWMmsgwVJuk2t5CLOUJJwNRVUjGDbbtLQEhC7GMqGk8enubnPnqEkd/7Y95tiJw69wTXb9zj8voWbR00wWVE0PjY4kkUQ+XK0jIRMooooic1JFVAV1Vsx6be6jI+OokAiHywQfUQRxHA6juMj46hahruQfUooyLF4ixtrjI/VeBTTx7h+s01dCnkzNFDrO/vs1mt8/yRYxQKRVbXV7GsHrKsoysyXaBZLdOxuoiqAq6DjIQQRQTBoJXp2A6uVyOTS5Mq5glMBUHWSI0MEdg2nV4XSRTxg5BStU6n28G3A+yuTRRG9Oxl7mxskFN0fvoTJzg7OcLI8DiKqEAYUK3tI3gdPvTYcYZGCxSzSai0qXe7GKkMo3PzKGUFc3yBbCLLzuoeGa2LbKpIfQm3bbPV2uXVsEshJYCmc3o0wdGRMdr1HrdLW/iCSxT2iZPg+Pgse0rIyvouZixDLpUmm0yxv7uPFETYtkPg+2Qy6QMdrg/2Q6IIQRTZ2tzCc2w+9alP4Xkey8sPEMUBI93xQ7rA0soyn3v+DJPnn6DXbaMgcPXmbVBkvCigUi7TaLTodSzyxSQxQ6cjDoBHUYRap4PTtzENk3a7R7tZZ3J8gqSi0mo0sSIgm0VwfCRBQRJAlEQkWSaRSOB6Pvu1Gp2eTXJ0GLIe/WqHXCLB5xePMjd/iLGJMVZWl1i6t8zY2ARTMxNsbq9juT5nzkzy+PnH2dkr8b0//gYjc/NMzM5z88Zdqls72KUOTatLPqaj2A6ZmMZj559k7f5drm9VeNCR+Q+vL6M6NpIg8KXbv4/ftzk3M86xyWms/RKW06Gse9zZ2KEfQT6VI5tJ0+93gJBicZh7q8ukkhmiSMC2HaLoAwYJo0GvudPtMTM5xunTp/j6175Ou+8yOjpCwoyxV9oHAXbbXfbrPRKyhBNF3Ltzn539GkPFSVRd48tf+WM2tnY5e/wMyWSC0PMoZBMszAxcjxMMJoUUSUaRZBzHQzZ10pKBEg/pdS0279ynX21QGB5CUkQyuTTJTBozlkA3TabmD+N6PnFVo2/1sSwLwzSJJ2IgSfhBCHocX1CxA4GuG2Gm8+SGBt/G+t4Wuzv77FXKDB86TKlc4htf/xKvvfEuU4tHKZd3+bFnn+FkYYgvvPIqaqPOE+NDGKrGzZ096i2PkWKRRtcl5gh8+Owii9MzWKUyhZEcY+NFkKHU7hBKoJsmsiAiIZDLZQmDAN+PGB3O43k+giAhitIHTsgHronxCRAElu/fOwDEJNrVOp5rg6HQDEPWqx7jkzHcMGR5p4ZqpBmfnEFRJZZ31ikOzzAzPU2nN8Bqstk0w7kMghDhR6AIIoEXoEoymmGwvVcijMUZGxnBFNLUqhVW1lbp232GR4ZQDQldi+N5HnIImhFD0EK8nkUiFmd4bBRXCKg3G1i9FqqikC0kmT00xfbmNs5Kl9HhPOPjw0hBQL3doWtZJJJpFEWiWdvj9PF5Hjt3lvzYPNf+yS9j4PDIsXluba/w7lvvsbgwwWOLM8yMJVnb2KTZKHFsZpZzo6fw2k3eeeNVYimdn/3Jv8xYMk11Z5e9ZpMgYEBuCAZkwyB0WX+wTiKRQD9gqhiG/n5B/r5BHh6YTCYDUUSlNqA5Bl5Ex20TBR6ioeBaNjdW9xAKwzQqVWq2z/DYLJqssrqywvyhBSZGDyMKIrVqjW6nQ7/ZZH94H00z8aOITDKJaeqYhomm67x7+TKPP3qWjDyMqakMT0/QatQRFQXbdenbDq4ZImk6gqLhhhGipOCZKmLCQJAjOo0WvmWRCATo2/REm4QpYqgRxUyMyeEsgtOhZ7sYZoJ43OPco4/x2NOP0xNsxosFzh17gpurO8i+Rz4VY3Vjmdm5cfqhxNLWLkKzRTEVY/GpJxA8j3TMxBRjVEU4f+I4px49xdToKHdv3kRRZEr1BoJukEomaJXLuF0LxBDbdpgoTgzgkWgQ0j8onSgjDGIIAUxOTNG3XfaqA4P4fh8kiIIQ1Q4IBZm9+h72O/ZAdU7XEUSXfn2bdq1BVZSYGQIhlFjd3KZq9dE1lVv7u+zuVJmeO8xwwURQBAQpJFvI07Vd2m0XxZXwmg0SozmidBxVkLHaPWzPxzSzGIqO6PvEDA3wwbIJnD6dIMCzncG3TBtIZ/iWR223QjoeZ2Z2ClmT6dkhbcElLkJSUsguzlCYmaR5bwnXinCtFkv1MmEkMjk5gtV2ae60OTMzwkLBJHBEql2bGw+2OHvoEItDE1jYHJ7LcXhhkhYiy9fW8Os9ho5P4BkFMuoeKdVBzOqEnZD19Q2Kw6PoepzgYPo5ikAUoj/dZcVMk52dHZrN5oAFrqp0Op0DBU9hQMsHHMdhdHSUSrnE5uYWkjBocC0ePcLhMyd46SvfYunBMlpcZXK0yEgqg9/sobo97FaDpiiiyzqCaSLLOqVKlVanQ2R16O+6JIeyBI5DvV4nmU4TM00MwyCMImq1OpVKBSQRRVEwDINMMkWv26PZKOE6LpX9fURJIJcZVMGBEGL3beJmDEWU6XQ69Hd2GDs0i233icVMkETqtTqKJFMcGqIrdHC9HSJBZHpyFlWMUen2KF2+yLdeewX35CM8fmqRYr6AYBh0Wm2q7QYgYPVdyuUSPavH+uY2U9MzlCt1Upk0qVSKIPBBkPjTLvGDKqCxeIy93V36fQdBPBBv8X3i8TjJZPJgll0gl8uhKIM3JooDbZRYLMajjz3Gbr3ClXu3iScTLM4fIptIkdBMHj92lJMz46R0HafvUCqVaTctUrEkO+V9dsoVas0Wm9s7tDs9/DBEkmRkWcaMxbB6PfZ2d1ldXWV5eZl6vU4qlWK4WByMFnsenU6H7Z1tGq0OmWweUZLY3tnB7jsE3oBWGkURrudRLpfp9Xr0+zZBMJCkrTeaBD7EdANFlLA9ZzAM6yt02z3GRkd49InHeLBT4/rGOqNjI2RTaUr1FlYE+aEhMtkcF9+7xcrKOo4fIYgSnh/SaDTJ5wqomnqgPir8GQZ5CDNyMCPSbg/uEMWBGxDANE1isdhAMkOWqVar3L+/zOTkJNlshkQiydzcHGsb6/z+H/0RvV6P5z/0IaIoZHV5mcB2SZk6YuBgW30EUcL1AnzHZnRkmK7j0LZtvAjK9QZ7pX0ajRZRKNDptKlUKtTqdba3tymVSqRSKUZHRjFME8uyaDQauK4zUFGQZeKZFF4UYtk2gT9QA9JUHc/z6ff7dDqdwSkTwDB0ZHmAcbW6HYgE4pqOpmr0HZsADloHW7TqVR577DSHjkzgSQJjc9OImsJmqcr2TglFEkjnC6yV6zh+iCJL5PI5Wu02kSAQSyTw/eCghx79GQYRPxDVYTCkA2iaNsgE/ADP8xCE758Yx3GYmZlhbGyM0l6JXC5LPp9n+f59Ou0Wc9MzTIyNUy5XyGRzTExN4kcRPcej6zqE4mAuz3G7FFIGdhDQ7PWIJBlJVml3LcrVBmEkEIYhKysrNOoNWq0WkiRx5MgRpqencGybbnfQVOtbfaIoojA0hKiotHoWiXSGbC5Po9FEFmWKQ0UEcdA+FUQBURDxfR9d0/CJKJfLJEyTQjqLrih4vk+n16Vjdchl48hRn2xM5dnzj2H1OlTK2+yWyzSaXZrlGjge5XabWw+J1YLA9s4e1VqddDqN5/uEf442sMyBBgiAoioE4YDWOICtNYIDqqOu65imeaDhq5BKpVhZWUVVNWZnZwffuv0yo7kCJ48cY2d7G9f3mD2xSNfusbe1SaQpJOJZkHQcq0PQaTFaGMPMZFjb3SOtKUzOzFBv1elbNsaoSadbxXE9BHEQM8YnJ0jE4jTbLfquQ79nUdkvY/UtxoeG6NRqXLl6jfGJcQxVIgx9dFWhWq4yEtMQRJFEPMH02DiKqrKzs8d4IoUgiuyXSiTjcQRBpFzaJwwClJhOOp8kQUQkBeys3+Po/BT11X1W1u8TBSGhp2DVe8hmmkqpzHK5g6opaKpOtVohmxuiMDRMJIhI0oCF8pBTLfxpBnmoMiMKIv4Bz1SSxYMOYjRg9skSuj5opMRiJvV6jVJpn0cfOcvY+ARvvvUW12/e5cihecy4wSuvvcbsxCSdVo93y2tYjRoLM1OkFZ0gDGn5fWQCuv2AsXQMu1RnrFDESKep7e2SdEXsnk3d6qEKMoEfkEgkSeeylNp13FoHx7aoNCt0ylUKySHub5f52pV3uXFjjXziHnOjBYYzaY4tLiCJAm2nRzIeo+/ZTM9NYWgybr+NOZSla9vs1GssFsfplCtslvcIFZmkbFDIZfF7A7aM1WqRLQzzxNNn6HQcEjGDjcoSGU9ADlVeXl2m54WMDg9huw6SJBMzY4gCBMFg9iM6MMRDr/NBq8iI8JB8HYUhwcFffC/AcfpEEXiee6DHOHimaWhY3Q7Dw0PMzM5yf2WVW3fuksmkmZwc58bSTRBDzpw4yZuvvc72foWZfJ6xbJGg3QYFMrkktXqbRt1hNpli5MgRMBVuLd0hoZvIkc/e/h5qXEbRVUJFwiGgVqsTEBDudil3aiyVH5CVDOTI5PfeeY9r5QrzxTyPHj/OielJerUKlZ0yuqGSlBWwPfYbNdr9LrVyich1kBRo9ftU2g5HigLtaoOW6yCoKna9hztu4/g+hq6gBuDbLk7UZ3+txdTcCL7Q4/jMMe5ulXjp9n1kBdKJGJt7bWKGSTqZIgpColD4IGz1vkE+GOBlIToI7SHvz0UAiLJ4MOQCkiQOhOUPnlcuVzFNg+PHj9NsNnnv8mXiMZOpqQm63R6yJPPYo49z/eZN1jY2KQwVODw7gySECDENN3Lp9boIrsPYZJahyTm+e+Ndrty8ymefeJrnj53iytI1ECPG01miuI4rRrRbLdQaqE5Ao+lytVbl7ZurDBlJeuIGq5Uan5s7zF/+3At89Md/nPT0FFf+5MtcvHCBSmmPftcGQUZExTQzKEocXU+hKjHEoI8qgZlK0AoiZEklbSboWh2a7Q4yIYmYge044Hq0Kk2+ceE1RndH+PFnHyWZHuU//dZv0G7YjE0OMzI6yurmFrquIwgCfhggSRpRFH5fY/7gxgfDiggDIXoRDuKF/3480Q3joEAMDhjd0cPpBXR9oOx/+/Zter0eMzMzRNHA6qdPn8G2+1y7cRtdUxkZGR0EwVqVQBXZq+3TrNdJxRMUikO8s3SbL37nbYZSRZ44/xjVThURj+JQFjVjYqoqQqePW25RK9do9i2ulDb4k/euUO8K6GKCB9UWZs7gU48/xtbWAy5975s01m7RlT1yc+Okpsbo+QGeB8dPnGF+7hDDI+PMLxxGVU36/T4JVaXW6nJldYUQiZiiYzk2rh+imTF6lk2j0cbq9FEikZVqjdvb28zmp3n76h2ulPbQRIVcbojRsVHCMEASRQRRGDAYBf7UDOuDcURGGMiMGwdFVjI1EPX1XR/FiL3/wOgD1pREkWq1jqZphGGI7XhYVp+J8TFMXaNn9bhx4wZxXSFmGPS6XRJxk2ariaWCKCmMZrLMTM/yvXcv8keXbvD4+AgvnjzFxsoabbvBaC5PXDXY7rUI9luotkDKSLHZaXL55m3eW9uh7fi8eOQw56cOc+uVHSzHoxr06ZZr/N7v/g4Xr12hODbK5NgE2fkFtsUNen2Ho8ePYcRMLKuHYRqEwUCfMW6Y3FheRvJanD9+GikU6bkOXjhQ3NvZWqdaqdOzfEIvQE+YGJpOJKv89kvfxVVNTk3MMDk+jud5eN5AfmmgGB4R+AfKP39GDQIH4jOCIBCPx3Ac932NrMD3B5qIkjCYz9a0gYZvBK7nk0oOqJKVShVJFEilBpqCrmNTq9bwPI/pmRnEaFDHtK0eQiLJ2l6ZuWyOYnaEN9+9xtt373NiqsBHHj2LHAS098vEskks26PbqeKpMplskWqlzpu3b3F1dYuSZTGcifPZ5w7zuSc/RF6Lc6v6gG9fvsO33r3E2bkxiqNTGJKJ6Yk45TqKKDJWLLDbbNJs1vACjyDyWd1YJRczGR0ZZjRXZKvWZbXW4JEAMrpJtwt7+xXiuk6z0cZ3ffrYiJHExMgIOVnixu4mV2tNCvkCuqpiytKBhr6A7dh4no8kSRCJiAxU7f5MgwjCIO3t920qlTLtVvv9k/CQqh8cLDR5uGdEFAZCyw/JwsPDRYaGhnAdh06rhWmajI2NkUwm8R2XRr1Oud0iVchQb/U4OTbHg7urXFm6T3Z6hKdmx+lZTVJDwxQdDavUpWUIZLNZRgOFl65d45W7q2w3OxSyKZ4+8yw/cnKGJ44t0I56KCmFn/vJz2PIOi+9e42rpW2GE0lGdIXZYpYjC7MEeOiqTmFohJ29LVKbBVLJOI7TRy+kMHQVRVBI5wo4fplOp8dkMouqadQbLbYlEc/qoyoqiqTgexFzE+NI5SrfvXwBV4Sg3aEm7zM/PYwvSIOJMsc5GPAcLMERZYkfdMnRwfTPoCm1jGoMUltZkjFN8yDiDx7zUJ9dUSUazeb7biqVSA6GRc0YrVoDRVaYnJykWq3iBT5+FJDN5Nlb3eTj5w4xUUhwcW+TJx85NpBK6nl4dkDoeZS7g577aGaIB+U6/9edNVZW72NIAj/7yWd57tRxikaMzHAeTAPDVmmWm0xPTfF3/9Zfod/7l9y4uUXVb7ASwuvbZc7UWzwzPk3GjKg3NhDlDXqtNuOjY4ykR8nFRvn7/+7XKVe2+OyxY/zBnQbbvsOHDJV9xSVQFWzPRwl1LET2GmVm4kkE3+edag1r1ycZS9Jz+mB3iHQdU9Ix9QTVXgPP9VB1AzESDsbXfoDLkkSJwA949PxjZDJZ7jy4B9KgbonH4wcrkEI0TcP3g8GaowM3pMjyoFJPZ0glk1iWRTqdJgxDms0mnudhxEyGhvJsbJfJpWIsHlrg9vUbDI+PETMMpNBDTZj0Ox3WHqygKhK5kVHu7VX48vfeJIip/K3PvsBnn3qGmCKy3y4zfXqa3Ng8O5t7RIJCWomx3+xheTYf/cxnMIq3Wd5YxxdF+rbDyuou/a7NZ555kqhdZ3trg72tB5w4fpLJmTkuXbjAF7/xKjFRYHl9G6thU2228AWBmGbiOB6+FBDJCpvlfTZLW8wcPY5jO2yW9pmdXSCQLHZ2e7i+R6PZ4tDCGOl0hmq1QXiwOSf8f7DCRxalwfTUmTNnOHfqFG9dfAdCkBSZXrdLMhWn1+3R6XQQhIGFBWGgFCQIAr7nkcvlEKXBtp2YEaPdaRJFIYnEQDNFEEV832Ph0CHuP1in2u6hGDKX3rvGZ55/ElWT8K0IMxZndm4BrTDE//qffxPFUPnC3/9bHD15ji9/+UvsN6q8+CM/TGFikgtXl2g0e7g9i8DzabXbtHodzEya7NETjIciYbWGaKbotzvcrTaw3nyDx4pDHD5ylNB22N4rs1lp8NqlKziuQ0yR8X2XmZEiyw9WuTszzeRIEWoNEEXu7m+zsrXGRCpPMhbH2SsThRH5fJ5Sdfkg8REol/c5ceIsqVSKMApxXQfdMAdZqiDwg8wiPlyAtbS0xOHFRYrF4kMxRjrdLoZuIEkSzWZzQDgTIAzB6vdxPZdz5x5hZHSUdquNpml4nku308U0TYaHhxFFgZUHK3S6bdKZDPfW1kkPjbJXa2DG4xgxHcvq4Ac+2VSaXCZLs9lmpVTjEy+8wGx6lH/4K/+E1+/eZeyJp7lT6fKr/+r/4l/87/+B3//qN3mwU2a/bVG1XPRckYvX7zCcKfLZz34OIaZx/cESLacPAmxWOnzr9goXV/Z4UO/z6q0V/tt33+JOw+ZDZ+f4Oz/6Uf75//Sz/OxnP0roBVxaW8ULBEwkCtk8q9USa/sdDk3P4IchHavHcHGI6GDYc3JyAlWRsSxrMPEriUQEA+ndg5JAEP6cExIGAzrnd195hb/6Uz/FiRMneO/GNZrNJvHhUfr9PoZhUCwW2dnZGcysK4MNbv2+gyhAaW+PVqdDIZfj/r1ldEMlFosdDMgrFItFnJ09bty6yeTIOJVWl9tbJX7+L36WRFyiWqmiCyKiBO1Gjds3bnI0E6fdafLX/+2/496dB/zv//pfMzp/iL/5y7/MervO5z72UWZHx9FkhbnpGbpWj5bV4ynTxGu0EPIJfuiv/ATDl96l2e7SbnZ489J16o0Wr95YIiQcbFQTJATVYDKXYK6QQIu6zMRNRrImd0t7fAoRaSABTse1EWSVubEJ9ss7zB5eYFTQuXV3GUM3GBkZobS3R69ngQCSJAPC+1snROFAC/YHnBF5IA07YAZ95StfpTg2zNTUFKtrq9iOja7rOI5DKpWi1+tRq9WR5UGfQpFlbt66xchQkfmFBRqNBo16nUOHF3Bdl1arRaFQYG5ulrXtXRzbZnr+Eb79vdcJAMcLEAURVdNJxeNk81mSusLhYo4nDx3itTs3eWDX+cs//9M4kc/tG9f5xIefIz5SZHxsiE69jibKCDi0m2Vs32ViYoig4LK9u43vh5x/5AkUScLpt5mbmeY7r79Ds77PyOgwYRBgWQ66keTNe1W2VsvMDCd55NA50tksO9t7hN6AoO32bURFIpmQiUsaS/0OhcNHiSKDb37nZQTFwDDN99sWgnDwE3EgVxKEg21wRD84qAsCeN5gPuGbL32LJ59+itGREaqVCq1Wi5GREarVKtVqlXQ6jaIoOLaDEpfJZDJsbmxy6sRJisPDrKysMD0zTSabwXVtMpk0M9NT2HafXDLG2WfP49h91nfLxDWDW3eXcEeSmOIA5q83ajiyROD7uD2bs8dP85EnTyOFAu+trZBNpjj/+GmCdp/VzQ3MVJzhYgHH6iNLENkOYhQQGSIxQ2N/q0Il3CaRMNmv7TJRyPLXfuwvIEgRI+MjPHiwQqfZY2F2nj+5dI/qvTtsWR0WIoXpqRmWS7vcW1vh5PQMhqxQTGcod0uU90uUajVSRHStHtV6i0xOQRbA0FWCcNCmiKIBUdv1vAOBUZkojH5wDBmc24Hd2pbFlWtXyWdzTE9O0Ww26ff7SJKEbdvvp2wPdTq2trYIo4hkJs3O3i4BEcWxUcIoIpFIMDk+itVu0a5X+ehT50jrIpevXMeMxzh+6ghNx+ZOqYmm6gNFAyQ8xeTdlXVeur+CeegYWyWLl757ASHSGcqPUGu2aIY2hpEgnciTy48QCQpRKHPm2DnOHTtHvdSgVNonmYmjmAojkxMUhyaIQglFkTHUOFbbI3QVqvU2a1slhlSfodEMU0dPshXaJA2VZxYP05EEuh602m3GZJnTsxOo2RiODTFBpN/rEDCAmvIJDUMWcYKIgABVV4GIIPSRZQlReFjh/YAY8vCGYej4/kBy6aGrUVUVy7K+r8DseURRgCgOdAIdx0VRVba2thgeHmZ+fv79GiaTydDudOh3uszNzTIxWuCdd97Fsno8evY0Z86e5e03XiNuKMQ1hWariZZIs7Zd4vrGHk+ef4Rep0J1d4uFsQxPnj2Gogy2MkiCwH67yxtXrrIwNzf4YoQhrijyle+9jC256JICmoqniLxy5R2mjx7GTOqDRWOqwnZpl1qrTrPTwvFcFNmgWq5g6Bob5RJer8vR+UX8ZgNJDqk0a2Rkk/zEJBtdi5obsrNfpd6ygAFWNTI6xuKRQ7x16fpBET2IF6qiHqyScv47Dtaf4bJEoihkbm4O13W4f/8BDx48OGjPZnEcB8dxEUVxIKGHgGXZSJKEqiqoqsLq6iqappFOp2m0GxTzucGai8BDUVXiMZNytY6oqhw7eoSJqRnCwCebLyAQUqvtYyQylC2HS8ur2IrIueefJgo8hoeLHD12gqbl8M2Xvs7m5jbj45OMz06xdO8+oijT7/eJmSar61v8+n/6LT7zQy9wdO4wK3fvsVve5/ryPT4SfYYT84fRdI1Wpz2orXQVVVVIppNEVkA6maLeadNwLELbplqtYfoBWsqgU3GYTQ3RaFr81qW3OHH4LFEgU6pUAZFOp4uiyDz95HluL6/R7Xa/z9IVHmZY4gHC8QOgE0kSCEM4dOgQvu9x//4DdnZ2BpNPicTBhKiAruvv78cVReF9VgoMNBkfnqRsJksQBKyurTEyVCCVzxMEAZV6EySVkeEiRw8v8PKrr9PudEEQEBsNikaKnUaNcrPDhz7+MfJjY1x97z1kOc4rF2/yYGWN1996h3anx+hEi6cbLWIdG6UxqEXkfojgRDw6Po3e9aDRpVeqcuvd92g6Lhe+9m02Rm5y6sgRQkHA9VwWF4+QTCS5e/cumViG0ZERmn4fQZWourv4yCixGHdWViAUkDWDd999l54vocUS3F1eoWFbIOv4vovtOJjmQE3bcQbNKeGg6ReG4Qfm0X+gyxo8SNd1stkRpIOdsZZlHYCLEpl0kkQicaByE6KpA1WCwPcJowhN05BleaCtJcskikVcx0FVVaamppCFwRhXs20R00QC38V1bEIEtrb3UOIKQaOBL8gcP7bIM08+w43rd7l9d4P80AirDx5w5869AYlbENndesAXtx4QNwSu7K5SbgymWFUgn5Qpba3yXixJKpfh9OkT1Ko19rZLWJHEmiKTTmVod7sUUlmCKKJRrpBeyNBqtNBiJtlEGivWQTYMNmpV7t+6yl/62KfoiAIX17d5/oc/yvzQOL/93W8jp7MgSciiSrvVprq/h923UFV1wGaJIqIwHOgqCuKBUX4Q2nsQY1qtJqdOnyKdSVOrNajVagRBwOjYKKIooWraQeYAnheiKCKiqmL1bQhCtne26bQ7lPfLJE1zUL2LAs1Gg0pph5rlUK23WJweY/XBMmIUkEomWXqwQfbYcVRCvH6XI0ePYjebVEpNhnLDxJSQwGmTS8g8duQIhiyiawrVRh8v8JiaHEGRFOKmQTwWp9vu4HUcvvveVa7ce8Ds2DCHx0Y4qsTwAo/tlTXu9pdRFZFeo8Xk1BRxWebdK5eJEMhmMkyMTSILEu/dukU/8DBjedyazatrd7BUeO6xx8iKcVzPp1ltIEgGPrC1uYEiga5rqKp6oDwaIcvy+9r6f94pkYWDyVtZlBjLF8ilBgZxbJvIDzCVgUKpLIgMDRVYurNEEIaEEaiKjC5LCECv0STwfDp+wPrWFvOzM/Qdj1tL93D7PXxBxHM9urZHtdEmEGVMU+Pw/CSSptHv9+n70AsEdh+sYls9ssUCdrPKyXiW8akpkpMFUkM5js8tEtkOt27cxHM8RkdGWTh8mGQ2O1BXdUNeWL7N7aUlLl2+Tq9eQU+PsFdr0hFc3MClY9ns1+vsNtsMjU7QcjxymTTNdgffXcfxXbwoIBuPc2J0nNfvXme5WmJ0JE8+O8zG0gM6YYhuSkSRiyRAqdYklU4NlpCJ0kFhCLKsHCw6CBEOmFd/9gk5uKEqKr7jYR+0cF0vYDiX46nzT3Lj5g2CA2ggm8lQrTeIDtgqAuC7AxBRVxRansduqUSr3eTJJ85jxGN0e4O1cPlcjna3R4SA64eoYcjMxBgEPs1Om8nJGUQtRqm6QbvVJsBnSJWZzOWRcdhaX6Xr9kkFJulcnHgmTqtSZ2XlHsury8iGzvD4KIVEkvFknKknHuHczCRLK2s4ocQRaQJJE6HTpb5XoVxr0RFEHty+SUMUqFWrRF7AzNQUiqYST8RRBahWdri5vUdxJMfh2cPcW17h7XfePvicHAxVJZNOESDghwKargODIH4Q1g8KxoN/i/w/3yD1eo2LFy/SOeA5mbrOc888w+OPP87Fy5cQZZl8vnDwy8DzPUQiREkiiDxkRcHQNVqVCm3HpdFoUSqXOH78OJKm4PZdCAW6vTaKoiCJgwRBkmVczyaTyZBKxel12zRqdWrNJhlTpainkBTo+yFuEFLZr7PT38Jy08TSCQ4vDmO1BwhCrd5g4+4qdVNCUXXyQ0WKxWGezKRxu00sy0aVNDA71EORcHyKGj6/v73HarUDQD6bpDA8RCwWx93YYHX5PuuWxYnFec4/8QTNrsVrr77GezduoGgDfUZZUUil0rhOn16vSyqVwvc8Wq3m+x/090/Hn1uHDB6wu7vH3MQUmUyGRq/HE48/xosvvsjNmzfZWN/gyLGjB9TLgdxpGAR4UUTM0BEF8DwfVZYopBOkMzk2d/a4euUatuuSzedJmnHCIEDTNKIoIl/I0+128DwP3/dJJuPUajVkWWF2dhr3wSqGLKGFNvWOha8oJLJFNFkFL6LeaOMKEZILmqSRy+bo9Wx2S/ssdRrcX9lEMWLkc1kOTQwxPRQnCmUMNUFQr9PYr4KqsePamLkYC5KIF4KRSdO3LArFIQzNoNmySCUM/trP/Qxz0wv8b//m3/BgZQ3PDTBig8XNsiSTSCZoNTxqtRr5XBYEAdu2kSWNeDyOJElEYcQAzP1BQf39E1Ln+vXr9Ho9crkMsiIjSRLXrl3D6lvMzs6yvb1Nu9Ue6MyKwgBKPlh9J4oicTOGVd1n7ugIpixzdWmZK5euIKkyYyNjHF88iusN8DHDMGg2GwPlh8Ch02lz9OhxbNuhVq1yaGGenCazun4XNxDZq5cojI5yenERqe/R9x26bQu/6yFGAu1eD0GSmTl+HKHVoxwadPsOq/UGF67fQpdhYXoSXYmRUiWGcxmcIMBSDRYfPc/hrsPVWzchZqBqKo1Gi82NLQxF4djiApbr8vbFi6xtbdG1LJAF/MBHFEQc1xl0VIloNpuMFIsH/aPB6otUKkUUQeBH75NI/kyDhAdcU8vqcevWLZ5+7lkef+YpLrz1NhcvXaJSqVDIF1hcXOQP/ugP8cMB3iIJEhEhnuuiqgp+4FPI51BlEcmyOTQ5xfr6Fo2+DX6E1evR71vIikQsFqPRaNDr9QYgZLPByMgwhqGxvr6GKErs7m5zs7yP6Lkk4hlENUGl3mV5ZZ2kLjIyXCSVSFHer9Bqt4llMoQqLK3eIz86xXMffpLp6SkiBN69eJmlB2ukZInWzi5eUkcpZhFdFzOSSJpJgqiPEoZopsH09CQr6zs0mm0WDx3m85/9HEv3lrly4wbdwB3Iw/gD/rPv+YgHhV+/b2PbHumD7c/9vo2iDFy8bTsDLOv/Roz7v1+iIApIsohtOxQKBRzbIWaa/KUf/VHefvttbty9y/mnnsTzPEp7e8CA96tqKhEC/mBdKJ1en1azxbGFw+STSXJmnMWZWSQGbI7R0THuL98HQUDXDeq1GpIk0Wg0GB+fQJJkbt26RRCEVKtV7ty6xfDEBEIuTysSmD1ykngizb3VFYxsCi8IePfdS/T6fcbnZnnr6mX+yxf/gLbvEtcgl5DJ6AEpPeAjz5/nIx9/nsVDC5w6NMdIIUPkdIlLEarVQSjtIboOMUOn2Wiwvb3DxuYG8XiMdDKN03co12ps7peotdt4novEgaim5xOPxSgWhwek7YiBSqksvy8nG0XRgBIkSwfaWH92HBGjIMIPAvwwpNpsUNnfR7I8lm/d4eb9exxamCObz/Ktb79Evd7A0NWB1IQgICvqYLOMpKLF4lxfWWOpXhnorO/v8+j0JEOGhivD/LHDBAjcvLPE3n6ZWCxJ6INjeSBq1JsWjXoXUVSxey4f/+gnef780xwfGeHY3Aye36fW7zA8M0NkJFnd3EE1TUbn53nl0nu8ce0+2bEFhscXSGpxJsbn6Flw794mjXKd9auXKdtdWok0iShOsq8SWgGBLOIqArGhDPGhHPudDjv1BolMhqceO0u/3+bLr3yPpfsPqJXq+D0XRVCQJRVBDA6+/S6pVI7i8MTA7WgDQlwQBLieh+d5KMqgUAzDHxxDREEcsIREUcByHFzX5bU3X+c3/st/JpfNcObMGTY2Nrh27Tp+EKDIMp7vvU/8EsWBVq1jOyTMGOValXa3R3jQqjx2ZJFeo0OtXGFubo7t7V3W1tdIJpMgCGRyWarVKoZhEE8m6FsWs3NzyLLM8vIyh44scuzoUTzXY3RsjNGJcb790kts7JcpTE1z+dZtvv3qO5w9e4af/emfZnV5DUHV8SOJ1y9cRNZNaq0u8XQeq+/SaXfxRAF0Fct1UM04SizO1WvX2drYwdAMkkachZlZ8uksE2PjqJrK5ubm+yCrKIqI0gdH0QRkWSEeTyDLAqZp0Gg08XwP0zCIokHsiA7EnH/QCZEEQfiVKByQ3yRRoNVus7W1heO7DA0PE4UhN27cotcbpMOCIKBo6gBwRMDQDVzXJQh8xkfHkEQRQ1UxZJkwCklmM6xtb3N/ZR1ZGiw72SuV6FoWU1OTuJ6HIIIiy6xvbJBKptgv7XH9xnVOnTzJ7NQEHctGVjVURaZS2kMSQmaPHuP2yhpf//arTM1M82M/9uPcvXufq+9dJZXJsrG9x+r6JoWRMV554y1SuSHKtTrlUglDlQkDn3yxiGzEWN/e4e7SMsXxSSTDJJFIIoTQb7UYLhaww4Dl+yuIooiiDFJdSZLxA2+gCK4bHD50FN/3aTTqHDm6SKPR4u7SEkNDwyiKSnjAf5NEkSAKEAUJogFNt9tt0e11Du4XhF8B0FQFRZHfF0KJxePs7ZepVCs0m20mJ8ZZWFhgc3ML04wd9L0GBDrxAKwTRYEwDJAFgeF8dkAWU2QkBDb3K/S6PRKxGI7r0Wi1yOWytNptMukkq2trpFJpMtkMW9tbTE/PsLAwT2V/n1CQ0M0Ye3u7qKrERz70LKNzC6zvlJiZmeZzn/0ciqzwysvfI51OoZsxLl29QqvbxQ1CtnZ2EQ5UQUM/wHb7rKytksrk6Hs+L71+AUSZZz/yAg/WtwgFgaFCnmQsxoOVZV57513svks8bhKPx3Fdl8G6wcEJkWWd+fl5DMOg2+2QzaTpdi1WVlbIZfOoqvZ+kSgcSEUJf5ZBBAbLibOZNIqq0rX6CNKAHCwc+MeZ6SkmJsYZHx/Hsvrs7ZUG2MxBHyBuxhFFkWa7Ra9vIwswPlxEEUX6PYtiNketWqNhWSiSNJhZ9zw63S7D42P43oAxeezYMRqNBslkkiNHj7C+ukKjUcMNIgRJxDB0Hjl3mjDw2dre5ciRI0yNjxOLmVRrFRRZJJ/PUigWMUwD13NxPJezZ8/Q7nYI/YHakZo02drZYne3hOWGbFaqiJqKj8D120sMj46zsDCH4/d55bXXaHX7yJKA7wcEwQDJjcXiyJKI47hoqsHx4ydIpdL0el3CMMRxHNbX14knkhjGYL3RQ+7zoMf+fYN0ui16BwYRH4JdiqKQymQQRYGACEEcTC+pisT/+D/+TZ5++mkkSeKTn/zEQM7bcQdBy3Ho9roYhkE2ncEDtspV7i0vYxoquiRgiiILC/PomoHdt7GtPoEf0Oy0kRSJvVKJZDpNuVKh2WpixmLcvnMH3TSYnp1mefk+u3t7pNJpwigazBdqOqcPHaK2t8Pu1hpHj8yzcGSGRMagXN5jcmKMI4fniZs6hqEhShGmrqMaMfRsmkOnTmLGk0SCwvFzjzJ5eJGq1SM7PIyRTLC+vcW3X3mNRtcmlTQ/8GEOJEEGzbpBLIjF4hhGHBCIxxKk06n3KblRGGHoA/7wwxjyfgQR/rsfgxgiCfxKxCCn1mQZ27Xx/YAwjHi4BVSWZD7x4ifY3t5mZnoG3TS4u3R3cJ+ivN/eTWcymIqCZdvU2m3MeIxMMovsQiaVpt1tUW42keM6kSwSehFu32VkZAhNVQfBXdfJZDK8d+kyp0+fZqgwxN2790kkEtTrNSr7+8zNzrKwcJjt3R3uL9/j2WeeYWpygtXlZSYnxpgYn8TqdPB9//0JXrtnkU1nKAzlabTqZFJpxicmBnK1MZ3hYpH8UIFMNkO5vE+ptMv9+2sI8mBe3/cDkskkhUIBURTxPI8w9PD9gFyuwPHjJ2i1mgShSzKVYHl5lUqljCjJuL5HIICqD2hSsjQgG0bRoKD+705IcMBMUSUJ/ADf8Q6UmAcFnKZqfP2b3+Q3fv03+P/2dia/bSRXGP9V9UI22Vwlmtpsa0Rbg1mAmQRZEMBzmByCOehvDZAAnhhzMOYwQSaOB4ojeALYki3RHomUKK5NdrO3yqHYFA3Y1/SRZFXXylf13ve978EfHiASGPT6mJa1XCHSMPDnAVdXV5RMm1q9gpcovv/3c/7bPic28pQNg1/t7lAr2PhBgGlbCCW4eNshmM8ZjcdIw8QwLQb9IY5ToNO94qdnz9neuU04n/P2TZtavUG53uD1xS+8bJ/phAKGASnc322xVW/yyb0W27ca3NncpHX7Ds3aOtuNDTabDbaaa8hZQBLMKTfqeGlA//oc25Ja9smfEM1n2JZFPmeikiWNg3ze4YsvvsRxHJ1PfpEivOg6mIZkNvMQIuX6+orZbApCMBz0aJ+dMPFGOCUHM2fqlIPZJhHc2Bch9CkLBeVSiYJToDcYagqc1AK8Umhy5PHJsVYBkIJvHz3St+6Foczo0mEUEaUxJbdEMZ/D92Z0ri4ZxwGNW3W2Gw3mvk/3so9MEqIkwakUuX+/xeHhIY5ToHnrFt1Ol0q1Sr/fpz+4ptFo0Ol2kNLg888/w5tMOD45IY61tITW7x0wn0esNdYJplPG4yGGNOgP+0TzOVEUYJo2UZgwHIwwDAsU+J5PyS0zDeZ43pTziw7CMEhSxflFRztCDYMkSTg4OKDVavH48eMFpUCPx29/8ztct8zEm+h0HcMBvcsLKk6BjWoNGSVMhgPiOMJx8hoZamrMlpRiuUP0PcSQy/+xguNQrZYhVSRhTJImKDQAwrJt/vzXv/DkyRO2t7XUQjYZUsplzH3s+xq7hcFavUooBEdv2nz/r38ym075/Ze/Zm+tRhylWKZgvVkj7+QZj2ZIw2QeRZx3O5imiR+GeLOAq36fe/sfs7Wzw9Hznzl89oyfX7xkMguwnSLStPnxyU/87bvv8KYzfN8jiiNs29IyEqTk8nkuL7ucnrxio7mBaZi8OnmFW3Qpl8p0Ol38IGA4HnN88ooXL46Jk5RUKXzfp9VqcXBwwNHRkXYaWiZxoiiXSmxubjIej5GLmHl/0GfUv2Z3s8lnd3bZ39ikKAUX57/wpn2KH/jEsQaMqAz2c3NT10e3MNSZ/KvVKtW1CmbOIgwjwihCLtIjmYbB4X+eEYYRlUplCQrLmLoKMHI5ZkHAaDTGcVzqzTrkBe3LAY/+/iOhgm/+9A27txqEkeKqd80PP/wDp+iwv7/P6WmbdvstwjQplSukgGnn2Ll7l7sffcTW7R3Wmxu4lSpWoUCn1+PtRYfeYIiVd5B2jt5oTPe6z/V4TM4pUKmvYTlF/DAmVoJUSMbelFkQUnTLNDe3sfMOne4l5xdd+v2RTtSZyy2H6sFXX7G+vs7Tp091BFBIpFC0WnvarghJrVZbfCeQhgapT7wxxZLLp59+wkajynQ6pd0+w/MmGKbEti0tCL208wZKKCjm8tiGiTIlsVKEcUwUxaRRhOu6CLQ7OY5iTEtHwjJXgJRy4e0EpIGKI0wFxYKDsAzG8xlECUkC97a2uL/X4sXJS04vOvpGrxSlSom91h6nJ68JgoCP9/eXtsV1izTW1piHIQUnj0pjPD8k7+SYjCcIlNY/qVWp1euMBn18f04uZ5Eilzsv8H1s0yROU2YzHyEFrutSdF3Ozl7T7WoKtjQNVJpi2jmSOEElEV9//Uccx+Hhw4fYtq3RI0nEnds7bG/vMhp6C4KOR+/6ijjwqZdLxPMEkJhODi/wGQyHzOcpJbdMLu9gmSbedMTEG2n8L1LvmgygFa8ex4QAKVHL7AM3T2bQ3/lcsQzkqzReBisNIBGQ2jYqjG5o2KDpwhk9WGUXJ3VjSf/Pj1jmMNaLizRZKuC8s/jUQl3nA89C4egD75CLpGVZHzX2N3MEq2xgV3+i9KivpN1YmYis9Ad6lHk4szJZvUrK5SRlQLKVBtyc0Vcme4mEFVkbxE0bMsjlSvuyMu9bMO+4vtVN44TQcoGg3tutVbJSmqYrdesKMsyVfke66FfGRl8dPPH+hYzSDlsF/wPVpD0WMPxZGwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wOC0wNlQxMToxODoyOCswMDowMKaa+zMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDgtMDZUMTE6MTg6MjgrMDA6MDDXx0OPAAAAQ3RFWHRzb2Z0d2FyZQAvb3B0L2ltYWdlbWFnaWNrLTcuMC41L3NoYXJlL2RvYy9JbWFnZU1hZ2ljay03Ly9pbmRleC5odG1sZw1Y9gAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMTIxOqD5JAAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxMjGpUal5AAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1MDIwMTgzMDhYVGW7AAAADnRFWHRUaHVtYjo6U2l6ZQAwQslvGO0AAABIdEVYdFRodW1iOjpVUkkAZmlsZTovLy90bXAvdmlnbmV0dGUvNWI5MjUwMjktM2FhOC00ZDMxLTkwNTEtYjEyNDBjZTIzNmExLnBuZ+8EHa4AAAAASUVORK5CYII="

/***/ })
/******/ ]);