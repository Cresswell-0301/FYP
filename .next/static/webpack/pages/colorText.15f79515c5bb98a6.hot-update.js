"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/colorText",{

/***/ "./pages/colorText.js":
/*!****************************!*\
  !*** ./pages/colorText.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TestPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    width: 100px;\\n    height: 100vh;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n    font-size: 6em;\\n    color: #333;\\n    position: relative;\\n\\n    &::after {\\n        content: \"Checkout\";\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        color: teal;\\n\\n        clip-path: ellipse(\\n            100px 100px at 0% center\\n        );\\n\\n        animation: animate 7s infinite;\\n\\n        @keyframes animate {\\n            0% , 100% {\\n                clip-path: ellipse(\\n                    100px 100px at 0% center\\n                );\\n            }\\n            50%{\\n                clip-path: ellipse(\\n                    100px 100px at 100% center\\n                );\\n            }\\n        }\\n\\n        background-image: linear-gradient(\\n            60deg, #00d0ff, #4dff03, #ff0058,#ffbc00, #ff0058\\n        );\\n        /* -webkit-background-clip: text; */\\n        color: transparent;\\n    }\\n'\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = Text;\nconst H2 = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2(_templateObject1());\n_c1 = H2;\nfunction TestPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Text, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(H2, {\n                children: \"Checkout\"\n            }, void 0, false, {\n                fileName: \"D:\\\\test2\\\\pages\\\\colorText.js\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\test2\\\\pages\\\\colorText.js\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\test2\\\\pages\\\\colorText.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_c2 = TestPage;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Text\");\n$RefreshReg$(_c1, \"H2\");\n$RefreshReg$(_c2, \"TestPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb2xvclRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxNQUFNQyxPQUFPRCw2REFBVTtLQUFqQkM7QUFVTixNQUFNRSxLQUFLSCw0REFBUztNQUFkRztBQXVDUyxTQUFTRTtJQUNwQixxQkFDSSw4REFBQ0g7a0JBQ0csNEVBQUNEO3NCQUNHLDRFQUFDRTswQkFBRzs7Ozs7Ozs7Ozs7Ozs7OztBQUlwQjtNQVJ3QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sb3JUZXh0LmpzP2M4OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblxyXG5gO1xyXG5cclxuY29uc3QgSDIgPSBzdHlsZWQuaDJgXHJcbiAgICBmb250LXNpemU6IDZlbTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIkNoZWNrb3V0XCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGNvbG9yOiB0ZWFsO1xyXG5cclxuICAgICAgICBjbGlwLXBhdGg6IGVsbGlwc2UoXHJcbiAgICAgICAgICAgIDEwMHB4IDEwMHB4IGF0IDAlIGNlbnRlclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZSA3cyBpbmZpbml0ZTtcclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAgICAgICAgICAgMCUgLCAxMDAlIHtcclxuICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZShcclxuICAgICAgICAgICAgICAgICAgICAxMDBweCAxMDBweCBhdCAwJSBjZW50ZXJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgNTAle1xyXG4gICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMHB4IDEwMHB4IGF0IDEwMCUgY2VudGVyXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDYwZGVnLCAjMDBkMGZmLCAjNGRmZjAzLCAjZmYwMDU4LCNmZmJjMDAsICNmZjAwNThcclxuICAgICAgICApO1xyXG4gICAgICAgIC8qIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyAqL1xyXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RQYWdlKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgICAgPEgyPkNoZWNrb3V0PC9IMj5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlZCIsIlRleHQiLCJkaXYiLCJIMiIsImgyIiwiVGVzdFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/colorText.js\n"));

/***/ })

});