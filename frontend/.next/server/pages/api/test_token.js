"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/test_token";
exports.ids = ["pages/api/test_token"];
exports.modules = {

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "(api)/./pages/api/test_token.ts":
/*!*********************************!*\
  !*** ./pages/api/test_token.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst api_route = async (req, res) => {\n  const token = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getAccessToken)(req, res);\n  res.json({\n    status: 'OK',\n    token\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api_route);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVzdF90b2tlbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFHQSxNQUFNQyxTQUF5QixHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtFQUNwRCxNQUFNQyxLQUFLLEdBQUcsTUFBTUosbUVBQWMsQ0FBQ0UsR0FBRCxFQUFNQyxHQUFOLENBQWxDO0VBQ0FBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTO0lBQ1BDLE1BQU0sRUFBRSxJQUREO0lBRVBGO0VBRk8sQ0FBVDtBQUlELENBTkQ7O0FBUUEsaUVBQWVILFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAtZm9ybS8uL3BhZ2VzL2FwaS90ZXN0X3Rva2VuLnRzPzRhOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWNjZXNzVG9rZW4gfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcbmltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSAnbmV4dCc7XG5cbmNvbnN0IGFwaV9yb3V0ZTogTmV4dEFwaUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbihyZXEsIHJlcyk7XG4gIHJlcy5qc29uKHtcbiAgICBzdGF0dXM6ICdPSycsXG4gICAgdG9rZW4sXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpX3JvdXRlO1xuIl0sIm5hbWVzIjpbImdldEFjY2Vzc1Rva2VuIiwiYXBpX3JvdXRlIiwicmVxIiwicmVzIiwidG9rZW4iLCJqc29uIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/test_token.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/test_token.ts"));
module.exports = __webpack_exports__;

})();