(function () {

  function drawMadole() {
    var opts, svg;
    opts = {
      selector: '#madole',
      duration: '6000'
    };
    svg = new Walkway(opts);
    svg.draw();
  }

  function drawHead() {
    var opts, svg;
    opts = {
      selector: '#pic',
      duration: '9000'
    };
    svg = new Walkway(opts);
    svg.draw();
  }

  drawHead();
  drawMadole();

})();
