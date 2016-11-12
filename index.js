var babelCore = require("babel-core");
var utils = require("belty");

var defaults = {
  extensions: ["js", "jsx"],
  ignores: {
    path: /\/node_modules\//
  }
};

function buildPlugin(options, builder) {
  var settings = options || {};

  var babelOptions = utils.extend({
    presets: ["es2015"]
  }, settings.options);

  function transform(moduleMeta) {
    var settings = utils.extend({ filename: moduleMeta.path }, babelOptions);
    var transpiled = (settings.core || babelCore).transform(moduleMeta.source, settings);

    return {
      source: transpiled.code
    };
  }

  return builder
    .configure(defaults)
    .configure({
      transform: transform
    })
    .configure(settings);
}

module.exports = function factory(options) {
  return function(builder) {
    return buildPlugin(options, builder);
  };
};
