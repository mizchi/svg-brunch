"use strict"

module.exports = class SVGCompiler
  brunchPlugin : yes
  type         : 'template'
  extension    : 'svg'

  constructor: (@config) ->
    null

  compile: (data, path, callback) ->
    d = JSON.stringify(data)
    callback null, "module.exports = function() { return #{d};};"
