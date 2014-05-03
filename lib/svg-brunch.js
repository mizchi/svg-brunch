(function() {
  "use strict";
  var SVGCompiler;

  module.exports = SVGCompiler = (function() {
    SVGCompiler.prototype.brunchPlugin = true;

    SVGCompiler.prototype.type = 'template';

    SVGCompiler.prototype.extension = 'svg';

    function SVGCompiler(config) {
      this.config = config;
      null;
    }

    SVGCompiler.prototype.compile = function(data, path, callback) {
      var d;
      d = JSON.stringify(data);
      return callback(null, "module.exports = function() { return " + d + ";};");
    };

    return SVGCompiler;

  })();

}).call(this);
