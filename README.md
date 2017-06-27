# bit-loader-babel
[babel](https://babeljs.io/) plugin for bit loader.

# Examples

## simple bit-bundler setup. This will pick up you .babelrc config files.

``` javascript
var Bitbundler = require("bit-bundler");

var bitbundler = new Bitbundler({
  loader: [
    "bit-loader-babel"
  ]
})
```

## configuring a different babel core

bit-loader-babel uses the babel-core module to transpile your code, and it ships with one by default. You can override the babel-core module that bit-loader-babel uses if you need newer/older/specific versions of babel.

``` javascript
var Bitbundler = require("bit-bundler");
var babelCore = require("babel-core");

var bitbundler = new Bitbundler({
  loader: [
    ["bit-loader-babel", {
      core: babelCore,
    }]
  }
})
```

# License

License under MIT
