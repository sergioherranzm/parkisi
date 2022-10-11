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
exports.id = "pages/reserve/list";
exports.ids = ["pages/reserve/list"];
exports.modules = {

/***/ "./pages/reserve/list.tsx":
/*!********************************!*\
  !*** ./pages/reserve/list.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/mnt/c/Users/Sergio/CursoWebDelvelopment/projects/parkisi/frontend/pages/reserve/list.tsx\";\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n\nvar _ref =  false ? 0 : {\n  name: \"1q4tng0-Page\",\n  styles: \"margin-left:auto;margin-right:auto;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref2 =  false ? 0 : {\n  name: \"14j38yt-Page\",\n  styles: \"font-size:2.25rem;line-height:2.5rem;font-weight:800;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref3 =  false ? 0 : {\n  name: \"e41bzi-Page\",\n  styles: \"margin-top:0.5rem;margin-bottom:0.5rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref4 =  false ? 0 : {\n  name: \"nw0iep-Page\",\n  styles: \"border-width:1px;--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);padding:0.75rem;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref5 =  false ? 0 : {\n  name: \"1aycqef-Page\",\n  styles: \"font-size:1.5rem;line-height:2rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref6 =  false ? 0 : {\n  name: \"zrphdc-Page\",\n  styles: \"border-width:1px;--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref7 =  false ? 0 : {\n  name: \"1evtxgz-Page\",\n  styles: \"border-width:1px;--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));padding:1.25rem;font-size:1.25rem;line-height:1.75rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nconst Page = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const {\n    user\n  } = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.useUser)();\n  const {\n    data: myReserves\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user?.sub ? `/reserve/list/user/${user?.sub}` : null);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      css: _ref,\n      \"data-tw\": \"mx-auto\",\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        css: _ref2,\n        \"data-tw\": \"text-4xl font-extrabold\",\n        children: \"MY RESERVES\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        css: _ref3,\n        \"data-tw\": \"my-2\",\n        children: [myReserves?.length > 0 && myReserves.map(reserve => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          css: _ref4,\n          \"data-tw\": \"border border-black shadow-lg p-3 rounded-lg bg-white\",\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h4\", {\n            css: _ref5,\n            \"data-tw\": \"text-2xl\",\n            children: [\"Parking on \", reserve.slot.parking.address]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 17\n          }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Period: from \", reserve.period[0], \" to\", ' ', reserve.period[reserve.period.length - 1]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 17\n          }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n            css: _ref6,\n            \"data-tw\": \"border border-black bg-gray-300\",\n            onClick: () => router.push(`/reserve/${reserve._id}`),\n            children: \"Open\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 17\n          }, undefined)]\n        }, reserve._id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 15\n        }, undefined)), !myReserves?.length && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          children: \"You have no reserves yet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 35\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      css: _ref7,\n      \"data-tw\": \"border border-black bg-gray-300 p-5 text-xl\",\n      onClick: () => router.push('/reserve/create'),\n      children: \"Add new reserve\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXNlcnZlL2xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1HLElBQUksR0FBRyxNQUFNO0VBQ2pCLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBeEI7RUFDQSxNQUFNO0lBQUVJO0VBQUYsSUFBV0wsNERBQU8sRUFBeEI7RUFDQSxNQUFNO0lBQUVNLElBQUksRUFBRUM7RUFBUixJQUF1QkwsK0NBQU0sQ0FDakNHLElBQUksRUFBRUcsR0FBTixHQUFhLHNCQUFxQkgsSUFBSSxFQUFFRyxHQUFJLEVBQTVDLEdBQWdELElBRGYsQ0FBbkM7RUFJQSxPQUNFO0lBQUEsV0FDRTtNQUFBO01BQUE7TUFBQSxXQUNFO1FBQUE7UUFBQTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQURGLEVBRUU7UUFBQTtRQUFBO1FBQUEsV0FDR0QsVUFBVSxFQUFFRSxNQUFaLEdBQXFCLENBQXJCLElBQ0NGLFVBQVUsQ0FBQ0csR0FBWCxDQUFnQkMsT0FBRCxJQUNiO1VBQUE7VUFBQTtVQUFBLFdBSUU7WUFBQTtZQUFBO1lBQUEsMEJBQThCQSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsT0FBYixDQUFxQkMsT0FBbkQ7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLGFBSkYsRUFLRTtZQUFBLDRCQUNnQkgsT0FBTyxDQUFDSSxNQUFSLENBQWUsQ0FBZixDQURoQixTQUNzQyxHQUR0QyxFQUVHSixPQUFPLENBQUNJLE1BQVIsQ0FBZUosT0FBTyxDQUFDSSxNQUFSLENBQWVOLE1BQWYsR0FBd0IsQ0FBdkMsQ0FGSDtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsYUFMRixFQVNFO1lBQUE7WUFBQTtZQUVFLE9BQU8sRUFBRSxNQUFNTCxNQUFNLENBQUNZLElBQVAsQ0FBYSxZQUFXTCxPQUFPLENBQUNNLEdBQUksRUFBcEMsQ0FGakI7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsYUFURjtRQUFBLEdBQ09OLE9BQU8sQ0FBQ00sR0FEZjtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBREYsQ0FGSixFQW9CRyxDQUFDVixVQUFVLEVBQUVFLE1BQWIsSUFBdUI7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFwQjFCO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQUZGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURGLEVBMEJFO01BQUE7TUFBQTtNQUVFLE9BQU8sRUFBRSxNQUFNTCxNQUFNLENBQUNZLElBQVAsQ0FBWSxpQkFBWixDQUZqQjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQTFCRjtFQUFBLGdCQURGO0FBbUNELENBMUNEOztBQTRDQSxpRUFBZWIsSUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLWZvcm0vLi9wYWdlcy9yZXNlcnZlL2xpc3QudHN4P2U4ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VVc2VyKCk7XG4gIGNvbnN0IHsgZGF0YTogbXlSZXNlcnZlcyB9ID0gdXNlU1dSKFxuICAgIHVzZXI/LnN1YiA/IGAvcmVzZXJ2ZS9saXN0L3VzZXIvJHt1c2VyPy5zdWJ9YCA6IG51bGxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IHR3PVwiIG14LWF1dG8gXCI+XG4gICAgICAgIDxoMSB0dz1cInRleHQtNHhsIGZvbnQtZXh0cmFib2xkXCI+TVkgUkVTRVJWRVM8L2gxPlxuICAgICAgICA8ZGl2IHR3PVwibXktMlwiPlxuICAgICAgICAgIHtteVJlc2VydmVzPy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBteVJlc2VydmVzLm1hcCgocmVzZXJ2ZSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtyZXNlcnZlLl9pZH1cbiAgICAgICAgICAgICAgICB0dz1cImJvcmRlciBib3JkZXItYmxhY2sgc2hhZG93LWxnIHAtMyByb3VuZGVkLWxnIGJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoNCB0dz1cInRleHQtMnhsXCI+UGFya2luZyBvbiB7cmVzZXJ2ZS5zbG90LnBhcmtpbmcuYWRkcmVzc308L2g0PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgUGVyaW9kOiBmcm9tIHtyZXNlcnZlLnBlcmlvZFswXX0gdG97JyAnfVxuICAgICAgICAgICAgICAgICAge3Jlc2VydmUucGVyaW9kW3Jlc2VydmUucGVyaW9kLmxlbmd0aCAtIDFdfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0dz1cImJvcmRlciBib3JkZXItYmxhY2sgYmctZ3JheS0zMDBcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9yZXNlcnZlLyR7cmVzZXJ2ZS5faWR9YCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgT3BlblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIHshbXlSZXNlcnZlcz8ubGVuZ3RoICYmIDxwPllvdSBoYXZlIG5vIHJlc2VydmVzIHlldDwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR3PVwiYm9yZGVyIGJvcmRlci1ibGFjayBiZy1ncmF5LTMwMCBwLTUgdGV4dC14bFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcmVzZXJ2ZS9jcmVhdGUnKX1cbiAgICAgID5cbiAgICAgICAgQWRkIG5ldyByZXNlcnZlXG4gICAgICA8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlVXNlciIsInVzZVJvdXRlciIsInVzZVNXUiIsIlBhZ2UiLCJyb3V0ZXIiLCJ1c2VyIiwiZGF0YSIsIm15UmVzZXJ2ZXMiLCJzdWIiLCJsZW5ndGgiLCJtYXAiLCJyZXNlcnZlIiwic2xvdCIsInBhcmtpbmciLCJhZGRyZXNzIiwicGVyaW9kIiwicHVzaCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/reserve/list.tsx\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-dev-runtime");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/reserve/list.tsx"));
module.exports = __webpack_exports__;

})();