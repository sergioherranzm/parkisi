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
exports.id = "pages/slot/[slot_id]";
exports.ids = ["pages/slot/[slot_id]"];
exports.modules = {

/***/ "./components/StaticDatePickerWidget.tsx":
/*!***********************************************!*\
  !*** ./components/StaticDatePickerWidget.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StaticDatePickerWidget\": () => (/* binding */ StaticDatePickerWidget)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ \"@mui/x-date-pickers/AdapterDayjs\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ \"@mui/x-date-pickers/LocalizationProvider\");\n/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_x_date_pickers_StaticDatePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers/StaticDatePicker */ \"@mui/x-date-pickers/StaticDatePicker\");\n/* harmony import */ var _mui_x_date_pickers_StaticDatePicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_StaticDatePicker__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/mnt/c/Users/Sergio/CursoWebDelvelopment/projects/parkisi/frontend/components/StaticDatePickerWidget.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst StaticDatePickerWidget = props => {\n  const {\n    reserves\n  } = props;\n  console.log('Reserves:', reserves);\n\n  const disableReserves = date => {\n    const reservesArr = [dayjs__WEBPACK_IMPORTED_MODULE_1___default()('2022-10-18'), dayjs__WEBPACK_IMPORTED_MODULE_1___default()('2022-10-28')];\n\n    for (let i = 0; i < reservesArr.length; i++) {\n      if (date.year() === reservesArr[i].year() && date.month() === reservesArr[i].month() && date.date() === reservesArr[i].date()) {\n        return true;\n      }\n    }\n\n    return false;\n  };\n\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_4__.LocalizationProvider, {\n    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_3__.AdapterDayjs,\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_x_date_pickers_StaticDatePicker__WEBPACK_IMPORTED_MODULE_5__.StaticDatePicker, {\n      readOnly: true,\n      displayStaticWrapperAs: \"desktop\",\n      openTo: \"day\",\n      value: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(''),\n      shouldDisableDate: disableReserves,\n      onChange: () => {},\n      renderInput: params => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread({}, params), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 34\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRpY0RhdGVQaWNrZXJXaWRnZXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1NLHNCQUFzQixHQUFJQyxLQUFELElBQVc7RUFDL0MsTUFBTTtJQUFFQztFQUFGLElBQWVELEtBQXJCO0VBRUFFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJGLFFBQXpCOztFQUVBLE1BQU1HLGVBQWUsR0FBSUMsSUFBRCxJQUFVO0lBQ2hDLE1BQU1DLFdBQVcsR0FBRyxDQUFDWiw0Q0FBSyxDQUFDLFlBQUQsQ0FBTixFQUFzQkEsNENBQUssQ0FBQyxZQUFELENBQTNCLENBQXBCOztJQUVBLEtBQUssSUFBSWEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsV0FBVyxDQUFDRSxNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztNQUMzQyxJQUNFRixJQUFJLENBQUNJLElBQUwsT0FBZ0JILFdBQVcsQ0FBQ0MsQ0FBRCxDQUFYLENBQWVFLElBQWYsRUFBaEIsSUFDQUosSUFBSSxDQUFDSyxLQUFMLE9BQWlCSixXQUFXLENBQUNDLENBQUQsQ0FBWCxDQUFlRyxLQUFmLEVBRGpCLElBRUFMLElBQUksQ0FBQ0EsSUFBTCxPQUFnQkMsV0FBVyxDQUFDQyxDQUFELENBQVgsQ0FBZUYsSUFBZixFQUhsQixFQUlFO1FBQ0EsT0FBTyxJQUFQO01BQ0Q7SUFDRjs7SUFDRCxPQUFPLEtBQVA7RUFDRCxDQWJEOztFQWVBLE9BQ0UsdUVBQUMsMEZBQUQ7SUFBc0IsV0FBVyxFQUFFVCwwRUFBbkM7SUFBQSxVQUNFLHVFQUFDLGtGQUFEO01BQ0UsUUFBUSxNQURWO01BRUUsc0JBQXNCLEVBQUMsU0FGekI7TUFHRSxNQUFNLEVBQUMsS0FIVDtNQUlFLEtBQUssRUFBRUYsNENBQUssQ0FBQyxFQUFELENBSmQ7TUFLRSxpQkFBaUIsRUFBRVUsZUFMckI7TUFNRSxRQUFRLEVBQUUsTUFBTSxDQUFFLENBTnBCO01BT0UsV0FBVyxFQUFHTyxNQUFELElBQVksdUVBQUMsZ0VBQUQsb0JBQWVBLE1BQWY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQVAzQjtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBYUQsQ0FqQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAtZm9ybS8uL2NvbXBvbmVudHMvU3RhdGljRGF0ZVBpY2tlcldpZGdldC50c3g/YmMwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGF5anMsIHsgRGF5anMgfSBmcm9tICdkYXlqcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XG5pbXBvcnQgeyBTdGF0aWNEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9TdGF0aWNEYXRlUGlja2VyJztcblxuZXhwb3J0IGNvbnN0IFN0YXRpY0RhdGVQaWNrZXJXaWRnZXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNlcnZlcyB9ID0gcHJvcHM7XG5cbiAgY29uc29sZS5sb2coJ1Jlc2VydmVzOicsIHJlc2VydmVzKTtcblxuICBjb25zdCBkaXNhYmxlUmVzZXJ2ZXMgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHJlc2VydmVzQXJyID0gW2RheWpzKCcyMDIyLTEwLTE4JyksIGRheWpzKCcyMDIyLTEwLTI4JyldO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNlcnZlc0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBkYXRlLnllYXIoKSA9PT0gcmVzZXJ2ZXNBcnJbaV0ueWVhcigpICYmXG4gICAgICAgIGRhdGUubW9udGgoKSA9PT0gcmVzZXJ2ZXNBcnJbaV0ubW9udGgoKSAmJlxuICAgICAgICBkYXRlLmRhdGUoKSA9PT0gcmVzZXJ2ZXNBcnJbaV0uZGF0ZSgpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cbiAgICAgIDxTdGF0aWNEYXRlUGlja2VyXG4gICAgICAgIHJlYWRPbmx5XG4gICAgICAgIGRpc3BsYXlTdGF0aWNXcmFwcGVyQXM9XCJkZXNrdG9wXCJcbiAgICAgICAgb3BlblRvPVwiZGF5XCJcbiAgICAgICAgdmFsdWU9e2RheWpzKCcnKX1cbiAgICAgICAgc2hvdWxkRGlzYWJsZURhdGU9e2Rpc2FibGVSZXNlcnZlc31cbiAgICAgICAgb25DaGFuZ2U9eygpID0+IHt9fVxuICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSAvPn1cbiAgICAgIC8+XG4gICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJkYXlqcyIsIlRleHRGaWVsZCIsIkFkYXB0ZXJEYXlqcyIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiU3RhdGljRGF0ZVBpY2tlciIsIlN0YXRpY0RhdGVQaWNrZXJXaWRnZXQiLCJwcm9wcyIsInJlc2VydmVzIiwiY29uc29sZSIsImxvZyIsImRpc2FibGVSZXNlcnZlcyIsImRhdGUiLCJyZXNlcnZlc0FyciIsImkiLCJsZW5ndGgiLCJ5ZWFyIiwibW9udGgiLCJwYXJhbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/StaticDatePickerWidget.tsx\n");

/***/ }),

/***/ "./pages/slot/[slot_id].tsx":
/*!**********************************!*\
  !*** ./pages/slot/[slot_id].tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _components_StaticDatePickerWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/StaticDatePickerWidget */ \"./components/StaticDatePickerWidget.tsx\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/mnt/c/Users/Sergio/CursoWebDelvelopment/projects/parkisi/frontend/pages/slot/[slot_id].tsx\";\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n\n\nvar _ref =  false ? 0 : {\n  name: \"1q4tng0-Page\",\n  styles: \"margin-left:auto;margin-right:auto;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref2 =  false ? 0 : {\n  name: \"zb6kzd-Page\",\n  styles: \"border-width:1px;--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));padding:0.25rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref3 =  false ? 0 : {\n  name: \"14j38yt-Page\",\n  styles: \"font-size:2.25rem;line-height:2.5rem;font-weight:800;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref4 =  false ? 0 : {\n  name: \"e41bzi-Page\",\n  styles: \"margin-top:0.5rem;margin-bottom:0.5rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref5 =  false ? 0 : {\n  name: \"80mh0l-Page\",\n  styles: \"padding:0.75rem;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref6 =  false ? 0 : {\n  name: \"q81i4f-Page\",\n  styles: \"font-size:2.25rem;line-height:2.5rem;display:inline;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref7 =  false ? 0 : {\n  name: \"4txxie-Page\",\n  styles: \"border-width:1px;--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));padding:0.25rem;margin:0.5rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref8 =  false ? 0 : {\n  name: \"1umu4iv-Page\",\n  styles: \"--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity));label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref9 =  false ? 0 : {\n  name: \"15apk79-Page\",\n  styles: \"font-size:1.125rem;line-height:1.75rem;margin-top:1.25rem;margin-bottom:1.25rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref10 =  false ? 0 : {\n  name: \"1b2mm93-Page\",\n  styles: \"border-width:1px;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref11 =  false ? 0 : {\n  name: \"zb6kzd-Page\",\n  styles: \"border-width:1px;--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));padding:0.25rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref12 =  false ? 0 : {\n  name: \"1b2mm93-Page\",\n  styles: \"border-width:1px;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar _ref13 =  false ? 0 : {\n  name: \"zb6kzd-Page\",\n  styles: \"border-width:1px;--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));padding:0.25rem;label:Page;\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nconst Page = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const {\n    query: {\n      slot_id\n    }\n  } = router;\n  const {\n    data: slot\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(slot_id ? `/slot/detail/${slot_id}` : null);\n  const reservesPeriods = slot?.reserves.map(reserve => reserve.period);\n  const {\n    user\n  } = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.useUser)();\n  const {\n    data: userProfile\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user?.sub ? `/userProfile/${user?.sub}` : null);\n  const isOwner = slot?.parking?.owner === userProfile?._id;\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      css: _ref,\n      \"data-tw\": \"mx-auto\",\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        css: _ref2,\n        \"data-tw\": \"border border-black bg-gray-300 p-1\",\n        onClick: () => router.push(`/parking/${slot.parking._id}`),\n        children: \"Back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n        css: _ref3,\n        \"data-tw\": \"text-4xl font-extrabold\",\n        children: \"SLOT DETAIL\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        css: _ref4,\n        \"data-tw\": \"my-2\",\n        children: [slot && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          css: _ref5,\n          \"data-tw\": \"p-3 rounded-lg bg-white\",\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h4\", {\n            css: _ref6,\n            \"data-tw\": \"text-4xl inline\",\n            children: [\"Slot \", slot.identification]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 15\n          }, undefined), isOwner && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n            css: _ref7,\n            \"data-tw\": \"border border-black bg-gray-300 p-1 m-2\",\n            onClick: () => router.push(`#`),\n            children: \"Remove slot\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 17\n          }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n            css: _ref8,\n            \"data-tw\": \"text-gray-500\",\n            children: [\"Situated on \", slot.parking.address]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 15\n          }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n            children: [\"Size: \", slot.size]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 15\n          }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n            children: [\"Parking difficulty: \", slot.difficulty]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 15\n          }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n            children: [\"Price: \", slot.price, \"\\u20AC/day\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            css: _ref9,\n            \"data-tw\": \"text-lg my-5\",\n            children: \"AVAILABILITY\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, undefined), isOwner && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              css: _ref10,\n              \"data-tw\": \"border\",\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_StaticDatePickerWidget__WEBPACK_IMPORTED_MODULE_3__.StaticDatePickerWidget, {\n                reserves: reservesPeriods\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 21\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 19\n            }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n              css: _ref11,\n              \"data-tw\": \"border border-black bg-gray-300 p-1\",\n              onClick: () => router.push(`#`),\n              children: \"Remove slot\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 19\n            }, undefined)]\n          }, void 0, true), !isOwner && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              css: _ref12,\n              \"data-tw\": \"border\",\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n                children: \"DateRangePickerWidget\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 21\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 19\n            }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n              css: _ref13,\n              \"data-tw\": \"border border-black bg-gray-300 p-1\",\n              onClick: () => router.push(`#`),\n              children: \"Reserve slot\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 19\n            }, undefined)]\n          }, void 0, true)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, undefined), !slot && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n          children: \"Parking slot not found\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtjQUFBO2NBQUEsVUFDRTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUE7WUFERjtjQUFBO2NBQUE7Y0FBQTtZQUFBLGFBREYsRUFJRTtjQUFBO2NBQUE7Y0FFRSxPQUFPLEVBQUUsTUFBTWIsTUFBTSxDQUFDaUIsSUFBUCxDQUFhLEdBQWIsQ0FGakI7Y0FBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUEsYUFKRjtVQUFBLGdCQTdCSjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFGSixFQTZDRyxDQUFDYixJQUFELElBQVM7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUE3Q1o7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBUkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREYsaUJBREY7QUE0REQsQ0E3RUQ7O0FBK0VBLGlFQUFlTCxJQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAtZm9ybS8uL3BhZ2VzL3Nsb3QvW3Nsb3RfaWRdLnRzeD9iNzQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlcldpZGdldCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvZm9ybV93aWRnZXRzL0RhdGVSYW5nZVBpY2tlcldpZGdldCc7XG5pbXBvcnQgeyBTdGF0aWNEYXRlUGlja2VyV2lkZ2V0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGF0aWNEYXRlUGlja2VyV2lkZ2V0JztcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHtcbiAgICBxdWVyeTogeyBzbG90X2lkIH0sXG4gIH0gPSByb3V0ZXI7XG5cbiAgY29uc3QgeyBkYXRhOiBzbG90IH0gPSB1c2VTV1Ioc2xvdF9pZCA/IGAvc2xvdC9kZXRhaWwvJHtzbG90X2lkfWAgOiBudWxsKTtcblxuICBjb25zdCByZXNlcnZlc1BlcmlvZHMgPSBzbG90Py5yZXNlcnZlcy5tYXAoKHJlc2VydmUpID0+IHJlc2VydmUucGVyaW9kKTtcblxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXIoKTtcbiAgY29uc3QgeyBkYXRhOiB1c2VyUHJvZmlsZSB9ID0gdXNlU1dSKFxuICAgIHVzZXI/LnN1YiA/IGAvdXNlclByb2ZpbGUvJHt1c2VyPy5zdWJ9YCA6IG51bGxcbiAgKTtcblxuICBjb25zdCBpc093bmVyID0gc2xvdD8ucGFya2luZz8ub3duZXIgPT09IHVzZXJQcm9maWxlPy5faWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiB0dz1cIiBteC1hdXRvIFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHc9XCJib3JkZXIgYm9yZGVyLWJsYWNrIGJnLWdyYXktMzAwIHAtMVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wYXJraW5nLyR7c2xvdC5wYXJraW5nLl9pZH1gKX1cbiAgICAgICAgPlxuICAgICAgICAgIEJhY2tcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxoMSB0dz1cInRleHQtNHhsIGZvbnQtZXh0cmFib2xkXCI+U0xPVCBERVRBSUw8L2gxPlxuICAgICAgICA8ZGl2IHR3PVwibXktMlwiPlxuICAgICAgICAgIHtzbG90ICYmIChcbiAgICAgICAgICAgIDxkaXYgdHc9XCIgcC0zIHJvdW5kZWQtbGcgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgPGg0IHR3PVwidGV4dC00eGwgaW5saW5lXCI+U2xvdCB7c2xvdC5pZGVudGlmaWNhdGlvbn08L2g0PlxuICAgICAgICAgICAgICB7aXNPd25lciAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHc9XCJib3JkZXIgYm9yZGVyLWJsYWNrIGJnLWdyYXktMzAwIHAtMSBtLTJcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYCNgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSZW1vdmUgc2xvdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8cCB0dz1cInRleHQtZ3JheS01MDBcIj5TaXR1YXRlZCBvbiB7c2xvdC5wYXJraW5nLmFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICA8cD5TaXplOiB7c2xvdC5zaXplfTwvcD5cbiAgICAgICAgICAgICAgPHA+UGFya2luZyBkaWZmaWN1bHR5OiB7c2xvdC5kaWZmaWN1bHR5fTwvcD5cbiAgICAgICAgICAgICAgPHA+UHJpY2U6IHtzbG90LnByaWNlfeKCrC9kYXk8L3A+XG4gICAgICAgICAgICAgIDxkaXYgdHc9XCJ0ZXh0LWxnIG15LTVcIj5BVkFJTEFCSUxJVFk8L2Rpdj5cbiAgICAgICAgICAgICAge2lzT3duZXIgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHR3PVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTdGF0aWNEYXRlUGlja2VyV2lkZ2V0IHJlc2VydmVzPXtyZXNlcnZlc1BlcmlvZHN9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHc9XCJib3JkZXIgYm9yZGVyLWJsYWNrIGJnLWdyYXktMzAwIHAtMVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAjYCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlbW92ZSBzbG90XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgeyFpc093bmVyICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGRpdiB0dz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5EYXRlUmFuZ2VQaWNrZXJXaWRnZXQ8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHc9XCJib3JkZXIgYm9yZGVyLWJsYWNrIGJnLWdyYXktMzAwIHAtMVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAjYCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlc2VydmUgc2xvdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshc2xvdCAmJiA8cD5QYXJraW5nIHNsb3Qgbm90IGZvdW5kPC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlVXNlciIsInVzZVJvdXRlciIsInVzZVNXUiIsIlN0YXRpY0RhdGVQaWNrZXJXaWRnZXQiLCJQYWdlIiwicm91dGVyIiwicXVlcnkiLCJzbG90X2lkIiwiZGF0YSIsInNsb3QiLCJyZXNlcnZlc1BlcmlvZHMiLCJyZXNlcnZlcyIsIm1hcCIsInJlc2VydmUiLCJwZXJpb2QiLCJ1c2VyIiwidXNlclByb2ZpbGUiLCJzdWIiLCJpc093bmVyIiwicGFya2luZyIsIm93bmVyIiwiX2lkIiwicHVzaCIsImlkZW50aWZpY2F0aW9uIiwiYWRkcmVzcyIsInNpemUiLCJkaWZmaWN1bHR5IiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/slot/[slot_id].tsx\n");

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

/***/ "@mui/material/TextField":
/*!******************************************!*\
  !*** external "@mui/material/TextField" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ "@mui/x-date-pickers/AdapterDayjs":
/*!***************************************************!*\
  !*** external "@mui/x-date-pickers/AdapterDayjs" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/AdapterDayjs");

/***/ }),

/***/ "@mui/x-date-pickers/LocalizationProvider":
/*!***********************************************************!*\
  !*** external "@mui/x-date-pickers/LocalizationProvider" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/LocalizationProvider");

/***/ }),

/***/ "@mui/x-date-pickers/StaticDatePicker":
/*!*******************************************************!*\
  !*** external "@mui/x-date-pickers/StaticDatePicker" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/StaticDatePicker");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/slot/[slot_id].tsx"));
module.exports = __webpack_exports__;

})();