"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/maps/StaticMap.tsx":
/*!***************************************!*\
  !*** ./components/maps/StaticMap.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StaticMap\": function() { return /* binding */ StaticMap; }\n/* harmony export */ });\n/* harmony import */ var react_static_google_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-static-google-map */ \"./node_modules/react-static-google-map/dist/react-static-google-map.umd.js\");\n/* harmony import */ var react_static_google_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static_google_map__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/config */ \"./lib/config.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/mnt/c/Users/Sergio/CursoWebDelvelopment/projects/parkisi/frontend/components/maps/StaticMap.tsx\",\n    _this = undefined;\n\n\n\n\nvar StaticMap = function StaticMap() {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_static_google_map__WEBPACK_IMPORTED_MODULE_2__.StaticGoogleMap, {\n    size: \"600x600\",\n    className: \"img-fluid\",\n    apiKey: _lib_config__WEBPACK_IMPORTED_MODULE_0__.GOOGLE_API_KEY,\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_static_google_map__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n      location: \"6.4488387,3.5496361\",\n      color: \"red\",\n      label: \"PAR\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n};\n/*\n  <StaticGoogleMap size=\"600x600\" className=\"img-fluid\" apiKey=\"YOUR_API_KEY\">\n    <Marker location=\"6.4488387,3.5496361\" color=\"blue\" label=\"P\" />\n  </StaticGoogleMap>\n  \n  <StaticGoogleMap size=\"600x600\" apiKey=\"YOUR_API_KEY\">\n    <Marker.Group label=\"T\" color=\"brown\">\n      <Marker location=\"40.737102,-73.990318\" />\n      <Marker location=\"40.749825,-73.987963\" />\n    </Marker.Group>\n  </StaticGoogleMap>\n  \n  <StaticGoogleMap size=\"600x600\" apiKey=\"YOUR_API_KEY\">\n    <Marker\n      location={{ lat: 40.737102, lng: -73.990318 }}\n      color=\"blue\"\n      label=\"P\"\n    />\n    <Path\n      points={[\n        '40.737102,-73.990318',\n        '40.749825,-73.987963',\n        '40.752946,-73.987384',\n        '40.755823,-73.986397',\n      ]}\n    />\n  </StaticGoogleMap>\n  */\n\n_c = StaticMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"StaticMap\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21hcHMvU3RhdGljTWFwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU8sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtFQUM3QixPQUNFLHVFQUFDLG9FQUFEO0lBQ0UsSUFBSSxFQUFDLFNBRFA7SUFFRSxTQUFTLEVBQUMsV0FGWjtJQUdFLE1BQU0sRUFBRUQsdURBSFY7SUFBQSxVQUtFLHVFQUFDLDJEQUFEO01BQVEsUUFBUSxFQUFDLHFCQUFqQjtNQUF1QyxLQUFLLEVBQUMsS0FBN0M7TUFBbUQsS0FBSyxFQUFDO0lBQXpEO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFMRjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFTRCxDQVZNO0FBWVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBdkNhQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21hcHMvU3RhdGljTWFwLnRzeD8zMGNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRpY0dvb2dsZU1hcCwgTWFya2VyLCBQYXRoIH0gZnJvbSAncmVhY3Qtc3RhdGljLWdvb2dsZS1tYXAnO1xuaW1wb3J0IHsgR09PR0xFX0FQSV9LRVkgfSBmcm9tICcuLi8uLi9saWIvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IFN0YXRpY01hcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3RhdGljR29vZ2xlTWFwXG4gICAgICBzaXplPVwiNjAweDYwMFwiXG4gICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgYXBpS2V5PXtHT09HTEVfQVBJX0tFWX1cbiAgICA+XG4gICAgICA8TWFya2VyIGxvY2F0aW9uPVwiNi40NDg4Mzg3LDMuNTQ5NjM2MVwiIGNvbG9yPVwicmVkXCIgbGFiZWw9XCJQQVJcIiAvPlxuICAgIDwvU3RhdGljR29vZ2xlTWFwPlxuICApO1xufTtcblxuLypcbiAgPFN0YXRpY0dvb2dsZU1hcCBzaXplPVwiNjAweDYwMFwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFwaUtleT1cIllPVVJfQVBJX0tFWVwiPlxuICAgIDxNYXJrZXIgbG9jYXRpb249XCI2LjQ0ODgzODcsMy41NDk2MzYxXCIgY29sb3I9XCJibHVlXCIgbGFiZWw9XCJQXCIgLz5cbiAgPC9TdGF0aWNHb29nbGVNYXA+XG4gIFxuICA8U3RhdGljR29vZ2xlTWFwIHNpemU9XCI2MDB4NjAwXCIgYXBpS2V5PVwiWU9VUl9BUElfS0VZXCI+XG4gICAgPE1hcmtlci5Hcm91cCBsYWJlbD1cIlRcIiBjb2xvcj1cImJyb3duXCI+XG4gICAgICA8TWFya2VyIGxvY2F0aW9uPVwiNDAuNzM3MTAyLC03My45OTAzMThcIiAvPlxuICAgICAgPE1hcmtlciBsb2NhdGlvbj1cIjQwLjc0OTgyNSwtNzMuOTg3OTYzXCIgLz5cbiAgICA8L01hcmtlci5Hcm91cD5cbiAgPC9TdGF0aWNHb29nbGVNYXA+XG4gIFxuICA8U3RhdGljR29vZ2xlTWFwIHNpemU9XCI2MDB4NjAwXCIgYXBpS2V5PVwiWU9VUl9BUElfS0VZXCI+XG4gICAgPE1hcmtlclxuICAgICAgbG9jYXRpb249e3sgbGF0OiA0MC43MzcxMDIsIGxuZzogLTczLjk5MDMxOCB9fVxuICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgIGxhYmVsPVwiUFwiXG4gICAgLz5cbiAgICA8UGF0aFxuICAgICAgcG9pbnRzPXtbXG4gICAgICAgICc0MC43MzcxMDIsLTczLjk5MDMxOCcsXG4gICAgICAgICc0MC43NDk4MjUsLTczLjk4Nzk2MycsXG4gICAgICAgICc0MC43NTI5NDYsLTczLjk4NzM4NCcsXG4gICAgICAgICc0MC43NTU4MjMsLTczLjk4NjM5NycsXG4gICAgICBdfVxuICAgIC8+XG4gIDwvU3RhdGljR29vZ2xlTWFwPlxuICAqL1xuIl0sIm5hbWVzIjpbIlN0YXRpY0dvb2dsZU1hcCIsIk1hcmtlciIsIkdPT0dMRV9BUElfS0VZIiwiU3RhdGljTWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/maps/StaticMap.tsx\n"));

/***/ })

});