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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"../components/AreaChart/index.js -> \" + \"react-apexcharts\"\n        ]\n    },\n    ssr: false\n});\n_c = Chart;\n\nconst AreaChart = (param)=>{\n    let { series  } = param;\n    const options = {\n        chart: {\n            type: \"area\",\n            height: \"100%\",\n            width: \"100%\",\n            defaultLocale: \"ru\",\n            locales: [\n                __webpack_require__(/*! apexcharts/dist/locales/ru.json */ \"./node_modules/apexcharts/dist/locales/ru.json\")\n            ],\n            zoom: {\n                type: \"x\",\n                enabled: true,\n                autoScaleYaxis: true\n            },\n            toolbar: {\n                show: false\n            },\n            animations: {\n                enabled: true\n            }\n        },\n        dataLabels: {\n            enabled: false\n        },\n        grid: {\n            borderColor: \"transparent\"\n        },\n        colors: [\n            \"#884BD4\"\n        ],\n        stroke: {\n            show: true,\n            curve: \"straight\",\n            lineCap: \"butt\",\n            colors: undefined,\n            width: 2,\n            dashArray: 0\n        },\n        fill: {\n            type: \"gradient\",\n            gradient: {\n                gradientToColors: [\n                    \"rgba(136, 75, 212, 0)\",\n                    \"rgba(136, 75, 212, 0.25)\"\n                ],\n                shadeIntensity: 1,\n                inverseColors: true,\n                opacityFrom: 0.5,\n                opacityTo: 0\n            }\n        },\n        yaxis: {\n            tickAmount: 6,\n            title: {\n                style: {\n                    fontSize: \"10px\",\n                    fontWeight: 400,\n                    fontFamily: \"Roboto\",\n                    color: \"#9795AD\"\n                }\n            },\n            labels: {\n                showDuplicates: false,\n                formatter: (value)=>\"$\" + value\n            }\n        },\n        xaxis: {\n            tickAmount: 6,\n            labels: {\n                format: \"yyyy\",\n                style: {\n                    colors: [\n                        \"#9795AD\"\n                    ],\n                    fontSize: \"10px\",\n                    fontFamily: \"Helvetica, Arial, sans-serif\",\n                    fontWeight: 400,\n                    cssClass: \"apexcharts-xaxis-label\"\n                }\n            },\n            axisBorder: {\n                show: false\n            },\n            type: \"datetime\",\n            title: {\n                text: undefined,\n                offsetX: 0,\n                offsetY: 0,\n                style: {\n                    fontSize: \"10px\",\n                    fontWeight: 400,\n                    fontFamily: \"Roboto\",\n                    color: \"#9795AD\"\n                }\n            },\n            axisTicks: {\n                show: false\n            }\n        }\n    };\n    const ChartSeries = [\n        {\n            name: \"\",\n            data: series\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n            options: options,\n            series: ChartSeries,\n            type: \"area\",\n            height: 170\n        }, void 0, false, {\n            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n            lineNumber: 106,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = AreaChart;\n// AreaChart.propTypes = {\n// \tseries: PropTypes.array,\n// \tunitTitle: PropTypes.string\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (AreaChart);\nvar _c, _c1;\n$RefreshReg$(_c, \"Chart\");\n$RefreshReg$(_c1, \"AreaChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FyZWFDaGFydC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNTO0FBQ25DLE1BQU1FLFFBQVFELG1EQUFPQSxDQUFDLElBQU0sK09BQU87Ozs7OztJQUF1QkUsS0FBSyxLQUFLOztLQUE5REQ7QUFDNkI7QUFFbkMsTUFBTUcsWUFBWSxTQUFnQjtRQUFmLEVBQUVDLE9BQU0sRUFBRTtJQUM1QixNQUFNQyxVQUFXO1FBQ2hCQyxPQUFPO1lBQ05DLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLGVBQWU7WUFDZkMsU0FBUztnQkFBQ0MsbUJBQU9BLENBQUM7YUFBbUM7WUFDckRDLE1BQU07Z0JBQ0xOLE1BQU07Z0JBQ05PLFNBQVMsSUFBSTtnQkFDYkMsZ0JBQWdCLElBQUk7WUFDckI7WUFDQUMsU0FBUztnQkFDUkMsTUFBTSxLQUFLO1lBRVo7WUFDQUMsWUFBWTtnQkFDWEosU0FBUyxJQUFJO1lBQ2Q7UUFDRDtRQUNBSyxZQUFZO1lBQ1hMLFNBQVMsS0FBSztRQUNmO1FBQ0FNLE1BQU07WUFDTEMsYUFBYTtRQUNkO1FBQ0FDLFFBQVE7WUFBQztTQUFVO1FBQ25CQyxRQUFRO1lBQ1BOLE1BQU0sSUFBSTtZQUNWTyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEgsUUFBUUk7WUFDUmpCLE9BQU87WUFDUGtCLFdBQVc7UUFDWjtRQUNBQyxNQUFNO1lBQ0xyQixNQUFNO1lBQ05zQixVQUFVO2dCQUNUQyxrQkFBa0I7b0JBQUM7b0JBQXlCO2lCQUEyQjtnQkFDdkVDLGdCQUFnQjtnQkFDaEJDLGVBQWUsSUFBSTtnQkFDbkJDLGFBQWE7Z0JBQ2JDLFdBQVc7WUFDWjtRQUNEO1FBQ0FDLE9BQU87WUFDTkMsWUFBWTtZQUNaQyxPQUFPO2dCQUNOQyxPQUFPO29CQUNOQyxVQUFVO29CQUNWQyxZQUFZO29CQUNaQyxZQUFZO29CQUNaQyxPQUFPO2dCQUNSO1lBQ0Q7WUFDQUMsUUFBUTtnQkFDUEMsZ0JBQWdCLEtBQUs7Z0JBQ3JCQyxXQUFXLENBQUNDLFFBQVUsTUFBSUE7WUFDM0I7UUFDRDtRQUNBQyxPQUFPO1lBQ05YLFlBQVk7WUFDWk8sUUFBUTtnQkFDUEssUUFBUTtnQkFDUlYsT0FBTztvQkFDTmhCLFFBQVE7d0JBQUM7cUJBQVU7b0JBQ25CaUIsVUFBVTtvQkFDVkUsWUFBWTtvQkFDWkQsWUFBWTtvQkFDWlMsVUFBVTtnQkFDWDtZQUNEO1lBQ0FDLFlBQVk7Z0JBQ1hqQyxNQUFNLEtBQUs7WUFDWjtZQUNBVixNQUFNO1lBQ044QixPQUFPO2dCQUNOYyxNQUFNekI7Z0JBQ04wQixTQUFTO2dCQUNUQyxTQUFTO2dCQUNUZixPQUFPO29CQUNOQyxVQUFVO29CQUNWQyxZQUFZO29CQUNaQyxZQUFZO29CQUNaQyxPQUFPO2dCQUNSO1lBQ0Q7WUFDQVksV0FBVztnQkFDVnJDLE1BQU0sS0FBSztZQUNaO1FBQ0Q7SUFDRDtJQUNBLE1BQU1zQyxjQUFjO1FBQUM7WUFDcEJDLE1BQU07WUFDTkMsTUFBTXJEO1FBQ1A7S0FBRTtJQUVGLHFCQUNDO2tCQUNDLDRFQUFDSjtZQUFNSyxTQUFTQTtZQUFTRCxRQUFRbUQ7WUFBYWhELE1BQUs7WUFBUUMsUUFBUTs7Ozs7OztBQUd0RTtNQXZHTUw7QUF5R04sMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1QiwrQkFBK0I7QUFDL0IsS0FBSztBQUVMLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJlYUNoYXJ0L2luZGV4LmpzP2JjOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1hcGV4Y2hhcnRzJyksIHsgc3NyOiBmYWxzZSB9KTtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEFyZWFDaGFydCA9ICh7IHNlcmllcyB9KSA9PiB7XG5cdGNvbnN0IG9wdGlvbnMgPSAge1xuXHRcdGNoYXJ0OiB7XG5cdFx0XHR0eXBlOiAnYXJlYScsXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0ZGVmYXVsdExvY2FsZTogJ3J1Jyxcblx0XHRcdGxvY2FsZXM6IFtyZXF1aXJlKCdhcGV4Y2hhcnRzL2Rpc3QvbG9jYWxlcy9ydS5qc29uJyldLFxuXHRcdFx0em9vbToge1xuXHRcdFx0XHR0eXBlOiAneCcsXG5cdFx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRcdGF1dG9TY2FsZVlheGlzOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0dG9vbGJhcjoge1xuXHRcdFx0XHRzaG93OiBmYWxzZVxuXHRcdFx0XHQvLyBhdXRvU2VsZWN0ZWQ6ICd6b29tJ1xuXHRcdFx0fSxcblx0XHRcdGFuaW1hdGlvbnM6IHtcblx0XHRcdFx0ZW5hYmxlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YUxhYmVsczoge1xuXHRcdFx0ZW5hYmxlZDogZmFsc2Vcblx0XHR9LFxuXHRcdGdyaWQ6IHtcblx0XHRcdGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdH0sXG5cdFx0Y29sb3JzOiBbJyM4ODRCRDQnXSxcblx0XHRzdHJva2U6IHtcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRjdXJ2ZTogJ3N0cmFpZ2h0Jyxcblx0XHRcdGxpbmVDYXA6ICdidXR0Jyxcblx0XHRcdGNvbG9yczogdW5kZWZpbmVkLFxuXHRcdFx0d2lkdGg6IDIsXG5cdFx0XHRkYXNoQXJyYXk6IDAsICAgICAgXG5cdFx0fSxcblx0XHRmaWxsOiB7XG5cdFx0XHR0eXBlOiAnZ3JhZGllbnQnLFxuXHRcdFx0Z3JhZGllbnQ6IHtcblx0XHRcdFx0Z3JhZGllbnRUb0NvbG9yczogWydyZ2JhKDEzNiwgNzUsIDIxMiwgMCknLCAncmdiYSgxMzYsIDc1LCAyMTIsIDAuMjUpJ10sXG5cdFx0XHRcdHNoYWRlSW50ZW5zaXR5OiAxLFxuXHRcdFx0XHRpbnZlcnNlQ29sb3JzOiB0cnVlLFxuXHRcdFx0XHRvcGFjaXR5RnJvbTogMC41LFxuXHRcdFx0XHRvcGFjaXR5VG86IDAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0eWF4aXM6IHtcblx0XHRcdHRpY2tBbW91bnQ6IDYsXG5cdFx0XHR0aXRsZToge1xuXHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdGZvbnRTaXplOiAnMTBweCcsXG5cdFx0XHRcdFx0Zm9udFdlaWdodDogNDAwLFxuXHRcdFx0XHRcdGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzk3OTVBRCcsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRsYWJlbHM6IHtcblx0XHRcdFx0c2hvd0R1cGxpY2F0ZXM6IGZhbHNlLFxuXHRcdFx0XHRmb3JtYXR0ZXI6ICh2YWx1ZSkgPT4gXCIkXCIrdmFsdWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdHhheGlzOiB7XG5cdFx0XHR0aWNrQW1vdW50OiA2LFxuXHRcdFx0bGFiZWxzOiB7XG5cdFx0XHRcdGZvcm1hdDogJ3l5eXknLCBcdFx0XHRcdFxuXHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdGNvbG9yczogWycjOTc5NUFEJ10sXG5cdFx0XHRcdFx0Zm9udFNpemU6ICcxMHB4Jyxcblx0XHRcdFx0XHRmb250RmFtaWx5OiAnSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZicsXG5cdFx0XHRcdFx0Zm9udFdlaWdodDogNDAwLFxuXHRcdFx0XHRcdGNzc0NsYXNzOiAnYXBleGNoYXJ0cy14YXhpcy1sYWJlbCcsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YXhpc0JvcmRlcjoge1xuXHRcdFx0XHRzaG93OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHR5cGU6ICdkYXRldGltZScsXG5cdFx0XHR0aXRsZToge1xuXHRcdFx0XHR0ZXh0OiB1bmRlZmluZWQsXG5cdFx0XHRcdG9mZnNldFg6IDAsXG5cdFx0XHRcdG9mZnNldFk6IDAsXG5cdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0Zm9udFNpemU6ICcxMHB4Jyxcblx0XHRcdFx0XHRmb250V2VpZ2h0OiA0MDAsXG5cdFx0XHRcdFx0Zm9udEZhbWlseTogJ1JvYm90bycsXG5cdFx0XHRcdFx0Y29sb3I6ICcjOTc5NUFEJyxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRheGlzVGlja3M6IHtcblx0XHRcdFx0c2hvdzogZmFsc2Vcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblx0Y29uc3QgQ2hhcnRTZXJpZXMgPSBbe1xuXHRcdG5hbWU6ICcnLFxuXHRcdGRhdGE6IHNlcmllc1xuXHR9XTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Q2hhcnQgb3B0aW9ucz17b3B0aW9uc30gc2VyaWVzPXtDaGFydFNlcmllc30gdHlwZT1cImFyZWFcIiAgaGVpZ2h0PXsxNzB9XHQvPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuLy8gQXJlYUNoYXJ0LnByb3BUeXBlcyA9IHtcbi8vIFx0c2VyaWVzOiBQcm9wVHlwZXMuYXJyYXksXG4vLyBcdHVuaXRUaXRsZTogUHJvcFR5cGVzLnN0cmluZ1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgQXJlYUNoYXJ0OyJdLCJuYW1lcyI6WyJSZWFjdCIsImR5bmFtaWMiLCJDaGFydCIsInNzciIsIlByb3BUeXBlcyIsIkFyZWFDaGFydCIsInNlcmllcyIsIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJoZWlnaHQiLCJ3aWR0aCIsImRlZmF1bHRMb2NhbGUiLCJsb2NhbGVzIiwicmVxdWlyZSIsInpvb20iLCJlbmFibGVkIiwiYXV0b1NjYWxlWWF4aXMiLCJ0b29sYmFyIiwic2hvdyIsImFuaW1hdGlvbnMiLCJkYXRhTGFiZWxzIiwiZ3JpZCIsImJvcmRlckNvbG9yIiwiY29sb3JzIiwic3Ryb2tlIiwiY3VydmUiLCJsaW5lQ2FwIiwidW5kZWZpbmVkIiwiZGFzaEFycmF5IiwiZmlsbCIsImdyYWRpZW50IiwiZ3JhZGllbnRUb0NvbG9ycyIsInNoYWRlSW50ZW5zaXR5IiwiaW52ZXJzZUNvbG9ycyIsIm9wYWNpdHlGcm9tIiwib3BhY2l0eVRvIiwieWF4aXMiLCJ0aWNrQW1vdW50IiwidGl0bGUiLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJjb2xvciIsImxhYmVscyIsInNob3dEdXBsaWNhdGVzIiwiZm9ybWF0dGVyIiwidmFsdWUiLCJ4YXhpcyIsImZvcm1hdCIsImNzc0NsYXNzIiwiYXhpc0JvcmRlciIsInRleHQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImF4aXNUaWNrcyIsIkNoYXJ0U2VyaWVzIiwibmFtZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AreaChart/index.js\n"));

/***/ })

});