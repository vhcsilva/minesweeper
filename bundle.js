/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Board/Board.css":
/*!****************************************!*\
  !*** ./src/components/Board/Board.css ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.app-board {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  gap: 4px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Board/Board.css?");

/***/ }),

/***/ "./src/components/GameTile/GameTile.css":
/*!**********************************************!*\
  !*** ./src/components/GameTile/GameTile.css ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.game-tile {\n  display: inline-block;\n\n  width: var(--gameTileSize);\n  height: var(--gameTileSize);\n\n  border-radius: 0;\n  border: 1px solid var(--white);\n  outline: 0;\n  margin: 0;\n  padding: 0;\n\n  background: radial-gradient(circle, var(--blue300) 0%, var(--blue700) 100%);\n}\n\n.game-tile:active {\n  background: radial-gradient(circle, var(--blue500) 0%, var(--blue700) 100%);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/GameTile/GameTile.css?");

/***/ }),

/***/ "./src/components/Game/Game.css":
/*!**************************************!*\
  !*** ./src/components/Game/Game.css ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:host {\n  width: min-content;\n  height: min-content;\n}\n\n.game {\n  width: min-content;\n  height: min-content;\n\n  display: flex;\n  flex-direction: column;\n\n  border: 1px solid var(--blue500);\n  padding: 8px;\n}\n\n.game .game-header {\n  display: flex;\n}\n\n.game .game-tiles {\n  display: grid;\n}\n\n.game .game-tiles-beginner {\n  grid-template-columns: repeat(8, var(--gameTileSize));\n  grid-template-rows: repeat(8, var(--gameTileSize));\n}\n\n.game .game-tiles-intermediate {\n  grid-template-columns: repeat(16, var(--gameTileSize));\n  grid-template-rows: repeat(16, var(--gameTileSize));\n}\n\n.game .game-tiles-advanced {\n  grid-template-columns: repeat(30, var(--gameTileSize));\n  grid-template-rows: repeat(16, var(--gameTileSize));\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Game/Game.css?");

/***/ }),

/***/ "./src/components/Menu/Menu.css":
/*!**************************************!*\
  !*** ./src/components/Menu/Menu.css ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.app-menu {\n  padding: 12px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.app-menu div {\n  display: inherit;\n  flex-direction: inherit;\n  gap: 4px;\n}\n\n.app-menu h3 {\n  text-align: center;\n  margin: 0;\n}\n\n.app-menu ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.app-menu ul li + li {\n  margin-top: 4px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Menu/Menu.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/Board/Board.template.html":
/*!**************************************************!*\
  !*** ./src/components/Board/Board.template.html ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div id=\\\"app-board\\\" class=\\\"app-board\\\">\\n\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://minesweeper/./src/components/Board/Board.template.html?");

/***/ }),

/***/ "./src/components/GameTile/GameTile.template.html":
/*!********************************************************!*\
  !*** ./src/components/GameTile/GameTile.template.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<button class=\\\"game-tile\\\"></button>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://minesweeper/./src/components/GameTile/GameTile.template.html?");

/***/ }),

/***/ "./src/components/Game/Game.template.html":
/*!************************************************!*\
  !*** ./src/components/Game/Game.template.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"game\\\">\\n  <div class=\\\"game-header\\\">\\n    <span id=\\\"game-name\\\"></span>\\n    <span id=\\\"game-difficulty\\\"></span>\\n  </div>\\n\\n  <div id=\\\"game-tiles\\\" class=\\\"game-tiles\\\">\\n\\n  </div>\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://minesweeper/./src/components/Game/Game.template.html?");

/***/ }),

/***/ "./src/components/Menu/Menu.template.html":
/*!************************************************!*\
  !*** ./src/components/Menu/Menu.template.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"app-menu\\\">\\n  <h3>New Game</h3>\\n\\n  <div>\\n    <label for=\\\"nameInput\\\">Name</label>\\n    <input type=\\\"text\\\" name=\\\"nameInput\\\" id=\\\"nameInput\\\">\\n  </div>\\n\\n  <ul>\\n    <li>\\n      <input type=\\\"radio\\\" name=\\\"difficulty\\\" id=\\\"beginnerInput\\\">\\n      <label for=\\\"beginnerInput\\\">Beginner</label>\\n    </li>\\n\\n    <li>\\n      <input type=\\\"radio\\\" name=\\\"difficulty\\\" id=\\\"intermediateInput\\\">\\n      <label for=\\\"intermediateInput\\\">Intermediate</label>\\n    </li>\\n\\n    <li>\\n      <input type=\\\"radio\\\" name=\\\"difficulty\\\" id=\\\"advancedInput\\\">\\n      <label for=\\\"advancedInput\\\">Advanced</label>\\n    </li>\\n  </ul>\\n\\n  <button id=\\\"createGameButton\\\">Create</button>\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://minesweeper/./src/components/Menu/Menu.template.html?");

/***/ }),

/***/ "./src/components/Board/Board.ts":
/*!***************************************!*\
  !*** ./src/components/Board/Board.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _utils_set_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/set-attributes */ \"./src/utils/set-attributes.ts\");\n/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/load-css */ \"./src/utils/load-css.ts\");\n/* harmony import */ var _components_Board_Board_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Board/Board.css */ \"./src/components/Board/Board.css\");\n/* harmony import */ var _components_Board_Board_template_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Board/Board.template.html */ \"./src/components/Board/Board.template.html\");\n/* harmony import */ var _utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/get-from-shadow-by-id */ \"./src/utils/get-from-shadow-by-id.ts\");\n\n\n\n\n\n\nclass Board extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.subscribe)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (!this.shadowRoot)\n            return;\n        this.shadowRoot.innerHTML = _components_Board_Board_template_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n        (0,_utils_load_css__WEBPACK_IMPORTED_MODULE_2__.loadCSS)(this, _components_Board_Board_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n        const board = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_5__.getFromShadowById)(this, 'app-board');\n        _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.games.forEach(game => {\n            const appGame = this.ownerDocument.createElement('app-game');\n            (0,_utils_set_attributes__WEBPACK_IMPORTED_MODULE_1__.setAttributes)(appGame, {\n                'game-uuid': game.uuid,\n            });\n            board === null || board === void 0 ? void 0 : board.appendChild(appGame);\n        });\n    }\n}\ncustomElements.define('app-board', Board);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Board/Board.ts?");

/***/ }),

/***/ "./src/components/GameTile/GameTile.ts":
/*!*********************************************!*\
  !*** ./src/components/GameTile/GameTile.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameTile: () => (/* binding */ GameTile)\n/* harmony export */ });\n/* harmony import */ var _components_GameTile_GameTile_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/GameTile/GameTile.template.html */ \"./src/components/GameTile/GameTile.template.html\");\n/* harmony import */ var _components_GameTile_GameTile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/GameTile/GameTile.css */ \"./src/components/GameTile/GameTile.css\");\n/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/load-css */ \"./src/utils/load-css.ts\");\n\n\n\nclass GameTile extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = _components_GameTile_GameTile_template_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        (0,_utils_load_css__WEBPACK_IMPORTED_MODULE_2__.loadCSS)(this, _components_GameTile_GameTile_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    }\n}\ncustomElements.define('app-game-tile', GameTile);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/GameTile/GameTile.ts?");

/***/ }),

/***/ "./src/components/Game/Game.ts":
/*!*************************************!*\
  !*** ./src/components/Game/Game.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/get-from-shadow-by-id */ \"./src/utils/get-from-shadow-by-id.ts\");\n/* harmony import */ var _components_Game_Game_template_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Game/Game.template.html */ \"./src/components/Game/Game.template.html\");\n/* harmony import */ var _components_Game_Game_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Game/Game.css */ \"./src/components/Game/Game.css\");\n/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/load-css */ \"./src/utils/load-css.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.ts\");\n\n\n\n\n\n\nclass Game extends HTMLElement {\n    constructor() {\n        super();\n        this.uuid = '';\n        this.attachShadow({ mode: 'open' });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.subscribe)(this);\n    }\n    static get observedAttributes() {\n        return ['game-uuid'];\n    }\n    attributeChangedCallback(prop, _, value) {\n        const changedAttribute = prop.replace('game-', '');\n        this[changedAttribute] = value;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = _components_Game_Game_template_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        (0,_utils_load_css__WEBPACK_IMPORTED_MODULE_4__.loadCSS)(this, _components_Game_Game_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n        const game = _store_index__WEBPACK_IMPORTED_MODULE_0__.applicationState.games.find(({ uuid }) => uuid === this.uuid);\n        if (!game)\n            return;\n        const gameName = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, 'game-name');\n        if (gameName)\n            gameName.textContent = game.name;\n        const gameDifficulty = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, 'game-difficulty');\n        if (gameDifficulty)\n            gameDifficulty.textContent = game.difficulty;\n        const tilesContainer = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_1__.getFromShadowById)(this, 'game-tiles');\n        if (tilesContainer) {\n            tilesContainer.classList.add(`game-tiles-${game.difficulty}`);\n            const { rows, cols } = _utils_constants__WEBPACK_IMPORTED_MODULE_5__.GameLayout[game.difficulty];\n            for (let row = 0; row < rows; row++) {\n                for (let col = 0; col < cols; col++) {\n                    const tile = this.ownerDocument.createElement('app-game-tile');\n                    tilesContainer.appendChild(tile);\n                }\n            }\n        }\n    }\n}\ncustomElements.define('app-game', Game);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Game/Game.ts?");

/***/ }),

/***/ "./src/components/Menu/Menu.ts":
/*!*************************************!*\
  !*** ./src/components/Menu/Menu.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _components_Menu_Menu_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Menu/Menu.template.html */ \"./src/components/Menu/Menu.template.html\");\n/* harmony import */ var _components_Menu_Menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Menu/Menu.css */ \"./src/components/Menu/Menu.css\");\n/* harmony import */ var _utils_load_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/load-css */ \"./src/utils/load-css.ts\");\n/* harmony import */ var _utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/get-from-shadow-by-id */ \"./src/utils/get-from-shadow-by-id.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _types_minesweeper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/types/minesweeper */ \"./src/types/minesweeper.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.ts\");\n\n\n\n\n\n\n\nclass Menu extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    onCreateClick() {\n        const nameInput = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'nameInput');\n        const beginnerInput = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'beginnerInput');\n        const intermediateInput = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'intermediateInput');\n        const advancedInput = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'advancedInput');\n        const difficulty = (beginnerInput === null || beginnerInput === void 0 ? void 0 : beginnerInput.checked) && _types_minesweeper__WEBPACK_IMPORTED_MODULE_5__.Difficulty.beginner ||\n            (intermediateInput === null || intermediateInput === void 0 ? void 0 : intermediateInput.checked) && _types_minesweeper__WEBPACK_IMPORTED_MODULE_5__.Difficulty.intermediate ||\n            (advancedInput === null || advancedInput === void 0 ? void 0 : advancedInput.checked) && _types_minesweeper__WEBPACK_IMPORTED_MODULE_5__.Difficulty.advanced ||\n            null;\n        if ((nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) && difficulty) {\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_4__.addNewGame)(nameInput === null || nameInput === void 0 ? void 0 : nameInput.value, difficulty));\n            nameInput.value = '';\n            beginnerInput.checked = false;\n            intermediateInput.checked = false;\n            advancedInput.checked = false;\n        }\n    }\n    render() {\n        var _a;\n        if (!this.shadowRoot)\n            return;\n        this.shadowRoot.innerHTML = _components_Menu_Menu_template_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        (0,_utils_load_css__WEBPACK_IMPORTED_MODULE_2__.loadCSS)(this, _components_Menu_Menu_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        (_a = (0,_utils_get_from_shadow_by_id__WEBPACK_IMPORTED_MODULE_3__.getFromShadowById)(this, 'createGameButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => this.onCreateClick());\n    }\n}\ncustomElements.define('app-menu', Menu);\n\n\n//# sourceURL=webpack://minesweeper/./src/components/Menu/Menu.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Menu/Menu */ \"./src/components/Menu/Menu.ts\");\n/* harmony import */ var _components_Board_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Board/Board */ \"./src/components/Board/Board.ts\");\n/* harmony import */ var _components_Game_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Game/Game */ \"./src/components/Game/Game.ts\");\n/* harmony import */ var _components_GameTile_GameTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/GameTile/GameTile */ \"./src/components/GameTile/GameTile.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://minesweeper/./src/index.ts?");

/***/ }),

/***/ "./src/lib/minesweeper.ts":
/*!********************************!*\
  !*** ./src/lib/minesweeper.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MineSweeper: () => (/* binding */ MineSweeper)\n/* harmony export */ });\n/* harmony import */ var _types_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/types/errors */ \"./src/types/errors.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constants */ \"./src/utils/constants.ts\");\n\n\nclass MineSweeper {\n    constructor(difficulty) {\n        this.difficulty = difficulty;\n        const { rows, cols, mines } = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.GameLayout[difficulty];\n        this.rowsNumber = rows;\n        this.colsNumber = cols;\n        this.minesNumber = mines;\n        this.board = [];\n        this.initializeBoard();\n    }\n    initializeBoard() {\n        this.fillWithDefault();\n        this.placeMines();\n        this.fillMineCount();\n    }\n    fillWithDefault() {\n        for (let row = 0; row < this.rowsNumber; row++) {\n            this.board[row] = [];\n            for (let col = 0; col < this.colsNumber; col++) {\n                this.board[row][col] = {\n                    isMine: false,\n                    isRevealed: false,\n                    hasFlag: false,\n                    mineCount: 0,\n                    row,\n                    col\n                };\n            }\n        }\n    }\n    placeMines() {\n        let minesPlaced = 0;\n        while (minesPlaced < this.minesNumber) {\n            const row = Math.floor(Math.random() * this.rowsNumber);\n            const col = Math.floor(Math.random() * this.colsNumber);\n            if (this.board[row][col].isMine)\n                return;\n            this.board[row][col].isMine = true;\n            minesPlaced++;\n        }\n    }\n    fillMineCount() {\n        for (let row = 0; row < this.rowsNumber; row++) {\n            for (let col = 0; col < this.colsNumber; col++) {\n                if (this.board[row][col].isMine)\n                    continue;\n                let count = 0;\n                for (let dx = -1; dx <= 1; dx++) {\n                    for (let dy = -1; dy <= 1; dy++) {\n                        const nRow = row + dx;\n                        const nCol = col + dy;\n                        if (nRow >= 0 && nRow < this.rowsNumber && nCol >= 0 && nCol < this.colsNumber && this.board[nRow][nCol].isMine)\n                            count++;\n                    }\n                }\n                this.board[row][col].mineCount = count;\n            }\n        }\n    }\n    toggleFlag(row, col) {\n        const tile = this.getTile(row, col);\n        if (!tile || !!(tile === null || tile === void 0 ? void 0 : tile.isRevealed))\n            return;\n        this.board[row][col].hasFlag = !this.board[row][col].hasFlag;\n    }\n    revealTile(row, col) {\n        const tile = this.getTile(row, col);\n        if (!tile)\n            return;\n        this.board[row][col].isRevealed = true;\n        if (tile.isMine)\n            throw new _types_errors__WEBPACK_IMPORTED_MODULE_0__.GameOverError();\n        if (tile.mineCount === 0) {\n            for (let dx = -1; dx <= 1; dx++) {\n                for (let dy = -1; dy <= 1; dy++) {\n                    this.revealTile(row + dx, row + dy);\n                }\n            }\n        }\n    }\n    getTile(row, col) {\n        if (row < 0 || row >= this.rowsNumber || col < 0 || col >= this.colsNumber)\n            return null;\n        return this.board[row][col];\n    }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/lib/minesweeper.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewGame: () => (/* binding */ addNewGame)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/types/store */ \"./src/types/store.ts\");\n\nfunction addNewGame(name, difficulty) {\n    return {\n        type: _types_store__WEBPACK_IMPORTED_MODULE_0__.ActionTypes.NEW_GAME,\n        payload: { name, difficulty }\n    };\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applicationState: () => (/* binding */ applicationState),\n/* harmony export */   dispatch: () => (/* binding */ dispatch),\n/* harmony export */   subscribe: () => (/* binding */ subscribe)\n/* harmony export */ });\n/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/reducer */ \"./src/store/reducer.ts\");\n\nlet applicationState = {\n    games: []\n};\nconst observers = [];\nfunction subscribe(observer) {\n    observers.push(observer);\n}\nfunction dispatch(action) {\n    applicationState = (0,_store_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer)(action, applicationState);\n    observers.forEach(observer => observer.render());\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _lib_minesweeper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/minesweeper */ \"./src/lib/minesweeper.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types/store */ \"./src/types/store.ts\");\n\n\nfunction reducer(action, currentState) {\n    const clone = JSON.parse(JSON.stringify(currentState));\n    switch (action.type) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NEW_GAME:\n            return Object.assign(Object.assign({}, clone), { games: [\n                    ...clone.games,\n                    Object.assign(Object.assign({}, action.payload), { uuid: crypto.randomUUID(), startedAt: new Date(), minesweeper: new _lib_minesweeper__WEBPACK_IMPORTED_MODULE_0__.MineSweeper(action.payload.difficulty) })\n                ] });\n        default:\n            return clone;\n    }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/errors.ts":
/*!*****************************!*\
  !*** ./src/types/errors.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameOverError: () => (/* binding */ GameOverError)\n/* harmony export */ });\nclass GameOverError extends Error {\n    constructor() {\n        super('Game Over');\n    }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/types/errors.ts?");

/***/ }),

/***/ "./src/types/minesweeper.ts":
/*!**********************************!*\
  !*** ./src/types/minesweeper.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Difficulty: () => (/* binding */ Difficulty)\n/* harmony export */ });\nvar Difficulty;\n(function (Difficulty) {\n    Difficulty[\"beginner\"] = \"beginner\";\n    Difficulty[\"intermediate\"] = \"intermediate\";\n    Difficulty[\"advanced\"] = \"advanced\";\n})(Difficulty || (Difficulty = {}));\n\n\n//# sourceURL=webpack://minesweeper/./src/types/minesweeper.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ActionTypes: () => (/* binding */ ActionTypes)\n/* harmony export */ });\nvar ActionTypes;\n(function (ActionTypes) {\n    ActionTypes[\"NEW_GAME\"] = \"NEW_GAME\";\n})(ActionTypes || (ActionTypes = {}));\n\n\n//# sourceURL=webpack://minesweeper/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameLayout: () => (/* binding */ GameLayout)\n/* harmony export */ });\nconst GameLayout = {\n    beginner: {\n        cols: 8,\n        rows: 8,\n        mines: 10,\n    },\n    intermediate: {\n        cols: 16,\n        rows: 16,\n        mines: 40,\n    },\n    advanced: {\n        cols: 30,\n        rows: 16,\n        mines: 99,\n    },\n};\n\n\n//# sourceURL=webpack://minesweeper/./src/utils/constants.ts?");

/***/ }),

/***/ "./src/utils/get-from-shadow-by-id.ts":
/*!********************************************!*\
  !*** ./src/utils/get-from-shadow-by-id.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFromShadowById: () => (/* binding */ getFromShadowById)\n/* harmony export */ });\nfunction getFromShadowById(element, id) {\n    var _a;\n    return (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(id);\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/utils/get-from-shadow-by-id.ts?");

/***/ }),

/***/ "./src/utils/load-css.ts":
/*!*******************************!*\
  !*** ./src/utils/load-css.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadCSS: () => (/* binding */ loadCSS)\n/* harmony export */ });\nfunction loadCSS(element, styles) {\n    var _a;\n    const css = element.ownerDocument.createElement('style');\n    css.innerHTML = styles;\n    (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/utils/load-css.ts?");

/***/ }),

/***/ "./src/utils/set-attributes.ts":
/*!*************************************!*\
  !*** ./src/utils/set-attributes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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