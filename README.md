# eslint-plugin-no-recursion [![Build Status](https://travis-ci.org/simon-andrews/eslint-plugin-no-recursion.svg?branch=master)](https://travis-ci.org/simon-andrews/eslint-plugin-no-recursion) [![npm](https://img.shields.io/npm/v/eslint-plugin-no-recursion)](https://www.npmjs.com/package/eslint-plugin-no-recursion)

An [ESLint](https://eslint.org/) plugin for disallowing recursion.

This plugin catches recursion in regular function declarations:
```javascript
function myFunction(i) {
  return myFunction(i); // error!
}
```
as well as recursive calls in function expressions and arrow expressions:
```javascript
let myFunction = function (i) {
  return myFunction(i); // error!
}
```
```javascript
let myFunction = i => myFunction(i); // error!
```

## Installation

```
npm install eslint-plugin-no-recursion
```

This plugin should work with ESLint version 3.0.0 and higher, and Node.js 8.0.0 and higher.

If you've installed ESLint globally, then you must install this plugin globally as well.

## Usage

In your ESLint configuration file, add "no-recursion" to your list of plugins and "no-recursion/no-recursion" to your list of rules. How you do this varies depending on what configuration file format you use. As an example, if you use JSON then your configuration file should look something like this:
```json
"plugins": [
  "no-recursion"
],
"rules": {
  "no-recursion/no-recursion": "error"
}
```
