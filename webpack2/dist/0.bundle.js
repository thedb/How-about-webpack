webpackJsonp([0],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (sum) {
  var a = 1,
      b = 2;
  return console.log(a + ' + ' + b + ' = ' + sum(a, b));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (a, b) {
  return a + b;
};

/***/ })

});