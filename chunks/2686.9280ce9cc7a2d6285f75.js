"use strict";
(self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([[2686],{

/***/ 32686:
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

// src/basic-languages/objective-c/objective-c.ts
var conf = {
  comments: {
    lineComment: "//",
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".objective-c",
  keywords: [
    "#import",
    "#include",
    "#define",
    "#else",
    "#endif",
    "#if",
    "#ifdef",
    "#ifndef",
    "#ident",
    "#undef",
    "@class",
    "@defs",
    "@dynamic",
    "@encode",
    "@end",
    "@implementation",
    "@interface",
    "@package",
    "@private",
    "@protected",
    "@property",
    "@protocol",
    "@public",
    "@selector",
    "@synthesize",
    "__declspec",
    "assign",
    "auto",
    "BOOL",
    "break",
    "bycopy",
    "byref",
    "case",
    "char",
    "Class",
    "const",
    "copy",
    "continue",
    "default",
    "do",
    "double",
    "else",
    "enum",
    "extern",
    "FALSE",
    "false",
    "float",
    "for",
    "goto",
    "if",
    "in",
    "int",
    "id",
    "inout",
    "IMP",
    "long",
    "nil",
    "nonatomic",
    "NULL",
    "oneway",
    "out",
    "private",
    "public",
    "protected",
    "readwrite",
    "readonly",
    "register",
    "return",
    "SEL",
    "self",
    "short",
    "signed",
    "sizeof",
    "static",
    "struct",
    "super",
    "switch",
    "typedef",
    "TRUE",
    "true",
    "union",
    "unsigned",
    "volatile",
    "void",
    "while"
  ],
  decpart: /\d(_?\d)*/,
  decimal: /0|@decpart/,
  tokenizer: {
    root: [
      { include: "@comments" },
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" },
      [/[,:;]/, "delimiter"],
      [/[{}\[\]()<>]/, "@brackets"],
      [
        /[a-zA-Z@#]\w*/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "identifier"
          }
        }
      ],
      [/[<>=\\+\\-\\*\\/\\^\\|\\~,]|and\\b|or\\b|not\\b]/, "operator"]
    ],
    whitespace: [[/\s+/, "white"]],
    comments: [
      ["\\/\\*", "comment", "@comment"],
      ["\\/\\/+.*", "comment"]
    ],
    comment: [
      ["\\*\\/", "comment", "@pop"],
      [".", "comment"]
    ],
    numbers: [
      [/0[xX][0-9a-fA-F]*(_?[0-9a-fA-F])*/, "number.hex"],
      [
        /@decimal((\.@decpart)?([eE][\-+]?@decpart)?)[fF]*/,
        {
          cases: {
            "(\\d)*": "number",
            $0: "number.float"
          }
        }
      ]
    ],
    strings: [
      [/'$/, "string.escape", "@popall"],
      [/'/, "string.escape", "@stringBody"],
      [/"$/, "string.escape", "@popall"],
      [/"/, "string.escape", "@dblStringBody"]
    ],
    stringBody: [
      [/[^\\']+$/, "string", "@popall"],
      [/[^\\']+/, "string"],
      [/\\./, "string"],
      [/'/, "string.escape", "@popall"],
      [/\\$/, "string"]
    ],
    dblStringBody: [
      [/[^\\"]+$/, "string", "@popall"],
      [/[^\\"]+/, "string"],
      [/\\./, "string"],
      [/"/, "string.escape", "@popall"],
      [/\\$/, "string"]
    ]
  }
};



/***/ })

}]);
//# sourceMappingURL=2686.9280ce9cc7a2d6285f75.js.map