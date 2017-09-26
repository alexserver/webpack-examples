'use strict';

// ES5, simple script
var lib = exports;

lib.square = function(x) {
  return x * x;
}

lib.cube = function(x) {
  return x * lib.square(x);
}