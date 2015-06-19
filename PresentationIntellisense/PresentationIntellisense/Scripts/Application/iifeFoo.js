//the foo module
var foospace = window.foospace || {};
foospace.foomod = function () {
  //This is an IIFE
  function bar() {

  }
  function baz() {

  }

  //Revealing module pattern
  return {
    bar: bar,
    baz: baz
  };
}();