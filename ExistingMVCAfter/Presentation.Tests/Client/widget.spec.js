describe('widget#doWork', function () {

  it('should return 5', function () {

    var response = widget.doWork(100);

    if (response !== 100) {
      throw "Expected 100 but got " + response;
    }
  });
});