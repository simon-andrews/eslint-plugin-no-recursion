"use strict";

var rule = require("../rules/no-recursion.js");
var RuleTester = require("eslint").RuleTester;

new RuleTester().run("no-recursion", rule, {

  valid: [
    {
      code: "function myDeclaration(i) { return i + 2; }"
    },
    {
      code: "var myExpression = function (i) { return i + 2; }"
    },
    {
      code: "var myArrow = i => i + 2",
      parserOptions: { ecmaVersion: 6 }
    }
  ],

  invalid: [
    {
      code: "function myDeclaration(i) { return myDeclaration(i + 2); }",
      errors: [ { message: "recursive function call" } ]
    },
    {
      code: "var myExpression = function (i) { return myExpression(i + 2); }",
      errors: [ { message: "recursive function call" } ]
    },
    {
      code: "var myArrow = i => myArrow(i + 2)",
      errors: [ { message: "recursive function call" } ],
      parserOptions: { ecmaVersion: 6 }
    }
  ]

});
