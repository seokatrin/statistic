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

/***/ "./components/Strategies/index.tsx":
/*!*****************************************!*\
  !*** ./components/Strategies/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Strategies\": function() { return /* binding */ Strategies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AreaChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AreaChart */ \"./components/AreaChart/index.js\");\n\n\n\n\nconst Strategies = ()=>{\n    const portfoliolist = [\n        \"Strategy Quality\",\n        \"Best Leverage\",\n        \"Optimal Hedging\",\n        \"Compare Strategies\"\n    ];\n    // const series = [\n    //   // { x: \"2023-04-16\",y: 11424},\n    //   { y: 200, x: \"2020-04-17\" },\n    //   { y: 223, x: \"2021-04-18\" },\n    //   {y: 258, x: \"2021-04-26\"},\n    //   { y: 240, x: \"2021-04-30\" },\n    //   { y: 280, x: \"2022-04-19\" },\n    //   { y: 260, x: \"2022-04-20\" },\n    //   { y: 220, x: \"2022-04-21\" },\n    //   { y: 280, x: \"2023-04-22\" },\n    //   // { y: 23148, x: \"2023-04-23\" },\n    //   // {y: 23148, x: \"2023-04-23\"},\n    //   // {y: 22459, x: \"2023-04-24\"},\n    //   // {y: 20635, x: \"2023-04-25\"},\n    //   // {y: 24680, x: \"2023-04-26\"},\n    //   // {y: 24934, x: \"2023-04-27\"},\n    //   // {y: 34276, x: \"2023-04-28\"},\n    //   // {y: 29207, x: \"2023-04-29\"},\n    //   // {y: 24657, x: \"2023-04-30\"},\n    //   // {y: 22563, x: \"2023-05-01\"},\n    //   // {y: 17145, x: \"2023-05-02\"},\n    //   // {y: 17518, x: \"2023-05-03\"},\n    //   // {y: 15281, x: \"2023-05-04\"},\n    //   // {y: 17534, x: \"2023-05-05\"},\n    //   // {y: 17465, x: \"2023-05-06\"},\n    //   // {y: 15576, x: \"2023-05-07\"},\n    // ];\n    const series = [\n        {\n            \"x\": \"01.01.19\",\n            \"y\": \"205\"\n        },\n        {\n            \"x\": \"01.01.19\",\n            \"y\": \"222\"\n        },\n        {\n            \"x\": \"01.01.19\",\n            \"y\": \"211\"\n        },\n        {\n            \"x\": \"01.01.20\",\n            \"y\": \"239\"\n        },\n        {\n            \"x\": \"01.01.20\",\n            \"y\": \"217\"\n        },\n        {\n            \"x\": \"01.01.20\",\n            \"y\": \"265\"\n        },\n        {\n            \"x\": \"01.01.21\",\n            \"y\": \"260\"\n        },\n        {\n            \"x\": \"01.01.21\",\n            \"y\": \"222\"\n        },\n        {\n            \"x\": \"01.01.21\",\n            \"y\": \"256\"\n        },\n        {\n            \"x\": \"01.01.21\",\n            \"y\": \"277\"\n        },\n        {\n            \"x\": \"01.01.21\",\n            \"y\": \"269\"\n        },\n        {\n            \"x\": \"01.01.22\",\n            \"y\": \"231\"\n        },\n        {\n            \"x\": \"01.01.22\",\n            \"y\": \"225\"\n        },\n        {\n            \"x\": \"01.01.22\",\n            \"y\": \"276\"\n        },\n        {\n            \"x\": \"01.01.22\",\n            \"y\": \"244\"\n        },\n        {\n            \"x\": \"01.01.23\",\n            \"y\": \"258\"\n        },\n        {\n            \"x\": \"01.01.23\",\n            \"y\": \"224\"\n        },\n        {\n            \"x\": \"01.01.23\",\n            \"y\": \"252\"\n        },\n        {\n            \"x\": \"01.01.23\",\n            \"y\": \"263\"\n        },\n        {\n            \"x\": \"01.01.23\",\n            \"y\": \"229\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"pt-6 max-w-screen-xl mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-full flex justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-6 border-1 border-[#EAECF0] rounded-xl w-[1236px] bg-white shadow\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lightBlack font-semibold text-[40px]\",\n                            children: \"Top Strategies\"\n                        }, void 0, false, {\n                            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                            lineNumber: 162,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-greyColor text-base leading-7 m-2.5\",\n                            children: \"Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n                        }, void 0, false, {\n                            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                            lineNumber: 165,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AreaChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                series: series\n                            }, void 0, false, {\n                                fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                                lineNumber: 173,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                            lineNumber: 172,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                    lineNumber: 161,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-6 rounded-xl w-[420px] bg-white pt-[40px]  border-1 border-[#EAECF0] text-lightBlack shadow\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pl-[40px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-semibold text-[40px]\",\n                                    children: \"Analyze Your Portfolio\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                                    lineNumber: 178,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"font-normal text-base mt-7\",\n                                    children: portfoliolist.map((list, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"mt-5 flex\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    src: \"/ok.svg\",\n                                                    className: \"mr-[19px]\",\n                                                    alt: \"ok\",\n                                                    width: 24,\n                                                    height: 24\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                                                    lineNumber: 182,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                list\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                                            lineNumber: 181,\n                                            columnNumber: 17\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                                    lineNumber: 179,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                            lineNumber: 177,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/analize.svg\",\n                                alt: \"Analyze Your Portfolioi\",\n                                className: \"dark:invert\",\n                                width: 420,\n                                height: 206\n                            }, void 0, false, {\n                                fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                                lineNumber: 196,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                            lineNumber: 195,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n                    lineNumber: 176,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n            lineNumber: 160,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Strategies/index.tsx\",\n        lineNumber: 159,\n        columnNumber: 5\n    }, undefined);\n}; // bg-analize bg-bottom\n_c = Strategies;\nvar _c;\n$RefreshReg$(_c, \"Strategies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdHJhdGVnaWVzL2luZGV4LnRzeD9lMzk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFyZWFDaGFydCBmcm9tIFwiLi4vQXJlYUNoYXJ0XCI7XG5cbmV4cG9ydCBjb25zdCBTdHJhdGVnaWVzID0gKCkgPT4ge1xuICBjb25zdCBwb3J0Zm9saW9saXN0ID0gW1xuICAgIFwiU3RyYXRlZ3kgUXVhbGl0eVwiLFxuICAgIFwiQmVzdCBMZXZlcmFnZVwiLFxuICAgIFwiT3B0aW1hbCBIZWRnaW5nXCIsXG4gICAgXCJDb21wYXJlIFN0cmF0ZWdpZXNcIixcbiAgXTtcbiAgLy8gY29uc3Qgc2VyaWVzID0gW1xuICAvLyAgIC8vIHsgeDogXCIyMDIzLTA0LTE2XCIseTogMTE0MjR9LFxuICAvLyAgIHsgeTogMjAwLCB4OiBcIjIwMjAtMDQtMTdcIiB9LFxuICAvLyAgIHsgeTogMjIzLCB4OiBcIjIwMjEtMDQtMThcIiB9LFxuICAvLyAgIHt5OiAyNTgsIHg6IFwiMjAyMS0wNC0yNlwifSxcbiAgLy8gICB7IHk6IDI0MCwgeDogXCIyMDIxLTA0LTMwXCIgfSxcbiAgLy8gICB7IHk6IDI4MCwgeDogXCIyMDIyLTA0LTE5XCIgfSxcbiAgLy8gICB7IHk6IDI2MCwgeDogXCIyMDIyLTA0LTIwXCIgfSxcbiAgLy8gICB7IHk6IDIyMCwgeDogXCIyMDIyLTA0LTIxXCIgfSxcbiAgLy8gICB7IHk6IDI4MCwgeDogXCIyMDIzLTA0LTIyXCIgfSxcbiAgLy8gICAvLyB7IHk6IDIzMTQ4LCB4OiBcIjIwMjMtMDQtMjNcIiB9LFxuICAvLyAgIC8vIHt5OiAyMzE0OCwgeDogXCIyMDIzLTA0LTIzXCJ9LFxuICAvLyAgIC8vIHt5OiAyMjQ1OSwgeDogXCIyMDIzLTA0LTI0XCJ9LFxuICAvLyAgIC8vIHt5OiAyMDYzNSwgeDogXCIyMDIzLTA0LTI1XCJ9LFxuICAvLyAgIC8vIHt5OiAyNDY4MCwgeDogXCIyMDIzLTA0LTI2XCJ9LFxuICAvLyAgIC8vIHt5OiAyNDkzNCwgeDogXCIyMDIzLTA0LTI3XCJ9LFxuICAvLyAgIC8vIHt5OiAzNDI3NiwgeDogXCIyMDIzLTA0LTI4XCJ9LFxuICAvLyAgIC8vIHt5OiAyOTIwNywgeDogXCIyMDIzLTA0LTI5XCJ9LFxuICAvLyAgIC8vIHt5OiAyNDY1NywgeDogXCIyMDIzLTA0LTMwXCJ9LFxuICAvLyAgIC8vIHt5OiAyMjU2MywgeDogXCIyMDIzLTA1LTAxXCJ9LFxuICAvLyAgIC8vIHt5OiAxNzE0NSwgeDogXCIyMDIzLTA1LTAyXCJ9LFxuICAvLyAgIC8vIHt5OiAxNzUxOCwgeDogXCIyMDIzLTA1LTAzXCJ9LFxuICAvLyAgIC8vIHt5OiAxNTI4MSwgeDogXCIyMDIzLTA1LTA0XCJ9LFxuICAvLyAgIC8vIHt5OiAxNzUzNCwgeDogXCIyMDIzLTA1LTA1XCJ9LFxuICAvLyAgIC8vIHt5OiAxNzQ2NSwgeDogXCIyMDIzLTA1LTA2XCJ9LFxuICAvLyAgIC8vIHt5OiAxNTU3NiwgeDogXCIyMDIzLTA1LTA3XCJ9LFxuICAvLyBdO1xuICBjb25zdCBzZXJpZXMgPSBbXG4gICAge1xuICAgICAgXCJ4XCI6IFwiMDEuMDEuMTlcIixcbiAgICAgIFwieVwiOiBcIjIwNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInhcIjogXCIwMS4wMS4xOVwiLFxuICAgICAgXCJ5XCI6IFwiMjIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwieFwiOiBcIjAxLjAxLjE5XCIsXG4gICAgICBcInlcIjogXCIyMTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ4XCI6IFwiMDEuMDEuMjBcIixcbiAgICAgIFwieVwiOiBcIjIzOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInhcIjogXCIwMS4wMS4yMFwiLFxuICAgICAgXCJ5XCI6IFwiMjE3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwieFwiOiBcIjAxLjAxLjIwXCIsXG4gICAgICBcInlcIjogXCIyNjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ4XCI6IFwiMDEuMDEuMjFcIixcbiAgICAgIFwieVwiOiBcIjI2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInhcIjogXCIwMS4wMS4yMVwiLFxuICAgICAgXCJ5XCI6IFwiMjIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwieFwiOiBcIjAxLjAxLjIxXCIsXG4gICAgICBcInlcIjogXCIyNTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ4XCI6IFwiMDEuMDEuMjFcIixcbiAgICAgIFwieVwiOiBcIjI3N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInhcIjogXCIwMS4wMS4yMVwiLFxuICAgICAgXCJ5XCI6IFwiMjY5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwieFwiOiBcIjAxLjAxLjIyXCIsXG4gICAgICBcInlcIjogXCIyMzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ4XCI6IFwiMDEuMDEuMjJcIixcbiAgICAgIFwieVwiOiBcIjIyNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInhcIjogXCIwMS4wMS4yMlwiLFxuICAgICAgXCJ5XCI6IFwiMjc2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwieFwiOiBcIjAxLjAxLjIyXCIsXG4gICAgICBcInlcIjogXCIyNDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ4XCI6IFwiMDEuMDEuMjNcIixcbiAgICAgIFwieVwiOiBcIjI1OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInhcIjogXCIwMS4wMS4yM1wiLFxuICAgICAgXCJ5XCI6IFwiMjI0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwieFwiOiBcIjAxLjAxLjIzXCIsXG4gICAgICBcInlcIjogXCIyNTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ4XCI6IFwiMDEuMDEuMjNcIixcbiAgICAgIFwieVwiOiBcIjI2M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInhcIjogXCIwMS4wMS4yM1wiLFxuICAgICAgXCJ5XCI6IFwiMjI5XCJcbiAgICB9XG4gICAgXG4gICAgLy8ge1xuICAgIC8vICAgXCJ4XCI6IFwiMjAyMy0wNi0wNFwiLFxuICAgIC8vICAgXCJ5XCI6IFwiMjIwXCJcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIFwieFwiOiBcIjIwMjItMzMtMjJcIixcbiAgICAvLyAgIFwieVwiOiBcIjI2NlwiXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICBcInhcIjogXCIyMDIyLTAxLTA2XCIsXG4gICAgLy8gICBcInlcIjogXCIyNDBcIlxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgXCJ4XCI6IFwiMjAyMC0xNC0xNVwiLFxuICAgIC8vICAgXCJ5XCI6IFwiMjQ5XCJcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIFwieFwiOiBcIjIwMjItNTMtMDNcIixcbiAgICAvLyAgIFwieVwiOiBcIjI1NFwiXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICBcInhcIjogXCIyMDIwLTEwLTE5XCIsXG4gICAgLy8gICBcInlcIjogXCIyMzJcIlxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgXCJ4XCI6IFwiMjAyMy0xNi0xM1wiLFxuICAgIC8vICAgXCJ5XCI6IFwiMjcxXCJcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIFwieFwiOiBcIjIwMjMtMzItMTRcIixcbiAgICAvLyAgIFwieVwiOiBcIjI4MFwiXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICBcInhcIjogXCIyMDE5LTIwLTE5XCIsXG4gICAgLy8gICBcInlcIjogXCIyMDlcIlxuICAgIC8vIH0sXG4gIF1cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwdC02IG1heC13LXNjcmVlbi14bCBteC1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBib3JkZXItMSBib3JkZXItWyNFQUVDRjBdIHJvdW5kZWQteGwgdy1bMTIzNnB4XSBiZy13aGl0ZSBzaGFkb3dcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1saWdodEJsYWNrIGZvbnQtc2VtaWJvbGQgdGV4dC1bNDBweF1cIj5cbiAgICAgICAgICAgIFRvcCBTdHJhdGVnaWVzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyZXlDb2xvciB0ZXh0LWJhc2UgbGVhZGluZy03IG0tMi41XCI+XG4gICAgICAgICAgICBDdXJhYml0dXIgcGVsbGVudGVzcXVlIG5pYmggbmliaCwgYXQgbWF4aW11cyBhbnRlIGZlcm1lbnR1bSBzaXRcbiAgICAgICAgICAgIGFtZXQuIFBlbGxlbnRlc3F1ZSBjb21tb2RvIGxhY3VzIGF0IHNvZGFsZXMgc29kYWxlcy4gUXVpc3F1ZVxuICAgICAgICAgICAgc2FnaXR0aXMgb3JjaSB1dCBkaWFtIGNvbmRpbWVudHVtLCB2ZWwgZXVpc21vZCBlcmF0IHBsYWNlcmF0LiBJblxuICAgICAgICAgICAgaWFjdWxpcyBhcmN1IGVyb3MsIGVnZXQgdGVtcHVzIG9yY2kgZmFjaWxpc2lzIGlkLiBMb3JlbSBpcHN1bSBkb2xvclxuICAgICAgICAgICAgc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxBcmVhQ2hhcnQgc2VyaWVzPXtzZXJpZXN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTYgcm91bmRlZC14bCB3LVs0MjBweF0gYmctd2hpdGUgcHQtWzQwcHhdICBib3JkZXItMSBib3JkZXItWyNFQUVDRjBdIHRleHQtbGlnaHRCbGFjayBzaGFkb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLVs0MHB4XVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVs0MHB4XVwiPkFuYWx5emUgWW91ciBQb3J0Zm9saW88L3A+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1iYXNlIG10LTdcIj5cbiAgICAgICAgICAgICAge3BvcnRmb2xpb2xpc3QubWFwKChsaXN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtdC01IGZsZXhcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvb2suc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItWzE5cHhdXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwib2tcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2xpc3R9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvYW5hbGl6ZS5zdmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJBbmFseXplIFlvdXIgUG9ydGZvbGlvaVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhcms6aW52ZXJ0XCJcbiAgICAgICAgICAgICAgd2lkdGg9ezQyMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMDZ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4vLyBiZy1hbmFsaXplIGJnLWJvdHRvbVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJBcmVhQ2hhcnQiLCJTdHJhdGVnaWVzIiwicG9ydGZvbGlvbGlzdCIsInNlcmllcyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInAiLCJ1bCIsIm1hcCIsImxpc3QiLCJpbmRleCIsImxpIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Strategies/index.tsx\n"));

/***/ })

});