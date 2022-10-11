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
exports.id = "pages/api/backend/[...params]";
exports.ids = ["pages/api/backend/[...params]"];
exports.modules = {

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "(api)/./lib/config.ts":
/*!***********************!*\
  !*** ./lib/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BACK_URL\": () => (/* binding */ BACK_URL),\n/* harmony export */   \"GOOGLE_API_KEY\": () => (/* binding */ GOOGLE_API_KEY),\n/* harmony export */   \"MAPS_API_URL\": () => (/* binding */ MAPS_API_URL),\n/* harmony export */   \"PROXY_URL\": () => (/* binding */ PROXY_URL)\n/* harmony export */ });\nconst GOOGLE_API_KEY = \"AIzaSyD5KwAGFh4QvPhSBP9sOzusFqnTkMf5gKE\" ?? 0;\nconst MAPS_API_URL = '/api/maps';\nconst PROXY_URL = '/api/backend';\nconst BACK_URL = 'http://localhost:5000/';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29uZmlnLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxjQUFjLEdBQ3pCQyx5Q0FBQSxJQUEwQyxDQURyQztBQUVBLE1BQU1HLFlBQVksR0FBRyxXQUFyQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxjQUFsQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyx3QkFBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAtZm9ybS8uL2xpYi9jb25maWcudHM/MTI4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR09PR0xFX0FQSV9LRVkgPVxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQVBJX0tFWSA/PyAnTUlTU0lORyBHb29nbGUgQVBJIGtleSc7XG5leHBvcnQgY29uc3QgTUFQU19BUElfVVJMID0gJy9hcGkvbWFwcyc7XG5leHBvcnQgY29uc3QgUFJPWFlfVVJMID0gJy9hcGkvYmFja2VuZCc7XG5leHBvcnQgY29uc3QgQkFDS19VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLyc7XG4iXSwibmFtZXMiOlsiR09PR0xFX0FQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0FQSV9LRVkiLCJNQVBTX0FQSV9VUkwiLCJQUk9YWV9VUkwiLCJCQUNLX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/config.ts\n");

/***/ }),

/***/ "(api)/./pages/api/backend/[...params].ts":
/*!******************************************!*\
  !*** ./pages/api/backend/[...params].ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/config */ \"(api)/./lib/config.ts\");\n\n\n\nconst api_route = async (req, res) => {\n  const token = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getAccessToken)(req, res);\n  const params = req.query.params;\n  let queryParams = '';\n\n  if (Object.entries(req.query).length > 1) {\n    queryParams += '?';\n    Object.entries(req.query).forEach((item, index) => {\n      if (item[0] !== 'params' && queryParams.split('').pop() !== '?') {\n        queryParams += '&' + item[0] + '=' + item[1];\n      } else if (item[0] !== 'params' && queryParams.split('').pop() === '?') {\n        queryParams += item[0] + '=' + item[1];\n      }\n    });\n  }\n\n  const path = params.join('/') + queryParams; //console.log('URL=' + path);\n\n  const url = _lib_config__WEBPACK_IMPORTED_MODULE_1__.BACK_URL + path;\n  const options = {\n    method: req.method,\n    body: req.body ? JSON.stringify(req.body) : undefined,\n    headers: {\n      Authorization: `Bearer ${token.accessToken}`\n    }\n  };\n  const res_api = await fetch(url, options);\n  res.status(res_api.status);\n  res.json(await res_api.json());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api_route);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmFja2VuZC9bLi4ucGFyYW1zXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxNQUFNRSxTQUF5QixHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtFQUNwRCxNQUFNQyxLQUFLLEdBQUcsTUFBTUwsbUVBQWMsQ0FBQ0csR0FBRCxFQUFNQyxHQUFOLENBQWxDO0VBQ0EsTUFBTUUsTUFBTSxHQUFHSCxHQUFHLENBQUNJLEtBQUosQ0FBVUQsTUFBekI7RUFFQSxJQUFJRSxXQUFXLEdBQUcsRUFBbEI7O0VBQ0EsSUFBSUMsTUFBTSxDQUFDQyxPQUFQLENBQWVQLEdBQUcsQ0FBQ0ksS0FBbkIsRUFBMEJJLE1BQTFCLEdBQW1DLENBQXZDLEVBQTBDO0lBQ3hDSCxXQUFXLElBQUksR0FBZjtJQUNBQyxNQUFNLENBQUNDLE9BQVAsQ0FBZVAsR0FBRyxDQUFDSSxLQUFuQixFQUEwQkssT0FBMUIsQ0FBa0MsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO01BQ2pELElBQUlELElBQUksQ0FBQyxDQUFELENBQUosS0FBWSxRQUFaLElBQXdCTCxXQUFXLENBQUNPLEtBQVosQ0FBa0IsRUFBbEIsRUFBc0JDLEdBQXRCLE9BQWdDLEdBQTVELEVBQWlFO1FBQy9EUixXQUFXLElBQUksTUFBTUssSUFBSSxDQUFDLENBQUQsQ0FBVixHQUFnQixHQUFoQixHQUFzQkEsSUFBSSxDQUFDLENBQUQsQ0FBekM7TUFDRCxDQUZELE1BRU8sSUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLFFBQVosSUFBd0JMLFdBQVcsQ0FBQ08sS0FBWixDQUFrQixFQUFsQixFQUFzQkMsR0FBdEIsT0FBZ0MsR0FBNUQsRUFBaUU7UUFDdEVSLFdBQVcsSUFBSUssSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLEdBQVYsR0FBZ0JBLElBQUksQ0FBQyxDQUFELENBQW5DO01BQ0Q7SUFDRixDQU5EO0VBT0Q7O0VBRUQsTUFBTUksSUFBSSxHQUFHWCxNQUFNLENBQUNZLElBQVAsQ0FBWSxHQUFaLElBQW1CVixXQUFoQyxDQWhCb0QsQ0FrQnBEOztFQUVBLE1BQU1XLEdBQUcsR0FBR2xCLGlEQUFRLEdBQUdnQixJQUF2QjtFQUVBLE1BQU1HLE9BQU8sR0FBRztJQUNkQyxNQUFNLEVBQUVsQixHQUFHLENBQUNrQixNQURFO0lBRWRDLElBQUksRUFBRW5CLEdBQUcsQ0FBQ21CLElBQUosR0FBV0MsSUFBSSxDQUFDQyxTQUFMLENBQWVyQixHQUFHLENBQUNtQixJQUFuQixDQUFYLEdBQXNDRyxTQUY5QjtJQUdkQyxPQUFPLEVBQUU7TUFDUEMsYUFBYSxFQUFHLFVBQVN0QixLQUFLLENBQUN1QixXQUFZO0lBRHBDO0VBSEssQ0FBaEI7RUFRQSxNQUFNQyxPQUFPLEdBQUcsTUFBTUMsS0FBSyxDQUFDWCxHQUFELEVBQU1DLE9BQU4sQ0FBM0I7RUFFQWhCLEdBQUcsQ0FBQzJCLE1BQUosQ0FBV0YsT0FBTyxDQUFDRSxNQUFuQjtFQUNBM0IsR0FBRyxDQUFDNEIsSUFBSixDQUFTLE1BQU1ILE9BQU8sQ0FBQ0csSUFBUixFQUFmO0FBQ0QsQ0FsQ0Q7O0FBb0NBLGlFQUFlOUIsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC1mb3JtLy4vcGFnZXMvYXBpL2JhY2tlbmQvWy4uLnBhcmFtc10udHM/Zjg5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBY2Nlc3NUb2tlbiB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xuaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IEJBQ0tfVVJMIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NvbmZpZyc7XG5cbmNvbnN0IGFwaV9yb3V0ZTogTmV4dEFwaUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbihyZXEsIHJlcyk7XG4gIGNvbnN0IHBhcmFtcyA9IHJlcS5xdWVyeS5wYXJhbXMgYXMgc3RyaW5nW107XG5cbiAgbGV0IHF1ZXJ5UGFyYW1zID0gJyc7XG4gIGlmIChPYmplY3QuZW50cmllcyhyZXEucXVlcnkpLmxlbmd0aCA+IDEpIHtcbiAgICBxdWVyeVBhcmFtcyArPSAnPyc7XG4gICAgT2JqZWN0LmVudHJpZXMocmVxLnF1ZXJ5KS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW1bMF0gIT09ICdwYXJhbXMnICYmIHF1ZXJ5UGFyYW1zLnNwbGl0KCcnKS5wb3AoKSAhPT0gJz8nKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zICs9ICcmJyArIGl0ZW1bMF0gKyAnPScgKyBpdGVtWzFdO1xuICAgICAgfSBlbHNlIGlmIChpdGVtWzBdICE9PSAncGFyYW1zJyAmJiBxdWVyeVBhcmFtcy5zcGxpdCgnJykucG9wKCkgPT09ICc/Jykge1xuICAgICAgICBxdWVyeVBhcmFtcyArPSBpdGVtWzBdICsgJz0nICsgaXRlbVsxXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHBhdGggPSBwYXJhbXMuam9pbignLycpICsgcXVlcnlQYXJhbXM7XG5cbiAgLy9jb25zb2xlLmxvZygnVVJMPScgKyBwYXRoKTtcblxuICBjb25zdCB1cmwgPSBCQUNLX1VSTCArIHBhdGg7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IHJlcS5tZXRob2QsXG4gICAgYm9keTogcmVxLmJvZHkgPyBKU09OLnN0cmluZ2lmeShyZXEuYm9keSkgOiB1bmRlZmluZWQsXG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VuLmFjY2Vzc1Rva2VufWAsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCByZXNfYXBpID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcblxuICByZXMuc3RhdHVzKHJlc19hcGkuc3RhdHVzKTtcbiAgcmVzLmpzb24oYXdhaXQgcmVzX2FwaS5qc29uKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpX3JvdXRlO1xuIl0sIm5hbWVzIjpbImdldEFjY2Vzc1Rva2VuIiwiQkFDS19VUkwiLCJhcGlfcm91dGUiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsInBhcmFtcyIsInF1ZXJ5IiwicXVlcnlQYXJhbXMiLCJPYmplY3QiLCJlbnRyaWVzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsInNwbGl0IiwicG9wIiwicGF0aCIsImpvaW4iLCJ1cmwiLCJvcHRpb25zIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImFjY2Vzc1Rva2VuIiwicmVzX2FwaSIsImZldGNoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/backend/[...params].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/backend/[...params].ts"));
module.exports = __webpack_exports__;

})();