"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/slot/[slot_id]",{

/***/ "./pages/slot/[slot_id].tsx":
/*!**********************************!*\
  !*** ./pages/slot/[slot_id].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _components_StaticDatePickerWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/StaticDatePickerWidget */ \"./components/StaticDatePickerWidget.tsx\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/mnt/c/Users/Sergio/CursoWebDelvelopment/projects/parkisi/frontend/pages/slot/[slot_id].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n\n\nvar _ref =  false ? 0 : {\n  name: \"1q4tng0-Page\",\n  styles: \"margin-left:auto;margin-right:auto;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref2 =  false ? 0 : {\n  name: \"zb6kzd-Page\",\n  styles: \"border-width:1px;--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));padding:0.25rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref3 =  false ? 0 : {\n  name: \"14j38yt-Page\",\n  styles: \"font-size:2.25rem;line-height:2.5rem;font-weight:800;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref4 =  false ? 0 : {\n  name: \"e41bzi-Page\",\n  styles: \"margin-top:0.5rem;margin-bottom:0.5rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref5 =  false ? 0 : {\n  name: \"80mh0l-Page\",\n  styles: \"padding:0.75rem;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref6 =  false ? 0 : {\n  name: \"hiabhm-Page\",\n  styles: \"font-size:2.25rem;line-height:2.5rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref7 =  false ? 0 : {\n  name: \"1umu4iv-Page\",\n  styles: \"--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity));label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref8 =  false ? 0 : {\n  name: \"15apk79-Page\",\n  styles: \"font-size:1.125rem;line-height:1.75rem;margin-top:1.25rem;margin-bottom:1.25rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref9 =  false ? 0 : {\n  name: \"1b2mm93-Page\",\n  styles: \"border-width:1px;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref10 =  false ? 0 : {\n  name: \"zb6kzd-Page\",\n  styles: \"border-width:1px;--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));padding:0.25rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref11 =  false ? 0 : {\n  name: \"zb6kzd-Page\",\n  styles: \"border-width:1px;--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));padding:0.25rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar Page = function Page() {\n  _s();\n\n  var _slot$parking;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var slot_id = router.query.slot_id;\n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(slot_id ? \"/slot/detail/\".concat(slot_id) : null),\n      slot = _useSWR.data;\n\n  var reservesPeriods = slot.reserves.map(function (reserve) {\n    return reserve.period;\n  });\n\n  var _useUser = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.useUser)(),\n      user = _useUser.user;\n\n  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user !== null && user !== void 0 && user.sub ? \"/userProfile/\".concat(user === null || user === void 0 ? void 0 : user.sub) : null),\n      userProfile = _useSWR2.data;\n\n  var isOwner = (slot === null || slot === void 0 ? void 0 : (_slot$parking = slot.parking) === null || _slot$parking === void 0 ? void 0 : _slot$parking.owner) === (userProfile === null || userProfile === void 0 ? void 0 : userProfile._id);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      css: _ref,\n      \"data-tw\": \"mx-auto\",\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        css: _ref2,\n        \"data-tw\": \"border border-black bg-gray-300 p-1\",\n        onClick: function onClick() {\n          return router.push(\"/parking/\".concat(slot.parking._id));\n        },\n        children: \"Back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n        css: _ref3,\n        \"data-tw\": \"text-4xl font-extrabold\",\n        children: \"SLOT DETAIL\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        css: _ref4,\n        \"data-tw\": \"my-2\",\n        children: [slot && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          css: _ref5,\n          \"data-tw\": \"p-3 rounded-lg bg-white\",\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h4\", {\n            css: _ref6,\n            \"data-tw\": \"text-4xl\",\n            children: [\"Slot \", slot.identification]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 15\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n            css: _ref7,\n            \"data-tw\": \"text-gray-500\",\n            children: [\"Situated on \", slot.parking.address]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 15\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n            children: [\"Size: \", slot.size]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 15\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n            children: [\"Parking difficulty: \", slot.difficulty]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 15\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n            children: [\"Price: \", slot.price, \"\\u20AC/day\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            css: _ref8,\n            \"data-tw\": \"text-lg my-5\",\n            children: \"AVAILABILITY\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            css: _ref9,\n            \"data-tw\": \"border\",\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_StaticDatePickerWidget__WEBPACK_IMPORTED_MODULE_3__.StaticDatePickerWidget, {\n              reserves: reservesPeriods\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this), isOwner && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n              css: _ref10,\n              \"data-tw\": \"border border-black bg-gray-300 p-1\",\n              onClick: function onClick() {\n                return router.push(\"#\");\n              },\n              children: \"Remove slot\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false), !isOwner && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n              css: _ref11,\n              \"data-tw\": \"border border-black bg-gray-300 p-1\",\n              onClick: function onClick() {\n                return router.push(\"#\");\n              },\n              children: \"Reserve slot\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 13\n        }, _this), !slot && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n          children: \"Parking slot not found\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Page, \"ru53RVdcZrdCZ0Rr/neq/O1iScY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.useUser, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFYSixFQW9CRyxDQUFDSixPQUFELElBQ0M7WUFBQSxVQUNFO2NBQUE7Y0FBQTtjQUVFLE9BQU8sRUFBRTtnQkFBQSxPQUFNYixNQUFNLENBQUNpQixJQUFQLEtBQU47Y0FBQSxDQUZYO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBO1VBREYsaUJBckJKO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUZKLEVBa0NHLENBQUNkLElBQUQsSUFBUztVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQWxDWjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FSRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERixpQkFERjtBQWlERCxDQWxFRDs7R0FBTUo7VUFDV0gsb0RBS1FDLDZDQUlORiwwREFDYUU7OztLQVgxQkU7QUFvRU4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2xvdC9bc2xvdF9pZF0udHN4P2I3NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHsgU3RhdGljRGF0ZVBpY2tlcldpZGdldCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhdGljRGF0ZVBpY2tlcldpZGdldCc7XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgc2xvdF9pZCB9LFxuICB9ID0gcm91dGVyO1xuXG4gIGNvbnN0IHsgZGF0YTogc2xvdCB9ID0gdXNlU1dSKHNsb3RfaWQgPyBgL3Nsb3QvZGV0YWlsLyR7c2xvdF9pZH1gIDogbnVsbCk7XG5cbiAgY29uc3QgcmVzZXJ2ZXNQZXJpb2RzID0gc2xvdC5yZXNlcnZlcy5tYXAoKHJlc2VydmUpID0+IHJlc2VydmUucGVyaW9kKTtcblxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXIoKTtcbiAgY29uc3QgeyBkYXRhOiB1c2VyUHJvZmlsZSB9ID0gdXNlU1dSKFxuICAgIHVzZXI/LnN1YiA/IGAvdXNlclByb2ZpbGUvJHt1c2VyPy5zdWJ9YCA6IG51bGxcbiAgKTtcblxuICBjb25zdCBpc093bmVyID0gc2xvdD8ucGFya2luZz8ub3duZXIgPT09IHVzZXJQcm9maWxlPy5faWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiB0dz1cIiBteC1hdXRvIFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHc9XCJib3JkZXIgYm9yZGVyLWJsYWNrIGJnLWdyYXktMzAwIHAtMVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wYXJraW5nLyR7c2xvdC5wYXJraW5nLl9pZH1gKX1cbiAgICAgICAgPlxuICAgICAgICAgIEJhY2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxoMSB0dz1cInRleHQtNHhsIGZvbnQtZXh0cmFib2xkXCI+U0xPVCBERVRBSUw8L2gxPlxuICAgICAgICA8ZGl2IHR3PVwibXktMlwiPlxuICAgICAgICAgIHtzbG90ICYmIChcbiAgICAgICAgICAgIDxkaXYgdHc9XCIgcC0zIHJvdW5kZWQtbGcgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgPGg0IHR3PVwidGV4dC00eGxcIj5TbG90IHtzbG90LmlkZW50aWZpY2F0aW9ufTwvaDQ+XG4gICAgICAgICAgICAgIDxwIHR3PVwidGV4dC1ncmF5LTUwMFwiPlNpdHVhdGVkIG9uIHtzbG90LnBhcmtpbmcuYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgIDxwPlNpemU6IHtzbG90LnNpemV9PC9wPlxuICAgICAgICAgICAgICA8cD5QYXJraW5nIGRpZmZpY3VsdHk6IHtzbG90LmRpZmZpY3VsdHl9PC9wPlxuICAgICAgICAgICAgICA8cD5QcmljZToge3Nsb3QucHJpY2V94oKsL2RheTwvcD5cbiAgICAgICAgICAgICAgPGRpdiB0dz1cInRleHQtbGcgbXktNVwiPkFWQUlMQUJJTElUWTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHR3PVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPFN0YXRpY0RhdGVQaWNrZXJXaWRnZXQgcmVzZXJ2ZXM9e3Jlc2VydmVzUGVyaW9kc30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtpc093bmVyICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0dz1cImJvcmRlciBib3JkZXItYmxhY2sgYmctZ3JheS0zMDAgcC0xXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYCNgKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIHNsb3RcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7IWlzT3duZXIgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR3PVwiYm9yZGVyIGJvcmRlci1ibGFjayBiZy1ncmF5LTMwMCBwLTFcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgI2ApfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBSZXNlcnZlIHNsb3RcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7IXNsb3QgJiYgPHA+UGFya2luZyBzbG90IG5vdCBmb3VuZDwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVVzZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJTdGF0aWNEYXRlUGlja2VyV2lkZ2V0IiwiUGFnZSIsInJvdXRlciIsInNsb3RfaWQiLCJxdWVyeSIsInNsb3QiLCJkYXRhIiwicmVzZXJ2ZXNQZXJpb2RzIiwicmVzZXJ2ZXMiLCJtYXAiLCJyZXNlcnZlIiwicGVyaW9kIiwidXNlciIsInN1YiIsInVzZXJQcm9maWxlIiwiaXNPd25lciIsInBhcmtpbmciLCJvd25lciIsIl9pZCIsInB1c2giLCJpZGVudGlmaWNhdGlvbiIsImFkZHJlc3MiLCJzaXplIiwiZGlmZmljdWx0eSIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/slot/[slot_id].tsx\n"));

/***/ })

});