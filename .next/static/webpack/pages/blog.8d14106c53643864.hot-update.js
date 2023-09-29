"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _components_common_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/common/layout */ \"./components/common/layout.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/seo */ \"./components/seo.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_common_BlogMain_BlogMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/common/BlogMain/BlogMain */ \"./components/common/BlogMain/BlogMain.js\");\n/* harmony import */ var _assets_images_blog_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../assets/images/blog.jpg */ \"./assets/images/blog.jpg\");\n/* harmony import */ var _blog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog.module.scss */ \"./pages/blog/blog.module.scss\");\n/* harmony import */ var _blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blog_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/relia/Documents/GitHub/relianewdesign2023/pages/blog/index.js\";\n\n\n\n\n\n\n\n\nconst Blog = _ref => {\n  let {\n    blogs,\n    allBlogs,\n    pagedAllBlogs,\n    pagedBlogs\n  } = _ref;\n  const seo = {\n    metaTitle: \"Discover Up-To-Date Technology Blogs | Relia Software\",\n    metaDescription: \"With the rapid pace at which technology is developing and new trends appearing in the industry, it is vital to update your knowledge regularly. Visit our up-to-date tech blogs!\",\n    shareImage: _assets_images_blog_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    article: true\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_common_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      seo: seo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n      className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hero),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hero__bg_ellipse_1),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/images/new-relia/background/services/service-ellipse-1.png\",\n          width: 376,\n          height: 564,\n          objectFit: \"contain\",\n          priority: true,\n          alt: \"bg service ellipse 1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hero__bg_ellipse_2),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/images/new-relia/background/services/service-ellipse-2.png\",\n          width: 476,\n          height: 664,\n          objectFit: \"contain\",\n          priority: true,\n          alt: \"bg service ellipse 2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: ` ${\"container\"} ${(_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hero__container)}`,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hero__header_box),\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hero__top_header),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n              className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hero__top_header__heading),\n              children: \"Blog\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n              children: \"We share and review inspriring content\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_common_BlogMain_BlogMain__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      expertises: blogs,\n      blogs: allBlogs,\n      totalBlogsData: totalBlogsData,\n      pagedBlogs: pagedBlogs,\n      pagedAllBlogs: pagedAllBlogs\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 5\n  }, undefined);\n};\n\n_c = Blog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBNEVBLE1BQU1NLElBQUksR0FBRyxRQUtQO0VBQUEsSUFMUTtJQUNaQyxLQURZO0lBRVpDLFFBRlk7SUFHWkMsYUFIWTtJQUlaQztFQUpZLENBS1I7RUFDSixNQUFNQyxHQUFHLEdBQUc7SUFDVkMsU0FBUyxFQUFFLHVEQUREO0lBRVZDLGVBQWUsRUFDYixrTEFIUTtJQUlWQyxVQUFVLEVBQUVWLCtEQUpGO0lBS1ZXLE9BQU8sRUFBRTtFQUxDLENBQVo7RUFRQSxvQkFDRSw4REFBQyxpRUFBRDtJQUFBLHdCQUNFLDhEQUFDLHVEQUFEO01BQUssR0FBRyxFQUFFSjtJQUFWO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFERixlQUVFO01BQVMsU0FBUyxFQUFFTiwrREFBcEI7TUFBQSx3QkFDRTtRQUFLLFNBQVMsRUFBRUEsNkVBQWhCO1FBQUEsdUJBQ0UsOERBQUMsbURBQUQ7VUFDRSxHQUFHLEVBQUMsNkRBRE47VUFFRSxLQUFLLEVBQUUsR0FGVDtVQUdFLE1BQU0sRUFBRSxHQUhWO1VBSUUsU0FBUyxFQUFDLFNBSlo7VUFLRSxRQUFRLEVBQUUsSUFMWjtVQU1FLEdBQUcsRUFBQztRQU5OO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBREYsZUFXRTtRQUFLLFNBQVMsRUFBRUEsNkVBQWhCO1FBQUEsdUJBQ0UsOERBQUMsbURBQUQ7VUFDRSxHQUFHLEVBQUMsNkRBRE47VUFFRSxLQUFLLEVBQUUsR0FGVDtVQUdFLE1BQU0sRUFBRSxHQUhWO1VBSUUsU0FBUyxFQUFDLFNBSlo7VUFLRSxRQUFRLEVBQUUsSUFMWjtVQU1FLEdBQUcsRUFBQztRQU5OO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBWEYsZUFxQkU7UUFBSyxTQUFTLEVBQUcsSUFBRyxXQUFZLElBQUdBLDBFQUF1QixFQUExRDtRQUFBLHVCQUNFO1VBQUssU0FBUyxFQUFFQSwyRUFBaEI7VUFBQSxXQUNHLEdBREgsZUFFRTtZQUFLLFNBQVMsRUFBRUEsMkVBQWhCO1lBQUEsd0JBQ0U7Y0FBSSxTQUFTLEVBQUVBLG9GQUFmO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBLGFBREYsZUFFRTtjQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQSxhQUZGO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxhQUZGO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFyQkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBRkYsZUFpQ0UsOERBQUMsNEVBQUQ7TUFDRSxVQUFVLEVBQUVFLEtBRGQ7TUFFRSxLQUFLLEVBQUVDLFFBRlQ7TUFHRSxjQUFjLEVBQUVlLGNBSGxCO01BSUUsVUFBVSxFQUFFYixVQUpkO01BS0UsYUFBYSxFQUFFRDtJQUxqQjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBakNGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBMkNELENBekREOztLQUFNSDs7QUFzRk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC5qcz8xMWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIkBsaWIvYXBpXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9jb21tb24vbGF5b3V0XCI7XG5pbXBvcnQgU2VvIGZyb20gXCJAY29tcG9uZW50cy9zZW9cIjtcbmltcG9ydCBFeHBvcnRlZEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQmxvZ01haW4gZnJvbSBcIkBjb21wb25lbnRzL2NvbW1vbi9CbG9nTWFpbi9CbG9nTWFpblwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IG9ncEltYWdlIGZyb20gXCIvYXNzZXRzL2ltYWdlcy9ibG9nLmpwZ1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ibG9nLm1vZHVsZS5zY3NzXCI7XG5cbmZ1bmN0aW9uIGdyb3VwQXJyYXlJbnRvQ2h1bmtzV2l0aEtleXMoYmlnQXJyYXkpIHtcbiAgY29uc3QgZ3JvdXBlZEFycmF5cyA9IFtdO1xuICBjb25zdCBjaHVua1NpemUgPSA5O1xuICBsZXQgcGFnZSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmlnQXJyYXkubGVuZ3RoOyBpICs9IGNodW5rU2l6ZSkge1xuICAgIGNvbnN0IGNodW5rID0gYmlnQXJyYXkuc2xpY2UoaSwgaSArIGNodW5rU2l6ZSk7XG4gICAgcGFnZSA9IHBhZ2UgKyAxOyAvLyBDcmVhdGUgYSBrZXkgZm9yIGVhY2ggY2h1bmtcbiAgICBjb25zdCBjaHVua1dpdGhLZXkgPSB7IHBhZ2UsIGRhdGE6IGNodW5rIH07IC8vIEFkZCBhIGtleS12YWx1ZSBwYWlyIHRvIHRoZSBjaHVua1xuICAgIGdyb3VwZWRBcnJheXMucHVzaChjaHVua1dpdGhLZXkpO1xuICB9XG5cbiAgcmV0dXJuIGdyb3VwZWRBcnJheXM7XG59XG5cbmZ1bmN0aW9uIGdyb3VwQnlDYXRlZ29yeShkYXRhID0gW10pIHtcbiAgaWYgKCFkYXRhPy5sZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGl0ZW0uYXR0cmlidXRlcztcbiAgICBjb25zdCBjYXRlZ29yeSA9IGF0dHJpYnV0ZXM/LmNhdGVnb3J5Py5kYXRhPy5hdHRyaWJ1dGVzPy5uYW1lO1xuICAgIGNvbnN0IHRodW1uYWlsID0gYXR0cmlidXRlcz8udGh1bW5haWw/LmRhdGE/LmF0dHJpYnV0ZXM7XG4gICAgY29uc3QgdGFncyA9IGF0dHJpYnV0ZXM/LnRhZ3M/LmRhdGE/Lm1hcD8uKCh0YWcpID0+IHtcbiAgICAgIHJldHVybiB0YWc/LmF0dHJpYnV0ZXM/Lm5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYXR0cmlidXRlcyxcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgdGFncyxcbiAgICAgIHRodW1uYWlsLFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gXy5tYXAoXG4gICAgXy5ncm91cEJ5KGZvcm1hdHRlZERhdGEsIChibG9nKSA9PiBibG9nLmNhdGVnb3J5KSxcbiAgICAoYmxvZ3MsIGNhdGVnb3J5KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBleHBlcnQ6IGNhdGVnb3J5LFxuICAgICAgICBpdGVtczogYmxvZ3MsXG4gICAgICB9O1xuICAgIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ3JvdXBCeUNhdGVnb3J5UGFnZWQoZGF0YSA9IFtdKSB7XG4gIGlmICghZGF0YT8ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBpdGVtLmF0dHJpYnV0ZXM7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBhdHRyaWJ1dGVzPy5jYXRlZ29yeT8uZGF0YT8uYXR0cmlidXRlcz8ubmFtZTtcbiAgICBjb25zdCB0aHVtbmFpbCA9IGF0dHJpYnV0ZXM/LnRodW1uYWlsPy5kYXRhPy5hdHRyaWJ1dGVzO1xuICAgIGNvbnN0IHRhZ3MgPSBhdHRyaWJ1dGVzPy50YWdzPy5kYXRhPy5tYXA/LigodGFnKSA9PiB7XG4gICAgICByZXR1cm4gdGFnPy5hdHRyaWJ1dGVzPy5uYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmF0dHJpYnV0ZXMsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIHRhZ3MsXG4gICAgICB0aHVtbmFpbCxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIF8ubWFwKFxuICAgIF8uZ3JvdXBCeShmb3JtYXR0ZWREYXRhLCAoYmxvZykgPT4gYmxvZy5jYXRlZ29yeSksXG4gICAgKGJsb2dzLCBjYXRlZ29yeSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXhwZXJ0OiBjYXRlZ29yeSxcbiAgICAgICAgaXRlbXM6IGdyb3VwQXJyYXlJbnRvQ2h1bmtzV2l0aEtleXMoYmxvZ3MpLFxuICAgICAgfTtcbiAgICB9XG4gICk7XG59XG5cbmNvbnN0IEJsb2cgPSAoe1xuICBibG9ncyxcbiAgYWxsQmxvZ3MsXG4gIHBhZ2VkQWxsQmxvZ3MsXG4gIHBhZ2VkQmxvZ3MsXG59KSA9PiB7XG4gIGNvbnN0IHNlbyA9IHtcbiAgICBtZXRhVGl0bGU6IFwiRGlzY292ZXIgVXAtVG8tRGF0ZSBUZWNobm9sb2d5IEJsb2dzIHwgUmVsaWEgU29mdHdhcmVcIixcbiAgICBtZXRhRGVzY3JpcHRpb246XG4gICAgICBcIldpdGggdGhlIHJhcGlkIHBhY2UgYXQgd2hpY2ggdGVjaG5vbG9neSBpcyBkZXZlbG9waW5nIGFuZCBuZXcgdHJlbmRzIGFwcGVhcmluZyBpbiB0aGUgaW5kdXN0cnksIGl0IGlzIHZpdGFsIHRvIHVwZGF0ZSB5b3VyIGtub3dsZWRnZSByZWd1bGFybHkuIFZpc2l0IG91ciB1cC10by1kYXRlIHRlY2ggYmxvZ3MhXCIsXG4gICAgc2hhcmVJbWFnZTogb2dwSW1hZ2UsXG4gICAgYXJ0aWNsZTogdHJ1ZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8U2VvIHNlbz17c2VvfSAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb19fYmdfZWxsaXBzZV8xfT5cbiAgICAgICAgICA8RXhwb3J0ZWRJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9uZXctcmVsaWEvYmFja2dyb3VuZC9zZXJ2aWNlcy9zZXJ2aWNlLWVsbGlwc2UtMS5wbmdcIlxuICAgICAgICAgICAgd2lkdGg9ezM3Nn1cbiAgICAgICAgICAgIGhlaWdodD17NTY0fVxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cbiAgICAgICAgICAgIGFsdD1cImJnIHNlcnZpY2UgZWxsaXBzZSAxXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvX19iZ19lbGxpcHNlXzJ9PlxuICAgICAgICAgIDxFeHBvcnRlZEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL25ldy1yZWxpYS9iYWNrZ3JvdW5kL3NlcnZpY2VzL3NlcnZpY2UtZWxsaXBzZS0yLnBuZ1wiXG4gICAgICAgICAgICB3aWR0aD17NDc2fVxuICAgICAgICAgICAgaGVpZ2h0PXs2NjR9XG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgIHByaW9yaXR5PXt0cnVlfVxuICAgICAgICAgICAgYWx0PVwiYmcgc2VydmljZSBlbGxpcHNlIDJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCAke1wiY29udGFpbmVyXCJ9ICR7c3R5bGVzLmhlcm9fX2NvbnRhaW5lcn1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9fX2hlYWRlcl9ib3h9PlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvX190b3BfaGVhZGVyfT5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9fX3RvcF9oZWFkZXJfX2hlYWRpbmd9PkJsb2c8L2gxPlxuICAgICAgICAgICAgICA8cD5XZSBzaGFyZSBhbmQgcmV2aWV3IGluc3ByaXJpbmcgY29udGVudDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxCbG9nTWFpblxuICAgICAgICBleHBlcnRpc2VzPXtibG9nc31cbiAgICAgICAgYmxvZ3M9e2FsbEJsb2dzfVxuICAgICAgICB0b3RhbEJsb2dzRGF0YT17dG90YWxCbG9nc0RhdGF9XG4gICAgICAgIHBhZ2VkQmxvZ3M9e3BhZ2VkQmxvZ3N9XG4gICAgICAgIHBhZ2VkQWxsQmxvZ3M9e3BhZ2VkQWxsQmxvZ3N9XG4gICAgICAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGJsb2dzID0gYXdhaXQgZmV0Y2hBUEkoXG4gICAgXCJibG9ncz9wYWdpbmF0aW9uW3BhZ2VTaXplXT0xMDAwJnBhZ2luYXRpb25bcGFnZV09MSZwb3B1bGF0ZT0qJnNvcnRbMF09cHVibGlzaGVkQXQ6REVTQ1wiXG4gICk7XG5cbiAgY29uc3QgZGF0YSA9IGJsb2dzPy5kYXRhID8/IFtdO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogeyBibG9nczogW10gfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgYmxvZ3NEYXRhID0gZ3JvdXBCeUNhdGVnb3J5KGRhdGEpO1xuICBjb25zdCBwYWdlZEJsb2dzID0gZ3JvdXBCeUNhdGVnb3J5UGFnZWQoZGF0YSk7XG4gIGNvbnN0IHBhZ2VkQWxsQmxvZ3MgPSBncm91cEFycmF5SW50b0NodW5rc1dpdGhLZXlzKGRhdGEpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBibG9nczogYmxvZ3NEYXRhLFxuICAgICAgdG90YWwsXG4gICAgICBhbGxCbG9nczogZGF0YSxcbiAgICAgIHBhZ2VkQmxvZ3MsXG4gICAgICBwYWdlZEFsbEJsb2dzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiU2VvIiwiRXhwb3J0ZWRJbWFnZSIsIkJsb2dNYWluIiwib2dwSW1hZ2UiLCJzdHlsZXMiLCJCbG9nIiwiYmxvZ3MiLCJhbGxCbG9ncyIsInBhZ2VkQWxsQmxvZ3MiLCJwYWdlZEJsb2dzIiwic2VvIiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwic2hhcmVJbWFnZSIsImFydGljbGUiLCJoZXJvIiwiaGVyb19fYmdfZWxsaXBzZV8xIiwiaGVyb19fYmdfZWxsaXBzZV8yIiwiaGVyb19fY29udGFpbmVyIiwiaGVyb19faGVhZGVyX2JveCIsImhlcm9fX3RvcF9oZWFkZXIiLCJoZXJvX190b3BfaGVhZGVyX19oZWFkaW5nIiwidG90YWxCbG9nc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/index.js\n"));

/***/ })

});