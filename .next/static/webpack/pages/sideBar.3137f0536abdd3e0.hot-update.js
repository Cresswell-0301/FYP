"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sideBar",{

/***/ "./pages/sideBar.js":
/*!**************************!*\
  !*** ./pages/sideBar.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./pages/navigation.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    width: 100%;\\n    background-color: white;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    width: 160px;\\n    height: 100vh;\\n    background-color: rgb(229, 231, 235);\\n    position: sticky;\\n    top: 0;\\n    padding: 16px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    list-style-type: none;\\n    /* text-align: center; */\\n\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    margin-bottom: 0.5rem;\\n    border-radius: 10px;\\n    padding: 8px 4px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n\\n    cursor: pointer;\\n\\n    &:hover {\\n        background-color: darkgray;\\n        A {\\n            color: white;\\n        }\\n        Svg {\\n            fill: white;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    color: rgb(55, 65, 81);\\n    font-weight: 600;\\n    font-size: 18px;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    width: 75%;\\n    background-color: white;\\n    padding: 1rem;\\n    color: black;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    fill: #4f4f4f;\\n    height: 1em;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    border: 3px solid #333;\\n    width: 18px;\\n    height: 28px;\\n    padding: 2px;\\n    border-radius: 4px;\\n    position: relative;\\n    margin: 15px 0;\\n    \\n    &:before {\\n        content: '';\\n        height: 3px;\\n        width: 18px;\\n        background: #333;\\n        display: block;\\n        position: absolute;\\n        top: -6px;\\n        border-radius: 4px 4px 0 0;\\n    }\\n\\n    &:after {\\n        content: '';\\n        display: block;\\n        position: absolute;\\n        top: -1px;\\n        left: -1px;\\n        right: -1px;\\n        bottom: -1px;\\n        border: 1px solid #fff;\\n        border-radius: 2px;\\n    }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    \\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Container;\nconst MiniContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c1 = MiniContainer;\nconst Select = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ul(_templateObject2());\n_c2 = Select;\nconst Option = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li(_templateObject3());\n_c3 = Option;\nconst A = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a(_templateObject4());\n_c4 = A;\nconst Detail = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c5 = Detail;\nconst Svg = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].svg(_templateObject6());\n_c6 = Svg;\nconst Battery = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject7());\nconst BatteryLevel = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject8());\nfunction SideBar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MiniContainer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Select, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                                            href: \"#\",\n                                            children: \"Brand\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                            lineNumber: 111,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Svg, {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            viewBox: \"0 0 512 512\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                                                d: \"M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                                lineNumber: 113,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                            lineNumber: 112,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                                            href: \"#\",\n                                            children: \"Power Bank\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                            lineNumber: 118,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            class: \"battery\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                class: \"battery-level alert\",\n                                                style: \"height:10%;\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                                lineNumber: 121,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                                        href: \"#\",\n                                        children: \"Cable\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                    lineNumber: 126,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                                        href: \"#\",\n                                        children: \"Charger\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                                        href: \"#\",\n                                        children: \"Screen Protection\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                    lineNumber: 134,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                                        href: \"#\",\n                                        children: \"Phone Case\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                            lineNumber: 109,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                        children: \"Content\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                        lineNumber: 144,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this);\n}\n_c7 = SideBar;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"MiniContainer\");\n$RefreshReg$(_c2, \"Select\");\n$RefreshReg$(_c3, \"Option\");\n$RefreshReg$(_c4, \"A\");\n$RefreshReg$(_c5, \"Detail\");\n$RefreshReg$(_c6, \"Svg\");\n$RefreshReg$(_c7, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWRlQmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0Q7QUFFdEMsTUFBTUUsWUFBWUYsNkRBQVU7S0FBdEJFO0FBTU4sTUFBTUUsZ0JBQWdCSiw2REFBVTtNQUExQkk7QUFTTixNQUFNQyxTQUFTTCw0REFBUztNQUFsQks7QUFNTixNQUFNRSxTQUFTUCw0REFBUztNQUFsQk87QUFxQk4sTUFBTUUsSUFBSVQsMkRBQVE7TUFBWlM7QUFNTixNQUFNRSxTQUFTWCw2REFBVTtNQUFuQlc7QUFPTixNQUFNQyxNQUFNWiw2REFBVTtNQUFoQlk7QUFLTixNQUFNRSxVQUFVZCw2REFBVTtBQWlDMUIsTUFBTWUsZUFBZWYsNkRBQVU7QUFJaEIsU0FBU2dCO0lBQ3BCLHFCQUNJLDhEQUFDYjs7MEJBQ0csOERBQUNGLG1EQUFVQTs7Ozs7MEJBRVgsOERBQUNDOztrQ0FDRyw4REFBQ0U7a0NBRUcsNEVBQUNDOzs4Q0FDRyw4REFBQ0U7O3NEQUNHLDhEQUFDRTs0Q0FBRVEsTUFBSztzREFBSTs7Ozs7O3NEQUNaLDhEQUFDTDs0Q0FBSU0sT0FBTTs0Q0FBNkJDLFNBQVE7c0RBQzVDLDRFQUFDQztnREFBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSWhCLDhEQUFDZDs7c0RBQ0csOERBQUNFOzRDQUFFUSxNQUFLO3NEQUFJOzs7Ozs7c0RBRVosOERBQUNkOzRDQUFJbUIsT0FBTTtzREFDUCw0RUFBQ25CO2dEQUFJbUIsT0FBTTtnREFBc0JDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUsvQyw4REFBQ2hCOzhDQUNHLDRFQUFDRTt3Q0FBRVEsTUFBSztrREFBSTs7Ozs7Ozs7Ozs7OENBR2hCLDhEQUFDVjs4Q0FDRyw0RUFBQ0U7d0NBQUVRLE1BQUs7a0RBQUk7Ozs7Ozs7Ozs7OzhDQUdoQiw4REFBQ1Y7OENBQ0csNEVBQUNFO3dDQUFFUSxNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs4Q0FHaEIsOERBQUNWOzhDQUNHLDRFQUFDRTt3Q0FBRVEsTUFBSztrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLeEIsOERBQUNOO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEI7TUEvQ3dCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWRlQmFyLmpzP2E2YWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vbmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuY29uc3QgTWluaUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjMxLCAyMzUpO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTZWxlY3QgPSBzdHlsZWQudWxgXHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcblxyXG5gO1xyXG5cclxuY29uc3QgT3B0aW9uID0gc3R5bGVkLmxpYFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDhweCA0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgICAgICAgQSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgU3ZnIHtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQSA9IHN0eWxlZC5hYFxyXG4gICAgY29sb3I6IHJnYig1NSwgNjUsIDgxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBEZXRhaWwgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuYDtcclxuXHJcbmNvbnN0IFN2ZyA9IHN0eWxlZC5zdmdgXHJcbiAgICBmaWxsOiAjNGY0ZjRmO1xyXG4gICAgaGVpZ2h0OiAxZW07XHJcbmA7XHJcblxyXG5jb25zdCBCYXR0ZXJ5ID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzMzM7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0xcHg7XHJcbiAgICAgICAgbGVmdDogLTFweDtcclxuICAgICAgICByaWdodDogLTFweDtcclxuICAgICAgICBib3R0b206IC0xcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBCYXR0ZXJ5TGV2ZWwgPSBzdHlsZWQuZGl2YFxyXG4gICAgXHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFyKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cclxuXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8TWluaUNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBIGhyZWY9XCIjXCI+QnJhbmQ8L0E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ3MC42IDI3OC42YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zbC0xNjAtMTYwYy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM0w0MDIuNyAyNTYgMjY1LjQgMzkzLjRjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zczMyLjggMTIuNSA0NS4zIDBsMTYwLTE2MHptLTM1MiAxNjBsMTYwLTE2MGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM2wtMTYwLTE2MGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNMMjEwLjcgMjU2IDczLjQgMzkzLjRjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zczMyLjggMTIuNSA0NS4zIDB6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Tdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBIGhyZWY9XCIjXCI+UG93ZXIgQmFuazwvQT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmF0dGVyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXR0ZXJ5LWxldmVsIGFsZXJ0XCIgc3R5bGU9XCJoZWlnaHQ6MTAlO1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QSBocmVmPVwiI1wiPkNhYmxlPC9BPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QSBocmVmPVwiI1wiPkNoYXJnZXI8L0E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBIGhyZWY9XCIjXCI+U2NyZWVuIFByb3RlY3Rpb248L0E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBIGhyZWY9XCIjXCI+UGhvbmUgQ2FzZTwvQT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L01pbmlDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPERldGFpbD5Db250ZW50PC9EZXRhaWw+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlZCIsIk5hdmlnYXRpb24iLCJDb250YWluZXIiLCJkaXYiLCJNaW5pQ29udGFpbmVyIiwiU2VsZWN0IiwidWwiLCJPcHRpb24iLCJsaSIsIkEiLCJhIiwiRGV0YWlsIiwiU3ZnIiwic3ZnIiwiQmF0dGVyeSIsIkJhdHRlcnlMZXZlbCIsIlNpZGVCYXIiLCJocmVmIiwieG1sbnMiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJjbGFzcyIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sideBar.js\n"));

/***/ })

});