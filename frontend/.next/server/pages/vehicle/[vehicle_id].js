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
exports.id = "pages/vehicle/[vehicle_id]";
exports.ids = ["pages/vehicle/[vehicle_id]"];
exports.modules = {

/***/ "./pages/vehicle/[vehicle_id].tsx":
/*!****************************************!*\
  !*** ./pages/vehicle/[vehicle_id].tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/mnt/c/Users/Sergio/CursoWebDelvelopment/projects/parkisi/frontend/pages/vehicle/[vehicle_id].tsx\";\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\nvar _ref =  false ? 0 : {\n  name: \"1q4tng0-Page\",\n  styles: \"margin-left:auto;margin-right:auto;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref2 =  false ? 0 : {\n  name: \"zb6kzd-Page\",\n  styles: \"border-width:1px;--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));padding:0.25rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref3 =  false ? 0 : {\n  name: \"14j38yt-Page\",\n  styles: \"font-size:2.25rem;line-height:2.5rem;font-weight:800;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref4 =  false ? 0 : {\n  name: \"e41bzi-Page\",\n  styles: \"margin-top:0.5rem;margin-bottom:0.5rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref5 =  false ? 0 : {\n  name: \"80mh0l-Page\",\n  styles: \"padding:0.75rem;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref6 =  false ? 0 : {\n  name: \"hiabhm-Page\",\n  styles: \"font-size:2.25rem;line-height:2.5rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref7 =  false ? 0 : {\n  name: \"1umu4iv-Page\",\n  styles: \"--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity));label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nconst Page = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  const {\n    query: {\n      vehicle_id\n    }\n  } = router;\n  const {\n    data: vehicle\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(vehicle_id ? `/vehicle/detail/${vehicle_id}` : null);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      css: _ref,\n      \"data-tw\": \"mx-auto\",\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        css: _ref2,\n        \"data-tw\": \"border border-black bg-gray-300 p-1\",\n        onClick: () => router.push(`/user/myProfile`),\n        children: \"Back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        css: _ref3,\n        \"data-tw\": \"text-4xl font-extrabold\",\n        children: \"VEHICLE DETAIL\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        css: _ref4,\n        \"data-tw\": \"my-2\",\n        children: [vehicle && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          css: _ref5,\n          \"data-tw\": \"p-3 rounded-lg bg-white\",\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n            css: _ref6,\n            \"data-tw\": \"text-4xl\",\n            children: vehicle.plate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 15\n          }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            css: _ref7,\n            \"data-tw\": \"text-gray-500\",\n            children: [\"Model: \", vehicle.model]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: [\"Type: \", vehicle.type]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 15\n          }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: [\"Size: \", vehicle.size]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 15\n          }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            children: \"WIP: WIP: Put in form mode to allow modification of certain fields\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, undefined), !vehicle && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          children: \"Vehicle not found\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 24\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92ZWhpY2xlL1t2ZWhpY2xlX2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNRSxJQUFJLEdBQUcsTUFBTTtFQUNqQixNQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQXhCO0VBQ0EsTUFBTTtJQUNKSSxLQUFLLEVBQUU7TUFBRUM7SUFBRjtFQURILElBRUZGLE1BRko7RUFJQSxNQUFNO0lBQUVHLElBQUksRUFBRUM7RUFBUixJQUFvQk4sK0NBQU0sQ0FDOUJJLFVBQVUsR0FBSSxtQkFBa0JBLFVBQVcsRUFBakMsR0FBcUMsSUFEakIsQ0FBaEM7RUFJQSxPQUNFO0lBQUEsVUFDRTtNQUFBO01BQUE7TUFBQSxXQUNFO1FBQUE7UUFBQTtRQUVFLE9BQU8sRUFBRSxNQUFNRixNQUFNLENBQUNLLElBQVAsQ0FBYSxpQkFBYixDQUZqQjtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQURGLEVBT0U7UUFBQTtRQUFBO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBUEYsRUFRRTtRQUFBO1FBQUE7UUFBQSxXQUNHRCxPQUFPLElBQ047VUFBQTtVQUFBO1VBQUEsV0FDRTtZQUFBO1lBQUE7WUFBQSxVQUFtQkEsT0FBTyxDQUFDRTtVQUEzQjtZQUFBO1lBQUE7WUFBQTtVQUFBLGFBREYsRUFFRTtZQUFBO1lBQUE7WUFBQSxzQkFBOEJGLE9BQU8sQ0FBQ0csS0FBdEM7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLGFBRkYsRUFHRTtZQUFBLHFCQUFVSCxPQUFPLENBQUNJLElBQWxCO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxhQUhGLEVBSUU7WUFBQSxxQkFBVUosT0FBTyxDQUFDSyxJQUFsQjtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsYUFKRixFQUtFO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLGFBTEY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBRkosRUFhRyxDQUFDTCxPQUFELElBQVk7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFiZjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFSRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERixpQkFERjtBQTRCRCxDQXRDRDs7QUF3Q0EsaUVBQWVMLElBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC1mb3JtLy4vcGFnZXMvdmVoaWNsZS9bdmVoaWNsZV9pZF0udHN4PzFhODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IHZlaGljbGVfaWQgfSxcbiAgfSA9IHJvdXRlcjtcblxuICBjb25zdCB7IGRhdGE6IHZlaGljbGUgfSA9IHVzZVNXUihcbiAgICB2ZWhpY2xlX2lkID8gYC92ZWhpY2xlL2RldGFpbC8ke3ZlaGljbGVfaWR9YCA6IG51bGxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IHR3PVwiIG14LWF1dG8gXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0dz1cImJvcmRlciBib3JkZXItYmxhY2sgYmctZ3JheS0zMDAgcC0xXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3VzZXIvbXlQcm9maWxlYCl9XG4gICAgICAgID5cbiAgICAgICAgICBCYWNrXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8aDEgdHc9XCJ0ZXh0LTR4bCBmb250LWV4dHJhYm9sZFwiPlZFSElDTEUgREVUQUlMPC9oMT5cbiAgICAgICAgPGRpdiB0dz1cIm15LTJcIj5cbiAgICAgICAgICB7dmVoaWNsZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IHR3PVwiIHAtMyByb3VuZGVkLWxnIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgIDxoNCB0dz1cInRleHQtNHhsXCI+e3ZlaGljbGUucGxhdGV9PC9oND5cbiAgICAgICAgICAgICAgPHAgdHc9XCJ0ZXh0LWdyYXktNTAwXCI+TW9kZWw6IHt2ZWhpY2xlLm1vZGVsfTwvcD5cbiAgICAgICAgICAgICAgPHA+VHlwZToge3ZlaGljbGUudHlwZX08L3A+XG4gICAgICAgICAgICAgIDxwPlNpemU6IHt2ZWhpY2xlLnNpemV9PC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBXSVA6IFdJUDogUHV0IGluIGZvcm0gbW9kZSB0byBhbGxvdyBtb2RpZmljYXRpb24gb2YgY2VydGFpblxuICAgICAgICAgICAgICAgIGZpZWxkc1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshdmVoaWNsZSAmJiA8cD5WZWhpY2xlIG5vdCBmb3VuZDwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNXUiIsIlBhZ2UiLCJyb3V0ZXIiLCJxdWVyeSIsInZlaGljbGVfaWQiLCJkYXRhIiwidmVoaWNsZSIsInB1c2giLCJwbGF0ZSIsIm1vZGVsIiwidHlwZSIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vehicle/[vehicle_id].tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/vehicle/[vehicle_id].tsx"));
module.exports = __webpack_exports__;

})();