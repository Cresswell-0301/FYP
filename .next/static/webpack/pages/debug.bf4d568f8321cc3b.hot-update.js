"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/debug",{

/***/ "./pages/debug.js":
/*!************************!*\
  !*** ./pages/debug.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Debug; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: relative;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    padding: 1.5rem 1rem;\\n    margin-top: 0.5rem;\\n\\n    @media (min-width: 640px) {\\n        height: 40px;\\n    }\\n\\n    @media (min-width: 768px) {\\n        justify-content: center;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    align-items: center;\\n    flex: 1 1 0%;\\n\\n    @media (min-width: 768px) {\\n        position: absolute;\\n    }\\n\\n    @media (min-width: 768px) {\\n        top: 0px;\\n        bottom: 0px;\\n    }\\n\\n    @media (min-width: 768px) {\\n        left: 0px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    width: 100%;\\n\\n    @media (min-width: 768px) {\\n        width: auto;\\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    height: 40px;\\n    width: 40px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    margin-right: -0.5rem;\\n    display: flex;\\n    align-items: center;\\n\\n    @media (min-width: 768px) {\\n        display: none;\\n    }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    border: none;\\n    background: none;\\n    padding: 8px;\\n    border-radius: 4px;\\n    color: #ccc;\\n    transition: background-color 0.15s ease-in-out;\\n\\n    &:hover {\\n        color: #555;\\n        background-color: #f0f0f0;\\n    }\\n\\n    &:focus {\\n        color: #555;\\n        background-color: #f0f0f0;\\n        outline: none;\\n    }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    height: 1.5rem;\\n    width: 1.5rem;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: none;\\n\\n    @media (min-width: 768px) {\\n        display: flex;\\n    }\\n\\n    @media (min-width: 768px) {\\n        > * + * {\\n            margin-left: 2.5rem;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    font-size: medium;\\n    color: gray;\\n    transition: color 0.15s ease-in-out;\\n\\n    &:hover {\\n        color: darkgray;\\n    }\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: none;\\n    padding-right: 10px;\\n\\n    @media (min-width: 768px) {\\n        position: absolute;\\n        display: flex;\\n        align-items: center;\\n        justify-content: flex-end;\\n        top: 0px;\\n        bottom: 0px;\\n        right: 0px;\\n    }\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: inline-flex;\\n    border-radius: 6px;\\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\\n    margin-left: 8px;\\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: inline-flex;\\n    align-items: center;\\n    padding: 8px 16px;\\n    border-width: 1px;\\n    border-color: transparent;\\n    font-size: 16px;\\n    line-height: 24px;\\n    font-weight: 500;\\n    border-radius: 6px;\\n    color: white;\\n    background-color: blue;\\n    transition-duration: 150ms;\\n    transition: ease-in-out;\\n    \\n    &:hover {\\n        background-color: darkblue;\\n    }\\n\\n    &:focus {\\n        outline: none;\\n        border-color: darkblue;\\n    }\\n    \\n\"\n    ]);\n    _templateObject11 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = Container;\nconst LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\n_c1 = LogoContainer;\nconst LogoSubContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = LogoSubContainer;\nconst LogoImg = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img(_templateObject3());\n_c3 = LogoImg;\nconst NavBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c4 = NavBtn;\nconst Btn = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject5());\n_c5 = Btn;\nconst Svg = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].svg(_templateObject6());\n_c6 = Svg;\nconst List = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject7());\n_c7 = List;\nconst A = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject8());\n_c8 = A;\nconst LoginPart = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject9());\n_c9 = LoginPart;\nconst Span = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span(_templateObject10());\n_c10 = Span;\nconst LoginA = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject11());\n_c11 = LoginA;\nfunction Debug() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LogoContainer, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LogoSubContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                \"aria-label\": \"Home\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LogoImg, {\n                                    src: \"https://www.svgrepo.com/show/491978/gas-costs.svg\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                    lineNumber: 169,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                lineNumber: 168,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavBtn, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Btn, {\n                                    type: \"button\",\n                                    id: \"main-menu\",\n                                    \"aria-label\": \"Main menu\",\n                                    \"aria-haspopup\": \"true\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Svg, {\n                                        stroke: \"currentColor\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 24 24\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                                            \"stroke-linecap\": \"round\",\n                                            \"stroke-linejoin\": \"round\",\n                                            \"stroke-width\": \"2\",\n                                            d: \"M4 6h16M4 12h16M4 18h16\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                            lineNumber: 174,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                        lineNumber: 173,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                    lineNumber: 172,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                lineNumber: 171,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                        lineNumber: 167,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                    lineNumber: 166,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(List, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                            href: \"#features\",\n                            children: \"Features\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                            lineNumber: 182,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                            href: \"#pricing\",\n                            children: \"Pricing\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                            lineNumber: 183,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                            href: \"/blog\",\n                            children: \"Blog\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                            lineNumber: 184,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                            href: \"https://docs.pingping.io\",\n                            target: \"_blank\",\n                            children: \"Docs\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                            lineNumber: 185,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                    lineNumber: 181,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoginPart, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Span, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoginA, {\n                            href: \"/signup\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                            lineNumber: 190,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                        lineNumber: 189,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                    lineNumber: 188,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n            lineNumber: 165,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n        lineNumber: 164,\n        columnNumber: 9\n    }, this);\n}\n_c12 = Debug;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"LogoContainer\");\n$RefreshReg$(_c2, \"LogoSubContainer\");\n$RefreshReg$(_c3, \"LogoImg\");\n$RefreshReg$(_c4, \"NavBtn\");\n$RefreshReg$(_c5, \"Btn\");\n$RefreshReg$(_c6, \"Svg\");\n$RefreshReg$(_c7, \"List\");\n$RefreshReg$(_c8, \"A\");\n$RefreshReg$(_c9, \"LoginPart\");\n$RefreshReg$(_c10, \"Span\");\n$RefreshReg$(_c11, \"LoginA\");\n$RefreshReg$(_c12, \"Debug\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZWJ1Zy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLFlBQVlELDZEQUFVO0tBQXRCQztBQWlCTixNQUFNRSxnQkFBZ0JILDZEQUFVO01BQTFCRztBQW1CTixNQUFNQyxtQkFBbUJKLDZEQUFVO01BQTdCSTtBQVdOLE1BQU1DLFVBQVVMLDZEQUFVO01BQXBCSztBQUtOLE1BQU1FLFNBQVNQLDZEQUFVO01BQW5CTztBQVVOLE1BQU1DLE1BQU1SLGdFQUFhO01BQW5CUTtBQW9CTixNQUFNRSxNQUFNViw2REFBVTtNQUFoQlU7QUFLTixNQUFNRSxPQUFPWiw2REFBVTtNQUFqQlk7QUFjTixNQUFNQyxJQUFJYiwyREFBUTtNQUFaYTtBQVVOLE1BQU1FLFlBQVlmLDZEQUFVO01BQXRCZTtBQWVOLE1BQU1DLE9BQU9oQiw4REFBVztPQUFsQmdCO0FBT04sTUFBTUUsU0FBU2xCLDJEQUFRO09BQWpCa0I7QUEwQlMsU0FBU0M7SUFDcEIscUJBQ0ksOERBQUNqQjtrQkFDRyw0RUFBQ0Q7OzhCQUNHLDhEQUFDRTs4QkFDRyw0RUFBQ0M7OzBDQUNHLDhEQUFDVTtnQ0FBRU0sTUFBSztnQ0FBSUMsY0FBVzswQ0FDbkIsNEVBQUNoQjtvQ0FBUWlCLEtBQUk7Ozs7Ozs7Ozs7OzBDQUVqQiw4REFBQ2Y7MENBQ0csNEVBQUNDO29DQUFJZSxNQUFLO29DQUFTQyxJQUFHO29DQUFZSCxjQUFXO29DQUFZSSxpQkFBYzs4Q0FDbkUsNEVBQUNmO3dDQUFJZ0IsUUFBTzt3Q0FBZUMsTUFBSzt3Q0FBT0MsU0FBUTtrREFDM0MsNEVBQUNDOzRDQUFLQyxrQkFBZTs0Q0FBUUMsbUJBQWdCOzRDQUFRQyxnQkFBYTs0Q0FBSUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTzVGLDhEQUFDckI7O3NDQUNHLDhEQUFDQzs0QkFBRU8sTUFBSztzQ0FBWTs7Ozs7O3NDQUNwQiw4REFBQ1A7NEJBQUVPLE1BQUs7c0NBQVc7Ozs7OztzQ0FDbkIsOERBQUNQOzRCQUFFTyxNQUFLO3NDQUFROzs7Ozs7c0NBQ2hCLDhEQUFDUDs0QkFBRU8sTUFBSzs0QkFBMkJjLFFBQU87c0NBQVM7Ozs7Ozs7Ozs7Ozs4QkFHdkQsOERBQUNuQjs4QkFDRyw0RUFBQ0M7a0NBQ0csNEVBQUNFOzRCQUFPRSxNQUFLO3NDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTL0M7T0FyQ3dCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZWJ1Zy5qcz8zYTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IExvZ29Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxIDEgMCU7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IExvZ29TdWJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IExvZ29JbWcgPSBzdHlsZWQuaW1nYFxyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBOYXZCdG4gPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3ZnID0gc3R5bGVkLnN2Z2BcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgd2lkdGg6IDEuNXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IExpc3QgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgID4gKiArICoge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEEgPSBzdHlsZWQuYWBcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogZGFya2dyYXk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpblBhcnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTG9naW5BID0gc3R5bGVkLmFgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZGFya2JsdWU7XHJcbiAgICB9XHJcbiAgICBcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlYnVnICgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPExvZ29Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ29TdWJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgYXJpYS1sYWJlbD1cIkhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvSW1nIHNyYz1cImh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3Nob3cvNDkxOTc4L2dhcy1jb3N0cy5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZCdG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnRuIHR5cGU9XCJidXR0b25cIiBpZD1cIm1haW4tbWVudVwiIGFyaWEtbGFiZWw9XCJNYWluIG1lbnVcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdmcgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Tdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZCdG4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2dvU3ViQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9Mb2dvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBIGhyZWY9XCIjZmVhdHVyZXNcIj5GZWF0dXJlczwvQT5cclxuICAgICAgICAgICAgICAgICAgICA8QSBocmVmPVwiI3ByaWNpbmdcIj5QcmljaW5nPC9BPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBIGhyZWY9XCIvYmxvZ1wiPkJsb2c8L0E+XHJcbiAgICAgICAgICAgICAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vZG9jcy5waW5ncGluZy5pb1wiIHRhcmdldD1cIl9ibGFua1wiPkRvY3M8L0E+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgPExvZ2luUGFydD5cclxuICAgICAgICAgICAgICAgICAgICA8U3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luQSBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xvZ2luQT5cclxuICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0xvZ2luUGFydD5cclxuXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIkxvZ29Db250YWluZXIiLCJMb2dvU3ViQ29udGFpbmVyIiwiTG9nb0ltZyIsImltZyIsIk5hdkJ0biIsIkJ0biIsImJ1dHRvbiIsIlN2ZyIsInN2ZyIsIkxpc3QiLCJBIiwiYSIsIkxvZ2luUGFydCIsIlNwYW4iLCJzcGFuIiwiTG9naW5BIiwiRGVidWciLCJocmVmIiwiYXJpYS1sYWJlbCIsInNyYyIsInR5cGUiLCJpZCIsImFyaWEtaGFzcG9wdXAiLCJzdHJva2UiLCJmaWxsIiwidmlld0JveCIsInBhdGgiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsInN0cm9rZS13aWR0aCIsImQiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/debug.js\n"));

/***/ })

});