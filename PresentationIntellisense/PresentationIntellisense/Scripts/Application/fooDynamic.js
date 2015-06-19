var dynamicfoo = window.dynamicfoo || {};
dynamicfoo.getFoo = function (fooName) {
  if(fooName === "bob") {
    return {
      name: "Bob",
      type: "module"
    };
  } else {
    return {
      unknown: true
    };
  }
}