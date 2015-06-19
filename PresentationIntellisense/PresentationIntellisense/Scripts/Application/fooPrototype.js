function Vehicle() {
  this.drive = function () {
    ///<summary>Go Forward</summary>
  }
}

Car.prototype = new Vehicle();
function Car() {
  ///<field name="brand" type="String">What brand of car</field>
  this.wheels = 4;
  this.brand = "Mazda";
  this.shift = function (gear) {
    ///<summary>Do some shifting</summary>
  }
}

Car.prototype.applyBreaks = function () {
  ///<summary>Apply the breaks</summary>
}