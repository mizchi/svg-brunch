(function() {
  "use strict";
  var HTMLCompiler;

  HTMLCompiler = require("../../lib/html-brunch.js");

  exports.HTMLCompilerTest = {
    "Do nothing": function(test) {
      var compiler, content;
      content = "<!DOCTYPE HTML>\n<html>\n<body class=\"body\">\n<h1>Hello</h1>\n</body>\n</html>";
      compiler = new HTMLCompiler;
      return compiler.compile(content, 'file.html', function(error, data) {
        var expected;
        test.ok(!error);
        expected = ["module.exports = function() { return ", "\"<!DOCTYPE HTML>\\n<html>\\n<body class=\\\"body\\\">\\n<h1>Hello</h1>\\n</body>\\n</html>\";", "};"].join("");
        console.log(data);
        console.log(expected);
        test.equal(data, expected);
        return test.done();
      });
    }
  };

}).call(this);
