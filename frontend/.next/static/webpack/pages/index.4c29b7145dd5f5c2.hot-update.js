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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StaticMap\": function() { return /* binding */ StaticMap; }\n/* harmony export */ });\n/* harmony import */ var react_static_google_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-static-google-map */ \"./node_modules/react-static-google-map/dist/react-static-google-map.umd.js\");\n/* harmony import */ var react_static_google_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static_google_map__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/config */ \"./lib/config.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/mnt/c/Users/Sergio/CursoWebDelvelopment/projects/parkisi/frontend/components/maps/StaticMap.tsx\",\n    _this = undefined;\n\n\n\n\nvar StaticMap = function StaticMap(props) {\n  var size = props.size,\n      markers = props.markers;\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_static_google_map__WEBPACK_IMPORTED_MODULE_2__.StaticGoogleMap, {\n    size: \"600x600\",\n    apiKey: _lib_config__WEBPACK_IMPORTED_MODULE_0__.GOOGLE_API_KEY,\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_static_google_map__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n      location: {\n        lat: 40.737102,\n        lng: -73.990318\n      },\n      color: \"blue\",\n      label: \"P\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_static_google_map__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n      location: {\n        lat: 40.8,\n        lng: -72.990318\n      },\n      color: \"red\",\n      label: \"AB\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, _this);\n};\n/*\n    <StaticGoogleMap\n      size=\"600x600\"\n      className=\"img-fluid\"\n      apiKey={GOOGLE_API_KEY}\n    >\n      <Marker location=\"6.4488387,3.5496361\" color=\"red\" label=\"1\" />\n    </StaticGoogleMap>\n  \n  <StaticGoogleMap size=\"600x600\" apiKey=\"YOUR_API_KEY\">\n    <Marker.Group label=\"T\" color=\"brown\">\n      <Marker location=\"40.737102,-73.990318\" />\n      <Marker location=\"40.749825,-73.987963\" />\n    </Marker.Group>\n  </StaticGoogleMap>\n  \n  <StaticGoogleMap size=\"600x600\" apiKey=\"YOUR_API_KEY\">\n    <Marker\n      location={{ lat: 40.737102, lng: -73.990318 }}\n      color=\"blue\"\n      label=\"P\"\n    />\n    <Path\n      points={[\n        '40.737102,-73.990318',\n        '40.749825,-73.987963',\n        '40.752946,-73.987384',\n        '40.755823,-73.986397',\n      ]}\n    />\n  </StaticGoogleMap>\n  */\n\n_c = StaticMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"StaticMap\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21hcHMvU3RhdGljTWFwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU8sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUduQjtFQUNKLElBQVFDLElBQVIsR0FBMEJELEtBQTFCLENBQVFDLElBQVI7RUFBQSxJQUFjQyxPQUFkLEdBQTBCRixLQUExQixDQUFjRSxPQUFkO0VBRUEsT0FDRSx1RUFBQyxvRUFBRDtJQUFpQixJQUFJLEVBQUMsU0FBdEI7SUFBZ0MsTUFBTSxFQUFFSix1REFBeEM7SUFBQSxXQUNFLHVFQUFDLDJEQUFEO01BQ0UsUUFBUSxFQUFFO1FBQUVLLEdBQUcsRUFBRSxTQUFQO1FBQWtCQyxHQUFHLEVBQUUsQ0FBQztNQUF4QixDQURaO01BRUUsS0FBSyxFQUFDLE1BRlI7TUFHRSxLQUFLLEVBQUM7SUFIUjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBREYsRUFNRSx1RUFBQywyREFBRDtNQUNFLFFBQVEsRUFBRTtRQUFFRCxHQUFHLEVBQUUsSUFBUDtRQUFhQyxHQUFHLEVBQUUsQ0FBQztNQUFuQixDQURaO01BRUUsS0FBSyxFQUFDLEtBRlI7TUFHRSxLQUFLLEVBQUM7SUFIUjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBTkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFjRCxDQXBCTTtBQXNCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQXJEYUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXBzL1N0YXRpY01hcC50c3g/MzBjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0aWNHb29nbGVNYXAsIE1hcmtlciwgUGF0aCB9IGZyb20gJ3JlYWN0LXN0YXRpYy1nb29nbGUtbWFwJztcbmltcG9ydCB7IEdPT0dMRV9BUElfS0VZIH0gZnJvbSAnLi4vLi4vbGliL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBTdGF0aWNNYXAgPSAocHJvcHM6IHtcbiAgc2l6ZTogc3RyaW5nO1xuICBtYXJrZXJzOiB7IGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdOyBsYWJlbDogc3RyaW5nIH1bXTtcbn0pID0+IHtcbiAgY29uc3QgeyBzaXplLCBtYXJrZXJzIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxTdGF0aWNHb29nbGVNYXAgc2l6ZT1cIjYwMHg2MDBcIiBhcGlLZXk9e0dPT0dMRV9BUElfS0VZfT5cbiAgICAgIDxNYXJrZXJcbiAgICAgICAgbG9jYXRpb249e3sgbGF0OiA0MC43MzcxMDIsIGxuZzogLTczLjk5MDMxOCB9fVxuICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICBsYWJlbD1cIlBcIlxuICAgICAgLz5cbiAgICAgIDxNYXJrZXJcbiAgICAgICAgbG9jYXRpb249e3sgbGF0OiA0MC44LCBsbmc6IC03Mi45OTAzMTggfX1cbiAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICBsYWJlbD1cIkFCXCJcbiAgICAgIC8+XG4gICAgPC9TdGF0aWNHb29nbGVNYXA+XG4gICk7XG59O1xuXG4vKlxuICAgIDxTdGF0aWNHb29nbGVNYXBcbiAgICAgIHNpemU9XCI2MDB4NjAwXCJcbiAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICBhcGlLZXk9e0dPT0dMRV9BUElfS0VZfVxuICAgID5cbiAgICAgIDxNYXJrZXIgbG9jYXRpb249XCI2LjQ0ODgzODcsMy41NDk2MzYxXCIgY29sb3I9XCJyZWRcIiBsYWJlbD1cIjFcIiAvPlxuICAgIDwvU3RhdGljR29vZ2xlTWFwPlxuICBcbiAgPFN0YXRpY0dvb2dsZU1hcCBzaXplPVwiNjAweDYwMFwiIGFwaUtleT1cIllPVVJfQVBJX0tFWVwiPlxuICAgIDxNYXJrZXIuR3JvdXAgbGFiZWw9XCJUXCIgY29sb3I9XCJicm93blwiPlxuICAgICAgPE1hcmtlciBsb2NhdGlvbj1cIjQwLjczNzEwMiwtNzMuOTkwMzE4XCIgLz5cbiAgICAgIDxNYXJrZXIgbG9jYXRpb249XCI0MC43NDk4MjUsLTczLjk4Nzk2M1wiIC8+XG4gICAgPC9NYXJrZXIuR3JvdXA+XG4gIDwvU3RhdGljR29vZ2xlTWFwPlxuICBcbiAgPFN0YXRpY0dvb2dsZU1hcCBzaXplPVwiNjAweDYwMFwiIGFwaUtleT1cIllPVVJfQVBJX0tFWVwiPlxuICAgIDxNYXJrZXJcbiAgICAgIGxvY2F0aW9uPXt7IGxhdDogNDAuNzM3MTAyLCBsbmc6IC03My45OTAzMTggfX1cbiAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICBsYWJlbD1cIlBcIlxuICAgIC8+XG4gICAgPFBhdGhcbiAgICAgIHBvaW50cz17W1xuICAgICAgICAnNDAuNzM3MTAyLC03My45OTAzMTgnLFxuICAgICAgICAnNDAuNzQ5ODI1LC03My45ODc5NjMnLFxuICAgICAgICAnNDAuNzUyOTQ2LC03My45ODczODQnLFxuICAgICAgICAnNDAuNzU1ODIzLC03My45ODYzOTcnLFxuICAgICAgXX1cbiAgICAvPlxuICA8L1N0YXRpY0dvb2dsZU1hcD5cbiAgKi9cbiJdLCJuYW1lcyI6WyJTdGF0aWNHb29nbGVNYXAiLCJNYXJrZXIiLCJHT09HTEVfQVBJX0tFWSIsIlN0YXRpY01hcCIsInByb3BzIiwic2l6ZSIsIm1hcmtlcnMiLCJsYXQiLCJsbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/maps/StaticMap.tsx\n"));

/***/ })

});