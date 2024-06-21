/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Board/Board.css":
/*!****************************************!*\
  !*** ./src/components/Board/Board.css ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.app-board {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  gap: 4px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Board/Board.css?");

/***/ }),

/***/ "./src/components/GameTile/GameTile.css":
/*!**********************************************!*\
  !*** ./src/components/GameTile/GameTile.css ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.game-tile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: var(--gameTileSize);\n  height: var(--gameTileSize);\n\n  border-radius: 0;\n  border: 1px solid var(--white);\n  outline: 0;\n  margin: 0;\n  padding: 0;\n\n  color: var(--blue700);\n  font-weight: 700;\n\n  background: radial-gradient(circle, var(--blue300) 0%, var(--blue700) 100%);\n}\n\n.revealed {\n  background: var(--blue300);\n}\n\n.exploded {\n  background: var(--red);\n}\n\n.game-tile svg {\n  width: calc(var(--gameTileSize) - 5px);\n  height: calc(var(--gameTileSize) - 5px);\n}\n\n.game-tile:active {\n  background: radial-gradient(circle, var(--blue500) 0%, var(--blue700) 100%);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/GameTile/GameTile.css?");

/***/ }),

/***/ "./src/components/Game/Game.css":
/*!**************************************!*\
  !*** ./src/components/Game/Game.css ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:host {\n  width: min-content;\n  height: min-content;\n}\n\n.game {\n  width: min-content;\n  height: min-content;\n\n  display: flex;\n  flex-direction: column;\n\n  border: 1px solid var(--blue500);\n  padding: 8px;\n}\n\n.game .game-header {\n  display: flex;\n}\n\n.game .game-tiles {\n  display: grid;\n}\n\n.game .game-tiles-beginner {\n  grid-template-columns: repeat(8, var(--gameTileSize));\n  grid-template-rows: repeat(8, var(--gameTileSize));\n}\n\n.game .game-tiles-intermediate {\n  grid-template-columns: repeat(16, var(--gameTileSize));\n  grid-template-rows: repeat(16, var(--gameTileSize));\n}\n\n.game .game-tiles-advanced {\n  grid-template-columns: repeat(30, var(--gameTileSize));\n  grid-template-rows: repeat(16, var(--gameTileSize));\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Game/Game.css?");

/***/ }),

/***/ "./src/components/Menu/Menu.css":
/*!**************************************!*\
  !*** ./src/components/Menu/Menu.css ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.app-menu {\n  padding: 12px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.app-menu div {\n  display: inherit;\n  flex-direction: inherit;\n  gap: 4px;\n}\n\n.app-menu h3 {\n  text-align: center;\n  margin: 0;\n}\n\n.app-menu ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.app-menu ul li + li {\n  margin-top: 4px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Menu/Menu.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/Board/Board.template.html":
/*!**************************************************!*\
  !*** ./src/components/Board/Board.template.html ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div id=\\\"app-board\\\" class=\\\"app-board\\\">\\n\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://minesweeper/./src/components/Board/Board.template.html?");

/***/ }),

/***/ "./src/components/GameTile/GameTile.template.html":
/*!********************************************************!*\
  !*** ./src/components/GameTile/GameTile.template.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<button class=\\\"game-tile\\\" id=\\\"[TILE-ID]\\\"></button>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://minesweeper/./src/components/GameTile/GameTile.template.html?");

/***/ }),

/***/ "./src/components/Game/Game.template.html":
/*!************************************************!*\
  !*** ./src/components/Game/Game.template.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"game\\\">\\n  <div class=\\\"game-header\\\">\\n    <span id=\\\"game-name\\\"></span>\\n    <span id=\\\"game-difficulty\\\"></span>\\n  </div>\\n\\n  <div id=\\\"game-tiles\\\" class=\\\"game-tiles\\\">\\n\\n  </div>\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://minesweeper/./src/components/Game/Game.template.html?");

/***/ }),

/***/ "./src/components/Menu/Menu.template.html":
/*!************************************************!*\
  !*** ./src/components/Menu/Menu.template.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"app-menu\\\">\\n  <h3>New Game</h3>\\n\\n  <div>\\n    <label for=\\\"nameInput\\\">Name</label>\\n    <input type=\\\"text\\\" name=\\\"nameInput\\\" id=\\\"nameInput\\\">\\n  </div>\\n\\n  <ul>\\n    <li>\\n      <input type=\\\"radio\\\" name=\\\"difficulty\\\" id=\\\"beginnerInput\\\">\\n      <label for=\\\"beginnerInput\\\">Beginner</label>\\n    </li>\\n\\n    <li>\\n      <input type=\\\"radio\\\" name=\\\"difficulty\\\" id=\\\"intermediateInput\\\">\\n      <label for=\\\"intermediateInput\\\">Intermediate</label>\\n    </li>\\n\\n    <li>\\n      <input type=\\\"radio\\\" name=\\\"difficulty\\\" id=\\\"advancedInput\\\">\\n      <label for=\\\"advancedInput\\\">Advanced</label>\\n    </li>\\n  </ul>\\n\\n  <button id=\\\"createGameButton\\\">Create</button>\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://minesweeper/./src/components/Menu/Menu.template.html?");

/***/ }),

/***/ "./assets/icons/bomb.svg":
/*!*******************************!*\
  !*** ./assets/icons/bomb.svg ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = \"<svg viewBox=\\\"0 0 512 512\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" aria-hidden=\\\"true\\\" role=\\\"img\\\" class=\\\"iconify iconify--fxemoji\\\" preserveAspectRatio=\\\"xMidYMid meet\\\"><path fill=\\\"#D0C9BF\\\" d=\\\"M328.965 140.508a7.322 7.322 0 0 1-4.947-1.915a7.353 7.353 0 0 1-.489-10.388c16.239-17.844 36.276-29.311 57.947-33.16c17.961-3.188 36.882-1.113 53.273 5.849a7.356 7.356 0 0 1 3.894 9.643a7.356 7.356 0 0 1-9.644 3.893c-25.471-10.818-63.695-10.281-94.594 23.673a7.332 7.332 0 0 1-5.44 2.405z\\\"></path><path fill=\\\"#384C59\\\" d=\\\"M344.472 183.587l11.735-11.735c14.059-14.059 14.059-36.853 0-50.912l-13.455-13.455c-14.059-14.059-36.853-14.059-50.912 0l-20.097 20.097c-22.701-9.815-47.729-15.264-74.034-15.264c-103.131 0-186.735 83.604-186.735 186.735s83.604 186.735 186.735 186.735s186.735-83.604 186.735-186.735c0-43.59-14.938-83.691-39.972-115.466z\\\"></path><path fill=\\\"#FFC145\\\" d=\\\"M453.976 104.663c0 12.186-9.915 22.101-22.102 22.101s-22.101-9.915-22.101-22.101s9.914-22.101 22.101-22.101s22.102 9.915 22.102 22.101zm-13.768-37.258V39.952c0-4.603-3.731-8.334-8.334-8.334s-8.334 3.731-8.334 8.334v27.453a8.334 8.334 0 0 0 16.668 0zM411.422 84.21a8.333 8.333 0 0 0 0-11.786L392.01 53.012a8.334 8.334 0 0 0-11.785 11.786l19.412 19.412c1.627 1.627 3.76 2.441 5.893 2.441s4.265-.814 5.892-2.441zm-19.412 72.102l19.412-19.412a8.334 8.334 0 0 0-11.785-11.786l-19.412 19.412a8.333 8.333 0 0 0 5.893 14.227a8.306 8.306 0 0 0 5.892-2.441zm48.198 13.061V141.92c0-4.603-3.731-8.334-8.334-8.334s-8.334 3.731-8.334 8.334v27.453c0 4.603 3.731 8.334 8.334 8.334s8.334-3.731 8.334-8.334zm43.316-13.061a8.333 8.333 0 0 0 0-11.786l-19.412-19.412a8.334 8.334 0 0 0-11.785 11.786l19.412 19.412c1.627 1.627 3.76 2.441 5.893 2.441s4.265-.814 5.892-2.441zm21.395-51.649a8.334 8.334 0 0 0-8.334-8.334h-27.453c-4.603 0-8.334 3.731-8.334 8.334s3.731 8.334 8.334 8.334h27.453a8.334 8.334 0 0 0 8.334-8.334zM464.112 84.21l19.412-19.412a8.334 8.334 0 0 0-11.785-11.786l-19.412 19.412a8.333 8.333 0 0 0 5.893 14.227a8.306 8.306 0 0 0 5.892-2.441z\\\"></path><ellipse transform=\\\"scale(-1) rotate(-23.727 -887.14 658.215)\\\" fill=\\\"#80878C\\\" cx=\\\"138.274\\\" cy=\\\"186.373\\\" rx=\\\"57\\\" ry=\\\"35.419\\\"></ellipse></svg>\"\n\n//# sourceURL=webpack://minesweeper/./assets/icons/bomb.svg?");

/***/ }),

/***/ "./assets/icons/flag.svg":
/*!*******************************!*\
  !*** ./assets/icons/flag.svg ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = \"<svg viewBox=\\\"-4 0 32 32\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M2.90918 16H13.091C13.8943 16 14.5455 15.3488 14.5455 14.5455V2.90914C14.5455 2.10581 13.8943 1.45459 13.091 1.45459H2.90918V16Z\\\" fill=\\\"url(#paint0_linear_103_1577)\\\"></path><path d=\\\"M11.6367 16.0001C11.6367 16.8034 12.2879 17.4546 13.0913 17.4546H21.8185C22.6219 17.4546 23.2731 16.8034 23.2731 16.0001V4.36373C23.2731 3.5604 22.6219 2.90918 21.8185 2.90918H11.6367V16.0001Z\\\" fill=\\\"url(#paint1_linear_103_1577)\\\"></path><path d=\\\"M2.90909 1.45455C2.90909 0.651222 2.25787 0 1.45455 0C0.651222 0 0 0.651222 0 1.45455V30.5455C0 31.3488 0.651222 32 1.45455 32C2.25787 32 2.90909 31.3488 2.90909 30.5455V1.45455Z\\\" fill=\\\"url(#paint2_linear_103_1577)\\\"></path><defs><linearGradient id=\\\"paint0_linear_103_1577\\\" x1=\\\"2.90918\\\" y1=\\\"7.37793\\\" x2=\\\"15.1535\\\" y2=\\\"11.2961\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#FF6200\\\"></stop><stop offset=\\\"1\\\" stop-color=\\\"#CA3F07\\\"></stop></linearGradient><linearGradient id=\\\"paint1_linear_103_1577\\\" x1=\\\"11.6367\\\" y1=\\\"2.90918\\\" x2=\\\"25.8274\\\" y2=\\\"14.2617\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#FF6200\\\"></stop><stop offset=\\\"1\\\" stop-color=\\\"#E84909\\\"></stop></linearGradient><linearGradient id=\\\"paint2_linear_103_1577\\\" x1=\\\"0\\\" y1=\\\"8.65061\\\" x2=\\\"2.90909\\\" y2=\\\"8.65061\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#E4E4E4\\\"></stop><stop offset=\\\"0.999997\\\" stop-color=\\\"#C2C2C2\\\"></stop></linearGradient></defs></svg>\"\n\n//# sourceURL=webpack://minesweeper/./assets/icons/flag.svg?");

/***/ }),

/***/ "./src/components/Board/Board.ts":
/*!***************************************!*\
  !*** ./src/components/Board/Board.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _utils_set_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/set-attributes */ \"./src/utils/set-attributes.ts\");\n/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/load-css */ \"./src/utils/load-css.ts\");\n/* harmony import */ var _components_Board_Board_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Board/Board.css */ \"./src/components/Board/Board.css\");\n/* harmony import */ var _components_Board_Board_template_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Board/Board.template.html */ \"./src/components/Board/Board.template.html\");\n/* harmony import */ var _utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/get-from-shadow-by-id */ \"./src/utils/get-from-shadow-by-id.ts\");\n\n\n\n\n\n\nclass Board extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.subscribe)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (!this.shadowRoot)\n            return;\n        this.shadowRoot.innerHTML = _components_Board_Board_template_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n        (0,_utils_load_css__WEBPACK_IMPORTED_MODULE_2__.loadCSS)(this, _components_Board_Board_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n        const board = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_5__.getFromShadowById)(this, 'app-board');\n        _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.games.forEach(game => {\n            const appGame = this.ownerDocument.createElement('app-game');\n            (0,_utils_set_attributes__WEBPACK_IMPORTED_MODULE_1__.setAttributes)(appGame, {\n                'game-uuid': game.uuid,\n            });\n            board === null || board === void 0 ? void 0 : board.appendChild(appGame);\n        });\n    }\n}\ncustomElements.define('app-board', Board);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Board/Board.ts?");

/***/ }),

/***/ "./src/components/GameTile/GameTile.ts":
/*!*********************************************!*\
  !*** ./src/components/GameTile/GameTile.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameTile: () => (/* binding */ GameTile)\n/* harmony export */ });\n/* harmony import */ var _components_GameTile_GameTile_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/GameTile/GameTile.template.html */ \"./src/components/GameTile/GameTile.template.html\");\n/* harmony import */ var _components_GameTile_GameTile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/GameTile/GameTile.css */ \"./src/components/GameTile/GameTile.css\");\n/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/load-css */ \"./src/utils/load-css.ts\");\n/* harmony import */ var _utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/get-from-shadow-by-id */ \"./src/utils/get-from-shadow-by-id.ts\");\n/* harmony import */ var _lib_boolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/boolean */ \"./src/lib/boolean.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _assets_icons_bomb_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/icons/bomb.svg */ \"./assets/icons/bomb.svg\");\n/* harmony import */ var _assets_icons_bomb_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_bomb_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_icons_flag_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/icons/flag.svg */ \"./assets/icons/flag.svg\");\n/* harmony import */ var _assets_icons_flag_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_flag_svg__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nclass GameTile extends HTMLElement {\n    constructor() {\n        super();\n        this.gameUUID = '';\n        this.mineCount = 0;\n        this.row = 0;\n        this.col = 0;\n        this.hasFlag = false;\n        this.isMine = false;\n        this.isRevealed = false;\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        return ['game-uuid', 'tile-mine-count', 'tile-row', 'tile-col', 'tile-has-flag', 'tile-is-mine', 'tile-is-revealed'];\n    }\n    attributeChangedCallback(prop, _, value) {\n        const changedAttribute = prop.replace('tile-', '');\n        switch (changedAttribute) {\n            case 'game-uuid':\n                this.gameUUID = value;\n            case 'mine-count':\n                this.mineCount = Number(value);\n            case 'row':\n                this.row = Number(value);\n            case 'col':\n                this.col = Number(value);\n            case 'has-flag':\n                this.hasFlag = (0,_lib_boolean__WEBPACK_IMPORTED_MODULE_4__.isTrue)(value);\n            case 'is-mine':\n                this.isMine = (0,_lib_boolean__WEBPACK_IMPORTED_MODULE_4__.isTrue)(value);\n            case 'is-revealed':\n                this.isRevealed = (0,_lib_boolean__WEBPACK_IMPORTED_MODULE_4__.isTrue)(value);\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    onRevealTile(event) {\n        event.preventDefault();\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_5__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_6__.revealTile)(this.gameUUID, this.row, this.col));\n    }\n    onToggleFlag(event) {\n        event.preventDefault();\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_5__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_6__.placeFlag)(this.gameUUID, this.row, this.col));\n    }\n    render() {\n        const tileId = `${this.gameUUID};${this.row};${this.col}`;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = _components_GameTile_GameTile_template_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"].replace('[TILE-ID]', tileId);\n        (0,_utils_load_css__WEBPACK_IMPORTED_MODULE_2__.loadCSS)(this, _components_GameTile_GameTile_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        const tile = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, tileId);\n        tile === null || tile === void 0 ? void 0 : tile.addEventListener('contextmenu', e => this.onToggleFlag(e));\n        if (!this.hasFlag) {\n            tile === null || tile === void 0 ? void 0 : tile.addEventListener('click', e => this.onRevealTile(e));\n        }\n        if (this.isRevealed) {\n            if (this.isMine) {\n                tile.classList.add('exploded');\n                tile.innerHTML = (_assets_icons_bomb_svg__WEBPACK_IMPORTED_MODULE_7___default());\n            }\n            else {\n                tile.classList.add('revealed');\n                if (this.mineCount > 0)\n                    tile.textContent = `${this.mineCount}`;\n            }\n        }\n        else if (this.hasFlag) {\n            tile.innerHTML = (_assets_icons_flag_svg__WEBPACK_IMPORTED_MODULE_8___default());\n        }\n    }\n}\ncustomElements.define('app-game-tile', GameTile);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/GameTile/GameTile.ts?");

/***/ }),

/***/ "./src/components/Game/Game.ts":
/*!*************************************!*\
  !*** ./src/components/Game/Game.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/get-from-shadow-by-id */ \"./src/utils/get-from-shadow-by-id.ts\");\n/* harmony import */ var _components_Game_Game_template_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Game/Game.template.html */ \"./src/components/Game/Game.template.html\");\n/* harmony import */ var _components_Game_Game_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Game/Game.css */ \"./src/components/Game/Game.css\");\n/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/load-css */ \"./src/utils/load-css.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.ts\");\n/* harmony import */ var _utils_set_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/set-attributes */ \"./src/utils/set-attributes.ts\");\n\n\n\n\n\n\n\nclass Game extends HTMLElement {\n    constructor() {\n        super();\n        this.uuid = '';\n        this.attachShadow({ mode: 'open' });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.subscribe)(this);\n    }\n    static get observedAttributes() {\n        return ['game-uuid'];\n    }\n    attributeChangedCallback(prop, _, value) {\n        const changedAttribute = prop.replace('game-', '');\n        this[changedAttribute] = value;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = _components_Game_Game_template_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        (0,_utils_load_css__WEBPACK_IMPORTED_MODULE_4__.loadCSS)(this, _components_Game_Game_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n        const game = _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.games.find(({ uuid }) => uuid === this.uuid);\n        if (!game)\n            return;\n        const gameName = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, 'game-name');\n        if (gameName)\n            gameName.textContent = game.name;\n        const gameDifficulty = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, 'game-difficulty');\n        if (gameDifficulty)\n            gameDifficulty.textContent = game.difficulty;\n        const tilesContainer = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, 'game-tiles');\n        if (tilesContainer) {\n            tilesContainer.classList.add(`game-tiles-${game.difficulty}`);\n            const { rows, cols } = _utils_constants__WEBPACK_IMPORTED_MODULE_5__.GameLayout[game.difficulty];\n            for (let row = 0; row < rows; row++) {\n                for (let col = 0; col < cols; col++) {\n                    const tile = game.board.tiles[row][col];\n                    const tileComponent = this.ownerDocument.createElement('app-game-tile');\n                    (0,_utils_set_attributes__WEBPACK_IMPORTED_MODULE_6__.setAttributes)(tileComponent, {\n                        'game-uuid': this.uuid,\n                        'tile-mine-count': tile.mineCount.toString(),\n                        'tile-row': tile.row.toString(),\n                        'tile-col': tile.col.toString(),\n                        'tile-has-flag': tile.hasFlag.toString(),\n                        'tile-is-mine': tile.isMine.toString(),\n                        'tile-is-revealed': tile.isRevealed.toString(),\n                    });\n                    tilesContainer.appendChild(tileComponent);\n                }\n            }\n        }\n    }\n}\ncustomElements.define('app-game', Game);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Game/Game.ts?");

/***/ }),

/***/ "./src/components/Menu/Menu.ts":
/*!*************************************!*\
  !*** ./src/components/Menu/Menu.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _components_Menu_Menu_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Menu/Menu.template.html */ \"./src/components/Menu/Menu.template.html\");\n/* harmony import */ var _components_Menu_Menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Menu/Menu.css */ \"./src/components/Menu/Menu.css\");\n/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/load-css */ \"./src/utils/load-css.ts\");\n/* harmony import */ var _utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/get-from-shadow-by-id */ \"./src/utils/get-from-shadow-by-id.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _types_minesweeper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/types/minesweeper */ \"./src/types/minesweeper.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n\n\n\n\n\n\n\nclass Menu extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    onCreateClick() {\n        const nameInput = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'nameInput');\n        const beginnerInput = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'beginnerInput');\n        const intermediateInput = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'intermediateInput');\n        const advancedInput = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'advancedInput');\n        const difficulty = (beginnerInput === null || beginnerInput === void 0 ? void 0 : beginnerInput.checked) && _types_minesweeper__WEBPACK_IMPORTED_MODULE_5__.Difficulty.beginner ||\n            (intermediateInput === null || intermediateInput === void 0 ? void 0 : intermediateInput.checked) && _types_minesweeper__WEBPACK_IMPORTED_MODULE_5__.Difficulty.intermediate ||\n            (advancedInput === null || advancedInput === void 0 ? void 0 : advancedInput.checked) && _types_minesweeper__WEBPACK_IMPORTED_MODULE_5__.Difficulty.advanced ||\n            null;\n        if ((nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) && difficulty) {\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_4__.addNewGame)(nameInput === null || nameInput === void 0 ? void 0 : nameInput.value, difficulty));\n            nameInput.value = '';\n            beginnerInput.checked = false;\n            intermediateInput.checked = false;\n            advancedInput.checked = false;\n        }\n    }\n    render() {\n        var _a;\n        if (!this.shadowRoot)\n            return;\n        this.shadowRoot.innerHTML = _components_Menu_Menu_template_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        (0,_utils_load_css__WEBPACK_IMPORTED_MODULE_2__.loadCSS)(this, _components_Menu_Menu_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        (_a = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'createGameButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => this.onCreateClick());\n    }\n}\ncustomElements.define('app-menu', Menu);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Menu/Menu.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Menu/Menu */ \"./src/components/Menu/Menu.ts\");\n/* harmony import */ var _components_Board_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Board/Board */ \"./src/components/Board/Board.ts\");\n/* harmony import */ var _components_Game_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Game/Game */ \"./src/components/Game/Game.ts\");\n/* harmony import */ var _components_GameTile_GameTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/GameTile/GameTile */ \"./src/components/GameTile/GameTile.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://minesweeper/./src/index.ts?");

/***/ }),

/***/ "./src/lib/boolean.ts":
/*!****************************!*\
  !*** ./src/lib/boolean.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isTrue: () => (/* binding */ isTrue)\n/* harmony export */ });\nfunction isTrue(value) {\n    return value === 'true';\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/lib/boolean.ts?");

/***/ }),

/***/ "./src/lib/minesweeper.ts":
/*!********************************!*\
  !*** ./src/lib/minesweeper.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MineSweeper: () => (/* binding */ MineSweeper)\n/* harmony export */ });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.ts\");\n\nclass MineSweeper {\n    static createBoard(difficulty) {\n        const { rows, cols, mines } = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.GameLayout[difficulty];\n        return MineSweeper.initializeBoard({ rows, cols, mines, tiles: [] });\n    }\n    static initializeBoard(board) {\n        return MineSweeper.fillMineCount(MineSweeper.placeMines(MineSweeper.fillWithDefault(board)));\n    }\n    static fillWithDefault(board) {\n        for (let row = 0; row < board.rows; row++) {\n            board.tiles[row] = [];\n            for (let col = 0; col < board.cols; col++) {\n                board.tiles[row][col] = {\n                    isMine: false,\n                    isRevealed: false,\n                    hasFlag: false,\n                    mineCount: 0,\n                    row,\n                    col\n                };\n            }\n        }\n        return board;\n    }\n    static placeMines(board) {\n        let minesPlaced = 0;\n        while (minesPlaced < board.mines) {\n            const row = Math.floor(Math.random() * board.rows);\n            const col = Math.floor(Math.random() * board.cols);\n            if (board.tiles[row][col].isMine)\n                continue;\n            board.tiles[row][col].isMine = true;\n            minesPlaced++;\n        }\n        return board;\n    }\n    static fillMineCount(board) {\n        for (let row = 0; row < board.rows; row++) {\n            for (let col = 0; col < board.cols; col++) {\n                if (board.tiles[row][col].isMine)\n                    continue;\n                let count = 0;\n                for (let dx = -1; dx <= 1; dx++) {\n                    for (let dy = -1; dy <= 1; dy++) {\n                        const nRow = row + dx;\n                        const nCol = col + dy;\n                        if (nRow >= 0 && nRow < board.rows && nCol >= 0 && nCol < board.cols && board.tiles[nRow][nCol].isMine)\n                            count++;\n                    }\n                }\n                board.tiles[row][col].mineCount = count;\n            }\n        }\n        return board;\n    }\n    static toggleFlag(board, row, col) {\n        const tile = MineSweeper.getTile(board, row, col);\n        if (!tile || !!(tile === null || tile === void 0 ? void 0 : tile.isRevealed))\n            return board;\n        board.tiles[row][col].hasFlag = !board.tiles[row][col].hasFlag;\n        return board;\n    }\n    static revealTile(board, row, col) {\n        const tile = MineSweeper.getTile(board, row, col);\n        let gameOver = false;\n        if (!tile || (tile === null || tile === void 0 ? void 0 : tile.isRevealed))\n            return { board: board, gameOver };\n        board.tiles[row][col].isRevealed = true;\n        if (tile.isMine)\n            gameOver = true;\n        else if (tile.mineCount === 0) {\n            for (let dx = -1; dx <= 1; dx++) {\n                for (let dy = -1; dy <= 1; dy++) {\n                    MineSweeper.revealTile(board, row + dx, col + dy);\n                }\n            }\n        }\n        return { board: board, gameOver };\n    }\n    static getTile(board, row, col) {\n        if (row < 0 || row >= board.rows || col < 0 || col >= board.cols)\n            return null;\n        return board.tiles[row][col];\n    }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/lib/minesweeper.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewGame: () => (/* binding */ addNewGame),\n/* harmony export */   placeFlag: () => (/* binding */ placeFlag),\n/* harmony export */   revealTile: () => (/* binding */ revealTile)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/types/store */ \"./src/types/store.ts\");\n\nfunction addNewGame(name, difficulty) {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.NEW_GAME,\n        payload: { name, difficulty }\n    };\n}\nfunction placeFlag(gameUUID, row, col) {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.PLACE_FLAG,\n        payload: { gameUUID, row, col }\n    };\n}\nfunction revealTile(gameUUID, row, col) {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.REVEAL_TILE,\n        payload: { gameUUID, row, col }\n    };\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applicationState: () => (/* binding */ applicationState),\n/* harmony export */   dispatch: () => (/* binding */ dispatch),\n/* harmony export */   subscribe: () => (/* binding */ subscribe)\n/* harmony export */ });\n/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/reducer */ \"./src/store/reducer.ts\");\n\nlet applicationState = {\n    games: []\n};\nconst cache = localStorage.getItem('applicationState');\nif (cache)\n    applicationState = JSON.parse(cache);\nconst observers = [];\nfunction subscribe(observer) {\n    observers.push(observer);\n}\nfunction dispatch(action) {\n    applicationState = (0,_store_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer)(action, applicationState);\n    localStorage.setItem('applicationState', JSON.stringify(applicationState));\n    observers.forEach(observer => observer.render());\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _lib_minesweeper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/minesweeper */ \"./src/lib/minesweeper.ts\");\n/* harmony import */ var _types_minesweeper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types/minesweeper */ \"./src/types/minesweeper.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/types/store */ \"./src/types/store.ts\");\n\n\n\nfunction reducer(action, currentState) {\n    let clone = structuredClone(currentState);\n    if (action.type === _types_store__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.NEW_GAME) {\n        clone.games.push(Object.assign(Object.assign({}, action.payload), { uuid: crypto.randomUUID(), startedAt: new Date(), status: _types_minesweeper__WEBPACK_IMPORTED_MODULE_1__.GameStatus.inProgress, board: _lib_minesweeper__WEBPACK_IMPORTED_MODULE_0__.MineSweeper.createBoard(action.payload.difficulty) }));\n    }\n    else {\n        const { gameUUID, row, col } = action.payload;\n        const gameIndex = clone.games.findIndex(({ uuid }) => uuid === gameUUID);\n        if (action.type === _types_store__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.PLACE_FLAG)\n            clone.games[gameIndex].board = _lib_minesweeper__WEBPACK_IMPORTED_MODULE_0__.MineSweeper.toggleFlag(clone.games[gameIndex].board, row, col);\n        else if (action.type === _types_store__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.REVEAL_TILE) {\n            const { board, gameOver } = _lib_minesweeper__WEBPACK_IMPORTED_MODULE_0__.MineSweeper.revealTile(clone.games[gameIndex].board, row, col);\n            clone.games[gameIndex].board = board;\n            if (gameOver)\n                clone.games[gameIndex].status = _types_minesweeper__WEBPACK_IMPORTED_MODULE_1__.GameStatus.lost;\n        }\n    }\n    return clone;\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/minesweeper.ts":
/*!**********************************!*\
  !*** ./src/types/minesweeper.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Difficulty: () => (/* binding */ Difficulty),\n/* harmony export */   GameStatus: () => (/* binding */ GameStatus)\n/* harmony export */ });\nvar GameStatus;\n(function (GameStatus) {\n    GameStatus[\"win\"] = \"win\";\n    GameStatus[\"lost\"] = \"lost\";\n    GameStatus[\"inProgress\"] = \"in-progress\";\n})(GameStatus || (GameStatus = {}));\nvar Difficulty;\n(function (Difficulty) {\n    Difficulty[\"beginner\"] = \"beginner\";\n    Difficulty[\"intermediate\"] = \"intermediate\";\n    Difficulty[\"advanced\"] = \"advanced\";\n})(Difficulty || (Difficulty = {}));\n\n\n//# sourceURL=webpack://minesweeper/./src/types/minesweeper.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ActionTypes: () => (/* binding */ ActionTypes)\n/* harmony export */ });\nvar ActionTypes;\n(function (ActionTypes) {\n    ActionTypes[\"NEW_GAME\"] = \"NEW_GAME\";\n    ActionTypes[\"PLACE_FLAG\"] = \"PLACE_FLAG\";\n    ActionTypes[\"REVEAL_TILE\"] = \"REVEAL_TILE\";\n})(ActionTypes || (ActionTypes = {}));\n\n\n//# sourceURL=webpack://minesweeper/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameLayout: () => (/* binding */ GameLayout)\n/* harmony export */ });\nconst GameLayout = {\n    beginner: {\n        cols: 8,\n        rows: 8,\n        mines: 10,\n    },\n    intermediate: {\n        cols: 16,\n        rows: 16,\n        mines: 40,\n    },\n    advanced: {\n        cols: 30,\n        rows: 16,\n        mines: 99,\n    },\n};\n\n\n//# sourceURL=webpack://minesweeper/./src/utils/constants.ts?");

/***/ }),

/***/ "./src/utils/get-from-shadow-by-id.ts":
/*!********************************************!*\
  !*** ./src/utils/get-from-shadow-by-id.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFromShadowById: () => (/* binding */ getFromShadowById)\n/* harmony export */ });\nfunction getFromShadowById(element, id) {\n    var _a;\n    return (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(id);\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/utils/get-from-shadow-by-id.ts?");

/***/ }),

/***/ "./src/utils/load-css.ts":
/*!*******************************!*\
  !*** ./src/utils/load-css.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadCSS: () => (/* binding */ loadCSS)\n/* harmony export */ });\nfunction loadCSS(element, styles) {\n    var _a;\n    const css = element.ownerDocument.createElement('style');\n    css.innerHTML = styles;\n    (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/utils/load-css.ts?");

/***/ }),

/***/ "./src/utils/set-attributes.ts":
/*!*************************************!*\
  !*** ./src/utils/set-attributes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setAttributes: () => (/* binding */ setAttributes)\n/* harmony export */ });\nfunction setAttributes(element, props) {\n    Object\n        .entries(props)\n        .forEach(([prop, value]) => element.setAttribute(prop, value));\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/utils/set-attributes.ts?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;