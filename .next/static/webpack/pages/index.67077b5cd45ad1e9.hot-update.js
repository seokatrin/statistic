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

/***/ "./components/Articles/index.tsx":
/*!***************************************!*\
  !*** ./components/Articles/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Articles\": function() { return /* binding */ Articles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AreaChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AreaChart */ \"./components/AreaChart/index.js\");\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Articles = ()=>{\n    _s();\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const navList = [\n        \"Value\",\n        \"Momentum\",\n        \"Low beta\",\n        \"Growth\",\n        \"Asset Allocation\",\n        \"Covered Call\",\n        \"Market timing\",\n        \"Technical\",\n        \"Special Cases\",\n        \"Capital Sizing\"\n    ];\n    const [ref, springs] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_4__.useInView)(()=>({\n            from: {\n                opacity: 0,\n                y: 100\n            },\n            to: {\n                opacity: 1,\n                y: 0\n            },\n            delay: 100\n        }));\n    const series = [\n        [\n            1560367503640,\n            255\n        ],\n        [\n            1561240478356,\n            253\n        ],\n        [\n            1562667395668,\n            250\n        ],\n        [\n            1568085173224,\n            248\n        ],\n        [\n            1569009084753,\n            245\n        ],\n        [\n            1573566502518,\n            250\n        ],\n        [\n            1576130800659,\n            259\n        ],\n        [\n            1576550309458,\n            261\n        ],\n        [\n            1577302898950,\n            268\n        ],\n        [\n            1581077658928,\n            270\n        ],\n        [\n            1582522376464,\n            275\n        ],\n        [\n            1584137599597,\n            278\n        ],\n        [\n            1586491668079,\n            278\n        ],\n        [\n            1593034143767,\n            260\n        ],\n        [\n            1594401221915,\n            265\n        ],\n        [\n            1595081177216,\n            260\n        ],\n        [\n            1598450813927,\n            250\n        ],\n        [\n            1599769733136,\n            259\n        ],\n        [\n            1600989730908,\n            259\n        ],\n        [\n            1601406708006,\n            268\n        ],\n        [\n            1603811259256,\n            270\n        ],\n        [\n            1606584523017,\n            275\n        ],\n        [\n            1606744914430,\n            264\n        ],\n        [\n            1609257121552,\n            258\n        ],\n        [\n            1610559698803,\n            250\n        ],\n        [\n            1610862494193,\n            248\n        ],\n        [\n            1615543890680,\n            243\n        ],\n        [\n            1618332604158,\n            240\n        ],\n        [\n            1619324495638,\n            239\n        ],\n        [\n            1628328705057,\n            235\n        ],\n        [\n            1629938054987,\n            237\n        ],\n        [\n            1630999324334,\n            230\n        ],\n        [\n            1632012507566,\n            223\n        ],\n        [\n            1632943290855,\n            223\n        ],\n        [\n            1638094777105,\n            221\n        ],\n        [\n            1639557677818,\n            221\n        ],\n        [\n            1640899205929,\n            223\n        ],\n        [\n            1649478513517,\n            229\n        ],\n        [\n            1649610387659,\n            238\n        ],\n        [\n            1650286556434,\n            240\n        ],\n        [\n            1650370944476,\n            245\n        ],\n        [\n            1651040280471,\n            260\n        ],\n        [\n            1653215191904,\n            268\n        ],\n        [\n            1661451532930,\n            269\n        ],\n        [\n            1662749309015,\n            270\n        ],\n        [\n            1670036313694,\n            271\n        ],\n        [\n            1671713259258,\n            275\n        ],\n        [\n            1676382242156,\n            278\n        ],\n        [\n            1681124003299,\n            274\n        ],\n        [\n            1682874616587,\n            260\n        ]\n    ];\n    const strategies = {\n        title: \"Multiples Valuation\",\n        series,\n        returns: 31.53,\n        sharpie: 0.04,\n        maxDD: 8.55\n    };\n    const options = {\n        chart: {\n            type: \"area\",\n            width: \"380px\",\n            defaultLocale: \"ru\",\n            locales: [\n                __webpack_require__(/*! apexcharts/dist/locales/ru.json */ \"./node_modules/apexcharts/dist/locales/ru.json\")\n            ],\n            zoom: {\n                type: \"x\",\n                enabled: true,\n                autoScaleYaxis: true\n            },\n            toolbar: {\n                show: false\n            },\n            animations: {\n                enabled: true\n            }\n        },\n        dataLabels: {\n            enabled: false\n        },\n        grid: {\n            borderColor: \"transparent\"\n        },\n        colors: [\n            \"#884BD4\"\n        ],\n        stroke: {\n            show: true,\n            curve: \"straight\",\n            lineCap: \"butt\",\n            colors: undefined,\n            width: 2,\n            dashArray: 0\n        },\n        fill: {\n            type: \"gradient\",\n            gradient: {\n                gradientToColors: [\n                    \"rgba(136, 75, 212, 0)\",\n                    \"rgba(136, 75, 212, 0.25)\"\n                ],\n                shadeIntensity: 1,\n                inverseColors: true,\n                opacityFrom: 0.5,\n                opacityTo: 0\n            }\n        },\n        yaxis: {\n            tickAmount: 6,\n            title: {\n                style: {\n                    fontSize: \"10px\",\n                    fontWeight: 400,\n                    fontFamily: \"Roboto\",\n                    color: \"#9795AD\"\n                }\n            },\n            labels: {\n                showDuplicates: false,\n                formatter: (value)=>\"$\" + value\n            }\n        },\n        xaxis: {\n            tickAmount: 6,\n            labels: {\n                format: \"yyyy\",\n                style: {\n                    colors: [\n                        \"#9795AD\"\n                    ],\n                    fontSize: \"10px\",\n                    fontFamily: \"Helvetica, Arial, sans-serif\",\n                    fontWeight: 400,\n                    cssClass: \"apexcharts-xaxis-label\"\n                }\n            },\n            axisBorder: {\n                show: false\n            },\n            type: \"datetime\",\n            title: {\n                text: undefined,\n                offsetX: 0,\n                offsetY: 0,\n                style: {\n                    fontSize: \"10px\",\n                    fontWeight: 400,\n                    fontFamily: \"Roboto\",\n                    color: \"#9795AD\"\n                }\n            },\n            axisTicks: {\n                show: false\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_4__.animated.div, {\n        ref: ref,\n        style: springs,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"pt-6 max-w-screen-xl mx-auto mt-[84px] bg-white border-1 border-[#EAECF0] rounded-xl shadow p-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-lightBlack font-semibold text-[40px]\",\n                    children: \"Investment Strategy Groups\"\n                }, void 0, false, {\n                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                    lineNumber: 186,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-greyColor text-base leading-7 m-2.5\",\n                    children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.\"\n                }, void 0, false, {\n                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                    lineNumber: 189,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"rounded border-1 border-[#EAECF0] flex mt-[40px] h-[45px] justify-between shadow\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \" flex items-center\",\n                            children: navList.map((list, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"text-base hover:text-linkColor ml-6 text-\".concat(isActive === index ? \"linkColor\" : \"greyColor\", \" font-semibold cursor-pointer\"),\n                                    onClick: ()=>setIsActive(index),\n                                    children: list\n                                }, index, false, {\n                                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                                    lineNumber: 199,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                            lineNumber: 197,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-[80px] border-l-1 border-[#EAECF0]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"w-[40px] flex justify-center items-center hover:bg-linkColor transition delay-200\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/prev.svg\",\n                                        alt: \"prev\",\n                                        width: 8,\n                                        height: 14\n                                    }, void 0, false, {\n                                        fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                                        lineNumber: 211,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                                    lineNumber: 210,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"w-[40px] flex justify-center items-center hover:bg-linkColor transition delay-200\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/next_i.svg\",\n                                        alt: \"next\",\n                                        width: 8,\n                                        height: 14\n                                    }, void 0, false, {\n                                        fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                                        lineNumber: 214,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                                    lineNumber: 213,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                            lineNumber: 209,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                    lineNumber: 196,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between mt-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-auto\"\n                        }, void 0, false, {\n                            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                            lineNumber: 219,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[421px] \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lightBlack font-semibold text-2xl\",\n                                    children: \"Common Strategies\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                                    lineNumber: 221,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AreaChart__WEBPACK_IMPORTED_MODULE_3__.AreaChart, {\n                                    strategies: strategies,\n                                    isSmall: false\n                                }, void 0, false, {\n                                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                                    lineNumber: 222,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AreaChart__WEBPACK_IMPORTED_MODULE_3__.AreaChart, {\n                                    strategies: strategies,\n                                    isSmall: false\n                                }, void 0, false, {\n                                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                                    lineNumber: 223,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                            lineNumber: 220,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n                    lineNumber: 218,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n            lineNumber: 185,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/Articles/index.tsx\",\n        lineNumber: 184,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Articles, \"N2g9hGV1RcIM8fS+EbwMEt5NEOY=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = Articles;\nvar _c;\n$RefreshReg$(_c, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29CQUFHRCxXQUFVOzhCQUE0Qzs7Ozs7OzhCQUcxRCw4REFBQ0U7b0JBQUVGLFdBQVU7OEJBQTJDOzs7Ozs7OEJBT3hELDhEQUFDRztvQkFBSUgsV0FBVTs7c0NBQ2IsOERBQUNJOzRCQUFHSixXQUFVO3NDQUNYaEUsUUFBUXFFLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEIsOERBQUNDO29DQUNDUixXQUFXLDRDQUNSLE9BRG9EbEUsYUFBYXlFLFFBQVEsY0FBYyxXQUFXLEVBQ2xHO29DQUVIRSxTQUFTLElBQU0xRSxZQUFZd0U7OENBRTFCRDttQ0FISUM7Ozs7Ozs7Ozs7c0NBT1gsOERBQUNUOzRCQUFJRSxXQUFVOzs4Q0FDYiw4REFBQ1U7b0NBQU9WLFdBQVU7OENBQ2hCLDRFQUFDekUsbURBQUtBO3dDQUFDb0YsS0FBSTt3Q0FBWUMsS0FBSTt3Q0FBTzNELE9BQU87d0NBQUc0RCxRQUFROzs7Ozs7Ozs7Ozs4Q0FFdEQsOERBQUNIO29DQUFPVixXQUFVOzhDQUNoQiw0RUFBQ3pFLG1EQUFLQTt3Q0FBQ29GLEtBQUk7d0NBQWNDLEtBQUk7d0NBQU8zRCxPQUFPO3dDQUFHNEQsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSTVELDhEQUFDZjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNGOzRCQUFJRSxXQUFVOzs7Ozs7c0NBQ2YsOERBQUNGOzRCQUFJRSxXQUFVOzs4Q0FDYiw4REFBQ2M7b0NBQUdkLFdBQVU7OENBQXlDOzs7Ozs7OENBQ3ZELDhEQUFDdEUsaURBQVNBO29DQUFDZSxZQUFZQTtvQ0FBWXNFLFNBQVMsS0FBSzs7Ozs7OzhDQUNqRCw4REFBQ3JGLGlEQUFTQTtvQ0FBQ2UsWUFBWUE7b0NBQVlzRSxTQUFTLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdELEVBQUU7R0EvTldsRjs7UUFjWUQsd0RBQVNBOzs7S0FkckJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZXMvaW5kZXgudHN4Pzc0OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXJlYUNoYXJ0fSBmcm9tIFwiLi4vQXJlYUNoYXJ0XCI7XG5pbXBvcnQgeyBhbmltYXRlZCwgdXNlSW5WaWV3IH0gZnJvbSAnQHJlYWN0LXNwcmluZy93ZWInO1xuXG5leHBvcnQgY29uc3QgQXJ0aWNsZXMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IG5hdkxpc3QgPSBbXG4gICAgXCJWYWx1ZVwiLFxuICAgIFwiTW9tZW50dW1cIixcbiAgICBcIkxvdyBiZXRhXCIsXG4gICAgXCJHcm93dGhcIixcbiAgICBcIkFzc2V0IEFsbG9jYXRpb25cIixcbiAgICBcIkNvdmVyZWQgQ2FsbFwiLFxuICAgIFwiTWFya2V0IHRpbWluZ1wiLFxuICAgIFwiVGVjaG5pY2FsXCIsXG4gICAgXCJTcGVjaWFsIENhc2VzXCIsXG4gICAgXCJDYXBpdGFsIFNpemluZ1wiLFxuICBdO1xuICBjb25zdCBbcmVmLCBzcHJpbmdzXSA9IHVzZUluVmlldyhcbiAgICAoKSA9PiAoe1xuICAgICAgZnJvbToge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB5OiAxMDAsXG4gICAgICB9LFxuICAgICAgdG86IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgIH0sXG4gICAgICBkZWxheTogMTAwXG4gICAgfSksXG5cbiAgKTtcbiAgY29uc3Qgc2VyaWVzID0gW1xuICAgIFsxNTYwMzY3NTAzNjQwLCAyNTVdLFxuICAgIFsxNTYxMjQwNDc4MzU2LCAyNTNdLFxuICAgIFsxNTYyNjY3Mzk1NjY4LCAyNTBdLFxuICAgIFsxNTY4MDg1MTczMjI0LCAyNDhdLFxuICAgIFsxNTY5MDA5MDg0NzUzLCAyNDVdLFxuICAgIFsxNTczNTY2NTAyNTE4LCAyNTBdLFxuICAgIFsxNTc2MTMwODAwNjU5LCAyNTldLFxuICAgIFsxNTc2NTUwMzA5NDU4LCAyNjFdLFxuICAgIFsxNTc3MzAyODk4OTUwLCAyNjhdLFxuICAgIFsxNTgxMDc3NjU4OTI4LCAyNzBdLFxuICAgIFsxNTgyNTIyMzc2NDY0LCAyNzVdLFxuICAgIFsxNTg0MTM3NTk5NTk3LCAyNzhdLFxuICAgIFsxNTg2NDkxNjY4MDc5LCAyNzhdLFxuICAgIFsxNTkzMDM0MTQzNzY3LCAyNjBdLFxuICAgIFsxNTk0NDAxMjIxOTE1LCAyNjVdLFxuICAgIFsxNTk1MDgxMTc3MjE2LCAyNjBdLFxuICAgIFsxNTk4NDUwODEzOTI3LCAyNTBdLFxuICAgIFsxNTk5NzY5NzMzMTM2LCAyNTldLFxuICAgIFsxNjAwOTg5NzMwOTA4LCAyNTldLFxuICAgIFsxNjAxNDA2NzA4MDA2LCAyNjhdLFxuICAgIFsxNjAzODExMjU5MjU2LCAyNzBdLFxuICAgIFsxNjA2NTg0NTIzMDE3LCAyNzVdLFxuICAgIFsxNjA2NzQ0OTE0NDMwLCAyNjRdLFxuICAgIFsxNjA5MjU3MTIxNTUyLCAyNThdLFxuICAgIFsxNjEwNTU5Njk4ODAzLCAyNTBdLFxuICAgIFsxNjEwODYyNDk0MTkzLCAyNDhdLFxuICAgIFsxNjE1NTQzODkwNjgwLCAyNDNdLFxuICAgIFsxNjE4MzMyNjA0MTU4LCAyNDBdLFxuICAgIFsxNjE5MzI0NDk1NjM4LCAyMzldLFxuICAgIFsxNjI4MzI4NzA1MDU3LCAyMzVdLFxuICAgIFsxNjI5OTM4MDU0OTg3LCAyMzddLFxuICAgIFsxNjMwOTk5MzI0MzM0LCAyMzBdLFxuICAgIFsxNjMyMDEyNTA3NTY2LCAyMjNdLFxuICAgIFsxNjMyOTQzMjkwODU1LCAyMjNdLFxuICAgIFsxNjM4MDk0Nzc3MTA1LCAyMjFdLFxuICAgIFsxNjM5NTU3Njc3ODE4LCAyMjFdLFxuICAgIFsxNjQwODk5MjA1OTI5LCAyMjNdLFxuICAgIFsxNjQ5NDc4NTEzNTE3LCAyMjldLFxuICAgIFsxNjQ5NjEwMzg3NjU5LCAyMzhdLFxuICAgIFsxNjUwMjg2NTU2NDM0LCAyNDBdLFxuICAgIFsxNjUwMzcwOTQ0NDc2LCAyNDVdLFxuICAgIFsxNjUxMDQwMjgwNDcxLCAyNjBdLFxuICAgIFsxNjUzMjE1MTkxOTA0LCAyNjhdLFxuICAgIFsxNjYxNDUxNTMyOTMwLCAyNjldLFxuICAgIFsxNjYyNzQ5MzA5MDE1LCAyNzBdLFxuICAgIFsxNjcwMDM2MzEzNjk0LCAyNzFdLFxuICAgIFsxNjcxNzEzMjU5MjU4LCAyNzVdLFxuICAgIFsxNjc2MzgyMjQyMTU2LCAyNzhdLFxuICAgIFsxNjgxMTI0MDAzMjk5LCAyNzRdLFxuICAgIFsxNjgyODc0NjE2NTg3LCAyNjBdLF07XG4gIGNvbnN0IHN0cmF0ZWdpZXMgPSB7XG4gICAgdGl0bGU6ICdNdWx0aXBsZXMgVmFsdWF0aW9uJyxcbiAgICBzZXJpZXMsXG4gICAgcmV0dXJuczogMzEuNTMsXG4gICAgc2hhcnBpZTogMC4wNCxcbiAgICBtYXhERDogOC41NVxuICB9O1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGNoYXJ0OiB7XG4gICAgICB0eXBlOiAnYXJlYScsXG4gICAgICB3aWR0aDogXCIzODBweFwiLFxuICAgICAgZGVmYXVsdExvY2FsZTogJ3J1JyxcbiAgICAgIGxvY2FsZXM6IFtyZXF1aXJlKCdhcGV4Y2hhcnRzL2Rpc3QvbG9jYWxlcy9ydS5qc29uJyldLFxuICAgICAgem9vbToge1xuICAgICAgICB0eXBlOiAneCcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGF1dG9TY2FsZVlheGlzOiB0cnVlXG4gICAgICB9LFxuICAgICAgdG9vbGJhcjoge1xuICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAvLyBhdXRvU2VsZWN0ZWQ6ICd6b29tJ1xuICAgICAgfSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgZGF0YUxhYmVsczoge1xuICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIH0sXG4gICAgY29sb3JzOiBbJyM4ODRCRDQnXSxcbiAgICBzdHJva2U6IHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICBjdXJ2ZTogJ3N0cmFpZ2h0JyxcbiAgICAgIGxpbmVDYXA6ICdidXR0JyxcbiAgICAgIGNvbG9yczogdW5kZWZpbmVkLFxuICAgICAgd2lkdGg6IDIsXG4gICAgICBkYXNoQXJyYXk6IDAsXG4gICAgfSxcbiAgICBmaWxsOiB7XG4gICAgICB0eXBlOiAnZ3JhZGllbnQnLFxuICAgICAgZ3JhZGllbnQ6IHtcbiAgICAgICAgZ3JhZGllbnRUb0NvbG9yczogWydyZ2JhKDEzNiwgNzUsIDIxMiwgMCknLCAncmdiYSgxMzYsIDc1LCAyMTIsIDAuMjUpJ10sXG4gICAgICAgIHNoYWRlSW50ZW5zaXR5OiAxLFxuICAgICAgICBpbnZlcnNlQ29sb3JzOiB0cnVlLFxuICAgICAgICBvcGFjaXR5RnJvbTogMC41LFxuICAgICAgICBvcGFjaXR5VG86IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgeWF4aXM6IHtcbiAgICAgIHRpY2tBbW91bnQ6IDYsXG4gICAgICB0aXRsZToge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuICAgICAgICAgIGNvbG9yOiAnIzk3OTVBRCcsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgc2hvd0R1cGxpY2F0ZXM6IGZhbHNlLFxuICAgICAgICBmb3JtYXR0ZXI6ICh2YWx1ZTogc3RyaW5nKSA9PiBcIiRcIiArIHZhbHVlXG4gICAgICB9XG4gICAgfSxcbiAgICB4YXhpczoge1xuICAgICAgdGlja0Ftb3VudDogNixcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBmb3JtYXQ6ICd5eXl5JyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBjb2xvcnM6IFsnIzk3OTVBRCddLFxuICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICBjc3NDbGFzczogJ2FwZXhjaGFydHMteGF4aXMtbGFiZWwnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGF4aXNCb3JkZXI6IHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdGV4dDogdW5kZWZpbmVkLFxuICAgICAgICBvZmZzZXRYOiAwLFxuICAgICAgICBvZmZzZXRZOiAwLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuICAgICAgICAgIGNvbG9yOiAnIzk3OTVBRCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYXhpc1RpY2tzOiB7XG4gICAgICAgIHNob3c6IGZhbHNlXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGFuaW1hdGVkLmRpdiByZWY9e3JlZn0gc3R5bGU9e3NwcmluZ3N9PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHQtNiBtYXgtdy1zY3JlZW4teGwgbXgtYXV0byBtdC1bODRweF0gYmctd2hpdGUgYm9yZGVyLTEgYm9yZGVyLVsjRUFFQ0YwXSByb3VuZGVkLXhsIHNoYWRvdyBwLThcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGlnaHRCbGFjayBmb250LXNlbWlib2xkIHRleHQtWzQwcHhdXCI+XG4gICAgICAgICAgSW52ZXN0bWVudCBTdHJhdGVneSBHcm91cHNcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmV5Q29sb3IgdGV4dC1iYXNlIGxlYWRpbmctNyBtLTIuNVwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGV0IG1hc3NhIG1pLlxuICAgICAgICAgIEFsaXF1YW0gaW4gaGVuZHJlcml0IHVybmEuIFBlbGxlbnRlc3F1ZSBzaXQgYW1ldCBzYXBpZW4gZnJpbmdpbGxhLFxuICAgICAgICAgIG1hdHRpcyBsaWd1bGEgY29uc2VjdGV0dXIsIHVsdHJpY2VzIG1hdXJpcy4gTWFlY2VuYXMgdml0YWUgbWF0dGlzXG4gICAgICAgICAgdGVsbHVzLiBOdWxsYW0gcXVpcyBpbXBlcmRpZXQgYXVndWUuIFZlc3RpYnVsdW0gYXVjdG9yIG9ybmFyZSBsZW8sIG5vblxuICAgICAgICAgIHN1c2NpcGl0IG1hZ25hIGludGVyZHVtIGV1LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicm91bmRlZCBib3JkZXItMSBib3JkZXItWyNFQUVDRjBdIGZsZXggbXQtWzQwcHhdIGgtWzQ1cHhdIGp1c3RpZnktYmV0d2VlbiBzaGFkb3dcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICB7bmF2TGlzdC5tYXAoKGxpc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtYmFzZSBob3Zlcjp0ZXh0LWxpbmtDb2xvciBtbC02IHRleHQtJHtpc0FjdGl2ZSA9PT0gaW5kZXggPyBcImxpbmtDb2xvclwiIDogXCJncmV5Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgfSBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyYH1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQWN0aXZlKGluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsaXN0fVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1bODBweF0gYm9yZGVyLWwtMSBib3JkZXItWyNFQUVDRjBdXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctWzQwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGhvdmVyOmJnLWxpbmtDb2xvciB0cmFuc2l0aW9uIGRlbGF5LTIwMFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ByZXYuc3ZnXCIgYWx0PVwicHJldlwiIHdpZHRoPXs4fSBoZWlnaHQ9ezE0fSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctWzQwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGhvdmVyOmJnLWxpbmtDb2xvciB0cmFuc2l0aW9uIGRlbGF5LTIwMFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL25leHRfaS5zdmdcIiBhbHQ9XCJuZXh0XCIgd2lkdGg9ezh9IGhlaWdodD17MTR9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0b1wiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNDIxcHhdIFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGlnaHRCbGFjayBmb250LXNlbWlib2xkIHRleHQtMnhsXCI+Q29tbW9uIFN0cmF0ZWdpZXM8L2gzPlxuICAgICAgICAgICAgPEFyZWFDaGFydCBzdHJhdGVnaWVzPXtzdHJhdGVnaWVzfSBpc1NtYWxsPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIDxBcmVhQ2hhcnQgc3RyYXRlZ2llcz17c3RyYXRlZ2llc30gaXNTbWFsbD17ZmFsc2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvYW5pbWF0ZWQuZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJBcmVhQ2hhcnQiLCJhbmltYXRlZCIsInVzZUluVmlldyIsIkFydGljbGVzIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsIm5hdkxpc3QiLCJyZWYiLCJzcHJpbmdzIiwiZnJvbSIsIm9wYWNpdHkiLCJ5IiwidG8iLCJkZWxheSIsInNlcmllcyIsInN0cmF0ZWdpZXMiLCJ0aXRsZSIsInJldHVybnMiLCJzaGFycGllIiwibWF4REQiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwid2lkdGgiLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsInJlcXVpcmUiLCJ6b29tIiwiZW5hYmxlZCIsImF1dG9TY2FsZVlheGlzIiwidG9vbGJhciIsInNob3ciLCJhbmltYXRpb25zIiwiZGF0YUxhYmVscyIsImdyaWQiLCJib3JkZXJDb2xvciIsImNvbG9ycyIsInN0cm9rZSIsImN1cnZlIiwibGluZUNhcCIsInVuZGVmaW5lZCIsImRhc2hBcnJheSIsImZpbGwiLCJncmFkaWVudCIsImdyYWRpZW50VG9Db2xvcnMiLCJzaGFkZUludGVuc2l0eSIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInlheGlzIiwidGlja0Ftb3VudCIsInN0eWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImNvbG9yIiwibGFiZWxzIiwic2hvd0R1cGxpY2F0ZXMiLCJmb3JtYXR0ZXIiLCJ2YWx1ZSIsInhheGlzIiwiZm9ybWF0IiwiY3NzQ2xhc3MiLCJheGlzQm9yZGVyIiwidGV4dCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYXhpc1RpY2tzIiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgyIiwicCIsIm5hdiIsInVsIiwibWFwIiwibGlzdCIsImluZGV4IiwibGkiLCJvbkNsaWNrIiwiYnV0dG9uIiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwiaDMiLCJpc1NtYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Articles/index.tsx\n"));

/***/ })

});