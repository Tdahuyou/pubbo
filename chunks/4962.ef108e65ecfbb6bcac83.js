"use strict";
(self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([[4962],{

/***/ 44962:
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

// src/basic-languages/sb/sb.ts
var conf = {
  comments: {
    lineComment: "'"
  },
  brackets: [
    ["(", ")"],
    ["[", "]"],
    ["If", "EndIf"],
    ["While", "EndWhile"],
    ["For", "EndFor"],
    ["Sub", "EndSub"]
  ],
  autoClosingPairs: [
    { open: '"', close: '"', notIn: ["string", "comment"] },
    { open: "(", close: ")", notIn: ["string", "comment"] },
    { open: "[", close: "]", notIn: ["string", "comment"] }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".sb",
  ignoreCase: true,
  brackets: [
    { token: "delimiter.array", open: "[", close: "]" },
    { token: "delimiter.parenthesis", open: "(", close: ")" },
    { token: "keyword.tag-if", open: "If", close: "EndIf" },
    { token: "keyword.tag-while", open: "While", close: "EndWhile" },
    { token: "keyword.tag-for", open: "For", close: "EndFor" },
    { token: "keyword.tag-sub", open: "Sub", close: "EndSub" }
  ],
  keywords: [
    "Else",
    "ElseIf",
    "EndFor",
    "EndIf",
    "EndSub",
    "EndWhile",
    "For",
    "Goto",
    "If",
    "Step",
    "Sub",
    "Then",
    "To",
    "While"
  ],
  tagwords: ["If", "Sub", "While", "For"],
  operators: [">", "<", "<>", "<=", ">=", "And", "Or", "+", "-", "*", "/", "="],
  identifier: /[a-zA-Z_][\w]*/,
  symbols: /[=><:+\-*\/%\.,]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  tokenizer: {
    root: [
      { include: "@whitespace" },
      [/(@identifier)(?=[.])/, "type"],
      [
        /@identifier/,
        {
          cases: {
            "@keywords": { token: "keyword.$0" },
            "@operators": "operator",
            "@default": "variable.name"
          }
        }
      ],
      [
        /([.])(@identifier)/,
        {
          cases: {
            $2: ["delimiter", "type.member"],
            "@default": ""
          }
        }
      ],
      [/\d*\.\d+/, "number.float"],
      [/\d+/, "number"],
      [/[()\[\]]/, "@brackets"],
      [
        /@symbols/,
        {
          cases: {
            "@operators": "operator",
            "@default": "delimiter"
          }
        }
      ],
      [/"([^"\\]|\\.)*$/, "string.invalid"],
      [/"/, "string", "@string"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, ""],
      [/(\').*$/, "comment"]
    ],
    string: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/"C?/, "string", "@pop"]
    ]
  }
};



/***/ })

}]);
//# sourceMappingURL=4962.ef108e65ecfbb6bcac83.js.map