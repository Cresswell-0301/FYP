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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./pages/navigation.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    width: 100%;\\n    background-color: white;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    width: 160px;\\n    height: 100vh;\\n    background-color: rgb(229, 231, 235);\\n    position: sticky;\\n    top: 0;\\n    padding: 16px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    list-style-type: none;\\n    /* text-align: center; */\\n\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    margin-bottom: 0.5rem;\\n    border-radius: 10px;\\n    padding: 8px 4px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n\\n    cursor: pointer;\\n\\n    &:hover {\\n        background-color: darkgray;\\n        A {\\n            color: white;\\n        }\\n        Svg {\\n            fill: white;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    color: rgb(55, 65, 81);\\n    font-weight: 600;\\n    font-size: 18px;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    width: 75%;\\n    background-color: white;\\n    padding: 1rem;\\n    color: black;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    fill: #4f4f4f;\\n    height: 1em;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    border: 3px solid #333;\\n    width: 18px;\\n    height: 28px;\\n    padding: 2px;\\n    border-radius: 4px;\\n    position: relative;\\n    margin: 15px 0;\\n    \\n    &:before {\\n        content: '';\\n        height: 3px;\\n        width: 18px;\\n        background: #333;\\n        display: block;\\n        position: absolute;\\n        top: -6px;\\n        border-radius: 4px 4px 0 0;\\n    }\\n\\n    &:after {\\n        content: '';\\n        display: block;\\n        position: absolute;\\n        top: -1px;\\n        left: -1px;\\n        right: -1px;\\n        bottom: -1px;\\n        border: 1px solid #fff;\\n        border-radius: 2px;\\n    }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: absolute;\\n    bottom: 0px;\\n    left: 0;\\n    right: 0;\\n    height: 10%;\\n\\n    /* background-color: #e81309; */\\n    background-color: #EFAF13;\\n\\n    &.warn {\\n    }\\n        \\n    &.alert {\\n        \\n        &:before {\\n            background-image: url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cg%3E%3C%2Fg%3E%20%3Cpath%20fill%3D%22%23e81309%22%20d%3D%22M17.927%2012l2.68-10.28c0.040-0.126%200.060-0.261%200.060-0.4%200-0.726-0.587-1.32-1.314-1.32-0.413%200-0.78%200.187-1.019%200.487l-13.38%2017.353c-0.18%200.227-0.287%200.513-0.287%200.827%200%200.733%200.6%201.333%201.333%201.333h8.073l-2.68%2010.28c-0.041%200.127-0.060%200.261-0.060%200.4%200.001%200.727%200.587%201.32%201.314%201.32%200.413%200%200.78-0.186%201.020-0.487l13.379-17.353c0.181-0.227%200.287-0.513%200.287-0.827%200-0.733-0.6-1.333-1.333-1.333h-8.073z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'); background-repeat: no-repeat;\\n            background-size: $lightning-size;\\n            height: $lightning-size;\\n            width: $lightning-size;\\n            margin: -25px 0 0 2px;\\n            content: '';\\n            display: inline-block;\\n            position: absolute;\\n        }\\n    } \\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Container;\nconst MiniContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c1 = MiniContainer;\nconst Select = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ul(_templateObject2());\n_c2 = Select;\nconst Option = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li(_templateObject3());\n_c3 = Option;\nconst A = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a(_templateObject4());\n_c4 = A;\nconst Detail = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c5 = Detail;\nconst Svg = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].svg(_templateObject6());\n_c6 = Svg;\nconst Battery = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject7());\n_c7 = Battery;\nconst BatteryLevel = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject8());\n_c8 = BatteryLevel;\nfunction SideBar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                lineNumber: 128,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MiniContainer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Select, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                                            href: \"#\",\n                                            children: \"Brand\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                            lineNumber: 135,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Svg, {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            viewBox: \"0 0 512 512\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                                                d: \"M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                                lineNumber: 137,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                            lineNumber: 136,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                    lineNumber: 134,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                                            href: \"#\",\n                                            children: \"Power Bank\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                            lineNumber: 142,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Battery, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BatteryLevel, {}, void 0, false, {\n                                                fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                                lineNumber: 145,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                            lineNumber: 144,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                    lineNumber: 141,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                                        href: \"#\",\n                                        children: \"Cable\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                        lineNumber: 151,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                    lineNumber: 150,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                                        href: \"#\",\n                                        children: \"Charger\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                        lineNumber: 155,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                    lineNumber: 154,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                                        href: \"#\",\n                                        children: \"Screen Protection\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                        lineNumber: 159,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                    lineNumber: 158,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(A, {\n                                        href: \"#\",\n                                        children: \"Phone Case\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                        lineNumber: 163,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                                    lineNumber: 162,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                            lineNumber: 133,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                        lineNumber: 131,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Detail, {\n                        children: \"Content\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                        lineNumber: 168,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n                lineNumber: 130,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\test2\\\\pages\\\\sideBar.js\",\n        lineNumber: 127,\n        columnNumber: 9\n    }, this);\n}\n_c9 = SideBar;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"MiniContainer\");\n$RefreshReg$(_c2, \"Select\");\n$RefreshReg$(_c3, \"Option\");\n$RefreshReg$(_c4, \"A\");\n$RefreshReg$(_c5, \"Detail\");\n$RefreshReg$(_c6, \"Svg\");\n$RefreshReg$(_c7, \"Battery\");\n$RefreshReg$(_c8, \"BatteryLevel\");\n$RefreshReg$(_c9, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWRlQmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0Q7QUFFdEMsTUFBTUUsWUFBWUYsNkRBQVU7S0FBdEJFO0FBTU4sTUFBTUUsZ0JBQWdCSiw2REFBVTtNQUExQkk7QUFTTixNQUFNQyxTQUFTTCw0REFBUztNQUFsQks7QUFNTixNQUFNRSxTQUFTUCw0REFBUztNQUFsQk87QUFxQk4sTUFBTUUsSUFBSVQsMkRBQVE7TUFBWlM7QUFNTixNQUFNRSxTQUFTWCw2REFBVTtNQUFuQlc7QUFPTixNQUFNQyxNQUFNWiw2REFBVTtNQUFoQlk7QUFLTixNQUFNRSxVQUFVZCw2REFBVTtNQUFwQmM7QUFpQ04sTUFBTUMsZUFBZWYsNkRBQVU7TUFBekJlO0FBNEJTLFNBQVNDO0lBQ3BCLHFCQUNJLDhEQUFDYjs7MEJBQ0csOERBQUNGLG1EQUFVQTs7Ozs7MEJBRVgsOERBQUNDOztrQ0FDRyw4REFBQ0U7a0NBRUcsNEVBQUNDOzs4Q0FDRyw4REFBQ0U7O3NEQUNHLDhEQUFDRTs0Q0FBRVEsTUFBSztzREFBSTs7Ozs7O3NEQUNaLDhEQUFDTDs0Q0FBSU0sT0FBTTs0Q0FBNkJDLFNBQVE7c0RBQzVDLDRFQUFDQztnREFBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSWhCLDhEQUFDZDs7c0RBQ0csOERBQUNFOzRDQUFFUSxNQUFLO3NEQUFJOzs7Ozs7c0RBRVosOERBQUNIO3NEQUNHLDRFQUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FLVCw4REFBQ1I7OENBQ0csNEVBQUNFO3dDQUFFUSxNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs4Q0FHaEIsOERBQUNWOzhDQUNHLDRFQUFDRTt3Q0FBRVEsTUFBSztrREFBSTs7Ozs7Ozs7Ozs7OENBR2hCLDhEQUFDVjs4Q0FDRyw0RUFBQ0U7d0NBQUVRLE1BQUs7a0RBQUk7Ozs7Ozs7Ozs7OzhDQUdoQiw4REFBQ1Y7OENBQ0csNEVBQUNFO3dDQUFFUSxNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt4Qiw4REFBQ047a0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtNQS9Dd0JLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZGVCYXIuanM/YTZhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9uYXZpZ2F0aW9uXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5jb25zdCBNaW5pQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMzEsIDIzNSk7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuYDtcclxuXHJcbmNvbnN0IFNlbGVjdCA9IHN0eWxlZC51bGBcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuXHJcbmA7XHJcblxyXG5jb25zdCBPcHRpb24gPSBzdHlsZWQubGlgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcclxuICAgICAgICBBIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBTdmcge1xyXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBBID0gc3R5bGVkLmFgXHJcbiAgICBjb2xvcjogcmdiKDU1LCA2NSwgODEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuYDtcclxuXHJcbmNvbnN0IERldGFpbCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG5gO1xyXG5cclxuY29uc3QgU3ZnID0gc3R5bGVkLnN2Z2BcclxuICAgIGZpbGw6ICM0ZjRmNGY7XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxuYDtcclxuXHJcbmNvbnN0IEJhdHRlcnkgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzMzMztcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICBcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC02cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgIGJvdHRvbTogLTFweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEJhdHRlcnlMZXZlbCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTAlO1xyXG5cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlODEzMDk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZBRjEzO1xyXG5cclxuICAgICYud2FybiB7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAmLmFsZXJ0IHtcclxuICAgICAgICBcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDJTNGeG1sJTIwdmVyc2lvbiUzRCUyMjEuMCUyMiUyMGVuY29kaW5nJTNEJTIydXRmLTglMjIlM0YlM0UlM0MhRE9DVFlQRSUyMHN2ZyUyMFBVQkxJQyUyMCUyMi0lMkYlMkZXM0MlMkYlMkZEVEQlMjBTVkclMjAxLjElMkYlMkZFTiUyMiUyMCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGR3JhcGhpY3MlMkZTVkclMkYxLjElMkZEVEQlMkZzdmcxMS5kdGQlMjIlM0UlM0NzdmclMjB2ZXJzaW9uJTNEJTIyMS4xJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB4bWxucyUzQXhsaW5rJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmslMjIlMjB3aWR0aCUzRCUyMjMyJTIyJTIwaGVpZ2h0JTNEJTIyMzIlMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjAzMiUyMDMyJTIyJTNFJTNDZyUzRSUzQyUyRmclM0UlMjAlM0NwYXRoJTIwZmlsbCUzRCUyMiUyM2U4MTMwOSUyMiUyMGQlM0QlMjJNMTcuOTI3JTIwMTJsMi42OC0xMC4yOGMwLjA0MC0wLjEyNiUyMDAuMDYwLTAuMjYxJTIwMC4wNjAtMC40JTIwMC0wLjcyNi0wLjU4Ny0xLjMyLTEuMzE0LTEuMzItMC40MTMlMjAwLTAuNzglMjAwLjE4Ny0xLjAxOSUyMDAuNDg3bC0xMy4zOCUyMDE3LjM1M2MtMC4xOCUyMDAuMjI3LTAuMjg3JTIwMC41MTMtMC4yODclMjAwLjgyNyUyMDAlMjAwLjczMyUyMDAuNiUyMDEuMzMzJTIwMS4zMzMlMjAxLjMzM2g4LjA3M2wtMi42OCUyMDEwLjI4Yy0wLjA0MSUyMDAuMTI3LTAuMDYwJTIwMC4yNjEtMC4wNjAlMjAwLjQlMjAwLjAwMSUyMDAuNzI3JTIwMC41ODclMjAxLjMyJTIwMS4zMTQlMjAxLjMyJTIwMC40MTMlMjAwJTIwMC43OC0wLjE4NiUyMDEuMDIwLTAuNDg3bDEzLjM3OS0xNy4zNTNjMC4xODEtMC4yMjclMjAwLjI4Ny0wLjUxMyUyMDAuMjg3LTAuODI3JTIwMC0wLjczMy0wLjYtMS4zMzMtMS4zMzMtMS4zMzNoLTguMDczeiUyMiUzRSUzQyUyRnBhdGglM0UlM0MlMkZzdmclM0UnKTsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAkbGlnaHRuaW5nLXNpemU7XHJcbiAgICAgICAgICAgIGhlaWdodDogJGxpZ2h0bmluZy1zaXplO1xyXG4gICAgICAgICAgICB3aWR0aDogJGxpZ2h0bmluZy1zaXplO1xyXG4gICAgICAgICAgICBtYXJnaW46IC0yNXB4IDAgMCAycHg7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhcigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbi8+XHJcblxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPE1pbmlDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QSBocmVmPVwiI1wiPkJyYW5kPC9BPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00NzAuNiAyNzguNmMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM2wtMTYwLTE2MGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNMNDAyLjcgMjU2IDI2NS40IDM5My40Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM3MzMi44IDEyLjUgNDUuMyAwbDE2MC0xNjB6bS0zNTIgMTYwbDE2MC0xNjBjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNsLTE2MC0xNjBjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwcy0xMi41IDMyLjggMCA0NS4zTDIxMC43IDI1NiA3My40IDM5My40Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM3MzMi44IDEyLjUgNDUuMyAwelwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QSBocmVmPVwiI1wiPlBvd2VyIEJhbms8L0E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhdHRlcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhdHRlcnlMZXZlbD48L0JhdHRlcnlMZXZlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmF0dGVyeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBIGhyZWY9XCIjXCI+Q2FibGU8L0E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBIGhyZWY9XCIjXCI+Q2hhcmdlcjwvQT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEEgaHJlZj1cIiNcIj5TY3JlZW4gUHJvdGVjdGlvbjwvQT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEEgaHJlZj1cIiNcIj5QaG9uZSBDYXNlPC9BPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvTWluaUNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8RGV0YWlsPkNvbnRlbnQ8L0RldGFpbD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsic3R5bGVkIiwiTmF2aWdhdGlvbiIsIkNvbnRhaW5lciIsImRpdiIsIk1pbmlDb250YWluZXIiLCJTZWxlY3QiLCJ1bCIsIk9wdGlvbiIsImxpIiwiQSIsImEiLCJEZXRhaWwiLCJTdmciLCJzdmciLCJCYXR0ZXJ5IiwiQmF0dGVyeUxldmVsIiwiU2lkZUJhciIsImhyZWYiLCJ4bWxucyIsInZpZXdCb3giLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sideBar.js\n"));

/***/ })

});