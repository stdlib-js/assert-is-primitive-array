// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,e;n=this,e=function(){"use strict";var n=Math.floor,e=function(e){return n(e)===e},t=function(n){return null!=n&&"function"!=typeof n&&"number"==typeof n.length&&e(n.length)&&n.length>=0&&n.length<=4294967295};return function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(e){var r,o;if(!t(e))return!1;if(0===(r=e.length))return!1;for(o=0;o<r;o++)if(!1===n(e[o]))return!1;return!0}}((function(n){var e=typeof n;return"string"===e||"number"===e||"boolean"===e||"symbol"===e||"bigint"===e||null==n}))},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self).isPrimitiveArray=e();
//# sourceMappingURL=index.js.map
