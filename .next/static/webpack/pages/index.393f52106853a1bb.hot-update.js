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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"../components/AreaChart/index.js -> \" + \"react-apexcharts\"\n        ]\n    },\n    ssr: false\n});\n_c = Chart;\n\nconst AreaChart = (param)=>{\n    let { series  } = param;\n    const options = {\n        chart: {\n            type: \"area\",\n            defaultLocale: \"ru\",\n            locales: [\n                __webpack_require__(/*! apexcharts/dist/locales/ru.json */ \"./node_modules/apexcharts/dist/locales/ru.json\")\n            ],\n            zoom: {\n                type: \"x\",\n                enabled: true,\n                autoScaleYaxis: true\n            },\n            toolbar: {\n                show: false\n            },\n            animations: {\n                enabled: true\n            }\n        },\n        dataLabels: {\n            enabled: false\n        },\n        grid: {\n            borderColor: \"transparent\"\n        },\n        colors: [\n            \"#884BD4\"\n        ],\n        fill: {\n            type: \"gradient\",\n            gradient: {\n                gradientToColors: [\n                    \"rgba(136, 75, 212, 0)\",\n                    \"rgba(136, 75, 212, 0.25)\"\n                ],\n                shadeIntensity: 1,\n                inverseColors: true,\n                opacityFrom: 0.5,\n                opacityTo: 0,\n                borderWidth: \"1px\"\n            }\n        },\n        yaxis: {\n            title: {\n                style: {\n                    fontSize: \"20px\",\n                    fontWeight: 500,\n                    fontFamily: \"Roboto\",\n                    color: \"#252525\"\n                }\n            },\n            labels: {\n                formatter: (value)=>value.toLocaleString()\n            }\n        },\n        xaxis: {\n            labels: {\n                format: \"yy-MM-dd\"\n            },\n            type: \"datetime\"\n        }\n    };\n    const ChartSeries = [\n        {\n            name: \"\",\n            data: series\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n            options: options,\n            series: ChartSeries,\n            type: \"area\",\n            height: 275\n        }, void 0, false, {\n            fileName: \"/home/ekaterina/Рабочий стол/DISK-1TB/work/statistic/components/AreaChart/index.js\",\n            lineNumber: 70,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = AreaChart;\n// AreaChart.propTypes = {\n// \tseries: PropTypes.array,\n// \tunitTitle: PropTypes.string\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (AreaChart);\nvar _c, _c1;\n$RefreshReg$(_c, \"Chart\");\n$RefreshReg$(_c1, \"AreaChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FyZWFDaGFydC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNTO0FBQ25DLE1BQU1FLFFBQVFELG1EQUFPQSxDQUFDLElBQU0sK09BQU87Ozs7OztJQUF1QkUsS0FBSyxLQUFLOztLQUE5REQ7QUFDNkI7QUFFbkMsTUFBTUcsWUFBWSxTQUFnQjtRQUFmLEVBQUVDLE9BQU0sRUFBRTtJQUM1QixNQUFNQyxVQUFXO1FBQ2hCQyxPQUFPO1lBQ05DLE1BQU07WUFDTkMsZUFBZTtZQUNmQyxTQUFTO2dCQUFDQyxtQkFBT0EsQ0FBQzthQUFtQztZQUNyREMsTUFBTTtnQkFDTEosTUFBTTtnQkFDTkssU0FBUyxJQUFJO2dCQUNiQyxnQkFBZ0IsSUFBSTtZQUNyQjtZQUNBQyxTQUFTO2dCQUNSQyxNQUFNLEtBQUs7WUFFWjtZQUNBQyxZQUFZO2dCQUNYSixTQUFTLElBQUk7WUFDZDtRQUNEO1FBQ0FLLFlBQVk7WUFDWEwsU0FBUyxLQUFLO1FBQ2Y7UUFDQU0sTUFBTTtZQUNMQyxhQUFhO1FBQ2Q7UUFDQUMsUUFBUTtZQUFDO1NBQVU7UUFDbkJDLE1BQU07WUFDTGQsTUFBTTtZQUNOZSxVQUFVO2dCQUNUQyxrQkFBa0I7b0JBQUM7b0JBQXlCO2lCQUEyQjtnQkFDdkVDLGdCQUFnQjtnQkFDaEJDLGVBQWUsSUFBSTtnQkFDbkJDLGFBQWE7Z0JBQ2JDLFdBQVc7Z0JBQ1hDLGFBQWE7WUFDZDtRQUNEO1FBQ0FDLE9BQU87WUFDTkMsT0FBTztnQkFDTkMsT0FBTztvQkFDTkMsVUFBVTtvQkFDVkMsWUFBWTtvQkFDWkMsWUFBWTtvQkFDWkMsT0FBTztnQkFDUjtZQUNEO1lBQ0FDLFFBQVE7Z0JBQ1BDLFdBQVcsQ0FBQ0MsUUFBVUEsTUFBTUMsY0FBYztZQUMzQztRQUNEO1FBQ0FDLE9BQU87WUFDTkosUUFBUTtnQkFDUEssUUFBUTtZQUNUO1lBQ0FsQyxNQUFNO1FBQ1A7SUFDRDtJQUNBLE1BQU1tQyxjQUFjO1FBQUM7WUFDcEJDLE1BQU07WUFDTkMsTUFBTXhDO1FBQ1A7S0FBRTtJQUVGLHFCQUNDO2tCQUNDLDRFQUFDSjtZQUFNSyxTQUFTQTtZQUFTRCxRQUFRc0M7WUFBYW5DLE1BQUs7WUFBT3NDLFFBQVE7Ozs7Ozs7QUFHckU7TUFuRU0xQztBQXFFTiwwQkFBMEI7QUFDMUIsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUMvQixLQUFLO0FBRUwsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcmVhQ2hhcnQvaW5kZXguanM/YmM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmNvbnN0IENoYXJ0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwgeyBzc3I6IGZhbHNlIH0pO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQXJlYUNoYXJ0ID0gKHsgc2VyaWVzIH0pID0+IHtcblx0Y29uc3Qgb3B0aW9ucyA9ICB7XG5cdFx0Y2hhcnQ6IHtcblx0XHRcdHR5cGU6ICdhcmVhJyxcblx0XHRcdGRlZmF1bHRMb2NhbGU6ICdydScsXG5cdFx0XHRsb2NhbGVzOiBbcmVxdWlyZSgnYXBleGNoYXJ0cy9kaXN0L2xvY2FsZXMvcnUuanNvbicpXSxcblx0XHRcdHpvb206IHtcblx0XHRcdFx0dHlwZTogJ3gnLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0XHRhdXRvU2NhbGVZYXhpczogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHRvb2xiYXI6IHtcblx0XHRcdFx0c2hvdzogZmFsc2Vcblx0XHRcdFx0Ly8gYXV0b1NlbGVjdGVkOiAnem9vbSdcblx0XHRcdH0sXG5cdFx0XHRhbmltYXRpb25zOiB7XG5cdFx0XHRcdGVuYWJsZWQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGFMYWJlbHM6IHtcblx0XHRcdGVuYWJsZWQ6IGZhbHNlXG5cdFx0fSxcblx0XHRncmlkOiB7XG5cdFx0XHRib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50Jyxcblx0XHR9LFxuXHRcdGNvbG9yczogWycjODg0QkQ0J10sXG5cdFx0ZmlsbDoge1xuXHRcdFx0dHlwZTogJ2dyYWRpZW50Jyxcblx0XHRcdGdyYWRpZW50OiB7XG5cdFx0XHRcdGdyYWRpZW50VG9Db2xvcnM6IFsncmdiYSgxMzYsIDc1LCAyMTIsIDApJywgJ3JnYmEoMTM2LCA3NSwgMjEyLCAwLjI1KSddLFxuXHRcdFx0XHRzaGFkZUludGVuc2l0eTogMSxcblx0XHRcdFx0aW52ZXJzZUNvbG9yczogdHJ1ZSxcblx0XHRcdFx0b3BhY2l0eUZyb206IDAuNSxcblx0XHRcdFx0b3BhY2l0eVRvOiAwLFxuXHRcdFx0XHRib3JkZXJXaWR0aDogXCIxcHhcIlxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHlheGlzOiB7XG5cdFx0XHR0aXRsZToge1xuXHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdGZvbnRTaXplOiAnMjBweCcsXG5cdFx0XHRcdFx0Zm9udFdlaWdodDogNTAwLFxuXHRcdFx0XHRcdGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzI1MjUyNSdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGxhYmVsczoge1xuXHRcdFx0XHRmb3JtYXR0ZXI6ICh2YWx1ZSkgPT4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0eGF4aXM6IHtcblx0XHRcdGxhYmVsczoge1xuXHRcdFx0XHRmb3JtYXQ6ICd5eS1NTS1kZCcsXG5cdFx0XHR9LFxuXHRcdFx0dHlwZTogJ2RhdGV0aW1lJyxcblx0XHR9LFxuXHR9O1xuXHRjb25zdCBDaGFydFNlcmllcyA9IFt7XG5cdFx0bmFtZTogJycsXG5cdFx0ZGF0YTogc2VyaWVzXG5cdH1dO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxDaGFydCBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e0NoYXJ0U2VyaWVzfSB0eXBlPVwiYXJlYVwiIGhlaWdodD17Mjc1fSAvPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuLy8gQXJlYUNoYXJ0LnByb3BUeXBlcyA9IHtcbi8vIFx0c2VyaWVzOiBQcm9wVHlwZXMuYXJyYXksXG4vLyBcdHVuaXRUaXRsZTogUHJvcFR5cGVzLnN0cmluZ1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgQXJlYUNoYXJ0OyJdLCJuYW1lcyI6WyJSZWFjdCIsImR5bmFtaWMiLCJDaGFydCIsInNzciIsIlByb3BUeXBlcyIsIkFyZWFDaGFydCIsInNlcmllcyIsIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsInJlcXVpcmUiLCJ6b29tIiwiZW5hYmxlZCIsImF1dG9TY2FsZVlheGlzIiwidG9vbGJhciIsInNob3ciLCJhbmltYXRpb25zIiwiZGF0YUxhYmVscyIsImdyaWQiLCJib3JkZXJDb2xvciIsImNvbG9ycyIsImZpbGwiLCJncmFkaWVudCIsImdyYWRpZW50VG9Db2xvcnMiLCJzaGFkZUludGVuc2l0eSIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsImJvcmRlcldpZHRoIiwieWF4aXMiLCJ0aXRsZSIsInN0eWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImNvbG9yIiwibGFiZWxzIiwiZm9ybWF0dGVyIiwidmFsdWUiLCJ0b0xvY2FsZVN0cmluZyIsInhheGlzIiwiZm9ybWF0IiwiQ2hhcnRTZXJpZXMiLCJuYW1lIiwiZGF0YSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AreaChart/index.js\n"));

/***/ })

});