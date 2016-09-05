var PluginBuilder = require("bit-plugin-builder");
var babelCore = require("babel-core");
var utils = require("belty");

var defaults = {
  extensions: ["js", "jsx"],
  ignores: {
    path: /\/node_modules\//
  }
};

function factory(options) {
  var settings = options || {};

  var babelOptions = utils.extend({
    presets: ["es2015"]
  }, settings.options);

  function transform(moduleMeta) {
    var transpiled = (settings.core || babelCore).transform(moduleMeta.source, babelOptions);

    return {
      source: transpiled.code
    };
  }

  return PluginBuilder
    .create(defaults)
    .configure({
      transform: transform
    })
    .configure(settings)
    .build();
}

module.exports = factory;
