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
exports.id = "pages/api/maps/getCoords";
exports.ids = ["pages/api/maps/getCoords"];
exports.modules = {

/***/ "react-geocode":
/*!********************************!*\
  !*** external "react-geocode" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("react-geocode");

/***/ }),

/***/ "(api)/./lib/config.ts":
/*!***********************!*\
  !*** ./lib/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BACK_URL\": () => (/* binding */ BACK_URL),\n/* harmony export */   \"GOOGLE_API_KEY\": () => (/* binding */ GOOGLE_API_KEY),\n/* harmony export */   \"MAPS_API_URL\": () => (/* binding */ MAPS_API_URL),\n/* harmony export */   \"PROXY_URL\": () => (/* binding */ PROXY_URL)\n/* harmony export */ });\nconst GOOGLE_API_KEY = \"AIzaSyD5KwAGFh4QvPhSBP9sOzusFqnTkMf5gKE\" ?? 0;\nconst MAPS_API_URL = '/api/maps';\nconst PROXY_URL = '/api/backend';\nconst BACK_URL = 'http://localhost:5000/';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29uZmlnLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxjQUFjLEdBQ3pCQyx5Q0FBQSxJQUEwQyxDQURyQztBQUVBLE1BQU1HLFlBQVksR0FBRyxXQUFyQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxjQUFsQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyx3QkFBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAtZm9ybS8uL2xpYi9jb25maWcudHM/MTI4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR09PR0xFX0FQSV9LRVkgPVxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQVBJX0tFWSA/PyAnTUlTU0lORyBHb29nbGUgQVBJIGtleSc7XG5leHBvcnQgY29uc3QgTUFQU19BUElfVVJMID0gJy9hcGkvbWFwcyc7XG5leHBvcnQgY29uc3QgUFJPWFlfVVJMID0gJy9hcGkvYmFja2VuZCc7XG5leHBvcnQgY29uc3QgQkFDS19VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLyc7XG4iXSwibmFtZXMiOlsiR09PR0xFX0FQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0FQSV9LRVkiLCJNQVBTX0FQSV9VUkwiLCJQUk9YWV9VUkwiLCJCQUNLX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/config.ts\n");

/***/ }),

/***/ "(api)/./pages/api/maps/getCoords.ts":
/*!*************************************!*\
  !*** ./pages/api/maps/getCoords.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/config */ \"(api)/./lib/config.ts\");\n/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-geocode */ \"react-geocode\");\n/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst api_route = async (req, res) => {\n  const {\n    address\n  } = req.query; // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.\n\n  react_geocode__WEBPACK_IMPORTED_MODULE_1___default().setApiKey(_lib_config__WEBPACK_IMPORTED_MODULE_0__.GOOGLE_API_KEY); // set response language. Defaults to english.\n\n  react_geocode__WEBPACK_IMPORTED_MODULE_1___default().setLanguage('en'); // set response region. Its optional.\n  // A Geocoding request with region=es (Spain) will return the Spanish city.\n\n  react_geocode__WEBPACK_IMPORTED_MODULE_1___default().setRegion('es'); // set location_type filter . Its optional.\n  // google geocoder returns more that one address for given lat/lng.\n  // In some case we need one address as response for which google itself provides a location_type filter.\n  // So we can easily parse the result for fetching address components\n  // ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.\n  // And according to the below google docs in description, ROOFTOP param returns the most accurate result.\n\n  react_geocode__WEBPACK_IMPORTED_MODULE_1___default().setLocationType('ROOFTOP'); // Enable or disable logs. Its optional.\n\n  react_geocode__WEBPACK_IMPORTED_MODULE_1___default().enableDebug(false); // Get latitude & longitude from address.\n\n  react_geocode__WEBPACK_IMPORTED_MODULE_1___default().fromAddress(address).then(response => {\n    const {\n      lng,\n      lat\n    } = response.results[0].geometry.location;\n    res.json({\n      lng,\n      lat\n    });\n  }, error => {\n    //res.status(404);\n    res.json({\n      error: error.toString()\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api_route);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFwcy9nZXRDb29yZHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsTUFBTUUsU0FBeUIsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7RUFDcEQsTUFBTTtJQUFFQztFQUFGLElBQWNGLEdBQUcsQ0FBQ0csS0FBeEIsQ0FEb0QsQ0FHcEQ7O0VBQ0FMLDhEQUFBLENBQWtCRCx1REFBbEIsRUFKb0QsQ0FNcEQ7O0VBQ0FDLGdFQUFBLENBQW9CLElBQXBCLEVBUG9ELENBU3BEO0VBQ0E7O0VBQ0FBLDhEQUFBLENBQWtCLElBQWxCLEVBWG9ELENBYXBEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFDQUEsb0VBQUEsQ0FBd0IsU0FBeEIsRUFuQm9ELENBcUJwRDs7RUFDQUEsZ0VBQUEsQ0FBb0IsS0FBcEIsRUF0Qm9ELENBd0JwRDs7RUFFQUEsZ0VBQUEsQ0FBb0JJLE9BQXBCLEVBQTZCUSxJQUE3QixDQUNHQyxRQUFELElBQWM7SUFDWixNQUFNO01BQUVDLEdBQUY7TUFBT0M7SUFBUCxJQUFlRixRQUFRLENBQUNHLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0JDLFFBQXBCLENBQTZCQyxRQUFsRDtJQUNBZixHQUFHLENBQUNnQixJQUFKLENBQVM7TUFBRUwsR0FBRjtNQUFPQztJQUFQLENBQVQ7RUFDRCxDQUpILEVBS0dLLEtBQUQsSUFBVztJQUNUO0lBQ0FqQixHQUFHLENBQUNnQixJQUFKLENBQVM7TUFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNDLFFBQU47SUFBVCxDQUFUO0VBQ0QsQ0FSSDtBQVVELENBcENEOztBQXNDQSxpRUFBZXBCLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAtZm9ybS8uL3BhZ2VzL2FwaS9tYXBzL2dldENvb3Jkcy50cz81YTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBHT09HTEVfQVBJX0tFWSB9IGZyb20gJy4uLy4uLy4uL2xpYi9jb25maWcnO1xuaW1wb3J0IEdlb2NvZGUgZnJvbSAncmVhY3QtZ2VvY29kZSc7XG5cbmNvbnN0IGFwaV9yb3V0ZTogTmV4dEFwaUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSByZXEucXVlcnk7XG5cbiAgLy8gc2V0IEdvb2dsZSBNYXBzIEdlb2NvZGluZyBBUEkgZm9yIHB1cnBvc2VzIG9mIHF1b3RhIG1hbmFnZW1lbnQuIEl0cyBvcHRpb25hbCBidXQgcmVjb21tZW5kZWQuXG4gIEdlb2NvZGUuc2V0QXBpS2V5KEdPT0dMRV9BUElfS0VZKTtcblxuICAvLyBzZXQgcmVzcG9uc2UgbGFuZ3VhZ2UuIERlZmF1bHRzIHRvIGVuZ2xpc2guXG4gIEdlb2NvZGUuc2V0TGFuZ3VhZ2UoJ2VuJyk7XG5cbiAgLy8gc2V0IHJlc3BvbnNlIHJlZ2lvbi4gSXRzIG9wdGlvbmFsLlxuICAvLyBBIEdlb2NvZGluZyByZXF1ZXN0IHdpdGggcmVnaW9uPWVzIChTcGFpbikgd2lsbCByZXR1cm4gdGhlIFNwYW5pc2ggY2l0eS5cbiAgR2VvY29kZS5zZXRSZWdpb24oJ2VzJyk7XG5cbiAgLy8gc2V0IGxvY2F0aW9uX3R5cGUgZmlsdGVyIC4gSXRzIG9wdGlvbmFsLlxuICAvLyBnb29nbGUgZ2VvY29kZXIgcmV0dXJucyBtb3JlIHRoYXQgb25lIGFkZHJlc3MgZm9yIGdpdmVuIGxhdC9sbmcuXG4gIC8vIEluIHNvbWUgY2FzZSB3ZSBuZWVkIG9uZSBhZGRyZXNzIGFzIHJlc3BvbnNlIGZvciB3aGljaCBnb29nbGUgaXRzZWxmIHByb3ZpZGVzIGEgbG9jYXRpb25fdHlwZSBmaWx0ZXIuXG4gIC8vIFNvIHdlIGNhbiBlYXNpbHkgcGFyc2UgdGhlIHJlc3VsdCBmb3IgZmV0Y2hpbmcgYWRkcmVzcyBjb21wb25lbnRzXG4gIC8vIFJPT0ZUT1AsIFJBTkdFX0lOVEVSUE9MQVRFRCwgR0VPTUVUUklDX0NFTlRFUiwgQVBQUk9YSU1BVEUgYXJlIHRoZSBhY2NlcHRlZCB2YWx1ZXMuXG4gIC8vIEFuZCBhY2NvcmRpbmcgdG8gdGhlIGJlbG93IGdvb2dsZSBkb2NzIGluIGRlc2NyaXB0aW9uLCBST09GVE9QIHBhcmFtIHJldHVybnMgdGhlIG1vc3QgYWNjdXJhdGUgcmVzdWx0LlxuICBHZW9jb2RlLnNldExvY2F0aW9uVHlwZSgnUk9PRlRPUCcpO1xuXG4gIC8vIEVuYWJsZSBvciBkaXNhYmxlIGxvZ3MuIEl0cyBvcHRpb25hbC5cbiAgR2VvY29kZS5lbmFibGVEZWJ1ZyhmYWxzZSk7XG5cbiAgLy8gR2V0IGxhdGl0dWRlICYgbG9uZ2l0dWRlIGZyb20gYWRkcmVzcy5cblxuICBHZW9jb2RlLmZyb21BZGRyZXNzKGFkZHJlc3MpLnRoZW4oXG4gICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCB7IGxuZywgbGF0IH0gPSByZXNwb25zZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uO1xuICAgICAgcmVzLmpzb24oeyBsbmcsIGxhdCB9KTtcbiAgICB9LFxuICAgIChlcnJvcikgPT4ge1xuICAgICAgLy9yZXMuc3RhdHVzKDQwNCk7XG4gICAgICByZXMuanNvbih7IGVycm9yOiBlcnJvci50b1N0cmluZygpIH0pO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwaV9yb3V0ZTtcbiJdLCJuYW1lcyI6WyJHT09HTEVfQVBJX0tFWSIsIkdlb2NvZGUiLCJhcGlfcm91dGUiLCJyZXEiLCJyZXMiLCJhZGRyZXNzIiwicXVlcnkiLCJzZXRBcGlLZXkiLCJzZXRMYW5ndWFnZSIsInNldFJlZ2lvbiIsInNldExvY2F0aW9uVHlwZSIsImVuYWJsZURlYnVnIiwiZnJvbUFkZHJlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJsbmciLCJsYXQiLCJyZXN1bHRzIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImpzb24iLCJlcnJvciIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/maps/getCoords.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/maps/getCoords.ts"));
module.exports = __webpack_exports__;

})();