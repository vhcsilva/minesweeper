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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.app-board {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  gap: 8px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Board/Board.css?");

/***/ }),

/***/ "./src/components/GameTile/GameTile.css":
/*!**********************************************!*\
  !*** ./src/components/GameTile/GameTile.css ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.game-tile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: var(--gameTileSize);\n  height: var(--gameTileSize);\n\n  border-radius: 0;\n  border: 2px solid var(--white);\n  outline: 0;\n  margin: 0;\n  padding: 0;\n\n  color: var(--blue700);\n  font-weight: 700;\n\n  background: radial-gradient(circle, var(--blue300) 0%, var(--blue700) 100%);\n}\n\n.active {\n  border: 2px solid var(--red500);\n}\n\n.revealed {\n  background: var(--blue300);\n}\n\n.exploded {\n  background: var(--red500);\n}\n\n.game-tile svg {\n  width: calc(var(--gameTileSize) - 5px);\n  height: calc(var(--gameTileSize) - 5px);\n}\n\n.game-tile:active {\n  background: radial-gradient(circle, var(--blue500) 0%, var(--blue700) 100%);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/GameTile/GameTile.css?");

/***/ }),

/***/ "./src/components/Game/Game.css":
/*!**************************************!*\
  !*** ./src/components/Game/Game.css ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:host {\n  width: min-content;\n  height: min-content;\n}\n\n.game {\n  width: min-content;\n  height: min-content;\n\n  display: flex;\n  flex-direction: column;\n\n  border: 2px solid var(--blue500);\n  padding: 8px;\n}\n\n.active {\n  border: 2px solid var(--red500);\n}\n\n.game-header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n\n.game-header .game-name {\n  text-transform: capitalize;\n}\n\n.game-header .game-emoji svg {\n  height: 25px;\n}\n\n.game-header button {\n  color: var(--red500);\n  background: none;\n  border: none;\n}\n\n.game-header button:hover {\n  color: var(--red300);\n}\n\n.game-header button:active {\n  color: var(--red700);\n}\n\n.game-header button svg {\n  height: 20px;\n}\n\n.game .game-tiles {\n  display: grid;\n}\n\n.game .game-tiles-beginner {\n  grid-template-columns: repeat(8, var(--gameTileSize));\n  grid-template-rows: repeat(8, var(--gameTileSize));\n}\n\n.game .game-tiles-intermediate {\n  grid-template-columns: repeat(16, var(--gameTileSize));\n  grid-template-rows: repeat(16, var(--gameTileSize));\n}\n\n.game .game-tiles-advanced {\n  grid-template-columns: repeat(30, var(--gameTileSize));\n  grid-template-rows: repeat(16, var(--gameTileSize));\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Game/Game.css?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"game\\\" id=\\\"game-[GAME-UUID]\\\" draggable=\\\"true\\\">\\n  <div class=\\\"game-header\\\">\\n    <span class=\\\"game-name\\\" id=\\\"game-name\\\"></span>\\n    <span class=\\\"game-emoji\\\" id=\\\"game-emoji\\\"></span>\\n    <button id=\\\"remove-button\\\"></button>\\n  </div>\\n  <div class=\\\"game-header\\\">\\n    <span id=\\\"mines-count\\\"></span>\\n    <span id=\\\"timer-[GAME-UUID]\\\">00:00</span>\\n  </div>\\n\\n  <div id=\\\"game-tiles\\\" class=\\\"game-tiles\\\">\\n\\n  </div>\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://minesweeper/./src/components/Game/Game.template.html?");

/***/ }),

/***/ "./src/components/Menu/Menu.template.html":
/*!************************************************!*\
  !*** ./src/components/Menu/Menu.template.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"app-menu\\\">\\n  <h3>New Game</h3>\\n\\n  <div>\\n    <label for=\\\"nameInput\\\">Name</label>\\n    <input type=\\\"text\\\" name=\\\"nameInput\\\" id=\\\"nameInput\\\">\\n  </div>\\n\\n  <ul>\\n    <li>\\n      <input type=\\\"radio\\\" name=\\\"difficulty\\\" id=\\\"beginnerInput\\\">\\n      <label for=\\\"beginnerInput\\\">Beginner</label>\\n    </li>\\n\\n    <li>\\n      <input type=\\\"radio\\\" name=\\\"difficulty\\\" id=\\\"intermediateInput\\\">\\n      <label for=\\\"intermediateInput\\\">Intermediate</label>\\n    </li>\\n\\n    <li>\\n      <input type=\\\"radio\\\" name=\\\"difficulty\\\" id=\\\"advancedInput\\\">\\n      <label for=\\\"advancedInput\\\">Advanced</label>\\n    </li>\\n  </ul>\\n\\n  <button id=\\\"createGameButton\\\">Create</button>\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://minesweeper/./src/components/Menu/Menu.template.html?");

/***/ }),

/***/ "./assets/icons/astonished-emoji.svg":
/*!*******************************************!*\
  !*** ./assets/icons/astonished-emoji.svg ***!
  \*******************************************/
/***/ ((module) => {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"Layer_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" viewBox=\\\"0 0 512.001 512.001\\\" xml:space=\\\"preserve\\\"><circle style=\\\"fill:#FDDF6D;\\\" cx=\\\"256.001\\\" cy=\\\"241.211\\\" r=\\\"241.211\\\"></circle><path style=\\\"fill:#FCC56B;\\\" d=\\\"M307.696,446.811c-133.217,0-241.21-107.993-241.21-241.21c0-71.173,30.832-135.136,79.86-179.287 C68.256,66.241,14.796,147.482,14.796,241.21c0,133.217,107.993,241.21,241.21,241.21c62.044,0,118.61-23.433,161.349-61.921 C384.455,437.32,347.183,446.811,307.696,446.811z\\\"></path><path style=\\\"fill:#7F184C;\\\" d=\\\"M306.553,259.557L306.553,259.557c52.064,0,94.271,42.207,94.271,94.271V382.5H212.283v-28.673 C212.283,301.763,254.488,259.557,306.553,259.557z\\\"></path><path style=\\\"fill:#F2F2F2;\\\" d=\\\"M249.961,293.399H370.03c2.428,0,4.67-1.015,6.507-2.723c-17.252-19.107-42.213-31.12-69.985-31.12 l0,0c-25.737,0-49.053,10.324-66.065,27.045C242.481,290.684,245.975,293.399,249.961,293.399z\\\"></path><path style=\\\"fill:#FC4C59;\\\" d=\\\"M360.098,349.463H291.49l-19.848,0.114c-13.25,0.636-29.743,4.401-29.743,32.925 c17.552-0.093,13.566,0.007,26.917-0.356c9.39-0.255,22.673,14.211,22.673,23.099v51.967c0,30.26,24.531,54.789,54.789,54.789l0,0 c30.26,0,54.789-24.531,54.789-54.789v-66.776C401.071,367.806,382.727,349.463,360.098,349.463z\\\"></path><path style=\\\"fill:#BC3B4A;\\\" d=\\\"M346.067,489.989c-5.421,0-9.813-4.392-9.813-9.813v-93.24c0-1.161-2.827-3.966-4.817-5.067 c-4.742-2.623-6.459-8.595-3.836-13.336c2.623-4.743,8.597-6.459,13.336-3.836c1.529,0.845,14.942,8.659,14.942,22.24v93.24 C355.88,485.597,351.488,489.989,346.067,489.989z\\\"></path><g><path style=\\\"fill:#7F184C;\\\" d=\\\"M191.582,206.568c-2.511,0-5.023-0.958-6.94-2.873c-3.832-3.834-3.832-10.046,0-13.878 l51.193-51.193c3.834-3.831,10.046-3.831,13.878,0c3.832,3.834,3.832,10.046,0,13.878l-51.193,51.193 C196.605,205.609,194.093,206.568,191.582,206.568z\\\"></path><path style=\\\"fill:#7F184C;\\\" d=\\\"M242.774,206.568c-2.511,0-5.023-0.958-6.94-2.873l-51.193-51.193 c-3.832-3.834-3.832-10.046,0-13.878c3.834-3.831,10.046-3.831,13.878,0l51.193,51.193c3.832,3.834,3.832,10.046,0,13.878 C247.797,205.609,245.285,206.568,242.774,206.568z\\\"></path><path style=\\\"fill:#7F184C;\\\" d=\\\"M428.563,206.568c-2.511,0-5.023-0.958-6.94-2.873l-51.193-51.193 c-3.832-3.834-3.832-10.046,0-13.878c3.834-3.831,10.046-3.831,13.878,0l51.193,51.193c3.832,3.834,3.832,10.046,0,13.878 C433.586,205.609,431.073,206.568,428.563,206.568z\\\"></path><path style=\\\"fill:#7F184C;\\\" d=\\\"M377.37,206.568c-2.511,0-5.023-0.958-6.94-2.873c-3.832-3.834-3.832-10.046,0-13.878l51.193-51.193 c3.834-3.831,10.046-3.831,13.878,0c3.832,3.834,3.832,10.046,0,13.878l-51.193,51.193 C382.393,205.609,379.881,206.568,377.37,206.568z\\\"></path></g><ellipse transform=\\\"matrix(0.2723 -0.9622 0.9622 0.2723 150.702 352.6603)\\\" style=\\\"fill:#FCEB88;\\\" cx=\\\"308.507\\\" cy=\\\"76.696\\\" rx=\\\"28.13\\\" ry=\\\"50.372\\\"></ellipse></svg>\"\n\n//# sourceURL=webpack://minesweeper/./assets/icons/astonished-emoji.svg?");

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

/***/ "./assets/icons/happy-emoji.svg":
/*!**************************************!*\
  !*** ./assets/icons/happy-emoji.svg ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"Layer_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" viewBox=\\\"0 0 512.003 512.003\\\" xml:space=\\\"preserve\\\"><circle style=\\\"fill:#FDDF6D;\\\" cx=\\\"256.001\\\" cy=\\\"256.001\\\" r=\\\"256.001\\\"></circle><path style=\\\"fill:#FCC56B;\\\" d=\\\"M310.859,474.208c-141.385,0-256-114.615-256-256c0-75.537,32.722-143.422,84.757-190.281 C56.738,70.303,0,156.525,0,256c0,141.385,114.615,256,256,256c65.849,0,125.883-24.87,171.243-65.718 C392.325,464.135,352.77,474.208,310.859,474.208z\\\"></path><g><path style=\\\"fill:#7F184C;\\\" d=\\\"M245.899,187.173c-5.752,0-10.414-4.663-10.414-10.414c0-13.433-10.93-24.362-24.362-24.362 s-24.362,10.93-24.362,24.362c0,5.752-4.663,10.414-10.414,10.414c-5.752,0-10.414-4.663-10.414-10.414 c0-24.918,20.272-45.19,45.19-45.19s45.19,20.272,45.19,45.19C256.314,182.51,251.651,187.173,245.899,187.173z\\\"></path><path style=\\\"fill:#7F184C;\\\" d=\\\"M421.798,187.173c-5.752,0-10.414-4.663-10.414-10.414c0-13.433-10.93-24.362-24.362-24.362 s-24.362,10.93-24.362,24.362c0,5.752-4.663,10.414-10.414,10.414s-10.414-4.663-10.414-10.414c0-24.918,20.272-45.19,45.19-45.19 c24.918,0,45.19,20.272,45.19,45.19C432.213,182.51,427.55,187.173,421.798,187.173z\\\"></path><path style=\\\"fill:#7F184C;\\\" d=\\\"M302.132,403.377c-27.589,0-53.075-14.986-66.511-39.108c-2.799-5.025-0.994-11.368,4.03-14.166 c5.024-2.799,11.367-0.994,14.166,4.03c9.763,17.528,28.276,28.415,48.315,28.415c19.528,0,38.252-10.998,48.865-28.702 c2.958-4.932,9.355-6.535,14.287-3.577c4.934,2.958,6.535,9.354,3.577,14.287C354.506,388.503,328.936,403.377,302.132,403.377z\\\"></path></g><ellipse transform=\\\"matrix(0.2723 -0.9622 0.9622 0.2723 141.2787 350.4419)\\\" style=\\\"fill:#FCEB88;\\\" cx=\\\"302.329\\\" cy=\\\"81.817\\\" rx=\\\"29.854\\\" ry=\\\"53.46\\\"></ellipse><g><path style=\\\"fill:#F9A880;\\\" d=\\\"M145.987,240.152c-19.011,0-34.423,15.412-34.423,34.423h68.848 C180.41,255.564,164.998,240.152,145.987,240.152z\\\"></path><path style=\\\"fill:#F9A880;\\\" d=\\\"M446.251,235.539c-19.011,0-34.425,15.412-34.425,34.423h68.848 C480.676,250.951,465.264,235.539,446.251,235.539z\\\"></path></g></svg>\"\n\n//# sourceURL=webpack://minesweeper/./assets/icons/happy-emoji.svg?");

/***/ }),

/***/ "./assets/icons/sunglasses-emoji.svg":
/*!*******************************************!*\
  !*** ./assets/icons/sunglasses-emoji.svg ***!
  \*******************************************/
/***/ ((module) => {

eval("module.exports = \"<svg version=\\\"1.1\\\" id=\\\"Layer_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" viewBox=\\\"0 0 511.999 511.999\\\" xml:space=\\\"preserve\\\"><circle style=\\\"fill:#FFDB6C;\\\" cx=\\\"247.796\\\" cy=\\\"255.997\\\" r=\\\"247.796\\\"></circle><path style=\\\"fill:#FCC56B;\\\" d=\\\"M300.895,467.216c-136.853,0-247.794-110.941-247.794-247.794c0-73.116,31.673-138.825,82.04-184.181 C54.919,76.258,0,159.716,0,256.003c0,136.853,110.941,247.794,247.794,247.794c63.738,0,121.848-24.073,165.754-63.612 C379.75,457.466,341.462,467.216,300.895,467.216z\\\"></path><g><path style=\\\"fill:#F9A880;\\\" d=\\\"M141.308,259.555c-18.402,0-33.321,14.918-33.321,33.32h66.641 C174.628,274.473,159.71,259.555,141.308,259.555z\\\"></path><path style=\\\"fill:#F9A880;\\\" d=\\\"M431.948,259.555c-18.402,0-33.321,14.918-33.321,33.32h66.641 C465.269,274.473,450.349,259.555,431.948,259.555z\\\"></path></g><path style=\\\"fill:#56586F;\\\" d=\\\"M105.165,121.895c64.702-14.849,117.079-9.739,175.098,3.782c8.604,2.004,17.692,4.239,27.29,4.532 c15.985,0.489,33.956-3.489,49.449-7.382c61.168-15.366,108.95-7.374,154.996,2.465l-3.402,27.211 c-7.188,0.159-9.449,3.511-11.503,10.054c-10.747,34.242-1.594,93.16-81.048,86.233c-52.27-4.558-67.239-18.879-92.152-81.847 c-2.12-5.356-3.497-14.207-15.602-13.88c-6.835,0.184-12.948,1.392-15.079,13.267c-3.973,22.126-34.188,82.245-95.535,82.179 c-54.185-0.058-74.855-28.184-77.323-90.159c-0.306-7.695-7.012-9.156-11.035-9.246L105.165,121.895L105.165,121.895z\\\"></path><g><path style=\\\"fill:#737891;\\\" d=\\\"M199.128,113.331l-37.84,129.044c9.958,4.097,21.979,6.12,36.392,6.134 c0.254,0,0.504-0.009,0.758-0.011l38.499-131.292C224.347,115.304,211.809,113.972,199.128,113.331z\\\"></path><path style=\\\"fill:#737891;\\\" d=\\\"M434.438,114.376c-12.593-0.403-25.665,0-39.395,1.534l-33.781,115.202 c9.238,7.758,20.144,12.263,34.543,15.016L434.438,114.376z\\\"></path></g><path style=\\\"fill:#7F184C;\\\" d=\\\"M299.414,437.536L299.414,437.536c-55.395,0-100.302-44.907-100.302-100.302l0,0h200.605l0,0 C399.716,392.629,354.81,437.536,299.414,437.536z\\\"></path><path style=\\\"fill:#F2F2F2;\\\" d=\\\"M223.585,337.234v15.657c0,6.602,5.352,11.953,11.953,11.953h127.751 c6.602,0,11.953-5.352,11.953-11.953v-15.657H223.585z\\\"></path><path style=\\\"fill:#FC4C59;\\\" d=\\\"M301.52,395.923c-27.113-12.597-57.2-10.766-81.598,2.298c18.333,23.895,47.164,39.315,79.609,39.315 l0,0c14.298,0,27.886-3.012,40.195-8.403C330.695,415.16,317.747,403.464,301.52,395.923z\\\"></path><ellipse transform=\\\"matrix(0.2723 -0.9622 0.9622 0.2723 149.2661 353.8707)\\\" style=\\\"fill:#FCEB88;\\\" cx=\\\"308.589\\\" cy=\\\"78.25\\\" rx=\\\"28.897\\\" ry=\\\"51.747\\\"></ellipse></svg>\"\n\n//# sourceURL=webpack://minesweeper/./assets/icons/sunglasses-emoji.svg?");

/***/ }),

/***/ "./assets/icons/trash.svg":
/*!********************************!*\
  !*** ./assets/icons/trash.svg ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"currentColor\\\"><path fill-rule=\\\"evenodd\\\" d=\\\"M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z\\\" clip-rule=\\\"evenodd\\\"></path></svg>\"\n\n//# sourceURL=webpack://minesweeper/./assets/icons/trash.svg?");

/***/ }),

/***/ "./src/components/Board/Board.ts":
/*!***************************************!*\
  !*** ./src/components/Board/Board.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _utils_set_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/set-attributes */ \"./src/utils/set-attributes.ts\");\n/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/load-css */ \"./src/utils/load-css.ts\");\n/* harmony import */ var _components_Board_Board_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Board/Board.css */ \"./src/components/Board/Board.css\");\n/* harmony import */ var _components_Board_Board_template_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Board/Board.template.html */ \"./src/components/Board/Board.template.html\");\n/* harmony import */ var _utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/get-from-shadow-by-id */ \"./src/utils/get-from-shadow-by-id.ts\");\n\n\n\n\n\n\nclass Board extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.subscribe)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (!this.shadowRoot)\n            return;\n        if (!this.shadowRoot.innerHTML)\n            this.shadowRoot.innerHTML = _components_Board_Board_template_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n        (0,_utils_load_css__WEBPACK_IMPORTED_MODULE_2__.loadCSS)(this, _components_Board_Board_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n        const board = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_5__.getFromShadowById)(this, 'app-board');\n        board?.querySelectorAll(`app-game`)?.forEach(element => {\n            if (!_store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.games.find(({ uuid }) => uuid === element.getAttribute('game-uuid')))\n                element.remove();\n        });\n        _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.games.forEach(game => {\n            const isRendered = board?.querySelector(`app-game[game-uuid=\"${game.uuid}\"]`);\n            if (isRendered)\n                return;\n            const appGame = this.ownerDocument.createElement('app-game');\n            (0,_utils_set_attributes__WEBPACK_IMPORTED_MODULE_1__.setAttributes)(appGame, {\n                'game-uuid': game.uuid\n            });\n            board?.appendChild(appGame);\n        });\n    }\n}\ncustomElements.define('app-board', Board);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Board/Board.ts?");

/***/ }),

/***/ "./src/components/GameTile/GameTile.ts":
/*!*********************************************!*\
  !*** ./src/components/GameTile/GameTile.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameTile: () => (/* binding */ GameTile)\n/* harmony export */ });\n/* harmony import */ var _components_GameTile_GameTile_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/GameTile/GameTile.template.html */ \"./src/components/GameTile/GameTile.template.html\");\n/* harmony import */ var _components_GameTile_GameTile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/GameTile/GameTile.css */ \"./src/components/GameTile/GameTile.css\");\n/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/load-css */ \"./src/utils/load-css.ts\");\n/* harmony import */ var _utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/get-from-shadow-by-id */ \"./src/utils/get-from-shadow-by-id.ts\");\n/* harmony import */ var _lib_boolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/boolean */ \"./src/lib/boolean.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _assets_icons_bomb_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/icons/bomb.svg */ \"./assets/icons/bomb.svg\");\n/* harmony import */ var _assets_icons_bomb_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_bomb_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_icons_flag_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/icons/flag.svg */ \"./assets/icons/flag.svg\");\n/* harmony import */ var _assets_icons_flag_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_flag_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _types_minesweeper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/types/minesweeper */ \"./src/types/minesweeper.ts\");\n/* harmony import */ var _hooks_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/hooks/store */ \"./src/hooks/store.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/types/store */ \"./src/types/store.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\nclass GameTile extends HTMLElement {\n    gameUUID = '';\n    gameStatus = _types_minesweeper__WEBPACK_IMPORTED_MODULE_9__.GameStatus.inProgress;\n    mineCount = 0;\n    row = 0;\n    col = 0;\n    hasFlag = false;\n    isMine = false;\n    isRevealed = false;\n    isActive = false;\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        return ['game-uuid', 'game-status', 'tile-mine-count', 'tile-row', 'tile-col', 'tile-has-flag',\n            'tile-is-mine', 'tile-is-revealed', 'tile-is-active'];\n    }\n    attributeChangedCallback(prop, _, value) {\n        const changedAttribute = prop.replace('tile-', '');\n        let hasChanged = false;\n        switch (changedAttribute) {\n            case 'game-uuid':\n                if (this.gameUUID !== value) {\n                    this.gameUUID = value;\n                    hasChanged = true;\n                }\n                break;\n            case 'game-status':\n                const newStatus = value === \"lost\" && _types_minesweeper__WEBPACK_IMPORTED_MODULE_9__.GameStatus.lost || value === \"win\" && _types_minesweeper__WEBPACK_IMPORTED_MODULE_9__.GameStatus.win || _types_minesweeper__WEBPACK_IMPORTED_MODULE_9__.GameStatus.inProgress;\n                if (this.gameStatus !== newStatus) {\n                    this.gameStatus = newStatus;\n                    hasChanged = true;\n                }\n                break;\n            case 'mine-count':\n                if (this.mineCount !== Number(value)) {\n                    this.mineCount = Number(value);\n                    hasChanged = true;\n                }\n                break;\n            case 'row':\n                if (this.row !== Number(value)) {\n                    this.row = Number(value);\n                    hasChanged = true;\n                }\n                break;\n            case 'col':\n                if (this.col !== Number(value)) {\n                    this.col = Number(value);\n                    hasChanged = true;\n                }\n                break;\n            case 'has-flag':\n                if (this.hasFlag !== (0,_lib_boolean__WEBPACK_IMPORTED_MODULE_4__.isTrue)(value)) {\n                    this.hasFlag = (0,_lib_boolean__WEBPACK_IMPORTED_MODULE_4__.isTrue)(value);\n                    hasChanged = true;\n                }\n                break;\n            case 'is-mine':\n                if (this.isMine !== (0,_lib_boolean__WEBPACK_IMPORTED_MODULE_4__.isTrue)(value)) {\n                    this.isMine = (0,_lib_boolean__WEBPACK_IMPORTED_MODULE_4__.isTrue)(value);\n                    hasChanged = true;\n                }\n                break;\n            case 'is-revealed':\n                if (this.isRevealed !== (0,_lib_boolean__WEBPACK_IMPORTED_MODULE_4__.isTrue)(value)) {\n                    this.isRevealed = (0,_lib_boolean__WEBPACK_IMPORTED_MODULE_4__.isTrue)(value);\n                    hasChanged = true;\n                }\n                break;\n            case 'is-active':\n                if (this.isActive !== (0,_lib_boolean__WEBPACK_IMPORTED_MODULE_4__.isTrue)(value)) {\n                    this.isActive = (0,_lib_boolean__WEBPACK_IMPORTED_MODULE_4__.isTrue)(value);\n                    hasChanged = true;\n                }\n                break;\n        }\n        if (hasChanged)\n            this.render();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    updateActiveGameAndTile() {\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_5__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_6__.changeActiveGame)(this.gameUUID));\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_5__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_6__.changeActiveTile)(this.row, this.col));\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_5__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_6__.changeActiveContainer)(_types_store__WEBPACK_IMPORTED_MODULE_11__.ApplicationContainers.BOARD));\n    }\n    onRevealTile(event) {\n        event.preventDefault();\n        (0,_hooks_store__WEBPACK_IMPORTED_MODULE_10__.useRevealTile)(this.gameUUID, this.row, this.col);\n        this.updateActiveGameAndTile();\n    }\n    onToggleFlag(event) {\n        event.preventDefault();\n        (0,_hooks_store__WEBPACK_IMPORTED_MODULE_10__.useToggleFlag)(this.gameUUID, this.row, this.col);\n        this.updateActiveGameAndTile();\n    }\n    render() {\n        const tileId = `${this.gameUUID};${this.row};${this.col}`;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = _components_GameTile_GameTile_template_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"].replace('[TILE-ID]', tileId);\n        (0,_utils_load_css__WEBPACK_IMPORTED_MODULE_2__.loadCSS)(this, _components_GameTile_GameTile_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        const tile = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, tileId);\n        if (this.isActive)\n            tile?.classList?.add('active');\n        tile?.addEventListener('contextmenu', e => this.onToggleFlag(e));\n        if (!this.hasFlag) {\n            tile?.addEventListener('click', e => this.onRevealTile(e));\n        }\n        if (this.isMine) {\n            if (this.gameStatus === _types_minesweeper__WEBPACK_IMPORTED_MODULE_9__.GameStatus.lost || this.isRevealed) {\n                tile.classList.add('exploded');\n                tile.innerHTML = (_assets_icons_bomb_svg__WEBPACK_IMPORTED_MODULE_7___default());\n            }\n            else if (this.hasFlag) {\n                tile.innerHTML = (_assets_icons_flag_svg__WEBPACK_IMPORTED_MODULE_8___default());\n            }\n        }\n        else if (this.isRevealed) {\n            tile.classList.add('revealed');\n            if (this.mineCount > 0)\n                tile.textContent = `${this.mineCount}`;\n        }\n        else if (this.hasFlag) {\n            tile.innerHTML = (_assets_icons_flag_svg__WEBPACK_IMPORTED_MODULE_8___default());\n        }\n    }\n}\ncustomElements.define('app-game-tile', GameTile);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/GameTile/GameTile.ts?");

/***/ }),

/***/ "./src/components/Game/Game.ts":
/*!*************************************!*\
  !*** ./src/components/Game/Game.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/get-from-shadow-by-id */ \"./src/utils/get-from-shadow-by-id.ts\");\n/* harmony import */ var _components_Game_Game_template_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Game/Game.template.html */ \"./src/components/Game/Game.template.html\");\n/* harmony import */ var _components_Game_Game_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Game/Game.css */ \"./src/components/Game/Game.css\");\n/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/load-css */ \"./src/utils/load-css.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.ts\");\n/* harmony import */ var _utils_set_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/set-attributes */ \"./src/utils/set-attributes.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _types_minesweeper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/types/minesweeper */ \"./src/types/minesweeper.ts\");\n/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/icons/trash.svg */ \"./assets/icons/trash.svg\");\n/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_icons_sunglasses_emoji_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/icons/sunglasses-emoji.svg */ \"./assets/icons/sunglasses-emoji.svg\");\n/* harmony import */ var _assets_icons_sunglasses_emoji_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_sunglasses_emoji_svg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _assets_icons_happy_emoji_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/icons/happy-emoji.svg */ \"./assets/icons/happy-emoji.svg\");\n/* harmony import */ var _assets_icons_happy_emoji_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_happy_emoji_svg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _assets_icons_astonished_emoji_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/icons/astonished-emoji.svg */ \"./assets/icons/astonished-emoji.svg\");\n/* harmony import */ var _assets_icons_astonished_emoji_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_astonished_emoji_svg__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _lib_timer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/lib/timer */ \"./src/lib/timer.ts\");\n/* harmony import */ var _lib_date__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/lib/date */ \"./src/lib/date.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst emojiMapping = {\n    [_types_minesweeper__WEBPACK_IMPORTED_MODULE_8__.GameStatus.inProgress]: (_assets_icons_happy_emoji_svg__WEBPACK_IMPORTED_MODULE_11___default()),\n    [_types_minesweeper__WEBPACK_IMPORTED_MODULE_8__.GameStatus.lost]: (_assets_icons_astonished_emoji_svg__WEBPACK_IMPORTED_MODULE_12___default()),\n    [_types_minesweeper__WEBPACK_IMPORTED_MODULE_8__.GameStatus.win]: (_assets_icons_sunglasses_emoji_svg__WEBPACK_IMPORTED_MODULE_10___default()),\n};\nclass Game extends HTMLElement {\n    uuid = '';\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.subscribe)(this);\n    }\n    static get observedAttributes() {\n        return ['game-uuid'];\n    }\n    attributeChangedCallback(prop, _, value) {\n        const changedAttribute = prop.replace('game-', '');\n        this[changedAttribute] = value;\n        this.render();\n    }\n    onRemoveClick() {\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_7__.removeGame)(this.uuid));\n    }\n    render() {\n        if (!this.shadowRoot)\n            return;\n        if (!this.shadowRoot?.innerHTML)\n            this.shadowRoot.innerHTML = _components_Game_Game_template_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"].replaceAll('[GAME-UUID]', this.uuid);\n        (0,_utils_load_css__WEBPACK_IMPORTED_MODULE_4__.loadCSS)(this, _components_Game_Game_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n        const game = _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.games.find(({ uuid }) => uuid === this.uuid);\n        if (!game)\n            return;\n        const gameContainer = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, `game-${this.uuid}`);\n        if (_store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.activeGame === game.uuid) {\n            gameContainer.classList.add('active');\n        }\n        else if (gameContainer.classList.contains('active')) {\n            gameContainer.classList.remove('active');\n        }\n        if (game.status === _types_minesweeper__WEBPACK_IMPORTED_MODULE_8__.GameStatus.inProgress) {\n            _lib_timer__WEBPACK_IMPORTED_MODULE_13__.Timer.endTimer(game.uuid);\n            _lib_timer__WEBPACK_IMPORTED_MODULE_13__.Timer.startTimer(game.uuid, game.startedAt);\n        }\n        else {\n            _lib_timer__WEBPACK_IMPORTED_MODULE_13__.Timer.endTimer(game.uuid);\n            const timerComponent = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, `timer-${game.uuid}`);\n            if (timerComponent && game.finishedAt && game.startedAt)\n                timerComponent.textContent = (0,_lib_date__WEBPACK_IMPORTED_MODULE_14__.getTimeDifference)(game.startedAt, game.finishedAt);\n        }\n        const gameName = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, 'game-name');\n        if (gameName && gameName?.textContent !== game.name)\n            gameName.textContent = game.name;\n        const mineCount = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, 'mines-count');\n        const currentMines = game.board.mines - game.board.flags;\n        if (mineCount && !mineCount?.textContent?.includes(currentMines.toString()))\n            mineCount.textContent = `Mines: ${currentMines}`;\n        const gameEmoji = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, 'game-emoji');\n        if (gameEmoji && gameEmoji?.innerHTML !== emojiMapping[game.status])\n            gameEmoji.innerHTML = emojiMapping[game.status];\n        const removeButton = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, 'remove-button');\n        if (removeButton && removeButton?.innerHTML !== (_assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_9___default())) {\n            removeButton.innerHTML = (_assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_9___default());\n            removeButton.addEventListener('click', () => this.onRemoveClick());\n        }\n        const tilesContainer = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, 'game-tiles');\n        if (tilesContainer) {\n            tilesContainer.classList.add(`game-tiles-${game.difficulty}`);\n            const { rows, cols } = _utils_constants__WEBPACK_IMPORTED_MODULE_5__.GameLayout[game.difficulty];\n            const { activeGame, activeTile } = _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState;\n            for (let row = 0; row < rows; row++) {\n                for (let col = 0; col < cols; col++) {\n                    const tile = game.board.tiles[row][col];\n                    const isTileActive = activeGame === game.uuid && activeTile?.row === row && activeTile?.col === col;\n                    const rendered = tilesContainer.querySelector(`app-game-tile[game-uuid=\"${game.uuid}\"][tile-row=\"${row}\"][tile-col=\"${col}\"]`);\n                    let tileComponent = rendered || this.ownerDocument.createElement('app-game-tile');\n                    if (tileComponent.getAttribute('game-uuid') !== game.uuid ||\n                        tileComponent.getAttribute('game-status') !== game.status ||\n                        tileComponent.getAttribute('tile-mine-count') !== tile.mineCount.toString() ||\n                        tileComponent.getAttribute('tile-row') !== tile.row.toString() ||\n                        tileComponent.getAttribute('tile-col') !== tile.col.toString() ||\n                        tileComponent.getAttribute('tile-has-flag') !== tile.hasFlag.toString() ||\n                        tileComponent.getAttribute('tile-is-mine') !== tile.isMine.toString() ||\n                        tileComponent.getAttribute('tile-is-revealed') !== tile.isRevealed.toString() ||\n                        tileComponent.getAttribute('tile-is-active') !== isTileActive.toString())\n                        (0,_utils_set_attributes__WEBPACK_IMPORTED_MODULE_6__.setAttributes)(tileComponent, {\n                            'game-uuid': game.uuid,\n                            'game-status': game.status,\n                            'tile-mine-count': tile.mineCount.toString(),\n                            'tile-row': tile.row.toString(),\n                            'tile-col': tile.col.toString(),\n                            'tile-has-flag': tile.hasFlag.toString(),\n                            'tile-is-mine': tile.isMine.toString(),\n                            'tile-is-revealed': tile.isRevealed.toString(),\n                            'tile-is-active': isTileActive.toString()\n                        });\n                    if (!rendered)\n                        tilesContainer.appendChild(tileComponent);\n                }\n            }\n        }\n    }\n}\ncustomElements.define('app-game', Game);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Game/Game.ts?");

/***/ }),

/***/ "./src/components/GlobalShortcutsProvider/GlobalShortcutsProvider.ts":
/*!***************************************************************************!*\
  !*** ./src/components/GlobalShortcutsProvider/GlobalShortcutsProvider.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalShortcutsProvider: () => (/* binding */ GlobalShortcutsProvider)\n/* harmony export */ });\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/types/store */ \"./src/types/store.ts\");\n/* harmony import */ var _hooks_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/store */ \"./src/hooks/store.ts\");\n\n\n\n\nclass GlobalShortcutsProvider extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    onTabPressed(e) {\n        if (e.key !== 'Tab')\n            return;\n        e.preventDefault();\n        if (_store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.activeContainer === _types_store__WEBPACK_IMPORTED_MODULE_2__.ApplicationContainers.MENU) {\n            const menuComponent = this.ownerDocument.querySelector('app-menu');\n            const menuOptions = [\n                menuComponent?.shadowRoot?.getElementById('nameInput'),\n                menuComponent?.shadowRoot?.getElementById('beginnerInput'),\n                menuComponent?.shadowRoot?.getElementById('intermediateInput'),\n                menuComponent?.shadowRoot?.getElementById('advancedInput'),\n                menuComponent?.shadowRoot?.getElementById('createGameButton')\n            ];\n            const focusedIndex = menuOptions.findIndex(el => el === menuComponent?.shadowRoot?.activeElement);\n            const indexToFocus = focusedIndex < (menuOptions.length - 1) ? focusedIndex + 1 : 0;\n            menuOptions[indexToFocus]?.focus();\n        }\n        else if (_store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.activeContainer === _types_store__WEBPACK_IMPORTED_MODULE_2__.ApplicationContainers.BOARD) {\n            const activeIndex = _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.games.findIndex(({ uuid }) => uuid === _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.activeGame);\n            const newActiveIndex = activeIndex === _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.games.length - 1 ? 0 : activeIndex + 1;\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.changeActiveGame)(_store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.games[newActiveIndex].uuid));\n        }\n    }\n    onKeyDown(e) {\n        if (e.key === 'Tab')\n            this.onTabPressed(e);\n        else if (e.key.includes('Arrow') && _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.activeContainer === _types_store__WEBPACK_IMPORTED_MODULE_2__.ApplicationContainers.BOARD) {\n            e.preventDefault();\n            const game = _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.games.find(({ uuid }) => uuid === _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.activeGame);\n            if (!_store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.activeTile || !game)\n                return;\n            const { row, col } = _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.activeTile;\n            let newRow = row;\n            let newCol = col;\n            if (e.key === 'ArrowLeft' && col > 0)\n                newCol = col - 1;\n            else if (e.key === 'ArrowRight' && col < (game.board.cols - 1))\n                newCol = col + 1;\n            else if (e.key === 'ArrowUp' && row > 0)\n                newRow = row - 1;\n            else if (e.key === 'ArrowDown' && row < (game.board.rows - 1))\n                newRow = row + 1;\n            if (newRow !== row || newCol !== col)\n                (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.changeActiveTile)(newRow, newCol));\n        }\n        else if (e.key === ' ' && _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.activeContainer === _types_store__WEBPACK_IMPORTED_MODULE_2__.ApplicationContainers.BOARD) {\n            e.preventDefault();\n            const gameUUID = _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.activeGame;\n            const row = _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.activeTile?.row;\n            const col = _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.activeTile?.col;\n            if (!gameUUID || row === undefined || col === undefined)\n                return;\n            if (e.ctrlKey)\n                (0,_hooks_store__WEBPACK_IMPORTED_MODULE_3__.useToggleFlag)(gameUUID, row, col);\n            else\n                (0,_hooks_store__WEBPACK_IMPORTED_MODULE_3__.useRevealTile)(gameUUID, row, col);\n        }\n    }\n    onKeyPress(e) {\n        if (e.shiftKey && e.key === \"N\") {\n            e.preventDefault();\n            document.querySelector('app-menu')?.shadowRoot?.getElementById('nameInput')?.focus();\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.changeActiveContainer)(_types_store__WEBPACK_IMPORTED_MODULE_2__.ApplicationContainers.MENU));\n        }\n        else if (e.shiftKey && e.key === \"B\") {\n            e.preventDefault();\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.changeActiveContainer)(_types_store__WEBPACK_IMPORTED_MODULE_2__.ApplicationContainers.BOARD));\n        }\n    }\n    onClick(e) {\n        const activeContainer = e.target.localName === 'app-menu' ? _types_store__WEBPACK_IMPORTED_MODULE_2__.ApplicationContainers.MENU : _types_store__WEBPACK_IMPORTED_MODULE_2__.ApplicationContainers.BOARD;\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.changeActiveContainer)(activeContainer));\n    }\n    render() {\n        document.addEventListener('keydown', e => this.onKeyDown(e));\n        document.addEventListener('keypress', e => this.onKeyPress(e));\n        document.addEventListener('click', e => this.onClick(e));\n    }\n}\ncustomElements.define('global-shortcuts-provider', GlobalShortcutsProvider);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/GlobalShortcutsProvider/GlobalShortcutsProvider.ts?");

/***/ }),

/***/ "./src/components/Menu/Menu.ts":
/*!*************************************!*\
  !*** ./src/components/Menu/Menu.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _components_Menu_Menu_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Menu/Menu.template.html */ \"./src/components/Menu/Menu.template.html\");\n/* harmony import */ var _components_Menu_Menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Menu/Menu.css */ \"./src/components/Menu/Menu.css\");\n/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/load-css */ \"./src/utils/load-css.ts\");\n/* harmony import */ var _utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/get-from-shadow-by-id */ \"./src/utils/get-from-shadow-by-id.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _types_minesweeper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/types/minesweeper */ \"./src/types/minesweeper.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/types/store */ \"./src/types/store.ts\");\n\n\n\n\n\n\n\n\nclass Menu extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open', delegatesFocus: true });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    onCreateClick() {\n        const nameInput = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'nameInput');\n        const beginnerInput = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'beginnerInput');\n        const intermediateInput = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'intermediateInput');\n        const advancedInput = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'advancedInput');\n        const difficulty = beginnerInput?.checked && _types_minesweeper__WEBPACK_IMPORTED_MODULE_5__.Difficulty.beginner ||\n            intermediateInput?.checked && _types_minesweeper__WEBPACK_IMPORTED_MODULE_5__.Difficulty.intermediate ||\n            advancedInput?.checked && _types_minesweeper__WEBPACK_IMPORTED_MODULE_5__.Difficulty.advanced ||\n            null;\n        if (nameInput?.value && difficulty) {\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_4__.addNewGame)(nameInput?.value, difficulty));\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_4__.changeActiveContainer)(_types_store__WEBPACK_IMPORTED_MODULE_7__.ApplicationContainers.BOARD));\n            nameInput.value = '';\n            beginnerInput.checked = false;\n            intermediateInput.checked = false;\n            advancedInput.checked = false;\n        }\n    }\n    render() {\n        if (!this.shadowRoot)\n            return;\n        this.shadowRoot.innerHTML = _components_Menu_Menu_template_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        (0,_utils_load_css__WEBPACK_IMPORTED_MODULE_2__.loadCSS)(this, _components_Menu_Menu_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'createGameButton')?.addEventListener('click', () => this.onCreateClick());\n    }\n}\ncustomElements.define('app-menu', Menu);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Menu/Menu.ts?");

/***/ }),

/***/ "./src/hooks/store.ts":
/*!****************************!*\
  !*** ./src/hooks/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useRevealTile: () => (/* binding */ useRevealTile),\n/* harmony export */   useToggleFlag: () => (/* binding */ useToggleFlag)\n/* harmony export */ });\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _types_minesweeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/types/minesweeper */ \"./src/types/minesweeper.ts\");\n\n\n\nfunction useRevealTile(gameUUID, row, col) {\n    const game = _store_index__WEBPACK_IMPORTED_MODULE_1__.applicationState.games.find(({ uuid }) => uuid === gameUUID);\n    if (game?.status !== _types_minesweeper__WEBPACK_IMPORTED_MODULE_2__.GameStatus.inProgress)\n        return false;\n    (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.revealTile)(gameUUID, row, col));\n    return true;\n}\nfunction useToggleFlag(gameUUID, row, col) {\n    const game = _store_index__WEBPACK_IMPORTED_MODULE_1__.applicationState.games.find(({ uuid }) => uuid === gameUUID);\n    if (game?.status !== _types_minesweeper__WEBPACK_IMPORTED_MODULE_2__.GameStatus.inProgress)\n        return false;\n    (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.placeFlag)(gameUUID, row, col));\n    return true;\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/hooks/store.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Menu/Menu */ \"./src/components/Menu/Menu.ts\");\n/* harmony import */ var _components_Board_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Board/Board */ \"./src/components/Board/Board.ts\");\n/* harmony import */ var _components_Game_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Game/Game */ \"./src/components/Game/Game.ts\");\n/* harmony import */ var _components_GameTile_GameTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/GameTile/GameTile */ \"./src/components/GameTile/GameTile.ts\");\n/* harmony import */ var _components_GlobalShortcutsProvider_GlobalShortcutsProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/GlobalShortcutsProvider/GlobalShortcutsProvider */ \"./src/components/GlobalShortcutsProvider/GlobalShortcutsProvider.ts\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://minesweeper/./src/index.ts?");

/***/ }),

/***/ "./src/lib/boolean.ts":
/*!****************************!*\
  !*** ./src/lib/boolean.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isTrue: () => (/* binding */ isTrue)\n/* harmony export */ });\nfunction isTrue(value) {\n    return value === 'true';\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/lib/boolean.ts?");

/***/ }),

/***/ "./src/lib/date.ts":
/*!*************************!*\
  !*** ./src/lib/date.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTimeDifference: () => (/* binding */ getTimeDifference)\n/* harmony export */ });\nfunction getTimeDifference(from, to) {\n    const diff = Math.round((new Date(to).getTime() - new Date(from).getTime()) / 1000);\n    const minutes = Math.floor(diff / 60);\n    const seconds = diff - minutes * 60;\n    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/lib/date.ts?");

/***/ }),

/***/ "./src/lib/minesweeper.ts":
/*!********************************!*\
  !*** ./src/lib/minesweeper.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MineSweeper: () => (/* binding */ MineSweeper)\n/* harmony export */ });\n/* harmony import */ var _types_minesweeper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/types/minesweeper */ \"./src/types/minesweeper.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.ts\");\n\n\nclass MineSweeper {\n    static createBoard(difficulty) {\n        const { rows, cols, mines } = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.GameLayout[difficulty];\n        return MineSweeper.initializeBoard({\n            rows,\n            cols,\n            mines,\n            flags: 0,\n            revealed: 0,\n            tiles: []\n        });\n    }\n    static initializeBoard(board) {\n        return MineSweeper.fillMineCount(MineSweeper.placeMines(MineSweeper.fillWithDefault(board)));\n    }\n    static fillWithDefault(board) {\n        for (let row = 0; row < board.rows; row++) {\n            board.tiles[row] = [];\n            for (let col = 0; col < board.cols; col++) {\n                board.tiles[row][col] = {\n                    isMine: false,\n                    isRevealed: false,\n                    hasFlag: false,\n                    mineCount: 0,\n                    row,\n                    col\n                };\n            }\n        }\n        return board;\n    }\n    static placeMines(board) {\n        let minesPlaced = 0;\n        while (minesPlaced < board.mines) {\n            const row = Math.floor(Math.random() * board.rows);\n            const col = Math.floor(Math.random() * board.cols);\n            if (board.tiles[row][col].isMine)\n                continue;\n            board.tiles[row][col].isMine = true;\n            minesPlaced++;\n        }\n        return board;\n    }\n    static fillMineCount(board) {\n        for (let row = 0; row < board.rows; row++) {\n            for (let col = 0; col < board.cols; col++) {\n                if (board.tiles[row][col].isMine)\n                    continue;\n                let count = 0;\n                for (let dx = -1; dx <= 1; dx++) {\n                    for (let dy = -1; dy <= 1; dy++) {\n                        const nRow = row + dx;\n                        const nCol = col + dy;\n                        if (nRow >= 0 && nRow < board.rows && nCol >= 0 && nCol < board.cols && board.tiles[nRow][nCol].isMine)\n                            count++;\n                    }\n                }\n                board.tiles[row][col].mineCount = count;\n            }\n        }\n        return board;\n    }\n    static toggleFlag(board, row, col) {\n        const tile = MineSweeper.getTile(board, row, col);\n        if (!tile || !!tile?.isRevealed)\n            return board;\n        const changedFlag = !board.tiles[row][col].hasFlag;\n        if (changedFlag && board.flags === board.mines || !changedFlag && board.flags === 0)\n            return board;\n        if (changedFlag)\n            board.flags++;\n        else\n            board.flags--;\n        board.tiles[row][col].hasFlag = changedFlag;\n        return board;\n    }\n    static revealTile(board, row, col) {\n        const tile = MineSweeper.getTile(board, row, col);\n        if (!tile || tile?.isRevealed)\n            return { board: board, status: _types_minesweeper__WEBPACK_IMPORTED_MODULE_0__.GameStatus.inProgress };\n        board.tiles[row][col].isRevealed = true;\n        board.revealed++;\n        if (tile.isMine)\n            return { board: board, status: _types_minesweeper__WEBPACK_IMPORTED_MODULE_0__.GameStatus.lost };\n        else if (tile.mineCount === 0) {\n            for (let dx = -1; dx <= 1; dx++) {\n                for (let dy = -1; dy <= 1; dy++) {\n                    MineSweeper.revealTile(board, row + dx, col + dy);\n                }\n            }\n        }\n        const isWin = board.revealed === (board.rows * board.cols - board.mines);\n        return { board: board, status: isWin ? _types_minesweeper__WEBPACK_IMPORTED_MODULE_0__.GameStatus.win : _types_minesweeper__WEBPACK_IMPORTED_MODULE_0__.GameStatus.inProgress };\n    }\n    static getTile(board, row, col) {\n        if (row < 0 || row >= board.rows || col < 0 || col >= board.cols)\n            return null;\n        return board.tiles[row][col];\n    }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/lib/minesweeper.ts?");

/***/ }),

/***/ "./src/lib/timer.ts":
/*!**************************!*\
  !*** ./src/lib/timer.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Timer: () => (/* binding */ Timer)\n/* harmony export */ });\n/* harmony import */ var _lib_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/date */ \"./src/lib/date.ts\");\n\nfunction startTimer(gameUUID, startedAt) {\n    const timerComponent = document?.\n        querySelector('app-board')?.shadowRoot?.\n        querySelector(`app-game[game-uuid=\"${gameUUID}\"]`)?.shadowRoot?.getElementById(`timer-${gameUUID}`);\n    if (!timerComponent)\n        return;\n    const interval = setInterval(() => {\n        timerComponent.textContent = (0,_lib_date__WEBPACK_IMPORTED_MODULE_0__.getTimeDifference)(startedAt, new Date());\n    }, 1000);\n    localStorage.setItem(`time-${gameUUID}`, interval.toString());\n}\nfunction endTimer(gameUUID) {\n    const interval = localStorage.getItem(`time-${gameUUID}`);\n    if (interval)\n        clearInterval(interval);\n}\nconst Timer = {\n    startTimer,\n    endTimer\n};\n\n\n//# sourceURL=webpack://minesweeper/./src/lib/timer.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewGame: () => (/* binding */ addNewGame),\n/* harmony export */   changeActiveContainer: () => (/* binding */ changeActiveContainer),\n/* harmony export */   changeActiveGame: () => (/* binding */ changeActiveGame),\n/* harmony export */   changeActiveTile: () => (/* binding */ changeActiveTile),\n/* harmony export */   placeFlag: () => (/* binding */ placeFlag),\n/* harmony export */   removeGame: () => (/* binding */ removeGame),\n/* harmony export */   revealTile: () => (/* binding */ revealTile)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/types/store */ \"./src/types/store.ts\");\n\nfunction addNewGame(name, difficulty) {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.NEW_GAME,\n        payload: { name, difficulty }\n    };\n}\nfunction placeFlag(gameUUID, row, col) {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.PLACE_FLAG,\n        payload: { gameUUID, row, col }\n    };\n}\nfunction revealTile(gameUUID, row, col) {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.REVEAL_TILE,\n        payload: { gameUUID, row, col }\n    };\n}\nfunction removeGame(gameUUID) {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.REMOVE_GAME,\n        payload: { gameUUID }\n    };\n}\nfunction changeActiveContainer(container) {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.CHANGE_ACTIVE_CONTAINER,\n        payload: { container }\n    };\n}\nfunction changeActiveGame(gameUUID) {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.CHANGE_ACTIVE_GAME,\n        payload: { gameUUID }\n    };\n}\nfunction changeActiveTile(row, col) {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.CHANGE_ACTIVE_TILE,\n        payload: { row, col }\n    };\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applicationState: () => (/* binding */ applicationState),\n/* harmony export */   dispatch: () => (/* binding */ dispatch),\n/* harmony export */   subscribe: () => (/* binding */ subscribe)\n/* harmony export */ });\n/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/reducer */ \"./src/store/reducer.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types/store */ \"./src/types/store.ts\");\n\n\nlet applicationState = {\n    games: [],\n    activeContainer: _types_store__WEBPACK_IMPORTED_MODULE_1__.ApplicationContainers.MENU\n};\nconst cache = localStorage.getItem('applicationState');\nif (cache)\n    applicationState = JSON.parse(cache);\nconst observers = [];\nfunction subscribe(observer) {\n    observers.push(observer);\n}\nfunction dispatch(action) {\n    applicationState = (0,_store_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer)(action, applicationState);\n    localStorage.setItem('applicationState', JSON.stringify(applicationState));\n    observers.forEach(observer => observer.render());\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _lib_minesweeper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/minesweeper */ \"./src/lib/minesweeper.ts\");\n/* harmony import */ var _types_minesweeper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types/minesweeper */ \"./src/types/minesweeper.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/types/store */ \"./src/types/store.ts\");\n\n\n\nfunction reducer(action, currentState) {\n    let clone = structuredClone(currentState);\n    if (action.type === _types_store__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.CHANGE_ACTIVE_TILE) {\n        clone.activeTile = { row: action.payload.row, col: action.payload.col };\n    }\n    else if (action.type === _types_store__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.CHANGE_ACTIVE_GAME) {\n        clone.activeGame = action.payload.gameUUID;\n        clone.activeTile = { row: 0, col: 0 };\n    }\n    else if (action.type === _types_store__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.CHANGE_ACTIVE_CONTAINER) {\n        clone.activeContainer = action.payload.container;\n    }\n    else if (action.type === _types_store__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.NEW_GAME) {\n        const newUUID = crypto.randomUUID();\n        clone.activeGame = newUUID;\n        clone.activeTile = { row: 0, col: 0 };\n        clone.games.push({\n            ...action.payload,\n            uuid: newUUID,\n            startedAt: new Date(),\n            status: _types_minesweeper__WEBPACK_IMPORTED_MODULE_1__.GameStatus.inProgress,\n            board: _lib_minesweeper__WEBPACK_IMPORTED_MODULE_0__.MineSweeper.createBoard(action.payload.difficulty),\n        });\n    }\n    else if (action.type === _types_store__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.REMOVE_GAME) {\n        const { gameUUID } = action.payload;\n        const gameIndex = clone.games.findIndex(({ uuid }) => uuid === gameUUID);\n        clone.games.splice(gameIndex, 1);\n    }\n    else {\n        const { gameUUID, row, col } = action.payload;\n        const gameIndex = clone.games.findIndex(({ uuid }) => uuid === gameUUID);\n        if (clone.games[gameIndex].status === _types_minesweeper__WEBPACK_IMPORTED_MODULE_1__.GameStatus.inProgress) {\n            if (action.type === _types_store__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.PLACE_FLAG)\n                clone.games[gameIndex].board = _lib_minesweeper__WEBPACK_IMPORTED_MODULE_0__.MineSweeper.toggleFlag(clone.games[gameIndex].board, row, col);\n            else if (action.type === _types_store__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.REVEAL_TILE) {\n                const { board, status } = _lib_minesweeper__WEBPACK_IMPORTED_MODULE_0__.MineSweeper.revealTile(clone.games[gameIndex].board, row, col);\n                clone.games[gameIndex].board = board;\n                clone.games[gameIndex].status = status;\n                if (status !== _types_minesweeper__WEBPACK_IMPORTED_MODULE_1__.GameStatus.inProgress)\n                    clone.games[gameIndex].finishedAt = new Date();\n            }\n        }\n    }\n    return clone;\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/store/reducer.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ActionTypes: () => (/* binding */ ActionTypes),\n/* harmony export */   ApplicationContainers: () => (/* binding */ ApplicationContainers)\n/* harmony export */ });\nvar ApplicationContainers;\n(function (ApplicationContainers) {\n    ApplicationContainers[\"MENU\"] = \"MENU\";\n    ApplicationContainers[\"BOARD\"] = \"BOARD\";\n})(ApplicationContainers || (ApplicationContainers = {}));\nvar ActionTypes;\n(function (ActionTypes) {\n    ActionTypes[\"NEW_GAME\"] = \"NEW_GAME\";\n    ActionTypes[\"REMOVE_GAME\"] = \"REMOVE_GAME\";\n    ActionTypes[\"PLACE_FLAG\"] = \"PLACE_FLAG\";\n    ActionTypes[\"REVEAL_TILE\"] = \"REVEAL_TILE\";\n    ActionTypes[\"CHANGE_ACTIVE_CONTAINER\"] = \"CHANGE_ACTIVE_CONTAINER\";\n    ActionTypes[\"CHANGE_ACTIVE_GAME\"] = \"CHANGE_ACTIVE_GAME\";\n    ActionTypes[\"CHANGE_ACTIVE_TILE\"] = \"CHANGE_ACTIVE_TILE\";\n    ActionTypes[\"CHANGE_ACTIVE_MENU_ITEM\"] = \"CHANGE_ACTIVE_MENU_ITEM\";\n})(ActionTypes || (ActionTypes = {}));\n\n\n//# sourceURL=webpack://minesweeper/./src/types/store.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFromShadowById: () => (/* binding */ getFromShadowById)\n/* harmony export */ });\nfunction getFromShadowById(element, id) {\n    return element.shadowRoot?.getElementById(id);\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/utils/get-from-shadow-by-id.ts?");

/***/ }),

/***/ "./src/utils/load-css.ts":
/*!*******************************!*\
  !*** ./src/utils/load-css.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadCSS: () => (/* binding */ loadCSS)\n/* harmony export */ });\nfunction loadCSS(element, styles) {\n    const css = element.ownerDocument.createElement('style');\n    css.innerHTML = styles;\n    element.shadowRoot?.appendChild(css);\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/utils/load-css.ts?");

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