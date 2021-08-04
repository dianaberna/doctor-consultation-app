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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  margin: 0 auto 0 auto;\\n  min-width: 100vw;\\n  background-color: #F9F9F9;\\n}\\n\\n.homepage {\\n  padding: 0 20px 0 20px;\\n  height: 100vh;\\n  background-color: #F9F9F9;\\n  background-repeat: no-repeat;\\n  background-position: left bottom;\\n  background-size: contain;\\n  background-attachment: fixed;\\n  margin-top: 100px;\\n  position: fixed;\\n}\\n\\n.doctorpage-image {\\n  margin: 0;\\n  padding: 0 20px 0 20px;\\n  height: 293px;\\n  background-color: #F9F9F9;\\n  background-repeat: no-repeat;\\n  background-position: left top;\\n  background-size: contain;\\n  background-attachment: fixed;\\n}\\n\\n.doctorpage-content {\\n  border-radius: 30px 30px 0 0;\\n  padding: 40px 20px;\\n  margin-top: -80px;\\n  background-color: #F9F9F9;\\n}\\n\\n.doctorpage-details {\\n  display: flex;\\n}\\n\\n.doctorpage-details .avatar {\\n  height: 107px;\\n}\\n\\n.doctorpage-details p {\\n  margin-top: -10px;\\n}\\n\\n.doctorpage-details div img {\\n  padding-right: 15px;\\n}\\n\\n#title-doctor {\\n  display: flex;\\n}\\n\\n#reset-doctor {\\n  margin-top: -15px;\\n  margin-left: 10px;\\n}\\n\\n.mainpage {\\n  background-color: #F9F9F9;\\n  padding: 10px 20px;\\n  margin-top: 50px;\\n}\\n\\n#profile {\\n  right: 20px;\\n  position: absolute;\\n  top: 50px;\\n}\\n\\n.container {\\n  padding: 0 20px;\\n}\\n\\n.navbar {\\n  position: absolute;\\n  top: 50px;\\n  width: 95%;\\n}\\n\\n.navbar .profile {\\n  margin-right: 40px;\\n  float: right;\\n}\\n\\nh1 {\\n  color: #1e1c61;\\n  font-size: 30px;\\n  font-weight: 500;\\n}\\n\\nh2 {\\n  color: #1e1c61;\\n  font-size: 16px;\\n  font-weight: 700;\\n}\\n\\nh3 {\\n  color: #1e1c61;\\n  font-size: 16px;\\n  font-weight: 400;\\n  margin-top: 0;\\n}\\n\\n.doctorPage h2 {\\n  color: #1e1c61;\\n  font-size: 18px;\\n  font-weight: 700;\\n}\\n\\n.doctorPage p {\\n  color: #666797;\\n  font-size: 14px;\\n  margin-top: -15px;\\n}\\n\\np {\\n  color: rgba(30, 28, 97, 0.65);\\n  font-size: 16px;\\n}\\n\\n/* Homepage */\\n.button {\\n  background-color: #ef716b;\\n  border: 0px;\\n  border-radius: 35px;\\n  color: #f9f9f9;\\n  height: 40px;\\n  top: 20px;\\n  padding: 10px 25px;\\n  position: relative;\\n}\\n\\n/* Getstarted Page */\\n#textSearch {\\n  background-color: #F2F2F2;\\n  border: 0px;\\n  border-radius: 73px;\\n  width: 90%;\\n  height: 45px;\\n  padding-left: 20px;\\n}\\n\\n#back, #other {\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-color: transparent;\\n  border: 0;\\n  position: fixed;\\n  top: 22px;\\n  left: 5%;\\n}\\n\\n#other {\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-color: transparent;\\n  position: fixed;\\n  height: 20px;\\n  left: 90%;\\n  top: 20px;\\n}\\n\\n#submitSearch, .back {\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-color: #F57E71;\\n  border: 0;\\n  position: absolute;\\n  height: 53px;\\n  width: 75px;\\n  right: 5%;\\n  margin-top: -3px;\\n  border-radius: 30px;\\n}\\n\\n.container-categories {\\n  display: flex;\\n  flex-direction: row;\\n  overflow-y: scroll;\\n  padding: 20px 0;\\n}\\n\\n.container-categories .item {\\n  border-radius: 15px;\\n  height: 120px;\\n  width: 113px;\\n  background-color: #fff;\\n  margin-right: 20px;\\n  padding: 0 10px 25px 25px;\\n  box-shadow: 1px 6px 11px rgba(0, 0, 0, 0.03);\\n}\\n\\n.container-categories::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.icon {\\n  height: 84px;\\n  width: 84px;\\n  position: relative;\\n  top: -10px;\\n  right: -20px;\\n  border-radius: 15px;\\n  text-align: center;\\n}\\n\\n.icon img {\\n  padding-top: 25px;\\n}\\n\\n.icon.dental {\\n  background-color: #4B7FFB;\\n}\\n\\n.icon.heart {\\n  background-color: #FFB167;\\n}\\n\\n.icon.eye {\\n  background-color: #F57E71;\\n}\\n\\n.doctor {\\n  width: 100%;\\n  border: 0px;\\n  height: 87px;\\n  border-radius: 20px;\\n  margin-bottom: 20px;\\n  padding: 15px;\\n  text-align: left;\\n}\\n\\n.doctor img {\\n  padding-right: 15px;\\n  height: 65px;\\n  margin-top: -5px;\\n  margin-left: -20px;\\n}\\n\\n.doctor p {\\n  margin-top: -5px;\\n  font-size: 14px;\\n}\\n\\n.doctor.heart {\\n  background-color: rgba(255, 177, 103, 0.1);\\n}\\n\\n.doctor.dental {\\n  background-color: rgba(75, 127, 251, 0.1);\\n}\\n\\n.button-content {\\n  margin-left: 70px;\\n  margin-top: -70px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://doctor_consultation_app/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://doctor_consultation_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/images/avatar1.svg":
/*!***************************************!*\
  !*** ./src/assets/images/avatar1.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"943c10fc5ce87a17df9d14aab1a05ef7.svg\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/avatar1.svg?");

/***/ }),

/***/ "./src/assets/images/avatar2.svg":
/*!***************************************!*\
  !*** ./src/assets/images/avatar2.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"b11a36d8516f0df485d99f63dc895143.svg\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/avatar2.svg?");

/***/ }),

/***/ "./src/assets/images/avatar3.svg":
/*!***************************************!*\
  !*** ./src/assets/images/avatar3.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8455eb9e6e424948c8308e86f120c3aa.svg\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/avatar3.svg?");

/***/ }),

/***/ "./src/assets/images/back.svg":
/*!************************************!*\
  !*** ./src/assets/images/back.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2797fa35a371e846dda1ef3bbda6bc58.svg\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/back.svg?");

/***/ }),

/***/ "./src/assets/images/bgdoctor.png":
/*!****************************************!*\
  !*** ./src/assets/images/bgdoctor.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c8f197de101ddce2ef52ee6717623f6b.png\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/bgdoctor.png?");

/***/ }),

/***/ "./src/assets/images/bghome.png":
/*!**************************************!*\
  !*** ./src/assets/images/bghome.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f0ffd836be6c9c1304898edc529c09eb.png\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/bghome.png?");

/***/ }),

/***/ "./src/assets/images/call.png":
/*!************************************!*\
  !*** ./src/assets/images/call.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"89958bfb87054e8f0fe409e901130f60.png\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/call.png?");

/***/ }),

/***/ "./src/assets/images/cons1.png":
/*!*************************************!*\
  !*** ./src/assets/images/cons1.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1feb94e9c41e9ab8e016797f7e4e2f4c.png\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/cons1.png?");

/***/ }),

/***/ "./src/assets/images/cons2.png":
/*!*************************************!*\
  !*** ./src/assets/images/cons2.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f47c430617fbbb54170dd61f774bc20f.png\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/cons2.png?");

/***/ }),

/***/ "./src/assets/images/dental.png":
/*!**************************************!*\
  !*** ./src/assets/images/dental.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"df134c8034b3adc22c11ea38fb8fccf3.png\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/dental.png?");

/***/ }),

/***/ "./src/assets/images/email.png":
/*!*************************************!*\
  !*** ./src/assets/images/email.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a6e2b64a0f7c4c31ddb41a262b239f6f.png\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/email.png?");

/***/ }),

/***/ "./src/assets/images/eye.svg":
/*!***********************************!*\
  !*** ./src/assets/images/eye.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2285b5131de2c1831677631cfaf96184.svg\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/eye.svg?");

/***/ }),

/***/ "./src/assets/images/heart.svg":
/*!*************************************!*\
  !*** ./src/assets/images/heart.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"cb1b9085cfd360961ee931d4ddb9571e.svg\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/heart.svg?");

/***/ }),

/***/ "./src/assets/images/menu-bar.svg":
/*!****************************************!*\
  !*** ./src/assets/images/menu-bar.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"12225886356ee6c30474eaaef7fa4ca4.svg\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/menu-bar.svg?");

/***/ }),

/***/ "./src/assets/images/other.svg":
/*!*************************************!*\
  !*** ./src/assets/images/other.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"303afb37774da9f8e8a0bb27649de7f0.svg\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/other.svg?");

/***/ }),

/***/ "./src/assets/images/profile.svg":
/*!***************************************!*\
  !*** ./src/assets/images/profile.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"ccec25a4e80659901210252b9deb760f.svg\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/profile.svg?");

/***/ }),

/***/ "./src/assets/images/search.svg":
/*!**************************************!*\
  !*** ./src/assets/images/search.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2f26d7f95c58923b372b2b4738693722.svg\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/search.svg?");

/***/ }),

/***/ "./src/assets/images/tel.png":
/*!***********************************!*\
  !*** ./src/assets/images/tel.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"b28e1876551511835b05c8ea1acf3e5e.png\");\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/images/tel.png?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://doctor_consultation_app/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://doctor_consultation_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://doctor_consultation_app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://doctor_consultation_app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://doctor_consultation_app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://doctor_consultation_app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://doctor_consultation_app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/categories.json":
/*!************************************!*\
  !*** ./src/assets/categories.json ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"categoriesList\":[{\"id\":1,\"name\":\"Dental Surgeon\",\"image\":\"dental.png\",\"classCSS\":\"dental\"},{\"id\":2,\"name\":\"Heart Surgeon\",\"image\":\"heart.png\",\"classCSS\":\"heart\"},{\"id\":3,\"name\":\"Eye Specialist\",\"image\":\"eye.png\",\"classCSS\":\"eye\"}]}');\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/categories.json?");

/***/ }),

/***/ "./src/assets/doctors.json":
/*!*********************************!*\
  !*** ./src/assets/doctors.json ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"doctorsList\":[{\"id\":1,\"firstname\":\"Stella\",\"lastname\":\"Kane\",\"classCSS\":\"heart\",\"categories\":\"Heart Surgeon\",\"workplace\":\"Flower Hospitals\",\"about\":\"Dr. Stella is the top most heart surgeon in Flower Hospital. She has done over 100 successful sugeries within past 3 years. She has achieved several awards for her wonderful contribution in her own field. She’s available for private consultation for given schedules.\"},{\"id\":2,\"firstname\":\"Joseph\",\"lastname\":\"Cart\",\"classCSS\":\"dental\",\"categories\":\"Dental Surgeon\",\"workplace\":\"Flower Hospitals\",\"about\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur justo a mi tempus pulvinar. Suspendisse pellentesque vitae turpis in suscipit. Proin dictum tempor dolor, sed hendrerit lorem consequat et.\"},{\"id\":3,\"firstname\":\"Stefani\",\"lastname\":\"Albert\",\"classCSS\":\"heart\",\"categories\":\"Heart Surgeon\",\"workplace\":\"Flower Hospitals\",\"about\":\"Donec luctus interdum sem sed posuere. Sed porttitor arcu mauris, vitae dictum enim porttitor sit amet. Proin ac nibh vitae nibh consectetur ullamcorper ac vel velit. Mauris dictum mi nisi, vel semper mauris accumsan id.\"}]}');\n\n//# sourceURL=webpack://doctor_consultation_app/./src/assets/doctors.json?");

/***/ }),

/***/ "./src/categories.js":
/*!***************************!*\
  !*** ./src/categories.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printCategoriesList\": () => (/* binding */ printCategoriesList)\n/* harmony export */ });\n/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic */ \"./src/generic.js\");\n/* harmony import */ var _doctor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor */ \"./src/doctor.js\");\n/* harmony import */ var _src_assets_images_dental_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/assets/images/dental.png */ \"./src/assets/images/dental.png\");\n/* harmony import */ var _src_assets_images_heart_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/assets/images/heart.svg */ \"./src/assets/images/heart.svg\");\n/* harmony import */ var _src_assets_images_eye_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/assets/images/eye.svg */ \"./src/assets/images/eye.svg\");\n\n\n\n\n\n\n\nfunction getIcon(id){\n  switch(id){\n    case 1: return _src_assets_images_dental_png__WEBPACK_IMPORTED_MODULE_2__.default;\n    case 2: return _src_assets_images_heart_svg__WEBPACK_IMPORTED_MODULE_3__.default;\n    case 3: return _src_assets_images_eye_svg__WEBPACK_IMPORTED_MODULE_4__.default;\n  }\n}\n\nfunction categoriesSearch(categoriesList, doctorList, id){\n\n  var resultcat = categoriesList\n    .filter(cat => cat.id === id);\n  \n  var result = doctorList\n    .filter(doc => doc.categories == resultcat[0].name)\n\n  ;(0,_generic__WEBPACK_IMPORTED_MODULE_0__.resetDoctorList)(categoriesList, doctorList);\n\n  var page = document.getElementById(\"result-doctor\");\n  page.innerHTML = \"\";\n  if(result.length == 0){\n    page.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"p\", \"No results\"));\n  }else{  \n      (0,_doctor__WEBPACK_IMPORTED_MODULE_1__.printDoctorsList)(page, categoriesList, result);\n  }\n}\n\nfunction printCategoriesList(page, categoriesList, doctorList){\n  \n  var div = document.createElement(\"div\");\n  div.className= \"container-categories\";\n  \n  categoriesList.forEach(element => {\n    var item = document.createElement(\"div\")\n    item.className = \"item\";\n    item.onclick = function(){ categoriesSearch(categoriesList, doctorList, element.id);}\n\n    var icon = document.createElement(\"div\");\n    icon.className = \"icon \"+element.classCSS;\n\n    var image = new Image(50, 50);\n    image.src = getIcon(element.id);\n    icon.appendChild(image);\n\n    item.appendChild(icon);\n    item.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"h3\",element.name))\n    div.appendChild(item)\n\n  });\n\n  page.appendChild(div);\n}\n\n//# sourceURL=webpack://doctor_consultation_app/./src/categories.js?");

/***/ }),

/***/ "./src/doctor.js":
/*!***********************!*\
  !*** ./src/doctor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printAvatarDoctor\": () => (/* binding */ printAvatarDoctor),\n/* harmony export */   \"printIcon\": () => (/* binding */ printIcon),\n/* harmony export */   \"printDoctorsList\": () => (/* binding */ printDoctorsList),\n/* harmony export */   \"printDoctor\": () => (/* binding */ printDoctor),\n/* harmony export */   \"createBanner\": () => (/* binding */ createBanner)\n/* harmony export */ });\n/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic */ \"./src/generic.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n/* harmony import */ var _src_assets_images_avatar1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/assets/images/avatar1.svg */ \"./src/assets/images/avatar1.svg\");\n/* harmony import */ var _src_assets_images_avatar2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/assets/images/avatar2.svg */ \"./src/assets/images/avatar2.svg\");\n/* harmony import */ var _src_assets_images_avatar3_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/assets/images/avatar3.svg */ \"./src/assets/images/avatar3.svg\");\n/* harmony import */ var _src_assets_images_tel_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/assets/images/tel.png */ \"./src/assets/images/tel.png\");\n/* harmony import */ var _src_assets_images_email_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/assets/images/email.png */ \"./src/assets/images/email.png\");\n/* harmony import */ var _src_assets_images_call_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/assets/images/call.png */ \"./src/assets/images/call.png\");\n/* harmony import */ var _src_assets_images_bgdoctor_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/assets/images/bgdoctor.png */ \"./src/assets/images/bgdoctor.png\");\n/* harmony import */ var _src_assets_images_cons1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/assets/images/cons1.png */ \"./src/assets/images/cons1.png\");\n/* harmony import */ var _src_assets_images_cons2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/assets/images/cons2.png */ \"./src/assets/images/cons2.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// TODO: improve\nfunction getAvatar(id){\n  switch(id){\n    case 1: return _src_assets_images_avatar1_svg__WEBPACK_IMPORTED_MODULE_2__.default;\n    case 2: return _src_assets_images_avatar2_svg__WEBPACK_IMPORTED_MODULE_3__.default;\n    case 3: return _src_assets_images_avatar3_svg__WEBPACK_IMPORTED_MODULE_4__.default;\n  }\n}\n\nfunction printAvatarDoctor(id){\n  var image = new Image(100, 100);\n  image.src = getAvatar(id);\n  image.class = \"avatar\"\n  return image;\n}\n\nfunction printIcon(name){\n  var image = new Image(35, 35);\n  switch(name){\n    case \"tel\": image.src = _src_assets_images_tel_png__WEBPACK_IMPORTED_MODULE_5__.default; break;\n    case \"email\": image.src = _src_assets_images_email_png__WEBPACK_IMPORTED_MODULE_6__.default; break;\n    case \"call\": image.src = _src_assets_images_call_png__WEBPACK_IMPORTED_MODULE_7__.default; break;\n  }\n  return image\n}\n\nfunction printDoctorsList(divcontainer, categoriesList, doctorsList){\n\n  doctorsList.forEach(element => {\n\n    const button = document.createElement(\"button\");\n    button.className = \"doctor \"+element.classCSS;\n    button.onclick = function() { (0,_page__WEBPACK_IMPORTED_MODULE_1__.getDoctor)(element.id, categoriesList, doctorsList); };\n\n    button.appendChild(printAvatarDoctor(element.id));\n\n    var div = document.createElement(\"div\");\n    div.className= \"button-content\";\n\n    div.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"h2\", \"Dr. \" + element.firstname+\" \"+element.lastname));\n    div.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"p\", element.categories+\" - \"+element.workplace));\n\n    button.appendChild(div);\n    divcontainer.appendChild(button);\n    \n  });\n\n}\n\nfunction printUpcomingSchedules(){\n  const div = document.createElement('div');\n  div.className = \"upcoming-schedules\";\n\n  var image = new Image(325, 87);\n  image.src = _src_assets_images_cons1_png__WEBPACK_IMPORTED_MODULE_9__.default;\n  div.appendChild(image);\n\n  var image = new Image(325, 87);\n  image.src = _src_assets_images_cons2_png__WEBPACK_IMPORTED_MODULE_10__.default;\n  div.appendChild(image);\n\n  return div;\n}\n\nfunction printDoctor(doctorsList, id){\n  var result = doctorsList\n    .filter(doc => doc.id === id);\n\n  const divcontent = document.createElement('div');\n  divcontent.className= \"doctorpage-content\";\n\n  const divdetails = document.createElement('div');\n  divdetails.className= \"doctorpage-details\";\n\n  divdetails.appendChild(printAvatarDoctor(id));\n  \n  const divdata = document.createElement('div');\n  divdata.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"h2\", \"Dr. \"+result[0].firstname+\" \"+result[0].lastname));\n  divdata.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"p\", result[0].categories+\" - \"+result[0].workplace));\n\n  divdata.appendChild(printIcon(\"tel\"));\n  divdata.appendChild(printIcon(\"email\"));\n  divdata.appendChild(printIcon(\"call\"));\n  \n  divdetails.appendChild(divdata);\n  divcontent.appendChild(divdetails);\n\n  divcontent.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"h2\", \"About Doctor\"));\n  divcontent.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"p\",result[0].about))\n\n  divcontent.appendChild(printUpcomingSchedules());\n\n  return divcontent;\n\n}\n\nfunction createBanner(){\n  const div = document.createElement('div');\n  div.className= \"doctorpage-image\";\n  div.id= \"doctorpage-image\"\n  div.style.cssText = `background-image: url(${_src_assets_images_bgdoctor_png__WEBPACK_IMPORTED_MODULE_8__.default})`;\n  return div;\n}\n\n//# sourceURL=webpack://doctor_consultation_app/./src/doctor.js?");

/***/ }),

/***/ "./src/generic.js":
/*!************************!*\
  !*** ./src/generic.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContent\": () => (/* binding */ createContent),\n/* harmony export */   \"removeAllChildNodes\": () => (/* binding */ removeAllChildNodes),\n/* harmony export */   \"resetDoctorList\": () => (/* binding */ resetDoctorList),\n/* harmony export */   \"printSearchBar\": () => (/* binding */ printSearchBar),\n/* harmony export */   \"back\": () => (/* binding */ back),\n/* harmony export */   \"reset\": () => (/* binding */ reset),\n/* harmony export */   \"generateMenu\": () => (/* binding */ generateMenu)\n/* harmony export */ });\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n/* harmony import */ var _doctor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor */ \"./src/doctor.js\");\n/* harmony import */ var _src_assets_images_search_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/assets/images/search.svg */ \"./src/assets/images/search.svg\");\n/* harmony import */ var _src_assets_images_back_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/assets/images/back.svg */ \"./src/assets/images/back.svg\");\n\n\n\n\n\n\n\nfunction createContent(tag, text, id) {\n    const isContent = document.createElement(tag);\n    if( id ) isContent.setAttribute(\"id\", id)\n    isContent.appendChild(document.createTextNode(text));\n    return isContent;\n}\n\nfunction search(categoriesList, doctorsList){\n    var input = document.getElementById(\"textSearch\");\n\n    var result = doctorsList\n        .filter(doc => doc.firstname.toLowerCase() === input.value.toLowerCase());\n\n    resetDoctorList(categoriesList, doctorsList);\n    var page = document.getElementById(\"result-doctor\");\n    page.innerHTML = \"\";\n    input.value = \"\";\n\n    if(result.length == 0){\n        page.appendChild(createContent(\"p\", \"No results\"));\n    }else{  \n        (0,_doctor__WEBPACK_IMPORTED_MODULE_1__.printDoctorsList)(page, categoriesList, result);\n    }\n}\n\nfunction removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}\n\nfunction resetDoctorList(categoriesList, doctorsList){\n    var title = document.getElementById(\"title-doctor\");\n    // delete precedent reset button\n    removeAllChildNodes(title);\n    // rewrite title of doctors list\n    title.appendChild(createContent(\"h2\", \"Top Doctors\"));\n    // create reset button \n    var input = document.createElement(\"input\");\n    input.setAttribute(\"type\", \"button\");\n    input.setAttribute(\"id\", \"reset-doctor\");\n    input.setAttribute(\"class\", \"button\")\n    input.setAttribute(\"value\", \"reset\");\n    input.onclick = function(){\n        // clean doctor list\n        var page = document.getElementById(\"result-doctor\");\n        page.innerHTML = \"\";\n        (0,_doctor__WEBPACK_IMPORTED_MODULE_1__.printDoctorsList)(page, categoriesList, doctorsList);\n        // remove reset button\n        var button = document.getElementById(\"reset-doctor\");\n        title.removeChild(button)\n    }\n    title.appendChild(input);\n}\n\nfunction printSearchBar(page, categoriesList,  doctorsList){\n\n    var input = document.createElement(\"input\");\n    input.setAttribute(\"type\",\"text\");\n    input.setAttribute(\"id\",\"textSearch\");\n    input.setAttribute(\"placeholder\",\"Search for doctors\")\n    page.appendChild(input);\n  \n    var input = document.createElement(\"input\");\n    input.setAttribute(\"type\",\"submit\");\n    input.setAttribute(\"id\",\"submitSearch\");\n    input.setAttribute(\"value\",\"\");\n    input.onclick = function(){ \n        search(categoriesList, doctorsList);\n    };\n    input.style.cssText = `background-image: url(${_src_assets_images_search_svg__WEBPACK_IMPORTED_MODULE_2__.default})`;\n    page.appendChild(input);\n}\n\nfunction back(categoriesList, doctorsList){\n    // create button in doctor details page for return to main page\n    var input = document.createElement(\"input\");\n    input.setAttribute(\"type\",\"button\");\n    input.setAttribute(\"id\",\"back\");\n    input.onclick = function() { (0,_page__WEBPACK_IMPORTED_MODULE_0__.getMainpage)(categoriesList, doctorsList); };\n    input.style.cssText = `background-image: url(${_src_assets_images_back_svg__WEBPACK_IMPORTED_MODULE_3__.default})`;\n\n    return input;\n  }\n\nfunction reset(){\n    document.getElementById(\"content\").innerHTML = \"\";\n}\n\n\n// hide menu\nfunction closeMenu(ul){\n    document.getElementById(\"menu-element\").style.display = \"none\"\n    var buttonMenu = document.getElementById(\"menu-bar\");\n    buttonMenu.onclick = function(){openMenu();}\n}\n  \n// show menu\nfunction openMenu(ul){\n    document.getElementById(\"menu-element\").style.display = \"block\";\n    var buttonMenu = document.getElementById(\"menu-bar\");\n    buttonMenu.onclick = function(){\n        closeMenu(ul);\n    }\n}\n  \nfunction generateMenu(ul, categoriesList, doctorsList){\n    openMenu(ul);\n    var li = document.createElement(\"li\");\n    var span = document.createElement(\"span\");\n    var text = document.createTextNode(\"Get started\");\n    span.appendChild(text)\n    span.onclick = function(){\n        console.log(\"home\")\n        ;(0,_page__WEBPACK_IMPORTED_MODULE_0__.getIntro)(categoriesList, doctorsList);\n    }\n    li.appendChild(span);\n    ul.appendChild(li);\n}\n\n//# sourceURL=webpack://doctor_consultation_app/./src/generic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n/* harmony import */ var _src_assets_categories_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/assets/categories.json */ \"./src/assets/categories.json\");\n/* harmony import */ var _src_assets_doctors_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/assets/doctors.json */ \"./src/assets/doctors.json\");\n\n\n\n\n\n\n\n// doctor\n\nclass Doctor {\n  constructor(id, firstname, lastname, avatar, classCSS, categories, workplace, about) {\n      this.id = id;\n      this.firstname = firstname;\n      this.lastname = lastname;\n      this.avatar = avatar;\n      this.classCSS = classCSS;\n      this.categories = categories;\n      this.workplace = workplace;\n      this.about = about;\n  }\n}\n\nfunction createDoctorsList() {\n  const listDoctors = _src_assets_doctors_json__WEBPACK_IMPORTED_MODULE_3__.doctorsList;\n  return listDoctors.map( function(doctor) {\n      return new Doctor(doctor.id, doctor.firstname, doctor.lastname, doctor.avatar, doctor.classCSS, doctor.categories, doctor.workplace, doctor.about)\n  })\n}\n\nconst doctorsList = createDoctorsList();\nObject.freeze(doctorsList);\n\n// categories\n\nclass Category {\n  constructor(id, name, image, classCSS) {\n      this.id = id;\n      this.name = name;\n      this.image = \"../src/assets/images/\" + image;\n      this.classCSS = classCSS;\n  }\n}\n\nfunction createCategoriesList() {\n  const listCategories = _src_assets_categories_json__WEBPACK_IMPORTED_MODULE_2__.categoriesList;\n  return listCategories.map( function(category) {\n      return new Category(category.id, category.name, category.image, category.classCSS)\n  })\n}\n\nconst categoriesList = createCategoriesList();\nObject.freeze(categoriesList);\n\n// todo: check if mobile and add alert\n\ndocument.body.appendChild((0,_page__WEBPACK_IMPORTED_MODULE_1__.getIntro)(categoriesList, doctorsList));\n\n\n//# sourceURL=webpack://doctor_consultation_app/./src/index.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getIntro\": () => (/* binding */ getIntro),\n/* harmony export */   \"getMainpage\": () => (/* binding */ getMainpage),\n/* harmony export */   \"getDoctor\": () => (/* binding */ getDoctor)\n/* harmony export */ });\n/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic */ \"./src/generic.js\");\n/* harmony import */ var _doctor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor */ \"./src/doctor.js\");\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ \"./src/categories.js\");\n/* harmony import */ var _src_assets_images_other_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/assets/images/other.svg */ \"./src/assets/images/other.svg\");\n/* harmony import */ var _src_assets_images_bghome_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/assets/images/bghome.png */ \"./src/assets/images/bghome.png\");\n/* harmony import */ var _src_assets_images_menu_bar_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/assets/images/menu-bar.svg */ \"./src/assets/images/menu-bar.svg\");\n/* harmony import */ var _src_assets_images_profile_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/assets/images/profile.svg */ \"./src/assets/images/profile.svg\");\n\n\n\n\n\n\n\n\n\n// print intro page of app\nfunction getIntro(categoriesList, doctorsList){\n  (0,_generic__WEBPACK_IMPORTED_MODULE_0__.reset)();\n  const page = document.createElement('div');\n  document.getElementById(\"content\").appendChild(page);\n  page.className= \"homepage\";\n  page.id= \"homepage\"\n  page.style.cssText = `background-image: url(${_src_assets_images_bghome_png__WEBPACK_IMPORTED_MODULE_4__.default}); background-position-y: 350px;`;\n  page.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"h1\", \"Choose The Doctor You Want\"));\n  page.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"p\", \"Lorem ipsum dolor amet, consectetur adipiscing inet deli\"));\n\n  const button = document.createElement(\"button\");\n  button.className = \"button\";\n  button.onclick = function() { getMainpage(categoriesList, doctorsList); };\n  button.appendChild(document.createTextNode(\"Get started\"));\n  page.appendChild(button);\n\n  return page;\n}\n\n// print the main page\nfunction getMainpage(categoriesList, doctorsList) {\n    (0,_generic__WEBPACK_IMPORTED_MODULE_0__.reset)();\n  \n    // print title\n    const page = document.createElement('div');\n    document.getElementById(\"content\").appendChild(page);\n    page.className= \"mainpage\";\n\n    var div = document.createElement(\"div\");\n    div.id = \"menu-box\";\n    var ul = document.createElement(\"ul\");\n    ul.id=\"menu-element\"\n    \n\n    var menuIcon = new Image(25, 25);\n    menuIcon.src = _src_assets_images_menu_bar_svg__WEBPACK_IMPORTED_MODULE_5__.default;\n    menuIcon.id = \"menu-bar\";\n    menuIcon.onclick = function(){\n      (0,_generic__WEBPACK_IMPORTED_MODULE_0__.generateMenu)(ul, categoriesList, doctorsList);\n    }\n    div.appendChild(menuIcon);\n    div.appendChild(ul)\n    \n\n    var profileImage = new Image(50, 50);\n    profileImage.src = _src_assets_images_profile_svg__WEBPACK_IMPORTED_MODULE_6__.default;\n    profileImage.id = \"profile\";\n    div.appendChild(profileImage);\n\n    page.appendChild(div);\n\n    page.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"h1\", \"Find Your Desired Doctor\"));\n  \n    // print search bar and button\n    (0,_generic__WEBPACK_IMPORTED_MODULE_0__.printSearchBar)(page, categoriesList, doctorsList);\n  \n    // categories section\n    // print title \n    page.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"h2\", \"Categories\"));\n    // print all categories\n    (0,_categories__WEBPACK_IMPORTED_MODULE_2__.printCategoriesList)(page, categoriesList, doctorsList);\n  \n    // top doctors section \n    // print title \n    page.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.createContent)(\"h2\", \"Top Doctors\", \"title-doctor\"));\n    // create div for lists of doctor\n    var divcontainer = document.createElement(\"div\");\n    divcontainer.id = \"result-doctor\";\n    // print all doctors\n    (0,_doctor__WEBPACK_IMPORTED_MODULE_1__.printDoctorsList)(divcontainer, categoriesList, doctorsList);\n    page.appendChild(divcontainer);\n}\n\n// print the doctor details page\nfunction getDoctor(doctor, categoriesList, doctorsList){\n  (0,_generic__WEBPACK_IMPORTED_MODULE_0__.reset)();\n\n  const page = document.createElement('div');\n  document.getElementById(\"content\").appendChild(page);\n  page.className= \"doctorPage\";\n\n  // print button for go back to precedent page\n  page.appendChild((0,_generic__WEBPACK_IMPORTED_MODULE_0__.back)(categoriesList, doctorsList));\n\n  var otherIcon = new Image(25, 25);\n  otherIcon.src = _src_assets_images_other_svg__WEBPACK_IMPORTED_MODULE_3__.default;\n  otherIcon.id = \"other\";  \n  page.appendChild(otherIcon);\n  // insert the banner with image\n  page.appendChild((0,_doctor__WEBPACK_IMPORTED_MODULE_1__.createBanner)());\n  // print all doctor details\n  page.appendChild((0,_doctor__WEBPACK_IMPORTED_MODULE_1__.printDoctor)(doctorsList, doctor));\n}\n\n//# sourceURL=webpack://doctor_consultation_app/./src/page.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;