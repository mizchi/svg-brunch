(function() {
  "use strict";
  var HTMLCompiler;

  module.exports = HTMLCompiler = (function() {
    HTMLCompiler.prototype.brunchPlugin = true;

    HTMLCompiler.prototype.type = 'template';

    HTMLCompiler.prototype.extension = 'html';

    function HTMLCompiler(config) {
      this.config = config;
      null;
    }

    HTMLCompiler.prototype.compile = function(data, path, callback) {
      var d;
      d = JSON.stringify(data);
      return callback(null, "module.exports = function() { return " + d + ";};");
    };

    return HTMLCompiler;

  })();

}).call(this);
