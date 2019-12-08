"use strict";

function checkForRecursion(ancestor, node, context) {
  if (ancestor.id.name === node.callee.name) {
    context.report({
      node,
      message: "recursive function call"
    });
  }
}

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow recursion",
      category: "Possible Errors",
      recommended: false
    }
  },
  create: function (context) {
    return {
      CallExpression: function (node) {
        const ancestors = context.getAncestors();
        for (let i = 0; i < ancestors.length; ++i) {
          switch (ancestors[i].type) {
            case "FunctionDeclaration":
              checkForRecursion(ancestors[i], node, context);
              break;
            case "ArrowFunctionExpression":
            case "FunctionExpression":
              checkForRecursion(ancestors[i-1], node, context);
              break;
          }
        }
      }
    };
  }
};
