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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Debug; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: relative;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    padding: 1.5rem 1rem;\\n    margin-top: 0.5rem;\\n\\n    @media (min-width: 640px) {\\n        height: 2.5rem/* 40px */;\\n    }\\n\\n    @media (min-width: 768px) {\\n        justify-content: center;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    align-items: center;\\n    flex: 1 1 0%;\\n\\n    @media (min-width: 768px) {\\n        position: absolute;\\n    }\\n\\n    @media (min-width: 768px) {\\n        top: 0px;\\n        bottom: 0px;\\n    }\\n\\n    @media (min-width: 768px) {\\n        left: 0px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    width: 100%;\\n\\n    @media (min-width: 768px) {\\n        width: auto;\\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    height: 40px;\\n    width: 40px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    margin-right: -0.5rem;\\n    display: flex;\\n    align-items: center;\\n\\n    @media (min-width: 768px) {\\n        display: none;\\n    }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    border: none;\\n    background: none;\\n    padding: 8px;\\n    border-radius: 4px;\\n    color: #ccc;\\n    transition: background-color 0.15s ease-in-out;\\n\\n    &:hover {\\n        color: #555;\\n        background-color: #f0f0f0;\\n    }\\n\\n    &:focus {\\n        color: #555;\\n        background-color: #f0f0f0;\\n        outline: none;\\n    }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    height: 1.5rem;\\n    width: 1.5rem;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: none;\\n\\n    @media (min-width: 768px) {\\n        display: flex;\\n    }\\n\\n    @media (min-width: 768px) {\\n        > * + * {\\n            margin-left: 2.5rem;\\n        }\\n    }\\n}\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = Container;\nconst LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\n_c1 = LogoContainer;\nconst LogoSubContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = LogoSubContainer;\nconst LogoImg = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img(_templateObject3());\n_c3 = LogoImg;\nconst NavBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c4 = NavBtn;\nconst Btn = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject5());\n_c5 = Btn;\nconst Svg = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].svg(_templateObject6());\n_c6 = Svg;\nconst List = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject7());\n_c7 = List;\nfunction Debug() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LogoContainer, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LogoSubContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                \"aria-label\": \"Home\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LogoImg, {\n                                    src: \"https://www.svgrepo.com/show/491978/gas-costs.svg\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                lineNumber: 110,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavBtn, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Btn, {\n                                    type: \"button\",\n                                    id: \"main-menu\",\n                                    \"aria-label\": \"Main menu\",\n                                    \"aria-haspopup\": \"true\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Svg, {\n                                        stroke: \"currentColor\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 24 24\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                                            \"stroke-linecap\": \"round\",\n                                            \"stroke-linejoin\": \"round\",\n                                            \"stroke-width\": \"2\",\n                                            d: \"M4 6h16M4 12h16M4 18h16\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                lineNumber: 113,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                        lineNumber: 109,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                    lineNumber: 108,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(List, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"#features\",\n                            class: \"font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out\",\n                            children: \"Features\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                            lineNumber: 124,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"#pricing\",\n                            class: \"font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out\",\n                            children: \"Pricing\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                            lineNumber: 126,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"/blog\",\n                            class: \"font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out\",\n                            children: \"Blog\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                            lineNumber: 128,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"https://docs.pingping.io\",\n                            target: \"_blank\",\n                            class: \"font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out\",\n                            children: \"Docs\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                            lineNumber: 130,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                    lineNumber: 123,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    class: \"hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            class: \"inline-flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                class: \"inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                lineNumber: 136,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                            lineNumber: 135,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            class: \"inline-flex rounded-md shadow ml-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"/signup\",\n                                class: \"inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out\",\n                                children: \"Get started\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                                lineNumber: 141,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                            lineNumber: 140,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n                    lineNumber: 134,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n            lineNumber: 107,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\test2\\\\pages\\\\debug.js\",\n        lineNumber: 106,\n        columnNumber: 9\n    }, this);\n}\n_c8 = Debug;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"LogoContainer\");\n$RefreshReg$(_c2, \"LogoSubContainer\");\n$RefreshReg$(_c3, \"LogoImg\");\n$RefreshReg$(_c4, \"NavBtn\");\n$RefreshReg$(_c5, \"Btn\");\n$RefreshReg$(_c6, \"Svg\");\n$RefreshReg$(_c7, \"List\");\n$RefreshReg$(_c8, \"Debug\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZWJ1Zy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLFlBQVlELDZEQUFVO0tBQXRCQztBQWlCTixNQUFNRSxnQkFBZ0JILDZEQUFVO01BQTFCRztBQW1CTixNQUFNQyxtQkFBbUJKLDZEQUFVO01BQTdCSTtBQVdOLE1BQU1DLFVBQVVMLDZEQUFVO01BQXBCSztBQUtOLE1BQU1FLFNBQVNQLDZEQUFVO01BQW5CTztBQVVOLE1BQU1DLE1BQU1SLGdFQUFhO01BQW5CUTtBQW9CTixNQUFNRSxNQUFNViw2REFBVTtNQUFoQlU7QUFLTixNQUFNRSxPQUFPWiw2REFBVTtNQUFqQlk7QUFjUyxTQUFTQztJQUNwQixxQkFDSSw4REFBQ1g7a0JBQ0csNEVBQUNEOzs4QkFDRyw4REFBQ0U7OEJBQ0csNEVBQUNDOzswQ0FDRyw4REFBQ1U7Z0NBQUVDLE1BQUs7Z0NBQUlDLGNBQVc7MENBQ25CLDRFQUFDWDtvQ0FBUVksS0FBSTs7Ozs7Ozs7Ozs7MENBRWpCLDhEQUFDVjswQ0FDRyw0RUFBQ0M7b0NBQUlVLE1BQUs7b0NBQVNDLElBQUc7b0NBQVlILGNBQVc7b0NBQVlJLGlCQUFjOzhDQUNuRSw0RUFBQ1Y7d0NBQUlXLFFBQU87d0NBQWVDLE1BQUs7d0NBQU9DLFNBQVE7a0RBQzNDLDRFQUFDQzs0Q0FBS0Msa0JBQWU7NENBQVFDLG1CQUFnQjs0Q0FBUUMsZ0JBQWE7NENBQUlDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU81Riw4REFBQ2hCOztzQ0FDRyw4REFBQ0U7NEJBQUVDLE1BQUs7NEJBQ0pjLE9BQU07c0NBQW9GOzs7Ozs7c0NBQzlGLDhEQUFDZjs0QkFBRUMsTUFBSzs0QkFDSmMsT0FBTTtzQ0FBb0Y7Ozs7OztzQ0FDOUYsOERBQUNmOzRCQUFFQyxNQUFLOzRCQUNKYyxPQUFNO3NDQUFvRjs7Ozs7O3NDQUM5Riw4REFBQ2Y7NEJBQUVDLE1BQUs7NEJBQTJCZSxRQUFPOzRCQUN0Q0QsT0FBTTtzQ0FBb0Y7Ozs7Ozs7Ozs7Ozs4QkFHbEcsOERBQUMzQjtvQkFBSTJCLE9BQU07O3NDQUNQLDhEQUFDRTs0QkFBS0YsT0FBTTtzQ0FDUiw0RUFBQ2Y7Z0NBQUVDLE1BQUs7Z0NBQVNjLE9BQU07MENBQXdMOzs7Ozs7Ozs7OztzQ0FJbk4sOERBQUNFOzRCQUFLRixPQUFNO3NDQUNSLDRFQUFDZjtnQ0FBRUMsTUFBSztnQ0FBVWMsT0FBTTswQ0FBZ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaFI7TUE3Q3dCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVidWcuanM/M2E3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDIuNXJlbS8qIDQwcHggKi87XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2dvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleDogMSAxIDAlO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2dvU3ViQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2dvSW1nID0gc3R5bGVkLmltZ2BcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTmF2QnRuID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN2ZyA9IHN0eWxlZC5zdmdgXHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbmA7XHJcblxyXG5jb25zdCBMaXN0ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICA+ICogKyAqIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVidWcgKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8TG9nb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nb1N1YkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBhcmlhLWxhYmVsPVwiSG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ29JbWcgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy80OTE5NzgvZ2FzLWNvc3RzLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdG4gdHlwZT1cImJ1dHRvblwiIGlkPVwibWFpbi1tZW51XCIgYXJpYS1sYWJlbD1cIk1haW4gbWVudVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN2ZyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkJ0bj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvZ29TdWJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L0xvZ29Db250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNmZWF0dXJlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0XCI+RmVhdHVyZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcmljaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS05MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXRcIj5QcmljaW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYmxvZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0XCI+QmxvZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLnBpbmdwaW5nLmlvXCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS05MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXRcIj5Eb2NzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gbWQ6YWJzb2x1dGUgbWQ6ZmxleCBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1lbmQgbWQ6aW5zZXQteS0wIG1kOnJpZ2h0LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlubGluZS1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9naW5cIiBjbGFzcz1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LWJhc2UgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtYmx1ZS02MDAgaG92ZXI6dGV4dC1ibHVlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlubGluZS1mbGV4IHJvdW5kZWQtbWQgc2hhZG93IG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9zaWdudXBcIiBjbGFzcz1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LWJhc2UgbGVhZGluZy02IGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdldCBzdGFydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiTG9nb0NvbnRhaW5lciIsIkxvZ29TdWJDb250YWluZXIiLCJMb2dvSW1nIiwiaW1nIiwiTmF2QnRuIiwiQnRuIiwiYnV0dG9uIiwiU3ZnIiwic3ZnIiwiTGlzdCIsIkRlYnVnIiwiYSIsImhyZWYiLCJhcmlhLWxhYmVsIiwic3JjIiwidHlwZSIsImlkIiwiYXJpYS1oYXNwb3B1cCIsInN0cm9rZSIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwic3Ryb2tlLXdpZHRoIiwiZCIsImNsYXNzIiwidGFyZ2V0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/debug.js\n"));

/***/ })

});