# bit-loader-babel
[babel](https://babeljs.io/) plugin for bit loader. This allows you to configure babel and also specify a custom babel-core module.

# Examples

## simple bit-bundler setup

``` javascript
var Bitbundler = require("bit-bundler");
var babelPlugin = require("bit-loader-babel");

var bitbundler = new Bitbundler({
  loader: {
    plugins: [
      babelPlugin()
    ]
  }
})
```

## configuring babel preset

> By default, bit-loader-babel will configure the `es2015` preset.

``` javascript
var Bitbundler = require("bit-bundler");
var babelPlugin = require("bit-loader-babel");

var bitbundler = new Bitbundler({
  loader: {
    plugins: [
      babelPlugin({
        options: {
          presets: ["es2015", "react"]
        }
      })
    ]
  }
})
```

## configuring your own babel-core

``` javascript
var Bitbundler = require("bit-bundler");
var babelPlugin = require("bit-loader-babel");
var babelCore = require("babel-core");

var bitbundler = new Bitbundler({
  loader: {
    plugins: [
      babelPlugin({
        core: babelCore,
        options: {
          presets: ["es2015", "react"]
        }
      })
    ]
  }
})
```

# License

License under MIT
