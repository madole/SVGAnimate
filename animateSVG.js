function _drawMadole() {
  var opts, svg;
  opts = {
    selector: '#madole',
    duration: '6000'
  };
  svg = new Walkway(opts);
  svg.draw();
}

function _drawHead() {
  var opts, svg;
  opts = {
    selector: '#pic',
    duration: '9000'
  };
  svg = new Walkway(opts);
  svg.draw();
}
_drawHead();
_drawMadole();
