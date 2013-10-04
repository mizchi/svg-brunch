"use strict"

HTMLCompiler = require("../../lib/html-brunch.js")

exports.HTMLCompilerTest =
  "Do nothing": (test) ->
    content = """
      <!DOCTYPE HTML>
      <html>
      <body class="body">
      <h1>Hello</h1>
      </body>
      </html>
    """
    compiler = new HTMLCompiler

    compiler.compile content, 'file.html', (error, data) ->
      test.ok not error
      expected = [
        "module.exports = function() { return "
        "\"<!DOCTYPE HTML>\\n<html>\\n<body class=\\\"body\\\">\\n<h1>Hello</h1>\\n</body>\\n</html>\";"
        "};"
      ].join ""
      console.log data
      console.log expected
      test.equal data, expected

      test.done()
