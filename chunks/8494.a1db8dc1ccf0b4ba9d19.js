"use strict";
(self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([[8494],{

/***/ 78494:
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

// src/basic-languages/scheme/scheme.ts
var conf = {
  comments: {
    lineComment: ";",
    blockComment: ["#|", "|#"]
  },
  brackets: [
    ["(", ")"],
    ["{", "}"],
    ["[", "]"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' }
  ]
};
var language = {
  defaultToken: "",
  ignoreCase: true,
  tokenPostfix: ".scheme",
  brackets: [
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.square" }
  ],
  keywords: [
    "case",
    "do",
    "let",
    "loop",
    "if",
    "else",
    "when",
    "cons",
    "car",
    "cdr",
    "cond",
    "lambda",
    "lambda*",
    "syntax-rules",
    "format",
    "set!",
    "quote",
    "eval",
    "append",
    "list",
    "list?",
    "member?",
    "load"
  ],
  constants: ["#t", "#f"],
  operators: ["eq?", "eqv?", "equal?", "and", "or", "not", "null?"],
  tokenizer: {
    root: [
      [/#[xXoObB][0-9a-fA-F]+/, "number.hex"],
      [/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?/, "number.float"],
      [
        /(?:\b(?:(define|define-syntax|define-macro))\b)(\s+)((?:\w|\-|\!|\?)*)/,
        ["keyword", "white", "variable"]
      ],
      { include: "@whitespace" },
      { include: "@strings" },
      [
        /[a-zA-Z_#][a-zA-Z0-9_\-\?\!\*]*/,
        {
          cases: {
            "@keywords": "keyword",
            "@constants": "constant",
            "@operators": "operators",
            "@default": "identifier"
          }
        }
      ]
    ],
    comment: [
      [/[^\|#]+/, "comment"],
      [/#\|/, "comment", "@push"],
      [/\|#/, "comment", "@pop"],
      [/[\|#]/, "comment"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/#\|/, "comment", "@comment"],
      [/;.*$/, "comment"]
    ],
    strings: [
      [/"$/, "string", "@popall"],
      [/"(?=.)/, "string", "@multiLineString"]
    ],
    multiLineString: [
      [/[^\\"]+$/, "string", "@popall"],
      [/[^\\"]+/, "string"],
      [/\\./, "string.escape"],
      [/"/, "string", "@popall"],
      [/\\$/, "string"]
    ]
  }
};



/***/ })

}]);
//# sourceMappingURL=8494.a1db8dc1ccf0b4ba9d19.js.map