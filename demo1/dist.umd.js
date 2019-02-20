(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.umdResult = factory());
}(this, function () { 'use strict';

  function logHello() {
    console.log('hello rollup');
  }

  return logHello;

}));
