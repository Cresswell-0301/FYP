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

/***/ "./pages/chatbox.js":
/*!**************************!*\
  !*** ./pages/chatbox.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import Script from \"next/script\";\n// export default function ChatBox (){\n//     return (\n//         <div>\n//             <Script src=\"https://static.elfsight.com/platform/platform.js\" data-use-service-core defer></Script>\n//             <div class=\"elfsight-app-d357eb6f-d7b1-405f-8bdf-7768f7f921c0\" data-elfsight-app-lazy></div>\n//         </div>\n//     )\n// }\n// pages/index.js\n\nvar _s = $RefreshSig$();\n\nfunction ChatBox() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const script = document.createElement(\"script\");\n        script.src = \"https://static.elfsight.com/platform/platform.js\";\n        script.async = true;\n        document.body.appendChild(script);\n        return ()=>{\n            document.body.removeChild(script);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"elfsight-app-d357eb6f-d7b1-405f-8bdf-7768f7f921c0\",\n            \"data-elfsight-app-lazy\": true\n        }, void 0, false, {\n            fileName: \"D:\\\\test2\\\\pages\\\\chatbox.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\test2\\\\pages\\\\chatbox.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatBox, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ChatBox;\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0Ym94LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsb0NBQW9DO0FBRXBDLHNDQUFzQztBQUN0QyxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLG1IQUFtSDtBQUNuSCwyR0FBMkc7QUFDM0csaUJBQWlCO0FBQ2pCLFFBQVE7QUFDUixJQUFJO0FBRUosaUJBQWlCOzs7QUFFd0I7QUFFMUIsU0FBU0U7O0lBQ3BCRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1FLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztRQUN0Q0YsT0FBT0csR0FBRyxHQUFHO1FBQ2JILE9BQU9JLEtBQUssR0FBRztRQUVmSCxTQUFTSSxJQUFJLENBQUNDLFdBQVcsQ0FBQ047UUFFMUIsT0FBTztZQUNIQyxTQUFTSSxJQUFJLENBQUNFLFdBQVcsQ0FBQ1A7UUFDOUI7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1E7a0JBQ0csNEVBQUNBO1lBQUlDLFdBQVU7WUFBb0RDLHdCQUFzQjs7Ozs7Ozs7Ozs7QUFHckc7R0FsQndCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0Ym94LmpzPzRiODgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRCb3ggKCl7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgIDxTY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGF0aWMuZWxmc2lnaHQuY29tL3BsYXRmb3JtL3BsYXRmb3JtLmpzXCIgZGF0YS11c2Utc2VydmljZS1jb3JlIGRlZmVyPjwvU2NyaXB0PlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxmc2lnaHQtYXBwLWQzNTdlYjZmLWQ3YjEtNDA1Zi04YmRmLTc3NjhmN2Y5MjFjMFwiIGRhdGEtZWxmc2lnaHQtYXBwLWxhenk+PC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICApXHJcbi8vIH1cclxuXHJcbi8vIHBhZ2VzL2luZGV4LmpzXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdEJveCgpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL3N0YXRpYy5lbGZzaWdodC5jb20vcGxhdGZvcm0vcGxhdGZvcm0uanMnO1xyXG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZnNpZ2h0LWFwcC1kMzU3ZWI2Zi1kN2IxLTQwNWYtOGJkZi03NzY4ZjdmOTIxYzBcIiBkYXRhLWVsZnNpZ2h0LWFwcC1sYXp5PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDaGF0Qm94Iiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtZWxmc2lnaHQtYXBwLWxhenkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chatbox.js\n"));

/***/ })

});