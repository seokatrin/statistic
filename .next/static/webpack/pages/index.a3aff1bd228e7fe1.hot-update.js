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

/***/ "./components/AreaChart/index.js":
/*!***************************************!*\
  !*** ./components/AreaChart/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"../components/AreaChart/index.js -> \" + \"react-apexcharts\"\n        ]\n    },\n    ssr: false\n});\n_c = Chart;\n\nconst AreaChart = (param)=>{\n    let { strategies  } = param;\n    const options = {\n        chart: {\n            type: \"area\",\n            width: \"380px\",\n            defaultLocale: \"ru\",\n            locales: [\n                __webpack_require__(/*! apexcharts/dist/locales/ru.json */ \"./node_modules/apexcharts/dist/locales/ru.json\")\n            ],\n            zoom: {\n                type: \"x\",\n                enabled: true,\n                autoScaleYaxis: true\n            },\n            toolbar: {\n                show: false\n            },\n            animations: {\n                enabled: true\n            }\n        },\n        dataLabels: {\n            enabled: false\n        },\n        grid: {\n            borderColor: \"transparent\"\n        },\n        colors: [\n            \"#884BD4\"\n        ],\n        stroke: {\n            show: true,\n            curve: \"straight\",\n            lineCap: \"butt\",\n            colors: undefined,\n            width: 2,\n            dashArray: 0\n        },\n        fill: {\n            type: \"gradient\",\n            gradient: {\n                gradientToColors: [\n                    \"rgba(136, 75, 212, 0)\",\n                    \"rgba(136, 75, 212, 0.25)\"\n                ],\n                shadeIntensity: 1,\n                inverseColors: true,\n                opacityFrom: 0.5,\n                opacityTo: 0\n            }\n        },\n        yaxis: {\n            tickAmount: 6,\n            title: {\n                style: {\n                    fontSize: \"10px\",\n                    fontWeight: 400,\n                    fontFamily: \"Roboto\",\n                    color: \"#9795AD\"\n                }\n            },\n            labels: {\n                showDuplicates: false,\n                formatter: (value)=>\"$\" + value\n            }\n        },\n        xaxis: {\n            tickAmount: 6,\n            labels: {\n                format: \"yyyy\",\n                style: {\n                    colors: [\n                        \"#9795AD\"\n                    ],\n                    fontSize: \"10px\",\n                    fontFamily: \"Helvetica, Arial, sans-serif\",\n                    fontWeight: 400,\n                    cssClass: \"apexcharts-xaxis-label\"\n                }\n            },\n            axisBorder: {\n                show: false\n            },\n            type: \"datetime\",\n            title: {\n                text: undefined,\n                offsetX: 0,\n                offsetY: 0,\n                style: {\n                    fontSize: \"10px\",\n                    fontWeight: 400,\n                    fontFamily: \"Roboto\",\n                    color: \"#9795AD\"\n                }\n            },\n            axisTicks: {\n                show: false\n            }\n        }\n    };\n    const ChartSeries = [\n        {\n            name: \"\",\n            data: strategies.series\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[421px] ml-10 rounded border-1 border-[#EAECF0] py-6 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"text-lightBlack font-semibold text-base \",\n                children: strategies.title\n            }, void 0, false, {\n                fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                lineNumber: 105,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n                options: options,\n                series: ChartSeries,\n                type: \"area\",\n                height: 170,\n                width: 380\n            }, void 0, false, {\n                fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                lineNumber: 106,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-around px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-lightGrey\",\n                                children: \"5y Returns\"\n                            }, void 0, false, {\n                                fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                                lineNumber: 109,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base text-[#120F35] pt-[8px]\",\n                                children: strategies.returns\n                            }, void 0, false, {\n                                fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                                lineNumber: 110,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                        lineNumber: 108,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-lightGrey\",\n                                children: \"Sharpie\"\n                            }, void 0, false, {\n                                fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                                lineNumber: 113,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base text-[#120F35] pt-[8px]\",\n                                children: strategies.sharpie\n                            }, void 0, false, {\n                                fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                                lineNumber: 114,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                        lineNumber: 112,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center justify-center w-[104px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-lightGrey\",\n                                children: \"Max DD\"\n                            }, void 0, false, {\n                                fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                                lineNumber: 117,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base text-[#120F35] pt-[8px]\",\n                                children: strategies.maxDD\n                            }, void 0, false, {\n                                fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                                lineNumber: 118,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                        lineNumber: 116,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                lineNumber: 107,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex border-t-1 border-[#EAECF0]\"\n            }, void 0, false, {\n                fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n                lineNumber: 121,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n        lineNumber: 104,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = AreaChart;\n// AreaChart.propTypes = {\n// \tseries: PropTypes.array,\n// \tunitTitle: PropTypes.string\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (AreaChart);\nvar _c, _c1;\n$RefreshReg$(_c, \"Chart\");\n$RefreshReg$(_c1, \"AreaChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRztnQ0FBRUgsV0FBVTswQ0FBeUI7Ozs7OzswQ0FDdEMsOERBQUNHO2dDQUFFSCxXQUFVOzBDQUFxQ3ZELFdBQVc2RCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3BFLDhEQUFDUDtnQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7O0FBT2xCO01BMUhNeEQ7QUE0SE4sMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1QiwrQkFBK0I7QUFDL0IsS0FBSztBQUVMLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJlYUNoYXJ0L2luZGV4LmpzP2JjOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1hcGV4Y2hhcnRzJyksIHsgc3NyOiBmYWxzZSB9KTtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEFyZWFDaGFydCA9ICh7IHN0cmF0ZWdpZXMgfSkgPT4ge1xuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdGNoYXJ0OiB7XG5cdFx0XHR0eXBlOiAnYXJlYScsXG5cdFx0XHR3aWR0aDogXCIzODBweFwiLFxuXHRcdFx0ZGVmYXVsdExvY2FsZTogJ3J1Jyxcblx0XHRcdGxvY2FsZXM6IFtyZXF1aXJlKCdhcGV4Y2hhcnRzL2Rpc3QvbG9jYWxlcy9ydS5qc29uJyldLFxuXHRcdFx0em9vbToge1xuXHRcdFx0XHR0eXBlOiAneCcsXG5cdFx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRcdGF1dG9TY2FsZVlheGlzOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0dG9vbGJhcjoge1xuXHRcdFx0XHRzaG93OiBmYWxzZVxuXHRcdFx0XHQvLyBhdXRvU2VsZWN0ZWQ6ICd6b29tJ1xuXHRcdFx0fSxcblx0XHRcdGFuaW1hdGlvbnM6IHtcblx0XHRcdFx0ZW5hYmxlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YUxhYmVsczoge1xuXHRcdFx0ZW5hYmxlZDogZmFsc2Vcblx0XHR9LFxuXHRcdGdyaWQ6IHtcblx0XHRcdGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdH0sXG5cdFx0Y29sb3JzOiBbJyM4ODRCRDQnXSxcblx0XHRzdHJva2U6IHtcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRjdXJ2ZTogJ3N0cmFpZ2h0Jyxcblx0XHRcdGxpbmVDYXA6ICdidXR0Jyxcblx0XHRcdGNvbG9yczogdW5kZWZpbmVkLFxuXHRcdFx0d2lkdGg6IDIsXG5cdFx0XHRkYXNoQXJyYXk6IDAsXG5cdFx0fSxcblx0XHRmaWxsOiB7XG5cdFx0XHR0eXBlOiAnZ3JhZGllbnQnLFxuXHRcdFx0Z3JhZGllbnQ6IHtcblx0XHRcdFx0Z3JhZGllbnRUb0NvbG9yczogWydyZ2JhKDEzNiwgNzUsIDIxMiwgMCknLCAncmdiYSgxMzYsIDc1LCAyMTIsIDAuMjUpJ10sXG5cdFx0XHRcdHNoYWRlSW50ZW5zaXR5OiAxLFxuXHRcdFx0XHRpbnZlcnNlQ29sb3JzOiB0cnVlLFxuXHRcdFx0XHRvcGFjaXR5RnJvbTogMC41LFxuXHRcdFx0XHRvcGFjaXR5VG86IDAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0eWF4aXM6IHtcblx0XHRcdHRpY2tBbW91bnQ6IDYsXG5cdFx0XHR0aXRsZToge1xuXHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdGZvbnRTaXplOiAnMTBweCcsXG5cdFx0XHRcdFx0Zm9udFdlaWdodDogNDAwLFxuXHRcdFx0XHRcdGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzk3OTVBRCcsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRsYWJlbHM6IHtcblx0XHRcdFx0c2hvd0R1cGxpY2F0ZXM6IGZhbHNlLFxuXHRcdFx0XHRmb3JtYXR0ZXI6ICh2YWx1ZSkgPT4gXCIkXCIgKyB2YWx1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0eGF4aXM6IHtcblx0XHRcdHRpY2tBbW91bnQ6IDYsXG5cdFx0XHRsYWJlbHM6IHtcblx0XHRcdFx0Zm9ybWF0OiAneXl5eScsXG5cdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0Y29sb3JzOiBbJyM5Nzk1QUQnXSxcblx0XHRcdFx0XHRmb250U2l6ZTogJzEwcHgnLFxuXHRcdFx0XHRcdGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJyxcblx0XHRcdFx0XHRmb250V2VpZ2h0OiA0MDAsXG5cdFx0XHRcdFx0Y3NzQ2xhc3M6ICdhcGV4Y2hhcnRzLXhheGlzLWxhYmVsJyxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRheGlzQm9yZGVyOiB7XG5cdFx0XHRcdHNob3c6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0dHlwZTogJ2RhdGV0aW1lJyxcblx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdHRleHQ6IHVuZGVmaW5lZCxcblx0XHRcdFx0b2Zmc2V0WDogMCxcblx0XHRcdFx0b2Zmc2V0WTogMCxcblx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRmb250U2l6ZTogJzEwcHgnLFxuXHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDQwMCxcblx0XHRcdFx0XHRmb250RmFtaWx5OiAnUm9ib3RvJyxcblx0XHRcdFx0XHRjb2xvcjogJyM5Nzk1QUQnLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGF4aXNUaWNrczoge1xuXHRcdFx0XHRzaG93OiBmYWxzZVxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXHRjb25zdCBDaGFydFNlcmllcyA9IFt7XG5cdFx0bmFtZTogJycsXG5cdFx0ZGF0YTogc3RyYXRlZ2llcy5zZXJpZXNcblx0fV07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVs0MjFweF0gbWwtMTAgcm91bmRlZCBib3JkZXItMSBib3JkZXItWyNFQUVDRjBdIHB5LTYgXCI+XG5cdFx0XHQ8aDQgY2xhc3NOYW1lPSd0ZXh0LWxpZ2h0QmxhY2sgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgJz57c3RyYXRlZ2llcy50aXRsZX08L2g0PlxuXHRcdFx0PENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17Q2hhcnRTZXJpZXN9IHR5cGU9XCJhcmVhXCIgaGVpZ2h0PXsxNzB9IHdpZHRoPXszODB9IC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWFyb3VuZCBweC00Jz5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1saWdodEdyZXknPjV5IFJldHVybnM8L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgdGV4dC1bIzEyMEYzNV0gcHQtWzhweF0nPntzdHJhdGVnaWVzLnJldHVybnN9PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1saWdodEdyZXknPlNoYXJwaWU8L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgdGV4dC1bIzEyMEYzNV0gcHQtWzhweF0nPntzdHJhdGVnaWVzLnNoYXJwaWV9PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctWzEwNHB4XSc+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtbGlnaHRHcmV5Jz5NYXggREQ8L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgdGV4dC1bIzEyMEYzNV0gcHQtWzhweF0nPntzdHJhdGVnaWVzLm1heEREfTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGJvcmRlci10LTEgYm9yZGVyLVsjRUFFQ0YwXSc+XG5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cblx0KTtcbn07XG5cbi8vIEFyZWFDaGFydC5wcm9wVHlwZXMgPSB7XG4vLyBcdHNlcmllczogUHJvcFR5cGVzLmFycmF5LFxuLy8gXHR1bml0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IEFyZWFDaGFydDsiXSwibmFtZXMiOlsiUmVhY3QiLCJkeW5hbWljIiwiQ2hhcnQiLCJzc3IiLCJQcm9wVHlwZXMiLCJBcmVhQ2hhcnQiLCJzdHJhdGVnaWVzIiwib3B0aW9ucyIsImNoYXJ0IiwidHlwZSIsIndpZHRoIiwiZGVmYXVsdExvY2FsZSIsImxvY2FsZXMiLCJyZXF1aXJlIiwiem9vbSIsImVuYWJsZWQiLCJhdXRvU2NhbGVZYXhpcyIsInRvb2xiYXIiLCJzaG93IiwiYW5pbWF0aW9ucyIsImRhdGFMYWJlbHMiLCJncmlkIiwiYm9yZGVyQ29sb3IiLCJjb2xvcnMiLCJzdHJva2UiLCJjdXJ2ZSIsImxpbmVDYXAiLCJ1bmRlZmluZWQiLCJkYXNoQXJyYXkiLCJmaWxsIiwiZ3JhZGllbnQiLCJncmFkaWVudFRvQ29sb3JzIiwic2hhZGVJbnRlbnNpdHkiLCJpbnZlcnNlQ29sb3JzIiwib3BhY2l0eUZyb20iLCJvcGFjaXR5VG8iLCJ5YXhpcyIsInRpY2tBbW91bnQiLCJ0aXRsZSIsInN0eWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImNvbG9yIiwibGFiZWxzIiwic2hvd0R1cGxpY2F0ZXMiLCJmb3JtYXR0ZXIiLCJ2YWx1ZSIsInhheGlzIiwiZm9ybWF0IiwiY3NzQ2xhc3MiLCJheGlzQm9yZGVyIiwidGV4dCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYXhpc1RpY2tzIiwiQ2hhcnRTZXJpZXMiLCJuYW1lIiwiZGF0YSIsInNlcmllcyIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwiaGVpZ2h0IiwicCIsInJldHVybnMiLCJzaGFycGllIiwibWF4REQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AreaChart/index.js\n"));

/***/ })

});