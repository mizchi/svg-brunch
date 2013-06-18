"use strict"

module.exports = class HTMLCompiler
  brunchPlugin : yes
  type         : 'template'
  extension    : 'html'

  constructor: (@config) ->
    null

  compile: (data, path, callback) ->
    d = data.replace(/\"/g, '\\\"').replace(/\n/g, '')
    callback null, "module.exports = function() { return \"#{d}\";};"
