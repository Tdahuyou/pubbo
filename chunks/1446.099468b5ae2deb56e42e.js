"use strict";
(self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([[1446],{

/***/ 21446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: () => (/* binding */ conf),
/* harmony export */   language: () => (/* binding */ language)
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/csp/csp.ts
var conf = {
  brackets: [],
  autoClosingPairs: [],
  surroundingPairs: []
};
var language = {
  keywords: [],
  typeKeywords: [],
  tokenPostfix: ".csp",
  operators: [],
  symbols: /[=><!~?:&|+\-*\/\^%]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  tokenizer: {
    root: [
      [/child-src/, "string.quote"],
      [/connect-src/, "string.quote"],
      [/default-src/, "string.quote"],
      [/font-src/, "string.quote"],
      [/frame-src/, "string.quote"],
      [/img-src/, "string.quote"],
      [/manifest-src/, "string.quote"],
      [/media-src/, "string.quote"],
      [/object-src/, "string.quote"],
      [/script-src/, "string.quote"],
      [/style-src/, "string.quote"],
      [/worker-src/, "string.quote"],
      [/base-uri/, "string.quote"],
      [/plugin-types/, "string.quote"],
      [/sandbox/, "string.quote"],
      [/disown-opener/, "string.quote"],
      [/form-action/, "string.quote"],
      [/frame-ancestors/, "string.quote"],
      [/report-uri/, "string.quote"],
      [/report-to/, "string.quote"],
      [/upgrade-insecure-requests/, "string.quote"],
      [/block-all-mixed-content/, "string.quote"],
      [/require-sri-for/, "string.quote"],
      [/reflected-xss/, "string.quote"],
      [/referrer/, "string.quote"],
      [/policy-uri/, "string.quote"],
      [/'self'/, "string.quote"],
      [/'unsafe-inline'/, "string.quote"],
      [/'unsafe-eval'/, "string.quote"],
      [/'strict-dynamic'/, "string.quote"],
      [/'unsafe-hashed-attributes'/, "string.quote"]
    ]
  }
};



/***/ })

}]);
//# sourceMappingURL=1446.099468b5ae2deb56e42e.js.map