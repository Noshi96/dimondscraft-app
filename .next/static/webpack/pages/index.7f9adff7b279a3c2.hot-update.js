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

/***/ "./features/Footer/components/NavigationMenu.tsx":
/*!*******************************************************!*\
  !*** ./features/Footer/components/NavigationMenu.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var A_javascript_Projects_dimondscraftV3_dimondscraft_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/breakpoints */ \"./styles/breakpoints.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"A:\\\\javascript\\\\Projects\\\\dimondscraftV3\\\\dimondscraft-app\\\\features\\\\Footer\\\\components\\\\NavigationMenu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _templateObject;\n\n\n\n\n\n\n\nvar NavigationMenu = function NavigationMenu() {\n  _s();\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),\n      asPath = _useRouter.asPath;\n\n  var smoothNavigate = function smoothNavigate() {\n    setTimeout(function () {\n      var element = document.getElementById('entryPageEndHook');\n      element.scrollIntoView({\n        behavior: 'smooth',\n        block: 'start',\n        inline: 'start'\n      });\n    }, 300);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NavigationWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LinksColumn, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NavLinkStyled, {\n          path: asPath,\n          target: '/',\n          href: '/',\n          onClick: smoothNavigate,\n          children: [' ', 'Strona główna'.toUpperCase(), ' ']\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LinksColumn, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NavLinkStyled, {\n          path: asPath,\n          target: '/about',\n          href: '/about',\n          onClick: smoothNavigate,\n          children: [' ', 'O nas'.toUpperCase(), ' ']\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LinksColumn, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NavLinkStyled, {\n          path: asPath,\n          target: '/gallery',\n          href: '/gallery',\n          onClick: smoothNavigate,\n          children: [' ', 'Galeria'.toUpperCase(), ' ']\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LinksColumn, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NavLinkStyled, {\n          path: asPath,\n          target: '/contact',\n          href: '/contact',\n          onClick: smoothNavigate,\n          children: [' ', 'Kontakt'.toUpperCase(), ' ']\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NavigationMenu, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = NavigationMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationMenu);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"NavigationMenu__Container\",\n  componentId: \"sc-pxsor6-0\"\n})([\"display:flex;align-items:flex-start;justify-content:flex-start;color:#ffffff;margin-bottom:1rem;\"]);\n_c2 = Container;\nvar NavigationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"NavigationMenu__NavigationWrapper\",\n  componentId: \"sc-pxsor6-1\"\n})([\"display:flex;align-items:flex-start;justify-content:flex-start;flex-wrap:wrap;gap:1rem 1rem;@media only screen and (\", \"){margin:8rem 0 0 0;}\"], _styles_breakpoints__WEBPACK_IMPORTED_MODULE_1__.Layout.laptop);\n_c3 = NavigationWrapper;\nvar LinksColumn = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"NavigationMenu__LinksColumn\",\n  componentId: \"sc-pxsor6-2\"\n})([\"display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;gap:1rem;\"]);\n_c4 = LinksColumn;\nvar NavLinkStyled = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((next_link__WEBPACK_IMPORTED_MODULE_2___default())).withConfig({\n  displayName: \"NavigationMenu__NavLinkStyled\",\n  componentId: \"sc-pxsor6-3\"\n})([\"background:transparent;color:#aeaeae;border:transparent;cursor:pointer;transition:all 0.3s ease-in-out;font-size:1.2rem;box-sizing:border-box;padding:6px 8px;&:visited{color:#aeaeae;}\", \" &:hover{background:#ffffff11;}\"], function (_ref) {\n  var target = _ref.target,\n      path = _ref.path;\n  return target === path && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(_templateObject || (_templateObject = (0,A_javascript_Projects_dimondscraftV3_dimondscraft_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      background: #ffffff !important;\\n      &:visited {\\n        color: #22192f;\\n      }\\n    \"])));\n});\n_c5 = NavLinkStyled;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"NavigationMenu\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"NavigationWrapper\");\n$RefreshReg$(_c4, \"LinksColumn\");\n$RefreshReg$(_c5, \"NavLinkStyled\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9Gb290ZXIvY29tcG9uZW50cy9OYXZpZ2F0aW9uTWVudS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBT0EsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0VBQUE7O0VBQzNCLGlCQUFtQkQsc0RBQVMsRUFBNUI7RUFBQSxJQUFRRSxNQUFSLGNBQVFBLE1BQVI7O0VBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0lBQzNCQyxVQUFVLENBQUMsWUFBTTtNQUNmLElBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUFoQjtNQUNBRixPQUFPLENBQUNHLGNBQVIsQ0FBdUI7UUFDckJDLFFBQVEsRUFBRSxRQURXO1FBRXJCQyxLQUFLLEVBQUUsT0FGYztRQUdyQkMsTUFBTSxFQUFFO01BSGEsQ0FBdkI7SUFLRCxDQVBTLEVBT1AsR0FQTyxDQUFWO0VBUUQsQ0FURDs7RUFXQSxvQkFDRSw4REFBQyxTQUFEO0lBQUEsdUJBQ0UsOERBQUMsaUJBQUQ7TUFBQSx3QkFDRSw4REFBQyxXQUFEO1FBQUEsdUJBQ0UsOERBQUMsYUFBRDtVQUNFLElBQUksRUFBRVQsTUFEUjtVQUVFLE1BQU0sRUFBRSxHQUZWO1VBR0UsSUFBSSxFQUFFLEdBSFI7VUFJRSxPQUFPLEVBQUVDLGNBSlg7VUFBQSxXQU1HLEdBTkgsRUFPRyxnQkFBZ0JTLFdBQWhCLEVBUEgsRUFPa0MsR0FQbEM7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGLGVBWUUsOERBQUMsV0FBRDtRQUFBLHVCQUNFLDhEQUFDLGFBQUQ7VUFDRSxJQUFJLEVBQUVWLE1BRFI7VUFFRSxNQUFNLEVBQUUsUUFGVjtVQUdFLElBQUksRUFBRSxRQUhSO1VBSUUsT0FBTyxFQUFFQyxjQUpYO1VBQUEsV0FNRyxHQU5ILEVBT0csUUFBUVMsV0FBUixFQVBILEVBTzBCLEdBUDFCO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FaRixlQXVCRSw4REFBQyxXQUFEO1FBQUEsdUJBQ0UsOERBQUMsYUFBRDtVQUNFLElBQUksRUFBRVYsTUFEUjtVQUVFLE1BQU0sRUFBRSxVQUZWO1VBR0UsSUFBSSxFQUFFLFVBSFI7VUFJRSxPQUFPLEVBQUVDLGNBSlg7VUFBQSxXQU1HLEdBTkgsRUFPRyxVQUFVUyxXQUFWLEVBUEgsRUFPNEIsR0FQNUI7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQXZCRixlQWtDRSw4REFBQyxXQUFEO1FBQUEsdUJBQ0UsOERBQUMsYUFBRDtVQUNFLElBQUksRUFBRVYsTUFEUjtVQUVFLE1BQU0sRUFBRSxVQUZWO1VBR0UsSUFBSSxFQUFFLFVBSFI7VUFJRSxPQUFPLEVBQUVDLGNBSlg7VUFBQSxXQU1HLEdBTkgsRUFPRyxVQUFVUyxXQUFWLEVBUEgsRUFPNEIsR0FQNUI7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQWxDRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFrREQsQ0FoRUQ7O0dBQU1YO1VBQ2VEOzs7S0FEZkM7QUFrRU4sK0RBQWVBLGNBQWY7QUFFQSxJQUFNWSxTQUFTLEdBQUdqQix3RUFBSDtFQUFBO0VBQUE7QUFBQSx3R0FBZjtNQUFNaUI7QUFRTixJQUFNRSxpQkFBaUIsR0FBR25CLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHNKQU9LRSw4REFQTCxDQUF2QjtNQUFNaUI7QUFZTixJQUFNRSxXQUFXLEdBQUdyQix3RUFBSDtFQUFBO0VBQUE7QUFBQSxzR0FBakI7TUFBTXFCO0FBUU4sSUFBTUMsYUFBYSxHQUFHdEIsNkRBQU0sQ0FBQ0csa0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSxtT0FjZjtFQUFBLElBQUdvQixNQUFILFFBQUdBLE1BQUg7RUFBQSxJQUFXQyxJQUFYLFFBQVdBLElBQVg7RUFBQSxPQUNBRCxNQUFNLEtBQUtDLElBQVgsSUFDQXZCLHNEQURBLHFVQURBO0FBQUEsQ0FkZSxDQUFuQjtNQUFNcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmVhdHVyZXMvRm9vdGVyL2NvbXBvbmVudHMvTmF2aWdhdGlvbk1lbnUudHN4PzgxMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2JyZWFrcG9pbnRzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW50ZXJmYWNlIEFjdGl2ZUxpbmsge1xyXG4gIHBhdGg6IHN0cmluZ1xyXG4gIHRhcmdldDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IE5hdmlnYXRpb25NZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBzbW9vdGhOYXZpZ2F0ZSA9ICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJ5UGFnZUVuZEhvb2snKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgYmxvY2s6ICdzdGFydCcsXHJcbiAgICAgICAgaW5saW5lOiAnc3RhcnQnLFxyXG4gICAgICB9KVxyXG4gICAgfSwgMzAwKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxOYXZpZ2F0aW9uV3JhcHBlcj5cclxuICAgICAgICA8TGlua3NDb2x1bW4+XHJcbiAgICAgICAgICA8TmF2TGlua1N0eWxlZFxyXG4gICAgICAgICAgICBwYXRoPXthc1BhdGh9XHJcbiAgICAgICAgICAgIHRhcmdldD17Jy8nfVxyXG4gICAgICAgICAgICBocmVmPXsnLyd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Ntb290aE5hdmlnYXRlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICB7J1N0cm9uYSBnxYLDs3duYScudG9VcHBlckNhc2UoKX17JyAnfVxyXG4gICAgICAgICAgPC9OYXZMaW5rU3R5bGVkPlxyXG4gICAgICAgIDwvTGlua3NDb2x1bW4+XHJcbiAgICAgICAgPExpbmtzQ29sdW1uPlxyXG4gICAgICAgICAgPE5hdkxpbmtTdHlsZWRcclxuICAgICAgICAgICAgcGF0aD17YXNQYXRofVxyXG4gICAgICAgICAgICB0YXJnZXQ9eycvYWJvdXQnfVxyXG4gICAgICAgICAgICBocmVmPXsnL2Fib3V0J31cclxuICAgICAgICAgICAgb25DbGljaz17c21vb3RoTmF2aWdhdGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIHsnTyBuYXMnLnRvVXBwZXJDYXNlKCl9eycgJ31cclxuICAgICAgICAgIDwvTmF2TGlua1N0eWxlZD5cclxuICAgICAgICA8L0xpbmtzQ29sdW1uPlxyXG4gICAgICAgIDxMaW5rc0NvbHVtbj5cclxuICAgICAgICAgIDxOYXZMaW5rU3R5bGVkXHJcbiAgICAgICAgICAgIHBhdGg9e2FzUGF0aH1cclxuICAgICAgICAgICAgdGFyZ2V0PXsnL2dhbGxlcnknfVxyXG4gICAgICAgICAgICBocmVmPXsnL2dhbGxlcnknfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtzbW9vdGhOYXZpZ2F0ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgeydHYWxlcmlhJy50b1VwcGVyQ2FzZSgpfXsnICd9XHJcbiAgICAgICAgICA8L05hdkxpbmtTdHlsZWQ+XHJcbiAgICAgICAgPC9MaW5rc0NvbHVtbj5cclxuICAgICAgICA8TGlua3NDb2x1bW4+XHJcbiAgICAgICAgICA8TmF2TGlua1N0eWxlZFxyXG4gICAgICAgICAgICBwYXRoPXthc1BhdGh9XHJcbiAgICAgICAgICAgIHRhcmdldD17Jy9jb250YWN0J31cclxuICAgICAgICAgICAgaHJlZj17Jy9jb250YWN0J31cclxuICAgICAgICAgICAgb25DbGljaz17c21vb3RoTmF2aWdhdGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIHsnS29udGFrdCcudG9VcHBlckNhc2UoKX17JyAnfVxyXG4gICAgICAgICAgPC9OYXZMaW5rU3R5bGVkPlxyXG4gICAgICAgIDwvTGlua3NDb2x1bW4+XHJcbiAgICAgIDwvTmF2aWdhdGlvbldyYXBwZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25NZW51XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbmBcclxuXHJcbmNvbnN0IE5hdmlnYXRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxcmVtIDFyZW07XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCR7TGF5b3V0LmxhcHRvcH0pIHtcclxuICAgIG1hcmdpbjogOHJlbSAwIDAgMDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IExpbmtzQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxuYFxyXG5cclxuY29uc3QgTmF2TGlua1N0eWxlZCA9IHN0eWxlZChMaW5rKTxBY3RpdmVMaW5rPmBcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2FlYWVhZTtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDZweCA4cHg7XHJcblxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogI2FlYWVhZTtcclxuICB9XHJcblxyXG4gICR7KHsgdGFyZ2V0LCBwYXRoIH0pID0+XHJcbiAgICB0YXJnZXQgPT09IHBhdGggJiZcclxuICAgIGNzc2BcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAmOnZpc2l0ZWQge1xyXG4gICAgICAgIGNvbG9yOiAjMjIxOTJmO1xyXG4gICAgICB9XHJcbiAgICBgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYxMTtcclxuICB9XHJcbmBcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsIkxheW91dCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJOYXZpZ2F0aW9uTWVudSIsImFzUGF0aCIsInNtb290aE5hdmlnYXRlIiwic2V0VGltZW91dCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwidG9VcHBlckNhc2UiLCJDb250YWluZXIiLCJkaXYiLCJOYXZpZ2F0aW9uV3JhcHBlciIsImxhcHRvcCIsIkxpbmtzQ29sdW1uIiwiTmF2TGlua1N0eWxlZCIsInRhcmdldCIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./features/Footer/components/NavigationMenu.tsx\n"));

/***/ })

});