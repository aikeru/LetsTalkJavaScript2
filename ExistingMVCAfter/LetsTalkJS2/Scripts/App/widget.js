var widget = function () {
  "use strict";

  function doWork(amount) {
    return amount;
  }

  function getSprocketCount() {
    return 20;
  }

  return {
    doWork: doWork,
    getSprocketCount: getSprocketCount
  };
}();
